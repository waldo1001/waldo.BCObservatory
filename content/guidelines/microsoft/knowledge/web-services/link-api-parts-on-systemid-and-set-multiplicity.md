---
id: guideline/microsoft/knowledge/web-services/link-api-parts-on-systemid-and-set-multiplicity
type: guideline
title: Link API parts on SystemId and choose the correct multiplicity
summary: Multiplicity is available from runtime 6.3 (Business Central 17.3) and defaults an API page part to a 1:N collection. The multiplicity-specific guidance therefore does not apply to BC 17.0 through 17.2.
tier: official
language: en
tags:
  - api-page
  - page-part
  - subpagelink
  - systemid
  - multiplicity
  - deep-insert
  - navigation-property
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:16.088Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2f92c0c1477461f23d03520a8f68c3c55ffc3a20
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/link-api-parts-on-systemid-and-set-multiplicity.md
    title: "microsoft/BCQuality: Link API parts on SystemId and choose the correct multiplicity"
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
    - change/bcquality/100
repo_path: microsoft/knowledge/web-services/link-api-parts-on-systemid-and-set-multiplicity.md
layer: microsoft
kind: rule
domain: web-services
bc_version:
  - 17..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - SystemId
  - ZeroOrOne
  - TableRelation
---

# Link API parts on SystemId and choose the correct multiplicity

> Multiplicity is available from runtime 6.3 (Business Central 17.3) and defaults an API page part to a 1:N collection. The multiplicity-specific guidance therefore does not apply to BC 17.0 through 17.2.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/link-api-parts-on-systemid-and-set-multiplicity.md) · microsoft layer · web-services · BC 17.. · tier official · derived

## Description

`Multiplicity` is available from runtime 6.3 (Business Central 17.3) and defaults an API page part to a 1:N collection. The multiplicity-specific guidance therefore does not apply to BC 17.0 through 17.2. An API page part creates an OData navigation property and, for collection multiplicity, enables deep insert of child entities. When a custom parent API is keyed by its immutable `SystemId`, its child should carry a related GUID foreign key so the navigation constraint uses that same stable external identity. `Multiplicity` controls whether metadata exposes an object (`ZeroOrOne`) or a collection (`Many`).

## Best Practice

Define the child foreign key as `Guid` with a `TableRelation` to the parent table's `SystemId`, then use `SubPageLink = "<Parent Id>" = Field(SystemId)` on the parent API page. A child collection may omit `Multiplicity` and rely on the default 1:N relationship, or declare `Multiplicity = Many` explicitly. Set `Multiplicity = ZeroOrOne` when the intended navigation metadata is a singleton.

See sample: [`link-api-parts-on-systemid-and-set-multiplicity.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/link-api-parts-on-systemid-and-set-multiplicity.good.al).

## Anti Pattern

On a parent API with `ODataKeyFields = SystemId`, linking a child business field such as `"Order No."` to the parent's `"No."` creates a second identity scheme for navigation instead of using the contract's stable GUID. A separate defect is an explicit `Multiplicity` that conflicts with the intended shape, such as `ZeroOrOne` on an order-lines collection or `Many` on a singleton. Do not treat omission alone as a defect: it is valid for a collection because the default is 1:N, while an intended singleton must explicitly use `Multiplicity = ZeroOrOne`.

See sample: [`link-api-parts-on-systemid-and-set-multiplicity.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/link-api-parts-on-systemid-and-set-multiplicity.bad.al).

## Source

[Developing a custom API](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-custom-api) and [Multiplicity property](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/properties/devenv-multiplicity-property).

## Examples

- [Good: link-api-parts-on-systemid-and-set-multiplicity.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/link-api-parts-on-systemid-and-set-multiplicity.good.al)
- [Bad: link-api-parts-on-systemid-and-set-multiplicity.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/link-api-parts-on-systemid-and-set-multiplicity.bad.al)

## Names

- [ErrorInfo.SystemId(\[Guid\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-systemid-method) (names SystemId)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#100 Add P0 integration and control add-in runtime guidance](../../../../changes/bcquality/100.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
