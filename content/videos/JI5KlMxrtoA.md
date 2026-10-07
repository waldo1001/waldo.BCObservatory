---
id: video/JI5KlMxrtoA
type: video
title: How Good Can AL Code Get? — A Live ISO 5055 Review
summary: Live walkthrough of a paid AL code review service that checks an extension against ISO 5055 (CWE-mapped rules) plus a custom AL rule set, using a proprietary analyzer with about 500 diagnostics. Useful as evidence for which ISO 5055 rules apply to AL (permission assignment, read isolation, field assignment order, error info, find set without filters, delete all without is empty, case without else, HTTP timeouts) and where the rules produce false positives or need justified exceptions.
tier: community
language: en
tags:
  - code quality
  - iso 5055
  - static analysis
  - al cops
  - security
  - performance
  - read isolation
  - permission assignment
  - analyzers
  - cwe violations
  - data access
  - error handling
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:20:39.087Z"
  flags: []
generated:
  at: "2026-10-07T23:20:39.152Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 208519c37f0385dd5153949201a200705bc9f5eeb7eb272ff6a91f7264cb5217
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=JI5KlMxrtoA&t=218s
    title: How Good Can AL Code Get? — A Live ISO 5055 Review
    date: "2026-05-08T21:34:51.000Z"
    commit: null
    t: 218
    quote: this review that I do runs against. And it basically contains two different uh areas. one is uh basically derived from ISO 5055 which
  - kind: video
    url: https://www.youtube.com/watch?v=JI5KlMxrtoA&t=259s
    title: How Good Can AL Code Get? — A Live ISO 5055 Review
    date: "2026-05-08T21:34:51.000Z"
    commit: null
    t: 259
    quote: and this has 119 rules. Now this is annoying. Um I have evaluated all of them in detail and not all of them are
  - kind: video
    url: https://www.youtube.com/watch?v=JI5KlMxrtoA&t=591s
    title: How Good Can AL Code Get? — A Live ISO 5055 Review
    date: "2026-05-08T21:34:51.000Z"
    commit: null
    t: 591
    quote: So, what I've built is a proprietary analyzer. I won't share the source code of, but I can show you a little bit of
  - kind: video
    url: https://www.youtube.com/watch?v=JI5KlMxrtoA&t=697s
    title: How Good Can AL Code Get? — A Live ISO 5055 Review
    date: "2026-05-08T21:34:51.000Z"
    commit: null
    t: 697
    quote: So if we what was it 732 we go onto this one second incorrect permission assignment permission sets grant brower access then intended expose
  - kind: video
    url: https://www.youtube.com/watch?v=JI5KlMxrtoA&t=791s
    title: How Good Can AL Code Get? — A Live ISO 5055 Review
    date: "2026-05-08T21:34:51.000Z"
    commit: null
    t: 791
    quote: missing expl explicit read isolation on record read. So read reads without explicit read isolation defaults to escalate update locks invisibly causing concurrency degradation
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: JI5KlMxrtoA
channel: yt-stefanmaron
source_name: Stefan Maron
url: https://www.youtube.com/watch?v=JI5KlMxrtoA
published_at: "2026-05-08T21:34:51.000Z"
duration_s: 4331
captions: derived
audience:
  - developer
  - partner
  - decision maker
chapters:
  - t: 0
    title: Introduction and Code Review Service Overview
  - t: 179
    title: ISO 5055 Standard and Quality Framework
  - t: 306
    title: Default Analyzers and AppSource Cops
  - t: 425
    title: AL Cops and Community Code Cops
  - t: 562
    title: Proprietary Review Analyzer and CWE 732
  - t: 687
    title: ISO 5055 Mapping and Read Isolation Rules
  - t: 897
    title: CWE 1083 - Data Access from Outside Data Manager
  - t: 1044
    title: Field Assignment Order Validation
  - t: 1147
    title: Primary Key Field Violation Detection
  - t: 1230
    title: CWE 778 - Insufficient Logging and Security
  - t: 1356
    title: Isolated Storage Cleanup and Encryption Issues
  - t: 1520
    title: Hard-Coding and Error Message Issues
  - t: 1673
    title: Magic Numbers and Self-Documenting Code
  - t: 1834
    title: Boolean Operator Precedence and Complex Expressions
  - t: 1973
    title: Operator Precedence and Readability Concerns
  - t: 2177
    title: Error Handling with Error Info Pattern
  - t: 2451
    title: Unchecked Return Values and User Experience
  - t: 2627
    title: Custom Procedures and Find Set without Filters
  - t: 2823
    title: Delete All Patterns and Locking Behavior
  - t: 2961
    title: Read Isolation and Table Locking Interaction
  - t: 3163
    title: Lock Release Timing and Record Instance Isolation
  - t: 3392
    title: Case Statements without Else and Code Completeness
  - t: 3544
    title: ISO 5055 Standards and HTTP Client Timeouts
  - t: 3668
    title: Code Quality Assessment Tool Feedback
  - t: 3910
    title: ISO 5055 Scoring and Warning Assessment
  - t: 3982
    title: Manual Code Review and Quality Assessment Reports
  - t: 4256
    title: Closing Remarks and Audience Engagement
features:
  - name: ISO 5055 Review Standard Integration
    status: unclear
    t: 218
    verified: false
    status_source: video
  - name: Custom AL Quality Framework
    status: unclear
    t: 282
    verified: false
    status_source: video
  - name: Free Quality Assessment Service
    status: unclear
    t: 318
    verified: false
    status_source: video
  - name: Default Analyzers Configuration
    status: unclear
    t: 371
    verified: false
    status_source: video
  - name: AL Cops and Community Code Cops
    status: unclear
    t: 485
    verified: false
    status_source: video
  - name: Proprietary Review Analyzer
    status: unclear
    t: 591
    verified: false
    status_source: video
  - name: CWE 732 Permission Assignment Mapping
    status: unclear
    t: 619
    verified: false
    status_source: video
  - name: Read Isolation and Concurrency Rule EAT-10
    status: unclear
    t: 779
    verified: false
    status_source: video
  - name: CWE 1083 - Data Access from Outside Data Manager
    status: unclear
    t: 897
    verified: false
    status_source: video
  - name: Field Assignment Order Validation
    status: unclear
    t: 1056
    verified: false
    status_source: video
  - name: Primary Key Field Violation Detection
    status: unclear
    t: 1161
    verified: false
    status_source: video
  - name: CWE 778 - Insufficient Logging for Security Events
    status: unclear
    t: 1259
    verified: false
    status_source: video
  - name: Isolated Storage Cleanup Validation
    status: unclear
    t: 1377
    verified: false
    status_source: video
  - name: Isolated Storage Encryption Validation
    status: unclear
    t: 1490
    verified: false
    status_source: video
  - name: CWE 1052 detection
    status: unclear
    t: 1600
    verified: false
    status_source: video
  - name: Magic number detection
    status: unclear
    t: 1673
    verified: false
    status_source: video
  - name: Self-documenting code through extraction
    status: unclear
    t: 1712
    verified: false
    status_source: video
  - name: CWE 783 mixed boolean operators
    status: unclear
    t: 1940
    verified: false
    status_source: video
  - name: Error info pattern
    status: unclear
    t: 2275
    verified: false
    status_source: video
  - name: Error info with custom dimensions
    status: unclear
    t: 2413
    verified: false
    status_source: video
  - name: Error info with navigate actions
    status: unclear
    t: 2355
    verified: false
    status_source: video
  - name: Unchecked return value detection
    status: unclear
    t: 2459
    verified: false
    status_source: video
  - name: Find set without filters warning
    status: unclear
    t: 2757
    verified: false
    status_source: video
  - name: Delete all without is empty check warning
    status: unclear
    t: 2836
    verified: false
    status_source: video
  - name: Read isolation and table locking interaction
    status: unclear
    t: 2961
    verified: false
    status_source: video
  - name: Lock release on variable scope
    status: unclear
    t: 3211
    verified: false
    status_source: video
  - name: Record isolation level on record instances
    status: unclear
    t: 3278
    verified: false
    status_source: video
  - name: Case statement completeness checking
    status: unclear
    t: 3440
    verified: false
    status_source: video
  - name: Explicit HTTP client timeout setting
    status: unclear
    t: 3594
    verified: false
    status_source: video
  - name: ISO 5055 code quality assessment
    status: unclear
    t: 3544
    verified: false
    status_source: video
  - name: ISO 5055 Quality Scoring System
    status: unclear
    t: 3910
    verified: false
    status_source: video
  - name: Quality Assessment Report Service
    status: unclear
    t: 4100
    verified: false
    status_source: video
objects_mentioned:
  - other Review Analyzer
  - codeunit ISO store manager
  - other error info
  - other codeunit run
  - other extension license
  - other update lock
  - other delete all
  - other lock table
  - other JSON get
quotes:
  - t: 218
    text: this review that I do runs against. And it basically contains two different uh areas. one is uh basically derived from ISO 5055 which
    check: exact
  - t: 259
    text: and this has 119 rules. Now this is annoying. Um I have evaluated all of them in detail and not all of them are
    check: exact
  - t: 591
    text: So, what I've built is a proprietary analyzer. I won't share the source code of, but I can show you a little bit of
    check: exact
  - t: 697
    text: So if we what was it 732 we go onto this one second incorrect permission assignment permission sets grant brower access then intended expose
    check: exact
  - t: 791
    text: missing expl explicit read isolation on record read. So read reads without explicit read isolation defaults to escalate update locks invisibly causing concurrency degradation
    check: exact
---

# How Good Can AL Code Get? — A Live ISO 5055 Review

> Live walkthrough of a paid AL code review service that checks an extension against ISO 5055 (CWE-mapped rules) plus a custom AL rule set, using a proprietary analyzer with about 500 diagnostics. Useful as evidence for which ISO 5055 rules apply to AL (permission assignment, read isolation, field assignment order, error info, find set without filters, delete all without is empty, case without else, HTTP timeouts) and where the rules produce false positives or need justified exceptions.

[Watch on YouTube](https://www.youtube.com/watch?v=JI5KlMxrtoA) · Stefan Maron · 2026-05-08 · 1:12:11 · tier community · reviewed (checked by Opus)

## Overview

The video describes a code review service built on two parts: ISO 5055, a language-independent standard with 119 rules, not all of which fit AL, and a custom set of AL-specific rules. Stefan Maron first covers the default AppSource analyzers and AL Cops, then shows a proprietary analyzer that produces about 500 diagnostics mapped to ISO 5055 and CWE. The source code of that analyzer is not shared.

He then goes through findings on sample code: CWE 732 permissions, read isolation, CWE 1083 data access, field assignment order, logging, isolated storage, hard-coded values, magic numbers, boolean operator precedence, error info, unchecked return values, find set without filters, delete all with is empty, case without else, and HTTP client timeouts. He notes that the project is still changing, some rules are under review, and findings need manual review. He says the analyzer is too noisy for continuous integration and that the signed report is aimed at management.

## Key points

- ISO 5055 has 119 rules, and not all of them fully apply to AL. The review adds a custom AL rule set on top.
- The proprietary analyzer gives about 500 diagnostics mapped to ISO 5055 and CWE. It is not published, is not enabled in the author's daily development, and is meant to surface findings for a manual review.
- Read isolation rule: reads without explicit read isolation default to escalated update locks, which can degrade concurrency under load. A related rule about relying on the primary key when no current key is set is under review and may be removed.
- Field assignment order should follow the page pattern: init, validate primary key fields, insert(true), then validate the remaining fields and modify(true). Exceptions should be documented.
- Use error info with navigate actions and custom dimensions instead of plain errors to give users fix-it actions and give support more context.
- Flagged patterns include find set without filters, delete all without an is empty check, case statements without else, unchecked return values, hard-coded literals and URLs, and HTTP client calls without an explicit timeout. Intentional cases, such as upgrade codeunits, can be documented as accepted.
- Mixed AND and OR without parentheses is flagged. The presenter could not find documentation on AL precedence and recommends parentheses for readability. Findings can be false positives and need manual review.

## Chapters

- [0:00](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=0s) Introduction and Code Review Service Overview
- [2:59](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=179s) ISO 5055 Standard and Quality Framework
- [5:06](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=306s) Default Analyzers and AppSource Cops
- [7:05](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=425s) AL Cops and Community Code Cops
- [9:22](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=562s) Proprietary Review Analyzer and CWE 732
- [11:27](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=687s) ISO 5055 Mapping and Read Isolation Rules
- [14:57](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=897s) CWE 1083 - Data Access from Outside Data Manager
- [17:24](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1044s) Field Assignment Order Validation
- [19:07](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1147s) Primary Key Field Violation Detection
- [20:30](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1230s) CWE 778 - Insufficient Logging and Security
- [22:36](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1356s) Isolated Storage Cleanup and Encryption Issues
- [25:20](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1520s) Hard-Coding and Error Message Issues
- [27:53](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1673s) Magic Numbers and Self-Documenting Code
- [30:34](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1834s) Boolean Operator Precedence and Complex Expressions
- [32:53](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1973s) Operator Precedence and Readability Concerns
- [36:17](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=2177s) Error Handling with Error Info Pattern
- [40:51](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=2451s) Unchecked Return Values and User Experience
- [43:47](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=2627s) Custom Procedures and Find Set without Filters
- [47:03](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=2823s) Delete All Patterns and Locking Behavior
- [49:21](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=2961s) Read Isolation and Table Locking Interaction
- [52:43](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=3163s) Lock Release Timing and Record Instance Isolation
- [56:32](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=3392s) Case Statements without Else and Code Completeness
- [59:04](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=3544s) ISO 5055 Standards and HTTP Client Timeouts
- [1:01:08](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=3668s) Code Quality Assessment Tool Feedback
- [1:05:10](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=3910s) ISO 5055 Scoring and Warning Assessment
- [1:06:22](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=3982s) Manual Code Review and Quality Assessment Reports
- [1:10:56](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=4256s) Closing Remarks and Audience Engagement

## Features

| Feature | Status | At |
|---|---|---|
| ISO 5055 Review Standard Integration | status not stated, demoed | [3:38](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=218s) |
| Custom AL Quality Framework | status not stated, demoed | [4:42](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=282s) |
| Free Quality Assessment Service | status not stated, demoed | [5:18](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=318s) |
| Default Analyzers Configuration | status not stated, demoed | [6:11](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=371s) |
| AL Cops and Community Code Cops | status not stated, demoed | [8:05](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=485s) |
| Proprietary Review Analyzer | status not stated, demoed | [9:51](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=591s) |
| CWE 732 Permission Assignment Mapping | status not stated, demoed | [10:19](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=619s) |
| Read Isolation and Concurrency Rule EAT-10 | status not stated, demoed | [12:59](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=779s) |
| CWE 1083 - Data Access from Outside Data Manager | status not stated, demoed | [14:57](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=897s) |
| Field Assignment Order Validation | status not stated, demoed | [17:36](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1056s) |
| Primary Key Field Violation Detection | status not stated, demoed | [19:21](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1161s) |
| CWE 778 - Insufficient Logging for Security Events | status not stated, demoed | [20:59](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1259s) |
| Isolated Storage Cleanup Validation | status not stated, demoed | [22:57](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1377s) |
| Isolated Storage Encryption Validation | status not stated, demoed | [24:50](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1490s) |
| CWE 1052 detection | status not stated, demoed | [26:40](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1600s) |
| Magic number detection | status not stated, demoed | [27:53](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1673s) |
| Self-documenting code through extraction | status not stated, demoed | [28:32](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1712s) |
| CWE 783 mixed boolean operators | status not stated, demoed | [32:20](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1940s) |
| Error info pattern | status not stated, demoed | [37:55](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=2275s) |
| Error info with custom dimensions | status not stated | [40:13](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=2413s) |
| Error info with navigate actions | status not stated, demoed | [39:15](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=2355s) |
| Unchecked return value detection | status not stated, demoed | [40:59](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=2459s) |
| Find set without filters warning | status not stated, demoed | [45:57](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=2757s) |
| Delete all without is empty check warning | status not stated, demoed | [47:16](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=2836s) |
| Read isolation and table locking interaction | status not stated, demoed | [49:21](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=2961s) |
| Lock release on variable scope | status not stated | [53:31](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=3211s) |
| Record isolation level on record instances | status not stated, demoed | [54:38](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=3278s) |
| Case statement completeness checking | status not stated, demoed | [57:20](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=3440s) |
| Explicit HTTP client timeout setting | status not stated, demoed | [59:54](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=3594s) |
| ISO 5055 code quality assessment | status not stated, demoed | [59:04](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=3544s) |
| ISO 5055 Quality Scoring System | status not stated, demoed | [1:05:10](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=3910s) |
| Quality Assessment Report Service | status not stated | [1:08:20](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=4100s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "Review Analyzer" at [10:03](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=603s)
- codeunit "ISO store manager" at [23:02](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1382s)
- other "error info" at [39:15](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=2355s)
- other "codeunit run" at [41:40](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=2500s)
- other "extension license" at [46:34](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=2794s)
- other "update lock" at [50:06](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=3006s)
- other "delete all" at [52:21](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=3141s)
- other "lock table" at [54:53](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=3293s)
- other "JSON get" at [56:53](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=3413s)

Not found in BC28-30: codeunit "ISO store manager".

## Quotes

- [3:38](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=218s) "this review that I do runs against. And it basically contains two different uh areas. one is uh basically derived from ISO 5055 which"
- [4:19](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=259s) "and this has 119 rules. Now this is annoying. Um I have evaluated all of them in detail and not all of them are"
- [9:51](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=591s) "So, what I've built is a proprietary analyzer. I won't share the source code of, but I can show you a little bit of"
- [11:37](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=697s) "So if we what was it 732 we go onto this one second incorrect permission assignment permission sets grant brower access then intended expose"
- [13:11](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=791s) "missing expl explicit read isolation on record read. So read reads without explicit read isolation defaults to escalate update locks invisibly causing concurrency degradation"

## Disclaimers in the video

- [13:38](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=818s) subject-to-change: this rule is also under review. I think I will update this and remove this because it doesn't make that much sense.
- [14:33](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=873s) subject-to-change: That's why this rule is uh also under review. I think I will update this and remove this because it ...
- [21:21](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1281s) subject-to-change: telemetry here needs an update because I've uh I've changed the rule a little bit recently
- [24:12](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=1452s) coming-later: Once we would get an event like this, I would probably add this uh this coverage to this rule
- [1:04:54](https://www.youtube.com/watch?v=JI5KlMxrtoA&t=3894s) subject-to-change: This is a living project. Um the automatic review obviously doesn't surface what are false positives

Presenters (as heard): Jeremy, Hayden.
