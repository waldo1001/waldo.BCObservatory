---
id: guideline/microsoft/knowledge/web-services/expose-systemid-as-the-api-key
type: guideline
title: Address API records by SystemId, not by a renamable business key
summary: Every BC table carries a SystemId — an immutable GUID assigned at insert and never reused. API consumers must address a record through a key that does not change, otherwise a previously stored URL or @odata.id reference breaks the moment a user renames the underlying business key.
tier: official
language: en
tags:
  - api-page
  - odatakeyfields
  - systemid
  - stable-key
  - guid
  - business-key
  - editable-false
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:15.977Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f34e9a4c7da240a8de92662ca98590d1d4d30fa0
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-systemid-as-the-api-key.md
    title: "microsoft/BCQuality: Address API records by SystemId, not by a renamable business key"
    date: "2026-09-09"
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
    - change/bcquality/174
repo_path: microsoft/knowledge/web-services/expose-systemid-as-the-api-key.md
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
  - SystemId
  - ODataKeyFields
---

# Address API records by SystemId, not by a renamable business key

> Every BC table carries a SystemId — an immutable GUID assigned at insert and never reused. API consumers must address a record through a key that does not change, otherwise a previously stored URL or @odata.id reference breaks the moment a user renames the underlying business key.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-systemid-as-the-api-key.md) · microsoft layer · web-services · BC all · tier official · derived

## Description

Every BC table carries a `SystemId` — an immutable GUID assigned at insert and never reused. API consumers must address a record through a key that does not change, otherwise a previously stored URL or `@odata.id` reference breaks the moment a user renames the underlying business key. The convention is to set `ODataKeyFields = SystemId` on the API page and expose the GUID as a non-editable `field(id; Rec.SystemId)`. An LLM left to its own devices often reaches for the human-readable primary key (a customer `No.`, an item code) as the OData key, because that is what a developer types when filtering in AL. That choice is wrong for an external contract: business keys are renamable and the API caller's stored references would dangle. This file is remedial because the correct key (`SystemId`) is rarely the one the model would pick by analogy with ordinary AL code.

## Best Practice

Set `ODataKeyFields = SystemId` so OData routes records by the stable GUID, and expose it as `field(id; Rec.SystemId)` marked `Editable = false`. Clients then address a record at `.../customers(<guid>)`, an identity that survives any rename of the business key. Keep the business key (for example `No.`) as an ordinary exposed field, not as the OData key.

See sample: [`expose-systemid-as-the-api-key.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-systemid-as-the-api-key.good.al).

## Anti Pattern

Setting `ODataKeyFields = "No."` so the endpoint addresses records by a renamable business field. As soon as a user changes that `No.`, every external reference built on the old value points at nothing, silently breaking integrations. The detection signal: `ODataKeyFields` set to a business field rather than `SystemId`, or an API page that exposes no `id` field bound to `Rec.SystemId`.

See sample: [`expose-systemid-as-the-api-key.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-systemid-as-the-api-key.bad.al).

## Examples

- [Good: expose-systemid-as-the-api-key.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-systemid-as-the-api-key.good.al)
- [Bad: expose-systemid-as-the-api-key.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-systemid-as-the-api-key.bad.al)

## Names

- [ErrorInfo.SystemId(\[Guid\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-systemid-method) (names SystemId)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
