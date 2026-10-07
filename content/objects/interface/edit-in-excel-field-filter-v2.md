---
id: object/interface/edit-in-excel-field-filter-v2
type: object
title: Interface "Edit in Excel Field Filter v2"
summary: Interface "Edit in Excel Field Filter v2" in System Application (System.Integration.Excel). 5 public procedures. Introduced in BC25, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
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
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4d48245a3b1e49eb3fef86d808057bcc747a4bee9876593e108cd15b49a1854a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Edit%20in%20Excel/src/Filters/EditInExcelFieldFilterv2.Interface.al
    title: src/System Application/App/Edit in Excel/src/Filters/EditInExcelFieldFilterv2.Interface.al (releases/29.x)
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
name: Edit in Excel Field Filter v2
namespace: System.Integration.Excel
app: System Application
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
  procedures: 5
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

# Interface "Edit in Excel Field Filter v2"

> Interface "Edit in Excel Field Filter v2" in System Application (System.Integration.Excel). 5 public procedures. Introduced in BC25, still in BC30.

System Application · System.Integration.Excel · BC25-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Edit%20in%20Excel/src/Filters/EditInExcelFieldFilterv2.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `AddFilterValueV2(EditInExcelFilterType: Enum "Edit in Excel Filter Type"; FilterValue: Text): Interface "Edit in Excel Field Filter v2"`: Add a filter value
- `Get(Index: Integer; var EditinExcelFilterType: Enum "Edit in Excel Filter Type"; var FilterValue: Text)`: Get a specific filter
- `GetCollectionType(): Enum "Edit in Excel Filter Collection Type"`: Get the filter collection type
- `Remove(Index: Integer)`: Remove a specific filter
- `Count(): Integer`: Counts the number of filters

## Implemented by

- [Codeunit 1492 "Edit in Excel Fld Filter Impl."](../codeunit/1492.md)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Edit in Excel Field Filter v2")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Edit in Excel Field Filter v2"`

## Across versions

- Present in: BC25-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
