---
id: topic/business-central/business-functionality/local-functionality/switzerland/inventory
type: topic
title: Inventory
summary: "Swiss inventory functionality in Business Central: printing a sales order picking list and the Swiss inventory management features for reporting, multi-shipment invoice tracking and location codes. It answers questions about picking lists and Swiss-specific inventory behavior."
tier: official
language: en
system: inventory
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:04:12.429Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: fcea654cba648fc39b002a527dc0d73ff37cb23fdef63f50e2c54935671dfaa3
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-print-an-inventory-picking-list-from-a-sales-order
    title: Print a Sales Order Picking List in Switzerland
    date: "2026-10-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-inventory-management
    title: Swiss Inventory Management [CH]
    date: "2026-10-19"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-print-an-inventory-picking-list-from-a-sales-order
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-inventory-management
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
  - Inventory
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
member_hash: 1b29342e71e9d257f43d3930bea6e0c94ed876a7f37e7a15d5bdad664b397d20
narrative: generated
---

# Inventory

> Swiss inventory functionality in Business Central: printing a sales order picking list and the Swiss inventory management features for reporting, multi-shipment invoice tracking and location codes. It answers questions about picking lists and Swiss-specific inventory behavior.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Switzerland](../switzerland.md) > Inventory · tier official · system inventory · narrative reviewed (checked by Opus)

## Overview

This section covers inventory features specific to the Swiss localization of Business Central. It has two pages and no subtopics.

"Swiss Inventory Management [CH]" is the general page. It describes detailed reporting, item ledger entry details, default location codes, and tracking of multi-shipment invoices, including combined invoicing and shipment numbers in the invoice text. "Print a Sales Order Picking List in Switzerland" is the task page. It shows how to print a picking list from a sales order.

Start with the Swiss Inventory Management page for an overview of what the localization adds. Then use the picking list page when you need to print pick documents for warehouse staff.

## Key points

- The picking list is printed from a sales order in the Swiss version.
- The picking list shows bin codes, location codes, serial numbers and quantities.
- Only items with a shipping quantity greater than 0 appear on the picking list.
- The picking list print options include the number of copies.
- Swiss inventory management includes detailed reporting with item ledger entry details.
- Multi-shipment invoices can be tracked, with combined invoicing and shipment numbers in the invoice text.
- Default location codes can be managed for items.

## Learn pages

- [Print a Sales Order Picking List in Switzerland](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-print-an-inventory-picking-list-from-a-sales-order): Print an inventory picking list from a sales order in the Swiss version of Business Central, with location, bin, and shipping quantity information.
- [Swiss Inventory Management [CH]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-inventory-management): This article describes Swiss enhancements to special inventory management features in Business Central.
  - In the observatory: [Page 5708 "Get Shipment Lines"](../../../../../objects/page/5708.md), [Report 701 "Inventory - List"](../../../../../objects/report/701.md), [Report 712 "Inventory - Sales Statistics"](../../../../../objects/report/712.md), [Table 32 "Item Ledger Entry"](../../../../../objects/table/32.md), [Table 37 "Sales Line"](../../../../../objects/table/37.md), [Table 83 "Item Journal Line"](../../../../../objects/table/83.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
