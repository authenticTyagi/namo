import Link from "next/link";
import { signOutAction } from "./actions";

const LINKS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/entries", label: "Entries" },
  { href: "/admin/review", label: "Review queue" },
  { href: "/admin/sources", label: "Sources" },
];

export function AdminNav({ userEmail }: { userEmail: string }) {
  return (
    <nav className="flex w-56 shrink-0 flex-col border-r border-neutral-200 p-4 dark:border-neutral-800">
      <p className="mb-6 text-sm font-semibold">Admin</p>
      <div className="flex-1 space-y-1">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            {link.label}
          </Link>
        ))}
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
