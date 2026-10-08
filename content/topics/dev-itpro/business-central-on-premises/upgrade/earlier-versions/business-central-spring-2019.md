---
id: topic/dev-itpro/business-central-on-premises/upgrade/earlier-versions/business-central-spring-2019
type: topic
title: Business Central spring 2019
summary: Upgrade guidance for Business Central on-premises spring 2019 (v.14). It covers technical upgrade, application code merging, single-tenant and multitenant data upgrade, cumulative update installation, codeunit 1 replacement, and upgrade considerations. It answers how to move from earlier Dynamics NAV or Business Central versions.
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:10.908Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 29d56f557e4dfd70d2ef531300f4367cfc09da135364968fe307a10948047b5a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Converting-a-Database
    title: Converting a Database to Dynamics 365 Business Central - Technical Upgrade
    date: "2024-04-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update
    title: Install a cumulative update
    date: "2024-04-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/multitenant-upgrade-checklist
    title: Multitenant Technical Upgrade Quick Reference
    date: "2024-04-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/singletenant-upgrade-checklist
    title: Single-Tenant Full Upgrade Quick Reference
    date: "2024-04-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/technical-upgrade-checklist
    title: Technical Upgrade Quick Reference
    date: "2024-04-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/transition-from-codeunit1
    title: Transitioning from Codeunit 1 to System Codeunits
    date: "2025-10-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrading-the-Application-Code
    title: Upgrade Application Code
    date: "2024-04-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrade-Considerations
    title: Upgrade Considerations
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrading-the-Data
    title: Upgrading the Data to in Single-Tenant Deployment
    date: "2024-04-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-to-business-central-on-premises
    title: Upgrading to On-Premises v.14
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Converting-a-Database
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/multitenant-upgrade-checklist
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/singletenant-upgrade-checklist
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/technical-upgrade-checklist
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/transition-from-codeunit1
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrading-the-Application-Code
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrade-Considerations
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrading-the-Data
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-to-business-central-on-premises
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
  - Business Central spring 2019
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/upgrade/earlier-versions
children: []
coverage:
  learn: 10
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 17a07c1388f1b97094d2e34bf9b0dfaf2edd4086a91cd9ed0f0b6b5858e936ec
narrative: generated
---

# Business Central spring 2019

> Upgrade guidance for Business Central on-premises spring 2019 (v.14). It covers technical upgrade, application code merging, single-tenant and multitenant data upgrade, cumulative update installation, codeunit 1 replacement, and upgrade considerations. It answers how to move from earlier Dynamics NAV or Business Central versions.

Path: [Business Central on-premises](../../../business-central-on-premises.md) > [Upgrade](../../upgrade.md) > [Earlier versions](../earlier-versions.md) > Business Central spring 2019 · tier official · system platform · narrative reviewed (checked by Opus)

## Overview

This section describes how to upgrade to Business Central on-premises spring 2019 (v.14). The entry page, "Upgrading to On-Premises v.14", explains that the path depends on the source version, with different routes for versions before NAV 2018. It splits the work into application code upgrade and data upgrade, for single-tenant or multitenant deployments.

The other pages cover each stage. "Upgrade Application Code" shows how to merge original, modified and target versions with PowerShell cmdlets. "Converting a Database" describes the technical upgrade, and "Upgrading the Data" covers the single-tenant data upgrade. Three quick reference checklists cover technical upgrade, single-tenant full upgrade and multitenant full upgrade. "Upgrade Considerations" and "Transitioning from Codeunit 1 to System Codeunits" cover changes that may affect custom code. "Install a cumulative update" covers updates within the version.

Start with "Upgrading to On-Premises v.14" to pick your path. Then read "Upgrade Considerations" and use the quick reference that matches your deployment mode as a checklist.

## Key points

- The upgrade path depends on the source version. Versions before NAV 2018 follow different paths.
- Upgrade has two parts: application code upgrade and data upgrade. Each applies to single-tenant or multitenant deployments.
- Application code is merged with Merge-, Compare-, Update- and Export-NAVApplicationObject cmdlets. Conflicts are resolved in object text files.
- Technical upgrade converts the database, synchronizes the schema, converts reports to RDL and migrates V1 extensions to V2. A license must be uploaded.
- Data upgrade runs upgrade codeunits, synchronizes the schema, publishes extensions, generates symbols and imports or exports permission sets.
- Codeunit 1 is removed. System codeunits now hold event publishers, and the page maps old triggers to the new ones.
- Upgrade considerations include cloud migration, V1 to V2 extension conversion, CRM integration upgrade, MenuSuite search, profile customization and special characters in company names.
- Cumulative update installation covers downloading the package, updating platform components, importing application objects, publishing extensions and uploading the license.

## Learn pages

- [Converting a Database to Dynamics 365 Business Central - Technical Upgrade](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Converting-a-Database): Learn how to convert a database from one of the supported versions to Business Central version 14 as part of a technical upgrade.
- [Install a cumulative update](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update): This article describes the tasks required for getting the monthly cumulative update applied to your Dynamics 365 Business Central on-premises.
- [Multitenant Technical Upgrade Quick Reference](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/multitenant-upgrade-checklist)
- [Single-Tenant Full Upgrade Quick Reference](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/singletenant-upgrade-checklist): Get an overview of the steps required to upgrade from one version of Business Central on-premises to the next.
- [Technical Upgrade Quick Reference](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/technical-upgrade-checklist)
- [Transitioning from Codeunit 1 to System Codeunits](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/transition-from-codeunit1): Learn how to convert your custom code as part of the upgrade to version 14 of Business Central.
- [Upgrade Application Code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrading-the-Application-Code): The article explains how to upgrade the application code to version 14 and how to merge code from different versions of the application.
- [Upgrade Considerations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrade-Considerations): This article provides tips and considerations to prepare a solution when you are planning to upgrade Microsoft Dynamics 365 Business Central.
- [Upgrading the Data to in Single-Tenant Deployment](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrading-the-Data): This article describes the tasks required for upgrade the data to version 14 when you have a single-tenant deployment.
- [Upgrading to On-Premises v.14](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-to-business-central-on-premises): Gives an overview of the different upgrade paths to On-Premises Spring 2019 from older versions.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
