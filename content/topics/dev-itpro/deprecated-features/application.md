---
id: topic/dev-itpro/deprecated-features/application
type: topic
title: Application
summary: "Deprecated features in the Business Central application (W1): removals and replacements by release wave from 2019 to 2027, objects deleted from the Base App in 2025 release wave 1 (v26), and examples of moving off deprecated features. Use it to check whether a feature, report, API or table is deprecated or removed."
tier: official
language: en
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T01:01:32.224Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: cd00980406e8cbf3a632f207477d721433c6912097d8c47971865d963344dbec
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
    title: Deprecated features in the application
    date: "2026-11-16"
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

> Deprecated features in the Business Central application (W1): removals and replacements by release wave from 2019 to 2027, objects deleted from the Base App in 2025 release wave 1 (v26), and examples of moving off deprecated features. Use it to check whether a feature, report, API or table is deprecated or removed.

Path: [Deprecated features](../deprecated-features.md) > Application · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

This section lists application features that Business Central has deprecated or removed. The main page, "Deprecated features in the application", covers the W1 version and is organized by release wave, from 2019 up to 2027 release wave 1 (version 30.0). It names what is removed and what replaces it, for example the AMC Fundamentals app, Peppol formats, legacy reports and older APIs.

A second page, "Deleted objects in the Base App and first-party apps", covers 2025 release wave 1 (v26). It lists the obsolete tables and fields that are permanently deleted, across W1 and several localized versions, for the version 25.0 upgrade. It is the page to check if extension code depends on old Base App objects.

The subtopic "Examples of how to uptake deprecations" gives worked examples of moving to the replacements. Start with the main deprecation page to find your feature and wave, then use the examples if you need to migrate.

## Key points

- The main deprecation page is organized by release wave, from 2019 to 2027 release wave 1 (version 30.0).
- It lists replacements such as the AMC Fundamentals app, a Peppol BIS 3.0 migration, Excel reports and replacements for legacy Power BI apps.
- It notes removal of the Finance reports API and the migration from API v1.0 to v2.0.
- 2025 release wave 1 (v26) permanently deletes over 150 obsolete tables and fields from the Base App and first-party apps.
- The deletions aim to improve database performance, unify the codebase across regions and reduce technical debt.
- Deleted objects are listed for W1 and the AT, APAC, BE, CH and CZ localizations, for the version 25.0 upgrade.
- Removed objects are in the Obsolete::Removed state.
- Migration examples cover the North American bank reconciliation and deposits removal, user groups to permission sets or security groups, and legacy views to modern list views.

## Subtopics

- [Examples of how to uptake deprecations](application/examples-of-how-to-uptake-deprecations.md) (3 pages)

## More Learn pages

- [Deleted objects in the Base App and first-party apps](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deleted-objects-25w1): Describes the objects that have been deleted in the W1 and country versions in 2025 release wave 1.
- [Deprecated features in the application](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deprecated-features-w1): Describes the features that have been moved, removed, or replaced in the W1 version.
  - In the observatory: [Page 20504 "Subc. Subcontracting Worksheet"](../../../objects/page/20504.md), [Page 99000886 "Subcontracting Worksheet"](../../../objects/page/99000886.md), [Report 20505 "Subc. Calculate Subcontracts"](../../../objects/report/20505.md), [Report 99001015 "Calculate Subcontracts"](../../../objects/report/99001015.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
