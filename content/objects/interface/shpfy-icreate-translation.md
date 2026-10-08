---
id: object/interface/shpfy-icreate-translation
type: object
title: Interface "Shpfy ICreate Translation"
summary: Interface "Shpfy ICreate Translation" in Shopify (Microsoft.Integration.Shopify). 1 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - shopify
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
  input_hash: 4d7a639f310aef30ffe0990d228acf50f6cb9c493343a5f55c8f2e103a6d258a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/Shopify/app/src/Translations/Interfaces/ShpfyICreateTranslation.Interface.al
    title: src/Apps/W1/Shopify/app/src/Translations/Interfaces/ShpfyICreateTranslation.Interface.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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
name: Shpfy ICreate Translation
namespace: Microsoft.Integration.Shopify
app: Shopify
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

# Interface "Shpfy ICreate Translation"

> Interface "Shpfy ICreate Translation" in Shopify (Microsoft.Integration.Shopify). 1 public procedures. Introduced in BC29, still in BC30.

Shopify · Microsoft.Integration.Shopify · BC29-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/Shopify/app/src/Translations/Interfaces/ShpfyICreateTranslation.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `CreateTranslation(RecVariant: Variant; ShopifyLanguage: Record "Shpfy Language"; var TempTranslation: Record "Shpfy Translation" temporary; Digests: Dictionary of [Text, Text])`: Create a translation record for the given resource and language. Translation record is only created if the translation is not already present in the Shopify. These records are used to create the query for updating the translation in Shopify.

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Shpfy ICreate Translation")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
