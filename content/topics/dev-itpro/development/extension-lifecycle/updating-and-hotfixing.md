---
id: topic/dev-itpro/development/extension-lifecycle/updating-and-hotfixing
type: topic
title: Updating and hotfixing
summary: "Updating and hotfixing covers how Business Central apps and extensions are maintained after release: lifecycle behavior through service updates, writing upgrade code, submitting updated or hotfixed Marketplace apps, and validation rules. It answers questions on versioning, upgrade triggers and tags, breaking changes, and submission FAQs."
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-11T00:59:22.225Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 7300eb9602601083f458a3c8a59e0a6e2268441e1e719bd19150d319b11672ec
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-update
    title: FAQ About Updating Your Business Central App
    date: "2026-11-09"
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
    date: "2026-11-05"
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

> Updating and hotfixing covers how Business Central apps and extensions are maintained after release: lifecycle behavior through service updates, writing upgrade code, submitting updated or hotfixed Marketplace apps, and validation rules. It answers questions on versioning, upgrade triggers and tags, breaking changes, and submission FAQs.

Path: [Development](../../development.md) > [Extension lifecycle](../extension-lifecycle.md) > Updating and hotfixing · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains what happens to an app or extension over time and what a partner must do to keep it working. The lifecycle page describes how apps behave through Business Central service updates, app updates, bug fixes, critical bugs and breaking changes, including partner responsibilities and Microsoft's compatibility testing.

For the technical side, the Upgrading Extensions page covers writing upgrade code with the OnCheckPreconditions, OnUpgrade and OnValidate triggers, controlling execution with version data or upgrade tags, and running data migration. The hotfix page covers validation of submissions that target a version other than the latest, including breaking change detection.

Two FAQ pages cover submitting and publishing updated Marketplace apps: validation, versioning, availability, dependencies, and how to avoid submission delays. Start with the lifecycle page for the overall picture, then go to upgrading or hotfixing depending on the task.

## Key points

- Lifecycle page explains app behavior through service updates, app updates, bug fixes, critical bugs and breaking changes, plus extension data retention.
- Upgrade code uses the OnCheckPreconditions, OnUpgrade and OnValidate triggers.
- Upgrade execution can be controlled with version data or upgrade tags; data migration is part of the process.
- Hotfixing a Marketplace app applies to submissions that are not the latest version and involves validation release ranges.
- Hotfix validation includes breaking change detection with AppSourceCop, obsolete pending handling and public API restrictions.
- FAQs cover technical validation, preview installation, app identity, dependency versioning and update cadence.
- FAQs also mention force update, per-tenant extensions, code signing and upgrade testing.
- The Upgrading Extensions page is tagged with 2021 release wave 1.

## Learn pages

- [FAQ About Updating Your Business Central App](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-update): Find answers about updating Business Central apps, including validation, version compatibility, environment updates, dependencies, and critical hotfixes.
- [Hotfix a Marketplace app](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-hotfixing-appsource-app): Learn how to hotfix a Marketplace app in Dynamics 365 Business Central.
- [Lifecycle of Apps and Extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-life-cycle): Learn how Marketplace apps behave during service and app updates, how administrators install updates, and how extension data is retained.
- [Lifecycle of apps and extensions FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-update-app-life-cycle-faq): Overview of the frequently asked questions about updating an app on Marketplace.
  - In the observatory: [Page 2500 "Extension Management"](../../../../objects/page/2500.md)
- [Update Lifecycle for Tenant Customizations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-customization-update-lifecycle): Learn how to keep per-tenant extensions compatible with Business Central online updates, receive validation notifications, and resolve update failures.
- [Upgrading Extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-upgrading-extensions): Describes how to add code to upgrade data in a new extension version.
  - In the observatory: [Codeunit 9999 "Upgrade Tag"](../../../../objects/codeunit/9999.md), [Table 9999 "Upgrade Tags"](../../../../objects/table/9999.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#210 knowledge(upgrade): upgrade code must not use ChangeCompany](../../../../changes/bcquality/210.md) (code change): "upgrade code must not use ChangeCompany. New quality rule and knowledge article prevent upgrade code from using ChangeCompany"
- [Business Central 2025 wave 2 (BC27): UpdateAuditFields Method on DataTransfer is now in Cloud scope](../../../../posts/yzhums-com/67809.md) (community post): "UpdateAuditFields method on DataTransfer was previously OnPrem-only, now available in Cloud scope"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
