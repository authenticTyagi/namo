import { cn } from "@/lib/utils";
import type { EntryStat } from "@/lib/types";
import type { Locale } from "@/i18n/routing";
import type { LucideIcon } from "lucide-react";

/**
 * 3-point form (currently only the highways entry uses this, for its
 * single-day peak figure): a single-series, single sequential-hue bar
 * chart. Validated with the dataviz skill's palette validator against this
 * app's real light (#ffffff) and dark (#0a0a0a) surfaces — see the
 * implementation plan for the exact validator invocations and results.
 * Thin (h-2.5) rounded bars, direct value labels (no hover dependency), one
 * shared linear scale (no dual-axis), no legend box (single series).
 */
const BAR_COLORS = ["bg-[#6da7ec]", "bg-[#2a78d6]", "bg-[#184f95]"];

export function StatBarRow({
  stat,
  locale,
  icon: Icon,
}: {
  stat: EntryStat;
  locale: Locale;
  icon: LucideIcon;
}) {
  const hi = locale === "hi";
  const points = [
    {
      label: hi ? stat.beforeLabelHi : stat.beforeLabelEn,
      value: hi ? stat.beforeValueHi : stat.beforeValueEn,
      n: Number(stat.beforeValueNumeric ?? 0),
    },
    {
      label: hi ? stat.afterLabelHi : stat.afterLabelEn,
      value: hi ? stat.afterValueHi : stat.afterValueEn,
      n: Number(stat.afterValueNumeric ?? 0),
    },
    {
      label: hi ? stat.extraLabelHi : stat.extraLabelEn,
      value: hi ? stat.extraValueHi : stat.extraValueEn,
      n: Number(stat.extraValueNumeric ?? 0),
    },
  ].filter((p) => p.label && p.value);
  const max = Math.max(...points.map((p) => p.n), 1);

  return (
    <div className="relative overflow-hidden rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
      <Icon
        aria-hidden
        className="pointer-events-none absolute -top-4 -right-4 h-28 w-28 text-neutral-100 dark:text-neutral-800/60"
      />
      <p className="relative text-xs font-semibold uppercase tracking-wide text-neutral-500">
        {hi ? stat.metricLabelHi : stat.metricLabelEn}
      </p>
      <div className="relative mt-4 space-y-3">
        {points.map((p, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-xs font-medium text-neutral-500 sm:w-32">
              {p.label}
            </span>
            <div className="h-2.5 flex-1 rounded-full bg-neutral-100 dark:bg-neutral-800">
              <div
                className={cn("h-2.5 rounded-full", BAR_COLORS[i])}
                style={{ width: `${Math.max((p.n / max) * 100, 4)}%` }}
              />
            </div>
            <span className="w-24 shrink-0 text-right text-base font-extrabold tabular-nums sm:w-28">
              {p.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
