import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getPublishedEditorials } from "@/db/queries/editorials";
import { ToneBadge } from "@/components/editorial/ToneBadge";
import { LOCALE_INTL_TAG } from "@/lib/localized";
import { CARD_CLASS } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

export default async function EditorialsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("editorials");
  const editorials = await getPublishedEditorials(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">{t("heading")}</h1>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">{t("subtitle")}</p>

      {editorials.length === 0 ? (
        <p className="mt-8 text-sm text-neutral-500">{t("empty")}</p>
      ) : (
        <div className="mt-8 space-y-4">
          {editorials.map((editorial) => (
            <Link
              key={editorial.id}
              href={`/editorial/${editorial.slug}`}
              className={`block ${CARD_CLASS}`}
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <ToneBadge tone={editorial.tone} />
                {editorial.publishDate && (
                  <span className="shrink-0 text-xs text-neutral-400">
                    {new Intl.DateTimeFormat(LOCALE_INTL_TAG[locale], { dateStyle: "medium" }).format(
                      editorial.publishDate,
                    )}
                  </span>
                )}
              </div>
              <h2 className="font-semibold">{editorial.headline}</h2>
              <p className="mt-1 text-sm text-neutral-500">{editorial.relatedEntryTitle}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
