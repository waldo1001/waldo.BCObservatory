---
id: topic/business-central/business-functionality/set-up-business-central/set-up-approval-workflows-based-on-templ
type: topic
title: Set up approval workflows based on templates
summary: "Approval workflows in Business Central: creating them from templates, setting up workflow and approval users, configuring notifications, and exporting or importing workflows. It answers setup questions, from defining events and responses to testing a purchase approval workflow."
tier: official
language: en
system: purchasing
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:18.371Z"
  flags: []
generated:
  at: "2026-10-29T21:38:16.952Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 9c66e666b93610eced12ba4b2929880b2428a8fe12160197e217571a4bf82536
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-to-create-workflows
    title: Create approval workflows to connect tasks
    date: "2026-10-26"
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
  objects:
    - object/page/663
    - object/page/1500
    - object/page/1512
    - object/page/1513
    - object/page/1533
  features: []
  topics:
    - topic/business-central/business-functionality/set-up-business-central
  localizations: []
  videos: []
  posts:
    - post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-5164599344222477027--9edacb0c44
    - post/olofsimren-com/3779
    - post/yzhums-com/70683
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
  code: 5
  video: 0
  blog: 3
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

> Approval workflows in Business Central: creating them from templates, setting up workflow and approval users, configuring notifications, and exporting or importing workflows. It answers setup questions, from defining events and responses to testing a purchase approval workflow.

Path: [Business functionality](../../business-functionality.md) > [Set up Business Central](../set-up-business-central.md) > Set up approval workflows based on templates · tier official · system purchasing · narrative reviewed (checked by Opus)

## Overview

Approval workflows connect business-process tasks done by different users. Each workflow is built from a trigger (an event, with optional conditions) and responses, and it can automate approvals, notifications and system tasks. You build and manage them on the Workflow page, either from scratch or from workflow templates that already contain events, conditions and responses for common processes.

Supporting setup pages cover the pieces a workflow depends on. Approval users are defined on the Approval User Setup page, with amount limits, substitute approvers, an approval administrator and email notifications. Workflow user groups use sequence numbers to set approval order. Notification pages cover approver and sender notifications, schedules, email customization, and how each user receives notifications (email or internal notes, on recurring schedules).

Start with "Set up approval workflows" for the overall flow, then "How to create workflows from workflow templates". The purchase approval walkthrough shows a simple end-to-end example you can test. Use the export and import page to move workflows between Business Central databases.

## Key points

- Workflows are made of triggers (events with conditions) and responses, created on the Workflow page and grouped by workflow category.
- Workflow templates provide pre-configured events, conditions and responses; templates can be customized and reset.
- Approval users are set up on the Approval User Setup page with amount approval limits, substitute approvers, an approval administrator and email notifications.
- Workflow User Groups use sequence numbers to set approval order; users at the same level approve in parallel or in series depending on hierarchy position.
- Notifications can go to approvers and senders, follow schedules, and have customizable email content.
- Each approval user can choose notification type, method (email or internal notes) and a recurring schedule.
- Workflows can be exported to a file and imported into another Business Central database.
- A purchase order approval walkthrough shows setting up approvers, amount limits and internal note notifications, then testing the workflow.

## Learn pages

- [Create approval workflows to connect tasks](https://learn.microsoft.com/dynamics365/business-central/across-how-to-create-workflows): Learn how to create workflows that connect tasks performed by different people in business processes.
  - In the observatory: [Page 1500 "Workflows"](../../../../objects/page/1500.md), [Page 1501 "Workflow"](../../../../objects/page/1501.md), [Page 1505 "Workflow Templates"](../../../../objects/page/1505.md), [Page 1520 "Workflow Events"](../../../../objects/page/1520.md), [Page 1521 "Workflow Responses"](../../../../objects/page/1521.md), [Page 360 "Document Sending Profile"](../../../../objects/page/360.md)
- [How to create workflows from workflow templates](https://learn.microsoft.com/dynamics365/business-central/across-how-to-create-workflows-from-workflow-templates): Create new approval workflows quickly by using workflow templates as a starting point.
  - In the observatory: [Page 1500 "Workflows"](../../../../objects/page/1500.md), [Page 1505 "Workflow Templates"](../../../../objects/page/1505.md)
- [How to export and import approval workflows](https://learn.microsoft.com/dynamics365/business-central/across-how-to-export-and-import-workflows): Export and import workflows to easily transfer them between Business Central databases and streamline the creation of new workflows.
  - In the observatory: [Page 1501 "Workflow"](../../../../objects/page/1501.md)
- [How to set up workflow users](https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-workflow-users): Set up users who participate in workflows before creating workflow processes.
  - In the observatory: [Page 119 "User Setup"](../../../../objects/page/119.md), [Page 663 "Approval User Setup"](../../../../objects/page/663.md)
- [Set up and use a purchase approval workflow](https://learn.microsoft.com/dynamics365/business-central/walkthrough-setting-up-and-using-a-purchase-approval-workflow): This walkthrough takes you through all the stages involved in setting up and using a purchase approval workflow in Business Central.
  - In the observatory: [Page 1500 "Workflows"](../../../../objects/page/1500.md), [Page 1501 "Workflow"](../../../../objects/page/1501.md), [Page 1505 "Workflow Templates"](../../../../objects/page/1505.md), [Page 1512 "Notification Setup"](../../../../objects/page/1512.md), [Page 1513 "Notification Schedule"](../../../../objects/page/1513.md), [Page 56 "Purchase Orders"](../../../../objects/page/56.md)
- [Set up approval users](https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-approval-users): Set up users for approval workflows by assigning approvers, setting amount limits, and defining substitutes.
  - In the observatory: [Page 1531 "Workflow User Group"](../../../../objects/page/1531.md)
- [Set up approval workflows](https://learn.microsoft.com/dynamics365/business-central/across-set-up-workflows): Set up workflows, workflow users, and approval users to connect business-process system tasks performed by these different users.
  - In the observatory: [Page 1501 "Workflow"](../../../../objects/page/1501.md)
- [Setting up approval workflow notifications](https://learn.microsoft.com/dynamics365/business-central/across-setting-up-workflow-notifications): Learn how to set up workflow notifications to alert a user to an event that they must react to.
  - In the observatory: [Page 1513 "Notification Schedule"](../../../../objects/page/1513.md), [Page 1521 "Workflow Responses"](../../../../objects/page/1521.md), [Page 663 "Approval User Setup"](../../../../objects/page/663.md), [Report 1320 "Notification Email"](../../../../objects/report/1320.md)
- [Specify when and how to receive workflow notifications](https://learn.microsoft.com/dynamics365/business-central/across-how-to-specify-when-and-how-to-receive-notifications): Set up how and when approval users receive workflow notifications, including choosing email or note delivery and scheduling frequency.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Approval Workflows for Item Journals and Requisition Worksheets](../../../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-5164599344222477027--9edacb0c44.md) (community post): "approval workflows for item journals, requisition worksheets, and planning worksheets"
- [Approval Workflows in Planning Worksheet](../../../../posts/olofsimren-com/3779.md) (community post): "Setup happens on the Workflows page using the Requisition Worksheet batch approval template"
- [Dynamics 365 Business Central: How to hide the confirmation message (An approval request has been sent) when sending an Approval Request?](../../../../posts/yzhums-com/70683.md) (community post): "approval workflows in Business Central can be configured to hide the confirmation message"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 663 "Approval User Setup"](../../../../objects/page/663.md) · on [Table 91 "User Setup"](../../../../objects/table/91.md)
- [Page 1500 "Workflows"](../../../../objects/page/1500.md) · on [Table 1500 "Workflow Buffer"](../../../../objects/table/1500.md)
- [Page 1512 "Notification Setup"](../../../../objects/page/1512.md) · captioned "Workflow Notification Setup" · on [Table 1512 "Notification Setup"](../../../../objects/table/1512.md)
- [Page 1513 "Notification Schedule"](../../../../objects/page/1513.md) · on [Table 1513 "Notification Schedule"](../../../../objects/table/1513.md)
- [Page 1533 "Workflow User Groups"](../../../../objects/page/1533.md) · on [Table 1540 "Workflow User Group"](../../../../objects/table/1540.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
