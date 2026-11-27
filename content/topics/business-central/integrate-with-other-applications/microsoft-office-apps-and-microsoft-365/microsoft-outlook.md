---
id: topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365/microsoft-outlook
type: topic
title: Microsoft Outlook
summary: "Microsoft Outlook integration with Business Central: getting the Outlook add-in, saving Business Central contacts to Outlook and Microsoft 365 with synchronization, and setting up email when Outlook is not used. It answers questions about deployment, contact sync options, and email setup."
tier: official
language: en
system: crm
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-27T01:05:12.074Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a121955325658c7f390b2ed001db6ed825dd6c31c0d8b85e2ceeae585fa4b8ab
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
    date: "2026-11-25"
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

> Microsoft Outlook integration with Business Central: getting the Outlook add-in, saving Business Central contacts to Outlook and Microsoft 365 with synchronization, and setting up email when Outlook is not used. It answers questions about deployment, contact sync options, and email setup.

Path: [Integrate with other applications](../../integrate-with-other-applications.md) > [Microsoft Office apps and Microsoft 365](../microsoft-office-apps-and-microsoft-365.md) > Microsoft Outlook · tier official · system crm · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers three ways Business Central works with email and Outlook. The Outlook add-in shows customer and vendor financial data and lets users create business documents from within Outlook. Admins can deploy it organization-wide through centralized deployment, or users can install it themselves.

Contact synchronization saves Business Central contacts to Microsoft 365, so they appear in Outlook and Teams. It supports filtering, choosing a contacts folder, full and delta synchronization, and optional two-way synchronization.

For organizations that do not use Outlook, the Set Up Email assisted setup guide configures email through an email connector, including SMTP accounts. Start with the add-in page if you use Outlook, or the email setup page if you do not.

## Key points

- The Outlook add-in shows contact insights, including customer and vendor financial data, in Outlook.
- The add-in lets users view documents and create business documents directly from Outlook, with email-based document linking.
- Admins can deploy the add-in organization-wide with centralized deployment. Users can also install it individually with an XML manifest.
- Contact synchronization saves Business Central contacts to Microsoft 365 for use in Outlook and Teams.
- The Synchronize with Outlook action supports contact filtering and contacts folder selection.
- Synchronization can be full or delta. Two-way synchronization is optional. The page lists 2026 release wave 1 (v28).
- Without Outlook, the Set Up Email assisted setup guide configures email through an email connector.
- SMTP accounts are among the supported email connector options.

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
