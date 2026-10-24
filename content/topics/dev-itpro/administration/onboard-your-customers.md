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
  at: "2026-10-24T00:57:10.969Z"
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
  objects:
    - object/page/4750
    - object/page/4751
  features: []
  topics:
    - topic/dev-itpro/administration
  localizations: []
  videos:
    - video/3uVf6BEXt1w
    - video/NwMLT-k6J6Q
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
  code: 2
  video: 3
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

Path: [Administration](../administration.md) > Onboard your customers · tier official · system administration · narrative reviewed (checked by Opus)

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
  - SignupContext parameter enables partners to create unmanaged trials without manual steps for all customers
  - Parameter passes prospect information from partner website to Business Central to tailor evaluation experience
  - Required keys are name identifying partner, appid for app to install, countrycode matching prospect tenant, eulaaccept set true
  - SignupContext is double-encoded before passing through sign-up process for proper URL redirect handling
  - When provisioned, trial environment installs app specified by appid if eulaaccept is true and countries match
  - Partner app must subscribe to OnSetSignupContext event to read values and set signup context enum field
  - Prerequisite: Partners must present EULA to users on their website and receive consent before setting eulaaccept to true
  - Limit: SignupContext not intended for test-driving apps; only for evaluation and onboarding to become paying customers
  - In the observatory: [Codeunit 150 "System Initialization"](../../../objects/codeunit/150.md), [Table 150 "Signup Context Values"](../../../objects/table/150.md)
- [Get Users Started with the Checklist](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-checklist): Learn how to customize the checklist that users can launch from the Welcome banner.
  - Checklist serves as onboarding platform where users access tasks by hitting Get started on Home page, revealing guided activities at their own pace.
  - Checklist content comprises setup tasks and learning material with progress indication that changes title and status to nudge users toward completion.
  - Checklist tasks point to pages, objects or external URLs in Business Central, enabling context-aware learning and gradual product exploration.
  - Checklist items reference Guided Experience Item records with types: Assisted Setup, Manual Setup, Learn, Tour, Spotlight Tour, Video, Application Feature.
  - Use Guided Experience codeunit facade functions to insert records: InsertManualSetup, InsertAssistedSetup, InsertLearnLink, InsertTour, InsertSpotlightTour, InsertVideo, InsertApplicationFeature.
  - Spotlight tours suppress other teaching tips and shine bright spotlight on core capabilities like Open in Excel or Share to Teams in sales scenarios.
  - Video type enables users to watch custom URL videos within Business Central window for feature explanation or training purposes.
  - Best practice: keep list to six items or less to avoid scrollbar, keep titles and descriptions short and include task benefits in descriptions.
  - In the observatory: [Table 1990 "Guided Experience Item"](../../../objects/table/1990.md), [Table 1991 "Checklist Item"](../../../objects/table/1991.md), [Table 1992 "Checklist Item Role"](../../../objects/table/1992.md), [Table 1993 "Checklist Item User"](../../../objects/table/1993.md)
- [Measure onboarding progress using telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-telemetry): Learn how you can use onboarding telemetry to measure customers' progress with onboarding to Dynamics 365 Business Central.
  - Five automatic signals emitted when onboarding progresses: started, sales, purchases, customer payments, vendor payments
  - Sales invoice signal emitted when five posted sales invoices exist; purchase signal when five posted purchase invoices
  - Payment signals emitted when five posted customer or vendor payments recorded in respective ledger entries
  - Daily routine checks criteria for business processes and emits signal once per process when conditions met
  - Partners can extend onboarding signals by implementing Onboarding Signal interface in custom codeunit
  - Event IDs 0000EIW used for onboarding started and 0000EIV used for onboarding signals
  - Limit: Onboarding criteria not applied to evaluation companies and sandboxes
  - In the observatory: [Codeunit 7580 "Onboarding Signal"](../../../objects/codeunit/7580.md), [Enum 7580 "Onboarding Signal Type"](../../../objects/enum/7580.md), [Interface "Onboarding Signal"](../../../objects/interface/onboarding-signal.md), [Table 112 "Sales Invoice Header"](../../../objects/table/112.md), [Table 122 "Purch. Inv. Header"](../../../objects/table/122.md), [Table 21 "Cust. Ledger Entry"](../../../objects/table/21.md)
- [Onboard new users with the Welcome banner](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-welcome-banner): Learn about the banner that displays when a user signs into a new company for the first time.
  - Welcome banner shown to users signing in to new company for first time with clear call to action
  - In CRONUS evaluation companies, banner highlights core capabilities to make prospects excited about subscribing
  - Business Manager Evaluation role receives banner in CRONUS; switching to Business Manager role hides banner
  - In My Company and non-evaluation companies, banner guides customer self-serve last-mile setup
  - Banner texts can be modified dynamically by subscribing to OnBeforeUpdateBannerLabels event
  - Limit: Business Manager Evaluation role experience may change across releases unlike code-related breaking changes
- [Onboarding experiences](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-experiences): As a partner, you can get your customers up to speed in a hurry with the right onboarding story. Learn about checklists and teaching tips in the onboarding framework.
  - Onboarding framework provides consistent experience for introducing users to the product itself across all users
  - Framework includes four components: welcome banner, checklist, teaching tips and tours, and signup context parameter
  - Welcome banner helps new users by presenting consistent onboarding without blocking product exploration
  - Teaching tips and tours educate users about pages and concepts in a sequential manner
  - Signup context enables partners to create customer-centric onboarding by passing profile information to Business Central
- [Recommend Apps](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/recommend-apps): Curate a collection of Dynamics 365 apps that your customers can choose from with the Recommended Apps extension.
  - Recommended Apps extension is per-tenant extension that curates list of apps for specific customers or business types.
  - Prerequisite: Only apps available on Marketplace can be added to the recommended collection.
  - Prerequisite: Update app.json file with dependency on Recommended Apps per-tenant extension.
  - Use Recommended Apps codeunit methods to insert, get, update, delete apps and refresh app logos.
  - Step: Deploy collection to customer tenants to display Recommended Apps page with install links.
  - In the observatory: [Codeunit 4750 "Recommended Apps"](../../../objects/codeunit/4750.md), [Table 4750 "Recommended Apps"](../../../objects/table/4750.md)
- [Teaching tips and in-app tours for onboarding users](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-teaching-tips-tours): Learn about the teaching tips that you can apply to your Business Central to help users get started.
  - Teaching tips are defined using AboutTitle and AboutText AL properties at page level or control level
  - Page teaching tip answers what page is about and what user can do, titles typically use plural form for lists
  - Tours are sequential teaching tips guiding users around page and showing where to find things
  - Control teaching tips point to input fields or actions, explaining meaning or timing rather than instructing steps
  - Teaching tips support rich text formatting including bold for page names and keyboard shortcuts
  - FactBox teaching tips supported on all page types in factboxes; hosting page must have page teaching tip
  - Report request pages can have teaching tips using AboutTitle and AboutText properties
  - Limit: Cannot add teaching tips to actions or control add-ins in factboxes
- [Trials and sign-ups for Business Central online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/customer-signup): Learn how to let prospects try out a Business Central trial, and how you can configure and extend their trial experience.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Why Onboarding Experiences are Important](../../../videos/3uVf6BEXt1w.md) (video): "Customer self-service onboarding; Template-based setup approach; Partner-knowledge apps"
- [What's New: Creating Customer Centric Onboarding Experiences (2023 release wave 2)](../../../videos/NwMLT-k6J6Q.md) (video): "onboarding; customer journey; personalization; trial experience; questionnaire"
- [Overview of Customer and Partner Onboarding Journeys](../../../videos/XNfgf7tCeaw.md) (video): "customer onboarding; partner-led experience; trial setup; prospect profiling"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4750 "Recommended Apps List"](../../../objects/page/4750.md) · captioned "Recommended Apps" · on [Table 4750 "Recommended Apps"](../../../objects/table/4750.md)
- [Page 4751 "Recommended App Card"](../../../objects/page/4751.md) · on [Table 4750 "Recommended Apps"](../../../objects/table/4750.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
