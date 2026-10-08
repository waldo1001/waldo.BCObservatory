# The observatory watches the AL Language extension changelog: one page per extension version

Status: proposed, 2026-10-08. Decision: D85 (reserved, appended to `docs/DECISIONS.md` at ship time). Milestone: M23 (reserved). Owner: waldo.
Scope: a new official source kind (`vsmarketplace`) that reads the Visual Studio Marketplace gallery for the AL Language
extension (`ms-dynamics-smb.al`), parses its changelog into one record per extension version, keeps dated snapshots
and diffs like the roadmap, writes one page per version under `content/releases/`, a Releases list on the site, a
record in the search index (so `whats_new` returns them) and a line in the weekly digest. Deterministic, no model
call, every page `review.state: derived`. Every claim below was verified against the tree at `3e77ec2c0a` on
2026-10-08; every number about the marketplace was measured on 2026-10-08 with the commands in section 7. Not in
scope: the this-week lens and the header pill (D80), links from changelog entries to Learn hubs or AL objects (a
model pass; section 8), the changelog's pre-4.0 tail (2016 to 2019 monthly updates), other extensions or AL-Go
releases as pages.

## 1. Goal

The owner asked on 2026-10-08: watch `https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog`,
"new info on here should be added to bcobs; the page is probably the same, just the info will change".

The observatory holds nothing about the AL Language extension today: `grep -rn "ms-dynamics-smb\|marketplace.visualstudio\|vsix" pipeline config schemas sources.yaml site/src packages docs` returns no hit; the only "al language" string is a
taxonomy keyword (`config/taxonomy.json:252`). Releases of the Microsoft repositories are stored as title lists only
(`CONTENT-NOTICE.md:15`, `pipeline/ingest/github-prs.ts:142-170`), and the AL extension is not a GitHub release.

What the marketplace actually offers (measured 2026-10-08, section 7 has the commands):

- The HTML page is a JavaScript shell (486 KB) that embeds exactly one changelog asset URL: the one of the **highest
  version number**, `30.0.2813176` (a pre-release uploaded 2026-10-01 13:54 UTC), not the newest upload
  `18.0.2819426` (stable, 2026-10-01 19:32 UTC). Scraping the page would miss the stable track.
- The gallery API behind the page is a POST without authentication:
  `POST https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery` with
  `Accept: application/json;api-version=3.0-preview.1` and the body in section 4.2. With `flags: 51` it returns
  649,311 bytes in 0.7 s: 185 versions from `0.7.12087` (2017-08-10) to `30.0.2813176` (2026-10-01), each with
  `lastUpdated`, the property `Microsoft.VisualStudio.Code.PreRelease` (`"true"` on pre-release uploads, absent
  otherwise) and a per-upload **immutable** changelog asset,
  `https://ms-dynamics-smb.gallerycdn.vsassets.io/extensions/ms-dynamics-smb/al/<version>/<upload-ts>/Microsoft.VisualStudio.Services.Content.Changelog`
  (`Content-Type: text/markdown`, `Cache-Control: public, max-age=31536000`, an ETag). Every GET form of the API
  (`.../vsextensions/al/latest/assetbyname/...`, `.../publishers/ms-dynamics-smb/extensions/al?flags=`) answers 404,
  so the ingest needs a POST; `httpGet` (`pipeline/lib/http.ts:17-25`) only sends GET today.
- The changelog is one markdown file holding the whole history: 416,061 bytes, 5,530 lines, 59 `## Version x.y`
  sections (30.0 down to 4.0.0) under 21 wave H1s (`# Business Central 2027 release wave 1` down to
  `# Business Central 2019 release wave 2 update`), 392 headings inside the version sections (3 heading texts
  repeat within one section), and in the whole file 969 bullets, 149 fenced code blocks and 273 distinct
  `github.com/microsoft/AL/issues/<n>` links. After `## Version 4.0.0` (line 4152) follows a 90,717-byte tail of
  monthly updates without version sections (`# Business Central April ‘19 update (2019/04)` at line 4299 down to
  `# December Preview Release (0.0.1 - 2016/12/20)`): out of scope, counted and dropped.
- The two tracks differ for the same version: the stable `18.0.2819426` asset (411,321 bytes) lacks
  `### Inherent permissions validation in multi-root workspaces`, which the pre-release `30.0.2813176` asset has under
  `## Version 18.0` (62,649 versus 58,517 bytes for the 18.0 section, measured from its `## Version` line to the
  next); 17.0 is byte-identical in both. "New info" therefore appears in either track, and an open version's
  section grows between uploads: both tracks are read and merged per version.
- Release dates are not in the changelog; the gallery has them per upload. The first upload of a `major.minor` with
  the pre-release property gives `preview_at`, the first without gives `released_at`: 30.0 preview 2026-10-01, no
  stable yet; 18.0 preview 2026-03-06, stable 2026-09-09; 17.0 preview 2025-08-29, stable 2026-04-01; 16.3 stable
  2026-01-22 only; 16.0 preview 2025-03-24, stable 2025-10-01; 15.0 preview 2024-09-10, stable 2025-04-02; 14.0
  preview 2024-03-01, stable 2024-10-02.
- The wave H1 maps to a BC major without a new table: `config/versions.json` labels its majors
  "2023 release wave 2 (BC23)" (`config/versions.json:19,25,31,...`), so "Business Central 2026 release wave 2"
  matches BC29. Waves older than BC23 or with an "update n" suffix get no major. The extension's own major jumped
  from 18 to 30 with the 2027 wave 1 pre-release, so the extension version is never used to derive the BC major.

After this change:

- `sources.yaml` lists the AL Language extension as an official source; a nightly asks the gallery once (4.7 KB
  with the latest-only flags; 649 KB with the full version list when a track moved), downloads a changelog asset
  only when its URL is new (the URL is immutable per upload) and writes a snapshot and a diff only when a version
  section changed, like the roadmap (`pipeline/ingest/roadmap.ts:56-75`).
- One page per extension version, `content/releases/al-<major.minor>.md`, with Microsoft's text verbatim (official
  tier, full text, like Learn), the gallery's dates, the BC major and wave, every GitHub issue link kept, and a
  "What changed on this page" list that records which entries Microsoft added or edited after the page first
  existed, by date.
- `/releases/` lists the versions newest first with their dates and entry counts; each page has a markdown twin and
  the section has an `llms.txt`; the search index carries a record per version, so the MCP `whats_new` tool returns
  a new or changed version without a code change to the tool (`pipeline/render/search.ts:49` reads `published_at`).
- The weekly digest's "Releases:" block names the AL extension versions released or previewed in the week and the
  versions whose entries changed in the week.

## 2. Reader- and agent-facing behaviour, after

### 2.1 The version page, `/releases/al-18.0/` and `/releases/al-18.0.md`

Title: `AL Language extension 18.0`. Type label on the site (`Page.astro` `kind`): `AL extension release · 18.0`
(`· pre-release` appended while no stable upload exists). Stats row: `BC29` (when known), `preview 2026-03-06`,
`released 2026-09-09`, `21 entries`, `31 issues`. Breadcrumb "Releases". Context link: "Visual Studio Marketplace
changelog" to the source URL.

Body, in this order:

1. The blockquote summary (frontmatter `summary`): "AL Language extension 18.0 for Business Central 2026 release
   wave 2 (BC29): previewed 2026-03-06, released 2026-09-09; 21 changelog entries, 31 GitHub issues fixed." For a
   version without a stable upload: "previewed 2026-10-01, no stable release yet".
2. A line: `[Changelog on the Visual Studio Marketplace](<source url>) · Business Central 2026 release wave 2 · BC29`.
3. `## What changed on this page` (only when at least one diff touched the version after its first snapshot):
   `- 2026-10-01: added "Inherent permissions validation in multi-root workspaces"`, newest first, one line per
   entry per diff date, verbs `added`, `changed`, `removed`. The first snapshot writes no diff, so the backfill pages
   have no such section.
4. The entries, in the changelog's order, each as `## <title>` (level 3 in the changelog) or `### <title>` (level 4),
   with the body markdown verbatim: bullets, fenced blocks, issue links such as
   `[#8280](https://github.com/microsoft/AL/issues/8280)`. Text that precedes the first heading of a section is
   rendered first without a heading. A stray `# On-premises` or a non-version `## Miscellaneous` inside the section
   is demoted to a level-3 entry (section 4.4).
5. `Source: Visual Studio Marketplace, ms-dynamics-smb.al changelog, Microsoft's text unchanged. Dates from the
   gallery's upload records.`

### 2.2 The list, `/releases/`

Eyebrow "Releases", H1 "<n> AL Language extension versions", lede: "Microsoft's changelog of the AL Language
extension for Visual Studio Code, one page per extension version, dates from the marketplace gallery. Agents:
llms.txt." One table, newest first: Version (link), Business Central (wave and BCnn), Preview, Released, Entries.
A pre-release-only version shows "not yet" in Released.

### 2.3 Navigation and discovery

- "Releases" in the top nav after "Changes" (`site/src/layouts/Base.astro:11-17`, twelve entries then; the D84 note
  there says eleven entries keep the header on one row at 1440 px, 73 px high: section 9 carries the check and the
  fallback).
- A home card "AL extension releases" between "Code changes" and nothing else (`site/src/pages/index.astro:18-29`):
  "Microsoft's changelog of the AL Language extension, one page per version, with what was added to it later."
- The root `llms.txt` gains `- [Releases](<site>releases/llms.txt): <n> AL Language extension versions from the
  marketplace changelog (dates, entries, issues)` (`site/src/pages/llms.txt.ts:30`).
- `content/releases/llms.txt`: `# BC Observatory: releases`, a two-line blockquote, `<n> versions, newest first.`,
  then `- [AL Language extension 18.0](al-18.0.md): 2026 release wave 2 (BC29), preview 2026-03-06, released 2026-09-09, 21 entries`.
- The source page `content/sources/al-language-extension.md` (`pipeline/render/source.ts:39-86`) labels the kind
  "extension" and counts "releases".

### 2.4 MCP

- `whats_new(since)` returns `releases/al-30.0` dated 2026-10-01 among the week's items; `whats_new(since, type:
  "release")` returns only versions. The tool description names them: "Videos, posts, roadmap features, AL
  extension releases (type 'release') and code changes ..." (`packages/mcp/src/server.ts:302`). The server
  instructions (line 287) add "AL Language extension releases (the marketplace changelog, under releases/)"; the
  `search` description's type list (line 289) gains `release`.
- `search("Markdown page fields")` finds `releases/al-30.0` through its summary and tags (entry titles are the
  page's tags, the first eight).
- `cat("releases/al-18.0")` returns the markdown twin.

### 2.5 The weekly digest

In `## Code changes`, the existing "Releases:" list (`pipeline/render/digest.ts:119-123`) gains lines
`- [AL Language extension 30.0](../releases/al-30.0.md) previewed 2026-10-01` /
`... released 2026-09-09` and, for a version whose entries changed in the week,
`- [AL Language extension 18.0](../releases/al-18.0.md): 1 entry added` (counts from the week's diffs). The block
header stays "Releases:"; the list prints AL-Go and BCQuality releases first, then the AL extension.

## 3. Decisions

Draft D85, appended to `docs/DECISIONS.md` at ship time:

- **D85 The observatory watches the AL Language extension changelog, one page per extension version.** The
  marketplace page `items/ms-dynamics-smb.al/changelog` is a shell that shows the changelog of the highest version
  number; the gallery API (`extensionquery`, POST, no key) lists every upload with its date, its pre-release flag and
  an immutable changelog asset, so the nightly reads the newest stable and the newest pre-release asset, parses the
  `## Version x.y` sections (59 on 2026-10-08), merges the two tracks per version and keeps one manifest item, one
  page (`content/releases/al-<version>.md`) and one search record per version. Snapshots and diffs
  (`data/releases/al/`) are written only on change, like the roadmap (D-roadmap pattern in `ingest/roadmap.ts`);
  the diff names the entries added, changed or removed per version, and the page lists them under "What changed on
  this page", so the growth of an open version's section is visible by date. Dates come from the gallery's uploads
  (first pre-release upload, first stable upload), the BC major from the wave H1 matched against
  `config/versions.json` labels. Microsoft's text is stored verbatim (official tier, full text, like Learn), review
  state `derived`, no model call. Readers find the pages under "Releases" in the nav, in the weekly digest's
  Releases block and through `whats_new`. Rejected: scraping the HTML page (it shows one track); one page per
  changelog heading (425 tiny pages with unstable ids: Microsoft renames headings); a page per upload (185, mostly
  identical); the this-week lens and header pill (a new kind in `landed.json` and five site touch points, D80, for
  a source that moves twice a month); a Haiku pass linking entries to hubs and objects (a later spec); the pre-4.0
  monthly updates (no version sections, 90 KB, 2016 to 2019). Spec: `docs/specs/al-extension-changelog.md`.

Rejected alternatives, with reasons:

- **Scrape the items page.** The page embeds only the highest version's asset (`30.0.2813176` on 2026-10-08) and
  carries `Cache-Control: no-cache`; the stable 18.0 upload of the same day would be invisible.
- **One page per changelog heading.** 392 headings today; heading text is the only key and Microsoft edits it (the
  18.0 section changed between two uploads five hours apart). The version is the stable id; headings are anchors.
- **One manifest item per upload (185).** Most uploads repeat the previous changelog byte for byte; the reader's
  unit is the version, as on the marketplace.
- **A fourth kind in the this-week lens.** D80's `landed.json` schema, `galaxy-core.ts`, `galaxy.ts`, `state.ts`
  and `Base.astro` would all change for one or two rows a month; the digest and `whats_new` already carry the news.
- **A model pass to link entries to Learn hubs and AL objects.** Useful (the 18.0 section names `IsolatedStorage`,
  `Query` ReadState, `TestHandlers`), but it adds a quota, a review (D77) and a prompt; section 8.
- **Keeping the pre-4.0 tail as a "history" page.** No version sections to key on; nobody asked for 2017 previews.

## 4. Contract

### 4.1 Source registry

`sources.yaml`, under "official", after the roadmap entry:

```yaml
  # ---------------------------------------------------------------- official: AL Language extension (marketplace changelog)
  - id: al-language-extension
    kind: vsmarketplace
    name: AL Language extension for Visual Studio Code (marketplace changelog)
    url: https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog
    tier: official
    full_text: true
    fetch:
      api: https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery
      extension: ms-dynamics-smb.al
    license: Microsoft; changelog text stored verbatim with attribution (CONTENT-NOTICE.md)
```

- `schemas/sources.json:46` kind enum gains `vsmarketplace`; line 69's `required: ["fetch"]` list gains it;
  `$defs/fetch` (lines 35-40) gains `"extension": { "type": "string", "pattern": "^[A-Za-z0-9_-]+\\.[A-Za-z0-9_-]+$" }`.
- `pipeline/lib/config.ts:8` `SourceKind` gains `"vsmarketplace"`; line 20 `fetch` gains `extension?: string`.
- `pipeline/validate/sources.ts:9` `OFFICIAL_HOSTS` gains `marketplace.visualstudio.com` (the policy test
  `tests/schema/sources.test.ts:36` otherwise rejects tier official for this url).
- `pipeline/render/source.ts:51,58,75,82`: kind label `extension`, evidence kind `marketplace`, noun
  `release`/`releases`, footer "releases of this source".

### 4.2 HTTP: a POST option

`pipeline/lib/http.ts:12` `HttpGet` opts gain `method?: "GET" | "POST"` and `body?: string`; line 18's `fetch`
passes `method: opts.method ?? "GET"` and `body: opts.body`. Nothing else changes; every existing caller sends GET.
The ingest calls:

```ts
ctx.http(api, { method: "POST", body: JSON.stringify(query), accept: "application/json;api-version=3.0-preview.1", headers: { "content-type": "application/json" } })
```

with `query = { filters: [{ criteria: [{ filterType: 7, value: extension }], pageNumber: 1, pageSize: 1 }], flags }`.
`flags: 0x213` (latest version only, with its files and properties, 4.7 KB) for the nightly check; `flags: 51`
(every version, 649 KB) only when the latest upload is not the one in the last snapshot, to recompute the dates.
The test fake (`tests/unit/ingest.test.ts:25-37`) matches on the URL prefix and ignores the method, so one route
serves both calls; a test that needs to tell them apart inspects `opts` through a wrapper.

### 4.3 Ingest: `pipeline/ingest/marketplace.ts`

`export async function ingestMarketplace(source: SourceDef, ctx: IngestContext): Promise<SourceResult>`, registered
in `BY_KIND` (`pipeline/ingest/index.ts:14-17`) as `vsmarketplace: ingestMarketplace` and in `PILLAR_OF`
(`pipeline/ingest/types.ts:49-52`) as `vsmarketplace: "release"`.

New pillar `release`: `pipeline/lib/manifest.ts:14` `Pillar` union and `:46-55` `FLOWS` gain
`release: ["discovered", "fetched", "published"]`; `schemas/manifest-item.json:10` pillar enum gains `release`;
`pipeline/orchestrator/stages.ts:46-74` gains
`release: { fetched: passThrough({ from: "snapshot" }), published: releasePublished() }`.

Steps, in order:

1. `latest = await gallery(flags 0x213)`: the newest upload (`versions[0]`, the gallery sorts newest first) with
   `version`, `lastUpdated`, `prerelease` and `asset` (the changelog file's `source`).
2. Read the previous snapshot (`data/releases/al/snapshots/<latest date>.json`, section 4.5). When
   `latest.asset` equals `tracks.stable.asset` or `tracks.prerelease.asset`, nothing moved: re-`discover` every
   version from the snapshot with its stored hash (no change) and return `note: "unchanged; latest <version>
   uploaded <date>"`. One request on a quiet night.
3. Otherwise `all = await gallery(flags 51)`: every upload. `tracks.stable` = newest upload without the
   pre-release property, `tracks.prerelease` = newest with it (null when the stable upload is newer than every
   pre-release upload, as it is for 16.3). Per `major.minor`, `preview_at` = earliest `lastUpdated` among
   pre-release uploads, `released_at` = earliest among stable uploads (both `YYYY-MM-DD`, UTC).
4. Download each track's asset whose URL differs from the previous snapshot's (at most two GETs; a track whose
   asset URL is unchanged reuses the parsed sections stored in the snapshot).
5. `parseChangelog(md)` per track (section 4.4), then merge: the union of versions; per version the union of
   entries by `slug`; an entry present in both tracks with different `body_md` takes the body of the track whose
   asset was uploaded later; entry order follows the later-uploaded track, entries only in the other track are
   appended in their own order. `wave` from the track that has the version, the later-uploaded one first.
6. For each merged version: `key = al-<version>` (e.g. `al-18.0`, `al-4.0.0`: the changelog's own version text,
   never normalised), `major` from the wave (section 4.4), and

   ```ts
   ctx.manifest.discover({
     pillar: "release", source: source.id, key, tier: source.tier, title: `AL Language extension ${version}`,
     url: source.url, published_at: released_at ?? preview_at ?? null,
     input_hash: sha256(canonicalJson({ version, wave, major, preview_at, released_at, entries })),
     meta: { version, wave, major, preview_at, released_at, prerelease: !released_at, entries: entries.length },
   }, ctx.now)
   ```

   `tally` each change (`types.ts:57`); `markRemoved("release", source.id, present)` after the loop (a version that
   leaves the changelog is skipped `removed-upstream`, revived when it returns; `manifest.ts:216-225`).
7. Snapshot and diff only on change (section 4.5). `note`: `"59 versions from 185 uploads; stable 18.0.2819426
   (2026-10-01), pre-release 30.0.2813176 (2026-10-01); 90,717 bytes before 4.0.0 dropped; snapshot written (+0 -0
   ~1: al-18.0 +1 entry)"`.

A gallery error or a non-200 asset throws; `runIngest` (`pipeline/ingest/index.ts:30-42`) isolates it to this
source, the last snapshot stays and the pages stay (`releasePublished` reads the snapshot, not the network).

### 4.4 Parser: `pipeline/ingest/changelog-md.ts` (pure, no I/O)

```ts
export interface ChangelogEntry { slug: string; level: 3 | 4; title: string; body_md: string; issues: number[] }
export interface ChangelogSection { version: string; wave: string | null; major: string | null; entries: ChangelogEntry[] }
export interface ParsedChangelog { sections: ChangelogSection[]; dropped_bytes: number; waves: string[] }
export function parseChangelog(md: string, majors: Record<string, { label: string }>): ParsedChangelog
export function waveMajor(wave: string | null, majors: Record<string, { label: string }>): string | null
```

Rules, each one a test in section 5:

- Lines are split on `\n`; `\r` is stripped; a UTF-8 BOM is stripped. Fenced blocks (` ``` ` lines) are tracked:
  no line inside a fence is a heading.
- A wave H1 is a line matching `^# Business Central (.+)$`; it sets the current `wave` ("2026 release wave 2", the
  text after "Business Central ") for the sections that follow. Any other H1 inside a section is content (demoted).
- A section starts at `^## Version (\S+)\s*$` and ends at the next such line or the next wave H1. `version` is the
  captured text (`18.0`, `4.0.0`).
- `major`: the wave text, lower-cased and trimmed, equals a `config/versions.json` `majors.<n>.label` without its
  ` (BCnn)` suffix (`"2026 release wave 2 (BC29)"` → `"2026 release wave 2"`); then `major = "29"`. No match
  (`"2021 release wave 1 update 3"`, waves before BC23) → `null`.
- Inside a section, a heading line `^#{1,4} (.+)$` opens an entry: level 3 for `###`, level 4 for `####`, and level 3
  for a stray `#` or `##` (`# On-premises`, `## Miscellaneous`, `## GitHub Issues`). `title` is the heading text
  with trailing `:` and ` -->` removed and whitespace collapsed. `slug = slugify(title, 80)` (`pipeline/lib/text.ts:9`);
  a repeated slug in the same section gets `-2`, `-3`.
- Text before the first heading of a section becomes the entry `{ slug: "_intro", level: 3, title: "" }` when it
  holds a non-blank line.
- `body_md`: the lines between the heading and the next heading of the section, trailing blank lines removed,
  otherwise verbatim (fences, tables, indentation, HTML comments kept).
- `issues`: the distinct numbers in `github.com/microsoft/AL/issues/(\d+)` links of the body, ascending.
- `dropped_bytes`: the UTF-8 length of everything after the last section's end that no section claims (the pre-4.0
  tail; 90,717 on 2026-10-08) plus anything before the first wave H1 (0 today).
- `waves`: the wave texts in file order, for the ingest note.

### 4.5 Data: `data/releases/al/snapshots/<YYYY-MM-DD>.json` and `diffs/<YYYY-MM-DD>.json`

Written by `writeReleaseSnapshot(versions, tracks, ctx)` modelled on `writeSnapshot` (`pipeline/ingest/roadmap.ts:57-75`):
hash the `versions` array canonically; equal to the newest snapshot's hash → return "snapshot unchanged" and write
nothing; otherwise write both files. Two runs on one day overwrite that day's files (as the roadmap does).

```json
{
  "taken_at": "2026-10-09T01:12:40.000Z",
  "hash": "<sha256 of canonicalJson(versions)>",
  "extension": "ms-dynamics-smb.al",
  "uploads": 185,
  "tracks": {
    "stable": { "version": "18.0.2819426", "uploaded_at": "2026-10-01T19:32:21.250Z", "asset": "https://ms-dynamics-smb.gallerycdn.vsassets.io/extensions/ms-dynamics-smb/al/18.0.2819426/1790882651398/Microsoft.VisualStudio.Services.Content.Changelog", "bytes": 411321 },
    "prerelease": { "version": "30.0.2813176", "uploaded_at": "2026-10-01T13:54:23.493Z", "asset": "https://ms-dynamics-smb.gallerycdn.vsassets.io/extensions/ms-dynamics-smb/al/30.0.2813176/1790862369724/Microsoft.VisualStudio.Services.Content.Changelog", "bytes": 421591 }
  },
  "dropped_bytes": 90717,
  "versions": [
    {
      "key": "al-18.0", "version": "18.0", "wave": "2026 release wave 2", "major": "29",
      "preview_at": "2026-03-06", "released_at": "2026-09-09",
      "entries": [
        { "slug": "inherent-permissions-validation-in-multi-root-workspaces", "level": 3, "title": "Inherent permissions validation in multi-root workspaces", "body_md": "The compiler now reports AL0720 when an `InherentPermissions` attribute in one project references an object from another project in a multi-root workspace.", "issues": [] },
        { "slug": "github-issues", "level": 3, "title": "GitHub issues", "body_md": "- [#8280](https://github.com/microsoft/AL/issues/8280) Fixed `al_publish` hanging ...", "issues": [8280] }
      ]
    }
  ]
}
```

`versions` is sorted newest first by `(released_at ?? preview_at)` descending, then by version text descending; the
sort is stable so a quiet night rewrites nothing. The diff:

```json
{
  "from": "2026-10-02", "to": "2026-10-09",
  "added": ["al-30.1"], "removed": [], "changed": ["al-18.0"],
  "entries": { "al-18.0": { "added": ["inherent-permissions-validation-in-multi-root-workspaces"], "changed": [], "removed": [] } }
}
```

`entries` holds only versions in `changed`; an `added` version lists nothing (every entry is new with it). Validated
by a new `schemas/release-snapshot.json` and `schemas/release-diff.json` through `validateOrThrow` (`pipeline/lib/schema.ts`).

### 4.6 Page: `content/releases/al-<version>.md`, `schemas/frontmatter.release.json`

- `schemas/frontmatter.base.json:8-9`: the `id` pattern and the `type` enum gain `release`; line 30's evidence kind
  enum gains `marketplace`.
- `schemas/frontmatter.release.json` (new), `allOf` base, `type: const "release"`, required: `extension`
  (`"ms-dynamics-smb.al"`), `version` (string), `wave` (string|null), `major` (string|null, `^\d+$`), `preview_at`
  (date|null), `released_at` (date|null), `published_at` (date: `released_at ?? preview_at`; a version with
  neither, impossible today because every version has an upload, falls back to the snapshot date), `prerelease`
  (boolean: no stable upload yet), `entry_count` (integer), `issues` (integer array, ascending, distinct),
  `changes` (array of `{ at: date, added: string[], changed: string[], removed: string[] }`, the diffs that touched
  this version, newest first; empty on the backfill).
- Fixed values: `tier: official`, `language: en`, `system: development` (`config/taxonomy.json:241`),
  `tags`: the first eight entry titles lower-cased (never `_intro`), `review: reviewOf(false)`
  (`pipeline/lib/review.ts:13`), `generated: { at, pipeline: PIPELINE_VERSION, prompts: {}, input_hash: item.input_hash }`,
  `evidence: [{ kind: "marketplace", url: <source url>, title: "AL Language extension changelog, version 18.0", date: released_at ?? preview_at, commit: null, t: null, quote: null }]`,
  `links: { learn: [], objects: [], features: [], topics: [], localizations: [], videos: [], posts: [], guidelines: [] }`.
- `summary`: section 2.1 item 1, through `clip` (`pipeline/summarize/video.ts`, as `feature.ts:76` does) so it
  stays under the base schema's 600 characters.

Renderer `pipeline/render/release.ts`:

```ts
export function renderReleasePage(item: ManifestItem, v: SnapshotVersion, changes: VersionChange[], sourceUrl: string, now: Date): string
export function releasePublished(): StageHandler        // reads the newest snapshot and every diff, writes the page when its stable text differs (feature.ts:123-134 pattern)
export function rerenderReleasePages(manifest, dataDir, contentDir, now): number   // after ingest, so a diff written tonight reaches pages published earlier
export function renderReleaseIndex(contentDir: string, dataDir: string): number   // content/releases/llms.txt; removes pages of versions the newest snapshot lacks (feature.ts:152-174 pattern)
```

Called from `pipeline/orchestrator/nightly.ts:428` next to `renderFeatureIndex`, inside the same phase. The body is
section 2.1; `## What changed on this page` lines come from `changes` with the entry titles looked up in the
version's entries (a removed slug prints its slug). Headings inside `body_md` cannot occur (the parser stops an
entry at any heading), so the page's heading levels are the renderer's alone: entry level 3 → `##`, level 4 → `###`.

### 4.7 Search index, MCP, digest, site

- `pipeline/render/search.ts:85`, after the feature line:
  `if (fm.type === "release") { r.status = fm.prerelease ? "prerelease" : "released"; if (fm.wave) r.path_label = \`${fm.wave}${fm.major ? \` (BC${fm.major})\` : ""}\`; }`.
  `date` already comes from `published_at` (line 49).
- `packages/mcp/src/server.ts:287,289,302`: wording in section 2.4; `tests/unit/mcp.test.ts` pins the tool list
  and descriptions, so its expected strings change with them.
- `pipeline/render/digest.ts:119-123`: after `released` is built, append the AL versions: from the newest snapshot
  in `data/releases/al/snapshots/`, those with `released_at` or `preview_at` in the week (`inWeek`, line 44), and
  from the week's diff files (file name date `inWeek`, as line 53 does for roadmap diffs) the versions in `changed`
  with their entry counts. Lines as in section 2.5. The digest frontmatter (`schemas/frontmatter.digest.json`)
  does not change; the counts object stays as it is.
- `site/src/content.config.ts:56`: `releases` collection, `glob({ pattern: "*.md", base: "../content/releases", generateId: ({ entry }) => entry.replace(/\.md$/, "") })`.
- `site/src/pages/releases/index.astro`, `[id]/index.astro`, `[id].md.ts`, `llms.txt.ts`: copies of the `features/`
  four (`site/src/pages/features/`), with the table of section 2.2, `kind` and stats of section 2.1, crumbs
  `[{ label: "Releases", href: `${base}releases/` }]`, context `{ label: "Visual Studio Marketplace changelog", href: <source url> }`.
- `site/src/layouts/Base.astro:14-16`: `["releases", "Releases"]` after `["changes", "Changes"]`.
- `site/src/pages/index.astro:9-10,18-29`: `releases` in the collections list and a card after "Code changes".
- `site/src/pages/llms.txt.ts:30`: the Releases line after Features.
- `CONTENT-NOTICE.md:15`: a new row after the merged pull requests row (section 12).

## 5. Test plan (write first)

`tests/unit/changelog-md.test.ts` (fixture `tests/fixtures/al-changelog.md`, about 120 lines cut from the real file:
the 30.0 and 18.0 heads, a `# On-premises` H1 inside a `####` entry with a fenced block, `## Version 12.7` with
`## Miscellaneous`, `## Version 12.6` with `## GitHub Issues`, a repeated `### Bug fixes`, `## Version 4.0.0`, then a
`# Business Central April ‘19 update (2019/04)` tail with `## February 2019 update`; a BOM and CRLF variant built in
the test):

1. `parseChangelog` returns 5 sections in file order with versions `30.0, 18.0, 12.7, 12.6, 4.0.0`; waves
   `2027 release wave 1`, `2026 release wave 2`, `2023 release wave 2` (12.7 and 12.6), `2019 release wave 2 update`.
2. `waveMajor("2026 release wave 2", majors)` is `"29"`; `"2027 release wave 1"` is `"30"`; `"2019 release wave 2
   update"` and `null` are `null` (majors fixture from `config/versions.json`).
3. The `# On-premises` line inside the `####` entry opens a level-3 entry `on-premises`; the fenced block that
   contains a `# comment` line stays inside the previous entry's `body_md`.
4. `## Miscellaneous` and `## GitHub Issues` are level-3 entries, not section boundaries; the section count stays 5.
5. The repeated `### Bug fixes` yields slugs `bug-fixes` and `bug-fixes-2`.
6. Text before 18.0's first heading yields `_intro`; a section whose first line is a heading has no `_intro`.
7. `issues` of the 30.0 `github-issues` entry are `[8171, 8273, 8280]` (ascending, distinct, from the fixture).
8. `dropped_bytes` equals the UTF-8 length of the tail from `# Business Central April ‘19 update` to the end.
9. BOM and `\r\n` input parse to the same sections as the plain input.
10. A heading with a trailing ` -->` (`#### Miscellaneous -->`) titles `Miscellaneous`.

`tests/unit/ingest.test.ts`, new tests after the roadmap one (line 105), `fakeHttp` routes for the gallery URL (one
JSON body serving both flag values) and two asset URLs:

11. First run: `counts.new` is the number of merged versions, `note` matches `/snapshot written/`, the snapshot
    file exists with both tracks, no diff file (`from: null` is not written; mirror `roadmap.ts:68` which writes
    `from: null`: assert the diff exists with `from: null` and empty `entries`, the renderer ignores it).
12. Second run, same responses: `counts.unchanged` equals the version count, `http.seen` has one gallery call and
    no asset call, no new snapshot.
13. Third run: the pre-release asset gains one `###` under 18.0 and a new upload `30.0.2900000`: `counts.changed`
    is 1, the manifest item `release/al-language-extension/al-18.0` is `stale`, the diff lists
    `entries["al-18.0"].added` with the new slug, `tracks.prerelease.version` is `30.0.2900000`.
14. Track merge: the stable asset holds an entry the pre-release lacks and both hold `github-issues` with different
    bodies, stable uploaded later → the merged 18.0 has both entries and the stable body for `github-issues`.
15. Dates: with uploads `18.0.1` (pre-release, March), `18.0.2` (pre-release, June), `18.0.3` (stable, September)
    the version gets `preview_at` March and `released_at` September; `16.3` with stable uploads only gets
    `preview_at: null`.
16. A gallery 500 makes `ingestMarketplace` throw; `runIngest` returns `ok: false` for the source and the previous
    snapshot is untouched.

`tests/unit/release-pages.test.ts`:

17. `renderReleasePage` for the 18.0 fixture validates against `frontmatter.release`, has `published_at` equal to
    `released_at`, `prerelease: false`, `entry_count` and `issues` as computed, `tags` without `_intro`, the
    summary under 600 characters.
18. With one change record the body has `## What changed on this page` before the first entry heading and the
    line `- 2026-10-01: added "Inherent permissions validation in multi-root workspaces"`; without changes the
    section is absent.
19. Entry levels map to `##` and `###`; a fenced block in `body_md` is verbatim; the `_intro` text precedes the
    first `##`.
20. `renderReleaseIndex` writes `llms.txt` newest first and deletes a page whose version the newest snapshot
    lacks; `releasePublished` returns `{ skip: "removed-upstream" }` for such an item.
21. `rerenderReleasePages` rewrites a published page when a new diff touches its version and leaves the file
    untouched (same mtime content) otherwise (compare through the `stable()` strip of `generated.at`).

`tests/unit/search-index.test.ts`: 22. a release record has `type: "release"`, `date` from `published_at`,
`status: "prerelease"` for 30.0 and `path_label` `2027 release wave 1 (BC30)`.

`tests/unit/digest.test.ts`: 23. a week holding 30.0's `preview_at` and a diff that changed 18.0 prints both AL
lines in "Releases:"; a week with neither prints no AL line and the existing AL-Go behaviour is unchanged.

`tests/schema/sources.test.ts`: 24. the registry with the new source passes schema and policy (tier official
through the marketplace host); a `vsmarketplace` source without `fetch.extension` fails the schema.

`tests/unit/mcp.test.ts`: the pinned descriptions updated with the new wording (no new test).

## 6. Tasks

Phase A, the source (ships alone; nothing visible, a snapshot in `data/`):

1. Tests 1-10, 15, 24 (red). `schemas/sources.json`, `config.ts`, `validate/sources.ts` host, `sources.yaml` entry.
2. `pipeline/ingest/changelog-md.ts` (tests 1-10 green). Fixture from the real asset with the section 7 commands.
3. `http.ts` POST option; `pipeline/ingest/marketplace.ts` with `writeReleaseSnapshot`; the two data schemas; the
   pillar in `manifest.ts`, `manifest-item.json`, `types.ts`, `index.ts`, `stages.ts` (`published` as
   `passThrough({ page: false })` until phase B). Tests 11-16 green.
4. `npm run validate:sources`, `npm test`, `npm run typecheck`. Commit: `feat(ingest): the AL Language extension
   changelog as a source, one manifest item per version, snapshot and diff on change (D85 phase A)`.

Phase B, the pages (one content commit: 59 pages, about 0.5 MB; `content/features` is 544 KB for 81 pages):

5. Tests 17-22 (red). `frontmatter.base.json`, `frontmatter.release.json`, `pipeline/render/release.ts`, the
   `published` handler, `renderReleaseIndex` and `rerenderReleasePages` in `nightly.ts:428`, `search.ts:85`,
   `source.ts` labels, MCP wording and `mcp.test.ts`, `CONTENT-NOTICE.md` row. Tests green,
   `npm run validate:content` on a tree with the 59 pages.
6. Commit the code: `feat(render): one page per AL Language extension version under content/releases, in the
   search index and whats_new (D85 phase B)`. The pages themselves land through the nightly (the Mini runs the
   pipeline; a developer never commits generated content, `AGENTS.md`).

Phase C, the site and the digest:

7. Test 23 (red), the digest lines. The `releases` collection, the four pages under `site/src/pages/releases/`,
   the nav entry, the home card, the root `llms.txt` line. Site build with Node 22 (`docs/RUNBOOK.md`), the header
   check of section 7.
8. Commit: `feat(site): Releases in the nav: the AL Language extension versions, with the digest's release lines
   (D85 phase C)`. Then the ship-time edits of section 12: DECISIONS, PLAN, HANDOFF, AGENTS.md, this spec's
   section 12 renamed "Built, deviations".

## 7. Verification

Probes the coder re-runs (they produced the numbers of section 1; a different answer means the marketplace changed
and the spec's numbers need a refresh, not the design):

```bash
S=$(mktemp -d)
curl -s -X POST 'https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery' \
  -H 'Content-Type: application/json' -H 'Accept: application/json;api-version=3.0-preview.1' \
  -d '{"filters":[{"criteria":[{"filterType":7,"value":"ms-dynamics-smb.al"}],"pageNumber":1,"pageSize":1}],"flags":51}' > "$S/query.json"
python3 -I - "$S/query.json" <<'PY'
import json, sys, collections
e = json.load(open(sys.argv[1]))["results"][0]["extensions"][0]
vs = e["versions"]; print("uploads", len(vs), "newest", vs[0]["version"], vs[0]["lastUpdated"])
for v in vs[:3]:
    p = {x["key"]: x["value"] for x in v.get("properties", [])}
    f = {x["assetType"]: x["source"] for x in v.get("files", [])}
    print(v["version"], v["lastUpdated"][:16], "prerelease" if p.get("Microsoft.VisualStudio.Code.PreRelease") == "true" else "stable", f["Microsoft.VisualStudio.Services.Content.Changelog"])
PY
# the two assets, then the section rule
curl -s -o "$S/pre.md" "<prerelease asset url>"; curl -s -o "$S/stable.md" "<stable asset url>"; wc -c "$S"/*.md
grep -cE '^## Version ' "$S/pre.md"            # 59 on 2026-10-08
grep -cE '^# Business Central ' "$S/pre.md"    # 21 wave H1s (the tail's "April ‘19 update" H1 also matches: 22 lines; the parser treats it as a wave with no sections)
grep -oE 'github\.com/microsoft/AL/issues/[0-9]+' "$S/pre.md" | sort -u | wc -l   # 273
diff <(grep -E '^#' "$S/pre.md") <(grep -E '^#' "$S/stable.md") | head          # the 18.0 entry only in the pre-release track
```

Note on the wave count: `grep -cE '^# Business Central '` also counts `# Business Central April ‘19 update (2019/04)`
at line 4299, which opens no version section; the parser records it in `waves` and its sections list is empty.

Code checks, per phase:

- A: `npm test`, `npm run typecheck`, `npm run validate:sources`; on a copy of the repository,
  `npm run nightly -- --stages ingest --only al-language-extension` twice: the first run writes
  `data/releases/al/snapshots/<today>.json` with 59 versions and 59 manifest items under
  `data/manifest/release/al-language-extension/`, the second run writes nothing (`git status --short data` empty)
  and its log line says `unchanged`.
- B: `npm run validate:content` after a local `published` pass; `grep -c '^## ' content/releases/al-18.0.md` equals
  the 18.0 entry count of the snapshot (level-3 entries) and the page's `entry_count` equals level-3 plus level-4
  entries; `packages/mcp` tests; a local `whats_new` call with `since: 2026-10-01` lists `releases/al-30.0`.
- C: site build with Node 22; `/releases/` lists the versions; `/releases/al-18.0/` renders the fenced blocks as
  code; the header at 1440 px stays one row (`scripts/ui-sweep.mjs` measures the header height; D84 recorded 73 px
  with eleven entries, section 9 says what to do at more). The headless check of the memory note
  (`bcobs-headless-ui-check`) serves `site/dist` under the base path.
- Real data: after the first nightly with phase B, `data/releases/al/snapshots/` has one file, `content/releases/`
  59 pages, `content/releases/llms.txt` 59 lines of versions, and the digest of that week lists no AL line unless a
  version was uploaded in the week.

## 8. Later, not in this spec

- A Haiku facts pass per new or changed entry that proposes Learn hub ids and AL object keys from the known id
  lists (validated against the manifest, quota in `config/budget.json`, Opus review per D77), so a release page
  links to `IsolatedStorage` or `Query` pages and those pages list the extension versions that touched them.
- The this-week lens: a release row under the Code pill's Tooling group (D80), once the lens has a second
  non-PR kind to justify the schema change.
- Other extensions from the same gallery (`ms-dynamics-smb.al-test-runner`? none exists today; the AL-Go VS Code
  extension if one appears) through the same `vsmarketplace` kind: the ingest is keyed by `fetch.extension`, so a
  second source is one registry entry, but its pages would need a prefix other than `al-`.
- The pre-4.0 tail as one "history" page.
- Per-entry anchors in the galaxy search (`live-search`) results.

## 9. Risks and open questions

- **The gallery API is undocumented.** vsce and VS Code have used `extensionquery` with these flags since 2017,
  and the asset URLs are plain CDN files. Default when it breaks: the source fails, the previous snapshot and
  pages stay, the run report names the error (section 4.3, last paragraph); nobody is paged.
- **Microsoft edits old sections.** The 18.0 section differed between two uploads five hours apart. Default: the
  page shows the newest text; the "What changed on this page" list keeps the dates and the entry names; bodies of
  earlier versions of an entry are not kept beyond the snapshots in `data/releases/al/snapshots/` (small: one file
  per changed night, about 420 KB each; 10 changes a year is 4 MB).
- **Heading renames look like remove plus add.** Accepted: the version is the stable id, the heading is an anchor.
- **Twelve nav entries.** D84 measured eleven entries at 73 px at 1440 px. Default if "Releases" makes the header
  wrap at 1440: drop the nav entry, keep the home card and a "Releases" link in the Changes index's lede, and say so
  in section 12.
- **Which track is "the page".** The marketplace shows the pre-release track when a pre-release has the higher
  version. The observatory merges both; a reader who compares with the marketplace sees a superset. Default: the
  page's footer says "merged from the stable and pre-release changelogs" when the two tracks differ for that version
  (a boolean `merged_tracks` in the snapshot's version record, not in the frontmatter).
- **The version text as key.** `al-4.0.0` and `al-18.0` follow the changelog; if Microsoft ever renames
  `## Version 18.0` to `## Version 18.0.0` the item would be removed and re-added. Default: no normalisation (a
  normaliser would guess), the diff shows it, the owner adds a `data/overrides/releases.yaml` alias then if it
  happens.
- **Backfill dates for early versions.** Uploads before 2020 have no pre-release property, so `preview_at` is null
  and `released_at` is the first upload; fine.
- **Snapshot size in the repository.** One snapshot is the whole parsed changelog (about 420 KB of JSON). Default:
  keep every snapshot (the roadmap keeps every one); revisit at 20 files.

## 10. Files

New:

- `pipeline/ingest/changelog-md.ts`, `pipeline/ingest/marketplace.ts`, `pipeline/render/release.ts`
- `schemas/frontmatter.release.json`, `schemas/release-snapshot.json`, `schemas/release-diff.json`
- `tests/unit/changelog-md.test.ts`, `tests/unit/release-pages.test.ts`, `tests/fixtures/al-changelog.md`
- `site/src/pages/releases/index.astro`, `site/src/pages/releases/[id]/index.astro`,
  `site/src/pages/releases/[id].md.ts`, `site/src/pages/releases/llms.txt.ts`
- `content/releases/*.md`, `content/releases/llms.txt`, `data/releases/al/snapshots/*.json`,
  `data/releases/al/diffs/*.json`, `data/manifest/release/al-language-extension/*.json` (written by the nightly)
- `docs/specs/al-extension-changelog.md` (this file)

Changed:

- `sources.yaml`, `schemas/sources.json`, `schemas/frontmatter.base.json`, `schemas/manifest-item.json`
- `pipeline/lib/config.ts`, `pipeline/lib/http.ts`, `pipeline/lib/manifest.ts`, `pipeline/validate/sources.ts`
- `pipeline/ingest/index.ts`, `pipeline/ingest/types.ts`, `pipeline/orchestrator/stages.ts`,
  `pipeline/orchestrator/nightly.ts`, `pipeline/render/search.ts`, `pipeline/render/source.ts`,
  `pipeline/render/digest.ts`
- `packages/mcp/src/server.ts`, `tests/unit/mcp.test.ts`, `tests/unit/ingest.test.ts`,
  `tests/unit/search-index.test.ts`, `tests/unit/digest.test.ts`, `tests/schema/sources.test.ts`
- `site/src/content.config.ts`, `site/src/layouts/Base.astro`, `site/src/pages/index.astro`,
  `site/src/pages/llms.txt.ts`
- `CONTENT-NOTICE.md`, `AGENTS.md`, `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`

## 11. Definition of Done

- [ ] Tests 1-24 exist and pass; `npm test`, `npm run typecheck`, `npm run validate:sources` green.
- [ ] `sources.yaml` has `al-language-extension`, tier official, and the policy accepts it.
- [ ] A nightly ingest writes one snapshot with 59 versions (or the day's count) and 59 manifest items; the next
      quiet night writes nothing for this source and sends one gallery request.
- [ ] `content/releases/` has one page per version, each passing `frontmatter.release`; `content/releases/llms.txt`
      lists them newest first; `npm run validate:content` green.
- [ ] `whats_new` returns a version page by its date; `search` filters by `type: release`; the MCP tests pin the new
      wording.
- [ ] The weekly digest prints the AL extension lines in "Releases:" for a week with an upload or an entry change.
- [ ] `/releases/`, `/releases/al-18.0/`, `/releases/al-18.0.md` and `/releases/llms.txt` build; "Releases" is in
      the nav (or the section 9 fallback is applied and recorded); the header stays one row at 1440 px.
- [ ] `CONTENT-NOTICE.md` has the row; `AGENTS.md` names the source among the official ones.
- [ ] `docs/DECISIONS.md` has D85; `docs/PLAN.md` M23 reads "shipped"; `docs/HANDOFF.md` moves this spec out of
      "Open specs" into "Where things stand"; this file's status line and section 12 are updated.

## 12. Proposed edits to other files (not applied)

D85 text: section 3.

`docs/PLAN.md` section 5, before the `v0.2+` row:

```
| **M23 AL extension changelog** | the AL Language extension's marketplace changelog as an official source: gallery API, both tracks merged per version, snapshot and diff on change, one page per extension version under `content/releases/` with "what changed on this page", Releases in the nav, in the search index and `whats_new`, a line in the weekly digest (`docs/specs/al-extension-changelog.md`, D85, proposed) | 1.5 to 2 days in three phases | none: deterministic, no LLM |
```

`docs/HANDOFF.md`, "Open specs, not yet implemented":

```
- **AL extension changelog**: `docs/specs/al-extension-changelog.md`, D85, M23. Status: proposed 2026-10-08, nothing
  implemented. Start with section 5 tests 1-10 (the parser, `tests/unit/changelog-md.test.ts`, fixture cut from the
  real asset with the section 7 commands), then `pipeline/ingest/changelog-md.ts` and `marketplace.ts` (phase A ships
  alone, no page). Until it lands, the observatory holds nothing about the AL Language extension: no page, no search
  record, no digest line; `whats_new` cannot answer "what changed in the AL extension".
```

`AGENTS.md:10`, the tier line: add "the AL Language extension's marketplace changelog" to the official list.

`CONTENT-NOTICE.md`, after the merged pull requests row:

```
| Official: AL Language extension changelog (Visual Studio Marketplace, publisher ms-dynamics-smb) | yes, with attribution | one page per extension version with Microsoft's changelog text unchanged, upload dates from the gallery, dated snapshots of the parsed changelog under `data/releases/al/` |
```

`packages/mcp/src/server.ts`: section 2.4 wording.

At ship time the coder renames this section "Built, deviations" and records what differs.
