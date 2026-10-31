---
id: guideline/microsoft/knowledge/performance/job-queue-handlers-must-not-require-ui
type: guideline
title: Job queue handlers must not require user interaction
summary: A job queue handler runs in a background session with no client UI. Calls that require a client callback, such as Confirm, Page.RunModal, Report.RunModal, upload, or download, can stop the job with a non-retriable callback error.
tier: official
language: en
tags:
  - job-queue
  - background-session
  - guiallowed
  - confirm
  - runmodal
  - client-callback
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-31T00:15:35.028Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 598727039d5b0f2b4b00f6db1bf2105ee1fb1e9d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-handlers-must-not-require-ui.md
    title: "microsoft/BCQuality: Job queue handlers must not require user interaction"
    date: "2026-09-15"
    commit: a56b272c6b950c2a423bbeda190585cd53beca2a
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-guiallowed-method
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
repo_path: microsoft/knowledge/performance/job-queue-handlers-must-not-require-ui.md
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
  - GuiAllowed
---

# Job queue handlers must not require user interaction

> A job queue handler runs in a background session with no client UI. Calls that require a client callback, such as Confirm, Page.RunModal, Report.RunModal, upload, or download, can stop the job with a non-retriable callback error.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-handlers-must-not-require-ui.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

A job queue handler runs in a background session with no client UI. Calls that require a client callback, such as `Confirm`, `Page.RunModal`, `Report.RunModal`, upload, or download, can stop the job with a non-retriable callback error. `Message` is suppressed and logged by the server, so it cannot communicate a result to the user who scheduled the job.

## Best Practice

Make a dedicated job queue entry point non-interactive. Validate parameters and data in AL, persist business-visible status when needed, and let failures propagate to the job queue log. If one procedure genuinely serves both foreground and background callers, isolate optional UI-only behavior behind `GuiAllowed`; do not use the guard to silently skip a decision that the operation requires.

See sample: [`job-queue-handlers-must-not-require-ui.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-handlers-must-not-require-ui.good.al).

## Anti Pattern

Calling `Confirm`, `Page.Run`, `Page.RunModal`, `Report.Run`, `Report.RunModal`, `Hyperlink`, `File.Upload`, or `File.Download` from a codeunit run by the job queue. Another signal is using `Message` as the only success or failure notification: no user is attached to receive it.

See sample: [`job-queue-handlers-must-not-require-ui.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-handlers-must-not-require-ui.bad.al).

## Examples

- [Good: job-queue-handlers-must-not-require-ui.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-handlers-must-not-require-ui.good.al)
- [Bad: job-queue-handlers-must-not-require-ui.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-handlers-must-not-require-ui.bad.al)

## Names

- [System.GuiAllowed() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-guiallowed-method) (names GuiAllowed)

## Changed by

- [#184 Fix Job Queue knowledge sample links](../../../../changes/bcquality/184.md), 2026-09-15
- [#148 Add Job Queue reliability and scheduling guidance](../../../../changes/bcquality/148.md), 2026-09-14

---

From microsoft/BCQuality at a56b272, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
