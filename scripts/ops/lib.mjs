// Shared helpers for the ops agents (scripts/ops/agents/*.mjs).
//
// Contract (OPS_AGENTS.md): read-only against the site and repo, one rolling
// GitHub issue per agent as the digest, never push, never publish, never
// touch secrets beyond the CRON_SECRET bearer the site's own pipeline routes
// already use. Plain Node 22, no dependencies.

export const SITE = (process.env.SITE_BASE_URL || "https://modinekiyakyahai.com").replace(/\/$/, "");
export const SEVERITIES = ["critical", "high", "medium", "low", "info"];
const SEV_ICON = { critical: "🔴", high: "🟠", medium: "🟡", low: "🔵", info: "⚪" };

export function severityRank(sev) {
  const i = SEVERITIES.indexOf(sev);
  return i === -1 ? SEVERITIES.length : i;
}

/** A single finding. `suggestion` should be an exact next step a human or AI can take. */
export function finding(severity, area, message, { evidence, suggestion } = {}) {
  if (!SEVERITIES.includes(severity)) throw new Error(`bad severity ${severity}`);
  return { severity, area, message, evidence, suggestion };
}

/** Fetch with a timeout. Never throws: network errors come back as { error }. */
export async function get(url, { headers = {}, redirect = "follow", method = "GET", body, timeoutMs = 20000 } = {}) {
  const started = performance.now();
  try {
    const res = await fetch(url, {
      method,
      headers: { "User-Agent": "modinekiyakyahai-ops-agent/1.0", ...headers },
      redirect,
      body,
      signal: AbortSignal.timeout(timeoutMs),
    });
    const ttfbMs = performance.now() - started;
    const text = await res.text();
    return {
      url,
      status: res.status,
      headers: res.headers,
      body: text,
      ttfbMs: Math.round(ttfbMs),
      totalMs: Math.round(performance.now() - started),
      bytes: Buffer.byteLength(text),
    };
  } catch (error) {
    return { url, status: 0, headers: new Headers(), body: "", ttfbMs: 0, totalMs: 0, bytes: 0, error: String(error?.message ?? error) };
  }
}

export function median(nums) {
  if (!nums.length) return 0;
  const s = [...nums].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2);
}

/** Pull `<loc>` values out of a sitemap XML string. */
export function parseSitemapLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
}

/** Evenly spread sample of up to n items, deterministic so runs are comparable. */
export function sample(items, n) {
  if (items.length <= n) return [...items];
  const out = [];
  for (let i = 0; i < n; i++) out.push(items[Math.floor((i * items.length) / n)]);
  return out;
}

/** Strip scripts, styles and tags, leaving the visible text of an HTML page. */
export function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Percentage change from a to b, or null when a is 0/missing. */
export function pctChange(a, b) {
  if (!a || b == null) return null;
  return Math.round(((b - a) / a) * 1000) / 10;
}

export function bytesToMb(n) {
  return Math.round((n / 1024 / 1024) * 10) / 10;
}

// ---------------------------------------------------------------------------
// Reports and the rolling GitHub issue
// ---------------------------------------------------------------------------

const METRICS_RE = /<!--\s*ops-metrics:(\{[\s\S]*?\})\s*-->/;

export function parseMetricsComment(body) {
  const m = METRICS_RE.exec(body ?? "");
  if (!m) return null;
  try {
    return JSON.parse(m[1]);
  } catch {
    return null;
  }
}

export function renderReport({ agent, title, findings, metrics = {}, notes = [], extra = "" }) {
  const sorted = [...findings].sort((a, b) => severityRank(a.severity) - severityRank(b.severity));
  const counts = SEVERITIES.map((s) => [s, sorted.filter((f) => f.severity === s).length]).filter(([, n]) => n > 0);
  const lines = [];
  lines.push(`# ${title}`);
  lines.push("");
  lines.push(
    `_Agent \`${agent}\` · run ${new Date().toISOString()} · read-only: it reported, it changed nothing._ ` +
      (counts.length ? counts.map(([s, n]) => `${SEV_ICON[s]} ${n} ${s}`).join(" · ") : "✅ no findings"),
  );
  lines.push("");
  if (sorted.length) {
    for (const f of sorted) {
      lines.push(`- ${SEV_ICON[f.severity]} **${f.severity}** · ${f.area}: ${f.message}`);
      if (f.evidence) lines.push(`  - Evidence: ${f.evidence}`);
      if (f.suggestion) lines.push(`  - Suggested next step: ${f.suggestion}`);
    }
    lines.push("");
  }
  if (notes.length) {
    lines.push("**Notes and limits**");
    for (const n of notes) lines.push(`- ${n}`);
    lines.push("");
  }
  if (extra) {
    lines.push(extra);
    lines.push("");
  }
  const metricKeys = Object.keys(metrics);
  if (metricKeys.length) {
    lines.push("<details><summary>Metrics</summary>\n");
    lines.push("```json");
    lines.push(JSON.stringify(metrics, null, 2));
    lines.push("```\n</details>\n");
  }
  lines.push(`<!-- ops-metrics:${JSON.stringify(metrics)} -->`);
  return lines.join("\n");
}

async function gh(path, init = {}) {
  const token = process.env.GITHUB_TOKEN;
  const res = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "modinekiyakyahai-ops-agent/1.0",
      ...(init.headers ?? {}),
    },
    signal: AbortSignal.timeout(20000),
  });
  return res;
}

export function canUseGitHub() {
  return Boolean(process.env.GITHUB_TOKEN && process.env.GITHUB_REPOSITORY);
}

/** Read GitHub (for CI status etc.). Returns null if unavailable. */
export async function ghJson(path) {
  if (!canUseGitHub()) return null;
  try {
    const res = await gh(`/repos/${process.env.GITHUB_REPOSITORY}${path}`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

/** Previous run's metrics, read back from the rolling issue (trend comparison). */
export async function previousMetrics(issueTitle) {
  const issue = await findIssue(issueTitle);
  return issue ? parseMetricsComment(issue.body) : null;
}

async function findIssue(issueTitle) {
  if (!canUseGitHub()) return null;
  const res = await gh(`/repos/${process.env.GITHUB_REPOSITORY}/issues?labels=ops-agent&state=open&per_page=100`);
  if (!res.ok) return null;
  const issues = await res.json();
  return issues.find((i) => i.title === issueTitle && !i.pull_request) ?? null;
}

/** One rolling issue per agent: update its body in place, create it once. */
export async function upsertIssue(issueTitle, body) {
  if (!canUseGitHub()) return { skipped: "no GITHUB_TOKEN/GITHUB_REPOSITORY" };
  const repo = process.env.GITHUB_REPOSITORY;
  const existing = await findIssue(issueTitle);
  if (existing) {
    const res = await gh(`/repos/${repo}/issues/${existing.number}`, { method: "PATCH", body: JSON.stringify({ body }) });
    return { updated: existing.number, ok: res.ok };
  }
  const res = await gh(`/repos/${repo}/issues`, {
    method: "POST",
    body: JSON.stringify({ title: issueTitle, body, labels: ["ops-agent"] }),
  });
  const json = res.ok ? await res.json() : null;
  return { created: json?.number, ok: res.ok, status: res.status };
}

/** Aggregates from the site's own authenticated read-only route. */
export async function opsStats() {
  const secret = process.env.CRON_SECRET;
  if (!secret) return { stats: null, reason: "CRON_SECRET is not set in this environment, so database figures were skipped" };
  const res = await get(`${SITE}/api/pipeline/ops-stats`, { headers: { Authorization: `Bearer ${secret}` } });
  if (res.status !== 200) {
    return { stats: null, reason: `ops-stats returned HTTP ${res.status || "no response"}${res.error ? ` (${res.error})` : ""}` };
  }
  try {
    return { stats: JSON.parse(res.body), reason: null };
  } catch {
    return { stats: null, reason: "ops-stats returned unparseable JSON" };
  }
}
