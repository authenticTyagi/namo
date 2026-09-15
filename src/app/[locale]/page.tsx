import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getActiveCategories } from "@/db/queries/categories";
import { getPublishedEntriesByCategory } from "@/db/queries/entries";
import { EntryCard } from "@/components/entry/EntryCard";
import { getCategoryIcon } from "@/lib/category-icons";
import { getCategoryClasses } from "@/lib/category-colors";
import type { Locale } from "@/i18n/routing";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const categories = await getActiveCategories(locale);

  const recentByCategory = await Promise.all(
    categories.map((c) => getPublishedEntriesByCategory(c.slug, locale)),
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
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {categories.map((category) => {
                const Icon = getCategoryIcon(category.slug);
                const classes = getCategoryClasses(category.slug);
                return (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="rounded-lg border border-neutral-200 p-4 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${classes.border} ${classes.text}`}
                      >
                        <Icon aria-hidden className="h-4 w-4" />
                      </span>
                      <span className="shrink-0 rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                        {category.entryCount}
                      </span>
                    </div>
                    <h3 className="mt-3 font-semibold">{category.name}</h3>
                    {category.description && (
                      <p className="mt-1 text-sm text-neutral-500 line-clamp-2">
                        {category.description}
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>
            <Link
              href="/categories"
              className="mt-4 inline-block text-sm font-medium text-[#184f95] underline underline-offset-2 dark:text-[#3987e5]"
            >
              {t("seeAllCategories")} →
            </Link>
          </>
        )}
      </section>

      {recentEntries.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-semibold">{t("recentHeading")}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {recentEntries.map((entry) => (
              <EntryCard key={entry.id} entry={entry} locale={locale} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
