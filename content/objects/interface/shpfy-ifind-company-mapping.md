---
id: object/interface/shpfy-ifind-company-mapping
type: object
title: Interface "Shpfy IFind Company Mapping"
summary: Interface "Shpfy IFind Company Mapping" in Shopify (Microsoft.Integration.Shopify). 1 public procedures. Introduced in BC29, still in BC30.
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
  input_hash: db7a5ca1a2d0ba4871def0cb37bf208e460c470ae8e04b26d204a609953b90b8
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/Shopify/app/src/Companies/Interfaces/ShpfyIFindCompanyMapping.Interface.al
    title: src/Apps/W1/Shopify/app/src/Companies/Interfaces/ShpfyIFindCompanyMapping.Interface.al (releases/29.x)
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
name: Shpfy IFind Company Mapping
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
---

# Interface "Shpfy IFind Company Mapping"

> Interface "Shpfy IFind Company Mapping" in Shopify (Microsoft.Integration.Shopify). 1 public procedures. Introduced in BC29, still in BC30.

Shopify · Microsoft.Integration.Shopify · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/Shopify/app/src/Companies/Interfaces/ShpfyIFindCompanyMapping.Interface.al) · facts from BC29

## Procedures

- `FindMapping(var ShopifyCompany: Record "Shpfy Company"; var TempShopifyCustomer: Record "Shpfy Customer" temporary): Boolean`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
