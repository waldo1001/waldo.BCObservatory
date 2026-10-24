---
id: topic/dev-itpro/development/development-environment/working-with-apps
type: topic
title: Working with apps
summary: "Working with apps covers how to build and manage AL extensions in Business Central: app identity in app.json, runtime version choice, packaged resources, data shipped with extensions, and library and dependency apps. It answers setup and configuration questions about app.json and extension packaging."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:56:19.921Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 1f1337b7147c35e1c454d6ab47186009542abca5da75c5082bf0f7dbe7784d38
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
    title: Choose runtime version in AL
    date: "2026-08-20"
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

> Working with apps covers how to build and manage AL extensions in Business Central: app identity in app.json, runtime version choice, packaged resources, data shipped with extensions, and library and dependency apps. It answers setup and configuration questions about app.json and extension packaging.

Path: [Development](../../development.md) > [Development environment](../development-environment.md) > Working with apps · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section collects practical topics for developers handling the structure and metadata of an AL app. Most of them center on the app.json manifest: the app ID, version, name, publisher and scope, the runtime version, and the resource folders.

Start with "Understand App Identity for AL Apps" to learn when and how identity settings may change. Then read "Choose runtime version in AL" to target a runtime. Two pages cover content packaged with an extension: "Adding and Accessing Resources" explains resource folders and access, and "Adding data for Extensions" explains data imported on installation. The FAQ on library and dependency apps covers shared code across Marketplace apps and how dependencies are installed.

## Key points

- App identity is managed in app.json: app ID, version numbering, name, publisher and scope, with guidance on when each can change.
- The runtime version is set in app.json (for example "runtime": "18.0"); an extension can be published to servers with an equal or later runtime version.
- Resources are packaged with resourceFolders and publicResourceFolders in app.json (runtime version 18.0); public resources can be read by other extensions.
- Resource limits are 16 MB per file, 128 MB per folder and 256 files.
- Extensions can ship exported permission sets, web services, table data and custom report layouts to be imported during installation; the page also covers the NavApp.LoadPackageData procedure.
- Library apps hold shared code for multiple Marketplace apps and are installed automatically as dependencies.
- The library app FAQ covers version control, library app validation and technical validation.

## Learn pages

- [Adding and Accessing Resources in Business Central extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-resources): Describes how to package, share, and access resources, such as sample data, images, and schemas, across Business Central extensions.
- [Adding data for Extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-export-data-for-extension): How you can add data such as permisisons, web services, and table data for an extension.
- [Choose runtime version in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-choosing-runtime): How to choose runtime in AL for Business Central.
- [FAQ about Library & Dependency Apps in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-dependencies-libraries): Get answers to some of your questions about library apps and dependency apps in Dynamics 365 Business Central
- [Understand App Identity for AL Apps](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-identity): Learn how app IDs, versions, names, publishers, and tenant scopes identify AL apps and affect upgrades, dependencies, and data continuity.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
