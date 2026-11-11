---
id: topic/business-central/development-and-administration/administration-tasks-in-business-central/manage-access-to-business-central/access-with-microsoft-365-licenses
type: topic
title: Access with Microsoft 365 licenses
summary: Access with Microsoft 365 licenses covers how employees without Business Central licenses get read-only access to Business Central data through Microsoft Teams. It answers questions about what the access allows, how to set it up, how the first-time user flow works, and common licensing and permission questions.
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-11T00:59:22.225Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ad0afe18c338a2e2098accfb606633ad0815d2f1936281f15713b94be884c987
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license-faq
    title: Access with Microsoft 365 Licenses FAQ
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license
    title: Business Central Access with Microsoft 365 Licenses
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license-setup
    title: Set Up Access with Microsoft 365 Licenses
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license-flow
    title: User Access Flow for Microsoft 365 Licenses
    date: "2026-11-09"
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
  posts:
    - post/yzhums-com/64474
    - post/yzhums-com/70836
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
  blog: 2
  guideline: 0
bc_forms:
  - 1978
  - 9061
member_hash: 42d3e128a8c5a86581b05e2fdd56b3703a47231ff80eb2984b92834e1edd71b0
narrative: generated
---

# Access with Microsoft 365 licenses

> Access with Microsoft 365 licenses covers how employees without Business Central licenses get read-only access to Business Central data through Microsoft Teams. It answers questions about what the access allows, how to set it up, how the first-time user flow works, and common licensing and permission questions.

Path: [Development and administration](../../../development-and-administration.md) > [Administration tasks in Business Central](../../administration-tasks-in-business-central.md) > [Manage access to Business Central](../manage-access-to-business-central.md) > Access with Microsoft 365 licenses · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

Access with Microsoft 365 licenses lets organizations give employees read-only access to Business Central data in Microsoft Teams, using their existing Microsoft 365 license instead of a Business Central license. It widens access across the organization while keeping licensing costs down. The Teams experience is a simplified interface, and security filters and permission sets control what users see.

The four pages fit together as a path. The overview page explains the concept and what users get. The setup page walks through the administrator tasks: configuring permissions, enabling access in the environment, assigning security groups, and deploying the Teams app. The user access flow page describes what happens the first time a user opens Business Central data, from authentication to user record provisioning. The FAQ answers follow-up questions on permissions, licensing and usage.

Start with the overview to confirm the scenario fits, then follow the setup page. Use the access flow page to troubleshoot first-time sign-in, and the FAQ for edge cases.

## Key points

- Gives read-only access to Business Central data in Microsoft Teams for users with Microsoft 365 licenses and no Business Central license.
- Teams interface is simplified, and security filters limit what data is visible.
- Setup involves configuring permission sets, enabling access in the environment, assigning security groups, and deploying the Teams app.
- Teams app can be deployed through centralized deployment, and an assisted setup guide supports configuration.
- On first access, the flow checks identity, minimum requirements, license, and environment, then provisions the user record and assigns permission sets.
- The FAQ covers permission sets, security groups, employee profile, and license configuration, and mentions versions 21.1 and 25.
- Supports cross-organization data sharing as part of the access model.

## Learn pages

- [Access with Microsoft 365 Licenses FAQ](https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license-faq): Find answers about permissions, setup, licensing, and read-only access when employees view Business Central data in Teams with Microsoft 365 licenses.
- [Business Central Access with Microsoft 365 Licenses](https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license): Discover how users can view Business Central data in Microsoft Teams with only a Microsoft 365 license. Learn setup steps and requirements.
- [Set Up Access with Microsoft 365 Licenses](https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license-setup): Configure Business Central permissions, enable access with Microsoft 365 licenses, deploy the Teams app, and test read-only access for your users.
  - In the observatory: [Page 9800 "Users"](../../../../../objects/page/9800.md)
- [User Access Flow for Microsoft 365 Licenses](https://learn.microsoft.com/dynamics365/business-central/admin-access-with-m365-license-flow): Get an overview of what happens when a user accesses Business Central data using their Microsoft 365 license for the first time.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Dynamics 365 Business Central: How to check whether the current user has only the Microsoft 365 Plan in AL](../../../../../posts/yzhums-com/64474.md) (community post): "Users with only Microsoft 365 licenses can access Business Central through Microsoft Teams"
- [Dynamics 365 Business Central: Set up access to Business Central with Microsoft 365 licenses within BC (Not in Admin Center)](../../../../../posts/yzhums-com/70836.md) (community post): "Microsoft Teams users can access Business Central data using Microsoft 365 licenses instead of Business Central licenses"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1978 "MS 365 License Setup Wizard"](../../../../../objects/page/1978.md) · captioned "Set up access with Microsoft 365 licenses"
- [Page 9061 "Plan Configuration List"](../../../../../objects/page/9061.md) · captioned "License Configuration" · on [Table 9017 "Plan Configuration"](../../../../../objects/table/9017.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
