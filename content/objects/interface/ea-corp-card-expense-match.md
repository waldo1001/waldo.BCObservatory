---
id: object/interface/ea-corp-card-expense-match
type: object
title: Interface "EA Corp Card Expense Match"
summary: Interface "EA Corp Card Expense Match" in ExpenseAgent (Microsoft.ExpenseAgent). 3 public procedures. Introduced in BC29, gone after BC29.
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
  at: "2026-11-28T00:55:56.881Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 52912318535f0feda1bcedb75703e2ffb9926b2b6192f196bc6a490e3adf3583
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/baedf68df311071024c0711fde8b1fbac33ec290/src/Apps/W1/ExpenseAgent/app/src/CorporateCard/Interfaces/EACorpCardExpenseMatch.Interface.al
    title: src/Apps/W1/ExpenseAgent/app/src/CorporateCard/Interfaces/EACorpCardExpenseMatch.Interface.al (releases/29.x)
    date: null
    commit: baedf68df311071024c0711fde8b1fbac33ec290
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
name: EA Corp Card Expense Match
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
  procedures: 3
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

# Interface "EA Corp Card Expense Match"

> Interface "EA Corp Card Expense Match" in ExpenseAgent (Microsoft.ExpenseAgent). 3 public procedures. Introduced in BC29, gone after BC29.

ExpenseAgent · Microsoft.ExpenseAgent · BC29 · [source at baedf68d](https://github.com/microsoft/BCApps/blob/baedf68df311071024c0711fde8b1fbac33ec290/src/Apps/W1/ExpenseAgent/app/src/CorporateCard/Interfaces/EACorpCardExpenseMatch.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `MatchExistingExpense(CorpCardTrans: Record "EA Corp Card Trans"; var MatchedDocumentId: RecordId): Boolean`
- `LinkExpense(var CorpCardTrans: Record "EA Corp Card Trans"; MatchedDocumentId: RecordId)`
- `LinkExpense(var CorpCardTrans: Record "EA Corp Card Trans"; ExpenseNo: Code[20])`

## Across versions

- Present in: BC29
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "EA Corp Card Expense Match")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
