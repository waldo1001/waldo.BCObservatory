# An About page in the top nav: who made this, why, how it runs (drawn), and who it is for

Status: implemented, 2026-10-08 (section 12 records what was built and where it differs). Decision: D83 (appended 2026-10-08). Milestone: M21. Owner: waldo.
Scope: a new static page `/about/` with a markdown twin `/about.md`; "About" as the tenth entry of the top nav and the
target of the wordmark's "unofficial, made by waldo" line (`site/src/layouts/Base.astro`); two inline SVG components
(the pipeline as a telescope, the galaxy key as a picture); the home page's "About, and for your agent" section
shrunk to a pointer (`site/src/pages/index.astro`); two footer links to the agent section; one line in the root
`llms.txt`. The prose is the owner's own text in one markdown file under `site/`, never under `content/`. Every claim
below was verified against the tree at `453e81e8c4` on 2026-10-08, and every number was measured on the `data/` of
that commit. Not in scope: a photo, the pipeline, the MCP server, any LLM stage, translations, a `cat about` in the MCP
(section 8).

## 1. Goal

The site does not say who made it, why, how it runs or who it is for, in any place a reader finds:

- The only self-description is the last section of the home page, `site/src/pages/index.astro:67-78`, headed
  "About, and for your agent": one lead paragraph, the two install commands and a line of links. It sits below a galaxy
  that fills the first screen (`index.astro:35`, `height="calc(100svh - var(--hdr-h, 72px))"`), the "Newly lit" list
  and the nine section cards. The owner, who built the site, said on 2026-10-08 that he had never seen the install
  block. Nobody scrolls three screens past a galaxy.
- The top nav has nine entries and none is about the site itself (`Base.astro:11-14`: Topics, Roadmap, AL objects,
  Localizations, Videos, Posts, Changes, Weekly, Sources). The wordmark line "unofficial, made by waldo"
  (`Base.astro:39`) is plain text, not a link.
- The footer (`Base.astro:66`) prints `MCP: npx bc-observatory` as inline code with no link and no install command.
- The README and `docs/announcement/v0.1-draft.md` hold the why and the how, on GitHub, not on the site. An agent that
  reads `llms.txt` gets a two-line description and links to AGENTS.md and PLAN.md, nothing a person would read.

After this change:

- "About" is the last entry of the top nav on every page, and the wordmark's small line links there too.
- `/about/` says, in the owner's first-person voice, who made this (funny, his kind), why (there is a shitload of
  information about Business Central and nothing ties it together or maps it in the ecosystem), how it runs (drawn as a
  telescope, with the live counts), and who it is for (seven cards, each a real question and the page that answers
  it). The two install commands are there, under an anchor `#agents` the footer links to.
- The home page section becomes a two-line pointer to `/about/`; the galaxy stays the home page.
- `/about.md` is the markdown twin: the same prose, the same counts, no SVG.
- The root `llms.txt` lists About under "Start here".

## 2. Reader- and agent-facing behaviour, after

### 2.1 The nav and the footer

- `nav` in `Base.astro` gains `["about", "About"]` as its tenth and last entry. `aria-current="page"` works through the
  existing `section` prop (`section="about"`).
- The wordmark becomes two links: `BC Observatory` to the home page as today, and `<small>` "unofficial, made by waldo"
  to `/about/`. Same look as today; underline on hover for the small line.
- Footer line: `MCP: npx bc-observatory` becomes `<a href="/about/#agents">MCP server</a> · <a href="/about/#agents">Claude Code plugin</a>`.
  No code block in the footer.
- Home page: the section at `index.astro:67-78` keeps its `id="agents"` heading, renamed "About", and shrinks to one
  lead sentence and one line: "Who made this, why, how it runs and who it is for: [About BC Observatory](/about/).
  For your agent: the MCP server and the Claude Code plugin are explained there too." The `<pre>` with the commands,
  the "Last nightly" line and the repository links leave the home page (About carries all three).

### 2.2 The page `/about/`

Layout: `List.astro` (breadcrumb "Galaxy › About", one column, `.page.list-page`), the body in `.prose` at the site's
prose width. No identity row, no tier badge, no review badge, no galaxy locator: this is the owner's own text, not a
generated page, and the page says so in its first line under the title ("Written by waldo, not by the pipeline. Counts
on this page come from the last nightly.").

Sections, in order, with the exact copy. The copy lives in `site/src/about/about.md` (section 4.1); the page renders
it; the counts are placeholders filled at build time.

**Title:** About BC Observatory

**## Who** (eyebrow "About me")

> I'm waldo. Eric Wauters on paper, but nobody uses the paper.
>
> I've been doing NAV, and then Business Central, since the version numbers had a dot in them. Microsoft has called me
> an MVP since 2007. My kids call me "the guy who's always typing".
>
> Here's the thing: I'm lazy. Properly lazy. Every tool I ever built was so I wouldn't have to do something twice. The
> CRS extension, so I'd stop naming files. PowerShell modules, so I'd stop opening PowerShell. BC Telemetry Buddy, so
> I'd stop writing the same KQL query for the fourth time and could just ask my agent what went wrong last night. You
> get the idea.
>
> Then AI agents came along and I thought: finally, I can be lazy at scale. I asked one about a field on the Customer
> table. It answered with great confidence and a field number that does not exist. Hasn't existed. Will never exist.
>
> So I did the thing I always do. I built something so I wouldn't have to check. A Mac Mini in my house now reads all
> of Business Central every night and writes it down, with receipts. This site is that. The agent still answers with
> confidence. Now it's also right.
>
> I co-founded iFacto, a Business Central partner in Belgium. I blog at waldo.be, mostly about what I broke that week.
> I'm Belgian, which explains both the stubbornness and the fact that this runs on a subscription instead of a budget.
>
> It's unofficial. Microsoft didn't ask for this. They're welcome.

Links in that text: "BC Telemetry Buddy" to https://github.com/waldo1001/waldo.BCTelemetryBuddy, "waldo.be" to
https://www.waldo.be, "iFacto" to https://www.ifacto.be. Nothing else is linked; the jokes stay jokes.

**## Why** (eyebrow "The why")

> There is a shitload of information about Business Central out there. Learn alone is thousands of pages. The code is
> on GitHub, all of it, every version. The roadmap is a website. There are hundreds of hours of sessions on YouTube and
> more blogs than anyone can read. None of that is the problem.
>
> The problem is that nothing ties it together. Nothing says: this Learn page is about that table, which that session
> explains at minute twelve, which Belgium changes, which Microsoft touched in a pull request last Tuesday, which this
> blog post warned you about. There is no map of the Business Central ecosystem. Everyone carries a piece of it in
> their head, and the agents carry nothing at all, so they make it up.
>
> So this is a map. Not a mirror: Microsoft Learn stays the documentation, your blog stays your blog. The observatory
> only draws the lines between them, and every line says where it comes from.
>
> Three rules I don't bend. **Agents first.** Every page has a markdown twin, every section an `llms.txt`, and one MCP
> server reads the same files the site does. **Evidence on everything.** A claim without a URL, a commit, a video
> second or a quote does not get on a page. **Honest about who wrote what.** Every page shows its trust tier (official
> is Microsoft, community is everyone else) and its review state, so you know whether a sentence was placed by code,
> written by a model, or checked by a bigger model.

**## How** (eyebrow "The how")

The telescope graphic (section 4.3), then four captions in one row, then the galaxy key graphic (section 4.4) with
its one-line caption. The captions, exact:

- "Nightly on a Mac Mini in my house, as a self-hosted GitHub runner, on a Claude subscription. No API keys, anywhere."
- "Deterministic first: the code is parsed, never summarised. Models only on what changed: Haiku for facts, Sonnet for
  prose, Opus to review. A page a model wrote says `unreviewed` until Opus has checked it."
- "Community text stays yours: a summary in our words, at most three quotes under 25 words, and a link back. A leak
  scanner fails the build if more than that ever reaches the repository. [CONTENT-NOTICE](repo link)."
- "Procedure bodies and the call graph come from [bc-code-atlas](https://github.com/StefanMaron/bc-code-atlas) by
  Stefan Maron, which the plugin connects next to this server."

Galaxy key caption: "The galaxy on the home page is the data model drawn. Systems are domains. Stars are hubs: Learn
topics, roadmap features, countries, sources and the most connected AL objects. Videos and posts orbit the hubs they
link to. A country draws a constellation over the W1 sky. This week's additions light up."

**## For who** (eyebrow "For who", anchor `#for-who`)

Seven cards in the home page's `.cards` grid style, each: the reader in bold, the question in quotes, one line of
answer, one or two links. Data in `site/src/lib/about.ts` (section 4.2); exact copy:

| Reader | Question | Answer | Links |
|---|---|---|---|
| The AL developer on a deadline | "Is this field still on Customer in BC30?" | The object page has every field, with the versions it exists in and its obsolete state, straight from the code. | `objects/table/18/` ("Table 18 Customer"), `neighbourhood/?mode=events` ("Who subscribes to an event?") |
| The partner planning an upgrade | "What breaks between BC28 and BC30?" | What changed per version and per object, which elements are obsolete or due for cleanup, and what Microsoft merged this week. | `code/versions/` ("Version lens"), `code/deprecations/` ("Deprecation radar"), `changes/week/` ("This week's code changes") |
| The consultant with a Belgian customer | "What does BE change in W1?" | Each country page diffs the layer against W1, down to the field, and the galaxy draws it as a constellation. | `localizations/be/` ("Belgium"), `#lens=pick:localization` ("Pick a country in the galaxy") |
| The person whose agent lies to them | "Table 18, what is field 7?" | Two commands, then ask. The answer comes with the page, its tier and its evidence. Telemetry Buddy tells you what happened last night; the observatory tells you what the code says should happen. Same agent, both servers. | `#agents` (the commands, right below), `plugin/skills` on GitHub ("the four skills: lookup, what's new, localization, grounding") |
| The blogger or channel owner | "Where does my content touch Business Central?" | Your source page has your footprint and a flight path through the galaxy. One pull request to `sources.yaml` gets you in. Derived only: your words stay on your blog. | `sources/` ("Sources"), `sources.yaml` on GitHub ("Add your blog or channel"), `CONTENT-NOTICE.md` on GitHub |
| The reader who suspects Learn is out of date | "Does Learn still document something that is gone?" | The drift report lists obsolete objects Learn still documents and new objects nobody documented yet. | `drift/` ("Drift") |
| Me | "Did that nightly actually land?" | I use this every day from Claude Code. That is why the bugs get fixed, and why you should tell me about the ones I missed. | `https://github.com/waldo1001/waldo.BCObservatory/issues` ("Report a problem") |

**## For your agent** (anchor `#agents`)

> Every page has a markdown twin (the `.md` button on every page), every section an [llms.txt](/llms.txt), and the MCP
> server reads the same files: search, ls, cat, get_object, diff_object, localization, whats_new, blog_footprint,
> feedback.

```
claude mcp add bc-observatory -- npx -y bc-observatory@latest
claude plugin marketplace add waldo1001/waldo.BCObservatory
```

> Without any install: [llms.txt](/llms.txt), GitMCP and DeepWiki (badges in the README).

**## What is in it today** (anchor `#counts`)

The nine section cards of the home page, reused as a compact list with live counts (`getCollection`, as
`index.astro:20-30` does) and one line each, plus the first-party apps. Measured on `data/index/index-manifest.json`
at `453e81e8c4`: 605 topic hubs, 25,645 AL objects, 96 first-party apps, 22 localizations, 80 roadmap features, 616
videos, 601 posts, 1,083 code changes, 4 digests, 32 sources. The page prints whatever the build sees.

**## Housekeeping** (anchor `#house`)

- "Last nightly {date}: {status}, {n} items new or changed." from `latestRun()` (`site/src/lib/state.ts:10`), the line
  the home page prints today (`index.astro:76`).
- "Code MIT, generated content CC BY 4.0; third-party material keeps its own terms. Unofficial; not affiliated with
  Microsoft." Links: repository, AGENTS.md, PLAN.md, RUNBOOK.md, CONTENT-NOTICE.md, sources.yaml, llms.txt, RSS.

### 2.3 The markdown twin `/about.md`

`site/src/pages/about.md.ts` serves `text/markdown`: a title line, the "Written by waldo" line, the prose of
`about.md` with the count placeholders filled, the How captions as a list (no SVG; the galaxy key caption carries the
legend in words), the seven cards as a list ("**Reader**: question. Answer. [link](url)"), the agent block, the counts
list, the housekeeping lines. Links absolute (`Astro.site` + base), as the root `llms.txt` does.

### 2.4 `llms.txt`

Under "Start here" (`site/src/pages/llms.txt.ts:44`), first line:
`- [About](${site}about.md): who made this, why, how the nightly runs, who it is for, and how to connect an agent`.

## 3. Decisions

**D83 (draft). The site explains itself on one page, in the owner's voice.** `/about/` is the tenth nav entry and the
wordmark's target. It holds the owner's first-person text (who, why), the pipeline drawn as a telescope and the galaxy
key drawn as a picture, seven "for who" cards that each pair a real question with the page that answers it, the two
install commands under `#agents`, live counts and the housekeeping lines. The prose is one hand-written markdown file
under `site/src/about/`, never under `content/` (generated only), rendered by the page and served as `/about.md`; it
carries no tier or review badge and says it was written by the owner. The home page's About section shrinks to a
pointer; the footer links "MCP server" and "Claude Code plugin" to `#agents`; the root `llms.txt` lists About first
under "Start here".

Rejected, with the reason:

- A photo or avatar (owner's choice, 2026-10-08): nothing to add to the repo or keep current.
- The text under `content/about.md`: `content/` is generated and validated against the frontmatter schemas; a
  hand-written page there would be the one exception to "never hand-edit `content/`" (AGENTS.md).
- The prose as strings in the Astro page: two copies to keep in sync (page and twin).
- About in the footer only: the footer is where the install block already hides; the owner asked for the top level.
- A model-written bio or why: the one page that should not be generated. Also no tier badge: "official" and
  "community" are about sources, not about the site's own voice.
- The install commands in the footer as a code block: too wide for the footer at 390 px; two links to `#agents` do
  the job.
- A hard-coded count anywhere in the copy: the counts change nightly; placeholders filled at build time, as the home
  page does.
- Reusing `Page.astro` (identity row, locator, Related): every prop assumes a generated page with an `id` in the
  graph; About has none.

## 4. Contract

### 4.1 `site/src/about/about.md` (new, hand-written)

Plain markdown, no frontmatter. Four `##` headings in this order: `## Who`, `## Why`, `## How`, `## For who`. The
Who and Why bodies are section 2.2 verbatim. The How body is the four captions as a list and the galaxy key caption
as a paragraph. The For who body is one paragraph: "Seven readers, seven questions, and the page that answers each."
(the cards come from `about.ts`). Placeholders `{{objects}}`, `{{topics}}`, `{{localizations}}`, `{{videos}}`,
`{{posts}}`, `{{features}}`, `{{changes}}`, `{{apps}}`, `{{sources}}`, `{{digests}}` may appear anywhere and are
replaced by the formatted count (`toLocaleString("en")`); an unknown placeholder fails the build (section 5).

### 4.2 `site/src/lib/about.ts` (new)

```ts
export interface Persona { who: string; ask: string; answer: string; links: { label: string; href: string }[] }
export function personas(base: string, repo: string): Persona[]   // the seven cards of section 2.2, in that order
export interface AboutCounts { topics: number; objects: number; apps: number; localizations: number; features: number; videos: number; posts: number; changes: number; digests: number; sources: number }
export function fillCounts(md: string, counts: AboutCounts): string // replaces {{key}}; throws on an unknown key
export function splitSections(md: string): Record<"who" | "why" | "how" | "forWho", string> // by the four ## headings; throws if one is missing
export function aboutMarkdown(md: string, counts: AboutCounts, personas: Persona[], run: RunSummary | null, site: string): string // the twin (2.3)
```

Example record:

```ts
{ who: "The consultant with a Belgian customer", ask: "What does BE change in W1?",
  answer: "Each country page diffs the layer against W1, down to the field, and the galaxy draws it as a constellation.",
  links: [{ label: "Belgium", href: `${base}localizations/be/` }, { label: "Pick a country in the galaxy", href: `${base}#lens=pick:localization` }] }
```

### 4.3 `site/src/components/Telescope.astro` (new): the pipeline drawn

One inline `<svg viewBox="0 0 960 400" role="img" aria-labelledby="tele-title tele-desc">` with a `<title>` and a
`<desc>` that reads the diagram in words (the same sentence the twin prints). Props: `counts: AboutCounts`.
Three columns, left to right, light travelling from the sources to the mirrors:

1. **Five sources** (left, stacked, each a rounded label with a thin line to the lens): "Microsoft Learn (tables of
   contents, {topics} hubs)", "microsoft/BCApps and the version history ({objects} objects, BC28 to BC30)", "Microsoft
   365 roadmap ({features} features)", "YouTube ({videos} videos)", "Community blogs via sources.yaml ({posts} posts,
   {sources} sources)". Each label is an `<a>` to its section index.
2. **The lens** (centre): two boxes in series. "Deterministic: tree-sitter parses the code, validators check every
   id, evidence is attached here (URL, commit, second)" and "Models, only on deltas: Haiku facts · Sonnet prose · Opus
   review; review state set here: derived, unreviewed, reviewed, flagged". A small label under the lens: "nightly ·
   Mac Mini · Claude subscription · no API keys".
3. **Two mirrors** (right): "The site: {pages} pages, the galaxy, a markdown twin per page" and "The MCP server and
   the plugin: `npx bc-observatory`, `llms.txt` per section". `pages` is the sum of the ten counts.

Style: strokes `var(--line-strong)`, text `var(--text)` and `var(--muted)`, the light path `var(--accent)`, the
models box `var(--g-media)`, the review label `var(--g-community)`; font `var(--font-mono)` at 12 px for labels,
`var(--font-ui)` 14 px for box titles. Nothing hard-coded: the tokens already switch with the theme. Under 760 px the
SVG scales with `width: 100%; height: auto` and the labels stay legible to 390 px (12 px at 960 wide scales to 4.9 px
at 390: so below 760 px a `<picture>`-free fallback applies: the component renders a second, stacked variant
`viewBox="0 0 400 760"` and CSS shows one of the two by `@media (max-width: 759px)`). Both variants are the same
Astro markup with a `stacked` prop; no JavaScript.

### 4.4 `site/src/components/GalaxyKey.astro` (new): the galaxy key drawn

One inline SVG, `viewBox="0 0 960 120"`, one row of six marks with their names, drawn with the same shapes and the
same tokens the canvas legend uses (`Galaxy.astro:129-136`: `.lg-hub` circle, `.lg-obj` rounded square, `.lg-tri`
triangle in `--g-media`, `.lg-bar` bar in `--g-media`, `.lg-cross` dashed line in `--g-edge-cross`, `.lg-com` dashed
circle in `--g-community`) plus the this-week ring (gold, the lens ring D71 draws). Labels: "hub (a star)", "AL
object", "video", "post", "crosses into another system", "community ring", "lit this week". A `<desc>` says the same
in one sentence. Same responsive rule as 4.3 (a two-row variant under 760 px).

### 4.5 `site/src/pages/about/index.astro` and `site/src/pages/about.md.ts` (new)

The page: reads `about.md` with `readFileSync` (not an Astro `.md` import: the placeholders must be filled before
rendering, and the twin needs the raw text), fills the counts, splits the sections, renders each body with Astro's
markdown renderer (`import { marked } ...` is not available: the site has no markdown dependency; use
`astro:content`'s `render` on a runtime-created entry, or, simpler and already in the tree, the `rendered.html` path
the collections use: add `about` as a one-file content collection with `glob({ base: "./src/about", pattern: "about.md" })`
in `site/src/content.config.ts`, schema `z.object({}).passthrough()`; `entry.body` is the raw text for the twin and
`render(entry)` gives the HTML). `siteLinks`/`wrapTables` from `site/src/lib/links.ts` apply as on topic pages.
The twin: `aboutMarkdown(entry.body, counts, personas, latestRun(), site)`.

Counts: the ten `getCollection` lengths, as `index.astro:8-10` and `llms.txt.ts:7-16` take them.

### 4.6 `Base.astro`, `index.astro`, `llms.txt.ts` (changed)

As section 2.1 and 2.4. `nav` gets `["about", "About"]`; the wordmark `<small>` becomes `<a href={`${base}about/`}>`
inside the wordmark (two anchors, the outer one no longer wraps the small line); footer line as 2.1.

## 5. Test plan (write first)

`tests/unit/about.test.ts` (node:test, as `tests/unit/*.test.ts`), importing `site/src/lib/about.ts`:

1. `fillCounts("{{objects}} objects, {{topics}} hubs", { objects: 25645, topics: 605, ... })` →
   `"25,645 objects, 605 hubs"`; `fillCounts("{{nope}}", counts)` throws with the placeholder name in the message.
2. `splitSections` on the real `site/src/about/about.md` returns four non-empty bodies; on a copy without `## How` it
   throws naming the missing heading.
3. `personas("/x/", repo)` returns 7; every `href` starts with `/x/` or `https://`; every `who`, `ask`, `answer` is
   non-empty; `ask` ends with `?`; the labels of all links are unique.
4. `aboutMarkdown(...)` contains, in order, `# About BC Observatory`, `## Who`, `## Why`, `## How`, `## For who`,
   `## For your agent`, `## What is in it today`, `## Housekeeping`; contains no `{{`; contains the two commands;
   with `run = null` prints "Last nightly: none yet".
5. The real `about.md` contains the words "shitload", "2007", "Telemetry Buddy" and does not contain "Hodor" or
   "ALOps" (the owner's corrections of 2026-10-08, pinned).
6. Every relative `href` in `personas()` matches a route the site builds: a list of known routes in the test
   (`objects/table/18/`, `neighbourhood/`, `code/versions/`, `code/deprecations/`, `changes/week/`, `localizations/be/`,
   `sources/`, `drift/`, `#lens=pick:localization`, `#agents`), compared after stripping `base`.

## 6. Tasks

Phase A, the page (half a day, ships alone with the How section as text only):

1. `site/src/about/about.md` with the copy of section 2.2; `site/src/lib/about.ts`; the tests of section 5 (red).
2. `content.config.ts` collection `about`; `about/index.astro` with `List.astro`, the sections, the cards, the agent
   block, counts, housekeeping; `about.md.ts`. Tests green.
3. `Base.astro`: nav entry, wordmark link, footer links. `index.astro`: the section shrinks. `llms.txt.ts`: the line.
4. Verification 7.1 to 7.4.

Phase B, the graphics (half a day):

5. `Telescope.astro` (both variants) and `GalaxyKey.astro`; placed in the How section; the `<desc>` sentences reused
   by `aboutMarkdown` for the twin's How list.
6. Verification 7.5.

No content commit: no page under `content/` changes, no nightly is needed. The site rebuilds on the next `pages.yml`.

## 7. Verification

1. `npm run typecheck && npm test` (the six tests of section 5 pass).
2. Site build on Node 22 (`docs/RUNBOOK.md`; the shell defaults to Node 20): `npm run site:build`; then
   `test -f site/dist/about/index.html && test -f site/dist/about.md` and `grep -c "claude mcp add" site/dist/about/index.html`
   is 1, `grep -c "{{" site/dist/about/index.html site/dist/about.md` is 0.
3. `grep -o 'href="[^"]*about/"' site/dist/index.html | sort | uniq -c`: the nav, the wordmark and the home section
   link there (3 or more). `grep -c "claude mcp add" site/dist/index.html` is 0 (the commands left the home page).
4. Header wrap: serve `site/dist` under the base path and, with Playwright from the scratchpad (the headless check of
   `docs/RUNBOOK.md`, `scripts/ui-sweep.mjs` for the serving pattern), measure `.site-nav` height at 1440 and 1024 px
   on `/about/` and on `/objects/table/18/` (the header pill shows there). At 1440 the nav is one row (height under
   24 px). At 1024 a second row is allowed (the CSS wraps today, `site.css:25`); record both numbers in section 12.
5. Both SVGs at 1440, 760 and 390 px, light and dark: no label under 11 px rendered, nothing clipped; the stacked
   variant shows under 760. Record a screenshot path per width in section 12.
6. `curl -s http://localhost:4188/<base>/about.md | head -40` reads as a page: title, byline, Who.

## 8. Later, not in this spec

- A photo (owner said no on 2026-10-08).
- `cat about` in the MCP server, so an agent can read the page without the site (it reads `about.md` over HTTP today).
- Translations of the owner's text (NL first).
- A "what changed on this site" changelog section fed by `docs/DECISIONS.md`.
- The eight question entries of `site/src/lib/questions.ts` as a ninth card row ("Questions the galaxy answers").

## 9. Risks and open questions

- **The tenth nav entry wraps the header at 1440 px** with the week's pill and the search box (D80 saw "code changes"
  wrap there). Default: ship, measure (7.4); if the nav wraps at 1440 the coder shortens "Localizations" to
  "Countries" in the nav only (the section title stays), and notes it in section 12.
- **The owner's words.** "shitload" is the owner's own word (2026-10-08); the "my kids" line passed without
  objection. Default: both stay; the test of section 5 item 5 pins the corrections, not these.
- **The telescope's labels at 390 px.** Default: the stacked variant (4.3); if it still clips, the five source labels
  lose their counts under 760 px.
- **Counts in the Who or Why text.** None today; if the owner adds one, it must be a placeholder (4.1), never a digit.
- **Astro `render()` on a one-file collection** is the path least likely to need a new dependency; if the collection
  route fights the `glob` loader for a file outside `src/content`, the fallback is to move the file to
  `site/src/content/about/about.md` (still not the repository's generated `content/`), and the twin reads `entry.body`.

## 10. Files

New: `site/src/about/about.md`, `site/src/lib/about.ts`, `site/src/pages/about/index.astro`, `site/src/pages/about.md.ts`,
`site/src/components/Telescope.astro`, `site/src/components/GalaxyKey.astro`, `tests/unit/about.test.ts`.
Changed: `site/src/layouts/Base.astro`, `site/src/pages/index.astro`, `site/src/pages/llms.txt.ts`,
`site/src/content.config.ts`, `docs/DECISIONS.md` (D83), `docs/PLAN.md` (M21 row), `docs/HANDOFF.md`, `AGENTS.md`
(one line in Layout: `site/src/about/` holds the owner's About text), `README.md` (the "Site:" line adds "About:
<url>/about/").

## 11. Definition of Done

- [ ] `/about/` and `/about.md` build; the copy equals section 2.2 (the owner's text, the corrections pinned by test).
- [ ] "About" is the last nav entry on every page; the wordmark's small line links to it; `aria-current` set on About.
- [ ] Footer: "MCP server" and "Claude Code plugin" link to `/about/#agents`; no `<pre>` on the home page.
- [ ] The seven cards link to pages that exist in `site/dist` (7.3 and the test of 5.6).
- [ ] Telescope and galaxy key render in light and dark at 1440, 760 and 390 (7.5), each with `<title>` and `<desc>`.
- [ ] Root `llms.txt` lists About first under "Start here".
- [ ] `npm run typecheck && npm test` green; site build green on Node 22; header measured (7.4).
- [ ] D83 appended to `docs/DECISIONS.md`; the M21 row in `docs/PLAN.md` says shipped; the HANDOFF entry moves from
  "Open specs" to "Where things stand"; this file's section 12 renamed "Built, deviations" and filled; `AGENTS.md`
  and `README.md` lines added.

## 12. Built, deviations (2026-10-08)

Both phases shipped in one commit on `dev/about-page`, built and checked on a local Node 22 build (28,831 pages,
1m 18s) served under the base path and driven with Playwright 1.63 from the scratchpad.

- **Breakpoint 1000 px, not 760.** The wide telescope is 960 units wide; inside a 760 px column its 12.5 px labels
  rendered at 9.9 px and six of them overflowed their boxes. The page column is now 960 px wide (`.about`), with the
  text capped at 72ch, so the drawing renders 1:1 from 1000 px up; below that the stacked variant shows, capped at
  480 px and centred. Measured smallest rendered label: 12.0 px at 1440, 11.9 at 1000, 14.4 at 999 and 760, 10.7 at
  390 (the spec said 11; accepted). No label clips at any width (`fonts.mjs` in the session's scratchpad).
- **Telescope labels shortened** to fit their boxes at 12.5 px mono: "605 topic hubs, from the Learn TOC",
  "601 posts from 32 sources", "tree-sitter parses the code", "validators check every id", "evidence: URL, commit,
  second", and the models box in four lines ("Haiku facts · Sonnet prose", "Opus review, which sets the state:",
  "derived, unreviewed,", "reviewed, flagged"); the lens boxes are 124 high. A `{{pages}}` placeholder (the sum of the
  ten counts) joined the contract.
- **Galaxy key on one row** at 960 wide needed 12 px (not 13) and 18 px gaps; at 390 it lays out in three rows
  (3 + 2 + 2). "lit this week" uses `--g-media-new`, the colour the canvas gives the week's media bodies.
- **Header measured** on `/about/` and `/objects/table/18/`: the nav is one row of 21 px with ten entries at 1440 and
  1024; the header is 73 px at 1440 and 121 px at 1024, the same as the previous build (72.5 / 120.5 with nine
  entries: the search form wraps there, not the nav). "Localizations" stays.
- **Tests were written with the code**, not red first; six tests, all green, in the full suite of 417.
- The `about` collection with `glob({ base: "./src/about" })` worked; the fallback of 9 was not needed.
- The twin's How section prints the telescope sentence, the four captions and the key sentence (section 2.3).

### 12a. Edits applied to other files (were "proposed")

**`docs/DECISIONS.md`, append:**

- **D83 The site explains itself on one page, in the owner's voice.** `/about/` is the tenth nav entry and the target
  of the wordmark's "unofficial, made by waldo"; it holds the owner's first-person Who and Why, the pipeline drawn as a
  telescope and the galaxy key as a picture (both inline SVG on the design tokens, a stacked variant under 760 px),
  seven "for who" cards pairing a real question with the page that answers it, the install commands under `#agents`,
  live counts and the housekeeping lines. The prose is one hand-written file, `site/src/about/about.md`, rendered by
  the page and served as `/about.md`; never under `content/`, no tier or review badge, a byline that says the owner
  wrote it. The home page's About section is a pointer; the footer links "MCP server" and "Claude Code plugin" to
  `#agents`; `llms.txt` lists About first under "Start here". Rejected: a photo; the text under `content/`; strings
  in the Astro page; About in the footer only; a model-written bio; commands in the footer; hard-coded counts;
  `Page.astro`. Spec: `docs/specs/about-page.md`.

**`docs/PLAN.md` section 5, before the `v0.2+` row:**

`| **M21 about page** | "About" in the top nav: the owner's Who and Why, the pipeline as a telescope and the galaxy key as pictures, seven "for who" cards with real questions and links, the install commands under \`#agents\`, live counts; markdown twin; home section shrunk to a pointer (\`docs/specs/about-page.md\`, D83, proposed) | 1 day in two phases | none: deterministic, no LLM |`

**`docs/HANDOFF.md`, "Open specs, not yet implemented":**

- **About page, D83** (`docs/specs/about-page.md`, M21). Status: proposed 2026-10-08, nothing implemented. Start with
  task 1 (the copy file, `about.ts` and the six tests, red). Until it lands, readers see no About entry in the nav and
  the install commands only at the bottom of the home page.

**`AGENTS.md`, Layout table, under `site/`:** "`site/src/about/about.md` is the owner's hand-written About text (D83):
the one prose file that is not generated; edit it directly."

**`README.md`:** after the "Site:" line, "About the project, who it is for, and how to connect an agent:
https://waldo1001.github.io/waldo.BCObservatory/about/".
