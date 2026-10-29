---
id: guideline/microsoft/knowledge/data-modeling/table-relation-extensions-are-additive-and-top-down
type: guideline
title: Design TableRelation branches for additive top-down extension
summary: A tableextension can add to an existing TableRelation, but the combined relation is evaluated top-down after the original value. The first unconditional relation wins.
tier: official
language: en
tags:
  - tablerelation
  - tableextension
  - enumextension
  - additive
  - top-down
  - unconditional-relation
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:24.653Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 84bdc0baecfeb8d7f4e0462c6be245531c97e5fc
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/table-relation-extensions-are-additive-and-top-down.md
    title: "microsoft/BCQuality: Design TableRelation branches for additive top-down extension"
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
    - change/bcquality/108
repo_path: microsoft/knowledge/data-modeling/table-relation-extensions-are-additive-and-top-down.md
layer: microsoft
kind: rule
domain: data-modeling
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
  - TableRelation
  - ValidateTableRelation
---

# Design TableRelation branches for additive top-down extension

> A tableextension can add to an existing TableRelation, but the combined relation is evaluated top-down after the original value. The first unconditional relation wins.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/table-relation-extensions-are-additive-and-top-down.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

A `tableextension` can add to an existing `TableRelation`, but the combined relation is evaluated top-down after the original value. The first unconditional relation wins. An extension branch appended after an unconditional base relation is therefore unreachable, even though the extension compiles and appears to describe the new enum value correctly.

## Best Practice

When a relation is designed to follow an extensible enum, express the base cases as conditional branches and leave no unconditional catch-all ahead of future extension branches. An enum extension can then append a condition for its new value. When extending a field you do not own, inspect the original `TableRelation`; do not claim that an appended condition overrides an unconditional relation.

See sample: [`table-relation-extensions-are-additive-and-top-down.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/table-relation-extensions-are-additive-and-top-down.good.al).

## Anti Pattern

A base field has an unconditional `TableRelation = Customer;` and a `tableextension` adds `if (Type = const(Resource)) Resource`. The original unconditional branch always wins, so the new enum value still validates and looks up against Customer. The concern is evaluation order, not `ValidateTableRelation`; free-form input is covered separately by security guidance.

See sample: [`table-relation-extensions-are-additive-and-top-down.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/table-relation-extensions-are-additive-and-top-down.bad.al).

## Examples

- [Good: table-relation-extensions-are-additive-and-top-down.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/table-relation-extensions-are-additive-and-top-down.good.al)
- [Bad: table-relation-extensions-are-additive-and-top-down.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/table-relation-extensions-are-additive-and-top-down.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
