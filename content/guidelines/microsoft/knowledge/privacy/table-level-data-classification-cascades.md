---
id: guideline/microsoft/knowledge/privacy/table-level-data-classification-cascades
type: guideline
title: Table-level DataClassification is inherited by fields
summary: A valid table-level DataClassification is the effective default for the Normal fields declared inside that table object when they do not declare their own value, and AppSourceCop AS0016 accepts those fields rather than reporting them as unclassified.
tier: official
language: en
tags:
  - data-classification
  - table-level
  - field-inheritance
  - tableextension
  - appsourcecop
  - as0016
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:50.439Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f41dc11fd6862a2a1c3d2aabf786a573ee0d95c3
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/table-level-data-classification-cascades.md
    title: "microsoft/BCQuality: Table-level DataClassification is inherited by fields"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/131
    - change/bcquality/92
repo_path: microsoft/knowledge/privacy/table-level-data-classification-cascades.md
layer: microsoft
kind: rule
domain: privacy
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
  - DataClassification
---

# Table-level DataClassification is inherited by fields

> A valid table-level DataClassification is the effective default for the Normal fields declared inside that table object when they do not declare their own value, and AppSourceCop AS0016 accepts those fields rather than reporting them as unclassified.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/table-level-data-classification-cascades.md) · microsoft layer · privacy · BC all · tier official · derived

## Description

A valid table-level `DataClassification` is the effective default for the Normal fields declared inside that table object when they do not declare their own value, and AppSourceCop AS0016 accepts those fields rather than reporting them as unclassified. A field-level value overrides that default only for the field on which it is set. The default does not cross object boundaries: a `tableextension` cannot set the table-level property, and the fields it adds do not inherit the base table's value, so every Normal field a table extension adds must classify itself. FlowFields and FlowFilters are handled separately by the platform and are covered by `flowfield-flowfilter-classification-systemmetadata.md`.

## Best Practice

Use a table-level classification when it accurately describes the table's fields, and add a field-level classification only where a field stores a different kind of data. Do not flag a Normal field solely because it omits an explicit property when its own table supplies a valid default; verify whether the inherited value matches the field's data instead. A `tableextension` has no default to inherit, so require an explicit `DataClassification` on every Normal field it adds.

See sample: [`table-level-data-classification-cascades.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/table-level-data-classification-cascades.good.al).

## Anti Pattern

Reporting every Normal field without an explicit `DataClassification` when its own table already supplies a valid default, or requiring redundant field-level declarations that repeat the table value. The mirror-image mistake is waving through an unclassified Normal field added by a `tableextension` because the base table carries a default — a table extension inherits nothing. A real issue exists when neither scope supplies a valid classification, when a field's data requires an override of the inherited value, or when a Normal field added by a `tableextension` lacks a valid explicit `DataClassification`.

## Examples

- [Good: table-level-data-classification-cascades.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/table-level-data-classification-cascades.good.al)

## Names

- [ErrorInfo.DataClassification(\[DataClassification\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method) (names DataClassification)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#131 Correct table-level data classification guidance](../../../../changes/bcquality/131.md), 2026-08-18
- [#92 Correct security and privacy knowledge guidance](../../../../changes/bcquality/92.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
