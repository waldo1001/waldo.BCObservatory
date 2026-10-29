---
id: guideline/microsoft/knowledge/data-modeling/use-no-series-codeunit-not-noseriesmanagement
type: guideline
title: Assign numbers with codeunit `"No. Series"`, not the obsolete `NoSeriesManagement`
summary: Since 2023 release wave 1 (v22) the number-series API is codeunit 310 "No. Series", called by name in AL. Its methods include GetNextNo, PeekNextNo, IsManual, TestManual, and LookupRelatedNoSeries.
tier: official
language: en
tags:
  - no-series
  - getnextno
  - ismanual
  - noseriesmanagement
  - obsolete-pending
  - testmanual
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:25.409Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f80e35d440596b554104a28dedf13d4e0101e926
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/use-no-series-codeunit-not-noseriesmanagement.md
    title: 'microsoft/BCQuality: Assign numbers with codeunit `"No. Series"`, not the obsolete `NoSeriesManagement`'
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
    - change/bcquality/65
repo_path: microsoft/knowledge/data-modeling/use-no-series-codeunit-not-noseriesmanagement.md
layer: microsoft
kind: rule
domain: data-modeling
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
  - GetNextNo
  - PeekNextNo
  - IsManual
  - TestManual
  - LookupRelatedNoSeries
  - InitSeries
  - SelectSeries
  - SetSeries
  - OnInsert
  - NoSeries
  - OnValidate
  - NoSeriesMgt
---

# Assign numbers with codeunit `"No. Series"`, not the obsolete `NoSeriesManagement`

> Since 2023 release wave 1 (v22) the number-series API is codeunit 310 "No. Series", called by name in AL. Its methods include GetNextNo, PeekNextNo, IsManual, TestManual, and LookupRelatedNoSeries.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/use-no-series-codeunit-not-noseriesmanagement.md) · microsoft layer · data-modeling · BC 22.. · tier official · derived

## Description

Since 2023 release wave 1 (v22) the number-series API is codeunit **310** `"No. Series"`, called by name in AL. Its methods include `GetNextNo`, `PeekNextNo`, `IsManual`, `TestManual`, and `LookupRelatedNoSeries`. The older codeunit **396** `NoSeriesManagement` and its `InitSeries` / `SelectSeries` / `SetSeries` / `TestManual` methods are marked obsolete-pending: they still compile but raise a deprecation warning and are scheduled for removal, so they must not appear in new code.

LLMs reproduce the legacy `NoSeriesManagement` pattern because it dominates pre-2023 training data. Prefer the new codeunit: it has a cleaner surface and is the only version that survives the deprecation. (The numbers matter — `310` is the current codeunit; `396` is the legacy one being retired.) Verify signatures on learn.microsoft.com or in the `microsoft/BCApps` source before use.

## Best Practice

`OnInsert` assigns the number with `NoSeries.GetNextNo("No. Series")` where `NoSeries` is `Codeunit "No. Series"`. The `No.` field's `OnValidate` guards manual entry by calling `NoSeries.IsManual(...)` (or `TestManual`) before clearing `No. Series`.

See sample: [`use-no-series-codeunit-not-noseriesmanagement.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/use-no-series-codeunit-not-noseriesmanagement.good.al).

## Anti Pattern

`NoSeriesMgt.InitSeries(...)` for assignment and `NoSeriesMgt.TestManual(...)` for the manual check, where `NoSeriesMgt` is `Codeunit NoSeriesManagement`. Both are obsolete-pending and emit compiler warnings.

See sample: [`use-no-series-codeunit-not-noseriesmanagement.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/use-no-series-codeunit-not-noseriesmanagement.bad.al).

## Examples

- [Good: use-no-series-codeunit-not-noseriesmanagement.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/use-no-series-codeunit-not-noseriesmanagement.good.al)
- [Bad: use-no-series-codeunit-not-noseriesmanagement.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/use-no-series-codeunit-not-noseriesmanagement.bad.al)

## Names

- [codeunit 310 "No. Series"](../../../../objects/codeunit/310.md) (names this object)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#65 Add data-modeling and appsource knowledge articles (MICROSOFT layer)](../../../../changes/bcquality/65.md), 2026-07-13

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
