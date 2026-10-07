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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4fb41002ccf15d83cdc81c7c585465f9622fdce6bbab333438a97adced792c5a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIUploadableReport.Interface.al
    title: src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIUploadableReport.Interface.al (releases/29.x)
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
---

# Interface "Power BI Uploadable Report"

> Interface "Power BI Uploadable Report" in Base Application (System.Integration.PowerBI). 8 public procedures. Introduced in BC28, still in BC30, changed in BC29.

Base Application · System.Integration.PowerBI · BC28-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIUploadableReport.Interface.al) · facts from BC29

## Procedures

- `GetReportKey(): Text[100]`
- `GetReportName(): Text[100]`: The human-readable name of the report.
- `GetStream(var InStr: InStream)`: Populates InStr with the PBIX file content for this report.
- `GetReportVersion(): Integer`: The version number of this report. Used to determine whether an existing deployment should be overwritten.
- `GetUploadTracker(var UploadTracker: Interface "Power BI Upload Tracker")`: Returns an upload tracker bound to this report's storage mechanism.
- `FinalizeUpload(var UploadTracker: Interface "Power BI Upload Tracker"; Context: Text[50])`: Called after the report reaches DataRefreshed status. Perform any post-upload actions here (e.g. selecting the report for display in a context). The step runner transitions to Completed after this returns.
- `GetDatasetParameters(): Dictionary of [Text, Text]`: Returns the Power BI dataset parameters (name → value) that this report expects to be updated after import.
- `GetTargetWorkspaceId(): Guid`: Returns the ID of the Power BI workspace this report should be deployed to. An empty (null) GUID means the report is deployed to the user's "My Workspace".

## Recent changes

- 2026-10-05 [#12242 29.x: Removing the restriction of deploying Power BI reports only to evaluation companies](../../changes/bcapps/12242.md) (releases/29.x, BC29, feature)
- 2026-09-10 [#10348 Adding a Power BI workspace to Company Information to be used when deploying reports](../../changes/bcapps/10348.md) (main, BC30, feature)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Power BI Uploadable Report")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Power BI Uploadable Report"`

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: BC29

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
