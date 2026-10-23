# [ops] Scaling digest

_Agent `scaling` · run 2026-10-23T06:33:03.563Z · read-only: it reported, it changed nothing._ ⚪ 1 info

- ⚪ **info** · headroom: Headroom now: 288 prerendered URLs, edge cache hit ratio 100%, database 13.2 of 512 MB (1 signed-in users, 1 comments)
  - Suggested next step: No action needed unless a warning above appears; this line is the baseline the next run compares against.

**Notes and limits**
- Growth rate needs two runs; it starts from this one.
- Checks: sitemap size (build time), edge cache hit ratio on a repeat request, database size against a limit, growth rate and days to limit, user and comment growth.
- Limit assumed: 512 MB (set the DB_LIMIT_MB repository variable for a paid Neon plan). Vercel function and bandwidth quotas have no read API here, so check them in the dashboard.

<details><summary>Metrics</summary>

```json
{
  "at": "2026-10-23T06:33:00.530Z",
  "sitemapUrls": 288,
  "cacheHitRatio": 100,
  "dbMb": 13.2,
  "dbLimitMb": 512,
  "users": 1,
  "comments": 1,
  "entries": 118
}
```
</details>

<!-- ops-metrics:{"at":"2026-10-23T06:33:00.530Z","sitemapUrls":288,"cacheHitRatio":100,"dbMb":13.2,"dbLimitMb":512,"users":1,"comments":1,"entries":118} -->