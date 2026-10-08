---
id: object/interface/shpfy-ibulk-operation
type: object
title: Interface "Shpfy IBulk Operation"
summary: Interface "Shpfy IBulk Operation" in Shopify (Microsoft.Integration.Shopify). 6 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - shopify
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
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 34c8cfea9c5c1e8892b94b2d2eb56983a19498a3c2acfef251563bdde6c46064
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/Shopify/app/src/Bulk%20Operations/Interfaces/ShpfyIBulkOperation.Interface.al
    title: src/Apps/W1/Shopify/app/src/Bulk Operations/Interfaces/ShpfyIBulkOperation.Interface.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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
object_type: interface
object_id: null
name: Shpfy IBulk Operation
namespace: Microsoft.Integration.Shopify
app: Shopify
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
  procedures: 6
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
  implemented_by: 0
---

# Interface "Shpfy IBulk Operation"

> Interface "Shpfy IBulk Operation" in Shopify (Microsoft.Integration.Shopify). 6 public procedures. Introduced in BC29, still in BC30.

Shopify · Microsoft.Integration.Shopify · BC29-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/Shopify/app/src/Bulk%20Operations/Interfaces/ShpfyIBulkOperation.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `GetGraphQL(): Text`: Provides the GraphQL query for the bulk operation.
- `GetInput(): Text`: Provides the request input for the bulk operation.
- `GetName(): Text[250]`: Provides the name of the bulk operation.
- `GetType(): Text`: GetType.
- `RevertFailedRequests(var BulkOperation: Record "Shpfy Bulk Operation")`: Reverts the failed requests for the bulk operation.
- `RevertAllRequests(var BulkOperation: Record "Shpfy Bulk Operation")`: Reverts all requests for the bulk operation.

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Shpfy IBulk Operation")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
