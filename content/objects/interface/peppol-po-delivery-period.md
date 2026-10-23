---
id: object/interface/peppol-po-delivery-period
type: object
title: Interface "PEPPOL PO Delivery Period"
summary: Interface "PEPPOL PO Delivery Period" in PEPPOL (Microsoft.Peppol). 1 public procedures. Introduced in BC29, still in BC30.
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
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-23T01:04:01.231Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1138d889f153857b241da87834e47b1930aac88f7af825c9f90da05c8b293bc4
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/af1b860dae5aeeb1369d4ed450c2c980e372a161/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPODeliveryPeriod.Interface.al
    title: src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPODeliveryPeriod.Interface.al (releases/29.x)
    date: null
    commit: af1b860dae5aeeb1369d4ed450c2c980e372a161
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
  changes:
    - change/bcapps/11563
object_type: interface
object_id: null
name: PEPPOL PO Delivery Period
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
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 0
---

# Interface "PEPPOL PO Delivery Period"

> Interface "PEPPOL PO Delivery Period" in PEPPOL (Microsoft.Peppol). 1 public procedures. Introduced in BC29, still in BC30.

PEPPOL · Microsoft.Peppol · BC29-30 · [source at af1b860d](https://github.com/microsoft/BCApps/blob/af1b860dae5aeeb1369d4ed450c2c980e372a161/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPODeliveryPeriod.Interface.al) · facts from BC29

## Procedures

- `GetRequestedDeliveryPeriod(PurchaseHeader: Record "Purchase Header"; var StartDate: Text; var EndDate: Text)`

## Recent changes

- 2026-09-24 [#11563 [E-Documents Core] [Peppol] - Add PEPPOL Requested Delivery Period support (header + line)](../../changes/bcapps/11563.md) (main, BC30, feature, added)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "PEPPOL PO Delivery Period")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
