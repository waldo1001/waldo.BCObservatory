---
id: topic/dev-itpro/development/development-environment/working-with-apps
type: topic
title: Working with apps
summary: Working with apps covers how AL extensions are identified, configured, and packaged in Business Central. It answers questions about app.json settings (app ID, version, runtime version), bundling resources and data, and library and dependency apps.
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-10T00:57:46.434Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 67d18f27e480e6ec87b020ae868fa1243346ee2acf22a95dd220188fcdf0d13e
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

> Working with apps covers how AL extensions are identified, configured, and packaged in Business Central. It answers questions about app.json settings (app ID, version, runtime version), bundling resources and data, and library and dependency apps.

Path: [Development](../../development.md) > [Development environment](../development-environment.md) > Working with apps · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section collects practical topics for developers who build and maintain AL apps. It centers on the app.json manifest: it defines the app's identity (ID, version, name, publisher, scope) and the AL runtime version, which decides what AL capabilities are available and must be supported by every target environment, including Business Central online.

Other pages cover what an extension can carry besides code. Resources can be packaged through resourceFolders and exposed to other extensions through publicResourceFolders. Data such as permission sets, web services, table data, and custom report layouts can be added so it is imported when the extension is installed. A FAQ explains library and dependency apps, which let several marketplace apps share common code.

Start with the app identity page to understand what app.json fields mean and when they may change. Then read the runtime version page before choosing a target. Use the resources, data, and library FAQ pages as needed for specific packaging or dependency tasks.

## Key points

- App identity is managed in app.json: app ID, version numbering, name, publisher, and scope, with guidance on when each may be changed.
- The AL runtime version is set in app.json and determines AL capabilities. Pick one supported by all target environments, including Business Central online.
- The runtime version page lists history across release waves (2024 wave 2 through 2026 wave 2) and notes AL compiler defaults and IntelliSense support.
- Resources are packaged with resourceFolders and shared with other extensions through publicResourceFolders (runtime version 18.0).
- Resource limits: 16 MB per file, 128 MB per folder, and 256 files.
- Extensions can add permission sets, web services, table data, and custom report layouts to import at install time, using the NavApp.LoadPackageData procedure for table data.
- Library and dependency apps let multiple marketplace apps share code. Installation is automatic, based on manifest dependencies and dependency chain resolution.
- Library apps have versioning and technical validation considerations covered in the FAQ.

## Learn pages

- [Adding and Accessing Resources in Business Central extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-resources): Describes how to package, share, and access resources, such as sample data, images, and schemas, across Business Central extensions.
- [Adding data for Extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-export-data-for-extension): How you can add data such as permisisons, web services, and table data for an extension.
- [Choose an AL Runtime Version for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-choosing-runtime): Choose an AL runtime version for Business Central extensions. Check compiler defaults, server compatibility, and runtime-to-product version mappings.
- [FAQ about Library & Dependency Apps in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-dependencies-libraries): Get answers to some of your questions about library apps and dependency apps in Dynamics 365 Business Central
- [Understand App Identity for AL Apps](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-identity): Learn how app IDs, versions, names, publishers, and tenant scopes identify AL apps and affect upgrades, dependencies, and data continuity.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
