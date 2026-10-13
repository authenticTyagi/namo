"use server";

import { count, gte } from "drizzle-orm";
import { db } from "@/db";
import { feedbackSubmissions } from "@/db/schema";

const MAX_MESSAGE = 3000;
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_SLUG = 200;
// Anonymous endpoint, so the cap is global (no per-user key): enough for real
// feedback, small enough that a flood can't fill the table unnoticed.
const GLOBAL_HOURLY_LIMIT = 30;

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

  if (message.length > MAX_MESSAGE) throw new Error("Message is too long");
  if (name.length > MAX_NAME) throw new Error("Name is too long");
  if (email && (email.length > MAX_EMAIL || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    throw new Error("Invalid email");
  }
  if (relatedEntrySlug.length > MAX_SLUG) throw new Error("Invalid entry reference");

  const [{ n }] = await db
    .select({ n: count() })
    .from(feedbackSubmissions)
    .where(gte(feedbackSubmissions.createdAt, new Date(Date.now() - 60 * 60 * 1000)));
  if (n >= GLOBAL_HOURLY_LIMIT) throw new Error("Too many submissions right now. Please try again later.");

  await db.insert(feedbackSubmissions).values({
    category: category as "report_issue" | "suggest_source" | "other",
    message,
    name: name || null,
    email: email || null,
    relatedEntrySlug: relatedEntrySlug || null,
  });

  return { ok: true };
}
