"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { dismissFlag, removeFlaggedComment } from "@/db/queries/comments";

async function requireAdmin() {
  const session = await auth();
  if (session?.user.role !== "admin") throw new Error("Forbidden");
}

export async function dismissCommentFlag(commentId: string) {
  await requireAdmin();
  await dismissFlag(commentId);
  revalidatePath("/admin/comments");
  revalidatePath("/[locale]", "layout");
}

export async function removeComment(commentId: string) {
  await requireAdmin();
  await removeFlaggedComment(commentId);
  revalidatePath("/admin/comments");
  revalidatePath("/[locale]", "layout");
}
