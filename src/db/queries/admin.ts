import { db, isDbConfigured } from "@/db";
import {
  entries,
  categories,
  sourceSubmissions,
  feedbackSubmissions,
  editorials,
  comments,
  comparisons,
} from "@/db/schema";
import { count, desc, eq, or } from "drizzle-orm";

export async function getDashboardCounts() {
  if (!isDbConfigured) {
    return {
      pendingReview: 0,
      newSourceSubmissions: 0,
      newFeedback: 0,
      published: 0,
      pendingReviewEditorials: 0,
      flaggedComments: 0,
      pendingReviewComparisons: 0,
    };
  }

  const [
    [pending],
    [newSubmissions],
    [newFeedback],
    [publishedCount],
    [pendingEditorials],
    [flagged],
    [pendingComparisons],
  ] = await Promise.all([
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
      .from(feedbackSubmissions)
      .where(eq(feedbackSubmissions.status, "new")),
    db
      .select({ value: count() })
      .from(entries)
      .where(eq(entries.status, "published")),
    db
      .select({ value: count() })
      .from(editorials)
      .where(eq(editorials.status, "pending_review")),
    db
      .select({ value: count() })
      .from(comments)
      .where(eq(comments.status, "flagged")),
    db
      .select({ value: count() })
      .from(comparisons)
      .where(eq(comparisons.status, "pending_review")),
  ]);

  return {
    pendingReview: pending?.value ?? 0,
    newSourceSubmissions: newSubmissions?.value ?? 0,
    newFeedback: newFeedback?.value ?? 0,
    published: publishedCount?.value ?? 0,
    pendingReviewEditorials: pendingEditorials?.value ?? 0,
    flaggedComments: flagged?.value ?? 0,
    pendingReviewComparisons: pendingComparisons?.value ?? 0,
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

/**
 * Every entry's slug/title/category regardless of status — used by the
 * pipeline's dedup check (/api/pipeline/existing-slugs) so the drafting
 * agent avoids re-covering a topic that's already published, still
 * pending review, or was previously rejected.
 */
export async function getAllEntrySlugsForDedupe() {
  if (!isDbConfigured) return [];

  return db
    .select({
      slug: entries.slug,
      titleEn: entries.titleEn,
      categorySlug: categories.slug,
    })
    .from(entries)
    .innerJoin(categories, eq(entries.categoryId, categories.id));
}

export async function getPendingReviewEditorials() {
  if (!isDbConfigured) return [];

  return db
    .select({
      id: editorials.id,
      slug: editorials.slug,
      headlineEn: editorials.headlineEn,
      bodyEn: editorials.bodyEn,
      tone: editorials.tone,
      relatedEntryTitleEn: entries.titleEn,
      relatedEntrySlug: entries.slug,
      createdAt: editorials.createdAt,
    })
    .from(editorials)
    .innerJoin(entries, eq(editorials.relatedEntryId, entries.id))
    .where(eq(editorials.status, "pending_review"))
    .orderBy(desc(editorials.createdAt));
}

export async function getAllEditorialsForAdmin() {
  if (!isDbConfigured) return [];

  return db
    .select({
      id: editorials.id,
      slug: editorials.slug,
      headlineEn: editorials.headlineEn,
      status: editorials.status,
      tone: editorials.tone,
      relatedEntrySlug: entries.slug,
      publishDate: editorials.publishDate,
    })
    .from(editorials)
    .innerJoin(entries, eq(editorials.relatedEntryId, entries.id))
    .orderBy(desc(editorials.createdAt));
}

/**
 * Published entries that don't already have a published or pending-review
 * editorial about them — used both by the admin's "New editorial" form
 * (as the relatedEntry choices) and by the pipeline's editorial-candidates
 * endpoint, so an agent (or the admin) doesn't write a 2nd editorial about
 * the same entry while one is still live or awaiting review. A rejected
 * editorial doesn't block a fresh attempt at the same entry.
 */
export async function getPendingReviewComparisons() {
  if (!isDbConfigured) return [];

  return db
    .select({
      id: comparisons.id,
      slug: comparisons.slug,
      titleEn: comparisons.titleEn,
      metricLabelEn: comparisons.metricLabelEn,
      narrativeEn: comparisons.narrativeEn,
      categoryNameEn: categories.nameEn,
      createdAt: comparisons.createdAt,
    })
    .from(comparisons)
    .innerJoin(categories, eq(comparisons.categoryId, categories.id))
    .where(eq(comparisons.status, "pending_review"))
    .orderBy(desc(comparisons.createdAt));
}

export async function getAllComparisonsForAdmin() {
  if (!isDbConfigured) return [];

  return db
    .select({
      id: comparisons.id,
      slug: comparisons.slug,
      titleEn: comparisons.titleEn,
      status: comparisons.status,
      categoryNameEn: categories.nameEn,
      publishDate: comparisons.publishDate,
    })
    .from(comparisons)
    .innerJoin(categories, eq(comparisons.categoryId, categories.id))
    .orderBy(desc(comparisons.createdAt));
}

export async function getEntriesEligibleForEditorial() {
  if (!isDbConfigured) return [];

  const allPublished = await db
    .select({ id: entries.id, slug: entries.slug, titleEn: entries.titleEn })
    .from(entries)
    .where(eq(entries.status, "published"))
    .orderBy(desc(entries.publishDate));

  // Not rejected — a rejected editorial doesn't block a fresh attempt.
  const covered = await db
    .select({ relatedEntryId: editorials.relatedEntryId })
    .from(editorials)
    .where(or(eq(editorials.status, "pending_review"), eq(editorials.status, "published")));

  const coveredIds = new Set(covered.map((c) => c.relatedEntryId));
  return allPublished.filter((e) => !coveredIds.has(e.id));
}
