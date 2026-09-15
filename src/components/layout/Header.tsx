import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguagePicker } from "./LanguagePicker";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const t = useTranslations("nav");
  const site = useTranslations("site");

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/80 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {site("name")}
        </Link>
        <nav className="hidden items-center gap-5 text-sm lg:flex">
          <Link
            href="/overview"
            className="font-semibold text-[#184f95] dark:text-[#3987e5]"
          >
            {t("overview")}
          </Link>
          <Link href="/categories">{t("categories")}</Link>
          <Link href="/editorials">{t("editorials")}</Link>
          <Link href="/india-in-the-world">{t("compare")}</Link>
          <Link href="/search">{t("search")}</Link>
          <Link href="/about">{t("about")}</Link>
          <Link href="/methodology">{t("methodology")}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <LanguagePicker />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
