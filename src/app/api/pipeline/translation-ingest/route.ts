import { z } from "zod";
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { entries, entryStats, translationDrafts } from "@/db/schema";
import { isAuthorizedPipelineRequest } from "@/lib/pipeline-auth";
import { checkDraftAgainstEntry, translationDraftSchema } from "@/lib/translation-drafts";

/**
 * Submits a bn/te/mr translation of a PUBLISHED entry. It always lands in
 * translation_drafts as pending_review and stays invisible to readers until
 * the owner approves it in /admin/translations (RULES.md: no auto-publish).
 * Submitting again for the same (entry, locale) replaces the draft and
 * resets it to pending_review; a translation that is already live is left
 * untouched until the new draft is approved.
 */
export async function POST(request: Request) {
  if (!isAuthorizedPipelineRequest(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const json = await request.json().catch(() => null);
  if (json === null) return Response.json({ error: "Invalid JSON body" }, { status: 400 });

  const parsed = translationDraftSchema.safeParse(json);
  if (!parsed.success) {
    return Response.json({ error: "Validation failed", issues: z.treeifyError(parsed.error) }, { status: 400 });
  }
  const input = parsed.data;

  const [entry] = await db
    .select({ id: entries.id, status: entries.status, sections: entries.bodySectionsEn })
    .from(entries)
    .where(eq(entries.slug, input.entrySlug))
    .limit(1);
  if (!entry) return Response.json({ error: `Unknown entrySlug "${input.entrySlug}"` }, { status: 400 });
  if (entry.status !== "published") {
    return Response.json({ error: "Only published entries can be translated" }, { status: 409 });
  }

  const statRows = await db
    .select({ statKey: entryStats.statKey, extraLabelEn: entryStats.extraLabelEn })
    .from(entryStats)
    .where(eq(entryStats.entryId, entry.id))
    .orderBy(asc(entryStats.sortOrder));

  const problems = checkDraftAgainstEntry(input, {
    sectionCount: entry.sections?.length ?? 0,
    stats: statRows.map((s) => ({ statKey: s.statKey, hasExtra: Boolean(s.extraLabelEn) })),
  });
  if (problems.length > 0) {
    return Response.json({ error: "Draft does not match the English entry", problems }, { status: 400 });
  }

  const values = {
    title: input.title,
    summary: input.summary,
    quickTake: input.quickTake,
    bodySections: input.bodySections,
    stats: input.stats,
    note: input.note ?? null,
    status: "pending_review" as const,
    updatedAt: new Date(),
  };
  const [existing] = await db
    .select({ id: translationDrafts.id })
    .from(translationDrafts)
    .where(and(eq(translationDrafts.entryId, entry.id), eq(translationDrafts.locale, input.locale)))
    .limit(1);
  if (existing) {
    await db.update(translationDrafts).set(values).where(eq(translationDrafts.id, existing.id));
    return Response.json({ ok: true, draftId: existing.id, replaced: true }, { status: 200 });
  }
  const [created] = await db
    .insert(translationDrafts)
    .values({ entryId: entry.id, locale: input.locale, ...values })
    .returning({ id: translationDrafts.id });
  return Response.json({ ok: true, draftId: created.id, replaced: false }, { status: 201 });
}
