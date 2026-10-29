---
id: guideline/microsoft/knowledge/web-services/set-required-api-page-properties
type: guideline
title: Declare API routing properties and an explicit stable version
summary: "An API page needs APIPublisher, APIGroup, EntityName, EntitySetName, and a backing SourceTable to define its routed entity. APIVersion is different: it is optional at the language level and defaults to beta."
tier: official
language: en
tags:
  - api-page
  - pagetype-api
  - apipublisher
  - apigroup
  - apiversion
  - entityname
  - entitysetname
  - sourcetable
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:16.177Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 24edc5d1eb300b265eb359bb079ac4e18d5eb414
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/set-required-api-page-properties.md
    title: "microsoft/BCQuality: Declare API routing properties and an explicit stable version"
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
repo_path: microsoft/knowledge/web-services/set-required-api-page-properties.md
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
  - APIPublisher
  - APIGroup
  - EntityName
  - EntitySetName
  - SourceTable
  - APIVersion
---

# Declare API routing properties and an explicit stable version

> An API page needs APIPublisher, APIGroup, EntityName, EntitySetName, and a backing SourceTable to define its routed entity. APIVersion is different: it is optional at the language level and defaults to beta.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/set-required-api-page-properties.md) · microsoft layer · web-services · BC all · tier official · derived

## Description

An API page needs `APIPublisher`, `APIGroup`, `EntityName`, `EntitySetName`, and a backing `SourceTable` to define its routed entity. `APIVersion` is different: it is optional at the language level and defaults to `beta`. Omitting it therefore does not mean the page has no version; it publishes under the preview contract. A production integration that intends a stable route should set a `vX.Y` version explicitly rather than rely on that default.

## Best Practice

Declare the five routing/entity properties required by the API page and set `APIVersion` explicitly for a stable published contract, for example `'v1.0'`. Expose the record's fields inside a repeater under `area(content)`. Review missing routing metadata as a malformed API definition, but review a missing `APIVersion` as unintended publication under `beta`, not as an unpublished endpoint.

See sample: [`set-required-api-page-properties.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/set-required-api-page-properties.good.al).

## Anti Pattern

Leaving out `APIPublisher`, `APIGroup`, `EntityName`, `EntitySetName`, or `SourceTable` leaves the API definition incomplete. A subtler contract defect is declaring all of those but omitting `APIVersion`: the page is exposed as `beta`, which is valid runtime behavior but not the explicit stable route a production client expects.

See sample: [`set-required-api-page-properties.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/set-required-api-page-properties.bad.al).

## Examples

- [Good: set-required-api-page-properties.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/set-required-api-page-properties.good.al)
- [Bad: set-required-api-page-properties.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/set-required-api-page-properties.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#93 Fix lifecycle compatibility guidance](../../../../changes/bcquality/93.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
