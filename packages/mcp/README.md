# bc-observatory (MCP server)

[BC Observatory](https://waldo1001.github.io/waldo.BCObservatory/) for agents: an agent-first, cross-referenced knowledge base of
Microsoft Dynamics 365 Business Central (Learn topic hubs, AL objects extracted from the code for BC28-30 with history back to BC23, country localizations,
Microsoft 365 roadmap features, videos and community posts), every claim with a trust tier and evidence.

```bash
claude mcp add bc-observatory -- npx -y bc-observatory@latest
```

Or the Claude Code plugin (MCP server plus skills): `claude plugin marketplace add waldo1001/waldo.BCObservatory`. The server never fetches Learn pages (D01); the plugin also connects Microsoft's Learn MCP (`https://learn.microsoft.com/api/mcp`), and a Learn hit's url is read there with `microsoft_docs_fetch`.

Tools: `search`, `ls`, `cat`, `get_object`, `diff_object`, `localization`, `whats_new`, `blog_footprint`, `feedback`.

The server downloads the site's search index (cached by hash in `~/.cache/bc-observatory/`, refreshed daily) and reads pages as
markdown. `BC_OBSERVATORY_LOCAL=<checkout of waldo1001/waldo.BCObservatory>` reads everything from disk instead;
`BC_OBSERVATORY_SITE` points at another deployment.

`search` ranks with the site's own scorer (`packages/search`, bundled into `dist/server.js`), so an agent and a reader get the
same order: references (`t36`, `cu 80`, `table 11300 BE`) and bare ids (`36`) go straight to the object; per query word
the title and an AL object's caption weigh 3, tags 2, summary 1, through the exact word, a prefix, the plural, a synonym
(`client` is Customer, `G/L` is general ledger) or one typo; a name equal to the query adds 10; base app before
first-party app before country layer, then what references, calls and documents an object; topic hubs by their size and
review state, so "subscription" returns the Subscription billing hub before the codeunits that share the word. A field, event or procedure ranks where its owner ranks (base application before first-party app before country layer, then importance), and its tooltip adds nothing when its name equals the query; a `kind:` query that finds nothing says `No event named "..."`, names the nearest symbols and is never padded with pages by meaning. A question (`how to ...`, `difference between A and B`, `A vs B`) drops its question words when a content word is left, a quoted phrase keeps all its words, and the hint names the hub of the best Learn article. Fields,
events, global procedures and enum values are searchable too (`OnAfterPostSalesDoc`, `field: Posting Date`); their path
ends in an anchor (`objects/codeunit/80#event-OnAfterPostSalesDoc`). Filters: `type`, `tier`, `system`, `country`,
`app`, `object_type`, `kind`. Each result says where it sits (`in:` the Learn TOC path, the app, the channel) and, for a
hub, its size and review state.

The search is hybrid by default: the exact band (references and exact names) stays on top and the rest is fused with a
meaning ranking, so "who is allowed to see what" finds the permission sets; each hit says `[keyword]`, `[meaning]` or
`[both]`. Meaning comes from static embeddings ([model2vec](https://github.com/MinishLab/model2vec) `minishlab/potion-base-8M`, MIT) computed locally in
plain JavaScript; the 30 MB model is downloaded once on the first search, pinned by revision and checked by SHA-256. Pass
`mode: "keyword"` for the scorer alone. `BC_OBSERVATORY_EMBEDDINGS=0` turns it off, and
`BC_OBSERVATORY_MODEL_DIR=<dir with config.json, tokenizer.json, model.safetensors>` uses a model on disk (offline). Without a
model, search is keyword-only and says so.

Pass `sort: "date"` to list the keyword matches newest first (`search("Telemetry", type: "post", sort: "date", limit: 3)`
answers "what was blogged lately about it"): by day, the same day best match first, undated pages last; a roadmap feature
sorts by its GA month, a Learn article by its last update, a weekly digest by the Monday of its week. The meaning list is
not used under `sort: "date"`, so `mode: "semantic"` is ignored (the header says so). Default is `sort: "match"`.

`get_object` takes an id, a reference (`t36`, `36-be`), a name or a caption, and a `country`; when that country's layer replaces a W1 object (`get_object("table", "18", "BE")`) the fields, events and procedures the layer adds print before the W1 page, and a lookup without a country ends with a `Replaced in:` line naming the layers; `search("field: Enterprise No.", country: "BE")` finds a member a layer adds. `whats_new` lists nothing
dated after today unless `include_future: true`.

`cat`, `get_object` and `localization` return a page as it is when it fits 30,000 characters. A longer page
(Codeunit 80 "Sales-Post" is 177,746) comes back as a compact view: the frontmatter with long lists cut, the title
block, the section keys with their row counts and the first 5 rows of each section. `section` reads one section
(`fields` on a table, `controls` on a page, `events`, `procedures`, `calls`, ..., or `frontmatter`; on a page `fields`,
`columns` and `members` also read `controls`, and a word that matches nothing answers with the nearest key), `offset` and `limit` page through it by rows, and
no answer exceeds 30,000 characters. A symbol's path from `search` (`objects/codeunit/80#event-OnAfterPostSalesDoc`)
returns just that member. `BC_OBSERVATORY_MAX_CHARS` changes the limit (`0` returns every page whole, as before
0.4.0).

MIT. Content: see the repository's CONTENT-NOTICE.md (Microsoft content attributed; community content derived only).
