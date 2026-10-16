---
id: topic/dev-itpro/get-started/develop/marketplace-validation/marketplace-technical-validation-faq
type: topic
title: Marketplace technical validation FAQ
summary: Marketplace technical validation FAQ collects answers for partners submitting Business Central apps to the Marketplace. It covers the validation process, app identity, previews, offers, code-signing, affixes and ID ranges, Application Insights, and support channels.
tier: official
language: en
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-16T01:18:16.191Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5e1a299697ab71a591e6a61625a3842fb8ed0a07b8845cc1888236d1959752ba
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-develop-maintain
    title: Develop and Maintain Marketplace Apps FAQ
    date: "2025-02-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-app-identity
    title: Marketplace App Identity FAQ
    date: "2025-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-app-preview
    title: Marketplace App Previews FAQ
    date: "2025-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-app-insights
    title: Marketplace Azure Application Insights and Submission FAQ
    date: "2026-01-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-offer
    title: Marketplace Business Central Offer FAQ
    date: "2025-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-channels
    title: Marketplace Channels for Questions and Issues FAQ
    date: "2025-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-code-sign
    title: Marketplace Code-signing Validation FAQ
    date: "2025-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-name-affix-range
    title: Marketplace Names, Affixes, and ID Ranges FAQ
    date: "2025-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-validation-process
    title: Marketplace Technical validation process FAQ
    date: "2025-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-faq
    title: Technical validation FAQ
    date: "2025-02-19"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-develop-maintain
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-app-identity
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-app-preview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-app-insights
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-offer
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-channels
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-code-sign
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-name-affix-range
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-validation-process
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-faq
  objects: []
  features: []
  topics:
    - topic/dev-itpro/get-started/develop/marketplace-validation
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Get started
  - Develop
  - Marketplace validation
  - Marketplace technical validation FAQ
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/get-started/develop/marketplace-validation
children: []
coverage:
  learn: 10
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 4ea8eb9ab4cf6918a6acf70c5e3bbf5051bfcbdb4594c387a388b8cac99791f5
narrative: generated
---

# Marketplace technical validation FAQ

> Marketplace technical validation FAQ collects answers for partners submitting Business Central apps to the Marketplace. It covers the validation process, app identity, previews, offers, code-signing, affixes and ID ranges, Application Insights, and support channels.

Path: [Get started](../../../get-started.md) > [Develop](../../develop.md) > [Marketplace validation](../marketplace-validation.md) > Marketplace technical validation FAQ · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

This section is a set of FAQ pages for partners who build, submit and maintain Business Central apps on the Marketplace. Each page focuses on one topic, so you can go straight to the one that matches the problem you have.

Start with the Technical validation FAQ, which gives an entry point to the main topics. The Technical validation process FAQ then explains what is checked (by release and country/region, breaking changes, baseline comparison, code signing, malware scanning) and how to fix common failures. Other pages cover specific areas: app identity, names, affixes and ID ranges, code-signing, Azure Application Insights, offer types, previews, and developing and maintaining apps. The channels page tells you who to contact when a question is not answered.

## Key points

- The Technical validation process FAQ covers automated validation, country/region scope, breaking change detection, baseline comparison, and remediation of common failures.
- The App Identity FAQ explains when an extension can change its name, publisher or App ID, with version requirements (2021 release wave 2, version 19.0) and migration implications.
- The App Previews FAQ covers preview audience control, a hide key, the preview installation URL, preview listing, and how previews interact with environment upgrades and public releases (2023 release wave 2).
- The Application Insights and Submission FAQ helps with enabling telemetry, validating connection strings, data sampling and reading validation signals.
- The Offer FAQ describes connect and add-on app types, offer type conversion, keeping offer URLs, Contact Me listings, and Partner Center API use for automated submissions.
- The Code-signing FAQ covers certificate requirements, signing procedures, the .pfx format and reusing code-signing.
- The Names, Affixes and ID Ranges FAQ explains registering and reusing affixes and ID ranges across apps, plus prefix/suffix naming and object name limits.
- The Channels FAQ says when to use d365val@microsoft.com, Partner Center support, Business Central support or Viva Engage.

## Learn pages

- [Develop and Maintain Marketplace Apps FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-develop-maintain): Describes the most common questions you might have when developing and maintaining Marketplace apps for Business Central.
- [Marketplace App Identity FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-app-identity): Describes the most common questions about app identity in your Marketplace app for Business Central.
- [Marketplace App Previews FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-app-preview): Describes the most common questions about Marketplace previews for Business Central.
- [Marketplace Azure Application Insights and Submission FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-app-insights): Describes the most common questions about Azure Application Insights when submitting your app to Marketplace for Business Central.
- [Marketplace Business Central Offer FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-offer): Describes the most common questions about Marketplace app offers for Business Central.
- [Marketplace Channels for Questions and Issues FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-channels): Describes the most common questions about channels that you can use for questions and issues you might have when submitting your app to Marketplace for Business Central.
- [Marketplace Code-signing Validation FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-code-sign): Describes the most common questions when about code-signing your Marketplace app for Business Central.
- [Marketplace Names, Affixes, and ID Ranges FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-name-affix-range): Describes the most common questions about names, affixes, and ID ranges in your Marketplace app for Business Central.
- [Marketplace Technical validation process FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-validation-process): Describes the most common questions about the validation process when submitting your app to Marketplace for Business Central.
- [Technical validation FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-faq): Describes the most common questions when submitting your app to Marketplace for Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
