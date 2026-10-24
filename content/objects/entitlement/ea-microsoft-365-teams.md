---
id: object/entitlement/ea-microsoft-365-teams
type: object
title: Entitlement "EA - Microsoft 365 Teams"
summary: Entitlement "EA - Microsoft 365 Teams" in ExpenseAgent (Microsoft.ExpenseAgent). Introduced in BC29, still in BC30.
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
  at: "2026-10-24T01:15:39.036Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ffffd47953d44402bc2bef80adfc9c8c2f20e3e51efcddfb190afaa0d631f78b
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/dc14cfd1217fbd3fa364b63565e752e5f0653955/src/Apps/W1/ExpenseAgent/app/src/Entitlements/ServicePlans/EAMicrosoft365Teams.Entitlement.al
    title: src/Apps/W1/ExpenseAgent/app/src/Entitlements/ServicePlans/EAMicrosoft365Teams.Entitlement.al (releases/29.x)
    date: null
    commit: dc14cfd1217fbd3fa364b63565e752e5f0653955
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
  related:
    - to: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent
      title: Expense Agent overview for Business Central
      label: possibly related
      why: Expense Agent overview documents Teams users' access to expense submission and management.
      by: model
    - to: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-mobile-app
      title: Use the Expense Agent Mobile App (preview)
      label: possibly related
      why: Mobile app documentation covers Teams users' expense capture and submission capabilities.
      by: model
object_type: entitlement
object_id: null
name: EA - Microsoft 365 Teams
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

# Entitlement "EA - Microsoft 365 Teams"

> Entitlement "EA - Microsoft 365 Teams" in ExpenseAgent (Microsoft.ExpenseAgent). Introduced in BC29, still in BC30.

ExpenseAgent · Microsoft.ExpenseAgent · BC29-30 · [source at dc14cfd1](https://github.com/microsoft/BCApps/blob/dc14cfd1217fbd3fa364b63565e752e5f0653955/src/Apps/W1/ExpenseAgent/app/src/Entitlements/ServicePlans/EAMicrosoft365Teams.Entitlement.al) · facts from BC29

## Recent changes

- 2026-08-04 [#9859 [Master] - Move Expense Agent (Preview) app into BCApps](../../changes/bcapps/9859.md) (main, BC30, feature, added)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [Expense Agent overview for Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent) — possibly related: Expense Agent overview documents Teams users' access to expense submission and management. (model-linked)
- [Use the Expense Agent Mobile App (preview)](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-mobile-app) — possibly related: Mobile app documentation covers Teams users' expense capture and submission capabilities. (model-linked)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "entitlement", object_name: "EA - Microsoft 365 Teams")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
