"use server";

import { revalidatePath } from "next/cache";
import { and, eq } from "drizzle-orm";
import { db } from "@/db";
import { editorials } from "@/db/schema";
import { auth } from "@/auth";

async function requireAdmin() {
  const session = await auth();
  if (session?.user.role !== "admin") throw new Error("Forbidden");
  return session;
}

// Both guard on the row still being pending_review — without it, two admin
// tabs open (or a slow bulk action racing a single-item one) could re-fire
// on a row already approved/rejected by the other request in between.
export async function approveEditorial(editorialId: string) {
  await requireAdmin();
  await db
    .update(editorials)
    .set({ status: "published", publishDate: new Date(), updatedAt: new Date() })
    .where(and(eq(editorials.id, editorialId), eq(editorials.status, "pending_review")));
  revalidatePath("/admin/editorials");
  revalidatePath("/admin/review");
  revalidatePath("/admin", "layout");
  revalidatePath("/[locale]", "layout");
}

export async function rejectEditorial(editorialId: string) {
  await requireAdmin();
  await db
    .update(editorials)
    .set({ status: "rejected", updatedAt: new Date() })
    .where(and(eq(editorials.id, editorialId), eq(editorials.status, "pending_review")));
  revalidatePath("/admin/editorials");
  revalidatePath("/admin/review");
  revalidatePath("/admin", "layout");
}

/**
 * Pull an already-published editorial off the public site without deleting
 * it or marking it "rejected" (which reads as "this was reviewed and found
 * unfit" — wrong signal for "pulling this while we reconsider"). Mirrors
 * entries' own draft/published toggle (PublishToggleButton.tsx) exactly.
 */
export async function toggleEditorialPublishStatus(
  editorialId: string,
  nextStatus: "published" | "draft",
) {
  await requireAdmin();
  await db
    .update(editorials)
    .set({
      status: nextStatus,
      publishDate: nextStatus === "published" ? new Date() : null,
      updatedAt: new Date(),
    })
    .where(eq(editorials.id, editorialId));
  revalidatePath("/admin/editorials");
  revalidatePath("/[locale]", "layout");
}

const TONES = ["positive", "negative", "neutral", "mixed"] as const;

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

/**
 * Manual editorial creation, from /admin/editorials/new. Exists because the
 * automated drafting pipeline for editorials faces the same cloud-routine
 * network-egress block as the entries pipeline (see PROJECT_LOG.md) — until
 * that's fixed, this is the only way an editorial gets written at all.
 * Always lands as pending_review, same as a pipeline submission, so the
 * "nothing auto-publishes" rule holds regardless of who authored it.
 */
export async function createEditorial(formData: FormData) {
  const session = await requireAdmin();

  const relatedEntryId = String(formData.get("relatedEntryId") ?? "").trim();
  const headlineHi = String(formData.get("headlineHi") ?? "").trim();
  const headlineEn = String(formData.get("headlineEn") ?? "").trim();
  const bodyHi = String(formData.get("bodyHi") ?? "").trim();
  const bodyEn = String(formData.get("bodyEn") ?? "").trim();
  const tone = String(formData.get("tone") ?? "");

  if (!relatedEntryId) throw new Error("Related entry is required");
  if (!headlineHi || !headlineEn) throw new Error("Headline (both languages) is required");
  if (!bodyHi || !bodyEn) throw new Error("Body (both languages) is required");
  if (!TONES.includes(tone as (typeof TONES)[number])) throw new Error("Invalid tone");

  const baseSlug = slugify(headlineEn) || "editorial";
  let slug = baseSlug;
  let suffix = 1;
  // Small collision loop — editorial volume is low enough this is fine
  // without a dedicated existence-check query.
  for (;;) {
    const [existing] = await db
      .select({ id: editorials.id })
      .from(editorials)
      .where(eq(editorials.slug, slug))
      .limit(1);
    if (!existing) break;
    suffix += 1;
    slug = `${baseSlug}-${suffix}`;
  }

  await db.insert(editorials).values({
    slug,
    relatedEntryId,
    headlineHi,
    headlineEn,
    bodyHi,
    bodyEn,
    tone: tone as (typeof TONES)[number],
    status: "pending_review",
    sourceOfCreation: "manual",
    createdBy: session!.user.id,
  });

  revalidatePath("/admin/editorials");
}

/**
 * Edit an existing editorial's content/tone. Always resets status to
 * pending_review, even if it was already published — same discipline as
 * /api/pipeline/editorial-update: a content change means it needs fresh
 * eyes before it's public again, regardless of what it was before the
 * edit. See the UPI-editorial incident in PROJECT_LOG.md for why this
 * isn't optional.
 */
export async function updateEditorial(editorialId: string, formData: FormData) {
  await requireAdmin();

  const headlineHi = String(formData.get("headlineHi") ?? "").trim();
  const headlineEn = String(formData.get("headlineEn") ?? "").trim();
  const bodyHi = String(formData.get("bodyHi") ?? "").trim();
  const bodyEn = String(formData.get("bodyEn") ?? "").trim();
  const tone = String(formData.get("tone") ?? "");

  if (!headlineHi || !headlineEn) throw new Error("Headline (both languages) is required");
  if (!bodyHi || !bodyEn) throw new Error("Body (both languages) is required");
  if (!TONES.includes(tone as (typeof TONES)[number])) throw new Error("Invalid tone");

  await db
    .update(editorials)
    .set({
      headlineHi,
      headlineEn,
      bodyHi,
      bodyEn,
      tone: tone as (typeof TONES)[number],
      status: "pending_review",
      publishDate: null,
      updatedAt: new Date(),
    })
    .where(eq(editorials.id, editorialId));

  revalidatePath("/admin/editorials");
  revalidatePath("/admin/review");
  revalidatePath("/admin", "layout");
  revalidatePath("/[locale]", "layout");
}
