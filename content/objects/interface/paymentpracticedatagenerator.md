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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6c81471e2b0d11659cf49d616067a7df255f76ce3b79c5dccf0d5756f2e16a75
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/PaymentPractices/app/src/Core/Interfaces/PaymentPracticeDataGenerator.Interface.al
    title: src/Apps/W1/PaymentPractices/app/src/Core/Interfaces/PaymentPracticeDataGenerator.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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
---

# Interface "PaymentPracticeDataGenerator"

> Interface "PaymentPracticeDataGenerator" in PaymentPractices (Microsoft.Finance.Analysis). 1 public procedures. Introduced in BC29, still in BC30.

PaymentPractices · Microsoft.Finance.Analysis · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/PaymentPractices/app/src/Core/Interfaces/PaymentPracticeDataGenerator.Interface.al) · facts from BC29

## Procedures

- `GenerateData(var PaymentPracticeData: Record "Payment Practice Data"; PaymentPracticeHeader: Record "Payment Practice Header")`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
