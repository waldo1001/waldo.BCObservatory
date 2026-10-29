---
id: guideline/microsoft/knowledge/web-services/stored-derived-fields-must-not-be-exposed-directly
type: guideline
title: Recalculate Stored Derived Fields Before Exposing Them on API Pages
summary: A stored field whose value is derived from other fields inside an OnValidate trigger only updates when that specific trigger fires. If the underlying source data changes through some other path, the stored value goes stale without raising any error.
tier: official
language: en
tags:
  - api-page
  - derived-fields
  - exposure
  - odata
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:59.840Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2d02f938602e979add77ba18ed449077b1951a35
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/stored-derived-fields-must-not-be-exposed-directly.md
    title: "microsoft/BCQuality: Recalculate Stored Derived Fields Before Exposing Them on API Pages"
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
    - change/bcquality/156
repo_path: microsoft/knowledge/web-services/stored-derived-fields-must-not-be-exposed-directly.md
layer: microsoft
kind: rule
domain: web-services
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
  - OnAfterGetRecord
---

# Recalculate Stored Derived Fields Before Exposing Them on API Pages

> A stored field whose value is derived from other fields inside an OnValidate trigger only updates when that specific trigger fires. If the underlying source data changes through some other path, the stored value goes stale without raising any error.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/stored-derived-fields-must-not-be-exposed-directly.md) · microsoft layer · web-services · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

A stored field whose value is derived from other fields inside an `OnValidate` trigger only updates when that specific trigger fires. If the underlying source data changes through some other path, the stored value goes stale without raising any error. Exposing such a field directly on an API page hands external consumers a snapshot that may be significantly out of date.

## Best Practice

Recalculate the derived value in `OnAfterGetRecord` from its authoritative source — typically a FlowField — using a page-level variable, and expose that recalculated value instead of the stale stored field. Whether to also expose the source fields is a separate design decision, not a requirement of this pattern; keep the API contract scoped to what consumers actually need. If letting the consumer verify the recalculation is itself a requirement, expose every field the calculation reads, not just one of them — a derived value with two inputs needs both exposed, or the "verification" is incomplete.

See sample: [`stored-derived-fields-must-not-be-exposed-directly.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/stored-derived-fields-must-not-be-exposed-directly.good.al).

## Anti Pattern

Exposing the stored field directly via `Rec`, trusting that it was kept in sync by whichever trigger last touched it.

See sample: [`stored-derived-fields-must-not-be-exposed-directly.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/stored-derived-fields-must-not-be-exposed-directly.bad.al).

## Examples

- [Good: stored-derived-fields-must-not-be-exposed-directly.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/stored-derived-fields-must-not-be-exposed-directly.good.al)
- [Bad: stored-derived-fields-must-not-be-exposed-directly.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/stored-derived-fields-must-not-be-exposed-directly.bad.al)

## Changed by

- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
