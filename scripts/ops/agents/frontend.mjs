// Front end / GUI agent: HTML-level quality of the pages real readers and
// crawlers get. Structural checks only. It does not render in a browser, so
// layout, colour and interaction regressions still need a human or a browser
// agent (noted in the report).

import { SITE, finding, get, parseSitemapLocs, sample, visibleText } from "../lib.mjs";

const BAD_TEXT = [/\bundefined\b/, /\bNaN\b/, /\[object Object\]/, /\bnull\b(?![-\w])/];

function attr(html, re) {
  const m = re.exec(html);
  return m ? m[1] : null;
}

function checkPage(url, html, findings) {
  const where = url.replace(SITE, "");
  const lang = attr(html, /<html[^>]*\blang="([^"]*)"/i);
  const expected = where.split("/")[1];
  if (!lang) findings.push(finding("medium", "a11y", `${where}: <html> has no lang attribute`));
  else if (["hi", "en", "bn", "te", "mr"].includes(expected) && lang.slice(0, 2) !== expected) findings.push(finding("medium", "a11y", `${where}: lang="${lang}" does not match the ${expected} locale`));

  const title = attr(html, /<title[^>]*>([\s\S]*?)<\/title>/i)?.trim();
  if (!title) findings.push(finding("high", "seo", `${where}: no <title>`));
  else if (title.length > 90) findings.push(finding("low", "seo", `${where}: title is ${title.length} characters (search results truncate near 60)`, { evidence: title.slice(0, 120) }));

  if (!/<meta[^>]+name="description"[^>]+content="[^"]{20,}/i.test(html)) findings.push(finding("medium", "seo", `${where}: missing or very short meta description`));
  if (!/<link[^>]+rel="canonical"/i.test(html)) findings.push(finding("medium", "seo", `${where}: no canonical link`));
  if (!/<meta[^>]+name="viewport"/i.test(html)) findings.push(finding("high", "mobile", `${where}: no viewport meta (breaks phone layout)`));
  if (!/<meta[^>]+property="og:image"/i.test(html) && !/og:image/.test(html)) findings.push(finding("low", "seo", `${where}: no og:image (poor link previews in WhatsApp and social apps)`));
  if (/<meta[^>]+name="robots"[^>]+noindex/i.test(html)) findings.push(finding("high", "seo", `${where}: page is marked noindex`));

  const h1 = (html.match(/<h1[\s>]/gi) ?? []).length;
  if (h1 !== 1) findings.push(finding("low", "a11y", `${where}: ${h1} <h1> elements (expected exactly 1)`));

  const imgs = html.match(/<img\b[^>]*>/gi) ?? [];
  const noAlt = imgs.filter((i) => !/\balt=/i.test(i));
  if (noAlt.length) findings.push(finding("medium", "a11y", `${where}: ${noAlt.length} image(s) without an alt attribute`));

  const buttons = [...html.matchAll(/<button\b[^>]*>([\s\S]*?)<\/button>/gi)];
  const unnamed = buttons.filter((b) => !visibleText(b[1]) && !/aria-label=/i.test(b[0]));
  if (unnamed.length) findings.push(finding("medium", "a11y", `${where}: ${unnamed.length} button(s) with no text or aria-label`));

  for (const m of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(m[1]);
    } catch {
      findings.push(finding("high", "seo", `${where}: JSON-LD block does not parse`));
    }
  }

  const text = visibleText(html);
  for (const re of BAD_TEXT) {
    const m = re.exec(text);
    if (m) findings.push(finding("medium", "content", `${where}: visible text contains "${m[0]}"`, { evidence: text.slice(Math.max(0, m.index - 40), m.index + 40), suggestion: "A missing field is leaking into the UI; check the component for that value." }));
  }
  if (text.length < 300) findings.push(finding("high", "content", `${where}: page has almost no visible text (${text.length} chars)`));
  return text;
}

export async function run() {
  const findings = [];
  const notes = [];
  const metrics = { pagesChecked: 0, linksChecked: 0 };

  const sm = await get(`${SITE}/sitemap.xml`);
  const locs = parseSitemapLocs(sm.body);
  const pick = (re, n) => sample(locs.filter((u) => re.test(u)), n);
  const pages = [
    `${SITE}/en`,
    `${SITE}/hi`,
    `${SITE}/en/overview`,
    `${SITE}/en/editorials`,
    `${SITE}/en/india-in-the-world`,
    `${SITE}/en/feedback`,
    `${SITE}/en/search`,
    ...pick(/\/en\/entry\//, 4),
    ...pick(/\/hi\/entry\//, 2),
    ...pick(/\/editorial\//, 3),
    ...pick(/\/india-in-the-world\/[^/]+$/, 2),
    ...pick(/\/category\//, 2),
  ];
  const internal = new Set();
  for (const url of [...new Set(pages)]) {
    const res = await get(url);
    if (res.status !== 200) {
      findings.push(finding("high", "pages", `${url.replace(SITE, "")} returned ${res.status || "no response"}`));
      continue;
    }
    metrics.pagesChecked++;
    checkPage(url, res.body, findings);
    for (const m of res.body.matchAll(/<a[^>]+href="(\/[^"#?]*)"/g)) internal.add(m[1]);
  }

  // Internal links: every one found on the sampled pages must resolve.
  const broken = [];
  for (const href of sample([...internal].filter((h) => !h.startsWith("/_next") && !h.startsWith("/api") && !/\.(png|jpg|svg|ico|webp|mp4)$/.test(h)), 40)) {
    const r = await get(`${SITE}${href}`, { redirect: "manual" });
    metrics.linksChecked++;
    if (r.status >= 400 || r.status === 0) broken.push(`${r.status || "ERR"} ${href}`);
  }
  if (broken.length) findings.push(finding("high", "links", `${broken.length} broken internal link(s) on sampled pages`, { evidence: broken.slice(0, 8).join("; "), suggestion: "Fix or remove the links, or restore the target page." }));

  // Collapse repeated identical findings from many pages into one line each.
  const merged = new Map();
  for (const f of findings) {
    const key = `${f.severity}|${f.area}|${f.message.replace(/^[^:]+: /, "")}`;
    const e = merged.get(key);
    if (e) {
      e.pages.push(f.message.split(":")[0]);
    } else merged.set(key, { f, pages: [f.message.split(":")[0]] });
  }
  const out = [...merged.values()].map(({ f, pages: p }) => (p.length > 1 ? { ...f, message: `${f.message.replace(/^[^:]+: /, "")} (${p.length} pages: ${[...new Set(p)].slice(0, 4).join(", ")})` } : f));

  notes.push("Checks: lang, title, meta description, canonical, viewport, og:image, noindex, single h1, image alt, unnamed buttons, JSON-LD validity, leaked undefined/NaN text, thin pages, broken internal links, across about 20 sampled pages in hi and en.");
  notes.push("Not covered: visual layout, colour contrast, dark mode, keyboard flow, mobile rendering and interaction. Those need a real browser; add a Playwright job or run a browser session for a visual pass.");
  return { findings: out, metrics, notes };
}
