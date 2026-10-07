---
id: object/interface/edit-in-excel-field-filter-v2
type: object
title: Interface "Edit in Excel Field Filter v2"
summary: Interface "Edit in Excel Field Filter v2" in System Application (System.Integration.Excel). 5 public procedures. Present since at least BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
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
  input_hash: 29bcbd237e056d49e529381868272920c998a11c9df92721cef1688526a0fb1e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Edit%20in%20Excel/src/Filters/EditInExcelFieldFilterv2.Interface.al
    title: src/System Application/App/Edit in Excel/src/Filters/EditInExcelFieldFilterv2.Interface.al (releases/29.x)
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
name: Edit in Excel Field Filter v2
namespace: System.Integration.Excel
app: System Application
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
  procedures: 5
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Edit in Excel Field Filter v2"

> Interface "Edit in Excel Field Filter v2" in System Application (System.Integration.Excel). 5 public procedures. Present since at least BC28, still in BC30.

System Application · System.Integration.Excel · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Edit%20in%20Excel/src/Filters/EditInExcelFieldFilterv2.Interface.al) · facts from BC29

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

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
