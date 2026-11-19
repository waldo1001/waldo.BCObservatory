---
id: object/interface/ea-corp-card-provider
type: object
title: Interface "EA Corp Card Provider"
summary: Interface "EA Corp Card Provider" in ExpenseAgent (Microsoft.ExpenseAgent). 3 public procedures. Introduced in BC29, gone after BC29.
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
  at: "2026-11-19T00:47:08.789Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4af9539d0bba065bd04383c32935c6cd88270356e755fb281ac8068067dc29d3
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/8df2ba47b62fdf6e6189524d4680b9bfb49bb553/src/Apps/W1/ExpenseAgent/app/src/CorporateCard/Interfaces/EACorpCardProvider.Interface.al
    title: src/Apps/W1/ExpenseAgent/app/src/CorporateCard/Interfaces/EACorpCardProvider.Interface.al (releases/29.x)
    date: null
    commit: 8df2ba47b62fdf6e6189524d4680b9bfb49bb553
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
name: EA Corp Card Provider
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
  implemented_by: 2
---

# Interface "EA Corp Card Provider"

> Interface "EA Corp Card Provider" in ExpenseAgent (Microsoft.ExpenseAgent). 3 public procedures. Introduced in BC29, gone after BC29.

ExpenseAgent · Microsoft.ExpenseAgent · BC29 · [source at 8df2ba47](https://github.com/microsoft/BCApps/blob/8df2ba47b62fdf6e6189524d4680b9bfb49bb553/src/Apps/W1/ExpenseAgent/app/src/CorporateCard/Interfaces/EACorpCardProvider.Interface.al) · facts from BC29

## Procedures

- `Download(var CorpCardStatement: Record "EA Corp Card Statement")`
- `ParseToStaging(StatementEntryNo: Integer)`
- `Ack(StatementEntryNo: Integer)`

## Implemented by

- [Codeunit 7434 "EA Corp Card Data Exch Prov"](../codeunit/7434.md)
- [Enum 7430 "EA Corp Card Feed Type"](../enum/7430.md)

## Across versions

- Present in: BC29
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "EA Corp Card Provider")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
