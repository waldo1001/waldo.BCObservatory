---
id: object/profile/ar-administrator
type: object
title: Profile "AR ADMINISTRATOR"
summary: Profile "AR ADMINISTRATOR" in Base Application (Microsoft.Finance.RoleCenters). Present since at least BC23, still in BC30, changed in BC24.
tier: official
language: en
tags:
  - profile
  - base application
versions:
  introduced: null
  last_changed: "24"
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
  input_hash: 57edd09e22304f2a6b780597f447afcbd2508375f64e945d488587aa558172d2
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Finance/RoleCenters/ArAdministrator.Profile.al
    title: src/Layers/W1/BaseApp/Finance/RoleCenters/ArAdministrator.Profile.al (releases/29.x)
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
name: AR ADMINISTRATOR
caption: Accounts Receivable Administrator
namespace: Microsoft.Finance.RoleCenters
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
  - "24"
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

# Profile "AR ADMINISTRATOR"

> Profile "AR ADMINISTRATOR" in Base Application (Microsoft.Finance.RoleCenters). Present since at least BC23, still in BC30, changed in BC24.

Base Application · Microsoft.Finance.RoleCenters · captioned "Accounts Receivable Administrator" · BC23-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Finance/RoleCenters/ArAdministrator.Profile.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Caption | Accounts Receivable Administrator |

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "profile", object_name: "AR ADMINISTRATOR")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node profile "AR ADMINISTRATOR"`

## Across versions

- Present in: BC23-30
- Changed (declaration) in: BC24

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
