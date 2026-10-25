---
id: topic/dev-itpro/administration/entitlements-and-permissions
type: topic
title: Entitlements and permissions
summary: "Entitlements and permissions in Business Central: how license-based entitlements, permissions and permission sets differ, how the license plans are structured, and what the special permission sets (SUPER, D365 BASIC, SYSTEM APP) provide. It answers questions about access control and licensing."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:55.273Z"
  flags: []
generated:
  at: "2026-10-25T17:55:54.196Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8cb0c77812fa15a7503e3f80ba3dbf9ed845e46b41b074eff8e36ede0276aa5a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-entitlements-and-permissionsets-overview
    title: Entitlements and permission sets overview
    date: "2024-11-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/licensing
    title: Licensing in Business Central
    date: "2024-08-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/administration-special-permission-sets
    title: Special permission sets
    date: "2024-11-13"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-entitlements-and-permissionsets-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/licensing
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/administration-special-permission-sets
  objects: []
  features: []
  topics:
    - topic/dev-itpro/administration
  localizations: []
  videos:
    - video/KbXzMR4n4h8
  posts:
    - post/thedynamicsexplorer-com/37042
  guidelines: []
learn_toc_path:
  - Administration
  - Entitlements and permissions
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration
children: []
coverage:
  learn: 3
  code: 0
  video: 1
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 92a2c846413dc9b61a9d662da08d828d1f735dc798d654dafdffd2807dfd21bc
narrative: generated
---

# Entitlements and permissions

> Entitlements and permissions in Business Central: how license-based entitlements, permissions and permission sets differ, how the license plans are structured, and what the special permission sets (SUPER, D365 BASIC, SYSTEM APP) provide. It answers questions about access control and licensing.

Path: [Administration](../administration.md) > Entitlements and permissions · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section covers how access to Business Central is controlled. Entitlements come from the license, permissions are assigned by an administrator, and permission sets are logical groups of permissions. The overview page explains these terms and includes upgrade considerations from versions prior to 18.0.

The licensing page describes the plans: Essentials, Premium, Team Member and External Accountant, along with entitlements, user groups and device licenses. The special permission sets page defines sets such as SUPER, SECURITY, LOGIN, D365 BASIC, SYSTEM APP - BASIC and SYSTEM APP - ADMIN, and the access each gives.

Start with the overview to learn the concepts, then read the licensing page to see which plan grants which entitlements. Use the special permission sets page as a reference when assigning or troubleshooting access.

## Key points

- Entitlements are license-based access, permissions are assigned by administrators, and permission sets are logical groups of permissions.
- Permission sets have scopes, and include system permission sets and user-defined permission sets; AL object permissions are also covered.
- The overview includes upgrade considerations from versions prior to 18.0.
- License plans covered: Essentials, Premium, Team Member and External Accountant.
- Licensing also covers user groups and device licenses.
- Licensing page references 2020 release wave 2, 2022 release wave 1, version 17.0 and version 25.0.
- Special permission sets include SUPER, SECURITY, LOGIN, D365 BASIC, SYSTEM APP - BASIC and SYSTEM APP - ADMIN.

## Learn pages

- [Entitlements and permission sets overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-entitlements-and-permissionsets-overview): Learn about the different built-in methods to control which users can do what so that you can design the Business Central permission sets more precisely.
- [Licensing in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/licensing): Provides an overview of the licensing in Business Central
  - In the observatory: [Page 9852 "Effective Permissions"](../../../objects/page/9852.md), [Table 9007 "User Group Plan"](../../../objects/table/9007.md)
- [Special permission sets](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/administration-special-permission-sets): Learn about built-in permissions sets that carry special meaning in Business Central.
  - SUPER permission set allows read, use, update, and delete of all data and application objects.
  - Business Central requires at least one user assigned SUPER permission set in each database.
  - First user created is automatically assigned SUPER permission set; cannot be modified.
  - SUPER (DATA) permission set allows data operations but not system changes; for accounting managers.
  - SECURITY permission set manages other permission sets; users can assign perms only matching their own.
  - Intelligent Cloud permission set grants read access to all data during migration.
  - LOGIN permission set grants minimum permissions needed to sign in without role center access.
  - Status: USERGROUP permission set is deprecated in Business Central online; use SECURITY instead.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Dynamics 365 Business Central – Why when I create new users do they get full access by default](../../../posts/thedynamicsexplorer-com/37042.md) (community post): "edit the licence, turn on Customise Permissions and delete permission sets"
- [What's New: Commerce Capabilities of Business Central Apps (2024 release wave 1)](../../../videos/KbXzMR4n4h8.md) (video): "Entitlements for AppSource Apps; entitlements mapping; license-conditional functionality"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
