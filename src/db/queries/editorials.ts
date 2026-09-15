import { db, isDbConfigured } from "@/db";
import { editorials, entries } from "@/db/schema";
import { and, desc, eq } from "drizzle-orm";
import type { Locale } from "@/i18n/routing";
import { resolveLocalizedText } from "@/lib/localized";

export interface EditorialSummary {
  id: string;
  slug: string;
  headline: string;
  tone: "positive" | "negative" | "neutral" | "mixed";
  publishDate: Date | null;
  relatedEntrySlug: string;
  relatedEntryTitle: string;
}

export interface EditorialDetail extends EditorialSummary {
  body: string;
}

// hi/en only, same as entries at launch — bn/te/mr editorial translations
// are future work (see the comment on the `editorials` table in schema.ts).
function resolveHeadline(row: { headlineHi: string; headlineEn: string }, locale: Locale) {
  return resolveLocalizedText(locale, { hi: row.headlineHi, en: row.headlineEn });
}
function resolveBody(row: { bodyHi: string; bodyEn: string }, locale: Locale) {
  return resolveLocalizedText(locale, { hi: row.bodyHi, en: row.bodyEn });
}
function resolveEntryTitle(row: { titleHi: string; titleEn: string }, locale: Locale) {
  return resolveLocalizedText(locale, { hi: row.titleHi, en: row.titleEn });
}

/** Most recent published editorials, for the /editorials index page. */
export async function getPublishedEditorials(locale: Locale, limit = 30): Promise<EditorialSummary[]> {
  if (!isDbConfigured) return [];
  const rows = await db
    .select({
      id: editorials.id,
      slug: editorials.slug,
      headlineHi: editorials.headlineHi,
      headlineEn: editorials.headlineEn,
      tone: editorials.tone,
      publishDate: editorials.publishDate,
      relatedEntrySlug: entries.slug,
      relatedEntryTitleHi: entries.titleHi,
      relatedEntryTitleEn: entries.titleEn,
    })
    .from(editorials)
    .innerJoin(entries, eq(editorials.relatedEntryId, entries.id))
    .where(eq(editorials.status, "published"))
    .orderBy(desc(editorials.publishDate))
    .limit(limit);

  return rows.map((r) => ({
    id: r.id,
    slug: r.slug,
    headline: resolveHeadline(r, locale),
    tone: r.tone,
    publishDate: r.publishDate,
    relatedEntrySlug: r.relatedEntrySlug,
    relatedEntryTitle: resolveEntryTitle({ titleHi: r.relatedEntryTitleHi, titleEn: r.relatedEntryTitleEn }, locale),
  }));
}

export async function getPublishedEditorialBySlug(slug: string, locale: Locale): Promise<EditorialDetail | null> {
  if (!isDbConfigured) return null;
  const [row] = await db
    .select({
      id: editorials.id,
      slug: editorials.slug,
      headlineHi: editorials.headlineHi,
      headlineEn: editorials.headlineEn,
      bodyHi: editorials.bodyHi,
      bodyEn: editorials.bodyEn,
      tone: editorials.tone,
      publishDate: editorials.publishDate,
      relatedEntrySlug: entries.slug,
      relatedEntryTitleHi: entries.titleHi,
      relatedEntryTitleEn: entries.titleEn,
    })
    .from(editorials)
    .innerJoin(entries, eq(editorials.relatedEntryId, entries.id))
    .where(and(eq(editorials.slug, slug), eq(editorials.status, "published")))
    .limit(1);

  if (!row) return null;

  return {
    id: row.id,
    slug: row.slug,
    headline: resolveHeadline(row, locale),
    body: resolveBody(row, locale),
    tone: row.tone,
    publishDate: row.publishDate,
    relatedEntrySlug: row.relatedEntrySlug,
    relatedEntryTitle: resolveEntryTitle({ titleHi: row.relatedEntryTitleHi, titleEn: row.relatedEntryTitleEn }, locale),
  };
}

/** Published editorials about a given entry — for the "Read the editorial" link on the entry page. */
export async function getPublishedEditorialsForEntry(entryId: string, locale: Locale): Promise<EditorialSummary[]> {
  if (!isDbConfigured) return [];
  const rows = await db
    .select({
      id: editorials.id,
      slug: editorials.slug,
      headlineHi: editorials.headlineHi,
      headlineEn: editorials.headlineEn,
      tone: editorials.tone,
      publishDate: editorials.publishDate,
      relatedEntrySlug: entries.slug,
      relatedEntryTitleHi: entries.titleHi,
      relatedEntryTitleEn: entries.titleEn,
    })
    .from(editorials)
    .innerJoin(entries, eq(editorials.relatedEntryId, entries.id))
    .where(and(eq(editorials.relatedEntryId, entryId), eq(editorials.status, "published")))
    .orderBy(desc(editorials.publishDate));

  return rows.map((r) => ({
    id: r.id,
    slug: r.slug,
    headline: resolveHeadline(r, locale),
    tone: r.tone,
    publishDate: r.publishDate,
    relatedEntrySlug: r.relatedEntrySlug,
    relatedEntryTitle: resolveEntryTitle({ titleHi: r.relatedEntryTitleHi, titleEn: r.relatedEntryTitleEn }, locale),
  }));
}
