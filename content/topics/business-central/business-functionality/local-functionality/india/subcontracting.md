---
id: topic/business-central/business-functionality/local-functionality/india/subcontracting
type: topic
title: Subcontracting
summary: "Subcontracting in the India localization of Business Central: setup of locations, vendors and items, creating subcontracting orders from released production orders, sending materials by delivery challan, GST liability, and job work reports. It answers how-to questions about the subcontracting process."
tier: official
language: en
system: manufacturing
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:24.463Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8fdc4692c712999bdaa59e3ba7551eaf2238ec443a6c4e0850d00a9e10dcfd3b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Create-GST-Liability
    title: Create GST Liability
    date: "2025-06-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-001-Basic-Setup
    title: Setting Up Subcontracting
    date: "2025-06-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Reports
    title: Sub Contracting Reports
    date: "2025-06-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Transactions
    title: Sub-Contracting Order Creation
    date: "2025-06-26"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Create-GST-Liability
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-001-Basic-Setup
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Transactions
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/india
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/11673
learn_toc_path:
  - Business functionality
  - Local functionality
  - India
  - Subcontracting
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/india
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 1f4cb941adce56cf2b1b16baa89da740e1d9ff3c052a0ec1c14f61e023fd3a21
narrative: generated
---

# Subcontracting

> Subcontracting in the India localization of Business Central: setup of locations, vendors and items, creating subcontracting orders from released production orders, sending materials by delivery challan, GST liability, and job work reports. It answers how-to questions about the subcontracting process.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [India](../india.md) > Subcontracting · tier official · system manufacturing · narrative reviewed (checked by Opus)

## Overview

Subcontracting for the Indian localization lets a manufacturer send raw materials to a subcontractor under a delivery challan, receive the processed goods back, and handle GST liability when materials are not returned within the job work return period.

The pages follow the process in order. Start with Setting Up Subcontracting (location, vendor and item setup, return period). Then Sub-Contracting Order Creation covers the worksheet-based order flow, material issue and receipt. Create GST Liability covers challans whose materials were not returned in time. Sub Contracting Reports describes the Delivery Challan and Stock Register for Job Work reports for review.

## Key points

- Setup covers subcontracting location, vendor and item, plus the job work return period.
- Subcontracting orders require a released production order.
- The subcontracting worksheet is used to create subcontracting orders.
- Materials are issued to the subcontractor with a delivery challan, which carries a challan number and date.
- Receipt from the subcontractor includes vendor shipment tracking and quantity acceptance.
- GST liability is created for delivery challans when materials are not returned within the specified period.
- The Delivery Challan report lists raw materials sent to vendors.
- The Stock Register for Job Work report tracks job work transfers, consumption entries and GST liability.

## Learn pages

- [Create GST Liability](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Create-GST-Liability): Learn how to create GST liability for subcontracting vendors in Business Central when materials aren't returned within the specified period.
- [Setting Up Subcontracting](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-001-Basic-Setup): Learn how to set up subcontracting in Business Central for India.
- [Sub Contracting Reports](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Reports): Learn about the available subcontracting reports in Business Central for India.
- [Sub-Contracting Order Creation](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Transactions): Learn how to create and manage subcontracting orders in Business Central for India.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11673 #[MAIN]-Not enough inventory available at vendor location for this order](../../../../../changes/bcapps/11673.md) (code change): "India Localization subcontracting receipt now prevents duplicate component consumption"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
