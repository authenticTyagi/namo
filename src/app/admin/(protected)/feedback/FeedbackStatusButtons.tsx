"use client";

import { useTransition } from "react";
import { markFeedbackStatus } from "./actions";

export function FeedbackStatusButtons({ id, status }: { id: string; status: string }) {
  const [isPending, startTransition] = useTransition();

  if (status === "resolved") return null;

  return (
    <div className="mt-2 flex gap-2">
      {status === "new" && (
        <button
          type="button"
          disabled={isPending}
          onClick={() => startTransition(() => markFeedbackStatus(id, "read"))}
          className="text-xs text-neutral-500 underline hover:text-neutral-700 disabled:opacity-50 dark:hover:text-neutral-300"
        >
          Mark read
        </button>
      )}
      <button
        type="button"
        disabled={isPending}
        onClick={() => startTransition(() => markFeedbackStatus(id, "resolved"))}
        className="text-xs text-neutral-500 underline hover:text-neutral-700 disabled:opacity-50 dark:hover:text-neutral-300"
      >
        Mark resolved
      </button>
    </div>
  );
}
