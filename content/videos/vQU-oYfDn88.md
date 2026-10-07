---
id: video/vQU-oYfDn88
type: video
title: "What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)"
summary: Moving tables and fields between AppSource extensions in AL without writing upgrade code, in the 2025 release wave 1. It covers the ObsoleteState pending move with MoveTo/MoveFrom properties, the move down, move up and lateral scenarios, propagate dependencies, deployment order, and AppSource validation.
tier: official
language: en
tags:
  - table movement
  - field movement
  - extension refactoring
  - appsource extensions
  - obsolation
  - move down
  - move up
  - lateral move
  - schema migration
  - extension dependencies
  - deployment
  - breaking changes
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T22:58:00.382Z"
  flags: []
generated:
  at: "2026-10-07T22:58:00.423Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 8898467f6e3802b2ba0aec94beee3b74339476403383dcae931c8f739de4bdcc
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=vQU-oYfDn88&t=66s
    title: "What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)"
    date: "2025-04-01T15:01:13.000Z"
    commit: null
    t: 66
    quote: in uh the previous release uh we added the ability in the platform uh for AL developers to move tables and fields between extensions
  - kind: video
    url: https://www.youtube.com/watch?v=vQU-oYfDn88&t=77s
    title: "What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)"
    date: "2025-04-01T15:01:13.000Z"
    commit: null
    t: 77
    quote: now we also extend that capability to publishers uh to make it much more efficient for them to refactor their apps source extensions
  - kind: video
    url: https://www.youtube.com/watch?v=vQU-oYfDn88&t=77s
    title: "What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)"
    date: "2025-04-01T15:01:13.000Z"
    commit: null
    t: 77
    quote: Uh that was used in but also only allowed for the base application in uh 2024 release wave uh 1.
  - kind: video
    url: https://www.youtube.com/watch?v=vQU-oYfDn88&t=102s
    title: "What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)"
    date: "2025-04-01T15:01:13.000Z"
    commit: null
    t: 102
    quote: you can use it for app source extensions uh targeting the runtime from uh version 150 and higher uh you can also use
  - kind: video
    url: https://www.youtube.com/watch?v=vQU-oYfDn88&t=119s
    title: "What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)"
    date: "2025-04-01T15:01:13.000Z"
    commit: null
    t: 119
    quote: Uh per tenant extensions are not uh supported for this. Uh in in cloud you can use the for sync uh and upgrade code
  - kind: video
    url: https://www.youtube.com/watch?v=vQU-oYfDn88&t=725s
    title: "What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)"
    date: "2025-04-01T15:01:13.000Z"
    commit: null
    t: 725
    quote: The rule of thumb to ensure success when you are doing a move is that the source extension in a move must be deployed
  - kind: video
    url: https://www.youtube.com/watch?v=vQU-oYfDn88&t=796s
    title: "What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)"
    date: "2025-04-01T15:01:13.000Z"
    commit: null
    t: 796
    quote: In version two of our monolith app where we are moving them out, we use the obsolution properties to set them as moved.
  - kind: video
    url: https://www.youtube.com/watch?v=vQU-oYfDn88&t=840s
    title: "What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)"
    date: "2025-04-01T15:01:13.000Z"
    commit: null
    t: 840
    quote: you don't need to make new extensions to move tables and fields to them. You can use existing extensions as uh destinations as long
  - kind: video
    url: https://www.youtube.com/watch?v=vQU-oYfDn88&t=851s
    title: "What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)"
    date: "2025-04-01T15:01:13.000Z"
    commit: null
    t: 851
    quote: takeover from a destination extension is blocked if the source extension is moving to a different destination
  - kind: video
    url: https://www.youtube.com/watch?v=vQU-oYfDn88&t=1040s
    title: "What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)"
    date: "2025-04-01T15:01:13.000Z"
    commit: null
    t: 1040
    quote: The process is quite straightforward for submitting to appsource because it handles most of the validation automatically.
  - kind: video
    url: https://www.youtube.com/watch?v=vQU-oYfDn88&t=1168s
    title: "What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)"
    date: "2025-04-01T15:01:13.000Z"
    commit: null
    t: 1168
    quote: Submit the source extension first and then the destination. If you are moving down to a library extension, you can put both of them
  - kind: video
    url: https://www.youtube.com/watch?v=vQU-oYfDn88&t=1178s
    title: "What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)"
    date: "2025-04-01T15:01:13.000Z"
    commit: null
    t: 1178
    quote: Finally, consider first submitting the source and destination in preview. This way customers can upgrade both of them when both are available
  - kind: video
    url: https://www.youtube.com/watch?v=vQU-oYfDn88&t=1265s
    title: "What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)"
    date: "2025-04-01T15:01:13.000Z"
    commit: null
    t: 1265
    quote: If we are moving a field from a table extension to a table extension, then there is no data transfer happening. It is just
  - kind: video
    url: https://www.youtube.com/watch?v=vQU-oYfDn88&t=1318s
    title: "What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)"
    date: "2025-04-01T15:01:13.000Z"
    commit: null
    t: 1318
    quote: moving tables and fields is a feature that empowers the L developer to refactor their extensions to modular, more maintainable parts
  - kind: video
    url: https://www.youtube.com/watch?v=vQU-oYfDn88&t=1343s
    title: "What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)"
    date: "2025-04-01T15:01:13.000Z"
    commit: null
    t: 1343
    quote: such changes u can still have some downstream impact on uh any uh partner that are building on top of your solution
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: vQU-oYfDn88
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=vQU-oYfDn88
published_at: "2025-04-01T15:01:13.000Z"
duration_s: 1368
captions: full
audience:
  - developer
  - partner
  - administrator
chapters:
  - t: 0
    title: Introduction and Feature Overview
  - t: 91
    title: Supported Extensions and Scope
  - t: 156
    title: How Moving Tables and Fields Works
  - t: 219
    title: Three Movement Scenarios
  - t: 343
    title: What Can Be Moved - Tables and Fields
  - t: 433
    title: Source and Destination Code Requirements
  - t: 544
    title: Validation and Matching Requirements
  - t: 653
    title: Project File Dependencies and Propagation
  - t: 782
    title: Ownership transfer during table moves
  - t: 826
    title: Constraints and validation for moves
  - t: 893
    title: Moving dependent objects and dependencies
  - t: 988
    title: AppSource submission and validation process
  - t: 1126
    title: Pre-submission best practices and local validation setup
  - t: 1225
    title: Performance characteristics of moves and summary
features:
  - name: Move Tables and Fields Between Extensions
    status: unclear
    t: 5
    verified: false
    status_source: video
  - name: Obsolation Property with Pending Move State
    status: unclear
    t: 447
    verified: false
    status_source: video
  - name: MoveTo and MoveFrom Properties
    status: unclear
    t: 457
    verified: false
    status_source: video
  - name: Move Down Scenario
    status: unclear
    t: 219
    verified: false
    status_source: video
  - name: Move Up Scenario
    status: unclear
    t: 276
    verified: false
    status_source: video
  - name: Lateral Move Scenario
    status: unclear
    t: 306
    verified: false
    status_source: video
  - name: Field Movement Constraints
    status: unclear
    t: 343
    verified: false
    status_source: video
  - name: Propagate Dependencies Property
    status: unclear
    t: 653
    verified: false
    status_source: video
  - name: Movement Happens During Sync Stage
    status: unclear
    t: 706
    verified: false
    status_source: video
  - name: VS Code Deployment for Development Testing
    status: unclear
    t: 739
    verified: false
    status_source: video
  - name: Reusing Existing Extensions as Move Destinations
    status: unclear
    t: 840
    verified: false
    status_source: video
  - name: Takeover Validation - Single Destination Only
    status: unclear
    t: 851
    verified: false
    status_source: video
  - name: Fallback to New Table Creation if Source Not Published
    status: unclear
    t: 873
    verified: false
    status_source: video
  - name: Moving Dependent Objects and Dependencies
    status: unclear
    t: 893
    verified: false
    status_source: video
  - name: AppSource move validation
    status: unclear
    t: 988
    verified: false
    status_source: video
  - name: Local move validation through AppSource scope analyzer
    status: unclear
    t: 1126
    verified: false
    status_source: video
  - name: Table and field move performance optimization
    status: unclear
    t: 1225
    verified: false
    status_source: video
objects_mentioned:
  - table Sales
  - table Inventory
  - table food items
  - page food items
  - enum my enum
quotes:
  - t: 66
    text: in uh the previous release uh we added the ability in the platform uh for AL developers to move tables and fields between extensions
    check: exact
  - t: 77
    text: now we also extend that capability to publishers uh to make it much more efficient for them to refactor their apps source extensions
    check: exact
  - t: 77
    text: Uh that was used in but also only allowed for the base application in uh 2024 release wave uh 1.
    check: exact
  - t: 102
    text: you can use it for app source extensions uh targeting the runtime from uh version 150 and higher uh you can also use
    check: fuzzy
  - t: 119
    text: Uh per tenant extensions are not uh supported for this. Uh in in cloud you can use the for sync uh and upgrade code
    check: exact
  - t: 725
    text: The rule of thumb to ensure success when you are doing a move is that the source extension in a move must be deployed
    check: exact
  - t: 796
    text: In version two of our monolith app where we are moving them out, we use the obsolution properties to set them as moved.
    check: exact
  - t: 840
    text: you don't need to make new extensions to move tables and fields to them. You can use existing extensions as uh destinations as long
    check: exact
  - t: 851
    text: takeover from a destination extension is blocked if the source extension is moving to a different destination
    check: exact
  - t: 1040
    text: The process is quite straightforward for submitting to appsource because it handles most of the validation automatically.
    check: exact
  - t: 1168
    text: Submit the source extension first and then the destination. If you are moving down to a library extension, you can put both of them
    check: exact
  - t: 1178
    text: Finally, consider first submitting the source and destination in preview. This way customers can upgrade both of them when both are available
    check: exact
  - t: 1265
    text: If we are moving a field from a table extension to a table extension, then there is no data transfer happening. It is just
    check: exact
  - t: 1318
    text: moving tables and fields is a feature that empowers the L developer to refactor their extensions to modular, more maintainable parts
    check: exact
  - t: 1343
    text: such changes u can still have some downstream impact on uh any uh partner that are building on top of your solution
    check: exact
---

# What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)

> Moving tables and fields between AppSource extensions in AL without writing upgrade code, in the 2025 release wave 1. It covers the ObsoleteState pending move with MoveTo/MoveFrom properties, the move down, move up and lateral scenarios, propagate dependencies, deployment order, and AppSource validation.

[Watch on YouTube](https://www.youtube.com/watch?v=vQU-oYfDn88) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-04-01 · 22:48 · tier official · reviewed (checked by Opus)

## Overview

The video explains that the platform capability to move tables and fields between extensions, added in the previous release, is now extended to publishers so they can refactor AppSource extensions. It applies to AppSource extensions targeting runtime 150 and higher, and to on-premise extensions for Business Central version 26.0 and higher. Per-tenant extensions are not supported.

It walks through how a move works: the source extension marks objects with the pending move obsolete state and a MoveTo property, and the destination uses MoveFrom. It then covers the three scenarios (move down, move up, lateral), constraints on fields, propagation of dependencies, how moves happen during sync, and how AppSource validates submissions. It closes with local validation using the AppSource scope analyzer and the performance characteristics of moves.

## Key points

- Source extension sets ObsoleteState to pending move plus MoveTo with the destination app ID; the destination uses MoveFrom with the source app ID. Both IDs must match and the schema must stay the same apart from non-breaking changes such as added fields.
- Move down (destination is a dependency of the source) and move up (destination depends on the source) keep the dependency relationship. A lateral move, with no dependency relationship, is a breaking change.
- Set propagate dependencies to true in the monolith version where the moves occur, for downward moves to direct dependencies, so dependent apps keep access to the moved tables. Moving up or laterally is a breaking change.
- Fields can move from a base table to a table extension, or between table extensions on the same base table. Moving from a table extension back to the base table is not supported.
- Moves happen during the sync stage. The source extension must be deployed before the destination. If the source is not published, new tables or fields are created instead of moving.
- Only the declared destination can take over a moved object. AppSource validation checks this, so submit the source extension first unless the destination is a library extension.
- Field moves between extensions rename the column, base-to-extension field moves use AL data transfer, and table moves use a database rename. Local validation uses the AppSource scope analyzer.

## Chapters

- [0:00](https://www.youtube.com/watch?v=vQU-oYfDn88&t=0s) Introduction and Feature Overview
- [1:31](https://www.youtube.com/watch?v=vQU-oYfDn88&t=91s) Supported Extensions and Scope
- [2:36](https://www.youtube.com/watch?v=vQU-oYfDn88&t=156s) How Moving Tables and Fields Works
- [3:39](https://www.youtube.com/watch?v=vQU-oYfDn88&t=219s) Three Movement Scenarios
- [5:43](https://www.youtube.com/watch?v=vQU-oYfDn88&t=343s) What Can Be Moved - Tables and Fields
- [7:13](https://www.youtube.com/watch?v=vQU-oYfDn88&t=433s) Source and Destination Code Requirements
- [9:04](https://www.youtube.com/watch?v=vQU-oYfDn88&t=544s) Validation and Matching Requirements
- [10:53](https://www.youtube.com/watch?v=vQU-oYfDn88&t=653s) Project File Dependencies and Propagation
- [13:02](https://www.youtube.com/watch?v=vQU-oYfDn88&t=782s) Ownership transfer during table moves
- [13:46](https://www.youtube.com/watch?v=vQU-oYfDn88&t=826s) Constraints and validation for moves
- [14:53](https://www.youtube.com/watch?v=vQU-oYfDn88&t=893s) Moving dependent objects and dependencies
- [16:28](https://www.youtube.com/watch?v=vQU-oYfDn88&t=988s) AppSource submission and validation process
- [18:46](https://www.youtube.com/watch?v=vQU-oYfDn88&t=1126s) Pre-submission best practices and local validation setup
- [20:25](https://www.youtube.com/watch?v=vQU-oYfDn88&t=1225s) Performance characteristics of moves and summary

## Features

| Feature | Status | At |
|---|---|---|
| Move Tables and Fields Between Extensions | status not stated, demoed | [0:05](https://www.youtube.com/watch?v=vQU-oYfDn88&t=5s) |
| Obsolation Property with Pending Move State | status not stated, demoed | [7:27](https://www.youtube.com/watch?v=vQU-oYfDn88&t=447s) |
| MoveTo and MoveFrom Properties | status not stated, demoed | [7:37](https://www.youtube.com/watch?v=vQU-oYfDn88&t=457s) |
| Move Down Scenario | status not stated, demoed | [3:39](https://www.youtube.com/watch?v=vQU-oYfDn88&t=219s) |
| Move Up Scenario | status not stated, demoed | [4:36](https://www.youtube.com/watch?v=vQU-oYfDn88&t=276s) |
| Lateral Move Scenario | status not stated, demoed | [5:06](https://www.youtube.com/watch?v=vQU-oYfDn88&t=306s) |
| Field Movement Constraints | status not stated | [5:43](https://www.youtube.com/watch?v=vQU-oYfDn88&t=343s) |
| Propagate Dependencies Property | status not stated, demoed | [10:53](https://www.youtube.com/watch?v=vQU-oYfDn88&t=653s) |
| Movement Happens During Sync Stage | status not stated, demoed | [11:46](https://www.youtube.com/watch?v=vQU-oYfDn88&t=706s) |
| VS Code Deployment for Development Testing | status not stated | [12:19](https://www.youtube.com/watch?v=vQU-oYfDn88&t=739s) |
| Reusing Existing Extensions as Move Destinations | status not stated | [14:00](https://www.youtube.com/watch?v=vQU-oYfDn88&t=840s) |
| Takeover Validation - Single Destination Only | status not stated | [14:11](https://www.youtube.com/watch?v=vQU-oYfDn88&t=851s) |
| Fallback to New Table Creation if Source Not Published | status not stated | [14:33](https://www.youtube.com/watch?v=vQU-oYfDn88&t=873s) |
| Moving Dependent Objects and Dependencies | status not stated, demoed | [14:53](https://www.youtube.com/watch?v=vQU-oYfDn88&t=893s) |
| AppSource move validation | status not stated, demoed | [16:28](https://www.youtube.com/watch?v=vQU-oYfDn88&t=988s) |
| Local move validation through AppSource scope analyzer | status not stated, demoed | [18:46](https://www.youtube.com/watch?v=vQU-oYfDn88&t=1126s) |
| Table and field move performance optimization | status not stated, demoed | [20:25](https://www.youtube.com/watch?v=vQU-oYfDn88&t=1225s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- table "Sales" at [4:05](https://www.youtube.com/watch?v=vQU-oYfDn88&t=245s)
- table "Inventory" at [4:05](https://www.youtube.com/watch?v=vQU-oYfDn88&t=245s)
- table "food items" at [15:09](https://www.youtube.com/watch?v=vQU-oYfDn88&t=909s)
- page "food items" at [15:19](https://www.youtube.com/watch?v=vQU-oYfDn88&t=919s)
- enum "my enum" at [16:52](https://www.youtube.com/watch?v=vQU-oYfDn88&t=1012s)

Not found in BC28-30: table "Sales", table "Inventory", table "food items", page "food items", enum "my enum".

## Quotes

- [1:06](https://www.youtube.com/watch?v=vQU-oYfDn88&t=66s) "in uh the previous release uh we added the ability in the platform uh for AL developers to move tables and fields between extensions"
- [1:17](https://www.youtube.com/watch?v=vQU-oYfDn88&t=77s) "now we also extend that capability to publishers uh to make it much more efficient for them to refactor their apps source extensions"
- [1:17](https://www.youtube.com/watch?v=vQU-oYfDn88&t=77s) "Uh that was used in but also only allowed for the base application in uh 2024 release wave uh 1."
- [1:42](https://www.youtube.com/watch?v=vQU-oYfDn88&t=102s) "you can use it for app source extensions uh targeting the runtime from uh version 150 and higher uh you can also use"
- [1:59](https://www.youtube.com/watch?v=vQU-oYfDn88&t=119s) "Uh per tenant extensions are not uh supported for this. Uh in in cloud you can use the for sync uh and upgrade code"
- [12:05](https://www.youtube.com/watch?v=vQU-oYfDn88&t=725s) "The rule of thumb to ensure success when you are doing a move is that the source extension in a move must be deployed"
- [13:16](https://www.youtube.com/watch?v=vQU-oYfDn88&t=796s) "In version two of our monolith app where we are moving them out, we use the obsolution properties to set them as moved."
- [14:00](https://www.youtube.com/watch?v=vQU-oYfDn88&t=840s) "you don't need to make new extensions to move tables and fields to them. You can use existing extensions as uh destinations as long"
- [14:11](https://www.youtube.com/watch?v=vQU-oYfDn88&t=851s) "takeover from a destination extension is blocked if the source extension is moving to a different destination"
- [17:20](https://www.youtube.com/watch?v=vQU-oYfDn88&t=1040s) "The process is quite straightforward for submitting to appsource because it handles most of the validation automatically."
- [19:28](https://www.youtube.com/watch?v=vQU-oYfDn88&t=1168s) "Submit the source extension first and then the destination. If you are moving down to a library extension, you can put both of them"
- [19:38](https://www.youtube.com/watch?v=vQU-oYfDn88&t=1178s) "Finally, consider first submitting the source and destination in preview. This way customers can upgrade both of them when both are available"
- [21:05](https://www.youtube.com/watch?v=vQU-oYfDn88&t=1265s) "If we are moving a field from a table extension to a table extension, then there is no data transfer happening. It is just"
- [21:58](https://www.youtube.com/watch?v=vQU-oYfDn88&t=1318s) "moving tables and fields is a feature that empowers the L developer to refactor their extensions to modular, more maintainable parts"
- [22:23](https://www.youtube.com/watch?v=vQU-oYfDn88&t=1343s) "such changes u can still have some downstream impact on uh any uh partner that are building on top of your solution"

## Disclaimers in the video

- [1:59](https://www.youtube.com/watch?v=vQU-oYfDn88&t=119s) not-in-this-release: Per tenant extensions are not supported for this
- [19:38](https://www.youtube.com/watch?v=vQU-oYfDn88&t=1178s) coming-later: consider first submitting the source and destination in preview

Presenters (as heard): Peter Boring, Satias Draonis.
