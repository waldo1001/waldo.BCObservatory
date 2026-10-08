---
id: object/profile/warehouse-worker-wms
type: object
title: Profile "WAREHOUSE WORKER - WMS"
summary: Profile "WAREHOUSE WORKER - WMS" in Base Application (Microsoft.Warehouse.RoleCenters). Present since at least BC23, still in BC30.
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
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f5f977cf6175d4f82ace28cd1cff84d036dac18f98bc01b490b2a6d24590d51d
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Layers/W1/BaseApp/Warehouse/RoleCenters/WarehouseWorkerWMS.Profile.al
    title: src/Layers/W1/BaseApp/Warehouse/RoleCenters/WarehouseWorkerWMS.Profile.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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
name: WAREHOUSE WORKER - WMS
caption: Warehouse Worker - Warehouse Management System
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

# Profile "WAREHOUSE WORKER - WMS"

> Profile "WAREHOUSE WORKER - WMS" in Base Application (Microsoft.Warehouse.RoleCenters). Present since at least BC23, still in BC30.

Base Application · Microsoft.Warehouse.RoleCenters · captioned "Warehouse Worker - Warehouse Management System" · BC23-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Layers/W1/BaseApp/Warehouse/RoleCenters/WarehouseWorkerWMS.Profile.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Caption | Warehouse Worker - Warehouse Management System |

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "profile", object_name: "WAREHOUSE WORKER - WMS")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
