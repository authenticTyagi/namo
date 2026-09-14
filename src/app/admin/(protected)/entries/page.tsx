import { getAllEntriesForAdmin } from "@/db/queries/admin";
import { SITE_URL } from "@/lib/constants";
import { PublishToggleButton } from "./PublishToggleButton";

const STATUS_STYLES: Record<string, string> = {
  published: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  draft: "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
  pending_review: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  rejected: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
};

export default async function AdminEntriesPage() {
  const entries = await getAllEntriesForAdmin();

  return (
    <div>
      <h1 className="text-2xl font-bold">Entries ({entries.length})</h1>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-neutral-200 text-left text-neutral-500 dark:border-neutral-800">
              <th className="py-2 pr-4 font-medium">Title</th>
              <th className="py-2 pr-4 font-medium">Category</th>
              <th className="py-2 pr-4 font-medium">Status</th>
              <th className="py-2 pr-4 font-medium">Live</th>
              <th className="py-2 pr-4 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id} className="border-b border-neutral-100 dark:border-neutral-900">
                <td className="py-3 pr-4">{entry.titleEn}</td>
                <td className="py-3 pr-4 text-neutral-500">{entry.categoryNameEn}</td>
                <td className="py-3 pr-4">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${STATUS_STYLES[entry.status] ?? ""}`}
                  >
                    {entry.status}
                  </span>
                </td>
                <td className="py-3 pr-4">
                  {entry.status === "published" && (
                    <a
                      href={`${SITE_URL}/en/entry/${entry.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs underline text-neutral-500"
                    >
                      View →
                    </a>
                  )}
                </td>
                <td className="py-3 pr-4">
                  <PublishToggleButton
                    entryId={entry.id}
                    isPublished={entry.status === "published"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
