---
id: topic/business-central/business-functionality/local-functionality/india/subcontracting
type: topic
title: Subcontracting
summary: Subcontracting for India in Business Central covers setting up subcontracting, creating subcontracting orders, sending materials to vendors by delivery challan, creating GST liability for overdue challans, and reporting. It answers how-to questions on job work processes and GST handling.
tier: official
language: en
system: manufacturing
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:26.437Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 543aaf67eb2fe5305d287ea881065b619361761cddaea244070fff64fd510458
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Create-GST-Liability
    title: Create GST Liability
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-001-Basic-Setup
    title: Set Up Subcontracting for India
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Transactions
    title: Subcontracting Order Creation
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Reports
    title: Subcontracting Reports
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Create-GST-Liability
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-001-Basic-Setup
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Transactions
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Reports
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

> Subcontracting for India in Business Central covers setting up subcontracting, creating subcontracting orders, sending materials to vendors by delivery challan, creating GST liability for overdue challans, and reporting. It answers how-to questions on job work processes and GST handling.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [India](../india.md) > Subcontracting · tier official · system manufacturing · narrative reviewed (checked by Opus)

## Overview

Subcontracting in the India localization lets manufacturers send raw materials to subcontractors under delivery challans and manage the job work process, including GST liability when materials are not returned in time.

The pages follow the process order. Start with Set Up Subcontracting for India, which covers the subcontracting location, vendor and item setup, the job work return period, and GST liability for overdue challans. Then Subcontracting Order Creation explains how a released production order with a subcontracting location feeds the Subcontracting Worksheet, which generates orders and handles material sent to and received from the vendor.

Create GST Liability is used for overdue delivery challans. It filters by vendor, order, challan, and liability date, then posts to the GST Liability account. Subcontracting Reports covers the Delivery Challan and Stock Register for Job Work reports for tracking.

## Key points

- Setup covers the subcontracting location, vendor, and item, plus the job work return period.
- A subcontracting order requires a released production order with a subcontracting location.
- The Subcontracting Worksheet (calculate subcontracts) generates subcontracting orders; the order creation page mentions version 28.
- Raw materials are sent to the vendor under a delivery challan, and receipt from the vendor is recorded afterward.
- Create GST Liability prepares liability lines for eligible overdue delivery challans.
- Create GST Liability filters by vendor, order, challan, and liability date, and tracks remaining quantity.
- Liability is posted to the GST Liability account.
- The Delivery Challan and Stock Register for Job Work reports show materials sent and GST-related transfer, consumption, and output entries.

## Learn pages

- [Create GST Liability](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Create-GST-Liability): Learn how to create GST liability for subcontracting vendors in Business Central when materials aren't returned within the specified period.
  - In the observatory: [Page 18467 "Create GST Liability (IN)"](../../../../../objects/page/18467-in.md)
- [Set Up Subcontracting for India](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-001-Basic-Setup): Set up subcontracting locations, vendors, items, return periods, and GST liability posting accounts in the India localization of Business Central.
- [Subcontracting Order Creation](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Transactions): Create subcontracting orders, send components with delivery challans, and apply challans when receiving finished items in Business Central for India.
  - In the observatory: [Page 18466 "Applied Delivery Challan (IN)"](../../../../../objects/page/18466-in.md), [Page 18481 "Order Subcon Details Receipt (IN)"](../../../../../objects/page/18481-in.md), [Page 99000886 "Subcontracting Worksheet"](../../../../../objects/page/99000886.md)
- [Subcontracting Reports](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Subcontracting-Reports): Preview delivery challans and stock registers for job work to review subcontracting material movements and GST liability in Business Central for India.
  - In the observatory: [Report 18467 "Delivery Challan (IN)"](../../../../../objects/report/18467-in.md), [Report 18468 "Stock Register for Job Work (IN)"](../../../../../objects/report/18468-in.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11673 #[MAIN]-Not enough inventory available at vendor location for this order](../../../../../changes/bcapps/11673.md) (code change): "India Localization subcontracting receipt now prevents duplicate component consumption"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
