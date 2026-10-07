---
id: topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365/microsoft-word
type: topic
title: Microsoft Word
summary: "Microsoft Word integration in Business Central: designing Word report layouts with the Business Central add-in, mapping data fields through the XML Mapping pane, and using Word templates for bulk communications with customers, vendors, and contacts."
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:51.886Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 43b027692fdbb0993e324f65b2a9b83b2190d935d0b6d7b1f2bb6c55b6b5ce03
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-design-word-layouts-business-central-add-in
    title: Design Word Layouts with the Business Central Add-in
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-add-fields-word-report-layout
    title: Map Data Fields in Word Layouts
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-mail-merge
    title: Using Word templates for bulk communications
    date: "2024-11-13"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/ui-design-word-layouts-business-central-add-in
    - https://learn.microsoft.com/dynamics365/business-central/ui-how-add-fields-word-report-layout
    - https://learn.microsoft.com/dynamics365/business-central/ui-mail-merge
  objects:
    - object/page/9660
    - object/page/9666
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
  - Microsoft Word
toc_file: business-central/TOC.md
parent: topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365
children: []
coverage:
  learn: 3
  code: 2
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 9660
  - 9666
member_hash: 2a73cf4cb0fac74b0141e58910ca8877cc9f73ae8b1a008cd7c98af20d258c01
narrative: generated
---

# Microsoft Word

> Microsoft Word integration in Business Central: designing Word report layouts with the Business Central add-in, mapping data fields through the XML Mapping pane, and using Word templates for bulk communications with customers, vendors, and contacts.

Path: [Integrate with other applications](../../integrate-with-other-applications.md) > [Microsoft Office apps and Microsoft 365](../microsoft-office-apps-and-microsoft-365.md) > Microsoft Word · tier official · system none · narrative reviewed by Opus

## Overview

This section covers two uses of Word in Business Central: report layouts and document templates. For layouts, you can design a Word layout with the Business Central add-in, which adds fields, builds repeating data tables, and controls content display without manual XML editing. When you need finer control, you can map data fields by hand in the XML Mapping pane.

For communications, Word templates let you merge data from Business Central entities into personalized documents for customers, vendors, and contacts. Templates can use related and unrelated entities, and they connect to email.

Start with the add-in page for layout design. Move to the XML mapping page if you need manual mapping of content controls, repeating rows, or images. Use the bulk communications page for merge-based templates.

## Key points

- The Business Central add-in for Word lets you add report fields without manual XML editing.
- The add-in can build repeating data tables, hide content conditionally, add layout comments, and insert content controls.
- The XML Mapping pane supports manual mapping of content controls to report data.
- Manual mapping covers repeating rows, image fields, and label mapping.
- Word templates support bulk communications with customers, vendors, and contacts.
- Templates merge data from Business Central entities, including related and unrelated entities, and you select the fields to include.
- Templates can be uploaded and used with email integration.

## Learn pages

- [Design Word Layouts with the Business Central Add-in](https://learn.microsoft.com/dynamics365/business-central/ui-design-word-layouts-business-central-add-in): Learn how to use the Business Central Word add-in to add report fields, create repeating tables, add layout comments, and hide empty content.
- [Map Data Fields in Word Layouts](https://learn.microsoft.com/dynamics365/business-central/ui-how-add-fields-word-report-layout): Learn how to use the XML Mapping Pane in Word to manually map Business Central report data, labels, images, and repeating rows to content controls.
- [Using Word templates for bulk communications](https://learn.microsoft.com/dynamics365/business-central/ui-mail-merge): Word templates can make it easy to bulk create documents that are personalized for specific entities.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 9660 "Report Layouts"](../../../../objects/page/9660.md)
- [Page 9666 "Report Theme and Header/Footer"](../../../../objects/page/9666.md) · captioned "Manage themes and header-footer layouts"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
