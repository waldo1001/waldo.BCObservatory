---
id: topic/dev-itpro/integration/integrating-business-central-with-office/integrating-with-microsoft-onedrive
type: topic
title: Integrating with Microsoft Onedrive
summary: "Integration of Business Central with OneDrive for Business: cloud storage, file sharing and Microsoft 365 collaboration. It answers questions about admin setup of OneDrive features and how developers extend document sharing with the Document Sharing module."
tier: official
language: en
system: integration
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
  input_hash: 523a07f3f3645e238935eee0778ecfbf2008384c79fa83d6955f944634a2e354
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-onedrive-overview
    title: Business Central and OneDrive for Business Integration
    date: "2026-11-09"
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
  posts:
    - post/yzhums-com/63749
    - post/yzhums-com/63803
    - post/yzhums-com/69433
    - post/yzhums-com/69812
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
  blog: 4
  guideline: 0
bc_forms: []
member_hash: d9548fb65d49f5e3b0ab44fc059eee69969b92a3e6608e34968be0a84170ac16
narrative: generated
---

# Integrating with Microsoft Onedrive

> Integration of Business Central with OneDrive for Business: cloud storage, file sharing and Microsoft 365 collaboration. It answers questions about admin setup of OneDrive features and how developers extend document sharing with the Document Sharing module.

Path: [Integration](../../integration.md) > [Integrating Business Central with Office apps and Microsoft 365](../integrating-business-central-with-office.md) > Integrating with Microsoft Onedrive · tier official · system integration · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers how Business Central works with OneDrive for Business. Users can store and share files in the cloud and work with them in Microsoft 365 apps such as Word, Excel and PowerPoint. Administrators can set up OneDrive so that Excel workbooks and report files are saved to OneDrive automatically.

The section has two pages. The first, "Business Central and OneDrive for Business Integration", is the starting point for administrators and users. It describes the user actions and the OneDrive Setup assisted setup guide. The second, "Extending Document Sharing and OneDrive for Business", is for developers. It explains how to use the Document Sharing module from the system application and the Document Service Management codeunit to enable sharing through OneDrive or a custom document service.

## Key points

- User actions include Open in OneDrive, Share, Open in Excel, Edit in Excel and Save report to file.
- Administrators configure the integration with the OneDrive Setup assisted setup guide.
- Excel workbooks and report files can be saved automatically to OneDrive.
- Integration supports collaboration with Word, Excel and PowerPoint.
- Developers use the Document Sharing module in the system application and the Document Service Management codeunit.
- Sharing can go through OneDrive or a custom document service.
- The developer page covers document sharing flows, the SharePoint service, blob and media types, and event subscribers.
- The developer page references 2022 release wave 1 and 2022 release wave 2.

## Learn pages

- [Business Central and OneDrive for Business Integration](https://learn.microsoft.com/dynamics365/business-central/across-onedrive-overview): Learn how OneDrive integration in Business Central helps you open, manage, and share reports, Excel workbooks, and files attached to business records.
- [Extending Document Sharing and OneDrive for Business](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extending-document-sharing-onedrive): Learn how the document sharing capability is used with OneDrive for Business, and how you can extend it.
  - In the observatory: [Codeunit 9510 "Document Service Management"](../../../../objects/codeunit/9510.md), [Codeunit 9560 "Document Sharing"](../../../../objects/codeunit/9560.md), [Table 9560 "Document Sharing"](../../../../objects/table/9560.md)

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Dynamics 365 Business Central Blog Series: Integrate Business Central with OneDrive](../../../../posts/yzhums-com/63749.md) (community post): "File operations between Business Central and OneDrive can be performed using AL code with Graph API"
- [Dynamics 365 Business Central: How to disable/hide OneDrive action group for all users](../../../../posts/yzhums-com/63803.md) (community post): "disable or hide OneDrive action groups in Dynamics 365 Business Central for all users"
- [Dynamics 365 Business Central: How to use Open in Excel in the browser/web (Excel Online)](../../../../posts/yzhums-com/69433.md) (community post): "When OneDrive for system features is enabled, the Excel workbook opens directly in Excel for the web"
- [Dynamics 365 Business Central: How to view excel reports (Excel Layout) directly from the web without downloading files (Excel Online)](../../../../posts/yzhums-com/69812.md) (community post): "Use OneDrive for system features copies Excel and Word report output to OneDrive"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
