---
id: topic/dev-itpro/business-central-on-premises/upgrade/business-central-2026-release-wave-1-v28
type: topic
title: Business Central 2026 release wave 1 (v28)
summary: Upgrading Business Central on-premises to 2026 release wave 1 (version 28). It covers upgrade paths, pre-upgrade considerations for v26 and later, and the steps to upgrade from versions 25, 26, or 27 and install a version 28 update. It answers questions about how to get to v28 and what to check first.
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:37.084Z"
  flags: []
generated:
  at: "2026-10-07T09:49:55.895Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: bf6c1405cceca9e623fa0c30022d9784592645b494718b54125a44665283747f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v26
    title: Considerations before upgrading to Business Central version 26 and later
    date: "2026-08-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v28
    title: Install a Business Central 2026 release wave 1 (version 28) Update
    date: "2026-09-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v28
    title: Upgrade to Business Central 2026 release wave 1 (version 28)
    date: "2026-02-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v28
    title: Upgrading to Dynamics 365 Business Central 2026 release wave 1
    date: "2026-05-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v26
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v28
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v28
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v28
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/upgrade
  localizations: []
  videos: []
  posts:
    - post/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-5740395756527498087--f6c529e55c
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Upgrade
  - Business Central 2026 release wave 1 (v28)
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/upgrade
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 1
  guideline: 0
bc_forms: []
member_hash: a2f92bceaf479bc775b034d22d378cbefa3e722b436187aa4531b067299c5c74
narrative: generated
---

# Business Central 2026 release wave 1 (v28)

> Upgrading Business Central on-premises to 2026 release wave 1 (version 28). It covers upgrade paths, pre-upgrade considerations for v26 and later, and the steps to upgrade from versions 25, 26, or 27 and install a version 28 update. It answers questions about how to get to v28 and what to check first.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Upgrade](../upgrade.md) > Business Central 2026 release wave 1 (v28) · tier official · system platform · narrative reviewed by Opus

## Overview

This section is for administrators of on-premises Business Central who are moving to 2026 release wave 1 (version 28). It has four pages: an upgrade overview, a pre-upgrade considerations page, a step-by-step upgrade guide, and an update installation guide.

Start with the overview page, which explains the required upgrade paths, intermediate versions and the review of deprecated features. Then read the considerations page, which covers deprecated or redesigned functionality, schema changes, extension performance impact and deployment changes. After that, follow the upgrade page for unmodified applications from versions 25, 26 or 27. Use the install update page for platform-only or application updates within version 28.

## Key points

- The upgrade page covers unmodified applications moving from version 25, 26 or 27 to version 28.
- Upgrade steps include application database conversion, extension publishing and installation, tenant synchronization, and data upgrade execution.
- The upgrade page also covers permission sets migration and encryption key management.
- The overview page says earlier versions may need specific upgrade paths with intermediate versions, and deprecated features should be reviewed first.
- The considerations page covers v26-v29 and recommends moving to AL-based permissions.
- It notes schema changes in the Subscription Billing extension from v25 to v26 and later, which involve force sync for schema migration.
- It also notes that installed extensions can affect upgrade performance, and describes v23 deployment changes (port 7085, SPN delegation).
- The install update page covers platform-only and application upgrades, database conversion, extension publishing and synchronization, for single-tenant and multitenant deployments.

## Learn pages

- [Considerations before upgrading to Business Central version 26 and later](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v26): This article provides tips and considerations to prepare a solution when you're planning to upgrade to Business Central 2025 release wave 1 and later.
- [Install a Business Central 2026 release wave 1 (version 28) Update](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v28): This article describes the tasks required for getting the monthly version 28 update applied to your Dynamics 365 Business Central on-premises.
- [Upgrade to Business Central 2026 release wave 1 (version 28)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v28): Describes how to upgrade an unmodified Business Central version 25 and later to version 28
- [Upgrading to Dynamics 365 Business Central 2026 release wave 1](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v28): Provides an overview of Business Central 2026 release wave 1 upgrade process.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Business Central 2026 Release Wave 1 Installation Guide: Requirements, Prerequisites, and Setup Walkthrough](../../../../posts/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-5740395756527498087--f6c529e55c.md) (community post): "Business Central 2026 Release Wave 1 (BC28) installation requires Windows 11 or Windows Server"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
