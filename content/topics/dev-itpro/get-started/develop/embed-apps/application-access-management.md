---
id: topic/dev-itpro/get-started/develop/embed-apps/application-access-management
type: topic
title: Application Access Management
summary: Application Access Management covers how embed app ISVs and VARs control which customers can create online environments for their apps. It answers questions about enabling access management, registering VARs, approving tenants, and using the Application Access Management API.
tier: official
language: en
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
  input_hash: 41fd3db0c0fff55ff3a2aced5e33325d0f7661fcebb349d2a2b8e6c3b0c28001
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/embedapps/embed-app-application-access-management
    title: Application access management
    date: "2024-01-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/embedapps/embed-app-application-access-management-api
    title: Application Access Management API
    date: "2023-08-24"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/embedapps/embed-app-application-access-management
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/embedapps/embed-app-application-access-management-api
  objects: []
  features: []
  topics:
    - topic/dev-itpro/get-started/develop/embed-apps
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Get started
  - Develop
  - Embed apps
  - Application Access Management
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/get-started/develop/embed-apps
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: e01cb6bb9c8ae60f9bec112774572e035aea280d4aa1640c712ed9cc10a30e4e
narrative: generated
---

# Application Access Management

> Application Access Management covers how embed app ISVs and VARs control which customers can create online environments for their apps. It answers questions about enabling access management, registering VARs, approving tenants, and using the Application Access Management API.

Path: [Get started](../../../get-started.md) > [Develop](../../develop.md) > [Embed apps](../embed-apps.md) > Application Access Management · tier official · system none · **unreviewed** (machine-generated narrative)

## Overview

Application access management is a control for embed app ISVs and VARs. It lets them enable or disable application access, so they decide which customers can create online environments. This is done through registration processes and through APIs.

The section has two pages. The first explains the concept and the process: enabling application access management, registering VARs, managing customer access, tenant approval, and delegated admin access. The second documents the Application Access Management API, which delegated administrators use through REST endpoints to manage access by application family and country code.

Start with the overview page to understand how enabling and registration work. Then use the API page when you need to list manageable applications or change tenant access programmatically.

## Key points

- Lets embed app ISVs and VARs decide which customers can create online environments.
- Access is enabled or disabled through APIs and registration processes.
- Covers registering VARs and approving tenants.
- Delegated administrators can manage customer access.
- The API uses REST endpoints to get the list of manageable applications.
- The API controls access to Business Central and embed app application families.
- Access is managed by country code and by tenant.

## Learn pages

- [Application access management](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/embedapps/embed-app-application-access-management): Learn how application access management works as an Embed App ISV and VAR.
- [Application Access Management API](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/embedapps/embed-app-application-access-management-api): Learn about the Application Access Management API.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
