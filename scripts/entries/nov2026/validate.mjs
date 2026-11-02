import { items as a } from "./batch-a.mjs";
import { items as b } from "./batch-b.mjs";
import { items as c } from "./batch-c.mjs";
import { items as d } from "./batch-d.mjs";
export const all = [...a, ...b, ...c, ...d];
if (process.argv[1].endsWith("validate.mjs")) {
  const slugs = new Set(); let bad = 0;
  for (const { entry, editorial } of all) {
    if (slugs.has(entry.slug)) { console.log("DUP", entry.slug); bad++; } slugs.add(entry.slug);
    if (!/^[a-z0-9-]+$/.test(entry.slug) || !/^[a-z0-9-]+$/.test(editorial.slug)) { console.log("BAD SLUG", entry.slug, editorial.slug); bad++; }
    if (entry.bodySectionsEn.length !== entry.bodySectionsHi.length) { console.log("SECTION MISMATCH", entry.slug); bad++; }
    if (editorial.bodyEn.length < 50 || editorial.bodyHi.length < 50) { console.log("SHORT ED", entry.slug); bad++; }
  }
  console.log("items", all.length, "bad", bad);
}
