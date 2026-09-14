"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const t = useTranslations("entry");
  const [copied, setCopied] = useState(false);

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`;
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can be unavailable (older browsers, insecure context) — silently no-op.
    }
  }

  return (
    <div className="mt-8 flex items-center gap-3">
      <span className="text-sm font-medium text-neutral-500">{t("share")}</span>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
      >
        WhatsApp
      </a>
      <a
        href={xHref}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
      >
        X
      </a>
      <button
        type="button"
        onClick={copyLink}
        className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
      >
        {copied ? "✓" : "Copy link"}
      </button>
    </div>
  );
}
