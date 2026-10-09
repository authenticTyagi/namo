import { Link } from "@/i18n/navigation";
import { LOCALE_INTL_TAG } from "@/lib/localized";
import { CARD_CLASS } from "@/lib/utils";
import type { SearchResult } from "@/db/queries/search";
import type { Locale } from "@/i18n/routing";

const HREF: Record<SearchResult["type"], (slug: string) => string> = {
  entry: (s) => `/entry/${s}`,
  editorial: (s) => `/editorial/${s}`,
  comparison: (s) => `/india-in-the-world/${s}`,
};

/** One search hit: a type label (Entry / Editorial / Comparison), title, snippet, date. */
export function SearchResultCard({
  result,
  typeLabel,
  locale,
}: {
  result: SearchResult;
  typeLabel: string;
  locale: Locale;
}) {
  return (
    <Link href={HREF[result.type](result.slug)} className={`block ${CARD_CLASS}`}>
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
          {typeLabel}
        </span>
        {result.publishDate && (
          <span className="shrink-0 text-xs text-neutral-400">
            {new Intl.DateTimeFormat(LOCALE_INTL_TAG[locale], { dateStyle: "medium" }).format(
              result.publishDate,
            )}
          </span>
        )}
      </div>
      <h3 className="mt-2 font-semibold">{result.title}</h3>
      <p className="mt-1 text-sm text-neutral-500 line-clamp-2">{result.summary}</p>
    </Link>
  );
}
