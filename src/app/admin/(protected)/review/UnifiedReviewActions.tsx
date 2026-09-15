"use client";

import { useTransition } from "react";
import { approveEntry, rejectEntry } from "./actions";
import { approveEditorial, rejectEditorial } from "../editorials/actions";
import { approveComparison, rejectComparison } from "../comparisons/actions";

type ItemType = "entry" | "editorial" | "comparison";

const ACTIONS: Record<ItemType, { approve: (id: string) => Promise<void>; reject: (id: string) => Promise<void> }> = {
  entry: { approve: approveEntry, reject: rejectEntry },
  editorial: { approve: approveEditorial, reject: rejectEditorial },
  comparison: { approve: approveComparison, reject: rejectComparison },
};

export function UnifiedReviewActions({ id, type }: { id: string; type: ItemType }) {
  const [isPending, startTransition] = useTransition();
  const { approve, reject } = ACTIONS[type];

  return (
    <div className="flex gap-2">
      <button
        type="button"
        disabled={isPending}
        onClick={() => startTransition(() => approve(id))}
        className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
      >
        Approve
      </button>
      <button
        type="button"
        disabled={isPending}
        onClick={() => startTransition(() => reject(id))}
        className="rounded-md border border-neutral-300 px-3 py-1.5 text-xs hover:bg-neutral-100 disabled:opacity-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
      >
        Reject
      </button>
    </div>
  );
}
