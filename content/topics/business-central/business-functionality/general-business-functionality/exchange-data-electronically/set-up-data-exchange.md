---
id: topic/business-central/business-functionality/general-business-functionality/exchange-data-electronically/set-up-data-exchange
type: topic
title: Set up data exchange
summary: "Setting up data exchange in Business Central: document exchange service (Tradeshift), electronic document sending and receiving with PEPPOL, the general data exchange framework, and incoming documents setup. It answers setup questions for exchanging files and documents with partners, banks and OCR services."
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:18.512Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a8ccd5a118b395eaadbc47539a47e60ba66abc1f4748e6e56a0022d2544504b7
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
    title: Set Up incoming documents
    date: "2025-10-15"
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

> Setting up data exchange in Business Central: document exchange service (Tradeshift), electronic document sending and receiving with PEPPOL, the general data exchange framework, and incoming documents setup. It answers setup questions for exchanging files and documents with partners, banks and OCR services.

Path: [Business functionality](../../../business-functionality.md) > [General business functionality](../../general-business-functionality.md) > [Exchange data electronically](../exchange-data-electronically.md) > Set up data exchange · tier official · system none · narrative reviewed (checked by Opus)

## Overview

This section covers the configuration needed before Business Central can exchange data electronically. It has four pages and no subtopics. They cover the document exchange service, electronic sending and receiving of documents, the wider data exchange framework, and incoming documents.

Start with "Set up data exchange to send and receive files". It gives the framework view: document exchange service, OCR service, currency exchange rates, SEPA credit transfer, SEPA direct debit and bank statement service. From there, go to the page for your scenario. Use the document exchange service page for Tradeshift or similar services. Use the electronic document page for PEPPOL invoices and credit memos. Use the incoming documents page for processing external documents.

The PEPPOL page applies to the period before 2023 release wave 2, so check it against your version.

## Key points

- The data exchange framework supports electronic document exchange, bank file conversion, and data imports and exports.
- The document exchange service lets you exchange sales and purchase documents with trading partners via Tradeshift or other services.
- Document exchange setup involves the Business Central Integration app, sandbox mode and token renewal.
- Electronic document sending and receiving uses the PEPPOL format for invoices and credit memos, as described for the period before 2023 release wave 2.
- PEPPOL setup touches company information, VAT posting setup, item configuration and unit of measure setup.
- Incoming documents setup covers journal template settings, approval workflow and OCR service integration.
- The framework page also lists currency exchange rates, SEPA credit transfer, SEPA direct debit and bank statement service.

## Learn pages

- [How to set up a document exchange service \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-a-document-exchange-service): Use an external service provider to securely exchange electronic documents with your trading partners.
- [How to set up electronic document sending and receiving \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-electronic-document-sending-and-receiving): Send and receive business documents electronically, providing an alternative to emailing file attachments.
- [Set up data exchange to send and receive files](https://learn.microsoft.com/dynamics365/business-central/across-set-up-data-exchange): Set up the data exchange framework to send, receive, import, and export electronic documents and bank files in Business Central.
- [Set Up incoming documents](https://learn.microsoft.com/dynamics365/business-central/across-how-setup-income-documents): Set up the Incoming Documents feature to create electronic documents, manage OCR tasks, import invoices, and convert image files.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
