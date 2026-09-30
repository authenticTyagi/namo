import { signIn } from "@/auth";
import { BrandMark } from "@/components/BrandMark";

export default async function AdminSignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-4 dark:bg-neutral-950">
      <div className="w-full max-w-sm rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <BrandMark className="mx-auto h-12 w-12" />
        <h1 className="mt-4 text-xl font-semibold">Admin sign-in</h1>
        <p className="mt-2 text-sm text-neutral-500">
          Modi Ne Kiya Kya Hai? — content administration
        </p>

        {error === "forbidden" && (
          <p className="mt-4 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:bg-amber-950 dark:text-amber-300">
            You signed in successfully, but this account doesn&apos;t have admin
            access.
          </p>
        )}

        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/admin" });
          }}
        >
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            Sign in with Google
          </button>
        </form>
      </div>
    </main>
  );
}
