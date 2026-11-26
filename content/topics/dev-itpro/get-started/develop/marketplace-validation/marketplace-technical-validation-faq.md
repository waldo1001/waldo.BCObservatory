---
id: topic/dev-itpro/get-started/develop/marketplace-validation/marketplace-technical-validation-faq
type: topic
title: Marketplace technical validation FAQ
summary: Marketplace technical validation FAQ pages for Business Central apps. They answer questions on submission validation, app identity, code-signing, affixes and ID ranges, Application Insights, previews, offer types, dependencies and licensing, and support channels.
tier: official
language: en
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-26T01:05:31.204Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f3b0c91fd60f36a5b50d1f2f85d2a89217165152df13304898ce49c366dd7e6d
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
    date: "2026-11-23"
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

> Marketplace technical validation FAQ pages for Business Central apps. They answer questions on submission validation, app identity, code-signing, affixes and ID ranges, Application Insights, previews, offer types, dependencies and licensing, and support channels.

Path: [Get started](../../../get-started.md) > [Develop](../../develop.md) > [Marketplace validation](../marketplace-validation.md) > Marketplace technical validation FAQ · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

This section collects FAQs for partners who submit apps to the Business Central Marketplace. Each page covers one topic that often causes trouble during submission or maintenance: the validation process, app identity, code-signing, naming, telemetry, previews, offers, and development issues.

The Technical validation FAQ page is the entry point. It gives a broad list of common questions and points to the specific topics. For failed validations, go to the technical validation process FAQ. It covers releases, countries/regions, baselines, and breaking changes.

For preparation work, use the pages on names, affixes and ID ranges, code-signing, and Application Insights. Use the offer, previews, and identity pages when you plan a listing or a change to an existing app. The support channels page tells you whom to contact when a question is not answered.

## Key points

- The technical validation process FAQ covers validation against releases, countries/regions, and baselines, plus breaking change detection and common failures.
- The app identity FAQ explains when an extension can change its name, publisher, or App ID. It lists version requirements (2021 release wave 2, version 19.0) and migration implications.
- The code-signing FAQ covers certificate requirements, the .pfx certificate format, signing procedures, and reusing code-signing.
- The names, affixes, and ID ranges FAQ explains how to register affixes and ID ranges and reuse them across multiple apps.
- The Application Insights FAQ helps with enabling telemetry for submissions, validating connection strings, and reading validation signals.
- The previews FAQ covers limiting a preview to selected customers with a hide key, the preview installation URL, and how previews interact with upgrades and public releases (2023 release wave 2).
- The offer FAQ covers connect and add-on app types, converting offer types, keeping offer URLs, and using the Partner Center API for automated submissions.
- The development FAQ covers dependency range conflicts and license validation in Docker or SaaS environments.

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
