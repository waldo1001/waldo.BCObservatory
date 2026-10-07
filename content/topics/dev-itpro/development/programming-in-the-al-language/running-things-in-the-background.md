---
id: topic/dev-itpro/development/programming-in-the-al-language/running-things-in-the-background
type: topic
title: Running things in the background
summary: "Learn section Development > Programming in the AL language > Running things in the background: 7 Microsoft Learn pages in 1 subtopics. Index of what Learn documents here, linked to Learn."
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T01:17:01.427Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7e973865ef69c54987bbe536a88d425040931744358986d9768ab1f223830a21
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
    - post/stefanmaron-com/https://stefanmaron.com/posts/bc-background-processing-make-it-feel-fast/
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
  blog: 3
  guideline: 0
bc_forms: []
member_hash: 7e973865ef69c54987bbe536a88d425040931744358986d9768ab1f223830a21
narrative: none
---

# Running things in the background

> Learn section Development > Programming in the AL language > Running things in the background: 7 Microsoft Learn pages in 1 subtopics. Index of what Learn documents here, linked to Learn.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Running things in the background · tier official · system development · no narrative yet

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
- [If You Can't Make It Fast, Make It Feel Fast](../../../../posts/stefanmaron-com/https://stefanmaron.com/posts/bc-background-processing-make-it-feel-fast/.md) (community post): "moving blocking work to the background instead of waiting for user input"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
