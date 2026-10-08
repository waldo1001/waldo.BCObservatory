---
id: topic/business-central/business-functionality/company-hub
type: topic
title: Company hub
summary: Company hub in Business Central is a landing page for working across multiple companies and environments. It covers adding companies through environment links, using the dashboard for financial overview and assigned tasks, and troubleshooting connection and refresh problems.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:09.299Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 76d26feaef96d197e9e3889937c10f28411c5840ee47fe4240ed902b6dff6784
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/company-hub-add-company
    title: Add companies to your company hub
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/company-hub
    title: Manage work across multiple companies in the company hub
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/company-hub-troubleshooting
    title: Troubleshooting your company hub
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/company-hub-add-company
    - https://learn.microsoft.com/dynamics365/business-central/company-hub
    - https://learn.microsoft.com/dynamics365/business-central/company-hub-troubleshooting
  objects:
    - object/page/1151
    - object/page/1154
    - object/page/1155
    - object/page/1165
    - object/page/1166
  features: []
  topics:
    - topic/business-central/business-functionality
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Company hub
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality
children: []
coverage:
  learn: 3
  code: 5
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 1151
  - 1154
  - 1155
  - 1165
  - 1166
member_hash: 98544335c85ccbc9658bd676f1103b3bf0f8589879af1dd977134f66888f9516
narrative: generated
---

# Company hub

> Company hub in Business Central is a landing page for working across multiple companies and environments. It covers adding companies through environment links, using the dashboard for financial overview and assigned tasks, and troubleshooting connection and refresh problems.

Path: [Business functionality](../business-functionality.md) > Company hub · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

Company hub gives users who work in several Business Central companies or environments one place to see their work. The dashboard shows a financial overview with KPIs, the tasks assigned to the user, and a multi-company overview.

The three pages follow a natural order. Start with "Add companies to your company hub" to link companies and environments through environment links, test the connection, and reload companies. Then "Manage work across multiple companies in the company hub" explains the dashboard, task assignment, multi-company overview, and user permissions. "Troubleshooting your company hub" helps when a company does not connect or data looks out of date.

## Key points

- Companies and environments are added to the company hub through environment links.
- Connection testing and company reload are available when linking companies.
- The company hub dashboard shows a multi-company overview with KPI tracking.
- Users can see and manage the tasks assigned to them from the company hub.
- The page on managing work across companies also covers user permissions.
- Troubleshooting covers invalid URLs, offline environments, access restrictions, and data refresh lag.
- The Check Errors action and connection testing help diagnose connection problems.

## Learn pages

- [Add companies to your company hub](https://learn.microsoft.com/dynamics365/business-central/company-hub-add-company): Learn how to add companies from other Business Central environments to your company hub so you can manage work across environments.
- [Manage work across multiple companies in the company hub](https://learn.microsoft.com/dynamics365/business-central/company-hub): Learn about the company hub in Dynamics 365 Business Central that you use to manage your work across multiple companies.
- [Troubleshooting your company hub](https://learn.microsoft.com/dynamics365/business-central/company-hub-troubleshooting): Troubleshoot common connectivity and data-refresh issues when using the company hub in Dynamics 365 Business Central to manage multiple companies.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1151 "COHUB Role Center"](../../../objects/page/1151.md) · captioned "Company Hub"
- [Page 1154 "COHUB My User Tasks"](../../../objects/page/1154.md) · captioned "My User Tasks" · on [Table 1154 "COHUB User Task"](../../../objects/table/1154.md)
- [Page 1155 "COHUB Group List"](../../../objects/page/1155.md) · captioned "Groups" · on [Table 1155 "COHUB Group"](../../../objects/table/1155.md)
- [Page 1165 "COHUB Enviroment Card"](../../../objects/page/1165.md) · captioned "Environment Link" · on [Table 1152 "COHUB Enviroment"](../../../objects/table/1152.md)
- [Page 1166 "COHUB Enviroment List"](../../../objects/page/1166.md) · captioned "Environments" · on [Table 1152 "COHUB Enviroment"](../../../objects/table/1152.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
