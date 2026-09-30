import type { Metadata } from "next";
import { ThemeInit } from "@/components/layout/ThemeInit";
import "../globals.css";

export const metadata: Metadata = {
  title: "Admin — Modi Ne Kiya Kya Hai?",
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
    // suppressHydrationWarning: ThemeInit sets data-theme on this element
    // via a beforeInteractive script, before React hydrates it — the server
    // never renders this attribute (it doesn't know the visitor's stored
    // preference), so without this flag React logs a false-positive
    // hydration mismatch on every load. Standard pattern for script-driven
    // dark mode (e.g. next-themes does the same).
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}
