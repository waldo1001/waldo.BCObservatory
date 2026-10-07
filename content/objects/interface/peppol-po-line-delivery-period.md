---
id: object/interface/peppol-po-line-delivery-period
type: object
title: Interface "PEPPOL PO Line Delivery Period"
summary: Interface "PEPPOL PO Line Delivery Period" in PEPPOL (Microsoft.Peppol). 1 public procedures. Introduced in BC30.
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
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: af0dc916f1082e51292d9a72cbaa893d8df8b841fc006503ecea40218ebf63aa
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/ecbc028c25dbe83b61313bc566e6c1d41184bb1c/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPOLineDeliveryPeriod.Interface.al
    title: src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPOLineDeliveryPeriod.Interface.al (main)
    date: null
    commit: ecbc028c25dbe83b61313bc566e6c1d41184bb1c
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
name: PEPPOL PO Line Delivery Period
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
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "PEPPOL PO Line Delivery Period"

> Interface "PEPPOL PO Line Delivery Period" in PEPPOL (Microsoft.Peppol). 1 public procedures. Introduced in BC30.

PEPPOL · Microsoft.Peppol · BC30 · [source at ecbc028c](https://github.com/microsoft/BCApps/blob/ecbc028c25dbe83b61313bc566e6c1d41184bb1c/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPOLineDeliveryPeriod.Interface.al) · facts from BC30

## Procedures

- `GetLineRequestedDeliveryPeriod(PurchaseLine: Record "Purchase Line"; var StartDate: Text; var EndDate: Text)`

## Across versions

- Present in: BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
