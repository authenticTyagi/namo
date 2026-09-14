import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getPublishedEntryBySlug } from "@/db/queries/entries";
import { ImpactBadge } from "@/components/entry/ImpactBadge";
import { Timeline } from "@/components/entry/Timeline";
import { EntryStatsSection } from "@/components/entry/EntryStatsSection";
import { CitationList } from "@/components/entry/CitationList";
import { ShareButtons } from "@/components/entry/ShareButtons";
import { SITE_URL } from "@/lib/constants";
import { getEntryIcon } from "@/lib/entry-icons";
import { LOCALE_INTL_TAG } from "@/lib/localized";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";

type Params = { locale: Locale; entrySlug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, entrySlug } = await params;
  const entry = await getPublishedEntryBySlug(entrySlug, locale);
  if (!entry) return {};

  return {
    title: entry.title,
    description: entry.summary,
    openGraph: { title: entry.title, description: entry.summary },
  };
}

export default async function EntryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, entrySlug } = await params;
  setRequestLocale(locale);

  const entry = await getPublishedEntryBySlug(entrySlug, locale);
  if (!entry) notFound();

  const t = await getTranslations("entry");
  const Icon = getEntryIcon(entry.slug);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
          <Icon aria-hidden className="h-5 w-5" />
        </span>
        <ImpactBadge impactType={entry.impactType} />
      </div>
      <h1 className="mt-3 text-3xl font-bold tracking-tight">{entry.title}</h1>

      <Timeline
        startDate={entry.timelineStartDate}
        endDate={entry.timelineEndDate}
        locale={locale}
      />

      <EntryStatsSection stats={entry.stats} icon={Icon} />

      {entry.quickTake && (
        <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
          {entry.quickTake}
        </p>
      )}

      {entry.bodySections && entry.bodySections.length > 0 ? (
        <div className="prose prose-neutral dark:prose-invert mt-6 max-w-none">
          {entry.bodySections.map((s, i) => (
            <section key={i}>
              <h2 className="text-lg font-semibold">{s.heading}</h2>
              <p className="whitespace-pre-wrap">{s.body}</p>
            </section>
          ))}
        </div>
      ) : (
        <div className="prose prose-neutral dark:prose-invert mt-6 max-w-none whitespace-pre-wrap">
          {entry.body}
        </div>
      )}

      {entry.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag.id}
              className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}

      <CitationList sources={entry.sources} />

      <ShareButtons url={`${SITE_URL}/${locale}/entry/${entry.slug}`} title={entry.title} />

      {entry.lastVerifiedDate && (
        <p className="mt-6 text-xs text-neutral-400">
          {t("lastVerified")}:{" "}
          {new Intl.DateTimeFormat(LOCALE_INTL_TAG[locale], {
            dateStyle: "medium",
          }).format(entry.lastVerifiedDate)}
        </p>
      )}

      <Link
        href={`/feedback?entry=${entry.slug}`}
        className="mt-2 inline-block text-xs text-neutral-400 underline"
      >
        {t("reportIssue")}
      </Link>

      {/* Comments section is added in Phase 2, once auth + moderation ship. */}
    </article>
  );
}
