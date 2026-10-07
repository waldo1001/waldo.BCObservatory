---
id: video/P-7dYVfB73E
type: video
title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
summary: Business Central Under the Hood episode 6 (published 2024-11-25) explains why Business Central has about 22,500 events in version 25, what cloud telemetry says about their use, and why Microsoft is moving toward interfaces, componentization, and cleaner obsolescence and schema handling.
tier: official
language: en
tags:
  - events
  - extensibility
  - componentization
  - code customization
  - extensions
  - cloud migration
  - event telemetry
  - event density
  - code maintenance
  - breaking changes
  - interfaces
  - enums
system: development
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
  input_hash: 496b6210784db6f3a6ee5da36c73d1c9005d9852d1ab554473513765fc6c9e77
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=886s
    title: "Event Cleanup Initiative: announced"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 886
    quote: we could choose to remove those um so we can tell Partners R we are going to remove some events you know it's coming
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=2615s
    title: "Selective module installation: announced"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 2615
    quote: there's a future where we could um not install all these modules uh more lean apps so like if you specific installation at a
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=150s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 150
    quote: code customization was a very successful model because it was very flexible but it had a a big downside
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=170s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 170
    quote: whenever we changed the code and we shipped a new version or you wanted to you had to code customize across different localizations then
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=252s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 252
    quote: the merge model the the merging code and the old code customization is not really fitted for the cloud right
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=434s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 434
    quote: I'd say over 90% is partner requested so we had this yeah so we had this basically Community Driven approach
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=494s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 494
    quote: right now in version 25 I think we have 22,500 events mhm um and in the in the first few years the the uh
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=546s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 546
    quote: we have about 3,400 events that are not used at all in the class nobody nobody we could remove them nobody would notice
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=586s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 586
    quote: 53% of events so that's 11,000 something events I think my math is right uh are used in less than 100 environments
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=764s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 764
    quote: when we want to make even something as simple as a bug fix right around where these events are or you want to refactor
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=886s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 886
    quote: 3 000 plus events that are not used in the cloud
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=967s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 967
    quote: quite a lot of code where the events are just
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=1596s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 1596
    quote: the system app is just a physical packaging all just more convenient right to ship them together and version it potentially we could uh
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=1669s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 1669
    quote: business foundation is meant to be the the foundational layer so the rule there is it
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=1801s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 1801
    quote: when we build these modules we actually we rewrite most of the code um so we we
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=2078s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 2078
    quote: we introduced Nam spaces yeah so we uh even though we still have the folder structure we added name spaces to the objects as
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=2200s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 2200
    quote: when we introduced the system application at same time we introduced an obso scheme MH so uh in the past a new version would
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=2220s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 2220
    quote: we obsolete code um we give Partners I think 12 to 18 months to to uptake so they get warnings so if they recompile
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=2372s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 2372
    quote: we operate on a zero debt principle so if you if you want to change some code today you have to make sure that
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=2372s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 2372
    quote: we operate on a zero debt principle so if you if you want to change some code today you have to make sure
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=2413s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 2413
    quote: every fifth release we're going to clean up the SQL schema
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=2428s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 2428
    quote: if we removed the a field in in this release we don't want to delete it the next release right so we we need
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=2489s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 2489
    quote: Partners will know several releases ahead of time like hey you know this field that they stopped using it's actually going away in a
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=2519s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 2519
    quote: smaller apps that are that have one purpose because they're easier to understand they're easier to use we document them so that you know
  - kind: video
    url: https://www.youtube.com/watch?v=P-7dYVfB73E&t=2635s
    title: "Business Central Under the Hood episode 6: We Have Too Many Events!"
    date: "2024-11-25T15:00:25.000Z"
    commit: null
    t: 2635
    quote: if they don't need a Char module inventory module or Supply Chain management you know pick pick your combination you would only install the
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: P-7dYVfB73E
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=P-7dYVfB73E
published_at: "2024-11-25T15:00:25.000Z"
duration_s: 2727
captions: full
audience:
  - developer
  - partner
  - functional consultant
  - decision maker
chapters:
  - t: 0
    title: Introduction and Background on Extensibility
  - t: 71
    title: Code Customization Era and Its Challenges
  - t: 170
    title: Introduction of Events and Migration to Cloud
  - t: 313
    title: Early Event Implementation Strategy
  - t: 434
    title: Event Growth History and Current Scale
  - t: 535
    title: Analysis of Event Usage Telemetry
  - t: 626
    title: Event Distribution Across Objects
  - t: 704
    title: Problems with Event Density and Code Maintenance
  - t: 805
    title: Event Overload and Events as Code Customization
  - t: 1028
    title: Event Placement and Distribution
  - t: 1139
    title: Extensibility Mechanisms and Moving Toward Interfaces
  - t: 1340
    title: Introduction to Componentization and System Application
  - t: 1576
    title: Modular Architecture and Business Foundation Layer
  - t: 1740
    title: Code Organization, Namespaces, and Breaking Changes Strategy
  - t: 2277
    title: Technical Debt Removal, Schema Cleanup, and Future Componentization
features:
  - name: Integration Events
    status: unclear
    t: 211
    verified: false
    status_source: video
  - name: Workflow Events
    status: unclear
    t: 353
    verified: false
    status_source: video
  - name: GitHub-driven Event Requests
    status: unclear
    t: 414
    verified: false
    status_source: video
  - name: Event Scale in Current Version
    status: unclear
    t: 494
    verified: false
    status_source: video
  - name: Event Usage Telemetry
    status: unclear
    t: 546
    verified: false
    status_source: video
  - name: Event Distribution Analysis
    status: unclear
    t: 646
    verified: false
    status_source: video
  - name: High Event Density in Core Objects
    status: unclear
    t: 704
    verified: false
    status_source: video
  - name: Event Cleanup Initiative
    status: announced
    t: 846
    verified: true
    status_source: video
  - name: Extensibility objects
    status: unclear
    t: 1160
    verified: false
    status_source: video
  - name: Extensible enums
    status: unclear
    t: 1172
    verified: false
    status_source: video
  - name: Interfaces for extensibility
    status: unclear
    t: 1172
    verified: false
    status_source: video
  - name: Handled events
    status: unclear
    t: 1225
    verified: false
    status_source: video
  - name: Refactoring toward interfaces
    status: unclear
    t: 1259
    verified: false
    status_source: video
  - name: System Application
    status: unclear
    t: 1462
    verified: false
    status_source: video
  - name: Business Foundation layer
    status: unclear
    t: 1648
    verified: false
    status_source: video
  - name: Module Refactoring and Code Rewriting
    status: unclear
    t: 1821
    verified: false
    status_source: video
  - name: Source Code Organization with Namespaces
    status: unclear
    t: 2058
    verified: false
    status_source: video
  - name: Obsolescence Scheme with Deprecation Period
    status: unclear
    t: 2179
    verified: false
    status_source: video
  - name: Pre-Processor Symbols for Obsolescence
    status: unclear
    t: 2277
    verified: false
    status_source: video
  - name: Automated code removal at compilation
    status: unclear
    t: 2352
    verified: false
    status_source: video
  - name: Clean schema preprocessor symbol
    status: unclear
    t: 2448
    verified: false
    status_source: video
  - name: Scheduled SQL schema cleanup every fifth release
    status: unclear
    t: 2413
    verified: false
    status_source: video
  - name: Componentization architecture
    status: unclear
    t: 2519
    verified: false
    status_source: video
  - name: Replaceable component modules
    status: unclear
    t: 2540
    verified: false
    status_source: video
  - name: Selective module installation
    status: announced
    t: 2615
    verified: true
    status_source: video
objects_mentioned:
  - codeunit Sales Posting
  - codeunit Purchase Posting
  - other Journal Posting
  - table Dimensions
  - other Number Series
  - other Audit Codes
quotes:
  - t: 150
    text: code customization was a very successful model because it was very flexible but it had a a big downside
    check: exact
  - t: 170
    text: whenever we changed the code and we shipped a new version or you wanted to you had to code customize across different localizations then
    check: exact
  - t: 252
    text: the merge model the the merging code and the old code customization is not really fitted for the cloud right
    check: exact
  - t: 434
    text: I'd say over 90% is partner requested so we had this yeah so we had this basically Community Driven approach
    check: exact
  - t: 494
    text: right now in version 25 I think we have 22,500 events mhm um and in the in the first few years the the uh
    check: exact
  - t: 546
    text: we have about 3,400 events that are not used at all in the class nobody nobody we could remove them nobody would notice
    check: exact
  - t: 586
    text: 53% of events so that's 11,000 something events I think my math is right uh are used in less than 100 environments
    check: exact
  - t: 764
    text: when we want to make even something as simple as a bug fix right around where these events are or you want to refactor
    check: exact
  - t: 886
    text: 3 000 plus events that are not used in the cloud
    check: fuzzy
  - t: 967
    text: quite a lot of code where the events are just
    check: fuzzy
  - t: 1596
    text: the system app is just a physical packaging all just more convenient right to ship them together and version it potentially we could uh
    check: exact
  - t: 1669
    text: business foundation is meant to be the the foundational layer so the rule there is it
    check: fuzzy
  - t: 1801
    text: when we build these modules we actually we rewrite most of the code um so we we
    check: fuzzy
  - t: 2078
    text: we introduced Nam spaces yeah so we uh even though we still have the folder structure we added name spaces to the objects as
    check: exact
  - t: 2200
    text: when we introduced the system application at same time we introduced an obso scheme MH so uh in the past a new version would
    check: exact
  - t: 2220
    text: we obsolete code um we give Partners I think 12 to 18 months to to uptake so they get warnings so if they recompile
    check: exact
  - t: 2372
    text: we operate on a zero debt principle so if you if you want to change some code today you have to make sure that
    check: exact
  - t: 2372
    text: we operate on a zero debt principle so if you if you want to change some code today you have to make sure
    check: fuzzy
  - t: 2413
    text: every fifth release we're going to clean up the SQL schema
    check: exact
  - t: 2428
    text: if we removed the a field in in this release we don't want to delete it the next release right so we we need
    check: exact
  - t: 2489
    text: Partners will know several releases ahead of time like hey you know this field that they stopped using it's actually going away in a
    check: exact
  - t: 2519
    text: smaller apps that are that have one purpose because they're easier to understand they're easier to use we document them so that you know
    check: exact
  - t: 2635
    text: if they don't need a Char module inventory module or Supply Chain management you know pick pick your combination you would only install the
    check: snapped
---

# Business Central Under the Hood episode 6: We Have Too Many Events!

> Business Central Under the Hood episode 6 (published 2024-11-25) explains why Business Central has about 22,500 events in version 25, what cloud telemetry says about their use, and why Microsoft is moving toward interfaces, componentization, and cleaner obsolescence and schema handling.

[Watch on YouTube](https://www.youtube.com/watch?v=P-7dYVfB73E) · Microsoft Dynamics 365 Business Central (YouTube) · 2024-11-25 · 45:27 · tier official · **unreviewed** (machine-generated)

## Overview

The episode traces extensibility from code customization, through the introduction of events, to the current event volume. Version 25 has about 22,500 events, and over 90% of them were requested by partners through GitHub. Cloud telemetry shows about 3,400 unused events and 53% used in fewer than 100 environments. Some objects, such as the sales posting codeunit, hold over 600 events, which makes bug fixes and refactoring risky.

The second half covers the response. Newer and refactored areas use interfaces and extensible enums, and refactoring has produced about 10 times fewer events. The System Application and the Business Foundation layer (introduced in version 24) are built as modules. Namespaces, an obsolescence scheme with a 12 to 18 month uptake period, preprocessor symbols, a clean schema symbol, and an SQL schema cleanup every fifth release are described. Replaceable components and selective module installation are future ideas.

## Key points

- Version 25 has about 22,500 events. Growth has been linear since version 15, and over 90% of events were partner-requested through GitHub.
- Cloud telemetry (not on-premise) shows 3,400 unused events, 5,600 single-environment events, and 53% (about 11,000) used in fewer than 100 environments.
- Events are concentrated in a few objects. The sales posting codeunit has over 600 events, and density can reach one event per five lines of code, which makes bug fixes and refactoring risky.
- Handled events work like code customization, which events were meant to avoid. Interfaces and extensible enums give a clearer and more controlled contract.
- Removing unused events is a proposal, not yet done. Partners would be told in advance.
- Obsolete code is kept for 12 to 18 months so partners get recompile warnings. Preprocessor symbols and automated removal support a zero debt principle.
- A clean schema preprocessor symbol is introduced. The SQL schema will be cleaned every fifth release, and obsoleted fields are kept at least 2.5 years.

## Chapters

- [0:00](https://www.youtube.com/watch?v=P-7dYVfB73E&t=0s) Introduction and Background on Extensibility
- [1:11](https://www.youtube.com/watch?v=P-7dYVfB73E&t=71s) Code Customization Era and Its Challenges
- [2:50](https://www.youtube.com/watch?v=P-7dYVfB73E&t=170s) Introduction of Events and Migration to Cloud
- [5:13](https://www.youtube.com/watch?v=P-7dYVfB73E&t=313s) Early Event Implementation Strategy
- [7:14](https://www.youtube.com/watch?v=P-7dYVfB73E&t=434s) Event Growth History and Current Scale
- [8:55](https://www.youtube.com/watch?v=P-7dYVfB73E&t=535s) Analysis of Event Usage Telemetry
- [10:26](https://www.youtube.com/watch?v=P-7dYVfB73E&t=626s) Event Distribution Across Objects
- [11:44](https://www.youtube.com/watch?v=P-7dYVfB73E&t=704s) Problems with Event Density and Code Maintenance
- [13:25](https://www.youtube.com/watch?v=P-7dYVfB73E&t=805s) Event Overload and Events as Code Customization
- [17:08](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1028s) Event Placement and Distribution
- [18:59](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1139s) Extensibility Mechanisms and Moving Toward Interfaces
- [22:20](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1340s) Introduction to Componentization and System Application
- [26:16](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1576s) Modular Architecture and Business Foundation Layer
- [29:00](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1740s) Code Organization, Namespaces, and Breaking Changes Strategy
- [37:57](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2277s) Technical Debt Removal, Schema Cleanup, and Future Componentization

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Integration Events | status not stated | [3:31](https://www.youtube.com/watch?v=P-7dYVfB73E&t=211s) |  |
| Workflow Events | status not stated | [5:53](https://www.youtube.com/watch?v=P-7dYVfB73E&t=353s) |  |
| GitHub-driven Event Requests | status not stated | [6:54](https://www.youtube.com/watch?v=P-7dYVfB73E&t=414s) |  |
| Event Scale in Current Version | status not stated | [8:14](https://www.youtube.com/watch?v=P-7dYVfB73E&t=494s) |  |
| Event Usage Telemetry | status not stated | [9:06](https://www.youtube.com/watch?v=P-7dYVfB73E&t=546s) |  |
| Event Distribution Analysis | status not stated | [10:46](https://www.youtube.com/watch?v=P-7dYVfB73E&t=646s) |  |
| High Event Density in Core Objects | status not stated | [11:44](https://www.youtube.com/watch?v=P-7dYVfB73E&t=704s) |  |
| Event Cleanup Initiative | announced | [14:06](https://www.youtube.com/watch?v=P-7dYVfB73E&t=846s) | "we could choose to remove those um so we can tell Partners R we are going to remove some events you know it's coming" ([14:46](https://www.youtube.com/watch?v=P-7dYVfB73E&t=886s)) |
| Extensibility objects | status not stated | [19:20](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1160s) |  |
| Extensible enums | status not stated | [19:32](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1172s) |  |
| Interfaces for extensibility | status not stated | [19:32](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1172s) |  |
| Handled events | status not stated | [20:25](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1225s) |  |
| Refactoring toward interfaces | status not stated | [20:59](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1259s) |  |
| System Application | status not stated | [24:22](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1462s) |  |
| Business Foundation layer | status not stated | [27:28](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1648s) |  |
| Module Refactoring and Code Rewriting | status not stated | [30:21](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1821s) |  |
| Source Code Organization with Namespaces | status not stated | [34:18](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2058s) |  |
| Obsolescence Scheme with Deprecation Period | status not stated | [36:19](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2179s) |  |
| Pre-Processor Symbols for Obsolescence | status not stated | [37:57](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2277s) |  |
| Automated code removal at compilation | status not stated | [39:12](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2352s) |  |
| Clean schema preprocessor symbol | status not stated | [40:48](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2448s) |  |
| Scheduled SQL schema cleanup every fifth release | status not stated | [40:13](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2413s) |  |
| Componentization architecture | status not stated | [41:59](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2519s) |  |
| Replaceable component modules | status not stated | [42:20](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2540s) |  |
| Selective module installation | announced | [43:35](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2615s) | "there's a future where we could um not install all these modules uh more lean apps so like if you specific installation at a" ([43:35](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2615s)) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- codeunit "Sales Posting" at [11:44](https://www.youtube.com/watch?v=P-7dYVfB73E&t=704s)
- codeunit "Purchase Posting" at [11:44](https://www.youtube.com/watch?v=P-7dYVfB73E&t=704s)
- other "Journal Posting" at [6:14](https://www.youtube.com/watch?v=P-7dYVfB73E&t=374s)
- table "Dimensions" at [28:50](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1730s)
- other "Number Series" at [28:29](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1709s)
- other "Audit Codes" at [28:50](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1730s)

Not found in BC28-30: codeunit "Sales Posting", codeunit "Purchase Posting", table "Dimensions".

## Quotes

- [2:30](https://www.youtube.com/watch?v=P-7dYVfB73E&t=150s) "code customization was a very successful model because it was very flexible but it had a a big downside"
- [2:50](https://www.youtube.com/watch?v=P-7dYVfB73E&t=170s) "whenever we changed the code and we shipped a new version or you wanted to you had to code customize across different localizations then"
- [4:12](https://www.youtube.com/watch?v=P-7dYVfB73E&t=252s) "the merge model the the merging code and the old code customization is not really fitted for the cloud right"
- [7:14](https://www.youtube.com/watch?v=P-7dYVfB73E&t=434s) "I'd say over 90% is partner requested so we had this yeah so we had this basically Community Driven approach"
- [8:14](https://www.youtube.com/watch?v=P-7dYVfB73E&t=494s) "right now in version 25 I think we have 22,500 events mhm um and in the in the first few years the the uh"
- [9:06](https://www.youtube.com/watch?v=P-7dYVfB73E&t=546s) "we have about 3,400 events that are not used at all in the class nobody nobody we could remove them nobody would notice"
- [9:46](https://www.youtube.com/watch?v=P-7dYVfB73E&t=586s) "53% of events so that's 11,000 something events I think my math is right uh are used in less than 100 environments"
- [12:44](https://www.youtube.com/watch?v=P-7dYVfB73E&t=764s) "when we want to make even something as simple as a bug fix right around where these events are or you want to refactor"
- [14:46](https://www.youtube.com/watch?v=P-7dYVfB73E&t=886s) "3 000 plus events that are not used in the cloud"
- [16:07](https://www.youtube.com/watch?v=P-7dYVfB73E&t=967s) "quite a lot of code where the events are just"
- [26:36](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1596s) "the system app is just a physical packaging all just more convenient right to ship them together and version it potentially we could uh"
- [27:49](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1669s) "business foundation is meant to be the the foundational layer so the rule there is it"
- [30:01](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1801s) "when we build these modules we actually we rewrite most of the code um so we we"
- [34:38](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2078s) "we introduced Nam spaces yeah so we uh even though we still have the folder structure we added name spaces to the objects as"
- [36:40](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2200s) "when we introduced the system application at same time we introduced an obso scheme MH so uh in the past a new version would"
- [37:00](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2220s) "we obsolete code um we give Partners I think 12 to 18 months to to uptake so they get warnings so if they recompile"
- [39:32](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2372s) "we operate on a zero debt principle so if you if you want to change some code today you have to make sure that"
- [39:32](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2372s) "we operate on a zero debt principle so if you if you want to change some code today you have to make sure"
- [40:13](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2413s) "every fifth release we're going to clean up the SQL schema"
- [40:28](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2428s) "if we removed the a field in in this release we don't want to delete it the next release right so we we need"
- [41:29](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2489s) "Partners will know several releases ahead of time like hey you know this field that they stopped using it's actually going away in a"
- [41:59](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2519s) "smaller apps that are that have one purpose because they're easier to understand they're easier to use we document them so that you know"
- [43:55](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2635s) "if they don't need a Char module inventory module or Supply Chain management you know pick pick your combination you would only install the"

## Disclaimers in the video

- [14:46](https://www.youtube.com/watch?v=P-7dYVfB73E&t=886s) coming-later: we could choose to remove those um so we can tell Partners R we are going to remove some events you know it's coming
- [29:00](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1740s) coming-later: work there would be so that maybe if let's assume that's our next step right so what so you would be the work would be pulling everything that has to do with Dimensions
- [32:39](https://www.youtube.com/watch?v=P-7dYVfB73E&t=1959s) coming-later: we're still looking into how we can make that non-breaking and again this is all good
- [42:20](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2540s) not-in-this-release: we're not there yet so we could have their own HR module for example
- [43:35](https://www.youtube.com/watch?v=P-7dYVfB73E&t=2615s) coming-later: maybe there's a future where we could um not install all these modules uh more lean apps

Presenters (as heard): G, Unknown Speaker 1, Unknown Speaker 2, MH.
