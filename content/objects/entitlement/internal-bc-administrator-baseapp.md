---
id: object/entitlement/internal-bc-administrator-baseapp
type: object
title: Entitlement "Internal BC Administrator BaseApp"
summary: Entitlement "Internal BC Administrator BaseApp" in Base Application (System.Security.AccessControl). Introduced in BC25, still in BC30.
tier: official
language: en
tags:
  - entitlement
  - base application
versions:
  introduced: "25"
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6038a0065cc0b9700bffe1fd1250453ab93931bffe7c301ea77a8f9c47e60634
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Entitlements/InternalBCAdministratorBaseApp.Entitlement.al
    title: src/Layers/W1/BaseApp/Entitlements/InternalBCAdministratorBaseApp.Entitlement.al (releases/29.x)
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
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
name: Internal BC Administrator BaseApp
namespace: System.Security.AccessControl
app: Base Application
extends: null
first_version: "25"
last_version: "30"
present_in:
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
---

# Entitlement "Internal BC Administrator BaseApp"

> Entitlement "Internal BC Administrator BaseApp" in Base Application (System.Security.AccessControl). Introduced in BC25, still in BC30.

Base Application · System.Security.AccessControl · BC25-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Entitlements/InternalBCAdministratorBaseApp.Entitlement.al) · facts from BC29

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "entitlement", object_name: "Internal BC Administrator BaseApp")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node entitlement "Internal BC Administrator BaseApp"`

## Across versions

- Present in: BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
