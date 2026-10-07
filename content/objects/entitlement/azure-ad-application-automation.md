---
id: object/entitlement/azure-ad-application-automation
type: object
title: Entitlement "Azure AD Application Automation"
summary: Entitlement "Azure AD Application Automation" in System Application (System.Security.AccessControl). Present since at least BC23, still in BC30.
tier: official
language: en
tags:
  - entitlement
  - system application
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
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 96a225bed83077a752d6bef32a014153f203750475e091bdc2b5a9614bdb1d1e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Entitlements/AzureADApplicationAutomation.Entitlement.al
    title: src/System Application/App/Entitlements/AzureADApplicationAutomation.Entitlement.al (releases/29.x)
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
name: Azure AD Application Automation
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

# Entitlement "Azure AD Application Automation"

> Entitlement "Azure AD Application Automation" in System Application (System.Security.AccessControl). Present since at least BC23, still in BC30.

System Application · System.Security.AccessControl · BC23-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Entitlements/AzureADApplicationAutomation.Entitlement.al) · facts from BC29

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "entitlement", object_name: "Azure AD Application Automation")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node entitlement "Azure AD Application Automation"`

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
