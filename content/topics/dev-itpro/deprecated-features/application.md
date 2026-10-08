---
id: topic/dev-itpro/deprecated-features/application
type: topic
title: Application
summary: Deprecated application features in Business Central W1 across release waves 2020 to 2027, plus objects deleted from the Base App and first-party apps in 2025 release wave 1 (v26). It answers what was removed or deprecated, when, and how to move off it.
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:55.310Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 01f172f206cee2acbd111c94386e3091bb1f0e90d915876755d7aa2097d71b05
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deleted-objects-25w1
    title: Deleted objects in the Base App and first-party apps
    date: "2025-01-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deprecated-features-na-bank-rec
    title: Deprecated bank reconciliation and deposits features in the North American version
    date: "2023-09-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deprecated-features-w1
    title: Deprecated Features in the application
    date: "2026-02-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deprecated-features-user-groups
    title: Migrate from User Groups to Permission Sets or Security Groups
    date: "2023-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-views-legacy
    title: Migrating to modern list views
    date: "2024-06-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deleted-objects-25w1
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deprecated-features-w1
  objects: []
  features: []
  topics:
    - topic/dev-itpro/deprecated-features
    - topic/dev-itpro/deprecated-features/application/examples-of-how-to-uptake-deprecations
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Deprecated features
  - Application
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/deprecated-features
children:
  - topic/dev-itpro/deprecated-features/application/examples-of-how-to-uptake-deprecations
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: b0d188bef2ec4b982683cee15984c007f5db76f7cc7b1e396f7d06f03bdb0f1a
narrative: generated
---

# Application

> Deprecated application features in Business Central W1 across release waves 2020 to 2027, plus objects deleted from the Base App and first-party apps in 2025 release wave 1 (v26). It answers what was removed or deprecated, when, and how to move off it.

Path: [Deprecated features](../deprecated-features.md) > Application · tier official · system none · narrative reviewed (checked by Opus)

## Overview

This section lists what has been deprecated or removed in the Business Central application. One page covers deprecated W1 features by release wave, from 2020 release wave 1 through 2025 release wave 2, with items such as API v1.0, Finance reports API, legacy Power BI apps, Intelligent Cloud Insights, Excel reports and configuration packages. Another page covers the table and field objects permanently deleted in 2025 release wave 1 (v26).

The deleted objects page lists more than 150 obsolete tables and fields in the Base App and localized versions (W1, AT, APAC, BE, CH, CZ), tied to the version 25.0 upgrade. The goal is better database performance, a more unified codebase across regions and less technical debt.

Start with the deprecated features page to check whether a feature you rely on is affected and in which wave. Then use the subtopic with uptake examples for practical guidance on moving off the North American bank reconciliation and deposits, user groups, and legacy views.

## Key points

- Deprecated W1 features are listed by release wave, from 2020 release wave 1 to 2025 release wave 2.
- Removals named include API v1.0, Finance reports API, legacy Power BI apps, Intelligent Cloud Insights and configuration packages.
- Excel reports deprecation and moved subcontracting objects are also covered.
- 2025 release wave 1 (v26) permanently deletes over 150 obsolete tables and fields from the Base App and first-party apps.
- Deleted objects are listed for W1, AT, APAC, BE, CH and CZ, relating to the version 25.0 upgrade.
- Deleted objects are in the Obsolete::Removed state; the aims are database performance, unified base apps and less technical debt.
- Uptake examples cover North American bank reconciliation and deposits removal, user groups to permission sets or security groups, and legacy views to modern list views.

## Subtopics

- [Examples of how to uptake deprecations](application/examples-of-how-to-uptake-deprecations.md) (3 pages)

## More Learn pages

- [Deleted objects in the Base App and first-party apps](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deleted-objects-25w1): Describes the objects that have been deleted in the W1 and country versions in 2025 release wave 1.
- [Deprecated Features in the application](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deprecated-features-w1): Describes the features that have been moved, removed, or replaced in the W1 version.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
