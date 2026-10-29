---
id: guideline/microsoft/knowledge/performance/avoid-currpage-update-in-onaftergetrecord
type: guideline
title: Do not call CurrPage.Update inside OnAfterGetRecord
summary: OnAfterGetRecord on a list already runs once per visible row on scroll and refresh. CurrPage.Update asks the page to reload, which fires those triggers again. The result is a refresh loop or a stutter on every row paint.
tier: official
language: en
tags:
  - currpage-update
  - onaftergetrecord
  - list-page
  - scroll
  - refresh
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:35.099Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 5790a6c8ff967a8354fcfd418cf941db402ddada
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-currpage-update-in-onaftergetrecord.md
    title: "microsoft/BCQuality: Do not call CurrPage.Update inside OnAfterGetRecord"
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
    - change/bcquality/153
repo_path: microsoft/knowledge/performance/avoid-currpage-update-in-onaftergetrecord.md
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
  - OnAction
  - OnAfterGetCurrRecord
---

# Do not call CurrPage.Update inside OnAfterGetRecord

> OnAfterGetRecord on a list already runs once per visible row on scroll and refresh. CurrPage.Update asks the page to reload, which fires those triggers again. The result is a refresh loop or a stutter on every row paint.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-currpage-update-in-onaftergetrecord.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

`OnAfterGetRecord` on a list already runs once per visible row on scroll and refresh. `CurrPage.Update` asks the page to reload, which fires those triggers again. The result is a refresh loop or a stutter on every row paint. Official developer performance guidance lists `CurrPage.Update()` in `OnAfterGetRecord` next to `Modify` as work that must not live there. Sibling of `do-not-modify-in-onaftergetrecord.md` (writes); this file is the client refresh half.

## Best Practice

Put display-only results in page variables assigned in `OnAfterGetRecord` without calling `Update`. If the page must refresh after an action, call `CurrPage.Update(false)` from `OnAction` once, not per row.

See sample: [`avoid-currpage-update-in-onaftergetrecord.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-currpage-update-in-onaftergetrecord.good.al).

## Anti Pattern

`trigger OnAfterGetRecord() begin ... CurrPage.Update(); end;` on a list. The signal is `CurrPage.Update` inside `OnAfterGetRecord` or `OnAfterGetCurrRecord` without an explicit user action.

See sample: [`avoid-currpage-update-in-onaftergetrecord.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-currpage-update-in-onaftergetrecord.bad.al).

## Examples

- [Good: avoid-currpage-update-in-onaftergetrecord.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-currpage-update-in-onaftergetrecord.good.al)
- [Bad: avoid-currpage-update-in-onaftergetrecord.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-currpage-update-in-onaftergetrecord.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
