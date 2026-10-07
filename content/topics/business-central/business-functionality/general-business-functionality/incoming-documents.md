---
id: topic/business-central/business-functionality/general-business-functionality/incoming-documents
type: topic
title: Incoming documents
summary: "Incoming documents in Business Central: setting up the feature, creating records from files, camera, or existing documents, using OCR to convert PDFs to e-invoices, and converting records to purchase invoices or journal lines. It answers how-to questions on setup, creation, linking, and view management."
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:55.918Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 476cfbd7fa0f31b406e9adab8dab58192e3684f54e5f81927e023cbc7841a5e9
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-create-income-document-records
    title: Create incoming document records
    date: "2025-10-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-connect-disconnect-income-document-records
    title: Create incoming document records from docs
    date: "2025-10-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-manage-many-income-document-records
    title: Define Which incoming docs to see
    date: "2025-10-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-find-posted-documents-without-income-document-records
    title: Find posted documents without incoming documents
    date: "2025-10-15"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-use-ocr-pdf-images-files
    title: Use OCR to turn PDF into e-invoices
    date: "2025-10-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-income-documents
    title: Work with incoming documents
    date: "2025-10-16"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/across-how-create-income-document-records
    - https://learn.microsoft.com/dynamics365/business-central/across-how-connect-disconnect-income-document-records
    - https://learn.microsoft.com/dynamics365/business-central/across-how-manage-many-income-document-records
    - https://learn.microsoft.com/dynamics365/business-central/across-how-find-posted-documents-without-income-document-records
    - https://learn.microsoft.com/dynamics365/business-central/across-how-setup-income-documents
    - https://learn.microsoft.com/dynamics365/business-central/across-how-use-ocr-pdf-images-files
    - https://learn.microsoft.com/dynamics365/business-central/across-income-documents
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

> Incoming documents in Business Central: setting up the feature, creating records from files, camera, or existing documents, using OCR to convert PDFs to e-invoices, and converting records to purchase invoices or journal lines. It answers how-to questions on setup, creation, linking, and view management.

Path: [Business functionality](../../business-functionality.md) > [General business functionality](../general-business-functionality.md) > Incoming documents · tier official · system none · narrative reviewed by Opus

## Overview

Incoming documents let you register external documents, such as supplier invoices and expense receipts, as records in Business Central. You can then convert them into purchase or sales documents or journal lines. Records can be created manually, from files, from photos taken with tablet or phone clients, or through an OCR service that turns PDFs and images into electronic records.

The pages follow the workflow. Start with "Set Up incoming documents" for journal template settings, approval workflow, and OCR service integration. "Work with incoming documents" and "Create incoming document records" cover creating and converting records. "Create incoming document records from docs" and "Find posted documents without incoming documents" cover attaching files to existing or posted documents.

"Use OCR to turn PDF into e-invoices" covers automatic invoice processing, fixing errors, and training the service. "Define Which incoming docs to see" explains how to mark records as processed to reduce clutter on the Incoming Documents page, and how to bring them back.

## Key points

- Create records manually, from a file, or from a camera photo on tablet and phone clients.
- Setup covers Incoming Documents Setup, journal template configuration, approval workflow, and OCR service.
- Records can be converted to purchase invoices or journal lines, with an optional approval workflow.
- Attach files to purchase invoices, vendor ledger entries, and posted documents, connecting existing records or creating new ones.
- Find posted purchase and sales documents that lack incoming records through the Chart of Accounts or General Ledger Entries pages, filtering by posting date.
- The OCR service converts PDFs and images to electronic documents, supports text-to-account mapping and error correction, and can be trained.
- Use Mark as Processed, Show All, and Set to Unprocessed to manage which records appear on the Incoming Documents page.

## Learn pages

- [Create incoming document records](https://learn.microsoft.com/dynamics365/business-central/across-how-create-income-document-records): Use different functions on the Incoming Documents page to review expense receipts, manage OCR tasks, convert incoming document files and attach external files.
- [Create incoming document records from docs](https://learn.microsoft.com/dynamics365/business-central/across-how-connect-disconnect-income-document-records): Attach external business documents to related incoming document records for easy storage and management.
- [Define Which incoming docs to see](https://learn.microsoft.com/dynamics365/business-central/across-how-manage-many-income-document-records): Adjust the default view of incoming documents, such as e-invoices, to improve your overview of processed and unprocessed records.
- [Find posted documents without incoming documents](https://learn.microsoft.com/dynamics365/business-central/across-how-find-posted-documents-without-income-document-records): Search for general ledger entries of posted purchase and sales documents that lack associated incoming electronic documents, such as imported invoices.
- [Set Up incoming documents](https://learn.microsoft.com/dynamics365/business-central/across-how-setup-income-documents): Set up the Incoming Documents feature to create electronic documents, manage OCR tasks, import invoices, and convert image files.
- [Use OCR to turn PDF into e-invoices](https://learn.microsoft.com/dynamics365/business-central/across-how-use-ocr-pdf-images-files): Describes how you can use an OCR service to convert incoming PDF or image files to electronic documents.
- [Work with incoming documents](https://learn.microsoft.com/dynamics365/business-central/across-income-documents): Manage incoming external business documents, such as payment receipts or PDFs, manage OCR tasks, and convert files to electronic documents and records.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
