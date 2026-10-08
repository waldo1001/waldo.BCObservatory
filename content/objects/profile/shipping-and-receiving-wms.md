---
id: object/profile/shipping-and-receiving-wms
type: object
title: Profile "SHIPPING AND RECEIVING - WMS"
summary: Profile "SHIPPING AND RECEIVING - WMS" in Base Application (Microsoft.Warehouse.RoleCenters). Present since at least BC23, still in BC30.
tier: official
language: en
tags:
  - profile
  - base application
versions:
  introduced: null
  last_changed: null
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 000f21f34e4f898ffb66500327484e651ae1e6b7389a3cc766fbcd716486f318
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Warehouse/RoleCenters/ShippingAndReceivingWMS.Profile.al
    title: src/Layers/W1/BaseApp/Warehouse/RoleCenters/ShippingAndReceivingWMS.Profile.al (releases/29.x)
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
object_type: profile
object_id: null
name: SHIPPING AND RECEIVING - WMS
caption: Shipping and Receiving - Warehouse Management System
namespace: Microsoft.Warehouse.RoleCenters
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
  procedures: 0
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
---

# Profile "SHIPPING AND RECEIVING - WMS"

> Profile "SHIPPING AND RECEIVING - WMS" in Base Application (Microsoft.Warehouse.RoleCenters). Present since at least BC23, still in BC30.

Base Application · Microsoft.Warehouse.RoleCenters · captioned "Shipping and Receiving - Warehouse Management System" · BC23-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Warehouse/RoleCenters/ShippingAndReceivingWMS.Profile.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Caption | Shipping and Receiving - Warehouse Management System |

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "profile", object_name: "SHIPPING AND RECEIVING - WMS")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
