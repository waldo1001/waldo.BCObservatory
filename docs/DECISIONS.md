# Decisions

Numbered, append-only. Each entry: decision, why, consequence. See `docs/PLAN.md` for the full architecture.

- **D01 Overlay, not mirror.** Learn stays canonical; we build hubs that link out. Why: new value instead of 10k
  duplicated pages; cheapest in tokens. Consequence: no page reproduces a Learn article; hubs quote and link.
- **D02 Agents first, humans second but first-class.** Markdown + frontmatter + JSON + llms.txt + MCP are the product;
  the Astro site renders the same files. Consequence: the data model is facts, not pages.
- **D03 Galaxy metaphor.** Systems = domains, stars = hubs, orbits = sources, constellations = localizations, flares =
  new content, flight path = author footprint. Why: structured, scales, maps 1:1 onto the data model; a brain graph
  becomes a hairball.
- **D04 Mac Mini runs the pipeline on the Claude subscription.** Self-hosted Actions runner, `claude -p` with a
  `claude setup-token` OAuth token, never the API. Exception: the Pages build and PR validation run on
  `ubuntu-latest` (token-free; security). Why: YouTube blocks GitHub-hosted runners; the subscription is the only
  LLM budget; one orchestrator with logs in GitHub.
- **D05 Dedicated macOS user `bcobs` + system LaunchDaemon.** Why: isolation from Jarvis and from waldo's keys; a user
  that never logs in cannot use LaunchAgents or pm2 startup.
- **D06 Budget guard mirrors Jarvis.** Skip above 60% (5 h) / 70% (week); nightly window 01:00-07:00; fixed quotas;
  newest-first; heartbeat commit when skipped (keeps the schedule alive past GitHub's 60-day rule).
- **D07 Tiered models.** Haiku for schema-bound facts, Sonnet for prose, Opus for reviewing hubs and flagged items.
  Unreviewed content ships with a badge. Why: Opus reviewing 100% of Haiku output costs more than Sonnet writing it
  right once; validators catch most errors for free.
- **D08 Content policy.** Microsoft full text (Learn CC BY, Microsoft channel captions). Community derived only
  unless `full_text: true` with consent evidence. Raw community text + LLM cache in a private vault. Why: attribution
  satisfies CC BY, not All-Rights-Reserved; bloggers live on traffic and reputation.
- **D09 Caption VTT is the canonical video intermediate.** Seeded with the 84 release-wave VTTs; every other video
  gets the same artifact. Keyed by videoId; title matching only in the one-off seed import with an override map.
- **D10 Code pillar: own extractor on tree-sitter-al, metadata only.** Per-object JSON incl. Obsolete*, params,
  events; structured diffs version-to-version and W1-to-country; `ms.search.form` for docs-to-objects. bc-code-atlas
  is linked as a companion, graphify-al optionally supplies call/subscriber edges. Never vendor source text.
- **D11 Scope order for code.** 28/29 W1 + all country layers extracted; BE + NL narratives first; then 30-vNext;
  then older versions as diffs.
- **D12 Hubs consume member summaries, never raw corpora.** Prompt size O(members); no cross-corpus single prompts.
- **D13 Astro for the site, Pagefind for site search, MiniSearch shards for the MCP.** Semantic search (static
  model2vec vectors) is v0.2.
- **D14 Repo has no secrets.** The only secret is the env file on the Mini. Workflows push with GITHUB_TOKEN; the
  vault uses a deploy key held on the Mini.
- **D15 Tools for the pipeline user are installed per user.** yt-dlp and deno go to `bcobs` via `uv tool` on uv's
  managed Python 3.12; brew installs only uv. Why: brew would upgrade openssl@3, sqlite, readline, xz and
  ca-certificates under the running Jarvis processes. Consequence: `infra/mini/35-tools.sh`; re-run it to upgrade yt-dlp.
- **D16 Usage-guard token deferred to M1.** The setup-token lacks `user:profile` and Jarvis's login token is static
  with no refresh. Consequence: the guard runs `reduced` until a durable token source exists; M0 makes no LLM calls.
- **D17 Own metering caps LLM spend.** Until the usage guard has a durable token, every call is metered from its
  `claude -p` envelope and the nightly stops at per-night and per-week caps in `config/budget.json`. Why: works today
  without a new credential. Consequence: it sees only our calls, not Jarvis's or the owner's.
- **D18 Videos are the first M1 pillar.** Why: 84 seed VTTs exist and the extraction loop is proven on them, so it is
  the shortest path to real pages. Learn docs follow, then roadmap stubs and the first Opus-reviewed hubs.
- **D19 A status claim needs a status word.** A feature's status (ga, preview, announced) stands only when its
  verbatim evidence quote states it; "we introduced X" is not "X is generally available". Why: verbatim checks proved
  quotes existed, not that they supported the label, and summaries repeated the overclaim. Consequence: launch-event
  videos mostly read "status not stated"; real status comes from the Microsoft 365 roadmap feature pages.
- **D20 Spend caps bind, not item counts; small items are batched.** Measured with `claude -p`: a call carries ~$0.012
  of fixed CLI overhead; Haiku without thinking for facts; Learn pages go 8 per Haiku call (~$0.008 a page). Item
  quotas were raised (docs 400, videos 40, hubs 60, captions 60) so the $10 night / $50 week caps (D17) are the
  limit. Consequence: executor batch handlers; backlog in weeks instead of months.
- **D21 Reviews gate, they do not just annotate.** Opus edits pass the same validators as the first pass; a rejected
  video is skipped and a rejected hub narrative is withheld from its page. Reviews are tied to the input hash of
  what they reviewed.
- **D22 Roadmap coverage is an LLM match over same-system candidates, validated deterministically.** A video (its
  extracted features) or a Learn page is matched by Haiku against the roadmap features that share a galaxy system with
  it; the schema enums allow only that call's refs and roadmap ids, the model labels each pair `covers` or `related`
  (only `covers` is kept), and validation drops a match whose id is not a candidate of that ref, whose quote words do
  not appear in order in the evidence text, or whose ref matched more than 3 features. Roadmap features get 1 to 3
  systems from a Haiku classification on top of their area's system. Why: one area system per feature missed real
  coverage (an Expense Agent withholding-tax video is finance, the area is copilot); without the `related` escape
  Haiku linked evergreen Learn pages by topic (about half wrong). Measured 2026-10-06: backfill of 241 units in 64
  calls, ~$1.65 including the one-off classification; ~$0.021 a call (one video, or 8 Learn pages). Video matches
  are high precision; Learn matches about three quarters plausible, so they ship machine-generated and unreviewed.
  Consequence: `data/links/roadmap.json` (+ `roadmap-systems.json`), quota `roadmap_links`, units redone only when
  their text or their candidates change; a video feature takes the roadmap status when its roadmap features agree.
- **D23 Opus reviews roadmap coverage per feature, per link.** One `review` call per roadmap feature sees its full
  roadmap text and every proposed link (video feature or Learn page, with the evidence text the matcher saw) and
  keeps or drops each. Verdicts are keyed by link and unit hash in `data/links/roadmap-review.json`; views leave
  dropped links out, so a dropped video link also stops passing the roadmap status; unreviewed links are marked.
  An answer without exactly one verdict per link is not stored. Why: Haiku's Learn matches were about a quarter
  wrong and D21 says reviews gate. Measured 2026-10-06: backfill of 66 features / 305 links for $4.74 (~$0.07 a
  feature); Opus dropped 22% of video links (mostly wave 1 videos showing the older capability) and 48% of Learn
  links. Quota `coverage_reviews` (Opus calls, zero under facts-only).
