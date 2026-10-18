"use server";

import { revalidatePath } from "next/cache";
import { and, eq } from "drizzle-orm";
import type { BatchItem } from "drizzle-orm/batch";
import { db } from "@/db";
import { entryStats, entryStatTranslations, entryTranslations, translationDrafts } from "@/db/schema";
import { auth } from "@/auth";
import { deriveBody } from "@/lib/translation-drafts";

async function requireAdmin() {
  const session = await auth();
  if (session?.user.role !== "admin") throw new Error("Forbidden");
}

/**
 * Copies a pending draft into the live translation tables (the ones every
 * reader joins) and marks the draft published. Guarded on the draft still
 * being pending_review so a second tab cannot re-fire on a draft that was
 * already approved or rejected.
 */
export async function approveTranslationDraft(draftId: string) {
  await requireAdmin();
  const [draft] = await db
    .select()
    .from(translationDrafts)
    .where(and(eq(translationDrafts.id, draftId), eq(translationDrafts.status, "pending_review")))
    .limit(1);
  if (!draft) return;

  const statRows = await db
    .select({ id: entryStats.id, statKey: entryStats.statKey })
    .from(entryStats)
    .where(eq(entryStats.entryId, draft.entryId));
  const idByKey = new Map(statRows.map((s) => [s.statKey, s.id]));

  // neon-http has no interactive transactions; db.batch sends every statement
  // in one request and applies them atomically (all or none).
  const live = {
    title: draft.title,
    summary: draft.summary,
    body: deriveBody(draft.quickTake, draft.bodySections),
    quickTake: draft.quickTake,
    bodySections: draft.bodySections,
    updatedAt: new Date(),
  };
  const statements: BatchItem<"pg">[] = [
    db
      .insert(entryTranslations)
      .values({ entryId: draft.entryId, locale: draft.locale, ...live })
      .onConflictDoUpdate({ target: [entryTranslations.entryId, entryTranslations.locale], set: live }),
  ];
  for (const s of draft.stats) {
    const entryStatId = idByKey.get(s.statKey);
    if (!entryStatId) continue; // the stat row was removed after the draft was written
    const vals = {
      metricLabel: s.metricLabel,
      beforeLabel: s.beforeLabel,
      beforeValue: s.beforeValue,
      afterLabel: s.afterLabel,
      afterValue: s.afterValue,
      extraLabel: s.extraLabel ?? null,
      extraValue: s.extraValue ?? null,
    };
    statements.push(
      db
        .insert(entryStatTranslations)
        .values({ entryStatId, locale: draft.locale, ...vals })
        .onConflictDoUpdate({ target: [entryStatTranslations.entryStatId, entryStatTranslations.locale], set: vals }),
    );
  }
  statements.push(
    db.update(translationDrafts).set({ status: "published", updatedAt: new Date() }).where(eq(translationDrafts.id, draft.id)),
  );
  await db.batch(statements as [BatchItem<"pg">, ...BatchItem<"pg">[]]);

  revalidatePath("/admin/translations");
  revalidatePath("/[locale]", "layout");
}

export async function rejectTranslationDraft(draftId: string) {
  await requireAdmin();
  await db
    .update(translationDrafts)
    .set({ status: "rejected", updatedAt: new Date() })
    .where(and(eq(translationDrafts.id, draftId), eq(translationDrafts.status, "pending_review")));
  revalidatePath("/admin/translations");
}
