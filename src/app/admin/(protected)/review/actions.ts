"use server";

import { revalidatePath } from "next/cache";
import { and, eq } from "drizzle-orm";
import { db } from "@/db";
import { entries } from "@/db/schema";
import { auth } from "@/auth";

async function requireAdmin() {
  const session = await auth();
  if (session?.user.role !== "admin") throw new Error("Forbidden");
}

// Both guard on the row still being pending_review — without it, two admin
// tabs open (or a slow bulk action racing a single-item one) could re-fire
// on a row already approved/rejected by the other request in between.
export async function approveEntry(entryId: string) {
  await requireAdmin();
  await db
    .update(entries)
    .set({ status: "published", publishDate: new Date(), updatedAt: new Date() })
    .where(and(eq(entries.id, entryId), eq(entries.status, "pending_review")));
  revalidatePath("/admin/review");
  revalidatePath("/admin", "layout"); // refreshes AdminNav's sidebar badge count too
  revalidatePath("/[locale]", "layout");
}

export async function rejectEntry(entryId: string) {
  await requireAdmin();
  await db
    .update(entries)
    .set({ status: "rejected", updatedAt: new Date() })
    .where(and(eq(entries.id, entryId), eq(entries.status, "pending_review")));
  revalidatePath("/admin/review");
  revalidatePath("/admin", "layout");
}
