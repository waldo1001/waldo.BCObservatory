---
id: object/interface/paymentpracticeschemehandler
type: object
title: Interface "PaymentPracticeSchemeHandler"
summary: Interface "PaymentPracticeSchemeHandler" in PaymentPractices (Microsoft.Finance.Analysis). 4 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 51f72d6a7b6e90544f375e11578b38416aca795d8b4876983cd455958bba44e1
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/PaymentPractices/app/src/Core/Interfaces/PaymentPracticeSchemeHandler.Interface.al
    title: src/Apps/W1/PaymentPractices/app/src/Core/Interfaces/PaymentPracticeSchemeHandler.Interface.al (releases/29.x)
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
name: PaymentPracticeSchemeHandler
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
  procedures: 4
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "PaymentPracticeSchemeHandler"

> Interface "PaymentPracticeSchemeHandler" in PaymentPractices (Microsoft.Finance.Analysis). 4 public procedures. Introduced in BC29, still in BC30.

PaymentPractices · Microsoft.Finance.Analysis · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/PaymentPractices/app/src/Core/Interfaces/PaymentPracticeSchemeHandler.Interface.al) · facts from BC29

## Procedures

- `ValidateHeader(var PaymentPracticeHeader: Record "Payment Practice Header")`
- `UpdatePaymentPracData(var PaymentPracticeData: Record "Payment Practice Data"): Boolean`: Enriches or filters a Payment Practice Data row before insertion. Returns true to include the row, false to skip it.
- `CalculateHeaderTotals(var PaymentPracticeHeader: Record "Payment Practice Header"; var PaymentPracticeData: Record "Payment Practice Data")`: Calculates scheme-specific header totals after standard totals are generated.
- `CalculateLineTotals(var PaymentPracticeLine: Record "Payment Practice Line"; var PaymentPracticeData: Record "Payment Practice Data")`: Calculates scheme-specific line totals for the currently visible slice of data. The caller is responsible for applying any filters (period, company size, etc.) on PaymentPracticeData before invoking this method, and for restoring them afterwards.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
