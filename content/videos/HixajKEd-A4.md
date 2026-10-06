---
id: video/HixajKEd-A4
type: video
title: "What's new: Match Production Database Configuration (2026 release wave 2)"
summary: Match Production Configuration in the Business Central admin center (2026 release wave 2, generally available). It temporarily makes a sandbox database match a typical production configuration for 72 hours, up to three times per tenant per calendar month, on paid license tenants only.
tier: official
language: en
tags:
  - sandbox configuration
  - production database matching
  - admin center
  - environment management
  - database configuration
  - performance testing
  - cloud migration
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T12:57:07.046Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 84b6ddb3e455b68f724f0b02ead403b957f5aff8e9f3af7d626a06562b1505aa
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=HixajKEd-A4&t=7s
    title: "Match Production Configuration: generally available"
    date: "2026-10-01T13:03:49.000Z"
    commit: null
    t: 7
    quote: A new feature we're shipping in 2026 release wave two.
  - kind: video
    url: https://www.youtube.com/watch?v=HixajKEd-A4&t=7s
    title: "What's new: Match Production Database Configuration (2026 release wave 2)"
    date: "2026-10-01T13:03:49.000Z"
    commit: null
    t: 7
    quote: A new feature we're shipping in 2026 release wave two. With this feature administrators will be able to temporarily match the configuration of a
  - kind: video
    url: https://www.youtube.com/watch?v=HixajKEd-A4&t=23s
    title: "What's new: Match Production Database Configuration (2026 release wave 2)"
    date: "2026-10-01T13:03:49.000Z"
    commit: null
    t: 23
    quote: developers and administrators using the performance tool get developing apps or running cloud migration projects can mimic the configuration of a production database in
  - kind: video
    url: https://www.youtube.com/watch?v=HixajKEd-A4&t=103s
    title: "What's new: Match Production Database Configuration (2026 release wave 2)"
    date: "2026-10-01T13:03:49.000Z"
    commit: null
    t: 103
    quote: this operation is limited to three occurrences per tenant per calendar month for 72 hours at a time
  - kind: video
    url: https://www.youtube.com/watch?v=HixajKEd-A4&t=103s
    title: "What's new: Match Production Database Configuration (2026 release wave 2)"
    date: "2026-10-01T13:03:49.000Z"
    commit: null
    t: 103
    quote: Once those 72 hours end your sandbox environment automatically moves back to a typical sandbox configuration during the first environment update window
  - kind: video
    url: https://www.youtube.com/watch?v=HixajKEd-A4&t=133s
    title: "What's new: Match Production Database Configuration (2026 release wave 2)"
    date: "2026-10-01T13:03:49.000Z"
    commit: null
    t: 133
    quote: this is only available on tenants that have a paid license type, including partners that are using the partner sandbox license
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: HixajKEd-A4
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=HixajKEd-A4
published_at: "2026-10-01T13:03:49.000Z"
duration_s: 153
captions: full
audience:
  - administrator
  - developer
  - partner
chapters:
  - t: 0
    title: Feature overview and use cases
  - t: 43
    title: Accessing the match production configuration button
  - t: 56
    title: Flyout explanation and operation tracking
  - t: 89
    title: Important considerations
  - t: 103
    title: Limits, reversion, APIs, and licensing
  - t: 133
    title: Conclusion
features:
  - name: Match Production Configuration
    status: ga
    t: 7
    verified: true
  - name: Match Production Configuration Button
    status: unclear
    t: 43
    verified: false
  - name: Operation Tracking for Configuration Matching
    status: unclear
    t: 69
    verified: false
  - name: Admin Center APIs for Configuration Matching
    status: unclear
    t: 119
    verified: false
objects_mentioned: []
quotes:
  - t: 7
    text: A new feature we're shipping in 2026 release wave two. With this feature administrators will be able to temporarily match the configuration of a
    check: exact
  - t: 23
    text: developers and administrators using the performance tool get developing apps or running cloud migration projects can mimic the configuration of a production database in
    check: exact
  - t: 103
    text: this operation is limited to three occurrences per tenant per calendar month for 72 hours at a time
    check: exact
  - t: 103
    text: Once those 72 hours end your sandbox environment automatically moves back to a typical sandbox configuration during the first environment update window
    check: exact
  - t: 133
    text: this is only available on tenants that have a paid license type, including partners that are using the partner sandbox license
    check: exact
---

# What's new: Match Production Database Configuration (2026 release wave 2)

> Match Production Configuration in the Business Central admin center (2026 release wave 2, generally available). It temporarily makes a sandbox database match a typical production configuration for 72 hours, up to three times per tenant per calendar month, on paid license tenants only.

[Watch on YouTube](https://www.youtube.com/watch?v=HixajKEd-A4) · Microsoft Dynamics 365 Business Central (YouTube) · 2026-10-01 · 2:33 · tier official · **unreviewed** (machine-generated)

## Overview

The video covers a sandbox feature that lets administrators temporarily match the configuration of a sandbox database to that of a typical production database. Developers and administrators can use it to see how processes run in a production-like setup, for example when developing apps, using the performance tool, or running cloud migration projects.

It shows the new "match production configuration" button in the admin center for sandbox environments and explains the flyout and how the operation is tracked. It also covers the limits: activating it restarts the environment and disconnects users, it lasts 72 hours, and it reverts automatically. It is supported through admin center APIs and requires a paid license type.

## Key points

- The button is labeled match production configuration and appears in the admin center for sandbox environments only.
- Enabling it restarts the environment, so all connected users are disconnected.
- Each occurrence lasts 72 hours; the sandbox then returns to a typical sandbox configuration during the first environment update window.
- Limit: three occurrences per tenant per calendar month.
- Only available on tenants with a paid license type, including partners using the partner sandbox license.
- The operation can be tracked in the admin center like other operations, showing who started it, when, and the expected revert time.
- Admin center APIs support the operation, so it can be automated as part of development processes.

## Chapters

- [0:00](https://www.youtube.com/watch?v=HixajKEd-A4&t=0s) Feature overview and use cases
- [0:43](https://www.youtube.com/watch?v=HixajKEd-A4&t=43s) Accessing the match production configuration button
- [0:56](https://www.youtube.com/watch?v=HixajKEd-A4&t=56s) Flyout explanation and operation tracking
- [1:29](https://www.youtube.com/watch?v=HixajKEd-A4&t=89s) Important considerations
- [1:43](https://www.youtube.com/watch?v=HixajKEd-A4&t=103s) Limits, reversion, APIs, and licensing
- [2:13](https://www.youtube.com/watch?v=HixajKEd-A4&t=133s) Conclusion

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Match Production Configuration | generally available | [0:07](https://www.youtube.com/watch?v=HixajKEd-A4&t=7s) | "A new feature we're shipping in 2026 release wave two." ([0:07](https://www.youtube.com/watch?v=HixajKEd-A4&t=7s)) |
| Match Production Configuration Button | status not stated, demoed | [0:43](https://www.youtube.com/watch?v=HixajKEd-A4&t=43s) |  |
| Operation Tracking for Configuration Matching | status not stated | [1:09](https://www.youtube.com/watch?v=HixajKEd-A4&t=69s) |  |
| Admin Center APIs for Configuration Matching | status not stated | [1:59](https://www.youtube.com/watch?v=HixajKEd-A4&t=119s) |  |

## Quotes

- [0:07](https://www.youtube.com/watch?v=HixajKEd-A4&t=7s) "A new feature we're shipping in 2026 release wave two. With this feature administrators will be able to temporarily match the configuration of a"
- [0:23](https://www.youtube.com/watch?v=HixajKEd-A4&t=23s) "developers and administrators using the performance tool get developing apps or running cloud migration projects can mimic the configuration of a production database in"
- [1:43](https://www.youtube.com/watch?v=HixajKEd-A4&t=103s) "this operation is limited to three occurrences per tenant per calendar month for 72 hours at a time"
- [1:43](https://www.youtube.com/watch?v=HixajKEd-A4&t=103s) "Once those 72 hours end your sandbox environment automatically moves back to a typical sandbox configuration during the first environment update window"
- [2:13](https://www.youtube.com/watch?v=HixajKEd-A4&t=133s) "this is only available on tenants that have a paid license type, including partners that are using the partner sandbox license"

## Disclaimers in the video

- [0:56](https://www.youtube.com/watch?v=HixajKEd-A4&t=56s) other: enabling this action will restart the environment meaning that any users that are connected to the environment at the time you do this will be disconnected
- [1:09](https://www.youtube.com/watch?v=HixajKEd-A4&t=69s) other: your environment will automatically revert back to a typical sandbox configuration after 72 hours
