---
id: topic/dev-itpro/business-central-on-premises/upgrade/earlier-versions/business-central-spring-2019
type: topic
title: Business Central spring 2019
summary: "Business Central spring 2019 (v.14) on-premises upgrade documentation: planning, application code merge, technical upgrade, data upgrade for single-tenant and multitenant deployments, cumulative update installation, and the codeunit 1 transition. It answers how to upgrade from Dynamics NAV or earlier versions to v.14."
tier: official
language: en
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-19T01:01:35.036Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 21a90d6f36d79d9e3801cc9a3ff1ea436c3141e7c92a58163e58144bc3db1212
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrade-Considerations
    title: Business Central Upgrade Planning and Considerations
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrade-Considerations
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Converting-a-Database
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/multitenant-upgrade-checklist
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/singletenant-upgrade-checklist
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/technical-upgrade-checklist
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/transition-from-codeunit1
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrading-the-Application-Code
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

> Business Central spring 2019 (v.14) on-premises upgrade documentation: planning, application code merge, technical upgrade, data upgrade for single-tenant and multitenant deployments, cumulative update installation, and the codeunit 1 transition. It answers how to upgrade from Dynamics NAV or earlier versions to v.14.

Path: [Business Central on-premises](../../../business-central-on-premises.md) > [Upgrade](../../upgrade.md) > [Earlier versions](../earlier-versions.md) > Business Central spring 2019 · tier official · system platform · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers upgrading to Business Central on-premises Spring 2019 (version 14) from Dynamics NAV and earlier Business Central versions. The path depends on the source version, with different paths for versions before NAV 2018. An upgrade combines an application code upgrade and a data upgrade, and a technical upgrade converts the database itself.

Start with "Upgrading to On-Premises v.14" and "Business Central Upgrade Planning and Considerations". They cover requirements, extension migration, schema changes and deprecated features to deal with first. Then follow the detailed pages: "Upgrade Application Code" for merging code, "Converting a Database ... Technical Upgrade" for database conversion, and "Upgrading the Data" for the single-tenant data upgrade. "Transitioning from Codeunit 1 to System Codeunits" helps update custom code.

The quick reference pages (technical upgrade, single-tenant full upgrade, multitenant technical upgrade) give task checklists to use while you run the upgrade. "Install a cumulative update" covers applying hotfixes and regulatory updates to an existing on-premises deployment.

## Key points

- Target is Business Central Spring 2019 (version 14) on-premises, with upgrade paths that differ for versions before NAV 2018.
- Planning covers extension V1 to V2 conversion, upgrade codeunits, per-tenant extensions, the cloud migration tool, and CRM integration upgrade.
- Application code is merged by comparing three versions (original, modified, target) with Merge-, Compare-, Update- and Export-NAVApplicationObject cmdlets, with conflict resolution.
- Technical upgrade converts the database, including RDL report conversion, schema synchronization, license upload, and V1 to V2 extension migration.
- Data upgrade runs upgrade codeunits and synchronizes the schema, with extension publishing, symbol generation and permission set import/export.
- Quick references give checklists for technical upgrade, single-tenant full upgrade and multitenant full upgrade (tenant synchronization, encryption keys, permissions).
- Codeunit 1 is removed and replaced by system codeunits with event publishers, so custom code must be updated.
- Cumulative update install involves downloading the package, updating platform components, importing application objects, publishing extensions and uploading the license.

## Learn pages

- [Business Central Upgrade Planning and Considerations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrade-Considerations): Review application, customization, schema, and data considerations when upgrading a Dynamics NAV solution to Business Central on-premises.
- [Converting a Database to Dynamics 365 Business Central - Technical Upgrade](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Converting-a-Database): Learn how to convert a database from one of the supported versions to Business Central version 14 as part of a technical upgrade.
- [Install a cumulative update](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-cumulative-update): This article describes the tasks required for getting the monthly cumulative update applied to your Dynamics 365 Business Central on-premises.
- [Multitenant Technical Upgrade Quick Reference](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/multitenant-upgrade-checklist)
- [Single-Tenant Full Upgrade Quick Reference](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/singletenant-upgrade-checklist): Get an overview of the steps required to upgrade from one version of Business Central on-premises to the next.
- [Technical Upgrade Quick Reference](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/technical-upgrade-checklist)
- [Transitioning from Codeunit 1 to System Codeunits](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/transition-from-codeunit1): Learn how to convert your custom code as part of the upgrade to version 14 of Business Central.
  - In the observatory: [Codeunit 40 "LogInManagement"](../../../../../objects/codeunit/40.md), [Codeunit 44 "ReportManagement"](../../../../../objects/codeunit/44.md), [Codeunit 49 "GlobalTriggerManagement"](../../../../../objects/codeunit/49.md), [Codeunit 9015 "Application System Constants"](../../../../../objects/codeunit/9015.md)
- [Upgrade Application Code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrading-the-Application-Code): The article explains how to upgrade the application code to version 14 and how to merge code from different versions of the application.
- [Upgrading the Data to in Single-Tenant Deployment](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrading-the-Data): This article describes the tasks required for upgrade the data to version 14 when you have a single-tenant deployment.
  - In the observatory: [Page 9802 "Permission Sets"](../../../../../objects/page/9802.md), [Page 9820 "Control Add-ins"](../../../../../objects/page/9820.md)
- [Upgrading to On-Premises v.14](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrading-to-business-central-on-premises): Gives an overview of the different upgrade paths to On-Premises Spring 2019 from older versions.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
