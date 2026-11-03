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
  at: "2026-11-03T00:49:14.469Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d155255dbc460fc12de1418917ffdb6b185d7a8612a203820d78b67364cf53d6
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d992339dbf106bf2412e17518329e128634f2951/src/Apps/W1/ExpenseAgent/app/src/Consumption/ExpenseAgentQuota.Interface.al
    title: src/Apps/W1/ExpenseAgent/app/src/Consumption/ExpenseAgentQuota.Interface.al (releases/29.x)
    date: null
    commit: d992339dbf106bf2412e17518329e128634f2951
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

ExpenseAgent · Microsoft.ExpenseAgent · BC29-30 · [source at d992339d](https://github.com/microsoft/BCApps/blob/d992339dbf106bf2412e17518329e128634f2951/src/Apps/W1/ExpenseAgent/app/src/Consumption/ExpenseAgentQuota.Interface.al) · facts from BC29

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

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Expense Agent Quota")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
