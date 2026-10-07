---
id: object/entitlement/dynamics-365-business-central-device-embedded-baseapp
type: object
title: Entitlement "Dynamics 365 Business Central Device - Embedded BaseApp"
summary: Entitlement "Dynamics 365 Business Central Device - Embedded BaseApp" in Base Application (System.Security.AccessControl). Introduced in BC25, still in BC30.
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
  input_hash: 379d5378b4d08012ac1d7cf110bd42130fe2fc35182d4b83ae246214507570ab
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Entitlements/Dynamics365BusinessCentralDeviceEmbeddedBaseApp.Entitlement.al
    title: src/Layers/W1/BaseApp/Entitlements/Dynamics365BusinessCentralDeviceEmbeddedBaseApp.Entitlement.al (releases/29.x)
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
name: Dynamics 365 Business Central Device - Embedded BaseApp
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

# Entitlement "Dynamics 365 Business Central Device - Embedded BaseApp"

> Entitlement "Dynamics 365 Business Central Device - Embedded BaseApp" in Base Application (System.Security.AccessControl). Introduced in BC25, still in BC30.

Base Application · System.Security.AccessControl · BC25-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Entitlements/Dynamics365BusinessCentralDeviceEmbeddedBaseApp.Entitlement.al) · facts from BC29

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "entitlement", object_name: "Dynamics 365 Business Central Device - Embedded BaseApp")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node entitlement "Dynamics 365 Business Central Device - Embedded BaseApp"`

## Across versions

- Present in: BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
