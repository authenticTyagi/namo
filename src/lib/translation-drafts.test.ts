import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { checkDraftAgainstEntry, deriveBody, translationDraftSchema } from "./translation-drafts";

const entry = {
  sectionCount: 2,
  stats: [
    { statKey: "a", hasExtra: false },
    { statKey: "b", hasExtra: true },
  ],
};
const stat = (statKey: string, extra = false) => ({
  statKey,
  metricLabel: "m",
  beforeLabel: "b",
  beforeValue: "1",
  afterLabel: "a",
  afterValue: "2",
  ...(extra ? { extraLabel: "x", extraValue: "3" } : {}),
});
const sections = (n: number) => Array.from({ length: n }, (_, i) => ({ heading: `h${i}`, body: `b${i}` }));

test("a draft matching the English structure has no problems", () => {
  assert.deepEqual(checkDraftAgainstEntry({ bodySections: sections(2), stats: [stat("a"), stat("b", true)] }, entry), []);
});

test("wrong section count, missing, unknown and duplicate stats are reported", () => {
  const p = checkDraftAgainstEntry({ bodySections: sections(3), stats: [stat("a"), stat("a"), stat("z")] }, entry);
  assert.ok(p.some((x) => x.includes("3 sections")));
  assert.ok(p.some((x) => x.includes('missing stats entry for statKey "b"')));
  assert.ok(p.some((x) => x.includes('unknown statKey "z"')));
  assert.ok(p.some((x) => x.includes("duplicate")));
});

test("the extra stat value must match whether English has one", () => {
  const p = checkDraftAgainstEntry({ bodySections: sections(2), stats: [stat("a", true), stat("b")] }, entry);
  assert.equal(p.filter((x) => x.includes("extraLabel/extraValue")).length, 2);
});

test("only bn, te and mr are accepted as translation locales", () => {
  const base = { entrySlug: "s", title: "t", summary: "s", quickTake: "q", bodySections: sections(1), stats: [] };
  for (const ok of ["bn", "te", "mr"]) assert.equal(translationDraftSchema.safeParse({ ...base, locale: ok }).success, true);
  for (const bad of ["en", "hi", "fr", ""]) assert.equal(translationDraftSchema.safeParse({ ...base, locale: bad }).success, false);
});

test("deriveBody matches the seed script's rule", () => {
  assert.equal(deriveBody("Q", [{ heading: "H", body: "B" }]), "Q\n\nH\n\nB");
  assert.equal(deriveBody("", [{ heading: "H", body: "B" }]), "H\n\nB");
});

// --- contract tests: the gate cannot be bypassed by accident -----------------

const read = (p: string) => readFileSync(p, "utf8");

test("approve and reject require an admin and only act on pending drafts", () => {
  const src = read("src/app/admin/(protected)/translations/actions.ts");
  assert.equal((src.match(/await requireAdmin\(\)/g) ?? []).length, 2);
  assert.match(src, /eq\(translationDrafts\.status, "pending_review"\)/);
  assert.match(src, /session\?\.user\.role !== "admin"/);
});

test("the ingest route requires the pipeline secret and never writes the live translation tables", () => {
  const src = read("src/app/api/pipeline/translation-ingest/route.ts");
  assert.match(src, /isAuthorizedPipelineRequest\(request\)/);
  assert.doesNotMatch(src, /entryTranslations|entryStatTranslations/);
  assert.match(src, /status: "pending_review"/);
});

test("public readers never read translation_drafts", () => {
  const offenders: string[] = [];
  const walk = (dir: string) => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) {
        if (full.includes("admin")) continue; // admin pages and actions may read drafts
        walk(full);
      } else if (/\.(ts|tsx)$/.test(name) && !name.endsWith(".test.ts")) {
        const text = read(full);
        if (/translationDrafts|translation_drafts/.test(text)) offenders.push(full);
      }
    }
  };
  walk("src");
  // allowed: the schema, the admin query file, the ingest route and the shared lib
  const allowed = ["schema.ts", "queries\\admin.ts", "queries/admin.ts", "translation-ingest", "translation-drafts.ts"];
  assert.deepEqual(offenders.filter((f) => !allowed.some((a) => f.includes(a))), []);
});
