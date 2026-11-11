---
id: topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365/microsoft-onedrive
type: topic
title: Microsoft OneDrive
summary: "Microsoft OneDrive integration in Business Central: how users open, share, and edit files in OneDrive for Business, and how administrators set it up, govern it, and configure it on-premises. Answers questions about actions, setup, privacy, and FAQs."
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
  input_hash: 3b91b5a791719e63ffe06f6d5b55d608e24776106959bb3e68e07b481766875e
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-onedrive-overview
    title: Business Central and OneDrive for Business Integration
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-onedrive-integration-onpremises
    title: Configure OneDrive for Business Central On-Premises
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-onedrive-integration
    title: Manage OneDrive Integration with Business Central
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-onedrive-faq
    title: OneDrive in Business Central FAQ
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-share-onedrive
    title: Open and Share Business Central Files in OneDrive
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/across-onedrive-overview
    - https://learn.microsoft.com/dynamics365/business-central/admin-onedrive-integration-onpremises
    - https://learn.microsoft.com/dynamics365/business-central/admin-onedrive-integration
    - https://learn.microsoft.com/dynamics365/business-central/admin-onedrive-faq
    - https://learn.microsoft.com/dynamics365/business-central/across-share-onedrive
  objects:
    - object/page/9553
  features: []
  topics:
    - topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Integrate with other applications
  - Microsoft Office apps and Microsoft 365
  - Microsoft OneDrive
toc_file: business-central/TOC.md
parent: topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365
children: []
coverage:
  learn: 5
  code: 1
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 9553
member_hash: 7e113f4fda3d255c2a6199f7a572d8f5d699cb20e679f9488ff321660681f8c0
narrative: generated
---

# Microsoft OneDrive

> Microsoft OneDrive integration in Business Central: how users open, share, and edit files in OneDrive for Business, and how administrators set it up, govern it, and configure it on-premises. Answers questions about actions, setup, privacy, and FAQs.

Path: [Integrate with other applications](../../integrate-with-other-applications.md) > [Microsoft Office apps and Microsoft 365](../microsoft-office-apps-and-microsoft-365.md) > Microsoft OneDrive · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

OneDrive for Business integration lets Business Central users store files in the cloud, share them, and work on them in Microsoft 365 apps such as Word, Excel, and PowerPoint. Administrators can also have Excel workbooks and report files saved to OneDrive automatically.

The pages split by audience. The overview page introduces the integration and its actions. One page covers what users do: Open in OneDrive and Share, including send link, copy link, version history, and access control. The management page covers setup through the OneDrive Setup assisted setup guide, privacy notices, user access, data residency, and disaster recovery. A separate page covers on-premises configuration with a Microsoft Entra app registration. The FAQ handles client support, differences from SharePoint, plan availability, and troubleshooting.

Start with the integration overview, then go to the management page for online setup or the on-premises page for self-hosted deployments. Users who only want to share files can go straight to the open and share page.

## Key points

- Main actions: Open in OneDrive, Share, Open in Excel, Edit in Excel, and Save report to file.
- The OneDrive Setup assisted setup guide configures the integration for online environments.
- Open and share copies files to OneDrive for editing in online Excel, Word, and PowerPoint, and sharing with specific people or via links.
- Sharing supports send link, copy link, file version history, and access control.
- On-premises setup needs a Microsoft Entra app registration, SharePoint permissions, a OneDrive URL connection, and a connection test.
- On-premises procedures differ for version 21 and later versus versions 19-20.
- Administrators manage privacy notices, user access, data residency compliance, and disaster recovery.
- The FAQ covers client support, SharePoint differences, plan availability, deployment scenarios, and troubleshooting.

## Learn pages

- [Business Central and OneDrive for Business Integration](https://learn.microsoft.com/dynamics365/business-central/across-onedrive-overview): Learn how OneDrive integration in Business Central helps you open, manage, and share reports, Excel workbooks, and files attached to business records.
- [Configure OneDrive for Business Central On-Premises](https://learn.microsoft.com/dynamics365/business-central/admin-onedrive-integration-onpremises): Learn about how to set up Business Central on-premises to integrate with OneDrive for work or school (formerly known as OneDrive for Business).
- [Manage OneDrive Integration with Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-onedrive-integration): Configure OneDrive integration for a Business Central environment, control file handling features, and manage privacy and sharing for your users.
- [OneDrive in Business Central FAQ](https://learn.microsoft.com/dynamics365/business-central/admin-onedrive-faq): Get answers for some typical questions about working with OneDrive for work or school (formerly known as OneDrive for Business) and Business Central.
- [Open and Share Business Central Files in OneDrive](https://learn.microsoft.com/dynamics365/business-central/across-share-onedrive): Learn how to open and share Business Central reports and attachments in OneDrive, manage existing copies, and find your company's files in cloud storage.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 9553 "Document Service Setup"](../../../../objects/page/9553.md) · captioned "OneDrive Setup"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
