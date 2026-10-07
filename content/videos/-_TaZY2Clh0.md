---
id: video/-_TaZY2Clh0
type: video
title: "Concurrency in Business Central: Parallel processes without deadlocks and timeouts"
summary: Business Central concurrency session covering SQL Server lock types, isolation levels, lock escalation at about 5,000 locks, and deadlocks, with demos of loops, chunking, SEMAPHORE locks, number sequences and auto increment in a cinema booking case. Lock timeout defaults are 10 seconds on-premise and 35 seconds in SaaS.
tier: community
language: en
tags:
  - concurrency
  - locking
  - database
  - isolation levels
  - lock types
  - lock compatibility
  - deadlocks
  - timeouts
  - sql server
  - lock escalation
  - intent locks
  - update locks
system: platform
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
  input_hash: 1f88f588f0d6c3059f86ac1c90cff8c58d536bc06eae7a6818170e74780b43b7
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=-_TaZY2Clh0&t=381s
    title: "Concurrency in Business Central: Parallel processes without deadlocks and timeouts"
    date: "2026-10-01T05:38:50.000Z"
    commit: null
    t: 381
    quote: the first session that's locking a table and holding it can hold it well indefinitely long not indefinitely because it's limited only by the
  - kind: video
    url: https://www.youtube.com/watch?v=-_TaZY2Clh0&t=434s
    title: "Concurrency in Business Central: Parallel processes without deadlocks and timeouts"
    date: "2026-10-01T05:38:50.000Z"
    commit: null
    t: 434
    quote: 10 seconds by default on on premise environments and 35 seconds in SAS, right? As the log timeout settings in business central.
  - kind: video
    url: https://www.youtube.com/watch?v=-_TaZY2Clh0&t=599s
    title: "Concurrency in Business Central: Parallel processes without deadlocks and timeouts"
    date: "2026-10-01T05:38:50.000Z"
    commit: null
    t: 599
    quote: when we run our code on premise and that's uh quite an important differentiation on premises with a default uh configuration of SQL server
  - kind: video
    url: https://www.youtube.com/watch?v=-_TaZY2Clh0&t=778s
    title: "Concurrency in Business Central: Parallel processes without deadlocks and timeouts"
    date: "2026-10-01T05:38:50.000Z"
    commit: null
    t: 778
    quote: this is the key to understanding the concurrency uh how database engine decides uh if record can be accessed or any uh resource can
  - kind: video
    url: https://www.youtube.com/watch?v=-_TaZY2Clh0&t=816s
    title: "Concurrency in Business Central: Parallel processes without deadlocks and timeouts"
    date: "2026-10-01T05:38:50.000Z"
    commit: null
    t: 816
    quote: when the database engine decides if this access concurrent access can be granted uh it basically does something like this
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: -_TaZY2Clh0
channel: yt-mibuso
source_name: mibuso.com / BC TechDays
url: https://www.youtube.com/watch?v=-_TaZY2Clh0
published_at: "2026-10-01T05:38:50.000Z"
duration_s: 5755
captions: derived
audience:
  - developer
  - administrator
  - functional consultant
chapters:
  - t: 0
    title: Introduction and session overview
  - t: 187
    title: Locks and basic definitions
  - t: 291
    title: Lock isolation levels and lock status
  - t: 480
    title: Lock types and isolation levels
  - t: 643
    title: Lock compatibility matrix
  - t: 906
    title: "Lock sequence: intent locks, pages, and records"
  - t: 1047
    title: Lock escalation and table-level locking
  - t: 1204
    title: Lock table misconception and obsolescence
  - t: 1275
    title: "Types of deadlocks: circular and conversion deadlocks"
  - t: 1492
    title: Demo setup and lock observation tools
  - t: 1806
    title: "Scenarios: sequential modification and lock escalation"
  - t: 1932
    title: Read committed isolation, lock timeout, and SaaS behavior
  - t: 2108
    title: Repeatable read lock escalation and takeaways
  - t: 2345
    title: Looping vs bulk operations and chunking strategy
  - t: 2639
    title: The if-not-is-empty pattern myth
  - t: 2783
    title: Guard rails, escalation scenarios, and classic deadlock patterns
  - t: 3071
    title: Repeatable read deadlock conflicts and lock contention
  - t: 3302
    title: Cinema ticket booking extension use case
  - t: 3440
    title: SEMAPHORE lock approach and number sequence alternative
  - t: 3743
    title: Auto increment approach and sequential validation
  - t: 4039
    title: Number sequence validation and locking by entity code
  - t: 4395
    title: Table scan problems and primary key redesign
  - t: 4680
    title: Lock strategy optimization and lock placement
  - t: 4851
    title: "Q&A: lock thresholds, chunk sizing, and IsEmpty diagnostics"
  - t: 5049
    title: Sequential GUIDs, number series, and buffered insert problems
  - t: 5320
    title: Caching, scale-out scenarios, and session identification
  - t: 5461
    title: Avoiding excessive commits and optimistic locking approaches
features:
  - name: Lock timeout settings
    status: unclear
    t: 401
    verified: false
    status_source: video
  - name: Read uncommitted isolation level
    status: unclear
    t: 511
    verified: false
    status_source: video
  - name: Read committed isolation level
    status: unclear
    t: 556
    verified: false
    status_source: video
  - name: Repeatable read isolation level
    status: unclear
    t: 643
    verified: false
    status_source: video
  - name: Update lock isolation level
    status: unclear
    t: 657
    verified: false
    status_source: video
  - name: Exclusive lock
    status: unclear
    t: 671
    verified: false
    status_source: video
  - name: Lock compatibility matrix
    status: unclear
    t: 729
    verified: false
    status_source: video
  - name: Intent lock hierarchy
    status: unclear
    t: 906
    verified: false
    status_source: video
  - name: Lock escalation threshold
    status: unclear
    t: 1082
    verified: false
    status_source: video
  - name: Lock table statement
    status: unclear
    t: 1204
    verified: false
    status_source: video
  - name: Circular deadlock detection
    status: unclear
    t: 1291
    verified: false
    status_source: video
  - name: Lock conversion deadlock
    status: unclear
    t: 1413
    verified: false
    status_source: video
  - name: Transaction retry monitoring interface
    status: unclear
    t: 1506
    verified: false
    status_source: video
  - name: Lock hierarchy and lock types
    status: unclear
    t: 1673
    verified: false
    status_source: video
  - name: Lock timeout with concurrent operations
    status: unclear
    t: 1849
    verified: false
    status_source: video
  - name: Read committed snapshot isolation
    status: unclear
    t: 2011
    verified: false
    status_source: video
  - name: Repeatable read lock escalation
    status: unclear
    t: 2137
    verified: false
    status_source: video
  - name: Modify in loop pattern
    status: unclear
    t: 2345
    verified: false
    status_source: video
  - name: SaaS vs on-premise concurrency behavior differences
    status: unclear
    t: 2011
    verified: false
    status_source: video
  - name: Record-level modify in loops
    status: unclear
    t: 2368
    verified: false
    status_source: video
  - name: Chunked update strategy
    status: unclear
    t: 2556
    verified: false
    status_source: video
  - name: If-not-is-empty guard rail pattern
    status: unclear
    t: 2658
    verified: false
    status_source: video
  - name: Lock escalation with repeatable read
    status: unclear
    t: 2893
    verified: false
    status_source: video
  - name: Classic update lock deadlock
    status: unclear
    t: 3020
    verified: false
    status_source: video
  - name: Repeatable read conversion deadlock
    status: unclear
    t: 3154
    verified: false
    status_source: video
  - name: SEMAPHORE lock for entry posting
    status: unclear
    t: 3472
    verified: false
    status_source: video
  - name: Number sequence for entry numbering
    status: unclear
    t: 3641
    verified: false
    status_source: video
  - name: Auto increment primary key for entries
    status: unclear
    t: 3743
    verified: false
    status_source: video
  - name: Availability checking with validation
    status: unclear
    t: 3891
    verified: false
    status_source: video
  - name: Sequential record insertion with validation
    status: unclear
    t: 3956
    verified: false
    status_source: video
  - name: Number sequence with validation
    status: unclear
    t: 4050
    verified: false
    status_source: video
  - name: Update lock by entity code
    status: unclear
    t: 4287
    verified: false
    status_source: video
  - name: Segmented primary key design
    status: unclear
    t: 4558
    verified: false
    status_source: video
  - name: Dedicated lock table for allocation
    status: unclear
    t: 4691
    verified: false
    status_source: video
  - name: IsEmpty checks as symptom vs root cause treatment
    status: unclear
    t: 4966
    verified: false
    status_source: video
  - name: Sequential GUID implementation in Business Central
    status: unclear
    t: 5087
    verified: false
    status_source: video
  - name: Lock threshold estimation at 5000 blocks
    status: unclear
    t: 4878
    verified: false
    status_source: video
  - name: If Not Inserted pattern and buffered insert impact
    status: unclear
    t: 5239
    verified: false
    status_source: video
  - name: Cache synchronization in scale-out scenarios
    status: unclear
    t: 5344
    verified: false
    status_source: video
  - name: Connection pooling prevents session-lock association
    status: unclear
    t: 5400
    verified: false
    status_source: video
  - name: Optimistic locking vs pessimistic locking tradeoff
    status: unclear
    t: 5547
    verified: false
    status_source: video
  - name: Avoiding excessive commits in bulk operations
    status: unclear
    t: 5461
    verified: false
    status_source: video
  - name: Find set with update lock parameter
    status: unclear
    t: 5647
    verified: false
    status_source: video
objects_mentioned:
  - table tr_locks
  - table abstract table
  - other modify all
  - other find set
  - other find first
  - other delete all
  - other modify
  - table entry table
  - codeunit posting routine
  - other check availability function
  - codeunit entry
  - table cinema allocation
  - table cinema layout
quotes:
  - t: 381
    text: the first session that's locking a table and holding it can hold it well indefinitely long not indefinitely because it's limited only by the
    check: snapped
  - t: 434
    text: 10 seconds by default on on premise environments and 35 seconds in SAS, right? As the log timeout settings in business central.
    check: exact
  - t: 599
    text: when we run our code on premise and that's uh quite an important differentiation on premises with a default uh configuration of SQL server
    check: exact
  - t: 778
    text: this is the key to understanding the concurrency uh how database engine decides uh if record can be accessed or any uh resource can
    check: exact
  - t: 816
    text: when the database engine decides if this access concurrent access can be granted uh it basically does something like this
    check: exact
---

# Concurrency in Business Central: Parallel processes without deadlocks and timeouts

> Business Central concurrency session covering SQL Server lock types, isolation levels, lock escalation at about 5,000 locks, and deadlocks, with demos of loops, chunking, SEMAPHORE locks, number sequences and auto increment in a cinema booking case. Lock timeout defaults are 10 seconds on-premise and 35 seconds in SaaS.

[Watch on YouTube](https://www.youtube.com/watch?v=-_TaZY2Clh0) · mibuso.com / BC TechDays · 2026-10-01 · 1:35:55 · tier community · **unreviewed** (machine-generated)

## Overview

The session explains how the database engine decides whether a resource can be accessed: lock types, isolation levels, the compatibility matrix, and the intent lock sequence from table to page to record. It then covers lock escalation (about 5,000 locks from one statement), the obsolete LOCKTABLE statement, circular deadlocks and conversion deadlocks. Demos on an on-premise SQL Server use a custom page that reads lock state from the SQL Server lock DMV.

The second half compares ways to update and insert under load. Modify in a loop avoids escalation but took about 2.5 to 3 seconds versus 30 to 50 ms for modify all on 15,000 records. A cinema ticket booking case compares a SEMAPHORE-style lock on the last entry, number sequences, auto increment, locking by entity code, a segmented primary key and a dedicated allocation table. The Q&A covers IsEmpty checks, sequential GUIDs, buffered insert, scale-out caching, optimistic locking and commits.

## Key points

- Default lock timeout is 10 seconds on-premise and 35 seconds in SaaS; a session that waits longer is dropped with an error.
- Lock escalation to a table-level lock happens at roughly 5,000 locks from a single SQL statement. The number is approximate because SQL Server counts all lock types.
- SaaS has read committed snapshot isolation on by default, on-premise does not. Concurrency behavior differs, so test in both.
- Modify in a loop avoids escalation but was much slower (2.5 to 3 s vs 30 to 50 ms for 15,000 records). Chunking below the escalation threshold is the proposed compromise and needs tuning.
- Deadlocks are circular (different records, checked by the lock monitor about every 5 seconds) or conversion deadlocks (two repeatable read sessions converting shared locks to exclusive on one record).
- Number sequences do not lock, but adding availability validation on top allowed duplicate bookings. Auto increment turns off insert buffering.
- Locking by entity code can cause table scans that block other entities. A segmented primary key with the entity code first, or a dedicated allocation table, was shown as the fix.

## Chapters

- [0:00](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=0s) Introduction and session overview
- [3:07](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=187s) Locks and basic definitions
- [4:51](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=291s) Lock isolation levels and lock status
- [8:00](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=480s) Lock types and isolation levels
- [10:43](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=643s) Lock compatibility matrix
- [15:06](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=906s) Lock sequence: intent locks, pages, and records
- [17:27](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=1047s) Lock escalation and table-level locking
- [20:04](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=1204s) Lock table misconception and obsolescence
- [21:15](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=1275s) Types of deadlocks: circular and conversion deadlocks
- [24:52](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=1492s) Demo setup and lock observation tools
- [30:06](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=1806s) Scenarios: sequential modification and lock escalation
- [32:12](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=1932s) Read committed isolation, lock timeout, and SaaS behavior
- [35:08](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2108s) Repeatable read lock escalation and takeaways
- [39:05](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2345s) Looping vs bulk operations and chunking strategy
- [43:59](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2639s) The if-not-is-empty pattern myth
- [46:23](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2783s) Guard rails, escalation scenarios, and classic deadlock patterns
- [51:11](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=3071s) Repeatable read deadlock conflicts and lock contention
- [55:02](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=3302s) Cinema ticket booking extension use case
- [57:20](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=3440s) SEMAPHORE lock approach and number sequence alternative
- [1:02:23](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=3743s) Auto increment approach and sequential validation
- [1:07:19](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=4039s) Number sequence validation and locking by entity code
- [1:13:15](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=4395s) Table scan problems and primary key redesign
- [1:18:00](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=4680s) Lock strategy optimization and lock placement
- [1:20:51](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=4851s) Q&A: lock thresholds, chunk sizing, and IsEmpty diagnostics
- [1:24:09](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=5049s) Sequential GUIDs, number series, and buffered insert problems
- [1:28:40](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=5320s) Caching, scale-out scenarios, and session identification
- [1:31:01](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=5461s) Avoiding excessive commits and optimistic locking approaches

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Lock timeout settings | status not stated | [6:41](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=401s) |  |
| Read uncommitted isolation level | status not stated | [8:31](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=511s) |  |
| Read committed isolation level | status not stated | [9:16](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=556s) |  |
| Repeatable read isolation level | status not stated | [10:43](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=643s) |  |
| Update lock isolation level | status not stated | [10:57](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=657s) |  |
| Exclusive lock | status not stated | [11:11](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=671s) |  |
| Lock compatibility matrix | status not stated | [12:09](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=729s) |  |
| Intent lock hierarchy | status not stated, demoed | [15:06](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=906s) |  |
| Lock escalation threshold | status not stated | [18:02](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=1082s) |  |
| Lock table statement | status not stated | [20:04](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=1204s) |  |
| Circular deadlock detection | status not stated | [21:31](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=1291s) |  |
| Lock conversion deadlock | status not stated | [23:33](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=1413s) |  |
| Transaction retry monitoring interface | status not stated, demoed | [25:06](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=1506s) |  |
| Lock hierarchy and lock types | status not stated, demoed | [27:53](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=1673s) |  |
| Lock timeout with concurrent operations | status not stated, demoed | [30:49](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=1849s) |  |
| Read committed snapshot isolation | status not stated, demoed | [33:31](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2011s) |  |
| Repeatable read lock escalation | status not stated, demoed | [35:37](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2137s) |  |
| Modify in loop pattern | status not stated, demoed | [39:05](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2345s) |  |
| SaaS vs on-premise concurrency behavior differences | status not stated, demoed | [33:31](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2011s) |  |
| Record-level modify in loops | status not stated, demoed | [39:28](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2368s) |  |
| Chunked update strategy | status not stated, demoed | [42:36](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2556s) |  |
| If-not-is-empty guard rail pattern | status not stated | [44:18](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2658s) |  |
| Lock escalation with repeatable read | status not stated, demoed | [48:13](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2893s) |  |
| Classic update lock deadlock | status not stated, demoed | [50:20](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=3020s) |  |
| Repeatable read conversion deadlock | status not stated, demoed | [52:34](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=3154s) |  |
| SEMAPHORE lock for entry posting | status not stated, demoed | [57:52](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=3472s) |  |
| Number sequence for entry numbering | status not stated, demoed | [1:00:41](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=3641s) |  |
| Auto increment primary key for entries | status not stated, demoed | [1:02:23](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=3743s) |  |
| Availability checking with validation | status not stated, demoed | [1:04:51](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=3891s) |  |
| Sequential record insertion with validation | status not stated, demoed | [1:05:56](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=3956s) |  |
| Number sequence with validation | status not stated, demoed | [1:07:30](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=4050s) |  |
| Update lock by entity code | status not stated, demoed | [1:11:27](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=4287s) |  |
| Segmented primary key design | status not stated, demoed | [1:15:58](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=4558s) |  |
| Dedicated lock table for allocation | status not stated, demoed | [1:18:11](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=4691s) |  |
| IsEmpty checks as symptom vs root cause treatment | status not stated | [1:22:46](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=4966s) |  |
| Sequential GUID implementation in Business Central | status not stated | [1:24:47](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=5087s) |  |
| Lock threshold estimation at 5000 blocks | status not stated | [1:21:18](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=4878s) |  |
| If Not Inserted pattern and buffered insert impact | status not stated | [1:27:19](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=5239s) |  |
| Cache synchronization in scale-out scenarios | status not stated | [1:29:04](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=5344s) |  |
| Connection pooling prevents session-lock association | status not stated | [1:30:00](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=5400s) |  |
| Optimistic locking vs pessimistic locking tradeoff | status not stated | [1:32:27](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=5547s) |  |
| Avoiding excessive commits in bulk operations | status not stated | [1:31:01](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=5461s) |  |
| Find set with update lock parameter | status not stated | [1:34:07](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=5647s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- table "tr_locks" at [26:09](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=1569s)
- table "abstract table" at [26:57](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=1617s)
- other "modify all" at [39:28](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2368s)
- other "find set" at [45:23](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2723s)
- other "find first" at [45:23](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2723s)
- other "delete all" at [44:56](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2696s)
- other "modify" at [46:35](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2795s)
- table "entry table" at [56:38](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=3398s)
- codeunit "posting routine" at [57:09](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=3429s)
- other "check availability function" at [1:05:56](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=3956s)
- codeunit "entry" at [1:05:56](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=3956s)
- table "cinema allocation" at [1:18:31](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=4711s)
- table "cinema layout" at [1:18:31](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=4711s)

Not found in BC28-30: table "tr_locks", table "abstract table", table "entry table", codeunit "posting routine", codeunit "entry", table "cinema allocation", table "cinema layout".

## Quotes

- [6:21](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=381s) "the first session that's locking a table and holding it can hold it well indefinitely long not indefinitely because it's limited only by the"
- [7:14](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=434s) "10 seconds by default on on premise environments and 35 seconds in SAS, right? As the log timeout settings in business central."
- [9:59](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=599s) "when we run our code on premise and that's uh quite an important differentiation on premises with a default uh configuration of SQL server"
- [12:58](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=778s) "this is the key to understanding the concurrency uh how database engine decides uh if record can be accessed or any uh resource can"
- [13:36](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=816s) "when the database engine decides if this access concurrent access can be granted uh it basically does something like this"

## Disclaimers in the video

- [9:59](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=599s) other: on premise and that's uh quite an important differentiation on premises with a default uh configuration of SQL server uh ...
- [32:45](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=1965s) other: I'm running this on on on a local uh on premise server with a default configuration the SQL development developer ...
- [33:05](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=1985s) other: for the sake of the experiment, enable it
- [34:37](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=2077s) other: It has its own like cave and side effects notably right skew maybe I will show that as well
- [1:02:51](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=3771s) other: first just to one disclaimer about auto increment. We probably already noticed my comments here, right? What's the downside of of using auto increment?
- [1:13:15](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=4395s) other: it's not a good idea either and it's kind of leads to problems that are quite difficult to demonstrate and ...
- [1:15:16](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=4516s) other: although it looks like now this solution worked in fact it's something that in production will have many more problems. ...
- [1:27:31](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=5251s) subject-to-change: in BC28 that they changed it on one place uh by not using that anymore if not insert
- [1:35:27](https://www.youtube.com/watch?v=-_TaZY2Clh0&t=5727s) subject-to-change: from version 25 or 26 it will be recommitted in older previous versions will be uh for update update lock. ...

Presenters (as heard): Alexander.
