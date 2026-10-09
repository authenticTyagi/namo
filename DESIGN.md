# DESIGN

_Last updated: 2026-10-10. Update when tokens, components or interaction patterns change._

## Principles
- Reading first: fast, calm, legible; the citation is the hero, not decoration.
- Honest signalling: verdict badges (positive / mixed / negative) are neutral in tone, never celebratory.
- Mobile-first for low-end phones and slow networks; no layout shift from ads or late content.
- Same experience in all five scripts/locales (hi, en, bn, te, mr).

## Tokens (`src/app/globals.css`)
| Token | Light | Dark |
|---|---|---|
| `--background` | #ffffff | #0a0a0a |
| `--foreground` | #171717 | #ededed |
| `--brand` (Google Blue) | #1a73e8 | #8ab4f8 |
| `--brand-hover` | #1765cc | #aecbfa |
Fonts: Geist Sans / Geist Mono. Theme: light / dark / device, attribute-driven via `data-theme`.
Category colors/icons: `src/lib/category-colors.ts`, `category-icons.ts` (9th+ categories use neutral gray by convention).

## Brand
Abstract checkmark seal (`BrandMark.tsx`, `icon.svg`, `apple-icon.tsx`). No person or caricature (RULES.md #8).

## Components (`src/components`)
entry, editorial, comparison, comments, search, layout, admin, plus `AdSlot` (inert, reserved height),
`ConsentBanner`, `Breadcrumbs`, `BackToTop`, `ScrollReveal`.

## Patterns
- Header: site name must not wrap past 2 lines on phones; search icon hidden on phones (menu has Search).
- Ads: `AdSlot` reserves height, lazy, off by default; no Auto ads side rails/carousels.
- Search: `noindex`, header icon on desktop.
- Admin: English-only, own layout, shared status badges, review queue first.

## Accessibility and performance budget
- Contrast AA in both themes; visible focus; semantic headings; `lang` set per locale.
- Mobile Lighthouse target >= 95 with ads enabled; CLS 0; TBT minimal (baseline: 98 without Google scripts, 95 with).
