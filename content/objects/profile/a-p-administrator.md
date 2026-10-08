---
id: object/profile/a-p-administrator
type: object
title: Profile "A/P Administrator"
summary: Profile "A/P Administrator" in Base Application (Microsoft.Finance.RoleCenters). Introduced in BC27, still in BC30.
tier: official
language: en
tags:
  - profile
  - base application
versions:
  introduced: "27"
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
  input_hash: cbb1b98a542e49547ed99ca28300865fce940f16b07dc6840dc39131a37fb89b
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Layers/W1/BaseApp/Finance/RoleCenters/APAdministrator.Profile.al
    title: src/Layers/W1/BaseApp/Finance/RoleCenters/APAdministrator.Profile.al (releases/29.x)
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
name: A/P Administrator
caption: Accounts Payable Administrator
namespace: Microsoft.Finance.RoleCenters
app: Base Application
extends: null
first_version: "27"
last_version: "30"
present_in:
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

# Profile "A/P Administrator"

> Profile "A/P Administrator" in Base Application (Microsoft.Finance.RoleCenters). Introduced in BC27, still in BC30.

Base Application · Microsoft.Finance.RoleCenters · captioned "Accounts Payable Administrator" · BC27-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Layers/W1/BaseApp/Finance/RoleCenters/APAdministrator.Profile.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Caption | Accounts Payable Administrator |

## Across versions

- Present in: BC27-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "profile", object_name: "A/P Administrator")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
