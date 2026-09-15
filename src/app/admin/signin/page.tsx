import { signIn } from "@/auth";

export default async function AdminSignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col items-center justify-center px-4 text-center">
      <h1 className="text-xl font-semibold">Admin sign-in</h1>
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
          className="mt-6 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        >
          Sign in with Google
        </button>
      </form>
    </main>
  );
}
