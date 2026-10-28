---
id: topic/dev-itpro/deprecated-features/application
type: topic
title: Application
summary: "Deprecated application features in Business Central: which W1 features are ending or replaced across release waves, which obsolete tables and fields were deleted from the Base App in 2025 release wave 1 (v26), and examples of moving off deprecated features."
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:23.872Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f9213fa5f586e4c456f7450d13f1d480a77e9d669e355b6a7707b5e9ef12e887
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

> Deprecated application features in Business Central: which W1 features are ending or replaced across release waves, which obsolete tables and fields were deleted from the Base App in 2025 release wave 1 (v26), and examples of moving off deprecated features.

Path: [Deprecated features](../deprecated-features.md) > Application · tier official · system none · narrative reviewed (checked by Opus)

## Overview

This section tracks deprecations in the Business Central application. One page lists deprecated W1 features by release wave, with removal timing and the alternatives to use. A second page documents the permanent deletion of obsolete tables and fields from the Base Application and first-party apps.

A subtopic gives worked examples of moving off deprecated features: the North American bank reconciliation and deposits removal, the move from user groups to permission sets or security groups, and the move from legacy views to modern list views.

Start with the deprecated features page to see what affects you and when. Then check the deleted objects page if you have extensions that depend on Base App tables or fields, and use the examples subtopic for migration guidance.

## Key points

- The deprecated features page covers W1 removals and replacements from 2024 release wave 2 through 2027 release wave 1 (version 30.0).
- Features named on the deprecated features page include the AMC Fundamentals app, Peppol BIS 2.0 and 2.1, Peppol BIS 3.0, the Finance reports API, the Analytics API and Excel reports.
- 2025 release wave 1 (v26) permanently deletes over 150 obsolete tables and fields from the Base App and first-party apps.
- The deletions aim to improve database performance, unify the codebase across regions and reduce technical debt.
- Deleted objects are listed for W1 and localized versions including AT, APAC, BE, CH and CZ, for the version 25.0 upgrade.
- The deleted objects page refers to the Obsolete::Removed state for the affected tables and fields.
- Uptake examples cover the bank reconciliation and deposits removal in North America, user groups to permission sets or security groups, and legacy views to modern list views.

## Subtopics

- [Examples of how to uptake deprecations](application/examples-of-how-to-uptake-deprecations.md) (3 pages)

## More Learn pages

- [Deleted objects in the Base App and first-party apps](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deleted-objects-25w1): Describes the objects that have been deleted in the W1 and country versions in 2025 release wave 1.
- [Deprecated Features in the application](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deprecated-features-w1): Describes the features that have been moved, removed, or replaced in the W1 version.
  - In the observatory: [Codeunit 1799 "Import Config. Package File"](../../../objects/codeunit/1799.md), [Codeunit 1800 "Assisted Company Setup"](../../../objects/codeunit/1800.md), [Codeunit 1805 "Import Config. Package Files"](../../../objects/codeunit/1805.md), [Codeunit 9510 "Document Service Management"](../../../objects/codeunit/9510.md), [Enum 9120 "Company Data Type (Internal)"](../../../objects/enum/9120.md), [Enum 9121 "Company Data Type (Production)"](../../../objects/enum/9121.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
