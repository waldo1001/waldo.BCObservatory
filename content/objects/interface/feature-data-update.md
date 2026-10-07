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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0ff53b0b901b7251f4406a3f60b1f81316ece0c383dae9e7b1b9dcbbae9e9b99
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/Feature%20Key/src/FeatureDataUpdate.Interface.al
    title: src/System Application/App/Feature Key/src/FeatureDataUpdate.Interface.al (releases/29.x)
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
---

# Interface "Feature Data Update"

> Interface "Feature Data Update" in System Application (System.Environment.Configuration). 5 public procedures. Present since at least BC23, still in BC30.

System Application · System.Environment.Configuration · BC23-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/Feature%20Key/src/FeatureDataUpdate.Interface.al) · facts from BC29

## Procedures

- `IsDataUpdateRequired(): Boolean`
- `ReviewData()`: Opens the page showing the list of tables with counted records that require update.
- `UpdateData(FeatureDataUpdateStatus: Record "Feature Data Update Status")`: Runs the process that updates data for the feature.
- `AfterUpdate(FeatureDataUpdateStatus: Record "Feature Data Update Status")`: Method is called after the update is complete, e.g. to complete the setup for the feature.
- `GetTaskDescription(): Text`: Retruns the detailed description of the data update required for the feature. It is shown of the "Schedule Feature Data Update" page to explain the user what is going to happen.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Feature Data Update")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Feature Data Update"`

## Across versions

- Present in: BC23, BC24, BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
