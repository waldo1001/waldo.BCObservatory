---
id: video/H_PHi8pe53w
type: video
title: Business Central 29 0 Default Implementations in AL Interfaces
summary: Default implementations for AL interfaces in Business Central 29, covered while 29 was in public preview. Shows method bodies in interfaces, the required pending attribute, and a staged way to add interface methods without breaking existing implementations.
tier: community
language: en
tags:
  - al interfaces
  - default implementation
  - required pending
  - method bodies
  - interface evolution
  - breaking changes
  - migration path
  - interface contract
  - analyzer rule
  - reusable extensions
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T00:17:53.935Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 59edf3b6bb24e35e67d1833faa80847311b8b3e3133a7c765fd57b6bc4dceab9
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=H_PHi8pe53w&t=12s
    title: Business Central 29 0 Default Implementations in AL Interfaces
    date: "2026-09-21T10:00:25.000Z"
    commit: null
    t: 12
    quote: with business 29.0 O introduces a new approach which is called as default implementation for AL interface
  - kind: video
    url: https://www.youtube.com/watch?v=H_PHi8pe53w&t=213s
    title: Business Central 29 0 Default Implementations in AL Interfaces
    date: "2026-09-21T10:00:25.000Z"
    commit: null
    t: 213
    quote: The problem is that the new method changes the contract of the interface and every existing implementation either in your extension or any dependent
  - kind: video
    url: https://www.youtube.com/watch?v=H_PHi8pe53w&t=266s
    title: Business Central 29 0 Default Implementations in AL Interfaces
    date: "2026-09-21T10:00:25.000Z"
    commit: null
    t: 266
    quote: allowing developer to add default method bodies to interface so that existing implementation can continue working as is
  - kind: video
    url: https://www.youtube.com/watch?v=H_PHi8pe53w&t=564s
    title: Business Central 29 0 Default Implementations in AL Interfaces
    date: "2026-09-21T10:00:25.000Z"
    commit: null
    t: 564
    quote: The idea is to introduce a method is completely way first while signaling that implementation are expected to eventually provide the method themsel
  - kind: video
    url: https://www.youtube.com/watch?v=H_PHi8pe53w&t=912s
    title: Business Central 29 0 Default Implementations in AL Interfaces
    date: "2026-09-21T10:00:25.000Z"
    commit: null
    t: 912
    quote: required pending provides a path for introducing method that should eventually become required
links:
  learn: []
  objects: []
  features:
    - feature/573352
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: H_PHi8pe53w
channel: yt-saurav
source_name: Saurav Dhyani
url: https://www.youtube.com/watch?v=H_PHi8pe53w
published_at: "2026-09-21T10:00:25.000Z"
duration_s: 992
captions: derived
audience:
  - developer
  - partner
  - functional consultant
chapters:
  - t: 0
    title: Introduction to the problem with evolving AL interfaces
  - t: 79
    title: The problem with interface evolution and breaking changes
  - t: 254
    title: Overview of default implementation feature in version 29
  - t: 322
    title: How default implementation works in AL interfaces
  - t: 443
    title: Custom implementations and fallback to default behavior
  - t: 532
    title: Introduction to required pending attribute
  - t: 624
    title: Implementing required pending with examples and warnings
  - t: 772
    title: Use cases and best practices for default implementation
  - t: 888
    title: Key takeaways and current status
  - t: 943
    title: Closing remarks and call to action
features:
  - name: Default implementation for AL interfaces
    status: ga
    t: 254
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573352"
  - name: Required pending attribute for AL interface methods
    status: ga
    t: 532
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573352"
  - name: Staged interface evolution mechanism
    status: ga
    t: 564
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573352"
objects_mentioned: []
quotes:
  - t: 12
    text: with business 29.0 O introduces a new approach which is called as default implementation for AL interface
    check: exact
  - t: 213
    text: The problem is that the new method changes the contract of the interface and every existing implementation either in your extension or any dependent
    check: exact
  - t: 266
    text: allowing developer to add default method bodies to interface so that existing implementation can continue working as is
    check: exact
  - t: 564
    text: The idea is to introduce a method is completely way first while signaling that implementation are expected to eventually provide the method themsel
    check: exact
  - t: 912
    text: required pending provides a path for introducing method that should eventually become required
    check: exact
---

# Business Central 29 0 Default Implementations in AL Interfaces

> Default implementations for AL interfaces in Business Central 29, covered while 29 was in public preview. Shows method bodies in interfaces, the required pending attribute, and a staged way to add interface methods without breaking existing implementations.

[Watch on YouTube](https://www.youtube.com/watch?v=H_PHi8pe53w) · Saurav Dhyani · 2026-09-21 · 16:32 · tier community · **unreviewed** (machine-generated)

## Overview

The video explains why adding a method to an AL interface changes the interface contract and breaks every existing implementation, in the same extension or in dependent extensions. It then shows how Business Central 29 addresses this by allowing default method bodies in interfaces, so existing implementations keep working.

It also demonstrates the required pending attribute, which signals that implementations should eventually provide their own method. The attribute takes a version deadline, a tag and a reason. The video closes with use cases and best practices, and notes that Business Central 29 was in public preview at the time, so final behavior should be validated once GA is announced.

## Key points

- Adding a method to an AL interface changes its contract and breaks existing implementations, including those in dependent extensions.
- In Business Central 29, interface methods can have default method bodies, so existing implementations continue to work unchanged.
- Implementations can supply their own version of the method, otherwise the default behavior is used.
- The required pending attribute marks a method that implementations should eventually implement. It needs a version deadline, a tag and a reason.
- Staged evolution: introduce the method with a default implementation, provide default behavior, then signal the future requirement with required pending.
- Use a default only when a sensible fallback exists, not to hide a requirement. Treat it as a migration mechanism, not a permanent solution.
- Business Central 29 was in public preview when the video was made, so validate the final behavior at GA.

## Chapters

- [0:00](https://www.youtube.com/watch?v=H_PHi8pe53w&t=0s) Introduction to the problem with evolving AL interfaces
- [1:19](https://www.youtube.com/watch?v=H_PHi8pe53w&t=79s) The problem with interface evolution and breaking changes
- [4:14](https://www.youtube.com/watch?v=H_PHi8pe53w&t=254s) Overview of default implementation feature in version 29
- [5:22](https://www.youtube.com/watch?v=H_PHi8pe53w&t=322s) How default implementation works in AL interfaces
- [7:23](https://www.youtube.com/watch?v=H_PHi8pe53w&t=443s) Custom implementations and fallback to default behavior
- [8:52](https://www.youtube.com/watch?v=H_PHi8pe53w&t=532s) Introduction to required pending attribute
- [10:24](https://www.youtube.com/watch?v=H_PHi8pe53w&t=624s) Implementing required pending with examples and warnings
- [12:52](https://www.youtube.com/watch?v=H_PHi8pe53w&t=772s) Use cases and best practices for default implementation
- [14:48](https://www.youtube.com/watch?v=H_PHi8pe53w&t=888s) Key takeaways and current status
- [15:43](https://www.youtube.com/watch?v=H_PHi8pe53w&t=943s) Closing remarks and call to action

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Default implementation for AL interfaces | generally available (roadmap [573352](../features/573352.md)), demoed | [4:14](https://www.youtube.com/watch?v=H_PHi8pe53w&t=254s) |  |
| Required pending attribute for AL interface methods | generally available (roadmap [573352](../features/573352.md)), demoed | [8:52](https://www.youtube.com/watch?v=H_PHi8pe53w&t=532s) |  |
| Staged interface evolution mechanism | generally available (roadmap [573352](../features/573352.md)), demoed | [9:24](https://www.youtube.com/watch?v=H_PHi8pe53w&t=564s) |  |

A status with a roadmap link comes from the Microsoft 365 roadmap feature this part of the video covers (matched by Haiku; links Opus dropped are not used); other statuses need a status word in the video itself.

## Quotes

- [0:12](https://www.youtube.com/watch?v=H_PHi8pe53w&t=12s) "with business 29.0 O introduces a new approach which is called as default implementation for AL interface"
- [3:33](https://www.youtube.com/watch?v=H_PHi8pe53w&t=213s) "The problem is that the new method changes the contract of the interface and every existing implementation either in your extension or any dependent"
- [4:26](https://www.youtube.com/watch?v=H_PHi8pe53w&t=266s) "allowing developer to add default method bodies to interface so that existing implementation can continue working as is"
- [9:24](https://www.youtube.com/watch?v=H_PHi8pe53w&t=564s) "The idea is to introduce a method is completely way first while signaling that implementation are expected to eventually provide the method themsel"
- [15:12](https://www.youtube.com/watch?v=H_PHi8pe53w&t=912s) "required pending provides a path for introducing method that should eventually become required"

## Disclaimers in the video

- [15:43](https://www.youtube.com/watch?v=H_PHi8pe53w&t=943s) preview: Business Central 29 is currently in public preview. So you might you make sure to validate the final behavior once the GA is announced.

Presenters (as heard): Sar Dhani.
