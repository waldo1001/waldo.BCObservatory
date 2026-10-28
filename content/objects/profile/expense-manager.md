---
id: object/profile/expense-manager
type: object
title: Profile "EXPENSE MANAGER"
summary: Profile "EXPENSE MANAGER" in ExpenseAgent (Microsoft.ExpenseAgent). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - profile
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
  at: "2026-10-28T10:42:34.480Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 142d0ee0ee1728032b66289491c618f319f6e312254f72b3e09117c9b50835e2
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/4c1c1638beb6d5da8540cc1f61889b80c7b3356f/src/Apps/W1/ExpenseAgent/app/src/Common/Profiles/ExpenseManager.Profile.al
    title: src/Apps/W1/ExpenseAgent/app/src/Common/Profiles/ExpenseManager.Profile.al (releases/29.x)
    date: null
    commit: 4c1c1638beb6d5da8540cc1f61889b80c7b3356f
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
    - to: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-configuration-page
      title: Set Up Expense Agent in Business Central
      label: possibly related
      why: Documents Expense Agent setup and configuration in Business Central
      by: model
object_type: profile
object_id: null
name: EXPENSE MANAGER
caption: Expense Manager
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

# Profile "EXPENSE MANAGER"

> Profile "EXPENSE MANAGER" in ExpenseAgent (Microsoft.ExpenseAgent). Introduced in BC29, still in BC30.

ExpenseAgent · Microsoft.ExpenseAgent · captioned "Expense Manager" · BC29-30 · [source at 4c1c1638](https://github.com/microsoft/BCApps/blob/4c1c1638beb6d5da8540cc1f61889b80c7b3356f/src/Apps/W1/ExpenseAgent/app/src/Common/Profiles/ExpenseManager.Profile.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Caption | Expense Manager |

## Recent changes

- 2026-08-04 [#9859 [Master] - Move Expense Agent (Preview) app into BCApps](../../changes/bcapps/9859.md) (main, BC30, feature, added)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [Set Up Expense Agent in Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-configuration-page) — possibly related: Documents Expense Agent setup and configuration in Business Central (model-linked)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "profile", object_name: "EXPENSE MANAGER")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
