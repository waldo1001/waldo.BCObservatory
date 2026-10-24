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
  at: "2026-10-24T00:57:10.969Z"
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

Path: [Administration](../administration.md) > Manage technical support · tier official · system administration · narrative reviewed (checked by Opus)

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
  - Delegated admin can submit support request to Microsoft using Partner Center or admin center.
  - Limit: Internal administrator cannot contact Microsoft directly for support.
  - Internal admin must contact their partner to escalate support beyond troubleshooting in admin center.
- [Managing technical support](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/manage-technical-support): Learn about how to support your Business Central users, both online and on-premises, as the internal or delegated administrator.
  - Internal administrator can find technical information in Help and Support page
  - Delegated administrator needs Admin agent or Helpdesk agent setup with delegation privileges
  - Permissions: Delegated admin must have delegation privileges in Partner Center and customer's Business Central
  - Internal admin cannot contact Microsoft directly, must contact partner for escalation
  - Help and Support page shows support contact details if partner provided them
  - Last known error accessible via Help and Support for application errors, not platform errors
  - Delegated admin must remove support contact details, notification recipients, and Application Insights key when ending customer relationship
  - In the observatory: [Page 9511 "Database Locks"](../../../objects/page/9511.md)
- [Report a performance issue](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/report-performance-issue): Learn about how to report a performance issue on behalf of your Business Central online customers as the delegated administrator.
  - Before creating support request for performance issues, use in-client Performance Profiler to self-diagnose.
  - Provide information on what operations aren't performing well and when they occur with UTC timestamps.
  - Step: Go to Help and Support page and note the time in UTC timezone.
  - Step: Enable additional logging under Report a Problem.
  - Step: Note Session ID, Microsoft Entra tenant ID, and Environment name.
  - Step: Enable in-client Performance Profiler and reproduce the issue.
  - Step: Download the profile file for the support request.
  - When creating support request include time enabled, Session ID, tenant ID, environment name, and profile file.
- [Report Customer Outages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/report-outage): Learn about how to report a suspected service outage on behalf of your Business Central online customers as the delegated administrator.
  - Report Production Outage action creates a support ticket for Microsoft when users cannot sign in to production environments.
  - Step: Select the relevant environment in admin center and choose Support > Report Production Outage.
  - Step: Choose outage type: Unable to sign in (all users) or Can't access API/Web Service.
  - Step: Provide your name, email, phone number, and details about the outage including browsers, errors, and correlation IDs.
  - Step: Add the date and time when the outage began and provide consent before reporting.
  - Limit: Report Production Outage option is not available for sandbox environments.
  - After reporting, view the support ticket ID in the dialog and track progress via the Reported Outages page.
- [Troubleshooting tools and guides overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-troubleshooting-overview): An overview of tools and processes that help troubleshoot issues in Business Central.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
