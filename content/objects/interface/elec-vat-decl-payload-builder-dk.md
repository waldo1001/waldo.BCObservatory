---
id: object/interface/elec-vat-decl-payload-builder-dk
type: object
title: Interface "Elec. VAT Decl. Payload Builder" (DK)
summary: Interface "Elec. VAT Decl. Payload Builder" (DK) in the DK country layer (Microsoft.Finance.VAT.Reporting). 1 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8b52be9d9e7a77a542109a623da6f9f6256ffa15d402e6526d532c87e500a6ca
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/DK/ElectronicVATDeclarationDK/app/src/Engine/XML/ElecVATDeclPayloadBuilder.Interface.al
    title: src/Apps/DK/ElectronicVATDeclarationDK/app/src/Engine/XML/ElecVATDeclPayloadBuilder.Interface.al (releases/29.x)
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
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
name: Elec. VAT Decl. Payload Builder
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

# Interface "Elec. VAT Decl. Payload Builder" (DK)

> Interface "Elec. VAT Decl. Payload Builder" (DK) in the DK country layer (Microsoft.Finance.VAT.Reporting). 1 public procedures. Introduced in BC29, still in BC30.

DK country layer · Microsoft.Finance.VAT.Reporting · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/DK/ElectronicVATDeclarationDK/app/src/Engine/XML/ElecVATDeclPayloadBuilder.Interface.al) · facts from BC29

An object of the [DK localization](../../localizations/dk.md), not part of W1.

## Procedures

- `BuildPayload(ElecVATDeclParameters: Record "Elec. VAT Decl. Parameters"; var Body: XmlNode; var ReferenceList: List of [Text]; var TransactionID: Code[100])`

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Elec. VAT Decl. Payload Builder")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Elec. VAT Decl. Payload Builder"`

A DK country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
