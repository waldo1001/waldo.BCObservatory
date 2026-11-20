---
id: topic/dev-itpro/development/programming-in-the-al-language/handling-security/permission-sets-and-entitlements-overvie
type: topic
title: Permission sets and entitlements overview
summary: "Permission sets and entitlements in Business Central AL development: how to define, compose, extend, export and upgrade permission sets, how entitlements tie licenses to objects, and how to use inherent permissions. It also covers permission-related telemetry. Use it for questions on AL permission objects and on diagnosing permission errors."
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T01:01:32.224Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a0139fde23bbbda7f1f192751153a6f88d0811dd65daee4eae9f720d0ce30e41
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
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-dependency-cycle-trace
    title: Analyzing Permission Dependency Cycle Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace
    title: Analyzing Permission Error Trace Telemetry
    date: "2026-11-17"
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
  posts:
    - post/yzhums-com/56521
    - post/yzhums-com/65999
    - post/yzhums-com/69809
  guidelines: []
  changes:
    - change/bcapps/12255
    - change/bcapps/14288
    - change/bcapps/8947
    - change/bcapps/9599
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
  blog: 3
  guideline: 0
bc_forms: []
member_hash: f33e0b05969bd241cd9a1772129a10fa1fed0a52c873f9fef18f928c6cfd523a
narrative: generated
---

# Permission sets and entitlements overview

> Permission sets and entitlements in Business Central AL development: how to define, compose, extend, export and upgrade permission sets, how entitlements tie licenses to objects, and how to use inherent permissions. It also covers permission-related telemetry. Use it for questions on AL permission objects and on diagnosing permission errors.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Handling security](../handling-security.md) > Permission sets and entitlements overview · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the AL-based security model. Entitlements define which objects a customer can use based on purchased licenses or Microsoft Entra roles. Permissions are assigned by administrators, and permission sets group them logically. The pages explain the concepts and the AL objects: permission set, permission set extension and entitlement.

Several pages cover how to build permissions. You assign read, insert, modify, delete and execute permissions on objects, directly or indirectly. You can compose sets from other sets with included and excluded permission sets. Extensions can add permissions to existing sets. Inherent permissions give specific AL methods temporary elevated access without changing user permission sets. Other pages cover exporting permission sets to XML and upgrading from legacy data-based permissions to AL object-based permissions.

Three telemetry pages cover monitoring: permission changes, permission errors and dependency cycles. Start with "Entitlements and permission sets overview" for the concepts, then "Permission set object" and "Permissions on Objects" for practical authoring.

## Key points

- Entitlements are license-based access, permissions are assigned by administrators, and permission sets are logical groups of permissions.
- The permission set object has Assignable, Permissions, IncludedPermissionSets and ExcludedPermissionSets properties. Nonassignable sets can be used as building blocks.
- Permission set extension objects add permissions to existing sets and apply automatically when the extension is installed.
- Entitlement objects (2023 release wave 2) support role-based, per-user plan, unlicensed, Microsoft Entra group and application scope entitlements, and Marketplace app transactability.
- Permissions on objects can be direct or indirect, and the page lists permission abbreviations and wildcards.
- The inherentpermissions attribute grants temporary read, write or execute rights to specific AL methods or events.
- Upgrading from legacy data-based permissions to AL object-based permissions applies to versions 18 and 19 and involves identifying customizations and creating new AL objects.
- Telemetry covers permission changes (version 17.2), permission errors (RT0031) and permission dependency cycles (RT0032), with KQL samples for analysis.

## Learn pages

- [(automation API) Get permissionSet](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/api/dynamics_permissionset_get): Gets a permission set object in Dynamics 365 Business Central.
- [Analyzing Permission Changes Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-changes-trace): Analyze Business Central permission change telemetry to track permission sets, user assignments, and changes made by extensions during installation or updates.
  - Status: Permission changes telemetry applies to Business Central 2020 release wave 2, version 17.2, and later.
  - Tracks user-defined permission set creation, deletion, and system permission set links.
  - Monitors assignment or removal of permission sets from users and user groups.
  - Captures permission set changes made by apps or extensions during install or upgrade.
  - Events AL0000E2A through AL0000E2F track specific permission set operations with details.
  - LC0058 event identifies app or extension that changed permission set with ID, name, publisher.
  - In the observatory: [Codeunit 1351 "Telemetry Subscribers"](../../../../../objects/codeunit/1351.md)
- [Analyzing Permission Dependency Cycle Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-dependency-cycle-trace): Analyze permission dependency cycle telemetry in Business Central to identify circular permission set references and investigate the dependency path.
  - Permission dependency cycle occurs when permission set depends on itself directly or indirectly
  - Dependency cycle discovered event has ID RT0032 with severity level 3
  - Cycle error message shows circular reference path, for example [XX]->[YY]->[XX]
  - Telemetry includes AL object ID and type if error relates to specific object
  - Permission area values recorded are System, Entitlement, Company, or Object
  - Permission type values include Delete, Execute, Insert, Modify, Read, or Undefined
- [Analyzing Permission Error Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace): Analyze permission error telemetry in Business Central to identify missing permissions, inspect affected objects, and investigate errors reported to users.
  - Permission error telemetry signals when users get permission-related error dialogs.
  - Permission Error Shown event has eventId RT0031 at severity level 1.
  - Data includes object ID, name, type, and permission area that caused the error.
  - permissionType dimension shows missing permission: Delete, Execute, Insert, Modify, or Read.
  - permissionArea dimension indicates System, Entitlement, Company, or Object scope.
  - Stack trace and error message help identify where permission check failed in code.
  - Sample KQL code helps analyze which permission errors users encounter frequently.
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

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12255 Fix overwrite import of exported system permission sets](../../../../../changes/bcapps/12255.md) (code change): "System permission set imports with overwrite option now correctly"
- [#14288 Grant report layout override permissions for non-SUPER users](../../../../../changes/bcapps/14288.md) (code change): "Reporting - Edit permission set now grants necessary permissions for non-SUPER users"
- [#8947 [Permissions] Add Where-Used and Permissions Overview navigation actions](../../../../../changes/bcapps/8947.md) (code change): "Permission Sets list gains Where-Used and Permissions Overview actions"
- [#9599 Add event subscriber for OpenPermissionSetPage](../../../../../changes/bcapps/9599.md) (code change): "A new event subscriber codeunit enables programmatic opening of the permission set"
- [Dynamics 365 Business Central: How to hide/disable New, Edit (Edit List), and Delete actions on the page](../../../../../posts/yzhums-com/56521.md) (community post): "using permission sets to exclude Insert, Modify, and Delete permissions"
- [Dynamics 365 Business Central: Remove obsolete permissions from all permission sets](../../../../../posts/yzhums-com/65999.md) (community post): "The Remove Obsolete Permissions action on the Permission Sets page automatically removes deprecated permissions"
- [Dynamics 365 Business Central: Make sure to generate the permission set file before installing your extension](../../../../../posts/yzhums-com/69809.md) (community post): "Permission set files must be generated for AL extensions so non-Super users"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
