---
id: topic/business-central/business-functionality/set-up-business-central/set-up-approval-workflows-based-on-templ
type: topic
title: Set up approval workflows based on templates
summary: "Approval workflows in Business Central built from templates: creating workflows, setting up workflow users and approval users, configuring notifications, and exporting or importing workflows. It answers setup questions, such as who approves, in what order, and how they are notified."
tier: official
language: en
system: purchasing
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:42.286Z"
  flags: []
generated:
  at: "2026-10-07T09:49:55.895Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 01edbcf7c910af183171e1046e8edb5f092604d46f08b59bfe63f9c79a1a7498
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-to-create-workflows
    title: Create approval workflows to connect tasks
    date: "2025-10-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-to-create-workflows-from-workflow-templates
    title: How to create workflows from workflow templates
    date: "2025-10-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-to-export-and-import-workflows
    title: How to export and import approval workflows
    date: "2025-10-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-workflow-users
    title: How to set up workflow users
    date: "2025-10-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/walkthrough-setting-up-and-using-a-purchase-approval-workflow
    title: Set up and use a purchase approval workflow
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-approval-users
    title: Set up approval users
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-set-up-workflows
    title: Set up approval workflows
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-setting-up-workflow-notifications
    title: Setting up approval workflow notifications
    date: "2025-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-to-specify-when-and-how-to-receive-notifications
    title: Specify when and how to receive workflow notifications
    date: "2025-10-16"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/across-how-to-create-workflows
    - https://learn.microsoft.com/dynamics365/business-central/across-how-to-create-workflows-from-workflow-templates
    - https://learn.microsoft.com/dynamics365/business-central/across-how-to-export-and-import-workflows
    - https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-workflow-users
    - https://learn.microsoft.com/dynamics365/business-central/walkthrough-setting-up-and-using-a-purchase-approval-workflow
    - https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-approval-users
    - https://learn.microsoft.com/dynamics365/business-central/across-set-up-workflows
    - https://learn.microsoft.com/dynamics365/business-central/across-setting-up-workflow-notifications
    - https://learn.microsoft.com/dynamics365/business-central/across-how-to-specify-when-and-how-to-receive-notifications
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/set-up-business-central
  localizations: []
  videos: []
  posts:
    - post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-5164599344222477027--9edacb0c44
    - post/olofsimren-com/3779
  guidelines: []
learn_toc_path:
  - Business functionality
  - Set up Business Central
  - Set up approval workflows based on templates
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/set-up-business-central
children: []
coverage:
  learn: 9
  code: 0
  video: 0
  blog: 2
  guideline: 0
bc_forms:
  - 663
  - 1500
  - 1512
  - 1513
  - 1533
member_hash: 9e8a6f03adad5bf3a4f607b4720b90443f4ee8b0a641489255563f7b210dc078
narrative: generated
---

# Set up approval workflows based on templates

> Approval workflows in Business Central built from templates: creating workflows, setting up workflow users and approval users, configuring notifications, and exporting or importing workflows. It answers setup questions, such as who approves, in what order, and how they are notified.

Path: [Business functionality](../../business-functionality.md) > [Set up Business Central](../set-up-business-central.md) > Set up approval workflows based on templates · tier official · system purchasing · narrative reviewed by Opus

## Overview

This section explains how to set up approval workflows that connect business-process tasks performed by different users. A workflow is made of steps with events, conditions, and responses. You can build one from scratch or start from a workflow template with pre-configured steps, then customize it or reset the template.

Supporting setup pages cover the people and messages involved. Workflow users are defined on the Workflow User Groups page with sequence numbers that set approval order. Approval users are defined on the Approval User Setup page with amount limits, substitute approvers, and an approval administrator. Notification pages describe approver and sender notifications, schedules, email customization, and delivery by email or internal notes.

Start with "Set up approval workflows" for the overall picture. Then read "How to create workflows from workflow templates" and the purchase approval walkthrough for a worked example. Use the export and import page to move workflows between databases.

## Key points

- Workflow steps combine events, conditions, and responses, for example approval requests, notifications, and journal line creation.
- Workflow templates give pre-configured steps for common processes and can be customized or reset.
- Workflows can be exported to a file and imported into another Business Central database.
- Workflow User Groups use sequence numbers to set approval order; users at the same level can approve in parallel or in series depending on hierarchy.
- Approval User Setup defines amount approval limits, substitute approvers, an approval administrator, and email notifications.
- Notifications can go to approvers or senders, by email or internal notes, on recurring schedules, with customizable email content.
- A purchase order approval walkthrough shows setup of approvers, amount limits, and internal note notifications, then testing.

## Learn pages

- [Create approval workflows to connect tasks](https://learn.microsoft.com/dynamics365/business-central/across-how-to-create-workflows): Learn how to create workflows that connect tasks performed by different people in business processes.
- [How to create workflows from workflow templates](https://learn.microsoft.com/dynamics365/business-central/across-how-to-create-workflows-from-workflow-templates): Create new approval workflows quickly by using workflow templates as a starting point.
- [How to export and import approval workflows](https://learn.microsoft.com/dynamics365/business-central/across-how-to-export-and-import-workflows): Export and import workflows to easily transfer them between Business Central databases and streamline the creation of new workflows.
- [How to set up workflow users](https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-workflow-users): Set up users who participate in workflows before creating workflow processes.
- [Set up and use a purchase approval workflow](https://learn.microsoft.com/dynamics365/business-central/walkthrough-setting-up-and-using-a-purchase-approval-workflow): This walkthrough takes you through all the stages involved in setting up and using a purchase approval workflow in Business Central.
- [Set up approval users](https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-approval-users): Set up users for approval workflows by assigning approvers, setting amount limits, and defining substitutes.
- [Set up approval workflows](https://learn.microsoft.com/dynamics365/business-central/across-set-up-workflows): Set up workflows, workflow users, and approval users to connect business-process system tasks performed by these different users.
- [Setting up approval workflow notifications](https://learn.microsoft.com/dynamics365/business-central/across-setting-up-workflow-notifications): Learn how to set up workflow notifications to alert a user to an event that they must react to.
- [Specify when and how to receive workflow notifications](https://learn.microsoft.com/dynamics365/business-central/across-how-to-specify-when-and-how-to-receive-notifications): Set up how and when approval users receive workflow notifications, including choosing email or note delivery and scheduling frequency.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Approval Workflows for Item Journals and Requisition Worksheets](../../../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-5164599344222477027--9edacb0c44.md) (community post): "approval workflows for item journals, requisition worksheets, and planning worksheets"
- [Approval Workflows in Planning Worksheet](../../../../posts/olofsimren-com/3779.md) (community post): "Setup uses the same workflow framework as purchase orders and general journals"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 663, 1500, 1512, 1513, 1533.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
