---
id: guideline/microsoft/knowledge/style/api-page-camelcase-properties
type: guideline
title: API pages use camelCase, alphanumeric-only values for API properties
summary: API pages — pages declared with PageType = API — surface as OData/JSON endpoints. The strings that appear in the URL (APIPublisher, APIGroup, EntityName, EntitySetName) and the JSON payload field names follow different naming rules from the rest of AL.
tier: official
language: en
tags:
  - api-page
  - camelcase
  - apipublisher
  - apigroup
  - entityname
  - entitysetname
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:58.347Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 41a812e30cc1c07559b8f61496926c8c67331ed9
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-camelcase-properties.md
    title: "microsoft/BCQuality: API pages use camelCase, alphanumeric-only values for API properties"
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
repo_path: microsoft/knowledge/style/api-page-camelcase-properties.md
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
  - APIPublisher
  - APIGroup
  - EntityName
  - EntitySetName
---

# API pages use camelCase, alphanumeric-only values for API properties

> API pages — pages declared with PageType = API — surface as OData/JSON endpoints. The strings that appear in the URL (APIPublisher, APIGroup, EntityName, EntitySetName) and the JSON payload field names follow different naming rules from the rest of AL.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-camelcase-properties.md) · microsoft layer · style · BC all · tier official · derived

## Description

API pages — pages declared with `PageType = API` — surface as OData/JSON endpoints. The strings that appear in the URL (`APIPublisher`, `APIGroup`, `EntityName`, `EntitySetName`) and the JSON payload field names follow different naming rules from the rest of AL. They must be camelCase and use only alphanumeric characters: no hyphens, no underscores, no spaces, no punctuation. `'Contoso-App'`, `'contoso_app'`, and `'contoso.app'` are all rejected. The same rule applies to page field names exposed via `Name = '…'` on API page controls — those names appear verbatim in the JSON keys.

## Best Practice

Pick camelCase identifiers up front: `APIPublisher = 'contoso'`, `APIGroup = 'app1'`, `EntityName = 'customer'`, field `Name = 'displayName'`. Keep them short — they end up in URL paths and JSON keys that every consumer types.

See sample: [`api-page-camelcase-properties.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-camelcase-properties.good.al).

## Anti Pattern

`APIPublisher = 'Contoso-App'` (hyphen rejected, capitalization wrong for camelCase), `EntityName = 'sales_order'` (underscore rejected), or fields exposed with `Name = 'Display Name'` (space rejected). The compiler usually catches these, but the failure mode is opaque and the rename cost on a deployed API is high.

See sample: [`api-page-camelcase-properties.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-camelcase-properties.bad.al).

## Examples

- [Good: api-page-camelcase-properties.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-camelcase-properties.good.al)
- [Bad: api-page-camelcase-properties.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-camelcase-properties.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
