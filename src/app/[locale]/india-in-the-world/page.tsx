import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getPublishedComparisons } from "@/db/queries/comparisons";
import { getCategoryIcon } from "@/lib/category-icons";
import type { Locale } from "@/i18n/routing";

export default async function IndiaInTheWorldPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("comparisons");
  const list = await getPublishedComparisons(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">{t("heading")}</h1>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">{t("subtitle")}</p>

      {list.length === 0 ? (
        <p className="mt-8 text-sm text-neutral-500">{t("empty")}</p>
      ) : (
        <div className="mt-8 space-y-4">
          {list.map((c) => {
            const Icon = getCategoryIcon(c.categorySlug);
            return (
              <Link
                key={c.id}
                href={`/india-in-the-world/${c.slug}`}
                className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
              >
                <Icon aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-neutral-400" />
                <div>
                  <h2 className="font-semibold">{c.title}</h2>
                  <p className="mt-1 text-sm text-neutral-500">{c.metricLabel}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
