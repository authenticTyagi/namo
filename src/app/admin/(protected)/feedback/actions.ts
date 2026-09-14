"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { feedbackSubmissions } from "@/db/schema";
import { auth } from "@/auth";

export async function markFeedbackStatus(
  id: string,
  status: "read" | "resolved",
) {
  const session = await auth();
  if (session?.user.role !== "admin") throw new Error("Forbidden");

  await db.update(feedbackSubmissions).set({ status }).where(eq(feedbackSubmissions.id, id));
  revalidatePath("/admin/feedback");
}
