# SECURITY — posture, checklist, and how to report

_Last audited: 2026-10-23 (code read by Claude; no external penetration test has been done). Re-run the audit after any change to auth, API routes, server actions, headers or dependencies. Findings are tied to files so a human can re-verify them._

## Architecture facts that shape the risk
- Public site is read-mostly. Users can sign in with Google only to comment, report a comment, or send feedback. No passwords, payments, file uploads or webhooks exist.
- Admin (`/admin`) is gated by Google sign-in plus the `ADMIN_EMAILS` allow-list. The owner is the sole reviewer (RULES #9).
- Content drafting arrives through `/api/pipeline/*`, authenticated by a shared `CRON_SECRET` bearer token, and always lands as `pending_review`.

## Checklist (status as of 2026-10-23)
| Area | Status | Evidence / what to do |
|---|---|---|
| SQL injection | OK | All DB access via Drizzle with parameters. The only raw `sql` uses are tagged templates with bound values (`src/db/queries/admin.ts`, `search.ts`). Search input is length- and token-capped. Never concatenate user input into `sql.raw`. |
| XSS | OK | No user HTML is rendered. The only `dangerouslySetInnerHTML` calls inject JSON-LD through `jsonLdString` (escaped, tested in `src/lib/json-ld.test.ts`) and a theme-init script. Source URLs are restricted to http(s). Comments are rendered as text. |
| CSRF | OK (framework) | Server actions are POST-only with Next's Origin check; Auth.js has its own CSRF token. Pipeline routes use a bearer secret, not cookies. Do not add cookie-authenticated GET endpoints that change state. |
| File uploads | N/A | No upload feature. If one is added, validate type, size and content, store off-box, and re-audit. |
| SSRF | OK | The site's server code makes no outbound fetches from user input. `scripts/pipeline/run-agent.mjs` runs on GitHub runners and calls fixed hosts (the site, `api.anthropic.com`, `api.worldbank.org`). |
| Broken object-level access | OK | Every admin server action calls an admin check inline (`session.user.role !== "admin"`). Comment posting/reporting needs a signed-in user and only touches published targets. Re-check any new `"use server"` file: the layout redirect does NOT protect actions. |
| Rate limiting | PARTIAL | DB-backed limits exist for comments (5 per window per user), reports (10) and feedback (30/hour global). **No rate limit was found on public page/search requests or on the sign-in route**; Vercel's edge absorbs most volume. Consider Vercel WAF rules or a DB-backed limiter for search. |
| Password security | N/A | No passwords stored; Google OAuth only. |
| MFA | Delegated | Admin access is only as strong as the Google account. **Owner action:** enforce 2-step verification (ideally a passkey/security key) on every account in `ADMIN_EMAILS`. |
| Permissions on the server | OK | Role is a DB column re-synced from `ADMIN_EMAILS` on every sign-in, with symmetric demotion (`src/auth.ts`). |
| Row-level security | NOT USED | Authorisation is enforced in application code, not Postgres RLS. The DB connection string is a single privileged role, so a leaked `DATABASE_URL` exposes everything. Mitigation: keep it server-only (it is not `NEXT_PUBLIC_`), rotate on any suspicion. Consider a least-privilege role for the web app and a separate migration role. |
| JWT secrets | N/A / OK | Sessions are database sessions, not JWTs. `AUTH_SECRET` must be set in Vercel. Rotate with `npx auth secret`; this signs users out. |
| API secrets | OK | `CRON_SECRET` compared as SHA-256 digests with `timingSafeEqual`, fails closed if unset (`src/lib/pipeline-auth.ts`). No real secret found in git history (checked 2026-10-23). `.env.local` is gitignored. |
| Local storage | OK | Only theme and ad-consent choice are stored. No tokens or personal data. |
| Default credentials | OK | None. `.env.example` holds empty placeholders only. |
| CORS | OK | No CORS headers are set, so APIs are same-origin only. The comments API is a same-origin GET and is `private, no-store`. |
| Webhook signatures | N/A | No webhooks. If added, verify the signature over the raw body and reject replays. |
| Exposed source maps | OK | `productionBrowserSourceMaps` is not enabled (Next default is off). Verify after any config change. |
| Sensitive data | OK | The site stores Google profile basics for signed-in users and optional feedback name/email. `/api/health` returns only `ok` and whether a DB is configured. Admin errors throw generic messages. |
| Dependency vulnerabilities | OK | `npm audit --omit=dev`: 0 vulnerabilities after bumping Next 15.5.27 to 15.5.28 (2026-10-23; the previous version had a critical advisory about image-optimisation SVG handling and a server-action DoS; the site does not use remote or SVG images through `next/image`, so exposure was low). Dependabot, CodeQL and an `npm audit` CI step run on every push. |
| Automated re-checks | NEW | The security agent (`scripts/ops/agents/security.mjs`, daily) re-runs most rows above and opens/updates an `[ops] Security and auth digest` issue. See OPS_AGENTS.md. |
| Security headers | PARTIAL | HSTS, nosniff, referrer policy, `X-Powered-By` removed (2026-10-23), permissions policy, `frame-ancestors`, `base-uri`, `object-src` are set (`next.config.ts`). **No script-src CSP**, deliberately, because AdSense needs inline and third-party scripts. Revisit with nonces when ads are on (TASKS). |

## Open items for a human or the security agent
1. Enforce 2-step verification on all admin Google accounts (owner).
2. Read the CodeQL results in the GitHub Security tab after the first run and triage them.
3. Add rate limiting for sign-in and search.
4. Consider a least-privilege DB role for the web app.
5. Add a script-src CSP with nonces before AdSense goes live.
6. Add an automated check that every file containing `"use server"` calls an auth guard.

## Reporting
Email the project owner (see the repository profile). Do not open a public issue for a vulnerability. Rotate any secret you suspect leaked before reporting.
