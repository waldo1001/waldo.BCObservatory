---
id: topic/dev-itpro/development/programming-in-the-al-language/handling-security/permission-sets-and-entitlements-overvie
type: topic
title: Permission sets and entitlements overview
summary: "Permission sets and entitlements in Business Central AL development: defining permission set and entitlement objects, composing and extending permission sets, setting object permissions, inherent permissions, exporting to XML, upgrading from legacy permissions, and analyzing permission telemetry."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:18:55.702Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 778674d463cc046fec6980997353cfb7039301a7b757fc4d3e1224ae11b04f64
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/api/dynamics_permissionset_get
    title: (automation API) Get permissionSet
    date: "2024-05-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-changes-trace
    title: Analyzing Permission Changes Trace Telemetry
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-dependency-cycle-trace
    title: Analyzing permission dependency cycle trace telemetry
    date: "2023-12-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace
    title: Analyzing Permission Error Trace Telemetry
    date: "2022-07-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-composing
    title: Composing Permission Sets from Other Permission Sets
    date: "2024-11-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-entitlement-object
    title: Entitlement object
    date: "2025-03-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-entitlements-and-permissionsets-overview
    title: Entitlements and permission sets overview
    date: "2024-11-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-export-permission-sets
    title: Export Permission Sets to XML
    date: "2025-01-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-inherent-permissions
    title: Inherent Permissions
    date: "2023-02-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-ext-object
    title: Permission Set Extension Object
    date: "2025-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-object
    title: Permission set object
    date: "2025-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissions-on-database-objects
    title: Permissions on Objects
    date: "2025-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/resources/dynamics_permissionset
    title: permissionSet resource type
    date: "2024-05-31"
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/api/dynamics_permissionset_get
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-changes-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-dependency-cycle-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-composing
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-entitlement-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-entitlements-and-permissionsets-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-export-permission-sets
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-inherent-permissions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-ext-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissions-on-database-objects
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/resources/dynamics_permissionset
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-permissions
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/handling-security
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Handling security
  - Permission sets and entitlements overview
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/handling-security
children: []
coverage:
  learn: 14
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: f33e0b05969bd241cd9a1772129a10fa1fed0a52c873f9fef18f928c6cfd523a
narrative: generated
---

# Permission sets and entitlements overview

> Permission sets and entitlements in Business Central AL development: defining permission set and entitlement objects, composing and extending permission sets, setting object permissions, inherent permissions, exporting to XML, upgrading from legacy permissions, and analyzing permission telemetry.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Handling security](../handling-security.md) > Permission sets and entitlements overview · tier official · system administration · narrative reviewed by Opus

## Overview

This area explains how access is controlled in Business Central from the AL developer side. Entitlements define what a customer's license or Microsoft Entra role allows. Permissions are assigned by administrators, and permission sets group them logically. The overview page "Entitlements and permission sets overview" explains these differences and covers upgrade considerations from versions before 18.0.

The authoring pages cover the Permission set object, the Permission Set Extension object, composing sets from other sets, permissions on objects, inherent permissions, and the Entitlement object. Two further pages cover exporting permission sets to XML and upgrading from legacy data-based permissions to AL object-based permissions.

Three telemetry pages cover auditing and troubleshooting: permission changes, permission errors, and permission dependency cycles. Start with the overview page, then read the Permission set object and Permissions on Objects pages. Use the telemetry pages when diagnosing problems.

## Key points

- Entitlements give license-based access, permissions are assigned by administrators, and permission sets are logical groups of permissions.
- Permission set objects use the Assignable, Permissions, IncludedPermissionSets and ExcludedPermissionSets properties. Sets can be composed hierarchically, and some can be nonassignable.
- Permission set extension objects add permissions to existing sets, and the permissions are applied automatically when the extension is installed.
- Permissions on objects cover read, insert, modify, delete and execute, with direct and indirect permissions, abbreviations and wildcards.
- The inherentpermissions attribute gives specific AL methods or events temporary elevated permissions without changing user permission sets.
- Entitlement objects (2023 release wave 2) support role-based, per-user plan, unlicensed, Microsoft Entra group and application scope entitlements, and support Marketplace app monetization.
- Permission sets can be exported to XML and packaged into extensions. Visual Studio Code can generate permission set XML with default permissions for extension objects.
- Upgrading from legacy data-based permissions to AL object-based permissions involves identifying customizations and creating new Permission Set and Permission Set Extension objects (versions 18 and 19).

## Learn pages

- [(automation API) Get permissionSet](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/api/dynamics_permissionset_get): Gets a permission set object in Dynamics 365 Business Central.
- [Analyzing Permission Changes Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-changes-trace): Learn about the telemetry for permission changes made in Business Central
- [Analyzing permission dependency cycle trace telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-dependency-cycle-trace): Learn about the permission dependency cycle trace telemetry in Business Central
- [Analyzing Permission Error Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace): Learn about the permission error telemetry in Business Central
- [Composing Permission Sets from Other Permission Sets](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-composing): Learn how to create a permission set from one or more existing permission sets in AL code for Business Central.
- [Entitlement object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-entitlement-object): Discover how to define and use entitlement objects in AL for Business Central.
- [Entitlements and permission sets overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-entitlements-and-permissionsets-overview): Learn about the different built-in methods to control which users can do what so that you can design the Business Central permission sets more precisely.
- [Export Permission Sets to XML](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-export-permission-sets): Learn more about exporting permission sets to XML in Business Central.
- [Inherent Permissions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-inherent-permissions): Description of how inherent permissions work and the InherentPermissions attribute in AL for Business Central.
- [Permission Set Extension Object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-ext-object): Description of the permission set extension object in AL for Business Central.
- [Permission set object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-object): Describes the permission set object, which sets permissions on objects in AL for Business Central.
- [Permissions on Objects](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissions-on-database-objects): This article provides an overview of permissions on objects in Business Central.
- [permissionSet resource type](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/resources/dynamics_permissionset): A permission set object in Dynamics 365 Business Central.
- [Upgrading Permission Sets and Permissions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-permissions): Describes how to upgrade permissions and permission sets

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
