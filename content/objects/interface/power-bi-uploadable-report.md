---
id: object/interface/power-bi-uploadable-report
type: object
title: Interface "Power BI Uploadable Report"
summary: Interface "Power BI Uploadable Report" in Base Application (System.Integration.PowerBI). 8 public procedures. Introduced in BC28, still in BC30, changed in BC29.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: "28"
  last_changed: "29"
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 39cd6b8716fc7309c7b532fa43fd7e48725ceb699979bbd764449afd65c5365e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIUploadableReport.Interface.al
    title: src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIUploadableReport.Interface.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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
  changes:
    - change/bcapps/12242
    - change/bcapps/10348
object_type: interface
object_id: null
name: Power BI Uploadable Report
namespace: System.Integration.PowerBI
app: Base Application
extends: null
first_version: "28"
last_version: "30"
present_in:
  - "28"
  - "29"
  - "30"
changed_in:
  - "29"
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 8
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
  implemented_by: 3
---

# Interface "Power BI Uploadable Report"

> Interface "Power BI Uploadable Report" in Base Application (System.Integration.PowerBI). 8 public procedures. Introduced in BC28, still in BC30, changed in BC29.

Base Application · System.Integration.PowerBI · BC28-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIUploadableReport.Interface.al) · facts from BC29

## Procedures

- `GetReportKey(): Text[100]`
- `GetReportName(): Text[100]`: The human-readable name of the report.
- `GetStream(var InStr: InStream)`: Populates InStr with the PBIX file content for this report.
- `GetReportVersion(): Integer`: The version number of this report. Used to determine whether an existing deployment should be overwritten.
- `GetUploadTracker(var UploadTracker: Interface "Power BI Upload Tracker")`: Returns an upload tracker bound to this report's storage mechanism.
- `FinalizeUpload(var UploadTracker: Interface "Power BI Upload Tracker"; Context: Text[50])`: Called after the report reaches DataRefreshed status. Perform any post-upload actions here (e.g. selecting the report for display in a context). The step runner transitions to Completed after this returns.
- `GetDatasetParameters(): Dictionary of [Text, Text]`: Returns the Power BI dataset parameters (name → value) that this report expects to be updated after import.
- `GetTargetWorkspaceId(): Guid`: Returns the ID of the Power BI workspace this report should be deployed to. An empty (null) GUID means the report is deployed to the user's "My Workspace".

## Implemented by

- [Codeunit 6323 "Power BI System Table Report"](../codeunit/6323.md)
- [Codeunit 6326 "Power BI Customer Report"](../codeunit/6326.md)
- [Codeunit 6350 "PBI Deployable Report Impl."](../codeunit/6350.md)

## Recent changes

- 2026-10-05 [#12242 29.x: Removing the restriction of deploying Power BI reports only to evaluation companies](../../changes/bcapps/12242.md) (releases/29.x, BC29, feature)
- 2026-09-10 [#10348 Adding a Power BI workspace to Company Information to be used when deploying reports](../../changes/bcapps/10348.md) (main, BC30, feature)

## Across versions

- Present in: BC28-30
- Changed (declaration) in: BC29

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Power BI Uploadable Report")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
