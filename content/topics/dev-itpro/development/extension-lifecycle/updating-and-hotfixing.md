---
id: topic/dev-itpro/development/extension-lifecycle/updating-and-hotfixing
type: topic
title: Updating and hotfixing
summary: Updating and hotfixing covers how Business Central apps and extensions are updated, hotfixed and upgraded over their lifecycle. It answers questions about Marketplace app updates, version numbering, validation, hotfix rules, upgrade code and partner responsibilities.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-30T08:08:51.761Z"
  flags: []
generated:
  at: "2026-10-30T08:09:06.421Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0e522baeb511689e77619cb9aeacdd27323fb574f2bdb2e98e489e8bb0be7d3c
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
    title: Lifecycle of Apps and Extensions
    date: "2026-10-08"
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
  posts:
    - post/yzhums-com/67809
  guidelines: []
  changes:
    - change/bcquality/210
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
  blog: 1
  guideline: 0
bc_forms: []
member_hash: f3e7286da03b9ac244c0a2da0047e0e967fb5517a08c592a5e38bde95aa4b2a9
narrative: generated
---

# Updating and hotfixing

> Updating and hotfixing covers how Business Central apps and extensions are updated, hotfixed and upgraded over their lifecycle. It answers questions about Marketplace app updates, version numbering, validation, hotfix rules, upgrade code and partner responsibilities.

Path: [Development](../../development.md) > [Extension lifecycle](../extension-lifecycle.md) > Updating and hotfixing · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section explains what happens to apps and extensions after the first release. It covers how they behave through Business Central service updates, app updates, bug fixes and breaking changes, and what partners must do to maintain them. Microsoft's compatibility testing process is also described.

Two FAQ pages cover the practical side of submitting updates to the Marketplace: version numbering, Partner Center submission, validation, update cadence, force update, per-tenant extensions and code signing. A separate page covers hotfixing Marketplace apps, including validation of submissions that do not target the latest version and breaking change detection.

For the technical side, the Upgrading Extensions page describes writing upgrade code with triggers and controlling when it runs. Start with Lifecycle of Apps and Extensions for the overall picture. Then use the FAQs for submission questions, the hotfix page for patching older versions, and Upgrading Extensions when writing upgrade code.

## Key points

- Lifecycle of Apps and Extensions explains behavior through service updates, app updates, bug fixes, critical bugs and breaking changes, plus extension data retention.
- The FAQ pages cover app version numbering, Partner Center submission, the validation process, update cadence and automatic app updates.
- The FAQs also cover force update, per-tenant extensions, code signing, upgrade testing and library app dependencies.
- Hotfixing a Marketplace app covers validation for non-latest version submissions, with examples of validation release ranges and restrictions.
- Hotfix validation includes breaking change detection with AppSourceCop, obsolete pending handling and public API restrictions.
- Upgrading Extensions describes upgrade triggers (OnCheckPreconditions, OnUpgrade, OnValidate) and data upgrade or migration.
- Upgrade code execution can be controlled with version data or upgrade tags. The Upgrading Extensions page references 2021 release wave 1.
- The FAQs include best practices for avoiding submission delays.

## Learn pages

- [FAQ about Updating your Business Central App](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-update): Get answers to some of your questions about updating your app for Dynamics 365 Business Central
- [Hotfix a Marketplace app](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-hotfixing-appsource-app): Learn how to hotfix a Marketplace app in Dynamics 365 Business Central.
- [Lifecycle of Apps and Extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-life-cycle): Learn how Marketplace apps behave during service and app updates, how administrators install updates, and how extension data is retained.
- [Lifecycle of apps and extensions FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-update-app-life-cycle-faq): Overview of the frequently asked questions about updating an app on Marketplace.
  - In the observatory: [Page 2500 "Extension Management"](../../../../objects/page/2500.md)
- [Update Lifecycle for Tenant Customizations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-customization-update-lifecycle): Overview of the process of ensuring extension compatibility with update versions
- [Upgrading Extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-upgrading-extensions): Describes how to add code to upgrade data in a new extension version.
  - In the observatory: [Codeunit 9999 "Upgrade Tag"](../../../../objects/codeunit/9999.md), [Table 9999 "Upgrade Tags"](../../../../objects/table/9999.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#210 knowledge(upgrade): upgrade code must not use ChangeCompany](../../../../changes/bcquality/210.md) (code change): "upgrade code must not use ChangeCompany. New quality rule and knowledge article prevent upgrade code from using ChangeCompany"
- [Business Central 2025 wave 2 (BC27): UpdateAuditFields Method on DataTransfer is now in Cloud scope](../../../../posts/yzhums-com/67809.md) (community post): "UpdateAuditFields method on DataTransfer was previously OnPrem-only, now available in Cloud scope"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
