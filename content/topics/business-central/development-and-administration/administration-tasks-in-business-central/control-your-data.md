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
  at: "2026-10-07T09:49:55.895Z"
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
  objects: []
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
learn_toc_path:
  - Development and administration
  - Administration tasks in Business Central
  - Control your data
toc_file: business-central/TOC.md
parent: topic/business-central/development-and-administration/administration-tasks-in-business-central
children: []
coverage:
  learn: 8
  code: 0
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

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [When Auditing meets Telemetry: a practical example.](../../../../posts/duiliotacconi-com/1601.md) (community post): "Change Log records what changed (user, date, deletion event) but not always why"
- [BC Friday Tips #79 Change Log Deletion on One Field](../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-79-change-log-deletion-on-one-field--e06c352acf.md) (community post): "Enable deletion logging on only one field in the primary key"
- [Use Retention Policies to Avoid Unnecessary Database Growth](../../../../videos/564XMP2IyLM.md) (video): "Use Retention Policies to Avoid Unnecessary Database Growth; automated deletion; data governance"
- [What's New: Customer-Managed Encryption Key (2025 release wave 1)](../../../../videos/b-ixzwDS41c.md) (video): "Customer-Managed Encryption Key; data governance; privacy; security"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 107, 592, 593, 594, 595, 630, 710, 1366, 1367, 1368, 1369, 1752, 3901, 3903, 9035, 9040, 9511.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
