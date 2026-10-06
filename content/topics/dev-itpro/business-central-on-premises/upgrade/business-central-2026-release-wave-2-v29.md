---
id: topic/dev-itpro/business-central-on-premises/upgrade/business-central-2026-release-wave-2-v29
type: topic
title: Business Central 2026 release wave 2 (v29)
summary: "Upgrading on-premises Business Central to 2026 release wave 2 (v29): the upgrade overview, pre-upgrade considerations for v26 and later, the step-by-step upgrade from v25 to v28, and installing a v29 update. It answers questions about upgrade paths, steps, and risks."
tier: official
language: en
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T13:43:32.763Z"
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

> Upgrading on-premises Business Central to 2026 release wave 2 (v29): the upgrade overview, pre-upgrade considerations for v26 and later, the step-by-step upgrade from v25 to v28, and installing a v29 update. It answers questions about upgrade paths, steps, and risks.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Upgrade](../upgrade.md) > Business Central 2026 release wave 2 (v29) · tier official · system platform · **unreviewed** (machine-generated narrative)

## Overview

This section covers moving an on-premises Business Central environment to 2026 release wave 2 (version 29). It has four pages and no subtopics. They run from planning to execution: an overview, a considerations page, a full upgrade guide, and a page on installing an update.

Start with the overview page. It describes the upgrade paths from different source versions, new and changed platform and application features, and deprecated features. Then read the considerations page before touching a database. It covers deprecated or redesigned functionality, deleted objects, schema changes, extension performance impact, and deployment changes.

For the work itself, use the upgrade guide if you are coming from version 25, 26, 27, or 28. It covers database conversion, extension publishing, tenant mounting and synchronization, data upgrade, permission set migration, and license import. The install-update page covers platform-only and application upgrades on single-tenant and multitenant deployments.

## Key points

- Supported source versions for the upgrade to v29 are 25, 26, 27, and 28.
- The upgrade steps are: application database conversion, extension publishing and synchronization, tenant mounting and synchronization, data upgrade, then permission set migration and license import.
- The install-update page covers both platform-only and application upgrades, on single-tenant and multitenant deployments.
- The considerations page for v26 and later covers deprecated or redesigned functionality, objects deleted in v24 and earlier, and the performance impact of installed extensions.
- It also notes schema changes in the Subscription Billing extension (v25 to v26 and later), handled through force sync for schema migration.
- Deployment changes from v23 are listed: server port 7085 and SPN delegation configuration.
- Microsoft recommends moving to AL-based permissions.
- The overview page tracks new and changed platform and application features and deprecated features across W1 and platform.

## Learn pages

- [Considerations before upgrading to Business Central version 26 and later](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v26): This article provides tips and considerations to prepare a solution when you're planning to upgrade to Business Central 2025 release wave 1 and later.
- [Install a Business Central 2026 release wave 2 (version 29) Update](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v29): This article describes the tasks required for getting the monthly version 29 update applied to your Dynamics 365 Business Central on-premises.
- [Upgrade to Business Central 2026 release wave 2 (version 29)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v29): Describes how to upgrade an unmodified Business Central version 25 and later to version 29
- [Upgrading to Dynamics 365 Business Central 2026 release wave 2](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v29): Provides an overview of Business Central 2026 release wave 2 upgrade process.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
