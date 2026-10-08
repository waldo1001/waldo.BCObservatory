---
id: object/interface/power-bi-service-provider
type: object
title: Interface "Power BI Service Provider"
summary: Interface "Power BI Service Provider" in Base Application (System.Integration.PowerBI). 11 public procedures. Present since at least BC23, still in BC30, changed in BC25, BC28-29.
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
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 05dd4ca6756ad70bd4cf0da02d908c52f8edb1b01066c75426dbce5377ebff4c
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIServiceProvider.Interface.al
    title: src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIServiceProvider.Interface.al (releases/29.x)
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
name: Power BI Service Provider
namespace: System.Integration.PowerBI
app: Base Application
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
changed_in:
  - "25"
  - "28"
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
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 1
---

# Interface "Power BI Service Provider"

> Interface "Power BI Service Provider" in Base Application (System.Integration.PowerBI). 11 public procedures. Present since at least BC23, still in BC30, changed in BC25, BC28-29.

Base Application · System.Integration.PowerBI · BC23-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIServiceProvider.Interface.al) · facts from BC29

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

## Implemented by

- [Codeunit 6321 "Power BI Rest Service Provider"](../codeunit/6321.md)

## Recent changes

- 2026-10-05 [#12242 29.x: Removing the restriction of deploying Power BI reports only to evaluation companies](../../changes/bcapps/12242.md) (releases/29.x, BC29, feature)
- 2026-09-10 [#10348 Adding a Power BI workspace to Company Information to be used when deploying reports](../../changes/bcapps/10348.md) (main, BC30, feature)

## Across versions

- Present in: BC23-30
- Changed (declaration) in: BC25, BC28-29

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Power BI Service Provider")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
