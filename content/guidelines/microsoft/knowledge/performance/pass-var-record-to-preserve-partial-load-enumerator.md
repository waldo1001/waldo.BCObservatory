---
id: guideline/microsoft/knowledge/performance/pass-var-record-to-preserve-partial-load-enumerator
type: guideline
title: Pass the iterated record var so a JIT load updates the enumerator
summary: "A FindSet/Next loop builds an enumerator from the fields selected for load. Accessing an unloaded field triggers a JIT load. When the record is passed by value, the copy does not share that enumerator: the JIT loads the copy and leaves the enumerator unchanged, so every later Next() JIT-loads again."
tier: official
language: en
tags:
  - setloadfields
  - jit-load
  - enumerator
  - var-parameter
  - pass-by-value
  - next
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:43.078Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 726ec410b4d08e24a25c6f595702017145f7a75f
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/pass-var-record-to-preserve-partial-load-enumerator.md
    title: "microsoft/BCQuality: Pass the iterated record var so a JIT load updates the enumerator"
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
repo_path: microsoft/knowledge/performance/pass-var-record-to-preserve-partial-load-enumerator.md
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
  - FindSet
  - AddLoadFields
  - SetLoadFields
---

# Pass the iterated record var so a JIT load updates the enumerator

> A FindSet/Next loop builds an enumerator from the fields selected for load. Accessing an unloaded field triggers a JIT load. When the record is passed by value, the copy does not share that enumerator: the JIT loads the copy and leaves the enumerator unchanged, so every later Next() JIT-loads again.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/pass-var-record-to-preserve-partial-load-enumerator.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

A `FindSet`/`Next` loop builds an enumerator from the fields selected for load. Accessing an unloaded field triggers a JIT load. When the record is passed **by value**, the copy does not share that enumerator: the JIT loads the copy and leaves the enumerator unchanged, so **every later `Next()` JIT-loads again**. Passing `var` lets the first JIT update the enumerator. `AddLoadFields` on the original record before a by-value call is the other fix. This is independent of whether `SetLoadFields` was ordered before filters.

## Best Practice

Helpers that read extra fields on an in-flight iterator must take the record as `var`, or the caller must `AddLoadFields` those fields before the loop. Prefer declaring the extra fields up front so no JIT is needed.

See sample: [`pass-var-record-to-preserve-partial-load-enumerator.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/pass-var-record-to-preserve-partial-load-enumerator.good.al).

## Anti Pattern

A `SetLoadFields` loop that passes the iterator by value into a helper which then reads a field that was not loaded. The first row pays one JIT; every subsequent row pays it again because the enumerator never learned the extra field.

See sample: [`pass-var-record-to-preserve-partial-load-enumerator.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/pass-var-record-to-preserve-partial-load-enumerator.bad.al).

## Examples

- [Good: pass-var-record-to-preserve-partial-load-enumerator.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/pass-var-record-to-preserve-partial-load-enumerator.good.al)
- [Bad: pass-var-record-to-preserve-partial-load-enumerator.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/pass-var-record-to-preserve-partial-load-enumerator.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
