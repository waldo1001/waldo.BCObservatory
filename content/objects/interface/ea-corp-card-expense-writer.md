---
id: object/interface/ea-corp-card-expense-writer
type: object
title: Interface "EA Corp Card Expense Writer"
summary: Interface "EA Corp Card Expense Writer" in ExpenseAgent (Microsoft.ExpenseAgent). 2 public procedures. Introduced in BC29, gone after BC29.
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
  input_hash: 23d831b8176f4fa11127d010cf919b24fd51200c7ebb29edf551d1ab4d737a5b
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/30498f50fecbd814d09f7d6e125190fc95d6c7f2/src/Apps/W1/ExpenseAgent/app/src/CorporateCard/Interfaces/EACorpCardExpenseWriter.Interface.al
    title: src/Apps/W1/ExpenseAgent/app/src/CorporateCard/Interfaces/EACorpCardExpenseWriter.Interface.al (releases/29.x)
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
object_type: interface
object_id: null
name: EA Corp Card Expense Writer
namespace: Microsoft.ExpenseAgent
app: ExpenseAgent
extends: null
first_version: "29"
last_version: "29"
present_in:
  - "29"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 2
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
  implemented_by: 0
---

# Interface "EA Corp Card Expense Writer"

> Interface "EA Corp Card Expense Writer" in ExpenseAgent (Microsoft.ExpenseAgent). 2 public procedures. Introduced in BC29, gone after BC29.

ExpenseAgent · Microsoft.ExpenseAgent · BC29 · [source at 30498f50](https://github.com/microsoft/BCApps/blob/30498f50fecbd814d09f7d6e125190fc95d6c7f2/src/Apps/W1/ExpenseAgent/app/src/CorporateCard/Interfaces/EACorpCardExpenseWriter.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `CreateDraftFromTrans(var CorpCardTrans: Record "EA Corp Card Trans"; var ExpenseNo: Code[20])`
- `LinkPosted(var CorpCardTrans: Record "EA Corp Card Trans"; PostedDocNo: Code[20])`

## Across versions

- Present in: BC29
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "EA Corp Card Expense Writer")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
