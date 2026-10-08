---
id: object/entitlement/delegated-bc-admin-agent-partner
type: object
title: Entitlement "Delegated BC Admin agent - Partner"
summary: Entitlement "Delegated BC Admin agent - Partner" in System Application (System.Security.AccessControl). Present since at least BC23, still in BC30, changed in BC25.
tier: official
language: en
tags:
  - entitlement
  - system application
versions:
  introduced: null
  last_changed: "25"
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
  input_hash: 5cdc65391b675ad7d89b341c38eb73760fb1d1811c8652969fda30473120f592
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/Entitlements/DelegatedBCAdminAgentPartner.Entitlement.al
    title: src/System Application/App/Entitlements/DelegatedBCAdminAgentPartner.Entitlement.al (releases/29.x)
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
object_type: entitlement
object_id: null
name: Delegated BC Admin agent - Partner
namespace: System.Security.AccessControl
app: System Application
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
  - "25"
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

# Entitlement "Delegated BC Admin agent - Partner"

> Entitlement "Delegated BC Admin agent - Partner" in System Application (System.Security.AccessControl). Present since at least BC23, still in BC30, changed in BC25.

System Application · System.Security.AccessControl · BC23-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/Entitlements/DelegatedBCAdminAgentPartner.Entitlement.al) · facts from BC29

## Across versions

- Present in: BC23-30
- Changed (declaration) in: BC25

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "entitlement", object_name: "Delegated BC Admin agent - Partner")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
