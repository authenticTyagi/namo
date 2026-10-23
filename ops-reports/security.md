# [ops] Security and auth digest

_Agent `security` · run 2026-10-23T06:20:47.017Z · read-only: it reported, it changed nothing._ 🔵 2 low

- 🔵 **low** · headers: X-Powered-By header is exposed
  - Evidence: Next.js
  - Suggested next step: Set `poweredByHeader: false` in next.config.ts.
- 🔵 **low** · headers: No script-src CSP (known and deliberate while AdSense is planned)
  - Suggested next step: Add a nonce-based script-src before AdSense goes live (TASKS).

**Notes and limits**
- Checks: npm audit, newer Next patch, live security headers, unauthenticated probes of every pipeline route and /admin, server-action guards, innerHTML allow-list, secret patterns in tracked files, public source maps, health-route leaks.
- Not covered: CodeQL results (read the GitHub Security tab), MFA on admin Google accounts (owner), Vercel/Neon account settings, a real penetration test.
- Fix authority: none by design. Each finding names the exact next step; ask Claude Code to 'fix the security digest' to apply it on a branch.

<details><summary>Metrics</summary>

```json
{
  "vulnerabilities": {
    "info": 0,
    "low": 0,
    "moderate": 0,
    "high": 0,
    "critical": 0,
    "total": 0
  },
  "next": {
    "pinned": "15.5.28",
    "latestPatch": "15.5.28"
  },
  "pipelineRoutesProbed": 9,
  "serverActionFiles": 20
}
```
</details>

<!-- ops-metrics:{"vulnerabilities":{"info":0,"low":0,"moderate":0,"high":0,"critical":0,"total":0},"next":{"pinned":"15.5.28","latestPatch":"15.5.28"},"pipelineRoutesProbed":9,"serverActionFiles":20} -->