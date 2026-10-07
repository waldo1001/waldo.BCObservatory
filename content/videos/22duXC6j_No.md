---
id: video/22duXC6j_No
type: video
title: Manage all your Apps And Updates in Admin Center for Business Central
summary: 'Business Central Admin Center app management walkthrough: the all apps view with update actions, dependency-driven "action required" status, scheduling and force sync options, dev apps and PTE filtering, installing and uninstalling apps, and monitoring installs on the Operations page.'
tier: community
language: en
tags:
  - admin center
  - app management
  - extensions
  - pte
  - dependencies
  - updates
  - app installation
  - operations monitoring
  - sync mode
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:17:54.624Z"
  flags: []
generated:
  at: "2026-10-07T23:17:54.671Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: e9b6e315dc9c644157e06b2630ddfd0a9ba52fa0786b82c526b8318e504d56a4
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=22duXC6j_No&t=0s
    title: Manage all your Apps And Updates in Admin Center for Business Central
    date: "2026-09-28T11:00:01.000Z"
    commit: null
    t: 0
    quote: admin center is going through a transition uh from becoming something that you rarely visit
  - kind: video
    url: https://www.youtube.com/watch?v=22duXC6j_No&t=111s
    title: Manage all your Apps And Updates in Admin Center for Business Central
    date: "2026-09-28T11:00:01.000Z"
    commit: null
    t: 111
    quote: until like a week ago this one did not include the update action here. So, you before that and maybe not all environments then
  - kind: video
    url: https://www.youtube.com/watch?v=22duXC6j_No&t=216s
    title: Manage all your Apps And Updates in Admin Center for Business Central
    date: "2026-09-28T11:00:01.000Z"
    commit: null
    t: 216
    quote: We cannot update toolbox because toolbox has a dependency to two other apps that are not updated either
  - kind: video
    url: https://www.youtube.com/watch?v=22duXC6j_No&t=240s
    title: Manage all your Apps And Updates in Admin Center for Business Central
    date: "2026-09-28T11:00:01.000Z"
    commit: null
    t: 240
    quote: I can click update to the latest and I acknowledge the app provider's terms of use and privacy policy specified on AppSource aka Microsoft
  - kind: video
    url: https://www.youtube.com/watch?v=22duXC6j_No&t=411s
    title: Manage all your Apps And Updates in Admin Center for Business Central
    date: "2026-09-28T11:00:01.000Z"
    commit: null
    t: 411
    quote: Next update window, meaning tonight. That's So, that's a new option.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: 22duXC6j_No
channel: yt-hougaard
source_name: Erik Hougaard
url: https://www.youtube.com/watch?v=22duXC6j_No
published_at: "2026-09-28T11:00:01.000Z"
duration_s: 673
captions: derived
audience:
  - administrator
  - developer
  - partner
chapters:
  - t: 0
    title: Introduction to Admin Center transition
  - t: 31
    title: Accessing Admin Center and viewing environments
  - t: 77
    title: All apps view and update availability
  - t: 165
    title: Action required vs install update status
  - t: 265
    title: Dependency management and update scheduling
  - t: 334
    title: Dev apps and PTEs management
  - t: 389
    title: Installing new apps from Admin Center
  - t: 471
    title: Monitoring installation progress in Operations
  - t: 607
    title: Future of app management in Admin Center
features:
  - name: All apps view with update actions
    status: unclear
    t: 99
    verified: false
    status_source: video
  - name: Action required status for dependent apps
    status: unclear
    t: 165
    verified: false
    status_source: video
  - name: Installation scheduling options
    status: unclear
    t: 400
    verified: false
    status_source: video
  - name: App installation from Admin Center
    status: unclear
    t: 389
    verified: false
    status_source: video
  - name: Operations page for installation monitoring
    status: unclear
    t: 471
    verified: false
    status_source: video
  - name: Uninstall apps from Admin Center
    status: unclear
    t: 375
    verified: false
    status_source: video
objects_mentioned: []
quotes:
  - t: 0
    text: admin center is going through a transition uh from becoming something that you rarely visit
    check: fuzzy
  - t: 111
    text: until like a week ago this one did not include the update action here. So, you before that and maybe not all environments then
    check: exact
  - t: 216
    text: We cannot update toolbox because toolbox has a dependency to two other apps that are not updated either
    check: exact
  - t: 240
    text: I can click update to the latest and I acknowledge the app provider's terms of use and privacy policy specified on AppSource aka Microsoft
    check: exact
  - t: 411
    text: Next update window, meaning tonight. That's So, that's a new option.
    check: exact
---

# Manage all your Apps And Updates in Admin Center for Business Central

> Business Central Admin Center app management walkthrough: the all apps view with update actions, dependency-driven "action required" status, scheduling and force sync options, dev apps and PTE filtering, installing and uninstalling apps, and monitoring installs on the Operations page.

[Watch on YouTube](https://www.youtube.com/watch?v=22duXC6j_No) · Erik Hougaard · 2026-09-28 · 11:13 · tier community · reviewed (checked by Opus)

## Overview

Erik Hougaard shows how Admin Center is moving from a place administrators rarely visit to the main place for managing apps and updates. He walks through the environments list, the all apps view, and the update actions now available there.

The demo covers updating apps that have dependencies, scheduling updates and installs, separating dev apps and PTEs, installing a new app, and following progress on the Operations page. He says this is the expected future way to manage apps and notes the PTE name may change.

## Key points

- The all apps view in Admin Center now includes the update action directly. Before, you had to select global apps to update applications. The speaker says this was added about a week before recording and may not be in all environments.
- An update shows 'action required' when the app depends on other apps that must be updated first. In the demo, Toolbox could not be updated because two apps it depends on (AL compiler and interpreter, AL AI services) were not updated.
- Choosing update to the latest requires acknowledging the app provider's terms of use and privacy policy on AppSource for the app and its dependencies. All three apps are then scheduled, and the dependencies install before the dependent app compiles.
- Installs can be scheduled for right now, the next update window (tonight, described as a new option), the next minor version, or the next major version.
- Sync mode includes force sync, which gets the new app version in no matter what breaks (for example removed tables or pages). The speaker believes it only applies to data.
- Dev apps and PTEs have their own views. Apps can be installed and uninstalled from Admin Center without going to extension management.
- The Operations page shows installation progress. The speaker says a typical PTE takes about 1 minute 20 seconds to install in his environments, but the demo install took longer.

## Chapters

- [0:00](https://www.youtube.com/watch?v=22duXC6j_No&t=0s) Introduction to Admin Center transition
- [0:31](https://www.youtube.com/watch?v=22duXC6j_No&t=31s) Accessing Admin Center and viewing environments
- [1:17](https://www.youtube.com/watch?v=22duXC6j_No&t=77s) All apps view and update availability
- [2:45](https://www.youtube.com/watch?v=22duXC6j_No&t=165s) Action required vs install update status
- [4:25](https://www.youtube.com/watch?v=22duXC6j_No&t=265s) Dependency management and update scheduling
- [5:34](https://www.youtube.com/watch?v=22duXC6j_No&t=334s) Dev apps and PTEs management
- [6:29](https://www.youtube.com/watch?v=22duXC6j_No&t=389s) Installing new apps from Admin Center
- [7:51](https://www.youtube.com/watch?v=22duXC6j_No&t=471s) Monitoring installation progress in Operations
- [10:07](https://www.youtube.com/watch?v=22duXC6j_No&t=607s) Future of app management in Admin Center

## Features

| Feature | Status | At |
|---|---|---|
| All apps view with update actions | status not stated, demoed | [1:39](https://www.youtube.com/watch?v=22duXC6j_No&t=99s) |
| Action required status for dependent apps | status not stated, demoed | [2:45](https://www.youtube.com/watch?v=22duXC6j_No&t=165s) |
| Installation scheduling options | status not stated, demoed | [6:40](https://www.youtube.com/watch?v=22duXC6j_No&t=400s) |
| App installation from Admin Center | status not stated, demoed | [6:29](https://www.youtube.com/watch?v=22duXC6j_No&t=389s) |
| Operations page for installation monitoring | status not stated, demoed | [7:51](https://www.youtube.com/watch?v=22duXC6j_No&t=471s) |
| Uninstall apps from Admin Center | status not stated, demoed | [6:15](https://www.youtube.com/watch?v=22duXC6j_No&t=375s) |

## Quotes

- [0:00](https://www.youtube.com/watch?v=22duXC6j_No&t=0s) "admin center is going through a transition uh from becoming something that you rarely visit"
- [1:51](https://www.youtube.com/watch?v=22duXC6j_No&t=111s) "until like a week ago this one did not include the update action here. So, you before that and maybe not all environments then"
- [3:36](https://www.youtube.com/watch?v=22duXC6j_No&t=216s) "We cannot update toolbox because toolbox has a dependency to two other apps that are not updated either"
- [4:00](https://www.youtube.com/watch?v=22duXC6j_No&t=240s) "I can click update to the latest and I acknowledge the app provider's terms of use and privacy policy specified on AppSource aka Microsoft"
- [6:51](https://www.youtube.com/watch?v=22duXC6j_No&t=411s) "Next update window, meaning tonight. That's So, that's a new option."

## Disclaimers in the video

- [5:47](https://www.youtube.com/watch?v=22duXC6j_No&t=347s) subject-to-change: At some point we need to get a new name for this

Presenters (as heard): Eric.
