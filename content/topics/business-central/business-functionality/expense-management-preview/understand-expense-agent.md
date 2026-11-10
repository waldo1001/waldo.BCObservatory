---
id: topic/business-central/business-functionality/expense-management-preview/understand-expense-agent
type: topic
title: Understand Expense Agent
summary: Expense Agent is an AI-powered agent in Business Central (preview) that captures receipts, extracts data, categorizes expenses and drafts expense reports for review. This section answers questions about what it does, how it handles email, how policy compliance works, and responsible AI considerations.
tier: official
language: en
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-10T00:57:46.434Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 7049e40e6dac13b4110c4628d15864f5518d731708f543711207eaf2a10dcbe4
evidence:
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
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/faqs-expense-agent
    title: Responsible AI FAQ for Expense Agent (preview)
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
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-agent
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/faqs-expense-agent
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-policy-compliance
  objects:
    - object/page/4400
    - object/page/4410
    - object/page/6996
  features: []
  topics:
    - topic/business-central/business-functionality/expense-management-preview
  localizations: []
  videos:
    - video/egE6UdOfar0
    - video/M0IzeLSn7qU
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10032
    - change/bcapps/10670
learn_toc_path:
  - Business functionality
  - Expense management (preview)
  - Understand Expense Agent
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/expense-management-preview
children: []
coverage:
  learn: 4
  code: 3
  video: 2
  blog: 0
  guideline: 0
bc_forms:
  - 4400
  - 4410
  - 6996
member_hash: 375de4a315699a34de1f7ac5a6fc1bce17c465ddc78f1155b698a1e75923fd09
narrative: generated
---

# Understand Expense Agent

> Expense Agent is an AI-powered agent in Business Central (preview) that captures receipts, extracts data, categorizes expenses and drafts expense reports for review. This section answers questions about what it does, how it handles email, how policy compliance works, and responsible AI considerations.

Path: [Business functionality](../../business-functionality.md) > [Expense management (preview)](../expense-management-preview.md) > Understand Expense Agent · tier official · system copilot · narrative **unreviewed** (model text not yet checked)

## Overview

Expense Agent automates expense processing in Business Central. It takes receipts from the web app or a shared mailbox, extracts the data, categorizes and itemizes expenses, groups them and creates draft expense reports. People review and approve the reports, so the agent supports the process and does not replace human decisions.

The four pages cover different angles. The overview explains the agent's capabilities and channels. The email page describes how the agent detects expense-related emails, creates records, assigns them to reports and sends confirmations and reminders. The policy compliance page explains how deterministic rules and AI-assisted policy evaluation flag non-compliant expenses. The responsible AI FAQ describes the system's purpose and its human-review model.

Start with the overview for the big picture. Then read the email page if you use a shared mailbox, and the policy compliance page if you need to understand flagging and checks before or after submission.

## Key points

- Expense Agent is an AI-powered agent for expense processing, and the feature is in preview.
- Receipts come in through the web app or a shared mailbox.
- It extracts data, categorizes expenses, itemizes them and calculates per diem.
- It creates draft expense reports for human review and approval.
- For email, it detects expense-related emails, creates expense records, assigns them to reports, and sends confirmation emails and reminders.
- Policy compliance combines deterministic Business Central rules with AI-assisted policy evaluation.
- Non-compliant expenses are flagged, and policy snapshots appear in the activity timeline.
- Submitters can run pre-submission checks, and evaluation also runs in the background after submission.

## Learn pages

- [Expense Agent Overview in Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent): Learn how the Expense Agent automates expense processing, including receipt intake, data extraction, categorization, and expense report creation.
- [How the Expense Agent Processes Emails](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-agent): Learn how Expense Agent monitors a mailbox, creates expenses from emails, and sends reminders about open expense reports.
- [Responsible AI FAQ for Expense Agent (preview)](https://learn.microsoft.com/dynamics365/business-central/expense-management/faqs-expense-agent): Learn how AI automates expenses processing in Business Central, including setup, capabilities, limitations, and responsible use.
- [Understand Policy Compliance in Expense Agent](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-policy-compliance): Learn how Expense Agent applies real-time expense rules and uses AI to evaluate your organization's natural-language expense policies.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10032 Fix Agent List and Agent Task List filter and refresh issues (AB#646062)](../../../../changes/bcapps/10032.md) (code change): "Fixed filter visibility and refresh issues on Agent List"
- [#10670 Add Agent Task Log JSON export](../../../../changes/bcapps/10670.md) (code change): "Agent Task Log now supports JSON export of selected rows with detailed context"
- [Introducing: Expense Agent in Business Central (2026 release wave 1)](../../../../videos/egE6UdOfar0.md) (video): "Expense Agent, receipt processing, approval workflow, expense reporting"
- [What's new in Expense Agent: Improved Approval Process (2026 release wave 2)](../../../../videos/M0IzeLSn7qU.md) (video): "AI-driven approval policies; Enhanced approval history and audit trail"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4400 "SOA Setup"](../../../../objects/page/4400.md) · captioned "Configure Sales Order Agent" · on [Table 4325 "SOA Setup"](../../../../objects/table/4325.md)
- [Page 4410 "SOA Multi Items Availability"](../../../../objects/page/4410.md) · captioned "Item Availability" · on [Table 27 "Item"](../../../../objects/table/27.md)
- [Page 6996 "Expense Agent Setup"](../../../../objects/page/6996.md) · captioned "Expense Management Setup" · on [Table 6930 "Expense Agent Setup"](../../../../objects/table/6930.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
