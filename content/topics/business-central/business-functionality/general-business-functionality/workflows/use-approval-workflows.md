---
id: topic/business-central/business-functionality/general-business-functionality/workflows/use-approval-workflows
type: topic
title: Use approval workflows
summary: "Approval workflows in Business Central: how users send, approve, reject, delegate and cancel approval requests, and how admins enable, delete, restrict records and review archived workflow step instances. It answers practical how-to questions about running and maintaining approval workflows."
tier: official
language: en
system: purchasing
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:53.100Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d2750a8590614c40b80ec4c4e9157d017401788270af89db5b9d3262506102b3
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
    url: https://learn.microsoft.com/dynamics365/business-central/across-use-workflows
    title: Using approval workflows
    date: "2025-10-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/across-how-use-approval-workflows
    - https://learn.microsoft.com/dynamics365/business-central/across-how-to-delete-workflows
    - https://learn.microsoft.com/dynamics365/business-central/across-how-to-enable-workflows
    - https://learn.microsoft.com/dynamics365/business-central/across-how-to-restrict-and-allow-usage-of-a-record
    - https://learn.microsoft.com/dynamics365/business-central/across-how-to-view-archived-workflow-step-instances
    - https://learn.microsoft.com/dynamics365/business-central/across-use-workflows
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
    - topic/business-central/business-functionality/general-business-functionality/workflows
  localizations: []
  videos: []
  posts:
    - post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-5164599344222477027--9edacb0c44
    - post/olofsimren-com/3779
  guidelines: []
learn_toc_path:
  - Business functionality
  - General business functionality
  - Workflows
  - Use approval workflows
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/general-business-functionality/workflows
children: []
coverage:
  learn: 6
  code: 9
  video: 0
  blog: 2
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
member_hash: 3a567ae6079e607bda8638ac0c1293bbd9f6d987f0705591fa3f30e35dc065f5
narrative: generated
---

# Use approval workflows

> Approval workflows in Business Central: how users send, approve, reject, delegate and cancel approval requests, and how admins enable, delete, restrict records and review archived workflow step instances. It answers practical how-to questions about running and maintaining approval workflows.

Path: [Business functionality](../../../business-functionality.md) > [General business functionality](../../general-business-functionality.md) > [Workflows](../workflows.md) > Use approval workflows · tier official · system purchasing · narrative reviewed (checked by Opus)

## Overview

Approval workflows automate business logic such as sequential and parallel approvals for master data, document changes and sensitive information. The section starts with a general page on using approval workflows, which explains approval routing, triggering and step tracking.

The other pages cover specific tasks. Users send approval requests for records such as purchase documents, sales documents and customer cards. Approvers handle them on the Requests to Approve page. Administrators enable a workflow after creating it, delete it when no longer needed, and use workflow responses to restrict or allow use of a record. They can also check archived workflow step instances for history.

Start with "Using approval workflows" for the concepts, then go to "Approve or reject documents in workflows" for day-to-day use. Use the enable and delete pages for lifecycle tasks.

## Key points

- Approval requests can be sent for records like purchase documents, sales documents and customer cards, and can be cancelled.
- Approvers approve, reject or delegate requests from the Requests to Approve page.
- Overdue approval notifications are supported.
- Workflows support sequential and parallel approvals.
- A workflow must be enabled after creation to be active.
- To delete a workflow, all workflow step instances must have Completed status; a workflow can be disabled first.
- Workflow responses can add or remove record restrictions that control posting, exporting or printing.
- The Archived Workflow Step Instances page shows the history and status of completed steps.

## Learn pages

- [Approve or reject documents in workflows](https://learn.microsoft.com/dynamics365/business-central/across-how-use-approval-workflows): Request, reject, or delegate an approval of, for example, a purchase or sales document, as part of a workflow.
- [How to delete approval workflows](https://learn.microsoft.com/dynamics365/business-central/across-how-to-delete-workflows): You can delete a workflow if it's no longer needed and all its step instances have a **Completed** status.
- [How to enable approval workflows](https://learn.microsoft.com/dynamics365/business-central/across-how-to-enable-workflows): After creating a workflow and confirming it is ready, you must enable it to begin using the workflow.
- [How to restrict and allow usage of a record](https://learn.microsoft.com/dynamics365/business-central/across-how-to-restrict-and-allow-usage-of-a-record): Learn how to use workflow responses to restrict or allow the usage of a record in Business Central.
- [How to view archived workflow step instances](https://learn.microsoft.com/dynamics365/business-central/across-how-to-view-archived-workflow-step-instances): Completed workflow step instances are stored on the Archived Workflow Step Instances page. Each step includes a workflow event and a workflow response.
- [Using approval workflows](https://learn.microsoft.com/dynamics365/business-central/across-use-workflows): Set up and use workflows to connect business-process tasks such as automatic posting or requesting and granting approval for new records.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Approval Workflows for Item Journals and Requisition Worksheets](../../../../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-5164599344222477027--9edacb0c44.md) (community post): "approval workflows for item journals, requisition worksheets, and planning worksheets"
- [Approval Workflows in Planning Worksheet](../../../../../posts/olofsimren-com/3779.md) (community post): "Approval workflows now lock planning worksheet batches and prevent line modifications until approval completes"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 654 "Requests to Approve"](../../../../../objects/page/654.md) · on [Table 454 "Approval Entry"](../../../../../objects/table/454.md)
- [Page 662 "Approval Request Entries"](../../../../../objects/page/662.md) · on [Table 454 "Approval Entry"](../../../../../objects/table/454.md)
- [Page 666 "Overdue Approval Entries"](../../../../../objects/page/666.md) · on [Table 458 "Overdue Approval Entry"](../../../../../objects/table/458.md)
- [Page 1500 "Workflows"](../../../../../objects/page/1500.md) · on [Table 1500 "Workflow Buffer"](../../../../../objects/table/1500.md)
- [Page 1501 "Workflow"](../../../../../objects/page/1501.md) · on [Table 1501 "Workflow"](../../../../../objects/table/1501.md)
- [Page 1503 "Workflow Steps"](../../../../../objects/page/1503.md) · on [Table 1507 "Workflow Step Buffer"](../../../../../objects/table/1507.md)
- [Page 1504 "Workflow Step Instances"](../../../../../objects/page/1504.md) · on [Table 1504 "Workflow Step Instance"](../../../../../objects/table/1504.md)
- [Page 1505 "Workflow Templates"](../../../../../objects/page/1505.md) · on [Table 1500 "Workflow Buffer"](../../../../../objects/table/1500.md)
- [Page 1530 "Archived WF Step Instances"](../../../../../objects/page/1530.md) · captioned "Archived Workflow Step Instances" · on [Table 1530 "Workflow Step Instance Archive"](../../../../../objects/table/1530.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
