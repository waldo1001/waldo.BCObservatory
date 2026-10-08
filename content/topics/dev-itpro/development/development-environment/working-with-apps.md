---
id: topic/dev-itpro/development/development-environment/working-with-apps
type: topic
title: Working with apps
summary: "Working with apps covers how to configure and package Business Central extensions in AL: app identity in app.json, runtime version choice, bundled resources, data added at install, and library and dependency apps. It answers setup and manifest questions for extension developers."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:53.954Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d7b051a31bf217e846cc14d1e771d6571e5ebacba5e0e374edf965cccd04ae18
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-identity
    title: App identity
    date: "2024-05-03"
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-resources
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-export-data-for-extension
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-identity
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-choosing-runtime
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-dependencies-libraries
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

> Working with apps covers how to configure and package Business Central extensions in AL: app identity in app.json, runtime version choice, bundled resources, data added at install, and library and dependency apps. It answers setup and manifest questions for extension developers.

Path: [Development](../../development.md) > [Development environment](../development-environment.md) > Working with apps · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section is about the app-level settings and contents of a Business Central extension, mostly driven by the app.json manifest. It covers who the app is (ID, name, publisher, version, scope), which runtime version it targets, and what it carries with it (resources and data).

Start with App identity and Choose runtime version in AL, since they define the manifest basics. Then use Adding and Accessing Resources and Adding data for Extensions when the app needs to ship files or install-time data. The FAQ on library and dependency apps explains shared code across Marketplace apps and how dependencies get installed.

## Key points

- App identity describes the app.json fields for app ID (GUID), version, name, publisher and scope (Global/Tenant), and when it is acceptable to change them.
- The runtime version is set in app.json (for example "runtime": "18.0"); an extension can be published to servers with an equal or later runtime version.
- Resources are packaged with resourceFolders and publicResourceFolders in app.json; private resources are used locally, public ones can be read by other extensions.
- Resource limits are 16 MB per file, 128 MB per folder and 256 files; resources require runtime version 18.0.
- Extensions can include permission sets, web services, table data and custom report layouts to be imported during installation.
- The NavApp.LoadPackageData procedure is part of loading packaged table data.
- Library apps hold shared code for multiple Marketplace apps and are installed automatically as dependencies.
- The FAQ also touches on version control and technical validation of library apps.

## Learn pages

- [Adding and Accessing Resources in Business Central extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-resources): Describes how to package, share, and access resources, such as sample data, images, and schemas, across Business Central extensions.
- [Adding data for Extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-export-data-for-extension): How you can add data such as permisisons, web services, and table data for an extension.
- [App identity](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-identity): Describes what makes up the app identity of an app for Business Central.
- [Choose runtime version in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-choosing-runtime): How to choose runtime in AL for Business Central.
- [FAQ about Library & Dependency Apps in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-dependencies-libraries): Get answers to some of your questions about library apps and dependency apps in Dynamics 365 Business Central

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
