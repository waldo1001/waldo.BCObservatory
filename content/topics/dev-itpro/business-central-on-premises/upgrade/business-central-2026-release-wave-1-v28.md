---
id: topic/dev-itpro/business-central-on-premises/upgrade/business-central-2026-release-wave-1-v28
type: topic
title: Business Central 2026 release wave 1 (v28)
summary: Upgrading Business Central on-premises to 2026 release wave 1 (version 28). It answers questions about supported upgrade paths, pre-upgrade considerations, and the steps to upgrade or install a version 28 update, including database conversion, extension publishing, sync and data upgrade.
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-30T08:08:54.137Z"
  flags: []
generated:
  at: "2026-10-30T08:09:06.421Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: e513c9737ba8f56f3ef28a76f5112913bc0bce8b73cd68a12d5c220d2c6a17f8
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
    - post/dvlprlife-com/https-www-dvlprlife-com-2026-07-july-2026-cumulative-updates-for-dynamics-365-business-central--36ef84971d
    - post/yzhums-com/71880
    - post/yzhums-com/71917
    - post/yzhums-com/72767
    - post/yzhums-com/75216
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
  blog: 5
  guideline: 0
bc_forms: []
member_hash: a2f92bceaf479bc775b034d22d378cbefa3e722b436187aa4531b067299c5c74
narrative: generated
---

# Business Central 2026 release wave 1 (v28)

> Upgrading Business Central on-premises to 2026 release wave 1 (version 28). It answers questions about supported upgrade paths, pre-upgrade considerations, and the steps to upgrade or install a version 28 update, including database conversion, extension publishing, sync and data upgrade.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Upgrade](../upgrade.md) > Business Central 2026 release wave 1 (v28) · tier official · system platform · narrative reviewed (checked by Opus)

## Overview

This section covers moving an on-premises Business Central environment to version 28 (2026 release wave 1). It has four pages: one on upgrade paths and refactoring guidance, one on considerations before upgrading, one with the step-by-step upgrade procedure, and one on installing a version 28 update.

## Key points

- Start with the page on upgrading to 2026 release wave 1: it has the compatibility matrix, deprecated features review, and intermediate version requirements (versions 14 and 15 are mentioned).
- The upgrade page covers unmodified applications moving from version 25, 26, or 27 to version 28.
- Upgrade steps include application database conversion, extension publishing and installation, tenant synchronization, and data upgrade execution.
- The upgrade also covers permission sets migration and encryption key management.
- The install-an-update page covers platform-only and application updates, for both single-tenant and multitenant deployments.
- The considerations page (versions 26-29) covers deprecated or redesigned functionality, deleted objects (v24 and earlier), and performance impact of installed extensions.
- Subscription Billing extension schema changes between v25 and v26+ may need force sync for schema migration.
- Microsoft recommends moving to AL-based permissions; v23 deployment changes include port 7085 and SPN delegation.

## Learn pages

- [Considerations before upgrading to Business Central version 26 and later](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v26): This article provides tips and considerations to prepare a solution when you're planning to upgrade to Business Central 2025 release wave 1 and later.
- [Install a Business Central 2026 release wave 1 (version 28) Update](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v28): This article describes the tasks required for getting the monthly version 28 update applied to your Dynamics 365 Business Central on-premises.
- [Upgrade to Business Central 2026 release wave 1 (version 28)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v28): Describes how to upgrade an unmodified Business Central version 25 and later to version 28
- [Upgrading to Dynamics 365 Business Central 2026 release wave 1](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v28): Provides an overview of Business Central 2026 release wave 1 upgrade process.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [July 2026 Cumulative Updates for Dynamics 365 Business Central](../../../../posts/dvlprlife-com/https-www-dvlprlife-com-2026-07-july-2026-cumulative-updates-for-dynamics-365-business-central--36ef84971d.md) (community post): "cumulative updates released for different release waves and versions"
- [General Available: Dynamics 365 Business Central 2026 release wave 1 (BC28)](../../../../posts/yzhums-com/71880.md) (community post): "Business Central 2026 release wave 1 (BC28, version 28.0) is generally available"
- [Cumulative Update Summary for Microsoft Dynamics 365 Business Central (April, 2026)](../../../../posts/yzhums-com/71917.md) (community post): "Cumulative updates for Microsoft Dynamics 365 Business Central released in April 2026"
- [Cumulative Update Summary for Microsoft Dynamics 365 Business Central (May, 2026)](../../../../posts/yzhums-com/72767.md) (community post): "Update 28.1 released for 2026 release wave 1, with separate cloud and on-premises"
- [Cumulative Update Summary for Microsoft Dynamics 365 Business Central (August, 2026)](../../../../posts/yzhums-com/75216.md) (community post): "Version 28.4 (BC28 CU04) released for 2026 Release Wave 1"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
