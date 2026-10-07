---
id: topic/dev-itpro/development/troubleshooting/troubleshooting-in-the-client
type: topic
title: Troubleshooting in the client
summary: Troubleshooting in the Business Central client covers tools for inspecting pages, understanding error dialogs, viewing database locks and table information, finding missing indexes, discovering events, exporting report data, and profiling performance. It also covers personalization, role customization, permissions, and on-premises mobile app issues.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:19:25.371Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 61dfa9dcc108824aadbc8543902a374a3b112371df72c89c80f117528100fb44
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/report-analyze-excel
    title: Analyzing report data with Excel and XML
    date: "2024-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-personalization-manage
    title: Customizing Pages for Roles
    date: "2024-06-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-define-granular-permissions
    title: Define granular permissions
    date: "2026-03-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-events-discoverability
    title: Events discoverability
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-inspect-page
    title: Inspecting pages in Business Central
    date: "2025-10-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/database-missing-indexes
    title: Missing indexes in Business Central databases
    date: "2025-03-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/performance-profiler-overview
    title: Performance Profiler overview
    date: "2024-08-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-personalization-user
    title: Personalize your workspace
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/scheduled-performance-profiler-overview
    title: Scheduled performance profiler overview
    date: "2026-08-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-troubleshooting-the-mobile-app
    title: Troubleshooting the Business Central Mobile App On-Premises
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-error-dialog
    title: Understanding the error dialog
    date: "2024-01-03"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-view-table-information
    title: View table information
    date: "2025-02-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/report-analyze-excel
    - https://learn.microsoft.com/dynamics365/business-central/ui-personalization-manage
    - https://learn.microsoft.com/dynamics365/business-central/ui-define-granular-permissions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-events-discoverability
    - https://learn.microsoft.com/dynamics365/business-central/across-inspect-page
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/database-missing-indexes
    - https://learn.microsoft.com/dynamics365/business-central/ui-personalization-user
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-troubleshooting-the-mobile-app
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-error-dialog
    - https://learn.microsoft.com/dynamics365/business-central/admin-view-database-locks
    - https://learn.microsoft.com/dynamics365/business-central/admin-view-table-information
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/troubleshooting
    - topic/dev-itpro/development/troubleshooting/troubleshooting-in-the-client/performance-profiler
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Troubleshooting
  - Troubleshooting in the client
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/troubleshooting
children:
  - topic/dev-itpro/development/troubleshooting/troubleshooting-in-the-client/performance-profiler
coverage:
  learn: 13
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 119
  - 8700
  - 8705
  - 8930
  - 9000
  - 9004
  - 9005
  - 9006
  - 9007
  - 9009
  - 9010
  - 9016
  - 9017
  - 9020
  - 9022
  - 9024
  - 9026
  - 9027
  - 9030
  - 9171
  - 9511
  - 9800
  - 9802
  - 9807
  - 9808
  - 9816
  - 9830
  - 9831
  - 9855
  - 9862
  - 9865
  - 9874
  - 9878
  - 9883
member_hash: 0bde8a1178feaed56383087a1577e0ce683f1121daf006c5338f6c7f22b08df6
narrative: generated
---

# Troubleshooting in the client

> Troubleshooting in the Business Central client covers tools for inspecting pages, understanding error dialogs, viewing database locks and table information, finding missing indexes, discovering events, exporting report data, and profiling performance. It also covers personalization, role customization, permissions, and on-premises mobile app issues.

Path: [Development](../../development.md) > [Troubleshooting](../troubleshooting.md) > Troubleshooting in the client · tier official · system development · narrative reviewed by Opus

## Overview

This section collects tools and pages that help developers, administrators, and advanced users diagnose problems from within the Business Central client. They fall into a few groups: diagnosing errors and performance, examining data and the database, and adjusting what users see and can do.

## Key points

- Understanding the error dialog explains the Copy Details section, AL call stacks, and the Application Insights session ID for investigating user errors.
- Performance Profiler subtopic: record and analyze business process performance, read call trees, schedule profiling for specific users and activity types, and share or download profiles.
- Inspecting pages shows page design, elements, and data sources, with Visual Studio Code integration and permission control.
- View Database Locks shows a snapshot of current locks to troubleshoot transaction blocking, and View table information shows record counts, data and index sizes, and compression types.
- Missing indexes uses SQL Server Dynamic Management Views to suggest equality, inequality, and include columns.
- Analyzing report data with Excel and XML exports report datasets, metadata, and filter information as data-only Excel or XML.
- Events discoverability uses the Event Recorder to capture events during a scenario and produce AL snippets for subscribers.
- Personalizing the workspace, customizing pages for roles, defining granular permissions with security filters, and fixing on-premises mobile app issues (icon fonts, device date, client type errors) are also covered.

## Subtopics

- [Performance Profiler](troubleshooting-in-the-client/performance-profiler.md) (2 pages)

## More Learn pages

- [Analyzing report data with Excel and XML](https://learn.microsoft.com/dynamics365/business-central/report-analyze-excel): Learn how to use Excel and XML to analyze a report dataset.
- [Customizing Pages for Roles](https://learn.microsoft.com/dynamics365/business-central/ui-personalization-manage): Learn how to customize the user interface for a profile (role) so that all users assigned that role see a customized workspace.
- [Define granular permissions](https://learn.microsoft.com/dynamics365/business-central/ui-define-granular-permissions): This article describes how to define granular permissions and assign each user the permission sets that they need to do their jobs.
- [Events discoverability](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-events-discoverability): Using the Event Recorder, you can record the events that are published and raised while performing the actions of your scenario.
- [Inspecting pages in Business Central](https://learn.microsoft.com/dynamics365/business-central/across-inspect-page): Use page inspection feature to view page design and data source details. Ideal for troubleshooting and understanding data in Business Central.
- [Missing indexes in Business Central databases](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/database-missing-indexes): Learn about missing indexes and the database missing indexes page.
- [Personalize your workspace](https://learn.microsoft.com/dynamics365/business-central/ui-personalization-user): Learn how to customize the user interface and personalize your workspace to suit your way of working and personal preferences in Business Central.
- [Troubleshooting the Business Central Mobile App On-Premises](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-troubleshooting-the-mobile-app): Find help for resolving problems with the Business Central web, tablet, and phone clients when you run Business Central on-premises.
- [Understanding the error dialog](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-error-dialog): Understand the different parts the error dialog to be able to help mitigate issues for users
- [View Database Locks](https://learn.microsoft.com/dynamics365/business-central/admin-view-database-locks): Learn how you can view information about customer database locks right from the client interface in Business Central.
- [View table information](https://learn.microsoft.com/dynamics365/business-central/admin-view-table-information): Learn how you can view information about the database tables in Business Central.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 119, 8700, 8705, 8930, 9000, 9004, 9005, 9006, 9007, 9009, 9010, 9016, 9017, 9020, 9022, 9024, 9026, 9027, 9030, 9171, 9511, 9800, 9802, 9807, 9808, 9816, 9830, 9831, 9855, 9862, 9865, 9874, 9878, 9883.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
