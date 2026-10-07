---
id: object/interface/paymentpracticelinesaggregator
type: object
title: Interface "PaymentPracticeLinesAggregator"
summary: Interface "PaymentPracticeLinesAggregator" in PaymentPractices (Microsoft.Finance.Analysis). 3 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c5cd704029314f1aaff6d63cfe924c4e61b3a23a879640f91e1b34e96bed9136
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/PaymentPractices/app/src/Core/Interfaces/PaymentPracticeLinesAggregator.Interface.al
    title: src/Apps/W1/PaymentPractices/app/src/Core/Interfaces/PaymentPracticeLinesAggregator.Interface.al (releases/29.x)
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
name: PaymentPracticeLinesAggregator
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
  procedures: 3
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "PaymentPracticeLinesAggregator"

> Interface "PaymentPracticeLinesAggregator" in PaymentPractices (Microsoft.Finance.Analysis). 3 public procedures. Introduced in BC29, still in BC30.

PaymentPractices · Microsoft.Finance.Analysis · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/PaymentPractices/app/src/Core/Interfaces/PaymentPracticeLinesAggregator.Interface.al) · facts from BC29

## Procedures

- `PrepareLayout()`
- `GenerateLines(var PaymentPracticeData: Record "Payment Practice Data"; PaymentPracticeHeader: Record "Payment Practice Header")`: Generate the lines for the Payment Practice report based on the Payment Practice Data raw data and Payment Practice Header fields.
- `ValidateHeader(var PaymentPracticeHeader: Record "Payment Practice Header")`: Validate if the Payment Practice Header is suitable for the aggregation type of the header/lines.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
