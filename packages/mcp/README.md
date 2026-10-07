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

`search` is hybrid: keywords plus meaning, so "who is allowed to see what" finds the permission sets. Meaning comes from
static embeddings ([model2vec](https://github.com/MinishLab/model2vec) `minishlab/potion-base-8M`, MIT) computed locally in
plain JavaScript; the 30 MB model is downloaded once on the first search, pinned by revision and checked by SHA-256. Pass
`mode: "keyword"` for exact terms such as an object name. `BC_OBSERVATORY_EMBEDDINGS=0` turns it off, and
`BC_OBSERVATORY_MODEL_DIR=<dir with config.json, tokenizer.json, model.safetensors>` uses a model on disk (offline). Without a
model, search is keyword-only and says so.

Ranking matches the site: title and an AL object's caption weigh 3, tags 2, summary 1; topic hubs and app pages are then
re-sorted by `score x (1 + log2(members + 1) / 10) x (narrative reviewed 1.1, unreviewed 1, none 0.9)`, so "subscription"
returns the Subscription billing hub before the codeunits that share the word. Each result says where it sits (`in:` the
Learn TOC path, the app, the channel) and, for a hub, its size and review state.

MIT. Content: see the repository's CONTENT-NOTICE.md (Microsoft content attributed; community content derived only).
