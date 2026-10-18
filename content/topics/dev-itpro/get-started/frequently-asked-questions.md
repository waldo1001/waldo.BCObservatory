---
id: topic/dev-itpro/get-started/frequently-asked-questions
type: topic
title: Frequently asked questions
summary: Frequently asked questions for Business Central cover building, testing, submitting and updating Marketplace apps, library and dependency apps, AL development, migrating to Business Central online, and the Windows client discontinuation. Use it for short practical answers on these topics.
tier: official
language: en
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-18T00:56:54.350Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d544d2b246dde75d620c30c02063671353704c79d0ab6de9416dd8b4831818ca
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-dependencies-libraries
    title: FAQ about Library & Dependency Apps in Business Central
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-offer
    title: FAQ about managing and submitting your Business Central offer
    date: "2023-12-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/faq-migrate-data
    title: FAQ about Migrating to Business Central Online
    date: "2026-05-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-test
    title: FAQ about Testing your Business Central App
    date: "2022-08-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-update
    title: FAQ about Updating your Business Central App
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/faq-win-cli
    title: FAQ about Windows Client and Business Central
    date: "2024-12-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dev-faq
    title: FAQ for Developing in AL
    date: "2025-06-16"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-marketing-validation-faq
    title: Marketing validation FAQ
    date: "2023-09-26"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-dependencies-libraries
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-offer
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/faq-migrate-data
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-test
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-update
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/faq-win-cli
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dev-faq
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-update-app-life-cycle-faq
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-marketing-validation-faq
  objects: []
  features: []
  topics:
    - topic/dev-itpro/get-started
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Get started
  - Frequently asked questions
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/get-started
children: []
coverage:
  learn: 9
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 0cb16945db4edf4ef8e9868d3a87178fbd6436402c2337d45d2438e7020d25b3
narrative: generated
---

# Frequently asked questions

> Frequently asked questions for Business Central cover building, testing, submitting and updating Marketplace apps, library and dependency apps, AL development, migrating to Business Central online, and the Windows client discontinuation. Use it for short practical answers on these topics.

Path: [Get started](../get-started.md) > Frequently asked questions · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

This section is a set of standalone FAQ pages with no subtopics. Most of them serve partners who publish apps on the Microsoft Marketplace: AL development, testing, submitting and managing an offer, marketing validation, updating apps, app lifecycle, and library and dependency apps.

Two pages address other audiences. The migration FAQ answers questions about moving to Business Central online, such as system requirements, data limits, SQL connection strings, the self-hosted integration runtime, permissions and data replication. The Windows client FAQ explains the move from the legacy Windows client to the web client, mobile apps and the Windows 10 desktop app, starting with 2019 release wave 2.

For app publishing, a sensible order is: the AL development FAQ, the testing FAQ, the marketing validation FAQ, the offer submission FAQ, then the update and lifecycle FAQs. Read the library and dependency FAQ if your app shares code with other apps.

## Key points

- The AL development FAQ covers the AL Extension for Visual Studio Code, debugging and snapshot debugging, symbol downloading, app identity, per-tenant extensions and Marketplace submission validation.
- The testing FAQ describes complete coverage testing, with automated and manual tests, country-specific testing, upgrade testing and Docker testing.
- The marketing validation FAQ lists what a listing must state: supported editions, countries/regions and languages. It also covers help and support pages, product naming and marketplace badge usage.
- The offer submission FAQ covers the Partner Center process: the Go Live button, Review and publish, validation queuing and technical validation.
- The update and lifecycle FAQs cover app version numbering, update cadence, automatic updates, force updates during major releases, upgrade codeunits and code signing.
- Library apps hold shared code for several Marketplace apps and are installed automatically as dependencies. They are also subject to validation and version control.
- The migration FAQ covers the self-hosted integration runtime, Azure Data Factory, SQL connection strings, the intelligent cloud permission set, extension data migration and data compression.
- The Windows client was discontinued starting with 2019 release wave 2 in October 2019. Users move to the web client, mobile apps or the Windows 10 desktop app, with Excel integration and an Outlook add-in.

## Learn pages

- [FAQ about Library & Dependency Apps in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-dependencies-libraries): Get answers to some of your questions about library apps and dependency apps in Dynamics 365 Business Central
- [FAQ about managing and submitting your Business Central offer](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-offer): Get answers to some of your questions about managing an offer in Partner Center when you build an app for Dynamics 365 Business Central
- [FAQ about Migrating to Business Central Online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/faq-migrate-data): Get answers to frequently asked questions about migrating to Business Central online from on-premises solutions, including supported versions and data limits.
- [FAQ about Testing your Business Central App](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-test): Get answers to some of your questions about testing when you build an app for Dynamics 365 Business Central
- [FAQ about Updating your Business Central App](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-update): Get answers to some of your questions about updating your app for Dynamics 365 Business Central
- [FAQ about Windows Client and Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/faq-win-cli): Get answers to why the Windows client is no longer supported with Business Central.
- [FAQ for Developing in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dev-faq): Overview of frequently asked questions for development using the AL language.
- [Lifecycle of apps and extensions FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-update-app-life-cycle-faq): Overview of the frequently asked questions about updating an app on Marketplace.
- [Marketing validation FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-marketing-validation-faq): The marketing validation FAQ for Business Central apps

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
