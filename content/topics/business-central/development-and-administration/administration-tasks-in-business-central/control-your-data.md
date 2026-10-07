---
id: topic/business-central/development-and-administration/administration-tasks-in-business-central/control-your-data
type: topic
title: Control your data
summary: "Control your data covers Business Central administration of data: auditing changes, classifying and masking sensitive data, retention policies, encryption, storage cleanup, archiving, personal data requests, and database locks. It answers questions on who changed data, privacy handling, and reducing database size."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:33.423Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: e70177c148687186e35b99a647fbc216b7c19e31044cc7f77206ab2b3abd8774
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-log-changes
    title: Auditing changes
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-classifying-data-sensitivity
    title: Classifying data sensitivity
    date: "2025-09-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-data-retention-policies
    title: Clean up data with retention policies
    date: "2026-03-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-manage-data-encryption
    title: Manage data encryption | Microsoft Docs
    date: "2023-12-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-manage-documents
    title: Manage storage by deleting documents or compressing data
    date: "2026-09-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-responding-to-requests-about-personal-data
    title: Responding to requests about users' personal data
    date: "2024-11-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-archive-data
    title: The Data Archive Extension
    date: "2023-01-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-view-database-locks
    title: View Database Locks
    date: "2021-06-14"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/across-log-changes
    - https://learn.microsoft.com/dynamics365/business-central/admin-classifying-data-sensitivity
    - https://learn.microsoft.com/dynamics365/business-central/admin-data-retention-policies
    - https://learn.microsoft.com/dynamics365/business-central/admin-manage-data-encryption
    - https://learn.microsoft.com/dynamics365/business-central/admin-manage-documents
    - https://learn.microsoft.com/dynamics365/business-central/admin-responding-to-requests-about-personal-data
    - https://learn.microsoft.com/dynamics365/business-central/admin-archive-data
    - https://learn.microsoft.com/dynamics365/business-central/admin-view-database-locks
  objects:
    - object/page/107
    - object/page/592
    - object/page/593
    - object/page/594
    - object/page/595
    - object/page/630
    - object/page/710
    - object/page/1366
    - object/page/1367
    - object/page/1368
    - object/page/1369
    - object/page/1752
    - object/page/3901
    - object/page/3903
    - object/page/9035
    - object/page/9040
    - object/page/9511
  features: []
  topics:
    - topic/business-central/development-and-administration/administration-tasks-in-business-central
  localizations: []
  videos:
    - video/564XMP2IyLM
    - video/b-ixzwDS41c
  posts:
    - post/duiliotacconi-com/1601
    - post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-79-change-log-deletion-on-one-field--e06c352acf
  guidelines: []
  changes:
    - change/bcapps/12152
learn_toc_path:
  - Development and administration
  - Administration tasks in Business Central
  - Control your data
toc_file: business-central/TOC.md
parent: topic/business-central/development-and-administration/administration-tasks-in-business-central
children: []
coverage:
  learn: 8
  code: 17
  video: 2
  blog: 2
  guideline: 0
bc_forms:
  - 107
  - 592
  - 593
  - 594
  - 595
  - 630
  - 710
  - 1366
  - 1367
  - 1368
  - 1369
  - 1752
  - 3901
  - 3903
  - 9035
  - 9040
  - 9511
member_hash: 96a39e8b87183ae34a57bfc4fe5d5c7a6e745000b28e6bf7c2940db188c63b3a
narrative: generated
---

# Control your data

> Control your data covers Business Central administration of data: auditing changes, classifying and masking sensitive data, retention policies, encryption, storage cleanup, archiving, personal data requests, and database locks. It answers questions on who changed data, privacy handling, and reducing database size.

Path: [Development and administration](../../development-and-administration.md) > [Administration tasks in Business Central](../administration-tasks-in-business-central.md) > Control your data · tier official · system administration · narrative reviewed by Opus

## Overview

This section groups the administrator tools for governing data in Business Central. Some pages deal with visibility and compliance: auditing changes with change log and field monitoring, classifying data sensitivity, and responding to data subject requests for export, deletion or correction of personal data.

Other pages deal with data volume and protection: retention policies that delete outdated log and archived records, deleting documents or compressing old entries, the Data Archive Extension that keeps compressed entries for later analysis, and server data encryption. A separate page shows database locks for troubleshooting blocking.

Start with Auditing changes or Classifying data sensitivity for compliance needs, and with Clean up data with retention policies or Manage storage for reducing database size.

## Key points

- Auditing changes uses change log, field monitoring, data analysis, activity logs and retention policies to show who changed what and when.
- Data Sensitivity Classification labels sensitive or personal data in standard and custom fields; the Data Classification Worksheet is used to manage it.
- Field masking (MaskType property) with role-based visibility hides sensitive values in the UI; the page lists 2025 release wave 2.
- Retention policies delete outdated data in log entry and archived record tables, with filters, a mandatory retention period, job queue or manual runs, and logging.
- Data encryption on the server uses generated or imported keys and is manual only on-premises, since online encryption is mandatory.
- Batch jobs delete obsolete documents and date-compress historic entries to manage storage.
- The Data Archive Extension archives entries during date compression, exports to Excel or CSV, holds up to 10,000 records per archive, and stores in Tenant Media.
- The Data Privacy Utility handles portability, deletion, correction, Privacy Blocked marking and minor classification; the Database Locks page shows a snapshot of current locks.

## Learn pages

- [Auditing changes](https://learn.microsoft.com/dynamics365/business-central/across-log-changes): Track changes to data in selected tables and monitor user activities with change logs and activity logs in Business Central.
- [Classifying data sensitivity](https://learn.microsoft.com/dynamics365/business-central/admin-classifying-data-sensitivity): You must specify which type of data you store about people so that you can respond to data subject requests.
- [Clean up data with retention policies](https://learn.microsoft.com/dynamics365/business-central/admin-data-retention-policies): You can specify how often you want to delete certain types of data.
- [Manage data encryption \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/admin-manage-data-encryption): You can encrypt data on the Business Central server by generating new or importing existing encryption keys that you enable on the server.
- [Manage storage by deleting documents or compressing data](https://learn.microsoft.com/dynamics365/business-central/admin-manage-documents): Learn how to deal with accumulating historic documents (and reduce the amount of data stored in a database) by deleting or compressing them.
- [Responding to requests about users' personal data](https://learn.microsoft.com/dynamics365/business-central/admin-responding-to-requests-about-personal-data): This article explains how to respond to requests about personal data.
- [The Data Archive Extension](https://learn.microsoft.com/dynamics365/business-central/admin-archive-data): Archiving data creates a low-cost backup of your records.
- [View Database Locks](https://learn.microsoft.com/dynamics365/business-central/admin-view-database-locks): Learn how you can view information about customer database locks right from the client interface in Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12152 [MCP] Clear environment description after environment copy](../../../../changes/bcapps/12152.md) (code change): "Clear environment description after environment copy"
- [When Auditing meets Telemetry: a practical example.](../../../../posts/duiliotacconi-com/1601.md) (community post): "Change Log records what changed (user, date, deletion event) but not always why"
- [BC Friday Tips #79 Change Log Deletion on One Field](../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-79-change-log-deletion-on-one-field--e06c352acf.md) (community post): "Enable deletion logging on only one field in the primary key"
- [Use Retention Policies to Avoid Unnecessary Database Growth](../../../../videos/564XMP2IyLM.md) (video): "Use Retention Policies to Avoid Unnecessary Database Growth; automated deletion; data governance"
- [What's New: Customer-Managed Encryption Key (2025 release wave 1)](../../../../videos/b-ixzwDS41c.md) (video): "Customer-Managed Encryption Key; data governance; privacy; security"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 107 "Date Compr. Registers"](../../../../objects/page/107.md) · on [Table 87 "Date Compr. Register"](../../../../objects/table/87.md)
- [Page 592 "Change Log Setup"](../../../../objects/page/592.md) · on [Table 402 "Change Log Setup"](../../../../objects/table/402.md)
- [Page 593 "Change Log Setup (Table) List"](../../../../objects/page/593.md)
- [Page 594 "Change Log Setup (Field) List"](../../../../objects/page/594.md)
- [Page 595 "Change Log Entries"](../../../../objects/page/595.md) · on [Table 405 "Change Log Entry"](../../../../objects/table/405.md)
- [Page 630 "Data Archive List"](../../../../objects/page/630.md) · on [Table 600 "Data Archive"](../../../../objects/table/600.md)
- [Page 710 "Activity Log"](../../../../objects/page/710.md) · on [Table 710 "Activity Log"](../../../../objects/table/710.md)
- [Page 1366 "Field Monitoring Setup"](../../../../objects/page/1366.md) · on [Table 1366 "Field Monitoring Setup"](../../../../objects/table/1366.md)
- [Page 1367 "Monitored Field Log Entries"](../../../../objects/page/1367.md) · on [Table 405 "Change Log Entry"](../../../../objects/table/405.md)
- [Page 1368 "Monitor Field Setup Wizard"](../../../../objects/page/1368.md) · captioned "Field Monitoring Assisted Setup Guide"
- [Page 1369 "Monitored Fields Worksheet"](../../../../objects/page/1369.md) · on [Table 404 "Change Log Setup (Field)"](../../../../objects/table/404.md)
- [Page 1752 "Data Classification Wizard"](../../../../objects/page/1752.md) · captioned "Data Classification Assisted Setup Guide" · on [Table 1180 "Data Privacy Entities"](../../../../objects/table/1180.md)
- [Page 3901 "Retention Policy Setup Card"](../../../../objects/page/3901.md) · captioned "Retention Policy" · on [Table 3901 "Retention Policy Setup"](../../../../objects/table/3901.md)
- [Page 3903 "Retention Policy Setup List"](../../../../objects/page/3903.md) · captioned "Retention Policies" · on [Table 3901 "Retention Policy Setup"](../../../../objects/table/3901.md)
- [Page 9035 "Data Administration"](../../../../objects/page/9035.md)
- [Page 9040 "Data Administration Guide"](../../../../objects/page/9040.md)
- [Page 9511 "Database Locks"](../../../../objects/page/9511.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
