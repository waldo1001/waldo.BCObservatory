---
id: topic/dev-itpro/business-central-on-premises/upgrade/business-central-2025-release-wave-1-v26
type: topic
title: Business Central 2025 release wave 1 (v26)
summary: Upgrading on-premises Business Central to 2025 release wave 1 (version 26). It answers questions about upgrade paths, pre-upgrade considerations, and the step-by-step procedures for installing a version 26 update or upgrading the System and Base Application from earlier versions.
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:42.546Z"
  flags: []
generated:
  at: "2026-10-07T16:30:41.512Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 88536bd8b69d105d65662ec2cf66b94a1ae2af33096fd052fb1d050707bb63a7
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v26
    title: Considerations before upgrading to Business Central version 26 and later
    date: "2026-08-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v26
    title: Install a Business Central 2025 Release Wave 1 (Version 26) Update
    date: "2025-09-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v26
    title: Upgrade Microsoft System and Base Application to Version 26
    date: "2026-01-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v26
    title: Upgrade to Dynamics 365 Business Central 2025 release wave 1
    date: "2025-02-07"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v26
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v26
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v26
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v26
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/upgrade
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Upgrade
  - Business Central 2025 release wave 1 (v26)
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/upgrade
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 2c3b64706f9cd9e4b6ab10fed6093bacfe91675fd52b5b1bf621225f22552777
narrative: generated
---

# Business Central 2025 release wave 1 (v26)

> Upgrading on-premises Business Central to 2025 release wave 1 (version 26). It answers questions about upgrade paths, pre-upgrade considerations, and the step-by-step procedures for installing a version 26 update or upgrading the System and Base Application from earlier versions.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Upgrade](../upgrade.md) > Business Central 2025 release wave 1 (v26) · tier official · system platform · narrative reviewed by Opus

## Overview

This section covers moving an on-premises Business Central deployment to 2025 release wave 1 (version 26). It has four pages: an overview of upgrade paths and architecture, a pre-upgrade considerations page, and two procedure pages. The procedures cover installing a version 26 update and upgrading the Microsoft System and Base Application from version 25 or earlier.

Start with the overview page. It explains the architecture changes, including extension-based development, the System Application, and the Business Foundation extension dependencies. Then read the considerations page for deprecated functionality, deleted objects, schema changes, and extension performance effects. Finally, follow the procedure that matches your starting point: the update page for installing a version 26 update, or the upgrade page for moving from an earlier version.

Both procedures follow the same broad flow: convert the database, publish extensions, synchronize the tenant, and run the data upgrade.

## Key points

- The overview page describes the upgrade paths and architecture changes: extension-based development, System Application, Business Foundation extension dependencies, and cloud migration.
- The considerations page applies to versions 26 to 29. It covers deprecated or redesigned functionality, deleted objects (v24 and earlier), and the performance impact of installed extensions.
- Schema changes in the Subscription Billing extension (v25 to v26 and later) are covered, including the use of force sync for schema migration.
- Deployment changes from v23 are noted: port 7085 and SPN delegation configuration.
- Microsoft recommends transitioning to AL-based permissions.
- The install page covers platform upgrade, application upgrade, extension publishing, database synchronization, data upgrade, and license import.
- The upgrade page covers upgrading the System and Base Application to v26 from version 25 or earlier (back to version 16). It includes database conversion, tenant synchronization, permission sets, and encryption management.

## Learn pages

- [Considerations before upgrading to Business Central version 26 and later](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v26): This article provides tips and considerations to prepare a solution when you're planning to upgrade to Business Central 2025 release wave 1 and later.
- [Install a Business Central 2025 Release Wave 1 (Version 26) Update](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v26): This article describes the tasks required for getting the monthly version 26 update applied to your Dynamics 365 Business Central on-premises.
- [Upgrade Microsoft System and Base Application to Version 26](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v26): Learn how to upgrade an unmodified Business Central version 15 through 25 to version 26.
- [Upgrade to Dynamics 365 Business Central 2025 release wave 1](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v26): Provides an overview of the upgrade process for Business Central 2025 release wave 1.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
