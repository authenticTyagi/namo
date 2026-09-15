import { getTranslations } from "next-intl/server";
import { signIn } from "@/auth";

/**
 * A public, non-admin entry point into the same Google OAuth flow admin
 * uses (src/app/admin/signin/page.tsx) — calls `signIn` directly with an
 * explicit redirectTo back to the page the visitor was reading, rather than
 * going through NextAuth's configured `pages.signIn` (which always sends
 * admin-flow sign-ins to /admin and would 403 a non-admin visitor there).
 */
export async function SignInToComment({ returnTo }: { returnTo: string }) {
  const t = await getTranslations("comments");

  return (
    <div className="rounded-md border border-neutral-200 p-4 text-sm dark:border-neutral-800">
      <p className="text-neutral-600 dark:text-neutral-400">{t("signInPrompt")}</p>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: returnTo });
        }}
      >
        <button
          type="submit"
          className="mt-3 rounded-md border border-neutral-300 bg-white px-4 py-1.5 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        >
          {t("signInButton")}
        </button>
      </form>
    </div>
  );
}
