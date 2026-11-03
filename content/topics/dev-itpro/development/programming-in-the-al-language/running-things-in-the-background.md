---
id: topic/dev-itpro/development/programming-in-the-al-language/running-things-in-the-background
type: topic
title: Running things in the background
summary: "Background processing in AL for Business Central: page background tasks, Session.StartSession, the task scheduler and the job queue. It answers questions about choosing a mechanism, scheduling codeunits and reports, handling errors and retries, and concurrency and timeout limits online and on-premises."
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-03T01:02:13.361Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 6c412eb63c873da1d06e2fa67a0efa8fe7c372e910e87114e7731602fefa0b88
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-async-overview
    title: Asynchronous Processing in AL for Business Central
    date: "2026-10-23"
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

> Background processing in AL for Business Central: page background tasks, Session.StartSession, the task scheduler and the job queue. It answers questions about choosing a mechanism, scheduling codeunits and reports, handling errors and retries, and concurrency and timeout limits online and on-premises.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Running things in the background · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This area covers the ways AL code can run work outside the user's foreground session. An overview page compares the mechanisms: page background tasks, Session.StartSession, the task scheduler and the job queue. It notes that each has limits for concurrency and timeouts, and that these differ between online and on-premises environments.

Each mechanism has its own page. Page Background Tasks covers read-only computations that keep a page responsive, with parent and child sessions, dictionary parameters, timeouts and error levels. The task scheduler page covers running codeunits and reports at a set date and time, with retry for transient errors and failure codeunits. The job queue page covers end-user scheduling of recurring background jobs through a dispatcher codeunit, with error handling and permissions. A subtopic holds the AL language reference pages for background processing.

Start with the asynchronous processing overview to pick a mechanism and check its limits. Then read the page for that mechanism.

## Key points

- The overview compares page background tasks, Session.StartSession, task scheduler and job queue.
- Concurrency and timeout limits differ between online and on-premises; settings named include ChildSessionsMaxConcurrency and BackgroundSessionsMaxConcurrent.
- Page background tasks run read-only computations and long processes without blocking the user.
- Page background tasks use parent and child sessions, dictionary parameters for input, configurable timeouts, and error levels Ignore, Warning and Error.
- Page background tasks can be re-enqueued or conditionally cancelled.
- The task scheduler uses CreateTask, SetTaskReady, TaskExists and CancelTask to run codeunits and reports at a given date and time.
- The task scheduler retries retriable exceptions and can run failure codeunits.
- The job queue lets end users schedule recurring background jobs via a dispatcher and an error handler, with parameter passing and permissions.

## Subtopics

- [AL language reference (background processing)](running-things-in-the-background/al-language-reference-background-process.md) (3 pages)

## More Learn pages

- [Asynchronous Processing in AL for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-async-overview): Compare asynchronous processing options in Business Central. Choose page background tasks, background sessions, scheduled tasks, or job queues for your AL code.
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
