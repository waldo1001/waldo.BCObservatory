---
id: object/interface/shpfy-icompany-mapping
type: object
title: Interface "Shpfy ICompany Mapping"
summary: Interface "Shpfy ICompany Mapping" in Shopify (Microsoft.Integration.Shopify). 1 public procedures. Introduced in BC29, still in BC30.
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
  input_hash: b6d6908755a792d55f2b1fb173b204c06dd0dd35966d84a1d1fabafd5570d554
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Shopify/app/src/Companies/Interfaces/ShpfyICompanyMapping.Interface.al
    title: src/Apps/W1/Shopify/app/src/Companies/Interfaces/ShpfyICompanyMapping.Interface.al (releases/29.x)
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
name: Shpfy ICompany Mapping
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
---

# Interface "Shpfy ICompany Mapping"

> Interface "Shpfy ICompany Mapping" in Shopify (Microsoft.Integration.Shopify). 1 public procedures. Introduced in BC29, still in BC30.

Shopify · Microsoft.Integration.Shopify · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Shopify/app/src/Companies/Interfaces/ShpfyICompanyMapping.Interface.al) · facts from BC29

## Procedures

- `DoMapping(CompanyId: BigInteger; ShopCode: Code[20]; TemplateCode: Code[20]; AllowCreate: Boolean): Code[20]`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
