import Link from "next/link";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { signOutAction } from "./actions";

const LINKS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/entries", label: "Entries" },
  { href: "/admin/review", label: "Review queue", countKey: "needsReviewCount" as const },
  { href: "/admin/editorials", label: "Editorials" },
  { href: "/admin/comparisons", label: "Comparisons" },
  { href: "/admin/comments", label: "Comments", countKey: "flaggedCommentsCount" as const },
  { href: "/admin/sources", label: "Sources" },
  { href: "/admin/trusted-sources", label: "Trusted sources" },
  { href: "/admin/feedback", label: "Feedback" },
];

export function AdminNav({
  userEmail,
  needsReviewCount,
  flaggedCommentsCount,
}: {
  userEmail: string;
  needsReviewCount: number;
  flaggedCommentsCount: number;
}) {
  const counts = { needsReviewCount, flaggedCommentsCount };

  return (
    <nav className="flex w-56 shrink-0 flex-col border-r border-neutral-200 p-4 dark:border-neutral-800">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm font-semibold">Admin</p>
        <ThemeToggle />
      </div>
      <div className="flex-1 space-y-1">
        {LINKS.map((link) => {
          const count = link.countKey ? counts[link.countKey] : 0;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              <span>{link.label}</span>
              {count > 0 && (
                <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                  {count}
                </span>
              )}
            </Link>
          );
        })}
      </div>
      <div className="border-t border-neutral-200 pt-4 dark:border-neutral-800">
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
