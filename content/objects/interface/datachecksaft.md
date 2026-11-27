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
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-27T00:52:12.002Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2c058c038e7b5bdfbb0459dfe85baab3cd63005b79b55d1cb8264ff3b4f505fc
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/34e1078527c84ba7c885b871a9be47229ba9e4f4/src/Apps/W1/SAF-T/app/src/CheckAuditDataSAFT/DataCheckSAFT.Interface.al
    title: src/Apps/W1/SAF-T/app/src/CheckAuditDataSAFT/DataCheckSAFT.Interface.al (releases/29.x)
    date: null
    commit: 34e1078527c84ba7c885b871a9be47229ba9e4f4
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
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 3
---

# Interface "DataCheckSAFT"

> Interface "DataCheckSAFT" in SAF-T (Microsoft.Finance.AuditFileExport). 2 public procedures. Introduced in BC29, still in BC30.

SAF-T · Microsoft.Finance.AuditFileExport · BC29-30 · [source at 34e10785](https://github.com/microsoft/BCApps/blob/34e1078527c84ba7c885b871a9be47229ba9e4f4/src/Apps/W1/SAF-T/app/src/CheckAuditDataSAFT/DataCheckSAFT.Interface.al) · facts from BC29

## Procedures

- `CheckDataToExport(var AuditFileExportHeader: Record "Audit File Export Header"): enum "Audit Data Check status"`
- `CheckAuditDocReadyToExport(var AuditFileExportHeader: Record "Audit File Export Header"): enum "Audit Data Check Status"`: Checks if the selected audit file export document is ready for exporting, for example if all required fields are filled.

## Implemented by

- [Codeunit 13697 "Data Check SAF-T DK"](../codeunit/13697.md)
- [Codeunit 5287 "Data Check SAF-T"](../codeunit/5287.md)
- [Enum 5280 "SAF-T Modification"](../enum/5280.md)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "DataCheckSAFT")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
