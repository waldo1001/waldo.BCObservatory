---
id: topic/dev-itpro/development/get-started/marketplace-validation
type: topic
title: Marketplace validation
summary: Marketplace validation covers how partners prepare, validate and market Business Central apps for AppSource. It answers questions about the technical validation checklist, validation telemetry in Application Insights, breaking changes validation, and landing page and video guidance.
tier: official
language: en
system: development
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
  input_hash: d9aa52bd88c818699dc79ee5ad96bfff7e33dcaa3378a4ad56a5b90ce4bdd9d2
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
    date: "2026-11-23"
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

> Marketplace validation covers how partners prepare, validate and market Business Central apps for AppSource. It answers questions about the technical validation checklist, validation telemetry in Application Insights, breaking changes validation, and landing page and video guidance.

Path: [Development](../../development.md) > [Get started](../get-started.md) > Marketplace validation · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section is for partners who publish Business Central extensions on AppSource. It combines the technical side of getting an app through validation with guidance on presenting the app to customers.

For validation, start with the technical validation checklist. It lists the mandatory requirements before submission and explains self-validation with BcContainerHelper and AppSourceCop analysis. The technical validation FAQ answers common questions on the process, app identity, code-signing and Application Insights. Two telemetry pages then help you monitor and troubleshoot: one for submission validation and one for breaking changes validation against upcoming Business Central releases.

The remaining two pages are about marketing. They give best practices for building a sales landing page and for making videos aimed at different personas.

## Key points

- The technical validation checklist sets mandatory requirements before Marketplace submission, including manifest validation, affix registration, digital code signing, permission sets and extension publishing.
- Partners can self-validate using BcContainerHelper and AppSourceCop analysis before submitting.
- Submission validation telemetry uses Application Insights traces to show validation phases, diagnostic events and submission failures. The page mentions 2021 release wave 1 and version 18.4.
- Validation covers version and country-region checks, extension validation and AL compiler integration.
- Breaking changes validation telemetry shows when an AppSource app fails validation against upcoming Business Central releases.
- The technical validation FAQ covers app identity, code-signing, Azure Application Insights, app previews and marketplace offers.
- The landing page guide covers layout, headline copy, pain-based messaging, benefits, testimonials and video demonstrations.
- The video guide describes why, how and what videos and customer testimony, with a structure built around benefits, pain points and call to action.

## Learn pages

- [Analyzing Marketplace app breaking changes validation telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-app-validation-trace): Learn about the telemetry for breaking changes validation of Marketplace apps in Business Central.
  - Failed app validations emit telemetry traces to partner's Application Insights resource with failure reasons.
  - Partners can monitor Marketplace apps and set up alerts for apps needing attention before next major version.
  - Breaking changes validation is separate from Marketplace submission validation that occurs in Partner Center.
  - Limit: AL compiler errors and AppSourceCop analyzer issues are reported as validation diagnostics during the process.
  - Validation diagnostics can be information, warning, or error severity levels based on issue type.
- [Analyzing Marketplace Submission Validation Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-submission-validation-trace): Analyze Business Central Marketplace submission validation telemetry to track validation stages, identify diagnostics, and investigate publication failures.
  - Status: Generally available from Business Central 2021 release wave 1, version 18.4 and later
  - Telemetry traces record automated validation results when apps are submitted to Marketplace via Partner Center
  - Validation checks extensions against each targeted Business Central version and each specified country or region
  - AL compiler and AppSourceCop code analyzer perform the validation checks
  - Each submission receives a unique ID included in all traces to query related submission data
  - Validation results can be reused across versions or regions to reduce validation time
  - Prerequisite: Extensions must be set up to emit telemetry to Application Insights for analysis
  - Review technical validation checklist before submitting to reduce Marketplace validation failure risk
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
