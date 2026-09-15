"use client";

import { useTransition } from "react";
import { dismissCommentFlag, removeComment } from "./actions";

export function CommentModerationActions({ commentId }: { commentId: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex gap-2">
      <button
        type="button"
        disabled={isPending}
        onClick={() => startTransition(() => dismissCommentFlag(commentId))}
        className="rounded-md border border-neutral-300 px-3 py-1.5 text-xs hover:bg-neutral-100 disabled:opacity-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
      >
        Dismiss flag
      </button>
      <button
        type="button"
        disabled={isPending}
        onClick={() => startTransition(() => removeComment(commentId))}
        className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-700 disabled:opacity-50"
      >
        Remove comment
      </button>
    </div>
  );
}
