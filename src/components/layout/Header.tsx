import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const t = useTranslations("nav");
  const site = useTranslations("site");

  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-lg font-semibold">
          {site("name")}
        </Link>
        <nav className="hidden items-center gap-6 text-sm sm:flex">
          <Link href="/">{t("home")}</Link>
          <Link href="/search">{t("search")}</Link>
          <Link href="/about">{t("about")}</Link>
          <Link href="/methodology">{t("methodology")}</Link>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}
