import { db, isDbConfigured } from "@/db";
import { categories, comparisons, editorials, entries, entryTranslations } from "@/db/schema";
import { eq } from "drizzle-orm";

export interface SitemapSlug {
  slug: string;
  lastModified: Date;
}

/**
 * `extraLocales`: which of bn/te/mr have REAL translated content for this
 * item — a locale not in this list is served as English-fallback text, so
 * it must not get its own hreflang alternate (that would tell search
 * engines it's a distinct page when it's actually duplicate content). See
 * the matching `hasLocalizedContent` flag on entries/categories query
 * results, and generateMetadata's canonical-URL logic on those pages.
 */
export interface SitemapCategorySlug {
  slug: string;
  extraLocales: string[];
}

export interface SitemapEntrySlug extends SitemapSlug {
  extraLocales: string[];
}

export interface SitemapData {
  categorySlugs: SitemapCategorySlug[];
  entrySlugs: SitemapEntrySlug[];
  editorialSlugs: SitemapSlug[];
  comparisonSlugs: SitemapSlug[];
}

/**
 * Everything sitemap.ts needs, in one place — published-only (a pending/
 * rejected/draft row has no public URL to list), slug + lastModified only
 * (not full content) since a sitemap doesn't need anything else.
 */
export async function getSitemapData(): Promise<SitemapData> {
  if (!isDbConfigured) {
    return { categorySlugs: [], entrySlugs: [], editorialSlugs: [], comparisonSlugs: [] };
  }

  const [categoryRows, entryRows, editorialRows, comparisonRows, translationRows] =
    await Promise.all([
      db
        .select({
          slug: categories.slug,
          nameBn: categories.nameBn,
          nameTe: categories.nameTe,
          nameMr: categories.nameMr,
        })
        .from(categories)
        .where(eq(categories.isActive, true)),
      db
        .select({ id: entries.id, slug: entries.slug, updatedAt: entries.updatedAt })
        .from(entries)
        .where(eq(entries.status, "published")),
      db
        .select({ slug: editorials.slug, updatedAt: editorials.updatedAt })
        .from(editorials)
        .where(eq(editorials.status, "published")),
      db
        .select({ slug: comparisons.slug, updatedAt: comparisons.updatedAt })
        .from(comparisons)
        .where(eq(comparisons.status, "published")),
      db.select({ entryId: entryTranslations.entryId, locale: entryTranslations.locale }).from(entryTranslations),
    ]);

  const extraLocalesByEntryId = new Map<string, string[]>();
  for (const row of translationRows) {
    const list = extraLocalesByEntryId.get(row.entryId) ?? [];
    list.push(row.locale);
    extraLocalesByEntryId.set(row.entryId, list);
  }

  return {
    categorySlugs: categoryRows.map((r) => ({
      slug: r.slug,
      extraLocales: [
        ...(r.nameBn ? ["bn"] : []),
        ...(r.nameTe ? ["te"] : []),
        ...(r.nameMr ? ["mr"] : []),
      ],
    })),
    entrySlugs: entryRows.map((r) => ({
      slug: r.slug,
      lastModified: r.updatedAt,
      extraLocales: extraLocalesByEntryId.get(r.id) ?? [],
    })),
    editorialSlugs: editorialRows.map((r) => ({ slug: r.slug, lastModified: r.updatedAt })),
    comparisonSlugs: comparisonRows.map((r) => ({ slug: r.slug, lastModified: r.updatedAt })),
  };
}
