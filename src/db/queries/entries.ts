import { db, isDbConfigured } from "@/db";
import { entries, sources, categories, tags, entryTags } from "@/db/schema";
import { and, desc, eq, ilike, or } from "drizzle-orm";

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

  return {
    ...entry,
    sources: entrySources,
    tags: entryTagRows.map((r) => r.tag),
  };
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
