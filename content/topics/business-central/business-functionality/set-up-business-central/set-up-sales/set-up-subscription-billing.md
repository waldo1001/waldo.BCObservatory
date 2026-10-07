---
id: topic/business-central/business-functionality/set-up-business-central/set-up-sales/set-up-subscription-billing
type: topic
title: Set up subscription billing
summary: "Subscription billing setup in Business Central: general contract defaults, contract types, subscription packages and lines, item subscription options, importing contracts, job queue automation, and permission sets. It answers questions on configuring recurring billing before use."
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:13.090Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a80ee993c9ea7e74722d0be5922adb9e2b7e523f703314ca4037eeaf5a16f50c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/setup/general
    title: General setup
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/setup/import
    title: Import subscription contracts and contract lines
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/setup/job-queue
    title: Job queue
    date: "2025-05-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/setup/permissions
    title: Permissions in subscription billing
    date: "2025-05-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/setup/contract-types
    title: Subscription contract types
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/masterdata/items
    title: Subscription lines for items
    date: "2026-05-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/masterdata/service-commitments
    title: Subscription packages and subscription lines
    date: "2026-02-06"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/SRB/setup/general
    - https://learn.microsoft.com/dynamics365/business-central/SRB/setup/import
    - https://learn.microsoft.com/dynamics365/business-central/SRB/setup/job-queue
    - https://learn.microsoft.com/dynamics365/business-central/SRB/setup/permissions
    - https://learn.microsoft.com/dynamics365/business-central/SRB/setup/contract-types
    - https://learn.microsoft.com/dynamics365/business-central/SRB/masterdata/items
    - https://learn.microsoft.com/dynamics365/business-central/SRB/masterdata/service-commitments
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/set-up-business-central/set-up-sales
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Set up Business Central
  - Set up sales
  - Set up subscription billing
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/set-up-business-central/set-up-sales
children: []
coverage:
  learn: 7
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 8008
  - 8009
  - 8013
  - 8051
  - 8054
  - 8059
  - 8061
member_hash: 6ff638ebedbbc6e6e61072b649efcf33cec78a4293f9a5bbd0e1d88645fe14ab
narrative: generated
---

# Set up subscription billing

> Subscription billing setup in Business Central: general contract defaults, contract types, subscription packages and lines, item subscription options, importing contracts, job queue automation, and permission sets. It answers questions on configuring recurring billing before use.

Path: [Business functionality](../../../business-functionality.md) > [Set up Business Central](../../set-up-business-central.md) > [Set up sales](../set-up-sales.md) > Set up subscription billing · tier official · system sales · narrative reviewed by Opus

## Overview

This section covers the setup steps needed to run subscription billing for customer and vendor contracts. It starts with general setup, where the Subscription Contract Setup page holds defaults such as number series, invoice details, dimensions and posting groups, and then moves to the building blocks of an offering: contract types, subscription packages with subscription lines, and item settings that decide whether sales documents create subscription lines.
Supporting pages cover importing existing contracts through configuration packages, scheduling recurring tasks with the job queue, and assigning access through four permission sets.

A sensible order is general setup first, then contract types, packages and lines, and item subscription options. Import, job queue and permissions can follow as needed.

## Key points

- Subscription Contract Setup page holds defaults: number series, invoice details, dimensions, posting groups, Overdue Date Formula, Default Period Calculation, Default Billing Base Period and Default Billing Rhythm.
- General setup also includes a Service Start Date setting for warehouse picking.
- Subscription contract types organize customer and vendor contracts and support harmonized billing, contract deferrals, multi-currency, translations and usage data billing.
- Subscription packages group subscription lines with terms, pricing, price group assignment, billing rhythm, initial and subsequent term, and notice period; line templates can be used.
- The item Subscription Option field offers Sales with Subscription, Subscription Item and Invoicing Item to control automatic creation of subscription lines in sales documents.
- Import contracts, subscriptions and subscription lines with configuration packages, using the Create Customer Subscription Contracts, Create Subscriptions and Create Subscription Lines actions.
- Job queue codeunit 8058 can automatically update subscription contract termination dates.
- Four permission sets (SUB. BILLING ALL, ADMIN, BASIC and USER) control access to contracts, packages and billing, at levels from read-only to administrative.

## Learn pages

- [General setup](https://learn.microsoft.com/dynamics365/business-central/SRB/setup/general): There are a few general things to set up for subscription billing.
- [Import subscription contracts and contract lines](https://learn.microsoft.com/dynamics365/business-central/SRB/setup/import): You can use import contracts and contract lines in subscription billing.
- [Job queue](https://learn.microsoft.com/dynamics365/business-central/SRB/setup/job-queue): You can use job queue entries in subscription billing.
- [Permissions in subscription billing](https://learn.microsoft.com/dynamics365/business-central/SRB/setup/permissions): Learn about the permission settings for subscription billing.
- [Subscription contract types](https://learn.microsoft.com/dynamics365/business-central/SRB/setup/contract-types): You can use different types of contracts in subscription billing.
- [Subscription lines for items](https://learn.microsoft.com/dynamics365/business-central/SRB/masterdata/items): You can use subscription lines for items in subscription billing.
- [Subscription packages and subscription lines](https://learn.microsoft.com/dynamics365/business-central/SRB/masterdata/service-commitments): You can use subscription lines in subscription billing.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 8008, 8009, 8013, 8051, 8054, 8059, 8061.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
