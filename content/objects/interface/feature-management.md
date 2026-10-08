---
id: object/interface/feature-management
type: object
title: Interface "Feature Management"
summary: Interface "Feature Management" in System Application (System.Environment.Configuration). 4 public procedures. Present since at least BC23, still in BC30.
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
  input_hash: 36025d3bf36cf11571ff699b9b762a45a351acd37c7c803ad8c2bddfeaca6434
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Feature%20Key/src/FeatureManagement.Interface.al
    title: src/System Application/App/Feature Key/src/FeatureManagement.Interface.al (releases/29.x)
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
name: Feature Management
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
  procedures: 4
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
  calls: 0
  called_by: 1
  implements: 0
  implemented_by: 0
---

# Interface "Feature Management"

> Interface "Feature Management" in System Application (System.Environment.Configuration). 4 public procedures. Present since at least BC23, still in BC30.

System Application · System.Environment.Configuration · BC23-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Feature%20Key/src/FeatureManagement.Interface.al) · facts from BC29

## Procedures

- `GetData(IncludeFeatureKeys: List of [Text[50]]; ExcludeFeatureKeys: List of [Text[50]]; var FeatureKeyBuffer: Record "Feature Key Buffer"): Integer`
- `GetFeatureKey(FeatureId: Text[50]; var TempFeatureKey: Record "Feature Key" temporary): Boolean`: Returns number of collected records. Feature interface read the system table "Feature Key" or another source of data depends on the interface implementation. In tests it can be a temporary table "Feature Key".
- `SetEnabled(TempFeatureKey: Record "Feature Key" temporary): Boolean`: Modifies the Enabled field in the source record in the "Feature Key" table. The new value for the Enabled field is taken from the TempFeatureKey.Enabled.
- `GenerateDependencies(var FeatureKeyBuffer: Record "Feature Key Buffer"; var FeatureDependency: Record "Feature Dependency"): Boolean`: Fills the temporary table "Feature Dependency" stored in the single instance codeunit "Feature Dependency Management". Add new feature dependencies by passing DependentFeatureId and ParentFeatureID, FeatureKeyBuffer is passed to control data consistency: FeatureDependency.New(FeatureKeyBuffer, Depen...

## Called by

From the extracted call graph of BC29 (graphify-al on the snapshot checkout): calls whose target is known from a declared type or an `Object::"Name"` argument. Interface dispatch and calls through events are not counted, so the list is not complete.

- [Codeunit 2610 "Feature Management Impl."](../codeunit/2610.md) (1 call: `DefaultOpenFeatureManagement → (object)`)

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Feature Management")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
