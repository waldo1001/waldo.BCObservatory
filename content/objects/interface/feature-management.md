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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7f5595f7d433b3c3a9d3f02479085ca3f330fa50fae94ea4316f7241dd8e5610
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/Feature%20Key/src/FeatureManagement.Interface.al
    title: src/System Application/App/Feature Key/src/FeatureManagement.Interface.al (releases/29.x)
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
---

# Interface "Feature Management"

> Interface "Feature Management" in System Application (System.Environment.Configuration). 4 public procedures. Present since at least BC23, still in BC30.

System Application · System.Environment.Configuration · BC23-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/Feature%20Key/src/FeatureManagement.Interface.al) · facts from BC29

## Procedures

- `GetData(IncludeFeatureKeys: List of [Text[50]]; ExcludeFeatureKeys: List of [Text[50]]; var FeatureKeyBuffer: Record "Feature Key Buffer"): Integer`
- `GetFeatureKey(FeatureId: Text[50]; var TempFeatureKey: Record "Feature Key" temporary): Boolean`: Returns number of collected records. Feature interface read the system table "Feature Key" or another source of data depends on the interface implementation. In tests it can be a temporary table "Feature Key".
- `SetEnabled(TempFeatureKey: Record "Feature Key" temporary): Boolean`: Modifies the Enabled field in the source record in the "Feature Key" table. The new value for the Enabled field is taken from the TempFeatureKey.Enabled.
- `GenerateDependencies(var FeatureKeyBuffer: Record "Feature Key Buffer"; var FeatureDependency: Record "Feature Dependency"): Boolean`: Fills the temporary table "Feature Dependency" stored in the single instance codeunit "Feature Dependency Management". Add new feature dependencies by passing DependentFeatureId and ParentFeatureID, FeatureKeyBuffer is passed to control data consistency: FeatureDependency.New(FeatureKeyBuffer, Depen...

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Feature Management")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Feature Management"`

## Across versions

- Present in: BC23, BC24, BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
