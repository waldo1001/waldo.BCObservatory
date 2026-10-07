---
id: object/pagecustomization/soa-contact-list
type: object
title: Page customization "SOA Contact List"
summary: Page customization "SOA Contact List" in SalesOrderAgent (Microsoft.Agent.SalesOrderAgent). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - pagecustomization
  - salesorderagent
versions:
  introduced: "29"
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3945e6ce80ab98821922173dd07e4f35c79cc2beb80f8c0f0e6ecbd5ba8ff15a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/SalesOrderAgent/app/src/Profile/PageCustomizations/SOAContactList.PageCust.al
    title: src/Apps/W1/SalesOrderAgent/app/src/Profile/PageCustomizations/SOAContactList.PageCust.al (releases/29.x)
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10036
object_type: pagecustomization
object_id: null
name: SOA Contact List
namespace: Microsoft.Agent.SalesOrderAgent
app: SalesOrderAgent
extends: null
first_version: "29"
last_version: "30"
present_in:
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 0
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Page customization "SOA Contact List"

> Page customization "SOA Contact List" in SalesOrderAgent (Microsoft.Agent.SalesOrderAgent). Introduced in BC29, still in BC30.

SalesOrderAgent · Microsoft.Agent.SalesOrderAgent · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/SalesOrderAgent/app/src/Profile/PageCustomizations/SOAContactList.PageCust.al) · facts from BC29

## Recent changes

- 2026-08-13 [#10036 [SOA]: Bugbash for releases 28.x - Contact unable to find due to Qasim map to Megan, different names](../../changes/bcapps/10036.md) (main, BC30, feature)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "pagecustomization", object_name: "SOA Contact List")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node pagecustomization "SOA Contact List"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
