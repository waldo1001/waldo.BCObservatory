---
id: guideline/microsoft/knowledge/style/api-page-version-format
type: guideline
title: "`APIVersion` must follow the pattern `vX.Y` (or `beta`)"
summary: "The APIVersion property on an API page is part of the public URL path: /api/<publisher>/<group>/<version>/<entitySetName>. The platform accepts only two value shapes for it: a vMAJOR.MINOR string such as 'v1.0', 'v2.0', or 'v2.1', or the literal string 'beta' for pre-release endpoints."
tier: official
language: en
tags:
  - api-page
  - apiversion
  - version
  - format
  - beta
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:58.559Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3bb3a03419f85112bef3d5f05ab65037c8cf42a6
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-version-format.md
    title: "microsoft/BCQuality: `APIVersion` must follow the pattern `vX.Y` (or `beta`)"
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
repo_path: microsoft/knowledge/style/api-page-version-format.md
layer: microsoft
kind: rule
domain: style
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

# `APIVersion` must follow the pattern `vX.Y` (or `beta`)

> The APIVersion property on an API page is part of the public URL path: /api/<publisher>/<group>/<version>/<entitySetName>. The platform accepts only two value shapes for it: a vMAJOR.MINOR string such as 'v1.0', 'v2.0', or 'v2.1', or the literal string 'beta' for pre-release endpoints.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-version-format.md) · microsoft layer · style · BC all · tier official · derived

## Description

The `APIVersion` property on an API page is part of the public URL path: `/api/<publisher>/<group>/<version>/<entitySetName>`. The platform accepts only two value shapes for it: a `vMAJOR.MINOR` string such as `'v1.0'`, `'v2.0'`, or `'v2.1'`, or the literal string `'beta'` for pre-release endpoints. Anything else — `'v2'`, `'2.0'`, `'1'`, `'v2.0.0'` — is rejected. The major-minor pair lets consumers detect compatibility through URL inspection alone; the explicit `'beta'` channel signals "this contract may break without notice."

## Best Practice

Start a new public endpoint at `'v1.0'`. Bump the minor when adding fields or non-breaking changes; bump the major when changing field types, removing fields, or any breaking change. Use `'beta'` for endpoints that are still iterating and SHOULD NOT be consumed by external integrations.

See sample: [`api-page-version-format.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-version-format.good.al).

## Anti Pattern

`APIVersion = 'v2'` (missing minor), `APIVersion = '2.0'` (missing `v` prefix), `APIVersion = 'v2.0.0'` (extra segment). All three either fail to compile or produce a URL that consumers cannot reach.

See sample: [`api-page-version-format.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-version-format.bad.al).

## Examples

- [Good: api-page-version-format.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-version-format.good.al)
- [Bad: api-page-version-format.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-version-format.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
