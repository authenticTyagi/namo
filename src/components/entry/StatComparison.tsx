import type { EntryStat } from "@/lib/types";
import type { LucideIcon } from "lucide-react";
import { StatBarRow } from "./StatBarRow";

/**
 * "Split story card" form for a 2-point before/after stat: a muted "before"
 * panel beside a vibrant "now" panel, with the entry's icon as a large
 * faint watermark — closer to an Instagram-story stat card than a data
 * table. Falls through to StatBarRow when a 3rd ("extra") point is present
 * — a 2-point comparison reads better as two big numbers than as a bar
 * chart (a 2-bar chart is the dataviz anti-pattern of forcing a chart where
 * a stat tile is clearer).
 */
export function StatComparison({
  stat,
  icon: Icon,
}: {
  stat: EntryStat;
  icon: LucideIcon;
}) {
  if (stat.extraValue) return <StatBarRow stat={stat} icon={Icon} />;

  return (
    <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
      <Icon
        aria-hidden
        className="pointer-events-none absolute -top-4 -right-4 h-28 w-28 text-neutral-100 dark:text-neutral-800/60"
      />
      <p className="relative px-4 pt-4 text-xs font-semibold uppercase tracking-wide text-neutral-500">
        {stat.metricLabel}
      </p>
      <div className="relative mt-3 grid grid-cols-2">
        <div className="bg-neutral-50 p-4 dark:bg-neutral-900/60">
          <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
            {stat.beforeLabel}
          </p>
          <p className="mt-1 text-3xl font-extrabold tabular-nums text-neutral-400 dark:text-neutral-500">
            {stat.beforeValue}
          </p>
        </div>
        <div className="bg-brand/[0.06] p-4 dark:bg-brand/[0.12]">
          <p className="text-xs font-medium text-brand/80 dark:text-brand/90">
            {stat.afterLabel}
          </p>
          <p className="mt-1 text-3xl font-extrabold tabular-nums text-brand">
            {stat.afterValue}
          </p>
        </div>
      </div>
    </div>
  );
}
