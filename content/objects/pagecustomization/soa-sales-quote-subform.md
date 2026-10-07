---
id: object/pagecustomization/soa-sales-quote-subform
type: object
title: Page customization "SOA Sales Quote Subform"
summary: Page customization "SOA Sales Quote Subform" in SalesOrderAgent (Microsoft.Agent.SalesOrderAgent). Introduced in BC29, still in BC30.
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
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ddc20ffb82a8bbf555dbba98fd45544ebb51140ff4d41076d0eed1f693d286cb
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/SalesOrderAgent/app/src/Profile/PageCustomizations/SOASalesQuoteSubform.PageCust.al
    title: src/Apps/W1/SalesOrderAgent/app/src/Profile/PageCustomizations/SOASalesQuoteSubform.PageCust.al (releases/29.x)
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
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
    - change/bcapps/9364
object_type: pagecustomization
object_id: null
name: SOA Sales Quote Subform
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
  calls: 0
  called_by: 0
  implements: 0
---

# Page customization "SOA Sales Quote Subform"

> Page customization "SOA Sales Quote Subform" in SalesOrderAgent (Microsoft.Agent.SalesOrderAgent). Introduced in BC29, still in BC30.

SalesOrderAgent · Microsoft.Agent.SalesOrderAgent · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/SalesOrderAgent/app/src/Profile/PageCustomizations/SOASalesQuoteSubform.PageCust.al) · facts from BC29

## Recent changes

- 2026-08-05 [#9364 Slice 622414: [SOA] [Pioneer] Enhancing Sales Order Agent with Item Variant : availability and prices](../../changes/bcapps/9364.md) (main, BC30, feature)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "pagecustomization", object_name: "SOA Sales Quote Subform")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node pagecustomization "SOA Sales Quote Subform"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
