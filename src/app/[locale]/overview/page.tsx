import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAllStatsGroupedByCategory } from "@/db/queries/entries";
import { StatComparison } from "@/components/entry/StatComparison";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BackToTop } from "@/components/BackToTop";
import { Link } from "@/i18n/navigation";
import { getCategoryClasses } from "@/lib/category-colors";
import { getCategoryIcon } from "@/lib/category-icons";
import { getEntryIcon } from "@/lib/entry-icons";
import { ShareButtons } from "@/components/entry/ShareButtons";
import { SITE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

export default async function OverviewPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("overview");
  const groups = await getAllStatsGroupedByCategory(locale);
  const totalStats = groups.reduce(
    (n, g) => n + g.entries.reduce((m, e) => m + e.stats.length, 0),
    0,
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
          {t("subtitle")}
        </p>
        {totalStats > 0 && (
          <p className="mt-4 text-sm font-semibold text-neutral-500">
            {t("counter", { stats: totalStats, categories: groups.length })}
          </p>
        )}
        <div className="mt-4 flex justify-center">
          <ShareButtons url={`${SITE_URL}/${locale}/overview`} title={t("title")} />
        </div>
      </div>

      {groups.length === 0 && (
        <p className="text-center text-sm text-neutral-500">{t("empty")}</p>
      )}

      {groups.length > 3 && (
        <nav
          aria-label={t("jumpToCategory")}
          className="mb-10 flex flex-wrap justify-center gap-2 border-b border-neutral-200 pb-8 dark:border-neutral-800"
        >
          {groups.map((group) => {
            const accent = getCategoryClasses(group.category.slug);
            return (
              <a
                key={group.category.id}
                href={`#cat-${group.category.slug}`}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium transition hover:bg-neutral-100 dark:hover:bg-neutral-900",
                  accent.border,
                  accent.text,
                )}
              >
                {group.category.name}
              </a>
            );
          })}
        </nav>
      )}

      <div className="space-y-16">
        {groups.map((group) => {
          const accent = getCategoryClasses(group.category.slug);
          const CategoryIcon = getCategoryIcon(group.category.slug);
          const name = group.category.name;

          return (
            <ScrollReveal key={group.category.id}>
              <section
                aria-labelledby={`cat-${group.category.slug}`}
                className={cn("border-l-4 pl-5", accent.border)}
              >
                <div className="mb-5 flex items-center gap-3">
                  <CategoryIcon aria-hidden className={cn("h-6 w-6", accent.text)} />
                  <h2
                    id={`cat-${group.category.slug}`}
                    className="text-xl font-bold"
                  >
                    {name}
                  </h2>
                </div>

                <div className="space-y-8">
                  {group.entries.map((entry) => {
                    const EntryIcon = getEntryIcon(entry.slug);
                    return (
                      <div key={entry.id}>
                        <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                          <EntryIcon aria-hidden className="h-4 w-4 shrink-0" />
                          {entry.title}
                        </h3>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {entry.stats.map((stat) => (
                            <StatComparison key={stat.id} stat={stat} icon={EntryIcon} />
                          ))}
                        </div>
                        <Link
                          href={`/entry/${entry.slug}`}
                          className="mt-2 inline-block text-xs font-medium text-brand underline underline-offset-2"
                        >
                          {t("readFullEntry")} →
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </section>
            </ScrollReveal>
          );
        })}
      </div>

      {groups.length > 3 && <BackToTop label={t("backToTop")} />}
    </div>
  );
}
