# Modi Ne Kiya Kya Hai

A sourced, structured, bilingual (Hindi/Hinglish + English) reference site documenting
verifiable government work under PM Modi's leadership. Every published claim carries a
citation; unverifiable claims don't get published. See the full plan at
`.claude/plans` in this session, or ask Claude Code to re-summarize it.

## Status: Phase 0 (scaffold)

This repo currently has the app skeleton, full data model, and page structure —
**no real content yet**. Phase 1 (hand-curated, cited entries for Economy/Infra/Digital)
comes next, reviewed by the site owner before anything goes live.

## Local setup

```bash
npm install
cp .env.example .env.local   # then fill in the values below
```

### 1. Database (required to see any content)

1. Create a free project at [neon.tech](https://neon.tech).
2. Copy the pooled connection string into `DATABASE_URL` in `.env.local`.
3. Apply the schema:
   ```bash
   npm run db:generate   # generates SQL migration files under drizzle/
   npm run db:migrate    # applies them to your Neon database
   npm run db:seed       # seeds the starting category (no entries yet)
   ```

Without a `DATABASE_URL`, `npm run dev` still works — pages render with empty states
instead of crashing (see `src/db/index.ts`).

### 2. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:3000` — it redirects to `/hi` (default locale); use the language
toggle in the header to switch to `/en`.

### 3. Auth + comments (Phase 2 — not wired up yet)

When Phase 2 starts, you'll need:
- A Google Cloud OAuth client (Console → APIs & Services → Credentials) for
  `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`.
- An `AUTH_SECRET`: generate with `npx auth secret`.

### 4. Deploying

- Push this repo to a private GitHub repo.
- Import it into [Vercel](https://vercel.com), set the same env vars there.
- Once live, repoint `modinekiyakyahai.com`'s DNS from Hostinger to Vercel
  (Vercel project → Settings → Domains) — this is a Phase 4 step, not now.

## Project structure

- `src/db/schema.ts` — full data model (categories, entries, sources, tags, users,
  comments, moderation, pipeline audit — see inline comments for what's active now
  vs. scaffolded for later phases).
- `src/db/queries/` — read helpers used by pages.
- `src/app/[locale]/` — all public pages, locale-prefixed (`hi`/`en`) via `next-intl`.
- `messages/*.json` — short UI-chrome translation strings (nav, buttons, footer).
- `src/content/static-pages.ts` — longer-form bilingual prose (About, Methodology,
  Terms, Privacy) — kept separate from `messages/*.json` since it's prose, not UI chrome.
- `scripts/seed.ts` — idempotent category/entry seeding; entries are added here only
  after being drafted with citations and reviewed.

## Build order

1. **Phase 0** (this scaffold) — done.
2. **Phase 1** — hand-curated, cited entries for Economy/Infra/Digital; owner reviews
   each before it's seeded.
3. **Phase 2** — Google sign-in, comments, moderation.
4. **Phase 3** — autonomous research pipeline + admin review queue, launched in
   "queue everything" mode before any auto-publish is enabled.
5. **Phase 4** — tune auto-publish threshold, add remaining categories, full-text
   search, DNS repoint to the live domain.
