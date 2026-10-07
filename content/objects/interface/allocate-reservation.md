---
id: object/interface/allocate-reservation
type: object
title: Interface "Allocate Reservation"
summary: Interface "Allocate Reservation" in Base Application (Microsoft.Inventory.Tracking). 4 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d0a58b7313f680a66f71a2a699aa0a41031439550578722a2cb286948ad7c480
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/Inventory/Tracking/AllocateReservation.Interface.al
    title: src/Layers/W1/BaseApp/Inventory/Tracking/AllocateReservation.Interface.al (releases/29.x)
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
name: Allocate Reservation
namespace: Microsoft.Inventory.Tracking
app: Base Application
extends: null
first_version: "28"
last_version: "30"
present_in:
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
---

# Interface "Allocate Reservation"

> Interface "Allocate Reservation" in Base Application (Microsoft.Inventory.Tracking). 4 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Inventory.Tracking · BC28-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/Inventory/Tracking/AllocateReservation.Interface.al) · facts from BC29

## Procedures

- `Allocate(var ReservationWkshLine: Record "Reservation Wksh. Line")`
- `DeleteAllocation(var ReservationWkshLine: Record "Reservation Wksh. Line")`
- `AllocationCompleted(var ReservationWkshLine: Record "Reservation Wksh. Line"): Boolean`
- `GetDescription(): Text`

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
