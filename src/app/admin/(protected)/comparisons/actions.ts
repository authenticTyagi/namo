"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { comparisons, comparisonPoints, comparisonSources } from "@/db/schema";
import { auth } from "@/auth";

async function requireAdmin() {
  const session = await auth();
  if (session?.user.role !== "admin") throw new Error("Forbidden");
  return session;
}

export async function approveComparison(comparisonId: string) {
  await requireAdmin();
  await db
    .update(comparisons)
    .set({ status: "published", publishDate: new Date(), updatedAt: new Date() })
    .where(eq(comparisons.id, comparisonId));
  revalidatePath("/admin/comparisons");
  revalidatePath("/admin/review");
  revalidatePath("/admin", "layout");
  revalidatePath("/[locale]", "layout");
}

export async function rejectComparison(comparisonId: string) {
  await requireAdmin();
  await db
    .update(comparisons)
    .set({ status: "rejected", updatedAt: new Date() })
    .where(eq(comparisons.id, comparisonId));
  revalidatePath("/admin/comparisons");
  revalidatePath("/admin/review");
  revalidatePath("/admin", "layout");
}

/**
 * Pull an already-published comparison off the public site without
 * deleting it or marking it "rejected". Mirrors entries' draft/published
 * toggle (PublishToggleButton.tsx) and editorials' own version of the
 * same thing.
 */
export async function toggleComparisonPublishStatus(
  comparisonId: string,
  nextStatus: "published" | "draft",
) {
  await requireAdmin();
  await db
    .update(comparisons)
    .set({
      status: nextStatus,
      publishDate: nextStatus === "published" ? new Date() : null,
      updatedAt: new Date(),
    })
    .where(eq(comparisons.id, comparisonId));
  revalidatePath("/admin/comparisons");
  revalidatePath("/[locale]", "layout");
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

interface CountryRow {
  nameHi: string;
  nameEn: string;
  valueHi: string;
  valueEn: string;
  valueNumeric: string;
  isIndia: boolean;
}

interface SourceRow {
  url: string;
  publisher: string;
  title: string;
  credibilityTier: "official_primary" | "reputable_media" | "secondary";
}

/**
 * Manual comparison creation, from /admin/comparisons/new — same rationale
 * as editorials' manual form: no automated drafting pipeline exists for
 * this content type yet, so this is the only way one gets written today.
 * Always lands as pending_review.
 */
export async function createComparison(input: {
  categoryId: string;
  relatedEntryId: string | null;
  titleHi: string;
  titleEn: string;
  metricLabelHi: string;
  metricLabelEn: string;
  unitHi: string;
  unitEn: string;
  narrativeHi: string;
  narrativeEn: string;
  countries: CountryRow[];
  sources: SourceRow[];
}) {
  const session = await requireAdmin();

  if (!input.categoryId) throw new Error("Category is required");
  if (!input.titleHi || !input.titleEn) throw new Error("Title (both languages) is required");
  if (!input.metricLabelHi || !input.metricLabelEn) throw new Error("Metric label is required");
  if (!input.narrativeHi || !input.narrativeEn) throw new Error("Narrative (both languages) is required");
  if (input.countries.length < 2) throw new Error("At least 2 countries are required for a comparison");
  if (!input.countries.some((c) => c.isIndia)) throw new Error("One country must be marked as India");
  if (input.sources.length === 0) throw new Error("At least 1 source is required");

  const baseSlug = slugify(input.titleEn) || "comparison";
  let slug = baseSlug;
  let suffix = 1;
  for (;;) {
    const [existing] = await db
      .select({ id: comparisons.id })
      .from(comparisons)
      .where(eq(comparisons.slug, slug))
      .limit(1);
    if (!existing) break;
    suffix += 1;
    slug = `${baseSlug}-${suffix}`;
  }

  const [comparison] = await db
    .insert(comparisons)
    .values({
      slug,
      categoryId: input.categoryId,
      relatedEntryId: input.relatedEntryId || null,
      titleHi: input.titleHi,
      titleEn: input.titleEn,
      metricLabelHi: input.metricLabelHi,
      metricLabelEn: input.metricLabelEn,
      unitHi: input.unitHi || null,
      unitEn: input.unitEn || null,
      narrativeHi: input.narrativeHi,
      narrativeEn: input.narrativeEn,
      status: "pending_review",
      sourceOfCreation: "manual",
      createdBy: session!.user.id,
    })
    .returning();

  await db.insert(comparisonPoints).values(
    input.countries.map((c, i) => ({
      comparisonId: comparison.id,
      sortOrder: i,
      isIndia: c.isIndia,
      countryNameHi: c.nameHi,
      countryNameEn: c.nameEn,
      valueHi: c.valueHi,
      valueEn: c.valueEn,
      valueNumeric: c.valueNumeric,
    })),
  );

  await db.insert(comparisonSources).values(
    input.sources.map((s) => ({
      comparisonId: comparison.id,
      url: s.url,
      publisher: s.publisher,
      title: s.title || null,
      credibilityTier: s.credibilityTier,
    })),
  );

  revalidatePath("/admin/comparisons");
  return comparison;
}
