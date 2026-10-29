---
id: topic/business-central/copilot-and-agent-capabilities/expense-agent-preview
type: topic
title: Expense Agent (preview)
summary: Expense Agent (preview) in Business Central is an AI agent that automates expense handling. This section covers admin setup, uploading receipts and creating mileage expenses, reviewing and editing expenses, building and submitting reports, approver actions, and the mobile app.
tier: official
language: en
system: copilot
review:
  state: reviewed
  by: opus
  at: "2026-10-06T13:43:32.762Z"
  flags: []
generated:
  at: "2026-10-29T21:38:16.952Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: e5e336b20899becf715639279927cbd92e34760fe6918eb22711f67ce62b0024
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-approve-reports
    title: Approve or Send Back Expense Reports
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-expense-reports
    title: Create and Submit Expense Reports in Expense Agent
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent
    title: Expense Agent overview for Business Central
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-overview
    title: Expense Agent Overview for Business Central
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-agent
    title: How the Expense Agent Processes Emails
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-edit-expenses
    title: Review and Edit Expenses in Expense Agent
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-configuration-page
    title: Set Up Expense Agent in Business Central
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-policy-compliance
    title: Understand Policy Compliance in Expense Agent
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-upload-receipts
    title: Upload Receipts and Create Mileage Expenses
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-mobile-app
    title: Use the Expense Agent Mobile App (preview)
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-approve-reports
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-expense-reports
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-edit-expenses
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-configuration-page
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-upload-receipts
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-mobile-app
  objects:
    - object/page/4400
    - object/page/4410
    - object/page/6996
  features: []
  topics:
    - topic/business-central/copilot-and-agent-capabilities
    - topic/business-central/copilot-and-agent-capabilities/expense-agent-preview/expense-agent-overview
  localizations: []
  videos:
    - video/4TE8uwIi91k
    - video/ARKckFygbWQ
    - video/cVfZoDwKYpI
    - video/cWVhWBMbXb4
    - video/Fz8NLByllRc
    - video/P1V4jy08YM8
    - video/pjML7lXSsd0
    - video/q-udoJPGUKE
    - video/qZALauRY_So
    - video/rSGCNMIBcpc
    - video/tj1vvsmAMVs
    - video/vyQnSxRGJDA
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10631
    - change/bcapps/11740
    - change/bcapps/11997
    - change/bcapps/12514
    - change/bcapps/12539
    - change/bcapps/12599
    - change/bcapps/12763
    - change/bcapps/12810
    - change/bcapps/13058
learn_toc_path:
  - Copilot and agent capabilities
  - Expense Agent (preview)
toc_file: business-central/TOC.md
parent: topic/business-central/copilot-and-agent-capabilities
children:
  - topic/business-central/copilot-and-agent-capabilities/expense-agent-preview/expense-agent-overview
coverage:
  learn: 10
  code: 3
  video: 12
  blog: 0
  guideline: 0
bc_forms:
  - 4400
  - 4410
  - 6996
member_hash: 1dbc15dfea2bd0a06c575b5fb202e1a9dd1391e5f077d8d4dcf023dc6f4c7b69
narrative: generated
---

# Expense Agent (preview)

> Expense Agent (preview) in Business Central is an AI agent that automates expense handling. This section covers admin setup, uploading receipts and creating mileage expenses, reviewing and editing expenses, building and submitting reports, approver actions, and the mobile app.

Path: [Copilot and agent capabilities](../copilot-and-agent-capabilities.md) > Expense Agent (preview) · tier official · system copilot · narrative reviewed (checked by Opus)

## Overview

Expense Agent (preview) automates the expense lifecycle in Business Central. It processes emails and receipts and checks expenses against rules and policies. The overview subtopic (4 pages) explains what the agent does and how it evaluates expenses, so start there for concepts.

The other pages follow the process in order. Administrators use "Set Up Expense Agent in Business Central" to configure submission channels, approval workflows, accounting defaults, policy compliance rules and communication settings. Users then upload receipts or create mileage expenses, review and edit the extracted details, group expenses into reports and submit them. Approvers approve reports or send them back with feedback. A separate page covers the mobile app for iOS and Android.

Administrators should begin with the setup page. End users can go straight to the upload page and then to the review and report pages. Approvers need only the approve or send back page.

## Key points

- Setup is done by administrators through assisted setup. It covers the email submission channel, web app submission, approval workflows, policy evaluation, receipt handling, accounting defaults and communication settings.
- Receipts can be uploaded through the web app, email or mobile app. The agent uses AI to extract merchant, amount, date and category, and assigns expenses to draft reports.
- When expenses are captured, currency conversion is automatic and VAT reclaim is identified. VAT is also shown when reviewing expenses.
- Mileage expenses are created by specifying trip start and end points. Distance is calculated automatically.
- Users can edit merchant, amount, date, category and payment method, delete expenses, and resolve AI-flagged issues before submission.
- Users can name reports, add receipts, move expenses between reports and optionally check policies before submitting reports for approval.
- Approvers can approve reports, review compliance warnings and policy flags (policy flags are advisory notices), or send reports back to requesters with feedback.
- The mobile app (preview, iOS and Android) offers camera scanning with edge detection, multi-page capture, photo and file upload, mileage expenses, report submission, offline viewing and automatic sync.

## Subtopics

- [Expense Agent overview](expense-agent-preview/expense-agent-overview.md) (4 pages)

## More Learn pages

- [Approve or Send Back Expense Reports](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-approve-reports): Learn how to review submitted expense reports and policy results, then approve them or send them back with comments in Expense Agent.
- [Create and Submit Expense Reports in Expense Agent](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-expense-reports): Learn how to create expense reports, add expenses, move expenses between reports, and submit reports for approval in Expense Agent.
- [Review and Edit Expenses in Expense Agent](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-edit-expenses): Review and edit expense details in Expense Agent after AI receipt scanning or manual entry. Update the vendor, amount, category, and other fields.
- [Set Up Expense Agent in Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-configuration-page): Learn how to set up Expense Agent to automate expense tracking, processing, policy evaluation, and approval workflows in Business Central.
- [Upload Receipts and Create Mileage Expenses](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-upload-receipts): Upload receipts to Expense Agent for AI extraction or create mileage expenses with route-based distance calculation in the web app.
- [Use the Expense Agent Mobile App (preview)](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-mobile-app): Capture receipts on the go with the Business Central Expenses mobile app for iOS and Android, featuring document scanning and offline support.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10631 Integration/main to releases 29.x 31a860b5](../../../changes/bcapps/10631.md) (code change): "Expense Agent gains policy evaluation tables, pages, enums and APIs"
- [#11740 Bug 636971: [Expense Agent] EA Scheduler Task table grows unbounded with no cleanup or UI visibility](../../../changes/bcapps/11740.md) (code change): "The Expense Agent now calls an existing cleanup function"
- [#11997 Clarify Expense Agent Entra app permission checks](../../../changes/bcapps/11997.md) (code change): "Permission checks for the Expense Agent Entra app have been reordered"
- [#12514 Revert Expense API test re-enablement and consolidated fixes](../../../changes/bcapps/12514.md) (code change): "Fully reverts the earlier commit that re-enabled Expense API tests"
- [#12539 Add Expense Agent consumption V2 and trial support](../../../changes/bcapps/12539.md) (code change): "Expense Agent adds a V2 consumption API and a 50-expense feature trial"
- [#12599 [Master] - Slice 629913: [Expense Agent][VENDOR] Enforced background itemization required for approvals](../../../changes/bcapps/12599.md) (code change): "Expense Agent now requires itemization when an enabled Expense Policy"
- [#12763 [Master] - Bug 654021: [Expense Agent] [Professional] Online: Creating Production - Setup Data Only Company with Delegated Admin access: "'IndirectInsert' permission on TableData 6913 'Expense Pmt Method" - 2610091420000495](../../../changes/bcapps/12763.md) (code change): "Expense Agent delegated admin partner entitlements are updated to grant"
- [#12810 ExpenseAgent-CAUS-default-VAT-setup-fails](../../../changes/bcapps/12810.md) (code change): "Fixes the Expense Agent default VAT setup failing"
- [#13058 Bug 656064: Expense Agent: Itemization table holds unrounded values, leading to rounding errors. Also missing currency code.](../../../changes/bcapps/13058.md) (code change): "Expense itemization records now store properly rounded currency amounts"
- [What's new in Expense Agent: Mobile App ( Preview) (2026 release wave 2)](../../../videos/4TE8uwIi91k.md) (video): "Expense agent; mobile app; receipt scanning; mileage tracking"
- [Expense Agent: Web App Experience (2026 release wave 1)](../../../videos/ARKckFygbWQ.md) (video): "Expense agent; web app experience; receipt capture; receipt extraction; automatic categorization"
- [Microsoft presents: Behind the scenes of how we build the new Expense Agent](../../../videos/cVfZoDwKYpI.md) (video): "Expense Agent; Receipt Extraction via AI; Approval Workflow"
- [What's new in Expense Agent: Improved Mileage Handling (2026 release wave 2)](../../../videos/cWVhWBMbXb4.md) (video): "Date-range mileage allowances; Vehicle-type-specific mileage rates"
- [Expense Agent: Mileage Allowances (2026 release wave 1)](../../../videos/Fz8NLByllRc.md) (video): "Expense Agent: Mileage Allowances; mileage allowances; expense agent"
- [Expense Agent: Configuration (2026 release wave 1)](../../../videos/P1V4jy08YM8.md) (video): "Expense Agent; configuration wizard; approval workflow; mileage expenses; per diem"
- [Introducing: Expense Management (2026 release wave 1)](../../../videos/pjML7lXSsd0.md) (video): "Expense agent with AI-driven categorization; Expense collection and itemization"
- [Introducing: Web App for Expense Agent (2026 release wave 1)](../../../videos/q-udoJPGUKE.md) (video): "Web App for Expense Agent ai extraction receipt processing expense approval"
- [Introducing: Approvals for the Expense Agent (2026 release wave 1)](../../../videos/qZALauRY_So.md) (video): "Approvals for the Expense Agent; Pre-approval AI Suggestions; Team-based Approval Setup"
- [Expense Agent: Approvals (2026 release wave 1)](../../../videos/rSGCNMIBcpc.md) (video): "Expense Agent: Approvals; approval process; approvers; email notifications"
- [What's new in Expense Agent: Overview (2026 release wave 2)](../../../videos/tj1vvsmAMVs.md) (video): "Expense agent; mileage allowance; credit card feeds; travel expense policies"
- [Expense Agent: Per Diem Allowances (2026 release wave 1)](../../../videos/vyQnSxRGJDA.md) (video): "Per Diem Allowances; expense agent; itinerary detection; meal reductions"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4400 "SOA Setup"](../../../objects/page/4400.md) · captioned "Configure Sales Order Agent" · on [Table 4325 "SOA Setup"](../../../objects/table/4325.md) · via [Expense Agent overview](expense-agent-preview/expense-agent-overview.md)
- [Page 4410 "SOA Multi Items Availability"](../../../objects/page/4410.md) · captioned "Item Availability" · on [Table 27 "Item"](../../../objects/table/27.md) · via [Expense Agent overview](expense-agent-preview/expense-agent-overview.md)
- [Page 6996 "Expense Agent Setup"](../../../objects/page/6996.md) · captioned "Expense Management Setup" · on [Table 6930 "Expense Agent Setup"](../../../objects/table/6930.md) · via [Expense Agent overview](expense-agent-preview/expense-agent-overview.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
