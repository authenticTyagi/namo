import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getPublishedEntryBySlug } from "@/db/queries/entries";
import { getPublishedEditorialsForEntry } from "@/db/queries/editorials";
import { getPublishedComparisonsForEntry } from "@/db/queries/comparisons";
import { CommentSection } from "@/components/comments/CommentSection";
import { ImpactBadge } from "@/components/entry/ImpactBadge";
import { Timeline } from "@/components/entry/Timeline";
import { EntryStatsSection } from "@/components/entry/EntryStatsSection";
import { CitationList } from "@/components/entry/CitationList";
import { ShareButtons } from "@/components/entry/ShareButtons";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";
import { getEntryIcon } from "@/lib/entry-icons";
import { getCategoryClasses } from "@/lib/category-colors";
import { LOCALE_INTL_TAG, OG_LOCALE_TAG } from "@/lib/localized";
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

  // A bn/te/mr page with no real translation is serving English-fallback
  // text — canonicalize it to the actual English page instead of claiming
  // to be a distinct page with duplicate content (see hasLocalizedContent).
  const canonicalLocale = entry.hasLocalizedContent ? locale : "en";
  const url = `${SITE_URL}/${canonicalLocale}/entry/${entry.slug}`;
  return {
    title: entry.title,
    description: entry.summary,
    alternates: { canonical: url },
    openGraph: {
      title: entry.title,
      description: entry.summary,
      url,
      type: "article",
      locale: OG_LOCALE_TAG[canonicalLocale],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.summary,
    },
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
  const tn = await getTranslations("nav");
  const te = await getTranslations("editorial");
  const tc = await getTranslations("comparisons");
  const Icon = getEntryIcon(entry.slug);
  const categoryClasses = getCategoryClasses(entry.category.slug);
  const editorials = await getPublishedEditorialsForEntry(entry.id, locale);
  const comparisons = await getPublishedComparisonsForEntry(entry.id, locale);
  const entryUrl = `${SITE_URL}/${locale}/entry/${entry.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.summary,
    inLanguage: locale,
    mainEntityOfPage: entryUrl,
    ...(entry.publishDate && { datePublished: entry.publishDate.toISOString() }),
    ...(entry.lastVerifiedDate && { dateModified: entry.lastVerifiedDate.toISOString() }),
    publisher: { "@type": "Organization", name: "Modi Ne Kiya Kya Hai?", url: SITE_URL },
    citation: entry.sources.map((s) => s.url),
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- static JSON, no user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Breadcrumbs
        locale={locale}
        items={[
          { label: tn("home"), href: "/" },
          { label: entry.category.name, href: `/category/${entry.category.slug}` },
          { label: entry.title, href: `/entry/${entry.slug}` },
        ]}
      />
      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-neutral-50 dark:bg-neutral-900 ${categoryClasses.border} ${categoryClasses.text}`}
        >
          <Icon aria-hidden className="h-5 w-5" />
        </span>
        <ImpactBadge impactType={entry.impactType} />
      </div>
      <h1 className="mt-3 text-3xl font-bold tracking-tight">{entry.title}</h1>
      {entry.publishDate && (
        <p className="mt-1 text-xs text-neutral-400">
          {t("published")}:{" "}
          {new Intl.DateTimeFormat(LOCALE_INTL_TAG[locale], { dateStyle: "medium" }).format(
            entry.publishDate,
          )}
        </p>
      )}

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

      {editorials.length > 0 && (
        <div className="mt-6 space-y-2">
          {editorials.map((editorial) => (
            <Link
              key={editorial.id}
              href={`/editorial/${editorial.slug}`}
              className="block rounded-lg border border-neutral-200 p-3 text-sm transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
            >
              <span className="font-medium text-[#184f95] dark:text-[#3987e5]">
                {te("readEditorial")} →
              </span>
              <p className="mt-0.5 text-neutral-600 dark:text-neutral-400">{editorial.headline}</p>
            </Link>
          ))}
        </div>
      )}

      {comparisons.length > 0 && (
        <div className="mt-6 space-y-2">
          {comparisons.map((c) => (
            <Link
              key={c.id}
              href={`/india-in-the-world/${c.slug}`}
              className="block rounded-lg border border-neutral-200 p-3 text-sm transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
            >
              <span className="font-medium text-[#184f95] dark:text-[#3987e5]">
                {tc("seeComparison")} →
              </span>
              <p className="mt-0.5 text-neutral-600 dark:text-neutral-400">{c.title}</p>
            </Link>
          ))}
        </div>
      )}

      <CitationList sources={entry.sources} />

      <ShareButtons url={entryUrl} title={entry.title} />

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

      <CommentSection
        target={{ entryId: entry.id }}
        locale={locale}
        returnTo={entryUrl}
      />
    </article>
  );
}
