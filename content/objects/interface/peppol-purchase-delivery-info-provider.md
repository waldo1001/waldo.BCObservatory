---
id: object/interface/peppol-purchase-delivery-info-provider
type: object
title: Interface "PEPPOL Purchase Delivery Info Provider"
summary: Interface "PEPPOL Purchase Delivery Info Provider" in PEPPOL (Microsoft.Peppol). 1 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - peppol
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
  input_hash: 2e3d57db37c69b888e95e64d6807c7652800281af2d5437fb71c853411936b33
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchaseDeliveryInfoProvider.Interface.al
    title: src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchaseDeliveryInfoProvider.Interface.al (releases/29.x)
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
name: PEPPOL Purchase Delivery Info Provider
namespace: Microsoft.Peppol
app: PEPPOL
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

# Interface "PEPPOL Purchase Delivery Info Provider"

> Interface "PEPPOL Purchase Delivery Info Provider" in PEPPOL (Microsoft.Peppol). 1 public procedures. Introduced in BC29, still in BC30.

PEPPOL · Microsoft.Peppol · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchaseDeliveryInfoProvider.Interface.al) · facts from BC29

## Procedures

- `GetDeliveryAddress(PurchaseHeader: Record "Purchase Header"; var StreetName: Text; var AdditionalStreetName: Text; var CityName: Text; var PostalZone: Text; var CountrySubentity: Text; var IdentificationCode: Text; var ListID: Text)`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
