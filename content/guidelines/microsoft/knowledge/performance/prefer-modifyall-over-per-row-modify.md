---
id: guideline/microsoft/knowledge/performance/prefer-modifyall-over-per-row-modify
type: guideline
title: Use ModifyAll only for equivalent bulk assignments
summary: ModifyAll assigns one value to one field across the filtered set. It does not run the field's OnValidate trigger. Its optional RunTrigger parameter controls the table OnModify trigger, not field validation.
tier: official
language: en
tags:
  - modifyall
  - deleteall
  - bulk
  - loop
  - modify
  - set-based
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:38.604Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 34ea81cca09dd98c9471fff563b92fc814da98f0
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-modifyall-over-per-row-modify.md
    title: "microsoft/BCQuality: Use ModifyAll only for equivalent bulk assignments"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/198
    - change/bcquality/174
    - change/bcquality/132
    - change/bcquality/94
repo_path: microsoft/knowledge/performance/prefer-modifyall-over-per-row-modify.md
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
  - ModifyAll
  - OnValidate
  - RunTrigger
  - OnModify
  - MediaSet
---

# Use ModifyAll only for equivalent bulk assignments

> ModifyAll assigns one value to one field across the filtered set. It does not run the field's OnValidate trigger. Its optional RunTrigger parameter controls the table OnModify trigger, not field validation.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-modifyall-over-per-row-modify.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`ModifyAll` assigns one value to one field across the filtered set. It does not run the field's `OnValidate` trigger. Its optional `RunTrigger` parameter controls the table `OnModify` trigger, not field validation. Replacing a loop is therefore correct only when direct assignment is semantically equivalent for every row.

## Best Practice

Use `ModifyAll` when the loop directly assigns the same value, does not call `Validate`, needs no per-row calculation, and does not depend on `OnModify` unless the equivalent `RunTrigger` value is supplied. For a data-only update, exclude rows already holding the target value when that filter preserves the business outcome. Do not skip unchanged rows if the original call's per-row effects are required. Check whether table trigger code, related subscribers, security filtering, `Media`/`MediaSet`, or companion fields force row-by-row fallback (see `triggers-and-media-field-regress-modifyall.md`). A visible loop for progress UX is acceptable only when evidence shows the equivalent bulk call already executes as individual operations and the loop preserves trigger and business semantics.

See sample: [`prefer-modifyall-over-per-row-modify.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-modifyall-over-per-row-modify.good.al).

## Anti Pattern

A loop that only assigns a constant and calls `Modify(false)` on a field with no validation side effects or bulk fallback condition. A progress dialog alone does not exempt this loop. Conversely, replacing `Validate(Field, Value); Modify(true)` with `ModifyAll(Field, Value)` is also an anti-pattern because it silently drops field validation and may drop table-trigger behavior.

See sample: [`prefer-modifyall-over-per-row-modify.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-modifyall-over-per-row-modify.bad.al).

## Examples

- [Good: prefer-modifyall-over-per-row-modify.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-modifyall-over-per-row-modify.good.al)
- [Bad: prefer-modifyall-over-per-row-modify.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-modifyall-over-per-row-modify.bad.al)

## Names

- [Record.ModifyAll(Any, Any \[, Boolean\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method) (names ModifyAll)

## Changed by

- [#198 Add BC performance knowledge from OptimAL learnings](../../../../changes/bcquality/198.md), 2026-09-29
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#132 Refine self-improvement review guidance](../../../../changes/bcquality/132.md), 2026-09-03
- [#94 Correct performance knowledge guidance](../../../../changes/bcquality/94.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
