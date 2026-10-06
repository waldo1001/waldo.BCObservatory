---
id: object/interface/shpfy-icustomer-mapping
type: object
title: Interface "Shpfy ICustomer Mapping"
summary: Interface "Shpfy ICustomer Mapping" in Shopify (Microsoft.Integration.Shopify). 2 public procedures. Introduced in BC29, still in BC30.
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
  input_hash: 1515c5d84bad34928f8fbcbeac3f728c18430bcc3b4630dbc14bd270f02f1a27
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Shopify/app/src/Customers/Interfaces/ShpfyICustomerMapping.Interface.al
    title: src/Apps/W1/Shopify/app/src/Customers/Interfaces/ShpfyICustomerMapping.Interface.al (releases/29.x)
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
name: Shpfy ICustomer Mapping
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
  procedures: 2
  events: 0
  subscribers: 0
---

# Interface "Shpfy ICustomer Mapping"

> Interface "Shpfy ICustomer Mapping" in Shopify (Microsoft.Integration.Shopify). 2 public procedures. Introduced in BC29, still in BC30.

Shopify · Microsoft.Integration.Shopify · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Shopify/app/src/Customers/Interfaces/ShpfyICustomerMapping.Interface.al) · facts from BC29

## Procedures

- `DoMapping(CustomerId: BigInteger; JCustomerInfo: JsonObject; ShopCode: Code[20]): Code[20]`
- `DoMapping(CustomerId: BigInteger; JCustomerInfo: JsonObject; ShopCode: Code[20]; TemplateCode: Code[20]; AllowCreate: Boolean): Code[20]`: DoMapping.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
