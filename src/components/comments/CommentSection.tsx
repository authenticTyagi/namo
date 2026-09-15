import { getTranslations } from "next-intl/server";
import { auth } from "@/auth";
import { getVisibleComments, type CommentTarget } from "@/db/queries/comments";
import { CommentForm } from "./CommentForm";
import { CommentItem } from "./CommentItem";
import { SignInToComment } from "./SignInToComment";
import type { Locale } from "@/lib/localized";

export async function CommentSection({
  target,
  locale,
  returnTo,
}: {
  target: CommentTarget;
  locale: Locale;
  returnTo: string;
}) {
  const [session, t] = await Promise.all([auth(), getTranslations("comments")]);
  const commentList = await getVisibleComments(target, session?.user?.id ?? null);

  return (
    <section className="mt-10 border-t border-neutral-200 pt-8 dark:border-neutral-800">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500">
        {t("heading")}
        {commentList.length > 0 && ` (${commentList.length})`}
      </h2>

      {session?.user ? <CommentForm target={target} /> : <SignInToComment returnTo={returnTo} />}

      <div className="mt-6 space-y-5">
        {commentList.length === 0 ? (
          <p className="text-sm text-neutral-400">{t("empty")}</p>
        ) : (
          commentList.map((c) => <CommentItem key={c.id} comment={c} locale={locale} />)
        )}
      </div>
    </section>
  );
}
