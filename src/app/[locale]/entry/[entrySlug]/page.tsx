import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getPublishedEntryBySlug } from "@/db/queries/entries";
import { ImpactBadge } from "@/components/entry/ImpactBadge";
import { Timeline } from "@/components/entry/Timeline";
import { CitationList } from "@/components/entry/CitationList";
import { ShareButtons } from "@/components/entry/ShareButtons";
import { SITE_URL } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";

type Params = { locale: Locale; entrySlug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, entrySlug } = await params;
  const entry = await getPublishedEntryBySlug(entrySlug);
  if (!entry) return {};

  const title = locale === "hi" ? entry.titleHi : entry.titleEn;
  const description = locale === "hi" ? entry.summaryHi : entry.summaryEn;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function EntryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, entrySlug } = await params;
  setRequestLocale(locale);

  const entry = await getPublishedEntryBySlug(entrySlug);
  if (!entry) notFound();

  const t = await getTranslations("entry");
  const title = locale === "hi" ? entry.titleHi : entry.titleEn;
  const body = locale === "hi" ? entry.bodyHi : entry.bodyEn;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <ImpactBadge impactType={entry.impactType} />
      <h1 className="mt-3 text-3xl font-bold tracking-tight">{title}</h1>

      <Timeline
        startDate={entry.timelineStartDate}
        endDate={entry.timelineEndDate}
        locale={locale}
      />

      <div className="prose prose-neutral dark:prose-invert max-w-none whitespace-pre-wrap">
        {body}
      </div>

      {entry.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag.id}
              className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {locale === "hi" ? tag.labelHi : tag.labelEn}
            </span>
          ))}
        </div>
      )}

      <CitationList sources={entry.sources} />

      <ShareButtons url={`${SITE_URL}/${locale}/entry/${entry.slug}`} title={title} />

      {entry.lastVerifiedDate && (
        <p className="mt-6 text-xs text-neutral-400">
          {t("lastVerified")}:{" "}
          {new Intl.DateTimeFormat(locale === "hi" ? "hi-IN" : "en-IN", {
            dateStyle: "medium",
          }).format(entry.lastVerifiedDate)}
        </p>
      )}

      <a
        href={`mailto:report@modinekiyakyahai.com?subject=${encodeURIComponent(`Issue with: ${title}`)}`}
        className="mt-2 inline-block text-xs text-neutral-400 underline"
      >
        {t("reportIssue")}
      </a>

      {/* Comments section is added in Phase 2, once auth + moderation ship. */}
    </article>
  );
}
