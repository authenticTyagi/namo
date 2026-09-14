"use client";

import { useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { submitFeedback } from "./actions";

export function FeedbackForm({ relatedEntrySlug }: { relatedEntrySlug?: string }) {
  const t = useTranslations("feedback");
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  if (submitted) {
    return (
      <p className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300">
        {t("thanks")}
      </p>
    );
  }

  return (
    <form
      action={(formData) => {
        setError(false);
        startTransition(async () => {
          try {
            await submitFeedback(formData);
            setSubmitted(true);
          } catch {
            setError(true);
          }
        });
      }}
      className="space-y-4"
    >
      {relatedEntrySlug && (
        <input type="hidden" name="relatedEntrySlug" value={relatedEntrySlug} />
      )}

      <div>
        <label htmlFor="category" className="block text-sm font-medium">
          {t("categoryLabel")}
        </label>
        <select
          id="category"
          name="category"
          defaultValue="report_issue"
          className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
        >
          <option value="report_issue">{t("categoryReportIssue")}</option>
          <option value="suggest_source">{t("categorySuggestSource")}</option>
          <option value="other">{t("categoryOther")}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          {t("messageLabel")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            {t("nameLabel")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            {t("emailLabel")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
          />
        </div>
      </div>

      {error && <p className="text-sm text-red-600 dark:text-red-400">{t("error")}</p>}

      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-[#184f95] px-5 py-2 text-sm font-semibold text-white hover:bg-[#123c73] disabled:opacity-50 dark:bg-[#123c73] dark:hover:bg-[#0d2b54]"
      >
        {isPending ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}
