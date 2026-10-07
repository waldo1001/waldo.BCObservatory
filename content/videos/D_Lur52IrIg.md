---
id: video/D_Lur52IrIg
type: video
title: What's new in AL and Tools (2026 release wave 2)
summary: "What's new in AL and Tools for 2026 release wave 2: AL MCP environment symbol search and next object ID tool, project-aware AL language server over LSP, interface default implementations, public resource folders, big integer migration, namespaced translations, IsDirty, data-driven tests, test handlers, static call graph analysis, and MCP proxies for profiling and snapshots."
tier: official
language: en
tags:
  - al mcp
  - language server protocol
  - symbol search
  - interface design
  - default implementation
  - public resources
  - field type migration
  - big integer
  - object ids
  - extension patterns
  - audit fields
  - dirty state
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
  input_hash: b9261ecd5c3a38e6100838e9fc7ae9db82d355f2c2c13448c5b79e445ed30b0b
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=43s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 43
    quote: We have the ALMCP that we launched uh in the last release and that gives AI agents real tools to work with your AL
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=122s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 122
    quote: In this wave, an agent can search the connected environment and get back not just the object but the app that owns it uh
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=276s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 276
    quote: It's called source. And here you can now choose environment.
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=469s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 469
    quote: Um, we also now have something new in this release which is the default implementation of this interface.
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=479s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 479
    quote: So now you don't have to implement a method in an interface if there is a default implementation. This is critical for allowing you
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=665s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 665
    quote: But now we have the ability to specify the public resource folders. This means that resources in these folders are available to anyone outside
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=833s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 833
    quote: So we made it possible for you to switch to big integer by changing the type.
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=833s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 833
    quote: we made it possible for you to switch to big integer by changing the type
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=901s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 901
    quote: to a big integer and we have to be mindful that this will or can cause overflow at runtime
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=950s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 950
    quote: we can now mix our base uh field with our extension field and get a nice index that is uh very useful
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=1025s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 1025
    quote: Now we've also added namespaces to our translations
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=1256s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 1256
    quote: we're actually adding datadriven tests so that one test method can run many scenarios
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=1461s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 1461
    quote: There are several things that you can do in the test handler. If we go and look at the interface, we can see on
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=1573s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 1573
    quote: we have added a static call graph analysis. And that means that our tool will build a graph across the extension and its dependencies
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=1573s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 1573
    quote: If we change this internal fee calculation, who can call it and which public entry points should we review?
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=1587s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 1587
    quote: Our tool will build a graph across the extension and its dependencies. And then you or your coding agent can query this.
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=1654s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 1654
    quote: Counter to the LSP which is actually looking at the project as it is now. This is a static thing that we can do
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=1752s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 1752
    quote: This is important because we have methods in our code that we want to protect that we want to somehow understand what the call
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=1848s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 1848
    quote: coding agents can now capture the performance profiles and the snapshot recordings themselves through dedicated mcp
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=1889s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 1889
    quote: Our focus has been on the agentic experience, right? Having agents do this work for us and come up with suggestions on how to
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=2007s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 2007
    quote: why are these called proxies this is because the actual work all happens on the server there's no snapshot or
  - kind: video
    url: https://www.youtube.com/watch?v=D_Lur52IrIg&t=2049s
    title: What's new in AL and Tools (2026 release wave 2)
    date: "2026-10-01T13:04:04.000Z"
    commit: null
    t: 2049
    quote: we started with an app we wanted to extend another list of tools we found
links:
  learn: []
  objects: []
  features:
    - feature/573313
    - feature/573333
    - feature/573335
    - feature/573336
    - feature/573338
    - feature/573339
    - feature/573346
    - feature/573352
    - feature/573359
    - feature/573360
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: D_Lur52IrIg
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=D_Lur52IrIg
published_at: "2026-10-01T13:04:04.000Z"
duration_s: 2091
captions: full
audience:
  - developer
  - partner
chapters:
  - t: 0
    title: "Building blocks: AL MCP and AL language server"
  - t: 86
    title: "Discovery phase: understanding existing code with AI agents"
  - t: 151
    title: Environment-aware symbol search via AL MCP
  - t: 246
    title: Getting next available object IDs and planning changes
  - t: 348
    title: Using LSP to understand fee calculation flow
  - t: 409
    title: Interface default implementations for backward-compatible extension
  - t: 564
    title: Sharing resources, big integers, table extensions, and namespaces
  - t: 649
    title: Public resource folders without dependencies
  - t: 803
    title: Integer to big integer field migration and AppSource COP warnings
  - t: 887
    title: Extending tables with SQL-friendly indexes
  - t: 977
    title: Namespaced translations to prevent collisions
  - t: 1057
    title: "Intent-making language features: tooltips and audit fields"
  - t: 1150
    title: System audit fields, record dirty-state detection, and data-driven testing
  - t: 1409
    title: Test handlers and static call graph analysis
  - t: 1677
    title: Production debugging with agents and MCP proxies
features:
  - name: AL MCP (AL Management Control Platform)
    status: ga
    t: 43
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573339"
      - "573346"
  - name: AL language server with project awareness
    status: ga
    t: 74
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573338"
  - name: Symbol search with environment source parameter
    status: ga
    t: 220
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573339"
  - name: Get next object ID tool in AL MCP
    status: ga
    t: 302
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573346"
  - name: Interface default implementations
    status: ga
    t: 458
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573352"
  - name: Public resource folders
    status: unclear
    t: 587
    verified: false
    status_source: video
  - name: Big integer field type migration
    status: unclear
    t: 820
    verified: false
    status_source: video
  - name: Table extension key improvements
    status: unclear
    t: 606
    verified: false
    status_source: video
  - name: Namespace support in translation IDs
    status: ga
    t: 636
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573359"
  - name: Mixed extension and base field SQL indexes
    status: unclear
    t: 939
    verified: false
    status_source: video
  - name: Action tooltip inheritance from page
    status: ga
    t: 1072
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573313"
  - name: Audit name fields as system fields
    status: unclear
    t: 1150
    verified: false
    status_source: video
  - name: Record.IsDirty() method
    status: ga
    t: 1202
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573360"
  - name: Data-driven testing framework
    status: ga
    t: 1232
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573333"
  - name: Test handler interface for lifecycle hooks
    status: ga
    t: 1409
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573333"
  - name: Static call graph analysis
    status: ga
    t: 1547
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573336"
  - name: Agent-assisted production investigation
    status: ga
    t: 1827
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573335"
  - name: Launch profiling MCP proxy
    status: ga
    t: 1875
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573335"
  - name: Launch snapshot MCP proxy
    status: unclear
    t: 1964
    verified: false
    status_source: video
  - name: Isolated storage explicit read isolation level
    status: unclear
    t: 1072
    verified: false
    status_source: video
objects_mentioned:
  - interface Calculate Fee
  - table Customer Ledger Entry
  - other late fee entries
  - other fee sequence
  - enum test handler
  - other late fee logger
  - codeunit Late Fee Management Apply Fee
  - page Late Fee Entries
quotes:
  - t: 43
    text: We have the ALMCP that we launched uh in the last release and that gives AI agents real tools to work with your AL
    check: exact
  - t: 122
    text: In this wave, an agent can search the connected environment and get back not just the object but the app that owns it uh
    check: exact
  - t: 276
    text: It's called source. And here you can now choose environment.
    check: exact
  - t: 469
    text: Um, we also now have something new in this release which is the default implementation of this interface.
    check: exact
  - t: 479
    text: So now you don't have to implement a method in an interface if there is a default implementation. This is critical for allowing you
    check: exact
  - t: 665
    text: But now we have the ability to specify the public resource folders. This means that resources in these folders are available to anyone outside
    check: exact
  - t: 833
    text: So we made it possible for you to switch to big integer by changing the type.
    check: exact
  - t: 833
    text: we made it possible for you to switch to big integer by changing the type
    check: exact
  - t: 901
    text: to a big integer and we have to be mindful that this will or can cause overflow at runtime
    check: fuzzy
  - t: 950
    text: we can now mix our base uh field with our extension field and get a nice index that is uh very useful
    check: exact
  - t: 1025
    text: Now we've also added namespaces to our translations
    check: exact
  - t: 1256
    text: we're actually adding datadriven tests so that one test method can run many scenarios
    check: exact
  - t: 1461
    text: There are several things that you can do in the test handler. If we go and look at the interface, we can see on
    check: exact
  - t: 1573
    text: we have added a static call graph analysis. And that means that our tool will build a graph across the extension and its dependencies
    check: exact
  - t: 1573
    text: If we change this internal fee calculation, who can call it and which public entry points should we review?
    check: exact
  - t: 1587
    text: Our tool will build a graph across the extension and its dependencies. And then you or your coding agent can query this.
    check: exact
  - t: 1654
    text: Counter to the LSP which is actually looking at the project as it is now. This is a static thing that we can do
    check: exact
  - t: 1752
    text: This is important because we have methods in our code that we want to protect that we want to somehow understand what the call
    check: exact
  - t: 1848
    text: coding agents can now capture the performance profiles and the snapshot recordings themselves through dedicated mcp
    check: fuzzy
  - t: 1889
    text: Our focus has been on the agentic experience, right? Having agents do this work for us and come up with suggestions on how to
    check: exact
  - t: 2007
    text: why are these called proxies this is because the actual work all happens on the server there's no snapshot or
    check: fuzzy
  - t: 2049
    text: we started with an app we wanted to extend another list of tools we found
    check: fuzzy
---

# What's new in AL and Tools (2026 release wave 2)

> What's new in AL and Tools for 2026 release wave 2: AL MCP environment symbol search and next object ID tool, project-aware AL language server over LSP, interface default implementations, public resource folders, big integer migration, namespaced translations, IsDirty, data-driven tests, test handlers, static call graph analysis, and MCP proxies for profiling and snapshots.

[Watch on YouTube](https://www.youtube.com/watch?v=D_Lur52IrIg) · Microsoft Dynamics 365 Business Central (YouTube) · 2026-10-01 · 34:51 · tier official · **unreviewed** (machine-generated)

## Overview

The session walks through a late-fee extension scenario to show how AI agents and new AL features work together. It starts with AL MCP and the AL language server (LSP, no longer tied to Visual Studio Code), then covers discovering existing code, searching symbols in a connected environment, and getting the next free object ID.

It then covers language and compiler changes: default implementations on interfaces, public resource folders, integer to big integer field migration with AppSource COP warnings, table extension keys and SQL indexes mixing base and extension fields, and namespaced translation IDs. The last part covers tooltip inheritance, audit name system fields, Record.IsDirty(), data-driven tests, test handlers, static call graph analysis, and agent-driven profiling and snapshot capture. The presenters say full sessions on some of these topics are coming and will be linked in the description.

## Key points

- AL symbol search has a new 'source' parameter. Set it to 'environment' to search the connected server without downloading symbols or adding dependencies. It returns the owning app for each object.
- The new get-next-object-ID MCP tool reads the ID ranges in app.json and suggests the next free ID, so it depends on a correct app.json.
- Interfaces can have default method implementations, so existing implementers keep compiling. New methods get a RequiredPending attribute that signals a breaking change in a future major version.
- Public resource folders make resources available to other apps without a dependency. Access to private resources by app ID returns an error, and consumers must handle missing resources.
- Changing a field from integer to big integer causes implicit conversion warnings. AppSource COP flags the change against the previous version, and dependent apps can overflow at runtime if they keep integer types.
- Translations now support namespace-based keys. Namespacing existing objects requires regenerating the XLF files.
- Static call graph analysis needs an offline extraction step first. It lists callers of a method and the public entry points to review, and it complements the live-project LSP.

## Chapters

- [0:00](https://www.youtube.com/watch?v=D_Lur52IrIg&t=0s) Building blocks: AL MCP and AL language server
- [1:26](https://www.youtube.com/watch?v=D_Lur52IrIg&t=86s) Discovery phase: understanding existing code with AI agents
- [2:31](https://www.youtube.com/watch?v=D_Lur52IrIg&t=151s) Environment-aware symbol search via AL MCP
- [4:06](https://www.youtube.com/watch?v=D_Lur52IrIg&t=246s) Getting next available object IDs and planning changes
- [5:48](https://www.youtube.com/watch?v=D_Lur52IrIg&t=348s) Using LSP to understand fee calculation flow
- [6:49](https://www.youtube.com/watch?v=D_Lur52IrIg&t=409s) Interface default implementations for backward-compatible extension
- [9:24](https://www.youtube.com/watch?v=D_Lur52IrIg&t=564s) Sharing resources, big integers, table extensions, and namespaces
- [10:49](https://www.youtube.com/watch?v=D_Lur52IrIg&t=649s) Public resource folders without dependencies
- [13:23](https://www.youtube.com/watch?v=D_Lur52IrIg&t=803s) Integer to big integer field migration and AppSource COP warnings
- [14:47](https://www.youtube.com/watch?v=D_Lur52IrIg&t=887s) Extending tables with SQL-friendly indexes
- [16:17](https://www.youtube.com/watch?v=D_Lur52IrIg&t=977s) Namespaced translations to prevent collisions
- [17:37](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1057s) Intent-making language features: tooltips and audit fields
- [19:10](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1150s) System audit fields, record dirty-state detection, and data-driven testing
- [23:29](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1409s) Test handlers and static call graph analysis
- [27:57](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1677s) Production debugging with agents and MCP proxies

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| AL MCP (AL Management Control Platform) | generally available (roadmap [573339](../features/573339.md), [573346](../features/573346.md)), demoed | [0:43](https://www.youtube.com/watch?v=D_Lur52IrIg&t=43s) |  |
| AL language server with project awareness | generally available (roadmap [573338](../features/573338.md)), demoed | [1:14](https://www.youtube.com/watch?v=D_Lur52IrIg&t=74s) |  |
| Symbol search with environment source parameter | generally available (roadmap [573339](../features/573339.md)), demoed | [3:40](https://www.youtube.com/watch?v=D_Lur52IrIg&t=220s) |  |
| Get next object ID tool in AL MCP | generally available (roadmap [573346](../features/573346.md)), demoed | [5:02](https://www.youtube.com/watch?v=D_Lur52IrIg&t=302s) |  |
| Interface default implementations | generally available (roadmap [573352](../features/573352.md)), demoed | [7:38](https://www.youtube.com/watch?v=D_Lur52IrIg&t=458s) |  |
| Public resource folders | status not stated, demoed | [9:47](https://www.youtube.com/watch?v=D_Lur52IrIg&t=587s) |  |
| Big integer field type migration | status not stated, demoed | [13:40](https://www.youtube.com/watch?v=D_Lur52IrIg&t=820s) |  |
| Table extension key improvements | status not stated | [10:06](https://www.youtube.com/watch?v=D_Lur52IrIg&t=606s) |  |
| Namespace support in translation IDs | generally available (roadmap [573359](../features/573359.md)), demoed | [10:36](https://www.youtube.com/watch?v=D_Lur52IrIg&t=636s) |  |
| Mixed extension and base field SQL indexes | status not stated, demoed | [15:39](https://www.youtube.com/watch?v=D_Lur52IrIg&t=939s) |  |
| Action tooltip inheritance from page | generally available (roadmap [573313](../features/573313.md)), demoed | [17:52](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1072s) |  |
| Audit name fields as system fields | status not stated, demoed | [19:10](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1150s) |  |
| Record.IsDirty() method | generally available (roadmap [573360](../features/573360.md)), demoed | [20:02](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1202s) |  |
| Data-driven testing framework | generally available (roadmap [573333](../features/573333.md)), demoed | [20:32](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1232s) |  |
| Test handler interface for lifecycle hooks | generally available (roadmap [573333](../features/573333.md)), demoed | [23:29](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1409s) |  |
| Static call graph analysis | generally available (roadmap [573336](../features/573336.md)), demoed | [25:47](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1547s) |  |
| Agent-assisted production investigation | generally available (roadmap [573335](../features/573335.md)) | [30:27](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1827s) |  |
| Launch profiling MCP proxy | generally available (roadmap [573335](../features/573335.md)), demoed | [31:15](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1875s) |  |
| Launch snapshot MCP proxy | status not stated, demoed | [32:44](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1964s) |  |
| Isolated storage explicit read isolation level | status not stated | [17:52](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1072s) |  |

A status with a roadmap link comes from the Microsoft 365 roadmap feature this part of the video covers (matched by Haiku; links Opus dropped are not used); other statuses need a status word in the video itself.

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- interface "Calculate Fee" at [7:49](https://www.youtube.com/watch?v=D_Lur52IrIg&t=469s)
- table "Customer Ledger Entry" at [3:40](https://www.youtube.com/watch?v=D_Lur52IrIg&t=220s)
- other "late fee entries" at [19:22](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1162s)
- other "fee sequence" at [15:50](https://www.youtube.com/watch?v=D_Lur52IrIg&t=950s)
- enum "test handler" at [24:01](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1441s)
- other "late fee logger" at [23:49](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1429s)
- codeunit "Late Fee Management Apply Fee" at [28:29](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1709s)
- page "Late Fee Entries" at [28:51](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1731s)

Not found in BC28-30: interface "Calculate Fee", table "Customer Ledger Entry", enum "test handler", codeunit "Late Fee Management Apply Fee", page "Late Fee Entries".

## Quotes

- [0:43](https://www.youtube.com/watch?v=D_Lur52IrIg&t=43s) "We have the ALMCP that we launched uh in the last release and that gives AI agents real tools to work with your AL"
- [2:02](https://www.youtube.com/watch?v=D_Lur52IrIg&t=122s) "In this wave, an agent can search the connected environment and get back not just the object but the app that owns it uh"
- [4:36](https://www.youtube.com/watch?v=D_Lur52IrIg&t=276s) "It's called source. And here you can now choose environment."
- [7:49](https://www.youtube.com/watch?v=D_Lur52IrIg&t=469s) "Um, we also now have something new in this release which is the default implementation of this interface."
- [7:59](https://www.youtube.com/watch?v=D_Lur52IrIg&t=479s) "So now you don't have to implement a method in an interface if there is a default implementation. This is critical for allowing you"
- [11:05](https://www.youtube.com/watch?v=D_Lur52IrIg&t=665s) "But now we have the ability to specify the public resource folders. This means that resources in these folders are available to anyone outside"
- [13:53](https://www.youtube.com/watch?v=D_Lur52IrIg&t=833s) "So we made it possible for you to switch to big integer by changing the type."
- [13:53](https://www.youtube.com/watch?v=D_Lur52IrIg&t=833s) "we made it possible for you to switch to big integer by changing the type"
- [15:01](https://www.youtube.com/watch?v=D_Lur52IrIg&t=901s) "to a big integer and we have to be mindful that this will or can cause overflow at runtime"
- [15:50](https://www.youtube.com/watch?v=D_Lur52IrIg&t=950s) "we can now mix our base uh field with our extension field and get a nice index that is uh very useful"
- [17:05](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1025s) "Now we've also added namespaces to our translations"
- [20:56](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1256s) "we're actually adding datadriven tests so that one test method can run many scenarios"
- [24:21](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1461s) "There are several things that you can do in the test handler. If we go and look at the interface, we can see on"
- [26:13](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1573s) "we have added a static call graph analysis. And that means that our tool will build a graph across the extension and its dependencies"
- [26:13](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1573s) "If we change this internal fee calculation, who can call it and which public entry points should we review?"
- [26:27](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1587s) "Our tool will build a graph across the extension and its dependencies. And then you or your coding agent can query this."
- [27:34](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1654s) "Counter to the LSP which is actually looking at the project as it is now. This is a static thing that we can do"
- [29:12](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1752s) "This is important because we have methods in our code that we want to protect that we want to somehow understand what the call"
- [30:48](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1848s) "coding agents can now capture the performance profiles and the snapshot recordings themselves through dedicated mcp"
- [31:29](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1889s) "Our focus has been on the agentic experience, right? Having agents do this work for us and come up with suggestions on how to"
- [33:27](https://www.youtube.com/watch?v=D_Lur52IrIg&t=2007s) "why are these called proxies this is because the actual work all happens on the server there's no snapshot or"
- [34:09](https://www.youtube.com/watch?v=D_Lur52IrIg&t=2049s) "we started with an app we wanted to extend another list of tools we found"

## Disclaimers in the video

- [26:27](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1587s) coming-later: we're going to have a full session on this. And we'll add the link in the description.
- [29:31](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1771s) coming-later: Take a look at the video that Peter mentioned because there's a lot more to this graph tool than I can cover here.
- [31:15](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1875s) coming-later: we will have a recorded session on this to go through details in the capabilities and again we will link this in the description

Presenters (as heard): Peter, Stefan, Stephan.
