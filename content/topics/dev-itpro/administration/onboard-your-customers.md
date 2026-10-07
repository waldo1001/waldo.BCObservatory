---
id: topic/dev-itpro/administration/onboard-your-customers
type: topic
title: Onboard your customers
summary: "Onboarding customers in Business Central online: trials and sign-ups, the SignupContext parameter, the Welcome banner, checklists, teaching tips and tours, recommended apps, and onboarding telemetry. It answers how partners help new customers and users get productive faster."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:42.368Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 90ad5de3e47e58536b9097e770ee6446a0fe3dcb549281cfda346001f7c8c04c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-signupcontext
    title: Create customer-centric onboarding experiences with the SignupContext parameter.
    date: "2025-01-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-checklist
    title: Get Users Started with the Checklist
    date: "2025-01-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-telemetry
    title: Measure onboarding progress using telemetry
    date: "2025-01-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-welcome-banner
    title: Onboard new users with the Welcome banner
    date: "2025-01-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-experiences
    title: Onboarding experiences
    date: "2025-01-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/recommend-apps
    title: Recommend Apps
    date: "2021-07-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-teaching-tips-tours
    title: Teaching tips and in-app tours for onboarding users
    date: "2025-01-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/customer-signup
    title: Trials and sign-ups for Business Central online
    date: "2023-11-29"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-signupcontext
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-checklist
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-telemetry
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-welcome-banner
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-experiences
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/recommend-apps
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-teaching-tips-tours
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/customer-signup
  objects: []
  features: []
  topics:
    - topic/dev-itpro/administration
  localizations: []
  videos:
    - video/3uVf6BEXt1w
    - video/XNfgf7tCeaw
  posts: []
  guidelines: []
learn_toc_path:
  - Administration
  - Onboard your customers
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration
children: []
coverage:
  learn: 8
  code: 0
  video: 2
  blog: 0
  guideline: 0
bc_forms:
  - 4750
  - 4751
member_hash: d692987bb2ad4aea50701d375f7a7ecc7e3da99352faca448c809f849df5cdc3
narrative: generated
---

# Onboard your customers

> Onboarding customers in Business Central online: trials and sign-ups, the SignupContext parameter, the Welcome banner, checklists, teaching tips and tours, recommended apps, and onboarding telemetry. It answers how partners help new customers and users get productive faster.

Path: [Administration](../administration.md) > Onboard your customers · tier official · system administration · narrative reviewed by Opus

## Overview

This section describes the tools partners can use to help prospects and customers learn Business Central and reach productive use sooner. It starts with the overview of onboarding experiences and the page on trials and sign-ups for Business Central online, which covers free trials, tailored trials, CSP partnerships, conversion to paid subscriptions and demo environments.

The other pages cover individual building blocks. The SignupContext parameter tailors trial onboarding from prospect information on partner websites. The Welcome banner, the checklist, and teaching tips and in-app tours guide new users inside the product. The Recommended Apps extension lets partners curate marketplace apps for a customer. Onboarding telemetry signals measure progress.

Start with "Onboarding experiences" for the big picture, then read the page for the specific tool you want to build or customize.

## Key points

- The SignupContext parameter tailors unmanaged trial provisioning and onboarding (including checklist customization) based on prospect information from partner websites.
- The checklist is built from guided experience items such as assisted setup, manual setup, tours and spotlight tours (2021 release wave 1).
- The Welcome banner appears to new users in CRONUS evaluation companies and in non-evaluation companies like My Company, with different purposes and customization options.
- Teaching tips are created in AL with properties like AboutTitle and AboutText, for pages, controls, FactBoxes and reports (2022 release wave 1).
- Telemetry emits onboarding signals, such as sales, purchase and payment signals, based on posted documents, and the signals can be extended.
- The Recommended Apps extension lets partners curate marketplace app lists using codeunit methods such as InsertApp, GetApp, UpdateApp, RefreshImage, DeleteApp and DeleteAllApps.
- Trials and sign-ups cover free trials, tailored trials, CSP partnerships, trial conversion to paid subscriptions and demo environments.

## Learn pages

- [Create customer-centric onboarding experiences with the SignupContext parameter.](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-signupcontext): Learn how you can use the SignupContext parameter to create customer-centric evaluation and onboarding experiences.
- [Get Users Started with the Checklist](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-checklist): Learn how to customize the checklist that users can launch from the Welcome banner.
- [Measure onboarding progress using telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-telemetry): Learn how you can use onboarding telemetry to measure customers' progress with onboarding to Dynamics 365 Business Central.
- [Onboard new users with the Welcome banner](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-welcome-banner): Learn about the banner that displays when a user signs into a new company for the first time.
- [Onboarding experiences](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-experiences): As a partner, you can get your customers up to speed in a hurry with the right onboarding story. Learn about checklists and teaching tips in the onboarding framework.
- [Recommend Apps](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/recommend-apps): Curate a collection of Dynamics 365 apps that your customers can choose from with the Recommended Apps extension.
- [Teaching tips and in-app tours for onboarding users](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-teaching-tips-tours): Learn about the teaching tips that you can apply to your Business Central to help users get started.
- [Trials and sign-ups for Business Central online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/customer-signup): Learn how to let prospects try out a Business Central trial, and how you can configure and extend their trial experience.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Why Onboarding Experiences are Important](../../../videos/3uVf6BEXt1w.md) (video): "Customer self-service onboarding; Template-based setup approach; Partner-knowledge apps"
- [Overview of Customer and Partner Onboarding Journeys](../../../videos/XNfgf7tCeaw.md) (video): "customer onboarding; partner-led experience; trial setup"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 4750, 4751.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
