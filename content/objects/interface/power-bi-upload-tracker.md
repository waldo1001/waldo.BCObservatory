---
id: object/interface/power-bi-upload-tracker
type: object
title: Interface "Power BI Upload Tracker"
summary: Interface "Power BI Upload Tracker" in Base Application (System.Integration.PowerBI). 18 public procedures. Introduced in BC28, still in BC30, changed in BC29.
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
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0810475285c320f0f7eec46a7b9270533992083fbe1daa60b5839634c02e9e1f
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIUploadTracker.Interface.al
    title: src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIUploadTracker.Interface.al (releases/29.x)
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
  changes:
    - change/bcapps/12242
    - change/bcapps/10348
object_type: interface
object_id: null
name: Power BI Upload Tracker
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
  procedures: 18
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
  implemented_by: 2
---

# Interface "Power BI Upload Tracker"

> Interface "Power BI Upload Tracker" in Base Application (System.Integration.PowerBI). 18 public procedures. Introduced in BC28, still in BC30, changed in BC29.

Base Application · System.Integration.PowerBI · BC28-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIUploadTracker.Interface.al) · facts from BC29

## Procedures

- `Load(ReportKey: Text[100])`
- `Reset()`: Clears retry timestamps and resets completed/failed state for a new upload cycle.
- `GetStatus(): Enum "Power BI Upload Status"`: Returns the current upload status.
- `TransitionTo(NewStatus: Enum "Power BI Upload Status")`: Advances the upload to the given status.
- `SetImportId(ImportId: Guid)`: Stores the import ID returned by Power BI after starting an import.
- `GetImportId(): Guid`: Returns the import ID for polling import progress.
- `SetImportResult(UploadedReportId: Guid; EmbedUrl: Text[2048]; DatasetId: Text)`: Stores the result of a completed import: report ID, embed URL, and dataset ID.
- `SetUploadedReportName(ReportName: Text)`: Stores the name of the report as it was uploaded to Power BI.
- `SetTargetWorkspace(WorkspaceId: Guid)`: Records the Power BI workspace the report was actually imported into. An empty (null) workspace ID means the user's "My Workspace".
- `GetUploadedReportName(): Text`: Returns the name of the report as it was uploaded to Power BI.
- `GetUploadedReportId(): Guid`: Returns the Power BI report ID after import.
- `GetEmbedUrl(): Text[2048]`: Returns the report embed URL after import.
- `GetDatasetId(): Text`: Returns the dataset ID after import.
- `ShouldOverwrite(IncomingVersion: Integer): Boolean`: Returns true if the incoming version is newer than the deployed version, meaning the report should be overwritten in Power BI.
- `ScheduleRetry(RetryAfter: DateTime)`: Records that a retry should be attempted after the given time.
- `HasScheduledRetry(): Boolean`: Returns true if a retry has been scheduled (i.e. the step deferred work to a later attempt).
- `Fail(ErrorMessage: Text; ErrorCallStack: Text)`: Records that the upload has failed with the given error message and callstack. Implementations may persist the error details and emit telemetry.
- `Save()`: Persists any pending changes to the underlying table(s).

## Implemented by

- [Codeunit 6322 "Power BI System Upload Tracker"](../codeunit/6322.md)
- [Codeunit 6349 "PBI Deploy. Upload Tracker"](../codeunit/6349.md)

## Recent changes

- 2026-10-05 [#12242 29.x: Removing the restriction of deploying Power BI reports only to evaluation companies](../../changes/bcapps/12242.md) (releases/29.x, BC29, feature)
- 2026-09-10 [#10348 Adding a Power BI workspace to Company Information to be used when deploying reports](../../changes/bcapps/10348.md) (main, BC30, feature)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Power BI Upload Tracker")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Power BI Upload Tracker"`

## Across versions

- Present in: BC28-30
- Changed (declaration) in: BC29

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
