---
id: object/interface/peppol-delivery-info-provider
type: object
title: Interface "PEPPOL Delivery Info Provider"
summary: Interface "PEPPOL Delivery Info Provider" in PEPPOL (Microsoft.Peppol). 5 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ebd8085109035c947960df3d1becd340dcd0770ee7a80fc2b61489039635b68a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLDeliveryInfoProvider.Interface.al
    title: src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLDeliveryInfoProvider.Interface.al (releases/29.x)
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
name: PEPPOL Delivery Info Provider
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
  procedures: 5
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "PEPPOL Delivery Info Provider"

> Interface "PEPPOL Delivery Info Provider" in PEPPOL (Microsoft.Peppol). 5 public procedures. Introduced in BC29, still in BC30.

PEPPOL · Microsoft.Peppol · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLDeliveryInfoProvider.Interface.al) · facts from BC29

## Procedures

- `GetDeliveryInfo(var ActualDeliveryDate: Text; var DeliveryID: Text; var DeliveryIDSchemeID: Text)`
- `GetGLNDeliveryInfo(SalesHeader: Record "Sales Header"; var ActualDeliveryDate: Text; var DeliveryID: Text; var DeliveryIDSchemeID: Text)`: Gets GLN delivery information for PEPPOL documents.
- `GetGLNForHeader(SalesHeader: Record "Sales Header"): Code[13]`: Gets the GLN (Global Location Number) for the sales header.
- `GetDeliveryAddress(SalesHeader: Record "Sales Header"; var DeliveryStreetName: Text; var DeliveryAdditionalStreetName: Text; var DeliveryCityName: Text; var DeliveryPostalZone: Text; var DeliveryCountrySubentity: Text; var DeliveryCountryIdCode: Text; var DeliveryCountryListID: Text)`: Gets delivery address information for PEPPOL documents.
- `GetDeliveryPartyName(SalesHeader: Record "Sales Header"; var DeliveryPartyName: Text)`: Gets delivery party name information for PEPPOL documents.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
