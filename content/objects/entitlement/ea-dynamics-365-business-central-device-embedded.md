---
id: object/entitlement/ea-dynamics-365-business-central-device-embedded
type: object
title: Entitlement "EA - Dynamics 365 Business Central Device - Embedded"
summary: Entitlement "EA - Dynamics 365 Business Central Device - Embedded" in ExpenseAgent (Microsoft.ExpenseAgent). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - entitlement
  - expenseagent
versions:
  introduced: "29"
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
  input_hash: 47323348f21613e20e0fc46ba74b936bd2a8b8d89c832d94da1399722a28aebd
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/ExpenseAgent/app/src/Entitlements/ServicePlans/EADynamics365BusinessCentralDeviceEmbedded.Entitlement.al
    title: src/Apps/W1/ExpenseAgent/app/src/Entitlements/ServicePlans/EADynamics365BusinessCentralDeviceEmbedded.Entitlement.al (releases/29.x)
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
  changes:
    - change/bcapps/9859
object_type: entitlement
object_id: null
name: EA - Dynamics 365 Business Central Device - Embedded
namespace: Microsoft.ExpenseAgent
app: ExpenseAgent
extends: null
first_version: "29"
last_version: "30"
present_in:
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

# Entitlement "EA - Dynamics 365 Business Central Device - Embedded"

> Entitlement "EA - Dynamics 365 Business Central Device - Embedded" in ExpenseAgent (Microsoft.ExpenseAgent). Introduced in BC29, still in BC30.

ExpenseAgent · Microsoft.ExpenseAgent · BC29-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/ExpenseAgent/app/src/Entitlements/ServicePlans/EADynamics365BusinessCentralDeviceEmbedded.Entitlement.al) · facts from BC29

## Recent changes

- 2026-08-04 [#9859 [Master] - Move Expense Agent (Preview) app into BCApps](../../changes/bcapps/9859.md) (main, BC30, feature, added)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "entitlement", object_name: "EA - Dynamics 365 Business Central Device - Embedded")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
