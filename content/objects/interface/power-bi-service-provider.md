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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 05dd4ca6756ad70bd4cf0da02d908c52f8edb1b01066c75426dbce5377ebff4c
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIServiceProvider.Interface.al
    title: src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIServiceProvider.Interface.al (releases/29.x)
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

Base Application · System.Integration.PowerBI · BC23-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/PowerBIServiceProvider.Interface.al) · facts from BC29

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

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Power BI Service Provider")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Power BI Service Provider"`

## Across versions

- Present in: BC23-30
- Changed (declaration) in: BC25, BC28-29

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
