import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { NavLink } from "./NavLink";
import { LanguagePicker } from "./LanguagePicker";
import { MobileMenu } from "./MobileMenu";

const NAV_ACTIVE = "text-[#184f95] dark:text-[#3987e5] font-semibold";
const NAV_INACTIVE = "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100";

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
          <NavLink href="/overview" className={NAV_INACTIVE} activeClassName={NAV_ACTIVE}>
            {t("overview")}
          </NavLink>
          <NavLink href="/categories" className={NAV_INACTIVE} activeClassName={NAV_ACTIVE}>
            {t("categories")}
          </NavLink>
          <NavLink href="/editorials" className={NAV_INACTIVE} activeClassName={NAV_ACTIVE}>
            {t("editorials")}
          </NavLink>
          <NavLink href="/india-in-the-world" className={NAV_INACTIVE} activeClassName={NAV_ACTIVE}>
            {t("compare")}
          </NavLink>
          <NavLink href="/search" className={NAV_INACTIVE} activeClassName={NAV_ACTIVE}>
            {t("search")}
          </NavLink>
          <NavLink href="/about" className={NAV_INACTIVE} activeClassName={NAV_ACTIVE}>
            {t("about")}
          </NavLink>
          <NavLink href="/methodology" className={NAV_INACTIVE} activeClassName={NAV_ACTIVE}>
            {t("methodology")}
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <LanguagePicker />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
