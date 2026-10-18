// Export PUBLISHED content (entries, editorials, comparisons) to JSON for the video builder.
// node --env-file=.env.local scripts/video/export-content.mjs
import { neon } from "@neondatabase/serverless";
import { writeFileSync } from "node:fs";

const sql = neon(process.env.DATABASE_URL);
const entries = await sql`
  select e.id, e.slug, e.title_en, e.title_hi, e.quick_take_en, e.quick_take_hi, e.impact_type, e.confidence_score,
         c.slug as category_slug, c.name_en as category_en, c.name_hi as category_hi
  from entries e join categories c on c.id = e.category_id
  where e.status = 'published' order by e.publish_date nulls last, e.slug`;
const stats = await sql`
  select s.entry_id, s.sort_order, s.metric_label_en, s.metric_label_hi, s.before_label_en, s.before_label_hi,
         s.before_value_en, s.before_value_hi, s.after_label_en, s.after_label_hi, s.after_value_en, s.after_value_hi,
         s.extra_label_en, s.extra_label_hi, s.extra_value_en, s.extra_value_hi
  from entry_stats s join entries e on e.id = s.entry_id where e.status = 'published' order by s.entry_id, s.sort_order`;
const editorials = await sql`
  select d.slug, d.headline_en, d.headline_hi, d.body_en, d.body_hi, d.tone, e.slug as entry_slug
  from editorials d join entries e on e.id = d.related_entry_id
  where d.status = 'published' order by d.slug`;
const comparisons = await sql`
  select c.id, c.slug, c.title_en, c.title_hi, c.metric_label_en, c.metric_label_hi, c.unit_en, c.unit_hi,
         c.narrative_en, c.narrative_hi, k.slug as category_slug
  from comparisons c join categories k on k.id = c.category_id where c.status = 'published' order by c.slug`;
const points = await sql`
  select p.comparison_id, p.sort_order, p.is_india, p.country_name_en, p.country_name_hi, p.value_en, p.value_hi, p.value_numeric
  from comparison_points p join comparisons c on c.id = p.comparison_id where c.status = 'published' order by p.comparison_id, p.sort_order`;

const byEntry = new Map();
for (const s of stats) (byEntry.get(s.entry_id) ?? byEntry.set(s.entry_id, []).get(s.entry_id)).push(s);
const byComp = new Map();
for (const p of points) (byComp.get(p.comparison_id) ?? byComp.set(p.comparison_id, []).get(p.comparison_id)).push(p);

const out = {
  exportedAt: new Date().toISOString(),
  entries: entries.map(({ id, ...e }) => ({ ...e, stats: (byEntry.get(id) ?? []).map(({ entry_id, ...s }) => s) })),
  editorials,
  comparisons: comparisons.map(({ id, ...c }) => ({ ...c, points: (byComp.get(id) ?? []).map(({ comparison_id, ...p }) => p) })),
};
writeFileSync(new URL("./data/content.json", import.meta.url), JSON.stringify(out, null, 1));
console.log(`entries ${out.entries.length}, editorials ${out.editorials.length}, comparisons ${out.comparisons.length}`);
