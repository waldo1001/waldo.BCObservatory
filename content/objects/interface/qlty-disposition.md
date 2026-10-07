---
id: object/interface/qlty-disposition
type: object
title: Interface "Qlty. Disposition"
summary: Interface "Qlty. Disposition" in Quality Management (Microsoft.QualityManagement.Dispositions). 1 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - quality management
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
  input_hash: 03668e38942cf76345a7e6641943f3b5b5fba57b2d7cfc3638926f27350135ee
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/Quality%20Management/app/src/Dispositions/QltyDisposition.Interface.al
    title: src/Apps/W1/Quality Management/app/src/Dispositions/QltyDisposition.Interface.al (releases/29.x)
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
name: Qlty. Disposition
namespace: Microsoft.QualityManagement.Dispositions
app: Quality Management
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
  implemented_by: 12
---

# Interface "Qlty. Disposition"

> Interface "Qlty. Disposition" in Quality Management (Microsoft.QualityManagement.Dispositions). 1 public procedures. Introduced in BC29, still in BC30.

Quality Management · Microsoft.QualityManagement.Dispositions · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/Quality%20Management/app/src/Dispositions/QltyDisposition.Interface.al) · facts from BC29

## Procedures

- `PerformDisposition(var QltyInspectionHeader: Record "Qlty. Inspection Header"; var TempInstructionQltyDispositionBuffer: Record "Qlty. Disposition Buffer" temporary): Boolean`

## Implemented by

- [Codeunit 20441 "Qlty. Disp. Purchase Return"](../codeunit/20441.md)
- [Codeunit 20442 "Qlty. Disp. Move Auto Choose"](../codeunit/20442.md)
- [Codeunit 20443 "Qlty. Disp. Change Tracking"](../codeunit/20443.md)
- [Codeunit 20444 "Qlty. Disp. Transfer"](../codeunit/20444.md)
- [Codeunit 20446 "Qlty. Disp. Neg. Adjust Inv."](../codeunit/20446.md)
- [Codeunit 20447 "Qlty. Disp. Internal Put-away"](../codeunit/20447.md)
- [Codeunit 20449 "Qlty. Disp. Move Whse.Reclass."](../codeunit/20449.md)
- [Codeunit 20450 "Qlty. Disp. Internal Move"](../codeunit/20450.md)
- [Codeunit 20451 "Qlty. Disp. Move Worksheet"](../codeunit/20451.md)
- [Codeunit 20452 "Qlty. Disp. Move Item Reclass."](../codeunit/20452.md)
- [Codeunit 20453 "Qlty. Disp. Warehouse Put-away"](../codeunit/20453.md)
- [Enum 20456 "Qlty. Disposition Action"](../enum/20456.md)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Qlty. Disposition")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Qlty. Disposition"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
