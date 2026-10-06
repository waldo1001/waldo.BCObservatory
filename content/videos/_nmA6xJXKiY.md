---
id: video/_nmA6xJXKiY
type: video
title: "Introducing: PTEs in Admin Center (2025 release wave 1)"
summary: "PTEs in the Business Central admin center (2025 release wave 1): the admin center now lists PTEs and dev extensions next to global apps, lets admins uninstall apps and see dependencies, and exposes the same data in admin center API version 2.25."
tier: official
language: en
tags:
  - pte
  - admin center
  - app management
  - uninstall
  - dependencies
  - api
  - extensions
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T18:41:08.160Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: a3aae48ee5e36745961e67de40b660089c7775d3f1f2a20e2041b1057520c04f
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=_nmA6xJXKiY&t=6s
    title: "Introducing: PTEs in Admin Center (2025 release wave 1)"
    date: "2025-04-01T15:00:49.000Z"
    commit: null
    t: 6
    quote: starting this release wave we'll start surfacing the PTEs that are installed on your environments in the admin center and in the admin center
  - kind: video
    url: https://www.youtube.com/watch?v=_nmA6xJXKiY&t=33s
    title: "Introducing: PTEs in Admin Center (2025 release wave 1)"
    date: "2025-04-01T15:00:49.000Z"
    commit: null
    t: 33
    quote: whereas before we would only show global apps, we can now also see PTEES and dev extensions
  - kind: video
    url: https://www.youtube.com/watch?v=_nmA6xJXKiY&t=55s
    title: "Introducing: PTEs in Admin Center (2025 release wave 1)"
    date: "2025-04-01T15:00:49.000Z"
    commit: null
    t: 55
    quote: for the apps that can be uninstalled, which is almost all of them with exceptions, just as base app, um you can now click
  - kind: video
    url: https://www.youtube.com/watch?v=_nmA6xJXKiY&t=76s
    title: "Introducing: PTEs in Admin Center (2025 release wave 1)"
    date: "2025-04-01T15:00:49.000Z"
    commit: null
    t: 76
    quote: if I'm uninstalling an app that has dependencies, I can now see those dependencies right in the admin center
  - kind: video
    url: https://www.youtube.com/watch?v=_nmA6xJXKiY&t=114s
    title: "Introducing: PTEs in Admin Center (2025 release wave 1)"
    date: "2025-04-01T15:00:49.000Z"
    commit: null
    t: 114
    quote: everything that I just demoed in the admin center will also be available in the admin center API from version 2.25
  - kind: video
    url: https://www.youtube.com/watch?v=_nmA6xJXKiY&t=129s
    title: "Introducing: PTEs in Admin Center (2025 release wave 1)"
    date: "2025-04-01T15:00:49.000Z"
    commit: null
    t: 129
    quote: we're introducing a new uninstall requirements endpoint. This is an endpoint that you can use to see which apps would be uninstalled if you
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: _nmA6xJXKiY
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=_nmA6xJXKiY
published_at: "2025-04-01T15:00:49.000Z"
duration_s: 158
captions: full
audience:
  - administrator
  - developer
  - functional consultant
  - partner
chapters:
  - t: 0
    title: Introduction to PTEs in Admin Center
  - t: 22
    title: Viewing PTEs and Dev Extensions
  - t: 44
    title: Uninstalling Global Apps
  - t: 76
    title: Dependency Management and Uninstall
  - t: 114
    title: Admin Center API Support
features:
  - name: PTEs visible in Admin Center
    status: unclear
    t: 6
    verified: false
    status_source: video
  - name: Admin Center API for PTEs
    status: unclear
    t: 6
    verified: false
    status_source: video
  - name: App Filter Dropdown
    status: unclear
    t: 22
    verified: false
    status_source: video
  - name: Uninstall Apps from Admin Center
    status: unclear
    t: 44
    verified: false
    status_source: video
  - name: Dependency Visibility on Uninstall
    status: unclear
    t: 76
    verified: false
    status_source: video
  - name: Uninstall Requirements API Endpoint
    status: unclear
    t: 114
    verified: false
    status_source: video
  - name: App Type Property in API
    status: unclear
    t: 129
    verified: false
    status_source: video
objects_mentioned: []
quotes:
  - t: 6
    text: starting this release wave we'll start surfacing the PTEs that are installed on your environments in the admin center and in the admin center
    check: exact
  - t: 33
    text: whereas before we would only show global apps, we can now also see PTEES and dev extensions
    check: exact
  - t: 55
    text: for the apps that can be uninstalled, which is almost all of them with exceptions, just as base app, um you can now click
    check: exact
  - t: 76
    text: if I'm uninstalling an app that has dependencies, I can now see those dependencies right in the admin center
    check: exact
  - t: 114
    text: everything that I just demoed in the admin center will also be available in the admin center API from version 2.25
    check: exact
  - t: 129
    text: we're introducing a new uninstall requirements endpoint. This is an endpoint that you can use to see which apps would be uninstalled if you
    check: exact
---

# Introducing: PTEs in Admin Center (2025 release wave 1)

> PTEs in the Business Central admin center (2025 release wave 1): the admin center now lists PTEs and dev extensions next to global apps, lets admins uninstall apps and see dependencies, and exposes the same data in admin center API version 2.25.

[Watch on YouTube](https://www.youtube.com/watch?v=_nmA6xJXKiY) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-04-01 · 2:38 · tier official · **unreviewed** (machine-generated)

## Overview

The video shows that, starting with this release wave, the admin center surfaces the PTEs installed on an environment. Before, only global apps were shown. A new dropdown filter separates global apps, PTEs and dev extensions.

It also demos uninstalling global apps from the admin center, with a choice of whether to keep application data. When an app has dependencies, the admin center shows which apps depend on it. Everything demoed is also available in the admin center API from version 2.25, including a new uninstall requirements endpoint and app type properties on the app endpoint.

## Key points

- The admin center now shows PTEs and dev extensions, not only global apps.
- A new dropdown filter shows global apps, PTEs and dev extensions separately.
- Global apps can be uninstalled from the admin center, with the option to keep or remove application data.
- Almost all apps can be uninstalled; the base app cannot.
- When uninstalling an app with dependencies, the admin center lists the apps that depend on it, so you can see what else will be uninstalled.
- Admin center API version 2.25 adds the same capabilities: querying installed extensions, reading app type on the app endpoint, and a new uninstall requirements endpoint.
- The uninstall requirements endpoint returns which apps would be uninstalled as a result of uninstalling a given app.

## Chapters

- [0:00](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=0s) Introduction to PTEs in Admin Center
- [0:22](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=22s) Viewing PTEs and Dev Extensions
- [0:44](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=44s) Uninstalling Global Apps
- [1:16](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=76s) Dependency Management and Uninstall
- [1:54](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=114s) Admin Center API Support

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| PTEs visible in Admin Center | status not stated, demoed | [0:06](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=6s) |  |
| Admin Center API for PTEs | status not stated | [0:06](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=6s) |  |
| App Filter Dropdown | status not stated, demoed | [0:22](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=22s) |  |
| Uninstall Apps from Admin Center | status not stated, demoed | [0:44](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=44s) |  |
| Dependency Visibility on Uninstall | status not stated, demoed | [1:16](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=76s) |  |
| Uninstall Requirements API Endpoint | status not stated | [1:54](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=114s) |  |
| App Type Property in API | status not stated | [2:09](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=129s) |  |

## Quotes

- [0:06](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=6s) "starting this release wave we'll start surfacing the PTEs that are installed on your environments in the admin center and in the admin center"
- [0:33](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=33s) "whereas before we would only show global apps, we can now also see PTEES and dev extensions"
- [0:55](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=55s) "for the apps that can be uninstalled, which is almost all of them with exceptions, just as base app, um you can now click"
- [1:16](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=76s) "if I'm uninstalling an app that has dependencies, I can now see those dependencies right in the admin center"
- [1:54](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=114s) "everything that I just demoed in the admin center will also be available in the admin center API from version 2.25"
- [2:09](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=129s) "we're introducing a new uninstall requirements endpoint. This is an endpoint that you can use to see which apps would be uninstalled if you"

## Disclaimers in the video

- [1:54](https://www.youtube.com/watch?v=_nmA6xJXKiY&t=114s) other: everything that I just demoed in the admin center will also be available in the admin center API from version 2.25
