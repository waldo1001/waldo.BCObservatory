# bc-observatory (MCP server)

[BC Observatory](https://waldo1001.github.io/waldo.BCObservatory/) for agents: an agent-first, cross-referenced knowledge base of
Microsoft Dynamics 365 Business Central (Learn topic hubs, AL objects extracted from the code for BC28-30, country localizations,
Microsoft 365 roadmap features, videos and community posts), every claim with a trust tier and evidence.

```bash
claude mcp add bc-observatory -- npx -y bc-observatory@latest
```

Or the Claude Code plugin (MCP server plus skills): `claude plugin marketplace add waldo1001/waldo.BCObservatory`.

Tools: `search`, `ls`, `cat`, `get_object`, `diff_object`, `localization`, `whats_new`, `blog_footprint`, `feedback`.

The server downloads the site's search index (cached by hash in `~/.cache/bc-observatory/`, refreshed daily) and reads pages as
markdown. `BC_OBSERVATORY_LOCAL=<checkout of waldo1001/waldo.BCObservatory>` reads everything from disk instead;
`BC_OBSERVATORY_SITE` points at another deployment.

MIT. Content: see the repository's CONTENT-NOTICE.md (Microsoft content attributed; community content derived only).
