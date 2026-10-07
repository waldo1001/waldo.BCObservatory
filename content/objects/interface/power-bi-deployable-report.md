---
id: object/interface/power-bi-deployable-report
type: object
title: Interface "Power BI Deployable Report"
summary: Interface "Power BI Deployable Report" in Base Application (System.Integration.PowerBI). 4 public procedures. Introduced in BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: "28"
  last_changed: null
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
  input_hash: a84a28f2ddff25f80a2f2613ba1bdf1441142be87f2fec4c5fd59d970ef76ccc
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/ReportDeployments/PowerBIDeployableReport.Interface.al
    title: src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/ReportDeployments/PowerBIDeployableReport.Interface.al (releases/29.x)
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
object_type: interface
object_id: null
name: Power BI Deployable Report
namespace: System.Integration.PowerBI
app: Base Application
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
  procedures: 4
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Power BI Deployable Report"

> Interface "Power BI Deployable Report" in Base Application (System.Integration.PowerBI). 4 public procedures. Introduced in BC28, still in BC30.

Base Application · System.Integration.PowerBI · BC28-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Modules/System/PowerBI/APIs/ReportDeployments/PowerBIDeployableReport.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `GetReportName(): Text[200]`: The human-readable name of the report, shown in the Power BI Deployments page.
- `GetStream(var InStr: InStream)`: Populates InStr with the PBIX file content for this report (typically via NavApp.GetResource).
- `GetVersion(): Integer`: The version number of the embedded report. Incrementing this signals that an update is available.
- `GetDatasetParameters(): Dictionary of [Text, Text]`: Returns the Power BI dataset parameters (name, value) that this report expects to be updated after import.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Power BI Deployable Report")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Power BI Deployable Report"`

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
