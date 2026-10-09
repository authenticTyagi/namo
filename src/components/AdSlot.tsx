"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

/**
 * One manual AdSense unit. Built so ads cannot damage the page:
 *  - INERT unless a slot id is configured (NEXT_PUBLIC_ADSENSE_SLOT_CONTENT);
 *    with no id it renders nothing, so the live site is unchanged.
 *  - Reserves a fixed height up front, so a late-loading ad never shifts
 *    content (CLS stays 0).
 *  - Requests the ad only when the slot is near the viewport, so it costs
 *    nothing for readers who never scroll that far and never competes with
 *    first paint.
 *  - Collapses if Google returns no ad — but only when the slot is below
 *    the viewport, so nothing the reader is looking at jumps.
 *  - Labelled "Advertisement" and visually separated from content.
 * Placed once per content page, after the article and before comments —
 * never inside body text, stat blocks or comparison tables. Auto ads
 * should stay OFF in the AdSense dashboard; this is the only ad format.
 */
const CLIENT = "ca-pub-1804566337195012";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSlot({ slot }: { slot?: string }) {
  const t = useTranslations("ads");
  const box = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState(false);
  const pushed = useRef(false);

  useEffect(() => {
    if (!slot || !box.current) return;
    const el = box.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || pushed.current) return;
        pushed.current = true;
        io.disconnect();
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch {
          // Ad blocker or script not loaded — leave the reserved box as is.
        }
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(el);

    const ins = el.querySelector("ins");
    const mo = ins
      ? new MutationObserver(() => {
          if (ins.getAttribute("data-ad-status") === "unfilled" && el.getBoundingClientRect().top > window.innerHeight) {
            setCollapsed(true);
          }
        })
      : null;
    if (ins && mo) mo.observe(ins, { attributes: true, attributeFilter: ["data-ad-status"] });

    return () => {
      io.disconnect();
      mo?.disconnect();
    };
  }, [slot]);

  if (!slot || collapsed) return null;

  return (
    <aside
      aria-label={t("label")}
      className="mt-10 rounded-lg border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <p className="mb-2 text-center text-[10px] uppercase tracking-wide text-neutral-400">{t("label")}</p>
      <div ref={box} className="min-h-[280px]">
        <ins
          className="adsbygoogle"
          style={{ display: "block", minHeight: 250 }}
          data-ad-client={CLIENT}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}
