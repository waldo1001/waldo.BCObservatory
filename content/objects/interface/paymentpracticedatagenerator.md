---
id: object/interface/paymentpracticedatagenerator
type: object
title: Interface "PaymentPracticeDataGenerator"
summary: Interface "PaymentPracticeDataGenerator" in PaymentPractices (Microsoft.Finance.Analysis). 1 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - paymentpractices
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
  input_hash: 6c81471e2b0d11659cf49d616067a7df255f76ce3b79c5dccf0d5756f2e16a75
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/PaymentPractices/app/src/Core/Interfaces/PaymentPracticeDataGenerator.Interface.al
    title: src/Apps/W1/PaymentPractices/app/src/Core/Interfaces/PaymentPracticeDataGenerator.Interface.al (releases/29.x)
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
name: PaymentPracticeDataGenerator
namespace: Microsoft.Finance.Analysis
app: PaymentPractices
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
  procedures: 1
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

# Interface "PaymentPracticeDataGenerator"

> Interface "PaymentPracticeDataGenerator" in PaymentPractices (Microsoft.Finance.Analysis). 1 public procedures. Introduced in BC29, still in BC30.

PaymentPractices · Microsoft.Finance.Analysis · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/PaymentPractices/app/src/Core/Interfaces/PaymentPracticeDataGenerator.Interface.al) · facts from BC29

## Procedures

- `GenerateData(var PaymentPracticeData: Record "Payment Practice Data"; PaymentPracticeHeader: Record "Payment Practice Header")`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "PaymentPracticeDataGenerator")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
