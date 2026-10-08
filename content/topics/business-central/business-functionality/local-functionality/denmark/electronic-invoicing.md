---
id: topic/business-central/business-functionality/local-functionality/denmark/electronic-invoicing
type: topic
title: Electronic invoicing
summary: Electronic invoicing in the Danish version of Business Central uses the OIOUBL extension to create XML documents in UBL 2.0 format for Danish public sector customers. It answers questions about setup, customer fields (GLN, account code, profile code), and generating invoices, credit memos, reminders and finance charge memos.
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:00.433Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0a26322cdc25d5aee6ee9e16f92ab0554592fcf5ac23b538b7b408de6ee86e2f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-create-electronic-documents-by-using-oioubl
    title: Create Electronic Documents in an OIOUBL format
    date: "2025-03-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-set-up-customers-for-oioubl
    title: How to Set Up Customers for OIOUBL | Microsoft Docs
    date: "2025-03-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/oioubl-electronic-invoicing-overview
    title: OIOUBL Electronic Invoicing Overview | Microsoft Docs
    date: "2025-04-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/ui-extensions-oioubl
    title: OIOUBL Extension for Electronic Invoicing
    date: "2025-04-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-set-up-oioubl
    title: Set Up the OIOUBL Extension for Electronic Invoicing | Microsoft Docs
    date: "2025-03-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-create-electronic-documents-by-using-oioubl
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-set-up-customers-for-oioubl
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/oioubl-electronic-invoicing-overview
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/ui-extensions-oioubl
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-set-up-oioubl
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/denmark
  localizations: []
  videos:
    - video/205F8ljmInU
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Denmark
  - Electronic invoicing
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/denmark
children: []
coverage:
  learn: 5
  code: 0
  video: 1
  blog: 0
  guideline: 0
bc_forms:
  - 13645
  - 13646
  - 13647
member_hash: 33e52f3e8902cc7669d87ca9b9607eb7e53d706b7b8133f5f50ab3a225f303df
narrative: generated
---

# Electronic invoicing

> Electronic invoicing in the Danish version of Business Central uses the OIOUBL extension to create XML documents in UBL 2.0 format for Danish public sector customers. It answers questions about setup, customer fields (GLN, account code, profile code), and generating invoices, credit memos, reminders and finance charge memos.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Denmark](../denmark.md) > Electronic invoicing · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

OIOUBL electronic invoicing lets Danish companies send sales invoices, credit memos, finance charge memos, and reminders to the public sector in the required OIOUBL format, which is based on the UBL 2.0 standard. The OIOUBL extension produces the XML files from posted documents and supports the OIOUBL profile requirements.

The pages follow the usual order of work. An overview page explains the concepts (profiles, EAN location numbers, account codes, XML export). A page on the extension describes what it generates. Setup pages cover payment terms, item charges, OIOUBL profiles, and customer settings. A final page explains how to create and send the electronic documents.

Start with the overview, then follow the extension setup and the customer setup. After that, use the page on creating electronic documents to post sales or service documents and generate the XML file.

## Key points

- OIOUBL documents are XML files in UBL 2.0 format for Danish public sector customers.
- Supported document types: sales invoices, credit memos, reminders, and finance charge memos.
- Extension setup covers payment terms, item charges, and OIOUBL profile selection.
- Customer setup needs the GLN, Account Code, and OIOUBL Profile Code fields.
- The OIOUBL Profile Code Required setting makes the profile code mandatory for a customer.
- Documents are generated from posted sales or service documents, and the XML file is then created.
- External document numbering and OIOUBL account codes are part of document creation.

## Learn pages

- [Create Electronic Documents in an OIOUBL format](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-create-electronic-documents-by-using-oioubl): When selling goods or services to a customer in the Danish public sector, it's mandatory to submit documents electronically.
- [How to Set Up Customers for OIOUBL \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-set-up-customers-for-oioubl): To generate Offentlig Information Online UBL (OIOUBL) documents for public sector customers, it's necessary to include OIOUBL information for the relevant customers.
- [OIOUBL Electronic Invoicing Overview \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/oioubl-electronic-invoicing-overview): Learn how Business Central assists you in meeting the requirement to send sales documents electronically to the Danish public sector in the OIOUBL format.
- [OIOUBL Extension for Electronic Invoicing](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/ui-extensions-oioubl): The OIOUBL extension simplifies the process of sending sales documents electronically to customers in the Danish public sector using the OIOUBL format.
- [Set Up the OIOUBL Extension for Electronic Invoicing \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-set-up-oioubl): Prepare to submit sales documents in the Offentlig Information Online - Universal Business Language (OIOUBL) format by following the steps outlined in this article.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [What's New: The Danish Bookkeeping Act (2023 release wave 2)](../../../../../videos/205F8ljmInU.md) (video): "E-invoicing for Denmark; Digital Voucher Storage; Audit Trail"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 3 objects with no object page: page/13645, page/13646, page/13647.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
