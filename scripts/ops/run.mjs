// Runs one ops agent (or all) and publishes its digest.
//
//   node scripts/ops/run.mjs security            # report to the rolling GitHub issue
//   node scripts/ops/run.mjs security --local    # print only, touch nothing
//   node scripts/ops/run.mjs all --local
//
// An agent that throws is reported as a finding; the process still exits 0 so
// a flaky check never produces daily failure-email spam (the lesson of the
// drafting workflows, PROJECT_LOG 2026-09-29).

import { appendFileSync, mkdirSync, writeFileSync } from "node:fs";
import { AGENTS } from "./agents-list.mjs";
import { finding, previousMetrics, renderReport, upsertIssue } from "./lib.mjs";


async function runOne(name, local) {
  const def = AGENTS[name];
  if (!def) throw new Error(`unknown agent "${name}". Known: ${Object.keys(AGENTS).join(", ")}`);
  const prev = local ? null : await previousMetrics(def.title);
  let result;
  try {
    const { run } = await import(def.mod);
    result = await run({ previous: prev });
  } catch (err) {
    result = {
      findings: [
        finding("high", "agent", `The ${name} agent itself failed: ${err?.message ?? err}`, {
          suggestion: "Open the workflow run log, fix scripts/ops/agents/" + name + ".mjs, and re-run.",
        }),
      ],
      metrics: prev ?? {},
      notes: [],
    };
  }
  const body = renderReport({ agent: name, title: def.title, ...result });

  mkdirSync("ops-reports", { recursive: true });
  writeFileSync(`ops-reports/${name}.md`, body);
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, body + "\n");

  if (local) {
    console.log(body);
  } else {
    const r = await upsertIssue(def.title, body);
    console.log(`[${name}] issue:`, JSON.stringify(r));
  }
  return result.findings;
}

const args = process.argv.slice(2);
const local = args.includes("--local");
const which = args.find((a) => !a.startsWith("--")) ?? process.env.AGENT ?? "all";
const names = which === "all" ? Object.keys(AGENTS) : which.split(",");
for (const n of names) {
  const f = await runOne(n.trim(), local);
  console.log(`[${n}] ${f.length} finding(s)`);
}
