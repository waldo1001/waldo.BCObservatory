---
name: bc-lookup
description: Look up Microsoft Dynamics 365 Business Central facts with evidence - AL objects (tables, pages, codeunits, events, fields), Learn documentation, roadmap features, videos and community posts - through the bc-observatory MCP server. Use when a question involves Business Central objects, ids, events, procedures, setup, features or "where is this documented".
---

# Business Central lookup

Use the `bc-observatory` MCP tools; never answer object ids, field numbers or versions from memory.

1. `search(query)` for anything; filter with `type` (object, topic, feature, localization, video, post), `tier` (official, community) or `system` (finance, sales, development, ...).
2. `get_object(type, idOrName)` for an AL object: fields, keys, events published, public procedures, obsolete state, versions it exists in, countries that replace it, Learn pages naming it.
3. `cat(path)` to read a page; its frontmatter carries `evidence` (URLs, commits, video seconds) and `links`.
4. `diff_object(type, id, from, to)` for what changed between two versions (28 -> 29, 29 -> 30).

For procedure bodies and the call graph, see `bc-grounding`.

Answer with the tier of each claim (official = Microsoft, community = everyone else), the version it applies to, and the evidence link. If a page is marked unreviewed, say it is machine-generated. If nothing is found, say so; do not guess.
