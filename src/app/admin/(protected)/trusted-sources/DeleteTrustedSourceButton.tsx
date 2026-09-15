"use client";

import { useTransition } from "react";
import { deleteTrustedSource } from "./actions";

export function DeleteTrustedSourceButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => startTransition(() => deleteTrustedSource(id))}
      className="mt-2 text-xs text-rose-600 underline hover:text-rose-700 disabled:opacity-50 dark:text-rose-400 dark:hover:text-rose-300"
    >
      {isPending ? "..." : "Remove"}
    </button>
  );
}
