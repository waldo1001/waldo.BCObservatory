---
id: topic/dev-itpro/business-central-on-premises/upgrade/earlier-versions/business-central-2023-release-wave-1
type: topic
title: Business Central 2023 release wave 1
summary: "Upgrade guidance for on-premises Business Central 2023 release wave 1 (version 22): upgrade paths from versions 14 through 21, technical upgrade steps, C/AL to AL conversion, table and field migration between extensions, and permission and report changes. It answers how to move a given source version to version 22."
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
  input_hash: 966ae00a6f2a54e6b7e085a55513c1d89af2c94e0a7ab04e8e68b64236581226
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-v14-v15-compatibility
    title: Business Central Upgrade Compatibility Matrix
    date: "2026-11-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/devenv-code-conversion
    title: Code Conversion from C/AL to AL
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v22
    title: General Information and Considerations When Upgrading to Business Central 2023 Release Wave 1
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v22
    title: Install a version 22 update
    date: "2023-02-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields
    title: Migrating Tables and Fields Between Extensions
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-down
    title: Moving Tables and Fields to Extensions Down the Dependency Graph
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-up
    title: Moving Tables and Fields to Extensions Up the Dependency Graph
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-technical-upgrade-v14-v22
    title: Technical Upgrade From Version 14 to Version 22
    date: "2024-04-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-technical-upgrade-v22
    title: Technical Upgrade to Version 22
    date: "2023-11-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v22
    title: Upgrade to Business Central 2023 Wave 1
    date: "2022-08-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-to-microsoft-base-app-v22
    title: Upgrading Customized C/AL Application to Microsoft Base Application for version 22
    date: "2023-04-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v22
    title: Upgrading Microsoft System and Base Application to Version 22
    date: "2024-01-18"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-reports
    title: Upgrading Reports
    date: "2022-08-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-v14-v22
    title: Upgrading Unmodified C/AL Application to Version 22
    date: "2024-01-18"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-v14-v15-compatibility
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/devenv-code-conversion
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v22
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v22
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-down
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-up
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-technical-upgrade-v14-v22
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-technical-upgrade-v22
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v22
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-to-microsoft-base-app-v22
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v22
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-permissions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-reports
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-v14-v22
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
  - Business Central 2023 release wave 1
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/upgrade/earlier-versions
children: []
coverage:
  learn: 15
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 28dd13d2645b321db32d43eafc6efe4fd751da7f05b31127100a27549d37e1d4
narrative: generated
---

# Business Central 2023 release wave 1

> Upgrade guidance for on-premises Business Central 2023 release wave 1 (version 22): upgrade paths from versions 14 through 21, technical upgrade steps, C/AL to AL conversion, table and field migration between extensions, and permission and report changes. It answers how to move a given source version to version 22.

Path: [Business Central on-premises](../../../business-central-on-premises.md) > [Upgrade](../../upgrade.md) > [Earlier versions](../earlier-versions.md) > Business Central 2023 release wave 1 · tier official · system platform · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers upgrading on-premises Business Central to 2023 release wave 1 (version 22). The path depends on the starting version. From versions 20 or 21 there is a direct technical upgrade. Versions 15-21 follow the System and Base Application upgrade procedure. Version 14 C/AL solutions need either the unmodified or the customized route, both of which replace the base application with Microsoft System and Base Application extensions.

Start with the "Upgrade to Business Central 2023 Wave 1" overview and the general considerations page, which list upgrade paths and deprecated features. The compatibility matrix confirms valid minimum versions. Then pick the technical upgrade page that matches your source version. "Install a version 22 update" covers applying a version 22 update on-premises with PowerShell.

Supporting pages cover specific tasks. These are C/AL to AL conversion with Txt2Al, migrating tables and fields between extensions with migration.json (moving down or up the dependency graph), upgrading permission sets to AL object-based permissions, and report platform changes from version 20.

## Key points

- Version 22 upgrades from versions 20 or 21 involve database conversion, extension recompilation, and tenant mounting with synchronization.
- Versions 15-21 are upgraded to version 22 with a step-by-step procedure covering database conversion, extension publishing, data synchronization, and license import.
- Version 14 upgrades convert C/AL to an AL base application extension. The Txt2Al tool handles the code conversion.
- Customized and unmodified version 14 paths use the DestinationAppsForMigration server setting and migration.json for table migration.
- Moving tables and fields down the dependency graph uses migration.json. Moving them up needs a transition extension and a two-stage deployment.
- Permission sets must move from legacy data-based permissions to AL object-based Permission Set and Permission Set Extension objects.
- Report upgrades for version 20 and later cover the new rendering model, event changes, and handling of Word and custom report layouts.
- The compatibility matrix lists minimum compatible update versions for upgrades, from version 14 onward.

## Learn pages

- [Business Central Upgrade Compatibility Matrix](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-v14-v15-compatibility): Provides an overview of the Business Central versions and their compatibility
- [Code Conversion from C/AL to AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/devenv-code-conversion): Description of the conversion process from C/AL to AL.
  - In the observatory: [Codeunit 150 "System Initialization"](../../../../../objects/codeunit/150.md)
- [General Information and Considerations When Upgrading to Business Central 2023 Release Wave 1](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-considerations-v22): This article provides tips and considerations to prepare a solution when you're planning to upgrade to Business Central 2023 release wave 1.
  - In the observatory: [Codeunit 44 "ReportManagement"](../../../../../objects/codeunit/44.md)
- [Install a version 22 update](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update-v22): This article describes the tasks required for getting the monthly version 22 update applied to your Dynamics 365 Business Central on-premises.
- [Migrating Tables and Fields Between Extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields): Explains how to migrate tables and fields from one extension to another.
- [Moving Tables and Fields to Extensions Down the Dependency Graph](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-down): Explains how to move tables and fields from an extension to another extension that is down the dependency graph.
- [Moving Tables and Fields to Extensions Up the Dependency Graph](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-up): Explains how to move tables and fields from an extension to another extension that is up the dependency graph
- [Technical Upgrade From Version 14 to Version 22](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-technical-upgrade-v14-v22): Describes how to do a technical upgrade from Business Central 14 to 22
- [Technical Upgrade to Version 22](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-technical-upgrade-v22): Describes how to do a technical upgrade from Business Central V19, V20, V21 to V22
- [Upgrade to Business Central 2023 Wave 1](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-overview-v22): Provides an overview of Business Central 2023 Release Wave 1 upgrade
- [Upgrading Customized C/AL Application to Microsoft Base Application for version 22](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-to-microsoft-base-app-v22): Describes how to do an upgrade from a customized Business Central 14 to Microsoft Base Application for version 22.
  - In the observatory: [Table 1670 "Option Lookup Buffer"](../../../../../objects/table/1670.md), [Table 265 "Document Entry"](../../../../../objects/table/265.md), [Table 338 "Entry Summary"](../../../../../objects/table/338.md), [Table 7330 "Bin Content Buffer"](../../../../../objects/table/7330.md)
- [Upgrading Microsoft System and Base Application to Version 22](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-to-v22): Describes how to upgrade an unmodified Business Central versions 15, 16, 17, 18, 19, or 20 to version 22
- [Upgrading Permission Sets and Permissions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-permissions): Describes how to upgrade permissions and permission sets
- [Upgrading Reports](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-reports): Describes how to upgrade reports
  - In the observatory: [Codeunit 44 "ReportManagement"](../../../../../objects/codeunit/44.md)
- [Upgrading Unmodified C/AL Application to Version 22](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-unmodified-application-v14-v22): Describes how to upgrade an unmodified Business Central 14 application to version 22

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
