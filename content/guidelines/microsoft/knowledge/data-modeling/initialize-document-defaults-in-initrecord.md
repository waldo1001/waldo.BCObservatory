---
id: guideline/microsoft/knowledge/data-modeling/initialize-document-defaults-in-initrecord
type: guideline
title: Initialize document defaults in `InitRecord` after assigning the number
summary: Business Central document headers assign their number series first and then call an InitRecord procedure that owns the remaining business defaults, such as posting and document dates.
tier: official
language: en
tags:
  - document-header
  - initrecord
  - number-series
  - default-values
  - oninsert
  - initialization
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:02.946Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: e83a6d3484773e962734d34dc3a7afc0b308f8bf
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/initialize-document-defaults-in-initrecord.md
    title: "microsoft/BCQuality: Initialize document defaults in `InitRecord` after assigning the number"
    date: "2026-09-21"
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
    - change/bcquality/195
    - change/bcquality/57
repo_path: microsoft/knowledge/data-modeling/initialize-document-defaults-in-initrecord.md
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
  - InitRecord
  - OnInsert
---

# Initialize document defaults in `InitRecord` after assigning the number

> Business Central document headers assign their number series first and then call an InitRecord procedure that owns the remaining business defaults, such as posting and document dates.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/initialize-document-defaults-in-initrecord.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

Business Central document headers assign their number series first and then call an `InitRecord` procedure that owns the remaining business defaults, such as posting and document dates. Keeping that sequence and extensibility point makes initialization consistent for every creation path and lets extensions subscribe around one documented operation. Defaults scattered across page triggers or unrelated helpers can differ between UI, API, test, and background creation.

## Best Practice

In the document table's insert path, assign the document number and then call `InitRecord`. Keep the default assignments in that procedure and expose narrow before/after events when other extensions must participate.

See sample: [`initialize-document-defaults-in-initrecord.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/initialize-document-defaults-in-initrecord.good.al).

## Anti Pattern

Assigning document defaults in a page trigger, or scattering them directly through `OnInsert` with no `InitRecord` boundary. Non-page creation paths can then miss the defaults, and extensions have no stable initialization hook.

See sample: [`initialize-document-defaults-in-initrecord.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/initialize-document-defaults-in-initrecord.bad.al).

## Reference

[Use the InitRecord function](https://learn.microsoft.com/en-us/training/modules/use-document-standards-business-central/3-use-initrecord-function)

## Examples

- [Good: initialize-document-defaults-in-initrecord.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/initialize-document-defaults-in-initrecord.good.al)
- [Bad: initialize-document-defaults-in-initrecord.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/initialize-document-defaults-in-initrecord.bad.al)

## Changed by

- [#195 Add foundational AL developer knowledge](../../../../changes/bcquality/195.md), 2026-09-21
- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
