# Media rows: title over the full width, a kind pill, the source

Status: proposed, 2026-10-07. Decision: D73. Owner: waldo.
Scope: every video and post row in the galaxy's side panel (`site/src/scripts/galaxy.ts` `mediaRow`, styles in
`site/src/components/Galaxy.astro`), and the three graph files that feed them (`pipeline/link/graph.ts`:
`landed.json`, the summary's `mb`, the layers files' `media`). Line numbers are measured at `b09c7b072`
(origin/main, 2026-10-07 evening).

## 1. Goal

The this-week panel lists 74 videos and posts as one grid row each: shape icon, title, and
`post · 2026-10-07 · 1 star` in a mono column on the right. The right column takes about a third of the panel, so a
title like "Business Central 2026 Release Wave 2: Turn SIFT Indexes On or Off" wraps to six lines, and the row does
not say who wrote it. The star count says how many hubs the item links to, which the reader cannot act on.

After this change a row reads:

```
▲ Creating TableExtensions in BC29 like we're back in NAV (But Business Central)
  [video] · Erik Hougaard · 2026-10-05
```

The title takes the full width, the metadata sits under it in the same mono 11px muted font as today, the kind is a
pill, the source (blog or channel) is named, the star count is gone. The same row is used by every video and post
list in the panel, so they all change together.

## 2. What exists

| Where | What it does today |
|---|---|
| `galaxy.ts:864` `mediaRow(id, kind, date, extra)` | one `<a>` row: `g-shape` (triangle video, bar post, `new` when landed), title (`byId` label → `mediaTitle` → id), `<small>` with `video`/`post`, ` · date`, `extra` |
| `galaxy.ts:871-873` `landedRows` | the "Landed in ..." lists; passes `extra = " · N star(s)"` from the item's hubs |
| callers of `landedRows` | lens panel under `#lens=landed`, galaxy panel without a lens (cap 12), system panel (cap 12) |
| `galaxy.ts:1020` | star panel "Landed in ...": `mediaRow(id, k, d)` from `landed.json` |
| `galaxy.ts:1021` | star panel "Videos and posts": `mediaRow(id, k, d)` from the summary node's `mb.top` |
| `galaxy.ts:921` | layered view "Media": `mediaRow(f.media[i][0], f.media[i][1], null)` from the layers file |
| `Galaxy.astro:188-195` | `.g-list a` grid `10px 1fr auto`, `font: 400 14px var(--font-ui)`; `small` is `400 11px var(--font-mono)`, `--muted` |
| `graph.ts:338` `landed()` | items `[id, v\|p, date, hubs, title]`; `schemas/landed.json` (prefixItems, `items: false`) |
| `graph.ts:298` `mediaOf()` | `mb: { n, top: [id, v\|p, date\|null][] }`, newest 6; `schemas/graph.json:40` |
| `graph.ts:361` `LayersFile.media` | `[id, v\|p, hub indexes, title]` |
| `graph.ts:150-154` | every post (`fm.source_id`) and video (`fm.channel`) gets an "authored" edge from `source/<id>`; the source node's label is the `sources.yaml` name, the raw id when the source is not listed |
| `graph.ts:209` | source nodes are kept in the summary, so the browser already has `byId.get("source/<id>")` |

Video ids carry no channel (`video/PZVTTem-nZw`) and post ids carry a slug, not a name, so the source has to come
from the pipeline.

## 3. Behaviour contract

1. Every video and post row in the panel has two lines. Line 1: the title, over the full width of the row next to
   the shape icon, wrapping freely, never truncated. Line 2: the metadata in the current `small` font
   (mono 11px, `--muted`).
2. Line 2 reads `[pill] · <source> · <date>`. The pill is the word `video` or `post`. A part that is unknown is left
   out together with its separator: no source → `[post] · 2026-10-05`; no date (layered view) → `[video] · Erik
   Hougaard`; neither → the pill alone.
3. The pill: same mono 11px, `--text-2` colour, 1px `--line-strong` border, `--r-badge` radius, `0 6px` padding,
   inline. It names the kind; it is not a control and has no hover state of its own.
4. The shape icon stays at the left, aligned with the title's first line, accent-coloured when landed this week
   (D71 contract 3 unchanged).
5. No star count in any media row. `landedRows` stops passing it; `mediaRow` loses the `extra` parameter.
6. The source is plain text, not a link: the whole row is already one `<a>` to the media page, and links do not nest.
   The source page stays one click further, from the media page.
7. Source name: `byId.get("source/" + sourceId)?.label`; if the node is missing, the part is left out (never the raw
   id in the panel).
8. Star rows and target rows (`row`, `targetRow`) do not change.

## 4. Data contract

Additive. Every new element is optional at the end of its tuple, so a cached older file renders rows without a
source and nothing breaks.

| File | Tuple today | After |
|---|---|---|
| `graph/landed.json` items | `[id, v\|p, date, hubs, title]` | `[id, v\|p, date, hubs, title, source?]` |
| summary node `mb.top` | `[id, v\|p, date\|null]` | `[id, v\|p, date\|null, source?]` |
| `graph/layers/<system>.json` `media` | `[id, v\|p, hub indexes, title]` | `[id, v\|p, hub indexes, title, source?]` |

- `source` is the bare source id (`demiliani-com`, the channel id), without the `source/` prefix: the summary carries
  about 900 `mb.top` entries, so the prefix alone would add 6 KB to a 1.15 MB file. The bare ids add about 14 KB.
- One map in `graph.ts`, media id → source id, built from the "authored" edges (or alongside them at line 150), feeds
  all three writers. A media item without an authored edge gets no sixth/fourth/fifth element (omitted, not `null`).
- `schemas/landed.json`: `prefixItems` gains `{ "type": "string" }`, description updated. `schemas/graph.json:40`:
  the `mb` description says `[id, v or p, date, source]`. The layers file has no schema today; the `LayersFile`
  interface comment carries the shape.
- `landed.json` stays newest first; the hubs element stays (the lens still needs it for scope filtering).

## 5. Layout

`Galaxy.astro`, next to the `.g-list` rules:

- media rows get a class on the `<a>` (`g-media`) with `grid-template-columns: 10px 1fr`, `align-items: start`;
- the title `<span>` is row 1 column 2; the `<small class="g-meta-line">` is row 2 column 2,
  `display: flex; flex-wrap: wrap; align-items: center; gap: 0 6px; margin-top: 2px`;
- the `g-shape` gets `margin-top` so it centres on the first text line (14px font, about 20px line height);
- the pill is `<span class="g-kind">`;
- separators are text `·` spans so screen readers read "post, demiliani.com, 2026-10-05" naturally; the pill has
  no `aria-label` of its own (its text is the label).

Phone width (390 px): the panel is full width, line 2 wraps under itself, no horizontal scroll.

## 6. Contract for the helper

A pure function in `site/src/scripts/galaxy-core.ts`, so it is unit-testable without a canvas:

```ts
/** The parts of a media row's second line (D73): kind pill, source name, date; unknown parts left out. */
export function mediaMeta(kind: string, source: string | null | undefined, date: string | null | undefined): { kind: "video" | "post"; parts: string[] }
```

`mediaRow(id, kind, date, source?)` in `galaxy.ts` resolves the source name through `byId`, calls `mediaMeta`, and
escapes every part. Callers pass the new tuple element: `landedRows` and line 1020 from `landed.json` (`i[5]`),
line 1021 from `mb.top` (`[3]`), line 921 from the layers file (`[4]`).

## 7. Test plan

1. `tests/unit/galaxy-layout.test.ts` ("graph (D66): valid summary and landed week ..."): the fixture's video `v1`
   has channel `yt-ms`, so the expected `mb` becomes `{ n: 1, top: [["video/v1", "v", "2026-10-05", "yt-ms"]] }` and
   the expected landed item gains `"yt-ms"` at the end; both schemas still validate; the second run still
   rewrites nothing.
2. Same file: a media item whose source is not in the fixture's sources still gets its id (the pipeline does not
   resolve names); a media item with no source field gets a tuple of the old length.
3. `tests/unit/galaxy-core.test.ts`: `mediaMeta("p", "Waldo's blog", "2026-10-05")` → kind `post`, parts
   `["Waldo's blog", "2026-10-05"]`; each absent case; `v` → `video`; no part ever contains "star".

## 8. Tasks

1. Pipeline: media → source map in `graph.ts`; append it in `landed()`, `mediaOf()`, `layersFiles()`; update the
   tuple types and comments; update both schemas.
2. Tests from section 7, red first.
3. Client: `mediaMeta` in `galaxy-core.ts`; `mediaRow(id, kind, date, source?)`; drop `extra` and the star text in
   `landedRows`; pass the source at the four call sites.
4. CSS from section 5.
5. Regenerate the graph locally (`renderGraph` through the usual link step) so `data/graph/*` carries the sources;
   discard every other regenerated file before committing (shipping discipline).
6. Headless UI check (section 9).
7. At ship time: append D73 to `docs/DECISIONS.md`, mark the M11 PLAN row shipped, remove the HANDOFF "Open specs"
   entry, record deviations in a section 12 here.

## 9. Verification

1. `npm test` green.
2. Local site build with Node 22 (prepend the nvm v22 bin), serve `site/dist` under the base path, drive it with
   Playwright from the scratchpad:
   - open `#lens=landed`: every `.g-list a.g-media` has a `.g-kind` with `video` or `post`; no `.g-list a.g-media`
     text matches `/\bstars?\b/`; at least one row shows a source name from `sources.yaml`;
   - the title span's width is at least 85% of the row's width (it used to be about 55%);
   - open a star with videos (for example a Copilot hub) and the layered view of one system: the same row shape;
   - screenshots at 1440 px and 390 px; no horizontal scroll at 390 px.
3. `data/graph/summary.json` grows by under 2%.

## 10. Risks

- **Summary size**: about 14 KB on 1.15 MB, measured in 9.3. If it is more than 2%, drop the source from `mb.top`
  and resolve it from the ego graph when the star opens.
- **Sources missing from `sources.yaml`**: the source node's label is then the raw id; contract 7 shows the label
  as it is (the Sources system already shows those ids). Fix the registry, not the panel.
- **One nightly with mixed files**: a browser holding an old `landed.json` and a new summary shows sources on some
  lists and not on others until reload. Harmless.
- **The galaxy panel without a lens** shows 12 landed rows that are now taller (two lines each, but shorter titles):
  net height about the same; check it in 9.2.

## 11. Files

| File | Change |
|---|---|
| `pipeline/link/graph.ts` | media → source map; extra tuple element in `landed`, `mediaOf`, `layersFiles`; types |
| `schemas/landed.json`, `schemas/graph.json` | sixth landed element; `mb` description |
| `site/src/scripts/galaxy-core.ts` | `mediaMeta` |
| `site/src/scripts/galaxy.ts` | `mediaRow` signature and markup; `landedRows`; the four call sites |
| `site/src/components/Galaxy.astro` | `.g-media`, `.g-meta-line`, `.g-kind` |
| `tests/unit/galaxy-layout.test.ts`, `tests/unit/galaxy-core.test.ts` | section 7 |
| `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md` | at ship time (task 7) |

No install, no new dependency, no LLM, nothing on the Mini changes: the next nightly writes the new graph files as
part of its normal link step.

## Definition of Done

- Every video and post row in the panel shows the title over the full width and `[kind] · source · date` under it,
  without a star count, at every level and under every lens.
- `landed.json`, `mb.top` and the layers `media` carry the source id; both schemas validate; old files still render.
- Tests from section 7 green; the UI check from section 9 passed with screenshots kept in the scratchpad.
- D73 appended, PLAN M11 marked shipped, HANDOFF entry removed.
