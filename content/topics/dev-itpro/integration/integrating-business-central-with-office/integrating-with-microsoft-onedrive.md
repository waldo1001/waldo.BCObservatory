---
id: topic/dev-itpro/integration/integrating-business-central-with-office/integrating-with-microsoft-onedrive
type: topic
title: Integrating with Microsoft Onedrive
summary: "Business Central integration with OneDrive for Business: opening, sharing, and saving documents such as reports and Excel workbooks in OneDrive, plus how developers extend the Document Sharing module. It answers setup, user-level usage, and extensibility questions."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:45.644Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 46f1b422a3707048a437fbcfdef4675bf642dfc9b4150243d9c27fdb331a5f3c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-onedrive-overview
    title: Business Central and OneDrive for Business Integration
    date: "2025-10-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extending-document-sharing-onedrive
    title: Extending Document Sharing and OneDrive for Business
    date: "2021-10-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/across-onedrive-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extending-document-sharing-onedrive
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration/integrating-business-central-with-office
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Integration
  - Integrating Business Central with Office apps and Microsoft 365
  - Integrating with Microsoft Onedrive
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/integrating-business-central-with-office
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: d9548fb65d49f5e3b0ab44fc059eee69969b92a3e6608e34968be0a84170ac16
narrative: generated
---

# Integrating with Microsoft Onedrive

> Business Central integration with OneDrive for Business: opening, sharing, and saving documents such as reports and Excel workbooks in OneDrive, plus how developers extend the Document Sharing module. It answers setup, user-level usage, and extensibility questions.

Path: [Integration](../../integration.md) > [Integrating Business Central with Office apps and Microsoft 365](../integrating-business-central-with-office.md) > Integrating with Microsoft Onedrive · tier official · system integration · narrative reviewed (checked by Opus)

## Overview

This section covers how Business Central works with OneDrive for cloud file storage, file sharing, and collaborative editing. One page is aimed at users and administrators and describes what the integration does and how to set it up. The other is aimed at developers.

The developer page explains how to use the Document Sharing module from the system application and the Document Service Management codeunit. With these, you can enable file sharing through OneDrive or through a custom document service. It mentions document sharing flows, the share action, event subscribers, a SharePoint service, and blob and media types, and it references 2022 release wave 1 and wave 2.

Start with the integration overview to understand the user features and setup. Move to the extension page if you need to build or customize sharing behavior.

## Key points

- Users can open files in OneDrive, share files, and save Excel workbooks and report files to OneDrive from Business Central.
- OneDrive integration supports cloud storage and collaborative editing of documents like reports and Excel files.
- The overview page includes OneDrive setup guidance.
- Developers use the Document Sharing module from the system application to enable sharing.
- The Document Service Management codeunit supports sharing through OneDrive or a custom document service.
- Extension topics include document sharing flows, the share action, event subscribers, a SharePoint service, and blob and media types.
- The extensibility page references 2022 release wave 1 and 2022 release wave 2.

## Learn pages

- [Business Central and OneDrive for Business Integration](https://learn.microsoft.com/dynamics365/business-central/across-onedrive-overview): Learn how to use OneDrive for Business to store, manage, and share files—such as reports and attachments—in Business Central. Also covers scenarios where OneDrive may be spelled as "One Drive."
- [Extending Document Sharing and OneDrive for Business](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extending-document-sharing-onedrive): Learn how the document sharing capability is used with OneDrive for Business, and how you can extend it.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
