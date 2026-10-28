---
id: topic/business-central/business-functionality/local-functionality/new-zealand/general
type: topic
title: General
summary: "New Zealand general local functionality in Business Central: address handling with postal codes and DPID bar codes, IRD number entry, adjustment notes for GST corrections, and cost-plus percentage sales pricing. It answers setup and usage questions for the New Zealand version."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:31.290Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 53ccfb1aebe70997790dacf9500785114af71b5a3d1469d9cf0a714649cda7f1
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/addresses
    title: Addresses in the New Zealand Version
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-enter-new-zealand-business-numbers
    title: Enter New Zealand Inland Revenue Department Number
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/new-zealand-business-numbers-and-adjustment-notes
    title: New Zealand IRD Numbers and Adjustment Notes
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-determine-sales-price-by-cost-plus-percentage
    title: Set Sales Prices by Cost-Plus Percentage in New Zealand
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/addresses
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-enter-new-zealand-business-numbers
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/new-zealand-business-numbers-and-adjustment-notes
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-determine-sales-price-by-cost-plus-percentage
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/new-zealand
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - New Zealand
  - General
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/new-zealand
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 6557363eaf71ce1c4b28efa20f4f83123a8f6e4c321622c793e6a80460eb2dd7
narrative: generated
---

# General

> New Zealand general local functionality in Business Central: address handling with postal codes and DPID bar codes, IRD number entry, adjustment notes for GST corrections, and cost-plus percentage sales pricing. It answers setup and usage questions for the New Zealand version.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [New Zealand](../new-zealand.md) > General · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section collects the New Zealand-specific features that apply across the application. It has four pages and no subtopics. They cover addresses, tax identification, tax corrections, and pricing.

For tax work, start with the page on IRD numbers and adjustment notes to see what they are for. Then use the page on entering IRD numbers to fill in the IRD No. field on Company Information and the Vendor Card. For addresses, populate the Post Code table with New Zealand postal codes to enable lookups, region-based city validation, and DPID bar codes. The cost-plus page explains how to set sales prices from a cost-plus percentage.

## Key points

- Address support offers postal code lookup, city dropdown selection, and region-based city validation.
- DPID (Delivery Point Identifier) bar codes can be generated to improve postal efficiency and reduce returns.
- Address setup requires the Post Code table to be populated with New Zealand postal codes.
- IRD numbers are entered in the IRD No. field on Company Information and on the Vendor Card for tax reporting compliance.
- IRD numbers identify businesses for New Zealand tax purposes.
- Adjustment notes (credit memos) correct errors in taxable supply information and GST amounts.
- Adjustment notes use the Adjustment Applies-to and Reason Code fields.
- Sales prices can be set by a cost-plus percentage calculation in the New Zealand version.

## Learn pages

- [Addresses in the New Zealand Version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/addresses): Learn how to use the address bar coding system, where each address is assigned a unique Delivery Point Identifier (DPID) to improve postal efficiency.
  - In the observatory: [Table 225 "Post Code"](../../../../../objects/table/225.md)
- [Enter New Zealand Inland Revenue Department Number](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-enter-new-zealand-business-numbers): Learn how to enter an Inland Revenue Department Number (IRD) on specific pages in the New Zealand version of Business Central.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 26 "Vendor Card"](../../../../../objects/page/26.md)
- [New Zealand IRD Numbers and Adjustment Notes](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/new-zealand-business-numbers-and-adjustment-notes): Learn how IRD numbers and credit memo adjustment fields support tax reporting and corrections in the New Zealand version of Business Central.
  - In the observatory: [Table 98 "General Ledger Setup"](../../../../../objects/table/98.md)
- [Set Sales Prices by Cost-Plus Percentage in New Zealand](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-determine-sales-price-by-cost-plus-percentage): Learn how to calculate item sales prices from unit costs and cost-plus percentages, or use a discount amount instead, in the New Zealand version.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
