---
id: topic/dev-itpro/development/programming-in-the-al-language/running-things-in-the-background
type: topic
title: Running things in the background
summary: "Background processing in AL for Business Central: the job queue, page background tasks, and the task scheduler, plus operational limits for background sessions, child sessions and scheduled tasks. It helps answer which mechanism to use, how to set it up, and how errors and limits are handled."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:30.865Z"
  flags: []
generated:
  at: "2026-10-07T09:49:55.895Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 2395a0a94a5da5b28f9b0423219f96bc9304c72786f4dfa888d49406465cbc64
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-async-overview
    title: Async processing Overview
    date: "2023-10-04"
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
    date: "2024-08-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-stopsession-method
    title: Session.StopSession(Integer [, Text]) Method
    date: "2024-08-26"
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
    date: "2025-08-08"
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
  videos: []
  posts:
    - post/aardvarklabs-blog/3837
    - post/demiliani-com/13961
    - post/demiliani-com/14203
    - post/stefanmaron-com/https-stefanmaron-com-posts-bc-background-processing-make-it-feel-fast--2f2ea5c72a
  guidelines: []
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
  video: 0
  blog: 4
  guideline: 0
bc_forms: []
member_hash: 7e973865ef69c54987bbe536a88d425040931744358986d9768ab1f223830a21
narrative: generated
---

# Running things in the background

> Background processing in AL for Business Central: the job queue, page background tasks, and the task scheduler, plus operational limits for background sessions, child sessions and scheduled tasks. It helps answer which mechanism to use, how to set it up, and how errors and limits are handled.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Running things in the background · tier official · system development · narrative reviewed by Opus

## Overview

This section covers the ways AL code can run work outside the user's foreground session. Three mechanisms are described: the job queue, which lets end users schedule background jobs with recurring options; page background tasks, which run read-only computations for a page without blocking the user; and the task scheduler, which runs codeunits and reports at a specific date and time in a background session.

Start with the Async processing overview, which sets out the operational limits for background sessions, child sessions and scheduled tasks in online and on-premises environments. Then pick the page that matches your scenario: Job queue for user-scheduled and recurring jobs, Page Background Tasks for page responsiveness, and Task scheduler for programmatic scheduling with retry and failure handling. A subtopic holds the AL language reference pages (3 pages) for the related methods and types.

## Key points

- The Async processing overview documents operational limits for background sessions, child sessions and scheduled tasks, online and on-premises.
- Job queue gives end users a way to schedule background jobs with recurring options. The page covers the job queue flow, dispatcher codeunit, error handler, parameter passing and permissions.
- Page Background Tasks run read-only computations or long processes asynchronously so pages stay responsive.
- Page background tasks use parent and child sessions, and take input through dictionary parameters.
- Page background tasks support timeout configuration, error levels (Ignore, Warning, Error), re-enqueuing and conditional cancellation.
- Task scheduler runs codeunits and reports at a set date and time in a background session.
- Task scheduler methods include CreateTask, SetTaskReady, TaskExists and CancelTask.
- Task scheduler handles retriable exceptions for transient errors and uses failure codeunits when a task fails.

## Subtopics

- [AL language reference (background processing)](running-things-in-the-background/al-language-reference-background-process.md) (3 pages)

## More Learn pages

- [Async processing Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-async-overview): Overview on the different ways an AL developer can do asynchronous (async) processing.
- [Job queue](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-job-queue): Learn about how the job queue works
- [Page Background Tasks](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-background-tasks): Explains how to create page background tasks in Business Central.
- [Task scheduler](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-task-scheduler): Learn about scheduled tasks and how the task scheduler works.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Background Page Tasks in Business Central Explained](../../../../posts/aardvarklabs-blog/3837.md) (community post): "Background page tasks enable pages to automatically refresh themselves or trigger actions when long-running processes complete"
- [Dynamics 365 Business Central: the mistery around the “Parallel Session Management” codeunit.](../../../../posts/demiliani-com/13961.md) (community post): "Codeunit 490 is a manual, in-memory orchestrator using scope OnPrem procedures without async/await or platform-managed queues"
- [Why your Business Central job queue needs idempotent external effects when integrating external systems.](../../../../posts/demiliani-com/14203.md) (community post): "Job queue entries that call external APIs risk duplicating actions when AL transactions roll back"
- [If You Can't Make It Fast, Make It Feel Fast](../../../../posts/stefanmaron-com/https-stefanmaron-com-posts-bc-background-processing-make-it-feel-fast--2f2ea5c72a.md) (community post): "moving blocking work to the background instead of waiting for user input"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
