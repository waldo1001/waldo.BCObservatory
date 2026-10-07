---
id: topic/business-central/development-and-administration/administration-tasks-in-business-central/manage-access-to-business-central
type: topic
title: Manage access to Business Central
summary: "Managing access to Business Central: licensing, user accounts, environment access, permissions and security groups. It answers questions on who can use the system, how to grant permissions, how to use security groups, and how Microsoft 365 licenses give read-only access through Teams."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T13:37:27.484Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 43db5ecea86bc8cffd552a6a83843833997fdaa46ee9246fef867d91cfd083c0
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license-faq
    title: Access with Microsoft 365 Licenses FAQ
    date: "2023-09-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license
    title: Business Central Access with Microsoft 365 Licenses
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-security-groups
    title: Control Access Using Security Groups
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-access-overview
    title: Manage Access to Business Central
    date: "2023-04-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license-setup
    title: Set Up Access with Microsoft 365 Licenses
    date: "2024-08-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license-flow
    title: User Access Flow for Microsoft 365 Licenses
    date: "2022-11-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/ui-security-groups
    - https://learn.microsoft.com/dynamics365/business-central/admin-access-overview
  objects: []
  features: []
  topics:
    - topic/business-central/development-and-administration/administration-tasks-in-business-central
    - topic/business-central/development-and-administration/administration-tasks-in-business-central/manage-access-to-business-central/access-with-microsoft-365-licenses
    - topic/business-central/development-and-administration/administration-tasks-in-business-central/manage-access-to-business-central/grant-user-permissions
  localizations: []
  videos: []
  posts:
    - post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-31-block-users-using-security-group--195514d4be
  guidelines: []
learn_toc_path:
  - Development and administration
  - Administration tasks in Business Central
  - Manage access to Business Central
toc_file: business-central/TOC.md
parent: topic/business-central/development-and-administration/administration-tasks-in-business-central
children:
  - topic/business-central/development-and-administration/administration-tasks-in-business-central/manage-access-to-business-central/access-with-microsoft-365-licenses
  - topic/business-central/development-and-administration/administration-tasks-in-business-central/manage-access-to-business-central/grant-user-permissions
coverage:
  learn: 8
  code: 0
  video: 0
  blog: 1
  guideline: 0
bc_forms:
  - 1
  - 119
  - 774
  - 1978
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
  - 9868
  - 9869
  - 9871
  - 9872
  - 9873
  - 9874
  - 9875
  - 9877
  - 9878
  - 9883
member_hash: 3a4a6b038fe376c17128e50483e5b7850db107df135844dd34439ebbbb7972c0
narrative: generated
---

# Manage access to Business Central

> Managing access to Business Central: licensing, user accounts, environment access, permissions and security groups. It answers questions on who can use the system, how to grant permissions, how to use security groups, and how Microsoft 365 licenses give read-only access through Teams.

Path: [Development and administration](../../development-and-administration.md) > [Administration tasks in Business Central](../administration-tasks-in-business-central.md) > Manage access to Business Central · tier official · system administration · narrative reviewed by Opus

## Overview

This section describes a layered approach to controlling who can use Business Central. The layers are licenses (Dynamics 365 Business Central and Microsoft 365), user accounts, environment access, permissions, and security groups. Multi-Factor Authentication and Azure service tags are also named among the topics.

The main page, Manage Access to Business Central, gives the overview and is the best place to start. From there, Control Access Using Security Groups explains how to apply permissions to all members of a group, with Microsoft Entra ID or Windows Active Directory, online or on-premises.

Two subtopics go deeper. Grant user permissions covers creating users by license type, assigning permission sets, and defining granular permission sets with record-level security filters. Access with Microsoft 365 licenses covers read-only access to Business Central data through Microsoft Teams.

## Key points

- Access control has layers: licenses, user accounts, environment access, permissions, and security groups.
- Security groups apply permissions to all members and support Microsoft Entra ID and Windows Active Directory, online and on-premises.
- Security groups can carry company-specific permissions and give access to multiple companies; group membership is managed in the groups.
- The security groups page lists versions 25.11, 26.5 and 27.4.
- Users are created according to license type and given permission sets, with license assignment, user groups and delegated admin also covered.
- Granular permission sets define read, insert, modify, delete and execute access, plus indirect permissions and security filters for record-level security.
- Permissions can be imported and exported.
- Microsoft 365 license holders get read-only access to Business Central data through Teams; the subtopic covers setup, authentication, provisioning and licensing questions.

## Subtopics

- [Access with Microsoft 365 licenses](manage-access-to-business-central/access-with-microsoft-365-licenses.md) (4 pages)
- [Grant user permissions](manage-access-to-business-central/grant-user-permissions.md) (2 pages)

## More Learn pages

- [Control Access Using Security Groups](https://learn.microsoft.com/dynamics365/business-central/ui-security-groups): This article describes how to use security groups to define user permissions.
- [Manage Access to Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-access-overview): Administrators use a layered approach to controlling access to Business Central and its capabilities.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [BC Friday Tips #31 Block Users using Security Group](../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-31-block-users-using-security-group--195514d4be.md) (community post): "Environment-level security groups in Azure AD restrict access to Business Central"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 1, 119, 774, 1978, 6300, 6301, 6302, 8930, 9061, 9062, 9069, 9173, 9800, 9802, 9807, 9808, 9816, 9818, 9830, 9831, 9838, 9855, 9862, 9865, 9868, 9869, 9871, 9872, 9873, 9874, 9875, 9877, 9878, 9883.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
