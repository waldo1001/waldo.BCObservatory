---
id: object/interface/expense-agent-quota
type: object
title: Interface "Expense Agent Quota"
summary: Interface "Expense Agent Quota" in ExpenseAgent (Microsoft.ExpenseAgent). 7 public procedures. Introduced in BC30.
tier: official
language: en
tags:
  - interface
  - expenseagent
versions:
  introduced: "30"
  last_changed: null
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T00:18:22.904Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8efdfa9cecbaabc328ec4ed5359db2e008cef03b8a95c69fd81736651b134b26
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d2abc1d2ceae394331716c8183ef60e1534c2ce0/src/Apps/W1/ExpenseAgent/app/src/Consumption/ExpenseAgentQuota.Interface.al
    title: src/Apps/W1/ExpenseAgent/app/src/Consumption/ExpenseAgentQuota.Interface.al (main)
    date: null
    commit: d2abc1d2ceae394331716c8183ef60e1534c2ce0
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
first_version: "30"
last_version: "30"
present_in:
  - "30"
changed_in: []
source_major: "30"
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

> Interface "Expense Agent Quota" in ExpenseAgent (Microsoft.ExpenseAgent). 7 public procedures. Introduced in BC30.

ExpenseAgent · Microsoft.ExpenseAgent · BC30 · [source at d2abc1d2](https://github.com/microsoft/BCApps/blob/d2abc1d2ceae394331716c8183ef60e1534c2ce0/src/Apps/W1/ExpenseAgent/app/src/Consumption/ExpenseAgentQuota.Interface.al) · facts from BC30

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

- [Codeunit 6913 "Expense Agent Quota Impl."](../codeunit/6913.md)

## Recent changes

- 2026-10-26 [#12539 Add Expense Agent consumption V2 and trial support](../../changes/bcapps/12539.md) (main, BC30, feature, added)

## Across versions

- Present in: BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC30 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Expense Agent Quota")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
