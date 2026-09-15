/**
 * Fixed-order categorical accents (never cycled, never reassigned) from the
 * dataviz skill's validated 8-hue theme — slots 1-5. Applied only as
 * decorative icon-glyph/border color, never as small body text: slots 3-5
 * (aqua/yellow/magenta) fall below 3:1 contrast on a light surface for
 * text, so category identity is always carried by the label text too,
 * never color alone.
 *
 * Exported as literal Tailwind class strings (not runtime hex + inline
 * style) so both the class itself AND its dark: variant are visible to
 * Tailwind's static scanner and actually respond to theme changes — an
 * inline `style={{ color: hex }}` has no media-query mechanism and would
 * silently ignore dark mode.
 */
export interface CategoryClasses {
  text: string;
  border: string;
}

const CATEGORY_CLASSES: Record<string, CategoryClasses> = {
  "economy-infra-digital": {
    text: "text-[#2a78d6] dark:text-[#3987e5]", // slot 1: blue
    border: "border-[#2a78d6] dark:border-[#3987e5]",
  },
  "space-science": {
    text: "text-[#eb6834] dark:text-[#d95926]", // slot 2: orange
    border: "border-[#eb6834] dark:border-[#d95926]",
  },
  "foreign-policy-diplomacy": {
    text: "text-[#1baf7a] dark:text-[#199e70]", // slot 3: aqua
    border: "border-[#1baf7a] dark:border-[#199e70]",
  },
  "defense-security": {
    text: "text-[#eda100] dark:text-[#c98500]", // slot 4: yellow
    border: "border-[#eda100] dark:border-[#c98500]",
  },
  "currency-prices-inflation": {
    text: "text-[#e87ba4] dark:text-[#d55181]", // slot 5: magenta
    border: "border-[#e87ba4] dark:border-[#d55181]",
  },
  "welfare-social-schemes": {
    text: "text-[#008300] dark:text-[#008300]", // slot 6: green (same value both modes per the skill's theme)
    border: "border-[#008300] dark:border-[#008300]",
  },
  "agriculture-farmer-welfare": {
    text: "text-[#4a3aa7] dark:text-[#9085e9]", // slot 7: violet
    border: "border-[#4a3aa7] dark:border-[#9085e9]",
  },
  "environment-renewable-energy": {
    text: "text-[#e34948] dark:text-[#e66767]", // slot 8: red
    border: "border-[#e34948] dark:border-[#e66767]",
  },
  // The validated 8-hue theme has exactly 8 slots, all used above. Per the
  // dataviz skill's own rule ("a 9th series is never a generated hue"), a
  // 9th+ category does NOT get an invented hue — it gets this shared,
  // intentionally neutral treatment instead. Distinct from FALLBACK (which
  // exists only as a safety net for a genuinely unmapped slug, not as "we
  // ran out of colors, reuse slot 1") — this is a deliberate, documented
  // design choice, not an accident.
  "education-skill-development": {
    text: "text-neutral-500 dark:text-neutral-400",
    border: "border-neutral-400 dark:border-neutral-600",
  },
  "health-infrastructure": {
    text: "text-neutral-500 dark:text-neutral-400",
    border: "border-neutral-400 dark:border-neutral-600",
  },
};

const FALLBACK: CategoryClasses = CATEGORY_CLASSES["economy-infra-digital"];

export function getCategoryClasses(slug: string): CategoryClasses {
  return CATEGORY_CLASSES[slug] ?? FALLBACK;
}
