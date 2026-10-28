---
id: video/a3j6JjyWDv0
type: video
title: 20261026 - The Rollback That Wasn’t Transaction & Error Handling
summary: "AL transaction and error handling in Business Central: what rollback does and does not undo, why try functions do not undo writes online, how Commit and the CommitBehavior attribute work, and how to test and review transaction code. Includes patterns for external integration and batch processing."
tier: community
language: en
tags:
  - transaction handling
  - error handling
  - rollback behavior
  - commit semantics
  - try-catch patterns
  - atomicity
  - database writes
  - posting logic
  - try functions
  - commit behavior
  - rollback mechanics
  - external integration
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-28T08:54:26.150Z"
  flags: []
generated:
  at: "2026-10-28T08:54:26.260Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: e55d3344aba6f252720c628e6143a0c84a82c7174ee37e08a98bee558b63f42b
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1674s
    title: "Commit Behavior function attribute: generally available"
    date: "2026-10-27T18:09:15.000Z"
    commit: null
    t: 1674
    quote: Microsoft ships this in base app. Sales post runs the posting lines under commit behavior ignore by default, at least in BC 29.
  - kind: video
    url: https://www.youtube.com/watch?v=a3j6JjyWDv0&t=347s
    title: 20261026 - The Rollback That Wasn’t Transaction & Error Handling
    date: "2026-10-27T18:09:15.000Z"
    commit: null
    t: 347
    quote: What is a transaction itself? Well, a transaction is a group of database changes that succeed together or fail together.
  - kind: video
    url: https://www.youtube.com/watch?v=a3j6JjyWDv0&t=397s
    title: 20261026 - The Rollback That Wasn’t Transaction & Error Handling
    date: "2026-10-27T18:09:15.000Z"
    commit: null
    t: 397
    quote: In AL, the runtime does it for you. When AL code needs a transaction, the runtime starts one. And when the code finishes, the
  - kind: video
    url: https://www.youtube.com/watch?v=a3j6JjyWDv0&t=642s
    title: 20261026 - The Rollback That Wasn’t Transaction & Error Handling
    date: "2026-10-27T18:09:15.000Z"
    commit: null
    t: 642
    quote: It's undoes inserts, modifies, and deletes on normal tables since the last commit. But, not undone. Your variables, temporary records, single instance could you
  - kind: video
    url: https://www.youtube.com/watch?v=a3j6JjyWDv0&t=698s
    title: 20261026 - The Rollback That Wasn’t Transaction & Error Handling
    date: "2026-10-27T18:09:15.000Z"
    commit: null
    t: 698
    quote: Posting preview. So, let's imagine we have general uh posting preview could you need which really post into real tables data.
  - kind: video
    url: https://www.youtube.com/watch?v=a3j6JjyWDv0&t=840s
    title: 20261026 - The Rollback That Wasn’t Transaction & Error Handling
    date: "2026-10-27T18:09:15.000Z"
    commit: null
    t: 840
    quote: The error was caught, but the right inside the try function wasn't undone. That's how it works online.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: a3j6JjyWDv0
channel: yt-areopa
source_name: Areopa webinars
url: https://www.youtube.com/watch?v=a3j6JjyWDv0
published_at: "2026-10-27T18:09:15.000Z"
duration_s: 3597
captions: derived
audience:
  - developer
  - functional consultant
chapters:
  - t: 0
    title: Introduction and Housekeeping
  - t: 240
    title: Speaker Introduction and Session Overview
  - t: 347
    title: Transaction Basics and ACID Properties
  - t: 452
    title: Why Transaction Atomicity Matters
  - t: 555
    title: Transaction Ownership and Commit Behavior
  - t: 642
    title: What Rollback Actually Undoes and Posting Preview
  - t: 749
    title: The Rollback That Wasn't - First Bug Pattern
  - t: 893
    title: Ways to Prevent Rollback in Try Functions
  - t: 955
    title: The Rollback You Didn't Want - Error Handling Patterns
  - t: 1032
    title: The Rollback That Can't Happen - External System Integration
  - t: 1130
    title: Transaction Control Tools and Commit Fundamentals
  - t: 1253
    title: Commit Anti-Patterns and Batch Checkpointing
  - t: 1387
    title: CommitBehavior Attribute and Integration Events
  - t: 1506
    title: CommitBehavior Rules and Scope
  - t: 1674
    title: "Commit Behavior Applications: ignore vs error"
  - t: 1775
    title: "Scoped Undo Button: Error-scoped Code Units"
  - t: 1902
    title: "Code Unit Transactions: Common Mistakes"
  - t: 2090
    title: Wrong Fixes and the Right Approach
  - t: 2173
    title: "Try Functions: When to Use and Not Use"
  - t: 2279
    title: Fixing Try Function Anti-patterns
  - t: 2404
    title: Test Transaction Models
  - t: 2459
    title: Testing rollback and transaction scenarios
  - t: 2552
    title: Error info data type and fix-it actions
  - t: 2713
    title: Collectible errors and error behavior collect
  - t: 2883
    title: "Real-world examples: parallel worker and batch processing"
  - t: 3048
    title: Decision map for transaction patterns
  - t: 3160
    title: Code review checklist for transactions and errors
  - t: 3229
    title: Key Principles and Best Practices Summary
  - t: 3283
    title: "Q&A: Commit Behavior and Default Settings"
  - t: 3395
    title: "Q&A: Try-Catch Behavior in Cloud vs On-Premise"
  - t: 3454
    title: Presentation Availability and Technical Discussion
  - t: 3504
    title: Closing Remarks and Upcoming Events
cautions:
  - kind: preview-disclaimer
    quote: the documentation says this behavior might change in upcoming release
    t: 2235
features:
  - name: Transaction control in AL runtime
    status: unclear
    t: 397
    verified: false
    status_source: video
  - name: Rollback scope limitations
    status: unclear
    t: 642
    verified: false
    status_source: video
  - name: Explicit commit splitting transactions
    status: unclear
    t: 599
    verified: false
    status_source: video
  - name: The rollback that wasn't - try-catch with database writes
    status: unclear
    t: 800
    verified: false
    status_source: video
  - name: Try function error handling
    status: unclear
    t: 790
    verified: false
    status_source: video
  - name: Commit method behavior
    status: unclear
    t: 1181
    verified: false
    status_source: video
  - name: Outbox pattern for external integration
    status: unclear
    t: 1046
    verified: false
    status_source: video
  - name: Idempotent request IDs
    status: unclear
    t: 1077
    verified: false
    status_source: video
  - name: External Business Events post-commit behavior
    status: unclear
    t: 1103
    verified: false
    status_source: video
  - name: Batch checkpoint pattern
    status: unclear
    t: 1327
    verified: false
    status_source: video
  - name: Commit Behavior function attribute
    status: ga
    t: 1591
    verified: true
    status_source: video
  - name: Error-scoped Code Units for clean state transactions
    status: unclear
    t: 1775
    verified: false
    status_source: video
  - name: Try function attribute with return value
    status: unclear
    t: 2173
    verified: false
    status_source: video
  - name: Test transaction models
    status: unclear
    t: 2404
    verified: false
    status_source: video
  - name: Test transaction model - after rollback
    status: unclear
    t: 2415
    verified: false
    status_source: video
  - name: Test transaction model - after commit
    status: unclear
    t: 2437
    verified: false
    status_source: video
  - name: Test transaction model - none
    status: unclear
    t: 2448
    verified: false
    status_source: video
  - name: Error info data type
    status: unclear
    t: 2552
    verified: false
    status_source: video
  - name: Fix-it actions in error dialog
    status: unclear
    t: 2552
    verified: false
    status_source: video
  - name: Error behavior collect
    status: unclear
    t: 2713
    verified: false
    status_source: video
  - name: Collectible errors in error info
    status: unclear
    t: 2750
    verified: false
    status_source: video
  - name: Free show-it feature since BC 24
    status: unclear
    t: 2693
    verified: false
    status_source: video
  - name: Transaction Handling Checklist
    status: unclear
    t: 3127
    verified: false
    status_source: video
  - name: "Try Function Behavior: On-Premise vs Online"
    status: unclear
    t: 3395
    verified: false
    status_source: video
objects_mentioned:
  - codeunit Parallel Worker
  - codeunit Sales post
  - codeunit codeunit.run
quotes:
  - t: 347
    text: What is a transaction itself? Well, a transaction is a group of database changes that succeed together or fail together.
    check: exact
  - t: 397
    text: In AL, the runtime does it for you. When AL code needs a transaction, the runtime starts one. And when the code finishes, the
    check: exact
  - t: 642
    text: It's undoes inserts, modifies, and deletes on normal tables since the last commit. But, not undone. Your variables, temporary records, single instance could you
    check: exact
  - t: 698
    text: Posting preview. So, let's imagine we have general uh posting preview could you need which really post into real tables data.
    check: exact
  - t: 840
    text: The error was caught, but the right inside the try function wasn't undone. That's how it works online.
    check: exact
---

# 20261026 - The Rollback That Wasn’t Transaction & Error Handling

> AL transaction and error handling in Business Central: what rollback does and does not undo, why try functions do not undo writes online, how Commit and the CommitBehavior attribute work, and how to test and review transaction code. Includes patterns for external integration and batch processing.

[Watch on YouTube](https://www.youtube.com/watch?v=a3j6JjyWDv0) · Areopa webinars · 2026-10-27 · 59:57 · tier community · reviewed (checked by Opus)

## Overview

The session explains how the AL runtime manages database transactions. A write transaction starts on the first insert, modify or delete and commits when code ends without error. Rollback undoes only writes to normal tables since the last commit. Variables, temporary records, single instance codeunit state, HTTP calls, emails and telemetry are not undone. The speaker uses this to explain posting preview, which relies on temporary data surviving an intentional rollback.

The talk then covers the common failure patterns and the tools to avoid them. Try functions catch errors but do not undo writes; online allows writes in try methods, while on-premises blocks them by default. Explicit commits make earlier work final. CommitBehavior can ignore or error on commits in called code. Error-scoped codeunits used with a return value act as a scoped undo. The talk also covers test transaction models, ErrorInfo with fix-it actions, collectible errors, an outbox pattern for external systems, a batch checkpoint pattern, and an eight-item code review checklist.

## Key points

- Rollback undoes inserts, modifies and deletes on normal tables since the last commit. It does not undo variables, temporary records, single instance codeunit state, HTTP calls, sent emails or telemetry.
- Posting preview uses this on purpose: it posts into real tables while subscribers copy entries into temporary tables, then raises an intentional error caught by if Codeunit.Run. The real posting rolls back but the temporary copies survive.
- A try function catches the error but does not undo writes made inside it. Online allows writes in try methods; on-premises blocks them by default (an NST setting that can be changed on-premises but not online). The documentation says this behavior might change in an upcoming release.
- A try function only forms a boundary when its return value is used. A bare call is an ordinary call and the error propagates.
- Commit makes everything since the last commit final, including callers' and subscribers' writes. Each commit should have a comment saying why, and the state after it must be recoverable.
- CommitBehavior on a procedure or event can ignore commits or raise an error on them. The stricter rule wins in parent-child combinations, and the attribute cannot be conditional. In BC 29, Sales-Post runs line posting under CommitBehavior Ignore by default, and posting preview uses Error.
- Running a codeunit with its Boolean return value (if Codeunit.Run) works as a scoped undo, but only from a clean state. Commit first if a write transaction is open; the runtime enforces this, the compiler does not.

## Chapters

- [0:00](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=0s) Introduction and Housekeeping
- [4:00](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=240s) Speaker Introduction and Session Overview
- [5:47](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=347s) Transaction Basics and ACID Properties
- [7:32](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=452s) Why Transaction Atomicity Matters
- [9:15](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=555s) Transaction Ownership and Commit Behavior
- [10:42](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=642s) What Rollback Actually Undoes and Posting Preview
- [12:29](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=749s) The Rollback That Wasn't - First Bug Pattern
- [14:53](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=893s) Ways to Prevent Rollback in Try Functions
- [15:55](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=955s) The Rollback You Didn't Want - Error Handling Patterns
- [17:12](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1032s) The Rollback That Can't Happen - External System Integration
- [18:50](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1130s) Transaction Control Tools and Commit Fundamentals
- [20:53](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1253s) Commit Anti-Patterns and Batch Checkpointing
- [23:07](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1387s) CommitBehavior Attribute and Integration Events
- [25:06](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1506s) CommitBehavior Rules and Scope
- [27:54](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1674s) Commit Behavior Applications: ignore vs error
- [29:35](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1775s) Scoped Undo Button: Error-scoped Code Units
- [31:42](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1902s) Code Unit Transactions: Common Mistakes
- [34:50](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2090s) Wrong Fixes and the Right Approach
- [36:13](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2173s) Try Functions: When to Use and Not Use
- [37:59](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2279s) Fixing Try Function Anti-patterns
- [40:04](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2404s) Test Transaction Models
- [40:59](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2459s) Testing rollback and transaction scenarios
- [42:32](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2552s) Error info data type and fix-it actions
- [45:13](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2713s) Collectible errors and error behavior collect
- [48:03](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2883s) Real-world examples: parallel worker and batch processing
- [50:48](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=3048s) Decision map for transaction patterns
- [52:40](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=3160s) Code review checklist for transactions and errors
- [53:49](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=3229s) Key Principles and Best Practices Summary
- [54:43](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=3283s) Q&A: Commit Behavior and Default Settings
- [56:35](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=3395s) Q&A: Try-Catch Behavior in Cloud vs On-Premise
- [57:34](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=3454s) Presentation Availability and Technical Discussion
- [58:24](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=3504s) Closing Remarks and Upcoming Events

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Transaction control in AL runtime | status not stated | [6:37](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=397s) |  |
| Rollback scope limitations | status not stated | [10:42](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=642s) |  |
| Explicit commit splitting transactions | status not stated | [9:59](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=599s) |  |
| The rollback that wasn't - try-catch with database writes | status not stated, demoed | [13:20](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=800s) |  |
| Try function error handling | status not stated, demoed | [13:10](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=790s) |  |
| Commit method behavior | status not stated, demoed | [19:41](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1181s) |  |
| Outbox pattern for external integration | status not stated | [17:26](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1046s) |  |
| Idempotent request IDs | status not stated | [17:57](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1077s) |  |
| External Business Events post-commit behavior | status not stated | [18:23](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1103s) |  |
| Batch checkpoint pattern | status not stated, demoed | [22:07](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1327s) |  |
| Commit Behavior function attribute | generally available, demoed | [26:31](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1591s) | "Microsoft ships this in base app. Sales post runs the posting lines under commit behavior ignore by default, at least in BC 29." ([27:54](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1674s)) |
| Error-scoped Code Units for clean state transactions | status not stated, demoed | [29:35](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1775s) |  |
| Try function attribute with return value | status not stated, demoed | [36:13](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2173s) |  |
| Test transaction models | status not stated | [40:04](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2404s) |  |
| Test transaction model - after rollback | status not stated, demoed | [40:15](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2415s) |  |
| Test transaction model - after commit | status not stated, demoed | [40:37](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2437s) |  |
| Test transaction model - none | status not stated, demoed | [40:48](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2448s) |  |
| Error info data type | status not stated, demoed | [42:32](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2552s) |  |
| Fix-it actions in error dialog | status not stated, demoed | [42:32](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2552s) |  |
| Error behavior collect | status not stated, demoed | [45:13](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2713s) |  |
| Collectible errors in error info | status not stated, demoed | [45:50](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2750s) |  |
| Free show-it feature since BC 24 | status not stated, demoed | [44:53](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2693s) |  |
| Transaction Handling Checklist | status not stated | [52:07](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=3127s) |  |
| Try Function Behavior: On-Premise vs Online | status not stated | [56:35](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=3395s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- codeunit "Parallel Worker" at [5:35](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=335s)
- codeunit "Sales post" at [27:54](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=1674s)
- codeunit "codeunit.run" at [56:20](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=3380s)

Not found in BC28-30: codeunit "Parallel Worker", codeunit "Sales post", codeunit "codeunit.run".

## Quotes

- [5:47](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=347s) "What is a transaction itself? Well, a transaction is a group of database changes that succeed together or fail together."
- [6:37](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=397s) "In AL, the runtime does it for you. When AL code needs a transaction, the runtime starts one. And when the code finishes, the"
- [10:42](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=642s) "It's undoes inserts, modifies, and deletes on normal tables since the last commit. But, not undone. Your variables, temporary records, single instance could you"
- [11:38](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=698s) "Posting preview. So, let's imagine we have general uh posting preview could you need which really post into real tables data."
- [14:00](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=840s) "The error was caught, but the right inside the try function wasn't undone. That's how it works online."

## Disclaimers in the video

- [4:56](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=296s) other: Microsoft MVP since 2025
- [14:14](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=854s) other: On premises, the seller blocks any rights inside try methods by default.
- [37:15](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=2235s) subject-to-change: the documentation says this behavior might change in upcoming release
- [55:28](https://www.youtube.com/watch?v=a3j6JjyWDv0&t=3328s) other: I think it will be bad because it's not how publisher works by default

Presenters (as heard): Luke, Volodymyr Vernitsky, Vlado.
