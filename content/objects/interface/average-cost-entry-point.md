---
id: object/interface/average-cost-entry-point
type: object
title: Interface "Average Cost Entry Point"
summary: Interface "Average Cost Entry Point" in Base Application (Microsoft.Inventory.Costing). 6 public procedures. Introduced in BC25, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: "25"
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d61cc902e6849ac11afd8911537c6e40346a86c0dcb80ed43aeaf213fd21fca5
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Inventory/Costing/AverageCostEntryPoint.Interface.al
    title: src/Layers/W1/BaseApp/Inventory/Costing/AverageCostEntryPoint.Interface.al (releases/29.x)
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
name: Average Cost Entry Point
namespace: Microsoft.Inventory.Costing
app: Base Application
extends: null
first_version: "25"
last_version: "30"
present_in:
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
---

# Interface "Average Cost Entry Point"

> Interface "Average Cost Entry Point" in Base Application (Microsoft.Inventory.Costing). 6 public procedures. Introduced in BC25, still in BC30.

Base Application · Microsoft.Inventory.Costing · BC25-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Inventory/Costing/AverageCostEntryPoint.Interface.al) · facts from BC29

## Procedures

- `GetMaxValuationDate(ItemLedgerEntry: Record "Item Ledger Entry"; ValueEntry: Record "Value Entry"): Date`
- `GetValuationPeriod(var CalendarPeriod: Record Date; PostingDate: Date)`: The method find valuation period for posting date.
- `DeleteBuffer(ItemNo: Code[20]; FromValuationDate: Date)`: The method delete average cost adjustment buffer records for selected Item and from Valuation Date.
- `IsEntriesAdjusted(ItemNo: Code[20]; EndingDate: Date): Boolean`: The method check is all ledger entries have been adjusted for selected item and before ending date.
- `LockBuffer()`: The method lock average cost adjustment buffer table.
- `UpdateValuationDate(ValueEntry: Record "Value Entry")`: The method update average cost adjustment buffer table based on data in value entry.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Average Cost Entry Point")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Average Cost Entry Point"`

## Across versions

- Present in: BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
