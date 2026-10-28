---
id: object/interface/shpfy-stock-calculation
type: object
title: Interface "Shpfy Stock Calculation"
summary: Interface "Shpfy Stock Calculation" in Shopify (Microsoft.Integration.Shopify). 1 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-28T10:42:34.480Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7dcce4d2887aff9e24e862fd8b7728cc45da87e715818889c92bf90550fa7b8c
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/4c1c1638beb6d5da8540cc1f61889b80c7b3356f/src/Apps/W1/Shopify/app/src/Inventory/Interface/ShpfyStockCalculation.Interface.al
    title: src/Apps/W1/Shopify/app/src/Inventory/Interface/ShpfyStockCalculation.Interface.al (releases/29.x)
    date: null
    commit: 4c1c1638beb6d5da8540cc1f61889b80c7b3356f
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extending-shopify
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: Shpfy Stock Calculation
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
  procedures: 1
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

# Interface "Shpfy Stock Calculation"

> Interface "Shpfy Stock Calculation" in Shopify (Microsoft.Integration.Shopify). 1 public procedures. Introduced in BC29, still in BC30.

Shopify · Microsoft.Integration.Shopify · BC29-30 · [source at 4c1c1638](https://github.com/microsoft/BCApps/blob/4c1c1638beb6d5da8540cc1f61889b80c7b3356f/src/Apps/W1/Shopify/app/src/Inventory/Interface/ShpfyStockCalculation.Interface.al) · facts from BC29

## Procedures

- `GetStock(var Item: Record Item): Decimal`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

## Documented on Microsoft Learn

- [Extending Shopify](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extending-shopify) (names this object)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Shpfy Stock Calculation")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
