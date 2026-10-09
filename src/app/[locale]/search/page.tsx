import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Search } from "lucide-react";
import { searchSite } from "@/db/queries/search";
import { SearchResultCard } from "@/components/search/SearchResultCard";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ q?: string | string[] }>;
};

const firstParam = (q: string | string[] | undefined) => (Array.isArray(q) ? q[0] : q) ?? "";

// Search-result pages are thin, near-infinite URL space — keep them out of
// search engines (the sitemap already lists the real content pages).
export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { locale } = await params;
  const q = firstParam((await searchParams).q).trim();
  const t = await getTranslations({ locale, namespace: "search" });
  return {
    title: q ? `${t("title")}: ${q.slice(0, 60)}` : t("title"),
    robots: { index: false, follow: true },
  };
}

export default async function SearchPage({ params, searchParams }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const q = firstParam((await searchParams).q).trim();

  const t = await getTranslations("search");
  const results = q ? await searchSite(q, locale) : [];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold">{t("title")}</h1>

      <form role="search" className="mb-6 flex gap-2">
        <input
          type="search"
          name="q"
          defaultValue={q}
          maxLength={100}
          autoFocus={!q}
          placeholder={t("placeholder")}
          aria-label={t("title")}
          className="min-w-0 flex-1 rounded-md border border-neutral-300 px-4 py-2 dark:border-neutral-700 dark:bg-neutral-900"
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-hover"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          {t("button")}
        </button>
      </form>

      {!q && (
        <div className="text-sm text-neutral-500">
          <p>{t("hint")}</p>
          <p className="mt-1">{t("examples")}</p>
        </div>
      )}

      {q && (
        <p className="mb-4 text-sm text-neutral-500" aria-live="polite">
          {t("resultsCount", { count: results.length, q })}
        </p>
      )}

      {q && results.length === 0 && <p className="text-sm text-neutral-500">{t("noResults")}</p>}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {results.map((r) => (
          <SearchResultCard
            key={`${r.type}-${r.id}`}
            result={r}
            typeLabel={t(`type.${r.type}`)}
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}
