---
id: object/interface/eet-cash-register-czl-cz
type: object
title: Interface "EET Cash Register CZL" (CZ)
summary: Interface "EET Cash Register CZL" (CZ) in the CZ country layer (Microsoft.Finance). 3 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - cz layer
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
  input_hash: 0deb49c95807e1311e479b83ecb320e5b21390435ac15e78956525fc8afd2bff
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/CZ/CoreLocalizationPack/app/Src/Interfaces/EETCashRegisterCZL.Interface.al
    title: src/Apps/CZ/CoreLocalizationPack/app/Src/Interfaces/EETCashRegisterCZL.Interface.al (releases/29.x)
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations:
    - localization/cz
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: EET Cash Register CZL
namespace: Microsoft.Finance
app: CoreLocalizationPack
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
country: CZ
counts:
  fields: 0
  procedures: 3
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "EET Cash Register CZL" (CZ)

> Interface "EET Cash Register CZL" (CZ) in the CZ country layer (Microsoft.Finance). 3 public procedures. Introduced in BC29, still in BC30.

CZ country layer · Microsoft.Finance · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/CZ/CoreLocalizationPack/app/Src/Interfaces/EETCashRegisterCZL.Interface.al) · facts from BC29

An object of the [CZ localization](../../localizations/cz.md), not part of W1.

## Procedures

- `GetCashRegisterName(CashRegisterNo: Code[20]): Text[100]`
- `LookupCashRegisterNo(var CashRegisterNo: Code[20]): Boolean`: Show the lookup page of cash registers for cash register no. field.
- `ShowDocument(CashRegisterNo: Code[20]; DocumentNo: Code[20])`: Show the page of document of cash register.

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "EET Cash Register CZL")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.

A CZ country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.
