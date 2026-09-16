"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { entries, sources, tags, entryTags, entryStats } from "@/db/schema";
import { auth } from "@/auth";

async function requireAdmin() {
  const session = await auth();
  if (session?.user.role !== "admin") throw new Error("Forbidden");
  return session;
}

interface EditBodySection {
  heading: string;
  body: string;
}
interface EditSource {
  url: string;
  publisher: string;
  title: string;
  credibilityTier: "official_primary" | "reputable_media" | "secondary";
}
interface EditTag {
  slug: string;
  labelHi: string;
  labelEn: string;
}
interface EditStat {
  statKey: string;
  metricLabelHi: string;
  metricLabelEn: string;
  beforeLabelHi: string;
  beforeLabelEn: string;
  beforeValueHi: string;
  beforeValueEn: string;
  beforeValueNumeric: string;
  afterLabelHi: string;
  afterLabelEn: string;
  afterValueHi: string;
  afterValueEn: string;
  afterValueNumeric: string;
  extraLabelHi: string;
  extraLabelEn: string;
  extraValueHi: string;
  extraValueEn: string;
  extraValueNumeric: string;
}

/**
 * Edit an existing entry. Always resets status to pending_review, even if
 * it was already published — same discipline as editorials'/comparisons'
 * update actions: a content change needs fresh eyes before it's public
 * again. Sources/tags/stats are re-synced (delete + insert / upsert),
 * mirroring scripts/seed.ts's own re-sync pattern exactly.
 */
export async function updateEntry(
  entryId: string,
  input: {
    categoryId: string;
    titleHi: string;
    titleEn: string;
    summaryHi: string;
    summaryEn: string;
    quickTakeHi: string;
    quickTakeEn: string;
    bodySectionsHi: EditBodySection[];
    bodySectionsEn: EditBodySection[];
    impactType: "tangible" | "intangible" | "mixed";
    timelineStartDate: string;
    timelineEndDate: string;
    tagsInput: EditTag[];
    sourcesInput: EditSource[];
    statsInput: EditStat[];
  },
) {
  await requireAdmin();

  if (!input.categoryId) throw new Error("Category is required");
  if (!input.titleHi || !input.titleEn) throw new Error("Title (both languages) is required");
  if (!input.summaryHi || !input.summaryEn) throw new Error("Summary (both languages) is required");
  if (input.sourcesInput.length === 0) throw new Error("At least 1 source is required");

  const bodyHi = [input.quickTakeHi, ...input.bodySectionsHi.map((s) => `${s.heading}\n\n${s.body}`)]
    .filter(Boolean)
    .join("\n\n");
  const bodyEn = [input.quickTakeEn, ...input.bodySectionsEn.map((s) => `${s.heading}\n\n${s.body}`)]
    .filter(Boolean)
    .join("\n\n");

  await db
    .update(entries)
    .set({
      categoryId: input.categoryId,
      titleHi: input.titleHi,
      titleEn: input.titleEn,
      summaryHi: input.summaryHi,
      summaryEn: input.summaryEn,
      quickTakeHi: input.quickTakeHi || null,
      quickTakeEn: input.quickTakeEn || null,
      bodySectionsHi: input.bodySectionsHi.length > 0 ? input.bodySectionsHi : null,
      bodySectionsEn: input.bodySectionsEn.length > 0 ? input.bodySectionsEn : null,
      bodyHi,
      bodyEn,
      impactType: input.impactType,
      timelineStartDate: input.timelineStartDate ? new Date(input.timelineStartDate) : null,
      timelineEndDate: input.timelineEndDate ? new Date(input.timelineEndDate) : null,
      lastVerifiedDate: new Date(),
      status: "pending_review",
      publishDate: null,
      updatedAt: new Date(),
    })
    .where(eq(entries.id, entryId));

  await db.delete(sources).where(eq(sources.entryId, entryId));
  if (input.sourcesInput.length > 0) {
    await db.insert(sources).values(
      input.sourcesInput.map((s) => ({
        entryId,
        url: s.url,
        publisher: s.publisher,
        title: s.title || null,
        credibilityTier: s.credibilityTier,
      })),
    );
  }

  const tagIds: string[] = [];
  for (const tagInput of input.tagsInput) {
    const [tag] = await db
      .insert(tags)
      .values(tagInput)
      .onConflictDoUpdate({
        target: tags.slug,
        set: { labelHi: tagInput.labelHi, labelEn: tagInput.labelEn },
      })
      .returning();
    tagIds.push(tag.id);
  }
  await db.delete(entryTags).where(eq(entryTags.entryId, entryId));
  if (tagIds.length > 0) {
    await db.insert(entryTags).values(tagIds.map((tagId) => ({ entryId, tagId })));
  }

  await db.delete(entryStats).where(eq(entryStats.entryId, entryId));
  if (input.statsInput.length > 0) {
    await db.insert(entryStats).values(
      input.statsInput.map((s, i) => ({
        entryId,
        sortOrder: i,
        statKey: s.statKey || `stat_${i}`,
        metricLabelHi: s.metricLabelHi,
        metricLabelEn: s.metricLabelEn,
        beforeLabelHi: s.beforeLabelHi,
        beforeLabelEn: s.beforeLabelEn,
        beforeValueHi: s.beforeValueHi,
        beforeValueEn: s.beforeValueEn,
        beforeValueNumeric: s.beforeValueNumeric || null,
        afterLabelHi: s.afterLabelHi,
        afterLabelEn: s.afterLabelEn,
        afterValueHi: s.afterValueHi,
        afterValueEn: s.afterValueEn,
        afterValueNumeric: s.afterValueNumeric || null,
        extraLabelHi: s.extraLabelHi || null,
        extraLabelEn: s.extraLabelEn || null,
        extraValueHi: s.extraValueHi || null,
        extraValueEn: s.extraValueEn || null,
        extraValueNumeric: s.extraValueNumeric || null,
      })),
    );
  }

  revalidatePath("/admin/entries");
  revalidatePath("/admin/review");
  revalidatePath("/admin", "layout");
  revalidatePath("/[locale]", "layout");
}

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
