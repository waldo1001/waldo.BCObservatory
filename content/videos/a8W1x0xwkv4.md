---
id: video/a8W1x0xwkv4
type: video
title: ... but can it play DOOM? (In Business Central)
summary: Erik Hougaard shows DOOM running in Business Central through a user control host page, with the game engine translated to about 45,321 lines of AL by a custom C2AL tool. JavaScript handles only WebGL rendering, music and input, and the frame rate is about 10 fps.
tier: community
language: en
tags:
  - al development
  - user control host
  - typescript
  - webgl rendering
  - javascript interop
  - game engine porting
  - doom wad files
  - midi sound
  - table storage
  - c2al translator
  - frame rate
  - cheats
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-15T00:24:10.987Z"
  flags: []
generated:
  at: "2026-10-15T00:24:11.038Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: a1b6b50bbda2b7567681923f40a38dfafbbf191fac31538b5381226f2ab8ba2e
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=a8W1x0xwkv4&t=0s
    title: ... but can it play DOOM? (In Business Central)
    date: "2026-10-12T11:00:09.000Z"
    commit: null
    t: 0
    quote: whenever you have a computing platform, uh doesn't matter if you if it's your microwave or your car or your watch or your accounting
  - kind: video
    url: https://www.youtube.com/watch?v=a8W1x0xwkv4&t=317s
    title: ... but can it play DOOM? (In Business Central)
    date: "2026-10-12T11:00:09.000Z"
    commit: null
    t: 317
    quote: all game assets, the maps, the sprites, the the sound, everything is stored in a bad file.
  - kind: video
    url: https://www.youtube.com/watch?v=a8W1x0xwkv4&t=402s
    title: ... but can it play DOOM? (In Business Central)
    date: "2026-10-12T11:00:09.000Z"
    commit: null
    t: 402
    quote: Doom runs at 35 ticks per second.
  - kind: video
    url: https://www.youtube.com/watch?v=a8W1x0xwkv4&t=631s
    title: ... but can it play DOOM? (In Business Central)
    date: "2026-10-12T11:00:09.000Z"
    commit: null
    t: 631
    quote: Well, Eric, you've just made Doom in in JavaScript. No, this is not.
  - kind: video
    url: https://www.youtube.com/watch?v=a8W1x0xwkv4&t=751s
    title: ... but can it play DOOM? (In Business Central)
    date: "2026-10-12T11:00:09.000Z"
    commit: null
    t: 751
    quote: I took something called Pure Doom, which is a portable friendly um version of Doom. And and I'll show you in a second how,
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: a8W1x0xwkv4
channel: yt-hougaard
source_name: Erik Hougaard
url: https://www.youtube.com/watch?v=a8W1x0xwkv4
published_at: "2026-10-12T11:00:09.000Z"
duration_s: 1879
captions: derived
audience:
  - developer
chapters:
  - t: 0
    title: Playing DOOM in Business Central
  - t: 285
    title: Architecture overview and page structure
  - t: 459
    title: Controller and JavaScript implementation
  - t: 650
    title: DOOM engine ported to AL code
  - t: 796
    title: Data storage in tables and Doom AL code structure
  - t: 948
    title: JavaScript rendering and frame rate limitations
  - t: 1024
    title: Doom gameplay demo with frame rate metrics
  - t: 1131
    title: Code modifications and cheating in Doom
  - t: 1301
    title: Second cheat implementation and damage immunity
  - t: 1428
    title: C2AL tool for translating C code to AL
  - t: 1663
    title: Direct code translation and AL output
  - t: 1722
    title: Examining translated spawn missile function
  - t: 1795
    title: Summary and game compatibility
features:
  - name: DOOM page user control
    status: unclear
    t: 34
    verified: false
    status_source: video
  - name: Pure Doom engine translated to AL
    status: unclear
    t: 739
    verified: false
    status_source: video
  - name: JavaScript-based rendering and input handling
    status: unclear
    t: 506
    verified: false
    status_source: video
  - name: WAD file storage in tables
    status: unclear
    t: 317
    verified: false
    status_source: video
  - name: Save game persistence
    status: unclear
    t: 179
    verified: false
    status_source: video
  - name: Code modification during runtime
    status: unclear
    t: 1131
    verified: false
    status_source: video
  - name: C2AL code translation tool
    status: unclear
    t: 1428
    verified: false
    status_source: video
objects_mentioned:
  - page Doom page
  - other user control host
  - table Doom bad lump
  - codeunit controller in
  - codeunit A_FirePistol
  - codeunit P underscore damage M object
  - other P_spawn_missile
  - other spawn_missile
quotes:
  - t: 0
    text: whenever you have a computing platform, uh doesn't matter if you if it's your microwave or your car or your watch or your accounting
    check: exact
  - t: 317
    text: all game assets, the maps, the sprites, the the sound, everything is stored in a bad file.
    check: exact
  - t: 402
    text: Doom runs at 35 ticks per second.
    check: exact
  - t: 631
    text: Well, Eric, you've just made Doom in in JavaScript. No, this is not.
    check: exact
  - t: 751
    text: I took something called Pure Doom, which is a portable friendly um version of Doom. And and I'll show you in a second how,
    check: exact
---

# ... but can it play DOOM? (In Business Central)

> Erik Hougaard shows DOOM running in Business Central through a user control host page, with the game engine translated to about 45,321 lines of AL by a custom C2AL tool. JavaScript handles only WebGL rendering, music and input, and the frame rate is about 10 fps.

[Watch on YouTube](https://www.youtube.com/watch?v=a8W1x0xwkv4) · Erik Hougaard · 2026-10-12 · 31:19 · tier community · reviewed (checked by Opus)

## Overview

The video demonstrates playing DOOM, DOOM 2 and shareware or registered versions inside Business Central. A page built as a user control host loads a JavaScript component of under 530 lines for WebGL rendering, SpinSynth MIDI music, keyboard and mouse input and CRT filters. The game logic itself is the Pure Doom engine translated function for function into AL. WAD files are deserialized into a table (ID 666), and save games are stored in tables.

Erik also shows editing the AL code to change A_FirePistol so it fires plasma missiles, adds cheats, and explains the C2AL tool. C2AL uses the Sick C compiler parser and a Python-based tool to convert C to AL. It works best when the C code has few dependencies. Generated code should not be edited by hand, and memory manipulation in C becomes integer lists in AL.

## Key points

- The DOOM page is a user control host. The game logic runs in AL, and JavaScript only renders frames, plays music and captures input.
- The AL code is a line-for-line, function-for-function translation of Pure Doom, about 45,321 lines.
- The frame rate is about 10 fps. The main bottleneck is the round-trip latency between JavaScript and Business Central.
- WAD files must be embedded in the extension. Their content is stored in the Doom Bad Lump table (ID 666), and save games are also stored in tables.
- Publishing AL changes took a couple of seconds. Erik changed A_FirePistol to fire plasma missiles and added a damage-immunity cheat.
- C2AL translates C to AL via the Sick C compiler parser and a Python tool. It needs few dependencies and a custom header for standard library functions.
- Games based on the original Doom engine work. Games based on enhanced Doom engine versions do not.

## Chapters

- [0:00](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=0s) Playing DOOM in Business Central
- [4:45](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=285s) Architecture overview and page structure
- [7:39](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=459s) Controller and JavaScript implementation
- [10:50](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=650s) DOOM engine ported to AL code
- [13:16](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=796s) Data storage in tables and Doom AL code structure
- [15:48](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=948s) JavaScript rendering and frame rate limitations
- [17:04](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=1024s) Doom gameplay demo with frame rate metrics
- [18:51](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=1131s) Code modifications and cheating in Doom
- [21:41](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=1301s) Second cheat implementation and damage immunity
- [23:48](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=1428s) C2AL tool for translating C code to AL
- [27:43](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=1663s) Direct code translation and AL output
- [28:42](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=1722s) Examining translated spawn missile function
- [29:55](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=1795s) Summary and game compatibility

## Features

Every feature below: status not stated, demoed.

| Feature | At |
|---|---|
| DOOM page user control | [0:34](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=34s) |
| Pure Doom engine translated to AL | [12:19](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=739s) |
| JavaScript-based rendering and input handling | [8:26](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=506s) |
| WAD file storage in tables | [5:17](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=317s) |
| Save game persistence | [2:59](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=179s) |
| Code modification during runtime | [18:51](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=1131s) |
| C2AL code translation tool | [23:48](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=1428s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- page "Doom page" at [4:56](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=296s)
- other "user control host" at [5:06](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=306s)
- table "Doom bad lump" at [13:29](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=809s)
- codeunit "controller in" at [7:50](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=470s)
- codeunit "A_FirePistol" at [19:34](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=1174s)
- codeunit "P underscore damage M object" at [21:54](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=1314s)
- other "P_spawn_missile" at [28:42](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=1722s)
- other "spawn_missile" at [29:02](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=1742s)

Not found in BC28-30: page "Doom page", table "Doom bad lump", codeunit "controller in", codeunit "A_FirePistol", codeunit "P underscore damage M object".

## Quotes

- [0:00](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=0s) "whenever you have a computing platform, uh doesn't matter if you if it's your microwave or your car or your watch or your accounting"
- [5:17](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=317s) "all game assets, the maps, the sprites, the the sound, everything is stored in a bad file."
- [6:42](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=402s) "Doom runs at 35 ticks per second."
- [10:31](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=631s) "Well, Eric, you've just made Doom in in JavaScript. No, this is not."
- [12:31](https://www.youtube.com/watch?v=a8W1x0xwkv4&t=751s) "I took something called Pure Doom, which is a portable friendly um version of Doom. And and I'll show you in a second how,"

Presenters (as heard): Eric.
