"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type ThemeChoice = "light" | "dark" | "system";
const ORDER: ThemeChoice[] = ["light", "dark", "system"];
const ICON = { light: Sun, dark: Moon, system: Monitor };

function resolve(choice: ThemeChoice): "light" | "dark" {
  if (choice === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return choice;
}

function apply(choice: ThemeChoice) {
  document.documentElement.setAttribute("data-theme", resolve(choice));
}

/**
 * Cycles light → dark → device, matching the three-way choice Google's own
 * products (Search, YouTube, Gmail) offer rather than a plain on/off switch.
 * "device" stays live: while selected, an OS theme change updates the page
 * immediately instead of only on next load.
 */
export function ThemeToggle() {
  const [choice, setChoice] = useState<ThemeChoice | null>(null);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("theme");
    } catch {}
    setChoice(stored === "light" || stored === "dark" ? stored : "system");
  }, []);

  useEffect(() => {
    if (choice === null) return;
    apply(choice);
    if (choice !== "system") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply("system");
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [choice]);

  if (choice === null) {
    return <div className="h-9 w-9" aria-hidden="true" />;
  }

  const Icon = ICON[choice];
  const labels: Record<ThemeChoice, string> = {
    light: "Light theme — click for dark",
    dark: "Dark theme — click for device setting",
    system: "Following device theme — click for light",
  };

  return (
    <button
      type="button"
      aria-label={labels[choice]}
      title={labels[choice]}
      onClick={() => {
        const next = ORDER[(ORDER.indexOf(choice) + 1) % ORDER.length];
        try {
          if (next === "system") localStorage.removeItem("theme");
          else localStorage.setItem("theme", next);
        } catch {}
        setChoice(next);
      }}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
