import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export type EditorialTone = "positive" | "negative" | "neutral" | "mixed";

const STYLES: Record<EditorialTone, string> = {
  positive: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  negative: "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  neutral: "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  mixed: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
};

export function ToneBadge({ tone }: { tone: EditorialTone }) {
  const t = useTranslations("editorial.tone");

  return (
    <span className={cn("inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium", STYLES[tone])}>
      {t(tone)}
    </span>
  );
}
