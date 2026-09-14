import { getTranslations, setRequestLocale } from "next-intl/server";
import { searchPublishedEntries } from "@/db/queries/entries";
import { EntryCard } from "@/components/entry/EntryCard";
import type { Locale } from "@/i18n/routing";

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { q = "" } = await searchParams;

  const t = await getTranslations("search");
  const nav = await getTranslations("nav");
  const results = q ? await searchPublishedEntries(q) : [];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold">{nav("search")}</h1>

      <form className="mb-8">
        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder={t("placeholder")}
          className="w-full rounded-md border border-neutral-300 px-4 py-2 dark:border-neutral-700 dark:bg-neutral-900"
        />
      </form>

      {q && results.length === 0 && (
        <p className="text-sm text-neutral-500">{t("noResults")}</p>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {results.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
