---
id: object/controladdin/tax-information-addin
type: object
title: Control add-in "Tax Information Addin"
summary: Control add-in "Tax Information Addin" in INTaxEngine (Microsoft.Finance.TaxEngine.TaxTypeHandler). 1 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - controladdin
  - intaxengine
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
  input_hash: 1734700d0fd4d4580aaa23ff572177e7c7bb1bc4dcd05e0b3ef9efbebb67da7d
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/INTaxEngine/app/TaxEngine-TaxTypeHandler/src/TaxInformation/ControlAddin/TaxInformationAddin.ControlAddIn.al
    title: src/Apps/W1/INTaxEngine/app/TaxEngine-TaxTypeHandler/src/TaxInformation/ControlAddin/TaxInformationAddin.ControlAddIn.al (releases/29.x)
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
object_type: controladdin
object_id: null
name: Tax Information Addin
namespace: Microsoft.Finance.TaxEngine.TaxTypeHandler
app: INTaxEngine
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
  called_by: 1
  implements: 0
---

# Control add-in "Tax Information Addin"

> Control add-in "Tax Information Addin" in INTaxEngine (Microsoft.Finance.TaxEngine.TaxTypeHandler). 1 public procedures. Introduced in BC29, still in BC30.

INTaxEngine · Microsoft.Finance.TaxEngine.TaxTypeHandler · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/INTaxEngine/app/TaxEngine-TaxTypeHandler/src/TaxInformation/ControlAddin/TaxInformationAddin.ControlAddIn.al) · facts from BC29

## Procedures

- `RenderTaxInformation(Attributes: JsonObject; Components: JsonObject)`

## Called by

From the extracted call graph of BC29 (graphify-al on the snapshot checkout): calls whose target is known from a declared type or an `Object::"Name"` argument. Interface dispatch and calls through events are not counted, so the list is not complete.

- [Page 20240 "Tax Information Factbox"](../page/20240.md) (1 call: `SetFilterOnTaxEntryRecord → RenderTaxInformation`)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "controladdin", object_name: "Tax Information Addin")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node controladdin "Tax Information Addin"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
