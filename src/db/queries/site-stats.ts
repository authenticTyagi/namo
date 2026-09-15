import { db, isDbConfigured } from "@/db";
import { categories, editorials, entries, sources } from "@/db/schema";
import { and, count, eq } from "drizzle-orm";

export interface PublicSiteStats {
  entryCount: number;
  categoryCount: number;
  editorialCount: number;
  sourceCount: number;
}

/**
 * Public, published-only counts for the homepage stat strip — deliberately
 * separate from getDashboardCounts() (admin.ts), which also surfaces
 * pending/flagged counts that have no business being shown to a visitor.
 * sourceCount only counts sources attached to a published entry, so a
 * pending/rejected draft's citations don't inflate the public number.
 */
export async function getPublicSiteStats(): Promise<PublicSiteStats> {
  if (!isDbConfigured) {
    return { entryCount: 0, categoryCount: 0, editorialCount: 0, sourceCount: 0 };
  }

  const [[entryRow], [categoryRow], [editorialRow], [sourceRow]] = await Promise.all([
    db.select({ n: count() }).from(entries).where(eq(entries.status, "published")),
    db.select({ n: count() }).from(categories).where(eq(categories.isActive, true)),
    db.select({ n: count() }).from(editorials).where(eq(editorials.status, "published")),
    db
      .select({ n: count() })
      .from(sources)
      .innerJoin(entries, and(eq(sources.entryId, entries.id), eq(entries.status, "published"))),
  ]);

  return {
    entryCount: entryRow?.n ?? 0,
    categoryCount: categoryRow?.n ?? 0,
    editorialCount: editorialRow?.n ?? 0,
    sourceCount: sourceRow?.n ?? 0,
  };
}
