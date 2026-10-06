---
id: object/interface/price-source-group
type: object
title: Interface "Price Source Group"
summary: Interface "Price Source Group" in Base Application (Microsoft.Pricing.Source). 2 public procedures. Present since at least BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: null
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
  input_hash: 7b9e8bf6a1a5699e269581bbde3cbe3e61ee6f6951d2d1149b6001b0f24a695c
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Pricing/Source/PriceSourceGroup.Interface.al
    title: src/Layers/W1/BaseApp/Pricing/Source/PriceSourceGroup.Interface.al (releases/29.x)
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
name: Price Source Group
namespace: Microsoft.Pricing.Source
app: Base Application
extends: null
first_version: "28"
last_version: "30"
present_in:
  - "28"
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 2
  events: 0
  subscribers: 0
---

# Interface "Price Source Group"

> Interface "Price Source Group" in Base Application (Microsoft.Pricing.Source). 2 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Pricing.Source · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Pricing/Source/PriceSourceGroup.Interface.al) · facts from BC29

## Procedures

- `IsSourceTypeSupported(SourceType: Enum "Price Source Type"): Boolean`
- `GetGroup(): Enum "Price Source Group"`: Some of source types are mapped to the price source groups that is used in setup. If the source type does not belong to one group then it returns group All.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
