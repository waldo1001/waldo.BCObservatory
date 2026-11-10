---
id: topic/business-central/business-functionality/expense-management-preview/set-up-expense-management
type: topic
title: Set up expense management
summary: "Setup of expense management (preview) in Business Central: Expense Agent activation, categories, rules and AI policies, expense users and teams, approvers, mileage rates, and per diem allowances. It answers how to configure each part before employees submit expenses."
tier: official
language: en
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
  input_hash: 9479a08dfc96c383aa6739ce37506af392399d6356174fb9a4c7aa5978a16a8e
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-configuration-page
    title: Set Up Expense Agent in Business Central
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-categories-rules
    title: Set Up Expense Categories, Rules, and Policies
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-setup
    title: Set Up Expense Management in Business Central
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-users-teams
    title: Set Up Expense Users and Teams
    date: "2026-11-04"
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
  objects:
    - object/page/6900
    - object/page/6901
    - object/page/6920
    - object/page/6930
    - object/page/6937
    - object/page/6939
    - object/page/6945
    - object/page/6946
    - object/page/6949
    - object/page/6951
    - object/page/6952
    - object/page/6973
    - object/page/6974
    - object/page/6976
    - object/page/6988
    - object/page/6990
    - object/page/6996
    - object/page/7127
    - object/page/7128
    - object/page/7130
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
  code: 20
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

> Setup of expense management (preview) in Business Central: Expense Agent activation, categories, rules and AI policies, expense users and teams, approvers, mileage rates, and per diem allowances. It answers how to configure each part before employees submit expenses.

Path: [Business functionality](../../business-functionality.md) > [Expense management (preview)](../expense-management-preview.md) > Set up expense management · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the configuration work needed before employees submit expenses. It starts with the Expense Agent, which is activated through guided assisted setup. There you set receipt submission channels (email and web app), accounting defaults, rules, policy compliance and communication settings.

The other pages cover the supporting data. One page sets up categories, subcategories, groups, locations, rules and AI-evaluated policies, including withholding tax, VAT reclaim and per diem. One covers expense users and teams: linking employees, assigning posting groups, naming team managers and approvers. Two pages cover travel reimbursement: mileage rates by vehicle type, currency and date, and per diem and mileage allowances with their calculation methods.

A good starting point is the general page on setting up expense management in Business Central. It gives the overall picture, including payment methods and posting groups. Then use the Expense Agent page for activation, and the more specific pages for users, categories and policies, and travel allowances.

## Key points

- Expense Agent is configured and activated through guided assisted setup, covering receipt channels (email, web app), accounting defaults, rules, policy compliance and communication.
- Expense categories, subcategories, groups, locations and rules classify and validate expenses; policies can use AI evaluation.
- Tax-related setup includes withholding tax configuration and VAT reclaim.
- Payment methods, employee posting groups and expense posting groups are part of the core setup.
- Expense users are linked to employees, can be imported from Microsoft Entra ID, and are organized into teams with managers and approvers for the approval workflow.
- Mileage rates are defined by vehicle type, currency and effective date, with fallback to a standard rate and round-trip distance doubling.
- Rates are selected automatically by date and vehicle.
- Per diem supports full calendar day, 24-hour rolling period and overnight stay methods, with partial day rules and meal reduction percentages.

## Learn pages

- [Set Up Expense Agent in Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-configuration-page): Learn how to set up Expense Agent to automate expense tracking, processing, policy evaluation, and approval workflows in Business Central.
  - In the observatory: [Page 4317 "Agent User Settings"](../../../../objects/page/4317.md)
- [Set Up Expense Categories, Rules, and Policies](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-categories-rules): Learn how to create expense categories, subcategories, groups, rules, and AI-evaluated policies that control employee expenses in Business Central.
  - In the observatory: [Page 6996 "Expense Agent Setup"](../../../../objects/page/6996.md)
- [Set Up Expense Management in Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-setup): Learn how to configure Expense Agent, policies, payment methods, posting groups, VAT reclaim, and approval workflows for expenses in Business Central.
  - In the observatory: [Page 6930 "Expense Payment Methods"](../../../../objects/page/6930.md), [Page 6939 "Expense Approval Setup"](../../../../objects/page/6939.md), [Page 6946 "Expense Categories"](../../../../objects/page/6946.md)
- [Set Up Expense Users and Teams](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-users-teams): Learn how to create expense users, link them to employees, and organize them into teams for expense management in Business Central.
  - In the observatory: [Page 6910 "Expense Report"](../../../../objects/page/6910.md), [Page 9807 "User Card"](../../../../objects/page/9807.md)
- [Set Up Mileage Rates for Expense Management](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-mileage-rate-setup): Configure mileage reimbursement rates by vehicle type, currency, and date range so Business Central applies the correct rate automatically.
- [Set Up Per Diem and Mileage Allowances](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-per-diem-mileage): Learn how to configure per diem rates, mileage reimbursement, partial day rules, and meal reductions for expense management in Business Central.
  - In the observatory: [Page 6900 "Expense Management Rules"](../../../../objects/page/6900.md), [Page 6937 "Expense Locations"](../../../../objects/page/6937.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 6900 "Expense Management Rules"](../../../../objects/page/6900.md) · on [Table 6927 "Expense Rule Header"](../../../../objects/table/6927.md)
- [Page 6901 "Expense Rule Card"](../../../../objects/page/6901.md) · on [Table 6927 "Expense Rule Header"](../../../../objects/table/6927.md)
- [Page 6920 "Expense Location Card"](../../../../objects/page/6920.md) · on [Table 6925 "Expense Location"](../../../../objects/table/6925.md)
- [Page 6930 "Expense Payment Methods"](../../../../objects/page/6930.md) · on [Table 6913 "Expense Payment Method"](../../../../objects/table/6913.md)
- [Page 6937 "Expense Locations"](../../../../objects/page/6937.md) · on [Table 6925 "Expense Location"](../../../../objects/table/6925.md)
- [Page 6939 "Expense Approval Setup"](../../../../objects/page/6939.md) · on [Table 6932 "Expense Approval Setup"](../../../../objects/table/6932.md)
- [Page 6945 "Expense Category Card"](../../../../objects/page/6945.md) · captioned "Expense Category" · on [Table 6921 "Expense Category"](../../../../objects/table/6921.md)
- [Page 6946 "Expense Categories"](../../../../objects/page/6946.md) · on [Table 6921 "Expense Category"](../../../../objects/table/6921.md)
- [Page 6949 "Expense User"](../../../../objects/page/6949.md) · on [Table 6923 "Expense User"](../../../../objects/table/6923.md)
- [Page 6951 "Expense Users"](../../../../objects/page/6951.md) · on [Table 6923 "Expense User"](../../../../objects/table/6923.md)
- [Page 6952 "Expense Groups"](../../../../objects/page/6952.md) · on [Table 6924 "Expense Group"](../../../../objects/table/6924.md)
- [Page 6973 "Expense Subcategories"](../../../../objects/page/6973.md) · on [Table 6929 "Expense Subcategory"](../../../../objects/table/6929.md)
- [Page 6974 "Per Diem Expenses"](../../../../objects/page/6974.md) · on [Table 6905 "Expense Per Diem"](../../../../objects/table/6905.md)
- [Page 6976 "Expense Posting Groups"](../../../../objects/page/6976.md) · on [Table 6928 "Expense Posting Group"](../../../../objects/table/6928.md)
- [Page 6988 "Expense"](../../../../objects/page/6988.md) · on [Table 6900 "Expense"](../../../../objects/table/6900.md)
- [Page 6990 "Expense Teams"](../../../../objects/page/6990.md) · on [Table 6931 "Expense Team"](../../../../objects/table/6931.md)
- [Page 6996 "Expense Agent Setup"](../../../../objects/page/6996.md) · captioned "Expense Management Setup" · on [Table 6930 "Expense Agent Setup"](../../../../objects/table/6930.md)
- [Page 7127 "Expense Policies"](../../../../objects/page/7127.md) · on [Table 7092 "Expense Policy"](../../../../objects/table/7092.md)
- [Page 7128 "Mileage Rate Setup"](../../../../objects/page/7128.md) · on [Table 6939 "Mileage Rate Setup"](../../../../objects/table/6939.md)
- [Page 7130 "Expense Vehicle Types"](../../../../objects/page/7130.md) · captioned "Vehicle Types" · on [Table 7108 "Expense Vehicle Type"](../../../../objects/table/7108.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
