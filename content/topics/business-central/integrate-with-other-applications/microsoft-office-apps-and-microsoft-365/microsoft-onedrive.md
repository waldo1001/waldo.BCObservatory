---
id: topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365/microsoft-onedrive
type: topic
title: Microsoft OneDrive
summary: "Microsoft OneDrive integration with Business Central: setup, administration, on-premises configuration, user actions for opening and sharing files, and FAQ. It answers questions about enabling OneDrive features, saving Excel and report files to OneDrive, and managing privacy and access."
tier: official
language: en
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T01:01:32.224Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 854341710bebcc9fd350fe16010b3d7f4399c911529f64de16584d4d2d7cf3ee
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

> Microsoft OneDrive integration with Business Central: setup, administration, on-premises configuration, user actions for opening and sharing files, and FAQ. It answers questions about enabling OneDrive features, saving Excel and report files to OneDrive, and managing privacy and access.

Path: [Integrate with other applications](../../integrate-with-other-applications.md) > [Microsoft Office apps and Microsoft 365](../microsoft-office-apps-and-microsoft-365.md) > Microsoft OneDrive · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

Business Central integrates with OneDrive for Business so users can store files in the cloud, share them, and work on them with Microsoft 365 apps such as Word, Excel, and PowerPoint. Administrators can set this up so Excel workbooks and report files are saved to OneDrive automatically.

The pages split by audience. The integration overview and the FAQ explain what the integration does and which deployments are supported. The management page covers configuration, privacy, governance, and disaster recovery, including data residency. The on-premises page describes registering a Microsoft Entra app and connecting to OneDrive, with different steps for version 21 and later versus versions 19-20. The open and share page is for end users.

Start with the overview to see the available actions, then use the management or on-premises page to configure the environment. Send end users to the open and share page.

## Key points

- Main user actions are Open in OneDrive, Share, Open in Excel, Edit in Excel, and Save report to file.
- The OneDrive Setup assisted setup guide configures the integration.
- Administrators can have Excel workbooks and report files saved to OneDrive automatically.
- On-premises setup requires registering a Microsoft Entra app, configuring SharePoint permissions, entering the OneDrive URL, and testing the connection.
- On-premises procedures differ for version 21 and later versus versions 19-20.
- Sharing supports sending a link or copying a link to specific people, with access control and file version history.
- Administration covers privacy notices, user access control, data residency compliance, and disaster recovery.
- The FAQ covers supported deployments, features, and troubleshooting.

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
