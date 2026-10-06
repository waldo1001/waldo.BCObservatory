---
id: object/interface/pbi-report-setup
type: object
title: Interface "PBI Report Setup"
summary: Interface "PBI Report Setup" in PowerBIReports (Microsoft.PowerBIReports). 3 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - powerbireports
versions:
  introduced: "29"
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f07f88baf300a479203ca103b7e4eea25f29811cd0ee2fbd55bb57ec75d43217
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/PowerBIReports/app/Core/ReportDeployments/PBIReportSetup.Interface.al
    title: src/Apps/W1/PowerBIReports/app/Core/ReportDeployments/PBIReportSetup.Interface.al (releases/29.x)
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
name: PBI Report Setup
namespace: Microsoft.PowerBIReports
app: PowerBIReports
extends: null
first_version: "29"
last_version: "30"
present_in:
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 3
  events: 0
  subscribers: 0
---

# Interface "PBI Report Setup"

> Interface "PBI Report Setup" in PowerBIReports (Microsoft.PowerBIReports). 3 public procedures. Introduced in BC29, still in BC30.

PowerBIReports · Microsoft.PowerBIReports · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/PowerBIReports/app/Core/ReportDeployments/PBIReportSetup.Interface.al) · facts from BC29

## Procedures

- `GetDeployableReportType(): Enum "Power BI Deployable Report"`
- `GetSetupReportIdFieldNo(): Integer`
- `GetSetupReportNameFieldNo(): Integer`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
