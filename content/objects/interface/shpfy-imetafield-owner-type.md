---
id: object/interface/shpfy-imetafield-owner-type
type: object
title: Interface "Shpfy IMetafield Owner Type"
summary: Interface "Shpfy IMetafield Owner Type" in Shopify (Microsoft.Integration.Shopify). 4 public procedures. Introduced in BC29, still in BC30.
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
  input_hash: 6d9c2107f3db837214423bb596b071befa583a1a49b7ea3ea0e13de6c79398d8
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/Shopify/app/src/Metafields/Interfaces/ShpfyIMetafieldOwnerType.Interface.al
    title: src/Apps/W1/Shopify/app/src/Metafields/Interfaces/ShpfyIMetafieldOwnerType.Interface.al (releases/29.x)
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
name: Shpfy IMetafield Owner Type
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

# Interface "Shpfy IMetafield Owner Type"

> Interface "Shpfy IMetafield Owner Type" in Shopify (Microsoft.Integration.Shopify). 4 public procedures. Introduced in BC29, still in BC30.

Shopify · Microsoft.Integration.Shopify · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/Shopify/app/src/Metafields/Interfaces/ShpfyIMetafieldOwnerType.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `GetTableId(): Integer`: Returns the table id where the owner record is stored in BC.
- `RetrieveMetafieldIdsFromShopify(OwnerId: BigInteger): Dictionary of [BigInteger, DateTime]`: Retrieves metafields belonging to the owner resource in a dictionary with the last updated at timestamp.
- `GetShopCode(OwnerId: BigInteger): Code[20]`: Retrieves the shop code from the owner resource.
- `CanEditMetafields(Shop: Record "Shpfy Shop"): Boolean`: Indicates if metafields can be edited.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
