---
id: object/interface/audit-file-export-page-visibility
type: object
title: Interface "Audit File Export Page Visibility"
summary: Interface "Audit File Export Page Visibility" in AuditFileExport (Microsoft.Finance.AuditFileExport). 1 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-24T01:15:39.036Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 5d6a139ff50768d591f2845c38d071396f89084bf885cbddfcfff5d447749baf
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/dc14cfd1217fbd3fa364b63565e752e5f0653955/src/Apps/W1/AuditFileExport/app/src/AuditFileExportPageVisibility.Interface.al
    title: src/Apps/W1/AuditFileExport/app/src/AuditFileExportPageVisibility.Interface.al (releases/29.x)
    date: null
    commit: dc14cfd1217fbd3fa364b63565e752e5f0653955
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
    - change/bcapps/9104
  related:
    - to: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-export-data-for-a-digital-audit
      title: Export Data for a Digital Audit [DE]
      label: possibly related
      why: Documents audit file export interface for German digital audit compliance processes.
      by: model
    - to: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-use-saft-audit-files-export
      title: Export the SAF-T audit file format in Denmark
      label: possibly related
      why: Documents SAF-T audit file export interface for Danish tax authority compliance.
      by: model
object_type: interface
object_id: null
name: Audit File Export Page Visibility
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
  procedures: 1
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

# Interface "Audit File Export Page Visibility"

> Interface "Audit File Export Page Visibility" in AuditFileExport (Microsoft.Finance.AuditFileExport). 1 public procedures. Introduced in BC29, still in BC30.

AuditFileExport · Microsoft.Finance.AuditFileExport · BC29-30 · [source at dc14cfd1](https://github.com/microsoft/BCApps/blob/dc14cfd1217fbd3fa364b63565e752e5f0653955/src/Apps/W1/AuditFileExport/app/src/AuditFileExportPageVisibility.Interface.al) · facts from BC29

## Procedures

- `GetUIVisibility(var FieldVisibility: Dictionary of [Text, Boolean]; var ActionVisibility: Dictionary of [Text, Boolean])`

## Implemented by

- [Codeunit 5281 "Audit Data Handling SAF-T"](../codeunit/5281.md)
- [Codeunit 5311 "Audit File Page Visibility"](../codeunit/5311.md)
- [Enum 5262 "Audit File Export Format"](../enum/5262.md)

## Recent changes

- 2026-10-20 [#9104 Delocalize Export G/L Entries to XML into Audit File Export framework](../../changes/bcapps/9104.md) (main, BC30, feature, added)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [Export Data for a Digital Audit \[DE\]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-export-data-for-a-digital-audit) — possibly related: Documents audit file export interface for German digital audit compliance processes. (model-linked)
- [Export the SAF-T audit file format in Denmark](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-use-saft-audit-files-export) — possibly related: Documents SAF-T audit file export interface for Danish tax authority compliance. (model-linked)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Audit File Export Page Visibility")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
