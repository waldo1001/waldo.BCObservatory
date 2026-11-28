---
id: topic/dev-itpro/development/extension-lifecycle/deploying-and-installing
type: topic
title: Deploying and installing
summary: Deploying and installing covers how Business Central extensions are published, installed, upgraded, unpublished and uninstalled, and how Marketplace offers are managed in Partner Center. It answers questions about the cmdlet workflow, install code, keeping apps compatible with releases, and offer validation.
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-28T01:08:05.989Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 7afcae1a838ccafccf59a812dfb7293d3e7b8b4df4c367112ce060461dd44d28
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
    date: "2026-10-23"
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
    - video/JKsLjwSh0SQ
  posts:
    - post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-1170961607735589786--c4e7aa9368
    - post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-85-schedule-pte-extension-updates--b3aee1ab46
    - post/thinkaboutit-be/8313
    - post/yzhums-com/65533
    - post/yzhums-com/74541
    - post/yzhums-com/76570
  guidelines: []
  changes:
    - change/al-go/2376
    - change/bcapps/11065
    - change/bcapps/12626
    - change/bcapps/13558
    - change/bcapps/14619
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
  blog: 6
  guideline: 0
bc_forms: []
member_hash: 659e40a27cf83dd47d095cf06e5ddc91324a34d494c1df16216ce90809e92d5d
narrative: generated
---

# Deploying and installing

> Deploying and installing covers how Business Central extensions are published, installed, upgraded, unpublished and uninstalled, and how Marketplace offers are managed in Partner Center. It answers questions about the cmdlet workflow, install code, keeping apps compatible with releases, and offer validation.

Path: [Development](../../development.md) > [Extension lifecycle](../extension-lifecycle.md) > Deploying and installing · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the lifecycle steps that follow building an extension. It explains how to publish a package to a server, synchronize it with the tenant database, and install it. It also covers how to remove an extension again and how to upgrade apps that are already in production.

The pages fit together in the order of an app's life. Start with "Publishing and Installing an Extension" for the basic cmdlet flow, then "Writing extensions installation code" for logic that runs on install or reinstall. "Upgrading Marketplace Apps in Production" and "Maintain Marketplace apps and per-tenant extensions" cover updates and release compatibility. "How to Unpublish and Uninstall an Extension" covers removal. The FAQ on managing and submitting your offer addresses the Partner Center side for publishers.

## Key points

- Publishing and installing uses the publish-navapp, sync-navapp and install-navapp cmdlets, and extensions can also be managed on the Extension Management page.
- Install code is written in install codeunits with the OnInstallAppPerCompany and OnInstallAppPerDatabase triggers. It can detect a fresh install versus a reinstall.
- Removal has three levels: uninstall disables the extension on tenants, unpublish removes it from the server instance, and clean-mode synchronization deletes the database schema and orphaned data.
- Marketplace apps in production can be upgraded manually through the Extension Management page or the Admin Center.
- Publishers and resellers must keep Marketplace apps and per-tenant extensions updated for major and minor releases. Preview versions are available for testing, and there are enforcement periods.
- Maintenance guidance mentions automated extension validation, the AppSourceCop analyzer and detection of technical incompatibility.
- The offer FAQ covers Partner Center topics: the Go Live and Review and publish buttons, the validation queue, technical validation and marketing changes.

## Learn pages

- [FAQ about managing and submitting your Business Central offer](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-offer): Get answers to some of your questions about managing an offer in Partner Center when you build an app for Dynamics 365 Business Central
- [How to Unpublish and Uninstall an Extension](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-unpublish-and-uninstall-extension-v2): Description of the process of upublishing and uninstalling an extension
- [Maintain Marketplace apps and per-tenant extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-maintain): Learn about resources available to you as the publisher of an app or per-tenant extension for keeping your code in compliance with the base product.
- [Publishing and Installing an Extension](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-how-publish-and-install-an-extension-v2): Description of the process of publishing and installing an extension.
- [Upgrading Marketplace Apps in Production](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-upgrade-appsource-app-in-prod): Describes how to upgrade apps available on Marketplace that are already in running in production.
- [Writing extensions installation code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-install-code): Describes how to add code to run to initialize data when an extension is installed.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#2376 fix: modified files with umlauts](../../../../changes/al-go/2376.md) (code change): "Incremental build detection now finds project and app paths that contain umlauts"
- [#11065 Open installation status after AppSource install failure](../../../../changes/bcapps/11065.md) (code change): "Failed AppSource installations now display a prompt to open installation status"
- [#12626 Fix AppSource product details opening in write transactions](../../../../changes/bcapps/12626.md) (code change): "Changed from Page.RunModal() to Page.Run() to avoid write transaction conflicts"
- [#13558 Add logging table management during installation and upgrade processes](../../../../changes/bcapps/13558.md) (code change): "Add logging table management during installation and upgrade processes"
- [#14619 [Fabric] Fix installation with an existing upgrade tag](../../../../changes/bcapps/14619.md) (code change): "Fabric installation now guards the database upgrade tag insert to prevent duplicate-key errors"
- [Managing Apps in the Business Central Admin Center](../../../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-1170961607735589786--c4e7aa9368.md) (community post): "Installing a PTE means choosing a deployment schedule and a sync mode"
- [BC Friday Tips #85 Schedule PTE Extension Updates from the Admin Centre](../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-85-schedule-pte-extension-updates--b3aee1ab46.md) (community post): "Business Central automatically deploys extensions during the scheduled window"
- [Business Central 29: Manage Per-Tenant Extensions from the Admin Center](../../../../posts/thinkaboutit-be/8313.md) (community post): "Admin Center APIs expose PTE deployment operations, enabling automation"
- [Dynamics 365 Business Central: Automatically enable Allow HttpClient Requests after custom extension/app installation](../../../../posts/yzhums-com/65533.md) (community post): "automatically enable the Allow HttpClient Requests setting for custom extensions during installation"
- [Dynamics 365 Business Central: Upload, install, and manage PTEs in the admin center (Remove ability to upload and install PTEs from Extension Management page)](../../../../posts/yzhums-com/74541.md) (community post): "admins can upload, install, schedule and uninstall per-tenant extensions in the Admin Center"
- [Business Central 2026 release wave 2 (BC29): Retained DEV extensions (DEV extensions remain installed during environment update)](../../../../posts/yzhums-com/76570.md) (community post): "DEV extensions published from VS Code are no longer uninstalled"
- [What's New in AL: Dependency Publishing (2024 release wave 2)](../../../../videos/JKsLjwSh0SQ.md) (video): "Dependency Publishing Options - Default"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
