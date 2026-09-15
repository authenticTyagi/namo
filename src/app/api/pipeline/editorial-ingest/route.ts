import { z } from "zod";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { entries, editorials, pipelineRuns } from "@/db/schema";
import { isAuthorizedPipelineRequest } from "@/lib/pipeline-auth";

/**
 * Deliberately a looser bar than /api/pipeline/ingest (entries): editorials
 * are commentary, not a new sourced record, so there's no source-count/
 * credibility-tier gate here — see the `editorials` table's comment in
 * schema.ts. The one hard requirement is relatedEntryId pointing at an
 * already-published (already-cited) entry, so every editorial is still
 * anchored to real, sourced content rather than floating free.
 */
const ingestSchema = z.object({
  relatedEntrySlug: z.string().min(1),
  slug: z.string().min(1).regex(/^[a-z0-9-]+$/, "slug must be lowercase kebab-case"),
  headlineHi: z.string().min(1),
  headlineEn: z.string().min(1),
  bodyHi: z.string().min(50),
  bodyEn: z.string().min(50),
  tone: z.enum(["positive", "negative", "neutral", "mixed"]),
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

  const [existingSlug] = await db
    .select({ id: editorials.id })
    .from(editorials)
    .where(eq(editorials.slug, input.slug))
    .limit(1);
  if (existingSlug) {
    return Response.json(
      { error: `Editorial with slug "${input.slug}" already exists` },
      { status: 409 },
    );
  }

  const [existingForEntry] = await db
    .select({ id: editorials.id, status: editorials.status })
    .from(editorials)
    .where(eq(editorials.relatedEntryId, relatedEntry.id));
  if (existingForEntry && existingForEntry.status !== "rejected") {
    return Response.json(
      { error: `Entry "${input.relatedEntrySlug}" already has a ${existingForEntry.status} editorial` },
      { status: 409 },
    );
  }

  try {
    const [editorial] = await db
      .insert(editorials)
      .values({
        slug: input.slug,
        relatedEntryId: relatedEntry.id,
        headlineHi: input.headlineHi,
        headlineEn: input.headlineEn,
        bodyHi: input.bodyHi,
        bodyEn: input.bodyEn,
        tone: input.tone,
        status: "pending_review",
        sourceOfCreation: "pipeline",
      })
      .returning();

    await db.insert(pipelineRuns).values({
      finishedAt: new Date(),
      status: "success",
      runType: "editorial",
      entriesCreated: 1,
      entriesAutoPublished: 0,
      entriesFlaggedForReview: 1,
      triggeredBy: "cron-editorial-ingest",
    });

    return Response.json({ ok: true, editorialId: editorial.id, slug: editorial.slug }, { status: 201 });
  } catch (err) {
    await db.insert(pipelineRuns).values({
      finishedAt: new Date(),
      status: "failed",
      runType: "editorial",
      entriesCreated: 0,
      entriesAutoPublished: 0,
      entriesFlaggedForReview: 0,
      notes: err instanceof Error ? err.message : "Unknown error",
      triggeredBy: "cron-editorial-ingest",
    });
    return Response.json({ error: "Insert failed" }, { status: 500 });
  }
}
