import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { EntrySource, CredibilityTier } from "@/lib/types";

const TIER_LABEL: Record<CredibilityTier, string> = {
  official_primary: "Official / primary source",
  reputable_media: "Reputable media",
  secondary: "Secondary source",
};

const TIER_STYLES: Record<CredibilityTier, string> = {
  official_primary:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  reputable_media:
    "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  secondary:
    "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
};

export function CitationList({ sources }: { sources: EntrySource[] }) {
  const t = useTranslations("entry");

  if (sources.length === 0) return null;

  return (
    <section aria-labelledby="sources-heading" className="mt-8">
      <h2 id="sources-heading" className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
        {t("sources")}
      </h2>
      <ul className="space-y-3">
        {sources.map((source) => (
          <li
            key={source.id}
            className="rounded-lg border border-neutral-200 p-3 text-sm dark:border-neutral-800"
          >
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="font-medium underline underline-offset-2"
            >
              {source.title ?? source.url}
            </a>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-neutral-500">
              <span>{source.publisher}</span>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-xs",
                  TIER_STYLES[source.credibilityTier],
                )}
              >
                {TIER_LABEL[source.credibilityTier]}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
