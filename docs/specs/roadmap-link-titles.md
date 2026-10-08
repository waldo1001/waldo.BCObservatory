# Roadmap links show the feature's title, not its number

Status: shipped 2026-10-08 (commit `68a365e73e`), live after the next nightly. Decision: D79. Milestone: M17. Owner: waldo.
Scope: the "Roadmap features it demonstrates" list on source pages (`pipeline/render/source.ts`) and the roadmap
links in the video page's Features table (`pipeline/render/video.ts`). Every claim below was verified against the
tree at `2035910480` on 2026-10-08. Not in scope: the source frontmatter (`links.features`, `footprint.features`
keep their ids; the schema does not change), the site's Astro pages (they render the markdown as is), the feature
pages themselves, any LLM stage.

## 1. Goal

A roadmap link is printed with its Microsoft 365 roadmap id as the link text. That number tells a reader nothing.
Both renderers already have the title in hand.

- `pipeline/render/source.ts:63` writes `- [573253](../features/573253.md)`, one line per feature, sorted by id.
  On https://waldo1001.github.io/waldo.BCObservatory/sources/yt-microsoft/ that is a list of 58 numbers. Six source
  pages carry the section (measured on the committed `content/sources/*.md`): yt-microsoft 58, yt-saurav 13,
  yt-mibuso 5, yt-hougaard 2, yt-dynamicscorner 1, yt-stefanmaron 1.
- `pipeline/render/video.ts:116` writes `generally available (roadmap [573354](../features/573354.md))` into the
  Features table. Measured: 61 video pages carry 208 such links (`grep -ho '(roadmap \[[^|]*' content/videos/*.md`).
- Every linked id has a feature page (checked: no `features/<id>` link in `content/sources` or `content/videos`
  points to a missing file), and every feature page has `title`, `area`, `status` and `ga_date` in its frontmatter
  (`content/features/573253.md`: title "More countries and languages", area "Expense Agent", status preview,
  ga_date 2026-10).
- Titles alone can be ambiguous ("More countries and languages" means nothing without "Expense Agent"), so the
  source list also prints the area. The other pages already use this shape: `pipeline/render/digest.ts:56` and
  `pipeline/render/app.ts:134` print `[title](../features/<id>.md)` followed by the status.

After this change:

- A source page lists each roadmap feature as its title, area, status, GA month and how many items of the source
  show it, with the most-shown first.
- A video's Features table links each roadmap feature by its title.
- No new data is loaded and no model is called: the source renderer reads the feature pages it already parses; the
  video renderer reads the roadmap snapshot it already loads.

## 2. Reader- and agent-facing behaviour, after

Source page (`content/sources/<id>.md` and the site's `/sources/<id>/`), section heading unchanged:

```
## Roadmap features it demonstrates

- [AI-Driven Approvals](../features/573255.md): Expense Agent, in preview, GA 2026-12, 6 videos
- [Manage Shopify B2B companies, catalogs, and pricing](../features/573342.md): Ecommerce, generally available, GA 2026-10, 4 videos
- [Add date ranges and vehicle types in your mileage calculation](../features/573254.md): Expense Agent, in preview, GA 2026-10, 3 videos
- [Control the lifecycle of all report layouts](../features/573320.md): Reporting and data analysis, generally available, GA 2026-10, 3 videos
```

(The top four of yt-microsoft today, from its `footprint.features` weights and the feature pages' frontmatter.)

- Order: count descending, then title (`localeCompare`), then id. Today it is by id, which is meaningless to a reader.
- Parts after the colon, joined with `, `, each left out when empty: `area`, the status in words (the feature page's
  wording: `generally available`, `in preview`, `announced`, `status unclear`), `GA <ga_date>`, the count with the
  source's noun (`video`/`videos`, `post`/`posts`, `code change`/`code changes`, the same nouns as the summary line
  at `source.ts:42`).
- The title goes through the existing `cell()` (`source.ts:21`), like the "Most recent" list at `source.ts:64`.
- Fallback: a feature id with no feature page under `content/features/` keeps the id as its link text and has no
  suffix. There are none today; it guards against a feature that drops off the roadmap between two renders.

Video page Features table, Status column:

```
| ModuleInfo help property | generally available (roadmap [Access application links through ModuleInfo](../features/573354.md)), demoed | [2:33](…) |
```

- Link text is `cell(entry.title)` from the roadmap entries the renderer already has (`roadmap.entries`, built at
  `video.ts:140` from `latestRoadmap`). `roadmapStatusOf` (`video.ts:54`) only keeps ids present in `entries`, so
  every id has a title; if a title is empty, keep the id.
- Several ids stay comma-separated, as today. The column gets longer; D74's table CSS (`break-word`, `.table-scroll`)
  already keeps it readable.
- The note under the table (`video.ts:121`) is unchanged.

Agents: the markdown twins change the same way. `links.features` in the frontmatter keeps the ids, so MCP `cat`
and `search` lose nothing.

## 3. Decisions

Draft D79:

> **D79: Roadmap links are printed by title.** A link to a roadmap feature page shows the feature's title, never its
> bare roadmap id. Lists add the area and the status, because a roadmap title often only makes sense within its
> area. The id stays in the link target and in the frontmatter. Source pages list the features they demonstrate most
> often first. Deterministic: the titles come from the feature pages and the roadmap snapshot the renderers already
> read.

Rejected:

- **Title only on source pages.** It is shorter, but titles like "More countries and languages" stay meaningless.
  The owner picked title, area, status and count (2026-10-08).
- **Grouping the source list by area with H3s.** It is easier to scan with 58 items, but it adds headings to the
  table of contents and makes a one-item area a heading of its own. Sorting by count already puts the substance first.
- **Source pages only.** The owner chose to fix the video tables in the same change: it is the same bug, and the
  nightly rewrites those pages anyway.
- **Loading `latestRoadmap` in the source renderer.** It works, but the source renderer already parses every
  feature page (`source.ts:73-77`), and those pages are what the link points to, so status and GA match the target
  page exactly.

## 4. Contract

`pipeline/render/feature.ts`

- Export `STATUS_LABEL` (now module-private at `feature.ts:58`) so source.ts prints the same status words.

`pipeline/render/source.ts`

- New exported type and parameter:

  ```ts
  export interface FeatureRef { title: string; area: string | null; status: string | null; ga_date: string | null }
  export function renderSourcePage(src: SourceDef, items: Item[], now: Date, featureRefs: Map<string, FeatureRef> = new Map()): string
  ```

  The key is the feature page id (`feature/573253`), the same form as `fm.links.features`.
- `renderSourcesAndCoverage` builds the map from `pages` where `fm.type === "feature"`, before the source loop:
  `[fm.id, { title: fm.title, area: fm.area ?? null, status: fm.status ?? null, ga_date: fm.ga_date ?? null }]`.
- Line 63 becomes a small helper `featureLine(id, count, noun, ref?)` that returns the markdown line described in
  section 2. Sorting is by count descending, then title (or the id when there is no ref), then id.
- The frontmatter (`fm.links.features`, `fm.footprint.features`) does not change: the schema stays as it is and
  `validateOrThrow` keeps passing.

`pipeline/render/video.ts`

- Line 116: `rm[i].ids.map((r) => \`[${cell(roadmap.entries.get(r)?.title || r)}](../features/${r}.md)\`)`.

Example record: the `FeatureRef` for `feature/573255`, built from `content/features/573255.md`, and its line on yt-microsoft:

```
{ title: "AI-Driven Approvals", area: "Expense Agent", status: "preview", ga_date: "2026-12" }
- [AI-Driven Approvals](../features/573255.md): Expense Agent, in preview, GA 2026-12, 6 videos
```

## 5. Test plan (write first)

`tests/unit/sources.test.ts`, extend the existing test or add one next to it:

- Fixture: two feature pages, `content/features/100.md` (`id: feature/100`, `type: feature`, `title: "Calculate
  withholding tax"`, `area: "Expense Agent"`, `status: "preview"`, `ga_date: "2026-10"`) and `content/features/200.md`
  (`title: "Use withholding taxes"`, `area: "Finance"`, `status: "ga"`, `ga_date: null`). Post 1 has
  `links.features: ["feature/100", "feature/200"]`, post 2 has `["feature/200"]`, and one post links `feature/999`
  (no page).
- Expect, in this order, in `sources/kauffmann-nl.md`:
  - `- [Use withholding taxes](../features/200.md): Finance, generally available, 2 posts`
  - `- [Calculate withholding tax](../features/100.md): Expense Agent, in preview, GA 2026-10, 1 post`
  - `- [999](../features/999.md)`
- Expect `s.data.links.features` still to be `["feature/100", "feature/200", "feature/999"]` (ids, sorted).
- A title containing `|` comes out escaped (`\|`).
- `validateContent` still reports no errors for `sources/` (the feature fixtures may need the full feature
  frontmatter; reuse `base()` and add the feature fields, or filter the errors to `sources/` as the test does today).

`tests/unit/roadmap-links.test.ts:159`

- Change the expectation to
  `generally available (roadmap [Use withholding taxes with employee transactions](../features/200.md))`.
- Add one assertion for a row with two ids (the `["announced", "video", ["200", "300"]]` row): its Status cell
  contains both `[Use withholding taxes with employee transactions](../features/200.md)` and
  `[Turn indexes on and off in AL](../features/300.md)`.

Run first: both tests must fail on the current tree.

## 6. Tasks

Phase 1 (one commit with code and tests; ships alone):

1. Write the tests in section 5 and see them fail.
2. Export `STATUS_LABEL` from `feature.ts`.
3. `source.ts`: `FeatureRef`, the map in `renderSourcesAndCoverage`, the `featureLine` helper, the new sort.
4. `video.ts:116`: the link text from `roadmap.entries`.
5. `npm test`, typecheck, the site build (section 7).

Phase 2 (content, no manual step): the next nightly rewrites the pages. `renderSourcesAndCoverage` runs every
nightly (`pipeline/orchestrator/nightly.ts:436`) and rewrites a source page when its body changes (`source.ts:92`).
`rerenderVideoPages` (`video.ts:150`) re-renders every published video in the roadmap-link stage
(`nightly.ts:505`). Expect 6 source pages and 61 video pages in that night's content commit. Do not hand-edit
`content/`. To see it before the nightly, run the renderers locally on the committed data and look at the diff, but
do not commit their output (generated content comes from the Mini).

## 7. Verification

```bash
npx tsx --test tests/unit/sources.test.ts tests/unit/roadmap-links.test.ts
npm test
npm run typecheck
# real data, local only, do not commit the output:
npx tsx -e 'import("./pipeline/render/source.ts").then(m => m.renderSourcesAndCoverage("content", "data"))'
awk '/^## Roadmap features it demonstrates/{f=1;next} /^## /{f=0} f&&/^- /' content/sources/yt-microsoft.md | head
grep -c '^- \[[0-9]*\](' content/sources/*.md        # expect 0 everywhere
git checkout -- content data/index/coverage.json      # throw the local render away
# site, Node 22 (memory: local site build needs Node 22):
PATH="$(ls -d $HOME/.nvm/versions/node/v22*/bin | tail -1):$PATH" npm run site:build
```

After the first nightly that carries the change:

- https://waldo1001.github.io/waldo.BCObservatory/sources/yt-microsoft/ lists titles, most-shown first.
- `grep -c '(roadmap \[[0-9]*\](' content/videos/*.md | grep -v ':0'` prints nothing.

## 8. Later, not in this spec

- A tooltip or hover card with the feature summary on the site (needs a component, not markdown).
- Grouping long lists by area or by wave if a source ever passes about 100 features.
- The same title treatment for any other id-only link that turns up (none found: `digest.ts:56` and `app.ts:134`
  already print titles).

## 9. Risks and open questions

- **Long Status cells in the video table.** Titles go up to 96 characters (measured over `content/features/*.md`).
  Default: accept it; D74's wrapping handles it. If one row looks bad, do not truncate titles: drop the
  "(roadmap …)" parenthesis wording to "per roadmap: …" only if the owner asks.
- **Status words on the source list vs the feature page.** Both read `status` from the same frontmatter, so they
  match. The video table keeps its status from `featureStatus` on the snapshot, as today.
- **Sort ties.** Most yt-microsoft features are shown once (footprint weights: one at 6, one at 4, three at 3, five
  at 2, the rest at 1). Default: within a count, sort alphabetically by title.

## 10. Files

Changed: `pipeline/render/source.ts`, `pipeline/render/video.ts`, `pipeline/render/feature.ts` (export only),
`tests/unit/sources.test.ts`, `tests/unit/roadmap-links.test.ts`, `docs/DECISIONS.md`, `docs/PLAN.md`,
`docs/HANDOFF.md`, this spec. New: none. Rewritten by the nightly: 6 `content/sources/*.md`, 61 `content/videos/**/*.md`.

## 11. Definition of Done

- [x] The tests in section 5 fail before the change and pass after; `npm test` and `npm run typecheck` are green.
- [x] The site builds under Node 22.
- [x] A local render on the committed data shows titles on yt-microsoft and no bare-id lines (not committed).
- [x] D79 appended to `docs/DECISIONS.md`; M17 row in `docs/PLAN.md` marked shipped with the date; the HANDOFF entry
      moved out of "Open specs".
- [x] This section 12 renamed "Built, deviations", with the commit sha(s).
- [ ] After the next nightly: the live yt-microsoft page lists titles, and no video page has a bare-id roadmap link.

## 12. Built, deviations

Built 2026-10-08 on `dev/roadmap-link-titles`, code and tests in `68a365e73e` (feat), docs in the commit after it.

- Section 5 tests written first; the three changed or new tests failed on the old tree (the existing roadmap-links
  expectation, the new source-list test, the pipe-escape test). After: `npm test` 394 tests, 393 pass, 0 fail,
  1 skipped (already skipped before); `npm run typecheck` green; `npm run validate:content` OK; site build under
  Node 22 OK (28,829 pages), `/sources/yt-microsoft/` shows the titled list.
- Local render on the committed data (thrown away, not committed): 6 source pages rewritten, sections of
  58/13/5/2/1/1 lines (yt-microsoft, yt-saurav, yt-mibuso, yt-hougaard, yt-dynamicscorner, yt-stefanmaron), the top
  four of yt-microsoft exactly as in section 2, 0 bare-id lines. `rerenderVideoPages` on the committed manifest changed
  61 video pages, only their roadmap Status cells (and `generated.at`); 208 links in 203 cells, 64 distinct ids, all
  with a title in the latest snapshot; 0 bare-id roadmap links after.
- Deviation, sort: section 4 says "then title (or the id when there is no ref)", but section 5 expects the page-less
  `feature/999` after "Calculate withholding tax" at the same count, and `"999"` sorts before letters. Built: count
  descending, then features with a page before those without, then title, then id. The tests decide.
- Deviation, test: section 5 expects `validateContent` to report no `sources/` errors, but the fixture's
  `feature/999` deliberately has no page, so the validator reports it (broken link, missing page); that is the
  correct behaviour. The test filters those two `999` errors out and asserts nothing else.
- Extra test: the pipe-escape case runs through `renderSourcePage` directly with a `FeatureRef` map, on a youtube
  source, so it also covers the `video`/`videos` noun.
- `video.ts` keeps its own `STATUS_LABEL` (different wording for the video table, as the spec says); only
  `feature.ts`'s is exported and used by `source.ts`.
- Open: the last Definition of Done item (live yt-microsoft page and no bare-id video link) waits for the first
  nightly after the merge; check with `grep -c '(roadmap \[[0-9]*\](' content/videos/*.md | grep -v ':0'`.
