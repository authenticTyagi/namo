import type { Locale } from "@/i18n/routing";

export type { Locale };

/**
 * Locales beyond the original Hindi/English pair. These never have their
 * own DB columns on `entries`/`entry_stats` (see entryTranslations /
 * entryStatTranslations in src/db/schema.ts) — content in these languages
 * is added by a separate hand-authored translation pass and falls back to
 * English until then. `categories`/`tags` carry these as plain nullable
 * columns instead (nameBn/nameTe/nameMr etc.), since they only have 1-2
 * translatable fields each.
 */
export const EXTRA_LOCALES = ["bn", "te", "mr"] as const;
export type ExtraLocale = (typeof EXTRA_LOCALES)[number];

export function isExtraLocale(locale: string): locale is ExtraLocale {
  return (EXTRA_LOCALES as readonly string[]).includes(locale);
}

/** Native display name for each locale, used by the language picker. */
export const LOCALE_NAMES: Record<Locale, string> = {
  hi: "हिंदी",
  en: "English",
  bn: "বাংলা",
  te: "తెలుగు",
  mr: "मराठी",
};

/** BCP-47 tag for Intl.DateTimeFormat / Intl.NumberFormat per locale. */
export const LOCALE_INTL_TAG: Record<Locale, string> = {
  hi: "hi-IN",
  en: "en-IN",
  bn: "bn-IN",
  te: "te-IN",
  mr: "mr-IN",
};

/** `og:locale` uses an underscore, not BCP-47's hyphen (e.g. "hi_IN"). */
export const OG_LOCALE_TAG: Record<Locale, string> = Object.fromEntries(
  Object.entries(LOCALE_INTL_TAG).map(([locale, tag]) => [locale, tag.replace("-", "_")]),
) as Record<Locale, string>;

/**
 * Resolves a piece of bilingual+extra-locale text for the given locale.
 * `hi`/`en` return their own field directly. `bn`/`te`/`mr` use the value
 * already looked up for that locale (from entryTranslations, or a wide
 * nameBn/nameTe/nameMr-style column), falling back to English and then
 * Hindi when no translation exists yet — so every page renders correctly
 * before hand-authored content lands in a new language.
 */
export function resolveLocalizedText(
  locale: Locale,
  fields: { hi: string; en: string; translated?: string | null },
): string {
  if (locale === "hi") return fields.hi;
  if (locale === "en") return fields.en;
  return fields.translated ?? fields.en ?? fields.hi;
}

/**
 * Legal/policy static pages (About, Methodology, Terms, Privacy) are
 * hi/en-only by design — their prose needs the site owner's review before
 * publishing in a new language, so this isn't part of the architecture
 * round. Falls back to English for bn/te/mr until that review happens.
 */
export function resolveStaticPageContent(
  locale: Locale,
  content: { hi: string; en: string },
): string {
  return locale === "hi" ? content.hi : content.en;
}

/** Same as resolveLocalizedText, but for fields that may be null/absent entirely. */
export function resolveLocalizedTextNullable(
  locale: Locale,
  fields: { hi: string | null; en: string | null; translated?: string | null },
): string | null {
  if (locale === "hi") return fields.hi;
  if (locale === "en") return fields.en;
  return fields.translated ?? fields.en ?? fields.hi ?? null;
}
