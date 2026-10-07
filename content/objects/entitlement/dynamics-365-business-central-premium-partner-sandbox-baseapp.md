---
id: object/entitlement/dynamics-365-business-central-premium-partner-sandbox-baseapp
type: object
title: Entitlement "Dynamics 365 Business Central Premium Partner Sandbox BaseApp"
summary: Entitlement "Dynamics 365 Business Central Premium Partner Sandbox BaseApp" in Base Application (System.Security.AccessControl). Present since at least BC23, still in BC30.
tier: official
language: en
tags:
  - entitlement
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
  at: "2026-10-07T16:23:11.326Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7df9bc35554ee4d935c3e5325e809ecc895406658b8d82bc1b0b4fa3bcbc1904
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Entitlements/Dynamics365BusinessCentralPremiumPartnerSandboxBaseApp.Entitlement.al
    title: src/Layers/W1/BaseApp/Entitlements/Dynamics365BusinessCentralPremiumPartnerSandboxBaseApp.Entitlement.al (releases/29.x)
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
name: Dynamics 365 Business Central Premium Partner Sandbox BaseApp
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

# Entitlement "Dynamics 365 Business Central Premium Partner Sandbox BaseApp"

> Entitlement "Dynamics 365 Business Central Premium Partner Sandbox BaseApp" in Base Application (System.Security.AccessControl). Present since at least BC23, still in BC30.

Base Application · System.Security.AccessControl · BC23-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Entitlements/Dynamics365BusinessCentralPremiumPartnerSandboxBaseApp.Entitlement.al) · facts from BC29

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "entitlement", object_name: "Dynamics 365 Business Central Premium Partner Sandbox BaseApp")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node entitlement "Dynamics 365 Business Central Premium Partner Sandbox BaseApp"`

## Across versions

- Present in: BC23, BC24, BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
