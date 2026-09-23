import { db, isDbConfigured } from "@/db";
import { comments, editorials, entries, moderationFlags, users } from "@/db/schema";
import { and, asc, eq, isNull } from "drizzle-orm";

export interface CommentWithAuthor {
  id: string;
  body: string;
  createdAt: Date;
  authorName: string;
  authorImage: string | null;
  isOwn: boolean;
}

/** A comment targets exactly one of entryId/editorialId — never both, never neither. */
export type CommentTarget = { entryId: string } | { editorialId: string };

/** Visible comments for a target, oldest first (a normal discussion thread order). */
export async function getVisibleComments(
  target: CommentTarget,
  viewerUserId: string | null,
): Promise<CommentWithAuthor[]> {
  if (!isDbConfigured) return [];

  const targetClause =
    "entryId" in target
      ? eq(comments.entryId, target.entryId)
      : eq(comments.editorialId, target.editorialId);

  const rows = await db
    .select({
      id: comments.id,
      body: comments.body,
      createdAt: comments.createdAt,
      userId: comments.userId,
      authorName: users.name,
      authorImage: users.image,
    })
    .from(comments)
    .innerJoin(users, eq(comments.userId, users.id))
    .where(and(targetClause, eq(comments.status, "visible")))
    .orderBy(asc(comments.createdAt));

  return rows.map((r) => ({
    id: r.id,
    body: r.body,
    createdAt: r.createdAt,
    authorName: r.authorName ?? "Anonymous",
    authorImage: r.authorImage,
    isOwn: r.userId === viewerUserId,
  }));
}

const MIN_COMMENT_LENGTH = 2;
const MAX_COMMENT_LENGTH = 2000;

/** Throws on invalid input — callers (server actions) should catch and surface the message. */
export async function createComment(target: CommentTarget, userId: string, body: string) {
  const trimmed = body.trim();
  if (trimmed.length < MIN_COMMENT_LENGTH) throw new Error("Comment is too short");
  if (trimmed.length > MAX_COMMENT_LENGTH) throw new Error("Comment is too long");

  // The UI never links to a pending_review/draft/rejected item, but nothing
  // stopped a guessed or leaked id from being commented on before this check
  // — comments are meant to be discussion under real, live content only.
  const isPublished =
    "entryId" in target
      ? await db
          .select({ id: entries.id })
          .from(entries)
          .where(and(eq(entries.id, target.entryId), eq(entries.status, "published")))
          .limit(1)
          .then((r) => r.length > 0)
      : await db
          .select({ id: editorials.id })
          .from(editorials)
          .where(and(eq(editorials.id, target.editorialId), eq(editorials.status, "published")))
          .limit(1)
          .then((r) => r.length > 0);
  if (!isPublished) throw new Error("Cannot comment on unpublished content");

  const [comment] = await db
    .insert(comments)
    .values({
      entryId: "entryId" in target ? target.entryId : null,
      editorialId: "editorialId" in target ? target.editorialId : null,
      userId,
      body: trimmed,
    })
    .returning();
  return comment;
}

export async function flagComment(commentId: string, reporterUserId: string, reason: string | null) {
  await db.insert(moderationFlags).values({
    commentId,
    reporterUserId,
    reason: reason?.trim() || null,
  });
  await db.update(comments).set({ status: "flagged" }).where(eq(comments.id, commentId));
}

/** Comments currently flagged, for the /admin/comments moderation queue. */
export async function getFlaggedComments() {
  if (!isDbConfigured) return [];

  return db
    .select({
      id: comments.id,
      body: comments.body,
      createdAt: comments.createdAt,
      authorName: users.name,
      authorEmail: users.email,
      entryId: comments.entryId,
      editorialId: comments.editorialId,
    })
    .from(comments)
    .innerJoin(users, eq(comments.userId, users.id))
    .where(eq(comments.status, "flagged"))
    .orderBy(asc(comments.createdAt));
}

export async function dismissFlag(commentId: string) {
  await db.update(comments).set({ status: "visible" }).where(eq(comments.id, commentId));
  await db
    .update(moderationFlags)
    .set({ resolution: "dismissed", resolvedAt: new Date() })
    .where(and(eq(moderationFlags.commentId, commentId), isNull(moderationFlags.resolvedAt)));
}

export async function removeFlaggedComment(commentId: string) {
  await db.update(comments).set({ status: "removed" }).where(eq(comments.id, commentId));
  await db
    .update(moderationFlags)
    .set({ resolution: "removed", resolvedAt: new Date() })
    .where(and(eq(moderationFlags.commentId, commentId), isNull(moderationFlags.resolvedAt)));
}
