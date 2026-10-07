---
id: object/interface/inventory-adjustment
type: object
title: Interface "Inventory Adjustment"
summary: Interface "Inventory Adjustment" in Base Application (Microsoft.Inventory.Costing). 4 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 66ba53cb616a3eb79b656e3bb8f97d8f9a490a8bf04fd2c8e68304da09def765
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Inventory/Costing/InventoryAdjustment.Interface.al
    title: src/Layers/W1/BaseApp/Inventory/Costing/InventoryAdjustment.Interface.al (releases/29.x)
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
first_version: "28"
last_version: "30"
present_in:
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

> Interface "Inventory Adjustment" in Base Application (Microsoft.Inventory.Costing). 4 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Inventory.Costing · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Inventory/Costing/InventoryAdjustment.Interface.al) · facts from BC29

## Procedures

- `SetFilterItem(var NewItem: Record Item)`
- `SetJobUpdateProperties(SkipUpdateJobItemCost: Boolean)`: The method set skip job cost update parameter for inventory cost adjustment codeunit.
- `SetProperties(NewIsOnlineAdjmt: Boolean; NewPostToGL: Boolean)`: The method set properties for inventory cost adjustment codeunit.
- `MakeMultiLevelAdjmt()`: The method run inventory cost adjustment codeunit.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
