---
id: object/interface/feature-data-update
type: object
title: Interface "Feature Data Update"
summary: Interface "Feature Data Update" in System Application (System.Environment.Configuration). 5 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 11f7cc08be2a343772a63ffe0ad0ae95f754a7b2d1c547a41d6825828d14eb9c
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/Feature%20Key/src/FeatureDataUpdate.Interface.al
    title: src/System Application/App/Feature Key/src/FeatureDataUpdate.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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

# Interface "Feature Data Update"

> Interface "Feature Data Update" in System Application (System.Environment.Configuration). 5 public procedures. Present since at least BC28, still in BC30.

System Application · System.Environment.Configuration · BC28-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/Feature%20Key/src/FeatureDataUpdate.Interface.al) · facts from BC29

## Procedures

- `IsDataUpdateRequired(): Boolean`
- `ReviewData()`: Opens the page showing the list of tables with counted records that require update.
- `UpdateData(FeatureDataUpdateStatus: Record "Feature Data Update Status")`: Runs the process that updates data for the feature.
- `AfterUpdate(FeatureDataUpdateStatus: Record "Feature Data Update Status")`: Method is called after the update is complete, e.g. to complete the setup for the feature.
- `GetTaskDescription(): Text`: Retruns the detailed description of the data update required for the feature. It is shown of the "Schedule Feature Data Update" page to explain the user what is going to happen.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
