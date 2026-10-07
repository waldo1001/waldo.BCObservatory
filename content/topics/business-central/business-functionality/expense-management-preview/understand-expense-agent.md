---
id: topic/business-central/business-functionality/expense-management-preview/understand-expense-agent
type: topic
title: Understand Expense Agent
summary: Expense Agent in Business Central (preview) is an AI agent that automates the expense lifecycle, from receipt intake to draft expense reports. This section answers questions about what it does, how it processes emails, how policy compliance is checked, and its responsible AI limits.
tier: official
language: en
system: copilot
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:10.440Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 57f7edb44c6c54e272d33394eee6a594e1b5042cfd4f2499101d7d6c6e8605e9
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent
    title: Expense Agent overview for Business Central
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
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/faqs-expense-agent
    title: Responsible AI FAQ for Expense Agent (preview)
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-agent
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/faqs-expense-agent
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-policy-compliance
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/expense-management-preview
  localizations: []
  videos:
    - video/54uIhzZq3Os
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Expense management (preview)
  - Understand Expense Agent
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/expense-management-preview
children: []
coverage:
  learn: 4
  code: 0
  video: 1
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

> Expense Agent in Business Central (preview) is an AI agent that automates the expense lifecycle, from receipt intake to draft expense reports. This section answers questions about what it does, how it processes emails, how policy compliance is checked, and its responsible AI limits.

Path: [Business functionality](../../business-functionality.md) > [Expense management (preview)](../expense-management-preview.md) > Understand Expense Agent · tier official · system copilot · narrative reviewed by Opus

## Overview

Expense Agent is an AI-powered agent that takes receipts from the web app, mobile app, or email, extracts the data, categorizes and itemizes expenses, creates expense reports, and prepares them for approval and posting in Business Central. It also supports per diem and mileage calculation.

The four pages cover different angles. The overview describes the full lifecycle and features. The email page explains how the agent monitors a configured mailbox, detects receipts and credit card statements, creates expenses, groups them by reporting period, and sends confirmations and reminders. The policy compliance page explains how deterministic Business Central rules differ from AI-evaluated natural-language policies. The Responsible AI FAQ covers capabilities, limitations, safety, and feedback.

Start with the overview to get the scope, then read the email page if intake is by mailbox, and the policy compliance page if you need to know how violations are flagged. Read the Responsible AI FAQ to understand that drafts are reviewed by a human before posting.

## Key points

- Expense Agent handles receipt intake from web app, mobile app, or email, then extraction, categorization, itemization, and expense report creation.
- It supports per diem calculation and mileage tracking and calculation.
- Email processing: the agent monitors a configured mailbox, detects receipts and credit card statements, and creates expenses automatically.
- Expenses are grouped into reports by reporting period; the agent sends confirmation emails and open report reminders.
- Policy compliance separates deterministic Business Central rule checks from AI-assisted evaluation of natural-language policies.
- Compliance indicators flag expenses with rule violations or potential policy issues; policy evaluation is configurable and includes privacy protection.
- The agent produces draft reports for human review before posting; the feature is in preview.
- The Responsible AI FAQ describes capabilities, limitations, safety features, and feedback mechanisms.

## Learn pages

- [Expense Agent overview for Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent): Learn how the Expense Agent automates expense processing, including receipt intake, data extraction, categorization, and expense report creation.
- [How the Expense Agent Processes Emails](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-agent): Learn how Expense Agent monitors a mailbox, creates expenses from emails, and sends reminders about open expense reports.
- [Responsible AI FAQ for Expense Agent (preview)](https://learn.microsoft.com/dynamics365/business-central/expense-management/faqs-expense-agent): Learn how AI automates expenses processing in Business Central, including setup, capabilities, limitations, and responsible use.
- [Understand Policy Compliance in Expense Agent](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-policy-compliance): Learn how Expense Agent applies real-time expense rules and uses AI to evaluate your organization's natural-language expense policies.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Expense Agent: Finance Controlling (2026 release wave 1)](../../../../videos/54uIhzZq3Os.md) (video): "Expense Agent; Default dimensions on employee records; Billable information"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 4400, 4410, 6996.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
