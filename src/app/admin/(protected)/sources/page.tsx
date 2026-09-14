import { getSourceSubmissions } from "@/db/queries/admin";
import { createSourceSubmission } from "./actions";
import { MarkReviewedButton } from "./MarkReviewedButton";

const STATUS_STYLES: Record<string, string> = {
  new: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  reviewed: "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  used: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  dismissed: "bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400",
};

export default async function AdminSourcesPage() {
  const submissions = await getSourceSubmissions();

  return (
    <div>
      <h1 className="text-2xl font-bold">Sources</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Hand over a URL you personally trust, with a note on what it&apos;s for —
        this is how you feed sources in directly instead of only in chat.
      </p>

      <form
        action={createSourceSubmission}
        className="mt-6 max-w-xl space-y-3 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
      >
        <div>
          <label htmlFor="url" className="block text-xs font-medium text-neutral-500">
            URL
          </label>
          <input
            id="url"
            name="url"
            type="url"
            required
            placeholder="https://..."
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
          />
        </div>
        <div>
          <label htmlFor="note" className="block text-xs font-medium text-neutral-500">
            Note — what is this and why does it matter?
          </label>
          <textarea
            id="note"
            name="note"
            required
            rows={2}
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
          />
        </div>
        <div>
          <label htmlFor="topicHint" className="block text-xs font-medium text-neutral-500">
            Topic hint (optional) — which entry/category this relates to
          </label>
          <input
            id="topicHint"
            name="topicHint"
            type="text"
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-[#184f95] px-4 py-2 text-sm font-medium text-white hover:bg-[#123c73] dark:bg-[#123c73] dark:hover:bg-[#0d2b54]"
        >
          Submit
        </button>
      </form>

      <div className="mt-8 space-y-3">
        {submissions.map((s) => (
          <div
            key={s.id}
            className="rounded-lg border border-neutral-200 p-3 text-sm dark:border-neutral-800"
          >
            <div className="flex items-start justify-between gap-3">
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline">
                {s.url}
              </a>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${STATUS_STYLES[s.status]}`}>
                {s.status}
              </span>
            </div>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">{s.note}</p>
            {s.topicHint && (
              <p className="mt-1 text-xs text-neutral-400">Topic: {s.topicHint}</p>
            )}
            {s.status === "new" && <MarkReviewedButton id={s.id} />}
          </div>
        ))}
      </div>
    </div>
  );
}
