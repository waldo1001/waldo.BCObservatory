---
id: object/interface/datachecksaft
type: object
title: Interface "DataCheckSAFT"
summary: Interface "DataCheckSAFT" in SAF-T (Microsoft.Finance.AuditFileExport). 2 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - saf-t
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
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0bca1829453f31002a0a77c5fe7f2b6fb12b4c06c5fd22288e01db7e7f41b196
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/SAF-T/app/src/CheckAuditDataSAFT/DataCheckSAFT.Interface.al
    title: src/Apps/W1/SAF-T/app/src/CheckAuditDataSAFT/DataCheckSAFT.Interface.al (releases/29.x)
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
name: DataCheckSAFT
namespace: Microsoft.Finance.AuditFileExport
app: SAF-T
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
  procedures: 2
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "DataCheckSAFT"

> Interface "DataCheckSAFT" in SAF-T (Microsoft.Finance.AuditFileExport). 2 public procedures. Introduced in BC29, still in BC30.

SAF-T · Microsoft.Finance.AuditFileExport · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/SAF-T/app/src/CheckAuditDataSAFT/DataCheckSAFT.Interface.al) · facts from BC29

## Procedures

- `CheckDataToExport(var AuditFileExportHeader: Record "Audit File Export Header"): enum "Audit Data Check status"`
- `CheckAuditDocReadyToExport(var AuditFileExportHeader: Record "Audit File Export Header"): enum "Audit Data Check Status"`: Checks if the selected audit file export document is ready for exporting, for example if all required fields are filled.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
