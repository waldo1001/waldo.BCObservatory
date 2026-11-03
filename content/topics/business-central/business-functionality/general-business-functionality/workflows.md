---
id: topic/business-central/business-functionality/general-business-functionality/workflows
type: topic
title: Workflows
summary: Workflows in Business Central cover automating business processes with built-in approval workflow templates and Power Automate flows. The section answers questions about what workflows are, which flow types exist, and how to run and maintain approval workflows.
tier: official
language: en
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-03T01:02:13.361Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 83a5a97312843f76d564071e570385dd34648bde8aedad46f7063d76a55a77d1
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-use-approval-workflows
    title: Approve or reject documents in workflows
    date: "2025-10-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-to-delete-workflows
    title: How to delete approval workflows
    date: "2025-10-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-to-enable-workflows
    title: How to enable approval workflows
    date: "2025-10-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-to-restrict-and-allow-usage-of-a-record
    title: How to restrict and allow usage of a record
    date: "2025-10-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-to-view-archived-workflow-step-instances
    title: How to view archived workflow step instances
    date: "2025-10-16"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-use-workflows
    title: Using approval workflows
    date: "2025-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-workflow
    title: Workflows in Dynamics 365 Business Central
    date: "2026-10-15"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-flow
    - https://learn.microsoft.com/dynamics365/business-central/across-workflow
  objects:
    - object/page/654
    - object/page/662
    - object/page/666
    - object/page/1500
    - object/page/1501
    - object/page/1503
    - object/page/1504
    - object/page/1505
    - object/page/1530
  features: []
  topics:
    - topic/business-central/business-functionality/general-business-functionality
    - topic/business-central/business-functionality/general-business-functionality/workflows/use-approval-workflows
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - General business functionality
  - Workflows
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/general-business-functionality
children:
  - topic/business-central/business-functionality/general-business-functionality/workflows/use-approval-workflows
coverage:
  learn: 8
  code: 9
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 654
  - 662
  - 666
  - 1500
  - 1501
  - 1503
  - 1504
  - 1505
  - 1530
member_hash: 8a88f2d75ccf09827cf6cf26cf1d441f5c9c701b231ba58fc96356b207b81d32
narrative: generated
---

# Workflows

> Workflows in Business Central cover automating business processes with built-in approval workflow templates and Power Automate flows. The section answers questions about what workflows are, which flow types exist, and how to run and maintain approval workflows.

Path: [Business functionality](../../business-functionality.md) > [General business functionality](../general-business-functionality.md) > Workflows · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

Workflows connect tasks done by different users and system tasks to automate a business process. Business Central supports two routes: built-in approval workflows, based on workflow templates, events, conditions and responses, and Power Automate flows that react to events such as record creation or changes.

The overview page, "Workflows in Dynamics 365 Business Central", is the place to start. It explains the building blocks and the two routes. The page on Power Automate flows describes the flow types and the Power Automate connector. The subtopic "Use approval workflows" is the practical part. It covers how users send, approve, reject, delegate and cancel approval requests, and how admins enable and delete workflows, restrict records and review archived workflow step instances.

## Key points

- Workflows automate business processes by linking tasks performed by different users with system tasks.
- Built-in approval workflows use workflow templates, events, conditions, responses and options.
- Power Automate flows can be triggered by events like record creation or changes, using the Power Automate connector.
- The Power Automate page lists automated, approval, scheduled and instant flows; the overview page names automated and instant flows.
- Users can send, approve, reject, delegate and cancel approval requests.
- Admins can enable and delete approval workflows and restrict records.
- Archived workflow step instances can be reviewed.
- Start with the workflows overview, then go to the approval workflow how-to pages or the Power Automate page.

## Subtopics

- [Use approval workflows](workflows/use-approval-workflows.md) (6 pages)

## More Learn pages

- [Use Power Automate flows in Business Central](https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-flow): Use Power Automate flows to create, edit, and manage business processes. Boost productivity with easy automation.
- [Workflows in Dynamics 365 Business Central](https://learn.microsoft.com/dynamics365/business-central/across-workflow): Use built-in workflow capabilities to set up approval workflows to supplement automated workflows based on Power Automate.
  - In the observatory: [Page 1505 "Workflow Templates"](../../../../objects/page/1505.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1500 "Workflows"](../../../../objects/page/1500.md) · on [Table 1500 "Workflow Buffer"](../../../../objects/table/1500.md)
- [Page 654 "Requests to Approve"](../../../../objects/page/654.md) · on [Table 454 "Approval Entry"](../../../../objects/table/454.md) · via [Use approval workflows](workflows/use-approval-workflows.md)
- [Page 662 "Approval Request Entries"](../../../../objects/page/662.md) · on [Table 454 "Approval Entry"](../../../../objects/table/454.md) · via [Use approval workflows](workflows/use-approval-workflows.md)
- [Page 666 "Overdue Approval Entries"](../../../../objects/page/666.md) · on [Table 458 "Overdue Approval Entry"](../../../../objects/table/458.md) · via [Use approval workflows](workflows/use-approval-workflows.md)
- [Page 1501 "Workflow"](../../../../objects/page/1501.md) · on [Table 1501 "Workflow"](../../../../objects/table/1501.md) · via [Use approval workflows](workflows/use-approval-workflows.md)
- [Page 1503 "Workflow Steps"](../../../../objects/page/1503.md) · on [Table 1507 "Workflow Step Buffer"](../../../../objects/table/1507.md) · via [Use approval workflows](workflows/use-approval-workflows.md)
- [Page 1504 "Workflow Step Instances"](../../../../objects/page/1504.md) · on [Table 1504 "Workflow Step Instance"](../../../../objects/table/1504.md) · via [Use approval workflows](workflows/use-approval-workflows.md)
- [Page 1505 "Workflow Templates"](../../../../objects/page/1505.md) · on [Table 1500 "Workflow Buffer"](../../../../objects/table/1500.md) · via [Use approval workflows](workflows/use-approval-workflows.md)
- [Page 1530 "Archived WF Step Instances"](../../../../objects/page/1530.md) · captioned "Archived Workflow Step Instances" · on [Table 1530 "Workflow Step Instance Archive"](../../../../objects/table/1530.md) · via [Use approval workflows](workflows/use-approval-workflows.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
