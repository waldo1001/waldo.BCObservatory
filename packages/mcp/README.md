# bc-observatory (MCP server)

[BC Observatory](https://waldo1001.github.io/waldo.BCObservatory/) for agents: an agent-first, cross-referenced knowledge base of
Microsoft Dynamics 365 Business Central (Learn topic hubs, AL objects extracted from the code for BC28-30 with history back to BC23, country localizations,
Microsoft 365 roadmap features, videos and community posts), every claim with a trust tier and evidence.

```bash
claude mcp add bc-observatory -- npx -y bc-observatory@latest
```

Or the Claude Code plugin (MCP server plus skills): `claude plugin marketplace add waldo1001/waldo.BCObservatory`.

Tools: `search`, `ls`, `cat`, `get_object`, `diff_object`, `localization`, `whats_new`, `blog_footprint`, `feedback`.

The server downloads the site's search index (cached by hash in `~/.cache/bc-observatory/`, refreshed daily) and reads pages as
markdown. `BC_OBSERVATORY_LOCAL=<checkout of waldo1001/waldo.BCObservatory>` reads everything from disk instead;
`BC_OBSERVATORY_SITE` points at another deployment.

`search` ranks with the site's own scorer (`packages/search`, bundled into `dist/server.js`), so an agent and a reader get the
same order: references (`t36`, `cu 80`, `table 11300 BE`) and bare ids (`36`) go straight to the object; per query word
the title and an AL object's caption weigh 3, tags 2, summary 1, through the exact word, a prefix, the plural, a synonym
(`client` is Customer, `G/L` is general ledger) or one typo; a name equal to the query adds 10; base app before
first-party app before country layer, then what references, calls and documents an object; topic hubs by their size and
review state, so "subscription" returns the Subscription billing hub before the codeunits that share the word. Fields,
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

`get_object` takes an id, a reference (`t36`, `36-be`), a name or a caption, and a `country`; `whats_new` lists nothing
dated after today unless `include_future: true`.

MIT. Content: see the repository's CONTENT-NOTICE.md (Microsoft content attributed; community content derived only).
