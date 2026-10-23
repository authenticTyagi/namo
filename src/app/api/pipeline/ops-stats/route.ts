import { and, count, desc, eq, gte, isNull, lt, or, sql } from "drizzle-orm";
import { db, isDbConfigured } from "@/db";
import {
  categories,
  comments,
  comparisons,
  editorials,
  entries,
  feedbackSubmissions,
  users,
} from "@/db/schema";
import { getTranslationDraftCounts } from "@/db/queries/admin";
import { isAuthorizedPipelineRequest } from "@/lib/pipeline-auth";

export const dynamic = "force-dynamic";

const STALE_ENTRY_DAYS = 180;
const DAY_MS = 24 * 60 * 60 * 1000;

type StatusCount = { status: string; n: number };

function toMap(rows: StatusCount[]): Record<string, number> {
  return Object.fromEntries(rows.map((r) => [r.status, Number(r.n)]));
}

/**
 * Read-only aggregates for the ops agents (scripts/ops). Counts and titles of
 * published content only: no comment bodies, emails, names or user ids ever
 * leave this route. Same bearer-secret auth as the other pipeline routes.
 */
export async function GET(request: Request) {
  if (!isAuthorizedPipelineRequest(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!isDbConfigured) {
    return Response.json({ error: "Database not configured" }, { status: 503 });
  }

  const now = Date.now();
  const staleCutoff = new Date(now - STALE_ENTRY_DAYS * DAY_MS);
  const recentCutoff = new Date(now - 14 * DAY_MS);
  const weekAgo = new Date(now - 7 * DAY_MS);

  const [
    entryStatus,
    editorialStatus,
    comparisonStatus,
    commentStatus,
    feedbackStatus,
    translationStatus,
    feedbackCategory,
    [{ n: userCount }],
    [{ n: staleCount }],
    [{ n: lowConfidencePublished }],
    [{ n: commentsLast7d }],
    [oldestPending],
    categoryRows,
    recentPublished,
    mostCommented,
    dbSize,
  ] = await Promise.all([
    db.select({ status: entries.status, n: count() }).from(entries).groupBy(entries.status),
    db.select({ status: editorials.status, n: count() }).from(editorials).groupBy(editorials.status),
    db.select({ status: comparisons.status, n: count() }).from(comparisons).groupBy(comparisons.status),
    db.select({ status: comments.status, n: count() }).from(comments).groupBy(comments.status),
    db
      .select({ status: feedbackSubmissions.status, n: count() })
      .from(feedbackSubmissions)
      .groupBy(feedbackSubmissions.status),
    getTranslationDraftCounts(),
    db
      .select({ status: feedbackSubmissions.category, n: count() })
      .from(feedbackSubmissions)
      .where(eq(feedbackSubmissions.status, "new"))
      .groupBy(feedbackSubmissions.category),
    db.select({ n: count() }).from(users),
    db
      .select({ n: count() })
      .from(entries)
      .where(
        and(
          eq(entries.status, "published"),
          or(isNull(entries.lastVerifiedDate), lt(entries.lastVerifiedDate, staleCutoff)),
        ),
      ),
    db
      .select({ n: count() })
      .from(entries)
      .where(and(eq(entries.status, "published"), lt(entries.confidenceScore, "0.50"))),
    db.select({ n: count() }).from(comments).where(gte(comments.createdAt, weekAgo)),
    db
      .select({ createdAt: sql<Date>`min(${entries.createdAt})` })
      .from(entries)
      .where(eq(entries.status, "pending_review")),
    db
      .select({
        slug: categories.slug,
        nameEn: categories.nameEn,
        status: entries.status,
        n: count(),
      })
      .from(entries)
      .innerJoin(categories, eq(entries.categoryId, categories.id))
      .groupBy(categories.slug, categories.nameEn, entries.status),
    db
      .select({
        slug: entries.slug,
        titleEn: entries.titleEn,
        titleHi: entries.titleHi,
        publishDate: entries.publishDate,
      })
      .from(entries)
      .where(and(eq(entries.status, "published"), gte(entries.publishDate, recentCutoff)))
      .orderBy(desc(entries.publishDate))
      .limit(10),
    db
      .select({ slug: entries.slug, titleEn: entries.titleEn, n: count() })
      .from(comments)
      .innerJoin(entries, eq(comments.entryId, entries.id))
      .where(eq(comments.status, "visible"))
      .groupBy(entries.slug, entries.titleEn)
      .orderBy(desc(count()))
      .limit(5),
    db.execute(sql`select pg_database_size(current_database())::bigint as bytes`),
  ]);

  const sizeRows = Array.isArray(dbSize) ? dbSize : (dbSize as { rows: unknown[] }).rows;
  const dbBytes = Number((sizeRows[0] as { bytes: string | number } | undefined)?.bytes ?? 0);

  const byCategory = new Map<string, { slug: string; nameEn: string; published: number; pending: number }>();
  for (const r of categoryRows) {
    const row = byCategory.get(r.slug) ?? { slug: r.slug, nameEn: r.nameEn, published: 0, pending: 0 };
    if (r.status === "published") row.published += Number(r.n);
    if (r.status === "pending_review") row.pending += Number(r.n);
    byCategory.set(r.slug, row);
  }

  const oldestPendingAt = oldestPending?.createdAt ? new Date(oldestPending.createdAt) : null;

  return Response.json(
    {
      generatedAt: new Date(now).toISOString(),
      dbBytes,
      counts: {
        entries: toMap(entryStatus),
        editorials: toMap(editorialStatus),
        comparisons: toMap(comparisonStatus),
        comments: toMap(commentStatus),
        feedback: toMap(feedbackStatus),
        translationQueue: toMap(translationStatus),
        users: Number(userCount),
      },
      newFeedbackByCategory: toMap(feedbackCategory),
      oldestPendingAgeDays: oldestPendingAt ? Math.floor((now - oldestPendingAt.getTime()) / DAY_MS) : null,
      staleEntries: Number(staleCount),
      lowConfidencePublished: Number(lowConfidencePublished),
      commentsLast7d: Number(commentsLast7d),
      categories: [...byCategory.values()].sort((a, b) => a.published - b.published),
      recentPublished,
      mostCommented: mostCommented.map((m) => ({ slug: m.slug, titleEn: m.titleEn, comments: Number(m.n) })),
    },
    { headers: { "Cache-Control": "private, no-store" } },
  );
}
