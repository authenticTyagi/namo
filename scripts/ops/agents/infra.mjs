// Backend and infra agent: is the site up, fast enough, correctly cached, with a
// valid certificate, a healthy database, and a green CI?

import tls from "node:tls";
import { SITE, finding, ghJson, get, opsStats, parseSitemapLocs, sample } from "../lib.mjs";

const CORE_PATHS = ["/en", "/hi", "/en/overview", "/en/editorials", "/en/india-in-the-world", "/en/search?q=gst", "/robots.txt", "/sitemap.xml", "/ads.txt"];

function certDaysLeft(host) {
  return new Promise((resolve) => {
    const socket = tls.connect({ host, port: 443, servername: host, timeout: 10000 }, () => {
      const cert = socket.getPeerCertificate();
      socket.end();
      resolve(cert?.valid_to ? Math.floor((new Date(cert.valid_to).getTime() - Date.now()) / 86400000) : null);
    });
    socket.on("error", () => resolve(null));
    socket.on("timeout", () => {
      socket.destroy();
      resolve(null);
    });
  });
}

export async function run() {
  const findings = [];
  const metrics = {};
  const notes = [];

  // 1. Core URLs
  const timings = {};
  for (const p of CORE_PATHS) {
    const res = await get(`${SITE}${p}`);
    timings[p] = res.totalMs;
    if (res.status !== 200) {
      findings.push(
        finding(p === "/ads.txt" ? "low" : "critical", "uptime", `${p} returned ${res.status || "no response"}`, {
          evidence: res.error,
          suggestion: "Check the latest Vercel deployment and function logs; roll back the last deploy if it regressed.",
        }),
      );
    } else if (res.totalMs > 5000) {
      findings.push(finding("medium", "latency", `${p} took ${res.totalMs} ms`, { suggestion: "Check Vercel function duration and Neon cold starts." }));
    }
  }
  metrics.timingsMs = timings;

  // 2. Health route and database
  const health = await get(`${SITE}/api/health`);
  try {
    const h = JSON.parse(health.body);
    if (!h.ok || !h.dbConfigured) findings.push(finding("critical", "database", "/api/health says the database is not configured", { evidence: health.body.slice(0, 200), suggestion: "Check DATABASE_URL in Vercel env vars and the Neon project status." }));
  } catch {
    findings.push(finding("critical", "uptime", `/api/health unreadable (status ${health.status})`, { evidence: health.error }));
  }

  // 3. Sitemap sample: every sampled URL must resolve (catches broken slugs, 404 after a content change).
  const sm = await get(`${SITE}/sitemap.xml`);
  const locs = parseSitemapLocs(sm.body);
  metrics.sitemapUrls = locs.length;
  if (locs.length === 0) findings.push(finding("high", "sitemap", "Sitemap has no URLs", { suggestion: "Check src/app/sitemap.ts and the database connection." }));
  const bad = [];
  for (const u of sample(locs, 20)) {
    const r = await get(u);
    if (r.status !== 200) bad.push(`${r.status || "ERR"} ${u}`);
  }
  if (bad.length) findings.push(finding("high", "sitemap", `${bad.length} of 20 sampled sitemap URLs are not 200`, { evidence: bad.slice(0, 6).join("; "), suggestion: "A slug may have been renamed or unpublished while still in the sitemap/ISR cache; revalidate or fix the data." }));

  // 4. Caching: a static page should be served from the edge on repeat visits.
  const entryUrl = locs.find((u) => /\/entry\//.test(u));
  if (entryUrl) {
    await get(entryUrl);
    const again = await get(entryUrl);
    const cache = again.headers.get("x-vercel-cache");
    metrics.entryCache = cache;
    if (cache && !/HIT|STALE/i.test(cache)) findings.push(finding("medium", "cache", `Entry page was not an edge cache hit on a repeat request (x-vercel-cache: ${cache})`, { evidence: entryUrl, suggestion: "Check the page is still SSG/ISR (no cookies() or headers() call in the render path)." }));
    if (!cache) notes.push("x-vercel-cache header absent, so the cache check was skipped (possibly not on Vercel).");
  }

  // 5. Certificate
  const host = new URL(SITE).hostname;
  const days = await certDaysLeft(host);
  metrics.certDaysLeft = days;
  if (days == null) notes.push("TLS certificate expiry could not be read.");
  else if (days < 14) findings.push(finding("high", "tls", `TLS certificate expires in ${days} days`, { suggestion: "Vercel renews automatically; check the domain's DNS and certificate status in Vercel." }));
  else if (days < 30) findings.push(finding("low", "tls", `TLS certificate expires in ${days} days`));

  // 6. CI and automation state
  const runs = await ghJson("/actions/runs?branch=master&per_page=20");
  if (runs?.workflow_runs) {
    const ci = runs.workflow_runs.filter((r) => r.name === "CI" && r.status === "completed");
    metrics.lastCi = ci[0]?.conclusion ?? null;
    if (ci[0] && ci[0].conclusion !== "success") findings.push(finding("high", "ci", `Latest CI run on master concluded "${ci[0].conclusion}"`, { evidence: ci[0].html_url, suggestion: "Open the run, fix the failing step, push." }));
    const codeql = runs.workflow_runs.filter((r) => /codeql/i.test(r.name) && r.status === "completed")[0];
    if (!codeql) notes.push("No completed CodeQL run seen in the last 20 runs.");
  } else {
    notes.push("GitHub API unavailable in this environment, so CI status was not checked.");
  }
  const prs = await ghJson("/pulls?state=open&per_page=50");
  if (Array.isArray(prs)) {
    metrics.openPrs = prs.length;
    const dep = prs.filter((p) => /dependabot/i.test(p.user?.login ?? ""));
    if (dep.length >= 5) findings.push(finding("low", "dependencies", `${dep.length} Dependabot PRs are open`, { suggestion: "Review and merge, or close those you do not want." }));
  }

  // 7. Database figures (needs CRON_SECRET)
  const { stats, reason } = await opsStats();
  if (stats) {
    metrics.dbMb = Math.round(stats.dbBytes / 1024 / 1024);
    metrics.opsStatsOk = true;
  } else {
    notes.push(reason);
    findings.push(finding("low", "database", "Database-level checks were skipped", { evidence: reason, suggestion: "Add the CRON_SECRET repository secret (same value as in Vercel) so the agents can read /api/pipeline/ops-stats." }));
  }

  notes.push("Checks: core URLs, health, 20 sampled sitemap URLs, edge cache on a repeat request, TLS expiry, latest CI result, Dependabot backlog, database reachability.");
  notes.push("Not covered: Vercel function logs and error rates, Neon metrics (no API credentials are given to agents), cron job health.");
  return { findings, metrics, notes };
}
