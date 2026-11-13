---
id: topic/business-central/development-and-administration/administration-tasks-in-business-central/control-your-data
type: topic
title: Control your data
summary: Control your data covers how administrators audit, classify, protect, retain, archive and delete data in Business Central. It answers questions about change logs, data sensitivity, encryption, retention policies, privacy requests, storage cleanup, and database locks.
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-13T01:01:22.016Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 473a72309d1a6c89242034ee9952db0914fb980ebfed5e2287d8698d95ea29dc
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
    title: Classify Data Sensitivity in Business Central
    date: "2026-11-12"
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
    title: Manage Data Encryption in Business Central
    date: "2026-11-12"
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
    date: "2026-10-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-archive-data
    title: The Data Archive Extension
    date: "2026-11-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-view-database-locks
    title: View Database Locks
    date: "2026-11-10"
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
    - object/page/1751
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
    - video/DnZJ2iOgIjI
  posts:
    - post/olofsimren-com/3564
    - post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-33-restore-environment--42bac06f08
    - post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-79-change-log-deletion-on-one-field--e06c352acf
    - post/yzhums-com/63913
    - post/yzhums-com/71047
    - post/yzhums-com/76760
  guidelines: []
  changes:
    - change/bcapps/12152
    - change/bcapps/12429
learn_toc_path:
  - Development and administration
  - Administration tasks in Business Central
  - Control your data
toc_file: business-central/TOC.md
parent: topic/business-central/development-and-administration/administration-tasks-in-business-central
children: []
coverage:
  learn: 8
  code: 18
  video: 3
  blog: 6
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
  - 1751
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

> Control your data covers how administrators audit, classify, protect, retain, archive and delete data in Business Central. It answers questions about change logs, data sensitivity, encryption, retention policies, privacy requests, storage cleanup, and database locks.

Path: [Development and administration](../../development-and-administration.md) > [Administration tasks in Business Central](../administration-tasks-in-business-central.md) > Control your data · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section groups the administration tasks that govern data in Business Central: who changed it, how sensitive it is, how long it is kept, and how it is removed or protected. There are no subtopics, so all guidance sits in eight pages.

For tracking and governance, start with Auditing changes (change log, field monitoring, data analysis) and Classify Data Sensitivity (Sensitive, Personal, Company Confidential, Normal, plus field masking). For lifecycle and storage, use retention policies, the batch jobs for deleting documents and compressing data, and the Data Archive extension, which keeps copies of entries that date compression deletes.

For compliance and operations, see Responding to requests about users' personal data (Data Privacy Utility), Manage Data Encryption (on-premises key management) and View Database Locks (diagnosing lock timeouts).

## Key points

- Auditing changes uses change log, field monitoring, data analysis, and activity logs to show who changed what and when.
- Data classification assigns Sensitive, Personal, Company Confidential, or Normal through the DataClassification property, with bulk classification and field masking via MaskType.
- Retention policies delete outdated data in log entry and archived record tables, with filter criteria and a mandatory retention period. They run through the job queue automatically or can be applied manually.
- Batch jobs delete obsolete documents (such as sales orders and invoices) and compress historic entries by date or status to manage database storage.
- The Data Archive extension preserves entries removed by date compression and exports them to Excel or CSV.
- Data subject requests are handled with the Data Privacy Utility: export, deletion, and modification of personal data, including the Privacy Blocked checkbox.
- Application-level encryption for on-premises environments is managed on the Data Encryption Management page: enable, disable, import, change, and export keys with password protection.
- The Database Locks page shows granted and waiting lock requests, with user, session, and executing AL code, to diagnose lock timeouts.

## Learn pages

- [Auditing changes](https://learn.microsoft.com/dynamics365/business-central/across-log-changes): Track changes to data in selected tables and monitor user activities with change logs and activity logs in Business Central.
- [Classify Data Sensitivity in Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-classifying-data-sensitivity): Classify personal and sensitive data in Business Central, manage field sensitivity levels, and understand the limits of masking values in the user interface.
  - In the observatory: [Page 2610 "Feature Management"](../../../../objects/page/2610.md)
- [Clean up data with retention policies](https://learn.microsoft.com/dynamics365/business-central/admin-data-retention-policies): You can specify how often you want to delete certain types of data.
  - In the observatory: [Codeunit 3905 "Reten. Pol. Allowed Tables"](../../../../objects/codeunit/3905.md)
- [Manage Data Encryption in Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-manage-data-encryption): Manage application data encryption keys in Business Central on-premises, and understand how this protection differs from database encryption at rest.
  - In the observatory: [Page 9905 "Data Encryption Management"](../../../../objects/page/9905.md)
- [Manage storage by deleting documents or compressing data](https://learn.microsoft.com/dynamics365/business-central/admin-manage-documents): Learn how to deal with accumulating historic documents (and reduce the amount of data stored in a database) by deleting or compressing them.
  - In the observatory: [Codeunit 9040 "Date Compression"](../../../../objects/codeunit/9040.md)
- [Responding to requests about users' personal data](https://learn.microsoft.com/dynamics365/business-central/admin-responding-to-requests-about-personal-data): This article explains how to respond to requests about personal data.
  - In the observatory: [Page 459 "Sales & Receivables Setup"](../../../../objects/page/459.md), [Page 460 "Purchases & Payables Setup"](../../../../objects/page/460.md), [Table 5050 "Contact"](../../../../objects/table/5050.md)
- [The Data Archive Extension](https://learn.microsoft.com/dynamics365/business-central/admin-archive-data): Preserve records before date compression deletes them. Learn how to view data archives, export them to Excel or CSV, and manage archived data.
  - In the observatory: [Page 2500 "Extension Management"](../../../../objects/page/2500.md)
- [View Database Locks](https://learn.microsoft.com/dynamics365/business-central/admin-view-database-locks): View a snapshot of database locks in Business Central to identify affected tables, sessions, users, and available details about the executing AL code.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12152 [MCP] Clear environment description after environment copy](../../../../changes/bcapps/12152.md) (code change): "Clear environment description after environment copy"
- [#12429 Skip enabling incomplete existing retention policies on install/upgrade](../../../../changes/bcapps/12429.md) (code change): "Skip enabling incomplete retention policies during install and upgrade"
- [Record Deletion Tool for Business Central in AppSource](../../../../posts/olofsimren-com/3564.md) (community post): "Allows cleanup of test transactions in a company."
- [BC Friday Tips #34 Restore Environment](../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-33-restore-environment--42bac06f08.md) (community post): "recovering accidentally deleted production data when no other backup exists"
- [BC Friday Tips #79 Change Log Deletion on One Field](../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-79-change-log-deletion-on-one-field--e06c352acf.md) (community post): "Enable deletion logging on only one field in the primary key"
- [Dynamics 365 Business Central: How to easily check who created an environment, company and record and when](../../../../posts/yzhums-com/63913.md) (community post): "Every table has four system audit fields created and modified, at and by"
- [Business Central 2026 release wave 1 (BC28): Show avatars for record creators and modifiers in lists (Created / Updated by) – Display data audit fields without customization](../../../../posts/yzhums-com/71047.md) (community post): "visual avatars in list pages to display which user or agent created or modified records"
- [Dynamics 365 Business Central: How to import Change Log Setup (Table/Field) using Configuration Packages](../../../../posts/yzhums-com/76760.md) (community post): "The change log records direct user changes to data in the tables and fields"
- [Use Retention Policies to Avoid Unnecessary Database Growth](../../../../videos/564XMP2IyLM.md) (video): "Use Retention Policies to Avoid Unnecessary Database Growth; automated deletion; data governance"
- [What's New: Customer-Managed Encryption Key (2025 release wave 1)](../../../../videos/b-ixzwDS41c.md) (video): "Customer-Managed Encryption Key; data governance; privacy; security"
- [What's New: Customer-Managed Encryption Key & Lockbox (2024 release wave 2)](../../../../videos/DnZJ2iOgIjI.md) (video): "customer-managed encryption key; lockbox; security; data encryption; enterprise policy"

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
- [Page 1751 "Data Classification Worksheet"](../../../../objects/page/1751.md)
- [Page 1752 "Data Classification Wizard"](../../../../objects/page/1752.md) · captioned "Data Classification Assisted Setup Guide" · on [Table 1180 "Data Privacy Entities"](../../../../objects/table/1180.md)
- [Page 3901 "Retention Policy Setup Card"](../../../../objects/page/3901.md) · captioned "Retention Policy" · on [Table 3901 "Retention Policy Setup"](../../../../objects/table/3901.md)
- [Page 3903 "Retention Policy Setup List"](../../../../objects/page/3903.md) · captioned "Retention Policies" · on [Table 3901 "Retention Policy Setup"](../../../../objects/table/3901.md)
- [Page 9035 "Data Administration"](../../../../objects/page/9035.md)
- [Page 9040 "Data Administration Guide"](../../../../objects/page/9040.md)
- [Page 9511 "Database Locks"](../../../../objects/page/9511.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
