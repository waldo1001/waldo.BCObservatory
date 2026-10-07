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
  at: "2026-10-07T16:23:11.326Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 27dcbe9ad9447bbe727e2430413fb4322dbf6533ccb86b6b51a0ffcb0c957e37
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPOLineDeliveryPeriod.Interface.al
    title: src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPOLineDeliveryPeriod.Interface.al (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
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

PEPPOL · Microsoft.Peppol · BC30 · [source at 9df55025](https://github.com/microsoft/BCApps/blob/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPOLineDeliveryPeriod.Interface.al) · facts from BC30

## Procedures

- `GetLineRequestedDeliveryPeriod(PurchaseLine: Record "Purchase Line"; var StartDate: Text; var EndDate: Text)`

## Recent changes

- 2026-09-24 [#11563 [E-Documents Core] [Peppol] - Add PEPPOL Requested Delivery Period support (header + line)](../../changes/bcapps/11563.md) (main, BC30, feature, added)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "PEPPOL PO Line Delivery Period")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "PEPPOL PO Line Delivery Period"`

## Across versions

- Present in: BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
