---
id: object/interface/isaleslineprovider
type: object
title: Interface "ISalesLineProvider"
summary: Interface "ISalesLineProvider" in EDocument (Microsoft.eServices.EDocument.Processing.Import.Sales). 1 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - edocument
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
  input_hash: 219142c455b7b6a5f0b4e0ebac3d32c123104c649cd4a18f51d339184a863470
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/EDocument/app/src/Processing/Import/Sales/ISalesLineProvider.Interface.al
    title: src/Apps/W1/EDocument/app/src/Processing/Import/Sales/ISalesLineProvider.Interface.al (releases/29.x)
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
name: ISalesLineProvider
namespace: Microsoft.eServices.EDocument.Processing.Import.Sales
app: EDocument
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
  implemented_by: 0
---

# Interface "ISalesLineProvider"

> Interface "ISalesLineProvider" in EDocument (Microsoft.eServices.EDocument.Processing.Import.Sales). 1 public procedures. Introduced in BC29, still in BC30.

EDocument · Microsoft.eServices.EDocument.Processing.Import.Sales · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/EDocument/app/src/Processing/Import/Sales/ISalesLineProvider.Interface.al) · facts from BC29

## Procedures

- `GetSalesLine(var EDocumentSalesLine: Record "E-Document Sales Line")`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "ISalesLineProvider")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
