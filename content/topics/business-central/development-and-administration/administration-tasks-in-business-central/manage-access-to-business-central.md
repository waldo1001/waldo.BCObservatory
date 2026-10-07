---
id: topic/business-central/development-and-administration/administration-tasks-in-business-central/manage-access-to-business-central
type: topic
title: Manage access to Business Central
summary: "Access control for Business Central: licenses, user accounts, environment access, permissions, and security groups. It answers questions about who can use the system, how to grant permissions, how to use Microsoft Entra or Active Directory security groups, and how Microsoft 365 licenses give read-only access through Teams."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:27.895Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: bd02bfc737d4992b18029cb11c2e07052c687519dd59fde1596c0ed5b4fd9c65
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
    - post/thatnavguy-com/https://thatnavguy.com/blog/2025/bc-friday-tips-31-block-users-using-security-group/
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

> Access control for Business Central: licenses, user accounts, environment access, permissions, and security groups. It answers questions about who can use the system, how to grant permissions, how to use Microsoft Entra or Active Directory security groups, and how Microsoft 365 licenses give read-only access through Teams.

Path: [Development and administration](../../development-and-administration.md) > [Administration tasks in Business Central](../administration-tasks-in-business-central.md) > Manage access to Business Central · tier official · system administration · narrative reviewed by Opus

## Overview

Managing access to Business Central is layered. The main page introduces the pieces: a Dynamics 365 Business Central license or a Microsoft 365 license, user accounts, environment access, permission sets, Microsoft Entra security groups, Multi-Factor Authentication, and Azure service tags.

The pages then go deeper on each layer. The security groups page explains how to apply permissions to all members of a group, with support for Microsoft Entra ID and Windows Active Directory in online and on-premises deployments. The Grant user permissions subtopic covers creating users by license type, assigning permission sets, and defining granular permissions. The Microsoft 365 licenses subtopic covers read-only access to Business Central data through Microsoft Teams.

Start with the main page to see how licensing, accounts and permissions fit together. Then go to the subtopic that matches your task: user setup, group-based permission management, or Microsoft 365 license access.

## Key points

- The main page covers licensing, user accounts, environment access, permissions, and security groups as layers of access control.
- Security groups apply permissions to all members and work with Microsoft Entra ID and Windows Active Directory, online and on-premises.
- Security group tasks include creating groups, assigning permissions, company-specific permissions, multi-company access, and managing membership.
- Granting user permissions covers creating users by license type and assigning permission sets.
- Granular permission sets can define read, insert, modify, delete and execute access, including record-level security.
- Microsoft 365 license holders get read-only access to Business Central data through Microsoft Teams.
- The Microsoft 365 license pages cover setup, authentication, user provisioning, and common licensing and permission questions.
- The security groups page lists versions 25.11, 26.5 and 27.4.

## Subtopics

- [Access with Microsoft 365 licenses](manage-access-to-business-central/access-with-microsoft-365-licenses.md) (4 pages)
- [Grant user permissions](manage-access-to-business-central/grant-user-permissions.md) (2 pages)

## More Learn pages

- [Control Access Using Security Groups](https://learn.microsoft.com/dynamics365/business-central/ui-security-groups): This article describes how to use security groups to define user permissions.
- [Manage Access to Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-access-overview): Administrators use a layered approach to controlling access to Business Central and its capabilities.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [BC Friday Tips #31 Block Users using Security Group](../../../../posts/thatnavguy-com/https://thatnavguy.com/blog/2025/bc-friday-tips-31-block-users-using-security-group/.md) (community post): "Environment-level security groups in Azure AD restrict access to Business Central"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 1, 119, 774, 1978, 6300, 6301, 6302, 8930, 9061, 9062, 9069, 9173, 9800, 9802, 9807, 9808, 9816, 9818, 9830, 9831, 9838, 9855, 9862, 9865, 9868, 9869, 9871, 9872, 9873, 9874, 9875, 9877, 9878, 9883.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
