---
id: topic/business-central/business-functionality/expense-management-preview/set-up-expense-management
type: topic
title: Set up expense management
summary: "Setup of expense management (preview) in Business Central: Expense Agent, general settings, categories, rules and policies, expense users and teams, mileage rates, and per diem and mileage allowances. It answers questions on what to configure before employees submit and process expenses."
tier: official
language: en
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T13:43:32.763Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3510cdbbf43f5f4aa8c485ab88405f521960c8d1bc6579eeb8cec114b22b0bfd
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-configuration-page
    title: Set Up Expense Agent in Business Central
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-categories-rules
    title: Set Up Expense Categories, Rules, and Policies
    date: "2026-09-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-setup
    title: Set Up Expense Management in Business Central
    date: "2026-09-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-users-teams
    title: Set Up Expense Users and Teams
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-mileage-rate-setup
    title: Set Up Mileage Rates for Expense Management
    date: "2026-09-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-per-diem-mileage
    title: Set Up Per Diem and Mileage Allowances
    date: "2026-09-26"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-configuration-page
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-categories-rules
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-setup
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-users-teams
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-mileage-rate-setup
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-per-diem-mileage
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/expense-management-preview
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Expense management (preview)
  - Set up expense management
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/expense-management-preview
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 6900
  - 6901
  - 6920
  - 6930
  - 6937
  - 6939
  - 6945
  - 6946
  - 6949
  - 6951
  - 6952
  - 6973
  - 6974
  - 6976
  - 6988
  - 6990
  - 6996
  - 7127
  - 7128
  - 7130
member_hash: d72ec8e24a2815d30bec95f950edec2923902e011647aef1f52fa65f21b0eb44
narrative: generated
---

# Set up expense management

> Setup of expense management (preview) in Business Central: Expense Agent, general settings, categories, rules and policies, expense users and teams, mileage rates, and per diem and mileage allowances. It answers questions on what to configure before employees submit and process expenses.

Path: [Business functionality](../../business-functionality.md) > [Expense management (preview)](../expense-management-preview.md) > Set up expense management · tier official · system none · **unreviewed** (machine-generated narrative)

## Overview

This section covers the configuration an administrator completes before employees can submit expenses. It starts with the general expense management setup and the Expense Agent setup, which handle submission channels, approval workflows, accounting defaults, policy evaluation and communication settings. Both are reached through assisted setup.

The remaining pages cover the master data the setup depends on. Expense categories, subcategories, groups, locations, rules and policies classify and validate expenses. Expense users link employees to the system with posting groups and optional teams and approvers. Mileage rates and per diem and mileage allowances define how travel reimbursements are calculated.

A sensible order: run the general setup page first, then the Expense Agent setup, then create categories, rules and policies, then expense users and teams. Finish with mileage rates and per diem allowances if employees claim travel costs.

## Key points

- General expense management setup covers approval workflow, posting groups, payment methods, VAT reclaim, number series and notification preferences, and is available through assisted setup.
- Expense Agent setup configures the email and web app submission channels, approval workflows, accounting defaults, receipt handling and AI-assisted policy evaluation.
- Expense categories carry posting groups; subcategories allow itemization, groups support reporting, and locations hold per diem rates.
- Expense rules and policies can include merchant requirements and restrictions, and conditions and amounts.
- Expense users are created by linking employees and assigning posting groups; teams, team managers and approvers are optional, and users can be imported from Microsoft Entra ID.
- Mileage rates are defined by vehicle type, currency and effective dates, with fallback to a standard rate and automatic rate selection by date and vehicle.
- Mileage calculation can double the distance for round trips.
- Per diem calculation methods include full calendar day, 24-hour rolling period and overnight stay, with partial day rules and meal reduction percentages.

## Learn pages

- [Set Up Expense Agent in Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-configuration-page): Learn how to set up Expense Agent to automate expense tracking, processing, policy evaluation, and approval workflows in Business Central.
- [Set Up Expense Categories, Rules, and Policies](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-categories-rules): Learn how to create expense categories, subcategories, groups, rules, and AI-evaluated policies that control employee expenses in Business Central.
- [Set Up Expense Management in Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-setup): Learn how to configure Expense Agent, policies, payment methods, posting groups, VAT reclaim, and approval workflows for expenses in Business Central.
- [Set Up Expense Users and Teams](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-users-teams): Learn how to create expense users, link them to employees, and organize them into teams for expense management in Business Central.
- [Set Up Mileage Rates for Expense Management](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-mileage-rate-setup): Configure mileage reimbursement rates by vehicle type, currency, and date range so Business Central applies the correct rate automatically.
- [Set Up Per Diem and Mileage Allowances](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-per-diem-mileage): Learn how to configure per diem rates, mileage reimbursement, partial day rules, and meal reductions for expense management in Business Central.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 6900, 6901, 6920, 6930, 6937, 6939, 6945, 6946, 6949, 6951, 6952, 6973, 6974, 6976, 6988, 6990, 6996, 7127, 7128, 7130.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
