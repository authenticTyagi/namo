import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getActiveCategories } from "@/db/queries/categories";
import { getCategoryIcon } from "@/lib/category-icons";
import { getCategoryClasses } from "@/lib/category-colors";
import type { Locale } from "@/i18n/routing";

// A dedicated, standalone index — separate from the homepage's own
// "Browse by category" teaser — so there's a stable, scalable place to
// land on from anywhere on the site (nav link) as the category count
// grows, rather than only ever being reachable from "/". Same enhanced
// card treatment (icon + fixed-order accent color + published count) as
// the homepage grid.
export default async function CategoriesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("categoriesPage");
  const categories = await getActiveCategories(locale);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-bold">{t("heading")}</h1>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">{t("subtitle")}</p>

      {categories.length === 0 ? (
        <p className="mt-8 text-sm text-neutral-500">{t("empty")}</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((category) => {
            const Icon = getCategoryIcon(category.slug);
            const classes = getCategoryClasses(category.slug);
            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className={`rounded-lg border border-neutral-200 p-4 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${classes.border} ${classes.text}`}
                  >
                    <Icon aria-hidden className="h-4 w-4" />
                  </span>
                  <span className="shrink-0 rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                    {t("entryCount", { count: category.entryCount })}
                  </span>
                </div>
                <h2 className="mt-3 font-semibold">{category.name}</h2>
                {category.description && (
                  <p className="mt-1 text-sm text-neutral-500 line-clamp-2">{category.description}</p>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
