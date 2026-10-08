---
id: object/pagecustomization/soa-sales-order-subform
type: object
title: Page customization "SOA Sales Order Subform"
summary: Page customization "SOA Sales Order Subform" in SalesOrderAgent (Microsoft.Agent.SalesOrderAgent). Introduced in BC29, still in BC30.
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
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 410b7abd8451c0f6ae2e3c9ce0f58a91dfba038954815fc822a66f0cc8939893
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/SalesOrderAgent/app/src/Profile/PageCustomizations/SOASalesOrderSubform.PageCust.al
    title: src/Apps/W1/SalesOrderAgent/app/src/Profile/PageCustomizations/SOASalesOrderSubform.PageCust.al (releases/29.x)
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
name: SOA Sales Order Subform
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

# Page customization "SOA Sales Order Subform"

> Page customization "SOA Sales Order Subform" in SalesOrderAgent (Microsoft.Agent.SalesOrderAgent). Introduced in BC29, still in BC30.

SalesOrderAgent · Microsoft.Agent.SalesOrderAgent · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/SalesOrderAgent/app/src/Profile/PageCustomizations/SOASalesOrderSubform.PageCust.al) · facts from BC29

## Recent changes

- 2026-08-05 [#9364 Slice 622414: [SOA] [Pioneer] Enhancing Sales Order Agent with Item Variant : availability and prices](../../changes/bcapps/9364.md) (main, BC30, feature)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "pagecustomization", object_name: "SOA Sales Order Subform")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
