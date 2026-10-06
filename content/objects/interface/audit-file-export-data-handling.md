---
id: object/interface/audit-file-export-data-handling
type: object
title: Interface "Audit File Export Data Handling"
summary: Interface "Audit File Export Data Handling" in AuditFileExport (Microsoft.Finance.AuditFileExport). 5 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - auditfileexport
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
  input_hash: a9d58b30f995ea1e1596ff9af86cbf0902a28f09292d946f09a39f0852d64fab
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/AuditFileExport/app/src/AuditFileExportDataHandling.Interface.al
    title: src/Apps/W1/AuditFileExport/app/src/AuditFileExportDataHandling.Interface.al (releases/29.x)
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
name: Audit File Export Data Handling
namespace: Microsoft.Finance.AuditFileExport
app: AuditFileExport
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
  procedures: 5
  events: 0
  subscribers: 0
---

# Interface "Audit File Export Data Handling"

> Interface "Audit File Export Data Handling" in AuditFileExport (Microsoft.Finance.AuditFileExport). 5 public procedures. Introduced in BC29, still in BC30.

AuditFileExport · Microsoft.Finance.AuditFileExport · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/AuditFileExport/app/src/AuditFileExportDataHandling.Interface.al) · facts from BC29

## Procedures

- `LoadStandardAccounts(StandardAccountType: enum "Standard Account Type"): Boolean`
- `CreateAuditFileExportLines(var AuditFileExportHeader: Record "Audit File Export Header")`: Creates lines for the selected audit file export document.
- `GenerateFileContentForAuditFileExportLine(var AuditFileExportLine: Record "Audit File Export Line"; var TempBlob: Codeunit "Temp Blob")`: Generates audit file content for the selected audit file export line.
- `GetFileNameForAuditFileExportLine(var AuditFileExportLine: Record "Audit File Export Line"): Text[1024]`: Creates a string which will be used as a file name when an audit file is created from the audit file export line.
- `InitAuditExportDataTypeSetup()`: Removes the existing records and create new default records in the Audit Export Data Type Setup table.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
