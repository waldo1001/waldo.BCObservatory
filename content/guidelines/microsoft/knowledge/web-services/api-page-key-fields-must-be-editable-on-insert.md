---
id: guideline/microsoft/knowledge/web-services/api-page-key-fields-must-be-editable-on-insert
type: guideline
title: Keep Consumer-Provided Key Fields Editable on API Pages
summary: A field listed in ODataKeyFields cannot have Editable = false when the API page allows inserts and the field's value must be supplied by the caller. Marking it read-only removes the field from the OData write schema, so a POST that includes it is rejected as an unknown property.
tier: official
language: en
tags:
  - api-page
  - key-fields
  - editable
  - insert
  - odata
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:59.957Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 84887c19825815a34ca2464f6b134bb3eb4127cf
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/api-page-key-fields-must-be-editable-on-insert.md
    title: "microsoft/BCQuality: Keep Consumer-Provided Key Fields Editable on API Pages"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-systemid-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/156
repo_path: microsoft/knowledge/web-services/api-page-key-fields-must-be-editable-on-insert.md
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
  - ODataKeyFields
  - SystemId
  - BadRequest
---

# Keep Consumer-Provided Key Fields Editable on API Pages

> A field listed in ODataKeyFields cannot have Editable = false when the API page allows inserts and the field's value must be supplied by the caller. Marking it read-only removes the field from the OData write schema, so a POST that includes it is rejected as an unknown property.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/api-page-key-fields-must-be-editable-on-insert.md) · microsoft layer · web-services · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

A field listed in `ODataKeyFields` cannot have `Editable = false` when the API page allows inserts and the field's value must be supplied by the caller. Marking it read-only removes the field from the OData write schema, so a POST that includes it is rejected as an unknown property. This only applies to keys the consumer must supply — a system-generated key such as `SystemId` is a valid exception, since Business Central assigns its value automatically on insert.

## Best Practice

Leave every consumer-supplied key field referenced in `ODataKeyFields` without `Editable = false` on pages where `InsertAllowed = true`, so the OData layer accepts it as a writable property on POST.

See sample: [`api-page-key-fields-must-be-editable-on-insert.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/api-page-key-fields-must-be-editable-on-insert.good.al).

## Anti Pattern

Marking a consumer-provided key field `Editable = false`, out of habit or for perceived safety. This silently breaks create operations with a generic `BadRequest` instead of a clear validation error.

See sample: [`api-page-key-fields-must-be-editable-on-insert.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/api-page-key-fields-must-be-editable-on-insert.bad.al).

## Examples

- [Good: api-page-key-fields-must-be-editable-on-insert.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/api-page-key-fields-must-be-editable-on-insert.good.al)
- [Bad: api-page-key-fields-must-be-editable-on-insert.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/api-page-key-fields-must-be-editable-on-insert.bad.al)

## Names

- [ErrorInfo.SystemId(\[Guid\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-systemid-method) (names SystemId)

## Changed by

- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
