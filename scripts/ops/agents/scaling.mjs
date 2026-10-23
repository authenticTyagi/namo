// Scaling agent: how close are we to a limit, and how fast are we approaching
// it? Database size against a configured ceiling, growth since the last run,
// static page count (build time), and edge cache behaviour. Suggest only.

import { SITE, bytesToMb, finding, get, opsStats, parseSitemapLocs, pctChange, sample } from "../lib.mjs";

// Neon's free tier is 0.5 GB per project. Override with DB_LIMIT_MB for a paid plan.
const DB_LIMIT_MB = Number(process.env.DB_LIMIT_MB || 512);
const SITEMAP_WARN = 3000; // each URL is a prerendered page; builds slow down as this grows

export async function run({ previous } = {}) {
  const findings = [];
  const notes = [];
  const metrics = { at: new Date().toISOString() };

  const sm = await get(`${SITE}/sitemap.xml`);
  const locs = parseSitemapLocs(sm.body);
  metrics.sitemapUrls = locs.length;
  if (locs.length > SITEMAP_WARN) findings.push(finding("medium", "build", `${locs.length} sitemap URLs: static generation will lengthen builds`, { suggestion: "Move rarely visited pages to on-demand ISR (generateStaticParams returning a subset) before builds approach platform time limits." }));
  if (previous?.sitemapUrls) {
    const ch = pctChange(previous.sitemapUrls, locs.length);
    if (ch != null && ch > 40) findings.push(finding("low", "growth", `Sitemap grew ${ch}% since the last run (${previous.sitemapUrls} to ${locs.length})`));
  }

  // Edge cache: repeat the same URLs and count hits. A falling ratio means more origin load.
  let hits = 0;
  const sampled = sample(locs, 12);
  for (const u of sampled) await get(u);
  for (const u of sampled) {
    const r = await get(u);
    if (/HIT|STALE/i.test(r.headers.get("x-vercel-cache") ?? "")) hits++;
  }
  metrics.cacheHitRatio = sampled.length ? Math.round((hits / sampled.length) * 100) : null;
  if (metrics.cacheHitRatio != null && metrics.cacheHitRatio < 80) findings.push(finding("medium", "cache", `Only ${metrics.cacheHitRatio}% of sampled pages were edge cache hits on a repeat request`, { suggestion: "Find pages that opt out of caching (cookies(), headers(), searchParams in the render path)." }));

  const { stats, reason } = await opsStats();
  if (!stats) {
    notes.push(reason);
    findings.push(finding("low", "data", "Database growth could not be measured", { evidence: reason, suggestion: "Add the CRON_SECRET repository secret." }));
  } else {
    const mb = bytesToMb(stats.dbBytes);
    const pct = Math.round((mb / DB_LIMIT_MB) * 100);
    metrics.dbMb = mb;
    metrics.dbLimitMb = DB_LIMIT_MB;
    metrics.users = stats.counts.users;
    metrics.comments = Object.values(stats.counts.comments).reduce((a, b) => a + b, 0);
    metrics.entries = Object.values(stats.counts.entries).reduce((a, b) => a + b, 0);
    if (pct >= 85) findings.push(finding("high", "database", `Database is ${mb} MB, ${pct}% of the ${DB_LIMIT_MB} MB limit`, { suggestion: "Upgrade the Neon plan or prune: old pipeline_runs, removed comments, resolved feedback." }));
    else if (pct >= 70) findings.push(finding("medium", "database", `Database is ${mb} MB, ${pct}% of the ${DB_LIMIT_MB} MB limit`, { suggestion: "Plan the upgrade before it reaches 85%." }));

    if (previous?.dbMb != null && previous.at) {
      const days = Math.max(1, (Date.now() - new Date(previous.at).getTime()) / 86400000);
      const perDay = (mb - previous.dbMb) / days;
      metrics.dbMbPerDay = Math.round(perDay * 100) / 100;
      if (perDay > 0.01) {
        const left = Math.round((DB_LIMIT_MB - mb) / perDay);
        metrics.daysToLimit = left;
        if (left < 90) findings.push(finding(left < 30 ? "high" : "medium", "database", `At ${metrics.dbMbPerDay} MB/day the database reaches its limit in about ${left} days`));
      }
    } else notes.push("Growth rate needs two runs; it starts from this one.");

    if (previous?.users != null && metrics.users > previous.users * 2 && metrics.users > 50) findings.push(finding("info", "growth", `Signed-in users doubled since the last run (${previous.users} to ${metrics.users})`, { suggestion: "Check the comment rate limits and moderation load." }));
    if (stats.commentsLast7d > 200) findings.push(finding("medium", "moderation", `${stats.commentsLast7d} comments in the last 7 days`, { suggestion: "Moderation is a single-reviewer job (RULES #9): consider stricter limits or approve-first for new accounts." }));
  }

  notes.push("Checks: sitemap size (build time), edge cache hit ratio on a repeat request, database size against a limit, growth rate and days to limit, user and comment growth.");
  notes.push(`Limit assumed: ${DB_LIMIT_MB} MB (set the DB_LIMIT_MB repository variable for a paid Neon plan). Vercel function and bandwidth quotas have no read API here, so check them in the dashboard.`);
  return { findings, metrics, notes };
}
