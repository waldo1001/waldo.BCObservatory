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
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-30T01:00:43.748Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 54fa6930fc2f97730b14f767986c9ba145734aef2b9236721accbea31d0af3c8
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/7aa49e808916c060dbee97d9ff324a2cfda8d422/src/Apps/W1/SalesOrderAgent/app/src/Profile/PageCustomizations/SOASalesQuoteSubform.PageCust.al
    title: src/Apps/W1/SalesOrderAgent/app/src/Profile/PageCustomizations/SOASalesQuoteSubform.PageCust.al (releases/29.x)
    date: null
    commit: 7aa49e808916c060dbee97d9ff324a2cfda8d422
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
  related:
    - to: https://learn.microsoft.com/dynamics365/business-central/sales-order-agent
      title: Sales Order Agent overview
      label: possibly related
      why: Describes Sales Order Agent automation of quote creation from customer emails
      by: model
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

SalesOrderAgent · Microsoft.Agent.SalesOrderAgent · BC29-30 · [source at 7aa49e80](https://github.com/microsoft/BCApps/blob/7aa49e808916c060dbee97d9ff324a2cfda8d422/src/Apps/W1/SalesOrderAgent/app/src/Profile/PageCustomizations/SOASalesQuoteSubform.PageCust.al) · facts from BC29

## Recent changes

- 2026-08-05 [#9364 Slice 622414: [SOA] [Pioneer] Enhancing Sales Order Agent with Item Variant : availability and prices](../../changes/bcapps/9364.md) (main, BC30, feature)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [Sales Order Agent overview](https://learn.microsoft.com/dynamics365/business-central/sales-order-agent) — possibly related: Describes Sales Order Agent automation of quote creation from customer emails (model-linked)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "pagecustomization", object_name: "SOA Sales Quote Subform")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
