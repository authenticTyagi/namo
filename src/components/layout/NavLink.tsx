"use client";

import { Link, usePathname } from "@/i18n/navigation";
import type { ReactNode } from "react";

/**
 * A nav `Link` that knows whether it's the current page and applies
 * `activeClassName` + `aria-current="page"` when it is — so the site
 * actually has a "which tab am I on" signal, which it didn't have before
 * (only the Overview link had permanent, unconditional brand styling that
 * looked like an active-state indicator but wasn't one). Uses next-intl's
 * locale-stripped `usePathname`, so this works the same across all 5
 * locales without branching on the locale prefix.
 */
export function NavLink({
  href,
  children,
  className = "",
  activeClassName,
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`${className} ${isActive ? activeClassName : ""}`}
    >
      {children}
    </Link>
  );
}
