---
id: video/KkOr-hX0frQ
type: video
title: How to Migrate Business Central Table Fields from Integer to BigInteger | Version 29 Preview
summary: Changing a Business Central table field from integer to BigInteger in version 29 (preview) is not treated as a destructive change when the extension targets runtime 18.0 or later. The video demos the same change failing in version 28 and deploying in version 29, with compiler warnings for narrowing.
tier: community
language: en
tags:
  - big integer migration
  - integer overflow
  - field type change
  - schema synchronization
  - code cop
  - destructive change
  - table relations
  - data loss prevention
  - al compiler
  - runtime version requirement
  - extension dependency
  - narrowing conversion
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T17:51:48.162Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 2920ab876bf3d73bfe3c8f0dfd5ffb7ba0eb8c08c7033358db05479c32dff33f
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=KkOr-hX0frQ&t=1120s
    title: "Compiler Narrowing Conversion Detection: generally available"
    date: "2026-09-15T05:53:01.000Z"
    commit: null
    t: 1120
    quote: As the GA will announce, I'm hoping the compiler warnings will be there. Address each compiler warning
  - kind: video
    url: https://www.youtube.com/watch?v=KkOr-hX0frQ&t=110s
    title: How to Migrate Business Central Table Fields from Integer to BigInteger | Version 29 Preview
    date: "2026-09-15T05:53:01.000Z"
    commit: null
    t: 110
    quote: Big integral feed migration is a new compiler and a runtime feature in Business Central version 29
  - kind: video
    url: https://www.youtube.com/watch?v=KkOr-hX0frQ&t=124s
    title: How to Migrate Business Central Table Fields from Integer to BigInteger | Version 29 Preview
    date: "2026-09-15T05:53:01.000Z"
    commit: null
    t: 124
    quote: the platform updates the SQL column for you without considering it as a destructive change
  - kind: video
    url: https://www.youtube.com/watch?v=KkOr-hX0frQ&t=204s
    title: How to Migrate Business Central Table Fields from Integer to BigInteger | Version 29 Preview
    date: "2026-09-15T05:53:01.000Z"
    commit: null
    t: 204
    quote: They have a custom transaction log table with an entry number field defined as integer. At some point the entry number gets uncomfortably close
  - kind: video
    url: https://www.youtube.com/watch?v=KkOr-hX0frQ&t=827s
    title: How to Migrate Business Central Table Fields from Integer to BigInteger | Version 29 Preview
    date: "2026-09-15T05:53:01.000Z"
    commit: null
    t: 827
    quote: Whereas in version 29 based on the new changes of shifting from integer to big integer it'll easily update it
  - kind: video
    url: https://www.youtube.com/watch?v=KkOr-hX0frQ&t=848s
    title: How to Migrate Business Central Table Fields from Integer to BigInteger | Version 29 Preview
    date: "2026-09-15T05:53:01.000Z"
    commit: null
    t: 848
    quote: The field entry number has changed the length of data type from 4 to 8 means integer to begin integer. Changing length of data
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: KkOr-hX0frQ
channel: yt-saurav
source_name: Saurav Dhyani
url: https://www.youtube.com/watch?v=KkOr-hX0frQ
published_at: "2026-09-15T05:53:01.000Z"
duration_s: 1413
captions: derived
audience:
  - developer
  - administrator
  - functional consultant
chapters:
  - t: 0
    title: Introduction and Problem Statement
  - t: 97
    title: Big Integer Field Migration Feature Overview
  - t: 184
    title: Business Impact and Real-World Scenarios
  - t: 262
    title: Technical Architecture and Implementation
  - t: 401
    title: Demo Setup and Table Configuration
  - t: 511
    title: Field Type Change and Code Cop Validation
  - t: 689
    title: Publishing and Version Comparison Setup
  - t: 782
    title: "Deployment Comparison: Version 28 vs Version 29"
  - t: 918
    title: Developer Considerations and Migration Strategy
  - t: 1000
    title: Selective Migration Approach and Best Practices
  - t: 1144
    title: Extension Dependency Validation
  - t: 1230
    title: Common Mistakes and Frequently Asked Questions
  - t: 1328
    title: Summary and Recommendations
features:
  - name: Big Integer Field Migration
    status: unclear
    t: 110
    verified: false
    status_source: video
  - name: AL Compiler Validation for Integer to BigInteger Conversion
    status: unclear
    t: 149
    verified: false
    status_source: video
  - name: App Source Cop Warnings for BigInteger Dependencies
    status: unclear
    t: 163
    verified: false
    status_source: video
  - name: Runtime Schema Synchronization for BigInteger
    status: unclear
    t: 370
    verified: false
    status_source: video
  - name: Schema Sync Mode Changes in Version 29
    status: unclear
    t: 787
    verified: false
    status_source: video
  - name: Compiler Narrowing Conversion Detection
    status: ga
    t: 1120
    verified: true
    status_source: video
  - name: No Upgrade Codeunit Required for Integer to BigInteger Migration
    status: unclear
    t: 1284
    verified: false
    status_source: video
  - name: Runtime Version 18.0 Requirement for BigInteger Support
    status: unclear
    t: 1080
    verified: false
    status_source: video
  - name: Irreversibility of BigInteger to Integer Conversion
    status: unclear
    t: 1299
    verified: false
    status_source: video
objects_mentioned:
  - table demo table
  - table vendor table
  - table customer table
  - codeunit get next entry function
  - table entry number
quotes:
  - t: 110
    text: Big integral feed migration is a new compiler and a runtime feature in Business Central version 29
    check: exact
  - t: 124
    text: the platform updates the SQL column for you without considering it as a destructive change
    check: exact
  - t: 204
    text: They have a custom transaction log table with an entry number field defined as integer. At some point the entry number gets uncomfortably close
    check: exact
  - t: 827
    text: Whereas in version 29 based on the new changes of shifting from integer to big integer it'll easily update it
    check: exact
  - t: 848
    text: The field entry number has changed the length of data type from 4 to 8 means integer to begin integer. Changing length of data
    check: exact
---

# How to Migrate Business Central Table Fields from Integer to BigInteger | Version 29 Preview

> Changing a Business Central table field from integer to BigInteger in version 29 (preview) is not treated as a destructive change when the extension targets runtime 18.0 or later. The video demos the same change failing in version 28 and deploying in version 29, with compiler warnings for narrowing.

[Watch on YouTube](https://www.youtube.com/watch?v=KkOr-hX0frQ) · Saurav Dhyani · 2026-09-15 · 23:33 · tier community · **unreviewed** (machine-generated)

## Overview

The video explains a new compiler and runtime feature in Business Central version 29 that lets developers change an existing table field from integer to BigInteger. The platform updates the SQL column from int to bigint without data loss and without flagging a destructive change. The motivating case is a high-volume custom transaction log table whose entry number field is getting close to the integer limit.

The demo changes a field type, shows the code cop validation, and deploys the same change to version 28 and version 29 for comparison. Version 28 fails with a destructive change error, while version 29 deploys and keeps the data. The presenter also covers selective migration, extension dependencies, and common mistakes. Several compiler warnings, for table relations, related fields and calc formulas, were not yet present in the preview at the time of recording (15 September 2026).

## Key points

- The integer to BigInteger change requires the extension to target runtime 18.0 or later; extensions on a lower runtime must update it first.
- No upgrade codeunit is needed: the platform converts the SQL column and handles the data and related records.
- In the demo, version 28 rejects the change as destructive, while version 29 deploys it as is and keeps the data.
- The compiler warns when a BigInteger value may be narrowed or overflow, for example when assigned to an integer field.
- In the preview, warnings for table relations, related fields and calc formulas were missing, and the presenter hopes they arrive by GA. Table relations pointing to integer fields need manual updating.
- Going back from BigInteger to integer is destructive: move data to another table, empty the table, then move the data back.
- Migrate only fields that need 64-bit capacity, and start listing high-volume tables that may need it for your roadmap.

## Chapters

- [0:00](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=0s) Introduction and Problem Statement
- [1:37](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=97s) Big Integer Field Migration Feature Overview
- [3:04](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=184s) Business Impact and Real-World Scenarios
- [4:22](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=262s) Technical Architecture and Implementation
- [6:41](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=401s) Demo Setup and Table Configuration
- [8:31](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=511s) Field Type Change and Code Cop Validation
- [11:29](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=689s) Publishing and Version Comparison Setup
- [13:02](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=782s) Deployment Comparison: Version 28 vs Version 29
- [15:18](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=918s) Developer Considerations and Migration Strategy
- [16:40](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=1000s) Selective Migration Approach and Best Practices
- [19:04](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=1144s) Extension Dependency Validation
- [20:30](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=1230s) Common Mistakes and Frequently Asked Questions
- [22:08](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=1328s) Summary and Recommendations

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Big Integer Field Migration | status not stated, demoed | [1:50](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=110s) |  |
| AL Compiler Validation for Integer to BigInteger Conversion | status not stated, demoed | [2:29](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=149s) |  |
| App Source Cop Warnings for BigInteger Dependencies | status not stated, demoed | [2:43](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=163s) |  |
| Runtime Schema Synchronization for BigInteger | status not stated, demoed | [6:10](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=370s) |  |
| Schema Sync Mode Changes in Version 29 | status not stated, demoed | [13:07](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=787s) |  |
| Compiler Narrowing Conversion Detection | generally available | [18:40](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=1120s) | "As the GA will announce, I'm hoping the compiler warnings will be there. Address each compiler warning" ([18:40](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=1120s)) |
| No Upgrade Codeunit Required for Integer to BigInteger Migration | status not stated | [21:24](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=1284s) |  |
| Runtime Version 18.0 Requirement for BigInteger Support | status not stated, demoed | [18:00](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=1080s) |  |
| Irreversibility of BigInteger to Integer Conversion | status not stated | [21:39](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=1299s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- table "demo table" at [6:58](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=418s)
- table "vendor table" at [7:43](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=463s)
- table "customer table" at [10:49](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=649s)
- codeunit "get next entry function" at [8:58](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=538s)
- table "entry number" at [14:08](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=848s)

## Quotes

- [1:50](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=110s) "Big integral feed migration is a new compiler and a runtime feature in Business Central version 29"
- [2:04](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=124s) "the platform updates the SQL column for you without considering it as a destructive change"
- [3:24](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=204s) "They have a custom transaction log table with an entry number field defined as integer. At some point the entry number gets uncomfortably close"
- [13:47](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=827s) "Whereas in version 29 based on the new changes of shifting from integer to big integer it'll easily update it"
- [14:08](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=848s) "The field entry number has changed the length of data type from 4 to 8 means integer to begin integer. Changing length of data"

## Disclaimers in the video

- [0:13](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=13s) preview: this is a big change. I'm going to take a good amount of time for it
- [9:12](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=552s) preview: as per the documentation the code cop is only available for app source app
- [10:34](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=634s) preview: there is a table relation to an integer with a big integer. So there should be a warning and I'm ...
- [16:06](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=966s) coming-later: hopefully when the version 29GA is announced next month this will be this will be fixed
- [17:17](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=1037s) preview: I'm pretty sure not in the I haven't seen it in the preview release but hopefully in some cumulative update Microsoft may change
- [18:40](https://www.youtube.com/watch?v=KkOr-hX0frQ&t=1120s) coming-later: As the GA will announce, I'm hoping the compiler warnings will be there

Presenters (as heard): Unknown presenter.
