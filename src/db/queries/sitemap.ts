import { db, isDbConfigured } from "@/db";
import { categories, comparisons, editorials, entries } from "@/db/schema";
import { eq } from "drizzle-orm";

export interface SitemapSlug {
  slug: string;
  lastModified: Date;
}

export interface SitemapData {
  categorySlugs: string[];
  entrySlugs: SitemapSlug[];
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

  const [categoryRows, entryRows, editorialRows, comparisonRows] = await Promise.all([
    db.select({ slug: categories.slug }).from(categories).where(eq(categories.isActive, true)),
    db
      .select({ slug: entries.slug, updatedAt: entries.updatedAt })
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
  ]);

  return {
    categorySlugs: categoryRows.map((r) => r.slug),
    entrySlugs: entryRows.map((r) => ({ slug: r.slug, lastModified: r.updatedAt })),
    editorialSlugs: editorialRows.map((r) => ({ slug: r.slug, lastModified: r.updatedAt })),
    comparisonSlugs: comparisonRows.map((r) => ({ slug: r.slug, lastModified: r.updatedAt })),
  };
}
