---
id: object/interface/expense-agent-quota
type: object
title: Interface "Expense Agent Quota"
summary: Interface "Expense Agent Quota" in ExpenseAgent (Microsoft.ExpenseAgent). 7 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
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
  at: "2026-11-26T00:52:49.089Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2e45cc042a2921f18957cca06a41db517d3e4bfe4e0be418be9ceb84593b7f30
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/30498f50fecbd814d09f7d6e125190fc95d6c7f2/src/Apps/W1/ExpenseAgent/app/src/Consumption/ExpenseAgentQuota.Interface.al
    title: src/Apps/W1/ExpenseAgent/app/src/Consumption/ExpenseAgentQuota.Interface.al (releases/29.x)
    date: null
    commit: 30498f50fecbd814d09f7d6e125190fc95d6c7f2
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
    - change/bcapps/12539
object_type: interface
object_id: null
name: Expense Agent Quota
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
  procedures: 7
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
  implemented_by: 1
---

# Interface "Expense Agent Quota"

> Interface "Expense Agent Quota" in ExpenseAgent (Microsoft.ExpenseAgent). 7 public procedures. Introduced in BC29, still in BC30.

ExpenseAgent · Microsoft.ExpenseAgent · BC29-30 · [source at 30498f50](https://github.com/microsoft/BCApps/blob/30498f50fecbd814d09f7d6e125190fc95d6c7f2/src/Apps/W1/ExpenseAgent/app/src/Consumption/ExpenseAgentQuota.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `IsTrialStarted(): Boolean`
- `GetRemainingTrialQuota(): Integer`
- `TrialQuotaAvailable(): Boolean`
- `CanConsumePaidQuota(): Boolean`
- `IsConsumptionLogged(UniqueId: Text[1024]): Boolean`
- `ReportTrialConsumption(ConsumptionId: Guid; Quota: Integer)`
- `LogPaidConsumption(Usage: Integer; CopilotQuotaUsageType: Enum "Copilot Quota Usage Type"; ActionsSummary: Text[1024]; ActionsDescription: Text; UniqueId: Text[1024])`

## Implemented by

- [Codeunit 6923 "Expense Agent Quota Impl."](../codeunit/6923.md)

## Recent changes

- 2026-10-26 [#12539 Add Expense Agent consumption V2 and trial support](../../changes/bcapps/12539.md) (main, BC30, feature, added)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Expense Agent Quota")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
