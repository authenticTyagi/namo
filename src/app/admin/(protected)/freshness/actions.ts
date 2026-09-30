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

/**
 * The lightweight "I checked it, it's still accurate" confirmation —
 * bumps lastVerifiedDate only. Deliberately does NOT touch `status` or
 * any content field: unlike editing an entry (which always resets it to
 * pending_review, per updateEntry in ../entries/actions.ts), a bulk
 * freshness confirmation is a metadata-only attestation, not a content
 * change, so the entry stays published throughout. Guarded on the row
 * still being published — this button only ever appears on already-
 * published entries.
 */
export async function markEntryVerified(entryId: string) {
  await requireAdmin();
  await db
    .update(entries)
    .set({ lastVerifiedDate: new Date(), updatedAt: new Date() })
    .where(and(eq(entries.id, entryId), eq(entries.status, "published")));
  revalidatePath("/admin/freshness");
  revalidatePath("/admin", "layout"); // refreshes AdminNav's sidebar badge count too
  revalidatePath("/[locale]", "layout"); // public entry page shows "last verified"
}
