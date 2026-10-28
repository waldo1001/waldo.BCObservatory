---
id: topic/dev-itpro/development/programming-in-the-al-language/running-things-in-the-background
type: topic
title: Running things in the background
summary: "Background processing in Business Central AL: async operations, job queue, page background tasks and the task scheduler. It answers questions about choosing a mechanism, its limits and concurrency, error handling, retries and scheduling codeunits or reports."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:48.344Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ad47cd71590b002fef0aab9596fc58968b77de85f8bfd1d05ed0ccbec1fe0598
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-async-overview
    title: Async Processing Overview for Business Central
    date: "2026-10-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-job-queue
    title: Job queue
    date: "2023-12-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-background-tasks
    title: Page Background Tasks
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-startsession-integer-integer-string-table-method
    title: Session.StartSession(var Integer, Integer [, Text] [, var Record]) Method
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-stopsession-method
    title: Session.StopSession(Integer [, Text]) Method
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-task-scheduler
    title: Task scheduler
    date: "2024-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/taskscheduler/taskscheduler-data-type
    title: TaskScheduler data type
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-async-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-job-queue
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-background-tasks
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-task-scheduler
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language
    - topic/dev-itpro/development/programming-in-the-al-language/running-things-in-the-background/al-language-reference-background-process
  localizations: []
  videos:
    - video/D7GxnNiGQ14
  posts:
    - post/aardvarklabs-blog/3837
    - post/demiliani-com/13961
    - post/stefanmaron-com/https-stefanmaron-com-posts-bc-background-processing-make-it-feel-fast--2f2ea5c72a
  guidelines: []
  changes:
    - change/bcapps/11257
    - change/bcapps/11262
    - change/bcapps/11890
    - change/bcapps/11950
    - change/bcapps/12117
    - change/bcapps/9820
    - change/bcquality/148
    - change/bcquality/237
learn_toc_path:
  - Development
  - Programming in the AL language
  - Running things in the background
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language
children:
  - topic/dev-itpro/development/programming-in-the-al-language/running-things-in-the-background/al-language-reference-background-process
coverage:
  learn: 7
  code: 0
  video: 1
  blog: 3
  guideline: 0
bc_forms: []
member_hash: 7e973865ef69c54987bbe536a88d425040931744358986d9768ab1f223830a21
narrative: generated
---

# Running things in the background

> Background processing in Business Central AL: async operations, job queue, page background tasks and the task scheduler. It answers questions about choosing a mechanism, its limits and concurrency, error handling, retries and scheduling codeunits or reports.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Running things in the background · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section covers the ways AL code can run work outside the user's foreground session. The four own pages describe the main mechanisms: the job queue for end-user scheduled and recurring jobs, page background tasks for read-only computations that keep pages responsive, the task scheduler for running codeunits and reports at a set date and time, and an overview of async processing limits.

Start with the Async Processing Overview to see operational limits and configuration for online and on-premises, including child and background session concurrency, page background task timeouts, scheduled task concurrency and queue limits. Then pick the page that fits the scenario: Job queue for recurring jobs that end users schedule, Task scheduler for scheduling codeunits and reports from code with retry and failure handling, Page Background Tasks for page performance.

One subtopic, the AL language reference for background processing, holds 3 reference pages.

## Key points

- Async Processing Overview documents limits and configuration for async tasks, job queues, page background tasks and scheduled tasks, online and on-premises.
- Job queue lets end users schedule background jobs with recurring options, using a dispatcher codeunit and an error handler.
- The Job queue page also covers background sessions, parameter passing, error message management and permissions.
- Page Background Tasks run read-only computations in a child session of the parent page session, without blocking the user.
- Page background tasks take Dictionary parameters, support timeout configuration, error levels (Ignore, Warning, Error), re-enqueuing and conditional cancellation.
- Task scheduler runs codeunits and reports at a set date and time in background sessions.
- Task scheduler methods: CreateTask, SetTaskReady, TaskExists and CancelTask.
- Task scheduler retries on retriable exceptions and can run a failure codeunit when a task fails.

## Subtopics

- [AL language reference (background processing)](running-things-in-the-background/al-language-reference-background-process.md) (3 pages)

## More Learn pages

- [Async Processing Overview for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-async-overview): Compare asynchronous processing options in AL, including page background tasks, background sessions, scheduled tasks, and job queues in Business Central.
- [Job queue](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-job-queue): Learn about how the job queue works
  - In the observatory: [Codeunit 448 "Job Queue Dispatcher"](../../../../objects/codeunit/448.md), [Codeunit 450 "Job Queue Error Handler"](../../../../objects/codeunit/450.md), [Table 472 "Job Queue Entry"](../../../../objects/table/472.md)
- [Page Background Tasks](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-background-tasks): Explains how to create page background tasks in Business Central.
- [Task scheduler](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-task-scheduler): Learn about scheduled tasks and how the task scheduler works.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11257 Fix duplicate retention continuations for Waiting jobs](../../../../changes/bcapps/11257.md) (code change): "Fix duplicate retention continuations for Waiting jobs"
- [#11262 Fix retention policy deletion-limit stop propagation](../../../../changes/bcapps/11262.md) (code change): "Fix retention policy deletion-limit stop propagation"
- [#11890 Adding an in-product email storage cleanup](../../../../changes/bcapps/11890.md) (code change): "Scheduler proactively sends admins remediation steps"
- [#11950 Adding an in-product email storage cleanup (backport to releases/29.x)](../../../../changes/bcapps/11950.md) (code change): "Adds codeunits for cleanup, a runner, a scheduler and inbox row deletion"
- [#12117 [Job Queue] Clearer message and attempt number for runs interrupted by the platform](../../../../changes/bcapps/12117.md) (code change): "platform interrupts a job queue run, the log entry message now says"
- [#9820 Use ReadCommitted isolation for CalcFields in Job Queue Entry GetXmlContent](../../../../changes/bcapps/9820.md) (code change): "Job Queue Entry GetXmlContent method now uses ReadCommitted isolation when reading"
- [#148 Add Job Queue reliability and scheduling guidance](../../../../changes/bcquality/148.md) (code change): "Require external side effects in Job Queue handlers to be idempotent"
- [#237 knowledge(data-modeling): keep business state independent of Job Queue lifetime](../../../../changes/bcquality/237.md) (code change): "Deleting a Job Queue Entry can lose business state"
- [Background Page Tasks in Business Central Explained](../../../../posts/aardvarklabs-blog/3837.md) (community post): "Background page tasks enable pages to automatically refresh themselves"
- [Dynamics 365 Business Central: the mistery around the “Parallel Session Management” codeunit.](../../../../posts/demiliani-com/13961.md) (community post): "Codeunit 490 is a manual, in-memory orchestrator using scope OnPrem procedures without async/await or platform-managed queues"
- [If You Can't Make It Fast, Make It Feel Fast](../../../../posts/stefanmaron-com/https-stefanmaron-com-posts-bc-background-processing-make-it-feel-fast--2f2ea5c72a.md) (community post): "moving blocking work to the background instead of waiting for user input"
- [20260223 - If You Can’t Make It Fast, Make It Feel Fast](../../../../videos/D7GxnNiGQ14.md) (video): "background processing; job queue; page background task; task scheduler"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
