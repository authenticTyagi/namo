import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="mt-auto border-t border-neutral-200 py-6 dark:border-neutral-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 text-sm text-neutral-500 sm:flex-row sm:justify-between">
        <span>&copy; {new Date().getFullYear()}</span>
        <div className="flex gap-4">
          <Link href="/methodology">{t("methodologyLink")}</Link>
          <Link href="/terms">{t("termsLink")}</Link>
          <Link href="/privacy">{t("privacyLink")}</Link>
          <Link href="/feedback">{t("feedbackLink")}</Link>
        </div>
      </div>
    </footer>
  );
}
