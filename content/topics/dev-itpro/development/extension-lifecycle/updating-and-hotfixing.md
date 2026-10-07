---
id: topic/dev-itpro/development/extension-lifecycle/updating-and-hotfixing
type: topic
title: Updating and hotfixing
summary: Updating and hotfixing covers how Business Central apps and extensions are updated, upgraded and hotfixed over their lifecycle. It answers questions on submitting app updates, version numbering, upgrade code, hotfixing Marketplace apps, and how service updates and breaking changes affect extensions.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:15.671Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: bb8db4d428ccd0358cce23792272e028cec507d2b8ba4ae9267c6ebf05ab1b59
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-update
    title: FAQ about Updating your Business Central App
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-hotfixing-appsource-app
    title: Hotfix a Marketplace app
    date: "2023-11-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-life-cycle
    title: Lifecycle of apps and extensions
    date: "2025-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-update-app-life-cycle-faq
    title: Lifecycle of apps and extensions FAQ
    date: "2021-08-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-customization-update-lifecycle
    title: Update Lifecycle for Tenant Customizations
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-upgrading-extensions
    title: Upgrading Extensions
    date: "2021-09-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-update
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-hotfixing-appsource-app
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-life-cycle
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-update-app-life-cycle-faq
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-customization-update-lifecycle
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-upgrading-extensions
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/extension-lifecycle
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Extension lifecycle
  - Updating and hotfixing
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/extension-lifecycle
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: f3e7286da03b9ac244c0a2da0047e0e967fb5517a08c592a5e38bde95aa4b2a9
narrative: generated
---

# Updating and hotfixing

> Updating and hotfixing covers how Business Central apps and extensions are updated, upgraded and hotfixed over their lifecycle. It answers questions on submitting app updates, version numbering, upgrade code, hotfixing Marketplace apps, and how service updates and breaking changes affect extensions.

Path: [Development](../../development.md) > [Extension lifecycle](../extension-lifecycle.md) > Updating and hotfixing · tier official · system development · narrative reviewed by Opus

## Overview

This section describes what happens to an app after its first release. It explains how apps interact with Business Central service updates, how new app versions are submitted and installed, and how bugs and breaking changes are handled, including Microsoft's rollback procedures and data retention policies.

The pages fit together in layers. The lifecycle page and its FAQ give the big picture: five scenarios (service updates, app updates, bug fixes, critical bugs, breaking changes), force updates during major releases, and recommendations on update frequency and quality assurance. The FAQ about updating your app covers the practical submission questions: version numbering, keeping app identity, compatibility settings, and automatic updates. The upgrade page covers writing the upgrade code itself. The Marketplace hotfix page covers submissions for versions that are not the latest.

Start with "Lifecycle of apps and extensions" for the overall model. Then read "Upgrading Extensions" if you write upgrade code, or "Hotfix a Marketplace app" if you must patch an older published version.

## Key points

- Five lifecycle scenarios are described: service updates, app updates, bug fixes, critical bugs, and breaking changes.
- Microsoft's rollback procedures and data retention policies are covered in the lifecycle page.
- Upgrade code uses the triggers OnCheckPreconditions, OnUpgrade and OnValidate, and data migration can be run as part of the upgrade.
- Upgrade execution can be controlled with version data or upgrade tags (the upgrade page lists 2021 release wave 1).
- The FAQ covers version numbering, preserving app identity, compatibility configuration, and automatic updates managed in the admin center.
- Hotfixing a Marketplace app targets a non-latest version and triggers validation with breaking change detection using AppSourceCop.
- Hotfix validation includes release ranges and restrictions such as obsolete pending and public API restrictions.
- The lifecycle FAQ addresses force updates during major releases, Extension Management, code signing, and technical validation.

## Learn pages

- [FAQ about Updating your Business Central App](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-update): Get answers to some of your questions about updating your app for Dynamics 365 Business Central
- [Hotfix a Marketplace app](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-hotfixing-appsource-app): Learn how to hotfix a Marketplace app in Dynamics 365 Business Central.
- [Lifecycle of apps and extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-life-cycle): Overview of the process of updating an app for Business Central.
- [Lifecycle of apps and extensions FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-update-app-life-cycle-faq): Overview of the frequently asked questions about updating an app on Marketplace.
- [Update Lifecycle for Tenant Customizations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-customization-update-lifecycle): Overview of the process of ensuring extension compatibility with update versions
- [Upgrading Extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-upgrading-extensions): Describes how to add code to upgrade data in a new extension version.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
