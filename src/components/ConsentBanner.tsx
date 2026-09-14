"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const CONSENT_KEY = "adConsent"; // "granted" | "denied"

/**
 * Minimal cookie-consent banner for ad personalization (GDPR/UK
 * requirement once AdSense is live). Stores the choice in localStorage
 * only — this is a per-visitor UI preference, not data the site or Claude
 * needs to read back, so localStorage is the right fit here (see the
 * artifact/runtime guidance on browser storage for user-facing sites).
 * AdSense's own script (added once a publisher ID exists) should check
 * this value before requesting personalized ads.
 */
export function ConsentBanner() {
  const t = useTranslations("consent");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
    } catch {
      // localStorage can be unavailable (private mode, blocked storage) —
      // fail closed by just not showing the banner rather than crashing.
    }
  }, []);

  function choose(value: "granted" | "denied") {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // Ignore — see above.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white p-4 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {t("message")}
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            {t("decline")}
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded-md bg-[#184f95] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#123c73] dark:bg-[#123c73] dark:hover:bg-[#0d2b54]"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
