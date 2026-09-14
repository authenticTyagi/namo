import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getActiveCategories } from "@/db/queries/categories";
import { getPublishedEntriesByCategory } from "@/db/queries/entries";
import { EntryCard } from "@/components/entry/EntryCard";
import type { Locale } from "@/i18n/routing";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const categories = await getActiveCategories();

  const recentByCategory = await Promise.all(
    categories.map((c) => getPublishedEntriesByCategory(c.slug)),
  );
  const recentEntries = recentByCategory.flat().slice(0, 6);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <section className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t("heroTitle")}
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
          {t("heroSubtitle")}
        </p>
        <Link
          href="/overview"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#184f95] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#123c73] dark:bg-[#123c73] dark:hover:bg-[#0d2b54]"
        >
          {t("overviewCta")} →
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold">{t("categoriesHeading")}</h2>
        {categories.length === 0 ? (
          <p className="text-sm text-neutral-500">
            No categories yet — connect the database and seed content to see
            them here.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="rounded-lg border border-neutral-200 p-4 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
              >
                <h3 className="font-semibold">
                  {locale === "hi" ? category.nameHi : category.nameEn}
                </h3>
                {(locale === "hi" ? category.descriptionHi : category.descriptionEn) && (
                  <p className="mt-1 text-sm text-neutral-500">
                    {locale === "hi" ? category.descriptionHi : category.descriptionEn}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </section>

      {recentEntries.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-semibold">{t("recentHeading")}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {recentEntries.map((entry) => (
              <EntryCard key={entry.id} entry={entry} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
