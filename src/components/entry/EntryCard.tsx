import { Link } from "@/i18n/navigation";
import { ImpactBadge } from "./ImpactBadge";
import { LOCALE_INTL_TAG } from "@/lib/localized";
import { CARD_CLASS } from "@/lib/utils";
import type { EntrySummary } from "@/lib/types";
import type { Locale } from "@/i18n/routing";

export function EntryCard({ entry, locale }: { entry: EntrySummary; locale: Locale }) {
  return (
    <Link href={`/entry/${entry.slug}`} className={`block ${CARD_CLASS}`}>
      <div className="flex items-center justify-between gap-2">
        <ImpactBadge impactType={entry.impactType} />
        {entry.publishDate && (
          <span className="shrink-0 text-xs text-neutral-400">
            {new Intl.DateTimeFormat(LOCALE_INTL_TAG[locale], { dateStyle: "medium" }).format(
              entry.publishDate,
            )}
          </span>
        )}
      </div>
      <h3 className="mt-2 font-semibold">{entry.title}</h3>
      <p className="mt-1 text-sm text-neutral-500 line-clamp-2">{entry.summary}</p>
    </Link>
  );
}
