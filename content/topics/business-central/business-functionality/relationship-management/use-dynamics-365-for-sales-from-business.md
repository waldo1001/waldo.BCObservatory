---
id: topic/business-central/business-functionality/relationship-management/use-dynamics-365-for-sales-from-business
type: topic
title: Use Dynamics 365 for Sales from Business Central
summary: "Using Dynamics 365 Sales with Business Central: coupling and synchronizing records with Dataverse or Dynamics 365 Sales, managing customers and sales orders across both systems, and checking synchronization job status and errors. It answers how-to and troubleshooting questions about the integration."
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:56.670Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: e8d6b0e5307b0fd0a1e87604e073c8601842a1796b09c30f8f6a106fac58743a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-how-to-couple-and-synchronize-records-manually
    title: Couple and Synchronize Records with Dataverse
    date: "2026-10-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-integrate-dynamicscrm
    title: Manage Customers Using Dynamics 365 Sales
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-how-to-view-synchronization-status
    title: View the Status of Synchronization Jobs
    date: "2021-06-14"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/admin-how-to-couple-and-synchronize-records-manually
    - https://learn.microsoft.com/dynamics365/business-central/marketing-integrate-dynamicscrm
    - https://learn.microsoft.com/dynamics365/business-central/admin-how-to-view-synchronization-status
  objects:
    - object/page/6250
  features: []
  topics:
    - topic/business-central/business-functionality/relationship-management
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Relationship management
  - Use Dynamics 365 for Sales from Business Central
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/relationship-management
children: []
coverage:
  learn: 3
  code: 1
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 6250
member_hash: a06ceab56677131c25e13ced55c2af21277bcaf1a54ce26564c5204b3f9b5b3a
narrative: generated
---

# Use Dynamics 365 for Sales from Business Central

> Using Dynamics 365 Sales with Business Central: coupling and synchronizing records with Dataverse or Dynamics 365 Sales, managing customers and sales orders across both systems, and checking synchronization job status and errors. It answers how-to and troubleshooting questions about the integration.

Path: [Business functionality](../../business-functionality.md) > [Relationship management](../relationship-management.md) > Use Dynamics 365 for Sales from Business Central · tier official · system sales · narrative reviewed (checked by Opus)

## Overview

This section covers the day-to-day use of the integration between Business Central and Dynamics 365 Sales (through Dataverse). It explains how records such as customers, contacts, items, prices and sales orders are linked and kept in sync across both systems.

The three pages follow a natural order. "Manage Customers Using Dynamics 365 Sales" gives the business scenario: customer engagement, order processing, quotes, invoices and payment tracking. "Couple and Synchronize Records with Dataverse" explains the mechanics of linking records and syncing them. "View the Status of Synchronization Jobs" covers monitoring and fixing problems after synchronization runs.

Start with the customer management page for the overall picture, then use the coupling page when you need to link or sync specific records. Go to the synchronization status page when jobs fail or records conflict.

## Key points

- Records can be coupled by setting up coupling on existing records, creating new coupled records, or using match-based coupling for bulk matching.
- Coupling and sync actions include Set Up Coupling, Synchronize Now, Match-Based Coupling, Bulk-insert and couple records, Delete Coupling, and Sync. Only Coupled Records.
- Synchronization is bidirectional between Business Central and Dataverse or Dynamics 365 Sales.
- The integration covers customers, contacts, items, prices and sales orders, with automatic sales order creation and quote processing.
- The customer management scenario also includes invoice transfer and customer payment tracking.
- The Coupled Data Synchronization Errors page shows synchronization job status and errors from coupled records.
- Error handling options include retry, retry all, remove coupling, synchronize with conflict resolution, and restore records.

## Learn pages

- [Couple and Synchronize Records with Dataverse](https://learn.microsoft.com/dynamics365/business-central/admin-how-to-couple-and-synchronize-records-manually): Synchronizing an integration table mapping enables data syncing in all records in a table in Business Central and Sales tables that are coupled.
  - In the observatory: [Page 21 "Customer Card"](../../../../objects/page/21.md), [Page 36954 "Customers"](../../../../objects/page/36954.md), [Page 5050 "Contact Card"](../../../../objects/page/5050.md)
- [Manage Customers Using Dynamics 365 Sales](https://learn.microsoft.com/dynamics365/business-central/marketing-integrate-dynamicscrm): Learn how to use Dynamics 365 Sales from inside Business Central with seamless integration and synchronization in the lead-to-cash process.
  - In the observatory: [Page 132 "Posted Sales Invoice"](../../../../objects/page/132.md), [Page 21 "Customer Card"](../../../../objects/page/21.md), [Page 459 "Sales & Receivables Setup"](../../../../objects/page/459.md), [Page 7 "Customer Price Groups"](../../../../objects/page/7.md), [Page 7016 "Sales Price List"](../../../../objects/page/7016.md)
- [View the Status of Synchronization Jobs](https://learn.microsoft.com/dynamics365/business-central/admin-how-to-view-synchronization-status): Use the Coupled Data Synchronization Errors page to view the status of synchronization jobs that have been run for coupled records in integrations.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 6250 "Data Sync Status"](../../../../objects/page/6250.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
