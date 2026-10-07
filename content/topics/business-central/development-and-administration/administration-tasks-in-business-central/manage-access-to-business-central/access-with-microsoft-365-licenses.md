---
id: topic/business-central/development-and-administration/administration-tasks-in-business-central/manage-access-to-business-central/access-with-microsoft-365-licenses
type: topic
title: Access with Microsoft 365 licenses
summary: Access with Microsoft 365 licenses in Business Central lets Microsoft 365 license holders view Business Central data through Microsoft Teams with read-only access. It answers questions about what the feature is, how to set it up, how user access is authenticated and provisioned, and common licensing and permission questions.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:09.606Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 36b7ade2d7b90d25f978cd68c0ca68aa4dc6e5309ba01b72313c8ab731c7dca9
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
    - https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license-faq
    - https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license
    - https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license-setup
    - https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license-flow
  objects:
    - object/page/1978
    - object/page/9061
  features: []
  topics:
    - topic/business-central/development-and-administration/administration-tasks-in-business-central/manage-access-to-business-central
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development and administration
  - Administration tasks in Business Central
  - Manage access to Business Central
  - Access with Microsoft 365 licenses
toc_file: business-central/TOC.md
parent: topic/business-central/development-and-administration/administration-tasks-in-business-central/manage-access-to-business-central
children: []
coverage:
  learn: 4
  code: 2
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 1978
  - 9061
member_hash: 42d3e128a8c5a86581b05e2fdd56b3703a47231ff80eb2984b92834e1edd71b0
narrative: generated
---

# Access with Microsoft 365 licenses

> Access with Microsoft 365 licenses in Business Central lets Microsoft 365 license holders view Business Central data through Microsoft Teams with read-only access. It answers questions about what the feature is, how to set it up, how user access is authenticated and provisioned, and common licensing and permission questions.

Path: [Development and administration](../../../development-and-administration.md) > [Administration tasks in Business Central](../../administration-tasks-in-business-central.md) > [Manage access to Business Central](../manage-access-to-business-central.md) > Access with Microsoft 365 licenses · tier official · system administration · narrative reviewed by Opus

## Overview

This section covers a way to give people who hold Microsoft 365 licenses, but not full Business Central licenses, access to Business Central data in Microsoft Teams. The experience is a simplified, read-only interface with data access controls.

Four pages make up the section. The overview page explains the capability. The setup page walks through license configuration, permissions, environment setup, security groups, centralized deployment and testing. The user access flow page explains how Business Central authenticates users, checks minimum requirements, provisions user records and applies security. The FAQ covers permissions, setup, licensing and usage questions.

Start with the overview page, then follow the setup page to configure the environment. Use the access flow page to understand what happens at sign-in, and the FAQ for specific questions.

## Key points

- Gives Microsoft 365 license holders read-only access to Business Central data in Teams without full Business Central licensing.
- The interface is simplified and data access is controlled by permissions.
- Setup involves license configuration, permission sets (including the D365 Read permission set), environment setup, security group assignment, centralized deployment and testing.
- The access flow covers authentication, minimum requirement checks, user record provisioning and security controls.
- The FAQ mentions the Employee profile, the Microsoft Teams Internal Users group and row-level security.
- The FAQ references version 21.1 (Update 21.1).

## Learn pages

- [Access with Microsoft 365 Licenses FAQ](https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license-faq): Get answers to common questions about accessing Business Central with Microsoft 365 licenses.
- [Business Central Access with Microsoft 365 Licenses](https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license): Discover how users can view Business Central data in Microsoft Teams with only a Microsoft 365 license. Learn setup steps and requirements.
- [Set Up Access with Microsoft 365 Licenses](https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license-setup): A guide to how administrators can configure access to Business Central with Microsoft 365 licenses.
- [User Access Flow for Microsoft 365 Licenses](https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license-flow): Get an overview of what happens when a user accesses Business Central data using their Microsoft 365 license for the first time.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1978 "MS 365 License Setup Wizard"](../../../../../objects/page/1978.md) · captioned "Set up access with Microsoft 365 licenses"
- [Page 9061 "Plan Configuration List"](../../../../../objects/page/9061.md) · captioned "License Configuration" · on [Table 9017 "Plan Configuration"](../../../../../objects/table/9017.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
