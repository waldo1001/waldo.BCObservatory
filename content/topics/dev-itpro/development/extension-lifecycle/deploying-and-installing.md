---
id: topic/dev-itpro/development/extension-lifecycle/deploying-and-installing
type: topic
title: Deploying and installing
summary: Deploying and installing covers how to publish, synchronize, install, upgrade, unpublish and uninstall Business Central extensions, write install code, and maintain Marketplace apps and per-tenant extensions. It answers questions on extension lifecycle tasks and Marketplace offer submission.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:12.444Z"
  flags: []
generated:
  at: "2026-10-07T09:49:55.895Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 2997f5ee8c546b4d06b554e1fea7768f1a9f21c7f4bfb5193858c815bbfc264b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-offer
    title: FAQ about managing and submitting your Business Central offer
    date: "2023-12-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-unpublish-and-uninstall-extension-v2
    title: How to Unpublish and Uninstall an Extension
    date: "2022-05-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-maintain
    title: Maintain Marketplace apps and per-tenant extensions
    date: "2025-03-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-how-publish-and-install-an-extension-v2
    title: Publishing and Installing an Extension
    date: "2025-02-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-upgrade-appsource-app-in-prod
    title: Upgrading Marketplace Apps in Production
    date: "2021-08-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-install-code
    title: Writing extensions installation code
    date: "2022-02-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-offer
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-unpublish-and-uninstall-extension-v2
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-maintain
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-how-publish-and-install-an-extension-v2
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-upgrade-appsource-app-in-prod
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-install-code
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/extension-lifecycle
  localizations: []
  videos:
    - video/px1MOyXfmnQ
  posts:
    - post/demiliani-com/12116
    - post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-1170961607735589786--c4e7aa9368
  guidelines: []
learn_toc_path:
  - Development
  - Extension lifecycle
  - Deploying and installing
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/extension-lifecycle
children: []
coverage:
  learn: 6
  code: 0
  video: 1
  blog: 2
  guideline: 0
bc_forms: []
member_hash: 659e40a27cf83dd47d095cf06e5ddc91324a34d494c1df16216ce90809e92d5d
narrative: generated
---

# Deploying and installing

> Deploying and installing covers how to publish, synchronize, install, upgrade, unpublish and uninstall Business Central extensions, write install code, and maintain Marketplace apps and per-tenant extensions. It answers questions on extension lifecycle tasks and Marketplace offer submission.

Path: [Development](../../development.md) > [Extension lifecycle](../extension-lifecycle.md) > Deploying and installing · tier official · system development · narrative reviewed by Opus

## Overview

This section covers the operational lifecycle of an extension after it is built. It explains how to publish a package to a server, sync it with the tenant database, and install it, and how to write install codeunits that run on install or reinstall.

Further pages cover removal and updates. One explains the three levels of removing an extension: uninstall, unpublish and clean-mode schema removal. Others cover manually upgrading Marketplace apps in production and the partner duties for keeping apps compatible with major and minor releases.

A FAQ addresses managing and submitting Marketplace offers through Partner Center. Start with Publishing and Installing an Extension for the basic flow, then move to install code, upgrades and maintenance as needed.

## Key points

- Publishing and installing uses the publish-navapp, sync-navapp and install-navapp cmdlets, or the extension management page.
- Install code uses codeunits with OnInstallAppPerCompany and OnInstallAppPerDatabase triggers, with handling for fresh installs and reinstalls.
- Uninstall disables an extension on tenants, unpublish removes it from the server instance, and clean-mode synchronization deletes the database schema.
- Marketplace apps in production can be upgraded manually to the latest version from the Extension Management page or the Admin Center.
- Partners must keep apps updated with major and minor releases, including preview period testing and update and grace periods.
- Enforced update periods and incompatibility notifications apply, and apps can be removed automatically if not updated.
- The Marketplace offer FAQ covers the Partner Center submission process, Go Live, review and publish, and technical validation.

## Learn pages

- [FAQ about managing and submitting your Business Central offer](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-offer): Get answers to some of your questions about managing an offer in Partner Center when you build an app for Dynamics 365 Business Central
- [How to Unpublish and Uninstall an Extension](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-unpublish-and-uninstall-extension-v2): Description of the process of upublishing and uninstalling an extension
- [Maintain Marketplace apps and per-tenant extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-maintain): Learn about resources available to you as the publisher of an app or per-tenant extension for keeping your code in compliance with the base product.
- [Publishing and Installing an Extension](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-how-publish-and-install-an-extension-v2): Description of the process of publishing and installing an extension.
- [Upgrading Marketplace Apps in Production](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-upgrade-appsource-app-in-prod): Describes how to upgrade apps available on Marketplace that are already in running in production.
- [Writing extensions installation code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-install-code): Describes how to add code to run to initialize data when an extension is installed.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Dynamics 365 Business Central: automatic PTE unpublishing after update.](../../../../posts/demiliani-com/12116.md) (community post): "Old PTE versions are now automatically unpublished in SaaS"
- [Managing Apps in the Business Central Admin Center](../../../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-1170961607735589786--c4e7aa9368.md) (community post): "Per-tenant extension deployment has moved to the admin center"
- [What's New: AL-Go for GitHub on Delivery and Deployment (2025 release wave 1)](../../../../videos/px1MOyXfmnQ.md) (video): "Dependency Install Mode; Test Apps Deployment; Pull Request Artifact Deployment"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
