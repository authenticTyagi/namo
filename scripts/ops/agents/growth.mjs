// Features and growth agent: proposes paid/free features and growth moves from
// the evidence that exists. It is honest about what it cannot see: there is no
// behaviour-analytics read source yet, so the ranking uses engagement proxies
// (comments, feedback, coverage gaps) plus the written backlog. Suggest only.

import { existsSync, readFileSync } from "node:fs";
import { finding, opsStats } from "../lib.mjs";

/** Unchecked bullets under the "Growth ideas" heading of TASKS.md. */
export function parseGrowthBacklog(md) {
  const start = md.indexOf("## Growth ideas");
  if (start === -1) return [];
  const rest = md.slice(start + 3);
  const end = rest.search(/\n## /);
  const section = end === -1 ? rest : rest.slice(0, end);
  return section
    .split("\n")
    .filter((l) => /^- \[[ ~]\]/.test(l))
    .map((l) => ({ started: l.startsWith("- [~]"), text: l.replace(/^- \[[ ~]\]\s*/, "").slice(0, 200) }));
}

/** Rough effort and dependency tags from the idea's own text. */
export function scoreIdea(text) {
  const t = text.toLowerCase();
  const needs = /needs a|needs mail|provider|sign-up|consent/.test(t) ? "needs an outside service or consent copy" : null;
  const cheap = /page|landing|schema|json-ld|pdf|chart/.test(t) && !needs;
  return { effort: needs ? "high" : cheap ? "low" : "medium", dependency: needs };
}

export async function run() {
  const findings = [];
  const notes = [];
  const metrics = {};

  const { stats, reason } = await opsStats();
  if (stats) {
    metrics.commentsLast7d = stats.commentsLast7d;
    metrics.mostCommented = stats.mostCommented;
    if (stats.mostCommented.length) findings.push(finding("info", "engagement", `Most discussed entries: ${stats.mostCommented.map((m) => `${m.titleEn.slice(0, 50)} (${m.comments})`).join("; ")}`, { suggestion: "Readers engage most with these themes; commission a follow-up editorial or a related comparison on the same theme." }));
    const fb = stats.newFeedbackByCategory ?? {};
    if (fb.suggest_source) findings.push(finding("info", "feedback", `${fb.suggest_source} reader source suggestion(s) are unread`, { suggestion: "Reader-suggested sources are free research leads: read /admin/feedback." }));
    const thin = stats.categories.filter((c) => c.published < 6);
    if (thin.length) findings.push(finding("info", "reach", `Categories with the least content: ${thin.map((c) => c.nameEn).join(", ")}`, { suggestion: "Search and share traffic follows topic depth; thin categories are the cheapest place to add reach." }));
  } else {
    notes.push(reason);
  }

  const backlog = existsSync("TASKS.md") ? parseGrowthBacklog(readFileSync("TASKS.md", "utf8")) : [];
  const todo = backlog.filter((b) => !b.started).map((b) => ({ ...b, ...scoreIdea(b.text) }));
  metrics.backlogOpen = todo.length;
  const order = { low: 0, medium: 1, high: 2 };
  todo.sort((a, b) => order[a.effort] - order[b.effort]);
  if (todo.length) {
    findings.push(finding("info", "backlog", `Open growth ideas, cheapest first: ${todo.slice(0, 5).map((t) => `${t.text.slice(0, 60)} [${t.effort}${t.dependency ? ", " + t.dependency : ""}]`).join(" | ")}`, { suggestion: "Pick one the owner would use themselves; free features (verify-claim page, topic hubs with FAQ schema) build reach before any paid tier." }));
  }

  findings.push(
    finding("medium", "analytics", "No behaviour data source is connected, so feature suggestions cannot yet be driven by what readers do", {
      suggestion:
        "Options, cheapest first: (1) export Vercel Web Analytics data from the dashboard into a monthly file the agent reads; (2) add a consent-gated, privacy-preserving event count for search queries and share clicks stored in the database; (3) connect Google Search Console for queries and pages. Each needs the owner's decision on privacy.",
    }),
  );
  findings.push(
    finding("info", "paid-ideas", "Candidate paid or supporter features, none built: ad-free reading for supporters, a weekly digest with deeper notes, embeddable charts for publishers, an API for researchers", {
      suggestion: "Keep the core reference free and fully sourced; test willingness to pay with a supporter link before building anything. Paid features must not change what is published (RULES #9).",
    }),
  );

  notes.push("Checks: engagement proxies (comments, feedback), coverage gaps, the open growth backlog in TASKS.md ranked by effort and dependency.");
  notes.push("Not covered: traffic, search queries, retention, market and competitor trends. These need data sources the agents do not have.");
  return { findings, metrics, notes };
}
