---
id: video/px1MOyXfmnQ
type: video
title: "What's New: AL-Go for GitHub on Delivery and Deployment (2025 release wave 1)"
summary: "AL-Go for GitHub delivery and deployment changes in 2025 release wave 1: a dependency install mode setting, deployment of test apps to sandboxes, and deployment of pull request artifacts to an online environment. Covers the settings, the limits (manual trigger, one-day artifact expiry) and demos of each."
tier: official
language: en
tags:
  - al-go
  - deployment
  - dependencies
  - test apps
  - pull request
  - github
  - appsource
  - artifacts
  - incremental builds
  - sandbox
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T18:38:46.398Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: e885937210be032d78f8e5af8621dfeed519785afb768e3bff1360209f6bf304
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=px1MOyXfmnQ&t=60s
    title: "What's New: AL-Go for GitHub on Delivery and Deployment (2025 release wave 1)"
    date: "2025-04-01T15:01:09.000Z"
    commit: null
    t: 60
    quote: if you were trying to deploy an app and the dependencies were not there
  - kind: video
    url: https://www.youtube.com/watch?v=px1MOyXfmnQ&t=103s
    title: "What's New: AL-Go for GitHub on Delivery and Deployment (2025 release wave 1)"
    date: "2025-04-01T15:01:09.000Z"
    commit: null
    t: 103
    quote: dependencies to upgrade the upgrade here comes from the dependency install mode set to upgrade meaning that if these apps are installed in a
  - kind: video
    url: https://www.youtube.com/watch?v=px1MOyXfmnQ&t=175s
    title: "What's New: AL-Go for GitHub on Delivery and Deployment (2025 release wave 1)"
    date: "2025-04-01T15:01:09.000Z"
    commit: null
    t: 175
    quote: for this presentation we have implemented the first version um and all you have to do is prepare your online environment which should be
  - kind: video
    url: https://www.youtube.com/watch?v=px1MOyXfmnQ&t=325s
    title: "What's New: AL-Go for GitHub on Delivery and Deployment (2025 release wave 1)"
    date: "2025-04-01T15:01:09.000Z"
    commit: null
    t: 325
    quote: we now have a new option for deploying pool request changes directly to an online environment this is useful for quick testing
  - kind: video
    url: https://www.youtube.com/watch?v=px1MOyXfmnQ&t=345s
    title: "What's New: AL-Go for GitHub on Delivery and Deployment (2025 release wave 1)"
    date: "2025-04-01T15:01:09.000Z"
    commit: null
    t: 345
    quote: for now this is a manual process where you will use the published to environment workflow give it a pool request ID instead of
  - kind: video
    url: https://www.youtube.com/watch?v=px1MOyXfmnQ&t=466s
    title: "What's New: AL-Go for GitHub on Delivery and Deployment (2025 release wave 1)"
    date: "2025-04-01T15:01:09.000Z"
    commit: null
    t: 466
    quote: artifacts will expire after one day using normal settings and we encourage you to keep settings this way
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: px1MOyXfmnQ
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=px1MOyXfmnQ
published_at: "2025-04-01T15:01:09.000Z"
duration_s: 512
captions: full
audience:
  - developer
  - administrator
  - functional consultant
chapters:
  - t: 0
    title: Dependency Install Mode Feature
  - t: 80
    title: Dependency Install Mode Demo and Configuration
  - t: 155
    title: Test Apps Deployment Feature
  - t: 220
    title: Test Apps Deployment Demo
  - t: 305
    title: Pull Request Artifact Deployment
  - t: 365
    title: Pull Request Deployment Demo and Artifact Expiration
features:
  - name: Dependency Install Mode
    status: unclear
    t: 25
    verified: false
    status_source: video
  - name: Test Apps Deployment
    status: unclear
    t: 155
    verified: false
    status_source: video
  - name: Pull Request Artifact Deployment
    status: unclear
    t: 305
    verified: false
    status_source: video
  - name: Incremental Builds with PR Artifacts
    status: unclear
    t: 426
    verified: false
    status_source: video
  - name: Automatic Test App Exclusion by Dependencies
    status: unclear
    t: 285
    verified: false
    status_source: video
objects_mentioned:
  - other GitHub Alo settings file
  - other GitHub Alo settings.Json
quotes:
  - t: 60
    text: if you were trying to deploy an app and the dependencies were not there
    check: fuzzy
  - t: 103
    text: dependencies to upgrade the upgrade here comes from the dependency install mode set to upgrade meaning that if these apps are installed in a
    check: exact
  - t: 175
    text: for this presentation we have implemented the first version um and all you have to do is prepare your online environment which should be
    check: exact
  - t: 325
    text: we now have a new option for deploying pool request changes directly to an online environment this is useful for quick testing
    check: exact
  - t: 345
    text: for now this is a manual process where you will use the published to environment workflow give it a pool request ID instead of
    check: exact
  - t: 466
    text: artifacts will expire after one day using normal settings and we encourage you to keep settings this way
    check: exact
---

# What's New: AL-Go for GitHub on Delivery and Deployment (2025 release wave 1)

> AL-Go for GitHub delivery and deployment changes in 2025 release wave 1: a dependency install mode setting, deployment of test apps to sandboxes, and deployment of pull request artifacts to an online environment. Covers the settings, the limits (manual trigger, one-day artifact expiry) and demos of each.

[Watch on YouTube](https://www.youtube.com/watch?v=px1MOyXfmnQ) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-04-01 · 8:32 · tier official · **unreviewed** (machine-generated)

## Overview

The video walks through three changes to delivery and deployment in AL-Go for GitHub. The first is a dependency install mode setting that controls how dependencies are handled at deploy time, including installing or upgrading dependencies from AppSource when they are not part of the app being deployed. The second is deployment of test apps to sandbox environments, with the option to exclude apps by ID.

The third is deploying artifacts from a pull request directly to an online environment for quick testing before merging. It is currently started manually through a workflow with a pull request ID. The video demos each feature, including how artifacts behave with incremental builds and when they expire.

## Key points

- Dependency install mode is a setting that decides how dependencies are handled at deploy time; set to upgrade, apps already installed in the environment are upgraded.
- It can install or upgrade dependencies from AppSource when they are not included in the app being deployed.
- Test apps are deployed only to sandbox environments, and specific apps can be excluded by ID.
- Test apps that depend on test libraries not available as AppSource apps, such as performance test apps, are excluded automatically.
- Pull request artifacts can be deployed to an online environment for testing before merge. For now this is a manual run of the publish to environment workflow with a pull request ID.
- Pull request artifacts expire after one day by default, and the presenter encourages keeping that setting.
- With incremental builds, only apps built in that pull request are published as artifacts; the remaining apps come from the last known good build.

## Chapters

- [0:00](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=0s) Dependency Install Mode Feature
- [1:20](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=80s) Dependency Install Mode Demo and Configuration
- [2:35](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=155s) Test Apps Deployment Feature
- [3:40](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=220s) Test Apps Deployment Demo
- [5:05](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=305s) Pull Request Artifact Deployment
- [6:05](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=365s) Pull Request Deployment Demo and Artifact Expiration

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Dependency Install Mode | status not stated, demoed | [0:25](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=25s) |  |
| Test Apps Deployment | status not stated, demoed | [2:35](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=155s) |  |
| Pull Request Artifact Deployment | status not stated, demoed | [5:05](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=305s) |  |
| Incremental Builds with PR Artifacts | status not stated, demoed | [7:06](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=426s) |  |
| Automatic Test App Exclusion by Dependencies | status not stated, demoed | [4:45](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=285s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- other "GitHub Alo settings file" at [2:35](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=155s)
- other "GitHub Alo settings.Json" at [4:07](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=247s)

## Quotes

- [1:00](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=60s) "if you were trying to deploy an app and the dependencies were not there"
- [1:43](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=103s) "dependencies to upgrade the upgrade here comes from the dependency install mode set to upgrade meaning that if these apps are installed in a"
- [2:55](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=175s) "for this presentation we have implemented the first version um and all you have to do is prepare your online environment which should be"
- [5:25](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=325s) "we now have a new option for deploying pool request changes directly to an online environment this is useful for quick testing"
- [5:45](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=345s) "for now this is a manual process where you will use the published to environment workflow give it a pool request ID instead of"
- [7:46](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=466s) "artifacts will expire after one day using normal settings and we encourage you to keep settings this way"

## Disclaimers in the video

- [5:45](https://www.youtube.com/watch?v=px1MOyXfmnQ&t=345s) coming-later: later on we want to investigate how we can do this automatically in such a way that every time you push a new change to a PR then those changes will automatically flow into your online environment

Presenters (as heard): Freddy Christensen, Sebastian.
