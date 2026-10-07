---
id: video/asSSBl8Cj34
type: video
title: "What's Cooking in Business Central: Replace Permission Sets Upon Import"
summary: Replace permission sets upon import is announced for the Business Central 2025 wave 2 release. The Import permission sets action can now overwrite existing permissions instead of merging them, by answering no at the update prompt. A short demo shows the result.
tier: official
language: en
tags:
  - permission sets
  - import
  - replace
  - merge
  - production
  - test environment
  - 2025 wave 2
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T22:55:36.604Z"
  flags: []
generated:
  at: "2026-10-07T22:55:36.643Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 9dd9dcac13b9cef2e39810eceda15f62986ef5878fb5e8d82d351a0cbe7e6de4
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=asSSBl8Cj34&t=5s
    title: "Replace permission sets upon import: announced"
    date: "2025-08-21T15:00:03.000Z"
    commit: null
    t: 5
    quote: what's coming in the 2025 wave 2 release
  - kind: video
    url: https://www.youtube.com/watch?v=asSSBl8Cj34&t=5s
    title: "What's Cooking in Business Central: Replace Permission Sets Upon Import"
    date: "2025-08-21T15:00:03.000Z"
    commit: null
    t: 5
    quote: If you frequently work with permission sets, you'll be interested to hear what's coming in the 2025 wave 2 release.
  - kind: video
    url: https://www.youtube.com/watch?v=asSSBl8Cj34&t=58s
    title: "What's Cooking in Business Central: Replace Permission Sets Upon Import"
    date: "2025-08-21T15:00:03.000Z"
    commit: null
    t: 58
    quote: When using the action import permission sets in previous version of Business Central, the system would ask whether we want to update it.
  - kind: video
    url: https://www.youtube.com/watch?v=asSSBl8Cj34&t=69s
    title: "What's Cooking in Business Central: Replace Permission Sets Upon Import"
    date: "2025-08-21T15:00:03.000Z"
    commit: null
    t: 69
    quote: If we confirmed with yes, the system would behave as expected, merging permissions from the test and production environment.
  - kind: video
    url: https://www.youtube.com/watch?v=asSSBl8Cj34&t=139s
    title: "What's Cooking in Business Central: Replace Permission Sets Upon Import"
    date: "2025-08-21T15:00:03.000Z"
    commit: null
    t: 139
    quote: To overrite the existing permissions instead of merging them we must select no when prompted.
  - kind: video
    url: https://www.youtube.com/watch?v=asSSBl8Cj34&t=154s
    title: "What's Cooking in Business Central: Replace Permission Sets Upon Import"
    date: "2025-08-21T15:00:03.000Z"
    commit: null
    t: 154
    quote: After choosing no, we see that the permissions were not merged. Instead, the vendor table was removed and contacts were added exactly as defined
  - kind: video
    url: https://www.youtube.com/watch?v=asSSBl8Cj34&t=168s
    title: "What's Cooking in Business Central: Replace Permission Sets Upon Import"
    date: "2025-08-21T15:00:03.000Z"
    commit: null
    t: 168
    quote: With this improvement, you no longer have to manually delete existing permissions before importing a new set.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: asSSBl8Cj34
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=asSSBl8Cj34
published_at: "2025-08-21T15:00:03.000Z"
duration_s: 189
captions: full
audience:
  - administrator
  - functional consultant
  - developer
chapters:
  - t: 0
    title: Introduction and permission sets use case
  - t: 50
    title: Import behavior in previous versions - merge approach
  - t: 81
    title: Alternative use case - replacing instead of merging
  - t: 126
    title: New replace functionality demonstrated
  - t: 154
    title: Summary and benefits
features:
  - name: Replace permission sets upon import
    status: announced
    t: 5
    verified: true
    status_source: video
  - name: Import permission sets action
    status: unclear
    t: 58
    verified: false
    status_source: video
objects_mentioned: []
quotes:
  - t: 5
    text: If you frequently work with permission sets, you'll be interested to hear what's coming in the 2025 wave 2 release.
    check: exact
  - t: 58
    text: When using the action import permission sets in previous version of Business Central, the system would ask whether we want to update it.
    check: exact
  - t: 69
    text: If we confirmed with yes, the system would behave as expected, merging permissions from the test and production environment.
    check: exact
  - t: 139
    text: To overrite the existing permissions instead of merging them we must select no when prompted.
    check: exact
  - t: 154
    text: After choosing no, we see that the permissions were not merged. Instead, the vendor table was removed and contacts were added exactly as defined
    check: exact
  - t: 168
    text: With this improvement, you no longer have to manually delete existing permissions before importing a new set.
    check: exact
---

# What's Cooking in Business Central: Replace Permission Sets Upon Import

> Replace permission sets upon import is announced for the Business Central 2025 wave 2 release. The Import permission sets action can now overwrite existing permissions instead of merging them, by answering no at the update prompt. A short demo shows the result.

[Watch on YouTube](https://www.youtube.com/watch?v=asSSBl8Cj34) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-08-21 · 3:09 · tier official · reviewed (checked by Opus)

## Overview

The video covers a change to the Import permission sets action. In earlier versions, the system asked whether to update existing permissions, and answering yes merged permissions from the test and production environments.

The 2025 wave 2 release adds a replace option. When the user selects no at the prompt, the existing permissions are overwritten with the imported definition. In the demo, the vendor table permission was removed and contacts were added exactly as defined in the import, with no merge.

## Key points

- Replace permission sets upon import is announced for the 2025 wave 2 release.
- In earlier versions, the Import permission sets action asked whether to update, and yes merged permissions from test and production.
- To replace instead of merge, select no when prompted to update existing permissions.
- In the demo, after choosing no, the vendor table permission was removed and contacts were added exactly as defined in the import.
- The use case is moving permission sets between environments, such as test to production, where the imported definition should be the final result.
- With this change, you no longer need to manually delete existing permissions before importing a new set.

## Chapters

- [0:00](https://www.youtube.com/watch?v=asSSBl8Cj34&t=0s) Introduction and permission sets use case
- [0:50](https://www.youtube.com/watch?v=asSSBl8Cj34&t=50s) Import behavior in previous versions - merge approach
- [1:21](https://www.youtube.com/watch?v=asSSBl8Cj34&t=81s) Alternative use case - replacing instead of merging
- [2:06](https://www.youtube.com/watch?v=asSSBl8Cj34&t=126s) New replace functionality demonstrated
- [2:34](https://www.youtube.com/watch?v=asSSBl8Cj34&t=154s) Summary and benefits

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Replace permission sets upon import | announced, demoed | [0:05](https://www.youtube.com/watch?v=asSSBl8Cj34&t=5s) | "what's coming in the 2025 wave 2 release" ([0:05](https://www.youtube.com/watch?v=asSSBl8Cj34&t=5s)) |
| Import permission sets action | status not stated, demoed | [0:58](https://www.youtube.com/watch?v=asSSBl8Cj34&t=58s) |  |

## Quotes

- [0:05](https://www.youtube.com/watch?v=asSSBl8Cj34&t=5s) "If you frequently work with permission sets, you'll be interested to hear what's coming in the 2025 wave 2 release."
- [0:58](https://www.youtube.com/watch?v=asSSBl8Cj34&t=58s) "When using the action import permission sets in previous version of Business Central, the system would ask whether we want to update it."
- [1:09](https://www.youtube.com/watch?v=asSSBl8Cj34&t=69s) "If we confirmed with yes, the system would behave as expected, merging permissions from the test and production environment."
- [2:19](https://www.youtube.com/watch?v=asSSBl8Cj34&t=139s) "To overrite the existing permissions instead of merging them we must select no when prompted."
- [2:34](https://www.youtube.com/watch?v=asSSBl8Cj34&t=154s) "After choosing no, we see that the permissions were not merged. Instead, the vendor table was removed and contacts were added exactly as defined"
- [2:48](https://www.youtube.com/watch?v=asSSBl8Cj34&t=168s) "With this improvement, you no longer have to manually delete existing permissions before importing a new set."

## Disclaimers in the video

- [0:05](https://www.youtube.com/watch?v=asSSBl8Cj34&t=5s) coming-later: what's coming in the 2025 wave 2 release
