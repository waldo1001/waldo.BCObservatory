import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { aboutMarkdown, fillCounts, personas, splitHtml, splitSections, totalPages, type AboutCounts } from "../../site/src/lib/about.js";

const counts: AboutCounts = { topics: 605, objects: 25645, apps: 96, localizations: 22, features: 80, videos: 616, posts: 601, changes: 1083, digests: 4, sources: 32 };
const real = readFileSync(new URL("../../site/src/about/about.md", import.meta.url), "utf8");
const ROUTES = ["objects/table/18/", "neighbourhood/?mode=events", "code/versions/", "code/deprecations/", "changes/week/", "localizations/be/", "#lens=pick:localization", "#agents", "sources/", "drift/"];

test("fillCounts formats every known placeholder and refuses an unknown one", () => {
  assert.equal(fillCounts("{{objects}} objects, {{topics}} hubs, {{pages}} pages", counts), "25,645 objects, 605 hubs, 28,784 pages");
  assert.equal(totalPages(counts), 28784);
  assert.throws(() => fillCounts("{{nope}}", counts), /\{\{nope\}\}/);
});

test("splitSections finds the byline and the four sections of the real about.md, and names a missing one", () => {
  const s = splitSections(real);
  assert.match(s.byline, /^Written by waldo/);
  for (const k of ["who", "why", "how", "forWho"] as const) assert.ok(s[k].length > 40, k);
  assert.throws(() => splitSections(real.replace("## How", "## Hmm")), /"## How"/);
});

test("personas: seven cards, every link resolvable, every question a question", () => {
  const cards = personas("/x/", "https://github.com/o/r");
  assert.equal(cards.length, 7);
  const labels = new Set<string>();
  for (const c of cards) {
    assert.ok(c.who && c.ask && c.answer, c.who);
    assert.ok(c.ask.endsWith("?"), c.ask);
    for (const l of c.links) {
      assert.ok(!labels.has(l.label), `duplicate label ${l.label}`); labels.add(l.label);
      if (l.href.startsWith("https://")) continue;
      const rel = l.href.startsWith("/x/") ? l.href.slice(3) : l.href;
      assert.ok(ROUTES.includes(rel), `${c.who}: ${l.href} is not a known route`);
    }
  }
});

test("the markdown twin has every section in order, no placeholder, the commands, and a 'none yet' nightly", () => {
  const md = aboutMarkdown(real, counts, personas("/x/"), null, "https://example.test/x/");
  const order = ["# About BC Observatory", "## Who", "## Why", "## How", "## For who", "## For your agent", "## What is in it today", "## Housekeeping"];
  let at = -1;
  for (const h of order) { const i = md.indexOf(`\n${h}\n`.replace(/^\n# /, "# ")); assert.ok(i > at, `${h} out of order`); at = i; }
  assert.ok(!md.includes("{{"));
  assert.ok(md.includes("claude mcp add bc-observatory -- npx -y bc-observatory@latest"));
  assert.ok(md.includes("Last nightly: none yet."));
  assert.ok(md.includes("[The commands](https://example.test/x/about/#agents)"), "page anchors become absolute links to the page");
  assert.ok(md.includes("[Belgium](https://example.test/x/localizations/be/)"));
  const withRun = aboutMarkdown(real, counts, personas("/x/"), { date: "2026-10-08", status: "ok", items_changed: 1234 }, "https://example.test/x/");
  assert.ok(withRun.includes("Last nightly: 2026-10-08 (ok, 1,234 items new or changed)."));
});

test("the owner's corrections of 2026-10-08 stay pinned", () => {
  for (const w of ["shitload", "2007", "Telemetry Buddy", "waldo.be", "iFacto"]) assert.ok(real.includes(w), `missing ${w}`);
  for (const w of ["Hodor", "ALOps", "build scripts"]) assert.ok(!real.includes(w), `must not mention ${w}`);
  assert.ok(!/\d{2,}/.test(splitSections(real).who.replace(/2007|25 words|https?:\S+/g, "")), "no raw counts in the bio: use {{placeholders}}");
});

test("splitHtml cuts at the How and For who headings and fails loudly without them", () => {
  const html = `<p>byline</p><h2 id="who">Who</h2><p>a</p><h2 id="why">Why</h2><p>b</p><h2 id="how">How</h2><ul><li>c</li></ul><h2 id="for-who">For who</h2><p>d</p>`;
  const s = splitHtml(html);
  assert.ok(s.whoWhy.endsWith("<p>b</p>") && s.how.startsWith('<h2 id="how"') && s.forWho.startsWith('<h2 id="for-who"'));
  assert.throws(() => splitHtml("<p>x</p>"), /id "how"/);
});
