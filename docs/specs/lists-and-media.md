# Lists load in pages and filter; weeks and sources become cards; the post card makes room

Status: built 2026-10-12 on `build/lists-and-media` (section 12), awaiting merge. Decision: D91 (reserved, appended to
`docs/DECISIONS.md` at ship time). Milestone: M29 (reserved). Owner: waldo.
Scope: six items of the 2026-10-12 UX review (`docs/research/2026-10-12-ux-review.md`): C1 (the changes, videos and posts
indexes stop shipping every row), C2 (filters on those lists), C3 (week cards on `/digests/`), C4 (source cards on
`/sources/`), C5 (the roadmap tracker filters `/features/`) and E1 (the post stage's card). Six index pages, one source
page label, the shared stylesheet, new pure helpers with tests, and optional fields on the media records of the search
index (`pipeline/render/search.ts`). Every claim below was verified against the tree at `bb3a37e016` on 2026-10-12.
Sizes were measured on a complete build of exactly that tree with the 2026-10-12 content (`site/dist` of the
`waldo.BCObservatory-ux` worktree, "the evidence build" below) unless a line says "live"
(https://waldo1001.github.io/waldo.BCObservatory/ on 2026-10-12). Bytes after the change come from a prototype that
renders the markup of section 4 over the evidence build's media shard and the committed frontmatter; the coder
re-measures them on the real build (section 7). Not in scope: object, video and post pages (no byte may be added to
them, D88), `/changes/week/` and `/changes/upcoming/`, the galaxy's pills (D80 stays), the MCP server's output and
ranking, a sitemap, the other review items.

## 1. Goal

### 1.1 C1: three list pages ship every row, and the data to page them already ships

- `site/src/pages/changes/index.astro:25-34` renders every entry of the `changes` collection with its summary;
  `site/src/pages/videos/index.astro:13-25` every video with a poster and summary; `site/src/pages/posts/index.astro:12-16`
  every post with its blog's icon. Evidence build (`wc -c`, `gzip -9c | wc -c`, rows split from the list element):

  | Page | Bytes | gzip -9 | Rows | Bytes per row | Rows 51 and on |
  |---|---|---|---|---|---|
  | `/changes/` | 595,523 | 129,715 | 1,083 | 545 | 563,355 |
  | `/videos/` | 621,491 | 105,153 | 616 | 1,003 | 567,532 |
  | `/posts/` | 275,632 | 30,512 | 601 | 452 | 248,375 |

  Every new item adds its full row for good: W41 merged 165 pull requests, about 90 KB more on `/changes/` that week.
- The rows' data ships already. `index/pages-media-a8ae2ca74abf.json` is 1,496,206 bytes (367,932 gzipped) with 2,300
  records: 1,083 changes, 616 videos, 601 posts (`index/index-manifest.json`, `by_type`). It is written by
  `pipeline/render/search.ts:119-163`, served as is by `site/src/pages/index/[file].ts:6-11` and fetched by
  `site/src/scripts/index-loader.ts:28-42`, which keeps hashed shards in Cache Storage `bcobs-index-v1`. The loader's
  chunk is on every page already: `site/src/scripts/palette.ts:9` imports it and `site/src/layouts/Base.astro:75-76`
  imports the palette (the built `palette.CHfIxYDS.js` starts with an import of `./index-loader.CXt01Uu7.js`).
- The records lack facts the rows print. `pageRecord` (`search.ts:64-117`) gives a change only `source` and `status`
  (line 115) and a video `source` and `path_label` (line 110). A change row prints the base branch, the major, the object
  count and the breaking and community badges (`changes/index.astro:29-30`); a video row prints the review badge
  (`videos/index.astro:19`) and drops its poster for `embed: false` (line 15). Branch and major sit in the record's
  `tags` (`pipeline/render/change.ts:56` writes `[change_kind, base, bc<major>, ...objects]`; all 1,083 records follow
  that order), the rest is nowhere.
- Static links. The site has no sitemap (`site/public/robots.txt` only) and a source page shows the latest 40 stops of
  its flight path (`site/src/components/FlightPath.astro:6`). A scan of every `href` in the evidence build (section 7,
  "orphan check") finds 299 media pages that no page links but their list page: 183 videos, 108 posts, 8 changes. A list
  that renders only 50 rows would leave them without any static link for crawlers and readers without JavaScript.

### 1.2 C2: one filter on one list

- `/changes/` filters by repository only (D82, `changes/index.astro:20-23`). The kinds line under it (line 24) is a
  `<p class="meta" data-kinds>` that the D82 script rewrites (line 52) and nothing more; it looks like pills. Its
  "2 breaking" counts `change_kind: breaking`; 15 changes carry `breaking: true` (the two of kind `breaking` among them),
  and D80 already treats either as breaking (`site/src/scripts/galaxy-core.ts:118`).
- On the committed content: kinds breaking 2, feature 353, fix 619, obsoletion 10, other 27, performance 29, refactor
  43; majors BC30 910, BC29 55, none 118 (AL-Go 28 and BCQuality 90 have no major); community contributions 130.
- `/videos/` (8 channels, years 2023 to 2026: 57, 162, 188, 209) and `/posts/` (21 blogs, 2025: 248, 2026: 353) have no
  control at all.
- D82's click rule (`site/src/scripts/pills-core.ts:18-22`) switches a pill off from "all on". Fine for three
  repositories; seeing one blog of 21 takes 20 clicks, one area of 15 takes 14, "only fixes" takes 6.

### 1.3 C3: the digests index is five bullets, the empty running week on top

`site/src/pages/digests/index.astro:10` prints one bullet per week: id, range, "N videos, N posts, N Learn commits". It
leaves out the week's pull requests (`sections.changes`: 165 in W41, 151 in W40), the roadmap and the radar. The first
bullet is 2026-W42 (2026-10-12 to 2026-10-18, generated 2026-10-12T00:26): "0 videos, 0 posts, 0 Learn commits".

### 1.4 C4: the sources index is a flat list

`site/src/pages/sources/index.astro:11` prints title, "81 items · community · development, integration, copilot" with
raw system ids. 29 of the 33 sources have an icon (`data/preview/icons.json`, read by `site/src/lib/preview.ts:9-12`),
shown on source pages and the posts list, not here. Found on the way: `site/src/pages/sources/[id]/index.astro:28-29`
calls every source that is not `youtube` or `github-pr` a "blog" with "posts", so the AL Language extension's page
(kind `vsmarketplace`) reads "blog" and "63 posts" (evidence build and live).

### 1.5 C5: the roadmap tracker does not link

`site/src/pages/features/index.astro:15-19` is a wave by status table of plain numbers; lines 21-24 list all 80 features
with no filter. On the committed content: 2026 release wave 2 has 78 (69 generally available, 9 in preview), 2027
release wave 1 has 2 (in preview); nothing is announced or unclear; 15 areas, two of them Microsoft's own variants of
others ("Sustainabilty Management", "User experience").

### 1.6 E1: the post card pushes the key points off the first screen

The review says a post page opens with a 70vh iframe of the blog and shows an empty box while it loads or when framing is
refused. **That is not what the code does.** Since D60 phase 1 the stage renders the source card and loads the frame
only on a click: `site/src/components/SourceStage.astro:56-75` renders `figure.stage[data-state="poster"]` with a
`.stage-card`; `site/src/scripts/source-stage.ts:236-240` opens the frame on a plain click of "Show the post here" and
lines 258-265 on the actions row's "Read it here". The evidence build's `posts/aardvarklabs-blog/1609/index.html` and the
live page both carry the card and no iframe. What is true: the card's image is full width, 2:1, up to 280 px
(`site/src/styles/site.css:148`), lazy, on `--surface-raised` until it arrives; that is the empty box. Measured live in
Chromium on `posts/aardvarklabs-blog/1609/` (the page's own geometry, after load):

| Viewport | Stage top | Stage height | Image | "Key points" top |
|---|---|---|---|---|
| 1280 x 900, today | 571 | 470 | 280 | 1,080 (below the first screen) |
| 1280 x 900, CSS of 4.11 injected | 572 | 202 | 200 (beside the text) | 814 (in the first screen) |
| 375 x 812, today | 907 | 494 | 192 | 1,440 |
| 375 x 812, CSS of 4.11 injected | 907 | 302 | not shown | 1,249 |

At 375 px the header and the long lede put the actions row at 835 px; that is A1's work (header), not this spec's. After
a click the frame stays `clamp(480px, 70vh, 960px)` (`site.css:156`); a refusal stays undetectable (D60 5.2) and the
toolbar line stays the honest fallback.

### 1.7 What the review got wrong

1. E1's premise (1.6): the card comes first and the frame is a click away already.
2. "/posts/ has 602 rows": 601 (manifest `by_type.post`; live h1 "601 posts").
3. C1 "from the media shard already shipped ... -1.5 MB": the shard lacks five change facts and the video review state
   (+58,233 bytes, 4.5); the three pages lose 1,115,912 bytes with the title lists this spec keeps for 1.1's 299 pages (1,377,099 without them).
4. C2 to C5 "+3 KB": about +34 KB, most of it the source cards (4.12).
5. "the atlas table already works this way": the atlas has no static rows; it renders its whole table in the browser from
   `index/objects.json`, 200 rows and 400 more per click (`site/src/scripts/atlas.ts:34,101-107,112`). This spec reuses
   the "show more" step, not the data path.

After this change:

- `/changes/`, `/videos/` and `/posts/` render their newest 50 rows and a closed "The other N ... by title" list that
  links every other page. "Show 100 more" and every filter render the rows in the browser from the media shard. Page
  bytes: 595,523 to about 161,800; 621,491 to about 110,800; 275,632 to about 104,200.
- Pills with counts that follow the other filters: Repository, Kind, "breaking only" and Major on changes; Channel or
  Blog and Year on videos and posts; Wave, Status and Area on features, whose tracker cells link into them. From "all
  on", a click keeps only that pill; long facets sit in a closed details.
- `/digests/`: a card per week with its numbers and the radar; the running week says "in progress".
- `/sources/`: a card per source with icon, kind, tier, count, top three systems and the newest item. The AL Language
  extension's page says "changelog" and "63 releases".
- Post pages: the card's image sits in a 200 px column beside the text and is not shown under 600 px. CSS only.
- About 0.96 MB off the Pages tar (4.12), no file added, no object, video or post page changes size; a new item adds a
  100 to 130 byte title line to its list instead of a 450 to 1,000 byte row.

## 2. Reader- and agent-facing behaviour, after

### 2.1 `/changes/`

Top to bottom (counts of 2026-10-12, all from the build):

```
code changes
1,083 changes
<lede, unchanged>
This week: 82 changes →
Repository  [BCApps 965] [AL-Go 28] [BCQuality 90]
Kind        [breaking 2] [feature 353] [fix 619] [obsoletion 10] [other 27] [performance 29] [refactor 43]  [breaking only 15]
Major       [BC30 910] [BC29 55] [no major 118]
<count line, empty>
<the 50 newest rows, markup of today minus the data attributes, links relative>
[Show 100 more]  Newest 50 of 1,083
▸ The other 1,033 changes by title
```

Markup of the filter block (the pills of a facet in pill order: repositories as `CHANGE_REPOS`, kinds A to Z, majors
newest first then "no major"):

```html
<div class="facets" data-facets="change">
  <div class="pills" role="group" aria-label="Repository" data-facet="repo"><span class="facet-label mono-meta">Repository</span><button type="button" class="pill-btn" data-pill="bcapps" aria-pressed="true">BCApps <small>965</small></button>...</div>
  <div class="pills" role="group" aria-label="Kind" data-facet="kind"><span class="facet-label mono-meta">Kind</span><button type="button" class="pill-btn" data-pill="breaking" aria-pressed="true">breaking <small>2</small></button>...<button type="button" class="pill-btn pill-switch" data-switch="breaking" aria-pressed="false">breaking only <small>15</small></button></div>
  <div class="pills" role="group" aria-label="Major" data-facet="major"><span class="facet-label mono-meta">Major</span><button type="button" class="pill-btn" data-pill="30" aria-pressed="true">BC30 <small>910</small></button><button ... data-pill="29">BC29 <small>55</small></button><button ... data-pill="none">no major <small>118</small></button></div>
  <p class="list-count mono-meta" aria-live="polite"></p>
</div>
<ul class="list" data-list="change">...50 rows...</ul>
<p class="list-more"><button type="button" class="btn" data-more hidden>Show 100 more</button> <span class="mono-meta" data-more-status aria-live="polite">Newest 50 of 1,083</span></p>
<details class="list-archive"><summary>The other 1,033 changes by title</summary><ol class="archive">...<li><a href="al-go/2229/">#2229 Surface empty BCPT results as a warning instead of silent success</a></li>...</ol></details>
```

The D82 `data-kinds` line, the per-row `data-repo` and `data-kind` attributes and the inline script go: the kind pills
carry the kind counts, and the rows come from the records once the reader acts.

| Reader does | Rows | Pills | Count line | Bottom line | URL |
|---|---|---|---|---|---|
| opens `/changes/` | the 50 static rows; nothing is fetched | all pressed, "breaking only" not | empty | `Newest 50 of 1,083` | unchanged |
| clicks "Show 100 more" | 150, once the manifest and the media shard are in | unchanged | empty | `Showing 150 of 1,083`, button `Show 100 more` | unchanged |
| clicks AL-Go (all on) | 28 | AL-Go only. Kind: feature 7, fix 19, other 1, refactor 1, the rest 0 and disabled. Major: no major 28, BC30 and BC29 0 and disabled. "breaking only" 0, disabled | `28 of 1,083 shown` | `All 28 shown` | `?repo=al-go` |
| then clicks BCQuality | 50 of 118 | AL-Go and BCQuality | `118 of 1,083 shown` | `Showing 50 of 118`, `Show the last 68` | `?repo=al-go,bcquality` |
| then clicks AL-Go | 50 of 90 | BCQuality | `90 of 1,083 shown` | `Showing 50 of 90`, `Show the last 40` | `?repo=bcquality` |
| then clicks BCQuality, the last pressed | 50 of 1,083 | all | empty | `Showing 50 of 1,083` | `repo` removed |
| clicks "breaking only" | 15 | the switch pressed. Kind: breaking 2, feature 6, fix 1, obsoletion 3, refactor 3; other and performance 0, disabled | `15 of 1,083 shown` | `All 15 shown` | `?breaking=1` |
| clicks Kind "feature" (all on) | 50 of 353 | feature only | `353 of 1,083 shown` | `Showing 50 of 353`, `Show 100 more` | `?kind=feature` |
| opens `?major=29` | 50 of 55 | BC29 only | `55 of 1,083 shown` | `Showing 50 of 55`, `Show the last 5` | as opened |
| opens `?repo=al-go&kind=breaking` (nothing matches) | 50 of 1,083 from the records | all | empty | `Showing 50 of 1,083` | `repo` and `kind` removed |
| opens `?repo=nope` | the 50 static rows; nothing is fetched | all | empty | `Newest 50 of 1,083` | `repo` removed |

D82's links keep working: `?repo=al-go,bcquality` opens exactly as before; only the click rule from "all on" changes.

### 2.2 `/videos/` and `/posts/`

```
Videos                                            Community posts
616 videos                                        601 posts
<lede, unchanged>                                 <lede, unchanged>
▸ Channel · all 8                                 ▸ Blog · all 21
Year  [2026 209] [2025 188] [2024 162] [2023 57]  Year  [2026 353] [2025 248]
<50 newest rows, today's markup>                  <50 newest rows, today's markup>
[Show 100 more]  Newest 50 of 616                 [Show 100 more]  Newest 50 of 601
▸ The other 566 videos by title                   ▸ The other 551 posts by title
```

The Channel and Blog facets are long (8 values and 173 characters of labels; 21 values), so they sit in a closed
`<details class="facet-fold">` whose summary carries the facet's state. Channels are ordered by count, then by label:
Microsoft Dynamics 365 Business Central (YouTube) 523, Areopa webinars 15, Erik Hougaard 15, mibuso.com / BC TechDays 15,
Saurav Dhyani 15, Dynamics Corner podcast 14, Business Central Musings 13, Stefan Maron 6. Labels are the records'
`path_label`, as the rows print them. The posts page carries the icon map of its 21 blogs as
`<script type="application/json" data-icons>` (1,893 bytes) so browser-rendered rows get the same icon as static ones.

| Reader does | Rows | Facet state | Count line | URL |
|---|---|---|---|---|
| opens `/videos/`, opens the Channel fold, clicks Erik Hougaard | 15 | summary `Channel · Erik Hougaard`; Year: 2026 15, the other years 0 and disabled | `15 of 616 shown` | `?source=yt-hougaard` |
| opens `/videos/`, clicks 2023 | 50 of 57 | Year 2023 only | `57 of 616 shown` | `?year=2023` |
| then clicks 2024 | 50 of 219 | 2023 and 2024 | `219 of 616 shown` | `?year=2024,2023` |
| opens `/posts/`, clicks Stefano Demiliani in the Blog fold | 50 of 88, `Show the last 38` | `Blog · Stefano Demiliani`; Year 2026 44, 2025 44 | `88 of 601 shown` | `?source=demiliani-com` |
| then clicks That NAV Guy | 50 of 158 | `Blog · 2 of 21` | `158 of 601 shown` | `?source=demiliani-com,thatnavguy-com` |

### 2.3 What every list does

- **Before the reader acts** the page is what the build wrote. Nothing is fetched for the list until a pill, the switch,
  "Show 100 more" or a filtered URL asks. Then the script fetches `index/index-manifest.json` (revalidated) and the
  media shard, which comes from Cache Storage when the search has stored it, and keeps both for the page's life.
- **While loading** the bottom line reads `Loading the full list` and the button is disabled. **If the load fails** it
  reads `The full list did not load; every title is in the list below.`, the title list opens, the 50 static rows stay
  and the pills keep the reader's choice.
- **Once loaded** the list is rendered from the records: filter, then the first `shown` rows (50, then 100 more per
  click); the title list is hidden (it served crawlers and readers without JavaScript).
- **Show more** adds 100 rows. The button reads `Show 100 more`, or `Show the last N` when fewer remain, and is hidden
  when all are shown; then focus moves to the link of the first newly shown row. A filter change resets `shown` to 50.
- **Pills** are buttons with `aria-pressed`. From "all on" a click keeps only that pill; otherwise a click toggles it;
  switching off the last pressed pill turns them all on (`pickPill`). A pill is disabled when its count is 0 and it is
  off, or when its count is 0 and every pill of its facet is on (a click would empty the list; `pickDisabled`). The
  switch toggles and is disabled only while off with 0 behind it (D82's `pillDisabled`). Counts follow the other facets
  and the switch: a pill's count is the rows it would show with its facet set to it alone.
- **The count line** reads `N of M shown` while anything is filtered and is empty otherwise (D82). Both lines are
  `aria-live="polite"`.
- **The URL** carries `repo`, `kind`, `major`, `breaking=1`, `source`, `year` (and on `/features/` `wave`, `status`,
  `area`), values in pill order with readable commas, left out when the facet is all on. Written with
  `history.replaceState` only when it changes; other parameters and the hash stay. On load, unknown values are dropped,
  a facet whose pressed values have no rows comes back all on (D82's `usablePills`), and a combination with no rows
  comes back all on entirely, so a list never opens empty.
- **Order**: date, newest first; then, for changes, the pull request number, highest first; then the path. Today's
  `/changes/` sorts by the merge timestamp; the records carry the day only, so within one merge day the order becomes
  the PR number. Rows keep their day.
- **Without JavaScript**: the 50 rows, the pills pressed and inert (D82's choice), the switch not pressed, the button
  hidden (`hidden` attribute, removed by the script), `Newest 50 of 1,083`, and the title list with a link to every
  other page.
- **Phones**: pill rows wrap; long facets stay folded; 44 px targets on a coarse pointer (`site.css:225`); no horizontal
  scroll at 390 px.
- **Back** after "Show more" relies on the back-forward cache (section 9).

### 2.4 `/features/`

The tracker's wave cell and every non-zero cell become links into the filter; zeros stay plain:

```html
<tr><td><a href="?wave=2026-release-wave-2" data-cell>2026 release wave 2</a></td><td><a href="?wave=2026-release-wave-2&amp;status=ga" data-cell>69</a></td><td><a href="?wave=2026-release-wave-2&amp;status=preview" data-cell>9</a></td><td>0</td><td>0</td></tr>
```

"All features" gets `id="all-features"` and, under it, the filter block: Wave (2 pills, the tracker's order), Status
(only statuses with features, in the table's order and words: `generally available 69`, `in preview 11`), Area (15
pills by count then label, folded: `Area · all 15`), then the count line. Each row carries
`data-wave`, `data-status` and `data-area` (the `slug` of the value). The table is filtered in place (`tr.hidden`); no
records are fetched (80 rows, 19 KB today).

| Reader does | Rows | Facets | Count line | URL |
|---|---|---|---|---|
| clicks the `9` of 2026 release wave 2, in preview | 9 | Wave 2026 release wave 2, Status in preview, Area all | `9 of 80 shown` | `?wave=2026-release-wave-2&status=preview`, the page scrolls to "All features" |
| clicks the `2026 release wave 2` cell | 78 | Wave 2026 release wave 2 | `78 of 80 shown` | `?wave=2026-release-wave-2` |
| opens the Area fold, clicks Development | 22 | `Area · Development` | `22 of 80 shown` | `?area=development` |

Without JavaScript a cell link opens `/features/?wave=...` with the whole table, as the pills stay inert.

### 2.5 `/digests/`

```
weekly digests · RSS
5 weeks
One page per ISO week, Monday to Sunday: the videos, posts, Learn pages and Microsoft pull requests that landed, the
roadmap's moves and the deprecation radar. The running week fills in night by night.

┌ 2026-W42  [in progress] ───────┐ ┌ 2026-W41 ──────────────────────────────────────┐
│ 2026-10-12 to 2026-10-18       │ │ 2026-10-05 to 2026-10-11                        │
│ Nothing has landed yet this    │ │ 165 PRs · 1 video · 10 posts · 277 Learn pages  │
│ week.                          │ │ Radar: 1,225 obsolete elements, 1,055 with ... │
│ Radar: 1,225 obsolete ...      │ └─────────────────────────────────────────────────┘
└────────────────────────────────┘
```

```html
<ol class="list-cards week-cards">
  <li class="card week-card is-running"><p class="week-card-name"><a href="/waldo.BCObservatory/digests/2026-W42/">2026-W42</a> <span class="badge">in progress</span></p><p class="mono-meta">2026-10-12 to 2026-10-18</p><p>Nothing has landed yet this week.</p><p class="mono-meta"><a href="/waldo.BCObservatory/code/deprecations/">Radar</a>: 1,225 obsolete elements, 1,055 with their cleanup due</p></li>
  ...
</ol>
```

A week is running when the build's date (UTC) is on or before its `range.end`; its card has a dashed border and its
lines are dimmed. The numbers line lists, in this order and only when above zero: PRs, videos, posts, Learn pages,
roadmap features added, roadmap features changed; with nothing, `Nothing has landed yet this week.` for the running week
and `A quiet week.` otherwise. W40 reads `151 PRs · 57 videos · 16 posts · 178 Learn pages`, W38 `5 videos · 49 Learn
pages` (W38 and W39 have no `changes` key).

### 2.6 `/sources/` and the source page's kind

```html
<ol class="list-cards source-cards">
  <li class="card source-card"><p class="source-card-name"><img class="row-icon" src="https://aardvarklabs.blog/..." alt="" width="16" height="16" loading="lazy" decoding="async" referrerpolicy="strict-origin-when-cross-origin" onerror="this.remove()"><a href="/waldo.BCObservatory/sources/aardvarklabs-blog/">Aardvark Labs</a></p><p class="mono-meta">blog · community · 81 posts</p><p class="source-card-systems"><span class="chip-sys" style="--dot: var(--sys-development)">Development</span>...</p><p class="meta">Last stop <a href="/waldo.BCObservatory/posts/aardvarklabs-blog/4023/">...</a> · 2026-10-02</p></li>
  ...
</ol>
```

Order stays item count, highest first. Kind words: `blog` (posts), `channel` (videos), `repository` (changes),
`changelog` (releases). The top three systems use the system's colour dot and label (`systemLabel`,
`site/src/lib/page.ts:11`, as the flight path does). The last stop is the source's newest item across posts, videos,
changes (by merge date) and AL extension releases, so the AL Language extension's card reads "Last stop AL Language
extension ..." although its own page has no flight path yet (section 8). Sources without an icon (the three repositories
and the AL extension) start with the name.

The source page's identity row and stat tile take the same words: the AL Language extension's page says `changelog`
and `63 releases` instead of `blog` and `63 posts`.

### 2.7 Post pages

The source card keeps its markup. From 601 px wide, a card with an image becomes two columns: the image in a 200 px
column stretched to the card's height (`object-fit: cover`), the site line, byline, quote and actions beside it. A card
without an image, or whose image failed (the script removes it, `source-stage.ts:248-252`), stays one column. Under
600 px the image is not shown, and being lazy it is not fetched. "Show the post here" and "Read it here" open the frame
as today. Video pages are untouched (their stage has no `.stage-card`).

### 2.8 Agents

Nothing an agent reads changes in meaning. `content/`, the markdown twins and the `llms.txt` files are untouched. The
media records in `data/index/pages-media-<sha12>.json` gain optional fields (4.5); the MCP server prints results with
`line()` (`packages/mcp/src/server.ts:107`), which names its fields, so its output does not change, and the scorer does
not read the new fields, so ranking does not change.

## 3. Decisions

Draft D91, appended to `docs/DECISIONS.md` at ship time with the numbers re-measured:

> **D91 Lists load in pages and filter by what they hold; weeks and sources are cards; the post card makes room.** The
> changes, videos and posts indexes shipped every row in one file (595,523, 621,491 and 275,632 bytes on 2026-10-12,
> 2,300 rows; every new item added its row for good) and only the changes list had a filter (D82). Each now renders its
> newest 50 rows and, in a closed "by title" list, a link to every other page (299 media pages had no other static
> link: 183 videos, 108 posts, 8 changes); "Show 100 more" and every filter render the rows in the browser from the
> search index's media shard (D86), which every page can already load and which stays in Cache Storage. The media
> records gain what the rows print: a change's branch, major, object count and breaking and community flags, a video's
> review state and poster opt-out (+58 KB); the scorer does not read them. Filters are pills whose counts follow the
> other filters: Repository, Kind, "breaking only" (the flag or the kind, D80's rule) and Major on changes; Channel or
> Blog and Year on videos and posts; Wave, Status and Area on features, whose tracker cells link into them. On list
> pages a click from "all on" keeps only that pill and later clicks toggle (`pickPill`), which amends D82's click rule
> there; the galaxy keeps D80's. A facet with more than eight values or 120 characters of labels sits in a closed
> details. Weekly digests are cards with the week's numbers and the radar, the running week (by the build date) marked
> "in progress"; sources are cards with icon, kind, tier, count, top three systems and their newest item. The post
> stage's card puts its image in a 200 px column beside the text and drops it under 600 px, CSS only: "Key points" moves
> from 1,080 to 814 px at 1280 x 900. The review's "70vh iframe first" was wrong: the card has come first since D60.
> Net on the 2026-10-12 build: the three lists 1,492,646 to about 376,700 bytes, the media shard +58,233, the other
> index pages about +34 KB, the shared bundle at most +12 KB; no object, video or post page changes size and no file is
> added: about 0.96 MB off the Pages tar, and a new item adds a 100 to 130 byte title line to its list instead of a
> full row. Rejected: paginated static pages (45 more files and about +0.24 MB, and filters would still need the
> shard), a rows JSON per list (+0.77 MB in three files), a media shard per type (a lighter "Show more", two more files
> and a manifest field; later), reading branch and major from the tags (ties the list to the tag order of `change.ts`),
> D82's toggle on long facets (20 clicks to see one of 21 blogs), a select for long facets (a second control shape), the
> running week from `generated.at` (an unchanged re-render keeps the old date), the post stage below the key points (the
> compact card is enough at 1280). Spec: `docs/specs/lists-and-media.md`.

Rejected in more detail (numbers from the evidence build and the prototype of section 4.12):

- **Paginated static pages** (`/changes/page/2/` and on). 50 rows a page is 22 + 13 + 13 = 48 pages, 45 more files.
  Every row stays static (about 1.38 MB), plus 45 copies of the page chrome (197,160 bytes at today's 3.7 to 5.1 KB per
  page), a pager on each, and about 35 KB of tar headers and padding: about +0.24 MB against today, 1.2 MB worse than
  this spec. Filters across pages would still need the records.
- **A rows JSON per list**, written at build with exactly the fields each row prints: 391,502 + 285,602 + 88,531 =
  765,635 bytes in three new files. Lighter for a reader who clicks "Show more" on `/posts/` (88 KB raw against the
  media shard's 1.5 MB), but the tar is the owner's limit and the media shard ships anyway.
- **A media shard per type.** Today one media shard holds all three types; per type it would be 612,354 / 463,049 /
  420,807 bytes (143,806 / 121,343 / 104,496 gzipped), so "Show more" on `/posts/` would fetch 104 KB instead of 368 KB
  gzipped. Costs two files, a `type` field in the manifest and a loader change, and the search loads all three anyway.
  Section 8.
- **Branch and major from `tags`.** 0 bytes instead of about 30 KB, but the list would depend on the order
  `change.ts:56` writes and on `pageRecord`'s cut at eight tags (`search.ts:70`). Explicit fields are cheap.
- **D82's toggle on list pages.** Fine for three pills, wrong for 21 (section 1.2). "BCApps and BCQuality without
  AL-Go", D82's argument against a radio row, stays possible with `pickPill` (two clicks instead of one).
- **A native select for long facets.** One control shape for every facet keeps the counts visible and the code one
  path; folding solves the space.
- **No title list** (open question 1 of section 9). 261,187 bytes less, but 299 pages would have no static link.
- **The running week from the digest's `generated.at`.** A re-render that changes nothing keeps the old date: W41's
  page says `2026-10-11T00:26`, its own last day, so it would read "in progress" after the week ended.
- **The post stage below the key points.** The stage is the page's subject and D60 placed it first; the compact card
  brings "Key points" into a 1280 x 900 screen without moving markup.
- **Folding the frame back to a card after a refusal.** Undetectable cross-origin (D60 5.2); the probe stays the guard.

## 4. Contract

### 4.1 `site/src/scripts/pills-core.ts` (changed)

Two functions next to `togglePill` (lines 18-22); `kindsLine` (lines 29-34) loses its last caller with phase 6 and goes,
with its test rows. `CHANGE_REPOS` and `repoOf` stay.

```ts
/** D91: a click on a list page. From "all on" it keeps only that pill; otherwise it toggles, and switching off the last
 *  pressed pill turns them all on (togglePill). One pill alone behaves as togglePill. */
export function pickPill<K extends string>(on: Set<K>, k: K, all: readonly K[]): Set<K> {
  return all.length > 1 && all.every((x) => on.has(x)) ? new Set([k]) : togglePill(on, k, all);
}
/** D91: under pickPill a pill with nothing behind it is disabled while off, and also while its whole facet is on
 *  (the click would keep only that pill: an empty list). A pressed pill in a subset can always be switched off. */
export const pickDisabled = (pressed: boolean, facetAllOn: boolean, count: number): boolean => count === 0 && (!pressed || facetAllOn);
```

### 4.2 `site/src/scripts/facets-core.ts` (new, pure, no DOM)

```ts
export interface Facet<R> { id: string; value: (r: R) => string }
export interface Switch<R> { id: string; test: (r: R) => boolean }
/** A facet as the markup lists it: its pill ids in pill order. */
export interface FacetDef { id: string; values: readonly string[] }
export interface ListState { on: Record<string, Set<string>>; sw: Set<string> }
export interface Counts { facets: Record<string, Record<string, number>>; switches: Record<string, number> }

/** Every facet full and no switch pressed. */
export function isAllOn(st: ListState, defs: readonly FacetDef[]): boolean;
/** A row passes when, for each facet except `skip`, its value is pressed, and every pressed switch (except `skip`) holds. */
export function matchRow<R>(r: R, facets: readonly Facet<R>[], switches: readonly Switch<R>[], st: ListState, skip?: string): boolean;
export function filterRows<R>(rows: readonly R[], facets: readonly Facet<R>[], switches: readonly Switch<R>[], st: ListState): R[];
/** Per facet value: the rows that pass every other facet and the pressed switches. Per switch: the rows that pass every
 *  facet and the other switches and hold for it. Values with no row are absent (read as 0). */
export function facetCounts<R>(rows: readonly R[], facets: readonly Facet<R>[], switches: readonly Switch<R>[], st: ListState): Counts;
/** From a query string: each facet through parsePills over its values; a switch is on only for "1". */
export function readListState(search: string, defs: readonly FacetDef[], switches: readonly string[]): ListState;
/** The query string for a state, keeping other parameters: pillsParam per facet, "1" per pressed switch, commas
 *  readable ("%2C" back to ","), "" when nothing is left. */
export function listSearch(search: string, st: ListState, defs: readonly FacetDef[], switches: readonly string[]): string;
/** On load: each facet through usablePills with its counts over all rows; then, if no row passes, everything on. */
export function rescueState<R>(rows: readonly R[], facets: readonly Facet<R>[], switches: readonly Switch<R>[], st: ListState, defs: readonly FacetDef[]): ListState;
/** A facet folds into a closed details when it has more than 8 values or more than 120 characters of labels. */
export function foldFacet(labels: readonly string[]): boolean;
/** The fold's summary: "Blog · all 21", "Blog · Stefano Demiliani", "Blog · 3 of 21". */
export function facetSummary(label: string, on: Set<string>, values: readonly { id: string; label: string }[]): string;
/** URL-safe id of a wave or an area: lower case, accents dropped, runs of other characters to "-", trimmed. */
export const slug: (s: string) => string;
```

### 4.3 `site/src/scripts/list-rows.ts` (new, pure, used by the pages at build and by the browser)

```ts
import type { PageRecord } from "@bc-observatory/search";
export type MediaType = "change" | "video" | "post";
export const LIST_STATIC = 50;
export const LIST_STEP = 100;
export const esc: (s: string) => string;  // & < > " to entities
/** Date (the record's day) newest first; for changes the PR number (the path's last segment) highest first; then the path. */
export function listOrder(a: PageRecord, b: PageRecord): number;
/** A row's link relative to its section index: "changes/al-go/2229" -> "al-go/2229/". */
export const relHref: (path: string) => string;
/** Today's row markup (changes/index.astro:27-32, videos 15-23, posts 15), links relative, no data attributes. A record
 *  without the D91 fields prints what it has: no branch, major or object count, no review badge. */
export function changeRow(r: PageRecord): string;
export function videoRow(r: PageRecord): string;      // poster via listPoster (site/src/lib/stage.ts:42) unless r.embed === false
export function postRow(r: PageRecord, icon: string | null): string;
/** One line of the title list: <li><a href="<relHref>">title</a></li>. */
export function titleItem(r: PageRecord): string;
/** The bottom line before the reader acts: "Newest 50 of 1,083", or "All 12 shown" for a short list. */
export function staticStatus(total: number): string;
/** The bottom line and the button after: "Showing 150 of 1,083" with "Show 100 more" or "Show the last 33";
 *  "All 28 shown" with no button; "Nothing matches these filters." for 0. */
export function moreText(shown: number, total: number, step?: number): { button: string | null; status: string };
/** The facets of each list and the changes switch. */
export const CHANGE_FACETS: Facet<PageRecord>[];     // repo = path segment 2, kind = status, major = major ?? "none"
export const CHANGE_SWITCHES: Switch<PageRecord>[];  // breaking = r.breaking || r.status === "breaking"
export const MEDIA_FACETS: Facet<PageRecord>[];      // source = r.source, year = date's first four characters
/** Pill order, labels and counts for the build: repositories as CHANGE_REPOS, kinds A to Z, majors highest first then
 *  "none" ("BC30", "no major"), sources by count then label (label = path_label), years newest first. */
export function facetValues(rows: readonly PageRecord[], type: MediaType): Record<string, { id: string; label: string; count: number }[]>;
```

Exact row strings are in section 5 (the al-go/2229, bcapps/12306, `-SGaVGOkiF0` and aardvarklabs-blog/1609 records).

### 4.4 `site/src/lib/badges.ts` (new) and `site/src/components/Badges.astro` (changed)

The three label maps of `Badges.astro:5-9` move to `badges.ts` (`TIER_LABEL`, `REVIEW_LABEL`, `STATUS_LABEL`) with
`badgesHtml(tier, review, status): string`, which returns exactly what `Badges.astro:11-13` renders. `Badges.astro`
imports the maps and keeps its markup, so no page changes by a byte (checked in section 7). `videoRow` uses
`badgesHtml(r.tier, r.review)`.

### 4.5 Media records (`pipeline/render/search.ts`, `packages/search/src/types.ts`)

`pageRecord` (`search.ts:109-115`) writes, for a change (line 115):

```ts
if (fm.type === "change") Object.assign(r, { source: fm.source_id, status: fm.change_kind,
  ...(fm.base_branch ? { branch: String(fm.base_branch) } : {}), ...(fm.major ? { major: String(fm.major) } : {}),
  objects: Array.isArray(fm.objects_touched) ? fm.objects_touched.length : 0,
  ...(fm.breaking ? { breaking: true } : {}), ...(fm.community_contribution ? { community: true } : {}) });
```

and for a video (line 110), after `source` and `path_label`: `review` when `fm.review?.state` is set, `embed: false`
when `fm.embed === false`. Posts, hubs and objects are unchanged. Both `PageRecord` interfaces (`search.ts:19-36`,
`types.ts:18-24`) gain:

```ts
/** D91, change pages: base branch, the BC major it maps to, objects touched, and the two flags the changes list prints. */
branch?: string; major?: string; objects?: number; breaking?: boolean; community?: boolean;
/** D91, video pages: the review state the videos list prints as a badge, and the author's poster opt-out. */
review?: string; embed?: boolean;
```

`pageToRecord` (`packages/search/src/score.ts:29-40`) stays as it is: the scorer's `major` is an object's `present_in`
(`score.ts:64-66`, used at 313), and a change must not start matching `bc30` queries. Measured growth of the media shard
over the committed content: +58,233 bytes (changes +45,913: `branch` 1,083 times, `major` 965, `objects` 1,083,
`breaking` 15, `community` 130; videos +12,320: `review` 616 times, `embed` 0). One record after:

```json
{"path":"changes/bcapps/12306","type":"change","title":"#12306 Warn before releasing a purchase order that was already sent electronically","summary":"A warning now appears when releasing a purchase order that was already electronically sent, preventing silent re-export of the same e-document with the same identifier that would later cause conflicts.","tier":"official","system":"integration","date":"2026-10-07","tags":["feature","main","bc30","codeunit e-document subscribers"],"source":"bcapps-prs","status":"feature","branch":"main","major":"30","objects":1}
```

No schema covers index records (`schemas/` has none), so none changes. The shard keeps one file under a new hash.

### 4.6 `site/src/scripts/index-loader.ts` (changed)

```ts
/** D91: the media records (videos, posts, code changes) as written, for the list pages: the same manifest, the same
 *  Cache Storage and the same one-time manifest refetch on a 404 as loadKind. A manifest without a media shard gives []. */
export async function mediaRecords(deps: LoaderDeps, base: string): Promise<PageRecord[]>;
/** The browser's deps, as loaderOf builds them. */
export const loadMediaRecords: (base: string) => Promise<PageRecord[]>;
```

The list script imports it statically: the chunk is already on every page (1.1), so this adds about 0.3 KB to it and no
request.

### 4.7 `site/src/lib/media-rows.ts` (new, build only, `node:fs`)

```ts
/** The media records of data/index (memoised per directory): the manifest's shards of kind "media", in manifest order.
 *  Throws "no media shard in <dir>/index-manifest.json" when there is none. */
export function readMediaRecords(indexDir?: string): PageRecord[];  // default resolve(process.cwd(), "..", "data", "index"), as index/[file].ts:6
/** One type, in listOrder. */
export function mediaRows(type: MediaType, indexDir?: string): PageRecord[];
```

The three list pages render their static rows, title list and pill counts from `mediaRows`, so the static rows and the
browser's rows come from the same records in the same order and with the same markup. The `h1` keeps counting the
collection, as today.

### 4.8 Browser modules

`site/src/scripts/facets.ts` (new, DOM):

```ts
export interface FacetUi {
  defs: FacetDef[]; switches: string[]; labels: Record<string, { id: string; label: string }[]>; state: ListState;
  /** aria-pressed, disabled (pickDisabled; the switch pillDisabled), the <small> counts, the fold summaries. */
  show(st: ListState, counts: Counts): void;
  onChange(fn: (st: ListState) => void): void;
}
/** Reads `.pills[data-facet]` (ids from `button[data-pill]` in order, labels from the button's text before <small>),
 *  `button[data-switch]` and `details.facet-fold > summary`; a pill click applies pickPill, a switch click toggles. */
export function bindFacets(root: HTMLElement): FacetUi;
/** /features/: rows are `table[data-facet-table] tbody tr`, a facet's value is `tr.dataset[<facet id>]`; filters in
 *  place (`tr.hidden`), writes the count line and the URL, and turns `a[data-cell]` clicks (plainClick) into a state
 *  read from the link's query, then scrolls `#all-features` into view (smooth unless reduced motion). */
export function mountTableFacets(root: HTMLElement, table: HTMLTableElement): void;
```

`site/src/scripts/media-list.ts` (new, DOM): `mountMediaList(doc = document)`:

1. Find `ul[data-list]` (its value is the type), `[data-facets]`, `[data-more]`, `[data-more-status]`,
   `details.list-archive`, `.list-count`; base from `document.body.dataset.base` (`Base.astro:38`); icons from
   `script[data-icons]` when present. Unhide the button.
2. `ui = bindFacets(...)`; `st = readListState(location.search, ui.defs, ui.switches)`; write `listSearch` back with
   `replaceState` if it differs (drops unknown values). If `isAllOn(st)`, stop here until the reader acts.
3. `ensure()` once: `loadMediaRecords(base)`, keep the type's records in `listOrder`; `st = rescueState(...)`. On an
   error or no records: the failure line of 2.3, `archive.open = true`, the button disabled.
4. `render()`: `rows = filterRows(...)`; `ul.innerHTML = rows.slice(0, shown).map(rowOf).join("")`;
   `ui.show(st, facetCounts(...))`; the count line `${rows.length} of ${records.length} shown` (numbers through
   `toLocaleString("en")`) unless `isAllOn`; the bottom
   line and button from `moreText`; `archive.hidden = true`; the URL from `listSearch` when it changed.
5. Pill or switch change: `st = next; shown = LIST_STATIC; await ensure(); render()`. Button: `shown += LIST_STEP;
   await ensure(); render()`, then focus the first new row's link, or the status when the list grew by nothing.
6. While `ensure()` runs: the button disabled, the bottom line `Loading the full list`.

Each list page mounts it from a module script (`import { mountMediaList } from "../../scripts/media-list";
mountMediaList();`); `/features/` mounts `mountTableFacets`.

### 4.9 Pages

- `changes/index.astro`: frontmatter reads `rows = mediaRows("change")`, `values = facetValues(rows, "change")`, the
  switch count from `facetCounts`; renders the block of 2.1 (`set:html` of `changeRow` for the first 50, `titleItem` for
  the rest when more than 50), `staticStatus(rows.length)`. The D82 inline script (lines 36-62), the `data-kinds` line
  and the row attributes go. Lede, `h1`, this-week line unchanged.
- `videos/index.astro`, `posts/index.astro`: the same with `MEDIA_FACETS`; labels "Channel" and "Blog"; the source facet
  folded by `foldFacet`; posts add the `data-icons` script with the `sourceIcon` of each blog in the rows; `ul.post-rows`
  gains `data-list="post"`, `ul.list` on videos `data-list="video"`.
- `features/index.astro`: tracker cells as 2.4 (`slug` of the wave; status ids `ga`, `preview`, `announced`, `unclear`);
  `<h2 id="all-features">`; the filter block (`foldFacet` for areas); rows with `data-wave`, `data-status`, `data-area`;
  `<table data-facet-table>`; a module script mounting `mountTableFacets`.
- `digests/index.astro`: the lede and cards of 2.5 from `weekState`, `weekLine` and `radarLine` (4.10), today as
  `new Date().toISOString().slice(0, 10)` at build.
- `sources/index.astro`: the cards of 2.6 from `sourceKind`, `countLine`, `lastStop` (4.10), `sourceIcon` and
  `systemLabel`; items from the `posts`, `videos`, `changes` and `releases` collections (`source_id`, `channel`;
  `published_at`, `merged_at`).
- `sources/[id]/index.astro:28-29`: `kind={sourceKind(fm.kind).label}` and the stat tile's label
  `sourceKind(fm.kind).noun`.

### 4.10 Card helpers (new, pure, build only)

`site/src/lib/digest-cards.ts`:

```ts
/** "running" while the build's day (YYYY-MM-DD, UTC) is on or before the week's last day, else "complete". */
export function weekState(end: string, today: string): "running" | "complete";
/** PRs, videos, posts, Learn pages, roadmap features added, roadmap features changed, each when above zero, joined with
 *  " · "; nothing: "Nothing has landed yet this week." (running) or "A quiet week." (complete). */
export function weekLine(sections: Record<string, number | undefined>, running: boolean): string;
/** "1,225 obsolete elements, 1,055 with their cleanup due". */
export function radarLine(sections: Record<string, number | undefined>): string;
```

`site/src/lib/source-cards.ts`:

```ts
/** blog: blog/posts, youtube: channel/videos, github-pr: repository/changes, vsmarketplace: changelog/releases; any other kind: itself/items. */
export function sourceKind(kind: string): { label: string; noun: string };
/** "blog · community · 81 posts"; one item takes the singular ("1 post"). */
export function countLine(kind: string, tier: string, n: number): string;
/** The newest item: date (YYYY-MM-DD) newest first, then href; null for none. */
export function lastStop<T extends { date: string; href: string }>(items: readonly T[]): T | null;
```

### 4.11 `site/src/styles/site.css` (changed; global, D53: no scoped style on long lists)

E1, replacing line 149 and keeping line 148 as the fallback for browsers without `:has()`:

```css
@media (min-width: 601px) {
  .stage-card:has(> .stage-hero) { grid-template-columns: 200px minmax(0, 1fr); }
  .stage-card:has(> .stage-hero) > .stage-hero { aspect-ratio: auto; height: 100%; max-height: none; min-height: 120px; }
}
@media (max-width: 600px) { .stage-hero { display: none; } }
```

Lists and cards, next to the D82 pill rules (lines 219-225; `.pills .pill-count` at 224 goes):

```css
.facets { margin: 12px 0 8px; }
.facets .pills { margin: 4px 0; }
.facet-label { min-width: 84px; }
.pill-btn { max-width: 100%; text-align: left; }
.pill-switch { margin-left: 8px; }
.facet-fold > summary { cursor: pointer; padding: 6px 0; }
.list-count:empty { display: none; }
.list-more { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; margin: 16px 0; }
.list-archive { margin: 8px 0 24px; }
.list-archive > summary { cursor: pointer; font: 400 12px var(--font-mono); color: var(--muted); }
.archive { list-style: none; padding: 0; margin: 8px 0 0; columns: 2 320px; column-gap: 24px; font-size: 14px; }
.archive li { break-inside: avoid; padding: 2px 0; }
.list-cards { list-style: none; padding: 0; margin: 16px 0 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; }
.list-cards > li { display: grid; gap: 6px; align-content: start; }
.list-cards p { margin: 0; }
.week-card.is-running { border-style: dashed; }
.week-card.is-running > :not(.week-card-name) { opacity: .75; }
.source-card-systems { display: flex; flex-wrap: wrap; gap: 4px 10px; }
```

Cards and the title list are `ol`, so the list page rule `ul:not(.rows):not(.evidence)` (line 262) does not pad them.
Tokens are the global ones D82 uses.

### 4.12 Byte budget

The limit is the Pages tar (D76): 695.3 MB on the evidence build (729,118,720 bytes, 59,135 files, `npx tsx
scripts/site-size.ts site/dist`), warning at 800, failure at 900. "Prototype" means the markup of this section rendered
over the evidence build's media shard and the committed frontmatter; the coder replaces those numbers with the build's.

| Item | Per page or file, bytes | Pages or files | Total, MB (2^20) | How measured |
|---|---|---|---|---|
| `/changes/` | 595,523 to 161,826 (-433,697); without the title list 30,982 | 1 | -0.414 | `wc -c` on the evidence build; prototype |
| `/videos/` | 621,491 to 110,751 (-510,740); without the title list 53,073 | 1 | -0.487 | same |
| `/posts/` | 275,632 to 104,157 (-171,475), icon map 1,893 included; without the title list 31,492 | 1 | -0.164 | same |
| of which the three title lists | 130,844 + 57,678 + 72,665 = 261,187 | 3 | (+0.249) | prototype, relative links |
| media shard `pages-media-<sha12>.json` | 1,496,206 to 1,554,439 (+58,233) | 1 file, renamed | +0.056 | node over `content/` frontmatter and the shard |
| `/sources/` | 9,499 to about 33,100 (+23,600) | 1 | +0.023 | prototype cards 28,070 with relative links, +1.3 KB for base-absolute links |
| `/digests/` | 4,382 to about 5,600 (+1,200) | 1 | +0.001 | prototype cards 1,354 bytes, lede, absolute links |
| `/features/` | 19,304 to about 28,800 (+9,500) | 1 | +0.009 | estimate: 80 rows x about 80 bytes of attributes, pills, 5 links |
| `sources/al-language-extension/` | +8 ("changelog", "releases") | 1 | 0 | |
| shared stylesheet `_astro/Base.<hash>.css` | about +1,500 | 1 file | +0.001 | rules of 4.11 |
| JavaScript `_astro/*.js` | 163,110 to at most 175,110 (+12,000 limit; the D82 chunk of 1,131 goes) | 17 files, +1 to +4 chunks | +0.011 | `find site/dist/_astro -name '*.js' -exec cat {} + \| wc -c` |
| object pages | 0 | 25,646 | 0 | per-file sizes before and after (section 7) |
| video and post pages | 0 | 1,217 | 0 | same |
| every other page | 0 (the stylesheet link keeps its length) | | 0 | same |
| **Total** | | files: +0 to +4 | **about -0.96** (-1.21 without the title lists) | sum of the rows |

Growth after the change: a new change, video or post adds 127, 102 or 132 bytes (one title line, measured averages)
to its list page instead of 545, 1,003 or 452, plus its record in the media shard as today.

## 5. Test plan (write first)

All `node:test` with `assert/strict`, like `tests/unit/pills-core.test.ts`. `sorted(set)` = the ids joined after
sorting. Counts in fixtures are the fixture's, not the site's.

### 5.1 `tests/unit/pills-core.test.ts` (extended), `R = ["bcapps", "al-go", "bcquality"]`

| Call | Expected |
|---|---|
| `pickPill(new Set(R), "al-go", R)` | `{al-go}` |
| `pickPill(new Set(["al-go"]), "bcquality", R)` | `{al-go, bcquality}` |
| `pickPill(new Set(["al-go", "bcquality"]), "al-go", R)` | `{bcquality}` |
| `pickPill(new Set(["al-go"]), "al-go", R)` | all three (the last one off brings all back) |
| `pickPill(new Set(["x"]), "x", ["x"])` | `{x}` (one pill: togglePill) |
| `pickDisabled(true, true, 0)` | `true` |
| `pickDisabled(true, false, 0)` | `false` |
| `pickDisabled(false, false, 0)` | `true` |
| `pickDisabled(false, false, 3)`, `pickDisabled(true, true, 5)` | `false`, `false` |

The `kindsLine` rows go with the function (phase 6). Every other row stays.

### 5.2 `tests/unit/facets-core.test.ts` (new)

Fixture:

```ts
type Row = { path: string; status: string; major?: string; breaking?: boolean };
const rows: Row[] = [
  { path: "changes/bcapps/3", status: "fix", major: "30" },
  { path: "changes/bcapps/2", status: "feature", major: "30", breaking: true },
  { path: "changes/bcapps/1", status: "fix", major: "29" },
  { path: "changes/al-go/9", status: "feature" },
  { path: "changes/bcquality/5", status: "breaking", breaking: true },
  { path: "changes/bcquality/4", status: "other" },
];
const facets: Facet<Row>[] = [{ id: "repo", value: (r) => r.path.split("/")[1] }, { id: "kind", value: (r) => r.status }, { id: "major", value: (r) => r.major ?? "none" }];
const switches: Switch<Row>[] = [{ id: "breaking", test: (r) => !!r.breaking || r.status === "breaking" }];
const defs: FacetDef[] = [{ id: "repo", values: ["bcapps", "al-go", "bcquality"] }, { id: "kind", values: ["breaking", "feature", "fix", "other", "refactor"] }, { id: "major", values: ["30", "29", "none"] }];
const st = (q: string) => readListState(q, defs, ["breaking"]);
```

| Call | Expected |
|---|---|
| `isAllOn(st(""), defs)`, `isAllOn(st("?repo=al-go"), defs)`, `isAllOn(st("?breaking=1"), defs)` | `true`, `false`, `false` |
| `filterRows(rows, facets, switches, st("")).length` | 6 |
| `facetCounts(rows, facets, switches, st(""))` | repo `{bcapps: 3, al-go: 1, bcquality: 2}`; kind `{fix: 2, feature: 2, breaking: 1, other: 1}`; major `{30: 2, 29: 1, none: 3}`; switches `{breaking: 2}` |
| `filterRows(..., st("?repo=bcapps"))` paths | `bcapps/3`, `bcapps/2`, `bcapps/1` |
| `facetCounts(..., st("?repo=bcapps"))` | repo unchanged (its own facet is ignored); kind `{fix: 2, feature: 1}`; major `{30: 2, 29: 1}`; switches `{breaking: 1}` |
| `filterRows(..., st("?breaking=1"))` paths | `bcapps/2`, `bcquality/5` |
| `facetCounts(..., st("?breaking=1"))` | repo `{bcapps: 1, bcquality: 1}`; kind `{feature: 1, breaking: 1}`; switches `{breaking: 2}` |
| `st("?repo=al-go,nope&kind=fix&breaking=1&q=x")` | repo `{al-go}`, kind `{fix}`, major all three, sw `{breaking}` |
| `st("?breaking=yes").sw`, `st("?breaking=0").sw` | empty, empty |
| `listSearch("?q=x", <repo {bcquality, al-go}, rest all>, defs, ["breaking"])` | `"?q=x&repo=al-go,bcquality"` |
| `listSearch("?q=x&repo=al-go", st(""), defs, ["breaking"])` | `"?q=x"` |
| `listSearch("", st(""), defs, ["breaking"])` | `""` |
| `listSearch("", st("?breaking=1"), defs, ["breaking"])` | `"?breaking=1"` |
| `rescueState(rows, facets, switches, st("?repo=al-go&kind=breaking"), defs)` | equal to `st("")` (nothing matches) |
| `rescueState(..., st("?repo=al-go&breaking=1"), defs)` | equal to `st("")` |
| `rescueState(..., st("?repo=al-go"), defs)` | repo `{al-go}`, the rest all |
| `rescueState(..., st("?kind=refactor"), defs)` | kind all (no row has `refactor`: D82's usablePills) |
| `foldFacet` of the 21 blog labels of 2.2 | `true` |
| `foldFacet` of the 8 channel labels of 2.2 (173 characters) | `true` |
| `foldFacet(["breaking", "feature", "fix", "obsoletion", "other", "performance", "refactor"])` | `false` |
| `foldFacet(["2026", "2025"])`, `foldFacet` of 8 one-letter labels, of 9 | `false`, `false`, `true` |
| `facetSummary("Blog", new Set(["demiliani-com"]), blogs)` | `"Blog · Stefano Demiliani"` |
| `facetSummary("Blog", <all 21>, blogs)` | `"Blog · all 21"` |
| `facetSummary("Channel", <3 of the 8>, channels)` | `"Channel · 3 of 8"` |
| `slug("2026 release wave 2")`, `slug("Reporting and data analysis")` | `"2026-release-wave-2"`, `"reporting-and-data-analysis"` |
| `slug("E-Documents")`, `slug("Copilot & agents")`, `slug("Sustainabilty Management")` | `"e-documents"`, `"copilot-agents"`, `"sustainabilty-management"` |

### 5.3 `tests/unit/list-rows.test.ts` (new)

Records (the evidence build's, with the D91 fields):

```ts
const ALGO = { path: "changes/al-go/2229", type: "change", title: "#2229 Surface empty BCPT results as a warning instead of silent success", summary: "When BCPT performance tests produce a results file with no entries, GetBcptSummaryMD now returns a message that appears in the GitHub step summary instead of an empty string. A missing results file still yields an empty summary.", tier: "official", system: "platform", date: "2026-07-22", tags: ["fix", "main"], source: "al-go-prs", status: "fix", branch: "main", objects: 0 };
const BCAPPS = { path: "changes/bcapps/12306", ..., date: "2026-10-07", status: "feature", branch: "main", major: "30", objects: 1 };  // the record of 4.5
const VIDEO = { path: "videos/-SGaVGOkiF0", type: "video", title: "Introducing Payment Times Analysis in Business Central (2023 release wave 2)", summary: "Payment Times Analysis in Business Central (2023 release wave 2) analyzes whether vendor and customer payments happen on or after due dates. It can aggregate by company size or by custom period, and the video demos both, including drill-down, history and printing.", tier: "official", date: "2023-12-11", source: "yt-microsoft", path_label: "Microsoft Dynamics 365 Business Central (YouTube)", review: "reviewed" };
const POST = { path: "posts/aardvarklabs-blog/1609", type: "post", title: "Integrating AI in Business Central: A Step-by-Step Guide", summary: "...", tier: "community", date: "2025-04-18", source: "aardvarklabs-blog", path_label: "Aardvark Labs" };
const ICON = "https://aardvarklabs.blog/wp-content/uploads/2024/04/design-1.png?w=32";
```

| Call | Expected |
|---|---|
| `[bcapps/9 @2026-10-07, al-go/2392 @2026-10-07, bcapps/12306 @2026-10-07, bcapps/12198 @2026-10-08].sort(listOrder)` | `bcapps/12198`, `bcapps/12306`, `al-go/2392`, `bcapps/9` |
| `[videos/b @2026-01-01, videos/a @2026-01-01, videos/c (no date)].sort(listOrder)` | `a`, `b`, `c` |
| `relHref("changes/al-go/2229")`, `relHref("videos/-SGaVGOkiF0")`, `relHref("posts/aardvarklabs-blog/1609")` | `"al-go/2229/"`, `"-SGaVGOkiF0/"`, `"aardvarklabs-blog/1609/"` |
| `changeRow(ALGO)` | `<li><a href="al-go/2229/">#2229 Surface empty BCPT results as a warning instead of silent success</a><span class="row-meta"><span class="badge">fix</span></span><div class="meta">main · 2026-07-22 · 0 objects</div><div>When BCPT performance tests produce a results file with no entries, GetBcptSummaryMD now returns a message that appears in the GitHub step summary instead of an empty string. A missing results file still yields an empty summary.</div></li>` |
| `changeRow(BCAPPS)` | `<li><a href="bcapps/12306/">#12306 Warn before releasing a purchase order that was already sent electronically</a><span class="row-meta"><span class="badge">feature</span></span><div class="meta">main · BC30 · 2026-10-07 · 1 object</div><div>A warning now appears when releasing a purchase order that was already electronically sent, preventing silent re-export of the same e-document with the same identifier that would later cause conflicts.</div></li>` |
| `changeRow({ ...BCAPPS, breaking: true, community: true })` | the row-meta is `<span class="badge">feature</span><span class="badge obsolete">breaking</span><span class="badge">community contribution</span>` |
| `changeRow({ ...ALGO, branch: undefined, objects: undefined })` (a record of before D91) | meta `<div class="meta">2026-07-22</div>` |
| `changeRow({ ...ALGO, title: 'A <b> & "c"' })` | the link text `A &lt;b&gt; &amp; &quot;c&quot;` |
| `videoRow(VIDEO)` | `<li class="has-poster"><a class="row-poster-link" href="-SGaVGOkiF0/" tabindex="-1" aria-hidden="true"><img class="row-poster" src="https://i.ytimg.com/vi/-SGaVGOkiF0/mqdefault.jpg" alt="" width="320" height="180" loading="lazy" decoding="async"></a><div class="row-body"><a href="-SGaVGOkiF0/">Introducing Payment Times Analysis in Business Central (2023 release wave 2)</a><span class="row-meta"><span class="badge official">official - Microsoft</span><span class="badge reviewed">reviewed - checked by Opus</span></span><div class="meta">Microsoft Dynamics 365 Business Central (YouTube) · 2023-12-11</div><div>Payment Times Analysis ... printing.</div></div></li>` |
| `videoRow({ ...VIDEO, embed: false })` | starts `<li><div class="row-body">`; no `row-poster` |
| `videoRow({ ...VIDEO, review: undefined })` | one badge (the tier) |
| `postRow(POST, ICON)` | `<li><img class="row-icon" src="https://aardvarklabs.blog/wp-content/uploads/2024/04/design-1.png?w=32" alt="" width="16" height="16" loading="lazy" decoding="async" referrerpolicy="strict-origin-when-cross-origin" onerror="this.remove()"><a href="aardvarklabs-blog/1609/">Integrating AI in Business Central: A Step-by-Step Guide</a> <span class="meta">Aardvark Labs · 2025-04-18</span></li>` |
| `postRow(POST, null)` | `<li><a href="aardvarklabs-blog/1609/">Integrating AI in Business Central: A Step-by-Step Guide</a> <span class="meta">Aardvark Labs · 2025-04-18</span></li>` |
| `titleItem(ALGO)` | `<li><a href="al-go/2229/">#2229 Surface empty BCPT results as a warning instead of silent success</a></li>` |
| `staticStatus(1083)`, `staticStatus(12)` | `"Newest 50 of 1,083"`, `"All 12 shown"` |
| `moreText(50, 1083)` | `{ button: "Show 100 more", status: "Showing 50 of 1,083" }` |
| `moreText(50, 118)` | `{ button: "Show the last 68", status: "Showing 50 of 118" }` |
| `moreText(28, 28)` | `{ button: null, status: "All 28 shown" }` |
| `moreText(0, 0)` | `{ button: null, status: "Nothing matches these filters." }` |
| `facetValues([ALGO, BCAPPS, { ...BCAPPS, path: "changes/bcapps/1", major: "29", status: "fix" }], "change")` | repo `[bcapps BCApps 2, al-go AL-Go 1, bcquality BCQuality 0]`; kind `[feature 1, fix 2]`; major `[30 "BC30" 1, 29 "BC29" 1, none "no major" 1]` |
| `facetValues(<videos: source a "B label" x2, source b "A label" x2, source c "C" x1, years 2024, 2026>, "video")` | source `[b, a, c]` (count, then label); year `["2026", "2024"]` |
| `badgesHtml("official", "reviewed")` | `<span class="badge official">official - Microsoft</span><span class="badge reviewed">reviewed - checked by Opus</span>` |
| `badgesHtml("community", "weird")` | `<span class="badge community">community - not Microsoft</span><span class="badge unreviewed">unreviewed - model text not yet checked</span>` |
| `badgesHtml(undefined, null)` | `""` |
| `readMediaRecords(<temp dir: manifest with a hubs and a media shard>)` | only the media shard's records |
| `readMediaRecords(<temp dir: manifest without a media shard>)` | throws `/no media shard/` |
| `mediaRows("change", <temp dir>)` | the change records in `listOrder` |

A pill with a count of 0 shows `0`; the repository row keeps BCQuality at 0 in the fixture because `CHANGE_REPOS` lists
it (D82: "an entry with no pages yet renders a disabled pill with 0").

### 5.4 `tests/unit/index-loader.test.ts` (extended), with its `fakeSite` and `fakeCaches`

| Case | Expected |
|---|---|
| `mediaRecords(deps, B)` with a manifest listing a hubs, a media and an objects shard | fetched: the manifest (no-cache) and the media shard only; returns its records |
| the same call again | fetched: the manifest only; the shard from Cache Storage |
| the media shard answers 404 once, the refetched manifest names a new shard | the manifest twice, the new shard once; its records |
| a manifest without a media shard | `[]` |

### 5.5 `tests/unit/search-index.test.ts` (extended)

| Call | Expected |
|---|---|
| `pageRecord("changes/bcapps/10005", { type: "change", title: "C", change_kind: "fix", source_id: "bcapps-prs", base_branch: "main", major: "30", objects_touched: [{}, {}, {}, {}, {}], breaking: false, community_contribution: false })` | has `branch: "main"`, `major: "30"`, `objects: 5`; no `breaking`, no `community` key |
| the same with `major: null`, `objects_touched: []`, `breaking: true`, `community_contribution: true` | `objects: 0`, `breaking: true`, `community: true`; no `major` key |
| `pageRecord("videos/v", { type: "video", title: "V", channel: "yt-x", review: { state: "reviewed" } })` | `review: "reviewed"`; no `embed` key |
| the same with `embed: false` and no `review` | `embed: false`; no `review` key |
| `pageRecord("posts/s/1", { type: "post", title: "P", source_id: "s", review: { state: "flagged" } })` | none of `branch`, `major`, `objects`, `review`, `embed` |
| `pageToRecord(pageRecord(<the first change>)).major` | `undefined` (a change never matches `bc30` through the scorer) |

`tests/unit/search-golden.test.ts` and `tests/unit/mcp-golden.test.ts` pass unchanged: the scorer and `line()` ignore the
new fields.

### 5.6 `tests/unit/list-cards.test.ts` (new)

| Call | Expected |
|---|---|
| `weekState("2026-10-18", "2026-10-12")`, `weekState("2026-10-12", "2026-10-12")`, `weekState("2026-10-11", "2026-10-12")` | `"running"`, `"running"`, `"complete"` |
| `weekLine({ changes: 165, videos: 1, posts: 10, docs: 277, roadmap_added: 0, roadmap_changed: 0 }, false)` | `"165 PRs · 1 video · 10 posts · 277 Learn pages"` |
| `weekLine({ videos: 5, posts: 0, docs: 49, roadmap_added: 0, roadmap_changed: 0 }, false)` (W38: no `changes`) | `"5 videos · 49 Learn pages"` |
| `weekLine(<all 0>, true)`, `weekLine(<all 0>, false)` | `"Nothing has landed yet this week."`, `"A quiet week."` |
| `weekLine({ changes: 1, roadmap_added: 2, roadmap_changed: 1 }, false)` | `"1 PR · 2 roadmap features added · 1 roadmap feature changed"` |
| `radarLine({ deprecations: 1225, cleanup_due: 1055 })` | `"1,225 obsolete elements, 1,055 with their cleanup due"` |
| `sourceKind("blog")`, `("youtube")`, `("github-pr")`, `("vsmarketplace")`, `("rss")` | `blog/posts`, `channel/videos`, `repository/changes`, `changelog/releases`, `rss/items` |
| `countLine("blog", "community", 81)`, `countLine("blog", "community", 1)` | `"blog · community · 81 posts"`, `"blog · community · 1 post"` |
| `countLine("vsmarketplace", "official", 63)`, `countLine("youtube", "official", 523)` | `"changelog · official · 63 releases"`, `"channel · official · 523 videos"` |
| `lastStop([{ date: "2026-10-01", href: "b" }, { date: "2026-10-02", href: "c" }, { date: "2026-10-02", href: "a" }])` | the `2026-10-02` item with href `a` |
| `lastStop([])` | `null` |

The DOM parts (`facets.ts`, `media-list.ts`, the page markup) are checked on the built site (section 7), as D82 did:
they are wiring around the tested helpers.

## 6. Tasks

Phases 1, 2 and 3 are independent and ship alone in any order. Phase 4 builds the filter engine that phase 6 reuses;
phase 6 needs the fields of phase 5 to print every badge but renders without them. No phase rewrites `content/`; the
only generated files that change are `data/index/pages-media-<sha12>.json` and `index-manifest.json`, written by the
derive on push after phase 5 (D81: `pipeline/render/**` is a trigger path). A phase that edits `site.css` renames the
stylesheet in every page's `<link>` (same length, same bytes): the Pages upload is the whole site anyway.

**Phase 0, before any edit (15 minutes).** Build the unchanged tree and keep the "before" numbers of section 7.1. If
the coder rebases onto newer content later, rebuild "before" at the new base: sizes are compared on the same content.

**Phase 1, E1 (1 hour).**
1. The E1 block of 4.11 in `site.css` (replaces line 149).
2. Build; checks 7.2 (sizes: no page changes) and 7.4 step 13.

**Phase 2, C3 (2 hours).**
3. The `weekState`, `weekLine`, `radarLine` rows of 5.6; `npm test` fails.
4. `site/src/lib/digest-cards.ts`; tests pass.
5. `digests/index.astro`: the lede and the cards of 2.5; the card rules of 4.11.
6. Build; check 7.4 step 14 and the sizes.

**Phase 3, C4 (3 hours).**
7. The `sourceKind`, `countLine`, `lastStop` rows of 5.6; then `site/src/lib/source-cards.ts`.
8. `sources/index.astro`: the cards of 2.6; `sources/[id]/index.astro:28-29` through `sourceKind`.
9. Build; check 7.4 step 15; the sizes diff shows `sources/al-language-extension/index.html` +8 and nothing else.

**Phase 4, the filter engine and C5 (1 day).**
10. Tests 5.1 and 5.2; then `pickPill`, `pickDisabled` in `pills-core.ts` and `site/src/scripts/facets-core.ts`.
11. `site/src/scripts/facets.ts` (`bindFacets`, `mountTableFacets`).
12. `features/index.astro` as 4.9; the facet rules of 4.11.
13. Build; checks 7.4 steps 10 and 12.

**Phase 5, the media records (2 hours).**
14. Tests 5.5; then `pageRecord` and both `PageRecord` interfaces (4.5).
15. Regenerate the index locally for the checks of phase 6 (7.1, "local index"); do not commit `data/`.
16. Push. The derive commits `content: derive <date> (<sha>)` with the new media shard and manifest; its Pages build
    follows (`.github/workflows/pages.yml:5-11`, `workflow_run`).

**Phase 6, C1 and C2 (2 days).**
17. Tests 5.3 and 5.4; then `site/src/scripts/list-rows.ts`, `site/src/lib/badges.ts` (and `Badges.astro` on its
    maps), `site/src/lib/media-rows.ts`, `mediaRecords` and `loadMediaRecords` in `index-loader.ts`.
18. `site/src/scripts/media-list.ts`.
19. `changes/index.astro`, `videos/index.astro`, `posts/index.astro` as 4.9; drop the D82 inline script, the
    `data-kinds` line, the row attributes, `kindsLine` with its test rows, and `.pills .pill-count` in `site.css`; add
    the list rules of 4.11.
20. Build with the local index of task 15; every check of section 7.
21. At ship time: section 12's edits (DECISIONS, PLAN, HANDOFF); rename section 12 "Built, deviations" with the measured
    numbers, including the byte table of 4.12 as built.

Effort: about 4 days (phases 1 to 3: 6 hours; phase 4: 1 day; phase 5: 2 hours; phase 6: 2 days). Token risk: none,
deterministic, no LLM.

## 7. Verification

### 7.1 Setup and the "before" numbers

```bash
export PATH=$HOME/.nvm/versions/node/v22.23.1/bin:$PATH      # the Mac's default node is 20; Astro needs 22
S=<scratchpad>
npm run typecheck && npm test
(cd site && npm run build)                                    # about 2 minutes
sizes() { (cd site/dist && find objects videos posts -mindepth 2 -name index.html -print0 | xargs -0 stat -f '%z %N' | sort -k2); }
sizes > $S/sizes-before.txt   # 26,882 lines on 2026-10-12: 25,646 object pages, 19 type indexes, 616 videos, 601 posts
wc -c site/dist/{changes,videos,posts,digests,sources,features}/index.html > $S/index-before.txt
ls -l site/dist/index/pages-media-*.json >> $S/index-before.txt
find site/dist/_astro -name '*.js' -exec cat {} + | wc -c > $S/js-before.txt   # 163,110 on the evidence build
npx tsx scripts/site-size.ts site/dist | head -8 > $S/tar-before.txt          # 695.3 MB, 59,135 files
```

Local index for phase 6 (generated data, never committed; the derive writes the real one):

```bash
npx tsx -e 'import { renderSearchIndex } from "./pipeline/render/search.ts"; console.log(renderSearchIndex("content", "data").shards.find((s) => s.kind === "media"))'
# ... build and check ...
git checkout -- data/index/ && git status --short data/index/   # then delete the one untracked pages-media-<new>.json it lists
```

### 7.2 After each phase

```bash
(cd site && npm run build)
sizes > $S/sizes-after.txt && diff $S/sizes-before.txt $S/sizes-after.txt     # no output: no object, video or post page changed size
wc -c site/dist/{changes,videos,posts,digests,sources,features}/index.html     # 4.12: about 161,800 / 110,800 / 104,200 / 5,600 / 33,100 / 28,800 after phase 6
ls -l site/dist/index/pages-media-*.json                                       # +58,233 against before (phase 5 and on)
find site/dist/_astro -name '*.js' -exec cat {} + | wc -c                      # at most before + 12,000
npx tsx scripts/site-size.ts site/dist | head -8                               # tar about 0.96 MB under before; files before +0 to +4
grep -c 'data-astro-cid' site/dist/{changes,videos,posts,digests,sources,features}/index.html   # 0 each (D53)
```

`Badges.astro` is used on every page: the empty `diff` above is the proof that moving its maps changed nothing.

### 7.3 Rows, title lists and static links (after phase 6)

```bash
python3 - <<'PY'
for p, n in [("changes", 1083), ("videos", 616), ("posts", 601)]:   # re-measure n from index-manifest.json by_type
    s = open(f"site/dist/{p}/index.html", encoding="utf-8").read()
    lst = s[s.find("data-list="):]; lst = lst[:lst.find("</ul>")]
    arc = s[s.find('class="archive"'):]; arc = arc[:arc.find("</ol>")]
    print(p, "rows", lst.count("<li"), "titles", arc.count("<li>"), "expected", 50, n - 50)
PY
```

Orphan check: every media page must keep a static link from some other page. On the evidence build (with absolute
links) 299 pages were linked only from their list page and 0 had no link; after phase 6 "no static link" must stay 0.

```bash
python3 - <<'PY'
import os, re, json, urllib.parse
D, BASE = "site/dist", "/waldo.BCObservatory/"
man = json.load(open(f"{D}/index/index-manifest.json"))
targets = {r["path"] for s in man["shards"] if s.get("kind") == "media" for r in json.load(open(f"{D}/index/{s['file']}"))}
links = {}
for root, _, files in os.walk(D):
    for fn in files:
        if not fn.endswith(".html"): continue
        rel = os.path.relpath(os.path.join(root, fn), D)
        src = rel[: -len("index.html")].rstrip("/") if fn == "index.html" else rel
        page = BASE + (src + "/" if src and fn == "index.html" else src)
        for h in re.findall(r'href="([^"#?]+)', open(os.path.join(root, fn), encoding="utf-8").read()):
            u = urllib.parse.urljoin(page, h)
            if u.startswith(BASE): links.setdefault(u[len(BASE):].strip("/"), set()).add(src)
other = lambda t: links.get(t, set()) - {t}
print("only from a list page:", sum(1 for t in targets if not (other(t) - {"changes", "videos", "posts"})))
print("no static link at all:", sum(1 for t in targets if not other(t)))   # must be 0
PY
```

### 7.4 Headless pass (no browser tool in coding sessions)

Symlink `site/dist` as `$S/serve/waldo.BCObservatory`, run `python3 -m http.server 4173` in `$S/serve`, `npm i
playwright` in the scratchpad (Chromium is cached under `~/Library/Caches/ms-playwright`), and assert, recording every
request with `page.on("request")`:

1. `/waldo.BCObservatory/changes/`: 50 `ul[data-list] > li`; no request to `index-manifest.json` or `pages-media-`;
   `[data-more]` visible; `.list-count` empty; `details.list-archive li` = total - 50.
2. Click `[data-more]`: 150 rows; one request each to the manifest and the media shard; `[data-more-status]` reads
   `Showing 150 of 1,083` (re-measured total); the title list hidden.
3. Click `[data-pill="al-go"]`: 28 rows; `location.search` `?repo=al-go`; `[data-pill="breaking"]` and
   `[data-switch="breaking"]` disabled; `.list-count` `28 of 1,083 shown`; `[data-more]` hidden.
4. Click `[data-pill="bcquality"]`: `?repo=al-go,bcquality`, 50 rows, button `Show the last 68`. Click AL-Go:
   `?repo=bcquality`. Click BCQuality: 50 rows, `location.search` empty.
5. Click `[data-switch="breaking"]`: 15 rows, `?breaking=1`.
6. Open `?repo=al-go&kind=breaking`: once loaded, `location.search` empty, 50 rows, all pills pressed.
7. Open `?repo=nope`: no request to `pages-media-`; `location.search` empty.
8. `/videos/`: open `details.facet-fold`, click `[data-pill="yt-hougaard"]`: 15 rows; the summary reads
   `Channel · Erik Hougaard`; `[data-pill="2023"]` disabled; `?source=yt-hougaard`.
9. `/posts/?source=demiliani-com`: 50 rows, button `Show the last 38`, every row has an `img.row-icon`.
10. `/features/`: click the `a[data-cell]` whose href holds `status=preview` in the 2026 release wave 2 row: 9 visible
    `table[data-facet-table] tbody tr`; `?wave=2026-release-wave-2&status=preview`; `#all-features` in view.
11. A context with `javaScriptEnabled: false`: `/changes/` has 50 rows, `[data-more]` hidden, the title list with
    total - 50 links; `/features/` shows 80 rows.
12. Viewport 390 x 844 on `/changes/`, `/videos/`, `/posts/`, `/features/`, `/sources/`, `/digests/`:
    `document.documentElement.scrollWidth <= 390`.
13. `/posts/aardvarklabs-blog/1609/` at 1280 x 900: `#key-points` top below 900 and `figure.stage` under 260 px tall;
    at 375 x 812: `.stage-hero` has `display: none` and no request goes to its `src` (the post's `og:image`); a video
    page's stage keeps its 16:9 poster.
14. `/digests/`: the card whose range holds the build date has `.is-running` and the `in progress` badge; no other card
    has it.
15. `/sources/`: 33 `.source-card` (re-measure); the AL Language extension's card reads
    `changelog · official · 63 releases`; `/sources/al-language-extension/` says `changelog`.
16. Informational, not a gate: click a row after "Show more", go back, and record whether 150 rows are still there
    (back-forward cache).
17. `pkill -f "http.server 4173"`.

## 8. Later, not in this spec

- A media shard per type (`pages-media-change-`, `-video-`, `-post-`): "Show more" on `/posts/` would fetch 104 KB
  gzipped instead of 368 KB. Two more files, a `type` in the manifest, `mediaRecords` filtering by it.
- Restoring "Show more" after Back when the back-forward cache drops the page: `shown` in `history.state`, the records
  from Cache Storage, then the scroll position.
- The same pills on `/changes/week/` and links into them from the change page's breadcrumb and the Upcoming page (D82's
  later list).
- A "flagged" filter on posts (49 of 601 flagged) and a "community contribution" switch on changes (130).
- The AL Language extension's source page flight path (its releases are not in `sources/[id]/index.astro:9-11`).
- Microsoft's area spellings ("Sustainabilty Management", "User experience") folded into their siblings through
  `data/overrides/`.
- A text sitemap of the media pages if search engines are to find them without the title lists (about 160 KB, one file;
  only helps once submitted, since `robots.txt` at the project path is not read by crawlers).
- One pill style for the galaxy's `.g-kind-pill` and the list pages' `.pill-btn` (D82's later list).

## 9. Risks and open questions

1. **Keep the title lists?** They cost 261,187 bytes of the 1,377,099 the three pages lose, and keep a static link to
   every media page (299 have no other), find-in-page on titles, and a full list without JavaScript. Default: keep. If
   the owner drops them, the onward path is `llms.txt` (linked from each lede) and 7.3's "no static link" becomes 299.
2. **The click rule.** `pickPill` on every list page, `/changes/` repositories included (amends D82 there); the galaxy
   keeps D80's toggle. Default: as specified. If the owner keeps D82's toggle on lists, swap `pickPill` for `togglePill`
   and `pickDisabled` for `pillDisabled` in `facets.ts`; the folds and counts stay.
3. **One media shard.** The first "Show more" or filter fetches all media records: 368 KB gzipped, against today's
   whole pages of 130, 105 and 31 KB gzipped, and kept in Cache Storage for the search. Default: one shard (section 8).
4. **50 static, 100 per click.** Default as specified (`LIST_STATIC`, `LIST_STEP`).
5. **Order within a merge day** becomes the PR number instead of the merge time. Default: accept; a full timestamp in
   the change records would cost about 31 KB.
6. **"breaking" kind and "breaking only".** Both exist (2 and 15). Default: keep both; the switch follows D80's rule.
7. **Running week by the build's date.** A site built on Sunday night shows the week as running until the next build;
   the nightly's Pages build runs daily. Default: accept.
8. **Static rows from the committed shard.** If a page reaches `content/` without its index record, it appears in the
   lists (and in search) only after the next derive. The nightly and the derive commit both together and Pages builds
   after them (`pages.yml:5-11`). Default: accept; the `h1` keeps counting the collection.
9. **Deploy order.** If phase 6 builds before the derive of phase 5 lands, change rows lack branch, major, object count
   and the two badges, and video rows the review badge, for one Pages cycle. Default: push 5 and 6 together and check
   the site after the derive's Pages build.
10. **The review badge on video rows** costs 12,320 bytes in the shard while every video is reviewed (616 of 616).
    Default: keep, so a new unreviewed video says so in the list as it does today.
11. **`:has()`** (Chrome 105, Safari 15.4, Firefox 121). Without it the post card stays one column with today's 280 px
    image (line 148 is the fallback). Default: accept.
12. **Escaping.** Rows rendered from records go through `esc` in `list-rows.ts`; titles and summaries are model or
    Microsoft text from our own frontmatter (D77 review), never raw HTML. `onerror="this.remove()"` on post icons is
    today's markup (`posts/index.astro:15`). Default: as specified.
13. **Counts drift nightly.** Every number on a page comes from the build; the numbers here are fixtures of
    2026-10-12. The coder re-measures before the headless pass.
14. **Sibling batch-2 specs touch the same files.** `docs/specs/wayfinding.md` (D90) takes the eyebrow, title and `h1`
    of these index pages from a section map and changes `List.astro`'s props; the sketches of section 2 show today's
    eyebrow and `h1`, and this spec changes nothing above the lede (on `/digests/` it adds one under the `h1`), so the
    two compose. `docs/specs/object-page-reading.md`
    (D89), `docs/specs/galaxy-controls.md` (D92) and D90 add rules to `site.css`; this spec's rules are new selectors
    plus the E1 block at line 149 and the removal of line 224. Default: whichever lands second rebases; no change to
    those specs.

## 10. Files

New:

- `site/src/scripts/facets-core.ts`, `site/src/scripts/list-rows.ts`, `site/src/scripts/facets.ts`,
  `site/src/scripts/media-list.ts`
- `site/src/lib/badges.ts`, `site/src/lib/media-rows.ts`, `site/src/lib/digest-cards.ts`, `site/src/lib/source-cards.ts`
- `tests/unit/facets-core.test.ts`, `tests/unit/list-rows.test.ts`, `tests/unit/list-cards.test.ts`
- `docs/specs/lists-and-media.md` (this file)

Changed:

- `site/src/pages/changes/index.astro`, `site/src/pages/videos/index.astro`, `site/src/pages/posts/index.astro`,
  `site/src/pages/features/index.astro`, `site/src/pages/digests/index.astro`, `site/src/pages/sources/index.astro`,
  `site/src/pages/sources/[id]/index.astro`
- `site/src/components/Badges.astro` (maps from `badges.ts`, same output)
- `site/src/scripts/pills-core.ts` (`pickPill`, `pickDisabled`; `kindsLine` removed),
  `site/src/scripts/index-loader.ts` (`mediaRecords`, `loadMediaRecords`)
- `site/src/styles/site.css`
- `pipeline/render/search.ts` (`pageRecord`, `PageRecord`), `packages/search/src/types.ts` (`PageRecord`)
- `tests/unit/pills-core.test.ts`, `tests/unit/index-loader.test.ts`, `tests/unit/search-index.test.ts`
- generated by the derive, not by hand: `data/index/pages-media-<sha12>.json`, `data/index/index-manifest.json`
- at ship time: `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`

## 11. Definition of Done

- [x] Every row of section 5 is a test and passes; `search-golden` and `mcp-golden` pass unchanged; `npm run typecheck`
      and `npm test` pass.
- [x] 7.2: no object, video or post page changes size; `data-astro-cid` 0 on the six index pages; JavaScript at most
      +12,000 bytes; tar about 0.96 MB under "before" (re-measured), files +0 to +4.
- [x] 7.3: 50 rows and total - 50 titles on each list; "no static link at all" is 0.
- [x] 7.4: steps 1 to 15 pass; step 16 recorded.
- [x] The three list pages fetch nothing for the list until the reader acts (7.4 steps 1 and 7).
- [ ] The derive after phase 5 committed the media shard with the D91 fields; nothing else under `content/` or `data/`
      changed by hand.
- [ ] D91 appended to `docs/DECISIONS.md` with the measured numbers; the M29 row in `docs/PLAN.md` set to shipped; the
      HANDOFF entry moved to "Where things stand"; section 12 renamed "Built, deviations" with the byte table as built.

## 12. Built, deviations

Built 2026-10-12 on branch `build/lists-and-media` from `04b705c8fb`, in the phases of section 6, one or two commits
each. Every number below was measured on a local build of that tree with the 2026-10-12 content and the media index
regenerated locally by `renderSearchIndex` (phase 5's fields; not committed), against the read-only baseline build of
`04b705c8fb` (tar 729,118,720 bytes, 59,135 files). Gates: `npm run typecheck` clean, `npm test` 510 of 511 passed (1
skipped, as on main); the headless pass of 7.4 passed 74 of 74 checks (its 15 steps plus extra checks: `?major=29`, kind
from all on, two years, two blogs, the Area fold, the load failure, focus after "Show more", page errors).

### 12.1 What was built, per phase

- **Phase 1, E1.** The post card's image is a 200 px column beside the text from 601 px (`:has()`), hidden under 600 px.
  Measured on `posts/aardvarklabs-blog/1609/`: at 1280 x 900 the stage is 202 px tall and "Key points" starts at 814 px
  (1,080 before); at 375 x 812 `.stage-hero` is `display: none` and its image is not requested; a video page's stage
  stays 16:9.
- **Phase 2, C3.** `site/src/lib/digest-cards.ts` (`weekState`, `weekLine`, `radarLine`, tested); `/digests/` has the
  lede and one card per week; the running week (build date on or before its last day) is dashed and says "in progress".
- **Phase 3, C4.** `site/src/lib/source-cards.ts` (`sourceKind`, `countLine`, `lastStop`, tested); `/sources/` has one
  card per source (icon, kind, tier, count, top three systems, newest item across posts, videos, changes and releases);
  the source page's kind and stat tile use `sourceKind`: the AL Language extension's page says "changelog" and "63
  releases" (+8 bytes on that page, no other source page changed).
- **Phase 4, filter engine and C5.** `pickPill` and `pickDisabled` in `pills-core.ts`; `facets-core.ts` (pure, tested);
  `facets.ts` (`bindFacets`, `mountTableFacets`, `writeSearch`); `site/src/components/Facets.astro` renders a filter
  block. `/features/`: tracker cells link into Wave, Status and Area pills (Area folded), the table filters in place.
- **Phase 5, media records.** `pageRecord` writes `branch`, `major`, `objects`, `breaking`, `community` on changes and
  `review`, `embed: false` on videos; both `PageRecord` interfaces gain them. The writer run into a temporary directory:
  media shard 1,496,206 to 1,554,439 bytes (+58,233; gzip -9 367,932 to 371,871), hubs and objects shards unchanged
  (same hashes). `search-golden` and `mcp-golden` pass unchanged.
- **Phase 6, C1 and C2.** `list-rows.ts` (rows, order, facets, facet values, bottom line), `badges.ts` (Badges.astro reads
  its words from it, output unchanged), `media-rows.ts`, `mediaRecords` and `loadMediaRecords` in `index-loader.ts`,
  `media-list.ts`, and `site/src/components/MediaList.astro`, which the three list pages render under their unchanged
  eyebrow, `h1`, lede and this-week line. The D82 inline script, the `data-kinds` line, the row attributes, `kindsLine`
  and its test and `.pills .pill-count` are gone.

### 12.2 Deviations

1. **Two components the spec did not list.** `Facets.astro` (the filter block, used by the three lists and `/features/`)
   and `MediaList.astro` (filter block, rows, bottom line, title list, icon map and the one module script). One script
   entry for the three list pages instead of three, and one copy of the markup.
2. **The poster URL in `list-rows.ts` is a copy of `listPoster`**, with a unit test that keeps the two equal. Importing
   `lib/stage.ts` into the list bundle made Rollup split it into a shared 642-byte chunk that every video and post page
   then loaded as one more request (one more file in the tar).
3. **The two `/features/` tables sit in the shared `.table-scroll` wrapper** (+64 bytes). Step 12's 390 px check failed:
   the page was 506 px wide, on the baseline build too.
4. **`.list-more > [hidden] { display: none; }`** added to 4.11: `.btn` sets `display: inline-flex`, which overrode the
   `hidden` attribute, so the button showed without JavaScript.
5. **CSS in one contiguous block** marked `/* D91 */` after the D82 pill rules (the integrator's merge rule), the E1 rules
   included, instead of E1 at line 149. Line 149 (`aspect-ratio: 16 / 9` under 600 px) is removed as the spec says; the
   image is not shown there.
6. **Every value gets a pill.** `facetValues` appends a repository that is not in `CHANGE_REPOS` after the three (label =
   slug), and a record without a date gets the year "none" ("no date"); `/features/` lists the statuses present, in the
   table's order then any other, and a feature without an area would get a "no area" pill. Otherwise such rows could
   never show once the reader filters.
7. **`mediaRecords` also prunes** page shards the manifest no longer lists from Cache Storage, as `loadKind` does.
8. **After a failed load** the button stays disabled as specified, and the next pill click tries the load again.
9. **`tests/unit/change-pages.test.ts`** asserts the exact search record of a change page; it now includes the D91
   fields. The spec did not name it.
10. **Pills with a count of 0 at build** carry `disabled` (none on the 2026-10-12 content).
11. **"Show more" focus:** when the click adds no row, the bottom line takes the focus (`tabindex="-1"`).
12. **Step 16 (back-forward cache), informational:** in headless Chromium against `python3 -m http.server`, Back after a
    row click showed the 50 static rows again (the page was not kept). Restoring is section 8's later item.

### 12.3 Measured numbers

| Item | Before, bytes | After, bytes | Change |
|---|---|---|---|
| `/changes/` | 595,523 (gzip 129,726) | 161,009 (gzip 46,910) | -434,514 |
| `/videos/` | 621,491 (gzip 105,164) | 110,643 (gzip 26,851) | -510,848 |
| `/posts/` | 275,632 (gzip 30,523) | 104,063 (gzip 25,080), icon map 1,893 included | -171,569 |
| of which the three title lists | | 130,833 + 57,667 + 72,654 = 261,154 | |
| `/digests/` | 4,382 | 5,654 | +1,272 |
| `/sources/` | 9,499 | 33,367 | +23,868 |
| `/features/` | 19,304 | 29,269 | +9,965 |
| `sources/al-language-extension/` | 7,524 | 7,532 | +8 |
| media shard `pages-media-<sha12>.json` | 1,496,206 (`a8ae2ca74abf`) | 1,554,439 (`cae0845e544c`) | +58,233 |
| shared stylesheet `_astro/Base.<hash>.css` | 24,312 | 25,456 | +1,144 |
| JavaScript `_astro/*.js` | 163,110 in 17 files | 171,486 in 19 files | +8,376 |
| object, video and post pages (26,882 files) | | | 0 each (per-file sizes identical) |
| every other file | | | 0 (per-file sizes identical) |
| **Pages tar** | **729,118,720 (695.3 MB), 59,135 files** | **728,104,960 (694.4 MB), 59,137 files** | **-1,013,760 (-0.97 MB), +2 files** |

JavaScript: a `MediaList` entry (4,809 bytes) and a `facets` chunk (4,205, shared with the `/features/` entry) come;
the D82 entry of `/changes/` goes. `data-astro-cid` is 0 on the six index pages. Rows and title lists: 50 rows and
1,033, 566 and 551 titles; "no static link at all" 0 (299 media pages are linked only from their list's title list).

### 12.4 For the integrator

- **Push phases 5 and 6 together** (they are on this branch). The push runs two workflows: `pages.yml` (push on
  `site/**`) and the derive in `nightly.yml` (`pipeline/render/**`, D81), which rewrites `data/index/` (a new
  `pages-media-<sha12>.json` and the manifest) and whose finish triggers a second Pages build (`workflow_run`).
- **Until that derive's Pages build is live**, the site is built on the committed media shard of before D91: change rows
  print only their day (no branch, major or object count) and no breaking or community badge, the Major facet is one
  pill "no major 1,083", "breaking only" counts 2 (the kind only) instead of 15, and video rows have no review badge.
  Everything else (50 rows, title lists, "Show more", Repository, Kind, Channel, Blog and Year filters, cards, the
  features filters, the post card) works from the first build. Check `/changes/` after the derive's Pages run: rows read
  `main · BC30 · <day> · <n> objects`, Major shows BC30, BC29 and no major.
- Apply the three edits below, and delete the "Lists and media, D91" bullet from HANDOFF's "Open specs, not yet
  implemented".

**`docs/DECISIONS.md`**, append:

- **D91 Lists load in pages and filter by what they hold; weeks and sources are cards; the post card makes room.** The
  changes, videos and posts indexes shipped every row in one file (595,523, 621,491 and 275,632 bytes on 2026-10-12,
  2,300 rows; every new item added its row for good) and only the changes list had a filter (D82). Each now renders its
  newest 50 rows and, in a closed "by title" list, a link to every other page (299 media pages had no other static
  link: 183 videos, 108 posts, 8 changes); "Show 100 more" and every filter render the rows in the browser from the
  search index's media shard (D86), which every page can already load and which stays in Cache Storage; nothing is
  fetched until the reader acts. The media records gain what the rows print: a change's branch, major, object count and
  breaking and community flags, a video's review state and poster opt-out (+58,233 bytes); the scorer does not read
  them. Filters are pills whose counts follow the other filters: Repository, Kind, "breaking only" (the flag or the
  kind, D80's rule) and Major on changes; Channel or Blog and Year on videos and posts; Wave, Status and Area on
  features, whose tracker cells link into them. On list pages a click from "all on" keeps only that pill and later
  clicks toggle (`pickPill`), which amends D82's click rule there; the galaxy keeps D80's. A facet with more than eight
  values or 120 characters of labels sits in a closed details. Weekly digests are cards with the week's numbers and the
  radar, the running week (by the build date) marked "in progress"; sources are cards with icon, kind, tier, count, top
  three systems and their newest item, and a source page names its kind with the same words (the AL Language
  extension's says "changelog" and "63 releases", not "blog" and "posts"). The post stage's card puts its image in a
  200 px column beside the text and drops it under 600 px, CSS only: "Key points" moves from 1,080 to 814 px at 1280 x
  900. The review's "70vh iframe first" was wrong: the card has come first since D60. Measured on the 2026-10-12 build:
  the three lists 1,492,646 to 375,715 bytes (gzip 265,413 to 98,841), the media shard +58,233, the other index pages
  +35,113, the shared stylesheet +1,144, JavaScript +8,376; no object, video or post page changed size; tar 695.3 to
  694.4 MB (-1,013,760 bytes), files +2; a new item adds a 100 to 130 byte title line to its list instead of a full
  row. Rejected: paginated static pages (45 more files and about +0.24 MB, and filters would still need the shard), a
  rows JSON per list (+0.77 MB in three files), a media shard per type (a lighter "Show more", two more files and a
  manifest field; later), reading branch and major from the tags (ties the list to the tag order of `change.ts`), D82's
  toggle on long facets (20 clicks to see one of 21 blogs), a select for long facets (a second control shape), the
  running week from `generated.at` (an unchanged re-render keeps the old date), the post stage below the key points
  (the compact card is enough at 1280). Spec: `docs/specs/lists-and-media.md`.

**`docs/PLAN.md` section 5**, replace the M29 row:

`| **M29 lists and media** | the changes, videos and posts indexes render their newest 50 rows and a title list and load the rest from the media shard on "Show more" or a filter; pills with counts that follow the other filters (repository, kind, breaking only, major; channel or blog and year; wave, status and area with linked tracker cells), a click from "all on" keeps one pill; week cards on /digests/, source cards on /sources/, a compact post card; 695.3 to 694.4 MB tar on the same content (`docs/specs/lists-and-media.md`, D91, shipped 2026-10-12) | about 4 days in six phases | none: deterministic, no LLM |`

**`docs/HANDOFF.md`**, "Where things stand", a "Shipped 2026-10-12" entry:

- **Lists and media, D91** (`docs/specs/lists-and-media.md`, M29). Live after the derive that the merge triggers and its
  Pages build (until then change rows lack branch, major, object count and badges, video rows the review badge, and the
  Major facet is one pill). `/changes/`, `/videos/` and `/posts/` render their newest 50 rows and a closed title list of
  every other page, and load the rest from the search index's media shard on "Show 100 more" or a filter
  (`MediaList.astro`, `media-list.ts`, rows in `list-rows.ts`, tested); pills with counts that follow the other filters
  (Repository, Kind, breaking only, Major; Channel or Blog and Year), a click from all on keeps one pill (`pickPill`,
  amends D82 on lists), state in the query string; `/features/` filters by Wave, Status and Area and the tracker cells
  link into them; week cards on `/digests/` with the running week "in progress"; source cards on `/sources/`, and the AL
  Language extension's page says "changelog"; the post card's image is a 200 px column, hidden on phones. Media records
  gained the change and video facts the rows print (+58 KB). Local build on the 2026-10-12 content: **695.3 to 694.4 MB
  tar**, the three lists 1.49 MB to 376 KB, no object, video or post page changed, files +2. Later (spec section 8): a
  media shard per type, restoring "Show more" after Back, the pills on `/changes/week/`.

**`AGENTS.md`**, **`CONTENT-NOTICE.md`**: nothing; `data/index/pages-*.json` stays "every page's metadata", now with a
few more facts on change and video records.
