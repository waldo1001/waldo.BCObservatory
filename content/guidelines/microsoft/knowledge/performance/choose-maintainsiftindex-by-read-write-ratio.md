---
id: guideline/microsoft/knowledge/performance/choose-maintainsiftindex-by-read-write-ratio
type: guideline
title: Choose MaintainSIFTIndex by read-write ratio
summary: MaintainSIFTIndex on a key decides whether SQL Server maintains the SIFT indexed view as underlying rows change. With Yes, writes that affect the key or sum fields also maintain the indexed aggregate.
tier: official
language: en
tags:
  - maintainsiftindex
  - sift
  - calcsums
  - flowfield
  - write-cost
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:35.933Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1a60051d534bc165237c37e0325f4d0054130fa4
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/choose-maintainsiftindex-by-read-write-ratio.md
    title: "microsoft/BCQuality: Choose MaintainSIFTIndex by read-write ratio"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcsums-method
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
repo_path: microsoft/knowledge/performance/choose-maintainsiftindex-by-read-write-ratio.md
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
examples: 1
identifiers:
  - MaintainSIFTIndex
  - CalcSums
---

# Choose MaintainSIFTIndex by read-write ratio

> MaintainSIFTIndex on a key decides whether SQL Server maintains the SIFT indexed view as underlying rows change. With Yes, writes that affect the key or sum fields also maintain the indexed aggregate.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/choose-maintainsiftindex-by-read-write-ratio.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

`MaintainSIFTIndex` on a key decides whether SQL Server maintains the SIFT indexed view as underlying rows change. With `Yes`, writes that affect the key or sum fields also maintain the indexed aggregate. With `No`, that SIFT indexed view is not maintained, so a compatible `CalcSums` or FlowField calculation is computed from the base table instead and may require scanning many rows. There is no deferred "first read rebuild" of the SIFT structure.

## Best Practice

Measure aggregate-read latency and write cost under realistic filters and volumes. Keep `MaintainSIFTIndex = true` when the maintained aggregate materially benefits frequent `CalcSums` or FlowField reads. Consider `false` when writes dominate and the less-frequent aggregate reads can tolerate calculation from the base table.

See sample: [`choose-maintainsiftindex-by-read-write-ratio.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/choose-maintainsiftindex-by-read-write-ratio.good.al).

## Anti Pattern

Leaving `MaintainSIFTIndex = Yes` on every key by reflex or convenience. On write-heavy tables the cumulative cost turns every INSERT or MODIFY into several additional aggregate updates, and the impact compounds in batch imports and posting routines — often without any code-review signal that the property is the cause.

## Examples

- [Good: choose-maintainsiftindex-by-read-write-ratio.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/choose-maintainsiftindex-by-read-write-ratio.good.al)

## Names

- [Record.CalcSums(Any \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcsums-method) (names CalcSums)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#94 Correct performance knowledge guidance](../../../../changes/bcquality/94.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
