# [ops] Backend and infra digest

_Agent `infra` · run 2026-10-23T06:22:39.112Z · read-only: it reported, it changed nothing._ 🔵 1 low

- 🔵 **low** · database: Database-level checks were skipped
  - Evidence: CRON_SECRET is not set in this environment, so database figures were skipped
  - Suggested next step: Add the CRON_SECRET repository secret (same value as in Vercel) so the agents can read /api/pipeline/ops-stats.

**Notes and limits**
- GitHub API unavailable in this environment, so CI status was not checked.
- CRON_SECRET is not set in this environment, so database figures were skipped
- Checks: core URLs, health, 20 sampled sitemap URLs, edge cache on a repeat request, TLS expiry, latest CI result, Dependabot backlog, database reachability.
- Not covered: Vercel function logs and error rates, Neon metrics (no API credentials are given to agents), cron job health.

<details><summary>Metrics</summary>

```json
{
  "timingsMs": {
    "/en": 429,
    "/hi": 3057,
    "/en/overview": 205,
    "/en/editorials": 117,
    "/en/india-in-the-world": 113,
    "/en/search?q=gst": 841,
    "/robots.txt": 309,
    "/sitemap.xml": 750,
    "/ads.txt": 351
  },
  "sitemapUrls": 286,
  "entryCache": "HIT",
  "certDaysLeft": 51
}
```
</details>

<!-- ops-metrics:{"timingsMs":{"/en":429,"/hi":3057,"/en/overview":205,"/en/editorials":117,"/en/india-in-the-world":113,"/en/search?q=gst":841,"/robots.txt":309,"/sitemap.xml":750,"/ads.txt":351},"sitemapUrls":286,"entryCache":"HIT","certDaysLeft":51} -->