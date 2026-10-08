---
id: topic/business-central/business-functionality/local-functionality/new-zealand/general
type: topic
title: General
summary: "New Zealand general local functionality in Business Central: address handling with DPID and postal codes, cost plus percentage sales pricing, and IRD numbers with adjustment notes for GST. It answers setup and usage questions for NZ-specific tax and address needs."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:32.677Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4fb2ed530977008e3274e9f822819482b0bdc2ebfb2288f5a8a7b3e3c5294836
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/addresses
    title: Addresses in New Zealand
    date: "2025-05-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-determine-sales-price-by-cost-plus-percentage
    title: Determine Sales Price by Cost Plus Percentage (NZ)
    date: "2025-05-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-enter-new-zealand-business-numbers
    title: Enter Inland revenue department numbers
    date: "2025-05-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/new-zealand-business-numbers-and-adjustment-notes
    title: Inland Revenue Department Numbers and Adjustment Notes
    date: "2025-05-07"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/addresses
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-determine-sales-price-by-cost-plus-percentage
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-enter-new-zealand-business-numbers
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/new-zealand-business-numbers-and-adjustment-notes
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

> New Zealand general local functionality in Business Central: address handling with DPID and postal codes, cost plus percentage sales pricing, and IRD numbers with adjustment notes for GST. It answers setup and usage questions for NZ-specific tax and address needs.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [New Zealand](../new-zealand.md) > General · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section collects the New Zealand-specific features that apply across the application. It covers how addresses are handled, how sales prices can be set from cost, and how Inland Revenue Department (IRD) numbers and adjustment notes support tax compliance.

The four pages are independent and short. Start with the IRD number pages if you need tax compliance: one explains where to enter the numbers, the other explains adjustment notes (credit memos) and GST claims. Use the addresses page for postal code, city and DPID questions, and the pricing page for cost markup calculation.

## Key points

- Addresses: a single postal code can map to multiple cities, with city and region mapping on postal code lookup.
- Addresses use the Delivery Point Identifier (DPID) for validation and for generating address barcodes, with AMAS software integration.
- Sales prices can be determined by cost plus percentage, a markup on cost, as NZ local functionality.
- IRD numbers are entered in the IRD No. field on the Registration FastTab of the Company Information and Vendor Card pages.
- Adjustment notes (credit memos) adjust GST claims when the consideration amount changes.
- Adjustment tracking supports the New Zealand tax requirements for these notes.

## Learn pages

- [Addresses in New Zealand](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/addresses): Learn how to use the address bar coding system, where each address is assigned a unique Delivery Point Identifier (DPID) to improve postal efficiency.
- [Determine Sales Price by Cost Plus Percentage (NZ)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-determine-sales-price-by-cost-plus-percentage): Learn how to use the cost plus percentage function to set a sales price based on the cost of an item.
- [Enter Inland revenue department numbers](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-enter-new-zealand-business-numbers): Learn how to enter an Inland Revenue Department Number (IRD) on specific pages in the New Zealand version of Business Central.
- [Inland Revenue Department Numbers and Adjustment Notes](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/new-zealand-business-numbers-and-adjustment-notes): Learn about IRD numbers and adjustment notes and how they're supported in the New Zealand version of Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
