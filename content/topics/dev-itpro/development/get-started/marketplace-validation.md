---
id: topic/dev-itpro/development/get-started/marketplace-validation
type: topic
title: Marketplace validation
summary: Marketplace validation covers what partners need to do before and after submitting Business Central apps to AppSource. It answers questions about the technical validation checklist and FAQ, validation telemetry in Application Insights, breaking changes validation, and marketing assets such as landing pages and videos.
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T01:01:32.224Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b94f00d63a4cb4cf50c014977fb78ba1ef026ce9f4d78b74e25e53663cc743cf
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
    title: Analyzing Marketplace Submission Validation Telemetry
    date: "2026-11-17"
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
  videos:
    - video/9i6hVsw9x_U
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
  video: 1
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 53ce797e950f6a3e38fee50d94f2f88c2ce01a405f20e5a08997bcaf5c12a1f7
narrative: generated
---

# Marketplace validation

> Marketplace validation covers what partners need to do before and after submitting Business Central apps to AppSource. It answers questions about the technical validation checklist and FAQ, validation telemetry in Application Insights, breaking changes validation, and marketing assets such as landing pages and videos.

Path: [Development](../../development.md) > [Get started](../get-started.md) > Marketplace validation · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section is for partners who publish Business Central extensions on the Marketplace. It has no subtopics. Its six pages fall into two groups: technical validation and marketing guidance.

For technical validation, start with the Technical validation checklist. It lists the mandatory requirements before submission and explains how validation is done, including self-validation with BcContainerHelper and AppSourceCop analysis. The Technical validation FAQ covers common questions on the process, app identity, code-signing, Azure Application Insights, app previews and marketplace offers. Two telemetry pages explain how to use Application Insights traces. One covers submission validation results and the other covers breaking changes validation against upcoming Business Central releases.

Two further pages give marketing advice: how to build an effective sales landing page and how to make compelling videos for different personas.

## Key points

- The Technical validation checklist lists mandatory requirements before submission, including manifest validation, affix registration, digital code signing, permission sets and extension publishing.
- Partners can self-validate with BcContainerHelper and AppSourceCop analysis before submitting.
- Submission validation telemetry uses Application Insights traces to track validation phases, diagnostics and failures, including AL compiler and AppSourceCop checks.
- The submission validation telemetry page references 2021 release wave 1 and version 18.4.
- Breaking changes validation telemetry helps partners detect when their AppSource apps fail validation against upcoming Business Central releases.
- The Technical validation FAQ covers app identity, code-signing, Azure Application Insights, app previews and marketplace offers.
- The landing page guide covers layout, headline copy, pain-based messaging, benefits, testimonials and video demonstrations.
- The video guide describes why, how, what and customer testimony videos, with a structure built around benefits, pain points and a call to action.

## Learn pages

- [Analyzing Marketplace app breaking changes validation telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-app-validation-trace): Learn about the telemetry for breaking changes validation of Marketplace apps in Business Central.
  - Failed app validations emit telemetry traces to partner's Application Insights resource with failure reasons.
  - Partners can monitor Marketplace apps and set up alerts for apps needing attention before next major version.
  - Breaking changes validation is separate from Marketplace submission validation that occurs in Partner Center.
  - Limit: AL compiler errors and AppSourceCop analyzer issues are reported as validation diagnostics during the process.
  - Validation diagnostics can be information, warning, or error severity levels based on issue type.
- [Analyzing Marketplace Submission Validation Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-submission-validation-trace): Analyze Business Central Marketplace submission validation telemetry to track validation stages, identify diagnostics, and investigate publication failures.
  - Status: Generally available from version 18.4 (2021 release wave 1)
  - Marketplace submission validation telemetry is emitted when apps are published from Partner Center
  - Validation runs against each extension for each targeted country/region and Business Central version
  - Extensions are validated using AL compiler and AppSourceCop code analyzer
  - Each submission receives unique validationRequestId included in all traces for query tracking
  - Validation process emits traces at different phases: request started, diagnostic reported, validation started/completed per extension and version/country-region
  - Event IDs track validation flow: LC0028 request started, LC0029 completed successfully, LC0035 completed with failures
- [How to create an effective sales landing page](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-how-to-create-sales-landing-page): Guideline on creating an effective Sales Landing page for your app
- [How to make compelling videos](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-how-to-make-compelling-videos): How to make compelling videos to market your app
- [Marketing Validation Checklist](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-checklist-marketing): The marketing checklist for validation of Business Central apps
- [Technical validation checklist](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission): Describes the steps you must go through to successfully submit your app to Marketplace using AppSourceCop for Business Central.
- [Technical validation FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-faq): Describes the most common questions when submitting your app to Marketplace for Business Central.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9407 Add Microsoft apps view to AppSource product list (Fix ADO #642217)](../../../../changes/bcapps/9407.md) (code change): "A new predefined view called "Microsoft apps" was added to the AppSource Product List page"
- [#142 Add AL-focused AppSource validation guidance](../../../../changes/bcquality/142.md) (code change): "Six community AppSource knowledge articles with paired good and bad AL samples"
- [Dynamics 365 Business Central: checking for breaking changes on obsoleted, internal and OnPrem objects.](../../../../posts/demiliani-com/12142.md) (community post): "AppSourceCop configuration settings validateObsoleteSymbols, validateInternalSymbols, validateOnPremSymbols"
- [AppSource App Previews](../../../../videos/9i6hVsw9x_U.md) (video): "Preview Key for AppSource Apps; Preview Version Installation"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
