---
id: topic/business-central/business-functionality/company-hub
type: topic
title: Company hub
summary: Company hub in Business Central is a landing page for working across multiple companies and environments. It covers adding companies through environment links, using the hub to see KPIs and manage tasks, and troubleshooting connection and refresh problems.
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-15T00:50:59.995Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 10e0599949319eba7bed46c4eb8e9b3e295db143e8fdb95486714009f09b35a2
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
    title: Manage Work Across Multiple Companies in the Company Hub
    date: "2026-11-10"
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
  posts:
    - post/yzhums-com/72442
  guidelines: []
  changes:
    - change/bcapps/11741
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
  blog: 1
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

> Company hub in Business Central is a landing page for working across multiple companies and environments. It covers adding companies through environment links, using the hub to see KPIs and manage tasks, and troubleshooting connection and refresh problems.

Path: [Business functionality](../business-functionality.md) > Company hub · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

The company hub gives users one landing page to manage work across several Business Central companies and environments. Each connected company shows a financial overview with KPI data. Users can also assign, track, prioritize and filter tasks, and access is controlled by role.

The three pages follow the usual order of use. "Add companies to your company hub" explains how to connect companies and environments through environment links, test the connection and reload companies. "Manage Work Across Multiple Companies in the Company Hub" describes the landing page, its KPIs, task handling and environment link management. "Troubleshooting your company hub" covers what to do when connections fail or data does not refresh.

Start with the page on adding companies if the hub is empty. Go to the management page for day-to-day use, and to the troubleshooting page when a company does not appear or its data looks out of date.

## Key points

- Companies and environments are connected to the hub through environment links.
- Connections can be tested, and companies can be reloaded after changes.
- The hub shows a financial overview and KPI data for each connected company.
- Users can assign and track tasks, with prioritization and filtering.
- Role-based access control governs what users can see and do.
- Troubleshooting covers invalid URLs, offline environments, access restrictions and data refresh lag.
- The Check Errors action helps find connection problems.

## Learn pages

- [Add companies to your company hub](https://learn.microsoft.com/dynamics365/business-central/company-hub-add-company): Learn how to add companies from other Business Central environments to your company hub so you can manage work across environments.
- [Manage Work Across Multiple Companies in the Company Hub](https://learn.microsoft.com/dynamics365/business-central/company-hub): Use the Business Central company hub to view company summaries, open connected companies, and prioritize assigned tasks across online environments.
- [Troubleshooting your company hub](https://learn.microsoft.com/dynamics365/business-central/company-hub-troubleshooting): Troubleshoot common connectivity and data-refresh issues when using the company hub in Dynamics 365 Business Central to manage multiple companies.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11741 [MCP] Add company and environment descriptions](../../../changes/bcapps/11741.md) (code change): "Company Description field added to Company Information table as a BLOB"
- [Dynamics 365 Business Central: Open the same list in a new tab when switching companies](../../../posts/yzhums-com/72442.md) (community post): "open the same list page in a new tab while keeping the original company context"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1151 "COHUB Role Center"](../../../objects/page/1151.md) · captioned "Company Hub"
- [Page 1154 "COHUB My User Tasks"](../../../objects/page/1154.md) · captioned "My User Tasks" · on [Table 1154 "COHUB User Task"](../../../objects/table/1154.md)
- [Page 1155 "COHUB Group List"](../../../objects/page/1155.md) · captioned "Groups" · on [Table 1155 "COHUB Group"](../../../objects/table/1155.md)
- [Page 1165 "COHUB Enviroment Card"](../../../objects/page/1165.md) · captioned "Environment Link" · on [Table 1152 "COHUB Enviroment"](../../../objects/table/1152.md)
- [Page 1166 "COHUB Enviroment List"](../../../objects/page/1166.md) · captioned "Environments" · on [Table 1152 "COHUB Enviroment"](../../../objects/table/1152.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
