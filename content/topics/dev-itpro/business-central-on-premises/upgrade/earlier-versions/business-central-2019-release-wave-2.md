---
id: topic/dev-itpro/business-central-on-premises/upgrade/earlier-versions/business-central-2019-release-wave-2
type: topic
title: Business Central 2019 release wave 2
summary: Upgrading on-premises Business Central from version 14 (Spring 2019) to version 15 (2019 release wave 2), plus installing version 15 updates and a compatibility matrix for upgrade paths. It answers questions about upgrade strategies, technical upgrade tasks, unmodified application upgrades, and minimum versions for upgrades.
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:54.040Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5620f852d257262e2d1beff1630dfc9c9e675e2fff6adf4ef7e5e5bae8ed6a9a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-v14-v15-compatibility
    title: Business Central Upgrade Compatibility Matrix
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v15
    title: Install a version 15 update
    date: "2024-04-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-technical-upgrade-v14-v15
    title: Technical Upgrade
    date: "2024-04-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application
    title: Upgrade an unmodified application
    date: "2024-04-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v15
    title: Upgrade to Business Central 2019 Wave 2
    date: "2024-04-18"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-v14-v15-compatibility
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v15
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-technical-upgrade-v14-v15
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v15
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/upgrade/earlier-versions
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Upgrade
  - Earlier versions
  - Business Central 2019 release wave 2
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/upgrade/earlier-versions
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: abd04a692c0ceab6b40f2825f6e5b55983d759b3e0c7af4d62c83367e944d18d
narrative: generated
---

# Business Central 2019 release wave 2

> Upgrading on-premises Business Central from version 14 (Spring 2019) to version 15 (2019 release wave 2), plus installing version 15 updates and a compatibility matrix for upgrade paths. It answers questions about upgrade strategies, technical upgrade tasks, unmodified application upgrades, and minimum versions for upgrades.

Path: [Business Central on-premises](../../../business-central-on-premises.md) > [Upgrade](../../upgrade.md) > [Earlier versions](../earlier-versions.md) > Business Central 2019 release wave 2 · tier official · system platform · narrative reviewed (checked by Opus)

## Overview

This section covers the 2019 release wave 2 (version 15) upgrade for on-premises Business Central. It describes how to move from version 14 and how to apply later cumulative updates to version 15.

## Key points

- Start with 'Upgrade to Business Central 2019 Wave 2'. It describes the upgrade paths from version 14: full uptake of the base and system applications, or a minimal upgrade of a customized application.
- 'Upgrade an unmodified application' covers version 14 to 15 for single-tenant and multitenant deployments. Tasks include converting databases to the new platform, publishing and synchronizing extensions, installing the system and base applications, and running the data upgrade.
- 'Technical Upgrade' covers moving from version 14 to 15 with C/AL to AL code conversion. Its tasks include database preparation, platform conversion, extension migration, the task scheduler, encryption management and control add-ins.
- 'Install a version 15 update' covers cumulative updates for 2019 release wave 2. Steps include platform upgrade, application update, extension uninstallation, database conversion, server instance configuration and license import.
- The compatibility matrix lists minimum update versions for upgrades between major versions (15 to 28), on-premises and online.
- Per the matrix, upgrades from version 24 or earlier must target version 25 first.
- The matrix also shows minimum target versions for upgrading from each cumulative update level of version 14 to versions 15 through 25.

## Learn pages

- [Business Central Upgrade Compatibility Matrix](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-v14-v15-compatibility): Provides an overview of the Business Central versions and their compatibility
- [Install a version 15 update](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v15): This article describes the tasks required for getting the monthly version 15 update applied to your Dynamics 365 Business Central on-premises.
- [Technical Upgrade](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-technical-upgrade-v14-v15): The article explains how to upgrade the application code and how to merge code from different versions of the application.
- [Upgrade an unmodified application](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application): The article explains how to upgrade an application that has no custom code to Business Central 2019 release wave 2.
- [Upgrade to Business Central 2019 Wave 2](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v15): The article explains how to upgrade the application code and how to merge code from different versions of the application.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
