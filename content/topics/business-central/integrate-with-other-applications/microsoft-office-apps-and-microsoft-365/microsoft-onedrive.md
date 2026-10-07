---
id: topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365/microsoft-onedrive
type: topic
title: Microsoft OneDrive
summary: "Microsoft OneDrive integration in Business Central: opening and sharing files in OneDrive for Business, saving Excel workbooks and report files, and admin setup for online and on-premises deployments. It answers how-to, configuration and FAQ questions."
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:44.894Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 038da04a5cd3e7ef0679db97e1b79d306e516579b8300bb6eccd1406147cce52
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-onedrive-overview
    title: Business Central and OneDrive for Business Integration
    date: "2025-10-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-onedrive-integration-onpremises
    title: Configuring OneDrive integration with Business Central on-premises
    date: "2024-09-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-onedrive-integration
    title: Managing OneDrive Integration with Business Central
    date: "2024-06-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-onedrive-faq
    title: OneDrive in Business Central FAQ
    date: "2025-01-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-share-onedrive
    title: Opening Business Central Files in OneDrive
    date: "2025-10-21"
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
  objects: []
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
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 9553
member_hash: 7e113f4fda3d255c2a6199f7a572d8f5d699cb20e679f9488ff321660681f8c0
narrative: generated
---

# Microsoft OneDrive

> Microsoft OneDrive integration in Business Central: opening and sharing files in OneDrive for Business, saving Excel workbooks and report files, and admin setup for online and on-premises deployments. It answers how-to, configuration and FAQ questions.

Path: [Integrate with other applications](../../integrate-with-other-applications.md) > [Microsoft Office apps and Microsoft 365](../microsoft-office-apps-and-microsoft-365.md) > Microsoft OneDrive · tier official · system none · narrative reviewed by Opus

## Overview

OneDrive integration lets Business Central users store, open, share and collaboratively edit files such as reports and Excel workbooks in OneDrive for Business. It works across the web, mobile, Teams and Outlook clients.

Administrators set it up with the OneDrive Setup assisted guide. Setup is automatic for online deployments and manual for on-premises. The on-premises page covers registering an app in Microsoft Entra ID, setting up the connection, testing it and migrating from legacy SharePoint settings. The management page covers data residency, privacy controls and multi-environment setup.

Start with the overview page, then use the management or on-premises configuration page for setup. The FAQ gives quick answers. The page on opening files in OneDrive is for end users who share files and set link permissions.

## Key points

- Users can open Business Central files in OneDrive and share them with specific people.
- Sharing options include the Share action, send link, copy link, link settings and permissions.
- Excel workbooks and report files can be saved to OneDrive.
- Admins configure the integration with the OneDrive Setup assisted guide.
- Online deployments are set up automatically, while on-premises needs manual setup.
- On-premises setup requires an application registered in Microsoft Entra ID, plus connection testing.
- The on-premises page covers migration from legacy SharePoint settings and mentions versions 19, 20 and 21.
- The management page covers data residency, privacy controls and multi-environment setup.

## Learn pages

- [Business Central and OneDrive for Business Integration](https://learn.microsoft.com/dynamics365/business-central/across-onedrive-overview): Learn how to use OneDrive for Business to store, manage, and share files—such as reports and attachments—in Business Central. Also covers scenarios where OneDrive may be spelled as "One Drive."
- [Configuring OneDrive integration with Business Central on-premises](https://learn.microsoft.com/dynamics365/business-central/admin-onedrive-integration-onpremises): Learn about how to set up Business Central on-premises to integrate with OneDrive for work or school (formerly known as OneDrive for Business).
- [Managing OneDrive Integration with Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-onedrive-integration): Learn about things you can do to manage an integration between Business Central and OneDrive for Business.
- [OneDrive in Business Central FAQ](https://learn.microsoft.com/dynamics365/business-central/admin-onedrive-faq): Get answers for some typical questions about working with OneDrive for work or school (formerly known as OneDrive for Business) and Business Central.
- [Opening Business Central Files in OneDrive](https://learn.microsoft.com/dynamics365/business-central/across-share-onedrive): Learn how you can share Business Central data through OneDrive for Business.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 9553.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
