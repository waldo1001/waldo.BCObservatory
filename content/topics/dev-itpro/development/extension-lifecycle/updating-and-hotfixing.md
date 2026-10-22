---
id: topic/dev-itpro/development/extension-lifecycle/updating-and-hotfixing
type: topic
title: Updating and hotfixing
summary: Updating and hotfixing covers how Business Central apps and extensions are updated, upgraded and hotfixed through their lifecycle. It answers questions about submitting new versions to Marketplace, version numbering, hotfix validation, breaking changes, and writing upgrade code.
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-22T01:12:33.102Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: db30a5467d10bdd0c0b96b7709bd8d200f8cfbf79a6a1637904dd8b95c2af203
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
  posts: []
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
  blog: 0
  guideline: 0
bc_forms: []
member_hash: f3e7286da03b9ac244c0a2da0047e0e967fb5517a08c592a5e38bde95aa4b2a9
narrative: generated
---

# Updating and hotfixing

> Updating and hotfixing covers how Business Central apps and extensions are updated, upgraded and hotfixed through their lifecycle. It answers questions about submitting new versions to Marketplace, version numbering, hotfix validation, breaking changes, and writing upgrade code.

Path: [Development](../../development.md) > [Extension lifecycle](../extension-lifecycle.md) > Updating and hotfixing · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section describes what happens to an app or extension after its first release: how it behaves through Business Central service updates, how partners ship app updates and bug fixes, and how breaking changes are handled. The lifecycle page explains partner responsibilities for maintenance and Microsoft's compatibility testing process.

Two FAQ pages cover the practical side of updating: version numbering, Partner Center submission, the validation process, update cadence, automatic and forced updates, and library app dependencies. A separate page covers hotfixing Marketplace apps, including validation requirements and breaking change detection when you submit a version that is not the latest.

For the technical side, the Upgrading Extensions page explains how to write upgrade code with triggers, control its execution with version data or upgrade tags, and run data migration. Start with the lifecycle page for the concepts, then use the FAQs for submission questions and the upgrade page when writing code.

## Key points

- The lifecycle page covers service updates, app updates, bug fixes, critical bugs, breaking changes and extension data retention.
- Partners are responsible for maintaining their apps; Microsoft runs compatibility testing.
- The FAQs cover app version numbering, Partner Center submission, the validation process and update cadence.
- Force updates during major releases and automatic app updates are covered in the FAQs.
- Hotfixing a Marketplace app means submitting a non-latest version, which brings validation release ranges and breaking change detection.
- Hotfix validation uses AppSourceCop and has restrictions on public APIs and obsolete pending items.
- Upgrade code uses the OnCheckPreconditions, OnUpgrade and OnValidate triggers.
- Upgrade execution can be controlled by version data or upgrade tags, and the upgrade page lists 2021 release wave 1.

## Learn pages

- [FAQ about Updating your Business Central App](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-update): Get answers to some of your questions about updating your app for Dynamics 365 Business Central
- [Hotfix a Marketplace app](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-hotfixing-appsource-app): Learn how to hotfix a Marketplace app in Dynamics 365 Business Central.
- [Lifecycle of Apps and Extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-life-cycle): Learn how Marketplace apps behave during service and app updates, how administrators install updates, and how extension data is retained.
- [Lifecycle of apps and extensions FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-update-app-life-cycle-faq): Overview of the frequently asked questions about updating an app on Marketplace.
- [Update Lifecycle for Tenant Customizations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-customization-update-lifecycle): Overview of the process of ensuring extension compatibility with update versions
- [Upgrading Extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-upgrading-extensions): Describes how to add code to upgrade data in a new extension version.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#210 knowledge(upgrade): upgrade code must not use ChangeCompany](../../../../changes/bcquality/210.md) (code change): "upgrade code must not use ChangeCompany. New quality rule and knowledge article prevent upgrade code from using ChangeCompany"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
