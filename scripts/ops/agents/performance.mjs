// Performance agent (front and back): server timing, payload, compression and
// caching per page, plus Google PageSpeed Insights lab and field data when the
// API answers. Compares with the previous run so regressions show as trends.

import { brotliCompressSync, constants } from "node:zlib";
import { SITE, finding, get, median, parseSitemapLocs, pctChange, sample } from "../lib.mjs";

const TTFB_WARN_MS = 800;
const JS_WARN_KB = 250;
const HTML_WARN_KB = 300;
const REGRESSION_PCT = 25;

async function measure(url) {
  const ttfb = [];
  const total = [];
  let last;
  for (let i = 0; i < 3; i++) {
    last = await get(url, { headers: { "Accept-Encoding": "br, gzip" } });
    if (last.status !== 200) return { url, status: last.status };
    ttfb.push(last.ttfbMs);
    total.push(last.totalMs);
  }
  const scripts = [...new Set([...last.body.matchAll(/<script[^>]+src="(\/_next\/[^"]+\.js)"/g)].map((m) => m[1]))];
  let jsBytes = 0;
  for (const s of scripts) {
    const r = await fetch(`${SITE}${s}`, { headers: { "Accept-Encoding": "br, gzip" } }).catch(() => null);
    if (!r) continue;
    const len = Number(r.headers.get("content-length"));
    const buf = Buffer.from(await r.arrayBuffer());
    // The CDN streams without content-length and fetch() hands back decompressed bytes,
    // so estimate the wire size by brotli-compressing the body (quality 5, close to the edge's).
    jsBytes += len || brotliCompressSync(buf, { params: { [constants.BROTLI_PARAM_QUALITY]: 5 } }).length;
  }
  return {
    url,
    status: 200,
    ttfbMs: median(ttfb),
    totalMs: median(total),
    htmlKb: Math.round(last.bytes / 1024),
    jsKb: Math.round(jsBytes / 1024),
    scripts: scripts.length,
    encoding: last.headers.get("content-encoding"),
    cacheControl: last.headers.get("cache-control"),
    edge: last.headers.get("x-vercel-cache"),
  };
}

async function psi(url, key) {
  const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&category=performance${key ? `&key=${key}` : ""}`;
  const r = await get(api, { timeoutMs: 90000 });
  if (r.status !== 200) return { error: `PageSpeed Insights HTTP ${r.status || r.error}` };
  try {
    const j = JSON.parse(r.body);
    const a = j.lighthouseResult?.audits ?? {};
    const field = j.loadingExperience?.metrics ?? {};
    return {
      score: Math.round((j.lighthouseResult?.categories?.performance?.score ?? 0) * 100),
      lcpMs: Math.round(a["largest-contentful-paint"]?.numericValue ?? 0),
      cls: Math.round((a["cumulative-layout-shift"]?.numericValue ?? 0) * 1000) / 1000,
      tbtMs: Math.round(a["total-blocking-time"]?.numericValue ?? 0),
      fieldLcpMs: field.LARGEST_CONTENTFUL_PAINT_MS?.percentile ?? null,
      fieldInpMs: field.INTERACTION_TO_NEXT_PAINT?.percentile ?? null,
      fieldCls: field.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile != null ? field.CUMULATIVE_LAYOUT_SHIFT_SCORE.percentile / 100 : null,
    };
  } catch {
    return { error: "PageSpeed Insights returned unreadable JSON" };
  }
}

export async function run({ previous } = {}) {
  const findings = [];
  const notes = [];
  const metrics = { pages: {} };

  const locs = parseSitemapLocs((await get(`${SITE}/sitemap.xml`)).body);
  const urls = [`${SITE}/en`, `${SITE}/hi`, `${SITE}/en/india-in-the-world`, ...sample(locs.filter((u) => /\/en\/entry\//.test(u)), 2), ...sample(locs.filter((u) => /\/editorial\//.test(u)), 1)];

  for (const url of urls) {
    const m = await measure(url);
    const key = url.replace(SITE, "") || "/";
    metrics.pages[key] = m;
    if (m.status !== 200) {
      findings.push(finding("high", "pages", `${key} returned ${m.status}`));
      continue;
    }
    if (m.ttfbMs > TTFB_WARN_MS) findings.push(finding("medium", "ttfb", `${key}: median time to first byte ${m.ttfbMs} ms (target under ${TTFB_WARN_MS})`, { evidence: `edge cache: ${m.edge ?? "n/a"}`, suggestion: "If not an edge HIT, check the page is statically generated; if HIT, check network from the runner." }));
    if (m.jsKb > JS_WARN_KB) findings.push(finding("medium", "bundle", `${key}: ${m.jsKb} kB of JavaScript transferred (target under ${JS_WARN_KB})`, { suggestion: "Find the largest chunk with `npm run build` output; lazy-load client components and avoid heavy imports in the layout." }));
    if (m.htmlKb > HTML_WARN_KB) findings.push(finding("low", "html", `${key}: HTML is ${m.htmlKb} kB`, { suggestion: "Long entry pages may be embedding too much serialized data." }));
    if (!m.encoding) findings.push(finding("high", "compression", `${key}: response is not compressed`, { suggestion: "Do not add app-level compression on Vercel (ARCHITECTURE.md); check the host's CDN settings." }));
  }

  // PageSpeed Insights: home, one entry. Rate limited without a key, so failures are notes, not findings.
  const key = process.env.PSI_API_KEY;
  metrics.psi = {};
  for (const url of [`${SITE}/en`, urls.find((u) => /\/entry\//.test(u))].filter(Boolean)) {
    const r = await psi(url, key);
    const label = url.replace(SITE, "") || "/";
    metrics.psi[label] = r;
    if (r.error) {
      notes.push(`${label}: ${r.error} (set PSI_API_KEY to avoid the shared rate limit)`);
      continue;
    }
    if (r.lcpMs > 4000) findings.push(finding("high", "lcp", `${label}: lab LCP ${r.lcpMs} ms on mobile`, { suggestion: "Check the largest element, font loading and ad reservations." }));
    else if (r.lcpMs > 2500) findings.push(finding("medium", "lcp", `${label}: lab LCP ${r.lcpMs} ms on mobile (good is under 2500)`));
    if (r.cls > 0.1) findings.push(finding("medium", "cls", `${label}: lab CLS ${r.cls} (good is under 0.1)`, { suggestion: "RULES #16: ads must reserve height; check late-loading fonts and images." }));
    if (r.fieldLcpMs && r.fieldLcpMs > 2500) findings.push(finding("medium", "field", `${label}: real-user LCP ${r.fieldLcpMs} ms (Google CrUX 75th percentile)`));
    if (r.fieldInpMs && r.fieldInpMs > 200) findings.push(finding("medium", "field", `${label}: real-user INP ${r.fieldInpMs} ms (good is under 200)`));
  }

  // Trend against the previous run.
  if (previous?.pages) {
    for (const [k, now] of Object.entries(metrics.pages)) {
      const before = previous.pages[k];
      if (!before || !now.ttfbMs) continue;
      const ch = pctChange(before.ttfbMs, now.ttfbMs);
      if (ch != null && ch > REGRESSION_PCT && now.ttfbMs - before.ttfbMs > 150) findings.push(finding("low", "trend", `${k}: TTFB up ${ch}% since the last run (${before.ttfbMs} to ${now.ttfbMs} ms)`));
      const js = pctChange(before.jsKb, now.jsKb);
      if (js != null && js > 10 && now.jsKb - before.jsKb > 15) findings.push(finding("medium", "trend", `${k}: JavaScript up ${js}% since the last run (${before.jsKb} to ${now.jsKb} kB)`, { suggestion: "Check the last few commits for a new dependency or a client component that grew." }));
    }
  } else {
    notes.push("No previous run found, so trend comparison starts from this run.");
  }

  notes.push("Checks: median-of-3 TTFB and total time, HTML and JS transfer size, compression, caching headers, PageSpeed Insights lab data and CrUX real-user data when available, trend vs last run.");
  notes.push("Server-side query timing is not visible from outside; Vercel Speed Insights (enable it in the project) is the real-user source.");
  return { findings, metrics, notes };
}
