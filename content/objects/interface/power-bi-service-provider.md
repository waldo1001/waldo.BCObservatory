---
id: object/interface/power-bi-service-provider
type: object
title: Interface "Power BI Service Provider"
summary: Interface "Power BI Service Provider" in Base Application (System.Integration.PowerBI). 11 public procedures. Present since at least BC28, still in BC30, changed in BC29.
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
  at: "2026-10-07T13:30:58.709Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c09526fde985c171be591d41d672470e4838fe2a4181b9013c1996cc67243bf8
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIServiceProvider.Interface.al
    title: src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIServiceProvider.Interface.al (releases/29.x)
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
  changes:
    - change/bcapps/12242
    - change/bcapps/10348
object_type: interface
object_id: null
name: Power BI Service Provider
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
  procedures: 11
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Power BI Service Provider"

> Interface "Power BI Service Provider" in Base Application (System.Integration.PowerBI). 11 public procedures. Present since at least BC28, still in BC30, changed in BC29.

Base Application · System.Integration.PowerBI · BC28-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIServiceProvider.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `Initialize(AzureAccessToken: SecretText; PowerBIUrl: Text)`
- `StartImport(BlobStream: Instream; ReportName: Text; Overwrite: Boolean; WorkspaceId: Guid; var ImportId: Guid; var OperationResult: DotNet OperationResult)`
- `CheckUserLicense(var OperationResult: DotNet OperationResult)`
- `GetImport(ImportID: Guid; WorkspaceId: Guid; var ImportState: Text; var ReturnedReport: DotNet ReturnedReport; var OperationResult: DotNet OperationResult)`
- `UpdateDatasetParameters(DatasetId: Text; Parameters: Dictionary of [Text, Text]; WorkspaceId: Guid; var OperationResult: DotNet OperationResult)`
- `GetDatasource(DatasetId: Text; WorkspaceId: Guid; var DataSourceId: Guid; var GatewayId: Guid; var OperationResult: DotNet OperationResult)`
- `UpdateDatasourceCredentials(DataSourceId: Guid; GatewayId: Guid; BusinessCentralAccessToken: SecretText; var OperationResult: DotNet OperationResult)`
- `RefreshDataset(DatasetId: Text; WorkspaceId: Guid; var OperationResult: DotNet OperationResult)`
- `GetReportsInMyWorkspace(var ReturnedReportList: DotNet ReturnedReportList; var OperationResult: DotNet OperationResult)`
- `GetReportsInWorkspace(WorkspaceId: Guid; var ReturnedReportList: DotNet ReturnedReportList; var OperationResult: DotNet OperationResult)`
- `GetWorkspaces(var ReturnedWorkspaceList: DotNet ReturnedWorkspaceList; var OperationResult: DotNet OperationResult)`

## Recent changes

- 2026-10-05 [#12242 29.x: Removing the restriction of deploying Power BI reports only to evaluation companies](../../changes/bcapps/12242.md) (releases/29.x, BC29, feature)
- 2026-09-10 [#10348 Adding a Power BI workspace to Company Information to be used when deploying reports](../../changes/bcapps/10348.md) (main, BC30, feature)

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: BC29

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
