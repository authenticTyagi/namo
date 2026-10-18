"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import type { CommentTarget, CommentWithAuthor } from "@/db/queries/comments";
import type { Locale } from "@/lib/localized";
import { CommentForm } from "./CommentForm";
import { CommentItem } from "./CommentItem";

type Loaded = { signedIn: boolean; comments: CommentWithAuthor[] };

/**
 * Client island: the page around it is statically cached, so the session and
 * the comment list are fetched from /api/comments after load rather than read
 * during render. `signIn` is the server-rendered sign-in prompt, passed in as
 * a prop because it carries a server action.
 */
export function CommentSection({
  target,
  locale,
  signIn,
}: {
  target: CommentTarget;
  locale: Locale;
  signIn: ReactNode;
}) {
  const t = useTranslations("comments");
  const [state, setState] = useState<Loaded | null>(null);
  const [failed, setFailed] = useState(false);

  const query =
    "entryId" in target ? `entryId=${target.entryId}` : `editorialId=${target.editorialId}`;

  const load = useCallback(async () => {
    try {
      const res = await fetch(`/api/comments?${query}`, { cache: "no-store" });
      if (!res.ok) throw new Error(String(res.status));
      const json = (await res.json()) as {
        signedIn: boolean;
        comments: (Omit<CommentWithAuthor, "createdAt"> & { createdAt: string })[];
      };
      setState({
        signedIn: json.signedIn,
        comments: json.comments.map((c) => ({ ...c, createdAt: new Date(c.createdAt) })),
      });
      setFailed(false);
    } catch {
      setFailed(true);
    }
  }, [query]);

  useEffect(() => {
    // Fetch on mount; state is set after the await, not synchronously.
    void load();
  }, [load]);

  const comments = state?.comments ?? [];

  return (
    <section className="mt-10 min-h-48 border-t border-neutral-200 pt-8 dark:border-neutral-800">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500">
        {t("heading")}
        {comments.length > 0 && ` (${comments.length})`}
      </h2>

      {state === null ? (
        failed ? (
          <p className="text-sm text-neutral-400">{t("error")}</p>
        ) : (
          <div aria-hidden className="h-24 animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-900" />
        )
      ) : (
        <>
          {state.signedIn ? <CommentForm target={target} onPosted={load} /> : signIn}

          <div className="mt-6 space-y-5">
            {comments.length === 0 ? (
              <p className="text-sm text-neutral-400">{t("empty")}</p>
            ) : (
              comments.map((c) => <CommentItem key={c.id} comment={c} locale={locale} />)
            )}
          </div>
        </>
      )}
    </section>
  );
}
