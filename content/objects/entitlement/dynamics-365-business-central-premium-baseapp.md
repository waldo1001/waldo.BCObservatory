---
id: object/entitlement/dynamics-365-business-central-premium-baseapp
type: object
title: Entitlement "Dynamics 365 Business Central Premium BaseApp"
summary: Entitlement "Dynamics 365 Business Central Premium BaseApp" in Base Application (System.Security.AccessControl). Present since at least BC23, still in BC30, changed in BC28.
tier: official
language: en
tags:
  - entitlement
  - base application
versions:
  introduced: null
  last_changed: "28"
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
  input_hash: 1ee9a6cbecc36bf6a33eca910b93518816c0b6fce954656dacbac2f76e5101b2
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Entitlements/Dynamics365BusinessCentralPremiumBaseApp.Entitlement.al
    title: src/Layers/W1/BaseApp/Entitlements/Dynamics365BusinessCentralPremiumBaseApp.Entitlement.al (releases/29.x)
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
object_type: entitlement
object_id: null
name: Dynamics 365 Business Central Premium BaseApp
namespace: System.Security.AccessControl
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
changed_in:
  - "28"
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

# Entitlement "Dynamics 365 Business Central Premium BaseApp"

> Entitlement "Dynamics 365 Business Central Premium BaseApp" in Base Application (System.Security.AccessControl). Present since at least BC23, still in BC30, changed in BC28.

Base Application · System.Security.AccessControl · BC23-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Entitlements/Dynamics365BusinessCentralPremiumBaseApp.Entitlement.al) · facts from BC29

## Across versions

- Present in: BC23-30
- Changed (declaration) in: BC28

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "entitlement", object_name: "Dynamics 365 Business Central Premium BaseApp")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
