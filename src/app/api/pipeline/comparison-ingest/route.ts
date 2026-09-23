import { z } from "zod";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import {
  categories,
  entries,
  comparisons,
  comparisonPoints,
  comparisonSources,
} from "@/db/schema";
import { isAuthorizedPipelineRequest } from "@/lib/pipeline-auth";

/**
 * "India in the World" comparisons had no drafting pipeline at all (see
 * PROJECT_LOG.md — only the admin manual form and the local, DB-connection-
 * dependent scripts/seed-comparisons.ts existed). This closes that gap the
 * same way editorial-ingest closed it for editorials: a thin HTTP endpoint
 * over the already-working Vercel->Neon path, authed by the same CRON_SECRET.
 * Deliberately create-only (like editorial-ingest, not an upsert like
 * seed-comparisons.ts) — a duplicate slug is rejected rather than silently
 * overwritten, since this is meant for new comparisons, not edits.
 */
const countrySchema = z.object({
  countryNameHi: z.string().min(1),
  countryNameEn: z.string().min(1),
  valueHi: z.string().min(1),
  valueEn: z.string().min(1),
  valueNumeric: z.number(),
  isIndia: z.boolean(),
  sortOrder: z.number().int(),
});

const sourceSchema = z.object({
  url: z.url(),
  publisher: z.string().min(1),
  title: z.string().min(1).optional(),
  credibilityTier: z.enum(["official_primary", "reputable_media", "secondary"]),
  language: z.string().min(1).optional(),
});

const ingestSchema = z.object({
  categorySlug: z.string().min(1),
  relatedEntrySlug: z.string().min(1).optional(),
  slug: z.string().min(1).regex(/^[a-z0-9-]+$/, "slug must be lowercase kebab-case"),
  titleHi: z.string().min(1),
  titleEn: z.string().min(1),
  metricLabelHi: z.string().min(1),
  metricLabelEn: z.string().min(1),
  unitHi: z.string().min(1).optional(),
  unitEn: z.string().min(1).optional(),
  narrativeHi: z.string().min(50),
  narrativeEn: z.string().min(50),
  countries: z.array(countrySchema).min(2),
  sources: z.array(sourceSchema).min(1),
});

export async function POST(request: Request) {
  if (!isAuthorizedPipelineRequest(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const json = await request.json().catch(() => null);
  if (json === null) {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = ingestSchema.safeParse(json);
  if (!parsed.success) {
    return Response.json(
      { error: "Validation failed", issues: z.treeifyError(parsed.error) },
      { status: 400 },
    );
  }
  const input = parsed.data;

  if (!input.countries.some((c) => c.isIndia)) {
    return Response.json(
      { error: "countries must include exactly one entry with isIndia: true" },
      { status: 400 },
    );
  }

  const [category] = await db
    .select()
    .from(categories)
    .where(eq(categories.slug, input.categorySlug))
    .limit(1);
  if (!category) {
    return Response.json(
      { error: `Unknown categorySlug "${input.categorySlug}"` },
      { status: 400 },
    );
  }

  let relatedEntryId: string | null = null;
  if (input.relatedEntrySlug) {
    const [relatedEntry] = await db
      .select({ id: entries.id })
      .from(entries)
      .where(eq(entries.slug, input.relatedEntrySlug))
      .limit(1);
    if (!relatedEntry) {
      return Response.json(
        { error: `Unknown relatedEntrySlug "${input.relatedEntrySlug}"` },
        { status: 400 },
      );
    }
    relatedEntryId = relatedEntry.id;
  }

  const [existing] = await db
    .select({ id: comparisons.id })
    .from(comparisons)
    .where(eq(comparisons.slug, input.slug))
    .limit(1);
  if (existing) {
    return Response.json(
      { error: `Comparison with slug "${input.slug}" already exists` },
      { status: 409 },
    );
  }

  try {
    const [comparison] = await db
      .insert(comparisons)
      .values({
        slug: input.slug,
        categoryId: category.id,
        relatedEntryId,
        titleHi: input.titleHi,
        titleEn: input.titleEn,
        metricLabelHi: input.metricLabelHi,
        metricLabelEn: input.metricLabelEn,
        unitHi: input.unitHi ?? null,
        unitEn: input.unitEn ?? null,
        narrativeHi: input.narrativeHi,
        narrativeEn: input.narrativeEn,
        status: "pending_review",
        sourceOfCreation: "pipeline",
      })
      .returning();

    await db.insert(comparisonPoints).values(
      input.countries.map((c) => ({
        comparisonId: comparison.id,
        sortOrder: c.sortOrder,
        isIndia: c.isIndia,
        countryNameHi: c.countryNameHi,
        countryNameEn: c.countryNameEn,
        valueHi: c.valueHi,
        valueEn: c.valueEn,
        valueNumeric: c.valueNumeric.toString(),
      })),
    );

    await db.insert(comparisonSources).values(
      input.sources.map((s) => ({
        comparisonId: comparison.id,
        url: s.url,
        publisher: s.publisher,
        title: s.title ?? null,
        credibilityTier: s.credibilityTier,
        language: s.language ?? null,
      })),
    );

    return Response.json(
      { ok: true, comparisonId: comparison.id, slug: comparison.slug },
      { status: 201 },
    );
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Insert failed" },
      { status: 500 },
    );
  }
}
