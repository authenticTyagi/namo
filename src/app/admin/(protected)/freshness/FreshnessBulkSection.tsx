"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { markEntryVerified } from "./actions";

export interface FreshnessItem {
  id: string;
  titleEn: string;
  categoryNameEn: string;
  lastVerifiedDate: Date | null;
}

function formatDate(date: Date | null) {
  if (!date) return "Never verified";
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(date);
}

/**
 * Same "select some, act on them together" pattern as the review queue's
 * BulkReviewSection — a reviewer working through a long stale-entries list
 * shouldn't need one click per row for the common case of "I checked
 * these, they're still accurate." "Mark as re-verified" only bumps
 * lastVerifiedDate (see actions.ts) — it does NOT publish/unpublish
 * anything or touch content, so it's safe to fire across a whole batch at
 * once. An entry that actually needs a content correction still goes
 * through "Review & edit" as before (which, like any edit, resets it to
 * pending_review).
 */
export function FreshnessBulkSection({ items }: { items: FreshnessItem[] }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [isPending, startTransition] = useTransition();

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

  function bulkMarkVerified() {
    const ids = Array.from(selected);
    startTransition(async () => {
      await Promise.all(ids.map((id) => markEntryVerified(id)));
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
              onClick={bulkMarkVerified}
              className="rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
            >
              Mark as re-verified
            </button>
          </>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="border-b border-neutral-200 text-left text-neutral-500 dark:border-neutral-800">
              <th className="w-8 py-2"></th>
              <th className="py-2 pr-4 font-medium">Title</th>
              <th className="py-2 pr-4 font-medium">Category</th>
              <th className="py-2 pr-4 font-medium">Last verified</th>
              <th className="py-2 pr-4 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((entry) => (
              <tr key={entry.id} className="border-b border-neutral-100 dark:border-neutral-900">
                <td className="py-3 pr-2">
                  <input
                    type="checkbox"
                    checked={selected.has(entry.id)}
                    onChange={() => toggle(entry.id)}
                  />
                </td>
                <td className="py-3 pr-4">{entry.titleEn}</td>
                <td className="py-3 pr-4 text-neutral-500">{entry.categoryNameEn}</td>
                <td className="py-3 pr-4 text-neutral-500">{formatDate(entry.lastVerifiedDate)}</td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={isPending}
                      onClick={() => startTransition(() => markEntryVerified(entry.id))}
                      className="rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
                    >
                      Mark re-verified
                    </button>
                    <Link
                      href={`/admin/entries/${entry.id}/edit`}
                      className="rounded-md border border-neutral-300 px-2.5 py-1 text-xs hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                    >
                      Review & edit
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
