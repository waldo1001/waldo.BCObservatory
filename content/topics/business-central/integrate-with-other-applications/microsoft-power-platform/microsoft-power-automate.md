---
id: topic/business-central/integrate-with-other-applications/microsoft-power-platform/microsoft-power-automate
type: topic
title: Microsoft Power Automate
summary: Power Automate integration with Business Central covers building no code/low code workflows with the Business Central connector. It answers questions about flow types, triggers and actions, using flows in Business Central, and troubleshooting automated flows.
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:54.276Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: dd29d5a8af9a0dad8353cb7922b8ab457eef3c3fe910fad4c4254e195df4e518
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-automate-overview
    title: Power Automate Integration Overview
    date: "2025-08-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-flow-troubleshoot
    title: Troubleshoot your automated workflows
    date: "2025-10-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-flow
    title: Use Power Automate flows in Business Central
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-automate-overview
    - https://learn.microsoft.com/dynamics365/business-central/across-flow-troubleshoot
    - https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-flow
  objects:
    - object/page/1500
  features: []
  topics:
    - topic/business-central/integrate-with-other-applications/microsoft-power-platform
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Integrate with other applications
  - Microsoft Power Platform
  - Microsoft Power Automate
toc_file: business-central/TOC.md
parent: topic/business-central/integrate-with-other-applications/microsoft-power-platform
children: []
coverage:
  learn: 3
  code: 1
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 1500
member_hash: 0507adde4f3afd8a19987abfc594f37db4ca42271a73be551ac43fe2b0858998
narrative: generated
---

# Microsoft Power Automate

> Power Automate integration with Business Central covers building no code/low code workflows with the Business Central connector. It answers questions about flow types, triggers and actions, using flows in Business Central, and troubleshooting automated flows.

Path: [Integrate with other applications](../../integrate-with-other-applications.md) > [Microsoft Power Platform](../microsoft-power-platform.md) > Microsoft Power Automate · tier official · system integration · narrative reviewed by Opus

## Overview

Power Automate lets you build business workflows for Business Central without code or with little code. Flows connect Business Central to cloud services through the Business Central connector, using triggers and actions. Automated flows run when an event happens, such as a record being created or changed. Instant flows are started manually by a user.

The three pages fit together as a path. The integration overview explains the concept and the main flow types. The page on using flows in Business Central describes the flow types in more detail: automated, approval, scheduled and instant. The troubleshooting page covers problems with automated workflows and the web service publishing setup they need.

Start with the overview to understand the flow types, then read the usage page before building a flow. Go to the troubleshooting page when a flow does not behave as expected.

## Key points

- Automated flows are triggered by events, such as record creation or changes.
- Instant flows are triggered manually by users.
- The usage page also lists approval flows and scheduled flows.
- The Business Central connector provides the triggers and actions for flows.
- Flows can connect Business Central with cloud services to perform business tasks.
- Troubleshooting covers flows that do not trigger on all records, response size limits, and missing entity errors.
- Automated workflows depend on web service publishing configuration, and webhook notifications are involved.

## Learn pages

- [Power Automate Integration Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-automate-overview): This article provides an overview of how Power Automate and Business Central integrate.
- [Troubleshoot your automated workflows](https://learn.microsoft.com/dynamics365/business-central/across-flow-troubleshoot): Learn how to troubleshoot the connection between Business Central and Power Automate when you build an automated workflow.
- [Use Power Automate flows in Business Central](https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-flow): Use Power Automate flows to create, edit, and manage business processes. Boost productivity with easy automation.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1500 "Workflows"](../../../../objects/page/1500.md) · on [Table 1500 "Workflow Buffer"](../../../../objects/table/1500.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
