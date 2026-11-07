---
id: topic/dev-itpro/business-central-on-premises/upgrade/business-central-2026-release-wave-2-v29
type: topic
title: Business Central 2026 release wave 2 (v29)
summary: "Upgrading Business Central on-premises to 2026 release wave 2 (version 29): upgrade overview, pre-upgrade considerations for v26 and later, the step-by-step upgrade from versions 25-28, and installing a cumulative update. It answers questions about upgrade paths, steps, and risks."
tier: official
language: en
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-07T01:06:39.442Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c6133c054d6763d55107f984dfd1be65aea7c3ed3cca9ef2a62faca9e4a7bbdd
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
    date: "2026-11-02"
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
  posts:
    - post/dvlprlife-com/https-www-dvlprlife-com-2026-10-october-2026-cumulative-updates-for-dynamics-365-business-central--a64e9af8be
    - post/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-4709432878034654173--026fc9bd1f
    - post/yzhums-com/76495
    - post/yzhums-com/77038
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
  blog: 4
  guideline: 0
bc_forms: []
member_hash: bb19bc24266d3770671d62d35bcd52382bc7b9188b90751e4908b857e79e74cb
narrative: generated
---

# Business Central 2026 release wave 2 (v29)

> Upgrading Business Central on-premises to 2026 release wave 2 (version 29): upgrade overview, pre-upgrade considerations for v26 and later, the step-by-step upgrade from versions 25-28, and installing a cumulative update. It answers questions about upgrade paths, steps, and risks.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Upgrade](../upgrade.md) > Business Central 2026 release wave 2 (v29) · tier official · system platform · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the on-premises upgrade to Business Central 2026 release wave 2 (version 29). It has four pages: an overview of upgrade paths and new, changed and deprecated features; a considerations page to read before upgrading; a full upgrade guide; and a guide for installing cumulative updates.

Start with the overview to confirm your source version has a supported path. Then read the considerations page for changes that can affect your environment. After that, follow the upgrade guide for a move from version 25, 26, 27 or 28 to 29. Use the cumulative update page for updates within version 29.

## Key points

- Upgrade to version 29 is documented from versions 25, 26, 27 and 28.
- The upgrade guide covers application database conversion, extension publishing and synchronization, tenant mounting and synchronization, and data upgrade.
- Post-upgrade tasks include permission set migration and license import.
- Pre-upgrade considerations for v26-v29 cover deprecated or redesigned functionality and the performance impact of installed extensions.
- Schema changes in the Subscription Billing extension (v25 to v26 and later) may need force sync for schema migration.
- Deployment changes from v23 include server port 7085 and SPN delegation configuration.
- Microsoft recommends moving to AL-based permissions.
- Cumulative update installation covers platform conversion, extension publishing, database synchronization and data upgrade for single-tenant and multitenant setups.

## Learn pages

- [Considerations before upgrading to Business Central version 26 and later](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v26): This article provides tips and considerations to prepare a solution when you're planning to upgrade to Business Central 2025 release wave 1 and later.
- [Install a Business Central 2026 release wave 2 (version 29) Update](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v29): This article describes the tasks required for getting the monthly version 29 update applied to your Dynamics 365 Business Central on-premises.
- [Upgrade to Business Central 2026 release wave 2 (version 29)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v29): Describes how to upgrade an unmodified Business Central version 25 and later to version 29
- [Upgrading to Dynamics 365 Business Central 2026 release wave 2](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v29): Provides an overview of Business Central 2026 release wave 2 upgrade process.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [October 2026 Cumulative Updates for Dynamics 365 Business Central](../../../../posts/dvlprlife-com/https-www-dvlprlife-com-2026-10-october-2026-cumulative-updates-for-dynamics-365-business-central--a64e9af8be.md) (community post): "Business Central 2026 Wave 2 release with version 29.0 for online customers"
- [How to Install Microsoft Dynamics 365 Business Central 29 On-Premises](../../../../posts/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-4709432878034654173--026fc9bd1f.md) (community post): "Business Central 29 (2026 release wave 2) on-premises in a test or demonstration"
- [Cumulative Update Summary for Microsoft Dynamics 365 Business Central (October, 2026)](../../../../posts/yzhums-com/76495.md) (community post): "Cumulative Update October 2026 for Dynamics 365 Business Central release wave 2 version 29.0 is now available"
- [Business Central 2026 release wave 2 (BC29): Custom Report Layouts are now deprecated and have been removed](../../../../posts/yzhums-com/77038.md) (community post): "Custom Report Layouts are now deprecated and have been removed"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
