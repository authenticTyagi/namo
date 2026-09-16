"use client";

import { useState, useTransition } from "react";
import { approveEntry, rejectEntry } from "./actions";
import { approveEditorial, rejectEditorial } from "../editorials/actions";
import { approveComparison, rejectComparison } from "../comparisons/actions";

type ItemType = "entry" | "editorial" | "comparison";

const ACTIONS: Record<ItemType, { approve: (id: string) => Promise<void>; reject: (id: string) => Promise<void> }> = {
  entry: { approve: approveEntry, reject: rejectEntry },
  editorial: { approve: approveEditorial, reject: rejectEditorial },
  comparison: { approve: approveComparison, reject: rejectComparison },
};

export interface ReviewItem {
  id: string;
  eyebrow: string;
  title: string;
  snippet: string;
  meta?: string;
}

/**
 * One section of the unified review queue (entries, editorials, or
 * comparisons) — renders each item with its own approve/reject, plus a
 * "select some, approve/reject them together" bar so clearing a large
 * batch (e.g. 27 editorials at once) doesn't mean 27 individual clicks.
 */
export function BulkReviewSection({ type, items }: { type: ItemType; items: ReviewItem[] }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [isPending, startTransition] = useTransition();
  const { approve, reject } = ACTIONS[type];

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleAll() {
    setSelected((prev) => (prev.size === items.length ? new Set() : new Set(items.map((i) => i.id))));
  }

  function bulkRun(action: (id: string) => Promise<void>) {
    const ids = Array.from(selected);
    startTransition(async () => {
      await Promise.all(ids.map((id) => action(id)));
      setSelected(new Set());
    });
  }

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-xs text-neutral-500">
          <input
            type="checkbox"
            checked={selected.size === items.length && items.length > 0}
            onChange={toggleAll}
          />
          Select all
        </label>
        {selected.size > 0 && (
          <>
            <span className="text-xs text-neutral-400">{selected.size} selected</span>
            <button
              type="button"
              disabled={isPending}
              onClick={() => bulkRun(approve)}
              className="rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
            >
              Approve selected
            </button>
            <button
              type="button"
              disabled={isPending}
              onClick={() => bulkRun(reject)}
              className="rounded-md border border-neutral-300 px-2.5 py-1 text-xs hover:bg-neutral-100 disabled:opacity-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
            >
              Reject selected
            </button>
          </>
        )}
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
          >
            <input
              type="checkbox"
              checked={selected.has(item.id)}
              onChange={() => toggle(item.id)}
              className="mt-1.5"
            />
            <div className="flex flex-1 items-start justify-between gap-4">
              <div>
                <p className="text-xs text-neutral-500">{item.eyebrow}</p>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-neutral-500 line-clamp-2">{item.snippet}</p>
                {item.meta && <p className="mt-1 text-xs text-neutral-400">{item.meta}</p>}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={isPending}
                  onClick={() => startTransition(() => approve(item.id))}
                  className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
                >
                  Approve
                </button>
                <button
                  type="button"
                  disabled={isPending}
                  onClick={() => startTransition(() => reject(item.id))}
                  className="rounded-md border border-neutral-300 px-3 py-1.5 text-xs hover:bg-neutral-100 disabled:opacity-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
