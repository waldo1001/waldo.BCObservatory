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
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-31T00:48:20.076Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: cd99e34249cf7c920919e67cf209938aa4f86969d6601f5993b134ae75814697
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/8e740e5061595dd231c4a2d9d453c86c84ec76ae/src/Apps/W1/SalesOrderAgent/app/src/Profile/PageCustomizations/SOAContactList.PageCust.al
    title: src/Apps/W1/SalesOrderAgent/app/src/Profile/PageCustomizations/SOAContactList.PageCust.al (releases/29.x)
    date: null
    commit: 8e740e5061595dd231c4a2d9d453c86c84ec76ae
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
  related:
    - to: https://learn.microsoft.com/dynamics365/business-central/sales-order-agent
      title: Sales Order Agent overview
      label: possibly related
      why: Documents Sales Order Agent workflow for customer identification and order creation
      by: model
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
  calls: 0
  called_by: 0
  implements: 0
---

# Page customization "SOA Contact List"

> Page customization "SOA Contact List" in SalesOrderAgent (Microsoft.Agent.SalesOrderAgent). Introduced in BC29, still in BC30.

SalesOrderAgent · Microsoft.Agent.SalesOrderAgent · BC29-30 · [source at 8e740e50](https://github.com/microsoft/BCApps/blob/8e740e5061595dd231c4a2d9d453c86c84ec76ae/src/Apps/W1/SalesOrderAgent/app/src/Profile/PageCustomizations/SOAContactList.PageCust.al) · facts from BC29

## Recent changes

- 2026-08-13 [#10036 [SOA]: Bugbash for releases 28.x - Contact unable to find due to Qasim map to Megan, different names](../../changes/bcapps/10036.md) (main, BC30, fix)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [Sales Order Agent overview](https://learn.microsoft.com/dynamics365/business-central/sales-order-agent) — possibly related: Documents Sales Order Agent workflow for customer identification and order creation (model-linked)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "pagecustomization", object_name: "SOA Contact List")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
