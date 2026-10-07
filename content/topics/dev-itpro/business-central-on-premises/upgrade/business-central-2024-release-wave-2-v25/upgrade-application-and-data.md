---
id: topic/dev-itpro/business-central-on-premises/upgrade/business-central-2024-release-wave-2-v25/upgrade-application-and-data
type: topic
title: Upgrade application and data
summary: "Upgrade application and data for Business Central on-premises version 25 (2024 release wave 2). It covers three paths: unmodified C/AL, customized C/AL, and Microsoft System and Base Application upgrades. It answers questions about which steps and tools apply to a given source version."
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:28:13.261Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0a7df7e44748036c924e8f8c36b57f14332ac992e68e639e6dabe355fea3d5d3
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-to-microsoft-base-app-v25
    title: Upgrading Customized C/AL Application to Microsoft Base Application for version 25
    date: "2024-09-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v25
    title: Upgrading Microsoft System and Base Application to Version 25
    date: "2024-09-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-v14-v25
    title: Upgrading Unmodified C/AL Application to version 25
    date: "2024-11-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-to-microsoft-base-app-v25
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v25
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-v14-v25
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/upgrade/business-central-2024-release-wave-2-v25
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/12307
learn_toc_path:
  - Business Central on-premises
  - Upgrade
  - Business Central 2024 release wave 2 (v25)
  - Upgrade application and data
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/upgrade/business-central-2024-release-wave-2-v25
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 31224bd4f277647068783d66c2bd00f7c5f09de1c1a47c5a0f1d8c8c428d8f7c
narrative: generated
---

# Upgrade application and data

> Upgrade application and data for Business Central on-premises version 25 (2024 release wave 2). It covers three paths: unmodified C/AL, customized C/AL, and Microsoft System and Base Application upgrades. It answers questions about which steps and tools apply to a given source version.

Path: [Business Central on-premises](../../../business-central-on-premises.md) > [Upgrade](../../upgrade.md) > [Business Central 2024 release wave 2 (v25)](../business-central-2024-release-wave-2-v25.md) > Upgrade application and data · tier official · system platform · narrative reviewed by Opus

## Overview

This section describes how to upgrade an on-premises Business Central application and its data to version 25. The right page depends on where you start: a version 14 or earlier C/AL application that is unmodified, a version 14 C/AL application that is customized, or an installation already running the Microsoft System and Base Application.

The unmodified C/AL path replaces the C/AL base application with the Microsoft System and Base Application extensions. The customized path moves your customizations into extensions and transfers table ownership during the data upgrade phases. The System and Base Application page lists steps for source versions 15 through 24, including database conversion, extension publishing, tenant sync and data upgrade.

Start by identifying your current version and whether the base application was modified, then follow the matching page from start to finish.

## Key points

- Three upgrade paths: unmodified C/AL, customized C/AL, and Microsoft System and Base Application to version 25.
- Unmodified C/AL upgrade applies to version 14 (Spring 2019) or earlier and replaces the C/AL base application with Microsoft extensions.
- Customized C/AL upgrade starts from version 14 and uses DestinationAppsForMigration, migration.json and a table migration extension.
- Customized path converts code with txt2al and moves application code into extensions, with table ownership transfer in data upgrade phases.
- System and Base Application upgrade covers source versions 15 through 24.
- Steps across the paths include database conversion, publishing extensions, data upgrade, permission sets upgrade and license import; the System and Base Application path also covers tenant synchronization.
- Multitenant deployments are supported in the unmodified C/AL upgrade.

## Learn pages

- [Upgrading Customized C/AL Application to Microsoft Base Application for version 25](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-to-microsoft-base-app-v25): Describes how to do an upgrade from a customized Business Central 14 to Microsoft Base Application for version 25.
- [Upgrading Microsoft System and Base Application to Version 25](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v25): Describes how to upgrade an unmodified Business Central version 15 through 24 to version 25
- [Upgrading Unmodified C/AL Application to version 25](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-v14-v25): Describes how to upgrade an unmodified Business Central 14 application to version 25

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12307 Make UpgradeDefaultDimensions ParentId backfill set-based (via DataTransfer)](../../../../../changes/bcapps/12307.md) (code change): "UpgradeDefaultDimensions procedure now uses set-based DataTransfer operations"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
