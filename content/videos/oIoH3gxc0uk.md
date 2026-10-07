---
id: video/oIoH3gxc0uk
type: video
title: Execution & Control Flushing Methods (2026)
summary: "Flushing methods in Business Central production orders: forward, backward and manual flushing, the pick plus warehouse step, component-level flushing policies and routing link codes. Includes a demo of posting manual components and finishing an order."
tier: official
language: en
tags:
  - flushing methods
  - production orders
  - material consumption
  - routing link codes
  - forward flushing
  - backward flushing
  - manual flushing
  - pick plus
  - production control
  - operator control
system: manufacturing
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
  input_hash: 11c4c57124b247ac6f518017451b63648e4378eba2d8349a5e8c540b16a2c25b
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=oIoH3gxc0uk&t=55s
    title: "Forward flushing: generally available"
    date: "2026-09-08T11:44:47.000Z"
    commit: null
    t: 55
    quote: Forward is for predictable components. Once the order is released, Business Central can consume them automatically
  - kind: video
    url: https://www.youtube.com/watch?v=oIoH3gxc0uk&t=21s
    title: Execution & Control Flushing Methods (2026)
    date: "2026-09-08T11:44:47.000Z"
    commit: null
    t: 21
    quote: A flushing method defines when the system posts production activity automatically.
  - kind: video
    url: https://www.youtube.com/watch?v=oIoH3gxc0uk&t=44s
    title: Execution & Control Flushing Methods (2026)
    date: "2026-09-08T11:44:47.000Z"
    commit: null
    t: 44
    quote: On a production order, each component line can carry its own posting rule.
  - kind: video
    url: https://www.youtube.com/watch?v=oIoH3gxc0uk&t=102s
    title: Execution & Control Flushing Methods (2026)
    date: "2026-09-08T11:44:47.000Z"
    commit: null
    t: 102
    quote: It only adds picking before that selected rule applies. That is the main point.
  - kind: video
    url: https://www.youtube.com/watch?v=oIoH3gxc0uk&t=125s
    title: Execution & Control Flushing Methods (2026)
    date: "2026-09-08T11:44:47.000Z"
    commit: null
    t: 125
    quote: That matching code is what ties component consumption to a specific operation instead of treating the whole order as one timing event.
  - kind: video
    url: https://www.youtube.com/watch?v=oIoH3gxc0uk&t=165s
    title: Execution & Control Flushing Methods (2026)
    date: "2026-09-08T11:44:47.000Z"
    commit: null
    t: 165
    quote: If a routing link code is blank, the timing applies to the order more generally. If a routing link code is filled in, the
  - kind: video
    url: https://www.youtube.com/watch?v=oIoH3gxc0uk&t=205s
    title: Execution & Control Flushing Methods (2026)
    date: "2026-09-08T11:44:47.000Z"
    commit: null
    t: 205
    quote: Predictable components can be automated. Components that need warehouse handling can stay pick controlled.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: oIoH3gxc0uk
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=oIoH3gxc0uk
published_at: "2026-09-08T11:44:47.000Z"
duration_s: 274
captions: full
audience:
  - functional consultant
  - end user
  - administrator
chapters:
  - t: 0
    title: Introduction to flushing methods
  - t: 21
    title: What is flushing - definition and scope
  - t: 44
    title: Three flushing methods and pick plus
  - t: 102
    title: Routing link codes and component timing
  - t: 155
    title: Reading the production order page
  - t: 193
    title: Practical benefits of flexible flushing
  - t: 226
    title: Demo - posting manual components and finishing the order
features:
  - name: Forward flushing
    status: ga
    t: 55
    verified: true
    status_source: video
  - name: Backward flushing
    status: unclear
    t: 73
    verified: false
    status_source: video
  - name: Manual flushing
    status: unclear
    t: 86
    verified: false
    status_source: video
  - name: Pick plus
    status: unclear
    t: 86
    verified: false
    status_source: video
  - name: Routing link codes on components
    status: unclear
    t: 114
    verified: false
    status_source: video
  - name: Component-level flushing policies
    status: unclear
    t: 44
    verified: false
    status_source: video
objects_mentioned:
  - other production journal
  - other production order
  - other production order routing
quotes:
  - t: 21
    text: A flushing method defines when the system posts production activity automatically.
    check: exact
  - t: 44
    text: On a production order, each component line can carry its own posting rule.
    check: exact
  - t: 102
    text: It only adds picking before that selected rule applies. That is the main point.
    check: exact
  - t: 125
    text: That matching code is what ties component consumption to a specific operation instead of treating the whole order as one timing event.
    check: exact
  - t: 165
    text: If a routing link code is blank, the timing applies to the order more generally. If a routing link code is filled in, the
    check: exact
  - t: 205
    text: Predictable components can be automated. Components that need warehouse handling can stay pick controlled.
    check: exact
---

# Execution & Control Flushing Methods (2026)

> Flushing methods in Business Central production orders: forward, backward and manual flushing, the pick plus warehouse step, component-level flushing policies and routing link codes. Includes a demo of posting manual components and finishing an order.

[Watch on YouTube](https://www.youtube.com/watch?v=oIoH3gxc0uk) · Microsoft Dynamics 365 Business Central (YouTube) · 2026-09-08 · 4:34 · tier official · **unreviewed** (machine-generated)

## Overview

The video defines a flushing method as the rule for when the system posts production consumption automatically. It covers three methods (forward, backward, manual) and pick plus, which adds a warehouse picking step before the chosen rule applies.

It then shows that each component line on a production order can carry its own posting rule, and how routing link codes tie component consumption to a specific routing operation. It closes with a demo of posting manual components and finishing the order, using the production order page and the production journal.

## Key points

- Forward flushing consumes components automatically once the production order is released. It suits predictable components that need no manual journal entry.
- Backward flushing posts consumption later, when output is recorded or the order is finished, so it waits for proof that work happened.
- Manual flushing has the operator review the component line and post actual consumption in the journal. It fits variable quantities or tighter control.
- Pick plus adds a warehouse picking step before the selected flushing rule applies. It does not replace forward, manual or backward flushing.
- Each component line on a production order can have its own flushing method, so forward, backward, manual and pick plus can be mixed on one order.
- A routing link code on a component ties its consumption to a specific routing operation when the codes match. A blank code applies timing to the order more generally.

## Chapters

- [0:00](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=0s) Introduction to flushing methods
- [0:21](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=21s) What is flushing - definition and scope
- [0:44](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=44s) Three flushing methods and pick plus
- [1:42](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=102s) Routing link codes and component timing
- [2:35](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=155s) Reading the production order page
- [3:13](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=193s) Practical benefits of flexible flushing
- [3:46](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=226s) Demo - posting manual components and finishing the order

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Forward flushing | generally available, demoed | [0:55](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=55s) | "Forward is for predictable components. Once the order is released, Business Central can consume them automatically" ([0:55](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=55s)) |
| Backward flushing | status not stated, demoed | [1:13](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=73s) |  |
| Manual flushing | status not stated, demoed | [1:26](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=86s) |  |
| Pick plus | status not stated | [1:26](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=86s) |  |
| Routing link codes on components | status not stated, demoed | [1:54](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=114s) |  |
| Component-level flushing policies | status not stated, demoed | [0:44](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=44s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "production journal" at [0:10](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=10s)
- other "production order" at [0:21](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=21s)
- other "production order routing" at [2:05](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=125s)

## Quotes

- [0:21](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=21s) "A flushing method defines when the system posts production activity automatically."
- [0:44](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=44s) "On a production order, each component line can carry its own posting rule."
- [1:42](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=102s) "It only adds picking before that selected rule applies. That is the main point."
- [2:05](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=125s) "That matching code is what ties component consumption to a specific operation instead of treating the whole order as one timing event."
- [2:45](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=165s) "If a routing link code is blank, the timing applies to the order more generally. If a routing link code is filled in, the"
- [3:25](https://www.youtube.com/watch?v=oIoH3gxc0uk&t=205s) "Predictable components can be automated. Components that need warehouse handling can stay pick controlled."
