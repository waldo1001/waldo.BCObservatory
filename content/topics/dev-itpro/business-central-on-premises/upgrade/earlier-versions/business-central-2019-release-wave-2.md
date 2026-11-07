---
id: topic/dev-itpro/business-central-on-premises/upgrade/earlier-versions/business-central-2019-release-wave-2
type: topic
title: Business Central 2019 release wave 2
summary: Business Central 2019 release wave 2 (version 15) on-premises upgrade covers moving from version 14 (Spring 2019), installing version 15 updates, and checking upgrade compatibility. It answers questions about upgrade paths, technical versus unmodified-application upgrades, and cumulative update installation.
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
  input_hash: 5bb4b20d80fe309b151423049af7dac66532c4aabde47b35222113b424e25a61
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-v14-v15-compatibility
    title: Business Central Upgrade Compatibility Matrix
    date: "2026-11-06"
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

> Business Central 2019 release wave 2 (version 15) on-premises upgrade covers moving from version 14 (Spring 2019), installing version 15 updates, and checking upgrade compatibility. It answers questions about upgrade paths, technical versus unmodified-application upgrades, and cumulative update installation.

Path: [Business Central on-premises](../../../business-central-on-premises.md) > [Upgrade](../../upgrade.md) > [Earlier versions](../earlier-versions.md) > Business Central 2019 release wave 2 · tier official · system platform · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers upgrading on-premises Business Central from version 14 (Spring 2019) to 2019 release wave 2 (version 15), and keeping version 15 current. The entry page describes the migration strategies: a full uptake of the base and system applications, or a minimal upgrade of a customized application using customization extensions and symbols.

Two detailed procedures follow. One is for an unmodified application and one is the technical upgrade, which includes C/AL to AL code conversion. A separate page covers installing cumulative updates for version 15.

Start with the upgrade overview to pick a path. Then follow the matching procedure. Use the compatibility matrix to confirm the minimum update versions required before you begin.

## Key points

- Two upgrade routes from version 14 to version 15: unmodified application upgrade and technical upgrade.
- Unmodified application upgrade: convert the database to the new platform, publish and synchronize extensions, install system and base applications, and run the data upgrade. It applies to single-tenant and multitenant deployments.
- Technical upgrade involves C/AL to AL code conversion, database preparation, platform conversion and extension migration. It also covers the task scheduler, encryption management and control add-ins.
- Installing a version 15 update involves platform upgrade, application update, extension uninstallation, database conversion, server instance configuration and license import.
- The compatibility matrix lists minimum compatible update versions for upgrades between major releases and their minor updates, from version 14 through 28+.
- Use the compatibility matrix to validate an upgrade path before upgrading on-premises or migrating to the cloud.

## Learn pages

- [Business Central Upgrade Compatibility Matrix](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-v14-v15-compatibility): Provides an overview of the Business Central versions and their compatibility
- [Install a version 15 update](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v15): This article describes the tasks required for getting the monthly version 15 update applied to your Dynamics 365 Business Central on-premises.
- [Technical Upgrade](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-technical-upgrade-v14-v15): The article explains how to upgrade the application code and how to merge code from different versions of the application.
- [Upgrade an unmodified application](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application): The article explains how to upgrade an application that has no custom code to Business Central 2019 release wave 2.
- [Upgrade to Business Central 2019 Wave 2](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v15): The article explains how to upgrade the application code and how to merge code from different versions of the application.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
