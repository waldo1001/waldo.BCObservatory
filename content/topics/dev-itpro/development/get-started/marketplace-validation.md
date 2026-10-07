---
id: topic/dev-itpro/development/get-started/marketplace-validation
type: topic
title: Marketplace validation
summary: "Marketplace validation covers what partners need to do before and after submitting Business Central apps to AppSource: the technical validation checklist and FAQ, Application Insights telemetry for submission and breaking-changes validation, and guidance on landing pages and videos. It answers questions on passing validation, diagnosing failures, and presenting an app."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:28.595Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 830079ffe7a4ae9f43c6b2fb891551fe08eef93e02c0fe67afca4a1939f5e932
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
  posts: []
  guidelines: []
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
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 53ce797e950f6a3e38fee50d94f2f88c2ce01a405f20e5a08997bcaf5c12a1f7
narrative: generated
---

# Marketplace validation

> Marketplace validation covers what partners need to do before and after submitting Business Central apps to AppSource: the technical validation checklist and FAQ, Application Insights telemetry for submission and breaking-changes validation, and guidance on landing pages and videos. It answers questions on passing validation, diagnosing failures, and presenting an app.

Path: [Development](../../development.md) > [Get started](../get-started.md) > Marketplace validation · tier official · system development · narrative reviewed by Opus

## Overview

Marketplace validation is the section for partners publishing Business Central extensions on AppSource. It combines the technical requirements an extension must meet with telemetry for understanding validation results, and with marketing guidance for the app's listing.

Start with the Technical validation checklist, which lists the mandatory requirements and explains how validation is done, including self-validation with BcContainerHelper and AppSourceCop. The Technical validation FAQ covers common questions on app identity, code-signing, names and affixes, Application Insights usage, support channels and app previews.

Two telemetry pages help when validation fails. One describes submission validation traces sent to Application Insights, with validation phases, diagnostic events and KQL samples. The other covers monitoring breaking-changes validation against upcoming Business Central releases. Two further pages give best practices for sales landing pages and marketing videos.

## Key points

- The technical validation checklist lists mandatory requirements before submission, including manifest validation, affix registration, digital code signing, permission sets and extension publishing.
- Partners can self-validate with BcContainerHelper and AppSourceCop analysis before submitting.
- Submission validation traces go to Application Insights and include AL compiler diagnostics, AppSourceCop analyzer results and diagnostic codes, with KQL samples for analysis.
- The submission trace telemetry guide references 2021 release wave 1 and version 18.4.
- Breaking-changes validation telemetry shows when an AppSource app fails validation against upcoming Business Central releases.
- The FAQ covers app identity, code-signing, names and affixes, Azure Application Insights usage, Business Central offers, support channels and app previews.
- The landing page guide covers layout, headline copy, pain-based messaging, benefits, testimonials, video demos and calls to action.
- The video guide describes why, how and what videos plus customer testimony, with structure and persona targeting.

## Learn pages

- [Analyzing Marketplace app breaking changes validation telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-app-validation-trace): Learn about the telemetry for breaking changes validation of Marketplace apps in Business Central.
- [Analyzing Marketplace submission validation trace telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-submission-validation-trace): Learn about the telemetry for publishing apps to Marketplace from Partner Center.
- [How to create an effective sales landing page](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-how-to-create-sales-landing-page): Guideline on creating an effective Sales Landing page for your app
- [How to make compelling videos](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-how-to-make-compelling-videos): How to make compelling videos to market your app
- [Marketing Validation Checklist](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/readiness/readiness-checklist-marketing): The marketing checklist for validation of Business Central apps
- [Technical validation checklist](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission): Describes the steps you must go through to successfully submit your app to Marketplace using AppSourceCop for Business Central.
- [Technical validation FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission-faq): Describes the most common questions when submitting your app to Marketplace for Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
