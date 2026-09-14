import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { ImpactType } from "@/lib/types";

const STYLES: Record<ImpactType, string> = {
  tangible:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  intangible: "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  mixed:
    "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
};

export function ImpactBadge({ impactType }: { impactType: ImpactType }) {
  const t = useTranslations("entry.impact");

  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium",
        STYLES[impactType],
      )}
    >
      {t(impactType)}
    </span>
  );
}
