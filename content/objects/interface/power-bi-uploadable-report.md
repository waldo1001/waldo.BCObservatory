---
id: object/interface/power-bi-uploadable-report
type: object
title: Interface "Power BI Uploadable Report"
summary: Interface "Power BI Uploadable Report" in Base Application (System.Integration.PowerBI). 8 public procedures. Present since at least BC28, still in BC30, changed in BC29.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: null
  last_changed: "29"
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
  input_hash: b85447f65fff0fd478ae636c6d9bbb36be12e2e0d03b254cbd8c705ef223100d
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIUploadableReport.Interface.al
    title: src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIUploadableReport.Interface.al (releases/29.x)
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
---

# Interface "Power BI Uploadable Report"

> Interface "Power BI Uploadable Report" in Base Application (System.Integration.PowerBI). 8 public procedures. Present since at least BC28, still in BC30, changed in BC29.

Base Application · System.Integration.PowerBI · BC28-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIUploadableReport.Interface.al) · facts from BC29

## Procedures

- `GetReportKey(): Text[100]`
- `GetReportName(): Text[100]`: The human-readable name of the report.
- `GetStream(var InStr: InStream)`: Populates InStr with the PBIX file content for this report.
- `GetReportVersion(): Integer`: The version number of this report. Used to determine whether an existing deployment should be overwritten.
- `GetUploadTracker(var UploadTracker: Interface "Power BI Upload Tracker")`: Returns an upload tracker bound to this report's storage mechanism.
- `FinalizeUpload(var UploadTracker: Interface "Power BI Upload Tracker"; Context: Text[50])`: Called after the report reaches DataRefreshed status. Perform any post-upload actions here (e.g. selecting the report for display in a context). The step runner transitions to Completed after this returns.
- `GetDatasetParameters(): Dictionary of [Text, Text]`: Returns the Power BI dataset parameters (name → value) that this report expects to be updated after import.
- `GetTargetWorkspaceId(): Guid`: Returns the ID of the Power BI workspace this report should be deployed to. An empty (null) GUID means the report is deployed to the user's "My Workspace".

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: BC29

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
