import { db, isDbConfigured } from "@/db";
import {
  entries,
  sources,
  categories,
  tags,
  entryTags,
  entryStats,
  entryTranslations,
  entryStatTranslations,
} from "@/db/schema";
import { and, asc, desc, eq, ilike, or } from "drizzle-orm";
import type { Locale } from "@/i18n/routing";
import { resolveLocalizedText, resolveLocalizedTextNullable } from "@/lib/localized";
import type { EntryStat, EntrySummary } from "@/lib/types";

/**
 * Every list/detail query below LEFT JOINs entryTranslations /
 * entryStatTranslations on (id, locale) using the *requested* locale as
 * the join condition — for `hi`/`en` that join simply never matches (those
 * two languages only ever live in entries' own titleHi/titleEn-style
 * columns, never in the translations table), so this is one query shape
 * for all 5 locales rather than a conditional branch per locale. Resolution
 * (translated -> English -> Hindi) happens via resolveLocalizedText.
 */

function toEntrySummary(row: {
  id: string;
  slug: string;
  titleHi: string;
  titleEn: string;
  summaryHi: string;
  summaryEn: string;
  impactType: EntrySummary["impactType"];
  publishDate: Date | null;
  translatedTitle: string | null;
  translatedSummary: string | null;
}, locale: Locale): EntrySummary {
  return {
    id: row.id,
    slug: row.slug,
    title: resolveLocalizedText(locale, { hi: row.titleHi, en: row.titleEn, translated: row.translatedTitle }),
    summary: resolveLocalizedText(locale, { hi: row.summaryHi, en: row.summaryEn, translated: row.translatedSummary }),
    impactType: row.impactType,
    publishDate: row.publishDate,
  };
}

/** Published entries for a category, newest first (card-list use). */
export async function getPublishedEntriesByCategory(categorySlug: string, locale: Locale) {
  if (!isDbConfigured) return [];
  const rows = await db
    .select({
      id: entries.id,
      slug: entries.slug,
      titleHi: entries.titleHi,
      titleEn: entries.titleEn,
      summaryHi: entries.summaryHi,
      summaryEn: entries.summaryEn,
      impactType: entries.impactType,
      publishDate: entries.publishDate,
      translatedTitle: entryTranslations.title,
      translatedSummary: entryTranslations.summary,
    })
    .from(entries)
    .innerJoin(categories, eq(entries.categoryId, categories.id))
    .leftJoin(
      entryTranslations,
      and(eq(entryTranslations.entryId, entries.id), eq(entryTranslations.locale, locale)),
    )
    .where(and(eq(categories.slug, categorySlug), eq(entries.status, "published")))
    .orderBy(desc(entries.publishDate));

  return rows.map((r) => toEntrySummary(r, locale));
}

/** Full entry detail, with its sources, tags and stats, by slug. Only published entries. */
export async function getPublishedEntryBySlug(slug: string, locale: Locale) {
  if (!isDbConfigured) return null;

  const [entry] = await db
    .select()
    .from(entries)
    .where(and(eq(entries.slug, slug), eq(entries.status, "published")))
    .limit(1);

  if (!entry) return null;

  const [translation] = await db
    .select()
    .from(entryTranslations)
    .where(and(eq(entryTranslations.entryId, entry.id), eq(entryTranslations.locale, locale)))
    .limit(1);

  const entrySources = await db
    .select()
    .from(sources)
    .where(eq(sources.entryId, entry.id));

  const entryTagRows = await db
    .select({ tag: tags })
    .from(entryTags)
    .innerJoin(tags, eq(entryTags.tagId, tags.id))
    .where(eq(entryTags.entryId, entry.id));

  const entryStatRows = await db
    .select()
    .from(entryStats)
    .where(eq(entryStats.entryId, entry.id))
    .orderBy(asc(entryStats.sortOrder));

  const statTranslations =
    entryStatRows.length > 0
      ? await db
          .select()
          .from(entryStatTranslations)
          .where(
            and(
              eq(entryStatTranslations.locale, locale),
              or(...entryStatRows.map((s) => eq(entryStatTranslations.entryStatId, s.id))),
            ),
          )
      : [];
  const statTranslationById = new Map(statTranslations.map((t) => [t.entryStatId, t]));

  const stats: EntryStat[] = entryStatRows.map((s) => {
    const st = statTranslationById.get(s.id);
    return {
      id: s.id,
      sortOrder: s.sortOrder,
      statKey: s.statKey,
      metricLabel: resolveLocalizedText(locale, { hi: s.metricLabelHi, en: s.metricLabelEn, translated: st?.metricLabel }),
      beforeLabel: resolveLocalizedText(locale, { hi: s.beforeLabelHi, en: s.beforeLabelEn, translated: st?.beforeLabel }),
      beforeValue: resolveLocalizedText(locale, { hi: s.beforeValueHi, en: s.beforeValueEn, translated: st?.beforeValue }),
      beforeValueNumeric: s.beforeValueNumeric,
      afterLabel: resolveLocalizedText(locale, { hi: s.afterLabelHi, en: s.afterLabelEn, translated: st?.afterLabel }),
      afterValue: resolveLocalizedText(locale, { hi: s.afterValueHi, en: s.afterValueEn, translated: st?.afterValue }),
      afterValueNumeric: s.afterValueNumeric,
      extraLabel: resolveLocalizedTextNullable(locale, { hi: s.extraLabelHi, en: s.extraLabelEn, translated: st?.extraLabel }),
      extraValue: resolveLocalizedTextNullable(locale, { hi: s.extraValueHi, en: s.extraValueEn, translated: st?.extraValue }),
      extraValueNumeric: s.extraValueNumeric,
    };
  });

  return {
    id: entry.id,
    slug: entry.slug,
    title: resolveLocalizedText(locale, { hi: entry.titleHi, en: entry.titleEn, translated: translation?.title }),
    summary: resolveLocalizedText(locale, { hi: entry.summaryHi, en: entry.summaryEn, translated: translation?.summary }),
    body: resolveLocalizedText(locale, { hi: entry.bodyHi, en: entry.bodyEn, translated: translation?.body }),
    quickTake: resolveLocalizedTextNullable(locale, { hi: entry.quickTakeHi, en: entry.quickTakeEn, translated: translation?.quickTake }),
    bodySections:
      locale === "hi"
        ? entry.bodySectionsHi
        : locale === "en"
          ? entry.bodySectionsEn
          : (translation?.bodySections ?? entry.bodySectionsEn ?? entry.bodySectionsHi),
    impactType: entry.impactType,
    publishDate: entry.publishDate,
    timelineStartDate: entry.timelineStartDate,
    timelineEndDate: entry.timelineEndDate,
    lastVerifiedDate: entry.lastVerifiedDate,
    sources: entrySources,
    tags: entryTagRows.map((r) => ({
      id: r.tag.id,
      slug: r.tag.slug,
      label: resolveLocalizedText(locale, { hi: r.tag.labelHi, en: r.tag.labelEn, translated: pickTagTranslated(r.tag, locale) }),
    })),
    stats,
  };
}

function pickTagTranslated(
  tag: { labelBn: string | null; labelTe: string | null; labelMr: string | null },
  locale: Locale,
): string | null {
  if (locale === "bn") return tag.labelBn;
  if (locale === "te") return tag.labelTe;
  if (locale === "mr") return tag.labelMr;
  return null;
}

/**
 * Every published entry's stats, grouped by category, for the "2014 → Now"
 * overview page. One query per entry's stats is fine at this scale (a few
 * dozen entries); revisit with a join if this grows into the hundreds.
 */
export async function getAllStatsGroupedByCategory(locale: Locale) {
  if (!isDbConfigured) return [];

  const categoryRows = await db
    .select()
    .from(categories)
    .where(eq(categories.isActive, true))
    .orderBy(asc(categories.sortOrder));

  const result = [];
  for (const category of categoryRows) {
    const categoryEntries = await db
      .select({
        id: entries.id,
        slug: entries.slug,
        titleHi: entries.titleHi,
        titleEn: entries.titleEn,
        translatedTitle: entryTranslations.title,
      })
      .from(entries)
      .leftJoin(
        entryTranslations,
        and(eq(entryTranslations.entryId, entries.id), eq(entryTranslations.locale, locale)),
      )
      .where(
        and(eq(entries.categoryId, category.id), eq(entries.status, "published")),
      )
      .orderBy(desc(entries.publishDate));

    const entriesWithStats = [];
    for (const entry of categoryEntries) {
      const statRows = await db
        .select()
        .from(entryStats)
        .where(eq(entryStats.entryId, entry.id))
        .orderBy(asc(entryStats.sortOrder));

      if (statRows.length === 0) continue;

      const statTranslations = await db
        .select()
        .from(entryStatTranslations)
        .where(
          and(
            eq(entryStatTranslations.locale, locale),
            or(...statRows.map((s) => eq(entryStatTranslations.entryStatId, s.id))),
          ),
        );
      const statTranslationById = new Map(statTranslations.map((t) => [t.entryStatId, t]));

      const stats: EntryStat[] = statRows.map((s) => {
        const st = statTranslationById.get(s.id);
        return {
          id: s.id,
          sortOrder: s.sortOrder,
          statKey: s.statKey,
          metricLabel: resolveLocalizedText(locale, { hi: s.metricLabelHi, en: s.metricLabelEn, translated: st?.metricLabel }),
          beforeLabel: resolveLocalizedText(locale, { hi: s.beforeLabelHi, en: s.beforeLabelEn, translated: st?.beforeLabel }),
          beforeValue: resolveLocalizedText(locale, { hi: s.beforeValueHi, en: s.beforeValueEn, translated: st?.beforeValue }),
          beforeValueNumeric: s.beforeValueNumeric,
          afterLabel: resolveLocalizedText(locale, { hi: s.afterLabelHi, en: s.afterLabelEn, translated: st?.afterLabel }),
          afterValue: resolveLocalizedText(locale, { hi: s.afterValueHi, en: s.afterValueEn, translated: st?.afterValue }),
          afterValueNumeric: s.afterValueNumeric,
          extraLabel: resolveLocalizedTextNullable(locale, { hi: s.extraLabelHi, en: s.extraLabelEn, translated: st?.extraLabel }),
          extraValue: resolveLocalizedTextNullable(locale, { hi: s.extraValueHi, en: s.extraValueEn, translated: st?.extraValue }),
          extraValueNumeric: s.extraValueNumeric,
        };
      });

      entriesWithStats.push({
        id: entry.id,
        slug: entry.slug,
        title: resolveLocalizedText(locale, { hi: entry.titleHi, en: entry.titleEn, translated: entry.translatedTitle }),
        stats,
      });
    }

    if (entriesWithStats.length > 0) {
      result.push({
        category: {
          id: category.id,
          slug: category.slug,
          name: resolveLocalizedText(locale, { hi: category.nameHi, en: category.nameEn, translated: pickCategoryTranslated(category, locale) }),
        },
        entries: entriesWithStats,
      });
    }
  }

  return result;
}

function pickCategoryTranslated(
  category: { nameBn: string | null; nameTe: string | null; nameMr: string | null },
  locale: Locale,
): string | null {
  if (locale === "bn") return category.nameBn;
  if (locale === "te") return category.nameTe;
  if (locale === "mr") return category.nameMr;
  return null;
}

/**
 * MVP search: simple ILIKE over bilingual title/summary. Fine at this scale;
 * upgrade to Postgres full-text (tsvector) once entry volume grows (Phase 4).
 * Still ILIKEs only the Hindi/English columns (that's where the hand-written
 * source content lives) even when searching in bn/te/mr — translated
 * content, once it exists, should be added to this search too.
 */
export async function searchPublishedEntries(query: string, locale: Locale) {
  if (!isDbConfigured || !query.trim()) return [];
  const pattern = `%${query.trim()}%`;
  const rows = await db
    .select({
      id: entries.id,
      slug: entries.slug,
      titleHi: entries.titleHi,
      titleEn: entries.titleEn,
      summaryHi: entries.summaryHi,
      summaryEn: entries.summaryEn,
      impactType: entries.impactType,
      publishDate: entries.publishDate,
      translatedTitle: entryTranslations.title,
      translatedSummary: entryTranslations.summary,
    })
    .from(entries)
    .leftJoin(
      entryTranslations,
      and(eq(entryTranslations.entryId, entries.id), eq(entryTranslations.locale, locale)),
    )
    .where(
      and(
        eq(entries.status, "published"),
        or(
          ilike(entries.titleHi, pattern),
          ilike(entries.titleEn, pattern),
          ilike(entries.summaryHi, pattern),
          ilike(entries.summaryEn, pattern),
        ),
      ),
    )
    .orderBy(desc(entries.publishDate));

  return rows.map((r) => toEntrySummary(r, locale));
}
