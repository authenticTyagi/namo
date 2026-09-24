"use client";

import { useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { postComment } from "./actions";
import type { CommentTarget } from "@/db/queries/comments";

export function CommentForm({ target }: { target: CommentTarget }) {
  const t = useTranslations("comments");
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setError(null);
        const body = value;
        startTransition(async () => {
          try {
            await postComment(target, body);
            setValue("");
          } catch (err) {
            setError(err instanceof Error ? err.message : t("error"));
          }
        });
      }}
    >
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={t("placeholder")}
        rows={3}
        maxLength={2000}
        className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
      />
      {error && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{error}</p>}
      <button
        type="submit"
        disabled={isPending || value.trim().length < 2}
        className="mt-2 rounded-md bg-brand px-4 py-1.5 text-sm font-medium text-white hover:bg-brand-hover disabled:opacity-50"
      >
        {isPending ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}
