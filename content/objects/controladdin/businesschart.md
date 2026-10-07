---
id: object/controladdin/businesschart
type: object
title: Control add-in "BusinessChart"
summary: Control add-in "BusinessChart" in System Application (System.Integration). 1 public procedures. Present since at least BC28, still in BC30.
tier: official
language: en
tags:
  - controladdin
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
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f8c626dd6c0e389d208474160572c891c545b5094d3779fd23f3948183b171b2
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/ControlAddIns/src/BusinessChart.ControlAddin.al
    title: src/System Application/App/ControlAddIns/src/BusinessChart.ControlAddin.al (releases/29.x)
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
object_type: controladdin
object_id: null
name: BusinessChart
namespace: System.Integration
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

# Control add-in "BusinessChart"

> Control add-in "BusinessChart" in System Application (System.Integration). 1 public procedures. Present since at least BC28, still in BC30.

System Application · System.Integration · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/ControlAddIns/src/BusinessChart.ControlAddin.al) · facts from BC29

## Procedures

- `Update(ChartData: JsonObject)`: Initialize and updates the chart. This method must be called before any controls will work.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
