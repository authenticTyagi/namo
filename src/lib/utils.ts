import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Shared card treatment for entry/category link cards across the
 * homepage, /categories, category detail, and search — a subtle lift +
 * shadow on hover on top of the existing border-color change, so a card
 * reads as "clickable" at a glance rather than relying on border alone.
 */
export const CARD_CLASS =
  "rounded-lg border border-neutral-200 p-4 transition duration-150 hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow-md dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:shadow-neutral-900/50";
