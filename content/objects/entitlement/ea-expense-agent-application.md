---
id: object/entitlement/ea-expense-agent-application
type: object
title: Entitlement "EA - Expense Agent Application"
summary: Entitlement "EA - Expense Agent Application" in ExpenseAgent (Microsoft.ExpenseAgent). Introduced in BC29, still in BC30.
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
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b3e2915981a2f22e1a13d542d596becd5b46898bb9272e251cbd11c8e1a78eb0
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/ExpenseAgent/app/src/Entitlements/Applications/EAExpenseAgentApplication.Entitlement.al
    title: src/Apps/W1/ExpenseAgent/app/src/Entitlements/Applications/EAExpenseAgentApplication.Entitlement.al (releases/29.x)
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
  changes:
    - change/bcapps/9859
object_type: entitlement
object_id: null
name: EA - Expense Agent Application
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

# Entitlement "EA - Expense Agent Application"

> Entitlement "EA - Expense Agent Application" in ExpenseAgent (Microsoft.ExpenseAgent). Introduced in BC29, still in BC30.

ExpenseAgent · Microsoft.ExpenseAgent · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/ExpenseAgent/app/src/Entitlements/Applications/EAExpenseAgentApplication.Entitlement.al) · facts from BC29

## Recent changes

- 2026-08-04 [#9859 [Master] - Move Expense Agent (Preview) app into BCApps](../../changes/bcapps/9859.md) (main, BC30, feature, added)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "entitlement", object_name: "EA - Expense Agent Application")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
