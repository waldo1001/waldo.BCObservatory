---
id: topic/business-central/business-functionality/general-business-functionality/exchange-data-electronically/set-up-data-exchange
type: topic
title: Set up data exchange
summary: Set up data exchange in Business Central covers configuring the document exchange service (Tradeshift), electronic document sending and receiving with PEPPOL, the general data exchange framework, and Incoming Documents. It answers setup questions for exchanging files and documents with trading partners, banks and OCR services.
tier: official
language: en
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
  input_hash: 0cfe3ce99e48e3ecbc94437d905725b29b5510fc14182479fcd35c52302fabf5
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-a-document-exchange-service
    title: How to set up a document exchange service | Microsoft Docs
    date: "2025-10-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-electronic-document-sending-and-receiving
    title: How to set up electronic document sending and receiving | Microsoft Docs
    date: "2025-10-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-set-up-data-exchange
    title: Set up data exchange to send and receive files
    date: "2025-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-setup-income-documents
    title: Set Up Incoming Documents
    date: "2026-11-10"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-a-document-exchange-service
    - https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-electronic-document-sending-and-receiving
    - https://learn.microsoft.com/dynamics365/business-central/across-set-up-data-exchange
    - https://learn.microsoft.com/dynamics365/business-central/across-how-setup-income-documents
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/general-business-functionality/exchange-data-electronically
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - General business functionality
  - Exchange data electronically
  - Set up data exchange
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/general-business-functionality/exchange-data-electronically
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 8872ef8236b98ac155c49d6c00dc8531210e9f9eb163fa658ecd65ea4e083ffb
narrative: generated
---

# Set up data exchange

> Set up data exchange in Business Central covers configuring the document exchange service (Tradeshift), electronic document sending and receiving with PEPPOL, the general data exchange framework, and Incoming Documents. It answers setup questions for exchanging files and documents with trading partners, banks and OCR services.

Path: [Business functionality](../../../business-functionality.md) > [General business functionality](../../general-business-functionality.md) > [Exchange data electronically](../exchange-data-electronically.md) > Set up data exchange · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how to prepare Business Central to exchange documents and files electronically. It has four pages and no subtopics. They cover the document exchange service, electronic document sending and receiving, the data exchange framework, and Incoming Documents.

The data exchange framework page is a good starting point. It describes the general setup for electronic document exchange, bank file conversion, and data imports and exports. The document exchange service page then shows how to connect to Tradeshift or other services to send and receive sales and purchase documents. The electronic document page covers PEPPOL setup for invoices and credit memos, with a note about the period before 2023 release wave 2. The Incoming Documents page covers capturing expense receipts and other files, optionally with OCR and approval workflows.

## Key points

- The document exchange service lets you exchange sales and purchase documents with trading partners via Tradeshift or other services.
- The document exchange setup mentions the Business Central Integration app, sandbox mode and token renewal.
- Electronic document sending and receiving uses the PEPPOL format for invoices and credit memos; the page applies to the period before 2023 release wave 2.
- PEPPOL setup involves company information, VAT posting setup, item configuration and unit of measure setup.
- The data exchange framework page covers electronic documents, bank file conversion, and imports and exports, including currency exchange rates, SEPA credit transfer, SEPA direct debit and the bank statement service.
- OCR service setup appears in both the data exchange and Incoming Documents pages.
- Incoming Documents manages expense receipts, converts files to documents, creates journal lines, attaches documents and supports approval workflows.

## Learn pages

- [How to set up a document exchange service \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-a-document-exchange-service): Use an external service provider to securely exchange electronic documents with your trading partners.
  - In the observatory: [Page 1275 "Doc. Exch. Service Setup"](../../../../../objects/page/1275.md)
- [How to set up electronic document sending and receiving \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-electronic-document-sending-and-receiving): Send and receive business documents electronically, providing an alternative to emailing file attachments.
  - In the observatory: [Page 190 "Incoming Documents"](../../../../../objects/page/190.md)
- [Set up data exchange to send and receive files](https://learn.microsoft.com/dynamics365/business-central/across-set-up-data-exchange): Set up the data exchange framework to send, receive, import, and export electronic documents and bank files in Business Central.
  - In the observatory: [Page 5 "Currencies"](../../../../../objects/page/5.md)
- [Set Up Incoming Documents](https://learn.microsoft.com/dynamics365/business-central/across-how-setup-income-documents): Set up the Incoming Documents feature to create electronic documents, manage OCR tasks, import invoices, and convert image files.
  - In the observatory: [Page 1270 "OCR Service Setup"](../../../../../objects/page/1270.md), [Page 191 "Incoming Documents Setup"](../../../../../objects/page/191.md), [Page 663 "Approval User Setup"](../../../../../objects/page/663.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
