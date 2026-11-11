---
id: topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365/microsoft-word
type: topic
title: Microsoft Word
summary: "Microsoft Word integration in Business Central: designing Word report layouts with the Business Central Word add-in, mapping data fields to content controls through the XML Mapping pane, and using Word templates for mail merge communication with contacts, customers, and vendors."
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
  input_hash: 4784d1648283602d597ebdf8e9517b603ab0c5eb70b09ab4f41beee45ca314c1
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-design-word-layouts-business-central-add-in
    title: Design Word Layouts with the Business Central Add-in
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-add-fields-word-report-layout
    title: Map Data Fields in Word Layouts
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-mail-merge
    title: Use Word Templates for Business Central Communication
    date: "2026-11-09"
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

> Microsoft Word integration in Business Central: designing Word report layouts with the Business Central Word add-in, mapping data fields to content controls through the XML Mapping pane, and using Word templates for mail merge communication with contacts, customers, and vendors.

Path: [Integrate with other applications](../../integrate-with-other-applications.md) > [Microsoft Office apps and Microsoft 365](../microsoft-office-apps-and-microsoft-365.md) > Microsoft Word · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers two uses of Word with Business Central: report layouts and Word templates for communication. The report layout pages explain how to build a Word layout for a report, either with the Business Central Word add-in or by mapping fields manually.

The add-in page describes adding report data, inserting tables, adding repeaters, and controlling visibility with hide-if-empty controls, without editing XML directly. The mapping page covers the alternative: using the XML Mapping pane to bind report fields, labels, images, and repeating rows to content controls in the document.

The Word templates page is separate and focuses on bulk communication. It explains using entities as data sources, adding merge fields, and applying a template to generate documents or send emails. Start with the add-in page for layout design, or with the Word templates page for mail merge.

## Key points

- The Business Central Word add-in lets you design report layouts through an Add Data task pane, without editing XML directly (version 29).
- The add-in supports inserting tables, adding repeaters, hide-if-empty controls, and layout comments.
- The XML Mapping pane is an alternative way to map report data fields to Word content controls.
- Mapping covers repeating rows, image fields, and label mapping, and uses a custom XML part.
- Word templates use mail merge for bulk communication with contacts, customers, and vendors.
- Templates use entities as data sources, including related and unrelated entities, with a field prefix and field selection for merge fields.
- A finished template can be applied to generate documents or send emails.

## Learn pages

- [Design Word Layouts with the Business Central Add-in](https://learn.microsoft.com/dynamics365/business-central/ui-design-word-layouts-business-central-add-in): Learn how to use the Business Central Word add-in to add report fields, create repeating tables, add layout comments, and hide empty content.
- [Map Data Fields in Word Layouts](https://learn.microsoft.com/dynamics365/business-central/ui-how-add-fields-word-report-layout): Learn how to use the XML Mapping Pane in Word to manually map Business Central report data, labels, images, and repeating rows to content controls.
- [Use Word Templates for Business Central Communication](https://learn.microsoft.com/dynamics365/business-central/ui-mail-merge): Learn how to create Word templates in Business Central, select merge fields, and generate personalized documents or email content for business contacts.
  - In the observatory: [Page 14929 "Field Selection (RU)"](../../../../objects/page/14929-ru.md), [Page 9989 "Word Templates"](../../../../objects/page/9989.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 9660 "Report Layouts"](../../../../objects/page/9660.md)
- [Page 9666 "Report Theme and Header/Footer"](../../../../objects/page/9666.md) · captioned "Manage themes and header-footer layouts"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
