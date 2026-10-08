---
id: topic/dev-itpro/development/extension-lifecycle
type: topic
title: Extension lifecycle
summary: Extension lifecycle in Business Central covers the phases of an extension from development to deprovisioning, extension types and scopes, and moving apps between scopes. It answers questions about global apps, per-tenant extensions, DEV extensions, and about migration, translation, testing, deployment, updating and deprecation.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:15:41.284Z"
  flags: []
generated:
  at: "2026-10-08T02:14:42.423Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ce8b4001b102ed6b04e1bcbed65f87e7870a574ef9de00010a652959a5151eaa
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-application-example-purchase-invoice-discounts
    title: Application Testing Example to Test Purchase Invoice Discounts
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecation-guidelines
    title: Best Practices for Deprecation of AL Code
    date: "2024-04-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-handler-methods
    title: Create Handler Methods for Automated Tests
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testrunner-codeunits
    title: Create Test Runner Codeunits in AL
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecating-with-statements-overview
    title: Deprecating explicit and implicit with statements
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-scenarios-moving-table-fields
    title: Development process for moving tables and fields between extensions
    date: "2025-03-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ext-dev-lifecycle-overview
    title: Extension Development Lifecycle Overview
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-types-and-scope
    title: Extension types and scope
    date: "2026-08-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-offer
    title: FAQ about managing and submitting your Business Central offer
    date: "2023-12-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-test
    title: FAQ about Testing your Business Central App
    date: "2022-08-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-update
    title: FAQ about Updating your Business Central App
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-generating-delta-files
    title: Generating Delta files
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-hotfixing-appsource-app
    title: Hotfix a Marketplace app
    date: "2023-11-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-unpublish-and-uninstall-extension-v2
    title: How to Unpublish and Uninstall an Extension
    date: "2022-05-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-life-cycle
    title: Lifecycle of apps and extensions
    date: "2025-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-update-app-life-cycle-faq
    title: Lifecycle of apps and extensions FAQ
    date: "2021-08-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-maintain
    title: Maintain Marketplace apps and per-tenant extensions
    date: "2025-03-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecation-timeline
    title: Microsoft Timeline for Deprecating Code in Business Central
    date: "2025-05-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields
    title: Migrating Tables and Fields Between Extensions
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migration-json-file
    title: Migration JSON file
    date: "2025-05-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-moving-scope
    title: Moving between extension scopes
    date: "2025-05-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-move-table-fields-between-extensions
    title: Moving tables and fields between extensions
    date: "2025-03-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-down
    title: Moving Tables and Fields to Extensions Down the Dependency Graph
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-up
    title: Moving Tables and Fields to Extensions Up the Dependency Graph
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-performance-toolkit
    title: Performance Toolkit extension
    date: "2024-02-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-how-publish-and-install-an-extension-v2
    title: Publishing and Installing an Extension
    date: "2025-02-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-codeunits-and-test-methods
    title: Test Codeunits and Test Methods in AL
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testing-pages
    title: Test pages
    date: "2022-08-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testing-application
    title: Testing the application overview
    date: "2025-09-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-translations-overview
    title: Translations Overview
    date: "2021-06-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-customization-update-lifecycle
    title: Update Lifecycle for Tenant Customizations
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-upgrading-extensions
    title: Upgrading Extensions
    date: "2021-09-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-upgrade-appsource-app-in-prod
    title: Upgrading Marketplace Apps in Production
    date: "2021-08-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-work-with-translation-files
    title: Work with XLIFF Translation Files
    date: "2026-08-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-install-code
    title: Writing extensions installation code
    date: "2022-02-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ext-dev-lifecycle-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-types-and-scope
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-moving-scope
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development
    - topic/dev-itpro/development/extension-lifecycle/moving-tables-and-fields-between-extensi
    - topic/dev-itpro/development/extension-lifecycle/migration
    - topic/dev-itpro/development/extension-lifecycle/translation
    - topic/dev-itpro/development/extension-lifecycle/testing
    - topic/dev-itpro/development/extension-lifecycle/deploying-and-installing
    - topic/dev-itpro/development/extension-lifecycle/updating-and-hotfixing
    - topic/dev-itpro/development/extension-lifecycle/deprecating-code
  localizations: []
  videos:
    - video/f_i4_BRz-oA
  posts:
    - post/demiliani-com/12123
  guidelines: []
  changes:
    - change/bcapps/9569
    - change/bcapps/9601
    - change/bcquality/177
learn_toc_path:
  - Development
  - Extension lifecycle
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development
children:
  - topic/dev-itpro/development/extension-lifecycle/moving-tables-and-fields-between-extensi
  - topic/dev-itpro/development/extension-lifecycle/migration
  - topic/dev-itpro/development/extension-lifecycle/translation
  - topic/dev-itpro/development/extension-lifecycle/testing
  - topic/dev-itpro/development/extension-lifecycle/deploying-and-installing
  - topic/dev-itpro/development/extension-lifecycle/updating-and-hotfixing
  - topic/dev-itpro/development/extension-lifecycle/deprecating-code
coverage:
  learn: 35
  code: 0
  video: 1
  blog: 1
  guideline: 0
bc_forms:
  - 149000
  - 149001
  - 149003
  - 149004
  - 149005
  - 149006
  - 149007
  - 149008
  - 149009
member_hash: c0d4866c16084204cf993cc5fa286033b6acd8eb67519ff6500f2079239ede22
narrative: generated
---

# Extension lifecycle

> Extension lifecycle in Business Central covers the phases of an extension from development to deprovisioning, extension types and scopes, and moving apps between scopes. It answers questions about global apps, per-tenant extensions, DEV extensions, and about migration, translation, testing, deployment, updating and deprecation.

Path: [Development](../development.md) > Extension lifecycle · tier official · system development · narrative reviewed (checked by Opus)

## Overview

The extension lifecycle section describes the path of a Business Central extension: planning, development, testing, deployment, operations, monitoring and deprovisioning. The overview page ties these phases to related processes such as data migration, translation, testing and upgrade.

Two own pages explain scope. Extension types and scope separates global apps installed from Marketplace, per-tenant extensions (PTE) deployed to specific environments, and DEV extensions used only in sandbox. Moving between extension scopes covers the identity, naming and ID range requirements when an app changes between PTE, DEV and Marketplace.

Subtopics go deeper on each phase: migration and moving tables and fields between extensions on-premises, translation with XLIFF, testing, deploying and installing, updating and hotfixing, and deprecating code. Start with the lifecycle overview, then extension types and scope, then the subtopic that matches your current phase.

## Key points

- Lifecycle phases: planning, development, testing, deployment, operations, monitoring and deprovisioning.
- Extension types: global apps from Marketplace, per-tenant extensions for specific environments, and DEV extensions for sandbox only.
- Moving an app between PTE, DEV and Marketplace scopes has identity, naming and ID range requirements (2023 release wave 2 page).
- Migration covers .delta files from Compare-NAVApplicationObject, migration.json, and transition extensions.
- On-premises moves of tables and fields use MovedTo and MovedFrom properties and staged moves, with attention to publishing order.
- Translation uses XLIFF files, with layered sources overriding each other by language priority and app dependencies.
- Testing covers AL test codeunits, test pages, handlers, test runners and the Performance Toolkit.
- Deprecation uses Obsolete properties and preprocessor directives, CLEAN symbols, warnings AL0604 and AL0606, and the deprecation of 'with' statements.

## Subtopics

- [Moving tables and fields between extensions (on-premises)](extension-lifecycle/moving-tables-and-fields-between-extensi.md) (2 pages)
- [Migration](extension-lifecycle/migration.md) (5 pages)
- [Translation](extension-lifecycle/translation.md) (2 pages)
- [Testing](extension-lifecycle/testing.md) (8 pages)
- [Deploying and installing](extension-lifecycle/deploying-and-installing.md) (6 pages)
- [Updating and hotfixing](extension-lifecycle/updating-and-hotfixing.md) (6 pages)
- [Deprecating code](extension-lifecycle/deprecating-code.md) (3 pages)

## More Learn pages

- [Extension Development Lifecycle Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ext-dev-lifecycle-overview): Explains the phases involved in the lifecycle of developing an extension.
- [Extension types and scope](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-types-and-scope): Extension types for Business Central explained: global apps, per-tenant extensions, and DEV extensions. Learn how scope and environment affect each type.
- [Moving between extension scopes](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-moving-scope): Describes how an extension in one scope can be moved into another scope in Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9569 Enforce permissions when reviewing orphaned extension data](../../../changes/bcapps/9569.md) (code change): "Permission checks now consistently apply when marking orphaned extension data"
- [#9601 Reset workflow templates no longer removes steps from active workflows](../../../changes/bcapps/9601.md) (code change): "Reset workflow templates no longer removes steps from active workflows"
- [#177 Add retention policy knowledge to the privacy domain](../../../changes/bcquality/177.md) (code change): "Added guidance to the privacy domain in BCQuality about registering extension-owned tables"
- [Dynamics 365 Business Central on-prem: be careful when referencing .NET assemblies across versions.](../../../posts/demiliani-com/12123.md) (community post): "extensions must be compiled with .NET Standard assemblies when published to service tiers"
- [Microsoft presents: Cloud Migration from any SQL](../../../videos/f_i4_BRz-oA.md) (video): "AL extensibility; migration patterns; migrator framework; extension points"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 9 objects with no object page: page/149000, page/149001, page/149003, page/149004, page/149005, page/149006, page/149007, page/149008, page/149009.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
