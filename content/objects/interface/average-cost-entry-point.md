---
id: object/interface/average-cost-entry-point
type: object
title: Interface "Average Cost Entry Point"
summary: Interface "Average Cost Entry Point" in Base Application (Microsoft.Inventory.Costing). 6 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7952eb4fa16d1fa40d8f2f45626cab9211caf4a17ff51c8965ca0f36a9499321
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Inventory/Costing/AverageCostEntryPoint.Interface.al
    title: src/Layers/W1/BaseApp/Inventory/Costing/AverageCostEntryPoint.Interface.al (releases/29.x)
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
name: Average Cost Entry Point
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
  procedures: 6
  events: 0
  subscribers: 0
---

# Interface "Average Cost Entry Point"

> Interface "Average Cost Entry Point" in Base Application (Microsoft.Inventory.Costing). 6 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Inventory.Costing · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Inventory/Costing/AverageCostEntryPoint.Interface.al) · facts from BC29

## Procedures

- `GetMaxValuationDate(ItemLedgerEntry: Record "Item Ledger Entry"; ValueEntry: Record "Value Entry"): Date`
- `GetValuationPeriod(var CalendarPeriod: Record Date; PostingDate: Date)`: The method find valuation period for posting date.
- `DeleteBuffer(ItemNo: Code[20]; FromValuationDate: Date)`: The method delete average cost adjustment buffer records for selected Item and from Valuation Date.
- `IsEntriesAdjusted(ItemNo: Code[20]; EndingDate: Date): Boolean`: The method check is all ledger entries have been adjusted for selected item and before ending date.
- `LockBuffer()`: The method lock average cost adjustment buffer table.
- `UpdateValuationDate(ValueEntry: Record "Value Entry")`: The method update average cost adjustment buffer table based on data in value entry.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
