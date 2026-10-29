---
id: guideline/community/knowledge/appsource/set-usagecategory-on-searchable-entry-points
type: guideline
title: Set UsageCategory on searchable entry points
summary: Pages and reports that users are expected to open directly must set UsageCategory. Without it, the object is absent from Tell Me and users cannot bookmark it from the web client.
tier: official
language: en
tags:
  - usagecategory
  - tell-me
  - search
  - page
  - report
  - discoverability
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:11.550Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 924123663334a9ea5eb900765df0076e46ac7344
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/set-usagecategory-on-searchable-entry-points.md
    title: "microsoft/BCQuality: Set UsageCategory on searchable entry points"
    date: "2026-09-14"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-applicationarea-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/142
repo_path: community/knowledge/appsource/set-usagecategory-on-searchable-entry-points.md
layer: community
kind: rule
domain: appsource
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
  - UsageCategory
  - ReportsAndAnalysis
  - ApplicationArea
---

# Set UsageCategory on searchable entry points

> Pages and reports that users are expected to open directly must set UsageCategory. Without it, the object is absent from Tell Me and users cannot bookmark it from the web client.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/set-usagecategory-on-searchable-entry-points.md) · community layer · appsource · BC all · tier official · derived

## Description

Pages and reports that users are expected to open directly must set `UsageCategory`. Without it, the object is absent from Tell Me and users cannot bookmark it from the web client. Supporting objects such as list parts, dialogs, API pages, and objects reached only through another page do not need to be searchable entry points.

## Best Practice

Set `UsageCategory` to the category that matches the entry point, such as `Lists`, `Tasks`, `ReportsAndAnalysis`, or `Documents`. Also set the appropriate object-level `ApplicationArea` so search results respect feature visibility.

See sample: [`set-usagecategory-on-searchable-entry-points.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/set-usagecategory-on-searchable-entry-points.good.al).

## Anti Pattern

A user-facing page or report intended for direct discovery omits `UsageCategory` or sets it to `None`. Do not infer intent from the object type alone; require evidence that the object is a direct user entry point.

See sample: [`set-usagecategory-on-searchable-entry-points.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/set-usagecategory-on-searchable-entry-points.bad.al).

## Examples

- [Good: set-usagecategory-on-searchable-entry-points.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/set-usagecategory-on-searchable-entry-points.good.al)
- [Bad: set-usagecategory-on-searchable-entry-points.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/set-usagecategory-on-searchable-entry-points.bad.al)

## Names

- [Session.ApplicationArea(\[Text\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-applicationarea-method) (names ApplicationArea)

## Changed by

- [#142 Add AL-focused AppSource validation guidance](../../../../changes/bcquality/142.md), 2026-09-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
