"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { createComment, flagComment, type CommentTarget } from "@/db/queries/comments";

export async function postComment(target: CommentTarget, body: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Sign in required");
  await createComment(target, session.user.id, body);
  // Locale-agnostic revalidation, same pattern as the existing admin review
  // actions (src/app/admin/(protected)/review/actions.ts) — simpler than
  // threading the exact current pathname through a client component.
  revalidatePath("/[locale]", "layout");
}

export async function reportComment(commentId: string, reason: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Sign in required");
  await flagComment(commentId, session.user.id, reason);
  revalidatePath("/[locale]", "layout");
}
