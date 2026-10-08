---
id: topic/dev-itpro/integration/integrating-business-central-with-office/integrating-with-microsoft-word
type: topic
title: Integrating with Microsoft Word
summary: "Integrating Business Central with Microsoft Word covers two tasks: mapping report data fields into Word layouts with the XML Mapping pane, and using Word templates to merge entity data into bulk communications for customers, vendors, and contacts. It answers how-to questions on custom report layouts and template-based documents."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:40.461Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3177afe7a14155277b968979c201bc302f8c824f26030400f9219dded43290ae
evidence:
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
    - https://learn.microsoft.com/dynamics365/business-central/ui-how-add-fields-word-report-layout
    - https://learn.microsoft.com/dynamics365/business-central/ui-mail-merge
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration/integrating-business-central-with-office
  localizations: []
  videos:
    - video/mS6NDhj20yI
  posts: []
  guidelines: []
learn_toc_path:
  - Integration
  - Integrating Business Central with Office apps and Microsoft 365
  - Integrating with Microsoft Word
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/integrating-business-central-with-office
children: []
coverage:
  learn: 2
  code: 0
  video: 1
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 45ea8e5914f82b3e0f0eb2aa15e40f00f0aaae204120c7e6916381e5025bf59a
narrative: generated
---

# Integrating with Microsoft Word

> Integrating Business Central with Microsoft Word covers two tasks: mapping report data fields into Word layouts with the XML Mapping pane, and using Word templates to merge entity data into bulk communications for customers, vendors, and contacts. It answers how-to questions on custom report layouts and template-based documents.

Path: [Integration](../../integration.md) > [Integrating Business Central with Office apps and Microsoft 365](../integrating-business-central-with-office.md) > Integrating with Microsoft Word · tier official · system integration · narrative reviewed (checked by Opus)

## Overview

This section covers two uses of Word with Business Central. The first is report design: you add report data to a Word layout by mapping content controls through the XML Mapping pane. The second is communication: you build Word templates that pull data from Business Central entities and produce personalized documents in bulk.

The two pages are independent. Start with "Map Data Fields in Word Layouts" if you are customizing how a report looks. Start with "Using Word templates for bulk communications" if you want to send tailored documents to customers, vendors, or contacts.

## Key points

- The XML Mapping pane is used to manually map content controls in a Word report layout.
- Word layouts can include repeating rows and image fields, and labels can be mapped too.
- Word templates merge data from Business Central entities into personalized documents.
- Templates can use both related and unrelated entities as data sources.
- You select which fields from the entities to make available as merge fields.
- Templates are designed for bulk communications with customers, vendors, and contacts.
- The template page mentions uploading templates and email integration.

## Learn pages

- [Map Data Fields in Word Layouts](https://learn.microsoft.com/dynamics365/business-central/ui-how-add-fields-word-report-layout): Learn how to use the XML Mapping Pane in Word to manually map Business Central report data, labels, images, and repeating rows to content controls.
- [Using Word templates for bulk communications](https://learn.microsoft.com/dynamics365/business-central/ui-mail-merge): Word templates can make it easy to bulk create documents that are personalized for specific entities.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [What's New: Enhanced Document Reporting (2026 release wave 1)](../../../../videos/mS6NDhj20yI.md) (video): "word add-in; Enhanced data picker UX; document apis"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
