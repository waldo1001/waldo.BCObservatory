---
id: topic/business-central/business-functionality/local-functionality/denmark/electronic-invoicing
type: topic
title: Electronic invoicing
summary: Electronic invoicing for Denmark in Business Central using the OIOUBL format. It answers questions about what OIOUBL is, how to set up the extension, customers and profiles, and how to create and export OIOUBL XML documents for the Danish public sector.
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:56:07.048Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 125952dc0c03aff39bf0ca0b443e3fc4d64317a293093124f92804cc721b1139
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-create-electronic-documents-by-using-oioubl
    title: Create Electronic Documents in an OIOUBL format
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-set-up-customers-for-oioubl
    title: How to Set Up Customers for OIOUBL | Microsoft Docs
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/oioubl-electronic-invoicing-overview
    title: OIOUBL Electronic Invoicing Overview | Microsoft Docs
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/ui-extensions-oioubl
    title: OIOUBL Extension for Electronic Invoicing
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-set-up-oioubl
    title: Set Up the OIOUBL Extension for Electronic Invoicing | Microsoft Docs
    date: "2026-10-08"
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

> Electronic invoicing for Denmark in Business Central using the OIOUBL format. It answers questions about what OIOUBL is, how to set up the extension, customers and profiles, and how to create and export OIOUBL XML documents for the Danish public sector.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Denmark](../denmark.md) > Electronic invoicing · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

OIOUBL (Offentlig Information Online UBL) is the format Danish authorities require for electronic documents sent by companies that sell to the public sector. The OIOUBL extension generates XML documents based on the UBL 2.0 standard for sales invoices, credit memos, finance charge memos and reminders.

The pages follow the order of the work. Start with the overview and the extension description to see what is supported. Then use the extension setup page to configure payment terms, OIOUBL profiles, item charges and company information. Next, set up customers with GLN, account code and profile code. Finally, the document creation page shows how to post sales documents and export them as XML.

## Key points

- OIOUBL covers sales invoices, credit memos, finance charge memos and reminders for the Danish public sector.
- The extension generates XML documents based on the UBL 2.0 standard.
- Extension setup covers payment terms, OIOUBL profiles, customers, item charges and company information.
- Profiles named in the setup include Simpel fakturaproces, Billing Basic and Document sending.
- Customer records need a Global Location Number (GLN), an account code and a profile code; a Profile Code Required option exists.
- To create a document, post the sales invoice or credit memo with the required fields, then export it as an XML electronic document.
- Fields named on the document creation page include External Document No., Document No. as Ext. Doc. No., GLN, Account Code and Your Reference.

## Learn pages

- [Create Electronic Documents in an OIOUBL format](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-create-electronic-documents-by-using-oioubl): When selling goods or services to a customer in the Danish public sector, it's mandatory to submit documents electronically.
  - In the observatory: [Page 143 "Posted Sales Invoices"](../../../../../objects/page/143.md), [Page 459 "Sales & Receivables Setup"](../../../../../objects/page/459.md)
- [How to Set Up Customers for OIOUBL \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-set-up-customers-for-oioubl): To generate Offentlig Information Online UBL (OIOUBL) documents for public sector customers, it's necessary to include OIOUBL information for the relevant customers.
  - In the observatory: [Page 36954 "Customers"](../../../../../objects/page/36954.md)
- [OIOUBL Electronic Invoicing Overview \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/oioubl-electronic-invoicing-overview): Learn how Business Central assists you in meeting the requirement to send sales documents electronically to the Danish public sector in the OIOUBL format.
  - In the observatory: [Page 21 "Customer Card"](../../../../../objects/page/21.md), [Page 459 "Sales & Receivables Setup"](../../../../../objects/page/459.md)
- [OIOUBL Extension for Electronic Invoicing](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/ui-extensions-oioubl): The OIOUBL extension simplifies the process of sending sales documents electronically to customers in the Danish public sector using the OIOUBL format.
- [Set Up the OIOUBL Extension for Electronic Invoicing \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-set-up-oioubl): Prepare to submit sales documents in the Offentlig Information Online - Universal Business Language (OIOUBL) format by following the steps outlined in this article.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 1875 "Manual Setup"](../../../../../objects/page/1875.md), [Page 36954 "Customers"](../../../../../objects/page/36954.md), [Page 4 "Payment Terms"](../../../../../objects/page/4.md), [Page 459 "Sales & Receivables Setup"](../../../../../objects/page/459.md), [Page 5800 "Item Charges"](../../../../../objects/page/5800.md)

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [What's New: The Danish Bookkeeping Act (2023 release wave 2)](../../../../../videos/205F8ljmInU.md) (video): "E-invoicing for Denmark; Digital Voucher Storage for Five Years; Audit Trail for Transactions"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 3 objects with no object page: page/13645, page/13646, page/13647.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
