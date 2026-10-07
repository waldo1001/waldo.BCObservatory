---
id: topic/business-central/business-functionality/relationship-management/use-dynamics-365-for-sales-from-business
type: topic
title: Use Dynamics 365 for Sales from Business Central
summary: "Using Dynamics 365 Sales with Business Central: coupling and synchronizing records with Dataverse or Dynamics 365 Sales, managing customers, orders, quotes, pricing and invoices across both systems, and checking synchronization job errors. It answers how-to questions about linking records and fixing sync problems."
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:45.528Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: cb43b8a8dee99abf06eb1ba3ab1ce8a9ce8978427b81e9b70bd3e20390bc9a34
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-how-to-couple-and-synchronize-records-manually
    title: Coupling and synchronizing
    date: "2025-04-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-integrate-dynamicscrm
    title: Manage customers using Dynamics 365 Sales
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
  objects: []
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
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 6250
member_hash: a06ceab56677131c25e13ced55c2af21277bcaf1a54ce26564c5204b3f9b5b3a
narrative: generated
---

# Use Dynamics 365 for Sales from Business Central

> Using Dynamics 365 Sales with Business Central: coupling and synchronizing records with Dataverse or Dynamics 365 Sales, managing customers, orders, quotes, pricing and invoices across both systems, and checking synchronization job errors. It answers how-to questions about linking records and fixing sync problems.

Path: [Business functionality](../../business-functionality.md) > [Relationship management](../relationship-management.md) > Use Dynamics 365 for Sales from Business Central · tier official · system sales · narrative reviewed by Opus

## Overview

This section covers the integration between Business Central and Dynamics 365 Sales. It explains how Business Central records such as customers, vendors and items are linked to Dataverse or Sales records so data can be shared in both directions.

The three pages follow a natural order. "Coupling and synchronizing" explains how to link records and keep them in sync. "Manage customers using Dynamics 365 Sales" describes the sales scenario built on that link: customers, sales orders, quotes, pricing and invoices. "View the Status of Synchronization Jobs" covers the error page you use when a job fails.

Start with the coupling page, since the other scenarios depend on records being coupled. Use the status page when a synchronization fails and you need to retry, restore or remove a coupling.

## Key points

- Coupling links Business Central records with Dataverse or Dynamics 365 Sales records for bidirectional data sharing.
- Coupling methods: manual coupling, match-based coupling, and bulk import or insert; records can also be uncoupled.
- Customers, vendors, items and other entities can be synchronized.
- The customer scenario covers sales order synchronization, quote processing, pricing synchronization, invoice creation and full synchronization.
- The customer management page references 2020 release wave 2.
- The Coupled Data Synchronization Errors page shows the status of synchronization jobs and error details.
- Error actions include Retry, Synchronize, Restore and Delete, used to resolve conflicts and coupling issues.

## Learn pages

- [Coupling and synchronizing](https://learn.microsoft.com/dynamics365/business-central/admin-how-to-couple-and-synchronize-records-manually): Synchronizing an integration table mapping enables data syncing in all records in a table in Business Central and Sales tables that are coupled.
- [Manage customers using Dynamics 365 Sales](https://learn.microsoft.com/dynamics365/business-central/marketing-integrate-dynamicscrm): Learn how to use Dynamics 365 Sales from inside Business Central with seamless integration and synchronization in the lead-to-cash process.
- [View the Status of Synchronization Jobs](https://learn.microsoft.com/dynamics365/business-central/admin-how-to-view-synchronization-status): Use the Coupled Data Synchronization Errors page to view the status of synchronization jobs that have been run for coupled records in integrations.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 6250.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
