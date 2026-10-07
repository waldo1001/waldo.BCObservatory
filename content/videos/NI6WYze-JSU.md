---
id: video/NI6WYze-JSU
type: video
title: "Expense Agent: Project Expenses (2026 release wave 1)"
summary: "Expense Agent project tracking in Business Central: how an administrator enables project and task visibility in the web app, how submitters assign expenses to projects and tasks, and how expense users are linked to employees and resources. Also covers the controller's manual fallback."
tier: official
language: en
tags:
  - expense agent
  - project tracking
  - project assignment
  - web app
  - expense report
  - resource linking
  - administrator setup
  - licensing
system: projects
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T00:17:53.935Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: c4531eabad4bd7d32ea248f2dd30d3c7e6ad3a47f0677be7b91836fc0d19b552
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=NI6WYze-JSU&t=17s
    title: "Expense Agent: Project Expenses (2026 release wave 1)"
    date: "2026-08-07T13:00:28.000Z"
    commit: null
    t: 17
    quote: First, administrator can decide if uh projects and tasks will be visible in web app or not. By default, they're not visible, but you
  - kind: video
    url: https://www.youtube.com/watch?v=NI6WYze-JSU&t=34s
    title: "Expense Agent: Project Expenses (2026 release wave 1)"
    date: "2026-08-07T13:00:28.000Z"
    commit: null
    t: 34
    quote: submitter cannot post ex- expense report and cannot post and cannot make a project ledger entry because submitter doesn't have easy central license.
  - kind: video
    url: https://www.youtube.com/watch?v=NI6WYze-JSU&t=93s
    title: "Expense Agent: Project Expenses (2026 release wave 1)"
    date: "2026-08-07T13:00:28.000Z"
    commit: null
    t: 93
    quote: i'm selecting the project which i want this expense to go into and also against the project task
  - kind: video
    url: https://www.youtube.com/watch?v=NI6WYze-JSU&t=119s
    title: "Expense Agent: Project Expenses (2026 release wave 1)"
    date: "2026-08-07T13:00:28.000Z"
    commit: null
    t: 119
    quote: So, it's in this configuration wizard of expense agent. Uh under project tracking, we have activated the project tracking and the project visibility was
  - kind: video
    url: https://www.youtube.com/watch?v=NI6WYze-JSU&t=130s
    title: "Expense Agent: Project Expenses (2026 release wave 1)"
    date: "2026-08-07T13:00:28.000Z"
    commit: null
    t: 130
    quote: Today, the expense user is linked to an employee and the employee is in turn linked to a resource.
  - kind: video
    url: https://www.youtube.com/watch?v=NI6WYze-JSU&t=154s
    title: "Expense Agent: Project Expenses (2026 release wave 1)"
    date: "2026-08-07T13:00:28.000Z"
    commit: null
    t: 154
    quote: But even if submitter doesn't know specific project, controller still has a chance to add this manually in a busy central.
links:
  learn: []
  objects: []
  features:
    - feature/573259
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: NI6WYze-JSU
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=NI6WYze-JSU
published_at: "2026-08-07T13:00:28.000Z"
duration_s: 175
captions: full
audience:
  - administrator
  - functional consultant
  - end user
chapters:
  - t: 0
    title: Introduction to Expense Agent and project tasks in web app
  - t: 17
    title: Administrator visibility controls for projects and tasks
  - t: 34
    title: Licensing and role requirements for posting
  - t: 66
    title: Submitting expense report with project assignment in web app
  - t: 104
    title: Project tracking setup and expense user resource linkage
  - t: 143
    title: Manual project assignment fallback in Business Central
features:
  - name: Project and task visibility in Expense Agent web app
    status: unclear
    t: 17
    verified: false
    status_source: video
  - name: Submitter project assignment capability
    status: unclear
    t: 81
    verified: false
    status_source: video
  - name: Project tracking configuration in Expense Agent setup
    status: preview
    t: 104
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573259"
  - name: Expense user to resource linkage
    status: preview
    t: 119
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573259"
  - name: Manual project assignment fallback in Business Central
    status: unclear
    t: 143
    verified: false
    status_source: video
objects_mentioned:
  - page Expense User Card
quotes:
  - t: 17
    text: First, administrator can decide if uh projects and tasks will be visible in web app or not. By default, they're not visible, but you
    check: exact
  - t: 34
    text: submitter cannot post ex- expense report and cannot post and cannot make a project ledger entry because submitter doesn't have easy central license.
    check: exact
  - t: 93
    text: i'm selecting the project which i want this expense to go into and also against the project task
    check: fuzzy
  - t: 119
    text: So, it's in this configuration wizard of expense agent. Uh under project tracking, we have activated the project tracking and the project visibility was
    check: exact
  - t: 130
    text: Today, the expense user is linked to an employee and the employee is in turn linked to a resource.
    check: exact
  - t: 154
    text: But even if submitter doesn't know specific project, controller still has a chance to add this manually in a busy central.
    check: exact
---

# Expense Agent: Project Expenses (2026 release wave 1)

> Expense Agent project tracking in Business Central: how an administrator enables project and task visibility in the web app, how submitters assign expenses to projects and tasks, and how expense users are linked to employees and resources. Also covers the controller's manual fallback.

[Watch on YouTube](https://www.youtube.com/watch?v=NI6WYze-JSU) · Microsoft Dynamics 365 Business Central (YouTube) · 2026-08-07 · 2:55 · tier official · **unreviewed** (machine-generated)

## Overview

The video shows how the Expense Agent handles project expenses. An administrator decides whether projects and tasks are visible in the web app. They are hidden by default. Visibility is set in the Expense Agent configuration wizard under project tracking, where it can be limited to assigned projects or opened to all projects.

A submitter then picks the project and project task in the categorization tab of the expense report in the web app. The submitter cannot post the expense or create a project ledger entry, because posting needs a controller or accountant with the Easy Central license. If the submitter does not know the project, the controller can add the assignment in Business Central. For project tracking to work, the expense user is linked to an employee, and the employee is linked to a resource.

## Key points

- Projects and tasks are not visible in the Expense Agent web app by default. An administrator has to enable them.
- In the Expense Agent configuration wizard, under project tracking, the administrator activates project tracking and sets visibility to all projects or assigned projects only.
- Submitters assign the project and project task in the categorization tab of the expense report in the web app.
- Submitters cannot post the expense or create a project ledger entry. Posting needs a controller or accountant with the Easy Central license.
- The expense user is linked to an employee, and the employee is linked to a resource. The link is set in the Expense User Card page.
- If the submitter does not know the project, the controller can add the project assignment manually in Business Central when reviewing and posting.

## Chapters

- [0:00](https://www.youtube.com/watch?v=NI6WYze-JSU&t=0s) Introduction to Expense Agent and project tasks in web app
- [0:17](https://www.youtube.com/watch?v=NI6WYze-JSU&t=17s) Administrator visibility controls for projects and tasks
- [0:34](https://www.youtube.com/watch?v=NI6WYze-JSU&t=34s) Licensing and role requirements for posting
- [1:06](https://www.youtube.com/watch?v=NI6WYze-JSU&t=66s) Submitting expense report with project assignment in web app
- [1:44](https://www.youtube.com/watch?v=NI6WYze-JSU&t=104s) Project tracking setup and expense user resource linkage
- [2:23](https://www.youtube.com/watch?v=NI6WYze-JSU&t=143s) Manual project assignment fallback in Business Central

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Project and task visibility in Expense Agent web app | status not stated, demoed | [0:17](https://www.youtube.com/watch?v=NI6WYze-JSU&t=17s) |  |
| Submitter project assignment capability | status not stated, demoed | [1:21](https://www.youtube.com/watch?v=NI6WYze-JSU&t=81s) |  |
| Project tracking configuration in Expense Agent setup | preview (roadmap [573259](../features/573259.md)), demoed | [1:44](https://www.youtube.com/watch?v=NI6WYze-JSU&t=104s) |  |
| Expense user to resource linkage | preview (roadmap [573259](../features/573259.md)), demoed | [1:59](https://www.youtube.com/watch?v=NI6WYze-JSU&t=119s) |  |
| Manual project assignment fallback in Business Central | status not stated | [2:23](https://www.youtube.com/watch?v=NI6WYze-JSU&t=143s) |  |

A status with a roadmap link comes from the Microsoft 365 roadmap feature this part of the video covers (matched by Haiku; links Opus dropped are not used); other statuses need a status word in the video itself.

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- page "Expense User Card" at [2:23](https://www.youtube.com/watch?v=NI6WYze-JSU&t=143s)

## Quotes

- [0:17](https://www.youtube.com/watch?v=NI6WYze-JSU&t=17s) "First, administrator can decide if uh projects and tasks will be visible in web app or not. By default, they're not visible, but you"
- [0:34](https://www.youtube.com/watch?v=NI6WYze-JSU&t=34s) "submitter cannot post ex- expense report and cannot post and cannot make a project ledger entry because submitter doesn't have easy central license."
- [1:33](https://www.youtube.com/watch?v=NI6WYze-JSU&t=93s) "i'm selecting the project which i want this expense to go into and also against the project task"
- [1:59](https://www.youtube.com/watch?v=NI6WYze-JSU&t=119s) "So, it's in this configuration wizard of expense agent. Uh under project tracking, we have activated the project tracking and the project visibility was"
- [2:10](https://www.youtube.com/watch?v=NI6WYze-JSU&t=130s) "Today, the expense user is linked to an employee and the employee is in turn linked to a resource."
- [2:34](https://www.youtube.com/watch?v=NI6WYze-JSU&t=154s) "But even if submitter doesn't know specific project, controller still has a chance to add this manually in a busy central."

Presenters (as heard): unnamed presenter 1, unnamed presenter 2.
