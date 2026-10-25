---
issue: 40
status: implemented
---

# Add miljan.rs as a community blog source

Status: implemented, 2026-10-25 (section 12 records what was built and where it differs). Decision: D112 (appended 2026-10-25). Milestone: M49. Owner: waldo.
Scope: one entry in `sources.yaml`, plus the first ingest of that source. Every claim below was verified against the League checkout of 2026-10-25 (no sha visible). Not in scope: full text (needs the author's consent block), any pipeline code, any other blog request.

## 1. Goal

Issue #40 (sent from the MCP server 0.8.0) asks for https://miljan.rs as a community blog source. Its example post is `https://miljan.rs/2025/11/17/polishing-xrechnung-and-zugferd-in-business-central/` (XRechnung/ZUGFeRD in Business Central). The reporter found no search hit, no `blog_footprint` for "miljan" or "miljan-rs", and no `ls("posts")` entry.

Evidence in the tree:
- `sources.yaml` has no `miljan` id: Grep for `miljan` (case-insensitive) over the repo matches only generated `data/` and `content/` files for `bcapps`, `bcapps-prs` and `bcquality` changes, none of them `sources.yaml`. So the blog is not registered. (Those hits are the name inside Microsoft repository changes, not a blog source; the coder does not need to chase them.)
- The community blog block is `sources.yaml:218-371`. Each entry has `id`, `kind: blog`, `name`, `url`, `author`, and `fetch` (e.g. `sources.yaml:283-288` for `kine-cz`, a Hugo-style `index.xml` feed; `sources.yaml:355-360` for `vld-bc-com`, a `scrape` fetch).
- Defaults at `sources.yaml:6-12`: tier `community`, `full_text: false`, backfill 18 months, `enabled: true`. A community blog therefore lands in derived mode (summary, short quotes, link) with no extra config; `sources.yaml:3-4` says full text needs a consent block.

After this change:
- `sources.yaml` lists `miljan-rs` as a `kind: blog`, tier community, derived mode.
- The next nightly ingests the blog's posts (18-month backfill by default), so the XRechnung/ZUGFeRD post is searchable and the source shows up in `ls("posts")`.

## 2. Reader- and agent-facing behaviour, after

- The post appears under posts with the source name and a link back to miljan.rs; text stays derived per `CONTENT-NOTICE.md` (summary and quotes of at most 24 words, never full text).
- `blog_footprint` for `miljan-rs` returns the source's posts.
- Until the nightly runs, nothing changes for readers.

## 3. Decisions

D112 (draft): miljan.rs is registered as a community blog in derived mode, id `miljan-rs`, with no consent block and `full_text: false`. Rationale: the registry rules (`sources.yaml:3-4`) allow derived mode without consent; links point back to the author.

Rejected:
- `full_text: true`: needs the author's written opt-in; none exists.
- Treating it as `kind: discovery`: discovery sources are suggestions only, never content (`sources.yaml:372`); the request is for content.

## 4. Contract

Insert after the `vld-bc-com` entry (`sources.yaml:360`) and before the `yzhums-com` comment block (`sources.yaml:362`):

```yaml
  - id: miljan-rs
    kind: blog
    name: miljan.rs
    url: https://miljan.rs
    author: { name: <author name from the site's about page> }
    fetch: { feed: <feed URL, see section 9> }
```

Shape follows `schemas/sources.json` (`fetch.feed`, `fetch.rest`, `fetch.scrape` are URIs; `user_agent` is `default` or `browser`, `schemas/sources.json:38-39`). The `author.mvp` flag is added only if the site says so.

## 5. Test plan (write first)

The registry is validated, not unit-tested per source. Before editing:
- Run `npm run validate:sources` (AGENTS.md:91) and `npm test` to record a green baseline.

After editing:
- `npm run validate:sources` passes: unique id `miljan-rs`, schema valid, no policy violation (tier community, `full_text` false).
- If an existing unit test counts sources or lists ids (Grep `tests/` for `sources.yaml`), update its expectation by exactly one; otherwise none changes.

## 6. Tasks

Phase 1 (ships alone):
1. Find the feed. Probe by fetching `https://miljan.rs/feed/`, `https://miljan.rs/index.xml`, `https://miljan.rs/feed.xml`, `https://miljan.rs/rss.xml`, and the page's `<link rel="alternate">`. A coder session with network does this; the League draft could not.
2. Find the author's display name on the site (about page or post byline).
3. Add the entry from section 4 to `sources.yaml`. If no feed exists, use `fetch: { scrape: https://miljan.rs/ }` as `keytogoodcode-com` does (`sources.yaml:289-294`).
4. Run `npm run validate:sources` and `npm test`.
5. Ship-time edits (section 12).

No page rewrite happens in this phase; the first ingest happens in the next nightly.

## 7. Verification

- `npm run validate:sources`, `npm test`.
- Dry-run or single-source ingest for `miljan-rs` if the pipeline offers one (see AGENTS.md pipeline commands); expect the example post dated 2025-11-17 to be among the fetched items.
- After the nightly: `ls("posts")` lists `miljan-rs`, and a search for "XRechnung ZUGFeRD" returns the example post.

## 8. Later, not in this spec

- Full text, if the author opts in (a consent block as in `sources.yaml:226`).
- Topic links for XRechnung/ZUGFeRD, which the issue says are covered only via bcapps changes.

## 9. Risks and open questions

- **Feed URL unknown.** Cannot be verified offline. Default: the coder probes the URLs in task 1 and takes the first valid one; a `scrape` fetch is the fallback.
- **Author name unknown.** Default: the name on the site's about page; if none, the site's name `miljan.rs`.
- **MVP flag.** Default: omit unless the site states it.
- **Language.** The example post is English; default `en` (the registry default, `sources.yaml:8`).
- **Author consent.** Derived mode needs none under the registry rules; default is to add it without asking, as for the other community blogs.
- **Numbers.** D112 and M49 were reserved from the local tree without a fetch (highest seen: D111 in `docs/PLAN.md:462`, M48 in `docs/PLAN.md:462`; `docs/HANDOFF.md:40`). Re-check them at approval with the `bcobs-spec` section 5 command.

## 10. Files

Changed: `sources.yaml`; at ship time `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`. New: none.

## 11. Definition of Done

- [x] `sources.yaml` has the `miljan-rs` entry with a verified feed or scrape URL.
- [x] `npm run validate:sources` and `npm test` pass.
- [x] No `full_text: true`, no consent block.
- [ ] After the nightly, `ls("posts")` lists `miljan-rs` and the 2025-11-17 post is searchable.
- [x] D112 appended to docs/DECISIONS.md; PLAN M49 marked shipped; HANDOFF entry moved from "Open specs" to "Where things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the status lines into docs/built/<slug>.md; the PR's review moves them in (sdd-build section 4, sdd-review section 6).

## 12. Built, deviations (2026-10-25)

Built by hand on `league/40-draft-spec-for-issue-40-a5` (the League handed PR #43 over to the owner at phase clone).

- **Task 1, the feed:** probed 2026-10-25. `https://miljan.rs/feed/` 200 `application/rss+xml` (WordPress; it is also
  the page's `<link rel="alternate">`), `/feed.xml` and `/rss.xml` 200, `/index.xml` 404. The feed holds 10 items,
  2024-12-06 to 2025-12-29, including "Polishing xRechnung and ZUGFeRD in Business Central" (2025-11-17).
  `https://miljan.rs/wp-json/wp/v2/posts` is 404, so no `rest` fetch.
- **Task 2, the author:** "Miljan Milosavljević" (the feed's `dc:creator` on all 10 items and the About page). The About
  page says "a Microsoft MVP", so `mvp: true`.
- **Task 3:** the entry in `sources.yaml` after `vld-bc-com`, exactly the section 4 shape with `fetch: { feed:
  https://miljan.rs/feed/ }`.
- **Verified:** `npm run validate:sources`: 47 sources (blog 24 -> 25), `sources.yaml OK`. `npm run typecheck`: clean.
  `npm test`: 736 tests, 735 pass, 0 fail. No unit test counts sources, so none changed. No single-source dry run:
  `npm run ingest` runs the whole stage and writes `data/`, so the first ingest is the nightly.
- **Deviations:** none in the build. The REST backfill is not possible (endpoint 404): only the 10 feed items come in,
  which covers the 18-month window back to 2025-04-25 and the example post.
- **Open:** the Definition of Done item "after the nightly" waits for an ingest run. A derive-only run is not enough;
  one source alone, the way `docs/RUNBOOK.md` runs a backfill: `gh workflow run nightly -f pillars=blog -f only=miljan-rs`.

## 13. Proposed edits to other files (applied 2026-10-25, see section 12)

D112 text for `docs/DECISIONS.md`: "D112: miljan.rs is added as community blog `miljan-rs`, derived mode, no consent block, `full_text: false` (issue #40). Rejected: full text without opt-in; kind discovery."

`docs/PLAN.md` section 5, before the `v0.2+` row:
`| **M49 miljan.rs blog source** | one `sources.yaml` entry for miljan.rs, derived mode (\`docs/specs/miljan-rs-blog-source.md\`, D112, proposed) | small | low |`

`docs/HANDOFF.md`, "Open specs, not yet implemented": `docs/specs/miljan-rs-blog-source.md`, D112, M49. Status: proposed 2026-10-25, nothing implemented. issue #40. Start with task 1 (find the feed), then add the entry to `sources.yaml`. Until it lands, miljan.rs posts are not searchable.
