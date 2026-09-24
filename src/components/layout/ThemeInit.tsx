import Script from "next/script";

/**
 * Sets `data-theme` on <html> before first paint so there's no
 * flash-of-wrong-theme. Runs as a plain string (not a bundled function)
 * because `beforeInteractive` scripts execute before React/hydration —
 * closures over imported values aren't available yet.
 */
const INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export function ThemeInit() {
  return <Script id="theme-init" strategy="beforeInteractive">{INIT_SCRIPT}</Script>;
}
