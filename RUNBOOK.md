# RUNBOOK — moving machines or hosts, and recovering

_Written 2026-10-23. Everything the app needs lives in three places: the Git repo, the Neon database, and environment variables. Nothing important lives only on a developer machine._

## What depends on what
| Thing | Where it lives | Move cost |
|---|---|---|
| Code, content JSON, docs | GitHub `authenticTyagi/namo` | `git clone` |
| All site data (entries, editorials, comments, users, translation drafts) | Neon Postgres (`DATABASE_URL`) | Dump and restore, or re-point |
| Secrets | Vercel project env vars + GitHub Actions secrets + local `.env.local` | Re-enter by hand; never in Git |
| Hosting | Vercel (project, domain, Speed Insights toggle) | Any Node 20+ host works; see below |
| Login | Google OAuth client (redirect URIs are per domain) | Add the new URI |
| Private notes | Claude project `MEMORY.md` on the owner's machine | Not required to run the app |

## Environment variables (names only; values come from the owner)
`DATABASE_URL`, `AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `ADMIN_EMAILS`, `CRON_SECRET`, `NEXT_PUBLIC_SITE_URL`. Optional: `NEXT_PUBLIC_ADSENSE_CLIENT_ID`, `NEXT_PUBLIC_ADSENSE_SLOT_CONTENT`. GitHub Actions only: `ANTHROPIC_API_KEY`, `CRON_SECRET`, and the site URL used by the drafting agents.
The app degrades to an empty-dataset mode if the database variables are missing (used by CI), so a missing variable shows empty pages instead of crashing.

## New developer machine (or new human engineer)
1. Install Node 20+ and Git. `git clone https://github.com/authenticTyagi/namo` and `cd` in.
2. `npm install`. If the lockfile points at an unreachable corporate registry, use `npm install` (as CI does), not `npm ci`.
3. `cp .env.example .env.local` and fill values (ask the owner; use a separate Neon branch for development, never production credentials).
4. `npm run db:migrate` against your dev branch, then `npm run dev`.
5. Before committing: `npm test`, `npx tsc --noEmit`, `npm run lint`, `npm run build`.
Read `PROJECT_LOG.md`, `RULES.md` and `AGENTS.md` first (Next.js here differs from older versions; read `node_modules/next/dist/docs/`).

## Moving the host off Vercel
1. Build with `npm run build`, run with `npm start` behind a reverse proxy that terminates TLS and sends HSTS.
2. Set the same env vars, plus `AUTH_TRUST_HOST=true` and `AUTH_URL=https://<domain>`.
3. Add `https://<domain>/api/auth/callback/google` to the Google OAuth client.
4. Re-create the caching the site relies on: entry and editorial pages use ISR (1 hour). Self-hosting needs a writable `.next/cache` and a single instance (or a shared cache handler) so `revalidate` works.
5. Vercel Analytics and Speed Insights stop reporting; the app works without them.
6. Point DNS, wait for TTL, then remove the old project. Keep the old one read-only for a week.

## Moving the database
1. `pg_dump "$OLD_URL" -Fc -f backup.dump`, create the new database, then `pg_restore -d "$NEW_URL" backup.dump`.
2. Run `npm run db:migrate` (it is a no-op if the dump is current).
3. Update `DATABASE_URL` in Vercel and GitHub, redeploy, and check `/api/health`.
4. Neon branches and point-in-time restore are the first line of recovery; take a manual dump before risky migrations.

## Rotating secrets after a suspected leak
Rotate in this order: `DATABASE_URL` (Neon roll password), `AUTH_SECRET` (`npx auth secret`; signs everyone out), `CRON_SECRET` (Vercel and GitHub together), Google client secret, `ANTHROPIC_API_KEY`. Redeploy after each.

## Recovery checks (run after any move)
- `/api/health` returns `ok` and `dbConfigured: true`.
- Home, one entry, one editorial and `/en/india-in-the-world` render with content.
- Sign in as an admin; `/admin` loads; sign in as a non-admin and confirm `/admin` refuses.
- `curl -i` the `/api/pipeline/ingest` endpoint without a token and expect 401.
- Security headers are present (`curl -I`).
