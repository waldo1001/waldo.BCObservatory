---
id: video/xr8C3c6WhOI
type: video
title: "What's New : AL-Go for GitHub on Quality and Testability (2025 release wave 1)"
summary: AL-Go for GitHub (2025 release wave 1) can now run page scripting tests in workflows. It uses the BC replay npm module shipped in 2024 Wave 2, configured by a project setting that points to recording folders or files, and adds a page scripting test result visualizer. It can also deploy test apps to sandbox environments and exclude apps by ID. Test apps whose dependencies are not in AppSource are skipped automatically. Automatically running tests after deployment is planned but not yet implemented.
tier: official
language: en
tags:
  - al-go
  - page scripting tests
  - bc replay module
  - test automation
  - test apps deployment
  - github workflow
  - testability
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T22:57:42.118Z"
  flags: []
generated:
  at: "2026-10-07T22:57:42.160Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: b427fde06c188ed56165e40cfb773e39dfac7c8165494d877964581e0c140318
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=xr8C3c6WhOI&t=25s
    title: "What's New : AL-Go for GitHub on Quality and Testability (2025 release wave 1)"
    date: "2025-04-01T15:01:26.000Z"
    commit: null
    t: 25
    quote: we actually added support for page scripting tests
  - kind: video
    url: https://www.youtube.com/watch?v=xr8C3c6WhOI&t=46s
    title: "What's New : AL-Go for GitHub on Quality and Testability (2025 release wave 1)"
    date: "2025-04-01T15:01:26.000Z"
    commit: null
    t: 46
    quote: half a year ago in version 2024 Wave 2 we shipped the BC replay npm module with that module it's possible to to run
  - kind: video
    url: https://www.youtube.com/watch?v=xr8C3c6WhOI&t=195s
    title: "What's New : AL-Go for GitHub on Quality and Testability (2025 release wave 1)"
    date: "2025-04-01T15:01:26.000Z"
    commit: null
    t: 195
    quote: we have two features we want to support number one is deploying test apps uh and number two is automatically running tests
  - kind: video
    url: https://www.youtube.com/watch?v=xr8C3c6WhOI&t=226s
    title: "What's New : AL-Go for GitHub on Quality and Testability (2025 release wave 1)"
    date: "2025-04-01T15:01:26.000Z"
    commit: null
    t: 226
    quote: we now also have the option to exclude apps by ID when you deploy
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: xr8C3c6WhOI
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=xr8C3c6WhOI
published_at: "2025-04-01T15:01:26.000Z"
duration_s: 361
captions: full
audience:
  - developer
  - administrator
  - functional consultant
chapters:
  - t: 0
    title: Introduction and Page Scripting Tests Overview
  - t: 25
    title: Page Scripting Test Support and BC Replay Module
  - t: 66
    title: Page Scripting Test Demo and Configuration
  - t: 154
    title: Test Result Visualization
  - t: 195
    title: Test Apps Deployment Feature Overview
  - t: 240
    title: Test Apps Deployment Demo
  - t: 315
    title: Custom Deployment Scripts and Conclusion
features:
  - name: Page Scripting Tests in AL-Go Workflow
    status: unclear
    t: 25
    verified: false
    status_source: video
  - name: Page Scripting Test Result Visualizer
    status: unclear
    t: 154
    verified: false
    status_source: video
  - name: Deploy Test Apps to Sandbox
    status: unclear
    t: 195
    verified: false
    status_source: video
  - name: Exclude Apps by ID During Deployment
    status: unclear
    t: 226
    verified: false
    status_source: video
  - name: Automatic Test App Dependency Resolution
    status: unclear
    t: 315
    verified: false
    status_source: video
  - name: Page Scripting Test Settings Configuration
    status: unclear
    t: 113
    verified: false
    status_source: video
  - name: Custom Deployment Script Test App Support
    status: unclear
    t: 335
    verified: false
    status_source: video
objects_mentioned:
  - other BC replay npm module
  - other page scripting test settings
  - other test result visualizer
  - other page scripting test result visualizer
quotes:
  - t: 25
    text: we actually added support for page scripting tests
    check: fuzzy
  - t: 46
    text: half a year ago in version 2024 Wave 2 we shipped the BC replay npm module with that module it's possible to to run
    check: exact
  - t: 195
    text: we have two features we want to support number one is deploying test apps uh and number two is automatically running tests
    check: exact
  - t: 226
    text: we now also have the option to exclude apps by ID when you deploy
    check: exact
---

# What's New : AL-Go for GitHub on Quality and Testability (2025 release wave 1)

> AL-Go for GitHub (2025 release wave 1) can now run page scripting tests in workflows. It uses the BC replay npm module shipped in 2024 Wave 2, configured by a project setting that points to recording folders or files, and adds a page scripting test result visualizer. It can also deploy test apps to sandbox environments and exclude apps by ID. Test apps whose dependencies are not in AppSource are skipped automatically. Automatically running tests after deployment is planned but not yet implemented.

[Watch on YouTube](https://www.youtube.com/watch?v=xr8C3c6WhOI) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-04-01 · 6:01 · tier official · reviewed (checked by Opus)

## Overview

The video covers AL-Go for GitHub changes focused on quality and testability in 2025 release wave 1. The first part shows how page scripting tests run in the AL-Go workflow with the BC replay npm module, how recordings are configured in project settings, and how results appear in a visualizer with downloadable artifacts.

The second part covers deploying test apps alongside production apps to sandbox environments, excluding apps by ID, and how test apps are handled in custom deployment scripts. The presenter notes that automatically running tests is covered only in a first version for this presentation.

## Key points

- Page scripting tests run in the AL-Go workflow through the BC replay npm module, which shipped in 2024 Wave 2.
- Recordings are generated in Business Central. A page scripting test project setting points to them. It is an array (several folders), picks up .yml files, and supports pattern matching or a single specific file.
- The new page scripting test result visualizer shows whether each test passed. For failures, the downloadable result artifact's extended logs include a video of the test.
- Test apps can be deployed alongside apps when deploying to a sandbox environment. You enable include test apps in sandbox environment in the deploy to structure of the AL-Go settings.
- The new exclude app IDs array in the deploy to structure leaves specific apps out of deployment.
- Test apps that depend on something not available in the AppSource gallery are automatically detected and excluded during deployment.
- With the setting enabled, test apps are passed to custom deployment scripts, and the script must handle dependency installation.

## Chapters

- [0:00](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=0s) Introduction and Page Scripting Tests Overview
- [0:25](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=25s) Page Scripting Test Support and BC Replay Module
- [1:06](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=66s) Page Scripting Test Demo and Configuration
- [2:34](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=154s) Test Result Visualization
- [3:15](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=195s) Test Apps Deployment Feature Overview
- [4:00](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=240s) Test Apps Deployment Demo
- [5:15](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=315s) Custom Deployment Scripts and Conclusion

## Features

| Feature | Status | At |
|---|---|---|
| Page Scripting Tests in AL-Go Workflow | status not stated, demoed | [0:25](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=25s) |
| Page Scripting Test Result Visualizer | status not stated, demoed | [2:34](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=154s) |
| Deploy Test Apps to Sandbox | status not stated, demoed | [3:15](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=195s) |
| Exclude Apps by ID During Deployment | status not stated, demoed | [3:46](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=226s) |
| Automatic Test App Dependency Resolution | status not stated, demoed | [5:15](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=315s) |
| Page Scripting Test Settings Configuration | status not stated, demoed | [1:53](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=113s) |
| Custom Deployment Script Test App Support | status not stated | [5:35](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=335s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "BC replay npm module" at [0:46](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=46s)
- other "page scripting test settings" at [1:53](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=113s)
- other "test result visualizer" at [2:34](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=154s)
- other "page scripting test result visualizer" at [2:34](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=154s)

## Quotes

- [0:25](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=25s) "we actually added support for page scripting tests"
- [0:46](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=46s) "half a year ago in version 2024 Wave 2 we shipped the BC replay npm module with that module it's possible to to run"
- [3:15](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=195s) "we have two features we want to support number one is deploying test apps uh and number two is automatically running tests"
- [3:46](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=226s) "we now also have the option to exclude apps by ID when you deploy"

## Disclaimers in the video

- [3:15](https://www.youtube.com/watch?v=xr8C3c6WhOI&t=195s) not-in-this-release: number two is automatically running tests for this presentation we have implemented the first version

Presenters (as heard): Freddy Christensen, Sebastian.
