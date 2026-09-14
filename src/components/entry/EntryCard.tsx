import { Link } from "@/i18n/navigation";
import { ImpactBadge } from "./ImpactBadge";
import type { EntrySummary } from "@/lib/types";

export function EntryCard({ entry }: { entry: EntrySummary }) {
  return (
    <Link
      href={`/entry/${entry.slug}`}
      className="block rounded-lg border border-neutral-200 p-4 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
    >
      <ImpactBadge impactType={entry.impactType} />
      <h3 className="mt-2 font-semibold">{entry.title}</h3>
      <p className="mt-1 text-sm text-neutral-500 line-clamp-2">{entry.summary}</p>
    </Link>
  );
}
