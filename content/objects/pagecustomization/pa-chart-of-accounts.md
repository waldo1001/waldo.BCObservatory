---
id: object/pagecustomization/pa-chart-of-accounts
type: object
title: Page customization "PA Chart of Accounts"
summary: Page customization "PA Chart of Accounts" in PayablesAgent (Microsoft.Agent.PayablesAgent). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - pagecustomization
  - payablesagent
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
  input_hash: bf75a960d841e3af6d5270b75f5aed7521d7df2675267af73cb7fee558fd0d73
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/dc14cfd1217fbd3fa364b63565e752e5f0653955/src/Apps/W1/PayablesAgent/app/Profile/PageCustomizations/PAChartOfAccounts.PageCust.al
    title: src/Apps/W1/PayablesAgent/app/Profile/PageCustomizations/PAChartOfAccounts.PageCust.al (releases/29.x)
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
    - change/bcapps/7546
  related:
    - to: https://learn.microsoft.com/dynamics365/business-central/finance-chart-of-accounts
      title: Understanding the Chart of Accounts
      label: possibly related
      why: Page documents chart of accounts structure accessed via payables agent customization.
      by: model
object_type: pagecustomization
object_id: null
name: PA Chart of Accounts
namespace: Microsoft.Agent.PayablesAgent
app: PayablesAgent
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

# Page customization "PA Chart of Accounts"

> Page customization "PA Chart of Accounts" in PayablesAgent (Microsoft.Agent.PayablesAgent). Introduced in BC29, still in BC30.

PayablesAgent · Microsoft.Agent.PayablesAgent · BC29-30 · [source at dc14cfd1](https://github.com/microsoft/BCApps/blob/dc14cfd1217fbd3fa364b63565e752e5f0653955/src/Apps/W1/PayablesAgent/app/Profile/PageCustomizations/PAChartOfAccounts.PageCust.al) · facts from BC29

## Recent changes

- 2026-08-18 [#7546 [Payables Agent] Agent-driven line matching](../../changes/bcapps/7546.md) (main, BC30, feature, added)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [Understanding the Chart of Accounts](https://learn.microsoft.com/dynamics365/business-central/finance-chart-of-accounts) — possibly related: Page documents chart of accounts structure accessed via payables agent customization. (model-linked)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "pagecustomization", object_name: "PA Chart of Accounts")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
