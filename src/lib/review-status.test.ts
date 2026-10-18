import { test } from "node:test";
import assert from "node:assert/strict";
import {
  comparisonContentChanged,
  entryContentChanged,
  shouldResetToPendingReview,
  type ComparisonContentFields,
  type EntryContentFields,
} from "./review-status";

const entryRow: EntryContentFields = {
  titleHi: "शीर्षक",
  titleEn: "Title",
  summaryHi: "सार",
  summaryEn: "Summary",
  bodyHi: "बॉडी",
  bodyEn: "Body",
  impactType: "mixed",
  timelineStartDate: new Date("2020-01-01"),
  timelineEndDate: new Date("2024-01-01"),
};
const entryPack = {
  ...entryRow,
  timelineStartDate: "2020-01-01",
  timelineEndDate: "2024-01-01",
};

test("entry: identical content is not a change", () => {
  assert.equal(entryContentChanged(entryRow, entryPack), false);
});

test("entry: no existing row is not a change (it is an insert)", () => {
  assert.equal(entryContentChanged(undefined, entryPack), false);
});

test("entry: any single content field change is detected", () => {
  for (const patch of [
    { titleHi: "x" }, { titleEn: "x" }, { summaryHi: "x" }, { summaryEn: "x" },
    { bodyHi: "x" }, { bodyEn: "x" }, { impactType: "tangible" },
    { timelineStartDate: "2021-01-01" }, { timelineEndDate: "2025-01-01" },
  ]) {
    assert.equal(entryContentChanged(entryRow, { ...entryPack, ...patch }), true, JSON.stringify(patch));
  }
});

test("entry: a null stored date versus a real incoming date is a change", () => {
  assert.equal(entryContentChanged({ ...entryRow, timelineEndDate: null }, entryPack), true);
});

const cmpRow: ComparisonContentFields = {
  titleHi: "ह", titleEn: "T", metricLabelHi: "म", metricLabelEn: "M",
  unitHi: "%", unitEn: "%", narrativeHi: "न", narrativeEn: "N",
};

test("comparison: identical content is not a change", () => {
  assert.equal(comparisonContentChanged(cmpRow, cmpRow), false);
});

test("comparison: each text field change is detected", () => {
  for (const patch of [
    { titleHi: "x" }, { titleEn: "x" }, { metricLabelHi: "x" }, { metricLabelEn: "x" },
    { unitHi: "x" }, { unitEn: "x" }, { narrativeHi: "x" }, { narrativeEn: "x" },
  ]) {
    assert.equal(comparisonContentChanged(cmpRow, { ...cmpRow, ...patch }), true, JSON.stringify(patch));
  }
});

test("comparison: an absent incoming unit equals a stored null unit", () => {
  const stored = { ...cmpRow, unitHi: null, unitEn: null };
  const { unitHi: _h, unitEn: _e, ...noUnits } = cmpRow;
  void _h;
  void _e;
  assert.equal(comparisonContentChanged(stored, noUnits), false);
  assert.equal(comparisonContentChanged(cmpRow, noUnits), true);
});

test("comparison: no existing row is not a change", () => {
  assert.equal(comparisonContentChanged(undefined, cmpRow), false);
});

// KNOWN GAP (documented, not endorsed): the comparison seed script rewrites a
// comparison's data points and sources without comparing them, and the change
// check only looks at the text fields above. A seed run that changes only a
// country's value would keep a published comparison live. There is no way to
// express that here because the function never sees the points.
test("comparison: change detection only sees text fields (known gap)", () => {
  assert.deepEqual(
    Object.keys(cmpRow).sort(),
    ["metricLabelEn", "metricLabelHi", "narrativeEn", "narrativeHi", "titleEn", "titleHi", "unitEn", "unitHi"],
  );
});

test("reset rule: only a published row with changed content goes back to review", () => {
  assert.equal(shouldResetToPendingReview("published", true), true);
  assert.equal(shouldResetToPendingReview("published", false), false);
  for (const status of ["pending_review", "draft", "rejected", undefined]) {
    assert.equal(shouldResetToPendingReview(status, true), false, String(status));
    assert.equal(shouldResetToPendingReview(status, false), false, String(status));
  }
});
