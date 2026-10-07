---
id: object/interface/eet-cash-register-czl-cz
type: object
title: Interface "EET Cash Register CZL" (CZ)
summary: Interface "EET Cash Register CZL" (CZ) in the CZ country layer (Microsoft.Finance). 3 public procedures. Introduced in BC29, gone after BC29.
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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 925548c9b6e3b2101cbff7cb96aef859a538bf4b8bc44fb6921d89341fc8aad1
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/CZ/CoreLocalizationPack/app/Src/Interfaces/EETCashRegisterCZL.Interface.al
    title: src/Apps/CZ/CoreLocalizationPack/app/Src/Interfaces/EETCashRegisterCZL.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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
last_version: "29"
present_in:
  - "29"
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

> Interface "EET Cash Register CZL" (CZ) in the CZ country layer (Microsoft.Finance). 3 public procedures. Introduced in BC29, gone after BC29.

CZ country layer · Microsoft.Finance · BC29 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/CZ/CoreLocalizationPack/app/Src/Interfaces/EETCashRegisterCZL.Interface.al) · facts from BC29

An object of the [CZ localization](../../localizations/cz.md), not part of W1.

## Procedures

- `GetCashRegisterName(CashRegisterNo: Code[20]): Text[100]`
- `LookupCashRegisterNo(var CashRegisterNo: Code[20]): Boolean`: Show the lookup page of cash registers for cash register no. field.
- `ShowDocument(CashRegisterNo: Code[20]; DocumentNo: Code[20])`: Show the page of document of cash register.

## Across versions

- Present in: BC29
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
