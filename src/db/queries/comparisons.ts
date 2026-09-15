import { db, isDbConfigured } from "@/db";
import { comparisons, comparisonPoints, comparisonSources, categories, entries } from "@/db/schema";
import { and, asc, desc, eq } from "drizzle-orm";
import type { Locale } from "@/i18n/routing";
import { resolveLocalizedText } from "@/lib/localized";

export interface ComparisonPoint {
  id: string;
  countryName: string;
  value: string;
  valueNumeric: number;
  isIndia: boolean;
}

export interface ComparisonSource {
  id: string;
  url: string;
  publisher: string;
  title: string | null;
  credibilityTier: "official_primary" | "reputable_media" | "secondary";
}

export interface ComparisonSummary {
  id: string;
  slug: string;
  title: string;
  metricLabel: string;
  categorySlug: string;
  publishDate: Date | null;
}

export interface ComparisonDetail extends ComparisonSummary {
  unit: string | null;
  narrative: string;
  relatedEntrySlug: string | null;
  relatedEntryTitle: string | null;
  points: ComparisonPoint[];
  sources: ComparisonSource[];
}

// hi/en only for now, same launch scope as entries/editorials.
function resolveField(row: { hi: string; en: string }, locale: Locale) {
  return resolveLocalizedText(locale, { hi: row.hi, en: row.en });
}

export async function getPublishedComparisons(locale: Locale, limit = 30): Promise<ComparisonSummary[]> {
  if (!isDbConfigured) return [];
  const rows = await db
    .select({
      id: comparisons.id,
      slug: comparisons.slug,
      titleHi: comparisons.titleHi,
      titleEn: comparisons.titleEn,
      metricLabelHi: comparisons.metricLabelHi,
      metricLabelEn: comparisons.metricLabelEn,
      categorySlug: categories.slug,
      publishDate: comparisons.publishDate,
    })
    .from(comparisons)
    .innerJoin(categories, eq(comparisons.categoryId, categories.id))
    .where(eq(comparisons.status, "published"))
    .orderBy(desc(comparisons.publishDate))
    .limit(limit);

  return rows.map((r) => ({
    id: r.id,
    slug: r.slug,
    title: resolveField({ hi: r.titleHi, en: r.titleEn }, locale),
    metricLabel: resolveField({ hi: r.metricLabelHi, en: r.metricLabelEn }, locale),
    categorySlug: r.categorySlug,
    publishDate: r.publishDate,
  }));
}

export async function getPublishedComparisonBySlug(slug: string, locale: Locale): Promise<ComparisonDetail | null> {
  if (!isDbConfigured) return null;

  const [row] = await db
    .select({
      id: comparisons.id,
      slug: comparisons.slug,
      titleHi: comparisons.titleHi,
      titleEn: comparisons.titleEn,
      metricLabelHi: comparisons.metricLabelHi,
      metricLabelEn: comparisons.metricLabelEn,
      unitHi: comparisons.unitHi,
      unitEn: comparisons.unitEn,
      narrativeHi: comparisons.narrativeHi,
      narrativeEn: comparisons.narrativeEn,
      categorySlug: categories.slug,
      publishDate: comparisons.publishDate,
      relatedEntrySlug: entries.slug,
      relatedEntryTitleHi: entries.titleHi,
      relatedEntryTitleEn: entries.titleEn,
    })
    .from(comparisons)
    .innerJoin(categories, eq(comparisons.categoryId, categories.id))
    .leftJoin(entries, eq(comparisons.relatedEntryId, entries.id))
    .where(and(eq(comparisons.slug, slug), eq(comparisons.status, "published")))
    .limit(1);

  if (!row) return null;

  const pointRows = await db
    .select()
    .from(comparisonPoints)
    .where(eq(comparisonPoints.comparisonId, row.id))
    .orderBy(asc(comparisonPoints.sortOrder));

  const sourceRows = await db
    .select()
    .from(comparisonSources)
    .where(eq(comparisonSources.comparisonId, row.id));

  return {
    id: row.id,
    slug: row.slug,
    title: resolveField({ hi: row.titleHi, en: row.titleEn }, locale),
    metricLabel: resolveField({ hi: row.metricLabelHi, en: row.metricLabelEn }, locale),
    unit: row.unitHi || row.unitEn ? resolveField({ hi: row.unitHi ?? "", en: row.unitEn ?? "" }, locale) || null : null,
    narrative: resolveField({ hi: row.narrativeHi, en: row.narrativeEn }, locale),
    categorySlug: row.categorySlug,
    publishDate: row.publishDate,
    relatedEntrySlug: row.relatedEntrySlug,
    relatedEntryTitle: row.relatedEntryTitleHi
      ? resolveField({ hi: row.relatedEntryTitleHi, en: row.relatedEntryTitleEn ?? "" }, locale)
      : null,
    points: pointRows.map((p) => ({
      id: p.id,
      countryName: resolveField({ hi: p.countryNameHi, en: p.countryNameEn }, locale),
      value: resolveField({ hi: p.valueHi, en: p.valueEn }, locale),
      valueNumeric: Number(p.valueNumeric),
      isIndia: p.isIndia,
    })),
    sources: sourceRows.map((s) => ({
      id: s.id,
      url: s.url,
      publisher: s.publisher,
      title: s.title,
      credibilityTier: s.credibilityTier,
    })),
  };
}

/** Published comparisons anchored to a given entry — for the "See how India compares" link on the entry page. */
export async function getPublishedComparisonsForEntry(entryId: string, locale: Locale): Promise<ComparisonSummary[]> {
  if (!isDbConfigured) return [];
  const rows = await db
    .select({
      id: comparisons.id,
      slug: comparisons.slug,
      titleHi: comparisons.titleHi,
      titleEn: comparisons.titleEn,
      metricLabelHi: comparisons.metricLabelHi,
      metricLabelEn: comparisons.metricLabelEn,
      categorySlug: categories.slug,
      publishDate: comparisons.publishDate,
    })
    .from(comparisons)
    .innerJoin(categories, eq(comparisons.categoryId, categories.id))
    .where(and(eq(comparisons.relatedEntryId, entryId), eq(comparisons.status, "published")))
    .orderBy(desc(comparisons.publishDate));

  return rows.map((r) => ({
    id: r.id,
    slug: r.slug,
    title: resolveField({ hi: r.titleHi, en: r.titleEn }, locale),
    metricLabel: resolveField({ hi: r.metricLabelHi, en: r.metricLabelEn }, locale),
    categorySlug: r.categorySlug,
    publishDate: r.publishDate,
  }));
}
