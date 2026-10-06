---
id: video/a1LQ3-SCtPE
type: video
title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
summary: "Business Central 2023 release wave 2 server and database changes: table extensions move to a single companion table, cutting n-way joins to one and speeding reads, inserts, modifies and deletes. Also covers SetLoadFields guidance, the new read committed locking model, and upcoming removals."
tier: official
language: en
tags:
  - table extensions
  - companion tables
  - database joins
  - schema redesign
  - cloud migration
  - partial records
  - setloadfields
  - performance optimization
  - on-premises upgrade
  - database views
  - extension schema
  - extension data management
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T21:39:45.223Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 6e11629d2a54053f712dd51cf467c95a74895cc0a09bce85b717de4ab6825a82
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=58s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 58
    quote: the primary key for the base is also the primary key for all companion tables that's the name we call these physical tables
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=94s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 94
    quote: the SQL Server query Optimizer has a hidden Li limit around seven or eight joints where it will stop optimizing and simply use one
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=229s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 229
    quote: now we simply have the base table and we have one companion table that stores the fields for all table extensions and this minimize
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=270s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 270
    quote: read performance is definitely where we see the most impact but be careful when you measure here because the NST the server caches data
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=515s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 515
    quote: if you are that customer with 70 table extensions you would go from a 70 way join to a one way join
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=556s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 556
    quote: all good uh version 23 exposed the mapping from previous versions We updated the tool so these as a a data Factory clows now
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=787s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 787
    quote: maybe this uh new method will be for you as well to lower your maintenance cost on your on your code and still make
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=847s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 847
    quote: the main thing here is there is no really no action on you right we we just made things faster for all code
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=867s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 867
    quote: there is no really no action on you right we we just made things faster for all code maybe the only action is to
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=906s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 906
    quote: if you leave data behind then it now has a performance impact because before as I mentioned it would just sit in a separate
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1051s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 1051
    quote: before and this may not be obvious to everyone we had the um approach that the moment we entered into a right transaction then
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1154s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 1154
    quote: further reads on other um record instances pointing to the same table will now be done with a read committed
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1442s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 1442
    quote: for new tenants this is automatically enabled but you can flip this back and forth at at will um so that but it is
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1564s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 1564
    quote: for on premises you might run with the ability to write to the app database we will remove that um possibility from the next
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1577s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 1577
    quote: the most important thing is test the new locking scheme try to run some bcpt tests and check for errors has check for logging
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1577s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 1577
    quote: test the new locking scheme try to run some bcpt tests and check for errors has check for logging or Deadlocks
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1598s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 1598
    quote: if you write to the appdb stop in six months this will stop working so um this is um yeah we we're getting rid
  - kind: video
    url: https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1618s
    title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
    date: "2023-12-18T08:59:18.000Z"
    commit: null
    t: 1618
    quote: if you're watching this you also have an interest probably in the language so the developer tools watch new and Al is uh definitely
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: a1LQ3-SCtPE
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=a1LQ3-SCtPE
published_at: "2023-12-18T08:59:18.000Z"
duration_s: 1687
captions: full
audience:
  - developer
  - administrator
  - functional consultant
chapters:
  - t: 0
    title: Introduction and the problem with table extensions
  - t: 114
    title: Performance issues with n-way joins and the new companion table model
  - t: 249
    title: Performance improvements from the new schema
  - t: 353
    title: Understanding the read vs. modify performance impact
  - t: 475
    title: Production scale and cloud migration support
  - t: 596
    title: On-premises and database views for ETL tools
  - t: 674
    title: SetLoadFields optimization and new base table methods
  - t: 807
    title: Key takeaways and migration guidance
  - t: 888
    title: Extension Data Management and Performance
  - t: 1018
    title: New Locking Model - Overview and Behavior
  - t: 1154
    title: Locking Model Details - Read Committed vs Update Lock
  - t: 1320
    title: Locking Model Rollout and Feature Management
  - t: 1462
    title: Locking Model Implementation and Additional Performance Improvements
  - t: 1543
    title: Upcoming Changes and Recommendations
features:
  - name: New companion table schema for table extensions
    status: unclear
    t: 135
    verified: false
    status_source: video
  - name: Delete operation performance improvement
    status: unclear
    t: 249
    verified: false
    status_source: video
  - name: Insert operation performance improvement
    status: unclear
    t: 249
    verified: false
    status_source: video
  - name: Modify operation performance improvement
    status: unclear
    t: 249
    verified: false
    status_source: video
  - name: Read operation performance improvement
    status: unclear
    t: 249
    verified: false
    status_source: video
  - name: Database size reduction from new schema
    status: unclear
    t: 249
    verified: false
    status_source: video
  - name: Cloud migration support for new schema
    status: unclear
    t: 536
    verified: false
    status_source: video
  - name: Database views for on-premises ETL tools
    status: unclear
    t: 596
    verified: false
    status_source: video
  - name: SetLoadFields continuing value with new schema
    status: unclear
    t: 674
    verified: false
    status_source: video
  - name: Set-based load fields method for base table owners
    status: unclear
    t: 747
    verified: false
    status_source: video
  - name: Set-Based Load Fields
    status: unclear
    t: 787
    verified: false
    status_source: video
  - name: Extension Schema Performance
    status: unclear
    t: 847
    verified: false
    status_source: video
  - name: Orphaned Extension Data Cleanup
    status: unclear
    t: 906
    verified: false
    status_source: video
  - name: New Locking Model
    status: unclear
    t: 1018
    verified: false
    status_source: video
  - name: Read Isolation Property
    status: unclear
    t: 1245
    verified: false
    status_source: video
  - name: AutoIncrement Field Performance Optimization
    status: unclear
    t: 1501
    verified: false
    status_source: video
  - name: Set Range SQL Query Optimization
    status: unclear
    t: 1521
    verified: false
    status_source: video
  - name: Removal of Force Order and Loop Joints Server Settings
    status: unclear
    t: 1543
    verified: false
    status_source: video
  - name: Removal of App Database Write Capability
    status: unclear
    t: 1564
    verified: false
    status_source: video
  - name: New locking scheme
    status: unclear
    t: 1577
    verified: false
    status_source: video
  - name: Data cleanup and storage optimization
    status: unclear
    t: 1598
    verified: false
    status_source: video
  - name: AL language and developer tools updates
    status: unclear
    t: 1618
    verified: false
    status_source: video
  - name: Reporting improvements with indexing
    status: unclear
    t: 1639
    verified: false
    status_source: video
objects_mentioned:
  - table VAT Entry
  - table Currency
quotes:
  - t: 58
    text: the primary key for the base is also the primary key for all companion tables that's the name we call these physical tables
    check: exact
  - t: 94
    text: the SQL Server query Optimizer has a hidden Li limit around seven or eight joints where it will stop optimizing and simply use one
    check: exact
  - t: 229
    text: now we simply have the base table and we have one companion table that stores the fields for all table extensions and this minimize
    check: exact
  - t: 270
    text: read performance is definitely where we see the most impact but be careful when you measure here because the NST the server caches data
    check: exact
  - t: 515
    text: if you are that customer with 70 table extensions you would go from a 70 way join to a one way join
    check: exact
  - t: 556
    text: all good uh version 23 exposed the mapping from previous versions We updated the tool so these as a a data Factory clows now
    check: exact
  - t: 787
    text: maybe this uh new method will be for you as well to lower your maintenance cost on your on your code and still make
    check: exact
  - t: 847
    text: the main thing here is there is no really no action on you right we we just made things faster for all code
    check: snapped
  - t: 867
    text: there is no really no action on you right we we just made things faster for all code maybe the only action is to
    check: exact
  - t: 906
    text: if you leave data behind then it now has a performance impact because before as I mentioned it would just sit in a separate
    check: exact
  - t: 1051
    text: before and this may not be obvious to everyone we had the um approach that the moment we entered into a right transaction then
    check: exact
  - t: 1154
    text: further reads on other um record instances pointing to the same table will now be done with a read committed
    check: exact
  - t: 1442
    text: for new tenants this is automatically enabled but you can flip this back and forth at at will um so that but it is
    check: exact
  - t: 1564
    text: for on premises you might run with the ability to write to the app database we will remove that um possibility from the next
    check: exact
  - t: 1577
    text: the most important thing is test the new locking scheme try to run some bcpt tests and check for errors has check for logging
    check: exact
  - t: 1577
    text: test the new locking scheme try to run some bcpt tests and check for errors has check for logging or Deadlocks
    check: exact
  - t: 1598
    text: if you write to the appdb stop in six months this will stop working so um this is um yeah we we're getting rid
    check: exact
  - t: 1618
    text: if you're watching this you also have an interest probably in the language so the developer tools watch new and Al is uh definitely
    check: exact
---

# What's New: Server and Database - A Faster Data Stack (2023 release wave 2)

> Business Central 2023 release wave 2 server and database changes: table extensions move to a single companion table, cutting n-way joins to one and speeding reads, inserts, modifies and deletes. Also covers SetLoadFields guidance, the new read committed locking model, and upcoming removals.

[Watch on YouTube](https://www.youtube.com/watch?v=a1LQ3-SCtPE) · Microsoft Dynamics 365 Business Central (YouTube) · 2023-12-18 · 28:07 · tier official · **unreviewed** (machine-generated)

## Overview

The session explains why table extensions stored in separate tables caused n-way joins, and how the new schema keeps one companion table for all extension fields. It reports read performance as the biggest gain, with smaller gains for modify, insert and delete. Gains depend on the number of extensions and on code organization, and a single extension shows little difference.

It then covers cloud migration support in version 23, database views for on-premises ETL and BI tools, SetLoadFields and a new method for base table owners, cleanup of orphaned extension data, and a new locking model based on read committed. It closes with upcoming changes and a recommendation to test with BCPT.

## Key points

- Table extension fields are now stored in one companion table per base table, so a read needs one join instead of n. A customer with 70 extensions goes from a 70-way join to a one-way join.
- Reported gains: reads scale nearly flat as extensions increase, modify up to 2x faster, insert about 2x, delete 2 to 5x. The benefit is visible mainly with 2 or more extensions. Server caches must be flushed when measuring reads.
- Version 23 includes cloud migration support from earlier versions to the new schema. On-premises upgrades write more data and may take longer.
- On-premises ETL or BI tools with direct database access can keep working through database views that mimic the new schema. Direct database access is not officially supported, and code samples are on GitHub.
- SetLoadFields is still useful for limiting loaded fields and hitting covering indexes. A new method lets base table owners set all base fields at once, shown on the VAT Entry table.
- The new locking model uses read committed instead of update lock for new record instances. It is on by default for new tenants. Existing tenants opt in via feature management and restart the environment. Test it with BCPT for errors, logging issues and deadlocks.
- Orphaned extension data left after uninstall now affects performance and capacity, and can be deleted in installed extensions. Force Order and Loop Joins server settings are removed in 2024 release wave one. On-premises writes to the app database stop in the next release.

## Chapters

- [0:00](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=0s) Introduction and the problem with table extensions
- [1:54](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=114s) Performance issues with n-way joins and the new companion table model
- [4:09](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=249s) Performance improvements from the new schema
- [5:53](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=353s) Understanding the read vs. modify performance impact
- [7:55](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=475s) Production scale and cloud migration support
- [9:56](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=596s) On-premises and database views for ETL tools
- [11:14](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=674s) SetLoadFields optimization and new base table methods
- [13:27](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=807s) Key takeaways and migration guidance
- [14:48](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=888s) Extension Data Management and Performance
- [16:58](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1018s) New Locking Model - Overview and Behavior
- [19:14](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1154s) Locking Model Details - Read Committed vs Update Lock
- [22:00](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1320s) Locking Model Rollout and Feature Management
- [24:22](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1462s) Locking Model Implementation and Additional Performance Improvements
- [25:43](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1543s) Upcoming Changes and Recommendations

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| New companion table schema for table extensions | status not stated, demoed | [2:15](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=135s) |  |
| Delete operation performance improvement | status not stated | [4:09](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=249s) |  |
| Insert operation performance improvement | status not stated | [4:09](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=249s) |  |
| Modify operation performance improvement | status not stated | [4:09](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=249s) |  |
| Read operation performance improvement | status not stated, demoed | [4:09](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=249s) |  |
| Database size reduction from new schema | status not stated | [4:09](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=249s) |  |
| Cloud migration support for new schema | status not stated | [8:56](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=536s) |  |
| Database views for on-premises ETL tools | status not stated | [9:56](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=596s) |  |
| SetLoadFields continuing value with new schema | status not stated | [11:14](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=674s) |  |
| Set-based load fields method for base table owners | status not stated, demoed | [12:27](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=747s) |  |
| Set-Based Load Fields | status not stated, demoed | [13:07](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=787s) |  |
| Extension Schema Performance | status not stated | [14:07](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=847s) |  |
| Orphaned Extension Data Cleanup | status not stated | [15:06](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=906s) |  |
| New Locking Model | status not stated, demoed | [16:58](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1018s) |  |
| Read Isolation Property | status not stated | [20:45](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1245s) |  |
| AutoIncrement Field Performance Optimization | status not stated | [25:01](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1501s) |  |
| Set Range SQL Query Optimization | status not stated | [25:21](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1521s) |  |
| Removal of Force Order and Loop Joints Server Settings | status not stated | [25:43](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1543s) |  |
| Removal of App Database Write Capability | status not stated | [26:04](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1564s) |  |
| New locking scheme | status not stated | [26:17](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1577s) |  |
| Data cleanup and storage optimization | status not stated | [26:38](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1598s) |  |
| AL language and developer tools updates | status not stated | [26:58](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1618s) |  |
| Reporting improvements with indexing | status not stated | [27:19](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1639s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- table "VAT Entry" at [13:07](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=787s)
- table "Currency" at [17:51](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1071s)

## Quotes

- [0:58](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=58s) "the primary key for the base is also the primary key for all companion tables that's the name we call these physical tables"
- [1:34](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=94s) "the SQL Server query Optimizer has a hidden Li limit around seven or eight joints where it will stop optimizing and simply use one"
- [3:49](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=229s) "now we simply have the base table and we have one companion table that stores the fields for all table extensions and this minimize"
- [4:30](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=270s) "read performance is definitely where we see the most impact but be careful when you measure here because the NST the server caches data"
- [8:35](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=515s) "if you are that customer with 70 table extensions you would go from a 70 way join to a one way join"
- [9:16](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=556s) "all good uh version 23 exposed the mapping from previous versions We updated the tool so these as a a data Factory clows now"
- [13:07](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=787s) "maybe this uh new method will be for you as well to lower your maintenance cost on your on your code and still make"
- [14:07](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=847s) "the main thing here is there is no really no action on you right we we just made things faster for all code"
- [14:27](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=867s) "there is no really no action on you right we we just made things faster for all code maybe the only action is to"
- [15:06](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=906s) "if you leave data behind then it now has a performance impact because before as I mentioned it would just sit in a separate"
- [17:31](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1051s) "before and this may not be obvious to everyone we had the um approach that the moment we entered into a right transaction then"
- [19:14](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1154s) "further reads on other um record instances pointing to the same table will now be done with a read committed"
- [24:02](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1442s) "for new tenants this is automatically enabled but you can flip this back and forth at at will um so that but it is"
- [26:04](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1564s) "for on premises you might run with the ability to write to the app database we will remove that um possibility from the next"
- [26:17](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1577s) "the most important thing is test the new locking scheme try to run some bcpt tests and check for errors has check for logging"
- [26:17](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1577s) "test the new locking scheme try to run some bcpt tests and check for errors has check for logging or Deadlocks"
- [26:38](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1598s) "if you write to the appdb stop in six months this will stop working so um this is um yeah we we're getting rid"
- [26:58](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1618s) "if you're watching this you also have an interest probably in the language so the developer tools watch new and Al is uh definitely"

## Disclaimers in the video

- [9:56](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=596s) subject-to-change: on premises since we are changing the data model there is quite a bit of data writing going on during upgrade so when you upgrade an un premise installation you should probably expect that to take a little longer
- [10:42](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=642s) other: at the time of this recording we we don't have it on BCT Tech we might get a version of that on BCT Tech so let's uh let's see
- [22:00](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1320s) subject-to-change: we have added this as a feature management switch so you can enable it uh and it should be noticed of course things will still work functionally
- [22:41](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1361s) subject-to-change: you might get the another user has modified this in case you have certain code paths we have not seen issues with this in our base app but we cannot rule out
- [25:43](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1543s) coming-later: there are also a few changes that are upcoming in 2024 release way one the server settings for Force order and loop joints will be removed
- [26:04](https://www.youtube.com/watch?v=a1LQ3-SCtPE&t=1564s) coming-later: also for on premises you might run with the ability to write to the app database we will remove that um possibility from the next release

Presenters (as heard): Yen, Kenny.
