"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  ClipboardCheck,
  Newspaper,
  Scale,
  RefreshCw,
  MessageSquare,
  Link2,
  ShieldCheck,
  Inbox,
  type LucideIcon,
} from "lucide-react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { BrandMark } from "@/components/BrandMark";
import { signOutAction } from "./actions";

type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
  countKey?: keyof Counts;
};

type Counts = {
  needsReviewCount: number;
  flaggedCommentsCount: number;
  staleEntriesCount: number;
};

// Grouped by task rather than one flat list — mirrors how the site's own
// content model separates "the record" (entries/editorials/comparisons)
// from "keeping it honest" (review/freshness) from "the inbox"
// (comments/feedback/sources), so the sidebar reads as a map of the job,
// not an alphabetical dump.
const SECTIONS: { label: string; links: NavLink[] }[] = [
  {
    label: "Content",
    links: [
      { href: "/admin/entries", label: "Entries", icon: FileText },
      { href: "/admin/editorials", label: "Editorials", icon: Newspaper },
      { href: "/admin/comparisons", label: "Comparisons", icon: Scale },
    ],
  },
  {
    label: "Keep it honest",
    links: [
      { href: "/admin/review", label: "Review queue", icon: ClipboardCheck, countKey: "needsReviewCount" },
      { href: "/admin/freshness", label: "Needs re-check", icon: RefreshCw, countKey: "staleEntriesCount" },
    ],
  },
  {
    label: "Inbox",
    links: [
      { href: "/admin/comments", label: "Comments", icon: MessageSquare, countKey: "flaggedCommentsCount" },
      { href: "/admin/feedback", label: "Feedback", icon: Inbox },
      { href: "/admin/sources", label: "Sources", icon: Link2 },
      { href: "/admin/trusted-sources", label: "Trusted sources", icon: ShieldCheck },
    ],
  },
];

function isActive(pathname: string, href: string) {
  return href === "/admin" ? pathname === "/admin" : pathname === href || pathname.startsWith(`${href}/`);
}

export function AdminNav({
  userEmail,
  needsReviewCount,
  flaggedCommentsCount,
  staleEntriesCount,
}: {
  userEmail: string;
  needsReviewCount: number;
  flaggedCommentsCount: number;
  staleEntriesCount: number;
}) {
  const pathname = usePathname();
  const counts: Counts = { needsReviewCount, flaggedCommentsCount, staleEntriesCount };

  return (
    <nav className="flex w-60 shrink-0 flex-col border-r border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center justify-between gap-2 border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
        <Link href="/admin" className="flex items-center gap-2">
          <BrandMark className="h-6 w-6 shrink-0" />
          <span className="text-sm font-semibold">Admin</span>
        </Link>
        <ThemeToggle />
      </div>

      <div className="flex-1 space-y-5 overflow-y-auto px-3 py-4">
        <Link
          href="/admin"
          aria-current={pathname === "/admin" ? "page" : undefined}
          className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            pathname === "/admin"
              ? "bg-brand/10 text-brand"
              : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
          }`}
        >
          <LayoutDashboard className="h-4 w-4 shrink-0" />
          Dashboard
        </Link>

        {SECTIONS.map((section) => (
          <div key={section.label}>
            <p className="px-3 text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-neutral-600">
              {section.label}
            </p>
            <div className="mt-1 space-y-0.5">
              {section.links.map((link) => {
                const active = isActive(pathname, link.href);
                const count = link.countKey ? counts[link.countKey] : 0;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                      active
                        ? "bg-brand/10 font-medium text-brand"
                        : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 shrink-0" />
                      {link.label}
                    </span>
                    {count > 0 && (
                      <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                        {count}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-neutral-200 p-4 dark:border-neutral-800">
        <p className="truncate text-xs text-neutral-400">{userEmail}</p>
        <form action={signOutAction}>
          <button
            type="submit"
            className="mt-2 text-xs text-neutral-500 underline hover:text-neutral-700 dark:hover:text-neutral-300"
          >
            Sign out
          </button>
        </form>
      </div>
    </nav>
  );
}
