---
id: object/interface/import-consolidation-data
type: object
title: Interface "Import Consolidation Data"
summary: Interface "Import Consolidation Data" in Base Application (Microsoft.Finance.Consolidation). 1 public procedures. Introduced in BC24, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: "24"
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
  input_hash: f66c58953cc3c75d0aac003aa8d4feab9453a2aa3d0e94057c250eed7cd5a9a3
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Finance/Consolidation/ImportConsolidationData.Interface.al
    title: src/Layers/W1/BaseApp/Finance/Consolidation/ImportConsolidationData.Interface.al (releases/29.x)
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
name: Import Consolidation Data
namespace: Microsoft.Finance.Consolidation
app: Base Application
extends: null
first_version: "24"
last_version: "30"
present_in:
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

# Interface "Import Consolidation Data"

> Interface "Import Consolidation Data" in Base Application (Microsoft.Finance.Consolidation). 1 public procedures. Introduced in BC24, still in BC30.

Base Application · Microsoft.Finance.Consolidation · BC24-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Finance/Consolidation/ImportConsolidationData.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `ImportConsolidationDataForBusinessUnit(ConsolidationProcess: Record "Consolidation Process"; BusinessUnit: Record "Business Unit"; var BusUnitConsolidationData: Record "Bus. Unit Consolidation Data")`: Import the business unit consolidation data for the given consolidation process and business unit. The imported data should be stored in the BusUnitConsolidationData temporary record.

## Across versions

- Present in: BC24-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Import Consolidation Data")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
