"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const buttonClass =
  "rounded-md border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const t = useTranslations("entry");
  const [copied, setCopied] = useState(false);
  // Web Share API hands off to the OS's native share sheet (WhatsApp,
  // Telegram, Instagram, Messages, X, Mail, whatever's actually installed)
  // so the real title+URL reaches the app directly instead of relying on a
  // scraped link preview. Overwhelmingly supported on mobile browsers, not
  // on most desktop browsers — hence the capability check + fallback below
  // rather than assuming either path.
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && "share" in navigator);
  }, []);

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`;
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  // Instagram has no web share-intent URL that accepts an arbitrary link —
  // its app only accepts a native share sheet or an image asset for
  // Stories, so there's no working "share to Instagram" link to offer here.
  // Copy Link covers the realistic workaround (paste into a bio/story).

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can be unavailable (older browsers, insecure context) — silently no-op.
    }
  }

  async function nativeShare() {
    try {
      await navigator.share({ title, url });
    } catch {
      // AbortError when the user cancels the share sheet — not an error, no-op.
    }
  }

  return (
    <div className="mt-8 flex items-center gap-3">
      <span className="text-sm font-medium text-neutral-500">{t("share")}</span>
      {canNativeShare ? (
        <>
          <button type="button" onClick={nativeShare} className={buttonClass}>
            {t("shareButton")}
          </button>
          <button type="button" onClick={copyLink} className={buttonClass}>
            {copied ? "✓" : t("copyLink")}
          </button>
        </>
      ) : (
        <>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={buttonClass}>
            WhatsApp
          </a>
          <a href={xHref} target="_blank" rel="noopener noreferrer" className={buttonClass}>
            X
          </a>
          <a href={facebookHref} target="_blank" rel="noopener noreferrer" className={buttonClass}>
            Facebook
          </a>
          <button type="button" onClick={copyLink} className={buttonClass}>
            {copied ? "✓" : t("copyLink")}
          </button>
        </>
      )}
    </div>
  );
}
