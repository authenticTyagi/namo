import Link from "next/link";
import { getStaleEntries } from "@/db/queries/admin";

function formatDate(date: Date | null) {
  if (!date) return "Never verified";
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(date);
}

export default async function AdminFreshnessPage() {
  const entries = await getStaleEntries();

  return (
    <div>
      <h1 className="text-2xl font-bold">Needs a fact re-check ({entries.length})</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Published entries whose facts haven&apos;t been confirmed in 6+ months, or never since
        publishing. Nothing here has been unpublished or flagged as wrong — this is just a
        freshness prompt, oldest first. Open an entry&apos;s edit form, re-check its figures and
        sources are still current, and save (even with no changes) to bump its verified date —
        saving also sends it back through review, same as any other edit.
      </p>

      {entries.length === 0 ? (
        <p className="mt-8 text-sm text-neutral-400">Everything published has been checked within the last 6 months.</p>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-left text-neutral-500 dark:border-neutral-800">
                <th className="py-2 pr-4 font-medium">Title</th>
                <th className="py-2 pr-4 font-medium">Category</th>
                <th className="py-2 pr-4 font-medium">Last verified</th>
                <th className="py-2 pr-4 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id} className="border-b border-neutral-100 dark:border-neutral-900">
                  <td className="py-3 pr-4">{entry.titleEn}</td>
                  <td className="py-3 pr-4 text-neutral-500">{entry.categoryNameEn}</td>
                  <td className="py-3 pr-4 text-neutral-500">{formatDate(entry.lastVerifiedDate)}</td>
                  <td className="py-3 pr-4">
                    <Link
                      href={`/admin/entries/${entry.id}/edit`}
                      className="rounded-md border border-neutral-300 px-2.5 py-1 text-xs hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                    >
                      Review & edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
