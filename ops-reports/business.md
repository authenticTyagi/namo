# [ops] Business digest

_Agent `business` · run 2026-10-23T06:31:52.759Z · read-only: it reported, it changed nothing._ 🟡 1 medium · ⚪ 3 info

- 🟡 **medium** · trust: 32 published entries have a confidence score under 0.50
  - Suggested next step: Open /admin, filter published by confidence, and raise the sourcing or add a caveat banner.
- ⚪ **info** · coverage: Thin categories (under 6 published): Sports & Youth Affairs 3, Defense & Security 5, Currency, Prices & Inflation 5, Women & Child Development 5, Agriculture & Farmer Welfare 5
  - Suggested next step: Pick the next topics from these categories (TASKS.md shortlist) rather than the already-deep ones.
- ⚪ **info** · translations: 18 bn/te/mr translation draft(s) await a native reader
  - Suggested next step: Review at /admin/translations.
- ⚪ **info** · automation: Scheduled drafting is off for draft-comparisons.yml, draft-editorials.yml, draft-entries.yml
  - Suggested next step: Intentional since 2026-09-29. To resume, add ANTHROPIC_API_KEY and CRON_SECRET secrets, run once by hand, then restore the schedule block.

**Notes and limits**
- Checks: review queue size and age, editorial coverage, thin categories, low-confidence and stale content, unread feedback, flagged comments, translation backlog, drafting automation state, ads state.
- Not covered: revenue, traffic and conversion (no analytics read access), competitor and market data.

<details><summary>Metrics</summary>

```json
{
  "published": {
    "entries": 118,
    "editorials": 118,
    "comparisons": 30
  },
  "pendingReview": 0,
  "oldestPendingAgeDays": null,
  "thinCategories": [
    "Sports & Youth Affairs: 3",
    "Defense & Security: 5",
    "Currency, Prices & Inflation: 5",
    "Women & Child Development: 5",
    "Agriculture & Farmer Welfare: 5"
  ],
  "draftingSchedules": [
    {
      "workflow": "draft-comparisons.yml",
      "scheduled": false
    },
    {
      "workflow": "draft-editorials.yml",
      "scheduled": false
    },
    {
      "workflow": "draft-entries.yml",
      "scheduled": false
    }
  ],
  "adsScriptLoaded": true,
  "adsTxtLines": 1
}
```
</details>

<!-- ops-metrics:{"published":{"entries":118,"editorials":118,"comparisons":30},"pendingReview":0,"oldestPendingAgeDays":null,"thinCategories":["Sports & Youth Affairs: 3","Defense & Security: 5","Currency, Prices & Inflation: 5","Women & Child Development: 5","Agriculture & Farmer Welfare: 5"],"draftingSchedules":[{"workflow":"draft-comparisons.yml","scheduled":false},{"workflow":"draft-editorials.yml","scheduled":false},{"workflow":"draft-entries.yml","scheduled":false}],"adsScriptLoaded":true,"adsTxtLines":1} -->