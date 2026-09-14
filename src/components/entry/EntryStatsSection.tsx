import { useTranslations } from "next-intl";
import { StatComparison } from "./StatComparison";
import type { EntryStat } from "@/lib/types";
import type { LucideIcon } from "lucide-react";

export function EntryStatsSection({
  stats,
  icon,
}: {
  stats: EntryStat[];
  icon: LucideIcon;
}) {
  const t = useTranslations("entry");
  if (stats.length === 0) return null;

  const sorted = [...stats].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section aria-labelledby="stats-heading" className="mt-6 mb-8">
      <h2
        id="stats-heading"
        className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500"
      >
        {t("beforeAfter")}
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {sorted.map((s) => (
          <StatComparison key={s.id} stat={s} icon={icon} />
        ))}
      </div>
    </section>
  );
}
