---
id: topic/business-central/business-functionality/set-up-business-central/set-up-email/set-up-your-business-inbox-in-microsoft
type: topic
title: Set up your business inbox in Microsoft Outlook
summary: "The Business Central add-in for Outlook: how to get it, how to prepare Outlook for it, how to use it, and how to set up email without Outlook. It answers questions about deployment, supported Outlook and browser requirements, contact insights, and creating documents from email."
tier: official
language: en
system: crm
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
  input_hash: 29d480a6e3ae7991c4961be430c647481e838efaedbb515889ec1c76b8bfe972
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/admin-outlook
    - https://learn.microsoft.com/dynamics365/business-central/admin-outlook-optimize
    - https://learn.microsoft.com/dynamics365/business-central/work-outlook-addin
    - https://learn.microsoft.com/dynamics365/business-central/admin-no-outlook
  objects:
    - object/page/1831
    - object/page/1832
  features: []
  topics:
    - topic/business-central/business-functionality/set-up-business-central/set-up-email
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/11995
learn_toc_path:
  - Business functionality
  - Set up Business Central
  - Set up email
  - Set up your business inbox in Microsoft Outlook
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/set-up-business-central/set-up-email
children: []
coverage:
  learn: 4
  code: 2
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 1831
  - 1832
member_hash: 43a136b00b9470e9c75c843fec74cf5b901f10dd6fb9f464a3887a986cb64b6a
narrative: generated
---

# Set up your business inbox in Microsoft Outlook

> The Business Central add-in for Outlook: how to get it, how to prepare Outlook for it, how to use it, and how to set up email without Outlook. It answers questions about deployment, supported Outlook and browser requirements, contact insights, and creating documents from email.

Path: [Business functionality](../../../business-functionality.md) > [Set up Business Central](../../set-up-business-central.md) > [Set up email](../set-up-email.md) > Set up your business inbox in Microsoft Outlook · tier official · system crm · narrative **unreviewed** (model text not yet checked)

## Overview

The Business Central add-in for Outlook lets users work with Business Central data from their business inbox. They can view customer and vendor information, create and send documents such as quotes and invoices, track incoming documents, and attach files to records, all without leaving Outlook.

The pages follow a natural order. Start with getting the add-in: admins can deploy it organization-wide through centralized deployment, or users can install it individually from an XML manifest. Next, check the Outlook requirements: a supported Outlook version, the Microsoft Edge WebView2 Runtime on Windows, and a supported browser. Then the usage page covers what users can do in the add-in.

If your organization does not use Outlook, a separate page explains how to set up email with the Set Up Email assisted setup guide and an email connector, including SMTP accounts.

## Key points

- The add-in provides contact insights (customer and vendor financial data) and a document view inside Outlook.
- Admins can deploy the add-in to the whole organization using centralized deployment.
- Individual users can install the add-in with an XML manifest.
- Users can create business documents such as sales quotes and handle purchase invoices from an email.
- Incoming documents can be tracked and files attached to records from Outlook.
- On Windows, Outlook needs a supported version and the Microsoft Edge WebView2 Runtime installed.
- Outlook for the web and a supported browser are part of the recommended setup.
- Without Outlook, use the Set Up Email assisted setup guide with an email connector, such as SMTP.

## Learn pages

- [Get the Business Central Add-in for Outlook](https://learn.microsoft.com/dynamics365/business-central/admin-outlook): Learn how to download and install the Business Central add-in for Outlook for your own use, or deploy it to users and groups in your organization.
- [Optimize Outlook for Your Business Inbox](https://learn.microsoft.com/dynamics365/business-central/admin-outlook-optimize): Learn how Outlook updates, Microsoft Edge WebView2, and supported browsers can help improve your Business Central add-in experience in Outlook.
- [Use Business Central in Microsoft Outlook](https://learn.microsoft.com/dynamics365/business-central/work-outlook-addin): Use the Business Central add-in for Outlook to view customer and vendor details, create and email business documents, and attach files to records.
- [Use Business Central Without Outlook](https://learn.microsoft.com/dynamics365/business-central/admin-no-outlook): If you don't have Outlook, you can't use Business Central as your business inbox in Outlook, but you can work in a browser or on your mobile device.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11995 OfficeMgt.IsAvailable check added to fix flaky tests](../../../../../changes/bcapps/11995.md) (code change): "The Outlook Mail Engine now checks if Office Management is available before reinitializing"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1831 "Outlook Centralized Deployment"](../../../../../objects/page/1831.md) · captioned "Outlook Add-in Centralized Deployment" · on [Table 1610 "Office Add-in"](../../../../../objects/table/1610.md)
- [Page 1832 "Outlook Individual Deployment"](../../../../../objects/page/1832.md) · captioned "Get the Outlook Add-in"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
