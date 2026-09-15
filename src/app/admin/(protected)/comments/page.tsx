import { getFlaggedComments } from "@/db/queries/comments";
import { CommentModerationActions } from "./CommentModerationActions";

export default async function AdminCommentsPage() {
  const flagged = await getFlaggedComments();

  return (
    <div>
      <h1 className="text-2xl font-bold">Comment moderation</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Comments a reader has flagged. Dismissing a flag makes the comment
        visible again; removing it hides it from the public page.
      </p>

      {flagged.length === 0 ? (
        <p className="mt-8 text-sm text-neutral-400">No flagged comments right now.</p>
      ) : (
        <div className="mt-6 space-y-4">
          {flagged.map((c) => (
            <div key={c.id} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-neutral-500">
                    {c.authorName ?? "Unknown"} ({c.authorEmail}) ·{" "}
                    {c.entryId ? "on an entry" : "on an editorial"}
                  </p>
                  <p className="mt-1 text-sm whitespace-pre-wrap">{c.body}</p>
                </div>
                <CommentModerationActions commentId={c.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
