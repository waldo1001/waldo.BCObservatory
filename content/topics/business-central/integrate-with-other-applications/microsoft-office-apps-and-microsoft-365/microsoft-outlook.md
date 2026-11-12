---
id: topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365/microsoft-outlook
type: topic
title: Microsoft Outlook
summary: "Microsoft Outlook integration with Business Central: the Outlook add-in (contact insights, document view, document creation), saving Business Central contacts to Outlook and Teams, and setting up email without Outlook. Answers questions on deploying the add-in, syncing contacts, and configuring email connectors."
tier: official
language: en
system: crm
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-12T00:57:40.556Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 012ca3a4f937e8b63f66d39b479347fc1fbf2e499bb69d7fa91b2b6841f3d9fd
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-outlook
    title: Get the Business Central Add-in for Outlook
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/save-business-contacts-to-outlook
    title: Save Business Contacts to Microsoft Outlook
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
    - https://learn.microsoft.com/dynamics365/business-central/save-business-contacts-to-outlook
    - https://learn.microsoft.com/dynamics365/business-central/admin-no-outlook
  objects:
    - object/page/1831
    - object/page/1832
  features: []
  topics:
    - topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365
  localizations: []
  videos:
    - video/_OClSlushOU
  posts: []
  guidelines: []
learn_toc_path:
  - Integrate with other applications
  - Microsoft Office apps and Microsoft 365
  - Microsoft Outlook
toc_file: business-central/TOC.md
parent: topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365
children: []
coverage:
  learn: 3
  code: 2
  video: 1
  blog: 0
  guideline: 0
bc_forms:
  - 1831
  - 1832
member_hash: 4f33de503b9324bf4253d3b1366a54a04c03ef18cbd30af4df200a14ba7bfd20
narrative: generated
---

# Microsoft Outlook

> Microsoft Outlook integration with Business Central: the Outlook add-in (contact insights, document view, document creation), saving Business Central contacts to Outlook and Teams, and setting up email without Outlook. Answers questions on deploying the add-in, syncing contacts, and configuring email connectors.

Path: [Integrate with other applications](../../integrate-with-other-applications.md) > [Microsoft Office apps and Microsoft 365](../microsoft-office-apps-and-microsoft-365.md) > Microsoft Outlook · tier official · system crm · narrative **unreviewed** (model text not yet checked)

## Overview

This area covers how Business Central works with Outlook and what to do when Outlook is not used. The add-in lets users see customer and vendor financial data and create business documents from within Outlook. Admins can deploy it to the whole organization through centralized deployment, or users can install it themselves with an XML manifest.

A separate page covers saving Business Central contacts to Outlook and Teams. You use the Synchronize with Outlook action to sync a filtered list of contacts to a Microsoft 365 account, pick an Outlook folder, and run a full or forced full sync. The page is tied to 2026 release wave 1 (version 28).

For organizations that do not use Outlook, the Set Up Email assisted setup guide configures email with a connector such as SMTP. Start with the add-in page for Outlook-based work, or the no-Outlook page for email setup.

## Key points

- The Outlook add-in shows customer and vendor financial data (contact insights) and a document view inside Outlook.
- Users can create business documents from Outlook and link them to emails.
- Admins can deploy the add-in organization-wide via centralized deployment; individuals can install it using an XML manifest.
- The Synchronize with Outlook action syncs a filtered list of contacts to a Microsoft 365 account for use in Outlook and Teams.
- Contact sync supports choosing an Outlook folder, full synchronization, force full sync, and two-way synchronization.
- The contact sync page references 2026 release wave 1 (version 28).
- Without Outlook, the Set Up Email assisted setup guide configures email using connectors, including SMTP accounts.

## Learn pages

- [Get the Business Central Add-in for Outlook](https://learn.microsoft.com/dynamics365/business-central/admin-outlook): Learn how to download and install the Business Central add-in for Outlook for your own use, or deploy it to users and groups in your organization.
- [Save Business Contacts to Microsoft Outlook](https://learn.microsoft.com/dynamics365/business-central/save-business-contacts-to-outlook): Learn how to synchronize Business Central contacts with Microsoft Outlook and Teams to streamline communication and access contact details effortlessly.
- [Use Business Central Without Outlook](https://learn.microsoft.com/dynamics365/business-central/admin-no-outlook): If you don't have Outlook, you can't use Business Central as your business inbox in Outlook, but you can work in a browser or on your mobile device.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Work Seamlessly with Microsoft Outlook, Excel, and Teams](../../../../videos/_OClSlushOU.md) (video): "Business Central in Outlook"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1831 "Outlook Centralized Deployment"](../../../../objects/page/1831.md) · captioned "Outlook Add-in Centralized Deployment" · on [Table 1610 "Office Add-in"](../../../../objects/table/1610.md)
- [Page 1832 "Outlook Individual Deployment"](../../../../objects/page/1832.md) · captioned "Get the Outlook Add-in"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
