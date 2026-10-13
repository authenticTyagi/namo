"use client";

import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";

// Browser speech synthesis only: free, no audio files, nothing leaves the
// device. Voice availability depends on the visitor's OS/browser, so every
// state below degrades to a plain "not available" message rather than
// failing silently.
const LANG_TAGS: Record<string, string> = {
  hi: "hi-IN",
  en: "en-IN",
  bn: "bn-IN",
  te: "te-IN",
  mr: "mr-IN",
};

// Chrome cuts off a single long utterance after ~15s, so read sentence-sized
// chunks instead.
const MAX_CHUNK = 220;

function pageText(): string {
  const article = document.querySelector("article");
  if (!article) return "";
  const clone = article.cloneNode(true) as HTMLElement;
  clone.querySelectorAll("[data-no-read], script, style, button, form, nav, svg").forEach((n) => n.remove());
  return (clone.innerText || clone.textContent || "").replace(/[•]/g, "").replace(/\s+/g, " ").trim();
}

function chunk(text: string): string[] {
  const sentences = text.match(/[^.!?।]+[.!?।]*\s*/g) ?? [text];
  const out: string[] = [];
  let cur = "";
  for (const s of sentences) {
    if ((cur + s).length > MAX_CHUNK && cur) {
      out.push(cur.trim());
      cur = s;
    } else {
      cur += s;
    }
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

type Status = "idle" | "playing" | "paused";

export function ReadAloud({ locale }: { locale: string }) {
  const t = useTranslations("readAloud");
  const [supported, setSupported] = useState(false);
  const [hasVoice, setHasVoice] = useState(true);
  const [status, setStatus] = useState<Status>("idle");
  const runId = useRef(0);
  const lang = LANG_TAGS[locale] ?? "en-IN";

  const findVoice = useCallback((): SpeechSynthesisVoice | null => {
    const prefix = lang.slice(0, 2);
    const voices = window.speechSynthesis.getVoices();
    return voices.find((v) => v.lang === lang) ?? voices.find((v) => v.lang.startsWith(prefix)) ?? null;
  }, [lang]);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    setSupported(true);
    const update = () => setHasVoice(findVoice() !== null);
    update();
    window.speechSynthesis.addEventListener("voiceschanged", update);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", update);
      runId.current++;
      window.speechSynthesis.cancel();
    };
  }, [findVoice]);

  const stop = useCallback(() => {
    runId.current++;
    window.speechSynthesis.cancel();
    setStatus("idle");
  }, []);

  function start() {
    const parts = chunk(pageText());
    if (parts.length === 0) return;
    const voice = findVoice();
    const id = ++runId.current;
    window.speechSynthesis.cancel();
    setStatus("playing");

    parts.forEach((part, i) => {
      const u = new SpeechSynthesisUtterance(part);
      u.lang = voice?.lang ?? lang;
      if (voice) u.voice = voice;
      u.onend = () => {
        if (id === runId.current && i === parts.length - 1) setStatus("idle");
      };
      u.onerror = (e) => {
        if (id === runId.current && e.error !== "canceled" && e.error !== "interrupted") setStatus("idle");
      };
      window.speechSynthesis.speak(u);
    });
  }

  function togglePause() {
    if (status === "playing") {
      window.speechSynthesis.pause();
      setStatus("paused");
    } else if (status === "paused") {
      window.speechSynthesis.resume();
      setStatus("playing");
    }
  }

  if (!supported) return null;

  const buttonClass =
    "rounded-md border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800";

  return (
    <div data-no-read className="mt-4 flex flex-wrap items-center gap-2" role="group" aria-label={t("label")}>
      {status === "idle" ? (
        <button type="button" onClick={start} disabled={!hasVoice} className={`${buttonClass} disabled:opacity-50`}>
          🔊 {t("listen")}
        </button>
      ) : (
        <>
          <button type="button" onClick={togglePause} className={buttonClass}>
            {status === "playing" ? t("pause") : t("resume")}
          </button>
          <button type="button" onClick={stop} className={buttonClass}>
            {t("stop")}
          </button>
        </>
      )}
      {!hasVoice && <span className="text-xs text-neutral-500">{t("noVoice")}</span>}
    </div>
  );
}
