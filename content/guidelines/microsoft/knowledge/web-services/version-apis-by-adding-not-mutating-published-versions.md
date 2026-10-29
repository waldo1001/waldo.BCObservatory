---
id: guideline/microsoft/knowledge/web-services/version-apis-by-adding-not-mutating-published-versions
type: guideline
title: Version changed API shapes with a new page object
summary: Once an API version is published, external clients depend on its exact shape — entity names, fields, keys, and behavior — as a stable contract. APIVersion can list several versions on one API page, but every listed route is generated from that same page object and therefore exposes the same shape.
tier: official
language: en
tags:
  - api-page
  - apiversion
  - versioning
  - published-contract
  - breaking-change
  - backward-compatibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:16.135Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1e8417b7ae950ddcad4991ed51debddef2f5d8d8
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/version-apis-by-adding-not-mutating-published-versions.md
    title: "microsoft/BCQuality: Version changed API shapes with a new page object"
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
    - change/bcquality/93
repo_path: microsoft/knowledge/web-services/version-apis-by-adding-not-mutating-published-versions.md
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
  - APIVersion
---

# Version changed API shapes with a new page object

> Once an API version is published, external clients depend on its exact shape — entity names, fields, keys, and behavior — as a stable contract. APIVersion can list several versions on one API page, but every listed route is generated from that same page object and therefore exposes the same shape.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/version-apis-by-adding-not-mutating-published-versions.md) · microsoft layer · web-services · BC all · tier official · derived

## Description

Once an API version is published, external clients depend on its exact shape — entity names, fields, keys, and behavior — as a stable contract. `APIVersion` can list several versions on one API page, but every listed route is generated from that same page object and therefore exposes the same shape. Adding `'v2.0'` to a page and then changing its fields changes what both `v1.0` and `v2.0` serve. To preserve the v1 shape while introducing a different v2 shape, keep the v1 page unchanged and create a separate page object for v2.

## Best Practice

Keep the existing page object and its `APIVersion = 'v1.0'` contract unchanged. Copy the page to a new object ID, set that object's `APIVersion = 'v2.0'`, and make the v2-only shape changes there. A multi-value `APIVersion` list is appropriate only when the exact same page shape is supported under each listed version.

See sample: [`version-apis-by-adding-not-mutating-published-versions.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/version-apis-by-adding-not-mutating-published-versions.good.al).

## Anti Pattern

Editing the published `v1.0` page in place breaks its clients. So does adding `v2.0` to that same page and assuming subsequent field changes apply only to v2: both routes use one object shape. The detection signal is a breaking shape change without a separate API page object retaining the old version.

See sample: [`version-apis-by-adding-not-mutating-published-versions.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/version-apis-by-adding-not-mutating-published-versions.bad.al).

## Examples

- [Good: version-apis-by-adding-not-mutating-published-versions.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/version-apis-by-adding-not-mutating-published-versions.good.al)
- [Bad: version-apis-by-adding-not-mutating-published-versions.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/version-apis-by-adding-not-mutating-published-versions.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#93 Fix lifecycle compatibility guidance](../../../../changes/bcquality/93.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
