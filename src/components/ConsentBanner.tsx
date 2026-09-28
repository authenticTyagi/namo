"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const CONSENT_KEY = "adConsent"; // "granted" | "denied"

/**
 * General, site-wide cookie notice — NOT the mechanism that satisfies
 * Google's EEA/UK/Swiss consent requirement for AdSense. As of 2026-09-29,
 * that's handled by Google's own Funding Choices CMP (see the script tags
 * in src/app/[locale]/layout.tsx's <head>), which auto-detects a visitor's
 * region and shows Google's own consent dialog only where legally
 * required — a self-built banner like this one doesn't count toward
 * Google's CMP requirement, per their own publisher policy. This banner
 * still has a job: a simple, always-shown notice for visitors outside
 * regions Funding Choices targets. Stores the choice in localStorage only
 * — a per-visitor UI preference, not data the site or Claude needs to read
 * back (see the artifact/runtime guidance on browser storage). Nothing
 * currently reads this value to gate ad requests — that's intentional;
 * Google's guidance is not to block the ad tag's own script load, only to
 * let Funding Choices control what each request signals.
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
            className="rounded-md bg-brand px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-hover"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
