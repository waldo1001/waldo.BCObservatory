/** The source stage's pure parts (D60): seek-link tagging, the embed URL, player messages, reading time, the meta trim. */
import { test } from "node:test";
import assert from "node:assert/strict";
import { tagSeekLinks } from "../../site/src/lib/links.js";
import { chapterAt, hms, posterRows, readingMinutes, trimMeta, videoIdOf, wpHeight } from "../../site/src/lib/stage.js";
import { parsePlayerMessage, plainClick, ytEmbedUrl } from "../../site/src/scripts/source-stage.js";

test("tagSeekLinks: only this video's &t= links, whatever the & became; other hrefs and attributes stay", () => {
  const html = `<li><a href="https://www.youtube.com/watch?v=-SGaVGOkiF0&#x26;t=47s">0:47</a></li>`
    + `<li><a href="https://www.youtube.com/watch?v=-SGaVGOkiF0&amp;t=113s" title="x">1:53</a></li>`
    + `<li><a href="https://www.youtube.com/watch?v=other123456&#x26;t=5s">other</a></li>`
    + `<li><a href="https://www.youtube.com/watch?v=-SGaVGOkiF0">no t</a></li>`;
  const out = tagSeekLinks(html, "-SGaVGOkiF0");
  assert.equal((out.match(/data-seek=/g) ?? []).length, 2);
  assert.ok(out.includes(`href="https://www.youtube.com/watch?v=-SGaVGOkiF0&#x26;t=47s" data-seek="47">`));
  assert.ok(out.includes(`data-seek="113" title="x">`), "other attributes preserved");
  assert.ok(out.includes(`href="https://www.youtube.com/watch?v=other123456&#x26;t=5s">`), "another video keeps navigating");
});

test("ytEmbedUrl: nocookie, the JS API on, start only when past 0", () => {
  const u = new URL(ytEmbedUrl("-SGaVGOkiF0", 47.9, "https://waldo1001.github.io"));
  assert.deepEqual([u.origin, u.pathname, u.searchParams.get("enablejsapi"), u.searchParams.get("start"), u.searchParams.get("origin")],
    ["https://www.youtube-nocookie.com", "/embed/-SGaVGOkiF0", "1", "47", "https://waldo1001.github.io"]);
  assert.equal(new URL(ytEmbedUrl("x", 0, "https://o")).searchParams.has("start"), false);
});

test("parsePlayerMessage: JSON strings with an event only", () => {
  assert.deepEqual(parsePlayerMessage(`{"event":"onReady","info":{}}`), { event: "onReady", info: {} });
  assert.equal(parsePlayerMessage({ event: "onReady" }), null, "not a string");
  assert.equal(parsePlayerMessage("hello"), null, "not JSON");
  assert.equal(parsePlayerMessage("{broken"), null);
  assert.equal(parsePlayerMessage(`{"info":1}`), null, "no event");
});

test("plainClick, reading time, h:mm:ss", () => {
  const c = { button: 0, metaKey: false, ctrlKey: false, shiftKey: false, altKey: false };
  assert.deepEqual([plainClick(c), plainClick({ ...c, metaKey: true }), plainClick({ ...c, button: 1 })], [true, false, false]);
  assert.deepEqual([readingMinutes(0), readingMinutes(195), readingMinutes(1240)], [1, 1, 6]);
  assert.deepEqual([hms(528), hms(3725)], ["8:48", "1:02:05"]);
});

test("trimMeta: the meta paragraph goes, the rest stays", () => {
  const video = `<h2>Overview</h2><p><a href="https://www.youtube.com/watch?v=x">Watch on YouTube</a> · channel · 2023-12-11</p>\n<p>Body</p>`;
  assert.equal(trimMeta(video), `<h2>Overview</h2><p>Body</p>`);
  const post = `<p><a href="https://x.example/p">Read the post</a> · Blog · 2025-07-31 · 195 words</p>\n<blockquote>\n<p>Summary</p>\n</blockquote>`;
  assert.equal(trimMeta(post), `<blockquote>\n<p>Summary</p>\n</blockquote>`);
  assert.equal(trimMeta(`<p><a href="y">Some link</a> text</p>`), `<p><a href="y">Some link</a> text</p>`, "other paragraphs stay");
});

// --- phase 2 -----------------------------------------------------------------------------------------------------

test("chapterAt: the last chapter starting at or before t", () => {
  const starts = [0, 47, 113, 193];
  assert.deepEqual([chapterAt(starts, 0), chapterAt(starts, 46.9), chapterAt(starts, 47), chapterAt(starts, 500), chapterAt([10], 5)], [0, 0, 1, 3, -1]);
});

test("videoIdOf: watch links and youtu.be, nothing else", () => {
  assert.equal(videoIdOf("https://www.youtube.com/watch?v=-SGaVGOkiF0&t=47s"), "-SGaVGOkiF0");
  assert.equal(videoIdOf("https://youtu.be/-SGaVGOkiF0"), "-SGaVGOkiF0");
  assert.equal(videoIdOf("https://learn.microsoft.com/x?v=-SGaVGOkiF0"), null);
  assert.equal(videoIdOf("not a url"), null);
});

test("posterRows: a lazy poster before each video row of a digest, opted-out videos skipped", () => {
  const html = `<ul>\n<li><a href="/b/videos/PZVTTem-nZw/">TableExtensions</a> (yt-hougaard)</li>\n<li><a href="/b/videos/-SGaVGOkiF0/">Payment</a></li>\n<li><a href="/b/posts/x/">post</a></li>\n</ul>`;
  const out = posterRows(html, "/b/", new Set(["-SGaVGOkiF0"]));
  assert.ok(out.includes(`<li class="has-poster"><img class="row-poster" src="https://i.ytimg.com/vi/PZVTTem-nZw/mqdefault.jpg" alt="" width="320" height="180" loading="lazy" decoding="async"><a href="/b/videos/PZVTTem-nZw/">`));
  assert.ok(out.includes(`<li><a href="/b/videos/-SGaVGOkiF0/">`), "opted out: no poster");
  assert.ok(out.includes(`<li><a href="/b/posts/x/">`), "posts untouched");
});

test("wpHeight: only height messages with our secret, clamped", () => {
  assert.equal(wpHeight({ message: "height", value: 338, secret: "abc" }, "abc"), 338);
  assert.equal(wpHeight({ message: "height", value: 338, secret: "zzz" }, "abc"), null, "another secret");
  assert.equal(wpHeight({ message: "link", value: "https://x", secret: "abc" }, "abc"), null);
  assert.equal(wpHeight({ message: "height", value: 99999, secret: "abc" }, "abc"), 1000);
  assert.equal(wpHeight("height", "abc"), null);
});
