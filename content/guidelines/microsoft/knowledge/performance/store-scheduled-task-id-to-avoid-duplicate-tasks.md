---
id: guideline/microsoft/knowledge/performance/store-scheduled-task-id-to-avoid-duplicate-tasks
type: guideline
title: Store the scheduled task ID to avoid duplicate tasks
summary: Every call to TaskScheduler.CreateTask creates a new scheduled task and returns its unique GUID. Repeating setup or lifecycle code without retaining that GUID can create multiple tasks for the same logical work, consuming scheduler capacity and running the work more than once.
tier: official
language: en
tags:
  - task-scheduler
  - scheduled-task
  - taskexists
  - duplicate-task
  - createtask
  - guid
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:10.860Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1e64c32a6b1104e9c9cd3c8cb0cccdb00e6daa35
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/store-scheduled-task-id-to-avoid-duplicate-tasks.md
    title: "microsoft/BCQuality: Store the scheduled task ID to avoid duplicate tasks"
    date: "2026-09-15"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/taskscheduler/taskscheduler-taskexists-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/184
    - change/bcquality/148
repo_path: microsoft/knowledge/performance/store-scheduled-task-id-to-avoid-duplicate-tasks.md
layer: microsoft
kind: rule
domain: performance
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - CreateTask
  - TaskExists
---

# Store the scheduled task ID to avoid duplicate tasks

> Every call to TaskScheduler.CreateTask creates a new scheduled task and returns its unique GUID. Repeating setup or lifecycle code without retaining that GUID can create multiple tasks for the same logical work, consuming scheduler capacity and running the work more than once.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/store-scheduled-task-id-to-avoid-duplicate-tasks.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

Every call to `TaskScheduler.CreateTask` creates a new scheduled task and returns its unique GUID. Repeating setup or lifecycle code without retaining that GUID can create multiple tasks for the same logical work, consuming scheduler capacity and running the work more than once.

## Best Practice

Persist the GUID returned by `CreateTask` at the same scope as the logical task. Before creating a replacement, parse the stored GUID and call `TaskScheduler.TaskExists`; create and store a new task only when the previous task no longer exists. `TaskExists` checks one GUID, not whether an equivalent codeunit is already scheduled, so callers that can schedule concurrently still need serialization around this check-and-create sequence.

See sample: [`store-scheduled-task-id-to-avoid-duplicate-tasks.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/store-scheduled-task-id-to-avoid-duplicate-tasks.good.al).

## Anti Pattern

Calling `TaskScheduler.CreateTask` every time initialization, login, setup, or another repeatable path runs while ignoring its return value. Each invocation creates another independent task even when an equivalent task is already pending.

See sample: [`store-scheduled-task-id-to-avoid-duplicate-tasks.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/store-scheduled-task-id-to-avoid-duplicate-tasks.bad.al).

## Examples

- [Good: store-scheduled-task-id-to-avoid-duplicate-tasks.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/store-scheduled-task-id-to-avoid-duplicate-tasks.good.al)
- [Bad: store-scheduled-task-id-to-avoid-duplicate-tasks.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/store-scheduled-task-id-to-avoid-duplicate-tasks.bad.al)

## Names

- [TaskScheduler.TaskExists(Guid) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/taskscheduler/taskscheduler-taskexists-method) (names TaskExists)

## Changed by

- [#184 Fix Job Queue knowledge sample links](../../../../changes/bcquality/184.md), 2026-09-15
- [#148 Add Job Queue reliability and scheduling guidance](../../../../changes/bcquality/148.md), 2026-09-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
