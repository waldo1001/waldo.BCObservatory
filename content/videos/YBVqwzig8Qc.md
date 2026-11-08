---
id: video/YBVqwzig8Qc
type: video
title: What probem? I can stop whenever I want! (More Games in AL and Business Central)
summary: "Demo of retro game ports running in Business Central through AL: Galaga, which needed a Z80 processor emulator written in AL because the game is pure Z80 assembler, and Quake, which uses an enhanced C2AL converter and a soft renderer. Both build on the earlier Doom port's UI and approach. The video also covers ROM sourcing and Quake's performance limits."
tier: community
language: en
tags:
  - al
  - game development
  - emulation
  - z80 processor
  - c2al converter
  - quake engine
  - galaga port
  - doom port
  - al-go
  - code generation
system: development
review:
  state: reviewed
  by: opus
  at: "2026-11-08T00:23:54.000Z"
  flags: []
generated:
  at: "2026-11-08T00:23:54.146Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 973d6df1394f958ef0e3839a2b453f5a666f24eabd1d1be34d5806b51a4ae613
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=YBVqwzig8Qc&t=27s
    title: What probem? I can stop whenever I want! (More Games in AL and Business Central)
    date: "2026-11-02T11:00:15.000Z"
    commit: null
    t: 27
    quote: finally answered the uh each old question uh can it run Doom?
  - kind: video
    url: https://www.youtube.com/watch?v=YBVqwzig8Qc&t=147s
    title: What probem? I can stop whenever I want! (More Games in AL and Business Central)
    date: "2026-11-02T11:00:15.000Z"
    commit: null
    t: 147
    quote: Galaga is not written in C. Galaga is written in pure assembler for the Z80 uh processor.
  - kind: video
    url: https://www.youtube.com/watch?v=YBVqwzig8Qc&t=267s
    title: What probem? I can stop whenever I want! (More Games in AL and Business Central)
    date: "2026-11-02T11:00:15.000Z"
    commit: null
    t: 267
    quote: The Z80 is a has a 64K RAM address space. So, memory is just an array of integers.
  - kind: video
    url: https://www.youtube.com/watch?v=YBVqwzig8Qc&t=387s
    title: What probem? I can stop whenever I want! (More Games in AL and Business Central)
    date: "2026-11-02T11:00:15.000Z"
    commit: null
    t: 387
    quote: implemented all the op codes for a z80 processor and and and this thing is is more or less generic
  - kind: video
    url: https://www.youtube.com/watch?v=YBVqwzig8Qc&t=633s
    title: What probem? I can stop whenever I want! (More Games in AL and Business Central)
    date: "2026-11-02T11:00:15.000Z"
    commit: null
    t: 633
    quote: the C2AL tool gained a lot of extra functionality in order to do Quake
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: YBVqwzig8Qc
channel: yt-hougaard
source_name: Erik Hougaard
url: https://www.youtube.com/watch?v=YBVqwzig8Qc
published_at: "2026-11-02T11:00:15.000Z"
duration_s: 765
captions: derived
audience:
  - developer
  - partner
chapters:
  - t: 0
    title: Introduction and overview of game ports in AL
  - t: 47
    title: Galaga port and arcade games discussion
  - t: 91
    title: How Galaga differs from Doom - assembler vs C source
  - t: 227
    title: Z80 emulator architecture and implementation
  - t: 401
    title: Z80 emulator as generic processor implementation
  - t: 473
    title: Quake port introduction and challenges
  - t: 565
    title: Quake engine in AL and C2AL tool enhancements
  - t: 671
    title: Performance considerations and conclusion
features:
  - name: Galaga port to AL
    status: unclear
    t: 81
    verified: false
    status_source: video
  - name: Z80 emulator implementation in AL
    status: unclear
    t: 227
    verified: false
    status_source: video
  - name: Quake port to AL
    status: unclear
    t: 473
    verified: false
    status_source: video
  - name: C2AL converter enhancements
    status: unclear
    t: 622
    verified: false
    status_source: video
  - name: Doom port to AL
    status: unclear
    t: 14
    verified: false
    status_source: video
objects_mentioned:
  - codeunit Quake engine
quotes:
  - t: 27
    text: finally answered the uh each old question uh can it run Doom?
    check: exact
  - t: 147
    text: Galaga is not written in C. Galaga is written in pure assembler for the Z80 uh processor.
    check: exact
  - t: 267
    text: The Z80 is a has a 64K RAM address space. So, memory is just an array of integers.
    check: exact
  - t: 387
    text: implemented all the op codes for a z80 processor and and and this thing is is more or less generic
    check: fuzzy
  - t: 633
    text: the C2AL tool gained a lot of extra functionality in order to do Quake
    check: exact
---

# What probem? I can stop whenever I want! (More Games in AL and Business Central)

> Demo of retro game ports running in Business Central through AL: Galaga, which needed a Z80 processor emulator written in AL because the game is pure Z80 assembler, and Quake, which uses an enhanced C2AL converter and a soft renderer. Both build on the earlier Doom port's UI and approach. The video also covers ROM sourcing and Quake's performance limits.

[Watch on YouTube](https://www.youtube.com/watch?v=YBVqwzig8Qc) · Erik Hougaard · 2026-11-02 · 12:45 · tier community · reviewed (checked by Opus)

## Overview

Erik Hougaard follows up his Doom port with two more games in AL. Galaga is written in pure Z80 assembler rather than C, so the C-to-AL approach used for Doom did not apply. He built a Z80 emulator in AL instead, with all opcodes, the register set and a 64K memory modelled as an array of integers.

Quake was ported with the C2AL converter, which gained a lot of new functionality for this. The result is a single codeunit of about 64000 lines called Quake engine. It uses soft rendering, supports pack files and stores save games in a table. It runs slowly when a scene has a lot of movement.

## Key points

- Galaga is written in pure Z80 assembler, not C, so it needed an emulator rather than the C-to-AL converter used for Doom.
- The Z80 emulator in AL implements all opcodes and the registers A, F, B, C, D, E, H, L plus alternative registers. Memory is an array of integers over a 64K address space, and the ROMs are mapped into the memory space.
- The emulator is more or less generic and could run any Z80 code, such as code from a Spectrum. The video demonstrates it with Galaga.
- Galaga ROM files are not in the repository and must be sourced separately, because they are not the presenter's to distribute.
- Galaga and Quake reuse the same UI and frame-handling controller as the Doom port.
- The Quake port uses the enhanced C2AL tool and produces one codeunit called Quake engine, about 64,000 lines of code.
- Quake uses soft rendering instead of OpenGL, loads a pack file as a resource, stores save games as a table, and includes only the shareware levels.

## Chapters

- [0:00](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=0s) Introduction and overview of game ports in AL
- [0:47](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=47s) Galaga port and arcade games discussion
- [1:31](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=91s) How Galaga differs from Doom - assembler vs C source
- [3:47](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=227s) Z80 emulator architecture and implementation
- [6:41](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=401s) Z80 emulator as generic processor implementation
- [7:53](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=473s) Quake port introduction and challenges
- [9:25](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=565s) Quake engine in AL and C2AL tool enhancements
- [11:11](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=671s) Performance considerations and conclusion

## Features

Every feature below: status not stated, demoed.

| Feature | At |
|---|---|
| Galaga port to AL | [1:21](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=81s) |
| Z80 emulator implementation in AL | [3:47](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=227s) |
| Quake port to AL | [7:53](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=473s) |
| C2AL converter enhancements | [10:22](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=622s) |
| Doom port to AL | [0:14](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=14s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- codeunit "Quake engine" at [10:22](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=622s)

Not found in BC28-30: codeunit "Quake engine".

## Quotes

- [0:27](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=27s) "finally answered the uh each old question uh can it run Doom?"
- [2:27](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=147s) "Galaga is not written in C. Galaga is written in pure assembler for the Z80 uh processor."
- [4:27](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=267s) "The Z80 is a has a 64K RAM address space. So, memory is just an array of integers."
- [6:27](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=387s) "implemented all the op codes for a z80 processor and and and this thing is is more or less generic"
- [10:33](https://www.youtube.com/watch?v=YBVqwzig8Qc&t=633s) "the C2AL tool gained a lot of extra functionality in order to do Quake"

Presenters (as heard): Merrick, Claude.
