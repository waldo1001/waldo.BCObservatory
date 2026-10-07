---
id: topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365/microsoft-outlook
type: topic
title: Microsoft Outlook
summary: "Microsoft Outlook integration with Business Central: deploying the Outlook add-in, saving Business Central contacts to Outlook and Teams, and setting up email when Outlook is not used. It answers questions about installation options, contact synchronization, and email setup."
tier: official
language: en
system: crm
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:53.065Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c9c8e3289967110eef8d79043fe8153497b93b3e86145a07904c1a7ce9053f38
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-outlook
    title: Get the Business Central Add-in for Outlook
    date: "2026-03-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/save-business-contacts-to-outlook
    title: Save Business Contacts to Microsoft Outlook
    date: "2026-03-13"
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
    - https://learn.microsoft.com/dynamics365/business-central/save-business-contacts-to-outlook
    - https://learn.microsoft.com/dynamics365/business-central/admin-no-outlook
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
  - Microsoft Outlook
toc_file: business-central/TOC.md
parent: topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 1831
  - 1832
member_hash: 4f33de503b9324bf4253d3b1366a54a04c03ef18cbd30af4df200a14ba7bfd20
narrative: generated
---

# Microsoft Outlook

> Microsoft Outlook integration with Business Central: deploying the Outlook add-in, saving Business Central contacts to Outlook and Teams, and setting up email when Outlook is not used. It answers questions about installation options, contact synchronization, and email setup.

Path: [Integrate with other applications](../../integrate-with-other-applications.md) > [Microsoft Office apps and Microsoft 365](../microsoft-office-apps-and-microsoft-365.md) > Microsoft Outlook · tier official · system crm · narrative reviewed by Opus

## Overview

This section covers how Business Central works with Microsoft Outlook. The main piece is the Business Central add-in for Outlook, which shows contact insights and a document view in emails and appointments, and lets users create business documents from there. It can be deployed centrally by Microsoft 365 admins or installed manually by individual users.

A second page covers saving business contacts to Outlook and Teams. It synchronizes Business Central contacts so they are available during email and collaboration, with optional two-way synchronization and contact filtering. The page references 2026 release wave 1.

The third page is for organizations that do not use Outlook. It explains how to set up email sending through an assisted setup guide or with technical mail server information. Start with the add-in page if you use Outlook, or the last page if you do not.

## Key points

- The Outlook add-in offers contact insights and a document view inside emails and appointments.
- Two deployment methods exist: centralized deployment by Microsoft 365 admins, or manual installation by individual users.
- Users can create business documents directly from Outlook through the add-in.
- Business Central contacts can be saved and synchronized to Outlook and Teams.
- Contact synchronization can be two-way and supports contact filtering.
- The contact saving page is tied to 2026 release wave 1.
- Business Central can be used without Outlook by setting up email sending.
- Email setup can use an assisted setup guide or technical mail server information.

## Learn pages

- [Get the Business Central Add-in for Outlook](https://learn.microsoft.com/dynamics365/business-central/admin-outlook): Learn how to install the Business Central add-in for Outlook for your organization or for your own use.
- [Save Business Contacts to Microsoft Outlook](https://learn.microsoft.com/dynamics365/business-central/save-business-contacts-to-outlook): Learn how to synchronize Business Central contacts with Microsoft Outlook and Teams to streamline communication and access contact details effortlessly.
- [Using Business Central without Outlook](https://learn.microsoft.com/dynamics365/business-central/admin-no-outlook): If you don't have Outlook, you can't use Business Central as your business inbox in Outlook, but you can work in a browser or on your mobile device.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 1831, 1832.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
