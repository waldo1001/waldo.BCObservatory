---
id: object/interface/retention-period
type: object
title: Interface "Retention Period"
summary: Interface "Retention Period" in System Application (System.DataAdministration). 5 public procedures. Present since at least BC23, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: null
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
  input_hash: 3a0fbd2f47d74fb9c709048f95e8d57336c9993c6a7f97d058e76e05e3ed5e87
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Retention%20Policy/src/Retention%20Period/RetentionPeriod.Interface.al
    title: src/System Application/App/Retention Policy/src/Retention Period/RetentionPeriod.Interface.al (releases/29.x)
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
object_type: interface
object_id: null
name: Retention Period
namespace: System.DataAdministration
app: System Application
extends: null
first_version: "23"
last_version: "30"
present_in:
  - "23"
  - "24"
  - "25"
  - "26"
  - "27"
  - "28"
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 5
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
  implemented_by: 3
---

# Interface "Retention Period"

> Interface "Retention Period" in System Application (System.DataAdministration). 5 public procedures. Present since at least BC23, still in BC30.

System Application · System.DataAdministration · BC23-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Retention%20Policy/src/Retention%20Period/RetentionPeriod.Interface.al) · facts from BC29

## Procedures

- `RetentionPeriodDateFormula(RetentionPeriod: Record "Retention Period"): Text`
- `RetentionPeriodDateFormula(RetentionPeriod: Record "Retention Period"; Translated: Boolean): Text`: Returns the date formula for a given retention period.
- `CalculateExpirationDate(RetentionPeriod: Record "Retention Period"): Date`: Returns the expiration date for a given retention period.
- `CalculateExpirationDate(RetentionPeriod: Record "Retention Period"; UseDate: Date): Date`: Returns the expiration date for a given retention period.
- `CalculateExpirationDate(RetentionPeriod: Record "Retention Period"; UseDateTime: DateTime): DateTime`: Returns the expiration date and time for a given retention period.

## Implemented by

- [Codeunit 3900 "Retention Period Impl."](../codeunit/3900.md)
- [Codeunit 3901 "Retention Period Custom Impl."](../codeunit/3901.md)
- [Enum 3900 "Retention Period Enum"](../enum/3900.md)

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Retention Period")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
