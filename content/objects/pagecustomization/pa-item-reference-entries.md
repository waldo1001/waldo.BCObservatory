---
id: object/pagecustomization/pa-item-reference-entries
type: object
title: Page customization "PA Item Reference Entries"
summary: Page customization "PA Item Reference Entries" in PayablesAgent (Microsoft.Agent.PayablesAgent). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - pagecustomization
  - payablesagent
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
  input_hash: ebf40f5a9d09803fe5b5cdddefc5d6114db19a57898e720b6a42796e7fa72c9d
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/PayablesAgent/app/Profile/PageCustomizations/PAItemReferenceEntries.PageCust.al
    title: src/Apps/W1/PayablesAgent/app/Profile/PageCustomizations/PAItemReferenceEntries.PageCust.al (releases/29.x)
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
    - change/bcapps/7546
object_type: pagecustomization
object_id: null
name: PA Item Reference Entries
namespace: Microsoft.Agent.PayablesAgent
app: PayablesAgent
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

# Page customization "PA Item Reference Entries"

> Page customization "PA Item Reference Entries" in PayablesAgent (Microsoft.Agent.PayablesAgent). Introduced in BC29, still in BC30.

PayablesAgent · Microsoft.Agent.PayablesAgent · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/PayablesAgent/app/Profile/PageCustomizations/PAItemReferenceEntries.PageCust.al) · facts from BC29

## Recent changes

- 2026-08-18 [#7546 [Payables Agent] Agent-driven line matching](../../changes/bcapps/7546.md) (main, BC30, feature, added)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "pagecustomization", object_name: "PA Item Reference Entries")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node pagecustomization "PA Item Reference Entries"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
