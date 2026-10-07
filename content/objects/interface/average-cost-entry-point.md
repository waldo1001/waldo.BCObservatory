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
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2ee1cb4d44ce52a2baec0cf362793653622706c07ce0d1f27688a74453a22411
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/Inventory/Costing/AverageCostEntryPoint.Interface.al
    title: src/Layers/W1/BaseApp/Inventory/Costing/AverageCostEntryPoint.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Average Cost Entry Point"

> Interface "Average Cost Entry Point" in Base Application (Microsoft.Inventory.Costing). 6 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Inventory.Costing · BC28-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/Inventory/Costing/AverageCostEntryPoint.Interface.al) · facts from BC29

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
