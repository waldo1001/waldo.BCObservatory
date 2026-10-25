---
issue: 48
status: implemented
---

# Add vjeko.com (Vjekoslav Babić) as a community blog source

Status: implemented, 2026-10-25 (section 12 records what was built and where it differs). Decision: D116 (appended 2026-10-25). Milestone: M53. Owner: waldo.
Scope: one entry in `sources.yaml`, plus the first ingest of that source. Every claim below was verified against the tree at `c37617a77f` on 2026-10-25, and the site facts were fetched from https://vjeko.com on 2026-10-25. Not in scope: full text (needs the author's consent block), any pipeline code.

## 1. Goal

The owner asked to add Vjekoslav Babić's blog https://vjeko.com/blog/. It is not registered: `git grep -n -i vjeko -- sources.yaml` is empty.

Facts read from the site on 2026-10-25:
- Feed: `https://vjeko.com/rss.xml`, 200 `application/xml`, announced by the blog page as `<link rel="alternate" type="application/rss+xml" title="Vjeko.com" href="/rss.xml">`; `/feed/` redirects to it. `/index.xml` and `/blog/feed/` are 404.
- The feed holds 30 posts, 2021-09-15 to 2026-07-22, newest "What You're Actually Saying When You Say "AI Doesn't Work"" (`https://vjeko.com/2026/07/22/what-youre-actually-saying-when-you-say-ai-doesnt-work/`). 22 of them fall inside the 18-month backfill window (since 2025-04-25). The oldest feed item predates the window, so the feed covers all of it.
- `https://vjeko.com/wp-json/wp/v2/posts` is 404: no `rest` fetch.
- Author: the About page (`https://vjeko.com/about/`) says "I'm Vjekoslav Babić" and "Microsoft MVP since 2010". The feed carries no author element.
- Site name: "Vjeko.com" (page and feed title).

The block to extend: the community blogs in `sources.yaml`, last entry `sshadows-dk` (`sources.yaml:367-372`, D115). Defaults (`sources.yaml:6-12`): tier `community`, `full_text: false`, 18 months backfill, `enabled: true`.

After this change:
- `sources.yaml` lists `vjeko-com`, kind blog, tier community, derived mode.
- The next ingest takes the 22 posts inside the window; they get summaries and pages under `content/posts/vjeko-com/`, and `content/sources/vjeko-com.md` appears on the sources page.

## 2. Reader- and agent-facing behaviour, after

- A source page "Vjeko.com" by Vjekoslav Babić (MVP), and one post page per post, each linking back to vjeko.com; text derived per `CONTENT-NOTICE.md` (summary, quotes of at most 24 words, never full text).
- `blog_footprint` for `vjeko-com` returns the source's posts.
- Until an ingest run with LLM spend available, nothing changes for readers (section 9).

## 3. Decisions

D116 (draft): vjeko.com is registered as community blog `vjeko-com`, derived mode, no consent block, `full_text: false`, fetched from its RSS feed. Same shape as D112 and D115.

Rejected:
- `full_text: true`: needs the author's written opt-in; none exists.
- A `scrape` fetch: the feed exists and covers the whole window.

## 4. Contract

Insert after the `sshadows-dk` entry (`sources.yaml:372`):

```yaml
  - id: vjeko-com
    kind: blog
    name: Vjeko.com
    url: https://vjeko.com
    author: { name: Vjekoslav Babić, mvp: true }
    fetch: { feed: https://vjeko.com/rss.xml }
```

## 5. Test plan (write first)

No test counts sources, so there is no red test to write.
- Before: `npm run validate:sources` reports 48 sources (blog 26) and `sources.yaml OK`; `npm test` passes.
- After: 49 sources (blog 27), `sources.yaml OK`; `npm run typecheck` and `npm test` pass.

## 6. Tasks

Phase 1 (ships alone):
1. Add the entry from section 4 to `sources.yaml`.
2. Run `npm run validate:sources`, `npm run typecheck`, `npm test`.
3. Ship-time edits (section 12).

Phase 2 (operator step, after the push), at the owner's request with the caps lifted for one run:
`gh workflow run nightly.yml --ref main -f pillars=blog -f only=vjeko-com -f unlimited=true`. The `pages` workflow deploys after it (`workflow_run` in `.github/workflows/pages.yml`).

## 7. Verification

- `npm run validate:sources`, `npm run typecheck`, `npm test`.
- After phase 2: `content/sources/vjeko-com.md` and the post pages under `content/posts/vjeko-com/` on main; `https://waldo1001.github.io/waldo.BCObservatory/sources/vjeko-com/` is 200.

## 8. Later, not in this spec

- Full text, if the author opts in.
- Posts older than the window (the blog runs back to well before 2021), if the owner wants a longer backfill.

## 9. Risks and open questions

- **Weekly spend cap.** Normal nightlies get $0 this week (`week_usd: 50` in `config/budget.json`, rolling spend above it after the 2026-10-25 unlimited runs). Default: the owner's unlimited run in phase 2. Its global passes also run without quotas (`pipeline/orchestrator/nightly.ts:260-267`).
- **Phase 2 overlap.** The sshadows.dk unlimited run (D115) may still be running; runs share the `observatory-nightly` concurrency group (`.github/workflows/nightly.yml:39-41`), so this one queues behind it. Default: dispatch anyway.

## 10. Files

Changed: `sources.yaml`; at ship time `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`, this spec. New: none.

## 11. Definition of Done

- [x] `sources.yaml` has the `vjeko-com` entry with feed `https://vjeko.com/rss.xml` and `mvp: true`.
- [x] `npm run validate:sources` (49 sources), `npm run typecheck` and `npm test` pass.
- [x] No `full_text: true`, no consent block.
- [ ] After phase 2: `content/sources/vjeko-com.md` and the post pages are on main, and the live sources page lists the source.
- [x] D116 appended to docs/DECISIONS.md; PLAN M53 marked shipped; HANDOFF entry moved from "Open specs" to "Where things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the status lines into docs/built/vjeko-com-blog-source.md; the PR's review moves them in (sdd-build section 4, sdd-review section 6).

## 12. Built, deviations (2026-10-25)

- **Built:** the section 4 entry in `sources.yaml` after `sshadows-dk`, in the commit after the spec commit on
  `spec/vjeko-com-blog-source`, pushed to main together.
- **Verified:** `npm run validate:sources`: 49 sources (blog 26 -> 27), `sources.yaml OK`. `npm run typecheck`: clean.
  `npm test`: 751 tests, 750 pass, 0 fail.
- **Spec versus measured:** sources 49 (spec 49), blogs 27 (spec 27).
- **Deviations:** none.
- **Open:** phase 2, the owner's unlimited one-source run
  (`gh workflow run nightly.yml --ref main -f pillars=blog -f only=vjeko-com -f unlimited=true`), and the Definition
  of Done item that checks its pages.

## 13. Proposed edits to other files (applied 2026-10-25, see section 12)

D116 text for `docs/DECISIONS.md`: "D116: vjeko.com (Vjekoslav Babić, MVP) is added as community blog `vjeko-com`, derived mode, no consent block, `full_text: false`, RSS feed `https://vjeko.com/rss.xml` (issue #48). Rejected: full text without opt-in; a scrape fetch."

`docs/PLAN.md` section 5, before the `v0.2+` row:
`| **M53 vjeko.com blog source** | one `sources.yaml` entry for Vjekoslav Babić's blog, derived mode, RSS (\`docs/specs/vjeko-com-blog-source.md\`, D116, proposed) | small | low: one more blog in ingest and derive |`

`docs/HANDOFF.md`, "Open specs, not yet implemented": `docs/specs/vjeko-com-blog-source.md`, D116, M53, issue #48. Status: proposed 2026-10-25, nothing implemented. Start with task 1 (the `sources.yaml` entry). Until it lands, vjeko.com posts are not in the Observatory.
