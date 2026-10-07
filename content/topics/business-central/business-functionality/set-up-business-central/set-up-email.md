---
id: topic/business-central/business-functionality/set-up-business-central/set-up-email
type: topic
title: Set up email
summary: "Email setup in Business Central: configuring email accounts and connectors (Microsoft 365, Current User, SMTP), email scenarios and sender addresses, SMTP with OAuth 2.0 in multitenant setups, and the Outlook business inbox add-in. It answers configuration, requirement and deployment questions."
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:59.580Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: dad7b7f1b78a87f44f6be4a00896d738ef7647876af4bda871f114c686278f4c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-outlook
    title: Get the Business Central Add-in for Outlook
    date: "2026-03-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-outlook-optimize
    title: Optimize Outlook for your Business Inbox
    date: "2023-12-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-how-setup-email
    title: Set up email in Business Central
    date: "2026-03-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-multi-tenant-smtp
    title: Use SMTP for email in a multitenant environment
    date: "2026-03-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/work-outlook-addin
    title: Using Business Central with Outlook
    date: "2026-03-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-no-outlook
    title: Using Business Central without Outlook
    date: "2023-12-11"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/admin-how-setup-email
    - https://learn.microsoft.com/dynamics365/business-central/admin-multi-tenant-smtp
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/set-up-business-central
    - topic/business-central/business-functionality/set-up-business-central/set-up-email/set-up-your-business-inbox-in-microsoft
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Set up Business Central
  - Set up email
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/set-up-business-central
children:
  - topic/business-central/business-functionality/set-up-business-central/set-up-email/set-up-your-business-inbox-in-microsoft
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 1262
  - 1263
  - 1805
  - 1831
  - 1832
  - 8893
  - 8897
  - 8898
  - 9813
  - 9814
member_hash: 2cdd967b1fe762b4ca8e41c21e837570ca370da39e82a8afd7f6117eb56db9b2
narrative: generated
---

# Set up email

> Email setup in Business Central: configuring email accounts and connectors (Microsoft 365, Current User, SMTP), email scenarios and sender addresses, SMTP with OAuth 2.0 in multitenant setups, and the Outlook business inbox add-in. It answers configuration, requirement and deployment questions.

Path: [Business functionality](../../business-functionality.md) > [Set up Business Central](../set-up-business-central.md) > Set up email · tier official · system none · narrative reviewed by Opus

## Overview

This section explains how to let Business Central send documents, reports and notifications by email. The main page, "Set up email in Business Central", covers email accounts, the available connectors, requirements, email scenarios, sender addresses and on-premises configuration.

A second page deals with a specific case: sending email through the SMTP connector in a multitenant environment, using OAuth 2.0 client credentials flow with Exchange Online across tenants. It involves an app registration, a client secret, mailbox permissions and a service principal.

The subtopic on the business inbox in Outlook covers the Business Central add-in for Outlook: how to get it, how to optimize Outlook for it, how to use it, and how to work with Business Central email without Outlook. Start with the main setup page, then go to the multitenant SMTP page or the Outlook subtopic as needed.

## Key points

- Three email connectors are covered: Microsoft 365, Current User and SMTP.
- The main setup page covers requirements, email scenarios, sender addresses, view policies, rate limiting and on-premises configuration.
- Multitenant SMTP uses the SMTP connector with OAuth 2.0 client credentials flow against Exchange Online for cross-tenant email.
- The multitenant SMTP setup needs an app registration, a client secret, mailbox permissions and a service principal.
- The multitenant SMTP page is tied to 2025 release wave 2.
- The Outlook subtopic (4 pages) covers getting the add-in, optimizing Outlook, using it, and using Business Central email without Outlook.

## Subtopics

- [Set up your business inbox in Microsoft Outlook](set-up-email/set-up-your-business-inbox-in-microsoft.md) (4 pages)

## More Learn pages

- [Set up email in Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-how-setup-email): Describes how to connect email accounts to Business Central so that you can send outbound messages without having to open another app.
- [Use SMTP for email in a multitenant environment](https://learn.microsoft.com/dynamics365/business-central/admin-multi-tenant-smtp): Learn how to resolve SMTP email challenges in multitenant environments. Follow this guide to configure OAuth 2.0 authentication in Microsoft 365.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 1262, 1263, 1805, 1831, 1832, 8893, 8897, 8898, 9813, 9814.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
