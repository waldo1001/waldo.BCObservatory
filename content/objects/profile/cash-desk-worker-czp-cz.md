---
id: object/profile/cash-desk-worker-czp-cz
type: object
title: Profile "CASH DESK WORKER CZP" (CZ)
summary: Profile "CASH DESK WORKER CZP" (CZ) in the CZ country layer (Microsoft.Finance.CashDesk). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - profile
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
  input_hash: 00786a9d9f6f0c63d4c5a64193338d886e8a2b115074b2d30c5ef61ce29e0038
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/CZ/CashDeskLocalization/app/Src/Profiles/CashDeskWorkerCZP.Profile.al
    title: src/Apps/CZ/CashDeskLocalization/app/Src/Profiles/CashDeskWorkerCZP.Profile.al (releases/29.x)
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
object_type: profile
object_id: null
name: CASH DESK WORKER CZP
caption: Cash Desk Worker
namespace: Microsoft.Finance.CashDesk
app: CashDeskLocalization
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
  procedures: 0
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Profile "CASH DESK WORKER CZP" (CZ)

> Profile "CASH DESK WORKER CZP" (CZ) in the CZ country layer (Microsoft.Finance.CashDesk). Introduced in BC29, still in BC30.

CZ country layer · Microsoft.Finance.CashDesk · captioned "Cash Desk Worker" · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/CZ/CashDeskLocalization/app/Src/Profiles/CashDeskWorkerCZP.Profile.al) · facts from BC29

An object of the [CZ localization](../../localizations/cz.md), not part of W1.

## Properties

| Property | Value |
|---|---|
| Caption | Cash Desk Worker |

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "profile", object_name: "CASH DESK WORKER CZP")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.

A CZ country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.
