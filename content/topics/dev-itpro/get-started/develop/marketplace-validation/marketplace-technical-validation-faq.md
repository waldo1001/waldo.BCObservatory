---
id: topic/dev-itpro/get-started/develop/marketplace-validation/marketplace-technical-validation-faq
type: topic
title: Marketplace technical validation FAQ
summary: Marketplace technical validation FAQ for Business Central apps. It answers questions about app identity, code-signing, names, affixes and ID ranges, Application Insights, app previews, offer types, the validation process, and support channels.
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:24.768Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d122255a40e3d23ecab94d8ac1238ea5fb0f9a1cdb85b174696ce359044ed73a
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

> Marketplace technical validation FAQ for Business Central apps. It answers questions about app identity, code-signing, names, affixes and ID ranges, Application Insights, app previews, offer types, the validation process, and support channels.

Path: [Get started](../../../get-started.md) > [Develop](../../develop.md) > [Marketplace validation](../marketplace-validation.md) > Marketplace technical validation FAQ · tier official · system none · narrative reviewed by Opus

## Overview

This section is a set of short FAQ pages for partners who submit Business Central apps to the Marketplace and need to pass technical validation. Each page covers one topic: how validation works, app identity, code-signing, naming and ID ranges, telemetry, previews, offers, development issues, and where to ask for help.

Start with the Technical validation FAQ, which gives an overview of the submission validation process and points to the main areas. Then move to the page that matches your problem. The Technical validation process FAQ covers validation scope, breaking change checks, baseline comparisons and fixing common failures. The identity, names/affixes, and code-signing pages cover the rules checked at submission. The channels page tells you whom to contact when you are stuck.

## Key points

- The validation process FAQ explains scope by release and country, breaking change detection, baseline comparison, code signing validation, malware scanning, and remediation of common failures.
- App identity FAQ covers when to change extension names, publishers and App IDs; App ID changes are restricted because they can break dependent extensions.
- Code-signing FAQ covers certificate requirements, signing procedures, the approved .pfx format, and reuse of code-signing.
- Names, affixes, and ID ranges FAQ explains how to register affixes and ID ranges and reuse them across multiple apps.
- Application Insights FAQ helps with enabling telemetry for submissions, validating connection strings, interpreting validation signals, and data sampling configuration.
- App previews FAQ covers limiting a preview to selected customers with a hide key, the preview installation URL, preview listing, and how previews interact with environment upgrades and public releases.
- Offer FAQ covers connect and add-on app types, converting offer types, keeping the offer URL, and Partner Center API for automated submissions.
- Channels FAQ says when to use d365val@microsoft.com, Partner Center support, Business Central support, or Viva Engage.

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
