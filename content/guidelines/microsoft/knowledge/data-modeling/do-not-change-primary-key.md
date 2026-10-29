---
id: guideline/microsoft/knowledge/data-modeling/do-not-change-primary-key
type: guideline
title: Never Change a Published Table's Primary or Clustered Key Field List
summary: Once a table has shipped — to AppSource, or to any customer environment that has already upgraded onto it — its primary key, and any other key marked Clustered = true, is frozen.
tier: official
language: en
tags:
  - primary-key
  - clustered-key
  - table-design
  - appsource
  - breaking-change
  - schema-upgrade
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:54.341Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 37cb3e3e02e817827fded74a7e58796864d00c49
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/do-not-change-primary-key.md
    title: "microsoft/BCQuality: Never Change a Published Table's Primary or Clustered Key Field List"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0009
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/156
repo_path: microsoft/knowledge/data-modeling/do-not-change-primary-key.md
layer: microsoft
kind: rule
domain: data-modeling
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
  - AS0009
---

# Never Change a Published Table's Primary or Clustered Key Field List

> Once a table has shipped — to AppSource, or to any customer environment that has already upgraded onto it — its primary key, and any other key marked Clustered = true, is frozen.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/do-not-change-primary-key.md) · microsoft layer · data-modeling · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

Once a table has shipped — to AppSource, or to any customer environment that has already upgraded onto it — its primary key, and any other key marked `Clustered = true`, is frozen. This includes adding a field to the key, not only removing or reordering one: Business Central identifies existing rows by their key value, so any change to which fields compose that key invalidates every row already stored under the old shape, and the platform's upgrade validation rejects it outright (`AS0009`). This is easy to trip over because it doesn't look like the well-known "don't delete a field" mistake — the field being added is often brand new, and folding a new discriminating dimension straight into the existing key feels like the natural, un-denormalized way to model it. On an unpublished table that is correct; on a published one it is a breaking schema change regardless of which direction the field list changed, and there is no in-place fix once the upgrade is rejected, only reverting the key to its published shape.

## Best Practice

Leave a published table's key exactly as shipped. Model a new discriminating dimension as a separate table with its own key instead of adding a field to the existing key, and branch orchestration code by the new dimension rather than filtering one shared table on an extra key field.

See sample: [`do-not-change-primary-key.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/do-not-change-primary-key.good.al).

## Anti Pattern

Adding a field to a published table's primary or clustered key to distinguish a new case. This fails AppSource validation or any customer upgrade with `AS0009` as soon as rows already exist under the old key shape, whether the field is being added, removed, or reordered.

See sample: [`do-not-change-primary-key.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/do-not-change-primary-key.bad.al).

## Examples

- [Good: do-not-change-primary-key.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/do-not-change-primary-key.good.al)
- [Bad: do-not-change-primary-key.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/do-not-change-primary-key.bad.al)

## Names

- [AppSourceCop Error AS0009](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0009) (names AS0009)

## Changed by

- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
