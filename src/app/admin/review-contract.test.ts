import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";

/**
 * Source-level contract tests for RULES #10 and the review-queue guard.
 * The admin server actions need a database and a session to run, so these
 * only check that the lines that enforce the rules are still there. They are
 * crude on purpose: they fail loudly if someone removes the reset or the
 * pending_review guard, but they do not prove the SQL behaves correctly.
 */
const base = path.join(process.cwd(), "src", "app", "admin", "(protected)");

function body(file: string, fn: string): string {
  const src = readFileSync(path.join(base, file), "utf8");
  const start = src.indexOf(`export async function ${fn}(`);
  assert.notEqual(start, -1, `${fn} not found in ${file}`);
  const next = src.indexOf("\nexport async function ", start + 10);
  return src.slice(start, next === -1 ? undefined : next);
}

for (const [file, fn] of [
  ["entries/actions.ts", "updateEntry"],
  ["editorials/actions.ts", "updateEditorial"],
  ["comparisons/actions.ts", "updateComparison"],
] as const) {
  test(`${fn} resets status to pending_review on every edit`, () => {
    assert.match(body(file, fn), /status:\s*"pending_review"/);
  });
}

for (const [file, approve, reject, table] of [
  ["editorials/actions.ts", "approveEditorial", "rejectEditorial", "editorials"],
  ["comparisons/actions.ts", "approveComparison", "rejectComparison", "comparisons"],
] as const) {
  for (const fn of [approve, reject]) {
    test(`${fn} only acts on rows still pending_review`, () => {
      assert.match(body(file, fn), new RegExp(`eq\\(${table}\\.status,\\s*"pending_review"\\)`));
    });
  }
}
