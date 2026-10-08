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
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8ccd6e3810399eae6e62503fa5932b8bc05434751adc6b68d5b85f05d496d4d8
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/AuditFileExport/app/src/AuditFileExportDataHandling.Interface.al
    title: src/Apps/W1/AuditFileExport/app/src/AuditFileExportDataHandling.Interface.al (releases/29.x)
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
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 3
---

# Interface "Audit File Export Data Handling"

> Interface "Audit File Export Data Handling" in AuditFileExport (Microsoft.Finance.AuditFileExport). 5 public procedures. Introduced in BC29, still in BC30.

AuditFileExport · Microsoft.Finance.AuditFileExport · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/AuditFileExport/app/src/AuditFileExportDataHandling.Interface.al) · facts from BC29

## Procedures

- `LoadStandardAccounts(StandardAccountType: enum "Standard Account Type"): Boolean`
- `CreateAuditFileExportLines(var AuditFileExportHeader: Record "Audit File Export Header")`: Creates lines for the selected audit file export document.
- `GenerateFileContentForAuditFileExportLine(var AuditFileExportLine: Record "Audit File Export Line"; var TempBlob: Codeunit "Temp Blob")`: Generates audit file content for the selected audit file export line.
- `GetFileNameForAuditFileExportLine(var AuditFileExportLine: Record "Audit File Export Line"): Text[1024]`: Creates a string which will be used as a file name when an audit file is created from the audit file export line.
- `InitAuditExportDataTypeSetup()`: Removes the existing records and create new default records in the Audit Export Data Type Setup table.

## Implemented by

- [Codeunit 5266 "Audit File Data Handling"](../codeunit/5266.md)
- [Codeunit 5281 "Audit Data Handling SAF-T"](../codeunit/5281.md)
- [Enum 5262 "Audit File Export Format"](../enum/5262.md)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Audit File Export Data Handling")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
