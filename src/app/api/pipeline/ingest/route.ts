import { z } from "zod";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import {
  categories,
  entries,
  sources,
  entryStats,
  tags,
  entryTags,
  pipelineRuns,
} from "@/db/schema";
import { isAuthorizedPipelineRequest } from "@/lib/pipeline-auth";

const bodySectionSchema = z.object({
  heading: z.string().min(1),
  body: z.string().min(1),
});

const sourceSchema = z.object({
  url: z.url(),
  publisher: z.string().min(1),
  title: z.string().min(1).optional(),
  credibilityTier: z.enum(["official_primary", "reputable_media", "secondary"]),
  language: z.string().min(1).optional(),
  credibilityNotes: z.string().min(1).optional(),
});

const tagSchema = z.object({
  slug: z.string().min(1),
  labelHi: z.string().min(1),
  labelEn: z.string().min(1),
});

const entryStatSchema = z.object({
  statKey: z.string().min(1),
  sortOrder: z.number().int().optional(),
  metricLabelHi: z.string().min(1),
  metricLabelEn: z.string().min(1),
  beforeLabelHi: z.string().min(1),
  beforeLabelEn: z.string().min(1),
  beforeValueHi: z.string().min(1),
  beforeValueEn: z.string().min(1),
  beforeValueNumeric: z.number().optional(),
  afterLabelHi: z.string().min(1),
  afterLabelEn: z.string().min(1),
  afterValueHi: z.string().min(1),
  afterValueEn: z.string().min(1),
  afterValueNumeric: z.number().optional(),
  extraLabelHi: z.string().min(1).optional(),
  extraLabelEn: z.string().min(1).optional(),
  extraValueHi: z.string().min(1).optional(),
  extraValueEn: z.string().min(1).optional(),
  extraValueNumeric: z.number().optional(),
});

const ingestSchema = z.object({
  categorySlug: z.string().min(1),
  slug: z.string().min(1).regex(/^[a-z0-9-]+$/, "slug must be lowercase kebab-case"),
  titleHi: z.string().min(1),
  titleEn: z.string().min(1),
  summaryHi: z.string().min(1),
  summaryEn: z.string().min(1),
  quickTakeHi: z.string().min(1),
  quickTakeEn: z.string().min(1),
  bodySectionsHi: z.array(bodySectionSchema).min(1),
  bodySectionsEn: z.array(bodySectionSchema).min(1),
  impactType: z.enum(["tangible", "intangible", "mixed"]),
  timelineStartDate: z.iso.date(),
  timelineEndDate: z.iso.date(),
  tags: z.array(tagSchema).default([]),
  sources: z.array(sourceSchema).min(1),
  stats: z.array(entryStatSchema).default([]),
  sourceSignals: z.object({
    numericConsistency: z.boolean(),
    contradictionFound: z.boolean(),
  }),
});

type IngestInput = z.infer<typeof ingestSchema>;

const TIER_WEIGHT = { official_primary: 1.0, reputable_media: 0.7, secondary: 0.4 } as const;

function computeConfidence(
  sourceList: IngestInput["sources"],
  signals: IngestInput["sourceSignals"],
): number {
  const avgTierWeight =
    sourceList.reduce((sum, s) => sum + TIER_WEIGHT[s.credibilityTier], 0) / sourceList.length;
  const sourceCountFactor = Math.min(sourceList.length, 3) / 3;
  const numericConsistency = signals.numericConsistency ? 1 : 0;
  const contradictionPenalty = signals.contradictionFound ? 1 : 0;

  const raw =
    0.5 * avgTierWeight + 0.3 * sourceCountFactor + 0.2 * numericConsistency - 0.4 * contradictionPenalty;

  return Math.min(1, Math.max(0, raw));
}

function passesSourcingBar(sourceList: IngestInput["sources"]): boolean {
  const hasOfficialPrimary = sourceList.some((s) => s.credibilityTier === "official_primary");
  return hasOfficialPrimary || sourceList.length >= 2;
}

function deriveBody(quickTake: string, sections: { heading: string; body: string }[]): string {
  return [quickTake, ...sections.map((s) => `${s.heading}\n\n${s.body}`)]
    .filter(Boolean)
    .join("\n\n");
}

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

  if (!passesSourcingBar(input.sources)) {
    return Response.json(
      {
        error:
          "Sourcing bar not met: need >=1 official_primary source OR >=2 total sources.",
      },
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

  const [existing] = await db
    .select({ id: entries.id })
    .from(entries)
    .where(eq(entries.slug, input.slug))
    .limit(1);
  if (existing) {
    return Response.json(
      { error: `Entry with slug "${input.slug}" already exists` },
      { status: 409 },
    );
  }

  const confidenceScore = computeConfidence(input.sources, input.sourceSignals);
  const bodyHi = deriveBody(input.quickTakeHi, input.bodySectionsHi);
  const bodyEn = deriveBody(input.quickTakeEn, input.bodySectionsEn);

  try {
    const [entry] = await db
      .insert(entries)
      .values({
        categoryId: category.id,
        slug: input.slug,
        titleHi: input.titleHi,
        titleEn: input.titleEn,
        summaryHi: input.summaryHi,
        summaryEn: input.summaryEn,
        bodyHi,
        bodyEn,
        quickTakeHi: input.quickTakeHi,
        quickTakeEn: input.quickTakeEn,
        bodySectionsHi: input.bodySectionsHi,
        bodySectionsEn: input.bodySectionsEn,
        impactType: input.impactType,
        status: "pending_review",
        confidenceScore: confidenceScore.toFixed(2),
        timelineStartDate: new Date(input.timelineStartDate),
        timelineEndDate: new Date(input.timelineEndDate),
        sourceOfCreation: "pipeline",
      })
      .returning();

    if (input.sources.length > 0) {
      await db.insert(sources).values(
        input.sources.map((s) => ({
          entryId: entry.id,
          url: s.url,
          publisher: s.publisher,
          title: s.title ?? null,
          credibilityTier: s.credibilityTier,
          credibilityNotes: s.credibilityNotes ?? null,
          language: s.language ?? null,
        })),
      );
    }

    const tagIds: string[] = [];
    for (const t of input.tags) {
      const [tag] = await db
        .insert(tags)
        .values(t)
        .onConflictDoUpdate({
          target: tags.slug,
          set: { labelHi: t.labelHi, labelEn: t.labelEn },
        })
        .returning();
      tagIds.push(tag.id);
    }
    if (tagIds.length > 0) {
      await db.insert(entryTags).values(tagIds.map((tagId) => ({ entryId: entry.id, tagId })));
    }

    if (input.stats.length > 0) {
      await db.insert(entryStats).values(
        input.stats.map((s, i) => ({
          entryId: entry.id,
          sortOrder: s.sortOrder ?? i,
          statKey: s.statKey,
          metricLabelHi: s.metricLabelHi,
          metricLabelEn: s.metricLabelEn,
          beforeLabelHi: s.beforeLabelHi,
          beforeLabelEn: s.beforeLabelEn,
          beforeValueHi: s.beforeValueHi,
          beforeValueEn: s.beforeValueEn,
          beforeValueNumeric: s.beforeValueNumeric?.toString() ?? null,
          afterLabelHi: s.afterLabelHi,
          afterLabelEn: s.afterLabelEn,
          afterValueHi: s.afterValueHi,
          afterValueEn: s.afterValueEn,
          afterValueNumeric: s.afterValueNumeric?.toString() ?? null,
          extraLabelHi: s.extraLabelHi ?? null,
          extraLabelEn: s.extraLabelEn ?? null,
          extraValueHi: s.extraValueHi ?? null,
          extraValueEn: s.extraValueEn ?? null,
          extraValueNumeric: s.extraValueNumeric?.toString() ?? null,
        })),
      );
    }

    await db.insert(pipelineRuns).values({
      finishedAt: new Date(),
      status: "success",
      entriesCreated: 1,
      entriesAutoPublished: 0,
      entriesFlaggedForReview: 1,
      triggeredBy: "cron-ingest",
    });

    return Response.json(
      { ok: true, entryId: entry.id, slug: entry.slug, confidenceScore },
      { status: 201 },
    );
  } catch (err) {
    await db.insert(pipelineRuns).values({
      finishedAt: new Date(),
      status: "failed",
      entriesCreated: 0,
      entriesAutoPublished: 0,
      entriesFlaggedForReview: 0,
      notes: err instanceof Error ? err.message : "Unknown error",
      triggeredBy: "cron-ingest",
    });
    return Response.json({ error: "Insert failed" }, { status: 500 });
  }
}
