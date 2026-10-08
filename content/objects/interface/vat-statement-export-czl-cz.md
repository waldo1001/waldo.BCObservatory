---
id: object/interface/vat-statement-export-czl-cz
type: object
title: Interface "VAT Statement Export CZL" (CZ)
summary: Interface "VAT Statement Export CZL" (CZ) in the CZ country layer (Microsoft.Finance.VAT.Reporting). 3 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 054f4895d49a561ee62c418f2944fc39d51866c6a74d96e4c67796fd1ac42f9b
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/CZ/CoreLocalizationPack/app/Src/Interfaces/VATStatementExportCZL.Interface.al
    title: src/Apps/CZ/CoreLocalizationPack/app/Src/Interfaces/VATStatementExportCZL.Interface.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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
name: VAT Statement Export CZL
namespace: Microsoft.Finance.VAT.Reporting
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

# Interface "VAT Statement Export CZL" (CZ)

> Interface "VAT Statement Export CZL" (CZ) in the CZ country layer (Microsoft.Finance.VAT.Reporting). 3 public procedures. Introduced in BC29, still in BC30.

CZ country layer · Microsoft.Finance.VAT.Reporting · BC29-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/CZ/CoreLocalizationPack/app/Src/Interfaces/VATStatementExportCZL.Interface.al) · facts from BC29

An object of the [CZ localization](../../localizations/cz.md), not part of W1.

## Procedures

- `ExportToXMLFile(VATStatementName: Record "VAT Statement Name"): Text`
- `ExportToXMLBlob(VATStatementName: Record "VAT Statement Name"; var TempBlob: Codeunit "Temp Blob")`: Export VAT Statement to TempBlob.
- `InitVATAttributes(VATStatementTemplateName: Code[10])`: Fill "VAT Attribute Code CZL" table with set of records for a specific XML Format.

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "VAT Statement Export CZL")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.

A CZ country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.
