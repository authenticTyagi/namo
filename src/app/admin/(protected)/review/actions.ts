"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { entries } from "@/db/schema";
import { auth } from "@/auth";

async function requireAdmin() {
  const session = await auth();
  if (session?.user.role !== "admin") throw new Error("Forbidden");
}

export async function approveEntry(entryId: string) {
  await requireAdmin();
  await db
    .update(entries)
    .set({ status: "published", publishDate: new Date(), updatedAt: new Date() })
    .where(eq(entries.id, entryId));
  revalidatePath("/admin/review");
  revalidatePath("/[locale]", "layout");
}

export async function rejectEntry(entryId: string) {
  await requireAdmin();
  await db
    .update(entries)
    .set({ status: "rejected", updatedAt: new Date() })
    .where(eq(entries.id, entryId));
  revalidatePath("/admin/review");
}
