"use client";

import { useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { Flag, Check } from "lucide-react";
import { reportComment } from "./actions";
import type { CommentWithAuthor } from "@/db/queries/comments";
import { LOCALE_INTL_TAG, type Locale } from "@/lib/localized";

export function CommentItem({ comment, locale }: { comment: CommentWithAuthor; locale: Locale }) {
  const t = useTranslations("comments");
  const [reported, setReported] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex gap-3">
      {comment.authorImage ? (
        // eslint-disable-next-line @next/next/no-img-element -- external Google avatar URLs, not worth next/image's remote-pattern config for a small avatar
        <img
          src={comment.authorImage}
          alt=""
          className="h-8 w-8 shrink-0 rounded-full"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="h-8 w-8 shrink-0 rounded-full bg-neutral-200 dark:bg-neutral-700" />
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-semibold">{comment.authorName}</span>
          <span className="text-xs text-neutral-400">
            {new Intl.DateTimeFormat(LOCALE_INTL_TAG[locale], { dateStyle: "medium" }).format(
              comment.createdAt,
            )}
          </span>
        </div>
        <p className="mt-0.5 whitespace-pre-wrap text-sm text-neutral-700 dark:text-neutral-300">
          {comment.body}
        </p>
        {!comment.isOwn && (
          <button
            type="button"
            disabled={isPending || reported}
            onClick={() =>
              startTransition(async () => {
                await reportComment(comment.id, "");
                setReported(true);
              })
            }
            className="mt-1 flex items-center gap-1 text-xs text-neutral-400 hover:text-neutral-600 disabled:opacity-60 dark:hover:text-neutral-300"
          >
            {reported ? (
              <>
                <Check aria-hidden className="h-3 w-3" /> {t("reported")}
              </>
            ) : (
              <>
                <Flag aria-hidden className="h-3 w-3" /> {t("report")}
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
