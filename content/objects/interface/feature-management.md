---
id: object/interface/feature-management
type: object
title: Interface "Feature Management"
summary: Interface "Feature Management" in System Application (System.Environment.Configuration). 4 public procedures. Present since at least BC28, still in BC30.
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
  input_hash: 4c0eb15d289169bc1d4fcba7449a352962e97da9261c68889d10d66c1ee33a5f
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Feature%20Key/src/FeatureManagement.Interface.al
    title: src/System Application/App/Feature Key/src/FeatureManagement.Interface.al (releases/29.x)
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
name: Feature Management
namespace: System.Environment.Configuration
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
  procedures: 4
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Feature Management"

> Interface "Feature Management" in System Application (System.Environment.Configuration). 4 public procedures. Present since at least BC28, still in BC30.

System Application · System.Environment.Configuration · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Feature%20Key/src/FeatureManagement.Interface.al) · facts from BC29

## Procedures

- `GetData(IncludeFeatureKeys: List of [Text[50]]; ExcludeFeatureKeys: List of [Text[50]]; var FeatureKeyBuffer: Record "Feature Key Buffer"): Integer`
- `GetFeatureKey(FeatureId: Text[50]; var TempFeatureKey: Record "Feature Key" temporary): Boolean`: Returns number of collected records. Feature interface read the system table "Feature Key" or another source of data depends on the interface implementation. In tests it can be a temporary table "Feature Key".
- `SetEnabled(TempFeatureKey: Record "Feature Key" temporary): Boolean`: Modifies the Enabled field in the source record in the "Feature Key" table. The new value for the Enabled field is taken from the TempFeatureKey.Enabled.
- `GenerateDependencies(var FeatureKeyBuffer: Record "Feature Key Buffer"; var FeatureDependency: Record "Feature Dependency"): Boolean`: Fills the temporary table "Feature Dependency" stored in the single instance codeunit "Feature Dependency Management". Add new feature dependencies by passing DependentFeatureId and ParentFeatureID, FeatureKeyBuffer is passed to control data consistency: FeatureDependency.New(FeatureKeyBuffer, Depen...

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
