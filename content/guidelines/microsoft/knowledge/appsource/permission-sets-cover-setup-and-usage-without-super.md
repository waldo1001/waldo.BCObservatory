---
id: guideline/microsoft/knowledge/appsource/permission-sets-cover-setup-and-usage-without-super
type: guideline
title: AppSource permission sets must cover setup and usage without SUPER
summary: An AppSource app must provide permission sets that let assigned users complete the app's setup and normal usage without SUPER. The requirement is about complete effective grants, not about naming the permission set after the app.
tier: official
language: en
tags:
  - permission-set
  - super
  - appsource
  - setup
  - usage
  - tabledata
  - execute
  - submission
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:18.952Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1b81fb4682ae670af2c51bde89ffcfeefc7c1d60
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/appsource/permission-sets-cover-setup-and-usage-without-super.md
    title: "microsoft/BCQuality: AppSource permission sets must cover setup and usage without SUPER"
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
    - change/bcquality/108
repo_path: microsoft/knowledge/appsource/permission-sets-cover-setup-and-usage-without-super.md
layer: microsoft
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
identifiers: []
---

# AppSource permission sets must cover setup and usage without SUPER

> An AppSource app must provide permission sets that let assigned users complete the app's setup and normal usage without SUPER. The requirement is about complete effective grants, not about naming the permission set after the app.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/appsource/permission-sets-cover-setup-and-usage-without-super.md) · microsoft layer · appsource · BC all · tier official · derived

## Description

An AppSource app must provide permission sets that let assigned users complete the app's setup and normal usage without `SUPER`. The requirement is about complete effective grants, not about naming the permission set after the app. A package can compile and install with missing tabledata or execute permissions, then fail only when Marketplace validation or a real non-SUPER user reaches the omitted path.

## Best Practice

Trace every setup page, normal page, report, codeunit, and tabledata operation exposed by the app and cover it through assignable role permission sets composed from focused non-assignable sets. Validate setup and representative workflows as a user assigned only those app roles. Grant the minimum required operations; completeness is not a reason to use wildcards.

See sample: [`permission-sets-cover-setup-and-usage-without-super.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/appsource/permission-sets-cover-setup-and-usage-without-super.good.al).

## Anti Pattern

Shipping no permission set, omitting a tabledata or execute grant used by the app's own UI, or instructing users and validators to assign `SUPER` when setup fails. Do not flag a permission-set name that differs from the app name; no such naming requirement exists.

See sample: [`permission-sets-cover-setup-and-usage-without-super.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/appsource/permission-sets-cover-setup-and-usage-without-super.bad.al).

## Examples

- [Good: permission-sets-cover-setup-and-usage-without-super.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/appsource/permission-sets-cover-setup-and-usage-without-super.good.al)
- [Bad: permission-sets-cover-setup-and-usage-without-super.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/appsource/permission-sets-cover-setup-and-usage-without-super.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
