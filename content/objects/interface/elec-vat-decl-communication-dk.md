---
id: object/interface/elec-vat-decl-communication-dk
type: object
title: Interface "Elec. VAT Decl. Communication" (DK)
summary: Interface "Elec. VAT Decl. Communication" (DK) in the DK country layer (Microsoft.Finance.VAT.Reporting). 1 public procedures. Introduced in BC29, gone after BC29.
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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3f0200b0eaa508df22697b1175c6244b73e3a995b8aa8fae01f156f15a5348d2
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/DK/ElectronicVATDeclarationDK/app/src/Engine/Communication/ElecVATDeclCommunication.Interface.al
    title: src/Apps/DK/ElectronicVATDeclarationDK/app/src/Engine/Communication/ElecVATDeclCommunication.Interface.al (releases/29.x)
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
last_version: "29"
present_in:
  - "29"
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

> Interface "Elec. VAT Decl. Communication" (DK) in the DK country layer (Microsoft.Finance.VAT.Reporting). 1 public procedures. Introduced in BC29, gone after BC29.

DK country layer · Microsoft.Finance.VAT.Reporting · BC29 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/DK/ElectronicVATDeclarationDK/app/src/Engine/Communication/ElecVATDeclCommunication.Interface.al) · facts from BC29

An object of the [DK localization](../../localizations/dk.md), not part of W1.

## Procedures

- `SendMessage(EnvelopeInStream: InStream; Endpoint: Text): Interface "Elec. VAT Decl. Response"`

## Across versions

- Present in: BC29
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
