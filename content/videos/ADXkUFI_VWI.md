---
id: video/ADXkUFI_VWI
type: video
title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
summary: "AL compiler internals and history, from the C/SIDE era to today: Roslyn-based design, partial compilation and LSP for Visual Studio Code, transpiling AL to C#, and the unsupported, undocumented state of the compiler API. Also covers prototype VS Code designers and AL Explorer."
tier: official
language: en
tags:
  - al compiler
  - compiler architecture
  - roslyn
  - language service protocol
  - visual studio code
  - c-side history
  - symbol references
  - partial compilation
  - intellisense
  - background compilation
  - transpiler
  - c# code generation
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
  input_hash: e7b937d33358fb9ff1ecdd736cacee4d43affc2be1cb8da21d6ac4a8f108a07c
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=399s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 399
    quote: In 2019, in wave two, we shipped the first AL compiler without the preview mark on it, and then at that time we could
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=466s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 466
    quote: they realized that they already have a. They have one compiler for a command line and almost a similar compiler that were used inside
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=490s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 490
    quote: the same compiler, the same base part of the compiler that serves the command line compilation is also the one that constantly runs in
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=549s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 549
    quote: i mean rosslyn already contains the b net c and also f based on the same core libraries but it's they
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=563s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 563
    quote: we have way more concepts than C# for instance. So in some some sense we are more complicated because we have I mean 7-8
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=687s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 687
    quote: we also realized that we could easily repurpose A compiler to another environment if we had to. But turned out that best decision ever
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=804s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 804
    quote: it's textbook to create a compiler that has a perfect source, but but having a source where you are typing something in the middle
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=868s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 868
    quote: They actually invented what is called the Language Service Protocol exactly for this
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=941s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 941
    quote: One of the reasons is that we we we need a sandbox language. Since we are running third party code on our servers, we
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1008s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 1008
    quote: This is a language that's been written for for ERP and for Business Central. Exactly. But the most important part of this was that
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1088s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 1088
    quote: We are converting AL to C#. Is that a good idea? Yes, I think for us it is
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1190s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 1190
    quote: compiler the code is actually saved in text file like any like many other languages
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1540s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 1540
    quote: That's still a prototype. Right, still a prototype. I would love us to prioritize them, but again, we need to prioritize.
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1574s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 1574
    quote: They would like to be able to use it to do all sorts of things and some people actually doing it already in a
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1588s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 1588
    quote: It's envisioned as a service we haven't officially opened up for. New for for external use means that we haven't documented it
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1611s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 1611
    quote: We're not preventing it. We're not just supporting it and we we reserve ourselves the right to change it at any time.
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1635s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 1635
    quote: Already incredibly many AL related extensions in the Visual Studio Code Marketplace, which is amazing to see
  - kind: video
    url: https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1671s
    title: "Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler"
    date: "2024-03-27T12:00:02.000Z"
    commit: null
    t: 1671
    quote: There's of course our own documentation on Ms. learning, which is both a combination of reference documentation but also getting started documentation.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: ADXkUFI_VWI
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=ADXkUFI_VWI
published_at: "2024-03-27T12:00:02.000Z"
duration_s: 1751
captions: full
audience:
  - developer
  - partner
  - decision maker
chapters:
  - t: 0
    title: "History: C-side and the 2T architecture"
  - t: 122
    title: Challenges with C-side and the modernization vision
  - t: 233
    title: The prototype and symbol reference strategy
  - t: 363
    title: Early previews and the journey to GA
  - t: 429
    title: Roslyn architecture and the compiler design
  - t: 549
    title: AL language concepts and the perfect storm timing
  - t: 672
    title: Visual Studio Code adoption and language service architecture
  - t: 797
    title: Partial compilation, LSP protocol, and extensibility
  - t: 927
    title: Why AL instead of existing languages
  - t: 1008
    title: AL transpiler and code generation to C#
  - t: 1154
    title: Migration from C/SIDE to AL and text-based development
  - t: 1326
    title: Visual Studio Code designers and AL Explorer
  - t: 1553
    title: Compiler API exposure and getting started
features:
  - name: AL compiler
    status: unclear
    t: 8
    verified: false
    status_source: video
  - name: Partial compilation and recovery
    status: unclear
    t: 783
    verified: false
    status_source: video
  - name: Language Service Protocol support
    status: unclear
    t: 731
    verified: false
    status_source: video
  - name: Symbol reference information wrapping
    status: unclear
    t: 233
    verified: false
    status_source: video
  - name: AL transpiler to C#
    status: unclear
    t: 1008
    verified: false
    status_source: video
  - name: Text-based source code storage
    status: unclear
    t: 1154
    verified: false
    status_source: video
  - name: AL Explorer
    status: unclear
    t: 1326
    verified: false
    status_source: video
  - name: AL Home
    status: unclear
    t: 1326
    verified: false
    status_source: video
  - name: Visual Studio Code designers
    status: unclear
    t: 1516
    verified: false
    status_source: video
  - name: Compiler API exposure
    status: unclear
    t: 1553
    verified: false
    status_source: video
  - name: AL extensions in Visual Studio Code marketplace
    status: unclear
    t: 1635
    verified: false
    status_source: video
objects_mentioned:
  - codeunit safe post code unit
  - other AL Explorer
  - other AL Home
  - other Visual Studio Code Marketplace
quotes:
  - t: 399
    text: In 2019, in wave two, we shipped the first AL compiler without the preview mark on it, and then at that time we could
    check: exact
  - t: 466
    text: they realized that they already have a. They have one compiler for a command line and almost a similar compiler that were used inside
    check: exact
  - t: 490
    text: the same compiler, the same base part of the compiler that serves the command line compilation is also the one that constantly runs in
    check: exact
  - t: 549
    text: i mean rosslyn already contains the b net c and also f based on the same core libraries but it's they
    check: fuzzy
  - t: 563
    text: we have way more concepts than C# for instance. So in some some sense we are more complicated because we have I mean 7-8
    check: exact
  - t: 687
    text: we also realized that we could easily repurpose A compiler to another environment if we had to. But turned out that best decision ever
    check: exact
  - t: 804
    text: it's textbook to create a compiler that has a perfect source, but but having a source where you are typing something in the middle
    check: exact
  - t: 868
    text: They actually invented what is called the Language Service Protocol exactly for this
    check: exact
  - t: 941
    text: One of the reasons is that we we we need a sandbox language. Since we are running third party code on our servers, we
    check: exact
  - t: 1008
    text: This is a language that's been written for for ERP and for Business Central. Exactly. But the most important part of this was that
    check: exact
  - t: 1088
    text: We are converting AL to C#. Is that a good idea? Yes, I think for us it is
    check: exact
  - t: 1190
    text: compiler the code is actually saved in text file like any like many other languages
    check: fuzzy
  - t: 1540
    text: That's still a prototype. Right, still a prototype. I would love us to prioritize them, but again, we need to prioritize.
    check: exact
  - t: 1574
    text: They would like to be able to use it to do all sorts of things and some people actually doing it already in a
    check: exact
  - t: 1588
    text: It's envisioned as a service we haven't officially opened up for. New for for external use means that we haven't documented it
    check: exact
  - t: 1611
    text: We're not preventing it. We're not just supporting it and we we reserve ourselves the right to change it at any time.
    check: exact
  - t: 1635
    text: Already incredibly many AL related extensions in the Visual Studio Code Marketplace, which is amazing to see
    check: exact
  - t: 1671
    text: There's of course our own documentation on Ms. learning, which is both a combination of reference documentation but also getting started documentation.
    check: exact
---

# Business Central Under the Hood episode 2: The Inner Workings of The AL Compiler

> AL compiler internals and history, from the C/SIDE era to today: Roslyn-based design, partial compilation and LSP for Visual Studio Code, transpiling AL to C#, and the unsupported, undocumented state of the compiler API. Also covers prototype VS Code designers and AL Explorer.

[Watch on YouTube](https://www.youtube.com/watch?v=ADXkUFI_VWI) · Microsoft Dynamics 365 Business Central (YouTube) · 2024-03-27 · 29:11 · tier official · **unreviewed** (machine-generated)

## Overview

Episode 2 of Business Central Under the Hood (published 2024-03-27, 29 minutes) walks through how the AL compiler came about and how it works. It starts with C/SIDE and its two-tier architecture, the prototype that wrapped the old base app in symbol references, and the years of early previews before the first AL compiler shipped without a preview mark in 2019 wave two.

It then covers the design: Roslyn concepts, a compiler-as-a-service that also drives the language server, partial compilation with error recovery, and the Language Service Protocol used with Visual Studio Code. It explains why AL was built instead of reusing an existing language, why AL is transpiled to C#, and what moving to text files meant. It closes with the VS Code designers prototype, AL Explorer, AL Home, and the status of the compiler API.

## Key points

- The AL compiler uses Roslyn architecture concepts. The same base compiler serves command-line compilation and the background compilation that runs in the editor.
- Partial compilation with error recovery gives intellisense while code is incomplete. Results are reused to keep memory use down and avoid recompiling unchanged code.
- The editor and the AL language server communicate through the Language Service Protocol.
- AL is transpiled to C#, and the generated C# is compiled with the regular C# compiler. Metadata is stored in XML and the database.
- A sandbox language was one stated reason for AL, because third-party code runs on Microsoft's servers.
- Moving to text-file source enabled Git and standard source control, but C/SIDE visual designers and the direct database connection were lost.
- The compiler API is not officially supported or documented, and may change at any time. Partners already use it in unsupported ways.

## Chapters

- [0:00](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=0s) History: C-side and the 2T architecture
- [2:02](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=122s) Challenges with C-side and the modernization vision
- [3:53](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=233s) The prototype and symbol reference strategy
- [6:03](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=363s) Early previews and the journey to GA
- [7:09](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=429s) Roslyn architecture and the compiler design
- [9:09](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=549s) AL language concepts and the perfect storm timing
- [11:12](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=672s) Visual Studio Code adoption and language service architecture
- [13:17](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=797s) Partial compilation, LSP protocol, and extensibility
- [15:27](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=927s) Why AL instead of existing languages
- [16:48](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1008s) AL transpiler and code generation to C#
- [19:14](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1154s) Migration from C/SIDE to AL and text-based development
- [22:06](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1326s) Visual Studio Code designers and AL Explorer
- [25:53](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1553s) Compiler API exposure and getting started

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| AL compiler | status not stated | [0:08](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=8s) |  |
| Partial compilation and recovery | status not stated | [13:03](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=783s) |  |
| Language Service Protocol support | status not stated | [12:11](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=731s) |  |
| Symbol reference information wrapping | status not stated | [3:53](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=233s) |  |
| AL transpiler to C# | status not stated | [16:48](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1008s) |  |
| Text-based source code storage | status not stated | [19:14](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1154s) |  |
| AL Explorer | status not stated | [22:06](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1326s) |  |
| AL Home | status not stated | [22:06](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1326s) |  |
| Visual Studio Code designers | status not stated, demoed | [25:16](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1516s) |  |
| Compiler API exposure | status not stated | [25:53](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1553s) |  |
| AL extensions in Visual Studio Code marketplace | status not stated | [27:15](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1635s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- codeunit "safe post code unit" at [4:18](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=258s)
- other "AL Explorer" at [24:12](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1452s)
- other "AL Home" at [24:48](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1488s)
- other "Visual Studio Code Marketplace" at [27:15](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1635s)

Not found in BC28-30: codeunit "safe post code unit".

## Quotes

- [6:39](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=399s) "In 2019, in wave two, we shipped the first AL compiler without the preview mark on it, and then at that time we could"
- [7:46](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=466s) "they realized that they already have a. They have one compiler for a command line and almost a similar compiler that were used inside"
- [8:10](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=490s) "the same compiler, the same base part of the compiler that serves the command line compilation is also the one that constantly runs in"
- [9:09](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=549s) "i mean rosslyn already contains the b net c and also f based on the same core libraries but it's they"
- [9:23](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=563s) "we have way more concepts than C# for instance. So in some some sense we are more complicated because we have I mean 7-8"
- [11:27](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=687s) "we also realized that we could easily repurpose A compiler to another environment if we had to. But turned out that best decision ever"
- [13:24](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=804s) "it's textbook to create a compiler that has a perfect source, but but having a source where you are typing something in the middle"
- [14:28](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=868s) "They actually invented what is called the Language Service Protocol exactly for this"
- [15:41](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=941s) "One of the reasons is that we we we need a sandbox language. Since we are running third party code on our servers, we"
- [16:48](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1008s) "This is a language that's been written for for ERP and for Business Central. Exactly. But the most important part of this was that"
- [18:08](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1088s) "We are converting AL to C#. Is that a good idea? Yes, I think for us it is"
- [19:50](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1190s) "compiler the code is actually saved in text file like any like many other languages"
- [25:40](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1540s) "That's still a prototype. Right, still a prototype. I would love us to prioritize them, but again, we need to prioritize."
- [26:14](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1574s) "They would like to be able to use it to do all sorts of things and some people actually doing it already in a"
- [26:28](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1588s) "It's envisioned as a service we haven't officially opened up for. New for for external use means that we haven't documented it"
- [26:51](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1611s) "We're not preventing it. We're not just supporting it and we we reserve ourselves the right to change it at any time."
- [27:15](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1635s) "Already incredibly many AL related extensions in the Visual Studio Code Marketplace, which is amazing to see"
- [27:51](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1671s) "There's of course our own documentation on Ms. learning, which is both a combination of reference documentation but also getting started documentation."

## Disclaimers in the video

- [6:03](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=363s) preview: early previews of it. And we did that for a couple of years, and the initial one was only we could create simple code units, simple tables, pages.
- [25:40](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1540s) preview: That's still a prototype
- [25:53](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1553s) preview: It's still the prototype label
- [26:28](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1588s) preview: It's envisioned as a service we haven't officially opened up for. New for for external use means that we haven't documented it
- [26:51](https://www.youtube.com/watch?v=ADXkUFI_VWI&t=1611s) subject-to-change: We reserve ourselves the right to change it at any time

Presenters (as heard): Espen.
