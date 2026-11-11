---
id: topic/business-central/business-functionality/set-up-business-central/set-up-email
type: topic
title: Set up email
summary: "Email setup in Business Central: configuring email accounts and connectors (Microsoft 365, Current User, SMTP) to send documents, reports and notifications, plus SMTP with OAuth 2.0 in multitenant setups and the Outlook add-in. It answers questions about connectors, sender addresses, scenarios, and Outlook integration."
tier: official
language: en
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-11T00:59:22.225Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 54cff84be9d2a100d3288c6dd3c553744b5ff1af740b9ced591e0d152c8ea5b5
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-outlook
    title: Get the Business Central Add-in for Outlook
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-outlook-optimize
    title: Optimize Outlook for Your Business Inbox
    date: "2026-11-09"
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
    url: https://learn.microsoft.com/dynamics365/business-central/work-outlook-addin
    title: Use Business Central in Microsoft Outlook
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-no-outlook
    title: Use Business Central Without Outlook
    date: "2026-11-09"
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/admin-how-setup-email
    - https://learn.microsoft.com/dynamics365/business-central/admin-multi-tenant-smtp
  objects:
    - object/page/1262
    - object/page/1263
    - object/page/1831
    - object/page/1832
    - object/page/8893
    - object/page/8897
    - object/page/8898
    - object/page/9813
    - object/page/9814
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
  code: 9
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

> Email setup in Business Central: configuring email accounts and connectors (Microsoft 365, Current User, SMTP) to send documents, reports and notifications, plus SMTP with OAuth 2.0 in multitenant setups and the Outlook add-in. It answers questions about connectors, sender addresses, scenarios, and Outlook integration.

Path: [Business functionality](../../business-functionality.md) > [Set up Business Central](../set-up-business-central.md) > Set up email · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how to get Business Central sending email. The main page, "Set up email in Business Central", covers requirements, the three email connectors (Microsoft 365, Current User and SMTP), email scenarios, sender addresses, view policies, rate limiting and on-premises configuration. Start there to choose a connector and set up an account.

A second page covers a specific case: using SMTP in a multitenant environment. It describes sending through the SMTP connector with the OAuth 2.0 client credentials flow against Exchange Online in cross-tenant scenarios, including app registration, client secret, service principal and mailbox permissions. It is listed under 2025 release wave 2.

The subtopic "Set up your business inbox in Microsoft Outlook" is about the other direction: the Business Central add-in for Outlook. It covers getting and deploying the add-in, preparing Outlook, supported Outlook and browser requirements, contact insights, creating documents from email, and setting up email without Outlook.

## Key points

- Supported email connectors: Microsoft 365, Current User and SMTP.
- The main setup page covers requirements, email scenarios, sender addresses, view policies, rate limiting and on-premises configuration.
- Email is used to send documents, reports and notifications from Business Central.
- SMTP in a multitenant environment uses OAuth 2.0 client credentials flow with Exchange Online for cross-tenant email.
- The multitenant SMTP setup needs an app registration, a client secret, a service principal and mailbox permissions.
- The multitenant SMTP page is tied to 2025 release wave 2.
- The Outlook add-in subtopic covers deployment, Outlook and browser requirements, contact insights and creating documents from email.
- The Outlook subtopic also explains how to set up email without Outlook.

## Subtopics

- [Set up your business inbox in Microsoft Outlook](set-up-email/set-up-your-business-inbox-in-microsoft.md) (4 pages)

## More Learn pages

- [Set up email in Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-how-setup-email): Describes how to connect email accounts to Business Central so that you can send outbound messages without having to open another app.
- [Use SMTP for email in a multitenant environment](https://learn.microsoft.com/dynamics365/business-central/admin-multi-tenant-smtp): Learn how to resolve SMTP email challenges in multitenant environments. Follow this guide to configure OAuth 2.0 authentication in Microsoft 365.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1262 "Certificate List"](../../../../objects/page/1262.md) · captioned "Certificates" · on [Table 1262 "Isolated Certificate"](../../../../objects/table/1262.md)
- [Page 1263 "Certificate"](../../../../objects/page/1263.md) · on [Table 1262 "Isolated Certificate"](../../../../objects/table/1262.md)
- [Page 8893 "Email Scenario Setup"](../../../../objects/page/8893.md) · captioned "Email Scenario Assignment" · on [Table 8907 "Email Account Scenario"](../../../../objects/table/8907.md)
- [Page 8897 "Email Scenario Attach Setup"](../../../../objects/page/8897.md) · captioned "Email Scenario Attachments" · on [Table 8913 "Email Attachments"](../../../../objects/table/8913.md)
- [Page 8898 "Email Rate Limit Wizard"](../../../../objects/page/8898.md) · captioned "Set Email Rate Limit per Minute" · on [Table 8912 "Email Rate Limit"](../../../../objects/table/8912.md)
- [Page 9813 "Devices"](../../../../objects/page/9813.md)
- [Page 9814 "Device Card"](../../../../objects/page/9814.md)
- [Page 1831 "Outlook Centralized Deployment"](../../../../objects/page/1831.md) · captioned "Outlook Add-in Centralized Deployment" · on [Table 1610 "Office Add-in"](../../../../objects/table/1610.md) · via [Set up your business inbox in Microsoft Outlook](set-up-email/set-up-your-business-inbox-in-microsoft.md)
- [Page 1832 "Outlook Individual Deployment"](../../../../objects/page/1832.md) · captioned "Get the Outlook Add-in" · via [Set up your business inbox in Microsoft Outlook](set-up-email/set-up-your-business-inbox-in-microsoft.md)

Learn also names 1 object with no object page: page/1805.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
