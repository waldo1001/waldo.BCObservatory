---
id: topic/business-central/business-functionality/set-up-business-central/set-up-email/set-up-your-business-inbox-in-microsoft
type: topic
title: Set up your business inbox in Microsoft Outlook
summary: "Business inbox in Outlook covers the Business Central add-in for Outlook: how to get it, how to optimize Outlook for it, how to use it, and how to work with Business Central email without Outlook. It answers deployment, requirement and usage questions."
tier: official
language: en
system: crm
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:55.177Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d1080e1c1d2663d5dbce8613209b4ae0bdd052cf3cf98983cbf782572f884a3e
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

> Business inbox in Outlook covers the Business Central add-in for Outlook: how to get it, how to optimize Outlook for it, how to use it, and how to work with Business Central email without Outlook. It answers deployment, requirement and usage questions.

Path: [Business functionality](../../../business-functionality.md) > [Set up Business Central](../../set-up-business-central.md) > [Set up email](../set-up-email.md) > Set up your business inbox in Microsoft Outlook · tier official · system crm · narrative reviewed by Opus

## Overview

This section is about using Business Central from inside Microsoft Outlook. The Business Central add-in for Outlook provides contact insights and document view capabilities in emails and calendar appointments. It also lets users create business documents such as sales quotes and handle purchase invoices, with file attachment support and incoming document tracking.

The pages follow a practical order. "Get the Business Central Add-in for Outlook" explains the two ways to deploy it: centralized deployment by Microsoft 365 admins, or individual installation by users. "Optimize Outlook for your Business Inbox" lists recommendations for a good experience, such as updating Outlook and installing Microsoft Edge WebView2. "Using Business Central with Outlook" describes what users can do once it is running. "Using Business Central without Outlook" covers the alternative: setting up email sending through an assisted setup guide or with mail server information.

Admins planning a rollout should start with the deployment page, then the optimization page. Users installing the add-in themselves also need the deployment page before the usage page. Anyone not using Outlook should read the last page.

## Key points

- Core capabilities: contact insights and document view, available in Outlook emails and calendar appointments.
- Deployment options: centralized deployment by Microsoft 365 admins, or manual installation by individual users.
- Optimization: update Outlook to version 2012 or newer and install Microsoft Edge WebView2.
- Users can create business documents such as sales quotes and handle purchase invoices from Outlook.
- Email attachments and incoming document tracking are supported.
- The usage page refers to 2022 release wave 1, so check it for behavior tied to that version.
- Without Outlook, email sending can be set up with an assisted setup guide or technical mail server information.

## Learn pages

- [Get the Business Central Add-in for Outlook](https://learn.microsoft.com/dynamics365/business-central/admin-outlook): Learn how to install the Business Central add-in for Outlook for your organization or for your own use.
- [Optimize Outlook for your Business Inbox](https://learn.microsoft.com/dynamics365/business-central/admin-outlook-optimize): Learn about things you can do to improve experience with the Business Inbox in Microsoft Outlook.
- [Using Business Central with Outlook](https://learn.microsoft.com/dynamics365/business-central/work-outlook-addin): This service has deep integration with Microsoft 365 enabling you to manage all your business interactions and mail with customers and vendors directly in Outlook.
- [Using Business Central without Outlook](https://learn.microsoft.com/dynamics365/business-central/admin-no-outlook): If you don't have Outlook, you can't use Business Central as your business inbox in Outlook, but you can work in a browser or on your mobile device.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11995 OfficeMgt.IsAvailable check added to fix flaky tests](../../../../../changes/bcapps/11995.md) (code change): "The Outlook Mail Engine now checks if Office Management is available before reinitializing"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1831 "Outlook Centralized Deployment"](../../../../../objects/page/1831.md) · captioned "Outlook Add-in Centralized Deployment" · on [Table 1610 "Office Add-in"](../../../../../objects/table/1610.md)
- [Page 1832 "Outlook Individual Deployment"](../../../../../objects/page/1832.md) · captioned "Get the Outlook Add-in"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
