---
id: guideline/microsoft/knowledge/performance/do-not-modify-in-onaftergetrecord
type: guideline
title: Do not Modify inside OnAfterGetRecord
summary: A list page's OnAfterGetRecord fires once per visible row, every time the user scrolls, sorts, or refreshes. A Modify inside that trigger means a database write per row displayed. Per the upstream guidance, "Modify() here means a DB write on every scroll.
tier: official
language: en
tags:
  - page-trigger
  - onaftergetrecord
  - modify
  - display
  - scroll
  - db-write
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:41.232Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a30ada9747d7e9b53fd4e99142f1c9072b49a83f
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-modify-in-onaftergetrecord.md
    title: "microsoft/BCQuality: Do not Modify inside OnAfterGetRecord"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
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
    - change/bcquality/174
repo_path: microsoft/knowledge/performance/do-not-modify-in-onaftergetrecord.md
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
examples: 2
identifiers:
  - OnAfterGetRecord
  - OnAfterGetCurrRecord
  - OnOpenPage
  - OnInit
  - OnAction
  - OnQueryClosePage
---

# Do not Modify inside OnAfterGetRecord

> A list page's OnAfterGetRecord fires once per visible row, every time the user scrolls, sorts, or refreshes. A Modify inside that trigger means a database write per row displayed. Per the upstream guidance, "Modify() here means a DB write on every scroll.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-modify-in-onaftergetrecord.md) · microsoft layer · performance · BC all · tier official · derived

## Description

A list page's `OnAfterGetRecord` fires once per visible row, every time the user scrolls, sorts, or refreshes. A `Modify` inside that trigger means a database write per row displayed. Per the upstream guidance, "`Modify()` here means a DB write on every scroll. Use page variables for display-only state instead." `OnAfterGetCurrRecord` (single record on selection), `OnOpenPage`, and `OnInit` fire once or at much lower frequency and tolerate one-time setup logic.

## Best Practice

When the trigger needs to compute display-only state per row, write the result into a page variable (a global on the page object) rather than back to the database. Reserve `Modify` for triggers that fire on an explicit user action — `OnAction`, validation triggers, `OnQueryClosePage` — where one action maps to one write.

See sample: [`do-not-modify-in-onaftergetrecord.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-modify-in-onaftergetrecord.good.al).

## Anti Pattern

`trigger OnAfterGetRecord() begin Rec."Warning Flag" := CalcWarning(); Rec.Modify(); end;` — on a list page over a moderately sized table, scrolling through fifty rows produces fifty writes. The page feels slow, the table accumulates churn, and the warning flag — which is recomputed on every refresh anyway — never needed persistence.

See sample: [`do-not-modify-in-onaftergetrecord.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-modify-in-onaftergetrecord.bad.al).

## Examples

- [Good: do-not-modify-in-onaftergetrecord.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-modify-in-onaftergetrecord.good.al)
- [Bad: do-not-modify-in-onaftergetrecord.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-modify-in-onaftergetrecord.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
