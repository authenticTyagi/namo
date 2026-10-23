# [ops] Performance digest

_Agent `performance` · run 2026-10-23T06:24:14.482Z · read-only: it reported, it changed nothing._ ✅ no findings

**Notes and limits**
- /en: PageSpeed Insights HTTP 429 (set PSI_API_KEY to avoid the shared rate limit)
- No previous run found, so trend comparison starts from this run.
- Checks: median-of-3 TTFB and total time, HTML and JS transfer size, compression, caching headers, PageSpeed Insights lab data and CrUX real-user data when available, trend vs last run.
- Server-side query timing is not visible from outside; Vercel Speed Insights (enable it in the project) is the real-user source.

<details><summary>Metrics</summary>

```json
{
  "pages": {
    "/en": {
      "url": "https://modinekiyakyahai.com/en",
      "status": 200,
      "ttfbMs": 78,
      "totalMs": 80,
      "htmlKb": 100,
      "jsKb": 160,
      "scripts": 11,
      "encoding": "br",
      "cacheControl": "public, max-age=0, must-revalidate",
      "edge": "HIT"
    },
    "/hi": {
      "url": "https://modinekiyakyahai.com/hi",
      "status": 200,
      "ttfbMs": 145,
      "totalMs": 149,
      "htmlKb": 123,
      "jsKb": 160,
      "scripts": 11,
      "encoding": "br",
      "cacheControl": "public, max-age=0, must-revalidate",
      "edge": "HIT"
    },
    "/en/india-in-the-world": {
      "url": "https://modinekiyakyahai.com/en/india-in-the-world",
      "status": 200,
      "ttfbMs": 83,
      "totalMs": 85,
      "htmlKb": 101,
      "jsKb": 159,
      "scripts": 10,
      "encoding": "br",
      "cacheControl": "public, max-age=0, must-revalidate",
      "edge": "HIT"
    },
    "/hi/editorial/billion-connections-real-gap": {
      "url": "https://modinekiyakyahai.com/hi/editorial/billion-connections-real-gap",
      "status": 200,
      "ttfbMs": 75,
      "totalMs": 77,
      "htmlKb": 63,
      "jsKb": 164,
      "scripts": 13,
      "encoding": "br",
      "cacheControl": "public, max-age=0, must-revalidate",
      "edge": "HIT"
    }
  },
  "psi": {
    "/en": {
      "error": "PageSpeed Insights HTTP 429"
    }
  }
}
```
</details>

<!-- ops-metrics:{"pages":{"/en":{"url":"https://modinekiyakyahai.com/en","status":200,"ttfbMs":78,"totalMs":80,"htmlKb":100,"jsKb":160,"scripts":11,"encoding":"br","cacheControl":"public, max-age=0, must-revalidate","edge":"HIT"},"/hi":{"url":"https://modinekiyakyahai.com/hi","status":200,"ttfbMs":145,"totalMs":149,"htmlKb":123,"jsKb":160,"scripts":11,"encoding":"br","cacheControl":"public, max-age=0, must-revalidate","edge":"HIT"},"/en/india-in-the-world":{"url":"https://modinekiyakyahai.com/en/india-in-the-world","status":200,"ttfbMs":83,"totalMs":85,"htmlKb":101,"jsKb":159,"scripts":10,"encoding":"br","cacheControl":"public, max-age=0, must-revalidate","edge":"HIT"},"/hi/editorial/billion-connections-real-gap":{"url":"https://modinekiyakyahai.com/hi/editorial/billion-connections-real-gap","status":200,"ttfbMs":75,"totalMs":77,"htmlKb":63,"jsKb":164,"scripts":13,"encoding":"br","cacheControl":"public, max-age=0, must-revalidate","edge":"HIT"}},"psi":{"/en":{"error":"PageSpeed Insights HTTP 429"}}} -->