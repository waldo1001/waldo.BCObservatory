---
id: object/interface/feature-data-update
type: object
title: Interface "Feature Data Update"
summary: Interface "Feature Data Update" in System Application (System.Environment.Configuration). 5 public procedures. Present since at least BC23, still in BC30.
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
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 59fd56d00bdc46fa66a122ccecd2c2732b58033b810b6f21bf9ee20563b3fbba
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Feature%20Key/src/FeatureDataUpdate.Interface.al
    title: src/System Application/App/Feature Key/src/FeatureDataUpdate.Interface.al (releases/29.x)
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
name: Feature Data Update
namespace: System.Environment.Configuration
app: System Application
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
  implemented_by: 4
---

# Interface "Feature Data Update"

> Interface "Feature Data Update" in System Application (System.Environment.Configuration). 5 public procedures. Present since at least BC23, still in BC30.

System Application · System.Environment.Configuration · BC23-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Feature%20Key/src/FeatureDataUpdate.Interface.al) · facts from BC29

## Procedures

- `IsDataUpdateRequired(): Boolean`
- `ReviewData()`: Opens the page showing the list of tables with counted records that require update.
- `UpdateData(FeatureDataUpdateStatus: Record "Feature Data Update Status")`: Runs the process that updates data for the feature.
- `AfterUpdate(FeatureDataUpdateStatus: Record "Feature Data Update Status")`: Method is called after the update is complete, e.g. to complete the setup for the feature.
- `GetTaskDescription(): Text`: Retruns the detailed description of the data update required for the feature. It is shown of the "Schedule Feature Data Update" page to explain the user what is going to happen.

## Implemented by

- [Codeunit 1080 "Feature - Fin. Report Default"](../codeunit/1080.md)
- [Codeunit 5409 "Feature - Report Selection"](../codeunit/5409.md)
- [Codeunit 7049 "Feature - Price Calculation"](../codeunit/7049.md)
- [Enum 2611 "Feature To Update"](../enum/2611.md)

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Feature Data Update")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
