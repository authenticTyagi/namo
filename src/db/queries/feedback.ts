import { db, isDbConfigured } from "@/db";
import { feedbackSubmissions } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getFeedbackSubmissions() {
  if (!isDbConfigured) return [];

  return db.select().from(feedbackSubmissions).orderBy(desc(feedbackSubmissions.createdAt));
}
