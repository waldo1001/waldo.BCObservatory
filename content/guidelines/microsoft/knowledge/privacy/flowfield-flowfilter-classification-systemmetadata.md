---
id: guideline/microsoft/knowledge/privacy/flowfield-flowfilter-classification-systemmetadata
type: guideline
title: FlowFields and FlowFilters are classified `SystemMetadata` automatically
summary: FlowField and FlowFilter are not stored fields — a FlowField is computed from a CalcFormula at read time and a FlowFilter is a transient filter scoped to the record variable.
tier: official
language: en
tags:
  - flowfield
  - flowfilter
  - data-classification
  - systemmetadata
  - calculated
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:49.574Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 659b775c6e210184ac874c269a9cfac92306591f
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/flowfield-flowfilter-classification-systemmetadata.md
    title: "microsoft/BCQuality: FlowFields and FlowFilters are classified `SystemMetadata` automatically"
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
repo_path: microsoft/knowledge/privacy/flowfield-flowfilter-classification-systemmetadata.md
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
  - SystemMetadata
  - FlowField
  - FlowFilter
  - DataClassification
  - CustomerContent
---

# FlowFields and FlowFilters are classified `SystemMetadata` automatically

> FlowField and FlowFilter are not stored fields — a FlowField is computed from a CalcFormula at read time and a FlowFilter is a transient filter scoped to the record variable.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/flowfield-flowfilter-classification-systemmetadata.md) · microsoft layer · privacy · BC all · tier official · derived

## Description

`FlowField` and `FlowFilter` are not stored fields — a FlowField is computed from a CalcFormula at read time and a FlowFilter is a transient filter scoped to the record variable. Because nothing is ever written to the database for these fields, the platform automatically classifies them as `DataClassification = SystemMetadata` and AL does not require — or expect — the developer to set `DataClassification` on them. A FlowField that surfaces PII (e.g., a sum or lookup over a `CustomerContent` table) is still `SystemMetadata` at the FlowField level; the privacy classification lives on the underlying stored field that the CalcFormula references.

## Best Practice

Do not declare `DataClassification` on `FieldClass = FlowField` or `FieldClass = FlowFilter` fields — the inherited `SystemMetadata` is correct and the property is redundant. If a FlowField exposes sensitive data, ensure the underlying source field has the right `DataClassification`; that is where the platform reads classification from for GDPR and telemetry purposes.

See sample: [`flowfield-flowfilter-classification-systemmetadata.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/flowfield-flowfilter-classification-systemmetadata.good.al).

## Anti Pattern

Flagging a FlowField for "missing `DataClassification`" or trying to override it to `CustomerContent` because the formula references customer data. The platform's automatic `SystemMetadata` value is the documented, intentional behavior for non-stored fields; overriding it adds nothing and misrepresents the field as if it were stored.

## Examples

- [Good: flowfield-flowfilter-classification-systemmetadata.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/flowfield-flowfilter-classification-systemmetadata.good.al)

## Names

- [ErrorInfo.DataClassification(\[DataClassification\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method) (names DataClassification)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
