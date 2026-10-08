---
id: topic/dev-itpro/business-central-on-premises/upgrade/business-central-2026-release-wave-2-v29
type: topic
title: Business Central 2026 release wave 2 (v29)
summary: Upgrading on-premises Business Central to 2026 release wave 2 (v29). Covers the upgrade overview, things to check before upgrading to v26 and later, the step-by-step upgrade from version 25, 26, 27 or 28 to v29, and how to install a v29 update. Use it for questions about upgrade paths, steps and risks.
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:41.609Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 326fa3cb5b9cda768e3484facf63169df477465b923ba1f5002aa6f645f4d5b0
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v26
    title: Considerations before upgrading to Business Central version 26 and later
    date: "2026-08-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v29
    title: Install a Business Central 2026 release wave 2 (version 29) Update
    date: "2026-09-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v29
    title: Upgrade to Business Central 2026 release wave 2 (version 29)
    date: "2026-09-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v29
    title: Upgrading to Dynamics 365 Business Central 2026 release wave 2
    date: "2026-05-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v26
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v29
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v29
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v29
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
  - Business Central 2026 release wave 2 (v29)
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
member_hash: bb19bc24266d3770671d62d35bcd52382bc7b9188b90751e4908b857e79e74cb
narrative: generated
---

# Business Central 2026 release wave 2 (v29)

> Upgrading on-premises Business Central to 2026 release wave 2 (v29). Covers the upgrade overview, things to check before upgrading to v26 and later, the step-by-step upgrade from version 25, 26, 27 or 28 to v29, and how to install a v29 update. Use it for questions about upgrade paths, steps and risks.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Upgrade](../upgrade.md) > Business Central 2026 release wave 2 (v29) · tier official · system platform · narrative reviewed (checked by Opus)

## Overview

This section covers moving an on-premises Business Central environment to 2026 release wave 2 (version 29). It has four pages and no subtopics. In order from planning to execution, they are an overview, a considerations page, a full upgrade guide and a page on installing an update.

Start with the overview page. It describes upgrade paths from several source versions, new and changed platform and application features, and deprecated features. Read the considerations page next, before you touch a database. It covers deprecated or redesigned functionality, deleted objects, schema changes, how installed extensions affect performance, and deployment changes.

For the upgrade itself, use the upgrade guide if you are coming from version 25, 26, 27 or 28. It covers database conversion, extension publishing, tenant mounting and synchronization, data upgrade, permission set migration and license import. The install-update page covers platform-only and application upgrades on single-tenant and multitenant deployments.

## Key points

- The step-by-step guide covers upgrading to v29 from version 25, 26, 27 or 28.
- The upgrade guide covers application database conversion, extension publishing and synchronization, tenant mounting and synchronization, data upgrade, permission set migration and license import.
- The install-update page covers both platform-only and application upgrades, on single-tenant and multitenant deployments.
- The considerations page for v26 and later covers deprecated or redesigned functionality, objects deleted in v24 and earlier, and how installed extensions affect performance.
- The considerations page also notes schema changes in the Subscription Billing extension (v25 to v26 and later) and mentions force sync for schema migration.
- Deployment changes introduced in v23 are listed: server port 7085 and SPN delegation configuration.
- Microsoft recommends moving to AL-based permissions.
- The overview page tracks new and changed platform and application features and deprecated features across W1 and platform.

## Learn pages

- [Considerations before upgrading to Business Central version 26 and later](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v26): This article provides tips and considerations to prepare a solution when you're planning to upgrade to Business Central 2025 release wave 1 and later.
- [Install a Business Central 2026 release wave 2 (version 29) Update](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v29): This article describes the tasks required for getting the monthly version 29 update applied to your Dynamics 365 Business Central on-premises.
- [Upgrade to Business Central 2026 release wave 2 (version 29)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v29): Describes how to upgrade an unmodified Business Central version 25 and later to version 29
- [Upgrading to Dynamics 365 Business Central 2026 release wave 2](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v29): Provides an overview of Business Central 2026 release wave 2 upgrade process.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
