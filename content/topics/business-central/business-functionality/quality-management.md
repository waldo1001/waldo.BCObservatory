---
id: topic/business-central/business-functionality/quality-management
type: topic
title: Quality management
summary: Quality management in Business Central uses the Microsoft-published Quality Management extension to run automatic, manual, and scheduled quality inspections. It answers questions about creating and working with inspections, blocking lots, handling failed items, setup, and troubleshooting.
tier: official
language: en
system: inventory
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-06T01:02:12.564Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 225f6c18c315b92bbabe00790441cf9e9c1c984e59b319d98ea04305e7456882
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-lot-blocking-unblocking
    title: Block or unblock lots
    date: "2026-09-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-configuring-grades
    title: Configure quality inspection results
    date: "2026-09-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-quality-templates
    title: Create quality inspection templates
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-scheduled-test-creation
    title: Create scheduled quality inspections
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-non-compliant-processing
    title: Process items that failed a quality inspection
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-overview
    title: Quality management overview
    date: "2026-09-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-setup
    title: Quality management setup and configuration
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-quality-workflows
    title: Quality management workflows
    date: "2026-03-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-test-generation-rules
    title: Set up quality inspection generation rules
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-troubleshooting
    title: Troubleshoot quality management features
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-manual-test-creation
    title: Work with quality inspections
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/qms-lot-blocking-unblocking
    - https://learn.microsoft.com/dynamics365/business-central/qms-scheduled-test-creation
    - https://learn.microsoft.com/dynamics365/business-central/qms-non-compliant-processing
    - https://learn.microsoft.com/dynamics365/business-central/qms-overview
    - https://learn.microsoft.com/dynamics365/business-central/qms-troubleshooting
    - https://learn.microsoft.com/dynamics365/business-central/qms-manual-test-creation
  objects:
    - object/page/20400
    - object/page/20402
    - object/page/20404
    - object/page/20406
    - object/page/20407
    - object/page/20408
    - object/page/20416
  features: []
  topics:
    - topic/business-central/business-functionality
    - topic/business-central/business-functionality/quality-management/set-up-quality-management
  localizations: []
  videos: []
  posts:
    - post/olofsimren-com/3696
  guidelines: []
  changes:
    - change/bcapps/12322
    - change/bcapps/13056
    - change/bcapps/13104
    - change/bcapps/13111
    - change/bcapps/13261
    - change/bcapps/13325
    - change/bcapps/13427
    - change/bcapps/13560
learn_toc_path:
  - Business functionality
  - Quality management
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality
children:
  - topic/business-central/business-functionality/quality-management/set-up-quality-management
coverage:
  learn: 11
  code: 7
  video: 0
  blog: 1
  guideline: 0
bc_forms:
  - 20400
  - 20402
  - 20404
  - 20406
  - 20407
  - 20408
  - 20416
member_hash: 8bcda7c163c47956ca13c81b9031f735b11077e38a452e73e2b4f0f5def74c9a
narrative: generated
---

# Quality management

> Quality management in Business Central uses the Microsoft-published Quality Management extension to run automatic, manual, and scheduled quality inspections. It answers questions about creating and working with inspections, blocking lots, handling failed items, setup, and troubleshooting.

Path: [Business functionality](../business-functionality.md) > Quality management · tier official · system inventory · narrative **unreviewed** (model text not yet checked)

## Overview

Quality Management is an extension that adds quality inspections at key points in purchasing, production, assembly, and warehouse processes. Inspections can be created automatically from generation rules, manually from templates or source records, or on a schedule through job queue entries.

The pages follow the life of an inspection. Start with the overview to see what the extension does, then use the Set up quality management subtopic for installation, permission sets, templates, results, generation rules, and workflows. After that, "Work with quality inspections" covers assigning, testing, and finishing inspections, and "Create scheduled quality inspections" covers time-based creation such as shelf life monitoring.

Once an inspection is finished, "Block or unblock lots" and "Process items that failed a quality inspection" cover what happens to the stock: blocking, quarantine, removal, transfer, or return to the vendor. The troubleshooting page is the place to go when inspections are not created or lots are not blocked as expected.

## Key points

- Quality Management is a Microsoft-published extension for inspections in purchasing, production, assembly, and warehouse processes.
- Inspections can be created automatically, manually, or on a schedule, and use templates.
- Setup covers installing the extension, permission sets, inspection templates, results, generation rules, and workflows.
- Scheduled inspections are created at regular intervals using job queue entries, for example for shelf life monitoring.
- Lots, serial numbers, and packages can be blocked or unblocked through workflows or based on inspection results, with document-specific restrictions for sales, transfers, and other transactions.
- Failed items can be blocked, moved to quarantine, removed from inventory, transferred to other locations, or returned to vendors.
- Working with an inspection includes assigning users, entering test values, verifying item tracking, finishing with passed or failed quantities, printing reports, and reinspecting.
- A troubleshooting page covers generation rules, scheduled inspections, workflows, templates, warehouse receipts, production output, and lot blocking.

## Subtopics

- [Set up quality management](quality-management/set-up-quality-management.md) (5 pages)

## More Learn pages

- [Block or unblock lots](https://learn.microsoft.com/dynamics365/business-central/qms-lot-blocking-unblocking): Learn how to block and unblock inventory lots using workflows and grade-specific controls to ensure quality compliance.
  - In the observatory: [Page 1500 "Workflows"](../../../objects/page/1500.md), [Page 6504 "Serial No. Information Card"](../../../objects/page/6504.md), [Page 6505 "Lot No. Information Card"](../../../objects/page/6505.md), [Page 6508 "Lot No. Information List"](../../../objects/page/6508.md), [Page 6526 "Package No. Information Card"](../../../objects/page/6526.md)
- [Create scheduled quality inspections](https://learn.microsoft.com/dynamics365/business-central/qms-scheduled-test-creation): Learn how to set up and use scheduled quality inspection tests to ensure proactive quality management through automated, time-based test creation.
- [Process items that failed a quality inspection](https://learn.microsoft.com/dynamics365/business-central/qms-non-compliant-processing): Learn how to handle noncompliant items, including workflows, inventory movements, and actions for failed quality inspections.
- [Quality management overview](https://learn.microsoft.com/dynamics365/business-central/qms-overview): Learn how to use quality management to ensure product quality through automated and manual inspections, lot results, and workflow integration.
- [Troubleshoot quality management features](https://learn.microsoft.com/dynamics365/business-central/qms-troubleshooting): Learn how to troubleshoot common issues in quality management, from setup to workflows, and resolve problems with inspections, templates, and lot blocking.
  - In the observatory: [Page 6505 "Lot No. Information Card"](../../../objects/page/6505.md)
- [Work with quality inspections](https://learn.microsoft.com/dynamics365/business-central/qms-manual-test-creation): Learn how to create, assign, complete, print, reopen, and repeat quality inspections in Business Central.
  - In the observatory: [Page 6510 "Item Tracking Lines"](../../../objects/page/6510.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12322 [QM] Destination bin code is now visible and usable for the user](../../../changes/bcapps/12322.md) (code change): "destination bin code is now visible and usable for the user"
- [#13056 [QM] Tracking specification quantity now is used properly](../../../changes/bcapps/13056.md) (code change): "Quality Management now uses the tracking specification quantity properly in its receiving integration"
- [#13104 update tests and enable them](../../../changes/bcapps/13104.md) (code change): "Disabled Quality Management result condition tests are re-enabled"
- [#13111 [Backport 29.x] #11046: [Extensibility Request] issue 10889: expose large text modal helper](../../../changes/bcapps/13111.md) (code change): "large text modal helper on page 20441 Qlty. Edit Large Text in Quality Management"
- [#13261 [Backport 29.x] [Extensibility Request] [SCM] 2026-10-26](../../../changes/bcapps/13261.md) (code change): "Modifies Qlty. Result Condition Mgmt. and Qlty. Filter Helpers in Quality Management"
- [#13325 [Quality Management] Certificate of analysis shows now full name instead of the ID.](../../../changes/bcapps/13325.md) (code change): "Certificate of Analysis, General Purpose Inspection and Non-Conformance reports now show a full name"
- [#13427 [Quality Management] Confirm before finishing on Create Re-inspection](../../../changes/bcapps/13427.md) (code change): "Quality inspections now ask for confirmation before finishing when creating a re-inspection"
- [#13560 [QM] Move Inventory: allow destination location for non-directed item](../../../changes/bcapps/13560.md) (code change): "Quality Management Move Inventory report now allows a destination location to be set"
- [Quality Management in Business Central Version 28](../../../posts/olofsimren-com/3696.md) (community post): "Business Central version 28 adds a native Quality Management module for inspecting goods"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 20400 "Qlty. Management Setup"](../../../objects/page/20400.md) · captioned "Quality Management Setup" · on [Table 20400 "Qlty. Management Setup"](../../../objects/table/20400.md)
- [Page 20402 "Qlty. Inspection Template"](../../../objects/page/20402.md) · captioned "Quality Inspection Template" · on [Table 20402 "Qlty. Inspection Template Hdr."](../../../objects/table/20402.md)
- [Page 20404 "Qlty. Inspection Template List"](../../../objects/page/20404.md) · captioned "Quality Inspection Templates" · on [Table 20402 "Qlty. Inspection Template Hdr."](../../../objects/table/20402.md)
- [Page 20406 "Qlty. Inspection"](../../../objects/page/20406.md) · captioned "Quality Inspection" · on [Table 20405 "Qlty. Inspection Header"](../../../objects/table/20405.md)
- [Page 20407 "Qlty. Inspection Subform"](../../../objects/page/20407.md) · captioned "Quality Inspection Subform" · on [Table 20406 "Qlty. Inspection Line"](../../../objects/table/20406.md)
- [Page 20408 "Qlty. Inspection List"](../../../objects/page/20408.md) · captioned "Quality Inspections" · on [Table 20405 "Qlty. Inspection Header"](../../../objects/table/20405.md)
- [Page 20416 "Qlty. Inspection Result List"](../../../objects/page/20416.md) · captioned "Quality Inspection Results" · on [Table 20411 "Qlty. Inspection Result"](../../../objects/table/20411.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
