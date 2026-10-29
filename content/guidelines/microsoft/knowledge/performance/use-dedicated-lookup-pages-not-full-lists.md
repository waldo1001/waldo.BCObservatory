---
id: guideline/microsoft/knowledge/performance/use-dedicated-lookup-pages-not-full-lists
type: guideline
title: Point lookups at a dedicated lookup page, not the full list
summary: A TableRelation lookup opens the table's LookupPageId. If that is the full list page, the lookup runs that page's triggers, FactBoxes, and calculated fields even though the dropdown never shows them. The base application added dedicated Customer, Vendor, and Item lookup pages for this reason.
tier: official
language: en
tags:
  - lookuppageid
  - lookup-page
  - list-page
  - factbox
  - table-relation
  - dropdown
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:43.756Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6a9793f8477fea718cef3eb71163a86f7e70572e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-dedicated-lookup-pages-not-full-lists.md
    title: "microsoft/BCQuality: Point lookups at a dedicated lookup page, not the full list"
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
    - change/bcquality/153
repo_path: microsoft/knowledge/performance/use-dedicated-lookup-pages-not-full-lists.md
layer: microsoft
kind: rule
domain: performance
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
  - TableRelation
  - LookupPageId
  - OnAfterGetRecord
  - DrillDownPageId
---

# Point lookups at a dedicated lookup page, not the full list

> A TableRelation lookup opens the table's LookupPageId. If that is the full list page, the lookup runs that page's triggers, FactBoxes, and calculated fields even though the dropdown never shows them. The base application added dedicated Customer, Vendor, and Item lookup pages for this reason.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-dedicated-lookup-pages-not-full-lists.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

A `TableRelation` lookup opens the table's `LookupPageId`. If that is the full list page, the lookup runs that page's triggers, FactBoxes, and calculated fields even though the dropdown never shows them. The base application added dedicated Customer, Vendor, and Item lookup pages for this reason. Agents set `LookupPageId` to the main list because it already exists.

## Best Practice

Give master tables a slim lookup page (`PageType = List`, few columns, no FactBoxes, no heavy `OnAfterGetRecord`) and assign it to `LookupPageId`. Keep the full list for `DrillDownPageId` and the role-explorer entry.

See sample: [`use-dedicated-lookup-pages-not-full-lists.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-dedicated-lookup-pages-not-full-lists.good.al).

## Anti Pattern

`LookupPageId = Page::"... List"` on a table that already has (or should have) a lookup page. Opening a field lookup then pays list-page cost. The signal is `LookupPageId` pointing at a page that declares FactBoxes or a wide repeater.

See sample: [`use-dedicated-lookup-pages-not-full-lists.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-dedicated-lookup-pages-not-full-lists.bad.al).

## Examples

- [Good: use-dedicated-lookup-pages-not-full-lists.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-dedicated-lookup-pages-not-full-lists.good.al)
- [Bad: use-dedicated-lookup-pages-not-full-lists.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-dedicated-lookup-pages-not-full-lists.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
