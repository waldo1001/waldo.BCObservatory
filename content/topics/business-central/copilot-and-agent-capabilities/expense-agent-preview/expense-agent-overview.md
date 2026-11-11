---
id: topic/business-central/copilot-and-agent-capabilities/expense-agent-preview/expense-agent-overview
type: topic
title: Expense Agent overview
summary: Expense Agent (preview) is an AI-powered agent in Business Central that captures receipts, creates and categorizes expenses, builds expense reports, and checks policy compliance. These pages answer questions about what it does, how it handles emailed receipts, and how compliance rules are evaluated.
tier: official
language: en
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-11T00:59:22.225Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: aed82b436f556a90349768130316487d26a3ddfb24c34b2138dc2500a92fd2dd
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-overview
    title: Expense Agent Overview for Business Central
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent
    title: Expense Agent Overview in Business Central
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-agent
    title: How the Expense Agent Processes Emails
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-policy-compliance
    title: Understand Policy Compliance in Expense Agent
    date: "2026-10-07"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-overview
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-agent
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-policy-compliance
  objects:
    - object/page/4400
    - object/page/4410
    - object/page/6996
  features: []
  topics:
    - topic/business-central/copilot-and-agent-capabilities/expense-agent-preview
  localizations: []
  videos:
    - video/4TE8uwIi91k
    - video/ARKckFygbWQ
    - video/q-udoJPGUKE
    - video/qZALauRY_So
    - video/WFAZLsUTk20
  posts: []
  guidelines: []
  changes:
    - change/bcapps/11955
    - change/bcapps/12472
    - change/bcapps/12539
    - change/bcapps/12821
    - change/bcapps/12882
    - change/bcapps/12894
    - change/bcapps/12910
    - change/bcapps/13182
    - change/bcapps/13721
learn_toc_path:
  - Copilot and agent capabilities
  - Expense Agent (preview)
  - Expense Agent overview
toc_file: business-central/TOC.md
parent: topic/business-central/copilot-and-agent-capabilities/expense-agent-preview
children: []
coverage:
  learn: 4
  code: 3
  video: 5
  blog: 0
  guideline: 0
bc_forms:
  - 4400
  - 4410
  - 6996
member_hash: 966c4af38a343699ebc42d6d6e1e4374c11762b58288ed16e325de1a05a76b87
narrative: generated
---

# Expense Agent overview

> Expense Agent (preview) is an AI-powered agent in Business Central that captures receipts, creates and categorizes expenses, builds expense reports, and checks policy compliance. These pages answer questions about what it does, how it handles emailed receipts, and how compliance rules are evaluated.

Path: [Copilot and agent capabilities](../../copilot-and-agent-capabilities.md) > [Expense Agent (preview)](../expense-agent-preview.md) > Expense Agent overview · tier official · system copilot · narrative **unreviewed** (model text not yet checked)

## Overview

Expense Agent helps employees manage business expenses in Business Central. It takes in receipts, extracts data, categorizes and itemizes expenses, and creates expense reports for review and approval. Receipts can come in through the web app, mobile, or a shared mailbox. The pages also mention mileage expenses, travel requests, and per diem calculation.

The four pages cover different angles. Two give the general overview of capabilities and channels. One explains how the agent processes emails: it monitors for expense-related messages, creates expenses, assigns them to reports, and sends confirmations and reminders. One explains policy compliance, which combines deterministic Business Central rules with AI-assisted policy evaluation.

Start with the two overview pages to understand the scope, then read the email processing page if you use a shared mailbox, and the policy compliance page if you need to know how non-compliant expenses are flagged.

## Key points

- Expense Agent is an AI-powered app/agent for capturing receipts, tracking spending, and submitting expense reports in Business Central.
- Listed capabilities include receipt scanning, mileage expenses, expense reports, travel requests, and policy compliance.
- Receipts can be submitted via the web app, mobile, or a shared mailbox, with data extraction, categorization, itemization, and per diem calculation.
- Email processing detects expense-related emails, creates expense records, assigns them to reports, and sends confirmation and reminder emails.
- Email processing includes access control.
- Policy compliance combines deterministic Business Central rules with AI-assisted policy evaluation.
- Non-compliant expenses are flagged, and policy snapshots appear in the activity timeline.
- Compliance is evaluated in the background after submission, and submitters can run checks before submitting.

## Learn pages

- [Expense Agent Overview for Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-overview): Use Expense Agent to capture receipts, track expenses, plan travel requests, and submit expense reports for approval with Business Central.
- [Expense Agent Overview in Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent): Learn how the Expense Agent automates expense processing, including receipt intake, data extraction, categorization, and expense report creation.
- [How the Expense Agent Processes Emails](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-agent): Learn how Expense Agent monitors a mailbox, creates expenses from emails, and sends reminders about open expense reports.
- [Understand Policy Compliance in Expense Agent](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-policy-compliance): Learn how Expense Agent applies real-time expense rules and uses AI to evaluate your organization's natural-language expense policies.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11955 Slice 626975: [Expense Agent] Alternate approvers - Delegated/Substitutes (November '26)](../../../../changes/bcapps/11955.md) (code change): "Expense Agent adds alternate approvers for expense approvals"
- [#12472 Expense Agent Default VAT Setup fails in localized companies](../../../../changes/bcapps/12472.md) (code change): "Fixes VAT setup initialization for Expense Agent in localized environments"
- [#12539 Add Expense Agent consumption V2 and trial support](../../../../changes/bcapps/12539.md) (code change): "Expense Agent adds a V2 consumption API and a 50-expense feature trial"
- [#12821 [SOA] Copy manual task attachments to sales quotes](../../../../changes/bcapps/12821.md) (code change): "Adds internal table 4590 SOA Attachment Transfer to track"
- [#12882 [Master] - Bug 651169: [Expense Agent] Exchange rate date limitation](../../../../changes/bcapps/12882.md) (code change): "Exchange rate date handling corrected for Expense Agent transactions"
- [#12894 [PayablesAgent] Add support for credit memos, recognised from the PDF and applied to the original invoice](../../../../changes/bcapps/12894.md) (code change): "Payables Agent now recognizes vendor credit notes in PDFs"
- [#12910 [Master] - Bug 652243: [Expense Agent] Validate approval user email](../../../../changes/bcapps/12910.md) (code change): "Approval user email validation in the Expense User table"
- [#13182 [Master] - Bug 656364: [Expense Agent] Add a View rules link below Enforce management rules](../../../../changes/bcapps/13182.md) (code change): "View rules link was added below the Enforce management rules setting"
- [#13721 [Expense Agent] Create per diem line when approving travel requests with Per Diem Included](../../../../changes/bcapps/13721.md) (code change): "Per diem lines are automatically created during travel request approval when Per Diem Included is enabled"
- [What's new in Expense Agent: Mobile App ( Preview) (2026 release wave 2)](../../../../videos/4TE8uwIi91k.md) (video): "Receipt scanning with auto capture; Bulk receipt upload; Mileage expense creation"
- [Expense Agent: Web App Experience (2026 release wave 1)](../../../../videos/ARKckFygbWQ.md) (video): "receipt capture; receipt extraction; automatic categorization; itemization; compliance rules"
- [Introducing: Web App for Expense Agent (2026 release wave 1)](../../../../videos/q-udoJPGUKE.md) (video): "Web App for Expense Agent; AI Receipt Extraction; Automatic Expense Report Creation"
- [Introducing: Approvals for the Expense Agent (2026 release wave 1)](../../../../videos/qZALauRY_So.md) (video): "Approvals for the Expense Agent expense agent; workflow; notification; policy compliance"
- [What's New: Business Central Agent Instruction History](../../../../videos/WFAZLsUTk20.md) (video): "Agent Instruction History Autosave; Manual Save to History; Download Instructions"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4400 "SOA Setup"](../../../../objects/page/4400.md) · captioned "Configure Sales Order Agent" · on [Table 4325 "SOA Setup"](../../../../objects/table/4325.md)
- [Page 4410 "SOA Multi Items Availability"](../../../../objects/page/4410.md) · captioned "Item Availability" · on [Table 27 "Item"](../../../../objects/table/27.md)
- [Page 6996 "Expense Agent Setup"](../../../../objects/page/6996.md) · captioned "Expense Management Setup" · on [Table 6930 "Expense Agent Setup"](../../../../objects/table/6930.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
