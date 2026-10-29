---
id: guideline/microsoft/knowledge/performance/batch-number-series-instead-of-getnextno-per-row
type: guideline
title: Batch number-series calls instead of GetNextNo per insert
summary: Codeunit "No. Series".GetNextNo on a gapless (Normal) series updates and locks the number-series line on every call. A tight Insert loop that asks for a number per row serializes every concurrent writer on that series — the classic SaaS posting bottleneck.
tier: official
language: en
tags:
  - no-series
  - getnextno
  - no-series-batch
  - savestate
  - numbersequence
  - lock
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:35.767Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: cdb7405f76a2f64f96f923cd3cea7fd83caf898b
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/batch-number-series-instead-of-getnextno-per-row.md
    title: "microsoft/BCQuality: Batch number-series calls instead of GetNextNo per insert"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/310
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/153
  related:
    - to: object/codeunit/308
      title: codeunit 308 "No. Series - Batch"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/performance/batch-number-series-instead-of-getnextno-per-row.md
layer: microsoft
kind: rule
domain: performance
bc_version:
  - 22..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - NoSeriesManagement
  - NumberSequence
  - SaveState
  - OnInsert
  - GetNextNo
---

# Batch number-series calls instead of GetNextNo per insert

> Codeunit "No. Series".GetNextNo on a gapless (Normal) series updates and locks the number-series line on every call. A tight Insert loop that asks for a number per row serializes every concurrent writer on that series — the classic SaaS posting bottleneck.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/batch-number-series-instead-of-getnextno-per-row.md) · microsoft layer · performance · BC 22.. · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

`Codeunit "No. Series".GetNextNo` on a **gapless (Normal)** series updates and locks the number-series line on every call. A tight `Insert` loop that asks for a number per row serializes every concurrent writer on that series — the classic SaaS posting bottleneck. Training data still copies the per-row C/AL `NoSeriesManagement` shape. Series configured with **Allow Gaps** instead obtain numbers through `NumberSequence` and do not hold the series-line lock between calls, so they are not affected by this pattern. Codeunit `"No. Series - Batch"` issues gapless numbers in memory and writes the series line once via `SaveState`.

## Best Practice

Inside a multi-row insert, call `"No. Series - Batch".GetNextNo` per row and `SaveState` once after the loop when the series must remain gapless. Use `NumberSequence.Next` when holes are allowed. Do not replace a single `OnInsert` `GetNextNo` for one master record; that path is not the hotspot.

See sample: [`batch-number-series-instead-of-getnextno-per-row.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/batch-number-series-instead-of-getnextno-per-row.good.al).

## Anti Pattern

`NoSeries.GetNextNo(...)` inside `repeat ... Insert ... until Next() = 0` where the series is **gapless** (Allow Gaps = false). Each iteration takes the series-line lock. The signal is `"No. Series"` (not `"No. Series - Batch"`) in a loop that inserts more than one row; do not flag the same pattern when the series has Allow Gaps enabled, as the `NumberSequence` path already avoids the lock.

See sample: [`batch-number-series-instead-of-getnextno-per-row.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/batch-number-series-instead-of-getnextno-per-row.bad.al).

## Examples

- [Good: batch-number-series-instead-of-getnextno-per-row.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/batch-number-series-instead-of-getnextno-per-row.good.al)
- [Bad: batch-number-series-instead-of-getnextno-per-row.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/batch-number-series-instead-of-getnextno-per-row.bad.al)

## Names

- [codeunit 310 "No. Series"](../../../../objects/codeunit/310.md) (names this object)
- [codeunit 308 "No. Series - Batch"](../../../../objects/codeunit/308.md) (possibly related: a code span names it)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
