---
id: video/KNy2KujjheU
type: video
title: "What's new: Database Export Enhancements (2026 release wave 2)"
summary: "Database export enhancements in the 2026 release wave 2: export failure rate is under 1%, exports now appear on the admin center operations page as environment operations, the export history page is retiring, and the admin center API export history endpoint is deprecated (works on API 2.29 and earlier)."
tier: official
language: en
tags:
  - database export
  - admin center
  - operations page
  - reliability
  - visibility
  - environment operations
  - api deprecation
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T14:56:57.246Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 1a72ddd45a73637e836ac0410741722e512047366c680bdd335b4c049310b6d1
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=KNy2KujjheU&t=33s
    title: "What's new: Database Export Enhancements (2026 release wave 2)"
    date: "2026-10-01T13:03:43.000Z"
    commit: null
    t: 33
    quote: A database export gives you the whole environment database as a backpack file in your own Azure storage account.
  - kind: video
    url: https://www.youtube.com/watch?v=KNy2KujjheU&t=45s
    title: "What's new: Database Export Enhancements (2026 release wave 2)"
    date: "2026-10-01T13:03:43.000Z"
    commit: null
    t: 45
    quote: Fewer than 1% of exports are failing today.
  - kind: video
    url: https://www.youtube.com/watch?v=KNy2KujjheU&t=57s
    title: "What's new: Database Export Enhancements (2026 release wave 2)"
    date: "2026-10-01T13:03:43.000Z"
    commit: null
    t: 57
    quote: Every expert turns up on the operations page right right next to your other environment operations such as renames, updates, and copies.
  - kind: video
    url: https://www.youtube.com/watch?v=KNy2KujjheU&t=104s
    title: "What's new: Database Export Enhancements (2026 release wave 2)"
    date: "2026-10-01T13:03:43.000Z"
    commit: null
    t: 104
    quote: From this release, an export is an environment operation like any other.
  - kind: video
    url: https://www.youtube.com/watch?v=KNy2KujjheU&t=183s
    title: "What's new: Database Export Enhancements (2026 release wave 2)"
    date: "2026-10-01T13:03:43.000Z"
    commit: null
    t: 183
    quote: the database expert history page is retiring.
  - kind: video
    url: https://www.youtube.com/watch?v=KNy2KujjheU&t=195s
    title: "What's new: Database Export Enhancements (2026 release wave 2)"
    date: "2026-10-01T13:03:43.000Z"
    commit: null
    t: 195
    quote: the expert history endpoint is deprecated. It keeps working on API versions 2.29 and earlier, but it is not carried forward to newer versions.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: KNy2KujjheU
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=KNy2KujjheU
published_at: "2026-10-01T13:03:43.000Z"
duration_s: 231
captions: full
audience:
  - administrator
  - developer
  - partner
chapters:
  - t: 0
    title: Introduction and context
  - t: 33
    title: What database export is and two headlines
  - t: 57
    title: Reliability improvements
  - t: 94
    title: "Visibility: exports as environment operations"
  - t: 126
    title: "Demo: export button and flyout"
  - t: 166
    title: "Demo: operations page tracking"
  - t: 183
    title: Breaking changes and migration guidance
features:
  - name: Database export reliability improvements
    status: unclear
    t: 57
    verified: false
    status_source: video
  - name: Exports on operations page
    status: unclear
    t: 94
    verified: false
    status_source: video
  - name: Database export history page retirement
    status: unclear
    t: 183
    verified: false
    status_source: video
  - name: Admin center API export history endpoint deprecation
    status: unclear
    t: 195
    verified: false
    status_source: video
objects_mentioned: []
quotes:
  - t: 33
    text: A database export gives you the whole environment database as a backpack file in your own Azure storage account.
    check: exact
  - t: 45
    text: Fewer than 1% of exports are failing today.
    check: exact
  - t: 57
    text: Every expert turns up on the operations page right right next to your other environment operations such as renames, updates, and copies.
    check: exact
  - t: 104
    text: From this release, an export is an environment operation like any other.
    check: exact
  - t: 183
    text: the database expert history page is retiring.
    check: exact
  - t: 195
    text: the expert history endpoint is deprecated. It keeps working on API versions 2.29 and earlier, but it is not carried forward to newer versions.
    check: exact
---

# What's new: Database Export Enhancements (2026 release wave 2)

> Database export enhancements in the 2026 release wave 2: export failure rate is under 1%, exports now appear on the admin center operations page as environment operations, the export history page is retiring, and the admin center API export history endpoint is deprecated (works on API 2.29 and earlier).

[Watch on YouTube](https://www.youtube.com/watch?v=KNy2KujjheU) · Microsoft Dynamics 365 Business Central (YouTube) · 2026-10-01 · 3:51 · tier official · **unreviewed** (machine-generated)

## Overview

The video covers two changes to database export in Business Central administration: reliability and visibility. A database export gives the whole environment database as a bacpac-style backup file in the customer's own Azure storage account. Microsoft states that fewer than 1% of exports fail today, with many weeks having no failures, because common failures across the export pipeline were removed so large environments can be exported reliably.

Exports are now environment operations. They show on the admin center operations page next to renames, updates and copies, with progress, status, start and end time, who triggered the export, and the error message on failure. The video demos the export button and flyout and the operations page tracking. The database export history page is retiring, and the export history endpoint in the admin center API is deprecated, so automations should move to the environment operations API.

## Key points

- Fewer than 1% of database exports fail today, and many weeks have no failures.
- Reliability work removed common failures across the export pipeline, so large environments can be exported reliably.
- Exports now appear on the admin center operations page alongside renames, updates and copies.
- The operations page shows progress, status, start and end time, who triggered the export, and the error message if it fails.
- The dedicated database export history page is retiring; its information, plus more, is on the operations page.
- The admin center API export history endpoint is deprecated: it works on API versions 2.29 and earlier and is not carried forward to newer versions.
- Automations that use the export history endpoint should migrate to the environment operations API.

## Chapters

- [0:00](https://www.youtube.com/watch?v=KNy2KujjheU&t=0s) Introduction and context
- [0:33](https://www.youtube.com/watch?v=KNy2KujjheU&t=33s) What database export is and two headlines
- [0:57](https://www.youtube.com/watch?v=KNy2KujjheU&t=57s) Reliability improvements
- [1:34](https://www.youtube.com/watch?v=KNy2KujjheU&t=94s) Visibility: exports as environment operations
- [2:06](https://www.youtube.com/watch?v=KNy2KujjheU&t=126s) Demo: export button and flyout
- [2:46](https://www.youtube.com/watch?v=KNy2KujjheU&t=166s) Demo: operations page tracking
- [3:03](https://www.youtube.com/watch?v=KNy2KujjheU&t=183s) Breaking changes and migration guidance

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Database export reliability improvements | status not stated | [0:57](https://www.youtube.com/watch?v=KNy2KujjheU&t=57s) |  |
| Exports on operations page | status not stated, demoed | [1:34](https://www.youtube.com/watch?v=KNy2KujjheU&t=94s) |  |
| Database export history page retirement | status not stated | [3:03](https://www.youtube.com/watch?v=KNy2KujjheU&t=183s) |  |
| Admin center API export history endpoint deprecation | status not stated | [3:15](https://www.youtube.com/watch?v=KNy2KujjheU&t=195s) |  |

## Quotes

- [0:33](https://www.youtube.com/watch?v=KNy2KujjheU&t=33s) "A database export gives you the whole environment database as a backpack file in your own Azure storage account."
- [0:45](https://www.youtube.com/watch?v=KNy2KujjheU&t=45s) "Fewer than 1% of exports are failing today."
- [0:57](https://www.youtube.com/watch?v=KNy2KujjheU&t=57s) "Every expert turns up on the operations page right right next to your other environment operations such as renames, updates, and copies."
- [1:44](https://www.youtube.com/watch?v=KNy2KujjheU&t=104s) "From this release, an export is an environment operation like any other."
- [3:03](https://www.youtube.com/watch?v=KNy2KujjheU&t=183s) "the database expert history page is retiring."
- [3:15](https://www.youtube.com/watch?v=KNy2KujjheU&t=195s) "the expert history endpoint is deprecated. It keeps working on API versions 2.29 and earlier, but it is not carried forward to newer versions."

## Disclaimers in the video

- [3:15](https://www.youtube.com/watch?v=KNy2KujjheU&t=195s) subject-to-change: expert history endpoint is deprecated. It keeps working on API versions 2.29 and earlier, but it is not carried forward to newer versions.

Presenters (as heard): Ehor Hanzuk.
