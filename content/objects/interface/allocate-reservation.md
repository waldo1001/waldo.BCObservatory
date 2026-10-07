---
id: object/interface/allocate-reservation
type: object
title: Interface "Allocate Reservation"
summary: Interface "Allocate Reservation" in Base Application (Microsoft.Inventory.Tracking). 4 public procedures. Present since at least BC23, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: null
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4deb3de0e3c68bb694fc4783fac124710b4bac2be0cb74ab0550000d1241a20d
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Inventory/Tracking/AllocateReservation.Interface.al
    title: src/Layers/W1/BaseApp/Inventory/Tracking/AllocateReservation.Interface.al (releases/29.x)
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
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
name: Allocate Reservation
namespace: Microsoft.Inventory.Tracking
app: Base Application
extends: null
first_version: "23"
last_version: "30"
present_in:
  - "23"
  - "24"
  - "25"
  - "26"
  - "27"
  - "28"
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
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 4
---

# Interface "Allocate Reservation"

> Interface "Allocate Reservation" in Base Application (Microsoft.Inventory.Tracking). 4 public procedures. Present since at least BC23, still in BC30.

Base Application · Microsoft.Inventory.Tracking · BC23-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Inventory/Tracking/AllocateReservation.Interface.al) · facts from BC29

## Procedures

- `Allocate(var ReservationWkshLine: Record "Reservation Wksh. Line")`
- `DeleteAllocation(var ReservationWkshLine: Record "Reservation Wksh. Line")`
- `AllocationCompleted(var ReservationWkshLine: Record "Reservation Wksh. Line"): Boolean`
- `GetDescription(): Text`

## Implemented by

- [Codeunit 301 "Allocate Reserv. Basic"](../codeunit/301.md)
- [Codeunit 302 "Allocate Reserv. Equally"](../codeunit/302.md)
- [Codeunit 303 "Allocate Reserv Cust. Priority"](../codeunit/303.md)
- [Enum 300 "Allocation Rules Impl."](../enum/300.md)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Allocate Reservation")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Allocate Reservation"`

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
