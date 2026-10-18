"use server";

import { auth } from "@/auth";
import { createComment, flagComment, type CommentTarget } from "@/db/queries/comments";

// No revalidatePath here: comments are fetched client-side from /api/comments,
// so they are not part of any cached page. Revalidating the whole locale
// layout on each comment would purge every cached page.

export async function postComment(target: CommentTarget, body: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Sign in required");
  await createComment(target, session.user.id, body);
}

export async function reportComment(commentId: string, reason: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Sign in required");
  await flagComment(commentId, session.user.id, reason);
}
