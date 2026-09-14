import { getTranslations, setRequestLocale } from "next-intl/server";
import { FeedbackForm } from "./FeedbackForm";
import type { Locale } from "@/i18n/routing";

export default async function FeedbackPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ entry?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { entry } = await searchParams;

  const t = await getTranslations("feedback");

  return (
    <div className="mx-auto max-w-lg px-4 py-10">
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {t("subtitle")}
      </p>
      {entry && (
        <p className="mt-2 text-xs text-neutral-400">
          {t("aboutEntry")}: {entry}
        </p>
      )}
      <div className="mt-6">
        <FeedbackForm relatedEntrySlug={entry} />
      </div>
    </div>
  );
}
