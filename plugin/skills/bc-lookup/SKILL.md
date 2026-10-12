---
name: bc-lookup
description: Look up Microsoft Dynamics 365 Business Central facts with evidence - AL objects (tables, pages, codeunits, events, fields), Learn documentation, roadmap features, videos and community posts - through the bc-observatory MCP server. Use when a question involves Business Central objects, ids, events, procedures, setup, features or "where is this documented".
---

# Business Central lookup

Use the `bc-observatory` MCP tools; never answer object ids, field numbers or versions from memory.

1. `search(query)` for anything: a name (`Sales Header`), a reference (`t36`, `cu 80`, `table 11300 BE`), a bare id (`36`), a field, event or procedure (`Posting Date`, `OnAfterPostSalesDoc`, `event: OnAfterPost`, `proc: CopyToTempLines`). Filter with `type` (object, topic, app, feature, localization, video, post, change, source, digest, release), `tier` (official, community), `system` (finance, sales, development, ... or an alias such as `g/l`), `country` (`BE`), `app` (`Subscription Billing`), `object_type` (`table`) or `kind` (page, field, event, proc, value). Hits marked `[meaning]` were found by meaning only: check them.
2. `get_object(type, idOrName, country?)` for an AL object by id, reference (`t36`, `36-be`), name or caption: fields, keys, events published, public procedures, calls, obsolete state, versions it exists in, countries that replace it, Learn pages naming it. When it lists candidates, pick one by its path. A page over 30,000 characters (Table 36, Codeunit 80 and about 140 more) comes back compact: the frontmatter, the first 5 rows of each section and the section keys; read the part you need with `section` (`fields`, `events`, `procedures`, `calls`, ...) and page with `offset` and `limit` as the answer's last line says. To check that a field, event or procedure exists, `search("event: OnAfterPostSalesDoc")` is cheaper than the page, and `cat` of the hit's path (`objects/codeunit/80#event-OnAfterPostSalesDoc`) returns just that member.
3. `cat(path)` to read a page; its frontmatter carries `evidence` (URLs, commits, video seconds) and `links`. `cat` takes the same `section`, `offset` and `limit`.
4. `diff_object(type, id, from, to)` for what changed between two versions (28 -> 29, 29 -> 30).

For procedure bodies and the call graph, see `bc-grounding`.

Answer with the tier of each claim (official = Microsoft, community = everyone else), the version it applies to, and the evidence link. If a page is marked unreviewed, say it is machine-generated. If nothing is found, say so; do not guess.
