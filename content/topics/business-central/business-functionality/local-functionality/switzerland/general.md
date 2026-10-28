---
id: topic/business-central/business-functionality/local-functionality/switzerland/general
type: topic
title: General
summary: "Swiss (CH) localization in Business Central: importing Swiss Post codes and Swiss-specific behavior of purchase and sales documents. It answers questions about updating the Post Code table, posting descriptions, subtotals, invoice rounding with payment discounts, and shipment printing."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:04:08.939Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 00d8a8922512b90123c9accb5a376e0d74143a1f4c814a9c3ab4d5fc9649517a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-import-swiss-post-codes
    title: Import Swiss Post Codes in the Swiss Version [CH]
    date: "2026-10-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-purchase-documents-and-sales-documents
    title: Swiss Purchase Documents and Sales Documents
    date: "2026-10-19"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-import-swiss-post-codes
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-purchase-documents-and-sales-documents
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/switzerland
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Switzerland
  - General
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/switzerland
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 60cc8e0d3ba9f811ade2abdf7570e5ecf4a42d44fca5f9ac8bb41b4eb81b0305
narrative: generated
---

# General

> Swiss (CH) localization in Business Central: importing Swiss Post codes and Swiss-specific behavior of purchase and sales documents. It answers questions about updating the Post Code table, posting descriptions, subtotals, invoice rounding with payment discounts, and shipment printing.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Switzerland](../switzerland.md) > General · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section covers general functionality specific to the Swiss version of Business Central. It has two pages and no subtopics.

The first page explains how to import Swiss post codes from CSV or ZIP files so the Post Code table reflects the latest Swiss Post data, and how to define post codes for customers and vendors. The second page describes Swiss changes to purchase and sales documents, such as posting descriptions, subtotals in quotes and orders, invoice rounding, and shipment printing.

Start with the post code page if you are setting up master data for a Swiss company. Go to the documents page when you configure or troubleshoot sales and purchase document behavior.

## Key points

- Post codes can be imported from CSV or ZIP files to update the Post Code table with Swiss Post data.
- City and country/region are populated automatically during import.
- Post codes are validated against the range 1000-9999.
- Post codes can be defined for both customers and vendors.
- Ledger entries get enhanced posting descriptions in Swiss sales and purchase documents.
- Sales quotes and orders support subtitles and subtotals using Begin Total and End Total line types.
- Invoice rounding works together with payment discounts.
- Printing of shipment documents can be controlled.

## Learn pages

- [Import Swiss Post Codes in the Swiss Version [CH]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-import-swiss-post-codes): Learn how to import the latest Swiss post code file to update the Post Code table and define post codes for customers or vendors efficiently.
  - In the observatory: [Page 21 "Customer Card"](../../../../../objects/page/21.md), [Page 36954 "Customers"](../../../../../objects/page/36954.md), [Table 225 "Post Code"](../../../../../objects/table/225.md)
- [Swiss Purchase Documents and Sales Documents](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-purchase-documents-and-sales-documents): This article describes enhancements made to the Swiss version of Business Central including special Swiss purchase document and sales document features.
  - In the observatory: [Table 17 "G/L Entry"](../../../../../objects/table/17.md), [Table 21 "Cust. Ledger Entry"](../../../../../objects/table/21.md), [Table 25 "Vendor Ledger Entry"](../../../../../objects/table/25.md), [Table 311 "Sales & Receivables Setup"](../../../../../objects/table/311.md), [Table 37 "Sales Line"](../../../../../objects/table/37.md), [Table 98 "General Ledger Setup"](../../../../../objects/table/98.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
