---
id: guideline/microsoft/knowledge/privacy/data-classification-is-table-field-property
type: guideline
title: DataClassification is a table-field property, not a page-field property
summary: DataClassification is defined on table fields. Pages — including Card, List, API, and ListPart — do not own a classification; they simply expose fields whose classification is inherited from the underlying table.
tier: official
language: en
tags:
  - data-classification
  - page-field
  - table-field
  - api-page
  - card-page
  - list-page
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:24.362Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: acfc0e787383c0f528532b7b779e6eebc504666e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/data-classification-is-table-field-property.md
    title: "microsoft/BCQuality: DataClassification is a table-field property, not a page-field property"
    date: "2026-05-21"
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
  changes: []
repo_path: microsoft/knowledge/privacy/data-classification-is-table-field-property.md
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
examples: 0
identifiers:
  - DataClassification
  - ListPart
---

# DataClassification is a table-field property, not a page-field property

> DataClassification is defined on table fields. Pages — including Card, List, API, and ListPart — do not own a classification; they simply expose fields whose classification is inherited from the underlying table.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/data-classification-is-table-field-property.md) · microsoft layer · privacy · BC all · tier official · derived

## Description

`DataClassification` is defined on table fields. Pages — including `Card`, `List`, `API`, and `ListPart` — do not own a classification; they simply expose fields whose classification is inherited from the underlying table. A page-level `DataClassification` property does not exist, so neither a missing nor a "wrong" classification can be reported against a page. When the underlying table field is misclassified, the fix is on the table definition, not on every page that surfaces the field.

## Best Practice

When reviewing a page that exposes a field believed to be under-classified, follow the field back to its source table and inspect (or correct) the `DataClassification` there. A single corrected table field propagates to every page, report and API that uses it.

## Anti Pattern

Flagging a page (or trying to add a `DataClassification` property to a page field) because the page displays personal data. Pages display data that authenticated, permissioned users are already entitled to see; the classification belongs on the table field that stores the data, not on the UI that renders it.

## Names

- [ErrorInfo.DataClassification(\[DataClassification\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method) (names DataClassification)

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
