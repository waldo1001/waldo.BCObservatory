---
id: object/interface/consolidation-method
type: object
title: Interface "Consolidation Method"
summary: Interface "Consolidation Method" in Base Application (Microsoft.Finance.Consolidation). 1 public procedures. Introduced in BC24, still in BC30, changed in BC26.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: "24"
  last_changed: "26"
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
  input_hash: 5d6f4b664c3f210471a6126e80d49fe56691675a0970f70586de1398f44f6806
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Finance/Consolidation/ConsolidationMethod.Interface.al
    title: src/Layers/W1/BaseApp/Finance/Consolidation/ConsolidationMethod.Interface.al (releases/29.x)
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
name: Consolidation Method
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
changed_in:
  - "26"
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

> Interface "Consolidation Method" in Base Application (Microsoft.Finance.Consolidation). 1 public procedures. Introduced in BC24, still in BC30, changed in BC26.

Base Application · Microsoft.Finance.Consolidation · BC24-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Finance/Consolidation/ConsolidationMethod.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `Consolidate(ConsolidationProcess: Record "Consolidation Process"; BusinessUnit: Record "Business Unit"; var BusUnitConsolidationData: Record "Bus. Unit Consolidation Data")`: This procedure is called for each business unit in the consolidation process. It should consolidate (insert the appropriate GL Entries in the consolidation company) with the information in the BusUnitConsolidationData temporary record. When this procedure is called BusUnitConsolidationData contains ...

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Consolidation Method")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Consolidation Method"`

## Across versions

- Present in: BC24, BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: BC26

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
