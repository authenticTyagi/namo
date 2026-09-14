import { db, isDbConfigured } from "@/db";
import {
  entries,
  sources,
  categories,
  tags,
  entryTags,
  entryStats,
} from "@/db/schema";
import { and, asc, desc, eq, ilike, or } from "drizzle-orm";

/** Published entries for a category, newest first (card-list use). */
export async function getPublishedEntriesByCategory(categorySlug: string) {
  if (!isDbConfigured) return [];
  return db
    .select({
      id: entries.id,
      slug: entries.slug,
      titleHi: entries.titleHi,
      titleEn: entries.titleEn,
      summaryHi: entries.summaryHi,
      summaryEn: entries.summaryEn,
      impactType: entries.impactType,
      publishDate: entries.publishDate,
    })
    .from(entries)
    .innerJoin(categories, eq(entries.categoryId, categories.id))
    .where(and(eq(categories.slug, categorySlug), eq(entries.status, "published")))
    .orderBy(desc(entries.publishDate));
}

/** Full entry detail, with its sources and tags, by slug. Only published entries. */
export async function getPublishedEntryBySlug(slug: string) {
  if (!isDbConfigured) return null;

  const [entry] = await db
    .select()
    .from(entries)
    .where(and(eq(entries.slug, slug), eq(entries.status, "published")))
    .limit(1);

  if (!entry) return null;

  const entrySources = await db
    .select()
    .from(sources)
    .where(eq(sources.entryId, entry.id));

  const entryTagRows = await db
    .select({ tag: tags })
    .from(entryTags)
    .innerJoin(tags, eq(entryTags.tagId, tags.id))
    .where(eq(entryTags.entryId, entry.id));

  const entryStatRows = await db
    .select()
    .from(entryStats)
    .where(eq(entryStats.entryId, entry.id))
    .orderBy(asc(entryStats.sortOrder));

  return {
    ...entry,
    sources: entrySources,
    tags: entryTagRows.map((r) => r.tag),
    stats: entryStatRows,
  };
}

/**
 * Every published entry's stats, grouped by category, for the "2014 → Now"
 * overview page. One query per entry's stats is fine at this scale (a few
 * dozen entries); revisit with a join if this grows into the hundreds.
 */
export async function getAllStatsGroupedByCategory() {
  if (!isDbConfigured) return [];

  const categoryRows = await db
    .select()
    .from(categories)
    .where(eq(categories.isActive, true))
    .orderBy(asc(categories.sortOrder));

  const result = [];
  for (const category of categoryRows) {
    const categoryEntries = await db
      .select({
        id: entries.id,
        slug: entries.slug,
        titleHi: entries.titleHi,
        titleEn: entries.titleEn,
      })
      .from(entries)
      .where(
        and(eq(entries.categoryId, category.id), eq(entries.status, "published")),
      )
      .orderBy(desc(entries.publishDate));

    const entriesWithStats = [];
    for (const entry of categoryEntries) {
      const stats = await db
        .select()
        .from(entryStats)
        .where(eq(entryStats.entryId, entry.id))
        .orderBy(asc(entryStats.sortOrder));
      if (stats.length > 0) {
        entriesWithStats.push({ ...entry, stats });
      }
    }

    if (entriesWithStats.length > 0) {
      result.push({ category, entries: entriesWithStats });
    }
  }

  return result;
}

/**
 * MVP search: simple ILIKE over bilingual title/summary. Fine at this scale;
 * upgrade to Postgres full-text (tsvector) once entry volume grows (Phase 4).
 */
export async function searchPublishedEntries(query: string) {
  if (!isDbConfigured || !query.trim()) return [];
  const pattern = `%${query.trim()}%`;
  return db
    .select({
      id: entries.id,
      slug: entries.slug,
      titleHi: entries.titleHi,
      titleEn: entries.titleEn,
      summaryHi: entries.summaryHi,
      summaryEn: entries.summaryEn,
      impactType: entries.impactType,
      publishDate: entries.publishDate,
    })
    .from(entries)
    .where(
      and(
        eq(entries.status, "published"),
        or(
          ilike(entries.titleHi, pattern),
          ilike(entries.titleEn, pattern),
          ilike(entries.summaryHi, pattern),
          ilike(entries.summaryEn, pattern),
        ),
      ),
    )
    .orderBy(desc(entries.publishDate));
}
