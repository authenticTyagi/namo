/**
 * The site's visual mark: a checkmark seal, not a person or any national
 * emblem. Deliberately built around "verified" — the site's actual
 * differentiator (every claim cited, nothing published without a source)
 * — rather than a figure that would conflict with the founding "no
 * individual named, not affiliated with any party or government body"
 * rule (see PROJECT_LOG.md's opening section and its 2026-09-29 entry on
 * why a Modi-figure mascot was declined).
 *
 * Colors are fixed (not theme-adaptive) on purpose: it's a self-contained
 * colored badge, not text on a page background, so it doesn't need to
 * track --brand's light/dark swap and stays recognizable either way —
 * the same reasoning most site logos don't invert with dark mode.
 * Mirrored as a static file at src/app/icon.svg for the browser-tab
 * favicon; keep both in sync if this design changes.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#1a73e8" />
      <path
        d="M9 16.5L14 21.5L23 10.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
