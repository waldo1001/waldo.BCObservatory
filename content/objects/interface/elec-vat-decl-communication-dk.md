---
id: object/interface/elec-vat-decl-communication-dk
type: object
title: Interface "Elec. VAT Decl. Communication" (DK)
summary: Interface "Elec. VAT Decl. Communication" (DK) in the DK country layer (Microsoft.Finance.VAT.Reporting). 1 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - dk layer
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
  at: "2026-10-16T01:09:05.341Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0eef44a54df75fbfc7f24ae5273519e789abf94abb984f490b776eb1f6869f4b
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/ff470ecd2cee1e213c62c942f114f6c8238563c8/src/Apps/DK/ElectronicVATDeclarationDK/app/src/Engine/Communication/ElecVATDeclCommunication.Interface.al
    title: src/Apps/DK/ElectronicVATDeclarationDK/app/src/Engine/Communication/ElecVATDeclCommunication.Interface.al (releases/29.x)
    date: null
    commit: ff470ecd2cee1e213c62c942f114f6c8238563c8
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations:
    - localization/dk
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: Elec. VAT Decl. Communication
namespace: Microsoft.Finance.VAT.Reporting
app: ElectronicVATDeclarationDK
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
country: DK
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
---

# Interface "Elec. VAT Decl. Communication" (DK)

> Interface "Elec. VAT Decl. Communication" (DK) in the DK country layer (Microsoft.Finance.VAT.Reporting). 1 public procedures. Introduced in BC29, still in BC30.

DK country layer · Microsoft.Finance.VAT.Reporting · BC29-30 · [source at ff470ecd](https://github.com/microsoft/BCApps/blob/ff470ecd2cee1e213c62c942f114f6c8238563c8/src/Apps/DK/ElectronicVATDeclarationDK/app/src/Engine/Communication/ElecVATDeclCommunication.Interface.al) · facts from BC29

An object of the [DK localization](../../localizations/dk.md), not part of W1.

## Procedures

- `SendMessage(EnvelopeInStream: InStream; Endpoint: Text): Interface "Elec. VAT Decl. Response"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Elec. VAT Decl. Communication")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.

A DK country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.
