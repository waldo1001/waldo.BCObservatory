---
id: topic/dev-itpro/development/get-started/marketplace-validation
type: topic
title: Marketplace validation
summary: "Marketplace validation covers what partners need to do before and after submitting Business Central apps to AppSource: the technical validation checklist and FAQ, telemetry for validation results, and guidance on landing pages and videos. It answers questions on requirements, self-validation, diagnosing failed validation and marketing an app."
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-17T01:13:14.128Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: df1095e3a82b137a5e19edc1d5c890334b6ee0bc7b9440f585e01fcab967ec84
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-app-validation-trace
    title: Analyzing Marketplace app breaking changes validation telemetry
    date: "2026-03-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-submission-validation-trace
    title: Analyzing Marketplace submission validation trace telemetry
    date: "2021-08-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-how-to-create-sales-landing-page
    title: How to create an effective sales landing page
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-how-to-make-compelling-videos
    title: How to make compelling videos
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-checklist-marketing
    title: Marketing Validation Checklist
    date: "2023-09-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission
    title: Technical validation checklist
    date: "2025-01-30"
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-app-validation-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-submission-validation-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-how-to-create-sales-landing-page
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-how-to-make-compelling-videos
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-checklist-marketing
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-faq
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/get-started
  localizations: []
  videos: []
  posts:
    - post/demiliani-com/12142
  guidelines: []
  changes:
    - change/bcapps/9407
    - change/bcquality/142
learn_toc_path:
  - Development
  - Get started
  - Marketplace validation
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/get-started
children: []
coverage:
  learn: 7
  code: 0
  video: 0
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 53ce797e950f6a3e38fee50d94f2f88c2ce01a405f20e5a08997bcaf5c12a1f7
narrative: generated
---

# Marketplace validation

> Marketplace validation covers what partners need to do before and after submitting Business Central apps to AppSource: the technical validation checklist and FAQ, telemetry for validation results, and guidance on landing pages and videos. It answers questions on requirements, self-validation, diagnosing failed validation and marketing an app.

Path: [Development](../../development.md) > [Get started](../get-started.md) > Marketplace validation · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section is for partners publishing Business Central extensions on the Marketplace. The core pages are the technical validation checklist, which lists mandatory requirements and explains how validation is done, and the technical validation FAQ, which answers common questions on the process, app identity, code-signing, Application Insights and app previews.

Two telemetry pages help after submission. One documents the validation traces sent to Application Insights, including AL compiler diagnostics, AppSourceCop diagnostic codes and KQL samples. The other explains how to detect when an AppSource app fails validation against upcoming Business Central releases (breaking changes validation).

Two pages cover marketing: how to build an effective sales landing page and how to make compelling videos. Start with the checklist, use the FAQ for specific questions, then use the telemetry pages to troubleshoot results.

## Key points

- The technical validation checklist lists mandatory requirements before submission, including manifest validation, affix registration, digital code signing, permission sets and extension publishing.
- Partners can self-validate using BcContainerHelper and AppSourceCop analysis.
- Submission validation traces go to Application Insights and include validation phases, AL compiler diagnostics and AppSourceCop diagnostic codes.
- The submission trace page includes KQL code samples and references 2021 release wave 1 (version 18.4).
- Breaking changes validation telemetry shows when an AppSource app fails validation against upcoming Business Central releases.
- The FAQ covers app identity validation, code-signing validation, Azure Application Insights usage, app previews and marketplace offers.
- The landing page guide covers layout, headline copy, pain-based messaging, benefits, testimonials and video demonstrations.
- The video guide describes why, how and what videos plus customer testimony, with structure and persona targeting.

## Learn pages

- [Analyzing Marketplace app breaking changes validation telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-app-validation-trace): Learn about the telemetry for breaking changes validation of Marketplace apps in Business Central.
- [Analyzing Marketplace submission validation trace telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-submission-validation-trace): Learn about the telemetry for publishing apps to Marketplace from Partner Center.
- [How to create an effective sales landing page](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-how-to-create-sales-landing-page): Guideline on creating an effective Sales Landing page for your app
- [How to make compelling videos](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-how-to-make-compelling-videos): How to make compelling videos to market your app
- [Marketing Validation Checklist](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-checklist-marketing): The marketing checklist for validation of Business Central apps
- [Technical validation checklist](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission): Describes the steps you must go through to successfully submit your app to Marketplace using AppSourceCop for Business Central.
- [Technical validation FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-faq): Describes the most common questions when submitting your app to Marketplace for Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9407 Add Microsoft apps view to AppSource product list (Fix ADO #642217)](../../../../changes/bcapps/9407.md) (code change): "A new predefined view called "Microsoft apps" was added to the AppSource Product List page"
- [#142 Add AL-focused AppSource validation guidance](../../../../changes/bcquality/142.md) (code change): "Six community AppSource knowledge articles with paired good and bad AL samples"
- [Dynamics 365 Business Central: checking for breaking changes on obsoleted, internal and OnPrem objects.](../../../../posts/demiliani-com/12142.md) (community post): "AppSourceCop configuration settings validateObsoleteSymbols, validateInternalSymbols, validateOnPremSymbols"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
