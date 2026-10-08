---
id: topic/business-central/analytics-business-intelligence-and-repo/built-in-reports/project
type: topic
title: Project
summary: "Project built-in reporting and monitoring in Business Central: Project Reports and the Report Explorer, work-in-process (WIP) calculation and posting to the general ledger, and recording consumption or usage of project resources and items. It answers questions about analyzing project activity, valuing ongoing projects, and logging usage."
tier: official
language: en
system: projects
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:12.291Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5bfedace38c86ee49ef63545e78c0d211380f903d45fa46e390b2230e5c3a154
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-how-monitor-progress-performance
    title: Monitor project progress and performance
    date: "2026-07-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/project-reports
    title: Project Reports
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-how-record-job-usage
    title: Record Consumption or Usage of Project Resources and Items
    date: "2026-07-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/projects-how-monitor-progress-performance
    - https://learn.microsoft.com/dynamics365/business-central/project-reports
    - https://learn.microsoft.com/dynamics365/business-central/projects-how-record-job-usage
  objects:
    - object/page/89
    - object/page/92
    - object/page/1010
    - object/report/1006
    - object/report/1007
    - object/report/1008
    - object/report/1009
    - object/report/1010
    - object/report/1011
    - object/report/1012
    - object/report/1013
    - object/report/1014
    - object/report/1015
    - object/report/1016
    - object/report/1017
    - object/report/1101
    - object/report/1103
    - object/report/1105
    - object/report/1106
    - object/report/1107
  features: []
  topics:
    - topic/business-central/analytics-business-intelligence-and-repo/built-in-reports
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Analytics, business intelligence, and reporting
  - Built-in reports
  - Project
toc_file: business-central/TOC.md
parent: topic/business-central/analytics-business-intelligence-and-repo/built-in-reports
children: []
coverage:
  learn: 3
  code: 20
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 89
  - 92
  - 1006
  - 1007
  - 1008
  - 1009
  - 1010
  - 1011
  - 1012
  - 1013
  - 1014
  - 1015
  - 1016
  - 1017
  - 1101
  - 1103
  - 1105
  - 1106
  - 1107
member_hash: 999ef32fde19e366d32b5c4f371e99660ff964797b6cbe4bd5dc8534fefeb259
narrative: generated
---

# Project

> Project built-in reporting and monitoring in Business Central: Project Reports and the Report Explorer, work-in-process (WIP) calculation and posting to the general ledger, and recording consumption or usage of project resources and items. It answers questions about analyzing project activity, valuing ongoing projects, and logging usage.

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [Built-in reports](../built-in-reports.md) > Project · tier official · system projects · narrative reviewed (checked by Opus)

## Overview

This section covers how project professionals analyze and monitor projects in Business Central. Project Reports offers reporting tools for reviewing current and past project activity and project management analytics. Its listed features include the Report Explorer.\n\nThe WIP page explains how to estimate the financial value of ongoing projects in the general ledger. You define a WIP method, calculate WIP, post it to G/L, and track the results in WIP fields on the Project Card. The page also touches on project task grouping and completion entries. The consumption page covers how usage of resources and items is recorded through project journals and planning lines, including creating inventory and warehouse picks.\n\nStart with Project Reports for an overview of the available reporting. Then go to the WIP page for financial valuation, or the consumption and usage page for how actual usage reaches the project.

## Key points

- Project Reports gives project professionals tools to analyze current and past project activity and project management analytics.
- Project Reports features include the Report Explorer and project analytics.
- WIP estimates the financial value of ongoing projects in the general ledger.
- WIP methods listed: cost value, sales value, recognizable cost, percentage of completion, and completed contract.
- WIP is calculated, posted to G/L, and monitored through WIP fields on the Project Card.
- Consumption and usage of resources and items is recorded through project journals and project planning lines.
- Usage-related features include Apply Usage Link by Default, Qty. To Transfer to Journal, Create Project Journal Lines, and budget and billable lines.
- Inventory and warehouse picks can be created for project items.

## Learn pages

- [Monitor project progress and performance](https://learn.microsoft.com/dynamics365/business-central/projects-how-monitor-progress-performance): Describes how you can create a work in process (WIP) method and calculate WIP to estimate the financial value of projects while they're ongoing.
- [Project Reports](https://learn.microsoft.com/dynamics365/business-central/project-reports): See which project reports are available in the standard version of Business Central so that you can keep track of your business.
- [Record Consumption or Usage of Project Resources and Items](https://learn.microsoft.com/dynamics365/business-central/projects-how-record-job-usage): This article describes how to record the consumption or use of items or resources for projects in project management.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 89 "Job List"](../../../../objects/page/89.md) · captioned "Projects" · on [Table 167 "Job"](../../../../objects/table/167.md)
- [Page 92 "Job Ledger Entries"](../../../../objects/page/92.md) · captioned "Project Ledger Entries" · on [Table 169 "Job Ledger Entry"](../../../../objects/table/169.md)
- [Page 1010 "Job WIP Methods"](../../../../objects/page/1010.md) · captioned "Project WIP Methods" · on [Table 1006 "Job WIP Method"](../../../../objects/table/1006.md)
- [Report 1006 "Job - Planning Lines"](../../../../objects/report/1006.md) · captioned "Project - Planning Lines"
- [Report 1007 "Job - Transaction Detail"](../../../../objects/report/1007.md) · captioned "Project Task - Transaction Detail"
- [Report 1008 "Job Analysis"](../../../../objects/report/1008.md) · captioned "Project Analysis"
- [Report 1009 "Job Actual To Budget"](../../../../objects/report/1009.md) · captioned "Project Actual To Budget"
- [Report 1010 "Job WIP To G/L"](../../../../objects/report/1010.md) · captioned "Project WIP To G/L"
- [Report 1011 "Job Suggested Billing"](../../../../objects/report/1011.md) · captioned "Project Suggested Billing"
- [Report 1012 "Jobs per Customer"](../../../../objects/report/1012.md) · captioned "Projects per Customer"
- [Report 1013 "Items per Job"](../../../../objects/report/1013.md) · captioned "Items per Project"
- [Report 1014 "Jobs per Item"](../../../../objects/report/1014.md) · captioned "Projects per Item"
- [Report 1015 "Job Register"](../../../../objects/report/1015.md) · captioned "Project Register"
- [Report 1016 "Job Quote"](../../../../objects/report/1016.md) · captioned "Project Quote"
- [Report 1017 "Job Task Quote"](../../../../objects/report/1017.md) · captioned "Project Task Quote"
- [Report 1101 "Resource - List"](../../../../objects/report/1101.md)
- [Report 1103 "Resource Register"](../../../../objects/report/1103.md)
- [Report 1105 "Resource Statistics"](../../../../objects/report/1105.md)
- [Report 1106 "Resource Usage"](../../../../objects/report/1106.md) · captioned "Resource Utilization"
- [Report 1107 "Resource - Cost Breakdown"](../../../../objects/report/1107.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
