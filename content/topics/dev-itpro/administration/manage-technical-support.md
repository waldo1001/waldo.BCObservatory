---
id: topic/dev-itpro/administration/manage-technical-support
type: topic
title: Manage technical support
summary: Technical support management for Business Central covers troubleshooting tools, escalating issues to Microsoft, reporting performance problems, and reporting production outages. It answers questions about gathering diagnostics and about how admins open support requests.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:41.849Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4a32238b41c6d51c654c2d7069e3d2301a93d9e202acf621129468e9457603fc
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/raise-support-case
    title: Escalate support issues to Microsoft
    date: "2021-12-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/manage-technical-support
    title: Managing technical support
    date: "2023-12-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/report-performance-issue
    title: Report a performance issue
    date: "2024-01-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/report-outage
    title: Report Customer Outages
    date: "2025-10-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-troubleshooting-overview
    title: Troubleshooting tools and guides overview
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/raise-support-case
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/manage-technical-support
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/report-performance-issue
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/report-outage
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-troubleshooting-overview
  objects: []
  features: []
  topics:
    - topic/dev-itpro/administration
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Administration
  - Manage technical support
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 74b06e25253a90a6e8803df77f466b24fede6c794251282d0e1b93aa2aa6fffe
narrative: generated
---

# Manage technical support

> Technical support management for Business Central covers troubleshooting tools, escalating issues to Microsoft, reporting performance problems, and reporting production outages. It answers questions about gathering diagnostics and about how admins open support requests.

Path: [Administration](../administration.md) > Manage technical support · tier official · system administration · narrative reviewed by Opus

## Overview

This section is for administrators and support staff who need to diagnose Business Central problems and, when needed, hand them to Microsoft. It has no subtopics. The five pages cover the support process and the tools used along the way.

Start with "Managing technical support" for the overall tools and processes: the Help and Support page, telemetry analysis, sandbox environments, Application Insights, event recording and page inspection. "Troubleshooting tools and guides overview" then points to resources for gathering information and finding causes, such as the Error dialog, Page Inspector, Event Recorder, database locks, Performance Profiler and AL Profiler.

When a problem needs Microsoft, use "Escalate support issues to Microsoft" for submitting requests through the Partner Center or the Business Central Administration Center. Two pages cover specific cases: "Report a performance issue" explains which diagnostics to include, and "Report Customer Outages" explains how to report a production outage when users cannot sign in.

## Key points

- Delegated admins can submit support requests to Microsoft through the Partner Center or the Business Central Administration Center.
- The Help and Support page, telemetry analysis, sandbox environments and Application Insights are part of the support toolset.
- Client troubleshooting tools include the Error dialog, Page Inspector, Event Recorder and database lock information.
- Performance reports should include Performance Profiler results (the in-client profiler), session details such as session ID, and telemetry logs.
- AL Profiler, snapshot debugging and telemetry are listed as deeper troubleshooting resources.
- Production outages, where users cannot sign in, are reported with the Report Production Outage action in the admin center, which creates a support ticket.
- Internal and delegated administrators can both report customer outages.

## Learn pages

- [Escalate support issues to Microsoft](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/raise-support-case): Learn about how to escalate technical support cases on behalf of your Business Central online customers as the delegated administrator.
- [Managing technical support](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/manage-technical-support): Learn about how to support your Business Central users, both online and on-premises, as the internal or delegated administrator.
- [Report a performance issue](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/report-performance-issue): Learn about how to report a performance issue on behalf of your Business Central online customers as the delegated administrator.
- [Report Customer Outages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/report-outage): Learn about how to report a suspected service outage on behalf of your Business Central online customers as the delegated administrator.
- [Troubleshooting tools and guides overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-troubleshooting-overview): An overview of tools and processes that help troubleshoot issues in Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
