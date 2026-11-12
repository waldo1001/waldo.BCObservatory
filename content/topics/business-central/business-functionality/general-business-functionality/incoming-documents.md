---
id: topic/business-central/business-functionality/general-business-functionality/incoming-documents
type: topic
title: Incoming documents
summary: "Incoming documents in Business Central: registering external documents such as purchase invoices and expense receipts, attaching them to records and entries, using OCR to convert PDFs and images, and managing large volumes. Answers setup, creation, linking, and processing questions."
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
  input_hash: e4628ed4a47ae950c9f9b00e86ac4a5c1189a526ca420b1ecc91f7ef28c7d98f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-create-income-document-records
    title: Create Incoming Document Records
    date: "2026-11-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-connect-disconnect-income-document-records
    title: Create Incoming Document Records Directly from Documents and Entries
    date: "2026-11-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-find-posted-documents-without-income-document-records
    title: Find Posted Documents without Incoming Document Records
    date: "2026-11-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-income-documents
    title: Incoming Documents
    date: "2026-11-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-manage-many-income-document-records
    title: Manage Many Incoming Document Records
    date: "2026-11-10"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-use-ocr-pdf-images-files
    title: Use OCR to Turn PDF and Image Files into Electronic Documents
    date: "2026-11-10"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/across-how-create-income-document-records
    - https://learn.microsoft.com/dynamics365/business-central/across-how-connect-disconnect-income-document-records
    - https://learn.microsoft.com/dynamics365/business-central/across-how-find-posted-documents-without-income-document-records
    - https://learn.microsoft.com/dynamics365/business-central/across-income-documents
    - https://learn.microsoft.com/dynamics365/business-central/across-how-manage-many-income-document-records
    - https://learn.microsoft.com/dynamics365/business-central/across-how-setup-income-documents
    - https://learn.microsoft.com/dynamics365/business-central/across-how-use-ocr-pdf-images-files
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/general-business-functionality
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - General business functionality
  - Incoming documents
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/general-business-functionality
children: []
coverage:
  learn: 7
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 4835315b6710066b92db7e72454a29e9d897701e76788dc7fc3ad8d12d707223
narrative: generated
---

# Incoming documents

> Incoming documents in Business Central: registering external documents such as purchase invoices and expense receipts, attaching them to records and entries, using OCR to convert PDFs and images, and managing large volumes. Answers setup, creation, linking, and processing questions.

Path: [Business functionality](../../business-functionality.md) > [General business functionality](../general-business-functionality.md) > Incoming documents · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

Incoming Documents lets you register external business documents by uploading files, taking photos, or creating records manually or automatically. A record can be attached to related documents or entries, converted to documents or journal lines, and optionally routed through an approval workflow. An OCR service can turn PDF and image files into electronic documents and purchase invoices.

The pages follow the usual flow. Start with the overview page and Set Up Incoming Documents to enable the feature, OCR service and approval workflow. Then use the creation pages: Create Incoming Document Records for the Incoming Documents page, and the page on creating records directly from purchase invoices, vendor ledger entries and general ledger entries.

For later work, one page covers finding posted documents that have no incoming document record and linking them. Another covers marking records as processed to manage large volumes. The OCR page explains sending files to the service, correcting recognized data, and training the service.

## Key points

- Create incoming documents from files, from the camera, manually, or automatically.
- The Incoming Documents page supports reviewing expense receipts, managing OCR tasks, and converting files to documents or journal lines.
- Attach a main file and supporting files directly from purchase invoices, vendor ledger entries and general ledger entries using the Incoming Document Files FactBox.
- Actions include Create Incoming Document from File and Remove Reference to Record.
- Find posted purchase and sales documents without incoming document records through the Chart of Accounts or General Ledger Entries pages, using date and document number filters.
- OCR: send files from the Incoming Documents page or forward by email to the OCR provider, then receive electronic documents back.
- Correct OCR data, map text to G/L accounts, and create purchase invoices from OCR documents; training the service improves accuracy.
- Use Set To Processed and Set To Unprocessed, with Show All and Show Unprocessed, to keep the default view manageable.

## Learn pages

- [Create Incoming Document Records](https://learn.microsoft.com/dynamics365/business-central/across-how-create-income-document-records): Use different functions on the Incoming Documents page to review expense receipts, manage OCR tasks, convert incoming document files and attach external files.
  - In the observatory: [Page 190 "Incoming Documents"](../../../../objects/page/190.md)
- [Create Incoming Document Records Directly from Documents and Entries](https://learn.microsoft.com/dynamics365/business-central/across-how-connect-disconnect-income-document-records): Attach files to purchase invoices and ledger entries by creating incoming document records, and remove links to posted documents when needed.
  - In the observatory: [Page 146 "Posted Purchase Invoices"](../../../../objects/page/146.md), [Page 16 "Chart of Accounts"](../../../../objects/page/16.md), [Page 190 "Incoming Documents"](../../../../objects/page/190.md), [Page 20 "General Ledger Entries"](../../../../objects/page/20.md), [Page 29 "Vendor Ledger Entries"](../../../../objects/page/29.md), [Page 9308 "Purchase Invoices"](../../../../objects/page/9308.md)
- [Find Posted Documents without Incoming Document Records](https://learn.microsoft.com/dynamics365/business-central/across-how-find-posted-documents-without-income-document-records): Search for general ledger entries of posted purchase and sales documents that lack associated incoming electronic documents, such as imported invoices.
  - In the observatory: [Page 16 "Chart of Accounts"](../../../../objects/page/16.md), [Page 190 "Incoming Documents"](../../../../objects/page/190.md), [Page 20 "General Ledger Entries"](../../../../objects/page/20.md)
- [Incoming Documents](https://learn.microsoft.com/dynamics365/business-central/across-income-documents): Manage incoming external business documents, such as payment receipts or PDFs, manage OCR tasks, and convert files to electronic documents and records.
  - In the observatory: [Page 16 "Chart of Accounts"](../../../../objects/page/16.md), [Page 189 "Incoming Document"](../../../../objects/page/189.md), [Page 190 "Incoming Documents"](../../../../objects/page/190.md), [Page 20 "General Ledger Entries"](../../../../objects/page/20.md)
- [Manage Many Incoming Document Records](https://learn.microsoft.com/dynamics365/business-central/across-how-manage-many-income-document-records): Adjust the default view of incoming documents, such as e-invoices, to improve your overview of processed and unprocessed records.
  - In the observatory: [Page 189 "Incoming Document"](../../../../objects/page/189.md), [Page 190 "Incoming Documents"](../../../../objects/page/190.md)
- [Set Up Incoming Documents](https://learn.microsoft.com/dynamics365/business-central/across-how-setup-income-documents): Set up the Incoming Documents feature to create electronic documents, manage OCR tasks, import invoices, and convert image files.
  - In the observatory: [Page 1270 "OCR Service Setup"](../../../../objects/page/1270.md), [Page 191 "Incoming Documents Setup"](../../../../objects/page/191.md), [Page 663 "Approval User Setup"](../../../../objects/page/663.md)
- [Use OCR to Turn PDF and Image Files into Electronic Documents](https://learn.microsoft.com/dynamics365/business-central/across-how-use-ocr-pdf-images-files): Use an OCR service to convert PDF and image files to incoming documents in Business Central, correct recognized data, and create invoices or journal lines.
  - In the observatory: [Page 1251 "Text-to-Account Mapping"](../../../../objects/page/1251.md), [Page 1272 "OCR Data Correction"](../../../../objects/page/1272.md), [Page 190 "Incoming Documents"](../../../../objects/page/190.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
