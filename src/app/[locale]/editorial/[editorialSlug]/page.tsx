import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getPublishedEditorialBySlug } from "@/db/queries/editorials";
import { ToneBadge } from "@/components/editorial/ToneBadge";
import { CommentSection } from "@/components/comments/CommentSection";
import { ShareButtons } from "@/components/entry/ShareButtons";
import { SITE_URL } from "@/lib/constants";
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

  return {
    title: editorial.headline,
    openGraph: { title: editorial.headline },
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

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-neutral-900 px-2.5 py-0.5 text-xs font-medium text-white dark:bg-neutral-100 dark:text-neutral-900">
          {t("opinionLabel")}
        </span>
        <ToneBadge tone={editorial.tone} />
      </div>

      <h1 className="mt-3 text-3xl font-bold tracking-tight">{editorial.headline}</h1>

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

      <ShareButtons
        url={`${SITE_URL}/${locale}/editorial/${editorial.slug}`}
        title={editorial.headline}
      />

      <CommentSection
        target={{ editorialId: editorial.id }}
        locale={locale}
        returnTo={`${SITE_URL}/${locale}/editorial/${editorial.slug}`}
      />
    </article>
  );
}
