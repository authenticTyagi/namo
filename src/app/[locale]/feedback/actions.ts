"use server";

import { db } from "@/db";
import { feedbackSubmissions } from "@/db/schema";

export async function submitFeedback(formData: FormData) {
  const category = String(formData.get("category") ?? "other");
  const message = String(formData.get("message") ?? "").trim();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const relatedEntrySlug = String(formData.get("relatedEntrySlug") ?? "").trim();

  if (!message) throw new Error("Message is required");
  if (!["report_issue", "suggest_source", "other"].includes(category)) {
    throw new Error("Invalid category");
  }

  await db.insert(feedbackSubmissions).values({
    category: category as "report_issue" | "suggest_source" | "other",
    message,
    name: name || null,
    email: email || null,
    relatedEntrySlug: relatedEntrySlug || null,
  });

  return { ok: true };
}
