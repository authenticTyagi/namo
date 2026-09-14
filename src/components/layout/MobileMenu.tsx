"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";

/**
 * Hamburger menu shown only below the `sm` breakpoint — the desktop <nav>
 * in Header.tsx is `hidden` there with no other way to reach Overview/
 * Search/About/Methodology on a phone, which is where most visitors land.
 */
export function MobileMenu() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t("home") },
    { href: "/overview", label: t("overview") },
    { href: "/search", label: t("search") },
    { href: "/about", label: t("about") },
    { href: "/methodology", label: t("methodology") },
  ];

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <nav className="absolute inset-x-0 top-full z-40 border-b border-neutral-200 bg-white px-4 py-3 shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
