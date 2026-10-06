---
id: video/vm3sTuXdUho
type: video
title: "What's New in AL-Go for GitHub: Introducing Custom Templates (2025 release wave 2)"
summary: "AL-Go for GitHub custom templates and custom jobs: how a custom template repository sits between the original AL-Go template and end repositories, propagates jobs and settings, and what limits apply. Mentions custom jobs from AL-Go 7.3 and a naming rule."
tier: official
language: en
tags:
  - al-go
  - custom templates
  - custom jobs
  - github actions
  - devops
  - workflows
  - yaml
  - ci/cd
  - customization
  - business central development
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T18:28:29.152Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 9cf3dc4d9fc9cdd2fc4b8a6ba83b02135b818728c3d01c070af477809a30d3e8
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=vm3sTuXdUho&t=17s
    title: "What's New in AL-Go for GitHub: Introducing Custom Templates (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 17
    quote: Ago for GitHub is a plug-and-play DevOps solutions for business central development that aims to cover 90% of the functionality that 100% of the
  - kind: video
    url: https://www.youtube.com/watch?v=vm3sTuXdUho&t=96s
    title: "What's New in AL-Go for GitHub: Introducing Custom Templates (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 96
    quote: From the 7.3 release of AOG Go, there's actually a new way to customize AOGO. Namely, this is the support for adding custom jobs
  - kind: video
    url: https://www.youtube.com/watch?v=vm3sTuXdUho&t=162s
    title: "What's New in AL-Go for GitHub: Introducing Custom Templates (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 162
    quote: with the support of custom templates, we add a middle layer uh a custom template layer that is actually an ago repository itself and
  - kind: video
    url: https://www.youtube.com/watch?v=vm3sTuXdUho&t=305s
    title: "What's New in AL-Go for GitHub: Introducing Custom Templates (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 305
    quote: we introduced a new naming convention, namely custom jobs must be prefixed with custom job.
  - kind: video
    url: https://www.youtube.com/watch?v=vm3sTuXdUho&t=350s
    title: "What's New in AL-Go for GitHub: Introducing Custom Templates (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 350
    quote: AOG actions used in custom jobs will not be updated when you run update AOG system files.
  - kind: video
    url: https://www.youtube.com/watch?v=vm3sTuXdUho&t=395s
    title: "What's New in AL-Go for GitHub: Introducing Custom Templates (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 395
    quote: native Aogo workflows cannot be removed or changed apart from adding custom jobs of course.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: vm3sTuXdUho
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=vm3sTuXdUho
published_at: "2025-10-01T00:00:00Z"
duration_s: 486
captions: full
audience:
  - developer
  - administrator
  - partner
chapters:
  - t: 0
    title: Introduction and customization philosophy
  - t: 49
    title: Existing customization methods
  - t: 96
    title: Custom jobs in AL-Go
  - t: 131
    title: Custom templates concept and architecture
  - t: 176
    title: Custom templates demo and walkthrough
  - t: 292
    title: Custom jobs support and limitations
  - t: 374
    title: Custom templates support and limitations
  - t: 427
    title: Resources and conclusion
features:
  - name: Custom templates for AL-Go
    status: unclear
    t: 120
    verified: false
    status_source: video
  - name: Custom jobs in AL-Go workflows
    status: unclear
    t: 96
    verified: false
    status_source: video
  - name: Settings propagation in custom templates
    status: unclear
    t: 162
    verified: false
    status_source: video
  - name: Native job dependencies with custom jobs
    status: unclear
    t: 322
    verified: false
    status_source: video
objects_mentioned:
  - other CI/CD workflow
  - other settings file
  - other GitHub actions
quotes:
  - t: 17
    text: Ago for GitHub is a plug-and-play DevOps solutions for business central development that aims to cover 90% of the functionality that 100% of the
    check: exact
  - t: 96
    text: From the 7.3 release of AOG Go, there's actually a new way to customize AOGO. Namely, this is the support for adding custom jobs
    check: exact
  - t: 162
    text: with the support of custom templates, we add a middle layer uh a custom template layer that is actually an ago repository itself and
    check: exact
  - t: 305
    text: we introduced a new naming convention, namely custom jobs must be prefixed with custom job.
    check: exact
  - t: 350
    text: AOG actions used in custom jobs will not be updated when you run update AOG system files.
    check: exact
  - t: 395
    text: native Aogo workflows cannot be removed or changed apart from adding custom jobs of course.
    check: exact
---

# What's New in AL-Go for GitHub: Introducing Custom Templates (2025 release wave 2)

> AL-Go for GitHub custom templates and custom jobs: how a custom template repository sits between the original AL-Go template and end repositories, propagates jobs and settings, and what limits apply. Mentions custom jobs from AL-Go 7.3 and a naming rule.

[Watch on YouTube](https://www.youtube.com/watch?v=vm3sTuXdUho) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-10-01 · 8:06 · tier official · **unreviewed** (machine-generated)

## Overview

The video covers customization options in AL-Go for GitHub, the DevOps solution for Business Central development. It recaps existing ways to customize, then describes custom jobs, which let you inject YAML into workflows supplied by AL-Go. Custom jobs are available from the 7.3 release.

It then introduces custom templates: a custom template is itself an AL-Go repository that works as a middle layer between the original AL-Go template and end repositories. Custom jobs and settings defined there propagate to repositories that reference the template. The video includes a demo and walks through the limitations, including that native workflows cannot be removed or changed and that the update behavior may change after feedback.

## Key points

- Custom jobs, available from AL-Go 7.3, add jobs to existing AL-Go workflows by injecting YAML.
- Custom jobs must be prefixed with 'custom job' to avoid conflicts with future native jobs.
- A custom template is an AL-Go repository that sits between the original AL-Go template and end repositories.
- Custom settings in a custom template reach end repositories through a new settings file, only for repositories that reference the template.
- Native AL-Go workflows cannot be removed or changed, apart from adding custom jobs.
- AL-Go actions used in custom jobs are not updated when you run update AL-Go system files.
- Non-AL-Go files and custom templates are not updated by that run; the presenter says this may change after feedback.

## Chapters

- [0:00](https://www.youtube.com/watch?v=vm3sTuXdUho&t=0s) Introduction and customization philosophy
- [0:49](https://www.youtube.com/watch?v=vm3sTuXdUho&t=49s) Existing customization methods
- [1:36](https://www.youtube.com/watch?v=vm3sTuXdUho&t=96s) Custom jobs in AL-Go
- [2:11](https://www.youtube.com/watch?v=vm3sTuXdUho&t=131s) Custom templates concept and architecture
- [2:56](https://www.youtube.com/watch?v=vm3sTuXdUho&t=176s) Custom templates demo and walkthrough
- [4:52](https://www.youtube.com/watch?v=vm3sTuXdUho&t=292s) Custom jobs support and limitations
- [6:14](https://www.youtube.com/watch?v=vm3sTuXdUho&t=374s) Custom templates support and limitations
- [7:07](https://www.youtube.com/watch?v=vm3sTuXdUho&t=427s) Resources and conclusion

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Custom templates for AL-Go | status not stated, demoed | [2:00](https://www.youtube.com/watch?v=vm3sTuXdUho&t=120s) |  |
| Custom jobs in AL-Go workflows | status not stated, demoed | [1:36](https://www.youtube.com/watch?v=vm3sTuXdUho&t=96s) |  |
| Settings propagation in custom templates | status not stated, demoed | [2:42](https://www.youtube.com/watch?v=vm3sTuXdUho&t=162s) |  |
| Native job dependencies with custom jobs | status not stated, demoed | [5:22](https://www.youtube.com/watch?v=vm3sTuXdUho&t=322s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- other "CI/CD workflow" at [1:47](https://www.youtube.com/watch?v=vm3sTuXdUho&t=107s)
- other "settings file" at [3:54](https://www.youtube.com/watch?v=vm3sTuXdUho&t=234s)
- other "GitHub actions" at [5:50](https://www.youtube.com/watch?v=vm3sTuXdUho&t=350s)

## Quotes

- [0:17](https://www.youtube.com/watch?v=vm3sTuXdUho&t=17s) "Ago for GitHub is a plug-and-play DevOps solutions for business central development that aims to cover 90% of the functionality that 100% of the"
- [1:36](https://www.youtube.com/watch?v=vm3sTuXdUho&t=96s) "From the 7.3 release of AOG Go, there's actually a new way to customize AOGO. Namely, this is the support for adding custom jobs"
- [2:42](https://www.youtube.com/watch?v=vm3sTuXdUho&t=162s) "with the support of custom templates, we add a middle layer uh a custom template layer that is actually an ago repository itself and"
- [5:05](https://www.youtube.com/watch?v=vm3sTuXdUho&t=305s) "we introduced a new naming convention, namely custom jobs must be prefixed with custom job."
- [5:50](https://www.youtube.com/watch?v=vm3sTuXdUho&t=350s) "AOG actions used in custom jobs will not be updated when you run update AOG system files."
- [6:35](https://www.youtube.com/watch?v=vm3sTuXdUho&t=395s) "native Aogo workflows cannot be removed or changed apart from adding custom jobs of course."

## Disclaimers in the video

- [7:07](https://www.youtube.com/watch?v=vm3sTuXdUho&t=427s) subject-to-change: For now nonaoggo files and custom templates are not updated when running update AOG system files. We have actually already received feedback so we might be changing this in the future.

Presenters (as heard): Maria Jallesa.
