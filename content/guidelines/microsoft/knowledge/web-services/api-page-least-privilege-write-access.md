---
id: guideline/microsoft/knowledge/web-services/api-page-least-privilege-write-access
type: guideline
title: Give API pages least-privilege write access
summary: A general-purpose API page that exposes many fields should not be widened to allow writes on one additional field.
tier: official
language: en
tags:
  - api-page
  - least-privilege
  - write-access
  - odata
  - security
  - external-api
  - identity-fields
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:51.872Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6f40c8718a8fce70d235210add54231593546bfe
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/api-page-least-privilege-write-access.md
    title: "microsoft/BCQuality: Give API pages least-privilege write access"
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
    - change/bcquality/157
repo_path: microsoft/knowledge/web-services/api-page-least-privilege-write-access.md
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
  - InsertAllowed
  - ModifyAllowed
  - DeleteAllowed
---

# Give API pages least-privilege write access

> A general-purpose API page that exposes many fields should not be widened to allow writes on one additional field.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/api-page-least-privilege-write-access.md) · microsoft layer · web-services · BC all · tier official · derived

## Description

A general-purpose API page that exposes many fields should not be widened to allow writes on one additional field. A `PageType = API` page consumed by an external integration, an automation agent, or a partner system carries the same risk regardless of caller: a write-enabled page with no per-field restriction is a wide-open surface. Least privilege has to cover both dimensions of exposure: which fields are on the page, and which operations the page allows. Only a field actually placed on the page is reachable at all — but a page that includes many fields, with `InsertAllowed`/`ModifyAllowed`/`DeleteAllowed` left at their defaults and no `Editable = false` on most of them, leaves every one of those included fields — identity fields and financially significant ones among them — fully writable, with nothing marking that as deliberate. Restricting fields alone is not enough either: a page with only two fields on it can still let a caller insert brand-new records or delete existing ones if `InsertAllowed`/`DeleteAllowed` are left at their true defaults (both `true`).

## Best Practice

Create a separate, minimal API page that exposes only the key and the specific field the consumer needs to write, with everything else `Editable = false` or simply absent from the page — and set `InsertAllowed`/`DeleteAllowed` to `false` unless the consumer's use case genuinely needs to create or delete records through that page.

See sample: [`api-page-least-privilege-write-access.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/api-page-least-privilege-write-access.good.al).

## Anti Pattern

Widening an existing general-purpose API page with write access to one field, leaving every other field on the page (including identity and posting fields) writable by default because no one added `Editable = false`.

See sample: [`api-page-least-privilege-write-access.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/api-page-least-privilege-write-access.bad.al).

## Examples

- [Good: api-page-least-privilege-write-access.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/api-page-least-privilege-write-access.good.al)
- [Bad: api-page-least-privilege-write-access.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/api-page-least-privilege-write-access.bad.al)

## Changed by

- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../changes/bcquality/157.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
