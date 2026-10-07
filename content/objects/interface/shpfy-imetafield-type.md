---
id: object/interface/shpfy-imetafield-type
type: object
title: Interface "Shpfy IMetafield Type"
summary: Interface "Shpfy IMetafield Type" in Shopify (Microsoft.Integration.Shopify). 4 public procedures. Introduced in BC29, still in BC30.
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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: af4f1d28a7a096fb071390175fecb81b811e4745e2305c1ac6db9f01f612bce1
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/Shopify/app/src/Metafields/Interfaces/ShpfyIMetafieldType.Interface.al
    title: src/Apps/W1/Shopify/app/src/Metafields/Interfaces/ShpfyIMetafieldType.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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
name: Shpfy IMetafield Type
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
  procedures: 4
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Shpfy IMetafield Type"

> Interface "Shpfy IMetafield Type" in Shopify (Microsoft.Integration.Shopify). 4 public procedures. Introduced in BC29, still in BC30.

Shopify · Microsoft.Integration.Shopify · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/Shopify/app/src/Metafields/Interfaces/ShpfyIMetafieldType.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `HasAssistEdit(): Boolean`: Determines if Type defines an Assist Edit dialog.
- `IsValidValue(Value: Text): Boolean`: Determines if provided value is valid for Type.
- `AssistEdit(var Value: Text[2048]): Boolean`: Opens a dialog to assist in editing the value.
- `GetExampleValue(): Text`: Returns an example value for the Type.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
