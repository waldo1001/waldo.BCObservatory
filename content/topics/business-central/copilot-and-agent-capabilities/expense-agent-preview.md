---
id: topic/business-central/copilot-and-agent-capabilities/expense-agent-preview
type: topic
title: Expense Agent (preview)
summary: Expense Agent (preview) in Business Central is an AI agent that automates expenses. This section answers how to set it up, upload receipts, create mileage expenses, review and edit expenses, build and submit reports, approve or send back reports, and use the mobile app.
tier: official
language: en
system: copilot
review:
  state: reviewed
  by: opus
  at: "2026-10-30T08:08:38.208Z"
  flags: []
generated:
  at: "2026-10-31T01:06:04.529Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 6a5886e9468db8adfba172ee370a539343807c74fda2187469988db0d33dda94
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-approve-reports
    title: Approve or Send Back Expense Reports
    date: "2026-10-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-expense-reports
    title: Create and Submit Expense Reports in Expense Agent
    date: "2026-10-07"
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
    date: "2026-10-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-mobile-app
    title: Use the Expense Agent Mobile App (preview)
    date: "2026-10-07"
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
  posts:
    - post/thinkaboutit-be/8348
  guidelines: []
  changes:
    - change/bcapps/10631
    - change/bcapps/11740
    - change/bcapps/11997
    - change/bcapps/12147
    - change/bcapps/12514
    - change/bcapps/12539
    - change/bcapps/12599
    - change/bcapps/12763
    - change/bcapps/12810
    - change/bcapps/12882
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
  blog: 1
  guideline: 0
bc_forms:
  - 4400
  - 4410
  - 6996
member_hash: 1dbc15dfea2bd0a06c575b5fb202e1a9dd1391e5f077d8d4dcf023dc6f4c7b69
narrative: generated
---

# Expense Agent (preview)

> Expense Agent (preview) in Business Central is an AI agent that automates expenses. This section answers how to set it up, upload receipts, create mileage expenses, review and edit expenses, build and submit reports, approve or send back reports, and use the mobile app.

Path: [Copilot and agent capabilities](../copilot-and-agent-capabilities.md) > Expense Agent (preview) · tier official · system copilot · narrative reviewed (checked by Opus)

## Overview

Expense Agent (preview) automates the expense lifecycle in Business Central. It scans receipts, adds expenses to draft reports, and checks them against company rules and policies. The section has an overview subtopic that explains what the agent does and how it handles emails and receipts.

The task pages follow the process in order. Administrators start with the setup page, which covers assisted setup, submission channels (email and web app), approval workflows, accounting defaults, policy evaluation, and communication settings. Employees then upload receipts or create mileage expenses, review and edit the details, group expenses into reports, and submit them. Approvers review the reports and either approve them or send them back with comments.

A separate page covers the iOS and Android mobile app, which supports receipt capture, mileage, submission, and approval. Start with the overview, then the setup page if you are configuring the agent, or the upload page if you are an end user.

## Key points

- Setup is done by administrators through assisted setup: submission channels (email, web app), approval workflows, accounting defaults, policy compliance rules, and communication settings.
- AI scans receipt images and extracts merchant name, amount, date, and category, then adds the expense to a draft report.
- Receipts can be uploaded by web app, mobile app, or email. Currency conversion is automatic and VAT reclaim is identified.
- Mileage expenses are created by entering trip details.
- Users can edit details, categorize or delete expenses, and resolve AI-flagged issues before submission. VAT is displayed.
- Reports group expenses by period. Users can rename them, add receipts, move expenses between reports, and run AI-assisted policy checks before submitting.
- Approvers review categories, receipts, compliance warnings, and approval history, then approve or send back with comments.
- The mobile app (preview, iOS and Android) offers live edge detection, multipage scanning, offline viewing, and sync with the web app.

## Subtopics

- [Expense Agent overview](expense-agent-preview/expense-agent-overview.md) (4 pages)

## More Learn pages

- [Approve or Send Back Expense Reports](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-approve-reports): Learn how to review submitted expense reports and policy results, then approve them or send them back with comments in Expense Agent.
- [Create and Submit Expense Reports in Expense Agent](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-expense-reports): Learn how to create expense reports, add expenses, move expenses between reports, and submit reports for approval in Expense Agent.
- [Review and Edit Expenses in Expense Agent](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-edit-expenses): Review and edit expense details in Expense Agent after AI receipt scanning or manual entry. Update the vendor, amount, category, and other fields.
- [Set Up Expense Agent in Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-configuration-page): Learn how to set up Expense Agent to automate expense tracking, processing, policy evaluation, and approval workflows in Business Central.
- [Upload Receipts and Create Mileage Expenses](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-upload-receipts): Upload receipts to Expense Agent for AI extraction or create mileage expenses with route-based distance calculation in the web app.
  - In the observatory: [Page 6997 "Expense Reports"](../../../objects/page/6997.md), [Page 7128 "Mileage Rate Setup"](../../../objects/page/7128.md)
- [Use the Expense Agent Mobile App (preview)](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-mobile-app): Capture receipts on the go with the Business Central Expenses mobile app for iOS and Android, featuring document scanning and offline support.
  - In the observatory: [Page 7128 "Mileage Rate Setup"](../../../objects/page/7128.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10631 Integration/main to releases 29.x 31a860b5](../../../changes/bcapps/10631.md) (code change): "Expense Agent gains policy evaluation tables, pages, enums and APIs"
- [#11740 Bug 636971: [Expense Agent] EA Scheduler Task table grows unbounded with no cleanup or UI visibility](../../../changes/bcapps/11740.md) (code change): "The Expense Agent now calls an existing cleanup function"
- [#11997 Clarify Expense Agent Entra app permission checks](../../../changes/bcapps/11997.md) (code change): "Permission checks for the Expense Agent Entra app have been reordered"
- [#12147 Bugs/add corp card basics](../../../changes/bcapps/12147.md) (code change): "Corporate card functionality is added to the Expense Agent"
- [#12514 Revert Expense API test re-enablement and consolidated fixes](../../../changes/bcapps/12514.md) (code change): "Fully reverts the earlier commit that re-enabled Expense API tests"
- [#12539 Add Expense Agent consumption V2 and trial support](../../../changes/bcapps/12539.md) (code change): "Expense Agent adds a V2 consumption API and a 50-expense feature trial"
- [#12599 [Master] - Slice 629913: [Expense Agent][VENDOR] Enforced background itemization required for approvals](../../../changes/bcapps/12599.md) (code change): "Expense Agent now requires itemization when an enabled Expense Policy"
- [#12763 [Master] - Bug 654021: [Expense Agent] [Professional] Online: Creating Production - Setup Data Only Company with Delegated Admin access: "'IndirectInsert' permission on TableData 6913 'Expense Pmt Method" - 2610091420000495](../../../changes/bcapps/12763.md) (code change): "Expense Agent delegated admin partner entitlements are updated to grant"
- [#12810 ExpenseAgent-CAUS-default-VAT-setup-fails](../../../changes/bcapps/12810.md) (code change): "Fixes the Expense Agent default VAT setup failing"
- [#12882 [Master] - Bug 651169: [Expense Agent] Exchange rate date limitation](../../../changes/bcapps/12882.md) (code change): "Expense Agent now correctly handles exchange rate dates for transactions"
- [#13058 Bug 656064: Expense Agent: Itemization table holds unrounded values, leading to rounding errors. Also missing currency code.](../../../changes/bcapps/13058.md) (code change): "Expense itemization records now store properly rounded currency amounts"
- [Directions EMEA 2026, Day 1: Copilot Moves from Answers to Actions](../../../posts/thinkaboutit-be/8348.md) (community post): "covers Business Skills, the Expense Agent and what AI interaction means"
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
