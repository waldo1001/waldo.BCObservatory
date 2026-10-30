---
id: topic/dev-itpro/development/extension-lifecycle/deploying-and-installing
type: topic
title: Deploying and installing
summary: Deploying and installing covers how to publish, synchronize, install, upgrade, unpublish and uninstall Business Central extensions, plus writing install code and maintaining Marketplace apps and per-tenant extensions. It answers lifecycle and Marketplace offer submission questions.
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-30T01:11:59.976Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 10a64106af2dd85b9199412498116b2c5f36d68af9e5040d90398249c555b1ff
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
    - post/aardvarklabs-blog/3998
    - post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-1170961607735589786--c4e7aa9368
    - post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-85-schedule-pte-extension-updates--b3aee1ab46
    - post/thinkaboutit-be/8313
    - post/yzhums-com/74541
    - post/yzhums-com/76570
  guidelines: []
  changes:
    - change/al-go/2376
    - change/bcapps/11065
    - change/bcapps/12626
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

> Deploying and installing covers how to publish, synchronize, install, upgrade, unpublish and uninstall Business Central extensions, plus writing install code and maintaining Marketplace apps and per-tenant extensions. It answers lifecycle and Marketplace offer submission questions.

Path: [Development](../../development.md) > [Extension lifecycle](../extension-lifecycle.md) > Deploying and installing · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the operational lifecycle of an extension after it is built. It explains how to publish an extension package to a server, synchronize it with the tenant database and install it, and how to write install code that runs on first install or reinstall.

Later lifecycle steps have their own pages: upgrading Marketplace apps manually in production, removing extensions at three different levels (uninstall, unpublish, schema removal), and keeping apps and per-tenant extensions compatible with Business Central release cycles. A FAQ covers managing and submitting Marketplace offers through Partner Center.

Start with Publishing and Installing an Extension for the basic flow, then Writing extensions installation code if you need setup logic. Use the maintenance and upgrade pages for production operations, and the FAQ for offer submission and validation questions.

## Key points

- Publishing and installing uses the publish-navapp, sync-navapp and install-navapp cmdlets, or the Extension Management page.
- Install code is written in install codeunits with OnInstallAppPerCompany and OnInstallAppPerDatabase triggers, and can detect fresh installs versus reinstalls.
- Removal has three levels: uninstall disables the extension on tenants, unpublish removes it from the server instance, and clean-mode synchronization deletes the database schema.
- Marketplace apps in production can be upgraded manually through the Extension Management page or the Admin Center.
- Partners must keep Marketplace apps and per-tenant extensions compatible with major releases, with defined update, grace and enforced update periods.
- Maintenance support includes preview environments, prerelease bits, AppSourceCop analyzer rules and automated extension validation.
- The offer FAQ covers the Partner Center submission process, Go Live, Review and publish, validation queuing and technical validation.

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
- [Mastering Business Central API for App Management](../../../../posts/aardvarklabs-blog/3998.md) (community post): "Install a .app through the pteInstall endpoint with a multipart form request carrying the file"
- [Managing Apps in the Business Central Admin Center](../../../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-1170961607735589786--c4e7aa9368.md) (community post): "Installing a PTE means choosing a deployment schedule and a sync mode"
- [BC Friday Tips #85 Schedule PTE Extension Updates from the Admin Centre](../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-85-schedule-pte-extension-updates--b3aee1ab46.md) (community post): "Business Central automatically deploys extensions during the scheduled window"
- [Business Central 29: Manage Per-Tenant Extensions from the Admin Center](../../../../posts/thinkaboutit-be/8313.md) (community post): "PTEs can now be deployed through the Admin Center with scheduling options"
- [Dynamics 365 Business Central: Upload, install, and manage PTEs in the admin center (Remove ability to upload and install PTEs from Extension Management page)](../../../../posts/yzhums-com/74541.md) (community post): "admins can upload, install, schedule and uninstall per-tenant extensions in the Admin Center"
- [Business Central 2026 release wave 2 (BC29): Retained DEV extensions (DEV extensions remain installed during environment update)](../../../../posts/yzhums-com/76570.md) (community post): "DEV extensions published from VS Code are no longer uninstalled"
- [What's New in AL: Dependency Publishing (2024 release wave 2)](../../../../videos/JKsLjwSh0SQ.md) (video): "Dependency Publishing Options - Default"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
