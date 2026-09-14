"use client";

import { useTransition } from "react";
import { markSourceSubmissionReviewed } from "./actions";

export function MarkReviewedButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => startTransition(() => markSourceSubmissionReviewed(id))}
      className="mt-2 text-xs text-neutral-500 underline hover:text-neutral-700 disabled:opacity-50 dark:hover:text-neutral-300"
    >
      {isPending ? "..." : "Mark reviewed"}
    </button>
  );
}
