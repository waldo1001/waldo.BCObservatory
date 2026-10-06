---
id: video/1xdpUmeun-s
type: video
title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
summary: "AL runtime performance work in Business Central, explained by an AL runtime engineer: data transfer, set load fields, read isolation, tri-state locking, and the real behavior of lock table and set current key. Also covers early ideas for dynamic queries and bulk events."
tier: official
language: en
tags:
  - al runtime
  - performance optimization
  - data transfer
  - set load fields
  - read isolation
  - nst
  - call stacks
  - c# compilation
  - leaky abstractions
  - locking semantics
  - dynamic queries
  - bulk events
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T18:21:15.553Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 07b47824140104780b4d25aed6aa6226a7356eae483dc15713e0e930e96bec78
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=1895s
    title: "Bulk events for delete and modify: announced"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 1895
    quote: this is not next release or the one after this is like
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=22s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 22
    quote: I'm mess I work on the AL runtime in one of the server teams.
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=341s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 341
    quote: So, so uh lately we have done a lot of investment in uh in to improve performance um and more specifically uh performance of
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=456s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 456
    quote: want to use like the super performant things you kind of begin saying like well the abstraction is this but if we
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=625s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 625
    quote: 17 million rows which is a fairly large amount of data from a real customer
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=719s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 719
    quote: set load fields requires manual uptake in your AL code. Um, and and we have seen quite a bit of success there.
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=743s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 743
    quote: set load fields is automatically being applied if you do API calls on API pages and that was actually where we saw the biggest
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=801s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 801
    quote: Nowadays, I think you know removing one join is still great and removing an amount of fields, right?
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=954s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 954
    quote: They kind of wanted this in between which is generally recommitted. So we wanted to give them that ability and then we just also
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=1265s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 1265
    quote: Lock table first and foremost it doesn't actually do anything in the moment like it doesn't go to SQL and takes a big lock
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=1336s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 1336
    quote: What we actually do is we say um you need to order the data like the resulting data in the order of whatever field
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=1562s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 1562
    quote: One of the problems with queries as they are right now is that you kind of have to write them as an AL object
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=1580s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 1580
    quote: It's a design time decision. You can't can't change them at one time.
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=1611s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 1611
    quote: I want to read from this base table, join in this other table and then maybe join in a third table but I only
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=1804s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 1804
    quote: if you have that then we actually say well then we can't use the bulk statement. We can't just do one big delete. Then
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=1895s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 1895
    quote: this is not next release or the one after this is like
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=1940s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 1940
    quote: when you we do for example um upgrade code units that often touch a lot of stuff. They're doing things row by row is
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=2048s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 2048
    quote: figure out like is this something that gets executed you know 10 times a day or 10,000 times a day or maybe millions of
  - kind: video
    url: https://www.youtube.com/watch?v=1xdpUmeun-s&t=2132s
    title: "Business Central Under the Hood episode 12: Evolving AL for Performance"
    date: "2025-12-05T15:00:05.000Z"
    commit: null
    t: 2132
    quote: Dictionaries is way better you know asically it's uh it's login versus constant time
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: 1xdpUmeun-s
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=1xdpUmeun-s
published_at: "2025-12-05T15:00:05.000Z"
duration_s: 2190
captions: full
audience:
  - developer
  - administrator
  - functional consultant
chapters:
  - t: 0
    title: Introduction to AL runtime and NST architecture
  - t: 159
    title: "How AL code executes: call stacks and C# transpilation"
  - t: 244
    title: Built-in functions and the JIT compilation pipeline
  - t: 341
    title: Performance investment strategy and leaky abstractions
  - t: 436
    title: Data transfer feature for bulk operations
  - t: 640
    title: Set load fields for partial records and API optimization
  - t: 743
    title: Read isolation and locking semantics improvements
  - t: 885
    title: Tri-state locking and real-world impact
  - t: 1122
    title: Detecting locking issues, myths about lock table behavior
  - t: 1307
    title: Set current key behavior and temporary tables implementation
  - t: 1506
    title: "Future features: dynamic queries and query builder concepts"
  - t: 1750
    title: Bulk events, set-based operations, and row-by-row performance
  - t: 1973
    title: Trigger performance optimization and hot path identification
  - t: 2143
    title: Performance tools and closing remarks
features:
  - name: Data transfer
    status: unclear
    t: 489
    verified: false
    status_source: video
  - name: Set load fields (partial records)
    status: unclear
    t: 690
    verified: false
    status_source: video
  - name: Read isolation
    status: unclear
    t: 838
    verified: false
    status_source: video
  - name: Tri-state locking
    status: unclear
    t: 1022
    verified: false
    status_source: video
  - name: AL runtime performance investments
    status: unclear
    t: 341
    verified: false
    status_source: video
  - name: Many table extensions to one optimization
    status: unclear
    t: 1166
    verified: false
    status_source: video
  - name: Lock table function behavior
    status: unclear
    t: 1255
    verified: false
    status_source: video
  - name: Set current key function behavior
    status: unclear
    t: 1321
    verified: false
    status_source: video
  - name: Temporary tables
    status: unclear
    t: 1446
    verified: false
    status_source: video
  - name: Dynamic queries at runtime
    status: unclear
    t: 1539
    verified: false
    status_source: video
  - name: Query builder pattern for queries
    status: unclear
    t: 1641
    verified: false
    status_source: video
  - name: AI-powered query generation via MCP server
    status: unclear
    t: 1680
    verified: false
    status_source: video
  - name: Bulk events for delete and modify
    status: announced
    t: 1762
    verified: true
    status_source: video
  - name: Move towards set-based operations
    status: unclear
    t: 1817
    verified: false
    status_source: video
  - name: Sampling profiler tool
    status: unclear
    t: 2082
    verified: false
    status_source: video
  - name: Dictionary data type for optimization
    status: unclear
    t: 2115
    verified: false
    status_source: video
objects_mentioned:
  - other AL set range
  - other AVL tree
  - other delete all
  - other modify all
  - other on after modify trigger
  - other on before modify
  - other on before delete
  - other on after get current record
  - other on after get record
  - other dictionary data type
  - other set load fields
quotes:
  - t: 22
    text: I'm mess I work on the AL runtime in one of the server teams.
    check: exact
  - t: 341
    text: So, so uh lately we have done a lot of investment in uh in to improve performance um and more specifically uh performance of
    check: exact
  - t: 456
    text: want to use like the super performant things you kind of begin saying like well the abstraction is this but if we
    check: fuzzy
  - t: 625
    text: 17 million rows which is a fairly large amount of data from a real customer
    check: fuzzy
  - t: 719
    text: set load fields requires manual uptake in your AL code. Um, and and we have seen quite a bit of success there.
    check: exact
  - t: 743
    text: set load fields is automatically being applied if you do API calls on API pages and that was actually where we saw the biggest
    check: exact
  - t: 801
    text: Nowadays, I think you know removing one join is still great and removing an amount of fields, right?
    check: exact
  - t: 954
    text: They kind of wanted this in between which is generally recommitted. So we wanted to give them that ability and then we just also
    check: exact
  - t: 1265
    text: Lock table first and foremost it doesn't actually do anything in the moment like it doesn't go to SQL and takes a big lock
    check: exact
  - t: 1336
    text: What we actually do is we say um you need to order the data like the resulting data in the order of whatever field
    check: exact
  - t: 1562
    text: One of the problems with queries as they are right now is that you kind of have to write them as an AL object
    check: exact
  - t: 1580
    text: It's a design time decision. You can't can't change them at one time.
    check: exact
  - t: 1611
    text: I want to read from this base table, join in this other table and then maybe join in a third table but I only
    check: exact
  - t: 1804
    text: if you have that then we actually say well then we can't use the bulk statement. We can't just do one big delete. Then
    check: exact
  - t: 1895
    text: this is not next release or the one after this is like
    check: exact
  - t: 1940
    text: when you we do for example um upgrade code units that often touch a lot of stuff. They're doing things row by row is
    check: exact
  - t: 2048
    text: figure out like is this something that gets executed you know 10 times a day or 10,000 times a day or maybe millions of
    check: exact
  - t: 2132
    text: Dictionaries is way better you know asically it's uh it's login versus constant time
    check: exact
---

# Business Central Under the Hood episode 12: Evolving AL for Performance

> AL runtime performance work in Business Central, explained by an AL runtime engineer: data transfer, set load fields, read isolation, tri-state locking, and the real behavior of lock table and set current key. Also covers early ideas for dynamic queries and bulk events.

[Watch on YouTube](https://www.youtube.com/watch?v=1xdpUmeun-s) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-12-05 · 36:30 · tier official · **unreviewed** (machine-generated)

## Overview

Episode 12 of Business Central Under the Hood, published 2025-12-05 (37 minutes). A member of the AL runtime team describes how AL runs on the NST through C# compilation, and how the team chooses performance investments, including where abstractions leak.

The episode goes through features that need code changes (data transfer, set load fields, read isolation) and changes that need none (many table extensions to one, tri-state locking now on by default). It clarifies that lock table and set current key do not do what their names suggest. It ends with early ideas: dynamic queries, a query builder pattern, bulk delete and modify events, and a move toward set-based operations. The speaker says none of these are in code and gives no ship dates.

## Key points

- Data transfer moves large datasets in bulk using SQL directly. It needs manual code changes, works only against SQL (not temporary tables or CRM), and matters mostly for large tables.
- Set load fields loads only chosen fields. It is applied automatically for API calls on API pages, which was where the biggest gains were seen. Elsewhere it needs manual adoption. Its value dropped after many table extensions were consolidated into one.
- Read isolation lets code choose read uncommitted, read committed, repeatable read or update lock. Tri-state locking adds a read committed state after a modification instead of update lock. It is now enabled by default and can be disabled with lock table.
- Lock table does not take a table lock in SQL at that moment. It makes later reads use update lock hints and affects the data cache.
- Set current key does not pick an index. It orders the result by the given fields, which can lead SQL to choose a different index or sort afterwards.
- Temporary tables are in-memory AVL trees inside NST process memory, and memory grows with data volume. A dictionary gives constant-time lookup instead of logarithmic, but only suits lookup cases.
- Bulk delete and modify events are announced. Today the runtime falls back to row-by-row when row triggers exist. Use the sampling profiler to find hot paths, for example upgrade codeunits running row by row.

## Chapters

- [0:00](https://www.youtube.com/watch?v=1xdpUmeun-s&t=0s) Introduction to AL runtime and NST architecture
- [2:39](https://www.youtube.com/watch?v=1xdpUmeun-s&t=159s) How AL code executes: call stacks and C# transpilation
- [4:04](https://www.youtube.com/watch?v=1xdpUmeun-s&t=244s) Built-in functions and the JIT compilation pipeline
- [5:41](https://www.youtube.com/watch?v=1xdpUmeun-s&t=341s) Performance investment strategy and leaky abstractions
- [7:16](https://www.youtube.com/watch?v=1xdpUmeun-s&t=436s) Data transfer feature for bulk operations
- [10:40](https://www.youtube.com/watch?v=1xdpUmeun-s&t=640s) Set load fields for partial records and API optimization
- [12:23](https://www.youtube.com/watch?v=1xdpUmeun-s&t=743s) Read isolation and locking semantics improvements
- [14:45](https://www.youtube.com/watch?v=1xdpUmeun-s&t=885s) Tri-state locking and real-world impact
- [18:42](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1122s) Detecting locking issues, myths about lock table behavior
- [21:47](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1307s) Set current key behavior and temporary tables implementation
- [25:06](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1506s) Future features: dynamic queries and query builder concepts
- [29:10](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1750s) Bulk events, set-based operations, and row-by-row performance
- [32:53](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1973s) Trigger performance optimization and hot path identification
- [35:43](https://www.youtube.com/watch?v=1xdpUmeun-s&t=2143s) Performance tools and closing remarks

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Data transfer | status not stated | [8:09](https://www.youtube.com/watch?v=1xdpUmeun-s&t=489s) |  |
| Set load fields (partial records) | status not stated | [11:30](https://www.youtube.com/watch?v=1xdpUmeun-s&t=690s) |  |
| Read isolation | status not stated | [13:58](https://www.youtube.com/watch?v=1xdpUmeun-s&t=838s) |  |
| Tri-state locking | status not stated | [17:02](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1022s) |  |
| AL runtime performance investments | status not stated | [5:41](https://www.youtube.com/watch?v=1xdpUmeun-s&t=341s) |  |
| Many table extensions to one optimization | status not stated | [19:26](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1166s) |  |
| Lock table function behavior | status not stated | [20:55](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1255s) |  |
| Set current key function behavior | status not stated | [22:01](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1321s) |  |
| Temporary tables | status not stated | [24:06](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1446s) |  |
| Dynamic queries at runtime | status not stated | [25:39](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1539s) |  |
| Query builder pattern for queries | status not stated | [27:21](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1641s) |  |
| AI-powered query generation via MCP server | status not stated | [28:00](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1680s) |  |
| Bulk events for delete and modify | announced | [29:22](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1762s) | "this is not next release or the one after this is like" ([31:35](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1895s)) |
| Move towards set-based operations | status not stated | [30:17](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1817s) |  |
| Sampling profiler tool | status not stated | [34:42](https://www.youtube.com/watch?v=1xdpUmeun-s&t=2082s) |  |
| Dictionary data type for optimization | status not stated | [35:15](https://www.youtube.com/watch?v=1xdpUmeun-s&t=2115s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- other "AL set range" at [4:40](https://www.youtube.com/watch?v=1xdpUmeun-s&t=280s)
- other "AVL tree" at [24:27](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1467s)
- other "delete all" at [29:22](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1762s)
- other "modify all" at [29:22](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1762s)
- other "on after modify trigger" at [29:50](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1790s)
- other "on before modify" at [29:50](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1790s)
- other "on before delete" at [29:50](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1790s)
- other "on after get current record" at [33:04](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1984s)
- other "on after get record" at [33:04](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1984s)
- other "dictionary data type" at [35:15](https://www.youtube.com/watch?v=1xdpUmeun-s&t=2115s)
- other "set load fields" at [35:53](https://www.youtube.com/watch?v=1xdpUmeun-s&t=2153s)

## Quotes

- [0:22](https://www.youtube.com/watch?v=1xdpUmeun-s&t=22s) "I'm mess I work on the AL runtime in one of the server teams."
- [5:41](https://www.youtube.com/watch?v=1xdpUmeun-s&t=341s) "So, so uh lately we have done a lot of investment in uh in to improve performance um and more specifically uh performance of"
- [7:36](https://www.youtube.com/watch?v=1xdpUmeun-s&t=456s) "want to use like the super performant things you kind of begin saying like well the abstraction is this but if we"
- [10:25](https://www.youtube.com/watch?v=1xdpUmeun-s&t=625s) "17 million rows which is a fairly large amount of data from a real customer"
- [11:59](https://www.youtube.com/watch?v=1xdpUmeun-s&t=719s) "set load fields requires manual uptake in your AL code. Um, and and we have seen quite a bit of success there."
- [12:23](https://www.youtube.com/watch?v=1xdpUmeun-s&t=743s) "set load fields is automatically being applied if you do API calls on API pages and that was actually where we saw the biggest"
- [13:21](https://www.youtube.com/watch?v=1xdpUmeun-s&t=801s) "Nowadays, I think you know removing one join is still great and removing an amount of fields, right?"
- [15:54](https://www.youtube.com/watch?v=1xdpUmeun-s&t=954s) "They kind of wanted this in between which is generally recommitted. So we wanted to give them that ability and then we just also"
- [21:05](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1265s) "Lock table first and foremost it doesn't actually do anything in the moment like it doesn't go to SQL and takes a big lock"
- [22:16](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1336s) "What we actually do is we say um you need to order the data like the resulting data in the order of whatever field"
- [26:02](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1562s) "One of the problems with queries as they are right now is that you kind of have to write them as an AL object"
- [26:20](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1580s) "It's a design time decision. You can't can't change them at one time."
- [26:51](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1611s) "I want to read from this base table, join in this other table and then maybe join in a third table but I only"
- [30:04](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1804s) "if you have that then we actually say well then we can't use the bulk statement. We can't just do one big delete. Then"
- [31:35](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1895s) "this is not next release or the one after this is like"
- [32:20](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1940s) "when you we do for example um upgrade code units that often touch a lot of stuff. They're doing things row by row is"
- [34:08](https://www.youtube.com/watch?v=1xdpUmeun-s&t=2048s) "figure out like is this something that gets executed you know 10 times a day or 10,000 times a day or maybe millions of"
- [35:32](https://www.youtube.com/watch?v=1xdpUmeun-s&t=2132s) "Dictionaries is way better you know asically it's uh it's login versus constant time"

## Disclaimers in the video

- [14:10](https://www.youtube.com/watch?v=1xdpUmeun-s&t=850s) subject-to-change: we actually want to do tri-state locking first but then we swapped it around and did read isolation first
- [25:16](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1516s) other: we don't we don't say anything when it's going to be shipped
- [25:39](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1539s) coming-later: none of these are actually in code. This is idea level like this is one step before
- [28:50](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1730s) preview: we might experiment with it there first
- [31:35](https://www.youtube.com/watch?v=1xdpUmeun-s&t=1895s) coming-later: this is not next release or the one after this is like

Presenters (as heard): Mass, Matt.
