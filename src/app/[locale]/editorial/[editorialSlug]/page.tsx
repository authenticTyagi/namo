import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getPublishedEditorialBySlug } from "@/db/queries/editorials";
import { ToneBadge } from "@/components/editorial/ToneBadge";
import { CommentSection } from "@/components/comments/CommentSection";
import { ShareButtons } from "@/components/entry/ShareButtons";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";
import { LOCALE_INTL_TAG, OG_LOCALE_TAG, isExtraLocale } from "@/lib/localized";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";

type Params = { locale: Locale; editorialSlug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, editorialSlug } = await params;
  const editorial = await getPublishedEditorialBySlug(editorialSlug, locale);
  if (!editorial) return {};

  // Editorials have no bn/te/mr translation table at all (see EditorialDetail
  // in db/queries/editorials.ts) — every extra-locale request is always
  // English-fallback content, so it always canonicalizes to the English page.
  const canonicalLocale = isExtraLocale(locale) ? "en" : locale;
  const url = `${SITE_URL}/${canonicalLocale}/editorial/${editorial.slug}`;
  return {
    title: editorial.headline,
    alternates: { canonical: url },
    openGraph: { title: editorial.headline, url, type: "article", locale: OG_LOCALE_TAG[canonicalLocale] },
    twitter: { card: "summary_large_image", title: editorial.headline },
  };
}

export default async function EditorialPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, editorialSlug } = await params;
  setRequestLocale(locale);

  const editorial = await getPublishedEditorialBySlug(editorialSlug, locale);
  if (!editorial) notFound();

  const t = await getTranslations("editorial");
  const tn = await getTranslations("nav");
  const editorialUrl = `${SITE_URL}/${locale}/editorial/${editorial.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: editorial.headline,
    inLanguage: locale,
    mainEntityOfPage: editorialUrl,
    ...(editorial.publishDate && { datePublished: editorial.publishDate.toISOString() }),
    publisher: { "@type": "Organization", name: "Modi Ne Kiya Kya Hai?", url: SITE_URL },
    about: `${SITE_URL}/${locale}/entry/${editorial.relatedEntrySlug}`,
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
          { label: tn("editorials"), href: "/editorials" },
          { label: editorial.headline, href: `/editorial/${editorial.slug}` },
        ]}
      />
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-neutral-900 px-2.5 py-0.5 text-xs font-medium text-white dark:bg-neutral-100 dark:text-neutral-900">
          {t("opinionLabel")}
        </span>
        <ToneBadge tone={editorial.tone} />
      </div>

      <h1 className="mt-3 text-3xl font-bold tracking-tight">{editorial.headline}</h1>
      {editorial.publishDate && (
        <p className="mt-1 text-xs text-neutral-400">
          {t("published")}:{" "}
          {new Intl.DateTimeFormat(LOCALE_INTL_TAG[locale], { dateStyle: "medium" }).format(
            editorial.publishDate,
          )}
        </p>
      )}

      <p className="mt-3 text-sm text-neutral-500">
        {t("basedOn")}{" "}
        <Link
          href={`/entry/${editorial.relatedEntrySlug}`}
          className="font-medium text-[#184f95] underline underline-offset-2 dark:text-[#3987e5]"
        >
          {editorial.relatedEntryTitle}
        </Link>
      </p>

      <div className="prose prose-neutral dark:prose-invert mt-6 max-w-none whitespace-pre-wrap">
        {editorial.body}
      </div>

      <ShareButtons url={editorialUrl} title={editorial.headline} />

      <CommentSection
        target={{ editorialId: editorial.id }}
        locale={locale}
        returnTo={editorialUrl}
      />
    </article>
  );
}
