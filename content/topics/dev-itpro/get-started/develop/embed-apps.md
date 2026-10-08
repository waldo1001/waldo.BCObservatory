---
id: topic/dev-itpro/get-started/develop/embed-apps
type: topic
title: Embed apps
summary: Embed apps in Business Central are partner-branded solutions built on the platform. This section covers what an embed app is, partner qualification, use of the application family name in URLs, deployment through LCS, access management for customers, and the App Management API.
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:18.746Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3a711f9e05ee5bf418cc1b57b7252ae640e43ba4cd017b66f74fb5f7f88066cf
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/appmanagement/app-management-api
    title: App Management API
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/appmanagement/app-management-overview
    title: App Management for ISVs
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/embedapps/embed-app-deployment-package
    title: Embed app deployment packages
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/embed-app-overview
    title: Embed app overview
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/embed-app-qualifications-onboarding
    title: Embed App Qualification and Onboarding of partners
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/embed-app-lifecycle-services
    title: Lifecycle Services for Embed App
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/appmanagement/app-management-updating-with-forcesync
    title: Updating an App Version by Using ForceSync
    date: "2021-06-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/embed-app-using-application-family
    title: Using Application Family in Embed App
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/embed-app-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/embed-app-qualifications-onboarding
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/embed-app-using-application-family
  objects: []
  features: []
  topics:
    - topic/dev-itpro/get-started/develop
    - topic/dev-itpro/get-started/develop/embed-apps/deployment
    - topic/dev-itpro/get-started/develop/embed-apps/application-access-management
    - topic/dev-itpro/get-started/develop/embed-apps/app-management
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Get started
  - Develop
  - Embed apps
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/get-started/develop
children:
  - topic/dev-itpro/get-started/develop/embed-apps/deployment
  - topic/dev-itpro/get-started/develop/embed-apps/application-access-management
  - topic/dev-itpro/get-started/develop/embed-apps/app-management
coverage:
  learn: 10
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: d5a350c51243fce5014e7ad7c451d8d438d9d53e09cac00520b37a8b905464cf
narrative: generated
---

# Embed apps

> Embed apps in Business Central are partner-branded solutions built on the platform. This section covers what an embed app is, partner qualification, use of the application family name in URLs, deployment through LCS, access management for customers, and the App Management API.

Path: [Get started](../../get-started.md) > [Develop](../develop.md) > Embed apps · tier official · system none · narrative reviewed (checked by Opus)

## Overview

An embed app is a partner-branded solution built on Business Central. It includes library extensions, third-party extensions, custom metadata, and optionally a code-customized base application. Partners can brand it, control exclusivity, and use .NET interoperability. The overview page also mentions version 16.

Start with the overview and the qualification page. The qualification page lists the partner requirements: 24/7 support, user assistance standards, platform support commitment, SLA agreements with Microsoft, and volume requirements for customized applications. The application family page then explains how the family name appears in URLs and endpoints across the web client, web services, mobile apps, the administration center, Marketplace, Power BI, and Excel.

Three subtopics cover operations. Deployment explains how to build packages (BACPACs, branding, manifest.json) and how ISVs use Lifecycle Services to upload, deploy to rings, and onboard customers. Application Access Management controls which customers can create online environments. App Management describes the API for deployments, updates, and customer environments.

## Key points

- An embed app combines library extensions, third-party extensions, custom metadata, and optionally a code-customized base application.
- Capabilities include partner branding, web client customization, exclusivity controls, third-party app safe listing, and .NET interoperability.
- Qualification requires 24/7 support, user assistance standards, platform support commitment, SLAs with Microsoft, and volume requirements for customized applications.
- The application family name is used in web client, web services, and mobile app URLs, and also in the administration center, Marketplace, Power BI, and Excel.
- Deployment packages use BACPACs, branding, and manifest.json, and ISVs upload and deploy them to rings through LCS.
- Application Access Management lets ISVs and VARs enable access control, register VARs, approve tenants, and use its API.
- The App Management API covers ISV update workflows and upgrading apps with breaking changes using ForceSync.

## Subtopics

- [Deployment](embed-apps/deployment.md) (2 pages)
- [Application Access Management](embed-apps/application-access-management.md) (2 pages)
- [App Management](embed-apps/app-management.md) (3 pages)

## More Learn pages

- [Embed app overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/embed-app-overview): Provides an overview of Embed App in Business Central
- [Embed App Qualification and Onboarding of partners](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/embed-app-qualifications-onboarding): Learn about the qualification and onboarding of partners to the Embed App program.
- [Using Application Family in Embed App](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/embed-app-using-application-family): Learn how to use the application family in embed app.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
