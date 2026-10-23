import { test } from "node:test";
import assert from "node:assert/strict";
import * as lib from "../../scripts/ops/lib.mjs";
import { parseGrowthBacklog, scoreIdea } from "../../scripts/ops/agents/growth.mjs";
import { detectHelpers, draftDigest } from "../../scripts/ops/agents/nudges.mjs";
import { AGENTS } from "../../scripts/ops/agents-list.mjs";

test("severityRank orders critical before info and unknown last", () => {
  assert.ok(lib.severityRank("critical") < lib.severityRank("high"));
  assert.ok(lib.severityRank("low") < lib.severityRank("info"));
  assert.equal(lib.severityRank("nonsense"), lib.SEVERITIES.length);
});

test("finding rejects an unknown severity", () => {
  assert.throws(() => lib.finding("urgent", "x", "y"));
  assert.equal(lib.finding("low", "a", "m").severity, "low");
});

test("parseSitemapLocs extracts every loc", () => {
  const xml = "<urlset><url><loc>https://a/x</loc></url><url><loc> https://a/y </loc></url></urlset>";
  assert.deepEqual(lib.parseSitemapLocs(xml), ["https://a/x", "https://a/y"]);
});

test("sample is deterministic, evenly spread and bounded", () => {
  const items = Array.from({ length: 100 }, (_, i) => i);
  const s = lib.sample(items, 10);
  assert.equal(s.length, 10);
  assert.deepEqual(s, lib.sample(items, 10));
  assert.equal(s[0], 0);
  assert.deepEqual(lib.sample([1, 2], 10), [1, 2]);
});

test("visibleText drops scripts, styles and tags", () => {
  const html = "<style>a{}</style><script>var undefinedThing=1</script><p>Hello&nbsp;<b>world</b></p>";
  assert.equal(lib.visibleText(html), "Hello world");
});

test("pctChange and median", () => {
  assert.equal(lib.pctChange(100, 150), 50);
  assert.equal(lib.pctChange(0, 5), null);
  assert.equal(lib.median([5, 1, 3]), 3);
  assert.equal(lib.median([]), 0);
});

test("report round-trips metrics through the hidden comment", () => {
  const metrics = { a: 1, nested: { b: [1, 2] } };
  const body = lib.renderReport({
    agent: "t",
    title: "T",
    findings: [lib.finding("low", "x", "m"), lib.finding("critical", "y", "boom")],
    metrics,
  });
  assert.deepEqual(lib.parseMetricsComment(body), metrics);
  assert.ok(body.indexOf("boom") < body.indexOf("**low**"), "critical is listed before low");
  assert.equal(lib.parseMetricsComment("no comment here"), null);
});

test("growth backlog parser reads only the Growth ideas section", () => {
  const md = "## Next\n- [ ] not this\n\n## Growth ideas (x)\n- [x] done thing\n- [ ] Topic hub pages with FAQ schema\n- [~] Short-video series\n- [ ] Weekly digest (needs a mail provider)\n\n## Other\n- [ ] nope";
  const items = parseGrowthBacklog(md);
  assert.equal(items.length, 3);
  assert.equal(items.filter((i: { started: boolean }) => i.started).length, 1);
  assert.equal(scoreIdea("Weekly digest (needs a mail provider)").effort, "high");
  assert.equal(scoreIdea("Topic hub pages with FAQ schema").effort, "low");
});

test("nudges: helper detection and digest drafting", () => {
  const h = detectHelpers('<a href="https://x.gov.in">Sources</a> Last verified 1 Oct <a href="/en/feedback">Report an issue</a>');
  assert.equal(h.lastVerified, true);
  assert.equal(h.whatsappShare, false);
  assert.equal(draftDigest([]), null);
  const d = draftDigest([{ slug: "s", titleEn: "English", titleHi: "हिंदी" }]) ?? "";
  assert.ok(d.includes("English") && d.includes("हिंदी") && d.includes("/en/entry/s") && d.includes("/hi/entry/s"));
});

test("every agent module exists and exports run()", async () => {
  for (const [name, def] of Object.entries(AGENTS as Record<string, { mod: string }>)) {
    const mod = await import(new URL(`../../scripts/ops/${def.mod.replace("./", "")}`, import.meta.url).href);
    assert.equal(typeof mod.run, "function", `${name} must export run()`);
  }
});
