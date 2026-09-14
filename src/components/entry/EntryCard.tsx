import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ImpactBadge } from "./ImpactBadge";
import type { EntrySummary } from "@/lib/types";

export function EntryCard({ entry }: { entry: EntrySummary }) {
  const locale = useLocale();
  const title = locale === "hi" ? entry.titleHi : entry.titleEn;
  const summary = locale === "hi" ? entry.summaryHi : entry.summaryEn;

  return (
    <Link
      href={`/entry/${entry.slug}`}
      className="block rounded-lg border border-neutral-200 p-4 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
    >
      <ImpactBadge impactType={entry.impactType} />
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-neutral-500 line-clamp-2">{summary}</p>
    </Link>
  );
}
