---
id: object/interface/audit-file-export-page-visibility
type: object
title: Interface "Audit File Export Page Visibility"
summary: Interface "Audit File Export Page Visibility" in AuditFileExport (Microsoft.Finance.AuditFileExport). 1 public procedures. Introduced in BC29, gone after BC29.
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
  at: "2026-10-23T01:04:01.231Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c1e154c86598c1f20e8183d8e694fb98ed8c7884d1ff0ad730a3ebd3a8860c0d
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/af1b860dae5aeeb1369d4ed450c2c980e372a161/src/Apps/W1/AuditFileExport/app/src/AuditFileExportPageVisibility.Interface.al
    title: src/Apps/W1/AuditFileExport/app/src/AuditFileExportPageVisibility.Interface.al (releases/29.x)
    date: null
    commit: af1b860dae5aeeb1369d4ed450c2c980e372a161
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
name: Audit File Export Page Visibility
namespace: Microsoft.Finance.AuditFileExport
app: AuditFileExport
extends: null
first_version: "29"
last_version: "29"
present_in:
  - "29"
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

> Interface "Audit File Export Page Visibility" in AuditFileExport (Microsoft.Finance.AuditFileExport). 1 public procedures. Introduced in BC29, gone after BC29.

AuditFileExport · Microsoft.Finance.AuditFileExport · BC29 · [source at af1b860d](https://github.com/microsoft/BCApps/blob/af1b860dae5aeeb1369d4ed450c2c980e372a161/src/Apps/W1/AuditFileExport/app/src/AuditFileExportPageVisibility.Interface.al) · facts from BC29

## Procedures

- `GetUIVisibility(var FieldVisibility: Dictionary of [Text, Boolean]; var ActionVisibility: Dictionary of [Text, Boolean])`

## Implemented by

- [Codeunit 5281 "Audit Data Handling SAF-T"](../codeunit/5281.md)
- [Codeunit 5311 "Audit File Page Visibility"](../codeunit/5311.md)
- [Enum 5262 "Audit File Export Format"](../enum/5262.md)

## Across versions

- Present in: BC29
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Audit File Export Page Visibility")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
