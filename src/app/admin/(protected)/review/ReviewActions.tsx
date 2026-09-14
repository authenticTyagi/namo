"use client";

import { useTransition } from "react";
import { approveEntry, rejectEntry } from "./actions";

export function ReviewActions({ entryId }: { entryId: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex gap-2">
      <button
        type="button"
        disabled={isPending}
        onClick={() => startTransition(() => approveEntry(entryId))}
        className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
      >
        Approve
      </button>
      <button
        type="button"
        disabled={isPending}
        onClick={() => startTransition(() => rejectEntry(entryId))}
        className="rounded-md border border-neutral-300 px-3 py-1.5 text-xs hover:bg-neutral-100 disabled:opacity-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
      >
        Reject
      </button>
    </div>
  );
}
