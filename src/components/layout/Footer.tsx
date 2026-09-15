import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const site = useTranslations("site");

  return (
    <footer className="mt-auto border-t border-neutral-200 py-8 dark:border-neutral-800">
      <div className="mx-auto max-w-5xl px-4">
        <p className="text-sm font-semibold">{site("name")}</p>
        <p className="mt-1 max-w-md text-xs text-neutral-500">{site("tagline")}</p>
        <div className="mt-4 flex flex-col items-start gap-2 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()}</span>
          <div className="flex flex-wrap gap-4">
            <Link href="/about">{t("aboutLink")}</Link>
            <Link href="/methodology">{t("methodologyLink")}</Link>
            <Link href="/terms">{t("termsLink")}</Link>
            <Link href="/privacy">{t("privacyLink")}</Link>
            <Link href="/feedback">{t("feedbackLink")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
