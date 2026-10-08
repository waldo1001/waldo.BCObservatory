---
id: object/controladdin/businesschart
type: object
title: Control add-in "BusinessChart"
summary: Control add-in "BusinessChart" in System Application (System.Integration). 1 public procedures. Introduced in BC24, still in BC30, changed in BC26.
tier: official
language: en
tags:
  - controladdin
  - system application
versions:
  introduced: "24"
  last_changed: "26"
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
  input_hash: 1177e426f701ed4fee7c47ad58732ea3e480022b6d8d8f57859eac22d8888e1e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/ControlAddIns/src/BusinessChart.ControlAddin.al
    title: src/System Application/App/ControlAddIns/src/BusinessChart.ControlAddin.al (releases/29.x)
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
object_type: controladdin
object_id: null
name: BusinessChart
namespace: System.Integration
app: System Application
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
  calls: 0
  called_by: 1
  implements: 0
---

# Control add-in "BusinessChart"

> Control add-in "BusinessChart" in System Application (System.Integration). 1 public procedures. Introduced in BC24, still in BC30, changed in BC26.

System Application · System.Integration · BC24-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/ControlAddIns/src/BusinessChart.ControlAddin.al) · facts from BC29

## Procedures

- `Update(ChartData: JsonObject)`: Initialize and updates the chart. This method must be called before any controls will work.

## Called by

From the extracted call graph of BC29 (graphify-al on the snapshot checkout): calls whose target is known from a declared type or an `Object::"Name"` argument. Interface dispatch and calls through events are not counted, so the list is not complete.

- [Page 9184 "Generic Chart Type Preview"](../page/9184.md) (1 call: `SetChartDefinition → Update`)

## Across versions

- Present in: BC24-30
- Changed (declaration) in: BC26

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "controladdin", object_name: "BusinessChart")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
