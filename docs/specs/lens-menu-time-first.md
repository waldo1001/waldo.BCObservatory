---
issue: 21
status: implemented
---

# The Lenses menu opens with "this week": Time first, then Version

Status: implemented, 2026-10-21 (section 12 records what was built and where it differs). Decision: D103 (appended
2026-10-21). Milestone: M41. Owner: waldo.
Scope: the order of the groups in the galaxy's Lenses menu (`MENU_GROUPS` in `site/src/scripts/galaxy-core.ts`), its
unit test, and the two code comments that list that order. Every claim below was verified against the tree at
`c8635aa1fa` on 2026-10-21. Not in scope: the entries inside a group, their labels and counts, the Questions menu, the
lens chip, the hash and deep links, the lens ids, the order of the `lenses` array in `galaxy.ts`, pages, the MCP,
`data/`.

## 1. Goal

The Lenses menu (D92) lists its groups in the order of one array, `MENU_GROUPS` (`site/src/scripts/galaxy-core.ts:114-117`):
Version, Time, Type, Tier, Coverage, Country, Source. `lensMenu` walks that array (`galaxy-core.ts:132`) and
`renderLensMenu` writes the groups to the DOM in the order it returns (`site/src/scripts/galaxy.ts:214-219`). D92 wrote
the order down (`docs/DECISIONS.md:973-974`).

The Version group now holds seven lenses, BC24 to BC30: the majors any node of the committed graph changed in
(`galaxy.ts:170`; measured with
`node -e 'const s=require("./data/graph/summary.json");const v=new Set();for(const n of s.nodes)for(const x of n.cv??[])v.add(x);console.log([...v].sort().join(","))'`,
output `24,25,26,27,28,29,30`). At the menu's width those seven chips take two rows (the owner's screenshot of the live
site, 2026-10-21: `BC30 vNext 37` to `BC24 131`). So "this week", the lens that changes every night and the one the
site points readers at (the header's "N new this week" link, `site/src/layouts/Base.astro:47`, and the Questions entry
"What is new this week?", `site/src/lib/questions.ts:10`, both open `#lens=landed`), sits on the third row of chips. It
is also the eighth Tab stop inside the menu: the headings are `<p>` elements, so Tab from the `Lenses` summary goes
through the seven version chips first.

After this change:

- The menu opens with the Time group on top: `this week N`, then Version, Type, Tier, Coverage, Country, Source.
- "this week" is the first chip in the menu and the first Tab stop after the `Lenses` summary.
- Nothing else changes: the entries of each group, their labels, counts and `title`s, the pressed state, the chip,
  the hash, every deep link, and the bar's layout.

## 2. Reader- and agent-facing behaviour, after

The Lenses menu, top to bottom (headings are uppercased by CSS, `site/src/components/Galaxy.astro:133`; counts as in the
owner's screenshot of 2026-10-21):

| Heading | Entries |
|---|---|
| TIME | `this week 89` |
| VERSION | `BC30 vNext 37`, `BC29 104`, `BC28 116`, `BC27 118`, `BC26 100`, `BC25 95`, `BC24 131` |
| TYPE | `topic hubs 606`, `roadmap features 99`, `AL objects 300`, `localizations 22`, `sources 33` |
| TIER | `mostly community evidence 76`, `official only 889` |
| COVERAGE | `no Learn page, video or post 134` |
| COUNTRY | `Pick a country 22` |
| SOURCE | `Pick a source 33` |

- Keyboard: open the menu, press Tab once: focus is on `this week` (today `BC30 vNext`). Picking an entry still
  closes the menu and returns focus to the summary (D92, unchanged).
- Screen readers: each group is still `role="group"` labelled by its heading (`galaxy.ts:217`); only the order of the
  groups changes.
- A graph without version lenses (an older graph) already showed Time first; it still does, followed by Type.
- The phone layout, the "?" sheet, the panel, the MCP and every page are unchanged.

## 3. Decisions

Draft text for `docs/DECISIONS.md`:

> - **D103 The Lenses menu lists Time first.** The galaxy's Lenses menu (D92) put its groups in the order Version,
>   Time, Type, Tier, Coverage, Country, Source. With seven majors (BC24 to BC30) the Version group takes two rows of
>   chips, so "this week", the lens that changes every night and the one the header's "N new this week" link and the
>   Questions menu open, was the third row and the eighth Tab stop in the menu. Now Time comes first and Version
>   second (`MENU_GROUPS` in `galaxy-core.ts`); every entry, count and label, the chip, the hash and every deep link
>   are unchanged. Amends D92 (the menu order only).

Rejected:

- **Bring back the "this week" chip in the bar** (D71's chip). D92 removed it to keep the bar to one row at 1440 px with
  the panel open; a second control for one lens undoes what D92 measured.
- **Show only the newest majors in the Version group** to make room. That changes what the menu offers (every major,
  D72 as amended by D92) and does not answer the ask.
- **Make the order configurable** (a config key or a `data-` attribute). There is one reader-facing order and no second
  consumer of the setting.
- **Reorder the `lenses` array in `galaxy.ts:190-210` as well.** The menu takes its order from `MENU_GROUPS` only. The
  array's order is not visible to readers: `scopeLenses` is used only for `includes`/`some` checks
  (`galaxy.ts:1339-1341`, `1378`) and the panel pickers sort by count (`pickerRows`, `galaxy-core.ts:167-176`).

## 4. Contract

`MENU_GROUPS` (`site/src/scripts/galaxy-core.ts:113-117`) becomes:

```ts
/** D92, D103: the groups of the Lenses menu, in menu order (Time first): the lens group, the menu group's id and its heading. */
const MENU_GROUPS: readonly [string, LensGroupId, string][] = [
  ["Time", "time", "Time"], ["Version", "version", "Version"], ["Type", "type", "Type"], ["Tier", "tier", "Tier"],
  ["Coverage", "coverage", "Coverage"], ["Localization", "country", "Country"], ["Source", "source", "Source"],
];
```

Nothing else in the contract changes: `lensMenu`'s signature, `LensGroupId`, `LensEntry`, `LensGroup`, the lens ids and
the markup `renderLensMenu` writes. Example output of `lensMenu` for the test fixture (section 5), group ids in order:
`["time", "version", "type", "tier", "coverage", "country", "source"]`.

## 5. Test plan (write first)

All in `tests/unit/galaxy-core.test.ts`, on the existing fixture `MENU_LENSES`, `MENU_COUNTS`, `MENU_MAJORS` (lines
196-208).

1. Rename the test at line 210 to `lensMenu: every lens in seven groups, Time first, versions newest first, countries
   and sources as picker entries (D92, D103)` and change its expectations:
   - group ids `["time", "version", "type", "tier", "coverage", "country", "source"]`;
   - labels `["Time", "Version", "Type", "Tier", "Coverage", "Country", "Source"]`;
   - `m[0].entries` = `[{ id: "landed", label: "this week", n: 45, on: false, title: null }]`;
   - `m[1].entries` = the two version entries now at `m[0]` (`version:30` "BC30 vNext" 27, then `version:29` "BC29" 97,
     pressed);
   - `m[2]` to `m[6]` as `m[2]` to `m[6]` today (Type, Tier, Coverage, Country, Source).
2. In the test at line 226, keep `old[0].id === "time"` (a graph without versions) and add `old[1].id === "type"`.
3. In the same test, add: without the Time lens,
   `lensMenu(MENU_LENSES.filter((l) => l.group !== "Time"), MENU_COUNTS, MENU_MAJORS, null)[0].id === "version"` (a
   group with no lens is still left out, and Version follows).

Run `npm test` before task 2 of section 6: test 1 fails on the group ids, tests 2 and 3 pass already. After task 2 all
three pass.

No unit test drives the DOM; the order on the built site and the Tab stop are checked in section 7.

## 6. Tasks

One phase. It ships alone; it rewrites no page and changes nothing in `data/`, so its push starts no derive.

1. The tests of section 5.
2. `MENU_GROUPS` as in section 4, with its comment.
3. The two comments that list the order:
   - `site/src/scripts/galaxy.ts:14-15`: "Lenses, one at a time, from one Lenses menu (D92, Time first D103): this
     week, changed in a version (newest first, D72), then type, tier, no evidence, and a picker for localizations and
     sources (D78); search too."
   - `site/src/components/Galaxy.astro:6`: "Lenses" menu holding every lens (this week, versions, type, tier,
     coverage, and the country and source pickers).
4. The ship-time edits of section 11's last item.

## 7. Verification

1. `npm test`: all green, including the three tests of section 5.
2. The site build on Node 22 (the shell defaults to Node 20):
   `PATH="$HOME/.nvm/versions/node/$(ls $HOME/.nvm/versions/node | grep '^v22' | tail -1)/bin:$PATH" npm run site:build`.
3. On the built site (the built-in browser, or the Playwright route of the headless UI check), home page:
   - open `Lenses`; the headings read, in order, `Time, Version, Type, Tier, Coverage, Country, Source`:
     `[...document.querySelectorAll('.g-lensmenu .g-lm-h')].map((p) => p.textContent)`;
   - the first chip is `this week`: `document.querySelector('.g-lensmenu .g-lm').dataset.lens === "landed"`;
   - focus the summary, press Tab: `document.activeElement.dataset.lens === "landed"`;
   - pick `this week`: the chip reads `this week N`, the hash is `#lens=landed`; pick `BC29`: the chip reads
     `changed in BC29 N`, the hash `#lens=version%3A29` (unchanged behaviour).
4. `scripts/ui-sweep.mjs` needs no change: it reads the menu by group id, not by position (`ui-sweep.mjs:105-107`).
5. After the Pages build, the same check on the live site.

## 8. Later, not in this spec

- Ordering the other groups by how often readers use them: the site collects no usage data to order by.
- A shorter Version group (fold older majors behind a "more" entry): only if more majors make it three rows.

## 9. Risks and open questions

- **The galaxy-controls spec and the D92 HANDOFF entry describe the old order** (`docs/specs/galaxy-controls.md:157-170`,
  `docs/HANDOFF.md:105`). Default: leave them; they record what shipped on 2026-10-12, and D103 amends D92.
- **Version drops below the fold of the menu on a short screen.** It moves down one row (one chip, 32 px plus its
  heading). Default: accept; the menu scrolls as today.
- **The Questions menu's order** (D70) is not touched. Default: unchanged.

## 10. Files

Changed:

- `site/src/scripts/galaxy-core.ts` (`MENU_GROUPS` and its comment)
- `tests/unit/galaxy-core.test.ts` (section 5)
- `site/src/scripts/galaxy.ts` (the comment at lines 14-15)
- `site/src/components/Galaxy.astro` (the comment at line 6)
- `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`, this spec (ship time)

New: none.

## 11. Definition of Done

- [x] `npm test` is green; the three tests of section 5 are in `tests/unit/galaxy-core.test.ts`, and test 1 failed
      before `MENU_GROUPS` changed.
- [x] `MENU_GROUPS` starts with `["Time", "time", "Time"]`, then `["Version", "version", "Version"]`; the rest in the
      same order as before.
- [x] The comments at `galaxy.ts:14-15` and `Galaxy.astro:6` list this week before the versions.
- [x] The site builds on Node 22; on the built home page the menu headings read `Time, Version, Type, Tier, Coverage,
      Country, Source`, and one Tab after the `Lenses` summary focuses `this week`. (Live site 2026-10-29: headings
      verified; the first focusable element after the summary is the `this week` button.)
- [x] Picking `this week` and `BC29` gives the same chip and hash as before (section 7, step 3). (Verified on the live
      site 2026-10-29.)
- [x] D103 appended to docs/DECISIONS.md; PLAN M41 marked shipped; HANDOFF entry moved from "Open specs" to "Where
      things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status
      implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the
      status lines into docs/built/lens-menu-time-first.md; the PR's review moves them in (sdd-build section 4,
      sdd-review section 6).

## 12. Built, deviations (2026-10-21)

Built (uncommitted by the builder; the League commits): `MENU_GROUPS` in `site/src/scripts/galaxy-core.ts` now starts
with Time, then Version, Type, Tier, Coverage, Country, Source; the three tests of section 5 are in
`tests/unit/galaxy-core.test.ts`; the comments at `galaxy.ts:14-16` and `Galaxy.astro:6` list this week first. D103
appended, PLAN M41 shipped, HANDOFF entry moved.

Verified: `npm run typecheck` clean; `npm test` run after the change (see the League's measured run). Red: test 1
(group ids) was written before `MENU_GROUPS` changed.

Deviations: none in the code. Operator steps open (not runnable in operator mode): the site build on Node 22
(`npm run site:build` with Node 22 first on PATH, spec section 7 step 2), the browser checks of step 3 and the live-site
check of step 5. The comment at `galaxy.ts` is re-wrapped over three lines instead of two.

**Review, 2026-10-29 (owner session, after PR #22 merged without the review step).** Moved this hand-over in from `docs/built/lens-menu-time-first.md`. Verified: `tests/unit/galaxy-core.test.ts` passes on `main`; on the live site (2026-10-29) the Lenses menu reads Time, Version, Type, Tier, Coverage, Country, Source; picking `this week` sets `#lens=landed` and `BC29` sets `#lens=version%3A29` with the chip "changed in BC29"; the first focusable element after the `Lenses` summary is the `this week`
button.

## 13. Proposed edits to other files (applied 2026-10-21, see section 12)

**`docs/DECISIONS.md`**, appended after D102: the D103 text of section 3.

**`docs/PLAN.md`** section 5, the M41 row (added with this spec as `proposed`); at ship time `proposed` becomes
`shipped <date>`:

`| **M41 Lenses menu, Time first** | the galaxy's Lenses menu lists Time ("this week") first, then Version, Type, Tier, Coverage, Country, Source; entries, counts, chip and deep links unchanged (\`docs/specs/lens-menu-time-first.md\`, D103, proposed) | under an hour | none: no LLM calls, no page rewritten |`

**`docs/HANDOFF.md`**, at ship time the "Open specs" entry moves to "Where things stand" as:

`- **Lenses menu, Time first, D103** (\`docs/specs/lens-menu-time-first.md\`, M41, issue #21). The galaxy's Lenses menu
  opens with "this week" on top, then the versions and the other groups as before; "this week" is the first Tab stop
  in the menu (was the eighth). No page or data changed.`

The spec's own edits (section 12 "Built, deviations" inserted before this section, which stays as section 13 marked
applied; the ticked Definition of Done; `status: implemented` and `Status: implemented` in the body) are the builder's
in a manual build, and the PR review's in a League build (`docs/built/lens-menu-time-first.md`).

Nothing for `AGENTS.md` or `CONTENT-NOTICE.md`.
