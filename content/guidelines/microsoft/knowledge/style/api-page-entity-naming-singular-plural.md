---
id: guideline/microsoft/knowledge/style/api-page-entity-naming-singular-plural
type: guideline
title: "`EntityName` is singular; `EntitySetName` is plural"
summary: EntityName and EntitySetName on an API page are the two halves of the OData naming contract. EntityName names a single record — 'customer', 'salesOrder', 'item'. EntitySetName names the collection — 'customers', 'salesOrders', 'items'.
tier: official
language: en
tags:
  - api-page
  - entityname
  - entitysetname
  - singular
  - plural
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:58.525Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 48ce0cff2ae52a571477256297146ab87e0201b0
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-entity-naming-singular-plural.md
    title: "microsoft/BCQuality: `EntityName` is singular; `EntitySetName` is plural"
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
repo_path: microsoft/knowledge/style/api-page-entity-naming-singular-plural.md
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
  - EntityName
  - EntitySetName
---

# `EntityName` is singular; `EntitySetName` is plural

> EntityName and EntitySetName on an API page are the two halves of the OData naming contract. EntityName names a single record — 'customer', 'salesOrder', 'item'. EntitySetName names the collection — 'customers', 'salesOrders', 'items'.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-entity-naming-singular-plural.md) · microsoft layer · style · BC all · tier official · derived

## Description

`EntityName` and `EntitySetName` on an API page are the two halves of the OData naming contract. `EntityName` names a single record — `'customer'`, `'salesOrder'`, `'item'`. `EntitySetName` names the collection — `'customers'`, `'salesOrders'`, `'items'`. Swapping them — `EntityName = 'customers'`, `EntitySetName = 'customer'` — produces URLs that lie to consumers: `GET /customers` returns one row, `GET /customers('id')` returns a collection. The OData conventions consumers rely on for client-side code generation depend on the singular/plural pairing being correct.

## Best Practice

Pick the singular noun for `EntityName` and its grammatical plural for `EntitySetName`, both in camelCase. For compound nouns, only the trailing noun is pluralized: `EntityName = 'salesOrder'`, `EntitySetName = 'salesOrders'`. For nouns whose plural is irregular, use the natural English form — `EntitySetName = 'people'` for `EntityName = 'person'`.

See sample: [`api-page-entity-naming-singular-plural.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-entity-naming-singular-plural.good.al).

## Anti Pattern

`EntityName = 'customers'`, `EntitySetName = 'customer'` — singular and plural swapped. Equally wrong is reusing the same form for both — `EntityName = 'customer'`, `EntitySetName = 'customer'` — which breaks OData metadata parsers and client codegen.

See sample: [`api-page-entity-naming-singular-plural.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-entity-naming-singular-plural.bad.al).

## Examples

- [Good: api-page-entity-naming-singular-plural.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-entity-naming-singular-plural.good.al)
- [Bad: api-page-entity-naming-singular-plural.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-entity-naming-singular-plural.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
