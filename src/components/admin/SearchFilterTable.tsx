"use client";

import { useState, type ReactNode } from "react";

export interface FilterableRow {
  key: string;
  searchText: string;
  node: ReactNode;
}

/**
 * Wraps an admin list table with a client-side search box. Rows are
 * already rendered server-side (as ReactNode, passed in — not a
 * function, which can't cross the server/client boundary) with a
 * precomputed lowercase searchText per row; filtering just shows/hides
 * already-rendered rows, no re-fetch. Fine at the row counts these admin
 * lists have (dozens, not thousands) — revisit with server-side search
 * if that changes.
 */
export function SearchFilterTable({
  rows,
  theadRow,
  placeholder = "Search…",
  minWidthClass = "min-w-[560px]",
}: {
  rows: FilterableRow[];
  theadRow: ReactNode;
  placeholder?: string;
  minWidthClass?: string;
}) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const visible = q ? rows.filter((r) => r.searchText.includes(q)) : rows;

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full max-w-sm rounded-md border border-neutral-300 px-3 py-1.5 text-sm dark:border-neutral-700 dark:bg-neutral-900"
      />
      {q && (
        <p className="mt-1 text-xs text-neutral-400">
          {visible.length} of {rows.length} shown
        </p>
      )}
      <div className="mt-4 overflow-x-auto">
        <table className={`w-full ${minWidthClass} text-sm`}>
          <thead>{theadRow}</thead>
          <tbody>{visible.map((r) => r.node)}</tbody>
        </table>
      </div>
    </div>
  );
}
