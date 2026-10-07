---
id: video/TH70oJI4Ae0
type: video
title: "Business Central 29: How Many Fields Can a Table Really Have?"
summary: Field limits for Business Central 29 tables and table extensions, tested in AL. Covers the compiler warning that starts around 293 to 300 fields, the SQL Server limits of 500 columns and 8060 bytes per record, and the change that stores extension fields in the same SQL table as the base table.
tier: community
language: en
tags:
  - table extensions
  - field limits
  - sql server columns
  - data types
  - platform fields
  - record size
  - compiler warnings
  - al development
  - table field limits
  - record size constraints
  - data types and bytes
  - sql server limits
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
  input_hash: cc2326ca4a36f9256b952a4c9f0aa4b5148919c483fdd62152a78445a16594fc
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=TH70oJI4Ae0&t=129s
    title: "Business Central 29: How Many Fields Can a Table Really Have?"
    date: "2026-09-22T10:00:31.000Z"
    commit: null
    t: 129
    quote: a new data model where fields from al table and its table extension are stored in same sql server table
  - kind: video
    url: https://www.youtube.com/watch?v=TH70oJI4Ae0&t=229s
    title: "Business Central 29: How Many Fields Can a Table Really Have?"
    date: "2026-09-22T10:00:31.000Z"
    commit: null
    t: 229
    quote: Microsoft says that with new table extension data model all field from AL table are stored in the same database table and it makes
  - kind: video
    url: https://www.youtube.com/watch?v=TH70oJI4Ae0&t=284s
    title: "Business Central 29: How Many Fields Can a Table Really Have?"
    date: "2026-09-22T10:00:31.000Z"
    commit: null
    t: 284
    quote: I have read some numbers 300 somebody said 400 somebody said 500. Now this is where I wanted to be careful. I've seen the
  - kind: video
    url: https://www.youtube.com/watch?v=TH70oJI4Ae0&t=284s
    title: "Business Central 29: How Many Fields Can a Table Really Have?"
    date: "2026-09-22T10:00:31.000Z"
    commit: null
    t: 284
    quote: I don't want to tell you that 300 is the definitive maximum limit because I haven't found Microsoft documentation saying that 300 is the
  - kind: video
    url: https://www.youtube.com/watch?v=TH70oJI4Ae0&t=334s
    title: "Business Central 29: How Many Fields Can a Table Really Have?"
    date: "2026-09-22T10:00:31.000Z"
    commit: null
    t: 334
    quote: the maximum number of records or fields in a record is 500. The same documentation also says about the record size.
links:
  learn: []
  objects: []
  features:
    - feature/573332
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: TH70oJI4Ae0
channel: yt-saurav
source_name: Saurav Dhyani
url: https://www.youtube.com/watch?v=TH70oJI4Ae0
published_at: "2026-09-22T10:00:31.000Z"
duration_s: 2024
captions: derived
audience:
  - developer
  - functional consultant
  - administrator
chapters:
  - t: 0
    title: Introduction and context about field limits
  - t: 51
    title: Overview of Business Central 29 changes
  - t: 78
    title: Detect table approaching SQL column limit warning
  - t: 189
    title: Table extension storage model change
  - t: 270
    title: Investigating field limit numbers
  - t: 377
    title: Microsoft documentation and SQL limitations
  - t: 556
    title: Testing with field types and platform fields
  - t: 815
    title: Publishing and data type implications
  - t: 1087
    title: Testing warning thresholds and field counts
  - t: 1362
    title: Companion table behavior and iterative testing
  - t: 1679
    title: Testing SQL limit and schema best practices
  - t: 1884
    title: Summary and conclusions
features:
  - name: Detect table approaching SQL column limit warning
    status: unclear
    t: 78
    verified: false
    status_source: video
  - name: New table extension data model
    status: unclear
    t: 129
    verified: false
    status_source: video
  - name: 300 field warning threshold
    status: unclear
    t: 496
    verified: false
    status_source: video
  - name: SQL Server column and record size limits
    status: unclear
    t: 377
    verified: false
    status_source: video
  - name: Platform system fields
    status: unclear
    t: 582
    verified: false
    status_source: video
  - name: Record size byte limit
    status: unclear
    t: 912
    verified: false
    status_source: video
  - name: Data type byte consumption
    status: unclear
    t: 948
    verified: false
    status_source: video
  - name: Decimal field maximum calculation
    status: unclear
    t: 1031
    verified: false
    status_source: video
  - name: Version 29 table extension storage change
    status: unclear
    t: 1466
    verified: false
    status_source: video
  - name: Field count warning at 293 fields
    status: unclear
    t: 1746
    verified: false
    status_source: video
  - name: Base table and extension table storage consolidation
    status: ga
    t: 1974
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573332"
objects_mentioned:
  - table SDH max field
  - other field 470
  - other field 469
  - other field 465
  - other row version
quotes:
  - t: 129
    text: a new data model where fields from al table and its table extension are stored in same sql server table
    check: fuzzy
  - t: 229
    text: Microsoft says that with new table extension data model all field from AL table are stored in the same database table and it makes
    check: exact
  - t: 284
    text: I have read some numbers 300 somebody said 400 somebody said 500. Now this is where I wanted to be careful. I've seen the
    check: exact
  - t: 284
    text: I don't want to tell you that 300 is the definitive maximum limit because I haven't found Microsoft documentation saying that 300 is the
    check: snapped
  - t: 334
    text: the maximum number of records or fields in a record is 500. The same documentation also says about the record size.
    check: exact
---

# Business Central 29: How Many Fields Can a Table Really Have?

> Field limits for Business Central 29 tables and table extensions, tested in AL. Covers the compiler warning that starts around 293 to 300 fields, the SQL Server limits of 500 columns and 8060 bytes per record, and the change that stores extension fields in the same SQL table as the base table.

[Watch on YouTube](https://www.youtube.com/watch?v=TH70oJI4Ae0) · Saurav Dhyani · 2026-09-22 · 33:44 · tier community · **unreviewed** (machine-generated)

## Overview

The video looks at how many fields a table can have in Business Central 29. In version 28 and earlier, a table extension created a separate companion table in SQL Server. From version 29, base table and extension fields are stored in the same SQL table, so the limits apply to the combined set of fields.

The presenter tests the new compiler warning for tables approaching the SQL column limit, then compares it with Microsoft documentation. He finds that the warning is a threshold, not the real limit. The real limits are 500 fields per record and 8060 bytes per record, and the data types you choose decide which one you hit first.

## Key points

- From version 29, table extension fields are stored in the same SQL Server table as the base table fields. Before that, a companion table was created, so field limits now apply to the combined fields.
- The compiler warning appears at about 293 fields, which with the 6 to 7 platform fields is around 300. The presenter says 300 is a warning threshold, not a documented maximum, and the build still compiles.
- In the demo the warning stopped showing at around 499 fields.
- SQL Server allows at most 500 fields per record and 8060 bytes per record. Record size can stop you before you reach 500 fields.
- A decimal takes 17 bytes and an integer takes 4. The presenter calculates a maximum of about 474 decimal fields in one table. Variable-length text fields count 26 bytes each in the record.
- Business Central adds 6 platform fields to every table: system ID, created at, created by, modified at, modified by and row version. They count toward the limits.
- The presenter says that when the limit is exceeded, the error appears at publish time, not at compile time. Choose data types with this in mind.

## Chapters

- [0:00](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=0s) Introduction and context about field limits
- [0:51](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=51s) Overview of Business Central 29 changes
- [1:18](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=78s) Detect table approaching SQL column limit warning
- [3:09](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=189s) Table extension storage model change
- [4:30](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=270s) Investigating field limit numbers
- [6:17](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=377s) Microsoft documentation and SQL limitations
- [9:16](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=556s) Testing with field types and platform fields
- [13:35](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=815s) Publishing and data type implications
- [18:07](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=1087s) Testing warning thresholds and field counts
- [22:42](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=1362s) Companion table behavior and iterative testing
- [27:59](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=1679s) Testing SQL limit and schema best practices
- [31:24](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=1884s) Summary and conclusions

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Detect table approaching SQL column limit warning | status not stated, demoed | [1:18](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=78s) |  |
| New table extension data model | status not stated | [2:09](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=129s) |  |
| 300 field warning threshold | status not stated, demoed | [8:16](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=496s) |  |
| SQL Server column and record size limits | status not stated, demoed | [6:17](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=377s) |  |
| Platform system fields | status not stated, demoed | [9:42](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=582s) |  |
| Record size byte limit | status not stated, demoed | [15:12](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=912s) |  |
| Data type byte consumption | status not stated, demoed | [15:48](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=948s) |  |
| Decimal field maximum calculation | status not stated, demoed | [17:11](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=1031s) |  |
| Version 29 table extension storage change | status not stated, demoed | [24:26](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=1466s) |  |
| Field count warning at 293 fields | status not stated, demoed | [29:06](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=1746s) |  |
| Base table and extension table storage consolidation | generally available (roadmap [573332](../features/573332.md)) | [32:54](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=1974s) |  |

A status with a roadmap link comes from the Microsoft 365 roadmap feature this part of the video covers (matched by Haiku; links Opus dropped are not used); other statuses need a status word in the video itself.

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- table "SDH max field" at [8:28](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=508s)
- other "field 470" at [20:09](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=1209s)
- other "field 469" at [21:05](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=1265s)
- other "field 465" at [25:38](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=1538s)
- other "row version" at [19:22](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=1162s)

## Quotes

- [2:09](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=129s) "a new data model where fields from al table and its table extension are stored in same sql server table"
- [3:49](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=229s) "Microsoft says that with new table extension data model all field from AL table are stored in the same database table and it makes"
- [4:44](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=284s) "I have read some numbers 300 somebody said 400 somebody said 500. Now this is where I wanted to be careful. I've seen the"
- [4:44](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=284s) "I don't want to tell you that 300 is the definitive maximum limit because I haven't found Microsoft documentation saying that 300 is the"
- [5:34](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=334s) "the maximum number of records or fields in a record is 500. The same documentation also says about the record size."

## Disclaimers in the video

- [0:13](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=13s) other: Business Central 29 changed how table extension fields are stored which we have discussed in an earlier video
- [24:26](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=1466s) subject-to-change: starting version 29, you'll have to keep that in mind of thinking about the data type that you're choosing
- [30:49](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=1849s) other: early warning necessary means that you should rethink about the fields that you are adding
- [32:13](https://www.youtube.com/watch?v=TH70oJI4Ae0&t=1933s) other: I still need to understand uh what happens and at what point it kind of allows me to publish that extension

Presenters (as heard): Sad Dhani.
