---
id: object/interface/peppol-po-delivery-period
type: object
title: Interface "PEPPOL PO Delivery Period"
summary: Interface "PEPPOL PO Delivery Period" in PEPPOL (Microsoft.Peppol). 1 public procedures. Introduced in BC30.
tier: official
language: en
tags:
  - interface
  - peppol
versions:
  introduced: "30"
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
  input_hash: 9905775ce6ed765dc4bbe569a3e845fa7464c34fe1fe75057a282dfe820e007b
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47f793605ac3a868a203d9068a7b4a054269878a/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPODeliveryPeriod.Interface.al
    title: src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPODeliveryPeriod.Interface.al (main)
    date: null
    commit: 47f793605ac3a868a203d9068a7b4a054269878a
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
name: PEPPOL PO Delivery Period
namespace: Microsoft.Peppol
app: PEPPOL
extends: null
first_version: "30"
last_version: "30"
present_in:
  - "30"
changed_in: []
source_major: "30"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 1
  events: 0
  subscribers: 0
---

# Interface "PEPPOL PO Delivery Period"

> Interface "PEPPOL PO Delivery Period" in PEPPOL (Microsoft.Peppol). 1 public procedures. Introduced in BC30.

PEPPOL · Microsoft.Peppol · BC30 · [source at 47f79360](https://github.com/microsoft/BCApps/blob/47f793605ac3a868a203d9068a7b4a054269878a/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPODeliveryPeriod.Interface.al) · facts from BC30

## Procedures

- `GetRequestedDeliveryPeriod(PurchaseHeader: Record "Purchase Header"; var StartDate: Text; var EndDate: Text)`

## Across versions

- Present in: BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
