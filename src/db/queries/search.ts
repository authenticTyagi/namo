import { db, isDbConfigured } from "@/db";
import {
  entries,
  editorials,
  comparisons,
  categories,
  entryTranslations,
} from "@/db/schema";
import { and, desc, eq, ilike, or, sql, type SQL } from "drizzle-orm";
import type { Locale } from "@/i18n/routing";
import { resolveLocalizedText } from "@/lib/localized";

export type SearchResultType = "entry" | "editorial" | "comparison";

export interface SearchResult {
  type: SearchResultType;
  id: string;
  slug: string;
  title: string;
  summary: string;
  publishDate: Date | null;
  score: number;
}

const MAX_QUERY_LENGTH = 100;
const MAX_TOKENS = 6;
const PER_TYPE_FETCH = 60;
const MAX_RESULTS = 60;

/** Split a user query into lowercase words; cap length and word count. */
export function tokenize(query: string): string[] {
  return query
    .slice(0, MAX_QUERY_LENGTH)
    .toLowerCase()
    .split(/\s+/)
    .map((t) => t.trim())
    .filter(Boolean)
    .slice(0, MAX_TOKENS);
}

/** Escape LIKE wildcards so user input like "%" or "_" matches literally. */
function likePattern(token: string): string {
  return `%${token.replace(/[\\%_]/g, (c) => `\\${c}`)}%`;
}

const has = (text: string | null | undefined, token: string) =>
  !!text && text.toLowerCase().includes(token);

/** Weight by where a token was found: title > tag > category > summary > body. */
function tokenScore(
  token: string,
  fields: { title: (string | null)[]; tags?: string; category?: (string | null)[]; summary: (string | null)[] },
) {
  if (fields.title.some((f) => has(f, token))) return 10;
  if (fields.tags && has(fields.tags, token)) return 6;
  if (fields.category?.some((f) => has(f, token))) return 5;
  if (fields.summary.some((f) => has(f, token))) return 4;
  return 1; // matched only in the body text
}

/**
 * Site-wide search across published entries, editorials and comparisons.
 * Every word of the query must appear somewhere in an item (words can be in
 * any order, in any field), wildcards in the input are escaped, and results
 * are ranked by where the words matched (title first), then by date.
 * Entries are also searched by category name, tags and body text; bn/te/mr
 * search the Hindi/English source text plus any translated title/summary.
 */
export async function searchSite(query: string, locale: Locale): Promise<SearchResult[]> {
  const tokens = tokenize(query);
  if (!isDbConfigured || tokens.length === 0) return [];
  const patterns = tokens.map(likePattern);

  const tagText = sql<string>`coalesce((select string_agg(tg.label_en || ' ' || tg.label_hi, ' ') from entry_tags et inner join tags tg on tg.id = et.tag_id where et.entry_id = ${entries.id}), '')`;

  const entryWhere: SQL[] = patterns.map(
    (p) =>
      or(
        ilike(entries.titleHi, p),
        ilike(entries.titleEn, p),
        ilike(entries.summaryHi, p),
        ilike(entries.summaryEn, p),
        ilike(entries.bodyHi, p),
        ilike(entries.bodyEn, p),
        ilike(entryTranslations.title, p),
        ilike(entryTranslations.summary, p),
        ilike(categories.nameHi, p),
        ilike(categories.nameEn, p),
        sql`${tagText} ilike ${p}`,
      )!,
  );

  const editorialWhere: SQL[] = patterns.map(
    (p) =>
      or(
        ilike(editorials.headlineHi, p),
        ilike(editorials.headlineEn, p),
        ilike(editorials.bodyHi, p),
        ilike(editorials.bodyEn, p),
      )!,
  );

  const comparisonWhere: SQL[] = patterns.map(
    (p) =>
      or(
        ilike(comparisons.titleHi, p),
        ilike(comparisons.titleEn, p),
        ilike(comparisons.metricLabelHi, p),
        ilike(comparisons.metricLabelEn, p),
        ilike(comparisons.narrativeHi, p),
        ilike(comparisons.narrativeEn, p),
      )!,
  );

  const [entryRows, editorialRows, comparisonRows] = await Promise.all([
    db
      .select({
        id: entries.id,
        slug: entries.slug,
        titleHi: entries.titleHi,
        titleEn: entries.titleEn,
        summaryHi: entries.summaryHi,
        summaryEn: entries.summaryEn,
        publishDate: entries.publishDate,
        translatedTitle: entryTranslations.title,
        translatedSummary: entryTranslations.summary,
        categoryHi: categories.nameHi,
        categoryEn: categories.nameEn,
        tagText,
      })
      .from(entries)
      .innerJoin(categories, eq(entries.categoryId, categories.id))
      .leftJoin(
        entryTranslations,
        and(eq(entryTranslations.entryId, entries.id), eq(entryTranslations.locale, locale)),
      )
      .where(and(eq(entries.status, "published"), ...entryWhere))
      .orderBy(desc(entries.publishDate))
      .limit(PER_TYPE_FETCH),
    db
      .select({
        id: editorials.id,
        slug: editorials.slug,
        headlineHi: editorials.headlineHi,
        headlineEn: editorials.headlineEn,
        bodyHi: editorials.bodyHi,
        bodyEn: editorials.bodyEn,
        publishDate: editorials.publishDate,
      })
      .from(editorials)
      .where(and(eq(editorials.status, "published"), ...editorialWhere))
      .orderBy(desc(editorials.publishDate))
      .limit(PER_TYPE_FETCH),
    db
      .select({
        id: comparisons.id,
        slug: comparisons.slug,
        titleHi: comparisons.titleHi,
        titleEn: comparisons.titleEn,
        metricLabelHi: comparisons.metricLabelHi,
        metricLabelEn: comparisons.metricLabelEn,
        narrativeHi: comparisons.narrativeHi,
        narrativeEn: comparisons.narrativeEn,
        publishDate: comparisons.publishDate,
      })
      .from(comparisons)
      .where(and(eq(comparisons.status, "published"), ...comparisonWhere))
      .orderBy(desc(comparisons.publishDate))
      .limit(PER_TYPE_FETCH),
  ]);

  const phraseBonus = (titles: (string | null)[]) =>
    tokens.length > 1 && titles.some((t) => has(t, tokens.join(" "))) ? 5 : 0;

  const results: SearchResult[] = [];

  for (const r of entryRows) {
    const score =
      tokens.reduce(
        (s, t) =>
          s +
          tokenScore(t, {
            title: [r.titleHi, r.titleEn, r.translatedTitle],
            tags: r.tagText,
            category: [r.categoryHi, r.categoryEn],
            summary: [r.summaryHi, r.summaryEn, r.translatedSummary],
          }),
        0,
      ) + phraseBonus([r.titleHi, r.titleEn, r.translatedTitle]);
    results.push({
      type: "entry",
      id: r.id,
      slug: r.slug,
      title: resolveLocalizedText(locale, { hi: r.titleHi, en: r.titleEn, translated: r.translatedTitle }),
      summary: resolveLocalizedText(locale, { hi: r.summaryHi, en: r.summaryEn, translated: r.translatedSummary }),
      publishDate: r.publishDate,
      score,
    });
  }

  for (const r of editorialRows) {
    const score =
      tokens.reduce((s, t) => s + tokenScore(t, { title: [r.headlineHi, r.headlineEn], summary: [] }), 0) +
      phraseBonus([r.headlineHi, r.headlineEn]);
    const body = resolveLocalizedText(locale, { hi: r.bodyHi, en: r.bodyEn });
    results.push({
      type: "editorial",
      id: r.id,
      slug: r.slug,
      title: resolveLocalizedText(locale, { hi: r.headlineHi, en: r.headlineEn }),
      summary: body.slice(0, 220),
      publishDate: r.publishDate,
      score,
    });
  }

  for (const r of comparisonRows) {
    const score =
      tokens.reduce(
        (s, t) =>
          s + tokenScore(t, { title: [r.titleHi, r.titleEn], summary: [r.metricLabelHi, r.metricLabelEn] }),
        0,
      ) + phraseBonus([r.titleHi, r.titleEn]);
    const narrative = resolveLocalizedText(locale, { hi: r.narrativeHi, en: r.narrativeEn });
    results.push({
      type: "comparison",
      id: r.id,
      slug: r.slug,
      title: resolveLocalizedText(locale, { hi: r.titleHi, en: r.titleEn }),
      summary: narrative.slice(0, 220),
      publishDate: r.publishDate,
      score,
    });
  }

  results.sort(
    (a, b) => b.score - a.score || (b.publishDate?.getTime() ?? 0) - (a.publishDate?.getTime() ?? 0),
  );
  return results.slice(0, MAX_RESULTS);
}
