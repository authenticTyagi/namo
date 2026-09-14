"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageToggle() {
  const t = useTranslations("language");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = routing.locales.find((l) => l !== locale) ?? locale;

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: otherLocale })}
      className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
      aria-label="Switch language"
    >
      {t("switchTo")}
    </button>
  );
}
