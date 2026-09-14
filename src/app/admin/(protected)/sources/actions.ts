"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { sourceSubmissions } from "@/db/schema";
import { auth } from "@/auth";

export async function createSourceSubmission(formData: FormData) {
  const session = await auth();
  if (session?.user.role !== "admin") throw new Error("Forbidden");

  const url = String(formData.get("url") ?? "").trim();
  const note = String(formData.get("note") ?? "").trim();
  const topicHint = String(formData.get("topicHint") ?? "").trim();

  if (!url || !note) throw new Error("URL and note are required");

  await db.insert(sourceSubmissions).values({
    url,
    note,
    topicHint: topicHint || null,
    createdBy: session.user.id ?? null,
  });

  revalidatePath("/admin/sources");
}

export async function markSourceSubmissionReviewed(id: string) {
  const session = await auth();
  if (session?.user.role !== "admin") throw new Error("Forbidden");

  await db
    .update(sourceSubmissions)
    .set({ status: "reviewed" })
    .where(eq(sourceSubmissions.id, id));

  revalidatePath("/admin/sources");
}
