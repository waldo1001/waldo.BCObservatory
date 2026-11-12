---
id: topic/dev-itpro/integration/integrating-business-central-with-office/integrating-with-microsoft-word
type: topic
title: Integrating with Microsoft Word
summary: "Integration of Business Central with Microsoft Word: mapping report data fields to content controls in Word report layouts, and using Word templates for mail merge communication with contacts, customers, and vendors. It answers questions about layout design and template setup."
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
  input_hash: 75ebccd89bd2168f510a332a50af23e753582f8fb9784754605e12cd33552e9b
evidence:
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
    - https://learn.microsoft.com/dynamics365/business-central/ui-how-add-fields-word-report-layout
    - https://learn.microsoft.com/dynamics365/business-central/ui-mail-merge
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
  - Integrating with Microsoft Word
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
member_hash: 45ea8e5914f82b3e0f0eb2aa15e40f00f0aaae204120c7e6916381e5025bf59a
narrative: generated
---

# Integrating with Microsoft Word

> Integration of Business Central with Microsoft Word: mapping report data fields to content controls in Word report layouts, and using Word templates for mail merge communication with contacts, customers, and vendors. It answers questions about layout design and template setup.

Path: [Integration](../../integration.md) > [Integrating Business Central with Office apps and Microsoft 365](../integrating-business-central-with-office.md) > Integrating with Microsoft Word · tier official · system integration · narrative **unreviewed** (model text not yet checked)

## Overview

This area covers two uses of Word with Business Central. The first is designing Word layouts for reports. The XML Mapping pane is used to map report data fields to content controls, so report content, labels, images, and repeating data appear where you want them in the document.

The second is Word templates for bulk communication. A template uses an entity as its data source, and merge fields add personalization. You then apply the template to generate documents or send emails to contacts, customers, and vendors.

Start with the Word templates page if you need mail merge for communication. Start with the data field mapping page if you are building or editing a report layout in Word.

## Key points

- Map Data Fields in Word Layouts: use the XML Mapping pane to link report data fields to Word content controls (version 29 noted).
- Word layouts can include labels, image fields, and repeating rows mapped from a custom XML part.
- Word templates support mail merge for bulk communication with contacts, customers, and vendors.
- Templates are set up with an entity as the data source, and merge fields personalize the content.
- Templates can include related and unrelated entities, with a field prefix and field selection to choose which data to use.
- Applying a template generates documents or sends emails.

## Learn pages

- [Map Data Fields in Word Layouts](https://learn.microsoft.com/dynamics365/business-central/ui-how-add-fields-word-report-layout): Learn how to use the XML Mapping Pane in Word to manually map Business Central report data, labels, images, and repeating rows to content controls.
- [Use Word Templates for Business Central Communication](https://learn.microsoft.com/dynamics365/business-central/ui-mail-merge): Learn how to create Word templates in Business Central, select merge fields, and generate personalized documents or email content for business contacts.
  - In the observatory: [Page 14929 "Field Selection (RU)"](../../../../objects/page/14929-ru.md), [Page 9989 "Word Templates"](../../../../objects/page/9989.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
