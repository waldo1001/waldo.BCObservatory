---
id: object/interface/ipurchaselineaccountprovider
type: object
title: Interface "IPurchaseLineAccountProvider"
summary: Interface "IPurchaseLineAccountProvider" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 1 public procedures. Introduced in BC29, still in BC30, changed in BC30. Obsolete (Pending since 27.0).
tier: official
language: en
tags:
  - interface
  - edocument
versions:
  introduced: "29"
  last_changed: "30"
  deprecated: "27.0"
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 19bbce6088c8b27f553de91e8270c6f801401ebf575b16a226531176e6b8ef4d
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IPurchaseLineAccountProvider.Interface.al
    title: src/Apps/W1/EDocument/app/src/Processing/Interfaces/IPurchaseLineAccountProvider.Interface.al (releases/29.x)
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
  changes:
    - change/bcapps/12070
object_type: interface
object_id: null
name: IPurchaseLineAccountProvider
namespace: Microsoft.eServices.EDocument.Processing.Interfaces
app: EDocument
extends: null
first_version: "29"
last_version: "30"
present_in:
  - "29"
  - "30"
changed_in:
  - "30"
source_major: "29"
obsolete:
  state: Pending
  tag: "27.0"
  reason: Replaced by IPurchaseLineProvider
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

# Interface "IPurchaseLineAccountProvider"

> Interface "IPurchaseLineAccountProvider" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 1 public procedures. Introduced in BC29, still in BC30, changed in BC30. Obsolete (Pending since 27.0).

EDocument · Microsoft.eServices.EDocument.Processing.Interfaces · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IPurchaseLineAccountProvider.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| ObsoleteState | Pending |
| ObsoleteTag | 27.0 |
| ObsoleteReason | Replaced by IPurchaseLineProvider |

## Procedures

- `GetPurchaseLineAccount(EDocumentPurchaseLine: Record "E-Document Purchase Line"; var AccountType: Enum "Purchase Line Type"; var AccountNo: Code[20])`: Determines the purchase line fields for a given E-Document purchase line.

## Recent changes

- 2026-09-30 [#12070 Fix inconsistent CLEAN27/CLEAN28 tags in E-Document apps](../../changes/bcapps/12070.md) (main, BC30, fix)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: BC30
- Obsolete: Pending since 27.0, "Replaced by IPurchaseLineProvider"

## Deprecations

- object: Pending 27.0, "Replaced by IPurchaseLineProvider"

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "IPurchaseLineAccountProvider")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
