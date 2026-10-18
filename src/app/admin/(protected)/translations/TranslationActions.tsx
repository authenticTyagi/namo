"use client";

import { useTransition } from "react";
import { approveTranslationDraft, rejectTranslationDraft } from "./actions";

export function TranslationActions({ draftId }: { draftId: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex gap-2">
      <button
        type="button"
        disabled={isPending}
        onClick={() => startTransition(() => approveTranslationDraft(draftId))}
        className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
      >
        Approve and publish
      </button>
      <button
        type="button"
        disabled={isPending}
        onClick={() => startTransition(() => rejectTranslationDraft(draftId))}
        className="rounded-md border border-neutral-300 px-3 py-1.5 text-xs hover:bg-neutral-100 disabled:opacity-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
      >
        Reject
      </button>
    </div>
  );
}
