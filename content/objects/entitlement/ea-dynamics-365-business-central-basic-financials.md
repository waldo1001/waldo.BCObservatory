---
id: object/entitlement/ea-dynamics-365-business-central-basic-financials
type: object
title: Entitlement "EA - Dynamics 365 Business Central Basic Financials"
summary: Entitlement "EA - Dynamics 365 Business Central Basic Financials" in ExpenseAgent (Microsoft.ExpenseAgent). Introduced in BC29, still in BC30.
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
  input_hash: 4ede8f6f09792e2b89af20838e9efffe40649db35b8bca5d00cc024cb358ef95
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/dc14cfd1217fbd3fa364b63565e752e5f0653955/src/Apps/W1/ExpenseAgent/app/src/Entitlements/ServicePlans/EADynamics365BusinessCentralBasicFinancials.Entitlement.al
    title: src/Apps/W1/ExpenseAgent/app/src/Entitlements/ServicePlans/EADynamics365BusinessCentralBasicFinancials.Entitlement.al (releases/29.x)
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
      why: Documents Expense Agent automated expense management functionality.
      by: model
    - to: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-configuration-page
      title: Set Up Expense Agent in Business Central
      label: possibly related
      why: Documents Expense Agent setup and configuration for users.
      by: model
object_type: entitlement
object_id: null
name: EA - Dynamics 365 Business Central Basic Financials
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

# Entitlement "EA - Dynamics 365 Business Central Basic Financials"

> Entitlement "EA - Dynamics 365 Business Central Basic Financials" in ExpenseAgent (Microsoft.ExpenseAgent). Introduced in BC29, still in BC30.

ExpenseAgent · Microsoft.ExpenseAgent · BC29-30 · [source at dc14cfd1](https://github.com/microsoft/BCApps/blob/dc14cfd1217fbd3fa364b63565e752e5f0653955/src/Apps/W1/ExpenseAgent/app/src/Entitlements/ServicePlans/EADynamics365BusinessCentralBasicFinancials.Entitlement.al) · facts from BC29

## Recent changes

- 2026-08-04 [#9859 [Master] - Move Expense Agent (Preview) app into BCApps](../../changes/bcapps/9859.md) (main, BC30, feature, added)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [Expense Agent overview for Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent) — possibly related: Documents Expense Agent automated expense management functionality. (model-linked)
- [Set Up Expense Agent in Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-configuration-page) — possibly related: Documents Expense Agent setup and configuration for users. (model-linked)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "entitlement", object_name: "EA - Dynamics 365 Business Central Basic Financials")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
