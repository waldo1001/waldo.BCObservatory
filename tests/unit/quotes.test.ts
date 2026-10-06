import { test } from "node:test";
import assert from "node:assert/strict";
import { checkQuote, quoteNearT, QUOTE_MAX_WORDS, type Seg } from "../../pipeline/lib/quotes.js";

const segs: Seg[] = [
  { t: 0, end: 10, text: "Welcome to the posting groups session. Today we look at general and VAT setup." },
  { t: 10, end: 20, text: "Then we configure the inventory posting setup for each location code." },
  { t: 120, end: 130, text: "Remember that the inventory posting setup drives every value entry you post." },
];

test("exact quote near its timestamp is accepted as-is", () => {
  const r = checkQuote(segs, "we configure the inventory posting setup", 12);
  assert.equal(r.ok, true);
  assert.equal(r.reason, "exact");
  assert.equal(r.text, "we configure the inventory posting setup");
});

test("exact quote far from its timestamp snaps to the occurrence", () => {
  const r = checkQuote(segs, "drives every value entry you post", 15);
  assert.equal(r.reason, "snapped");
  assert.equal(r.t, 120);
  assert.equal(r.original_t, 15);
});

test("near-miss quote is replaced by the verbatim source span", () => {
  const r = checkQuote(segs, "Then we configure the inventory posting setup for each warehouse", 10);
  assert.equal(r.ok, true);
  assert.equal(r.reason, "fuzzy");
  assert.equal(r.text, "then we configure the inventory posting setup for each");
});

test("invented and too-short quotes are rejected", () => {
  assert.equal(checkQuote(segs, "posting groups are deprecated in version thirty", 5).reason, "not-found");
  assert.equal(checkQuote(segs, "posting groups", 5).reason, "too-short");
});

test("quotes are capped below 25 words (CONTENT-NOTICE)", () => {
  assert.ok(QUOTE_MAX_WORDS < 25);
  const long = segs.map((s) => s.text).join(" ");
  const r = checkQuote([{ t: 0, end: 130, text: long }], long, 0);
  assert.equal(r.truncated, true);
  assert.equal(r.text.split(/\s+/).length, QUOTE_MAX_WORDS);
});

test("quoteNearT respects the window", () => {
  assert.equal(quoteNearT(segs, "general and VAT setup", 5), true);
  assert.equal(quoteNearT(segs, "general and VAT setup", 90), false);
});
