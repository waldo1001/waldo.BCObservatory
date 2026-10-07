# The site fits its host: measure real bytes, stop repeating them, and know when to leave

Status: proposed, 2026-10-07. Decision: D76 (reserved, appended to `docs/DECISIONS.md` at ship time). Owner: waldo.
Scope: the Pages workflow's size check, a size report per build, the scoped styles of the components on object pages,
and two recorded triggers (markdown twins off the site, then a new host). Every claim below was verified against the
tree at `3b9c29bd2` on 2026-10-07; sizes were measured on a local build of `b953327e5` plus `0b5ebf485` (Node
22.23.1) unless the text says CI. Not in scope: client-rendered object pages (section 8), the Mini, the pipeline.

## 1. Goal

On 2026-10-07 the Pages workflow refused a deploy: `site/dist: 903 MB` against `test "$size" -lt 900`
(`.github/workflows/pages.yml:37-41`, run 37673603278). One fix the same evening (`0b5ebf485`, the 1.5 KB inline chrome
script moved into a bundled module) brought CI back to 843 MB. GitHub Pages refuses published sites above 1 GB and asks
for at most 100 GB of bandwidth a month. The owner asked whether the observatory needs another host.

It does not yet, and the number the workflow checks is not the number that matters:

- `du -sm` counts disk blocks. The site is 58,972 files (28,823 HTML, 28,778 markdown twins, 1,280 JSON), most of
  them a few KB, so block padding inflates it. Local build: `du -sm` 729 MB, apparent file bytes 639 MB (12% less).
  Applied to CI's 843 MB that is about 740 MB of real content. What GitHub receives is the tar that
  `actions/upload-pages-artifact` builds (`pages.yml:42`), which adds a 512-byte header and up to 511 bytes of
  padding per file: about 45 MB on top of the apparent bytes. Neither is measured today.
- Bytes repeat. The scoped styles of `VersionTimeline.astro:35` (unqualified `.dot`, `.v`, `.txt`) put a
  `data-astro-cid-gs3epys4` attribute on 35 elements of every object page, about 840 bytes on each of 25,644 pages,
  21 MB. `Related.astro:31` adds about 190 bytes a page (5 MB), `PageGalaxy.astro:25` about 120 (3 MB). D53 fixed the
  same pattern for `Neighbourhood.astro` and the long list pages; these three came later. Scoping attributes are 32 MB,
  7.3% of all HTML.
- Nobody sees growth until a deploy fails. The workflow prints one number.

After this change:

- The workflow measures what is uploaded (tar bytes), prints apparent bytes and file count beside it, and fails above
  900 MB of tar bytes; it warns from 800 MB. A size report per build names the ten largest sections.
- The three components stop scoping per element; about 29 MB less HTML, no visual change.
- Two triggers are written down with their numbers, so the next step is a measurement, not a debate: markdown twins of
  object pages move to GitHub raw URLs when tar bytes pass 850 MB after phases 1 and 2; the site moves host when they
  pass 900 MB after that.

## 2. Reader- and agent-facing behaviour, after

- Readers: nothing changes. Pages look identical in both themes; the version timeline, Related block and page
  locator keep their layout, colours and scroll behaviour.
- Agents: nothing changes in phases 1 and 2. Every markdown twin stays at its URL (D02). Phase 3 is conditional and
  changes twin URLs for object pages only (section 4.4).
- The owner: the Pages run summary shows a table (tar MB, apparent MB, files, headroom to 900 MB, ten largest
  sections), and a warning annotation from 800 MB.

## 3. Decisions

**D76 The site's size is measured as uploaded, repeated bytes are removed before content is, and leaving GitHub
Pages is a measured trigger.** The Pages check measures the tar `upload-pages-artifact` uploads (fail above 900 MB,
warn above 800 MB) instead of `du -sm`, which counted 12% block padding on 59,000 small files. Components on every
object page style under a wrapper class with `is:global`, as D53 did for the Neighbourhood, so no element carries a
`data-astro-cid-*` attribute it does not need. Markdown twins stay on the site (D02) until tar bytes pass 850 MB after
those fixes; then the object twins (about 120 MB, 25,600 files) are served from `raw.githubusercontent.com` at the
same commit and every link to them follows. If tar bytes still pass 900 MB, the site moves to a host that takes the
same `site/dist`: Cloudflare Pages on a paid plan (100,000 files, 25 MiB per file; the free plan's 20,000 files is
below our 59,000) or object storage behind a CDN.

Owner's choices of 2026-10-07: twins kept, with a later conditional phase; stay on Pages with a trigger; client-rendered
object pages out of scope.

Rejected:

- Raising the budget toward 1 GB: removes the warning, not the growth; a failed deploy then lands on the hard limit.
- `scopedStyleStrategy: "class"` in `astro.config.mjs`: shorter per attribute but still per element, changes specificity
  site-wide, and needs a visual pass of every page type for less than half the saving.
- Moving the twins now: the cheap phases leave enough room; D02 stays intact until a number says otherwise.
- Moving host now: a subscription and a second deploy path for a problem phases 1 and 2 solve.

## 4. Contract

### 4.1 Size check (`.github/workflows/pages.yml`, `scripts/site-size.ts` new)

`scripts/site-size.ts <dist> [--json <out>]`, run with `tsx` after `npm run site:build`:

- Walks `<dist>`; for each file adds `size` to apparent bytes and `512 + ceil(size / 512) * 512` to tar bytes (POSIX
  ustar: one header block plus data blocks), plus 1,024 bytes of end-of-archive. No `tar` invocation; the formula is
  exact for ustar without long names and within 1% with them (GNU long-name headers add a block for paths over 100
  characters; the script counts those too: a path longer than 100 bytes adds 1,024).
- Groups by the first path segment (`objects`, `code`, `topics`, ...) and by extension.
- Prints to stdout and, when `GITHUB_STEP_SUMMARY` is set, appends a markdown table: tar MB, apparent MB, files,
  headroom to 900 MB, then the ten largest sections with MB and files.
- Exit codes: 0 under 800 MB tar; 0 with `::warning::site is <n> MB of 900 MB` from 800 MB; 1 at or above 900 MB.
- `--json` writes `{ tar_bytes, apparent_bytes, files, sections: [{ name, bytes, files }], exts: {...} }` (schema
  `schemas/site-size.json`, new) so a later step or a test can read it.

`pages.yml`: the step "Size budget" becomes `npx tsx scripts/site-size.ts site/dist --json site-size.json`. The `du`
line goes. The step name says "tar bytes, budget 900 MB, Pages limit 1 GB".

### 4.2 Scoped styles (`site/src/components/VersionTimeline.astro`, `Related.astro`, `PageGalaxy.astro`)

Each `<style>` becomes `<style is:global>` with every selector qualified by the component's root class, the D53(b)
rule: `.timeline .dot`, `.timeline .v`, `.timeline .txt`, `.timeline .changed .dot`, and so on; `Related.astro` under
its root (`.related` or what the markup uses: verify), `PageGalaxy.astro` under its root. A selector that cannot be
qualified (a `:global` already, a keyframe) stays as is. Class names the qualification would make collide with another
global rule are renamed with the component's prefix (`.vt-dot`), checked with a grep of `site/src` and the built CSS.

### 4.3 Size report in the run (`docs/RUNBOOK.md`)

RUNBOOK "Pages": how to read the size table, the two thresholds, and the triggers of 4.4 and 4.5.

### 4.4 Phase 3, conditional: object twins from GitHub raw

Starts only when a Pages run reports tar bytes above 850 MB after phases 1 and 2 shipped. Not built before.

- `site/src/pages/objects/[...id].md.ts` stops emitting files (the route is removed; `getStaticPaths` for twins of
  the other sections stays).
- One function, `twinUrl(section, id)` in `site/src/lib/page.ts`, returns
  `https://raw.githubusercontent.com/<owner>/<repo>/<commit>/content/objects/<id>.md` for objects and the on-site URL
  for every other section. `<commit>` is the build's `GITHUB_SHA` (a pinned commit, not `main`, so a page and its twin
  never disagree), falling back to `main` in local builds.
- Callers: "Copy as markdown" and `openInClaude` (`page.ts:39`), the `<link rel="alternate" type="text/markdown">`
  of object pages if present, `site/src/pages/objects/llms.txt.ts`, the root `llms.txt`, and the MCP server's
  `cat` (`packages/mcp`) if it builds site URLs (verify; it reads the npm package's own copy today).
- A redirect is not possible on Pages; `site/src/pages/404.astro` recognises `/objects/<type>/<id>.md` and points at
  the raw URL with one line of text and a link (no script redirect for agents; they read the link).
- Saving: about 120 MB apparent, 25,644 files (and the tar headers of 25,644 files, about 20 MB more).

### 4.5 Trigger, recorded only: a new host

If tar bytes pass 900 MB after phase 3, or bandwidth draws a GitHub notice, the site moves. The spec of that move is
written then (with the `bcobs-spec` skill), starting from: Cloudflare Pages paid plan, `wrangler pages deploy
site/dist` from the same workflow, `SITE_ORIGIN` and `SITE_BASE` from `astro.config.mjs` changed, a redirect page
left on GitHub Pages.

## 5. Test plan (write first)

`tests/unit/site-size.test.ts`, on a temporary directory:

- Three files of 0, 1 and 513 bytes: apparent 514; tar = 3 × 512 + (0 + 512 + 1,024) + 1,024 = 4,096.
- A path of 120 characters adds 1,024 bytes of long-name header.
- Sections: files under `objects/` and `code/` are grouped and sorted by bytes, ten at most.
- Thresholds: a fake total of 799 MB exits 0 with no warning, 800 MB warns, 900 MB exits 1 (the threshold logic is a
  pure function, tested without real files).
- The JSON validates against `schemas/site-size.json`.

Phase 2 has no unit tests; its checks are in section 7 (attribute counts and a visual comparison).

## 6. Tasks

Phase 1, measure (one PR, no page changes):

1. `schemas/site-size.json`, `tests/unit/site-size.test.ts`, `scripts/site-size.ts`.
2. `pages.yml` step; `docs/RUNBOOK.md` section "Pages".
3. Run it on a local build and on the first CI build; write both numbers into section 12.

Phase 2, stop repeating (one PR, rewrites the CSS and the HTML of every object page once, no content change):

4. `VersionTimeline.astro`, `Related.astro`, `PageGalaxy.astro` to `is:global` with qualified selectors.
5. Build; count `data-astro-cid-` per object page before and after; visual check (section 7).

Close:

6. D76 appended; PLAN M14 row shipped; HANDOFF entry moved to Shipped with the measured numbers and the two
   triggers; RUNBOOK says where the triggers live.

Phase 3 (4.4) is not a task of this spec's delivery. It becomes one when its trigger fires; the HANDOFF entry keeps it
visible.

## 7. Verification

- `npm run typecheck && npm test`.
- Phase 1: `npx tsx scripts/site-size.ts site/dist` on a local build prints tar, apparent and files; apparent equals
  `find site/dist -type f -print0 | xargs -0 stat -f%z | awk '{s+=$1} END {print s}'` (macOS) to the byte; tar is
  within 1% of `tar --format=ustar -cf - -C site/dist . | wc -c` (macOS bsdtar, for the check only).
- Phase 2: on `site/dist/objects/codeunit/80/index.html`, `table/18` and `page/8060`, `grep -o 'data-astro-cid-' | wc
  -l` drops by at least the timeline's 35 and the Related block's 8; total HTML drops by about 25 to 30 MB (record).
- Phase 2 visual: the built site served under its base path (the headless method in the memory note
  `bcobs-headless-ui-check`, or a browser): an object page with a long timeline (Table 18, BC23-30), one with an
  obsolete major, a Related block, the page locator; dark and light; 390 px and 1440 px. Screenshots before and after
  match apart from anti-aliasing.
- CI: the Pages run summary shows the table; the warning appears only from 800 MB.

## 8. Later, not in this spec

- Client-rendered object pages: one `/objects/view/` shell and per-type JSON shards would remove most of the 385 MB of
  object HTML, at the cost of static HTML for search engines and readers without JavaScript (the trade D66 made for the
  neighbourhood explorer only). Owner's choice of 2026-10-07: out.
- The one-hop SVG on object pages (28 MB of inline SVG across the site, D66 phase 3) could be drawn from the
  per-system neighbour files on demand; it would lose its no-JavaScript fallback.
- Header and footer repeat about 2.2 KB on every page (63 MB): the base path appears ten times in the header alone.
  Relative links would save about 200 bytes a page (6 MB): not worth a template change on its own.

## 9. Risks and open questions

- Is the 1 GB limit applied to the tar, the gzip GitHub stores, or the unpacked site? The docs say "published sites";
  measuring the tar is the conservative reading (the largest of the three). Default: tar.
- `is:global` styles leak if a class name is generic. Mitigation in 4.2 (qualify, rename on collision, grep).
- The phase 2 HTML rewrite lands with the next Pages build, not a nightly content commit: no content churn.
- Growth per BC wave is mostly new object pages (about 250 a major) and longer member lists; the call sections of D67
  add text to every object page once. Phase 1's report will show the real slope after a few builds; the 850 MB trigger
  should be read against it.
- Bandwidth: unknown today (GitHub shows no traffic numbers for Pages). Default: no action until GitHub writes.

## 10. Files

New: `docs/specs/site-size.md` (this), `scripts/site-size.ts`, `schemas/site-size.json`,
`tests/unit/site-size.test.ts`.

Modified: `.github/workflows/pages.yml`, `site/src/components/VersionTimeline.astro`, `site/src/components/Related.astro`,
`site/src/components/PageGalaxy.astro`, `docs/RUNBOOK.md`, `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`.

Phase 3 only (when triggered): `site/src/pages/objects/[...id].md.ts` (removed), `site/src/lib/page.ts`,
`site/src/pages/objects/llms.txt.ts`, `site/src/pages/llms.txt.ts`, `site/src/pages/404.astro`, possibly `packages/mcp`.

## 11. Definition of Done

- Tests of section 5 green; `npm run typecheck`, `npm test`, the site build pass.
- The Pages workflow measures tar bytes, prints the table in the run summary, warns from 800 MB, fails from 900 MB;
  `du -sm` is gone from `pages.yml`.
- No element on an object page carries a `data-astro-cid-*` attribute from `VersionTimeline`, `Related` or
  `PageGalaxy`; the visual check of section 7 passes.
- Section 12 records the measured tar, apparent and file numbers before and after each phase.
- D76 appended, PLAN M14 shipped, HANDOFF entry moved with the triggers, RUNBOOK "Pages" written.

## 12. Proposed edits to other files (not applied)

### `docs/DECISIONS.md`, append

The D76 text of section 3, with the measured numbers of phases 1 and 2.

### `docs/PLAN.md` section 5, row before `v0.2+`

| **M14 site size** | the Pages check measures tar bytes with a size report and an 800 MB warning; components on object pages stop scoping per element; markdown twins of object pages to GitHub raw and a host move recorded as measured triggers (`docs/specs/site-size.md`, D76) | 1 day | none: deterministic, no LLM |

### `docs/HANDOFF.md`, open specs

- **Site size** (`docs/specs/site-size.md`, D76, M14). Status: proposed 2026-10-07, nothing implemented. Start with
  phase 1 (`scripts/site-size.ts` and its tests, then the `pages.yml` step); phase 2 is three component style blocks.
  Until it lands the Pages check counts disk blocks (12% over the real size) and the next growth fails a deploy with
  no warning.
