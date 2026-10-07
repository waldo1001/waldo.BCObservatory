---
id: topic/business-central/development-and-administration/administration-tasks-in-business-central/manage-user-settings
type: topic
title: Manage user settings
summary: User settings and profile management in Business Central for administrators. It answers questions about setting company, role, language, region, time zone and teaching tips for users, and about creating, assigning and customizing profiles and role-based page layouts.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:22:28.766Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 265f17a99720f13b9fcb5103770c5cf8b859e8d00e84995b3fe5bbf52842b1d1
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-manage-user-settings-preferences
    title: Manage user settings and preferences as the administrator
    date: "2024-07-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-users-profiles-roles
    title: Manage users and roles
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/admin-manage-user-settings-preferences
    - https://learn.microsoft.com/dynamics365/business-central/admin-users-profiles-roles
  objects: []
  features: []
  topics:
    - topic/business-central/development-and-administration/administration-tasks-in-business-central
  localizations: []
  videos:
    - video/OszitKuf8t0
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10991
    - change/bcapps/11184
    - change/bcapps/9946
learn_toc_path:
  - Development and administration
  - Administration tasks in Business Central
  - Manage user settings
toc_file: business-central/TOC.md
parent: topic/business-central/development-and-administration/administration-tasks-in-business-central
children: []
coverage:
  learn: 2
  code: 0
  video: 1
  blog: 0
  guideline: 0
bc_forms:
  - 9171
  - 9200
  - 9204
member_hash: df5881c49f74ad94a9e2cb1e7cd8c85f6748e7ef0914aa866b5ad3985a5188ef
narrative: generated
---

# Manage user settings

> User settings and profile management in Business Central for administrators. It answers questions about setting company, role, language, region, time zone and teaching tips for users, and about creating, assigning and customizing profiles and role-based page layouts.

Path: [Development and administration](../../development-and-administration.md) > [Administration tasks in Business Central](../administration-tasks-in-business-central.md) > Manage user settings · tier official · system administration · narrative reviewed by Opus

## Overview

This section covers how administrators control the working environment of Business Central users. It has two pages: one on user settings and preferences, and one on users and roles through profiles.

The user settings page explains how an administrator configures personal preferences such as company, role, language, region, time zone and teaching tips. The users and roles page explains profiles: how to create them, assign them to users, customize the pages they show, and export and import them. It also covers managing personalization.

Start with the user settings page for per-user preferences. Move to the users and roles page when you need to shape what a whole group of users sees through role centers and page layouts.

## Key points

- Administrators can set user settings for company, role, language, region and time zone.
- Teaching tips can be configured as part of user preferences.
- Profiles control access and page layouts for different user roles.
- Profiles can be created and assigned to users.
- Pages and role centers can be customized per profile.
- Profiles can be exported and imported.
- Personalization of pages can be managed by the administrator.

## Learn pages

- [Manage user settings and preferences as the administrator](https://learn.microsoft.com/dynamics365/business-central/admin-manage-user-settings-preferences): Manage user settings and preferences in Dynamics 365 Business Central.
- [Manage users and roles](https://learn.microsoft.com/dynamics365/business-central/admin-users-profiles-roles): Learn how to manage user profiles in Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10991 [Main]Cannot Rename User Due to Financial Report Audit Log Permissions - Copy](../../../../changes/bcapps/10991.md) (code change): "User Management now correctly updates Financial Report Audit Log entries when a user is renamed"
- [#11184 [29.x][All-e][FTE][SaaS] Cannot Rename User Due to Financial Report Audit Log Permissions](../../../../changes/bcapps/11184.md) (code change): "User Management now updates Financial Report Audit Log entries when a user is renamed"
- [#9946 Fix Retrieve Users overwriting existing users' custom Role Center (AB#641534)](../../../../changes/bcapps/9946.md) (code change): "Fixed a regression where Retrieve Users silently overwrote all existing users' custom Role Centers"
- [What's Cooking in Business Central: Limiting the Available Product Languages](../../../../videos/OszitKuf8t0.md) (video): "Limiting the Available Product Languages; language settings; administration; user settings; product languages"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 9171, 9200, 9204.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
