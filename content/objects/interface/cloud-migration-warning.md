---
id: object/interface/cloud-migration-warning
type: object
title: Interface "Cloud Migration Warning"
summary: Interface "Cloud Migration Warning" in HybridBaseDeployment (Microsoft.DataMigration). 5 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - hybridbasedeployment
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
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6471cce70aab46fe91594ae5e94e19c3a6d3dd1b9b153875464d9dc1fec159a1
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/HybridBaseDeployment/app/src/interfaces/CloudMigrationWarning.Interface.al
    title: src/Apps/W1/HybridBaseDeployment/app/src/interfaces/CloudMigrationWarning.Interface.al (releases/29.x)
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
name: Cloud Migration Warning
namespace: Microsoft.DataMigration
app: HybridBaseDeployment
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
  implemented_by: 5
---

# Interface "Cloud Migration Warning"

> Interface "Cloud Migration Warning" in HybridBaseDeployment (Microsoft.DataMigration). 5 public procedures. Introduced in BC29, still in BC30.

HybridBaseDeployment · Microsoft.DataMigration · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/HybridBaseDeployment/app/src/interfaces/CloudMigrationWarning.Interface.al) · facts from BC29

## Procedures

- `CheckWarning(): Boolean`
- `FixWarning()`
- `ShowWarning(var CloudMigrationWarning: Record "Cloud Migration Warning"): Text`
- `GetWarningMessage(): Text[1024]`
- `GetWarningCount(): Integer`

## Implemented by

- [Codeunit 40023 "Record Link Migration Warning"](../codeunit/40023.md)
- [Codeunit 40024 "Tenant Media Warning"](../codeunit/40024.md)
- [Codeunit 40031 "Migration Validator Warning"](../codeunit/40031.md)
- [Codeunit 46857 "BC14 Balance Warning"](../codeunit/46857.md)
- [Enum 40010 "Cloud Migration Warning Type"](../enum/40010.md)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Cloud Migration Warning")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Cloud Migration Warning"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
