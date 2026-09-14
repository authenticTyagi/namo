"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { entries } from "@/db/schema";
import { auth } from "@/auth";

export async function togglePublishStatus(
  entryId: string,
  nextStatus: "published" | "draft",
) {
  const session = await auth();
  if (session?.user.role !== "admin") throw new Error("Forbidden");

  await db
    .update(entries)
    .set({
      status: nextStatus,
      publishDate: nextStatus === "published" ? new Date() : null,
      updatedAt: new Date(),
    })
    .where(eq(entries.id, entryId));

  revalidatePath("/admin/entries");
  revalidatePath("/[locale]", "layout");
}
