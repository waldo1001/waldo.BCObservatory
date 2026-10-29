---
id: guideline/microsoft/knowledge/performance/changecompany-in-loop-drops-caches
type: guideline
title: Do not call ChangeCompany inside a per-row loop
summary: ChangeCompany retargets a record variable to another company's data and drops the in-memory caches bound to the previous company. Calling it once per row in a multi-company scan therefore pays a cache reset on every iteration, even when consecutive rows share a company.
tier: official
language: en
tags:
  - changecompany
  - loop
  - cache
  - multi-company
  - isolation
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:35.903Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 5946e42ce8694867016089821ed1a438c3c88dd7
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/changecompany-in-loop-drops-caches.md
    title: "microsoft/BCQuality: Do not call ChangeCompany inside a per-row loop"
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
repo_path: microsoft/knowledge/performance/changecompany-in-loop-drops-caches.md
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
  - ChangeCompany
  - FindSet
---

# Do not call ChangeCompany inside a per-row loop

> ChangeCompany retargets a record variable to another company's data and drops the in-memory caches bound to the previous company. Calling it once per row in a multi-company scan therefore pays a cache reset on every iteration, even when consecutive rows share a company.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/changecompany-in-loop-drops-caches.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

`ChangeCompany` retargets a record variable to another company's data and drops the in-memory caches bound to the previous company. Calling it once per row in a multi-company scan therefore pays a cache reset on every iteration, even when consecutive rows share a company. Agents treat `ChangeCompany` like a filter. It is an isolation switch.

## Best Practice

Group work by company. Call `ChangeCompany` once per distinct company, then `FindSet`/`Get` that company's rows. If the record variable is reused afterward, call `ChangeCompany()` without a company name to redirect it back to the current company.

See sample: [`changecompany-in-loop-drops-caches.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/changecompany-in-loop-drops-caches.good.al).

## Anti Pattern

`repeat Rec.ChangeCompany(Buffer.Company); Rec.Get(Buffer."No."); until Buffer.Next() = 0` when `Buffer` is not ordered by company, or even when it is — if `ChangeCompany` still runs every row. The signal is `ChangeCompany` inside `repeat`/`while` keyed by a document line rather than by a company loop.

See sample: [`changecompany-in-loop-drops-caches.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/changecompany-in-loop-drops-caches.bad.al).

## Examples

- [Good: changecompany-in-loop-drops-caches.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/changecompany-in-loop-drops-caches.good.al)
- [Bad: changecompany-in-loop-drops-caches.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/changecompany-in-loop-drops-caches.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
