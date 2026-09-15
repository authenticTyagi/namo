import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getCategoryBySlug } from "@/db/queries/categories";
import { getPublishedEntriesByCategory } from "@/db/queries/entries";
import { EntryCard } from "@/components/entry/EntryCard";
import { ShareButtons } from "@/components/entry/ShareButtons";
import { SITE_URL } from "@/lib/constants";
import { getCategoryIcon } from "@/lib/category-icons";
import { getCategoryClasses } from "@/lib/category-colors";
import type { Locale } from "@/i18n/routing";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: Locale; categorySlug: string }>;
}) {
  const { locale, categorySlug } = await params;
  setRequestLocale(locale);

  const category = await getCategoryBySlug(categorySlug, locale);
  if (!category) notFound();

  const entries = await getPublishedEntriesByCategory(categorySlug, locale);
  const Icon = getCategoryIcon(category.slug);
  const classes = getCategoryClasses(category.slug);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${classes.border} ${classes.text}`}
        >
          <Icon aria-hidden className="h-5 w-5" />
        </span>
        <h1 className="text-2xl font-bold">{category.name}</h1>
      </div>
      {category.description && (
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
          {category.description}
        </p>
      )}

      <ShareButtons
        url={`${SITE_URL}/${locale}/category/${category.slug}`}
        title={category.name}
      />

      <div className="mt-8">
        {entries.length === 0 ? (
          <p className="text-sm text-neutral-500">
            No entries published in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {entries.map((entry) => (
              <EntryCard key={entry.id} entry={entry} locale={locale} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
