import { test } from "node:test";
import assert from "node:assert/strict";
import {
  isExtraLocale,
  resolveLocalizedText,
  resolveLocalizedTextNullable,
  resolveStaticPageContent,
} from "./localized";

const fields = { hi: "हिंदी", en: "English" };

test("hi and en return their own field and ignore any translation", () => {
  assert.equal(resolveLocalizedText("hi", { ...fields, translated: "x" }), "हिंदी");
  assert.equal(resolveLocalizedText("en", { ...fields, translated: "x" }), "English");
});

test("bn/te/mr use the translation when present", () => {
  for (const l of ["bn", "te", "mr"] as const) {
    assert.equal(resolveLocalizedText(l, { ...fields, translated: "native" }), "native");
  }
});

test("bn/te/mr fall back to English when there is no translation", () => {
  for (const l of ["bn", "te", "mr"] as const) {
    assert.equal(resolveLocalizedText(l, fields), "English");
    assert.equal(resolveLocalizedText(l, { ...fields, translated: null }), "English");
  }
});

test("an empty-string translation is kept, not treated as missing", () => {
  // Documents current behaviour: only null/undefined fall back (?? not ||).
  assert.equal(resolveLocalizedText("bn", { ...fields, translated: "" }), "");
});

test("nullable variant: falls back en then hi, else null", () => {
  assert.equal(resolveLocalizedTextNullable("bn", { hi: "h", en: null }), "h");
  assert.equal(resolveLocalizedTextNullable("bn", { hi: null, en: "e" }), "e");
  assert.equal(resolveLocalizedTextNullable("bn", { hi: null, en: null }), null);
  assert.equal(resolveLocalizedTextNullable("hi", { hi: null, en: "e" }), null);
  assert.equal(resolveLocalizedTextNullable("te", { hi: "h", en: "e", translated: "t" }), "t");
});

test("static legal pages are hi/en only: every other locale gets English", () => {
  const content = { hi: "हि", en: "en" };
  assert.equal(resolveStaticPageContent("hi", content), "हि");
  for (const l of ["en", "bn", "te", "mr"] as const) {
    assert.equal(resolveStaticPageContent(l, content), "en");
  }
});

test("isExtraLocale", () => {
  assert.equal(isExtraLocale("bn"), true);
  assert.equal(isExtraLocale("hi"), false);
  assert.equal(isExtraLocale("fr"), false);
});
