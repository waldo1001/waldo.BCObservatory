# Wayfinding: one name per section, crumbs that follow the sections, a header that fits, instruments on the home page

Status: implemented, 2026-10-12 (section 12 records what was built and where it differs). Decision: D90 (appended 2026-10-12). Milestone: M28. Owner: waldo.
Scope: items A1, A2, A3, A4 (the home part), D1, F5 and F6 of `docs/research/2026-10-12-ux-review.md`, under D88's
byte rule. The header of every page (`site/src/layouts/Base.astro`, `site/src/styles/site.css`,
`site/src/scripts/chrome.ts`), the breadcrumb and the identity row (`site/src/layouts/Page.astro`,
`site/src/layouts/List.astro`), one map of section names (`pipeline/lib/sections.ts`, new) that every surface naming a
section reads, an Instruments strip with live numbers on the home page and on `/objects/`, the height of the home
galaxy, and the actions row of video and post pages. Every claim below was verified against the tree at `bb3a37e016`
on 2026-10-12. Bytes were measured on the build of that tree with the 2026-10-12 content
(`waldo.BCObservatory-ux/site/dist`, Node 22.23.1, 28,899 HTML files, 695.3 MB tar by `scripts/site-size.ts`);
positions on the live site, which serves the same build (both load `_astro/Base.2hTNpcAM.css`), in a browser at
emulated viewports, `getBoundingClientRect` after `document.fonts.ready`. Data numbers come from the committed `data/`
of `bb3a37e016`. Not in scope: the galaxy's lens bar (D3), object page navigation (B1 to B8), list sharding (C1), the
digest index (C3), the MCP (G1, G2), a nav entry for releases or apps (section 8).

## 1. Goal

**A1, the header.** Height of `.site-header` on Table 18 "Customer" (inner page, with the week pill) and on the home
page (no pill, D71):

| viewport | inner page | home page | layout |
|---|---|---|---|
| 375 × 812 (phone, DPR 2) | 215 px | 176 px | wordmark, nav in two rows, pill, search row |
| 768 × 1024 | 151 px | | three rows |
| 900 × 900 | 151 px | | three rows |
| 1024 × 768 | 121 px | | two rows |
| 1280 × 800 | 120 px | 122 px | two rows, the search alone on the second |
| 1440 × 900 | 122 px | 74 px | two rows inside, one on the home page |
| 1536 × 900 | 122 px | | two rows |

- On a phone the first screen of Table 18 is all chrome: header 0 to 215, crumb 239 to 285 (two lines), identity 305
  to 356, title, stat chips, actions ending at 765 of 812. The first section starts below the fold.
- One header row needs 1,520 px on an inner page: wordmark 180 + nav 651 (11 links, 12 px gaps) + pill 210 + search
  form 371 (input 240, Theme 75, finder 40) + three 20 px gaps + 2 × 24 px padding. The header's wrap stops at 1,440
  px (`site.css:36`, `max(var(--page-max), 1440px)`), so inner pages never get one row at any width. The D84 note
  (`Base.astro:12-14`) says one row at 1440; that held before D80 added "· 35 PRs" to the pill (`Base.astro:51`) and
  D88 added the word "Theme" (`site.css:65`).
- The header jumps between pages: 74 px on the home page, 122 px inside, at 1440.
- The header is on all 28,899 HTML files and weighs 1,604 bytes on Table 18 (46,350,420 bytes in all, average
  1,603.9). Two controls in it do nothing without script: the theme button (119 bytes, `Base.astro:57`, wired in
  `chrome.ts:29-36`) and the object finder button (113 bytes, `Base.astro:58`, wired in `palette.ts:140`). The search
  label is a 61-byte `<label class="skip">` (`Base.astro:55`); the pill keeps a 43-byte `title` (`Base.astro:48`).

**A2, one section, several names.** At `bb3a37e016`:

| section | nav (`Base.astro:15-17`) | crumb on its pages | index title and crumb | index h1 | home card (`index.astro:19-28`) | About row (`about.ts:91-100`) | root `llms.txt` (`llms.txt.ts:30-40`) | section `llms.txt` h1 (pipeline) |
|---|---|---|---|---|---|---|---|---|
| topics | Topics | Topics | Topics | 605 topics | Topic hubs | Topic hubs | Topics | topics |
| objects | Objects | AL objects | AL objects | 25,646 objects | AL objects | AL objects | AL objects | AL objects |
| localizations | Countries | Localizations, linked to the galaxy | Localizations | 22 country layers | Localizations | Localizations | Localizations | localizations |
| features | Roadmap | Roadmap | Features | 80 features | Roadmap | Roadmap features | Features | features |
| changes | Changes | Code changes | Code changes | 1,083 changes | Code changes | Code changes | Code changes | code changes |
| videos | Videos | Videos | Videos | 616 videos | Videos | Videos | Videos | videos |
| posts | Posts | Posts | Community posts | 601 posts | Community posts | Community posts | Community posts | community posts |
| digests | Weekly | Weekly | Weekly digests | 5 weeks | Weekly | Weekly digests | Weekly digests | weekly digests |
| sources | Sources | Sources, linked to the galaxy | Sources | 33 sources | Sources | Sources | Sources | sources |
| apps | none | Apps | First-party apps | 96 apps | no card | First-party apps | First-party apps | first-party apps |
| releases | none | Releases | Releases | 63 AL Language extension versions | AL extension releases | no row | Releases | releases |

Counts are `git ls-files content/<section>/*.md` at `bb3a37e016`. The index crumb is derived from the page title
(`List.astro:11`); detail crumbs are passed per route (`objects/[...id]/index.astro:53`, `features/[id]/index.astro:23`,
`apps/[slug]/index.astro:26`, `digests/[id]/index.astro:17`, ...). The fallback of `sources/llms.txt.ts:8` says
"weekly sources". Instruments have the same problem: "Events" (crumb, `events/index.astro:5`) and "Event explorer"
(title); "Coverage" (title) and "Coverage heatmap" (h1, `/objects/` list); "Drift" (title, About card) and "Learn and
the code" (h1, `/objects/` list).

**A3, crumbs mix two trees.** `Page.astro:29-30` puts the galaxy system between "Galaxy" and the section:
"Galaxy / Finance / Topics / Business functionality / Finance" on the Finance topic hub, "Galaxy / Sales &
Receivables / AL objects / tables / Table 18 "Customer"" on Table 18. Not in the review: the same line drops any
crumb whose label equals the system's, so a localization page reads "Galaxy / Localizations / Belgium (BE)" with
"Localizations" linking to `#system=localization` in the galaxy, and a source page "Galaxy / Sources / Aardvark Labs"
with "Sources" linking to `#system=sources`. Neither has a crumb to its section index. Instrument pages are two levels
deep with no parent ("Galaxy / Version lens", "Galaxy / BC28 to BC29"); the neighbourhood explorer says "Galaxy / AL
objects / Neighbourhood" (`neighbourhood/index.astro:33`). The system crumb averages 78.5 bytes on 28,751 pages.

**A4 and D1, the home page.** The galaxy is `calc(100svh - var(--hdr-h, 72px))` (`index.astro:34`, D70): at 1440 ×
900 it runs from 74 to 900 and "Newly lit" starts at 964; at 1280 × 800 from 122 to 800. Nothing on the first screen
says that Newly lit, Sections and About follow. The instruments have no numbers anywhere and sit at the end of
`/objects/` (`objects/index.astro:37-46`, after a full atlas), which the footer points to (`Base.astro:70`).

**F5, F6.** "Open in Claude" is the primary button on every page type (`Page.astro:50`), also on the 616 video and 601
post pages whose context action plays or shows the item in the page ("Watch here", "Read it here", `opens: "stage"`).
Object titles carry AL quotes (`Table 18 "Customer"`).

**Review claims that did not hold** (also in the report): "the header ends at about 430 of 812 px at 375" is 215 CSS
px; 430 is device pixels at DPR 2. "One row only from 1440" holds for the home page only; inner pages are two rows at
every width from 1024 up, three at 768 and 900, five lines on a phone. "Breadcrumbs say Features": detail pages say "Roadmap"; only the index
crumb says "Features". "A strip docked in the galaxy's bottom fade": the galaxy has no bottom fade (`.g-fade` is a
full overlay for transitions, `Galaxy.astro:269`); its bottom edge carries the key (`.g-legend`, `Galaxy.astro:141`)
and the level line (`.g-level`, `Galaxy.astro:168`). "25,666 object pages": 25,646 object pages plus 20 index pages
under `objects/`. "28,850 pages": 28,899 HTML files carry the header; 28,850 are information pages (`Page.astro`).

After this change:

- One map names every section; nav, crumbs, eyebrows, page titles, h1 nouns, home cards, About's counts and both
  kinds of `llms.txt` read it. The nav says AL objects, Localizations, Code changes, Weekly digests.
- Crumbs follow the section tree: Galaxy / section / parents / page. The galaxy system is a chip in the identity row,
  linked to the system in the galaxy. Localization and source pages link to their section index again. Instrument
  pages sit under Galaxy / Instruments.
- Under 900 px the header is a 56 px bar: wordmark, search field, "Browse". Browse opens a sheet with the eleven
  sections in three groups, the week pill and the Theme button; it works without script (the HTML popover API).
- From 900 px the header is two tiers on every page, the home page included: wordmark, week pill, search, Theme and
  finder; then the nav on one line in three groups. About 94 px at every width (today 120 to 151, and 74 or 122 at
  1440 depending on the page).
- The home page shows eight instruments with last night's numbers right under the galaxy, and a "Further down" line
  at the bottom of the first screen; the galaxy gives up 48 px for it. `/objects/` shows the same cards; the footer
  and the Instruments crumb point at the home strip.
- Video and post pages make "Watch here" and "Read it here" the primary button; every other page keeps "Open in
  Claude". Object titles keep their quotes.
- Every object page gets 227 bytes lighter; the site 6.26 MB lighter (section 4.7).

## 2. Reader- and agent-facing behaviour, after

### 2.1 The names

One name per section, used verbatim as the nav label, the crumb, the index eyebrow, the page title
(`<name> · BC Observatory`), the home card title, the About row label, the root `llms.txt` link label and the section
`llms.txt` heading (`# BC Observatory: <name>`). The index h1 counts items with the noun.

| id | name | h1 (count noun) | nav group |
|---|---|---|---|
| topics | Topics | 605 topic hubs | 1 |
| objects | AL objects | 25,646 AL objects | 1 |
| localizations | Localizations | 22 country layers | 1 |
| features | Roadmap | 80 roadmap features | 1 |
| changes | Code changes | 1,083 code changes | 2 |
| videos | Videos | 616 videos | 2 |
| posts | Posts | 601 community posts | 2 |
| digests | Weekly digests | 5 weekly digests | 2 |
| sources | Sources | 33 sources | 2 |
| mcp | MCP | (own h1, unchanged) | 3 |
| about | About | (own h1, unchanged) | 3 |
| apps | First-party apps | 96 first-party apps | not in the nav |
| releases | AL extension releases | 63 AL Language extension versions | not in the nav |
| instruments | Instruments | (the home strip, `#instruments`) | not in the nav |

Nav order (groups by spacing, no visible group labels): Topics, AL objects, Localizations, Roadmap | Code changes,
Videos, Posts, Weekly digests, Sources | MCP, About. The digests eyebrow keeps its RSS link ("Weekly digests · RSS").

The home cards and About's "What is in it today" list the same eleven content sections in this order: Topics, AL
objects, First-party apps, Localizations, Roadmap, Code changes, AL extension releases, Videos, Posts, Weekly digests,
Sources. The home page gains a First-party apps card; About gains an AL extension releases row. Card and row text is
one blurb per section (section 4.1).

Instruments, one name each, used as page title, h1, crumb, card title and in About's links:

| id | name | page |
|---|---|---|
| versions | Version lens | `code/versions/` |
| deprecations | Deprecation radar | `code/deprecations/` |
| events | Event explorer | `events/` |
| neighbourhood | Neighbourhood explorer | `neighbourhood/` |
| countries | Country heatmap | `localizations/#heat` (the h2 of that section becomes "Country heatmap") |
| coverage | Coverage heatmap | `coverage/` |
| drift | Learn drift | `drift/` (h1 "Learn drift"; the lede keeps saying how Learn and the code are joined) |
| week | This week | `#lens=landed` on the home page |

About's persona link "Drift" (`about.ts:37`) becomes "Learn drift".

Search groups and tabs that stand for a section use its name (`site/src/scripts/search.ts:28-42`, the tabs of
`site/src/pages/search/index.astro:6`): "Community posts" becomes "Posts", "Digests" becomes "Weekly digests";
Roadmap, Videos, AL objects, Code changes, Localizations and Sources already match. The labels stay literal strings
in the search bundle (no import of the map into the browser) and a test pins them to the map. "Start here",
Fields, Events, Procedures, Enum values and Other pages are result kinds, not sections, and stay.

### 2.2 The header

Under 900 px (phones and portrait tablets), with or without script:

- One bar, 56 px plus the 1 px border: "BC Observatory" on the left (the "unofficial, made by waldo" line is hidden;
  About is in the sheet and the footer says it), the search field in the middle taking the free width (16 px text, so
  iOS does not zoom), and a button "Browse" on the right. While the search field has focus the wordmark hides and the
  field takes its place.
- "Browse" opens a sheet from the bottom of the screen (the place the galaxy's Questions sheet already uses under 720
  px, D70): the week pill on top ("6 new this week · 35 PRs", both halves links as today), then the eleven sections
  in two columns with 44 px rows, each group starting a new row (Topics, AL objects / Localizations, Roadmap; Code
  changes, Videos / Posts, Weekly digests / Sources; MCP, About), then the Theme button ("◐ Theme"). The current
  section is underlined as today. The object finder button is not in the sheet: the search field answers `t18` and
  `cu 80` the same way, and Ctrl+K needs a keyboard.
- The sheet closes on Esc, on a tap outside it and on a second press of Browse (native popover behaviour, no
  script); after Esc the focus is on Browse. Tab from Browse moves into the sheet (the popover follows its invoker in
  the focus order).
- On the home page the sheet has no pill (D71: the galaxy's lens chip is the control there).

From 900 px, every page:

- Tier 1: wordmark with its "unofficial, made by waldo" line, the week pill next to it, then, right-aligned, the
  search field, "◐ Theme" and the finder button ("⌘K" on Apple platforms, "Ctrl+K" elsewhere, D88).
- Tier 2: the eleven sections on one line, 14 px as today, a wider gap with a thin rule between the three groups.
- Height about 94 px at every width, the same on the home page and inside. The nav needs 658 px of text plus gaps,
  measured with the site's font: it fits one line from 900 px.

Without script: the bar, Browse and the sheet work (popover is declarative); the Theme and finder buttons are absent,
as they do nothing without script today. In a browser without the popover API (before Chrome 114, Safari 17, Firefox
125) the Browse button is hidden and the nav shows in the bar as a wrapping row, like the 2026-10-12 phone header.

### 2.3 Crumbs and the system chip

| page | today | after |
|---|---|---|
| Table 18 | Galaxy / Sales & Receivables / AL objects / tables / Table 18 "Customer" | Galaxy / AL objects / tables / Table 18 "Customer" |
| Finance topic | Galaxy / Finance / Topics / Business functionality / Finance | Galaxy / Topics / Business functionality / Finance |
| Belgium | Galaxy / Localizations (to `#system=localization`) / Belgium (BE) | Galaxy / Localizations (to `/localizations/`) / Belgium (BE) |
| Aardvark Labs | Galaxy / Sources (to `#system=sources`) / Aardvark Labs | Galaxy / Sources (to `/sources/`) / Aardvark Labs |
| a post | Galaxy / Copilot & Agents / Posts / Aardvark Labs / title | Galaxy / Posts / Aardvark Labs / title |
| a release | Galaxy / AL Development / Releases / AL Language extension 16.0 | Galaxy / AL extension releases / AL Language extension 16.0 |
| an app | Galaxy / Copilot & Agents / Apps / AgentDesignExperience | Galaxy / First-party apps / AgentDesignExperience |
| a digest | Galaxy / Weekly / BC Observatory weekly: 2026-W41 | Galaxy / Weekly digests / BC Observatory weekly: 2026-W41 |
| `/objects/table/` | Galaxy / table objects | Galaxy / AL objects / tables |
| `/code/versions/28__29/` | Galaxy / BC28 to BC29 | Galaxy / Instruments / Version lens / BC28 to BC29 |
| `/events/` | Galaxy / Events | Galaxy / Instruments / Event explorer |
| `/neighbourhood/` | Galaxy / AL objects / Neighbourhood | Galaxy / Instruments / Neighbourhood explorer |
| `/changes/week/` | Galaxy / Code changes this week | Galaxy / Code changes / This week |
| `/changes/upcoming/` | Galaxy / Upcoming code changes | Galaxy / Code changes / Upcoming |

The root stays "Galaxy" (the home page is the galaxy, D70). "Instruments" links to the home strip (`#instruments`,
phase 3; until then to `/objects/#instruments`). Instrument pages set no nav entry as current and their eyebrow says
"Instruments".

The identity row gains the system as a chip right after the type label: a 7 px dot in the system colour and the system
label in the mono 12 px of `.chip-sys`, linked to `#system=<id>` in the galaxy, underlined on hover: "table ● Sales &
Receivables [official - Microsoft] [derived - ...]". The type label keeps its system colour. No chip where the system
is the section itself: localization pages (system `localization`) and source pages (system `sources`). An object of
a country layer whose system is `localization` does get the chip. The locator caption keeps naming the system
(`locator.ts:46`).

### 2.4 Instruments

The home page, right under the galaxy and the "Further down" line: `<h2 id="instruments">Instruments <small>numbers
from the last nightly</small></h2>` and eight cards in a grid (four per row from 1100 px, two from 560, one below).
Each card is one link: the name, a large number, one line of caption. With the data of `bb3a37e016`:

| card | number | caption | link |
|---|---|---|---|
| Version lens | 156 | objects changed from BC29 to BC30 (vNext), 27 added, 2 removed | `code/versions/` |
| Deprecation radar | 1,225 | obsolete elements in BC29, 1,055 with their cleanup due | `code/deprecations/` |
| Event explorer | 26,296 | published events in BC29, 5,163 first-party subscriptions | `events/` |
| Neighbourhood explorer | 20,561 | code relations between 8,521 objects in BC30 (vNext) | `neighbourhood/` |
| Country heatmap | 1,878 | W1 objects replaced by 22 country layers, across 38 areas of the code | `localizations/#heat` |
| Coverage heatmap | 15 of 100 | galaxy system and pillar cells with nothing in them: no Learn page, AL object, video, post or roadmap feature | `coverage/` |
| Learn drift | 42 | obsolete objects Learn still documents; 40 new pages and reports without docs | `drift/` |
| This week | 6 new · 35 PRs | videos and posts, and merged pull requests, of the last 7 days; open them in the galaxy | `#lens=landed` |

Measured: `data/code/diffs/version/29__30.json` `summary.by_change` (changed 156, added 27, removed 2; BC30 is
`vnext` in `config/versions.json`); `data/code/deprecations/29.json` `count` 1,225, items with `clean_version` at or
below 29: 47 + 48 + 673 + 171 + 116 = 1,055 (the digest's `cleanup_due` rule, `pipeline/render/digest.ts:74`; the
2026-W41 digest says the same 1,055); `data/index/events.json` `major` 29, `count` 26,296, `subscriptions` 5,163;
`data/code/relations/30.json` 20,561 edges over 8,521 distinct objects; `data/code/diffs/country/matrix.json` 22
countries, 38 areas with a non-zero cell, `replaced` summed 1,878 (the localization pages' `replaced_objects` sum to
the same 1,878); `data/index/coverage.json` 20 systems × 5 pillars, 15 cells at 0; `data/code/drift.json` 42
`obsolete_documented`, 40 `new_undocumented`; `data/graph/landed.json` 6 items, 35 changes (the header pill's
numbers). Each card takes the major the instrument page opens on: the radar's first `narrative_order` major with a
file (`code/deprecations/index.astro:10`), the events file's own major, the explorer's newest relations major
(`explorer.ts:60`), the newest version pair.

"This week" links into the galaxy's this-week lens on the home page (the hash changes, the galaxy scrolls into view
and lights the week, `galaxy.ts:1400`); it is not the weekly digest, whose running week is empty on a Monday (2026-W42
on 2026-10-12: all zeros), while the last 7 days never are. The digest stays one click away in Newly lit's heading.

`/objects/#instruments` shows the same eight cards in place of the plain list (`objects/index.astro:37-46`), with the
line "The same instruments as on the home page." The footer's "Instruments" link points at `#instruments` on the home
page.

### 2.5 The home galaxy (D1)

From 481 px the galaxy is `max(420px, calc(100svh - var(--hdr-h) - 48px))`; under 480 it stays a static strip with the
panel as the page (D88's D5). A 48 px line follows it at every width:

`Further down: Instruments · Newly lit · Sections · About`

each word a link to `#instruments`, `#lit`, `#sections`, `#agents`. At 1440 × 900 the line sits at 852 to 900, the
bottom of the first screen. Order below: Instruments, Newly lit, Sections, About. Full screen (`F`) still gives the
galaxy the whole viewport. `parseHash` ignores these four hashes (`galaxy-core.ts:9-18`: only system, star, lens, q,
view, tilt and kinds), so a jump never moves the galaxy.

### 2.6 Actions (F5) and titles (F6)

Where the context action opens the page's own stage (`context.opens === "stage"`: "Watch here" on 616 video pages,
"Read it here" on 601 post pages), it is the first and primary button, then "Open in Claude", then the `.md` button.
Every other page keeps today's order: "Open in Claude" (primary), `.md`, the context link. The stage script finds the
button by `[data-stage-open]`, not by position (`source-stage.ts:258`), so the order change needs no script change.
Object titles keep their quotes.

### 2.7 Agents

- The root `llms.txt` lists the sections under their names in the home order: "[Roadmap](.../features/llms.txt): 80
  Business Central features ..." (descriptions unchanged).
- Each section `llms.txt` starts `# BC Observatory: <name>` ("# BC Observatory: Roadmap", "# BC Observatory: AL
  extension releases"); written by the pipeline renderers on the next nightly's derive stage, 11 small files.
- Markdown twins, the MCP server and the search index do not change.

## 3. Decisions

**D90 (draft). Wayfinding: one name per section, crumbs that follow the sections, a header that fits every width,
instruments with numbers on the home page.** Items A1 to A4, D1, F5 and F6 of the UX review of 2026-10-12, inside
D88's rule that nothing adds bytes to object pages. (1) One map, `pipeline/lib/sections.ts`, names each section and
instrument once; the nav, crumbs, eyebrows, titles, h1 nouns, home cards, About's counts and both kinds of `llms.txt`
read it. The nav says the section's own name (AL objects, Localizations, Code changes, Weekly digests), which reverses
D84's short labels: the two-tier header has the room. (2) Crumbs follow the section tree (Galaxy / section / parents /
page); the galaxy system leaves the crumb for a chip in the identity row, linked into the galaxy, except where the
system is the section (localizations, sources), whose pages get their section crumb back. Instrument pages sit under
Galaxy / Instruments. (3) Under 900 px the header is a 56 px bar (wordmark, search, Browse); Browse opens the sections,
the week pill and the Theme button as a bottom sheet through the HTML popover API, no script needed. From 900 px it
is two tiers on every page (wordmark, pill, search and tools; then the nav in three groups), about 94 px. The theme
and finder buttons are built by `chrome.ts`, as they work only with script (D88's rule for the video dialog); the
search label is an `aria-label`; the pill loses its `title`. (4) Eight instruments with last night's numbers sit
under the home galaxy and replace the plain list on `/objects/`; the footer and the Instruments crumb point at the
home strip. (5) The home galaxy leaves 48 px for a "Further down" line naming what follows (amends D70: the galaxy no
longer fills the viewport). (6) Video and post pages make their stage action primary; "Open in Claude" stays primary
everywhere else. (7) Object titles keep their AL quotes. Measured on the 2026-10-12 build: 227 bytes less on every
object page, 6.26 MB less in all.

Rejected, with the reason:

- A Browse menu built by script (zero bytes): if the module fails the nav is gone, and before it runs the full nav
  shows and then collapses on every phone page load.
- Hiding the nav under `@media (scripting: enabled)`: the same failure when the module does not load.
- A `details` wrapper around the nav: it needs `open` on wide screens and a script to close it on phones, a flash
  either way.
- The checkbox toggle: announced as a checkbox, not a menu.
- A sticky phone bar: 56 px of every scrolled screen, on pages that are dozens of screens long (Table 18 is 42,090
  px tall at 1280 × 900, `document.documentElement.scrollHeight` on the live site); not asked.
- One header row on laptops: needs 1,520 px measured; it would cost the pill or the search field.
- Three dropdown menus (Browse, Follow, Use) on laptops: hides eleven sections behind clicks on widths where all
  eleven fit one line.
- Visible group labels: as text they add bytes on every page, as generated content inside a link they are read as
  part of the link.
- Short names everywhere (Objects, Countries, Changes, Weekly): "Changes" and "Weekly" do not say what they hold; the
  URL, the MCP tool, the galaxy system and the section title all say localization.
- Keeping the system in the crumb as a prefix or a second line: still two trees in one line.
- A strip docked inside the galaxy: it collides with the key and the level line at the bottom edge, and under 720 px
  the galaxy's panel covers the bottom 55%.
- Capping the galaxy at 70svh: at 1440 × 900 it takes the canvas from 826 to 630 px, a quarter, and still says
  nothing about what follows.
- "Source on GitHub" as the object primary: it leaves the site for the raw file of one major; the page is the
  curated reading and the agent hand-off is the product (D02).
- Unquoted titles (F6): `Table 18 "Customer"` is how AL writes a name with spaces and how the title reads in the
  tab, the crumb, search, the twin and `get_object`; an h1-only variant is the fourth name A2 removes; all titles
  would rewrite 25,646 pages.
- An Instruments nav entry: about 50 bytes on every page (1.4 MB); the footer and the crumb reach the strip.
- "Home" as the root crumb: D70 calls the home page the galaxy; churn for no reader gain.
- The weekly digest as the "This week" card: its running week is empty every Monday.

## 4. Contract

### 4.1 `pipeline/lib/sections.ts` (new, no imports, like `pipeline/lib/systems.ts`)

```ts
export type SectionId = "topics" | "objects" | "apps" | "localizations" | "features" | "changes" | "releases"
  | "videos" | "posts" | "digests" | "sources" | "mcp" | "about" | "instruments";
export interface Section {
  id: SectionId;
  path: string;                 // under the site base: "features/"; instruments: "objects/#instruments" (phase 1), "#instruments" (phase 3)
  name: string;                 // the one name
  noun?: [string, string];      // singular, plural, for the index h1
  group?: 1 | 2 | 3;            // nav group; absent = not in the nav
  blurb?: string;               // home card and About row; present = a content section
  system?: string;              // the galaxy system that is this section: no system chip on its pages
}
export const SECTIONS: readonly Section[];          // nav order first, then apps, releases, instruments
export function section(id: string): Section;       // throws "unknown section <id>"
export function navSections(): Section[];           // the 11 with a group, in nav order
export function navGroupStarts(): number[];         // 1-based nav index of each later group's first entry: [5, 10]
export function contentSections(): Section[];       // the 11 with a blurb, in home and About order
export function countLabel(id: SectionId, n: number): string;  // "80 roadmap features", "1 topic hub"
export function llmsTitle(id: SectionId): string;   // "# BC Observatory: Roadmap"
export interface Instrument { id: string; name: string; path: string }
export const INSTRUMENTS: readonly Instrument[];    // the 8 of section 2.1, strip order
export function instrument(id: string): Instrument; // throws on unknown
```

The records (names and nouns as in 2.1; `system` only on localizations `"localization"` and sources `"sources"`).
Blurbs, exact (the home card texts of `index.astro:19-28`, the changes one from `about.ts:98` because the section now
holds three repositories, D82):

| id | blurb |
|---|---|
| topics | Seeded from the Microsoft Learn tables of contents. What Learn documents per topic, linked to Learn. |
| objects | Every W1 and first-party app object of BC28 to BC30, from the code: fields, events, procedures, versions, countries. |
| apps | Microsoft's first-party apps with their objects, Learn hubs, videos and posts. |
| localizations | What each country layer adds to or changes in W1, down to the field. |
| features | Business Central on the Microsoft 365 roadmap, with the videos and Learn pages that cover each feature. |
| changes | Merged pull requests of Microsoft's repositories, joined to the objects they changed. |
| releases | Microsoft's changelog of the AL Language extension, one page per version, with what was added to it later. |
| videos | Sessions as timestamped evidence: chapters, key points, quotes that deep-link to the second. |
| posts | Blog posts as derived summaries with short quotes and a link to the original. |
| digests | What changed each week, with a deprecation radar. Also as RSS. |
| sources | Each blog and channel with its footprint and flight path through the galaxy. |

Example record: `{ id: "features", path: "features/", name: "Roadmap", noun: ["roadmap feature", "roadmap
features"], group: 1, blurb: "Business Central on the Microsoft 365 roadmap, with the videos and Learn pages that cover
each feature." }`.

### 4.2 `site/src/lib/crumbs.ts` (new, pure; imports `sections.ts` only)

```ts
export interface Crumb { label: string; href?: string }
/** Galaxy / section / parents / leaf. With no leaf the section is the current page (no href). */
export function trail(base: string, section: SectionId | null, parents: Crumb[], leaf: string | null): Crumb[];
/** The identity chip, or null: no system, or the system is the section itself. */
export function systemChip(system: string | null, section: SectionId | null, label: string | null, base: string): Crumb | null;
/** F5: "context" when the context action opens the page's own stage, else "claude". */
export function actionOrder(context?: { opens?: "stage" } | null): "context" | "claude";
```

`Page.astro` (replacing lines 28-30): `const all = trail(base, section, crumbs, String(fm.title))`; `crumbs` now holds
only the parents below the section (objects: the type; topics: the parent topic; posts: the source). The identity div
carries `style="--sys:var(--sys-<id>)"` when the page has a system; the type label drops its own `style`
(`Page.astro:39`) and is coloured by `.identity .type-label { color: var(--sys) }`; the chip renders after the type
label as `<a href="{base}#system={id}">{label}</a>`, styled by `.identity > a` in `site.css` (the identity row has no
other link: `Badges.astro` renders spans). Actions (`Page.astro:49-55`): when `actionOrder(context) === "context"` the
context link gets `class="btn primary"` and comes first, Open in Claude gets `class="btn"`; otherwise as today.

`List.astro` props: `section?: SectionId`, `parents?: Crumb[]`, `crumb?: string` (the leaf; absent on a section
index), `title`, `description`. It renders `trail(base, section ?? null, parents ?? [], crumb ?? null)`. The section's
`aria-current` in the nav stays driven by `section`, except `instruments`, which matches no nav entry.

Routes: every detail route stops passing its section crumb (`releases/[id]:24`, `posts/[...id]:21` keeps the source,
`changes/[...id]:21`, `localizations/[id]:18`, `features/[id]:23`, `objects/[...id]:53` keeps the type as
`{ label: "<type>s", href: "<base>objects/<type>/" }`, `videos/[id]:21`, `sources/[id]:28`, `digests/[id]:17`,
`apps/[slug]:26`, `topics/[...id]:18` keeps the parent topic). Section index pages (topics, features, objects,
localizations, videos, posts, changes, digests, sources, apps, releases) take eyebrow, title and h1 from the map
(`countLabel`). `objects/[type]/index.astro` passes `section="objects"`, `crumb="<type>s"`. Instrument pages
(`code/versions/index.astro`, `code/versions/[pair]/index.astro` with parent Version lens, `code/deprecations/`,
`events/`, `coverage/`, `drift/`, `neighbourhood/` through its own `Breadcrumb` call at line 33) pass
`section="instruments"`, title and h1 from `INSTRUMENTS`, eyebrow "Instruments". `changes/week.astro` and
`changes/upcoming/index.astro` pass `section="changes"` with leaves "This week" and "Upcoming".

### 4.3 `site/src/lib/instruments.ts` (new) and `site/src/components/Instruments.astro` (new)

```ts
export interface InstrumentInputs {
  version: { from: string; to: string; vnext: boolean; changed: number; added: number; removed: number } | null;
  deprecations: { major: string; count: number; due: number } | null;
  events: { major: string; count: number; subscriptions: number } | null;
  neighbours: { major: string; vnext: boolean; relations: number; objects: number } | null;
  countries: { countries: number; areas: number; replaced: number } | null;
  coverage: { empty: number; cells: number } | null;
  drift: { obsolete: number; undocumented: number } | null;
  week: { items: number; changes: number | null } | null;   // changes null: the pipeline has not computed them (D81)
}
export interface InstrumentCard { id: string; name: string; value: string; caption: string; href: string }
// pure reductions of the parsed files
export function versionNumbers(diff, majors): InstrumentInputs["version"];
export function deprecationNumbers(file, major): InstrumentInputs["deprecations"];   // due: clean_version <= major
export function eventNumbers(file): InstrumentInputs["events"];
export function neighbourNumbers(relations, majors): InstrumentInputs["neighbours"]; // distinct s and t of edges
export function countryNumbers(matrix): InstrumentInputs["countries"];              // areas with replaced + added > 0
export function coverageNumbers(cov): InstrumentInputs["coverage"];
export function driftNumbers(drift): InstrumentInputs["drift"];
export function instrumentCards(inputs: InstrumentInputs, base: string): InstrumentCard[]; // null input: no card
// the only function that reads files; called by the two pages with the repository's data/ and config/versions.json
export function readInstruments(dataDir: string, versions: { narrative_order: string[]; majors: Record<string, { vnext?: boolean }> }): InstrumentInputs;
```

File choice in `readInstruments`: the version pair with the highest `to` major, numerically; deprecations of the first
`narrative_order` major with a file; `index/events.json`; relations of the highest major in `code/relations/`;
`code/diffs/country/matrix.json`; `index/coverage.json`; `code/drift.json`; the week through `landed(path)`
(`site/src/lib/state.ts:18`, the header pill's own reader). A missing or unreadable file gives `null` for that card,
never a blank card or a build failure. Card copy, exact, with `n()` = `toLocaleString("en")` and singular forms where
a count is 1: the captions of section 2.4; `value` is `n(x)` except coverage (`"15 of 100"`) and the week
(`"6 new · 35 PRs"`, or `"6 new"` when `changes` is null). Example card:
`{ id: "deprecations", name: "Deprecation radar", value: "1,225", caption: "obsolete elements in BC29, 1,055 with their
cleanup due", href: "/waldo.BCObservatory/code/deprecations/" }`.

`Instruments.astro` renders `<ul class="inst">` of `<li><a href><b>{name}</b><span class="inst-n">{value}</span><p>
{caption}</p></a></li>`, styles global under `.inst` (D53, D76; not `.cards`, which About styles its own way). The home
page wraps it in `<section class="wrap block" aria-labelledby="instruments">` with the h2 of 2.4; `/objects/` keeps its
`<h2 id="instruments">` and the one-line meta.

### 4.4 Header markup and script (phase 2)

`Base.astro` header, exact order (wordmark unchanged):

```html
<span class="wordmark">...</span>
<button type="button" popovertarget="menu">Browse</button>
<div id="menu" popover>
  <nav class="site-nav" aria-label="Sections">{navSections() as links, aria-current as today}</nav>
  {pill as today, without its title}
</div>
<form class="site-search" role="search" action="{base}search/" method="get"><input id="q" aria-label="Search" name="q" type="search" placeholder="Search: t18, Sales-Post, BE" autocomplete="off" /></form>
```

The input keeps `id="q"`: the galaxy's live search finds it (`Galaxy.astro:85`, D44). Every CSS rule for the menu is
scoped as `.site-header #menu` or `[popover]#menu`, so a content heading slugged `menu` is never styled by it.

`chrome.ts` `mountChrome()`, before the existing finder-label line: when `#menu` exists, build `<span
class="hdr-tools"><button class="icon-btn theme-btn" type="button" data-theme-toggle aria-label="Switch light or dark
theme">◐</button><button class="icon-btn pal-btn" type="button" data-palette aria-label="Find an AL object
(Ctrl+K)">⌘K</button></span>` and append it to `#menu`; the existing lines then label the finder and wire the theme.
`Base.astro:78-79` already mounts the chrome before the palette, so `palette.ts:140` finds the new button. On
`matchMedia("(min-width: 900px)")` change, call `menu.hidePopover?.()`. The `--hdr-h` observer stays.

`site.css`, the layout (pixel values are targets, the checks of section 7 decide):

- `:root { --hdr-h: 57px }`, from 900 px the measured two-tier height (target 94px): the galaxy's first paint uses it
  before `chrome.ts` measures, so a `#instruments` jump lands where it should.
- Under 900 px: `.site-header .wrap` one row, `padding: 8px 16px`, items centred; `.wordmark .sub` hidden; the form
  `flex: 1 1 auto; min-width: 0`, input `width: 100%; font-size: 16px`; `[popovertarget]` a 40 px `.btn`-like button
  with "Browse" and a small "▾" from CSS; `.site-header .wrap:has(.site-search:focus-within) .wordmark { display:
  none }`. `.site-header #menu:popover-open` is the sheet: `position: fixed; inset: auto 0 0 0; margin: 0; width:
  100%; max-height: 85dvh; overflow-y: auto; padding: 16px 16px calc(16px + env(safe-area-inset-bottom));
  background: var(--surface); border: 0; border-top: 1px solid var(--line-strong); border-radius: var(--r-panel)
  var(--r-panel) 0 0`; flex column, gap 12; the pill first (`order: -1`), the nav a two-column grid with 44 px rows
  and `.site-nav a:nth-child(5), .site-nav a:nth-child(10) { grid-column-start: 1; }` plus a top rule; `.pal-btn {
  display: none }`; `#menu::backdrop` the stage dialog's scrim. No transition under reduced motion.
- From 900 px: the Browse button hidden; `.site-header #menu { display: contents }` so the nav, the pill and the tools
  are items of the wrap (an author `display` beats the UA's `[popover]:not(:popover-open) { display: none }`: checked
  in Chromium on 2026-10-12, a closed popover with `display: contents` renders its children); the wrap wraps with `padding: 10px 24px`; order wordmark, pill, form (`margin-left: auto`,
  input `flex: 0 1 280px`, min 160), tools; the nav `order: 9; flex-basis: 100%`, gap 12 px, and the group starts
  (`nth-child(5)`, `nth-child(10)`) get 14 px more left margin and a 1 px rule in `--line` centred in the gap. While
  the tools are not there yet (`.wrap:not(:has(.hdr-tools))`, only under `@media (scripting: enabled)`), the form
  keeps a right margin of their width, so nothing moves when they arrive.
- `.theme-btn::after { content: " Theme" }` at every width (the button only shows from 900 px and in the sheet);
  drop the 900 px media query of `site.css:65`.
- `@supports not selector(:popover-open) { .site-header [popovertarget] { display: none } }`. A browser without the
  API also drops the `:popover-open` rules, so `#menu` shows inline: nothing hides the nav there.
- The header wrap's `max-width: max(var(--page-max), 1440px)` stays (`site.css:36`); the D70 and D84 comments there
  are rewritten to say two tiers from 900 px.

### 4.5 Identity chip CSS (phase 1)

`.identity .type-label { color: var(--sys) }` (with no `--sys` the declaration is invalid at computed time and the
colour inherits, as today without a style); `.identity > a { display: inline-flex; align-items: center;
gap: 5px; font: 400 12px var(--font-mono); color: var(--text-2); text-decoration: none }`, `::before` the 7 px dot in
`var(--sys)`, underline on hover, focus ring as every link.

### 4.6 The home page and `/objects/` (phase 3)

`index.astro`: the `Galaxy` height prop becomes `max(420px, calc(100svh - var(--hdr-h, 94px) - 48px))`; after the
`#galaxy` div, `<nav class="wrap home-jump" aria-label="On this page">Further down: <a href="#instruments">Instruments</a>
· <a href="#lit">Newly lit</a> · <a href="#sections">Sections</a> · <a href="#agents">About</a></nav>` (48 px tall,
`mono-meta` look, one line; it may wrap under 480 px, where the galaxy has no fixed height); then the Instruments
section, then Newly lit, Sections, About as today (the Sections cards already come from `contentSections()`,
phase 1). `objects/index.astro`: the list of lines 39-46 becomes `<Instruments cards={...} />`, the meta line "The
same instruments as on the home page." `localizations/index.astro:24` already says "Country heatmap" (phase 1).
`Base.astro:70`: the footer link to `{base}#instruments`. `sections.ts`: the instruments path becomes
`#instruments`.

### 4.7 Byte budget

Measured by applying each markup change to all 28,899 built HTML files of `waldo.BCObservatory-ux/site/dist` (regex
substitution of the exact strings below, sum of UTF-8 length differences; MB = 2^20). Tar bytes move by the same
amount on average, as each file's padding to 512 is uniform; the build after each phase confirms with
`scripts/site-size.ts`.

| change | bytes per object page | pages | total | how |
|---|---|---|---|---|
| P1: pill `title="The last 7 days, lit in the galaxy"` dropped | −43 | 28,898 | −1.19 MB | string length |
| P1: `<label class="skip" for="q">Search the knowledge base</label>` (61) becomes `aria-label="Search"` (20) | −41 | 28,899 | −1.13 MB | string lengths |
| P1: system crumb `<li><a href="…#system=sales">Sales &amp; Receivables</a></li>` (81 on Table 18) becomes the identity chip `<a …>…</a>` (72); type label `style="color: var(--sys-sales)"` (32) becomes identity `style="--sys:var(--sys-sales)"` (31); no chip on localization and source pages | −10 average (−10 on Table 18; −5 on Belgium, whose section crumb comes back) | 28,751 | −0.28 MB | simulated per page |
| P1: F5 moves ` primary` from one link to another | 0 (video and post pages only) | 1,217 | 0 | |
| **Phase 1, measured** | **−94** | | **−2.60 MB** | |
| P2: theme button (119) and finder button (113) built by `chrome.ts` | −232 | 28,899 | −6.39 MB | string lengths |
| P2: `<button type="button" popovertarget="menu">Browse</button>` (58) and `<div id="menu" popover>` + `</div>` (29) | +87 | 28,899 | +2.40 MB | string lengths |
| P2: nav labels Objects, Countries, Changes, Weekly become AL objects, Localizations, Code changes, Weekly digests | +20 | 28,899 | +0.55 MB | label lengths; nav order changes, 0 bytes |
| **Phase 2, measured** | **−125** | | **−3.45 MB** | |
| P3: footer `objects/#instruments` becomes `#instruments` | −8 | 28,899 | −0.22 MB | string length |
| P3: home page (Instruments, the jump line, a First-party apps card) and `/objects/` (cards for the list, 1,812 bytes today) | 0 | 2 | about +4 KB | estimate; measure in the build |
| **Phase 3** | **−8** | | **−0.22 MB** | |
| Shared CSS, `_astro/Base.2hTNpcAM.css` 24,312 bytes today | 0 | 1 file | budget +2.5 KB | `ls -l site/dist/_astro/Base.*.css` |
| Shared script, `_astro/Base.astro_astro_type_script_index_0_lang.*.js` 1,226 bytes today (the chrome) | 0 | 1 file | budget +0.8 KB | same |
| `Instruments.astro` style | 0 | 1 file | about +1 KB | same |
| **All three phases** | **−227** | 28,899 | **−6.26 MB apparent; tar 695.3 to about 689 MB** | |

Header of Table 18: 1,604 bytes today, 1,520 after phase 1, 1,395 after phase 2. Its crumb: 394, then 313. The home
page header: 1,308, 1,267, 1,142. Pages outside `objects/` also gain a few crumb bytes (longer labels such as
"First-party apps" on 96 app pages, the returning section crumb on 55 localization and source pages, an Instruments
crumb on 9 instrument pages): under 10 KB in all, inside the totals above. No phase adds a byte to any object page;
no file is added to the tar except the component's stylesheet if Astro splits it (one file).

## 5. Test plan (write first)

`tests/unit/sections.test.ts`:

- `navSections().map((s) => s.name)` deep-equals `["Topics", "AL objects", "Localizations", "Roadmap", "Code changes",
  "Videos", "Posts", "Weekly digests", "Sources", "MCP", "About"]`.
- `navGroupStarts()` deep-equals `[5, 10]`; `site/src/styles/site.css` (read as text) contains `nth-child(5)` and
  `nth-child(10)` in a `.site-nav` rule (phase 2; the CSS and the map move together).
- The nav labels together are at most 90 characters (88 with the names of 2.1): a width guard for the one-line nav
  at 900 px.
- `contentSections().map((s) => s.id)` deep-equals `["topics", "objects", "apps", "localizations", "features",
  "changes", "releases", "videos", "posts", "digests", "sources"]`; each has a blurb ending in "." and no em-dash character (U+2014).
- `countLabel("features", 80)` is `"80 roadmap features"`; `countLabel("topics", 1)` is `"1 topic hub"`;
  `countLabel("objects", 25646)` is `"25,646 AL objects"`; `countLabel("releases", 63)` is `"63 AL Language extension
  versions"`; `countLabel("localizations", 22)` is `"22 country layers"`.
- `llmsTitle("features")` is `"# BC Observatory: Roadmap"`; `llmsTitle("objects")` is `"# BC Observatory: AL objects"`.
- Ids and paths are unique; `section("nope")` throws `/unknown section nope/`; `INSTRUMENTS.map((i) => i.name)`
  deep-equals the eight names of 2.1 in order.
- The search groups of `site/src/scripts/search.ts` with ids roadmap, video, post, object, change, localization,
  source and digest carry `section(<features|videos|posts|objects|changes|localizations|sources|digests>).name`, and
  the tabs of `search/index.astro` the same labels (read the page source as text for the tabs).

`tests/unit/crumbs.test.ts`, base `"/b/"`:

- `trail("/b/", "objects", [{ label: "tables", href: "/b/objects/table/" }], 'Table 18 "Customer"')` deep-equals
  `[{ label: "Galaxy", href: "/b/" }, { label: "AL objects", href: "/b/objects/" }, { label: "tables", href:
  "/b/objects/table/" }, { label: 'Table 18 "Customer"' }]`.
- `trail("/b/", "localizations", [], "Belgium (BE)")[1]` deep-equals `{ label: "Localizations", href:
  "/b/localizations/" }` (the dedupe bug of `Page.astro:30` stays fixed); the same for `"sources"` and `"/b/sources/"`.
- `trail("/b/", "objects", [], null)` deep-equals `[{ label: "Galaxy", href: "/b/" }, { label: "AL objects" }]`.
- `trail("/b/", "instruments", [{ label: "Version lens", href: "/b/code/versions/" }], "BC28 to BC29")[1].href` is
  `"/b/objects/#instruments"` in phase 1 and `"/b/#instruments"` from phase 3 (update the expectation with the path).
- `trail("/b/", null, [], "Search")` deep-equals `[{ label: "Galaxy", href: "/b/" }, { label: "Search" }]`.
- `systemChip("sales", "objects", "Sales & Receivables", "/b/")` deep-equals `{ label: "Sales & Receivables", href:
  "/b/#system=sales" }`; `systemChip("localization", "localizations", "Localizations", "/b/")` is null;
  `systemChip("sources", "sources", "Sources", "/b/")` is null; `systemChip("localization", "objects", "Localizations",
  "/b/")` is a chip; `systemChip(null, "objects", null, "/b/")` is null.
- `actionOrder({ opens: "stage" })` is `"context"`; `actionOrder({})` and `actionOrder(undefined)` are `"claude"`.

`tests/unit/instruments.test.ts`:

- `versionNumbers({ from: { version: "29" }, to: { version: "30" }, summary: { by_change: { changed: { table: 35,
  codeunit: 121 }, added: { page: 27 }, removed: { codeunit: 2 } } } }, { "30": { vnext: true } })` deep-equals
  `{ from: "29", to: "30", vnext: true, changed: 156, added: 27, removed: 2 }`.
- `deprecationNumbers({ count: 5, items: [{ clean_version: "25" }, { clean_version: "29" }, { clean_version: "30" },
  { clean_version: null }, { clean_version: "27" }] }, "29")` deep-equals `{ major: "29", count: 5, due: 3 }`.
- `eventNumbers({ major: "29", count: 26296, subscriptions: 5163, rows: [] })` deep-equals `{ major: "29", count:
  26296, subscriptions: 5163 }`.
- `neighbourNumbers({ major: "30", edges: [{ s: "table/18", t: "page/21" }, { s: "page/21", t: "table/36" }, { s:
  "table/18", t: "table/36" }] }, { "30": { vnext: true } })` deep-equals `{ major: "30", vnext: true, relations: 3,
  objects: 3 }`.
- `countryNumbers({ areas: ["Sales", "Bank", "Unused"], countries: { be: { cells: { Sales: { replaced: 2, added: 1 },
  Bank: { replaced: 0, added: 3 } } }, nl: { cells: { Sales: { replaced: 1, added: 0 } } } } })` deep-equals
  `{ countries: 2, areas: 2, replaced: 3 }`.
- `coverageNumbers({ systems: ["finance", "sales"], pillars: ["learn", "videos"], counts: { finance: { learn: 609,
  videos: 0 }, sales: { learn: 0, videos: 22 } } })` deep-equals `{ empty: 2, cells: 4 }`.
- `driftNumbers({ obsolete_documented: [{}, {}], new_undocumented: [{}], missing: [] })` deep-equals `{ obsolete: 2,
  undocumented: 1 }`.
- `instrumentCards(REAL, "/b/")`, where `REAL` holds the numbers of 2.4, deep-equals the eight cards of 2.4 (names,
  values, captions, hrefs with `/b/`; the week href `"/b/#lens=landed"`).
- `instrumentCards({ ...REAL, events: null }, "/b/")` has seven cards and no "Event explorer";
  `instrumentCards({ ...REAL, week: { items: 6, changes: null } }, "/b/")` has the week value `"6 new"`.
- Singulars: version `changed: 1` gives the caption `"object changed from BC29 to BC30 (vNext), 27 added, 2
  removed"`; deprecations `count: 1, due: 1` gives `"obsolete element in BC29, 1 with its cleanup due"`.
- `readInstruments("tests/fixtures/instruments", { narrative_order: ["29", "28", "30"], majors: { "30": { vnext: true
  } } })` on fixtures that mirror `data/` (two version pairs `28__29` and `29__30`, deprecations `28` and `29`,
  relations `29` and `30`, and one file of each other kind, a few rows each): picks `29__30`, deprecations `29`,
  relations `30`; with `index/events.json` removed from a temporary copy, `events` is null and nothing throws.

Existing tests to update: `tests/unit/about.test.ts` (the `counts` fixture gains `releases: 63`; `totalPages` counts
releases too, so its two expectations at lines 10-11 go from 28,784 to 28,847, "28,847 pages"),
`tests/unit/release-pages.test.ts:101` (`# BC Observatory: AL extension releases`).

The header, the sheet and the strip are checked in the built site (section 7); Astro templates have no unit tests here.

## 6. Tasks

Three phases, each lighter on every page than the one before it, each shippable alone. Phase 2 needs
`pipeline/lib/sections.ts` (task 1); if it goes first, do task 1 with it. No phase changes generated content except
the 11 section `llms.txt` files, which the next nightly's derive stage rewrites (no LLM, no page rewrites).

Phase 1, names and crumbs (A2, A3, F5; S, about a day):

1. `tests/unit/sections.test.ts`, then `pipeline/lib/sections.ts`.
2. `tests/unit/crumbs.test.ts`, then `site/src/lib/crumbs.ts`.
3. `List.astro` and `Page.astro` on `trail`, `systemChip` and `actionOrder`; `site.css` identity rules (4.5).
4. The detail routes, the section index pages, `objects/[type]`, the instrument pages, `changes/week.astro`,
   `changes/upcoming/index.astro` and `neighbourhood/index.astro` as in 4.2. The `/objects/` instruments list takes
   its labels from `INSTRUMENTS`; `localizations/index.astro:24` says "Country heatmap".
5. `index.astro` cards from `contentSections()`; `about.ts` `countRows` from `contentSections()`, `AboutCounts.releases`,
   the `names` arrays of `about/index.astro:15` and `about.md.ts:10`, the persona link "Learn drift"; the root
   `llms.txt` labels and order; the 11 section `llms.txt.ts` fallbacks through `llmsTitle` (fixes "weekly sources");
   `Galaxy.astro:77` noscript links named from the map; the search group labels of `search.ts` and the tabs of
   `search/index.astro` for posts and digests.
6. The pipeline's section `llms.txt` headings through `llmsTitle`: `change.ts:198`, `feature.ts:164`, `video.ts:179`,
   `source.ts:118`, `release.ts:127`, `app.ts:192`, `topic.ts:230`, `object.ts:679` and `:691`, `digest.ts:212`,
   `post.ts:160` under `pipeline/render/`; update `release-pages.test.ts:101`.
7. `Base.astro`: drop the pill's `title`; the search `<label>` becomes `aria-label="Search"` on the input. The nav
   stays as it is until phase 2 (its labels change with the header that has room for them).
8. Build, run section 7's phase 1 checks, record the numbers in section 12.

Phase 2, the header (A1; M, one to two days):

9. `Base.astro` header markup of 4.4, nav from `navSections()`; rewrite the comments of `Base.astro:12-14` and `:19-22`.
10. `chrome.ts`: build the tools into `#menu`, close the sheet when crossing 900 px.
11. `site.css` as in 4.4.
12. Build; section 7's header checks at 320, 375, 768, 899, 900, 1024, 1280, 1440 and 1920 px, dark and light, with
    and without script; record heights in section 12.

Phase 3, instruments and the home galaxy (A4 home, D1; S, half a day):

13. `tests/unit/instruments.test.ts` and `tests/fixtures/instruments/`, then `site/src/lib/instruments.ts`.
14. `site/src/components/Instruments.astro`.
15. `index.astro` (galaxy height, jump line, Instruments section), `objects/index.astro`, the footer link, the
    instruments path in `sections.ts` (and the crumb test's expectation).
16. Build; real-data check of the eight numbers; record in section 12.

Close: D90 appended to `docs/DECISIONS.md`, PLAN M28 marked shipped, HANDOFF entry moved to "Where things stand" with
the measured numbers, this section 12 renamed "Built, deviations".

## 7. Verification

- `npm run typecheck && npm test` after each phase.
- Build with Node 22 (`PATH=$HOME/.nvm/versions/node/v22.23.1/bin:$PATH npm run site:build`) on the content of
  `bb3a37e016` or later, and `npx tsx scripts/site-size.ts site/dist`. Baseline on that content: tar 695.3 MB,
  apparent 636.6 MB, 59,135 files. Expected apparent bytes on the same content: −2.6 MB after phase 1, −3.45 MB more
  after phase 2, −0.2 MB after phase 3; the file count does not move (59,135, plus at most the component stylesheet).
  If the content moved, compare per page instead (next point).
- Per page, on `objects/table/18/index.html`: header bytes 1,604 → 1,520 → 1,395 (extract `<header … </header>` and
  count); no `#system=` link in the breadcrumb, exactly one in `.identity`; `grep -c 'theme-btn'` 0 after phase 2;
  `grep -c 'id="menu" popover'` 1. On `localizations/be/index.html`: the second crumb links `localizations/`. On
  `videos/-SGaVGOkiF0/index.html`: the first `.actions` link is "Watch here" with `btn primary`.
- Shared assets: `ls -l site/dist/_astro/Base.*.css site/dist/_astro/Base.astro_astro_type_script_*.js`: CSS within
  +2.5 KB of 24,312 bytes, the script within +0.8 KB of 1,226.
- Header, in a browser (the built site served under `/waldo.BCObservatory/`, or the live site after deploy), with
  `getBoundingClientRect` after `document.fonts.ready`:
  - 375 × 812 and 768 × 1024: `.site-header` 57 px (±2); the crumb's top at most 82 px on Table 18 (239 today);
    Browse opens the sheet; the sheet lists eleven links of at least 44 px height, the pill first, "◐ Theme" last;
    Esc closes it and focus is on Browse; a tap on the backdrop closes it; with script disabled the same works
    (minus Theme); no horizontal scroll at 320 px.
  - 900, 1024, 1280, 1440 and 1920 px: the eleven nav links share one `top`; `.site-header` at most 100 px and the same
    on Table 18 and the home page; the tools arrive without moving the search field (record `layout-shift` entries
    with a `PerformanceObserver` from page start: no entry with a source inside the header).
  - Crossing 900 px with the sheet open closes it.
  - Dark and light; `prefers-reduced-motion` gives no transition.
- Home page at 1440 × 900 and 1280 × 800: the jump line's bottom equals the viewport height (±2) before any scroll;
  each of its four links scrolls to its heading and the galaxy keeps its view; `#lens=landed` from the "This week"
  card scrolls the galaxy into view with the week lit. Under 480 px the galaxy is unchanged (strip and panel).
- Instruments: the eight values on the built home page equal 2.4 on the content of `bb3a37e016`; on later content,
  each equals the headline of its own page (the radar's lede count, the version lens's "objects changed" tile of the
  newest pair, the drift page's two h2 counts, the header pill for the week).
- Names: `grep -o '<title>[^<]*' site/dist/features/index.html` says "Roadmap · BC Observatory"; the nav of any page
  lists the eleven names of 2.1 in order; `site/dist/llms.txt` links "[Roadmap]"; after the next nightly,
  `content/features/llms.txt` starts "# BC Observatory: Roadmap".

## 8. Later, not in this spec

- A twelfth and thirteenth nav entry (AL extension releases, First-party apps): the two-tier nav row has room from
  about 1,000 px (D85 wanted Releases), but each entry is about 50 bytes on every page (1.4 MB) and one more row in the
  sheet; decide with the next byte reduction.
- Group labels (Browse, Follow, Use) in the phone sheet, built by script inside the popover.
- The change page crumb by repository (D82's later item): Galaxy / Code changes / BCApps / #12198.
- AL quotes in text are escaped as `&quot;` (6 bytes): 408,941 in text nodes of object pages, 1.9 MB if they were raw
  `"`. Astro escapes them; a post-build rewrite would need its own check.
- The running week on top of the digests index (C3) and Newly lit's empty Monday heading.

## 9. Risks and open questions

Each with the default the coder takes when nobody answers.

- **"Localizations" or "Countries" as the one name?** D84 chose Countries for width only. Default: Localizations (the
  URL, the MCP tool `localization`, the galaxy system label in `config/taxonomy.json`, the section title).
- **"Weekly digests" or "Weekly"?** Default: Weekly digests; "Weekly" alone does not say what it holds.
- **The week pill on phones is inside the Browse sheet**, not on the bar (a 375 px bar has 343 px: wordmark 143,
  Browse about 84, search the rest; the pill is 210). Default: in the sheet. Alternative if the owner wants it
  visible: a second 40 px row under the bar on inner pages (about 97 px in all, still 118 px less than today's 215).
- **No theme toggle and no finder button without script.** Neither works without script today. Default: accept.
- **Popover support**: Chrome and Edge 114, Safari 17, Firefox 125. Older browsers see the nav in the bar (today's
  phone header). Default: accept, no polyfill.
- **`display: contents` on the popover wrapper from 900 px**: the wrapper is a `div` without a role, so the nav
  landmark and the pill's links stay in the accessibility tree; check with the browser's accessibility panel once.
  Default: keep; if a screen reader loses the nav landmark, give the wrapper no box another way (move the nav and the
  pill out of it with `order`, which needs no markup change).
- **Instrument pages lose the "AL objects" nav highlight** (they are not a nav section). Default: no highlight.
- **The section `llms.txt` headings change case** ("BC Observatory: features" to "BC Observatory: Roadmap"). Default:
  apply; agents read the links of the root `llms.txt`, which carry the same names.
- **Sibling batch-2 specs touch the same files.** `docs/specs/object-page-reading.md` (D89) adds "Ask your agent" to
  the actions row of object pages; F5 leaves object pages as they are, so the two compose (whichever lands second
  keeps the other's button). `docs/specs/galaxy-controls.md` (D92) lists the breadcrumb at `Page.astro:29` as a source
  of `#system=` links; after phase 1 the identity chip is that source, with the same hash. `docs/specs/lists-and-media.md`
  (D91) leaves the 375 px header to this spec. Default: no change to those specs; the coder of the later one rebases.
- **Font fallback before the web font loads** can be wider than Bricolage and wrap the nav at 900 px for a moment.
  Default: accept; the nav row has 15 to 35 px of slack at 900 measured with the web font.
- **Build time**: the two pages with instruments read `relations/30.json` (6.9 MB) and `events.json` (2.2 MB) once
  each; under a second. Default: no cache.

## 10. Files

New: `docs/specs/wayfinding.md` (this), `pipeline/lib/sections.ts`, `site/src/lib/crumbs.ts`,
`site/src/lib/instruments.ts`, `site/src/components/Instruments.astro`, `tests/unit/sections.test.ts`,
`tests/unit/crumbs.test.ts`, `tests/unit/instruments.test.ts`, `tests/fixtures/instruments/` (mirrors `data/`).

Changed: `site/src/layouts/Base.astro`, `site/src/layouts/Page.astro`, `site/src/layouts/List.astro`,
`site/src/styles/site.css`, `site/src/scripts/chrome.ts`, `site/src/lib/about.ts`, `site/src/pages/index.astro`,
`site/src/pages/llms.txt.ts`, `site/src/pages/about/index.astro`, `site/src/pages/about.md.ts`,
`site/src/components/Galaxy.astro` (noscript line only), `site/src/scripts/search.ts` (two labels),
`site/src/pages/search/index.astro` (two tab labels), the index pages of topics, features, objects,
localizations, videos, posts, changes, digests, sources, apps, releases, `site/src/pages/objects/[type]/index.astro`,
the detail routes of section 4.2, `site/src/pages/{code/versions/index.astro, code/versions/[pair]/index.astro,
code/deprecations/index.astro, events/index.astro, coverage/index.astro, drift/index.astro,
neighbourhood/index.astro, changes/week.astro, changes/upcoming/index.astro}`, the 11 `site/src/pages/*/llms.txt.ts`
fallbacks, `pipeline/render/{change, feature, video, source, release, app, topic, object, digest, post}.ts` (the
llms heading line only), `tests/unit/about.test.ts`, `tests/unit/release-pages.test.ts`, `docs/DECISIONS.md`,
`docs/PLAN.md`, `docs/HANDOFF.md`. Generated by the next nightly: `content/*/llms.txt` (11 files).

## 11. Definition of Done

- The tests of section 5 green; `npm run typecheck`, `npm test` and the site build pass after each phase.
- Every surface of section 2.1 says the one name; `grep -rnE 'label: "(Weekly|Apps|Releases|Topic hubs|Roadmap
  features|Community posts|Digests)"|"Countries"|weekly sources' site/src` finds nothing (one line, no break).
- Crumbs as in 2.3 on the listed pages; the identity chip on Table 18 and the Finance hub, none on Belgium and
  Aardvark Labs.
- The header checks of section 7 pass at every listed width, with and without script; the heights are written in
  section 12.
- The home page shows the eight cards with the numbers of the build's data, the jump line at the fold, and the same
  cards on `/objects/`; the footer links `#instruments`.
- Video and post pages lead with their stage action.
- Object pages are 227 bytes lighter each (± a few for `aria-current`), measured; the tar on the same content is at
  most 689.5 MB; section 12 records tar, apparent bytes and files after each phase and the shared CSS and JS sizes.
- D90 appended, PLAN M28 shipped, HANDOFF entry moved, this section renamed "Built, deviations".

## 12. Built, deviations

Built 2026-10-12 on branch `build/wayfinding` from `04b705c8fb` (content of `d52b04b7a9`, the same data as
`bb3a37e016` for every number below), Node 22.23.1. Commits: `e2c9a5066e` phase 1, `8d80daa38e` phase 2,
`ef83978bdc` phase 3 (with the header CSS trimmed to the budget), `03b5f5d1fb` the Browse button's name, then this
section. Gates on the last code commit: `npm run typecheck` clean, `npm test` 500 tests, 499 pass, 1 skipped (the
model2vec parity test without `BC_OBSERVATORY_MODEL_DIR`, skipped before this work too).

### What was built

- **Phase 1, names and crumbs (A2, A3, F5).** `pipeline/lib/sections.ts` (the map, `tests/unit/sections.test.ts`) and
  `site/src/lib/crumbs.ts` (`trail`, `systemChip`, `actionOrder`, `tests/unit/crumbs.test.ts`). `Page.astro` and
  `List.astro` render `trail`; the identity row carries `--sys` and the system chip (no chip on localization and source
  pages); detail routes pass only their parents (an object's type, a hub's parent topic, a post's source). Section
  index pages take title, eyebrow and h1 from the map (`countLabel`); instrument pages (version lens and its pairs,
  deprecation radar, event explorer, coverage, drift, neighbourhood) sit under Galaxy / Instruments with titles,
  crumbs and h1s from `INSTRUMENTS`; `/objects/<type>/` reads Galaxy / AL objects / tables; `/changes/week/` and
  `/changes/upcoming/` read Galaxy / Code changes / This week, Upcoming; MCP and About are section indexes. Home cards
  and About's "What is in it today" come from `contentSections()` (a First-party apps card, an AL extension releases
  row; `AboutCounts.releases`, so `{{pages}}` counts the 63 release pages too); the persona link says "Learn drift";
  the root `llms.txt` lists the sections under their names in the home order; the 11 section `llms.txt` fallbacks and
  the 10 pipeline renderers write `llmsTitle(...)`; the galaxy's noscript links, the search groups ("Posts", "Weekly
  digests") and the search tab ("Weekly digests") say the map's names; `localizations/#heat` is headed "Country
  heatmap". Video and post pages lead with Watch here / Read it here. The pill lost its `title`, the search label is
  `aria-label="Search"`.
- **Phase 2, the header (A1).** `Base.astro`: wordmark, search form, `<button popovertarget="menu">Browse</button>`,
  `<div id="menu" popover>` holding the pill and the nav from `navSections()`. `chrome.ts` builds the Theme and finder
  buttons into `#menu` and closes the sheet when the width crosses 900 px. `site.css`: the bar and the sheet under
  900 px, `#menu { display: contents }` and two tiers from 900 px, the reserved space for the tools under
  `(scripting: enabled)`, the no-popover fallback; the D70 and D84 comments rewritten; " Theme" at every width.
  `sections.test.ts` pins the group starts (nth-child 5 and 10) to the stylesheet.
- **Phase 3, instruments and the home galaxy (A4 home, D1).** `site/src/lib/instruments.ts` (reductions, card copy,
  `readInstruments`, `tests/unit/instruments.test.ts` on `tests/fixtures/instruments/`), `Instruments.astro` (global
  `.inst`), the home page's galaxy height, "Further down" line and Instruments section, the same cards on
  `/objects/#instruments`, the footer link and the Instruments crumb to `#instruments`.

### Measured

Site, `scripts/site-size.ts` on `site/dist` (MB = 2^20):

| build | tar | apparent | files | objects |
|---|---|---|---|---|
| base `04b705c8fb` | 695.3 MB (729,118,720) | 636.6 MB (667,526,501) | 59,135 | 455.2 MB |
| phase 1 | 692.9 MB (726,507,520) | 634.0 MB (664,819,155) | 59,135 | 452.9 MB |
| phase 2 | 689.3 MB (722,831,360) | 630.6 MB (661,209,881) | 59,135 | 449.9 MB |
| phase 3, final | **689.1 MB (722,595,840)** | 630.4 MB (660,980,945) | 59,136 | 449.7 MB |

Tar −6.22 MB, apparent −6.24 MB (spec estimate −6.26 MB); the one new file is `_astro/instruments.*.css`, 626 bytes,
shared by the home page and `/objects/`.

Per page (bytes of the file; header = `<header … </header>`; crumb = `<nav class="breadcrumb" … </nav>`):

| page | base | phase 1 | phase 2 | phase 3 |
|---|---|---|---|---|
| `objects/table/18/index.html` | 154,505 | 154,411 (−94) | 154,286 (−125) | **154,278 (−8; −227 in all)** |
| `objects/enum/89/index.html` | 11,643 | 11,549 | 11,424 | **11,416 (−227)** |
| Table 18 header | 1,604 | 1,520 | 1,395 | 1,395 |
| Table 18 crumb | 394 | 313 | 313 | 313 |
| Enum 89 crumb | 395 | 328 | 328 | 328 |
| Belgium crumb (its section crumb is back) | 246 | 240 | 240 | 240 |
| home page header | 1,308 | 1,267 | 1,142 | 1,142 |
| `index.html` | 21,942 | 22,195 | 22,070 | 24,291 (+2,349: eight cards, the line, an apps card) |
| `objects/index.html` | 34,991 | 34,903 | 34,778 | 34,746 |

Shared assets: `_astro/Base.*.css` 24,312 → 24,648 (phase 1) → 26,864 final, **+2,552 bytes** (budget +2.5 KB =
2,560; the untrimmed phase 2 was 27,290 and was trimmed in phase 3); the chrome script
`Base.astro_astro_type_script_index_0_lang.*.js` 1,226 → 1,685, **+459** (budget +800); `instruments.*.css` 626
(estimate about 1 KB).

Header height, `.site-header` `getBoundingClientRect().height` after `document.fonts.ready`, headless Chromium, the
built site served under `/waldo.BCObservatory/`, dark and light the same:

| viewport | before (inner / home) | after (Table 18 and home) | Table 18 crumb top |
|---|---|---|---|
| 320 | | 57 px | 81 |
| 375 | 215 / 176 px | **57 px** | 81 (was 239) |
| 768, 899 | 151 px | 57 px | 81 |
| 900 | 151 px | **92.5 px**, nav on one line | 117 |
| 1024 | 121 px | 92.5 px | 117 |
| 1280 | 120 / 122 px | **92.5 px** | 117 |
| 1440 | 122 / 74 px | **92.5 px** | 117 |
| 1920 | | 92.5 px | 117 |

Other checks, all passed: no horizontal scroll at 320 to 1920; the eleven nav links share one `top` from 900 px;
Browse opens the sheet at 375 and 768 with and without script (pill first, eleven 44 px rows, "◐ Theme" last with
script, absent without); Esc closes it with the focus on Browse; a tap on the backdrop and a second press of Browse
close it; Tab from Browse moves into the sheet; crossing 900 px with the sheet open closes it; the accessible name of
the button is "Browse"; the `navigation "Sections"` landmark stays in the accessibility tree with `display:
contents`; the tools arrive without moving the search (its rect is the same with the chrome module blocked, at 900,
1280 and 1440). The layout-shift entries left in the header are the web font replacing the fallback in the nav
links, the same on the live site today. Home: the galaxy runs 93 to 852 and the line 852 to 900 at 1440 × 900, 93 to
752 and 752 to 800 at 1280 × 800; each "Further down" link scrolls its heading to the top and leaves the galaxy at
its level; the "This week" card scrolls the galaxy into view with the lens on "this week 45"; under 480 px the galaxy
is the static strip as before. The eight values on the built home page equal section 2.4 (156; 1,225 and 1,055;
26,296 and 5,163; 20,561 and 8,521; 1,878, 22, 38; 15 of 100; 42 and 40; 6 new · 35 PRs). `/objects/#instruments`
shows the same eight cards, four per row at 1280. `features/index.html` is titled "Roadmap · BC Observatory"; the
built `llms.txt` links "[Roadmap]"; the DoD grep finds nothing.

### Deviations, each with its reason

1. **Header order.** The markup is wordmark, form, Browse, `#menu` (pill, then nav), not wordmark, Browse, `#menu`
   (nav, pill), form. Zero bytes. The phone's focus order then follows what it shows (wordmark, search, Browse; in
   the sheet the pill, the sections, Theme), the sheet still follows its invoker, and the pill needs no `order: -1`.
   From 900 px the tab order is wordmark, search, pill, nav, tools.
2. **Height and `--hdr-h`.** Two tiers measure 92.5 px, so `--hdr-h` is 93px from 900 px and the home galaxy's
   fallback `var(--hdr-h, 93px)` (spec: about 94).
3. **Group rules.** From 900 px a group start has a 1 px left border with 12 px padding (the rule is the line's
   height, not a centred 60% pseudo-element); in the sheet the start link and its row neighbour carry a top border
   (a 12 px break at the column gap). Both to keep the shared CSS inside +2.5 KB.
4. **Selectors.** The button is styled as `[popovertarget=menu]`, the menu as `[popover]#menu` (the spec's second
   form): shorter, and never matching a content heading slugged `menu`.
5. **Fixed tool widths from 900 px** (Theme 76 px, finder 56 px) so the space the search keeps for them (156 px with
   the gap) is exact for "⌘K" and "Ctrl+K" alike.
6. **No sheet transition** at all, so reduced motion has nothing to switch off.
7. **Neighbourhood explorer h1** stays "Neighbourhood" plus the script's "of Table 18"; its title and crumb are the
   map's "Neighbourhood explorer". The h1 names the object being explored.
8. **Two lines outside the D90 block of `site.css`:** the header input's base width is `100%` (its form sizes it),
   and `.list-page ul:not(.rows):not(.evidence)` gained `:not(.inst)` so the strip on `/objects/` is not indented.
9. **Week card without computed changes (D81):** value "6 new" as specified, caption "videos and posts of the last 7
   days; open them in the galaxy". Singulars also cover "1 PR" and "1 new page or report without docs".
10. **`siteInstrumentCards(base)`** in `instruments.ts`: reads `config/versions.json` and `data/` next to `site/`,
    once per build; both pages call it instead of repeating the read.
11. **Search groups:** only the two labels the spec names changed in `search.ts`; the tab "Posts" already matched.
12. **`objects/<type>/`** keeps its title ("table objects · BC Observatory") and h1 ("3798 table objects"), which the
    spec does not list; only its crumb follows the map.
13. **Build lock script:** `site-build.sh` line 16 assigns `status`, a read-only variable in zsh, so it exits 1 after
    every successful build (the build itself completes and the lock is released). Not in the repository; worth a
    rename to `rc` for the next sessions.

### For the integrator

- `content/*/llms.txt` (11 files) still say the old headings until the next nightly's derive stage rewrites them
  (the renderers changed; no page rewrites, no LLM). The site serves the content files, so `/features/llms.txt` says
  "# BC Observatory: features" until then.
- Expected overlaps: `Page.astro`'s identity row and actions row (D89 adds "Ask your agent" to object pages: keep
  both), the module script block untouched; `Galaxy.astro` one import line and the noscript line (D92);
  the label lines (title, eyebrow, h1) and one import line of the changes, videos, posts, digests, sources and features
  index pages (D91); `site.css` ends with the `/* D90 */` block.
- Apply the three texts below.

**`docs/DECISIONS.md`**, to append:

- **D90 Wayfinding: one name per section, crumbs that follow the sections, a header that fits, instruments with
  numbers.** Items A1 to A4, D1, F5 and F6 of the 2026-10-12 UX review, under D88's byte rule. One map,
  `pipeline/lib/sections.ts`, names each section and instrument once, and the nav, crumbs, eyebrows, page titles, h1
  nouns, home cards, About's counts, the search groups and both kinds of `llms.txt` read it; the nav says AL objects,
  Localizations, Code changes, Weekly digests (reverses D84's short labels). Crumbs follow the section tree
  (`site/src/lib/crumbs.ts`); the galaxy system is a chip in the identity row, linked into the galaxy, except where
  the system is the section (localization and source pages link their section index again). Instrument pages sit
  under Galaxy / Instruments. Under 900 px the header is a 56 px bar (wordmark, search, Browse) whose sheet holds the
  week pill, the sections in three groups and Theme, through the HTML popover API with no script; from 900 px it is
  two tiers on every page, 92.5 px measured (was 120 to 151 px, 74 on the home page at 1440, and 215 on a phone). The
  theme and finder buttons are built by `chrome.ts`, the search label is an `aria-label`, the pill has no `title`.
  Eight instruments with last night's numbers (`site/src/lib/instruments.ts`) sit under the home galaxy and on
  `/objects/`; the footer and the crumb point at the home strip. The home galaxy leaves 48 px for a "Further down" line
  (amends D70). Video and post pages lead with their stage action; Open in Claude stays primary elsewhere. Object
  titles keep their AL quotes. Measured on the same content: object pages 227 bytes lighter each (Table 18 154,505 to
  154,278), tar 695.3 to 689.1 MB, shared CSS +2,552 bytes, chrome script +459, one 626-byte stylesheet added.
  Rejected: a script-built or `scripting`-gated menu (no nav when the module fails, a flash when it runs), a
  `details` or checkbox toggle, a sticky phone bar, one row on laptops (1,520 px needed), dropdown groups, visible
  group labels, short names everywhere, a strip docked in the galaxy, a 70svh cap, "Source on GitHub" as the object
  primary, unquoted titles, an Instruments nav entry. Spec: `docs/specs/wayfinding.md`.

**`docs/PLAN.md`** section 5, the M28 row becomes:

```
| **M28 wayfinding** | one name per section from one map (nav, crumbs, titles, h1s, home cards, About, search groups, llms.txt), crumbs that follow the sections with the galaxy system as an identity chip, a 56 px bar with a Browse sheet under 900 px and a two-tier header above, eight instruments with live numbers on the home page and /objects/, a "Further down" line under the home galaxy, stage-first actions on video and post pages; 227 bytes less per object page, tar 695.3 to 689.1 MB (`docs/specs/wayfinding.md`, D90, shipped 2026-10-12) | 3 to 4 days in three phases | none: deterministic, no LLM |
```

**`docs/HANDOFF.md`**: remove the "Wayfinding, D90" entry under "Open specs, not yet implemented" and add under
"Where things stand", in the "Shipped 2026-10-12" block:

- **Wayfinding, D90** (`docs/specs/wayfinding.md`, M28). One map of section names (`pipeline/lib/sections.ts`) read by
  the nav, crumbs, index titles and h1s, home cards, About, search groups and every `llms.txt`; crumbs follow the
  sections (`site/src/lib/crumbs.ts`) with the galaxy system as a chip in the identity row, so localization and source
  pages link their section index again and instrument pages sit under Galaxy / Instruments. The header is a 57 px bar
  with a Browse sheet (popover API, works without script) under 900 px and two tiers of 92.5 px from 900 px on every
  page; Theme and the finder are built by `chrome.ts`. Eight instruments with last night's numbers under the home
  galaxy and on `/objects/` (`site/src/lib/instruments.ts`), a "Further down" line ending the home page's first screen,
  Watch here / Read it here leading on video and post pages. Measured on the 2026-10-12 content: object pages 227
  bytes lighter, **tar 695.3 to 689.1 MB**, files 59,135 to 59,136. The section `llms.txt` headings change with the next
  nightly's derive stage.

**`AGENTS.md`**, **`CONTENT-NOTICE.md`**, **`docs/RUNBOOK.md`**: no change.
