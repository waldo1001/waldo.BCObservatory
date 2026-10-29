---
id: guideline/microsoft/knowledge/performance/use-isempty-for-existence-check
type: guideline
title: Use IsEmpty for existence checks, not Count() or FindFirst()
summary: When the caller only needs to know whether any row matches a filter, IsEmpty() is the API designed for the question. Per the upstream guidance, "IsEmpty() is more efficient as it stops at first record found."
tier: official
language: en
tags:
  - isempty
  - count
  - findfirst
  - existence-check
  - exists
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:43.929Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: cfa2dc1222132f0858c6a8be09f253e2a84005f7
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-isempty-for-existence-check.md
    title: "microsoft/BCQuality: Use IsEmpty for existence checks, not Count() or FindFirst()"
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
repo_path: microsoft/knowledge/performance/use-isempty-for-existence-check.md
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
  - IsEmpty
  - SetRange
  - SetFilter
  - FindFirst
---

# Use IsEmpty for existence checks, not Count() or FindFirst()

> When the caller only needs to know whether any row matches a filter, IsEmpty() is the API designed for the question. Per the upstream guidance, "IsEmpty() is more efficient as it stops at first record found."

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-isempty-for-existence-check.md) · microsoft layer · performance · BC all · tier official · derived

## Description

When the caller only needs to know whether any row matches a filter, `IsEmpty()` is the API designed for the question. Per the upstream guidance, "`IsEmpty()` is more efficient as it stops at first record found." `Count() > 0` materializes a count the caller does not need; `FindFirst()` materializes a row the caller does not need. Both do work that `IsEmpty` does not.

## Best Practice

Phrase existence checks as `if not Record.IsEmpty() then ...` (or `if Record.IsEmpty() then ...` for the negative). Apply filters via `SetRange`/`SetFilter` before the call so the existence check runs against the intended subset. Reserve `Count` for cases where the actual number matters and `FindFirst` for cases where the record fields are read.

See sample: [`use-isempty-for-existence-check.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-isempty-for-existence-check.good.al).

## Anti Pattern

`if Customer.Count() > 0 then ...` and `if Customer.FindFirst() then ...` (when the record is discarded) — both are flagged by the upstream guidance as the wrong tool. The first asks the database for the full count; the second asks for a row's fields. Both answers go unused.

See sample: [`use-isempty-for-existence-check.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-isempty-for-existence-check.bad.al).

## Examples

- [Good: use-isempty-for-existence-check.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-isempty-for-existence-check.good.al)
- [Bad: use-isempty-for-existence-check.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-isempty-for-existence-check.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
