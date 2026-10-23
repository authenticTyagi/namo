# [ops] Backend and infra digest

_Agent `infra` · run 2026-10-23T06:32:21.441Z · read-only: it reported, it changed nothing._ ✅ no findings

**Notes and limits**
- GitHub API unavailable in this environment, so CI status was not checked.
- Checks: core URLs, health, 20 sampled sitemap URLs, edge cache on a repeat request, TLS expiry, latest CI result, Dependabot backlog, database reachability.
- Not covered: Vercel function logs and error rates, Neon metrics (no API credentials are given to agents), cron job health.

<details><summary>Metrics</summary>

```json
{
  "timingsMs": {
    "/en": 89,
    "/hi": 526,
    "/en/overview": 1010,
    "/en/editorials": 804,
    "/en/india-in-the-world": 576,
    "/en/search?q=gst": 862,
    "/robots.txt": 706,
    "/sitemap.xml": 275,
    "/ads.txt": 315
  },
  "sitemapUrls": 288,
  "entryCache": "HIT",
  "certDaysLeft": 51,
  "dbMb": 13,
  "opsStatsOk": true
}
```
</details>

<!-- ops-metrics:{"timingsMs":{"/en":89,"/hi":526,"/en/overview":1010,"/en/editorials":804,"/en/india-in-the-world":576,"/en/search?q=gst":862,"/robots.txt":706,"/sitemap.xml":275,"/ads.txt":315},"sitemapUrls":288,"entryCache":"HIT","certDaysLeft":51,"dbMb":13,"opsStatsOk":true} -->