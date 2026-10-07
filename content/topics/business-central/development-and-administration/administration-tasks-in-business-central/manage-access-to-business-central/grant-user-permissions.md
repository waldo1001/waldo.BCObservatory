---
id: topic/business-central/development-and-administration/administration-tasks-in-business-central/manage-access-to-business-central/grant-user-permissions
type: topic
title: Grant user permissions
summary: "Granting user permissions in Business Central: creating users based on license type, assigning permission sets, and defining granular permission sets with read, insert, modify, delete and execute access. It answers questions about user setup, license-based permissions, and record-level security."
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
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
  objects: []
  features: []
  topics:
    - topic/business-central/development-and-administration/administration-tasks-in-business-central/manage-access-to-business-central
  localizations: []
  videos:
    - video/asSSBl8Cj34
  posts:
    - post/thedynamicsexplorer-com/37042
  guidelines: []
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
  code: 0
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

> Granting user permissions in Business Central: creating users based on license type, assigning permission sets, and defining granular permission sets with read, insert, modify, delete and execute access. It answers questions about user setup, license-based permissions, and record-level security.

Path: [Development and administration](../../../development-and-administration.md) > [Administration tasks in Business Central](../../administration-tasks-in-business-central.md) > [Manage access to Business Central](../manage-access-to-business-central.md) > Grant user permissions · tier official · system administration · **unreviewed** (machine-generated narrative)

## Overview

This section covers how administrators give users access in Business Central, for both online and on-premises deployments. It has two pages that work in sequence: one for creating users and tying them to licenses, and one for building custom permissions.

Start with "Create users according to licenses". It explains creating users, assigning permission sets, managing licenses, and configuring permissions by license type. It also touches on security groups, user groups and delegated admin.

Then use "Define granular permissions" when the standard permission sets are not enough. It describes creating permission sets with access levels per database object, using indirect permissions and security filters for record-level control, and importing or exporting permissions.

## Key points

- Users are created and assigned permission sets by administrators, with permissions configured according to license type.
- License assignment, security groups, user groups and delegated admin are covered in the user creation page.
- Applies to Business Central online and on-premises.
- Custom permission sets can set read, insert, modify, delete and execute access on database objects.
- Indirect permissions let users reach objects through other objects they are allowed to use.
- Security filters provide record-level access control.
- Permissions can be imported and exported.

## Learn pages

- [Create users according to licenses](https://learn.microsoft.com/dynamics365/business-central/ui-how-users-permissions): Describes how to add users to Business Central online or on-premises based on licenses.
- [Define granular permissions](https://learn.microsoft.com/dynamics365/business-central/ui-define-granular-permissions): This article describes how to define granular permissions and assign each user the permission sets that they need to do their jobs.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Dynamics 365 Business Central – Why when I create new users do they get full access by default](../../../../../posts/thedynamicsexplorer-com/37042.md) (community post): "Administrators can remove permission sets like D365 BUS FULL ACCESS to restrict default access"
- [What's Cooking in Business Central: Replace Permission Sets Upon Import](../../../../../videos/asSSBl8Cj34.md) (video): "Replace permission sets upon import; Import permission sets action"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 119, 774, 6300, 6301, 6302, 8930, 9061, 9062, 9069, 9173, 9800, 9802, 9807, 9808, 9816, 9818, 9830, 9831, 9838, 9855, 9862, 9865, 9874, 9878, 9883.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
