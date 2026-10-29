---
id: guideline/microsoft/knowledge/performance/avoid-repeating-unchanged-validation
type: guideline
title: Avoid repeating validation when its inputs have not changed
summary: Validate runs field validation logic, which can invoke subscribers and additional reads or writes even if the assigned value is unchanged. When a document-building path validates the same field twice without changing any input its validation depends on, the second cascade may do the same work again.
tier: official
language: en
tags:
  - validate
  - onvalidate
  - repeated-write
  - sales-line
  - subscriber
  - unchanged-value
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:38.115Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 96325b35267a1ff1bb88c28dd889310c9652b2ac
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-repeating-unchanged-validation.md
    title: "microsoft/BCQuality: Avoid repeating validation when its inputs have not changed"
    date: "2026-09-29"
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
    - change/bcquality/198
repo_path: microsoft/knowledge/performance/avoid-repeating-unchanged-validation.md
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
  - OnValidate
---

# Avoid repeating validation when its inputs have not changed

> Validate runs field validation logic, which can invoke subscribers and additional reads or writes even if the assigned value is unchanged. When a document-building path validates the same field twice without changing any input its validation depends on, the second cascade may do the same work again.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-repeating-unchanged-validation.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`Validate` runs field validation logic, which can invoke subscribers and additional reads or writes even if the assigned value is unchanged. When a document-building path validates the same field twice without changing any input its validation depends on, the second cascade may do the same work again. A field-value comparison alone does not prove that the dependent context or required event behavior is unchanged.

## Best Practice

Trace the table's `OnValidate`, subscribers, and dependent fields before removing a duplicate invocation. Keep the required validation and write, but skip a second `Validate` only when all its inputs, its order-dependent effects, and the business contract are demonstrably unchanged. Measure validations and writes per business unit and test pricing, reservations, error behavior, and subscriber effects on real document paths. The sample's custom field validation depends only on Quantity and Unit Price; a note assigned between calls does not affect either. See sample: [`avoid-repeating-unchanged-validation.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-repeating-unchanged-validation.good.al).

## Anti Pattern

Validating Quantity, changing only an unrelated local or record note, validating the same Quantity again, then modifying the row, without any required second event. Do not replace `Validate` with direct assignment, use `Insert(false)` indiscriminately, or reorder validations on a Sales Line solely to reduce call counts: its standard logic can depend on other fields and event subscribers. See sample: [`avoid-repeating-unchanged-validation.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-repeating-unchanged-validation.bad.al).

## References

- [Record.Validate and field validation behavior](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-validate-method).
- [Equivalent bulk assignments versus per-row validation](prefer-modifyall-over-per-row-modify.md).
- [Subscriber guards](guard-event-subscribers-before-db-call.md).

## Examples

- [Good: avoid-repeating-unchanged-validation.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-repeating-unchanged-validation.good.al)
- [Bad: avoid-repeating-unchanged-validation.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-repeating-unchanged-validation.bad.al)

## Changed by

- [#198 Add BC performance knowledge from OptimAL learnings](../../../../changes/bcquality/198.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
