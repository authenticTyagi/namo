import { db, isDbConfigured } from "@/db";
import { categories, entries } from "@/db/schema";
import { and, asc, count, eq } from "drizzle-orm";
import type { Locale } from "@/i18n/routing";
import { resolveLocalizedText, resolveLocalizedTextNullable } from "@/lib/localized";

export interface CategorySummary {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  entryCount: number;
  /** false for bn/te/mr when the name has no real translation yet (see the entries version of this field for why it matters for canonical URLs). */
  hasLocalizedContent: boolean;
}

type CategoryRow = typeof categories.$inferSelect;

function toCategorySummary(row: CategoryRow, locale: Locale, entryCount = 0): CategorySummary {
  return {
    id: row.id,
    slug: row.slug,
    name: resolveLocalizedText(locale, {
      hi: row.nameHi,
      en: row.nameEn,
      translated: pickTranslated(row, locale, "name"),
    }),
    description: resolveLocalizedTextNullable(locale, {
      hi: row.descriptionHi,
      en: row.descriptionEn,
      translated: pickTranslated(row, locale, "description"),
    }),
    entryCount,
    hasLocalizedContent:
      locale === "hi" || locale === "en" || pickTranslated(row, locale, "name") != null,
  };
}

function pickTranslated(
  row: CategoryRow,
  locale: Locale,
  field: "name" | "description",
): string | null {
  if (locale === "bn") return field === "name" ? row.nameBn : row.descriptionBn;
  if (locale === "te") return field === "name" ? row.nameTe : row.descriptionTe;
  if (locale === "mr") return field === "name" ? row.nameMr : row.descriptionMr;
  return null;
}

/** Active categories with their published-entry count, for the homepage/nav — a left join so a category with zero published entries still appears (count 0), not just categories that already have content. */
export async function getActiveCategories(locale: Locale): Promise<CategorySummary[]> {
  if (!isDbConfigured) return [];
  const rows = await db
    .select({ category: categories, entryCount: count(entries.id) })
    .from(categories)
    .leftJoin(entries, and(eq(entries.categoryId, categories.id), eq(entries.status, "published")))
    .where(eq(categories.isActive, true))
    .groupBy(categories.id)
    .orderBy(asc(categories.sortOrder));
  return rows.map((r) => toCategorySummary(r.category, locale, r.entryCount));
}

export async function getCategoryBySlug(slug: string, locale: Locale): Promise<CategorySummary | null> {
  if (!isDbConfigured) return null;
  const [category] = await db
    .select()
    .from(categories)
    .where(eq(categories.slug, slug))
    .limit(1);
  return category ? toCategorySummary(category, locale) : null;
}
