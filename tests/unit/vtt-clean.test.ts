import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { cleanVtt, segmentsToParagraphs, vttToWords } from "../../pipeline/caption/vtt-clean.js";
import { ROOT } from "../../pipeline/lib/paths.js";

const vtt = readFileSync(resolve(ROOT, "tests/fixtures/captions/synthetic-autocaption.vtt"), "utf8");

test("rolling repeats are emitted once, entities decoded, word timing kept", () => {
  const { words, markers } = vttToWords(vtt);
  assert.equal(words.map((w) => w.w).join(" "), "Welcome to the posting groups session. Today we look at general & VAT setup. Next topic.");
  assert.equal(words[0].t, 4.01);
  assert.equal(words.find((w) => w.w === "groups")?.t, 5.5);
  assert.ok(markers.length >= 1 && markers.every((m) => m.text === "[Music]"));
});

test("a pause longer than 3 s starts a new segment", () => {
  const { segments, word_count } = cleanVtt(vtt);
  assert.equal(word_count, 16);
  assert.equal(segments.length, 2);
  assert.deepEqual(segments[0], { t: 4, end: 12.3, text: "Welcome to the posting groups session. Today we look at general & VAT setup." });
  assert.equal(segments[1].t, 20);
  assert.equal(segments[1].text, "Next topic.");
});

test("timestamps never go backwards and paragraphs group 30 s", () => {
  const { segments } = cleanVtt(vtt);
  for (let i = 1; i < segments.length; i++) assert.ok(segments[i].t >= segments[i - 1].t);
  assert.equal(segmentsToParagraphs(segments).length, 1);
});
