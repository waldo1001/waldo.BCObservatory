---
id: topic/dev-itpro/business-central-on-premises/upgrade/business-central-2025-release-wave-2-v27
type: topic
title: Business Central 2025 release wave 2 (v27)
summary: Upgrade guidance for on-premises Business Central 2025 release wave 2 (version 27). It answers questions about upgrade paths, pre-upgrade considerations, installing a version 27 update, and upgrading the System and Base Application from versions 25 and 26.
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:34.651Z"
  flags: []
generated:
  at: "2026-10-22T01:12:33.102Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4e938879cfa1e8c1372777d5765adbde0ce15d697d250d01eb06206472746f46
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v26
    title: Considerations before upgrading to Business Central version 26 and later
    date: "2026-08-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v27
    title: Install a Business Central 2025 release Wave 2 (version 27) Update
    date: "2026-02-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v27
    title: Upgrading Microsoft System and Base Application to Version 27
    date: "2026-01-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v27
    title: Upgrading to Dynamics 365 Business Central 2025 release wave 2
    date: "2026-01-06"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v26
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v27
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v27
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v27
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/upgrade
  localizations: []
  videos: []
  posts:
    - post/dvlprlife-com/https-www-dvlprlife-com-2026-06-june-2026-cumulative-updates-for-dynamics-365-business-central--4240d05509
    - post/thinkaboutit-be/7650
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Upgrade
  - Business Central 2025 release wave 2 (v27)
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/upgrade
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 2
  guideline: 0
bc_forms: []
member_hash: fde84c7445504ea526bb607ea3879b00d4d926486c43dadb75b4000a827c4bd9
narrative: generated
---

# Business Central 2025 release wave 2 (v27)

> Upgrade guidance for on-premises Business Central 2025 release wave 2 (version 27). It answers questions about upgrade paths, pre-upgrade considerations, installing a version 27 update, and upgrading the System and Base Application from versions 25 and 26.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Upgrade](../upgrade.md) > Business Central 2025 release wave 2 (v27) · tier official · system platform · narrative reviewed (checked by Opus)

## Overview

This section covers moving an on-premises Business Central deployment to 2025 release wave 2 (version 27). It has four pages: an overview of upgrade paths, a page of considerations before upgrading, a procedure for installing a version 27 update, and a step-by-step procedure for upgrading the Microsoft System and Base Application.

Start with the overview page on upgrade paths. It covers deprecated features and the system application refactoring. Then read the considerations page, which lists items to check before you begin. Finally, follow either the update installation page or the System and Base Application upgrade page, depending on your scenario.

The technical steps are similar in both procedures: database conversion, extension publishing, tenant synchronization, and data upgrade. The upgrade page also covers permission set migration and encryption management.

## Key points

- The overview page covers upgrade paths to version 27, deprecated features, system application refactoring, the base application, and add-on extensions.
- The pre-upgrade considerations page covers versions 26 to 29. It addresses deprecated or redesigned functionality, deleted objects (v24 and earlier), and the performance impact of installed extensions.
- Schema changes in the Subscription Billing extension (v25 to v26 and later) are covered, including force sync for schema migration.
- Deployment changes from v23 are noted: server port 7085 and SPN delegation configuration.
- Microsoft recommends transitioning to AL-based permissions.
- The update installation page covers database conversion, extension publishing, tenant synchronization, platform upgrade, and data upgrade, including multitenant deployments.
- The System and Base Application upgrade page gives steps for upgrading from versions 25 and 26 to version 27. It includes permission set migration and encryption management.

## Learn pages

- [Considerations before upgrading to Business Central version 26 and later](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v26): This article provides tips and considerations to prepare a solution when you're planning to upgrade to Business Central 2025 release wave 1 and later.
- [Install a Business Central 2025 release Wave 2 (version 27) Update](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v27): This article describes the tasks required for getting the monthly version 27 update applied to your Dynamics 365 Business Central on-premises.
- [Upgrading Microsoft System and Base Application to Version 27](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v27): Describes how to upgrade an unmodified Business Central version 15 through 25 to version 27
- [Upgrading to Dynamics 365 Business Central 2025 release wave 2](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v27): Provides an overview of Business Central 2025 release wave 2 upgrade process.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [June 2026 Cumulative Updates for Dynamics 365 Business Central](../../../../posts/dvlprlife-com/https-www-dvlprlife-com-2026-06-june-2026-cumulative-updates-for-dynamics-365-business-central--4240d05509.md) (community post): "2026 Wave 1 (28.2), 2025 Wave 2 (27.8) and 2025 Wave 1 (26.14), all dated June 2026"
- [Quick Tip: Business Central Update 27.5 Released and Version 28 Preview Sandboxes Available](../../../../posts/thinkaboutit-be/7650.md) (community post): "Business Central update 27.5 was released as the latest monthly update"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
