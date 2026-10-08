---
id: object/interface/average-cost-entry-point
type: object
title: Interface "Average Cost Entry Point"
summary: Interface "Average Cost Entry Point" in Base Application (Microsoft.Inventory.Costing). 6 public procedures. Present since at least BC23, still in BC30.
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
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 070d83ee29e282283d618617edf3b9f4790578c6eb3f176b77c7bcbe7d4a32db
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Inventory/Costing/AverageCostEntryPoint.Interface.al
    title: src/Layers/W1/BaseApp/Inventory/Costing/AverageCostEntryPoint.Interface.al (releases/29.x)
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
name: Average Cost Entry Point
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
  implemented_by: 2
---

# Interface "Average Cost Entry Point"

> Interface "Average Cost Entry Point" in Base Application (Microsoft.Inventory.Costing). 6 public procedures. Present since at least BC23, still in BC30.

Base Application · Microsoft.Inventory.Costing · BC23-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Inventory/Costing/AverageCostEntryPoint.Interface.al) · facts from BC29

## Procedures

- `GetMaxValuationDate(ItemLedgerEntry: Record "Item Ledger Entry"; ValueEntry: Record "Value Entry"): Date`
- `GetValuationPeriod(var CalendarPeriod: Record Date; PostingDate: Date)`: The method find valuation period for posting date.
- `DeleteBuffer(ItemNo: Code[20]; FromValuationDate: Date)`: The method delete average cost adjustment buffer records for selected Item and from Valuation Date.
- `IsEntriesAdjusted(ItemNo: Code[20]; EndingDate: Date): Boolean`: The method check is all ledger entries have been adjusted for selected item and before ending date.
- `LockBuffer()`: The method lock average cost adjustment buffer table.
- `UpdateValuationDate(ValueEntry: Record "Value Entry")`: The method update average cost adjustment buffer table based on data in value entry.

## Implemented by

- [Codeunit 5848 "Avg. Cost Entry Point Mgt."](../codeunit/5848.md)
- [Enum 5848 "Average Cost Entry Point Impl."](../enum/5848.md)

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Average Cost Entry Point")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
