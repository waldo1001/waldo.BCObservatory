---
issue: 8
status: draft
---

# A Learn search result opens the hub that lists it, at the article; Learn moves to the second line

Status: proposed, 2026-10-18. Decision: D98 (reserved, appended to `docs/DECISIONS.md` at ship time). Milestone: M36
(reserved). Owner: waldo.
Scope: the Learn rows of the site's search page (`site/src/scripts/search.ts`), a small module on every page that lands a
hub on one of its Learn articles (`site/src/scripts/learn-target*.ts`, `site/src/layouts/Page.astro`), one CSS rule, tests.
Every claim below was verified against the tree at `87958e0032` (`origin/main`, nightly of 2026-10-18); the numbers
were measured on that commit's `data/index/learn-b7b29e805033.json` and `content/topics/`. Not in scope: the MCP's
Learn hits (agents keep the url first: they read Learn through the Learn MCP, D96), the header's live search and the
palette (neither loads the Learn shard: `site/src/scripts/live-search.ts:54`, `site/src/scripts/palette.ts:98`), Learn
links on object pages and in the explorer (no page of ours to send them to), and anything under `content/`, `data/` or
`pipeline/`.

## 1. Goal

Since D94 a "Learn articles" row on the search page sends its title to learn.microsoft.com and its "where" label to the
observatory hub that lists the article (`site/src/scripts/search.ts:101-106`; pinned by
`tests/unit/live-search.test.ts:105-106`). Searching `IncludeSource` shows three rows whose bold titles all leave the
site, while the cross-referenced page of ours (objects, videos, posts, roadmap around the article) hides behind the small
mono breadcrumb. The owner wants it the other way round: the title stays on the observatory, the breadcrumb goes to Learn.

What the data allows:

- The Learn shard holds 8,054 articles. 3,466 are listed by a hub page of ours (`hubs[i][0]` set); 4,189 sit only in
  one of eight reference sections such as "AL reference › Methods" (`hubs[i][0] === ""`); 399 have neither
  (`h === -1`). There is no observatory page per article (D94 rejected 8,050 pages of our own).
- Every one of the 3,466 appears as a link `- [<title>](<url>)` in its hub's `## Learn pages` list, or `## More Learn
  pages` when the hub has subtopics (`pipeline/render/topic.ts:91-94`; checked by matching `](<url>)` in that section of
  `content/<hub>.md` for all 3,466: 3,466 found, 0 missing). The lists are short as a rule (median 4 items) but reach
  205 on `topics/dev-itpro/integration/web-services/apis/analytics-api-reference`.
- A hub's title is not the article's ("JSON Files for AL Extension Projects" is listed by the hub "JSON files"), so
  sending the title to the hub's top would leave the reader hunting for the line.

After this change:

- A Learn row whose article a hub lists links its **title to that hub, landing on the article's line**: highlighted,
  scrolled into view, its link focused.
- Its **breadcrumb keeps its text and opens the article on learn.microsoft.com**, marked ↗.
- A Learn row without a hub page keeps a **title that opens Learn**, now marked ↗; its section label stays plain text.
- No page grows, no content or data changes, no derive runs: a site-only push, live with the Pages build of the merge.

## 2. Reader- and agent-facing behaviour, after

Search page, `IncludeSource`, "Learn articles" group (titles, labels and hubs as on 2026-10-18):

```
JSON Files for AL Extension Projects                       -> <base>topics/dev-itpro/development/development-environment/configure-the-development-environment/json-files/#learn=dev-itpro/developer/devenv-json-files
… › Configure the development environment › JSON files ↗    -> https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-json-files
learn article  [official - Microsoft]  2026-08-25
The app.json file contains ...

AL code navigation                                         -> <base>topics/dev-itpro/development/get-started/#learn=dev-itpro/developer/devenv-al-code-navigation
Development › Get started ↗                                 -> https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-code-navigation
```

A row without a hub page (`FindSet`, its first Learn hit):

```
Record.FindSet([Boolean]) Method ↗                          -> https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-findset-boolean-method
AL reference › Methods                                      (plain text, as today)
```

A row with neither (`browser settings`: "Setting up your browser"): the title opens Learn, marked ↗; no second line, as today.

- **The ↗ mark** is `<span aria-hidden="true"> ↗</span>` inside the link; the link's accessible name is its visible
  text followed by ", on Microsoft Learn" (`aria-label`), so a screen reader says where it goes and the name still
  starts with what is on screen. Only links that leave the site get it; titles that open a page of ours do not.
- **Same tab**, as every Learn link on the site today (D94, `EvidenceList.astro`, the hubs' own lists).
- **Landing on the hub.** On a page whose URL hash is `#learn=<path>`, the page module finds the first link in `.prose`
  whose resolved `href` is that Learn URL, adds `learn-target` to its `<li>` (the same background as `.prose li:target`,
  `site/src/styles/site.css:145`), scrolls the row to the centre and focuses the link without a second scroll. It runs
  on load and on `hashchange`. No match, or no JavaScript: the hub opens at its top, as a plain hub link does today.
- **Enter in the search field** opens the first row's title (`site/src/scripts/search.ts:271-275`, unchanged): for a
  Learn article with a hub that is now the hub at the article.
- **Unchanged:** every other result type, the "Exactly this" block, the status line, the tabs, the MCP's
  `type learn` hits (url, then `in: <label> (hub: <path>)`).

## 3. Decisions

Draft D98 (appended at ship time; fill in the measured bytes):

> - **D98 A Learn search result opens the hub that lists it, at the article; Learn moves to the second line
>   (2026-10-18, M36).** D94's row sent its title to learn.microsoft.com and linked the hub from its label; the owner
>   wants the reader kept on the observatory first. A row whose article a hub lists (3,466 of 8,054 on 2026-10-18) now
>   links its title to that hub with `#learn=<path under the Learn base>`; the page module finds the article's link in
>   the hub's Learn list by its URL, highlights the row, scrolls it into view and focuses the link. No id is written
>   into the HTML: no hub page changes. The label keeps its text and opens Learn, marked ↗, its accessible
>   name ending ", on Microsoft Learn". The 4,588 articles without a hub page keep a title that opens Learn, now marked
>   ↗ the same way, and a plain label. Cost: <n> bytes on the page module, <n> on the CSS, no page grows. Rejected: an id
>   per Learn row in the hub HTML (198,362 bytes on the Pages tar for what the browser finds from the existing links);
>   a text fragment (`#:~:text=<title>`): title matching, and at least 675 of the 3,466 articles' titles occur earlier
>   in their hub's body, where it would land; the hub's top (a title that is not the hub's, and lists of up to 205
>   items); the Learn address as the second line (the hub's name leaves the row); a page of our own per article (D94).
>   Spec: `docs/specs/learn-row-links.md`.

Rejected, with the reason:

- **An `id` per Learn list item, written at render or at site build.** Robust, but 198,362 bytes on the tar (measured:
  `" id=\"learn=<path>\""` over the 3,466 hub-listed rows) against the owner's bytes-first rule; at render time it would
  also rewrite all 567 hubs in one content commit. The browser can find the row from the links already there.
- **A text fragment `#learn-pages:~:text=<title>`.** Zero code, but it matches text case-insensitively anywhere on the
  page: in at least 675 of the 3,466 cases the article's title occurs earlier in the hub's markdown body (overview, key
  points), and the page header and evidence list add more. It is also title matching, which AGENTS.md rules out.
- **The hub's top.** Zero bytes, but the title ("JSON Files for AL Extension Projects") would open a page with another
  title ("JSON files") and leave the reader to scan a list of up to 205 items.
- **The Learn address as the second line** ("learn.microsoft.com › dev-itpro › …"). Honest about the destination, but the
  hub's name leaves the row and the title would open a hub without saying which.
- **A plain breadcrumb plus a separate "Learn ↗" link.** Clearest, one more element per row; the owner chose the swap.
- **Both links to Learn on rows without a hub.** Two links to one place; the ↗ on the title says enough.
- **Moving `LEARN_BASE` out of `pipeline/render/search.ts`.** Any change under `pipeline/render/**` starts a derive on
  push (D81, `.github/workflows/nightly.yml:9`); a site literal pinned to it by a test keeps this a site-only push.

## 4. Contract

`site/src/scripts/learn-target-core.ts` (new; pure, imported by the search page and the page module, nothing from
`@bc-observatory/search` so the page module stays small):

```ts
/** The base every Learn shard row sits under; literal here, pinned to pipeline/render/search.ts:145 by a test. */
export const LEARN_BASE = "https://learn.microsoft.com/dynamics365/business-central/";
/** The hash a search row puts on its hub link (D98): "#learn=" + the URL under LEARN_BASE (the full URL when it lies
 * outside), encodeURIComponent'd with "/" kept readable. */
export function learnHash(url: string): string;
/** The Learn URL a "#learn=" hash names, or null (another hash, an empty value, a malformed escape). */
export function learnFromHash(hash: string): string | null;
/** The index of the first href that is the same URL as `url` (both through `new URL(...).href`; an unparsable href is skipped), or -1. */
export function learnRowIndex(hrefs: string[], url: string): number;
```

`site/src/scripts/learn-target.ts` (new; DOM):

```ts
/** D98: a search hit's #learn=<path> lands a hub on that article's row in its Learn list. */
export function mountLearnTarget(): void;
// on load when location.hash starts with "#learn=", and on hashchange:
//   url = learnFromHash(location.hash); links = .prose li > a[href^="https://learn.microsoft.com/"];
//   i = learnRowIndex(links.map(a => a.href), url); if i < 0 return;
//   clear .prose li.learn-target; li.classList.add("learn-target"); li.scrollIntoView({ block: "center" });
//   link.focus({ preventScroll: true })
```

`site/src/layouts/Page.astro:82-94`: the one module script imports `mountLearnTarget` and calls it after
`mountObjectPage()`, with a one-line D98 comment (D76: one module for every page; no `<script>` per component).

`site/src/scripts/search.ts`, `rowHtml` for `r.type === "learn"` (every other type unchanged):

| record | title link | second line |
|---|---|---|
| `hub` set | `hrefOf(base, r.hub) + learnHash(r.path)`, no mark | `<a class="sr-path mono-meta" href="<r.path>" aria-label="<path_label>, on Microsoft Learn"><path_label><span aria-hidden="true"> ↗</span></a>` |
| `path_label`, no `hub` | `<r.path>` with `aria-label="<title>, on Microsoft Learn"` and the ↗ span | `<span class="sr-path mono-meta"><path_label></span>` (as today) |
| neither | as the row above | none (as today) |

All text through the existing `esc`. `hrefOf(base, "topics/x")` returns `<base>topics/x/`, so the hash follows the
slash. Update the module comment (`search.ts:8-9`) and the row comment (`search.ts:101-102`) to say D98.

`site/src/styles/site.css:145` becomes `.prose tr:target, .prose li:target, .prose li.learn-target { background:
var(--accent-surface); }`.

Example record and its row (the D94 test's record):

```ts
{ path: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-security-settings-and-ip-protection",
  type: "learn", tier: "official", title: "Resource exposure policy setting", summary: "IP protection for extensions.",
  date: "2024-01-03", path_label: "Development › Configure the development environment", hub: "topics/dev-itpro/configure" }
```
```html
<a class="row-title" href="/b/topics/dev-itpro/configure/#learn=dev-itpro/developer/devenv-security-settings-and-ip-protection">Resource exposure policy setting</a>
<a class="sr-path mono-meta" href="https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-security-settings-and-ip-protection" aria-label="Development › Configure the development environment, on Microsoft Learn">Development › Configure the development environment<span aria-hidden="true"> ↗</span></a>
```

## 5. Test plan (write first)

`tests/unit/learn-target.test.ts` (new):

1. `learnHash(LEARN_BASE + "dev-itpro/developer/devenv-json-files")` is `"#learn=dev-itpro/developer/devenv-json-files"`.
2. A path with a space (in the shard today, no hub): `learnHash(LEARN_BASE + "dev-itpro/developer/datatypes/Not supported/devenv-ocx-data-type")`
   is `"#learn=dev-itpro/developer/datatypes/Not%20supported/devenv-ocx-data-type"`.
3. A URL outside the base: `learnHash("https://learn.microsoft.com/training/modules/x")` keeps the whole URL
   (`"#learn=https%3A//learn.microsoft.com/training/modules/x"`).
4. `learnFromHash` round-trips 1-3 to the input URL; returns null for `""`, `"#field-20"`, `"#learn="`, `"#learn=%E0%A4%A"`.
5. `learnRowIndex([LEARN_BASE + "dev-itpro/developer/devenv-directory-app-json", LEARN_BASE + "dev-itpro/developer/devenv-json-files"], LEARN_BASE + "dev-itpro/developer/devenv-json-files")` is 1;
   the percent-encoded href `LEARN_BASE + "…/Not%20supported/devenv-ocx-data-type"` matches the URL with a raw space (0);
   a URL not in the list, or an absolute site link (`https://waldo1001.github.io/waldo.BCObservatory/topics/x/`), gives -1; an href `new URL` cannot parse is skipped, not thrown.
6. `LEARN_BASE` equals `LEARN_BASE` of `pipeline/render/search.ts` (import both).

`tests/unit/live-search.test.ts:93` (the D94 Learn test), rewritten for D98:

7. The hub-listed record above renders the two links of section 4 exactly (title to the hub with the hash, no ↗; label
   to Learn with the aria-label and the ↗ span); the old assertions at :105-106 go.
8. A record with `path_label: "AL reference › Methods"` and no `hub`
   (`record-findset-boolean-method`, "Record.FindSet([Boolean]) Method"): the title opens Learn with
   `aria-label="Record.FindSet([Boolean]) Method, on Microsoft Learn"` and the ↗ span; the label is
   `<span class="sr-path mono-meta">AL reference › Methods</span>`.
9. A record with neither: the title as in 8, no `sr-path` in its row.
10. The topic row in the same results keeps `<a class="row-title" href="/b/topics/dev-itpro/configure/">` with no
    `aria-label` and no ↗ (the existing assertion at :108 stays).

## 6. Tasks

One phase; it ships alone. No content commit, no derive, no data change.

1. Write tests 1-10; run `npm test`, see them fail.
2. `site/src/scripts/learn-target-core.ts`: `LEARN_BASE`, `learnHash`, `learnFromHash`, `learnRowIndex`.
3. `site/src/scripts/search.ts`: the learn branch of `rowHtml` per section 4; the two comments.
4. `site/src/scripts/learn-target.ts`: `mountLearnTarget`; wire it in `site/src/layouts/Page.astro`.
5. `site/src/styles/site.css:145`: add `.prose li.learn-target`.
6. Verification (section 7), then the docs edits of section 12 with the measured bytes.

## 7. Verification

- `npm run typecheck && npm test`.
- Site build: Node >= 22.12 (`npm run site:build`; on waldo's Mac prepend nvm's v22 bin, the shell defaults to v20).
  Measure with `npx tsx scripts/site-size.ts site/dist` before and after: no HTML page grows; report the page-module
  and CSS deltas in D98 (expect well under 1 KB each).
- In a browser (or headless Playwright against `site/dist` served under `/waldo.BCObservatory/`):
  1. `search/?q=IncludeSource`: the "JSON Files for AL Extension Projects" title's href ends in
     `configure-the-development-environment/json-files/#learn=dev-itpro/developer/devenv-json-files`; the breadcrumb's
     href is the learn.microsoft.com URL and shows ↗.
  2. Click the title: the hub "JSON files" opens with the article's `<li>` carrying `learn-target`, in view, its link
     focused (`document.activeElement`).
  3. `search/?q=FindSet`: the first Learn row, "Record.FindSet([Boolean]) Method ↗", opens Learn; "AL reference › Methods" is plain.
  4. An article near the end of `topics/dev-itpro/integration/web-services/apis/analytics-api-reference` (205 items):
     its row lands centred.
  5. Enter in the search field with `IncludeSource` opens the hub at the first Learn row's article (or the first row's
     own target when another group leads).
  6. A hub opened with `#learn=nope` or with JavaScript off: opens at its top, no error in the console.

## 8. Later, not in this spec

- The same order in the MCP's `type learn` hits (hub first). Agents read Learn through the Learn MCP (D96); the url
  first is right for them.
- A hub page that says which article sent the reader ("You came for: …") if the highlight proves too quiet.

## 9. Risks and open questions

- **Focus on load.** Moving focus to the article's link is the destination of the reader's own click; it also lets Tab
  continue from there. Default: focus with `preventScroll`.
- **The ↗ glyph in the mono font.** If the site's mono face lacks U+2197 the fallback font draws it. Default: accept;
  check it once on the built page.
- **Shard and hub out of step.** Both come from the same derive commit, so a hub-listed article is in its hub's list;
  if not, the hub opens at its top. Default: accept.
- **A title that leaves the site sits next to titles that do not.** The ↗ is the only difference in the Learn group.
  Default: accept (the owner chose it).

## 10. Files

New: `site/src/scripts/learn-target-core.ts`, `site/src/scripts/learn-target.ts`, `tests/unit/learn-target.test.ts`.
Changed: `site/src/scripts/search.ts`, `site/src/layouts/Page.astro`, `site/src/styles/site.css`,
`tests/unit/live-search.test.ts`, `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`, this spec.

## 11. Definition of Done

- [ ] Tests 1-10 pass; `npm run typecheck` is clean.
- [ ] The site builds; `scripts/site-size.ts` shows no HTML page grew; the module and CSS deltas are in D98.
- [ ] Section 7's browser checks 1-6 pass.
- [ ] Nothing under `content/`, `data/` or `pipeline/` changed (no derive on push).
- [ ] D98 appended to `docs/DECISIONS.md`; the PLAN M36 row says shipped; the HANDOFF entry moves from "Open specs" to
      "Where things stand"; this spec's `status: implemented`, its Status line and section 12 "Built, deviations".

## 12. Proposed edits to other files (not applied)

- `docs/DECISIONS.md`: append D98 from section 3 with the measured bytes.
- `docs/PLAN.md` section 5, the M36 row: change "proposed" to "shipped <date>".
- `docs/HANDOFF.md`: move the entry to "Where things stand" as "Shipped <date>, live after its Pages build (site only,
  no derive)".
- `AGENTS.md`, `CONTENT-NOTICE.md`: no change (no data, no content policy touched).
