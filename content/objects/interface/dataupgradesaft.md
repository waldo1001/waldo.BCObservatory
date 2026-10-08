---
id: object/interface/dataupgradesaft
type: object
title: Interface "DataUpgradeSAFT"
summary: Interface "DataUpgradeSAFT" in SAF-T (Microsoft.Finance.AuditFileExport). 4 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0884d75e1caa5e2b684be06f096bfc497fe65c0235344863330da953fbf9887d
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/SAF-T/app/src/Setup/DataUpgradeSAFT.Interface.al
    title: src/Apps/W1/SAF-T/app/src/Setup/DataUpgradeSAFT.Interface.al (releases/29.x)
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
name: DataUpgradeSAFT
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
  procedures: 4
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
  implemented_by: 2
---

# Interface "DataUpgradeSAFT"

> Interface "DataUpgradeSAFT" in SAF-T (Microsoft.Finance.AuditFileExport). 4 public procedures. Introduced in BC29, still in BC30.

SAF-T · Microsoft.Finance.AuditFileExport · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/SAF-T/app/src/Setup/DataUpgradeSAFT.Interface.al) · facts from BC29

## Procedures

- `IsDataUpgradeRequired(): Boolean`
- `GetDataUpgradeDescription(): Text`: Returns a description of what will be upgraded.
- `ReviewDataToUpgrade()`: Shows the data which will be upgraded.
- `UpgradeData(): Boolean`: Upgrades the data.

## Implemented by

- [Codeunit 5284 "Data Upgrade SAF-T"](../codeunit/5284.md)
- [Enum 5280 "SAF-T Modification"](../enum/5280.md)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "DataUpgradeSAFT")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
