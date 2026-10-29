---
id: guideline/microsoft/knowledge/performance/order-case-branches-by-frequency
type: guideline
title: Order case branches by frequency
summary: AL documentation does not guarantee that a case statement uses a linear comparison strategy, so branch frequency alone is not proof of a performance issue. Reordering is justified only when profiling on the target runtime shows that a large, heavily skewed case is a material hot path.
tier: official
language: en
tags:
  - case
  - branch
  - frequency
  - control-flow
  - hot-path
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:42.888Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: dd327e96dba5d3da961653e2929af21abebb1e41
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/order-case-branches-by-frequency.md
    title: "microsoft/BCQuality: Order case branches by frequency"
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
    - change/bcquality/94
repo_path: microsoft/knowledge/performance/order-case-branches-by-frequency.md
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
identifiers: []
---

# Order case branches by frequency

> AL documentation does not guarantee that a case statement uses a linear comparison strategy, so branch frequency alone is not proof of a performance issue. Reordering is justified only when profiling on the target runtime shows that a large, heavily skewed case is a material hot path.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/order-case-branches-by-frequency.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

AL documentation does not guarantee that a `case` statement uses a linear comparison strategy, so branch frequency alone is not proof of a performance issue. Reordering is justified only when profiling on the target runtime shows that a large, heavily skewed `case` is a material hot path. It is not a default review finding.

## Best Practice

After profiling confirms the comparison path matters and the runtime frequency is known, list common branches first without changing the set of handled values, fallback behavior, or branch bodies.

See sample: [`order-case-branches-by-frequency.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/order-case-branches-by-frequency.good.al).

## Anti Pattern

Reordering branches based on assumed frequency without profiling, or changing an `else` arm or handled value while making the optimization. The good and bad forms must differ only in branch order.

See sample: [`order-case-branches-by-frequency.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/order-case-branches-by-frequency.bad.al).

## Examples

- [Good: order-case-branches-by-frequency.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/order-case-branches-by-frequency.good.al)
- [Bad: order-case-branches-by-frequency.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/order-case-branches-by-frequency.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#94 Correct performance knowledge guidance](../../../../changes/bcquality/94.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
