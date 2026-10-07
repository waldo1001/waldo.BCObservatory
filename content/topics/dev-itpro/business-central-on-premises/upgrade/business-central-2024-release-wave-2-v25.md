---
id: topic/dev-itpro/business-central-on-premises/upgrade/business-central-2024-release-wave-2-v25
type: topic
title: Business Central 2024 release wave 2 (v25)
summary: "Upgrading Business Central on-premises to 2024 release wave 2 (version 25): upgrade paths, installing a version 25 update, report and permission changes, and application and data upgrade steps. It answers questions about which steps and tools apply to a given source version and what changes to expect."
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:46.099Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 46a7972a0c21a1a625bf1c5adf56f6e7b8407f1cb6dc5fd9fa95fc714622450e
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v23
    title: General Information and Considerations When Upgrading to Business Central
    date: "2024-09-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v25
    title: Install a version 25 update
    date: "2025-01-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-reports-v24-later
    title: Upgrade reports
    date: "2024-03-09"
    commit: null
    t: null
    quote: null
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-permissions
    title: Upgrading Permission Sets and Permissions
    date: "2026-01-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v25
    title: Upgrading to Dynamics 365 Business Central 2024 release wave 2
    date: "2024-02-09"
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v23
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v25
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-reports-v24-later
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-permissions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v25
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/upgrade
    - topic/dev-itpro/business-central-on-premises/upgrade/business-central-2024-release-wave-2-v25/upgrade-application-and-data
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Upgrade
  - Business Central 2024 release wave 2 (v25)
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/upgrade
children:
  - topic/dev-itpro/business-central-on-premises/upgrade/business-central-2024-release-wave-2-v25/upgrade-application-and-data
coverage:
  learn: 8
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: d0afa03f42cfe1c8a88b9d1c99b55f1825ab3abee5c7029d5d0ae8e1c268f1d9
narrative: generated
---

# Business Central 2024 release wave 2 (v25)

> Upgrading Business Central on-premises to 2024 release wave 2 (version 25): upgrade paths, installing a version 25 update, report and permission changes, and application and data upgrade steps. It answers questions about which steps and tools apply to a given source version and what changes to expect.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Upgrade](../upgrade.md) > Business Central 2024 release wave 2 (v25) · tier official · system platform · narrative reviewed by Opus

## Overview

This section covers upgrading Business Central on-premises to 2024 release wave 2 (version 25). The main upgrade page describes the upgrade paths, technical and application code upgrades, and the Business Foundation extension, which now contains number series logic. A general considerations page covers changes across versions 23, 24 and 25, including online migration, deprecated functionality, deployment changes and report platform updates.

The "Install a version 25 update" page walks through installing platform and application components, converting the database, synchronizing tenants, publishing extensions, running the data upgrade and importing the license. The pages on upgrading reports and on upgrading permission sets cover two areas that often need rework: the report rendering model and the move from legacy data-based permissions to AL object-based permissions.

The subtopic "Upgrade application and data" holds the step-by-step paths for unmodified C/AL, customized C/AL, and Microsoft System and Base Application upgrades. Start with the main upgrade page to pick your path, read the general considerations, then follow the install and data upgrade steps for your source version.

## Key points

- The main upgrade page describes upgrade paths, technical and application code upgrades, and on-premises to online migration.
- The Business Foundation extension now contains number series logic, tied to System Application refactoring.
- The general considerations page covers versions 23, 24 and 25: cloud migration, deprecated functionality, deployment changes, server port and delegation configuration.
- Installing a version 25 update involves component installation, database conversion, tenant synchronization, extension publishing, data upgrade and license import.
- Report upgrade guidance covers the new rendering model, obsoleted events, Word layouts and custom report renderers, affecting version 24 and later.
- Permission upgrade moves from legacy data-based permissions to AL object-based permissions, using Permission Set and Permission Set Extension objects.
- The Upgrade application and data subtopic has three paths: unmodified C/AL, customized C/AL, and Microsoft System and Base Application upgrades.

## Subtopics

- [Upgrade application and data](business-central-2024-release-wave-2-v25/upgrade-application-and-data.md) (3 pages)

## More Learn pages

- [General Information and Considerations When Upgrading to Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v23): This article provides tips and considerations to prepare a solution when you're planning to upgrade to Business Central 2023 release wave 2 and later.
- [Install a version 25 update](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v25): This article describes the tasks required for getting the monthly version 25 update applied to your Dynamics 365 Business Central on-premises.
- [Upgrade reports](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-reports-v24-later): Describes how to upgrade reports in Business Central.
- [Upgrading Permission Sets and Permissions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-permissions): Describes how to upgrade permissions and permission sets
- [Upgrading to Dynamics 365 Business Central 2024 release wave 2](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v25): Provides an overview of Business Central 2024 Release Wave 2 upgrade process.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
