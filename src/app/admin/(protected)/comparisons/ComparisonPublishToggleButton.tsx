"use client";

import { useTransition } from "react";
import { toggleComparisonPublishStatus } from "./actions";

export function ComparisonPublishToggleButton({
  comparisonId,
  isPublished,
}: {
  comparisonId: string;
  isPublished: boolean;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() =>
        startTransition(() =>
          toggleComparisonPublishStatus(comparisonId, isPublished ? "draft" : "published"),
        )
      }
      className="rounded-md border border-neutral-300 px-2.5 py-1 text-xs hover:bg-neutral-100 disabled:opacity-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
    >
      {isPending ? "..." : isPublished ? "Unpublish" : "Publish"}
    </button>
  );
}
