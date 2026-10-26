---
issue: 53
status: implemented
---

# Add jeremyvyska.com (Jeremy Vyska) as a community blog source

Status: implemented, 2026-10-26 (section 12 records what was built and where it differs). Decision: D122 (appended 2026-10-26). Milestone: M57. Owner: waldo.
Scope: one entry in `sources.yaml`, plus the first ingest of that source. Every claim below was verified against the tree at `690666c2b8` on 2026-10-26, and the site facts were fetched from https://jeremyvyska.com on 2026-10-26. Not in scope: full text (needs the author's consent block), any pipeline code.

## 1. Goal

The owner asked to add Jeremy Vyska's blog https://jeremyvyska.com. It is not registered: `git grep -n -i vyska -- sources.yaml` is empty.

Facts read from the site on 2026-10-26:
- WordPress 7.1.3 (`<meta name="generator">`), self-hosted.
- Feed: `https://jeremyvyska.com/feed/`, 200 `application/rss+xml`, announced as `<link rel="alternate" type="application/rss+xml" title="Jeremy Vyska &raquo; Feed">`. It holds 10 posts, oldest 2025-08-20, so it does not cover the whole window.
- WordPress API: `https://jeremyvyska.com/wp-json/wp/v2/posts` is 200 JSON; `X-WP-Total` is 13 for posts after 2025-04-26 (the 18-month backfill window), 2025-07-18 to 2026-10-25, newest "Fall 2026 Agentic Development Classes: Copilot Refresh, Claude Code, and BCQuality". All 13 are about Business Central development and AI-assisted AL work.
- Author: the About page (`https://jeremyvyska.com/about/`) says "Jeremy Vyska is a Microsoft Business Central MVP".
- Site name: "Jeremy Vyska" (feed title).

The block to extend: the community blogs in `sources.yaml`, last entry `yzhums-com` (`sources.yaml:387-392`). Defaults (`sources.yaml:6-12`): tier `community`, `full_text: false`, 18 months backfill, `enabled: true`.

After this change:
- `sources.yaml` lists `jeremyvyska-com`, kind blog, tier community, derived mode, feed plus API.
- The next ingest takes the 13 posts inside the window; they get summaries and pages under `content/posts/jeremyvyska-com/`, and `content/sources/jeremyvyska-com.md` appears on the sources page.

## 2. Reader- and agent-facing behaviour, after

- A source page "Jeremy Vyska" by Jeremy Vyska (MVP), and one post page per post, each linking back to jeremyvyska.com; text derived per `CONTENT-NOTICE.md` (summary, quotes of at most 24 words, never full text).
- `blog_footprint` for `jeremyvyska-com` returns the source's posts.
- Until an ingest run with LLM spend available, nothing changes for readers (section 9).

## 3. Decisions

D122: jeremyvyska.com is registered as community blog `jeremyvyska-com`, derived mode, no consent block, `full_text: false`, fetched from its RSS feed and the WordPress API. Same shape as D112 and D119.

Rejected:
- `full_text: true`: needs the author's written opt-in; none exists.
- Feed only: it stops at 2025-08-20 and would miss the three older posts inside the window.

## 4. Contract

Insert after the `yzhums-com` entry (`sources.yaml:392`):

```yaml
  - id: jeremyvyska-com
    kind: blog
    name: Jeremy Vyska
    url: https://jeremyvyska.com
    author: { name: Jeremy Vyska, mvp: true }
    fetch: { feed: https://jeremyvyska.com/feed/, rest: https://jeremyvyska.com/wp-json/wp/v2/posts }
```

## 5. Test plan (write first)

No test counts sources, so there is no red test to write.
- Before: `npm run validate:sources` reports 50 sources (blog 28) and `sources.yaml OK`; `npm test` passes.
- After: 51 sources (blog 29), `sources.yaml OK`; `npm run typecheck` and `npm test` pass.

## 6. Tasks

Phase 1 (ships alone):
1. Add the entry from section 4 to `sources.yaml`.
2. Run `npm run validate:sources`, `npm run typecheck`, `npm test`.
3. Ship-time edits (section 12).

Phase 2 (operator step, after the push), at the owner's request with the caps lifted for one run:
`gh workflow run nightly.yml --ref main -f pillars=blog -f only=jeremyvyska-com -f unlimited=true`. The `pages` workflow deploys after it.

## 7. Verification

- `npm run validate:sources`, `npm run typecheck`, `npm test`.
- After phase 2: `content/sources/jeremyvyska-com.md` and the post pages under `content/posts/jeremyvyska-com/` on main; `https://waldo1001.github.io/waldo.BCObservatory/sources/jeremyvyska-com/` is 200.

## 8. Later, not in this spec

- Full text, if the author opts in.
- Posts older than the window, if the owner wants a longer backfill.

## 9. Risks and open questions

- **Weekly spend cap.** Normal nightlies are over `week_usd: 50` this week after the unlimited runs. Default: the owner's unlimited run in phase 2.
- **Run window.** A dispatch outside 01:00-06:35 Brussels gets the window's length (335 minutes, `deadlineFor()` in `pipeline/orchestrator/execute.ts`); 13 posts need far less.

## 10. Files

Changed: `sources.yaml`; at ship time `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`, this spec. New: this spec.

## 11. Definition of Done

- [x] `sources.yaml` has the `jeremyvyska-com` entry with feed, API and `mvp: true`.
- [x] `npm run validate:sources` (51 sources), `npm run typecheck` and `npm test` pass.
- [x] No `full_text: true`, no consent block.
- [x] After phase 2 (run 40309905008, $1.80, 13 of 13 posts): `content/sources/jeremyvyska-com.md` and the post pages are on main, and the live sources page lists the source.
- [x] D122 appended to docs/DECISIONS.md; PLAN M57 marked shipped; HANDOFF entry in "Where things stand"; section 12 "Built, deviations" and status implemented.

## 12. Built, deviations (2026-10-26)

- **Built:** the section 4 entry in `sources.yaml` after `yzhums-com`, pushed to main with this spec.
- **Verified:** `npm run validate:sources`: 51 sources (blog 28 -> 29), `sources.yaml OK`. `npm run typecheck`: clean.
  `npm test`: 758 tests, 757 pass, 0 fail.
- **Spec versus measured:** sources 51 (spec 51), blogs 29 (spec 29).
- **Deviations:** none.
- **Phase 2 (2026-10-26):** run 40309905008, success, $1.80, leak 0 findings; 13 post pages and the source page on
  main; `/sources/jeremyvyska-com/` is 200 after pages run 40311502898.
