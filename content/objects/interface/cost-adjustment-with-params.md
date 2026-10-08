---
id: object/interface/cost-adjustment-with-params
type: object
title: Interface "Cost Adjustment With Params"
summary: Interface "Cost Adjustment With Params" in Base Application (Microsoft.Inventory.Costing). 1 public procedures. Introduced in BC26, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: "26"
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
  input_hash: 29a7d8c716bf97ac5650b9678893a8d98d2d3b6f45645a4c30b4541d25615cca
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Inventory/Costing/CostAdjustmentWithParams.Interface.al
    title: src/Layers/W1/BaseApp/Inventory/Costing/CostAdjustmentWithParams.Interface.al (releases/29.x)
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
object_type: interface
object_id: null
name: Cost Adjustment With Params
namespace: Microsoft.Inventory.Costing
app: Base Application
extends: null
first_version: "26"
last_version: "30"
present_in:
  - "26"
  - "27"
  - "28"
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
  implemented_by: 1
---

# Interface "Cost Adjustment With Params"

> Interface "Cost Adjustment With Params" in Base Application (Microsoft.Inventory.Costing). 1 public procedures. Introduced in BC26, still in BC30.

Base Application · Microsoft.Inventory.Costing · BC26-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Inventory/Costing/CostAdjustmentWithParams.Interface.al) · facts from BC29

## Procedures

- `MakeMultiLevelAdjmt(var CostAdjustmentParameter: Codeunit "Cost Adjustment Params Mgt.")`

## Implemented by

- [Codeunit 5895 "Inventory Adjustment"](../codeunit/5895.md)

## Across versions

- Present in: BC26-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Cost Adjustment With Params")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
