---
id: topic/dev-itpro/security-privacy-and-compliance/auditing
type: topic
title: Auditing
summary: Auditing in Business Central covers how to track data changes, audit security-related tables, and review events sent to Microsoft Purview. It answers questions about who changed what and when, which tools to use, and which administrative events are logged.
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:02.608Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f4088c66bfdfa0fc332c63ce05bf66e3c300121ced7a5faafb1fcd7aa357cac8
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-log-changes
    title: Auditing changes
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/auditing/audit-events-in-purview
    title: Auditing events in Microsoft Purview
    date: "2026-07-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/auditing/auditing-overview
    title: Business Central Auditing Overview
    date: "2026-10-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-auditing
    title: Security auditing in Business Central
    date: "2024-10-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/across-log-changes
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/auditing/audit-events-in-purview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/auditing/auditing-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-auditing
  objects:
    - object/page/592
    - object/page/593
    - object/page/594
    - object/page/595
    - object/page/710
    - object/page/1366
    - object/page/1367
    - object/page/1368
    - object/page/1369
  features: []
  topics:
    - topic/dev-itpro/security-privacy-and-compliance
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Security, privacy, and compliance
  - Auditing
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/security-privacy-and-compliance
children: []
coverage:
  learn: 4
  code: 9
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 592
  - 593
  - 594
  - 595
  - 710
  - 1366
  - 1367
  - 1368
  - 1369
member_hash: 0928563d34495fa8afba95bd72d6131e45454da19c152e60a389820d21c65230
narrative: generated
---

# Auditing

> Auditing in Business Central covers how to track data changes, audit security-related tables, and review events sent to Microsoft Purview. It answers questions about who changed what and when, which tools to use, and which administrative events are logged.

Path: [Security, privacy, and compliance](../security-privacy-and-compliance.md) > Auditing · tier official · system none · narrative reviewed (checked by Opus)

## Overview

Auditing in Business Central helps administrators track changes, review user permissions, and support data governance. The section starts with an overview page that introduces change log tracking, permission review, security auditing, data classification, and Microsoft Purview integration.

Two pages cover auditing inside the product. "Auditing changes" describes the change log, field monitoring, data analysis, sensitive field monitoring, retention policies, and activity logs. "Security auditing" focuses on changes to critical tables such as Access Control, Permission, User, and Change Log Setup entries, and shows how to use Data Analysis on the Change Log Entries page.

A fourth page documents the events Business Central emits automatically to Microsoft Purview, grouped by area such as environment, extension, user, company, integration, and Copilot activities. Begin with the overview, then go to the change and security pages for in-product auditing, and to the Purview page for tenant-level audit events.

## Key points

- The change log, field monitoring, and data analysis features show who changed what and when.
- Sensitive field monitoring, retention policies, and activity logs are part of auditing changes.
- Security auditing tracks changes to Access Control, Permission, User, and Change Log Setup entries.
- Data Analysis on the Change Log Entries page lets you analyze audit trail data interactively.
- Business Central emits auditable events automatically to Microsoft Purview.
- Purview events cover environment, extension, user, company, integration, Copilot, cloud migration, and reporting activities.
- The overview page also covers user permissions review and data classification.

## Learn pages

- [Auditing changes](https://learn.microsoft.com/dynamics365/business-central/across-log-changes): Track changes to data in selected tables and monitor user activities with change logs and activity logs in Business Central.
- [Auditing events in Microsoft Purview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/auditing/audit-events-in-purview): Discover how Business Central automatically emits Create, Update, and Delete events to Microsoft Purview auditing solutions.
- [Business Central Auditing Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/auditing/auditing-overview): Learn about Business Central auditing for reviewing permissions, tracking data changes, and analyzing change logs, plus related data classification guidance.
- [Security auditing in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-auditing): Learn about the built-in capabilities in Business Central that let you track and audit usage of your Business Central.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 592 "Change Log Setup"](../../../objects/page/592.md) · on [Table 402 "Change Log Setup"](../../../objects/table/402.md)
- [Page 593 "Change Log Setup (Table) List"](../../../objects/page/593.md)
- [Page 594 "Change Log Setup (Field) List"](../../../objects/page/594.md)
- [Page 595 "Change Log Entries"](../../../objects/page/595.md) · on [Table 405 "Change Log Entry"](../../../objects/table/405.md)
- [Page 710 "Activity Log"](../../../objects/page/710.md) · on [Table 710 "Activity Log"](../../../objects/table/710.md)
- [Page 1366 "Field Monitoring Setup"](../../../objects/page/1366.md) · on [Table 1366 "Field Monitoring Setup"](../../../objects/table/1366.md)
- [Page 1367 "Monitored Field Log Entries"](../../../objects/page/1367.md) · on [Table 405 "Change Log Entry"](../../../objects/table/405.md)
- [Page 1368 "Monitor Field Setup Wizard"](../../../objects/page/1368.md) · captioned "Field Monitoring Assisted Setup Guide"
- [Page 1369 "Monitored Fields Worksheet"](../../../objects/page/1369.md) · on [Table 404 "Change Log Setup (Field)"](../../../objects/table/404.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
