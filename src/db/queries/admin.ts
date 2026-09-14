import { db, isDbConfigured } from "@/db";
import {
  entries,
  categories,
  sourceSubmissions,
} from "@/db/schema";
import { count, desc, eq } from "drizzle-orm";

export async function getDashboardCounts() {
  if (!isDbConfigured) {
    return { pendingReview: 0, newSourceSubmissions: 0, published: 0 };
  }

  const [[pending], [newSubmissions], [publishedCount]] = await Promise.all([
    db
      .select({ value: count() })
      .from(entries)
      .where(eq(entries.status, "pending_review")),
    db
      .select({ value: count() })
      .from(sourceSubmissions)
      .where(eq(sourceSubmissions.status, "new")),
    db
      .select({ value: count() })
      .from(entries)
      .where(eq(entries.status, "published")),
  ]);

  return {
    pendingReview: pending?.value ?? 0,
    newSourceSubmissions: newSubmissions?.value ?? 0,
    published: publishedCount?.value ?? 0,
  };
}

/** Every entry regardless of status, for the admin entries list. */
export async function getAllEntriesForAdmin() {
  if (!isDbConfigured) return [];

  return db
    .select({
      id: entries.id,
      slug: entries.slug,
      titleEn: entries.titleEn,
      status: entries.status,
      categorySlug: categories.slug,
      categoryNameEn: categories.nameEn,
      publishDate: entries.publishDate,
    })
    .from(entries)
    .innerJoin(categories, eq(entries.categoryId, categories.id))
    .orderBy(desc(entries.createdAt));
}

export async function getPendingReviewEntries() {
  if (!isDbConfigured) return [];

  return db
    .select({
      id: entries.id,
      slug: entries.slug,
      titleEn: entries.titleEn,
      summaryEn: entries.summaryEn,
      categoryNameEn: categories.nameEn,
      confidenceScore: entries.confidenceScore,
      createdAt: entries.createdAt,
    })
    .from(entries)
    .innerJoin(categories, eq(entries.categoryId, categories.id))
    .where(eq(entries.status, "pending_review"))
    .orderBy(desc(entries.createdAt));
}

export async function getSourceSubmissions() {
  if (!isDbConfigured) return [];

  return db
    .select()
    .from(sourceSubmissions)
    .orderBy(desc(sourceSubmissions.createdAt));
}
