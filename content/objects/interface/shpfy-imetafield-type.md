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
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 147d628690660dc88941056c602e11b0d51218af5d4f08b0fb4092d6931ed6ff
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Shopify/app/src/Metafields/Interfaces/ShpfyIMetafieldType.Interface.al
    title: src/Apps/W1/Shopify/app/src/Metafields/Interfaces/ShpfyIMetafieldType.Interface.al (releases/29.x)
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
---

# Interface "Shpfy IMetafield Type"

> Interface "Shpfy IMetafield Type" in Shopify (Microsoft.Integration.Shopify). 4 public procedures. Introduced in BC29, still in BC30.

Shopify · Microsoft.Integration.Shopify · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Shopify/app/src/Metafields/Interfaces/ShpfyIMetafieldType.Interface.al) · facts from BC29

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
