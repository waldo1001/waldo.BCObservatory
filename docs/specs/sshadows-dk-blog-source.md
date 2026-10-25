---
issue: 47
status: draft
---

# Add sshadows.dk (Torben Leth) as a community blog source

Status: proposed, 2026-10-25. Decision: D115 (reserved, appended to `docs/DECISIONS.md` at ship time). Milestone: M52 (reserved). Owner: waldo.
Scope: one entry in `sources.yaml`, plus the first ingest of that source. Every claim below was verified against the tree at `4fefc12c80` on 2026-10-25, and the site facts were fetched from https://sshadows.dk on 2026-10-25. Not in scope: full text (needs the author's consent block), any pipeline code.

## 1. Goal

The owner asked to add Torben Leth's blog https://sshadows.dk. It is not registered: `sources.yaml` has no `sshadows` id (`git grep -n sshadows -- sources.yaml` is empty).

Facts read from the site on 2026-10-25:
- Feed: `https://sshadows.dk/rss.xml`, 200 `application/xml`, announced by the home page as `<link rel="alternate" type="application/rss+xml" title="SShadowS" href="/rss.xml">`. `/feed/`, `/index.xml`, `/feed.xml` and `/atom.xml` are 404.
- The feed holds 21 posts, 2018-06-04 to 2026-08-24, newest "Your Tests All Pass. I Have Bad News." (`https://sshadows.dk/blog/your-tests-all-pass/`). 13 of them fall inside the 18-month backfill window (since 2025-04-25).
- `https://sshadows.dk/wp-json/wp/v2/posts` is 404: not WordPress, no `rest` fetch.
- Author: the About page (`https://sshadows.dk/about`) says "I'm Torben Leth, a Business Central developer at Continia Software in Denmark". The feed carries no author element. The site does not mention MVP.
- Site name: "SShadowS" (home page title and feed title).

The block to extend: the community blogs in `sources.yaml`, last entry `miljan-rs` (`sources.yaml:361-366`, shipped with D112). Defaults (`sources.yaml:6-12`): tier `community`, `full_text: false`, 18 months backfill, `enabled: true`, so the entry lands in derived mode with no extra keys.

After this change:
- `sources.yaml` lists `sshadows-dk`, kind blog, tier community, derived mode.
- The next ingest takes the 13 posts inside the window; they get summaries in the run's execute stage and pages under `content/posts/sshadows-dk/`, and `content/sources/sshadows-dk.md` appears on the sources page.

## 2. Reader- and agent-facing behaviour, after

- A source page "SShadowS" by Torben Leth, and one post page per post, each linking back to sshadows.dk; text derived per `CONTENT-NOTICE.md` (summary, quotes of at most 24 words, never full text).
- `blog_footprint` for `sshadows-dk` returns the source's posts.
- Until an ingest run with LLM spend available, nothing changes for readers (see section 9: the weekly cap).

## 3. Decisions

D115 (draft): sshadows.dk is registered as community blog `sshadows-dk`, derived mode, no consent block, `full_text: false`, fetched from its RSS feed. Rationale: `sources.yaml:3-4` allows derived mode without consent; links point back to the author. Same shape as D112 (miljan.rs).

Rejected:
- `full_text: true`: needs the author's written opt-in; none exists.
- A `scrape` fetch: the feed exists and carries every post back to 2018.

## 4. Contract

Insert after the `miljan-rs` entry (`sources.yaml:366`):

```yaml
  - id: sshadows-dk
    kind: blog
    name: SShadowS
    url: https://sshadows.dk
    author: { name: Torben Leth }
    fetch: { feed: https://sshadows.dk/rss.xml }
```

Shape per `schemas/sources.json`. No `mvp` key: the site does not say so.

## 5. Test plan (write first)

The registry is validated, not unit-tested per source; no test counts sources (`tests/schema/sources.test.ts`, `tests/unit/galaxy-layout.test.ts` and `tests/unit/support-updates.test.ts` read `sources.yaml` without a count). So there is no red test to write.
- Before: `npm run validate:sources` reports 47 sources (blog 25) and `sources.yaml OK`; `npm test` passes.
- After: 48 sources (blog 26), `sources.yaml OK`; `npm run typecheck` and `npm test` pass.

## 6. Tasks

Phase 1 (ships alone):
1. Add the entry from section 4 to `sources.yaml`.
2. Run `npm run validate:sources`, `npm run typecheck`, `npm test`.
3. Ship-time edits (section 12).

Phase 2 (operator step, after the push): the first ingest with summaries. The owner asked for it right away, with the caps lifted for one run: `gh workflow run nightly.yml --ref main -f pillars=blog -f only=sshadows-dk -f unlimited=true`. The `pages` workflow deploys after it on its own (`workflow_run` in `.github/workflows/pages.yml`).

## 7. Verification

- `npm run validate:sources`, `npm run typecheck`, `npm test`.
- After phase 2: `content/sources/sshadows-dk.md` and 13 pages under `content/posts/sshadows-dk/` on main; the live sources page counts one more source; `https://waldo1001.github.io/waldo.BCObservatory/sources/sshadows-dk/` is 200.

## 8. Later, not in this spec

- Full text, if the author opts in (a consent block like `waldo-be`'s).
- The 8 posts older than the window (2018 to early 2025), if the owner wants a longer backfill for this source.

## 9. Risks and open questions

- **Weekly spend cap.** The rolling 7-day spend was about $82 against `week_usd: 50` (`config/budget.json`) after the 2026-10-25 unlimited run, so a normal nightly gives this source $0 and stops at `fetched`, as happened to miljan.rs. Default: the owner's unlimited run in phase 2. `only` limits the item stages to this source, but the global passes (topic links, Learn confirmation, cautions, hubs) also run without quotas (`pipeline/orchestrator/nightly.ts:260-267`); the miljan run spent $21.97, most of it a roadmap-links backlog that run cleared.
- **Author name.** From the About page; the feed has none. Default: "Torben Leth".
- **Language.** Posts are English; registry default `en`.

## 10. Files

Changed: `sources.yaml`; at ship time `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`, this spec. New: none.

## 11. Definition of Done

- [ ] `sources.yaml` has the `sshadows-dk` entry with feed `https://sshadows.dk/rss.xml`.
- [ ] `npm run validate:sources` (48 sources), `npm run typecheck` and `npm test` pass.
- [ ] No `full_text: true`, no consent block.
- [ ] After phase 2: `content/sources/sshadows-dk.md` and the post pages are on main, and the live sources page lists the source.
- [ ] D115 appended to docs/DECISIONS.md; PLAN M52 marked shipped; HANDOFF entry moved from "Open specs" to "Where things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the status lines into docs/built/sshadows-dk-blog-source.md; the PR's review moves them in (sdd-build section 4, sdd-review section 6).

## 12. Proposed edits to other files (not applied)

D115 text for `docs/DECISIONS.md`: "D115: sshadows.dk (Torben Leth) is added as community blog `sshadows-dk`, derived mode, no consent block, `full_text: false`, RSS feed `https://sshadows.dk/rss.xml` (issue #47). Rejected: full text without opt-in; a scrape fetch."

`docs/PLAN.md` section 5, before the `v0.2+` row:
`| **M52 sshadows.dk blog source** | one `sources.yaml` entry for Torben Leth's blog, derived mode, RSS (\`docs/specs/sshadows-dk-blog-source.md\`, D115, proposed) | small | low: one more blog in ingest and derive |`

`docs/HANDOFF.md`, "Open specs, not yet implemented": `docs/specs/sshadows-dk-blog-source.md`, D115, M52, issue #47. Status: proposed 2026-10-25, nothing implemented. Start with task 1 (the `sources.yaml` entry). Until it lands, sshadows.dk posts are not in the Observatory.
