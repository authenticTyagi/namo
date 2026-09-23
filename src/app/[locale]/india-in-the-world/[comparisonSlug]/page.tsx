import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getPublishedComparisonBySlug } from "@/db/queries/comparisons";
import { ComparisonBarChart } from "@/components/comparison/ComparisonBarChart";
import { CitationList } from "@/components/entry/CitationList";
import { ShareButtons } from "@/components/entry/ShareButtons";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";
import { OG_LOCALE_TAG, isExtraLocale } from "@/lib/localized";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";

type Params = { locale: Locale; comparisonSlug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, comparisonSlug } = await params;
  const comparison = await getPublishedComparisonBySlug(comparisonSlug, locale);
  if (!comparison) return {};

  // Comparisons have no bn/te/mr translation table at all (see
  // ComparisonDetail in db/queries/comparisons.ts) — every extra-locale
  // request is always English-fallback content, so it always canonicalizes
  // to the English page.
  const canonicalLocale = isExtraLocale(locale) ? "en" : locale;
  const url = `${SITE_URL}/${canonicalLocale}/india-in-the-world/${comparison.slug}`;
  return {
    title: comparison.title,
    description: comparison.metricLabel,
    alternates: { canonical: url },
    openGraph: {
      title: comparison.title,
      description: comparison.metricLabel,
      url,
      type: "article",
      locale: OG_LOCALE_TAG[canonicalLocale],
    },
    twitter: {
      card: "summary_large_image",
      title: comparison.title,
      description: comparison.metricLabel,
    },
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, comparisonSlug } = await params;
  setRequestLocale(locale);

  const comparison = await getPublishedComparisonBySlug(comparisonSlug, locale);
  if (!comparison) notFound();

  const t = await getTranslations("comparisons");
  const tn = await getTranslations("nav");
  const comparisonUrl = `${SITE_URL}/${locale}/india-in-the-world/${comparison.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: comparison.title,
    description: comparison.metricLabel,
    inLanguage: locale,
    mainEntityOfPage: comparisonUrl,
    publisher: { "@type": "Organization", name: "Modi Ne Kiya Kya Hai?", url: SITE_URL },
    citation: comparison.sources.map((s) => s.url),
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
          { label: tn("compare"), href: "/india-in-the-world" },
          { label: comparison.title, href: `/india-in-the-world/${comparison.slug}` },
        ]}
      />
      <span className="inline-flex rounded-full bg-neutral-900 px-2.5 py-0.5 text-xs font-medium text-white dark:bg-neutral-100 dark:text-neutral-900">
        {t("badge")}
      </span>

      <h1 className="mt-3 text-3xl font-bold tracking-tight">{comparison.title}</h1>
      <p className="mt-1 text-sm font-medium text-neutral-500">{comparison.metricLabel}</p>

      <div className="mt-6 rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
        <ComparisonBarChart points={comparison.points} unit={comparison.unit} />
      </div>

      <div className="prose prose-neutral dark:prose-invert mt-6 max-w-none whitespace-pre-wrap">
        {comparison.narrative}
      </div>

      {comparison.relatedEntrySlug && (
        <Link
          href={`/entry/${comparison.relatedEntrySlug}`}
          className="mt-6 block rounded-lg border border-neutral-200 p-3 text-sm transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
        >
          <span className="font-medium text-[#184f95] dark:text-[#3987e5]">{t("relatedEntry")} →</span>
          <p className="mt-0.5 text-neutral-600 dark:text-neutral-400">{comparison.relatedEntryTitle}</p>
        </Link>
      )}

      <CitationList sources={comparison.sources} />

      <ShareButtons url={comparisonUrl} title={comparison.title} />
    </article>
  );
}
