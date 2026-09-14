import { db, isDbConfigured } from "@/db";
import { categories } from "@/db/schema";
import { asc, eq } from "drizzle-orm";
import type { Locale } from "@/i18n/routing";
import { resolveLocalizedText, resolveLocalizedTextNullable } from "@/lib/localized";

export interface CategorySummary {
  id: string;
  slug: string;
  name: string;
  description: string | null;
}

type CategoryRow = typeof categories.$inferSelect;

function toCategorySummary(row: CategoryRow, locale: Locale): CategorySummary {
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

export async function getActiveCategories(locale: Locale): Promise<CategorySummary[]> {
  if (!isDbConfigured) return [];
  const rows = await db
    .select()
    .from(categories)
    .where(eq(categories.isActive, true))
    .orderBy(asc(categories.sortOrder));
  return rows.map((r) => toCategorySummary(r, locale));
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
