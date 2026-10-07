---
id: object/interface/power-bi-upload-tracker
type: object
title: Interface "Power BI Upload Tracker"
summary: Interface "Power BI Upload Tracker" in Base Application (System.Integration.PowerBI). 18 public procedures. Present since at least BC28, still in BC30, changed in BC29.
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
  input_hash: 16e7b441331aeeb59039603821a80eb7ccbbb7329abd749a643b21edd8156d48
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIUploadTracker.Interface.al
    title: src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIUploadTracker.Interface.al (releases/29.x)
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
---

# Interface "Power BI Upload Tracker"

> Interface "Power BI Upload Tracker" in Base Application (System.Integration.PowerBI). 18 public procedures. Present since at least BC28, still in BC30, changed in BC29.

Base Application · System.Integration.PowerBI · BC28-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIUploadTracker.Interface.al) · facts from BC29

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

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: BC29

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
