---
id: topic/dev-itpro/get-started/develop/embed-apps/deployment
type: topic
title: Deployment
summary: "Deployment of Business Central embed apps: how to build deployment packages (BACPACs, branding, manifest.json, database requirements) and how ISV partners use Lifecycle Services (LCS) to upload, deploy to rings, and onboard customers. Answers questions about package structure and the LCS deployment workflow."
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
  input_hash: 08159e7a567a46474025376a53d936da722c6afe04247eb3fbbbdf8bc5060495
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/embedapps/embed-app-deployment-package
    title: Embed app deployment packages
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/embedapps/embed-app-deployment-package
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/embed-app-lifecycle-services
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
  - Deployment
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
member_hash: 4a2d340d4c0dccdfb36c70a5f6b83165e2d17ae2c805ac0e8a149b89bc009b24
narrative: generated
---

# Deployment

> Deployment of Business Central embed apps: how to build deployment packages (BACPACs, branding, manifest.json, database requirements) and how ISV partners use Lifecycle Services (LCS) to upload, deploy to rings, and onboard customers. Answers questions about package structure and the LCS deployment workflow.

Path: [Get started](../../../get-started.md) > [Develop](../../develop.md) > [Embed apps](../embed-apps.md) > Deployment · tier official · system none · **unreviewed** (machine-generated narrative)

## Overview

This section covers the two steps of getting an embed app to customers. First, you build a deployment package. Second, you use the Lifecycle Services (LCS) portal to deploy it and onboard customers.

The package page explains the structure of the package: the database BACPACs, branding elements, and the manifest.json configuration. It also gives requirements for the application database and the tenant template database. The LCS page describes the ISV partner workflow in the portal: creating a project, uploading the package, deploying to rings, monitoring logs, and provisioning tenants.

Start with the deployment package page, since the LCS steps depend on a valid package. Then move to the LCS page for deployment and for customer onboarding through self-service sign-up or the CSP program.

## Key points

- Deployment packages include database BACPACs, branding elements, and a manifest.json.
- Separate requirements apply to the application database and the tenant template database.
- ISV partners manage embed app deployment in the LCS portal.
- LCS workflow: create a project, upload the deployment package, deploy to rings, and monitor logs.
- Tenant provisioning is handled through LCS.
- Customers can be onboarded through self-service sign-up or CSP channels.

## Learn pages

- [Embed app deployment packages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/embedapps/embed-app-deployment-package): Learn about how to deploy a Business Central Embed app to the Online service
- [Lifecycle Services for Embed App](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/embed-app-lifecycle-services): Provides an overview of Lifecycle Services for Embed App in Business Central

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
