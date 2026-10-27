"use client";

import { useEffect, useState } from "react";
import { bulkApproveTranslationDrafts, bulkRejectTranslationDrafts } from "./actions";

const boxes = () => Array.from(document.querySelectorAll<HTMLInputElement>('input[name="draftId"]'));

export function BulkBar({ total }: { total: number }) {
  const [selected, setSelected] = useState(0);
  const sync = () => setSelected(boxes().filter((b) => b.checked).length);

  // The per-draft checkboxes live in the server-rendered list, so listen at the document level.
  useEffect(() => {
    const onChange = (e: Event) => {
      if ((e.target as HTMLElement | null)?.getAttribute("name") === "draftId") sync();
    };
    document.addEventListener("change", onChange);
    return () => document.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3 text-sm dark:border-neutral-800 dark:bg-neutral-950">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          className="h-4 w-4"
          checked={selected === total && total > 0}
          onChange={(e) => {
            boxes().forEach((b) => (b.checked = e.target.checked));
            sync();
          }}
        />
        Select all ({total})
      </label>
      <span className="text-neutral-500">{selected} selected</span>
      <button
        type="submit"
        formAction={bulkApproveTranslationDrafts}
        disabled={selected === 0}
        onClick={(e) => {
          if (!confirm(`Publish ${selected} translation(s)? Have a native reader checked them?`)) e.preventDefault();
        }}
        className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
      >
        Approve selected
      </button>
      <button
        type="submit"
        formAction={bulkRejectTranslationDrafts}
        disabled={selected === 0}
        onClick={(e) => {
          if (!confirm(`Reject ${selected} translation(s)?`)) e.preventDefault();
        }}
        className="rounded-md border border-neutral-300 px-3 py-1.5 text-xs hover:bg-neutral-100 disabled:opacity-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
      >
        Reject selected
      </button>
    </div>
  );
}
