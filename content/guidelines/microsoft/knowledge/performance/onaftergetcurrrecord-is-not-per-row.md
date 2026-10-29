---
id: guideline/microsoft/knowledge/performance/onaftergetcurrrecord-is-not-per-row
type: guideline
title: Database work in OnAfterGetCurrRecord is not a per-row or N+1 cost
summary: OnAfterGetCurrRecord fires only when the current/active record changes — typically once when the page opens and once each time the user selects a different row — not once for every row rendered in a list.
tier: official
language: en
tags:
  - onaftergetcurrrecord
  - onaftergetrecord
  - calcfields
  - n-plus-one
  - page-lifecycle
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:17.489Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 928ad027176a2128b3f5a6f20039613569ff6a49
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/onaftergetcurrrecord-is-not-per-row.md
    title: "microsoft/BCQuality: Database work in OnAfterGetCurrRecord is not a per-row or N+1 cost"
    date: "2026-07-21"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/118
repo_path: microsoft/knowledge/performance/onaftergetcurrrecord-is-not-per-row.md
layer: microsoft
kind: rule
domain: performance
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - OnAfterGetCurrRecord
  - CalcFields
  - OnAfterGetRecord
---

# Database work in OnAfterGetCurrRecord is not a per-row or N+1 cost

> OnAfterGetCurrRecord fires only when the current/active record changes — typically once when the page opens and once each time the user selects a different row — not once for every row rendered in a list.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/onaftergetcurrrecord-is-not-per-row.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`OnAfterGetCurrRecord` fires only when the current/active record changes — typically once when the page opens and once each time the user selects a different row — not once for every row rendered in a list. Database work placed there, such as `CalcFields`, `Get`, or a lookup, therefore runs a bounded number of times driven by user navigation, not multiplied by the number of visible rows. This is unlike `OnAfterGetRecord`, which fires once per row as the page loads records and can create a genuine N+1 pattern. Reviewers sometimes see `CalcFields` or a database call inside a page trigger and assume it runs for every row; the trigger name determines whether that assumption holds.

## Best Practice

Before flagging `CalcFields`, `Get`, or a similar database call in a page trigger as a per-row or N+1 problem, confirm the trigger is `OnAfterGetRecord`, which runs per row. Do not flag the same work in `OnAfterGetCurrRecord`: that trigger runs on current-record change, not for every displayed row.

## Anti Pattern

Reporting `CalcFields` or another database call inside `OnAfterGetCurrRecord` as an N+1 or per-row performance defect, or recommending it be moved out "to avoid running once per row". The trigger does not run per row.

## See also

- `calcfields-in-both-getrecord-triggers-is-not-redundant.md` — the lifecycle distinction between the two triggers.

## Names

- [Record.CalcFields(Any \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method) (names CalcFields)

## Changed by

- [#118 knowledge: 3 FP-suppression guards from BC apps negative feedback](../../../../changes/bcquality/118.md), 2026-07-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
