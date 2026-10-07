---
id: object/interface/consolidation-method
type: object
title: Interface "Consolidation Method"
summary: Interface "Consolidation Method" in Base Application (Microsoft.Finance.Consolidation). 1 public procedures. Present since at least BC28, still in BC30.
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
  input_hash: 1bee4cbf70364d3c8ef96a262b9264b9f2bc5afa0bb787341ec4359b72da1613
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Finance/Consolidation/ConsolidationMethod.Interface.al
    title: src/Layers/W1/BaseApp/Finance/Consolidation/ConsolidationMethod.Interface.al (releases/29.x)
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
name: Consolidation Method
namespace: Microsoft.Finance.Consolidation
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
  procedures: 1
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Consolidation Method"

> Interface "Consolidation Method" in Base Application (Microsoft.Finance.Consolidation). 1 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Finance.Consolidation · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Finance/Consolidation/ConsolidationMethod.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `Consolidate(ConsolidationProcess: Record "Consolidation Process"; BusinessUnit: Record "Business Unit"; var BusUnitConsolidationData: Record "Bus. Unit Consolidation Data")`: This procedure is called for each business unit in the consolidation process. It should consolidate (insert the appropriate GL Entries in the consolidation company) with the information in the BusUnitConsolidationData temporary record. When this procedure is called BusUnitConsolidationData contains ...

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
