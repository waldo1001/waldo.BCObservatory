---
id: topic/business-central/development-and-administration/administration-tasks-in-business-central/manage-access-to-business-central/grant-user-permissions
type: topic
title: Grant user permissions
summary: "Granting user permissions in Business Central: creating users according to license type, assigning permission sets, license assignment, security groups, user groups and delegated admin, plus defining granular permission sets with read, insert, modify, delete and execute access, indirect permissions, security filters for record-level security, and permission import/export."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:22:30.673Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f71bf49f1b97704defef02d11b8bc1974c8fce04cd2940c5068d12e2134ce184
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-users-permissions
    title: Create users according to licenses
    date: "2026-07-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-define-granular-permissions
    title: Define granular permissions
    date: "2026-03-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/ui-how-users-permissions
    - https://learn.microsoft.com/dynamics365/business-central/ui-define-granular-permissions
  objects:
    - object/page/119
    - object/page/774
    - object/page/6300
    - object/page/6301
    - object/page/6302
    - object/page/8930
    - object/page/9061
    - object/page/9062
    - object/page/9069
    - object/page/9800
    - object/page/9802
    - object/page/9807
    - object/page/9808
    - object/page/9816
    - object/page/9818
    - object/page/9855
    - object/page/9862
    - object/page/9865
    - object/page/9874
    - object/page/9878
    - object/page/9883
  features: []
  topics:
    - topic/business-central/development-and-administration/administration-tasks-in-business-central/manage-access-to-business-central
  localizations: []
  videos:
    - video/asSSBl8Cj34
  posts:
    - post/thedynamicsexplorer-com/37042
  guidelines: []
  changes:
    - change/bcapps/10579
    - change/bcapps/11561
    - change/bcapps/11961
    - change/bcapps/11989
    - change/bcapps/12255
    - change/bcapps/8947
    - change/bcapps/9599
    - change/bcapps/9692
learn_toc_path:
  - Development and administration
  - Administration tasks in Business Central
  - Manage access to Business Central
  - Grant user permissions
toc_file: business-central/TOC.md
parent: topic/business-central/development-and-administration/administration-tasks-in-business-central/manage-access-to-business-central
children: []
coverage:
  learn: 2
  code: 21
  video: 1
  blog: 1
  guideline: 0
bc_forms:
  - 119
  - 774
  - 6300
  - 6301
  - 6302
  - 8930
  - 9061
  - 9062
  - 9069
  - 9173
  - 9800
  - 9802
  - 9807
  - 9808
  - 9816
  - 9818
  - 9830
  - 9831
  - 9838
  - 9855
  - 9862
  - 9865
  - 9874
  - 9878
  - 9883
member_hash: 516e37befff368ab038355069fc2c3c44edb76087027f0f54b4c11accd0c5a09
narrative: generated
---

# Grant user permissions

> Granting user permissions in Business Central: creating users according to license type, assigning permission sets, license assignment, security groups, user groups and delegated admin, plus defining granular permission sets with read, insert, modify, delete and execute access, indirect permissions, security filters for record-level security, and permission import/export.

Path: [Development and administration](../../../development-and-administration.md) > [Administration tasks in Business Central](../../administration-tasks-in-business-central.md) > [Manage access to Business Central](../manage-access-to-business-central.md) > Grant user permissions · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section covers how administrators give users access in Business Central. It has two pages: one for creating users and tying them to licenses, and one for building granular permission sets.

"Create users according to licenses" explains creating users, assigning permission sets, managing licenses, and configuring permissions based on license types, for Business Central online and on-premises. It also covers security groups, user groups and delegated admin.

"Define granular permissions" describes creating permission sets with read, insert, modify, delete and execute access levels for database objects. It also covers indirect permissions, security filters and record-level access control, and importing and exporting permissions.

## Key points

- Administrators create users and assign permission sets, with permissions configured according to license type.
- The user creation page covers Business Central online and on-premises.
- License assignment, security groups, user groups and delegated admin are covered in the user creation page.
- Custom permission sets can set read, insert, modify, delete and execute access on database objects.
- Indirect permissions are part of defining granular permission sets.
- Security filters provide record-level access control.
- Permissions can be imported and exported.

## Learn pages

- [Create users according to licenses](https://learn.microsoft.com/dynamics365/business-central/ui-how-users-permissions): Describes how to add users to Business Central online or on-premises based on licenses.
- [Define granular permissions](https://learn.microsoft.com/dynamics365/business-central/ui-define-granular-permissions): This article describes how to define granular permissions and assign each user the permission sets that they need to do their jobs.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10579 [Bug 638696] Add teaching tip to Effective Permissions page 9852](../../../../../changes/bcapps/10579.md) (code change): "teaching tip to the Effective Permissions page to explain what effective permissions are"
- [#11561 [Permissions] Fix read-only error in obsolete permission cleanup](../../../../../changes/bcapps/11561.md) (code change): "Remove Obsolete Permissions action now deletes only from the Tenant Permission table"
- [#11961 Cache security group resolution in Effective Permissions](../../../../../changes/bcapps/11961.md) (code change): "Security group membership resolution is now cached by user in Effective Permissions"
- [#11989 [Bug 500351] Allow Effective Permissions for delegated admins and helpdesk](../../../../../changes/bcapps/11989.md) (code change): "Allow Effective Permissions for delegated admins and helpdesk"
- [#12255 Fix overwrite import of exported system permission sets](../../../../../changes/bcapps/12255.md) (code change): "System permission set imports with overwrite option now correctly delete permissions"
- [#8947 [Permissions] Add Where-Used and Permissions Overview navigation actions](../../../../../changes/bcapps/8947.md) (code change): "Navigation actions to open the Permissions Overview page with optional filters"
- [#9599 Add event subscriber for OpenPermissionSetPage](../../../../../changes/bcapps/9599.md) (code change): "A new event subscriber codeunit enables programmatic opening of the permission set details card"
- [#9692 Fix effective permission filtering](../../../../../changes/bcapps/9692.md) (code change): "Permission buffer population prioritizes exact object IDs over wildcard object ID 0"
- [Dynamics 365 Business Central – Why when I create new users do they get full access by default](../../../../../posts/thedynamicsexplorer-com/37042.md) (community post): "Administrators can remove permission sets like D365 BUS FULL ACCESS to restrict default access"
- [What's Cooking in Business Central: Replace Permission Sets Upon Import](../../../../../videos/asSSBl8Cj34.md) (video): "Replace permission sets upon import; Import permission sets action"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 119 "User Setup"](../../../../../objects/page/119.md) · on [Table 91 "User Setup"](../../../../../objects/table/91.md)
- [Page 774 "User Details"](../../../../../objects/page/774.md) · captioned "Users" · on [Table 774 "User Details"](../../../../../objects/table/774.md)
- [Page 6300 "Azure AD App Setup Wizard"](../../../../../objects/page/6300.md) · captioned "Set Up Microsoft Entra ID"
- [Page 6301 "Azure AD App Setup Part"](../../../../../objects/page/6301.md) · captioned "<Microsoft Entra application Setup Part>" · on [Table 6300 "Azure AD App Setup"](../../../../../objects/table/6300.md)
- [Page 6302 "Azure AD Access Dialog"](../../../../../objects/page/6302.md) · captioned "Microsoft Entra service permissions"
- [Page 8930 "Email View Policy List"](../../../../../objects/page/8930.md) · captioned "User Email View Policies" · on [Table 8930 "Email View Policy"](../../../../../objects/table/8930.md)
- [Page 9061 "Plan Configuration List"](../../../../../objects/page/9061.md) · captioned "License Configuration" · on [Table 9017 "Plan Configuration"](../../../../../objects/table/9017.md)
- [Page 9062 "User Security Activities"](../../../../../objects/page/9062.md) · on [Table 9062 "User Security Status"](../../../../../objects/table/9062.md)
- [Page 9069 "Plan Configuration Card"](../../../../../objects/page/9069.md) · captioned "License Configuration" · on [Table 9017 "Plan Configuration"](../../../../../objects/table/9017.md)
- [Page 9800 "Users"](../../../../../objects/page/9800.md)
- [Page 9802 "Permission Sets"](../../../../../objects/page/9802.md) · on [Table 9009 "Permission Set Buffer"](../../../../../objects/table/9009.md)
- [Page 9807 "User Card"](../../../../../objects/page/9807.md)
- [Page 9808 "User Permission Sets"](../../../../../objects/page/9808.md)
- [Page 9816 "Permission Set by User"](../../../../../objects/page/9816.md)
- [Page 9818 "User Security Status List"](../../../../../objects/page/9818.md) · captioned "User Security Status" · on [Table 9062 "User Security Status"](../../../../../objects/table/9062.md)
- [Page 9855 "Permission Set"](../../../../../objects/page/9855.md) · on [Table 9862 "PermissionSet Buffer"](../../../../../objects/table/9862.md)
- [Page 9862 "Expanded Permissions"](../../../../../objects/page/9862.md)
- [Page 9865 "Permission Lookup List"](../../../../../objects/page/9865.md) · on [Table 9865 "Permission Lookup Buffer"](../../../../../objects/table/9865.md)
- [Page 9874 "Permission Set By Sec. Group"](../../../../../objects/page/9874.md) · captioned "Permission Set by Security Group"
- [Page 9878 "Permission Set Lookup List"](../../../../../objects/page/9878.md) · captioned "Permission Set Lookup" · on [Table 9862 "PermissionSet Buffer"](../../../../../objects/table/9862.md)
- [Page 9883 "Permissions Overview"](../../../../../objects/page/9883.md)

Learn also names 4 objects with no object page: page/9173, page/9830, page/9831, page/9838.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
