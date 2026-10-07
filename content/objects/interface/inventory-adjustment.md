---
id: object/interface/inventory-adjustment
type: object
title: Interface "Inventory Adjustment"
summary: Interface "Inventory Adjustment" in Base Application (Microsoft.Inventory.Costing). 4 public procedures. Present since at least BC23, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: null
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T16:23:11.326Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c32d51dd57975c1a400d04ecaae0408b927266e1c6a14aca014b8a4c7f365c81
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Inventory/Costing/InventoryAdjustment.Interface.al
    title: src/Layers/W1/BaseApp/Inventory/Costing/InventoryAdjustment.Interface.al (releases/29.x)
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
object_type: interface
object_id: null
name: Inventory Adjustment
namespace: Microsoft.Inventory.Costing
app: Base Application
extends: null
first_version: "23"
last_version: "30"
present_in:
  - "23"
  - "24"
  - "25"
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
  procedures: 4
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Inventory Adjustment"

> Interface "Inventory Adjustment" in Base Application (Microsoft.Inventory.Costing). 4 public procedures. Present since at least BC23, still in BC30.

Base Application · Microsoft.Inventory.Costing · BC23-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Inventory/Costing/InventoryAdjustment.Interface.al) · facts from BC29

## Procedures

- `SetFilterItem(var NewItem: Record Item)`
- `SetJobUpdateProperties(SkipUpdateJobItemCost: Boolean)`: The method set skip job cost update parameter for inventory cost adjustment codeunit.
- `SetProperties(NewIsOnlineAdjmt: Boolean; NewPostToGL: Boolean)`: The method set properties for inventory cost adjustment codeunit.
- `MakeMultiLevelAdjmt()`: The method run inventory cost adjustment codeunit.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Inventory Adjustment")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Inventory Adjustment"`

## Across versions

- Present in: BC23, BC24, BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
