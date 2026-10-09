/**
 * Link to the site's official Instagram account. Instagram is the ONLY
 * official social channel; the footer note beside this link says so
 * explicitly so impostor accounts on other platforms are recognizable.
 * lucide-react v1 ships no brand icons, so the glyph is inline SVG
 * (stroke-based, takes currentColor like the other footer links).
 */
export const INSTAGRAM_HANDLE = "modinekiyakyahai";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function InstagramLink({ label }: { label: string }) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer me"
      aria-label={label}
      className="inline-flex items-center gap-1.5 font-medium text-neutral-700 hover:text-brand dark:text-neutral-300"
    >
      <InstagramIcon className="h-4 w-4 shrink-0" />
      @{INSTAGRAM_HANDLE}
    </a>
  );
}
