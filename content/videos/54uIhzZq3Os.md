---
id: video/54uIhzZq3Os
type: video
title: "Expense Agent: Finance Controlling (2026 release wave 1)"
summary: "Expense Agent walkthrough in Business Central: how an employee's expense flows through dimensions, expense report, posting (project and employee ledger entries), employee payment via the payment journal, and project billable costs. Status of the feature is not stated in the facts."
tier: official
language: en
tags:
  - expense agent
  - expense report
  - dimensions
  - project billable costs
  - employee payments
  - ledger entries
  - default dimensions
  - data flow
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T22:47:04.796Z"
  flags: []
generated:
  at: "2026-10-07T22:47:04.836Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: c2e27773501320b728dcbbfb8c5716b0df49ff476021a09f5834ae007a34d58f
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=54uIhzZq3Os&t=0s
    title: "Expense Agent: Finance Controlling (2026 release wave 1)"
    date: "2026-08-07T13:00:06.000Z"
    commit: null
    t: 0
    quote: Welcome to this expense agent series where we are going to look behind the scenes what happens in BC when somebody makes expenses in
  - kind: video
    url: https://www.youtube.com/watch?v=54uIhzZq3Os&t=28s
    title: "Expense Agent: Finance Controlling (2026 release wave 1)"
    date: "2026-08-07T13:00:06.000Z"
    commit: null
    t: 28
    quote: And we're going to see a bit about how data is flowing through our system automatically. So one thing that Lena cannot do herself
  - kind: video
    url: https://www.youtube.com/watch?v=54uIhzZq3Os&t=90s
    title: "Expense Agent: Finance Controlling (2026 release wave 1)"
    date: "2026-08-07T13:00:06.000Z"
    commit: null
    t: 90
    quote: And then the accountant can choose to add or move um dimensions. So in this case the accountant has added a business group.
  - kind: video
    url: https://www.youtube.com/watch?v=54uIhzZq3Os&t=125s
    title: "Expense Agent: Finance Controlling (2026 release wave 1)"
    date: "2026-08-07T13:00:06.000Z"
    commit: null
    t: 125
    quote: And there she can assign the uh expense to a customer. She can even specify which account in our system it should go to,
  - kind: video
    url: https://www.youtube.com/watch?v=54uIhzZq3Os&t=186s
    title: "Expense Agent: Finance Controlling (2026 release wave 1)"
    date: "2026-08-07T13:00:06.000Z"
    commit: null
    t: 186
    quote: And there's also a ledger entry for the employee, because now we owe Lena this money.
  - kind: video
    url: https://www.youtube.com/watch?v=54uIhzZq3Os&t=236s
    title: "Expense Agent: Finance Controlling (2026 release wave 1)"
    date: "2026-08-07T13:00:06.000Z"
    commit: null
    t: 236
    quote: And as you can see that we now have an account type that's called employee. Previously, it would have been only a vendor, but
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: 54uIhzZq3Os
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=54uIhzZq3Os
published_at: "2026-08-07T13:00:06.000Z"
duration_s: 307
captions: full
audience:
  - functional consultant
  - administrator
  - end user
chapters:
  - t: 0
    title: Introduction to the Expense Agent
  - t: 28
    title: Expense submission and dimension tracking
  - t: 102
    title: Expense report creation and billable information
  - t: 147
    title: Posting the expense report and ledger entries
  - t: 186
    title: Employee payment processing
  - t: 250
    title: Project cost tracking and completion
features:
  - name: Expense Agent
    status: unclear
    t: 0
    verified: false
    status_source: video
  - name: Default dimensions on employee records
    status: unclear
    t: 52
    verified: false
    status_source: video
  - name: Billable information on expenses
    status: unclear
    t: 114
    verified: false
    status_source: video
  - name: Posted expense report ledger entries
    status: unclear
    t: 162
    verified: false
    status_source: video
  - name: Pay employee function
    status: unclear
    t: 211
    verified: false
    status_source: video
  - name: Employee account type in payment journal
    status: unclear
    t: 236
    verified: false
    status_source: video
  - name: Project billable cost tracking for expenses
    status: unclear
    t: 260
    verified: false
    status_source: video
objects_mentioned:
  - other posted expense report
  - other project ledger entry
  - other employee ledger entry
  - other payment journal
quotes:
  - t: 0
    text: Welcome to this expense agent series where we are going to look behind the scenes what happens in BC when somebody makes expenses in
    check: exact
  - t: 28
    text: And we're going to see a bit about how data is flowing through our system automatically. So one thing that Lena cannot do herself
    check: exact
  - t: 90
    text: And then the accountant can choose to add or move um dimensions. So in this case the accountant has added a business group.
    check: exact
  - t: 125
    text: And there she can assign the uh expense to a customer. She can even specify which account in our system it should go to,
    check: exact
  - t: 186
    text: And there's also a ledger entry for the employee, because now we owe Lena this money.
    check: exact
  - t: 236
    text: And as you can see that we now have an account type that's called employee. Previously, it would have been only a vendor, but
    check: exact
---

# Expense Agent: Finance Controlling (2026 release wave 1)

> Expense Agent walkthrough in Business Central: how an employee's expense flows through dimensions, expense report, posting (project and employee ledger entries), employee payment via the payment journal, and project billable costs. Status of the feature is not stated in the facts.

[Watch on YouTube](https://www.youtube.com/watch?v=54uIhzZq3Os) · Microsoft Dynamics 365 Business Central (YouTube) · 2026-08-07 · 5:07 · tier official · reviewed (checked by Opus)

## Overview

The video follows an expense submitted in the web app by an employee, Lena, and shows what the Expense Agent does behind the scenes as data moves through Business Central. It covers dimensions, billable information, posting, payment and project cost tracking.

Default dimensions on the employee record, such as department and sales person, are pulled through to the expense. The employee cannot set dimensions herself. An accountant can add or move dimensions afterwards. Posting the expense report creates project and employee ledger entries, and the employee can then be paid from the payment journal using the new employee account type.

## Key points

- Default dimensions on the employee record (for example department and sales person) flow automatically into expenses the employee submits.
- The employee cannot specify dimensions herself; the accountant can add or move dimensions afterwards (in the demo the accountant added a business group).
- Billable information on an expense lets the employee assign a customer, the account in the system it should go to, and a project and project task number; these sources combine into a new set of dimensions.
- Posting an expense report creates the posted expense report, project ledger entries and employee ledger entries, the last tracking the money owed to the employee.
- From the employee card, a Pay employee function shows outstanding employee expenses and creates a payment in the normal payment journal.
- The payment journal now has an 'employee' account type; previously only vendor was available.
- Expenses assigned to a project show up under the project's billable cost, posted as an expense type such as other travel expenses.

## Chapters

- [0:00](https://www.youtube.com/watch?v=54uIhzZq3Os&t=0s) Introduction to the Expense Agent
- [0:28](https://www.youtube.com/watch?v=54uIhzZq3Os&t=28s) Expense submission and dimension tracking
- [1:42](https://www.youtube.com/watch?v=54uIhzZq3Os&t=102s) Expense report creation and billable information
- [2:27](https://www.youtube.com/watch?v=54uIhzZq3Os&t=147s) Posting the expense report and ledger entries
- [3:06](https://www.youtube.com/watch?v=54uIhzZq3Os&t=186s) Employee payment processing
- [4:10](https://www.youtube.com/watch?v=54uIhzZq3Os&t=250s) Project cost tracking and completion

## Features

| Feature | Status | At |
|---|---|---|
| Expense Agent | status not stated, demoed | [0:00](https://www.youtube.com/watch?v=54uIhzZq3Os&t=0s) |
| Default dimensions on employee records | status not stated, demoed | [0:52](https://www.youtube.com/watch?v=54uIhzZq3Os&t=52s) |
| Billable information on expenses | status not stated, demoed | [1:54](https://www.youtube.com/watch?v=54uIhzZq3Os&t=114s) |
| Posted expense report ledger entries | status not stated, demoed | [2:42](https://www.youtube.com/watch?v=54uIhzZq3Os&t=162s) |
| Pay employee function | status not stated, demoed | [3:31](https://www.youtube.com/watch?v=54uIhzZq3Os&t=211s) |
| Employee account type in payment journal | status not stated, demoed | [3:56](https://www.youtube.com/watch?v=54uIhzZq3Os&t=236s) |
| Project billable cost tracking for expenses | status not stated, demoed | [4:20](https://www.youtube.com/watch?v=54uIhzZq3Os&t=260s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "posted expense report" at [2:52](https://www.youtube.com/watch?v=54uIhzZq3Os&t=172s)
- other "project ledger entry" at [3:06](https://www.youtube.com/watch?v=54uIhzZq3Os&t=186s)
- other "employee ledger entry" at [3:06](https://www.youtube.com/watch?v=54uIhzZq3Os&t=186s)
- other "payment journal" at [3:56](https://www.youtube.com/watch?v=54uIhzZq3Os&t=236s)

## Quotes

- [0:00](https://www.youtube.com/watch?v=54uIhzZq3Os&t=0s) "Welcome to this expense agent series where we are going to look behind the scenes what happens in BC when somebody makes expenses in"
- [0:28](https://www.youtube.com/watch?v=54uIhzZq3Os&t=28s) "And we're going to see a bit about how data is flowing through our system automatically. So one thing that Lena cannot do herself"
- [1:30](https://www.youtube.com/watch?v=54uIhzZq3Os&t=90s) "And then the accountant can choose to add or move um dimensions. So in this case the accountant has added a business group."
- [2:05](https://www.youtube.com/watch?v=54uIhzZq3Os&t=125s) "And there she can assign the uh expense to a customer. She can even specify which account in our system it should go to,"
- [3:06](https://www.youtube.com/watch?v=54uIhzZq3Os&t=186s) "And there's also a ledger entry for the employee, because now we owe Lena this money."
- [3:56](https://www.youtube.com/watch?v=54uIhzZq3Os&t=236s) "And as you can see that we now have an account type that's called employee. Previously, it would have been only a vendor, but"

Presenters (as heard): Lena.
