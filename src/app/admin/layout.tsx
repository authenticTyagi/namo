import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Admin — Modi Ne Kiya Kya Hai",
  robots: { index: false, follow: false },
};

// /admin is a sibling top-level segment to /[locale] (English-only internal
// tool, no bilingual UI needed) — Next.js requires any top-level segment to
// supply its own <html>/<body>, since src/app/[locale]/layout.tsx is the
// only root layout otherwise.
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}
