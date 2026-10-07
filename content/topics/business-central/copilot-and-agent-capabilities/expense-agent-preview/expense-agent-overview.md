---
id: topic/business-central/copilot-and-agent-capabilities/expense-agent-preview/expense-agent-overview
type: topic
title: Expense Agent overview
summary: Expense Agent (preview) in Business Central is an AI-powered agent that automates the expense lifecycle. This section answers questions about what it does, how it processes emails and receipts, and how it checks expenses against rules and policies.
tier: official
language: en
system: copilot
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:05.364Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 9019bae00c0b9df2455cf3f6ce528d4622f70f098abb27139fddbe544bc51de1
evidence:
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
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-policy-compliance
    title: Understand Policy Compliance in Expense Agent
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-overview
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-agent
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-policy-compliance
  objects: []
  features: []
  topics:
    - topic/business-central/copilot-and-agent-capabilities/expense-agent-preview
  localizations: []
  videos:
    - video/6rm45dSB6xg
    - video/cVfZoDwKYpI
    - video/cWVhWBMbXb4
    - video/e_x5QF0vXgs
    - video/GwrMf1umTFg
    - video/NI6WYze-JSU
    - video/vyQnSxRGJDA
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9910
learn_toc_path:
  - Copilot and agent capabilities
  - Expense Agent (preview)
  - Expense Agent overview
toc_file: business-central/TOC.md
parent: topic/business-central/copilot-and-agent-capabilities/expense-agent-preview
children: []
coverage:
  learn: 4
  code: 0
  video: 7
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

> Expense Agent (preview) in Business Central is an AI-powered agent that automates the expense lifecycle. This section answers questions about what it does, how it processes emails and receipts, and how it checks expenses against rules and policies.

Path: [Copilot and agent capabilities](../../copilot-and-agent-capabilities.md) > [Expense Agent (preview)](../expense-agent-preview.md) > Expense Agent overview · tier official · system copilot · narrative reviewed by Opus

## Overview

Expense Agent is an AI-powered agent that handles the expense lifecycle in Business Central. It takes in receipts from the web app, mobile app or email, extracts data, categorizes and itemizes expenses, creates expense reports, and prepares them for approval and posting. It also covers per diem calculation, mileage tracking and calculation, and approval workflows with policy compliance checks.

The section has four pages. Two overview pages give the general picture of capabilities and overlap a lot. "How the Expense Agent Processes Emails" explains the mailbox-driven flow: it monitors a configured mailbox, detects receipts and credit card statements, creates expenses, groups them by reporting period, and sends confirmations and reminders. "Understand Policy Compliance in Expense Agent" explains how expenses are checked against deterministic rules and AI-evaluated policies.

Start with an overview page for scope. Read the email page if receipts arrive by mail. Read the policy compliance page if you need to understand flags on expenses or configure policy evaluation.

## Key points

- Receipts can come in through the web app, mobile app or email, and the agent extracts data, categorizes, subcategorizes and itemizes them.
- Capabilities include per diem calculation and mileage tracking and calculation.
- The agent creates expense reports and prepares them for approval and posting in Business Central.
- Email processing monitors a configured mailbox and detects receipts and credit card statements.
- Created expenses are grouped into reports by reporting period, and the agent sends confirmation emails and open report reminders to expense users.
- Policy compliance separates deterministic Business Central rules from AI-evaluated natural-language policies.
- Expenses are flagged with compliance indicators for rule violations or potential policy issues.
- Policy evaluation has its own configuration and includes privacy protection.

## Learn pages

- [Expense Agent overview for Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent): Learn how the Expense Agent automates expense processing, including receipt intake, data extraction, categorization, and expense report creation.
- [Expense Agent Overview for Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-overview): Learn about Expense Agent, an AI-powered tool that helps employees capture receipts, track expenses, and submit expense reports in Business Central.
- [How the Expense Agent Processes Emails](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-agent): Learn how Expense Agent monitors a mailbox, creates expenses from emails, and sends reminders about open expense reports.
- [Understand Policy Compliance in Expense Agent](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-policy-compliance): Learn how Expense Agent applies real-time expense rules and uses AI to evaluate your organization's natural-language expense policies.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9910 [SOA] Move attachment processing to direct model reading](../../../../changes/bcapps/9910.md) (code change): "Sales Order Agent now processes PDF and image attachments directly with GPT-4.1 mini"
- [Expense Agent: Feedback (2026 release wave 1)](../../../../videos/6rm45dSB6xg.md) (video): "Expense Agent; Feedback; user experience; issue reporting"
- [Microsoft presents: Behind the scenes of how we build the new Expense Agent](../../../../videos/cVfZoDwKYpI.md) (video): "Expense Agent; Receipt Extraction via AI; Mileage Expense Calculation"
- [What's new in Expense Agent: Improved Mileage Handling (2026 release wave 2)](../../../../videos/cWVhWBMbXb4.md) (video): "Date-range mileage allowances; Vehicle-type-specific mileage rates; Mileage rate setup table"
- [Expense Agent: Mobile Experience (2026 release wave 1)](../../../../videos/e_x5QF0vXgs.md) (video): "Expense Agent mobile app; Receipt capture with native OS detection; AI extraction of expense details"
- [What's new in Expense Agent: Project Handling (2026 release wave 2)](../../../../videos/GwrMf1umTFg.md) (video): "What's new in Expense Agent: Project Handling shows project tracking in Expense Agent"
- [Expense Agent: Project Expenses (2026 release wave 1)](../../../../videos/NI6WYze-JSU.md) (video): "Expense Agent; project tracking; project assignment"
- [Expense Agent: Per Diem Allowances (2026 release wave 1)](../../../../videos/vyQnSxRGJDA.md) (video): "Expense Agent: Per Diem Allowances; per diem allowances; expense agent"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 4400, 4410, 6996.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
