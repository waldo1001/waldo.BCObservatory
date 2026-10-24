---
id: topic/dev-itpro/get-started/develop/embed-apps/app-management
type: topic
title: App Management
summary: App Management covers the App Management API and how ISVs use it to manage Business Central app deployments, updates, and customer environments. It answers questions about the API entities, ISV update workflows, and upgrading apps with breaking changes using ForceSync.
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:17.236Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3276fc7188d1a09f85e9dcbecbb1abd09c3b0b189fa5f7d4402a031c236ecbb1
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/appmanagement/app-management-updating-with-forcesync
    title: Updating an App Version by Using ForceSync
    date: "2021-06-10"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/appmanagement/app-management-api
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/appmanagement/app-management-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/appmanagement/app-management-updating-with-forcesync
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
  - App Management
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/get-started/develop/embed-apps
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 2f86df9f6d5908bba7b5e440c20a8fb5e394714c5d679fcf012d94dd42b185a1
narrative: generated
---

# App Management

> App Management covers the App Management API and how ISVs use it to manage Business Central app deployments, updates, and customer environments. It answers questions about the API entities, ISV update workflows, and upgrading apps with breaking changes using ForceSync.

Path: [Get started](../../../get-started.md) > [Develop](../../develop.md) > [Embed apps](../embed-apps.md) > App Management · tier official · system none · narrative reviewed (checked by Opus)

## Overview

App Management is for ISVs who publish Business Central apps and need to manage them across many customer deployments. The section has three pages: an ISV-oriented overview, a reference for the API itself, and a procedure for a specific upgrade case.

Start with "App Management for ISVs" to see how the API supports app updates, the app repository, customer environment management, hotfix deployment, and continuous integration. Then use "App Management API" as the reference for the REST endpoints and entities. Read "Updating an App Version by Using ForceSync" when an update contains breaking changes and needs the ForceSync sync mode.

## Key points

- The App Management API exposes REST endpoints with create, read, update, and delete operations.
- API entities: App, Country, Principal, Version, Environment, and Environment Hotfix.
- The ISV overview covers app updates, the app repository, customer environment management, and hotfix deployment.
- The API can be used in continuous integration scenarios across multiple Business Central deployments.
- ForceSync is a sync mode for upgrading apps that have breaking changes, through schema synchronization.
- The ForceSync page refers to Microsoft Lifecycle Services and side-by-side upgrades.
- ForceSync updates need careful testing before they are used in production.

## Learn pages

- [App Management API](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/appmanagement/app-management-api): Learn about managing Embed apps by using the App Management API.
  - App Management API is a REST-based service for ISVs at endpoint https://apps.businesscentral.dynamics.com.
  - App entity contains ID, publisher name, publisher Entra tenant ID, contact email, and storage location.
  - Version entity includes app ID, availability status, build and version numbers, dependencies, and upload timestamp.
  - Version availability can be Preview, Available, or Deprecated.
  - Environment hotfix operations allow pushing updates to fix critical issues only when major and minor versions unchanged.
  - Hotfixes cannot be applied to preview availability versions without changing availability or uninstalling first.
  - Limit: Principal roles are Owner, Contributor, or Reader with different permission levels.
  - Limit: Only Owner principals can add, update, or remove other principals.
- [App Management for ISVs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/appmanagement/app-management-overview): The App Management API can help you manage your apps running in different customer Business Central environments.
  - App Management API enables ISVs to deliver functionality as marketplace apps with version management and deployment.
  - API supports major, minor, and hotfix updates uploaded to App Repository for customer installation.
  - ISVs can retrieve customer environments with installed apps and schedule automatic hotfix deployments.
  - API supports CI/CD and DevOps practices including AL-Go for GitHub automation.
  - Status: Direct API access currently available for Embed apps only, not Add-on or Connect apps.
  - Limit: Add-on and Connect apps managed via Partner Center for version uploads and validation.
- [Updating an App Version by Using ForceSync](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/appmanagement/app-management-updating-with-forcesync): Learn how to synchronize a new app version that includes breaking changes.
  - Status: ForceSync is available for side-by-side upgrades through Microsoft Lifecycle Services.
  - ForceSync applies breaking changes forcefully to the database schema, typically deleting data in objects with new schema.
  - Prerequisite: Test the ForceSync upgrade on both on-premises and online sandbox environments before production use.
  - Prerequisite: Export a BACPAC of the production environment from the Business Central admin center before upgrading with ForceSync.
  - Step: Upload a new app version using the App Management API.
  - Step: Create a new deployment in Microsoft Lifecycle Services to use the new app version.
  - Step: Issue a PATCH request using Windows PowerShell to set the syncMode property to ForceSync on the app version.
  - Step: Upgrade the environment in LCS from the old version to the new version to apply ForceSync.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
