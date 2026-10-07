---
id: video/_6bYqpKzL8s
type: video
title: Upgrade Business Central Sandbox to Preview Version
summary: Updating an existing Business Central sandbox to a preview version from the admin center, so upcoming functionality can be tested with real customer data, configurations and extensions. Covers scheduling the update, post-upgrade testing and preview limitations, including deletion 30 days after GA.
tier: community
language: en
tags:
  - sandbox upgrade
  - preview environment
  - environment management
  - testing strategy
  - upgrade scheduling
  - admin center
  - customer data
  - preview limitations
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:12:03.732Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 71bcb503082d95477fa5f5e2925c1d6cff68d55c48258a5122137c1180f59a65
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=_6bYqpKzL8s&t=495s
    title: "Preview environment deletion after GA: generally available"
    date: "2026-09-18T05:30:03.000Z"
    commit: null
    t: 495
    quote: Microsoft deletes those environment 30 days after the version becomes generally available.
  - kind: video
    url: https://www.youtube.com/watch?v=_6bYqpKzL8s&t=54s
    title: Upgrade Business Central Sandbox to Preview Version
    date: "2026-09-18T05:30:03.000Z"
    commit: null
    t: 54
    quote: Microsoft I don't remember the exact timeline but I have allowed existing sandbox environment to update to a preview version during the preview period.
  - kind: video
    url: https://www.youtube.com/watch?v=_6bYqpKzL8s&t=112s
    title: Upgrade Business Central Sandbox to Preview Version
    date: "2026-09-18T05:30:03.000Z"
    commit: null
    t: 112
    quote: Microsoft specifically documents that upcoming updating an existing sandbox to a preview allows you to review the new functionality in an environment where the
  - kind: video
    url: https://www.youtube.com/watch?v=_6bYqpKzL8s&t=187s
    title: Upgrade Business Central Sandbox to Preview Version
    date: "2026-09-18T05:30:03.000Z"
    commit: null
    t: 187
    quote: This approach is particularly useful for customers because it has customer extension, customer realistic data setups and configurations.
  - kind: video
    url: https://www.youtube.com/watch?v=_6bYqpKzL8s&t=495s
    title: Upgrade Business Central Sandbox to Preview Version
    date: "2026-09-18T05:30:03.000Z"
    commit: null
    t: 495
    quote: Microsoft deletes those environment 30 days after the version becomes generally available.
  - kind: video
    url: https://www.youtube.com/watch?v=_6bYqpKzL8s&t=535s
    title: Upgrade Business Central Sandbox to Preview Version
    date: "2026-09-18T05:30:03.000Z"
    commit: null
    t: 535
    quote: You will not be able to update a preview environment to a different version. So it automatically gets update from Microsoft but you cannot
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: _6bYqpKzL8s
channel: yt-saurav
source_name: Saurav Dhyani
url: https://www.youtube.com/watch?v=_6bYqpKzL8s
published_at: "2026-09-18T05:30:03.000Z"
duration_s: 789
captions: derived
audience:
  - administrator
  - partner
  - functional consultant
  - developer
chapters:
  - t: 0
    title: Introduction and Overview
  - t: 28
    title: Why Test Preview with Customer Data
  - t: 83
    title: Preview Sandbox vs Existing Sandbox Approaches
  - t: 172
    title: Admin Center and Update Settings
  - t: 310
    title: Scheduling the Preview Update
  - t: 398
    title: Testing After Upgrade
  - t: 482
    title: Preview Environment Limitations
  - t: 566
    title: Upgrade in Progress and Data Considerations
  - t: 675
    title: Summary and Call to Action
features:
  - name: Update existing sandbox to preview version
    status: unclear
    t: 1
    verified: false
    status_source: video
  - name: Preview environment deletion after GA
    status: ga
    t: 482
    verified: true
    status_source: video
  - name: Schedule preview version update from admin center
    status: unclear
    t: 211
    verified: false
    status_source: video
objects_mentioned:
  - other BC28 US environment
quotes:
  - t: 54
    text: Microsoft I don't remember the exact timeline but I have allowed existing sandbox environment to update to a preview version during the preview period.
    check: exact
  - t: 112
    text: Microsoft specifically documents that upcoming updating an existing sandbox to a preview allows you to review the new functionality in an environment where the
    check: exact
  - t: 187
    text: This approach is particularly useful for customers because it has customer extension, customer realistic data setups and configurations.
    check: exact
  - t: 495
    text: Microsoft deletes those environment 30 days after the version becomes generally available.
    check: exact
  - t: 535
    text: You will not be able to update a preview environment to a different version. So it automatically gets update from Microsoft but you cannot
    check: exact
---

# Upgrade Business Central Sandbox to Preview Version

> Updating an existing Business Central sandbox to a preview version from the admin center, so upcoming functionality can be tested with real customer data, configurations and extensions. Covers scheduling the update, post-upgrade testing and preview limitations, including deletion 30 days after GA.

[Watch on YouTube](https://www.youtube.com/watch?v=_6bYqpKzL8s) · Saurav Dhyani · 2026-09-18 · 13:09 · tier community · **unreviewed** (machine-generated)

## Overview

The video shows how to schedule an existing sandbox to update to a preview version instead of creating a new clean preview environment. The presenter argues this is useful for customers because the sandbox already holds their extensions, realistic data and configurations, which gives a rough estimate of how the new version will behave for them.

It walks through the admin center: viewing environments, checking application versions, and choosing a date and time for the update. It then covers testing after the upgrade and the limits of preview environments, which are temporary and cannot be moved to a different version.

## Key points

- An existing sandbox can be scheduled to update to a preview version, rather than creating a new clean preview environment.
- Testing this way uses the customer's own extensions, data and configuration, which gives a rough estimate of impact, not a guaranteed result.
- Updates are scheduled in the admin center, where you check environments and application versions and pick a date and time.
- Date selection may be restricted by update window settings; an option allows running outside the update window.
- Check that the sandbox is not in use for active testing before upgrading it.
- Preview environments are deleted automatically 30 days after the version becomes generally available, without prior notice.
- A preview environment cannot be updated to a different version, and it should not be treated as a permanent sandbox. Tell customers it is temporary.

## Chapters

- [0:00](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=0s) Introduction and Overview
- [0:28](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=28s) Why Test Preview with Customer Data
- [1:23](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=83s) Preview Sandbox vs Existing Sandbox Approaches
- [2:52](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=172s) Admin Center and Update Settings
- [5:10](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=310s) Scheduling the Preview Update
- [6:38](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=398s) Testing After Upgrade
- [8:02](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=482s) Preview Environment Limitations
- [9:26](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=566s) Upgrade in Progress and Data Considerations
- [11:15](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=675s) Summary and Call to Action

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Update existing sandbox to preview version | status not stated, demoed | [0:01](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=1s) |  |
| Preview environment deletion after GA | generally available | [8:02](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=482s) | "Microsoft deletes those environment 30 days after the version becomes generally available." ([8:15](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=495s)) |
| Schedule preview version update from admin center | status not stated, demoed | [3:31](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=211s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "BC28 US environment" at [3:31](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=211s)

## Quotes

- [0:54](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=54s) "Microsoft I don't remember the exact timeline but I have allowed existing sandbox environment to update to a preview version during the preview period."
- [1:52](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=112s) "Microsoft specifically documents that upcoming updating an existing sandbox to a preview allows you to review the new functionality in an environment where the"
- [3:07](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=187s) "This approach is particularly useful for customers because it has customer extension, customer realistic data setups and configurations."
- [8:15](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=495s) "Microsoft deletes those environment 30 days after the version becomes generally available."
- [8:55](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=535s) "You will not be able to update a preview environment to a different version. So it automatically gets update from Microsoft but you cannot"

## Disclaimers in the video

- [8:15](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=495s) coming-later: Microsoft deletes those environment 30 days after the version becomes generally available.
- [8:41](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=521s) subject-to-change: This environment will only be available 30 days after the GA.
- [9:11](https://www.youtube.com/watch?v=_6bYqpKzL8s&t=551s) subject-to-change: Don't treat this as a permanent sandbox it is just temporarily for testing.

Presenters (as heard): Savani.
