---
name: bcobs-grounding
description: Ground Microsoft Dynamics 365 Business Central answers in the three connected servers - bc-observatory for facts (ids, fields, events, versions, obsolete state, localizations, Learn pages, changes, calls and callers per object, evidence), bc-code-atlas for the real AL source code (procedure body, what one procedure calls, semantic code search) and Microsoft Learn MCP for reading Learn pages and AL code samples. Use when a question needs to verify in the code what an object or procedure actually does, who calls it, or to show a procedure body.
---

# Grounding Business Central answers: observatory, atlas and Learn

Three servers are connected. They answer different questions; use the right one first. For a question that wants the whole picture, `brief(query)` on the observatory gives the layers (Learn with key facts, code, changes, warnings, gaps) in one call; then go to the server each line points at.

| Question | Server |
|---|---|
| What is it, which id, which fields, events, public procedures; is it obsolete; which versions (BC28-30) and countries have it; where is it documented; what changed between versions; who calls it and what it calls, per object (BC28 and BC29 graphs); videos, posts, roadmap | `bc-observatory` (curated pages with tiers and evidence) |
| Show me the procedure body, what does this one procedure call, find code by meaning | `bc-code-atlas` (external, by Stefan Maron, MIT; AL source, call graph, semantic code search; default corpus `w1-28`) |
| Procedure, concept or setup text; code samples | `microsoft-learn` (Microsoft Learn MCP, official: `microsoft_docs_fetch(url)` on a Learn hit's url, `microsoft_code_sample_search(query, language: "al")`; see `bcobs-lookup`) |

1. Observatory first for identity and context: `get_object(type, idOrName)` gives id, fields, events, public procedures, obsolete state, versions, countries and Learn pages; for a large object it is a compact view, and `section: "calls"` or `section: "called_by"` reads the object's calls and callers. For a body or one procedure's edges, the page names the atlas call (`section: "ask"`).
2. Atlas for behaviour: `bcatlas_resolve_node(object_type, object_name[, member])`, never `bcatlas_get_node` with a free label; then `bcatlas_get_neighbors` for the exact edges, `bcatlas_get_signature` to confirm, `bcatlas_get_procedure_body` to read. Say "w1-28" (or the resolved version) with every atlas fact; the observatory page says which versions the object exists in.
3. `bcatlas_search` only when the name is unknown; prefer `search` on the observatory for topics and docs.
4. Never call `bcatlas_request_version` unless the user asked for a version that is not warm and accepts the wait: it starts a build on the maintainer's server. Call `bcatlas_list_warm_versions` first.
5. One question, one or two atlas calls. If the atlas does not answer (timeout, error), say so and answer from the observatory with its evidence; do not retry in a loop.
6. Never answer object ids, field numbers or versions from memory (as `bcobs-lookup`).

The atlas is one person's server, free and young: be a polite client. No sweeps over many objects, no loops of calls, nothing scheduled. If the user already has the atlas's own CLI skill (`bc-code-atlas-cli`), use one connection method, not both.

Answer with the observatory's evidence link for each fact and the atlas corpus ("w1-28") for each code claim. Quote a body only as far as the question needs it.
