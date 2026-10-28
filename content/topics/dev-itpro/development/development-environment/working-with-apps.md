---
id: topic/dev-itpro/development/development-environment/working-with-apps
type: topic
title: Working with apps
summary: "Working with apps covers how to build and manage AL apps (extensions) in Business Central: app identity in app.json, runtime version choice, packaging resources and data, and library and dependency apps. It answers questions about app.json settings and extension packaging."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:23.369Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 531f03897284d9df710ef5df4e09f0b0b4c4320d1dd5b5e3fc498b0bf73384dd
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-resources
    title: Adding and Accessing Resources in Business Central extensions
    date: "2026-08-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-export-data-for-extension
    title: Adding data for Extensions
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-choosing-runtime
    title: Choose an AL Runtime Version for Business Central
    date: "2026-10-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-dependencies-libraries
    title: FAQ about Library & Dependency Apps in Business Central
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-identity
    title: Understand App Identity for AL Apps
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-resources
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-export-data-for-extension
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-choosing-runtime
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-dependencies-libraries
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-identity
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/development-environment
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Development environment
  - Working with apps
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/development-environment
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 80a2552c73aca59778fdb9e568092650f5d14f09ce0e7c5bb5b34b4b7e198dca
narrative: generated
---

# Working with apps

> Working with apps covers how to build and manage AL apps (extensions) in Business Central: app identity in app.json, runtime version choice, packaging resources and data, and library and dependency apps. It answers questions about app.json settings and extension packaging.

Path: [Development](../../development.md) > [Development environment](../development-environment.md) > Working with apps · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section collects practical topics for developers handling the app package itself rather than its AL code. Most of them center on the app.json manifest: which identity values it holds, which runtime version it targets, and which resource folders it declares.

Start with the app identity page to learn when the app ID, version, name, and publisher can change. Then read the runtime version page to pick a version that every target environment supports, including Business Central online. After that, use the resources page and the extension data page to bundle files and data with the app. The FAQ on library and dependency apps explains shared code across Marketplace apps and how dependencies get installed.

## Key points

- App identity is managed in app.json: app ID, version, name, publisher, and scope, with guidance on when each can change.
- The AL runtime version is set in app.json and determines available AL capabilities. Pick one supported by all target environments, including Business Central online.
- The runtime version page covers compiler defaults, version history, and IntelliSense support, with release waves from 2024 wave 2 to 2026 wave 2.
- resourceFolders packages private resources for local access. publicResourceFolders exposes resources that other extensions can read (runtime version 18.0).
- Resource limits are 16 MB per file, 128 MB per folder, and 256 files.
- Extensions can include permission sets, web services, table data, and custom report layouts, imported at install and loaded with NavApp.LoadPackageData.
- Library apps hold shared code for multiple Marketplace apps and are installed automatically as dependencies. The FAQ covers version control and technical validation.

## Learn pages

- [Adding and Accessing Resources in Business Central extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-resources): Describes how to package, share, and access resources, such as sample data, images, and schemas, across Business Central extensions.
- [Adding data for Extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-export-data-for-extension): How you can add data such as permisisons, web services, and table data for an extension.
- [Choose an AL Runtime Version for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-choosing-runtime): Choose an AL runtime version for Business Central extensions. Check compiler defaults, server compatibility, and runtime-to-product version mappings.
- [FAQ about Library & Dependency Apps in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-dependencies-libraries): Get answers to some of your questions about library apps and dependency apps in Dynamics 365 Business Central
- [Understand App Identity for AL Apps](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-identity): Learn how app IDs, versions, names, publishers, and tenant scopes identify AL apps and affect upgrades, dependencies, and data continuity.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
