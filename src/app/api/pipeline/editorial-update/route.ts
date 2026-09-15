import { z } from "zod";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { editorials } from "@/db/schema";
import { isAuthorizedPipelineRequest } from "@/lib/pipeline-auth";

/**
 * Updates an existing editorial's content (e.g. a rewrite to match a voice/
 * style change) and resets it to pending_review — a content edit is treated
 * the same as a new submission, never staying published silently through a
 * material rewrite. CRON_SECRET-authed, same pattern as editorial-ingest.
 */
const updateSchema = z.object({
  slug: z.string().min(1),
  headlineHi: z.string().min(1),
  headlineEn: z.string().min(1),
  bodyHi: z.string().min(50),
  bodyEn: z.string().min(50),
  tone: z.enum(["positive", "negative", "neutral", "mixed"]).optional(),
});

export async function POST(request: Request) {
  if (!isAuthorizedPipelineRequest(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const json = await request.json().catch(() => null);
  if (json === null) {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = updateSchema.safeParse(json);
  if (!parsed.success) {
    return Response.json(
      { error: "Validation failed", issues: z.treeifyError(parsed.error) },
      { status: 400 },
    );
  }
  const input = parsed.data;

  const [existing] = await db
    .select({ id: editorials.id })
    .from(editorials)
    .where(eq(editorials.slug, input.slug))
    .limit(1);
  if (!existing) {
    return Response.json({ error: `No editorial with slug "${input.slug}"` }, { status: 404 });
  }

  await db
    .update(editorials)
    .set({
      headlineHi: input.headlineHi,
      headlineEn: input.headlineEn,
      bodyHi: input.bodyHi,
      bodyEn: input.bodyEn,
      ...(input.tone ? { tone: input.tone } : {}),
      status: "pending_review",
      publishDate: null,
      updatedAt: new Date(),
    })
    .where(eq(editorials.slug, input.slug));

  return Response.json({ ok: true, slug: input.slug, status: "pending_review" });
}
