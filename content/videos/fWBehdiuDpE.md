---
id: video/fWBehdiuDpE
type: video
title: Translate your app with an LLM in Business Central
summary: Eric shows how to translate a Business Central app's labels with Claude through his open-source AL Build tool. The workflow uses XLIFF translation files, a context system prompt, a local database of cached and Microsoft translations, and developer comments on labels. The demo covers Danish and German. Feature status is not stated.
tier: community
language: en
tags:
  - app translation
  - llm integration
  - claude
  - al build tool
  - xliff files
  - localization
  - developer comments
  - context-aware translation
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:18:39.635Z"
  flags: []
generated:
  at: "2026-10-07T23:18:39.706Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 172caf94c3ab775ec71b255ed5fa365226ef96c278bb0b3f04a17f0ca89a8ded
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=fWBehdiuDpE&t=81s
    title: Translate your app with an LLM in Business Central
    date: "2026-09-21T11:00:37.000Z"
    commit: null
    t: 81
    quote: maybe I can I can get an LLM. Maybe I can get Claude or ChatGPT. Because they're pretty good at translations.
  - kind: video
    url: https://www.youtube.com/watch?v=fWBehdiuDpE&t=143s
    title: Translate your app with an LLM in Business Central
    date: "2026-09-21T11:00:37.000Z"
    commit: null
    t: 143
    quote: for stuff to actually get translated we need to turn on a feature in the app json called translate file
  - kind: video
    url: https://www.youtube.com/watch?v=fWBehdiuDpE&t=295s
    title: Translate your app with an LLM in Business Central
    date: "2026-09-21T11:00:37.000Z"
    commit: null
    t: 295
    quote: this is an app for Business Central. It's adding extended functionality to common finance areas. The target user is finance controller that speaks fluent
  - kind: video
    url: https://www.youtube.com/watch?v=fWBehdiuDpE&t=322s
    title: Translate your app with an LLM in Business Central
    date: "2026-09-21T11:00:37.000Z"
    commit: null
    t: 322
    quote: it's using Claude Opus 5 right now. You can also use Sonnet and some of the cheaper ones.
  - kind: video
    url: https://www.youtube.com/watch?v=fWBehdiuDpE&t=359s
    title: Translate your app with an LLM in Business Central
    date: "2026-09-21T11:00:37.000Z"
    commit: null
    t: 359
    quote: and stored them in my database so if if if we have customer number that's a microsoft label
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: fWBehdiuDpE
channel: yt-hougaard
source_name: Erik Hougaard
url: https://www.youtube.com/watch?v=fWBehdiuDpE
published_at: "2026-09-21T11:00:37.000Z"
duration_s: 773
captions: derived
audience:
  - developer
  - partner
chapters:
  - t: 0
    title: Introduction and motivation for LLM-based translation
  - t: 105
    title: Setting up translation with labels in Hello World app
  - t: 194
    title: AL Build tool and translation workflow overview
  - t: 295
    title: Claude configuration and caching with Microsoft translations
  - t: 382
    title: Demonstrating translations in Danish and German
  - t: 554
    title: Using developer comments for context-aware translations
  - t: 742
    title: Conclusion and call to action
features:
  - name: LLM-based app translation using Claude
    status: unclear
    t: 81
    verified: false
    status_source: video
  - name: Translation file (XLIFF) support in app.json
    status: unclear
    t: 143
    verified: false
    status_source: video
  - name: AL Build with translation task
    status: unclear
    t: 214
    verified: false
    status_source: video
  - name: Context injection through system prompts
    status: unclear
    t: 295
    verified: false
    status_source: video
  - name: Microsoft translation database integration
    status: unclear
    t: 359
    verified: false
    status_source: video
  - name: Developer comments for translation guidance
    status: unclear
    t: 570
    verified: false
    status_source: video
objects_mentioned:
  - other app.json
  - other XLIFF file
  - other AL Build
quotes:
  - t: 81
    text: maybe I can I can get an LLM. Maybe I can get Claude or ChatGPT. Because they're pretty good at translations.
    check: exact
  - t: 143
    text: for stuff to actually get translated we need to turn on a feature in the app json called translate file
    check: fuzzy
  - t: 295
    text: this is an app for Business Central. It's adding extended functionality to common finance areas. The target user is finance controller that speaks fluent
    check: exact
  - t: 322
    text: it's using Claude Opus 5 right now. You can also use Sonnet and some of the cheaper ones.
    check: exact
  - t: 359
    text: and stored them in my database so if if if we have customer number that's a microsoft label
    check: fuzzy
---

# Translate your app with an LLM in Business Central

> Eric shows how to translate a Business Central app's labels with Claude through his open-source AL Build tool. The workflow uses XLIFF translation files, a context system prompt, a local database of cached and Microsoft translations, and developer comments on labels. The demo covers Danish and German. Feature status is not stated.

[Watch on YouTube](https://www.youtube.com/watch?v=fWBehdiuDpE) · Erik Hougaard · 2026-09-21 · 12:53 · tier community · reviewed (checked by Opus)

## Overview

Erik Hougaard explains why he used an LLM to translate Business Central apps and walks through the setup in a Hello World app. Translatable text must be defined as labels, and the "translate file" feature must be turned on in app.json so that XLIFF files are generated with source text and empty target entries.

## Key points

- Only text defined as labels, not plain strings, gets translated.
- Turn on the 'translate file' feature in app.json to generate XLIFF files with source text and target placeholders.
- The Python-based AL Build tool runs a task list that updates the app version, compiles the app, translates the .g.xliff file with a system prompt, then compiles again.
- The demo uses Claude Opus 5; Sonnet and cheaper models can also be used.
- The system prompt describes the app, its purpose and target users (for example a finance controller) to guide translation quality.
- A local database stores Microsoft translations for recognized labels, such as customer number, and translations the tool has already produced, which avoids repeated LLM calls.
- Comments on labels are now passed to the LLM as extra context or instructions, such as tone or domain guidance.

## Chapters

- [0:00](https://www.youtube.com/watch?v=fWBehdiuDpE&t=0s) Introduction and motivation for LLM-based translation
- [1:45](https://www.youtube.com/watch?v=fWBehdiuDpE&t=105s) Setting up translation with labels in Hello World app
- [3:14](https://www.youtube.com/watch?v=fWBehdiuDpE&t=194s) AL Build tool and translation workflow overview
- [4:55](https://www.youtube.com/watch?v=fWBehdiuDpE&t=295s) Claude configuration and caching with Microsoft translations
- [6:22](https://www.youtube.com/watch?v=fWBehdiuDpE&t=382s) Demonstrating translations in Danish and German
- [9:14](https://www.youtube.com/watch?v=fWBehdiuDpE&t=554s) Using developer comments for context-aware translations
- [12:22](https://www.youtube.com/watch?v=fWBehdiuDpE&t=742s) Conclusion and call to action

## Features

| Feature | Status | At |
|---|---|---|
| LLM-based app translation using Claude | status not stated, demoed | [1:21](https://www.youtube.com/watch?v=fWBehdiuDpE&t=81s) |
| Translation file (XLIFF) support in app.json | status not stated, demoed | [2:23](https://www.youtube.com/watch?v=fWBehdiuDpE&t=143s) |
| AL Build with translation task | status not stated, demoed | [3:34](https://www.youtube.com/watch?v=fWBehdiuDpE&t=214s) |
| Context injection through system prompts | status not stated, demoed | [4:55](https://www.youtube.com/watch?v=fWBehdiuDpE&t=295s) |
| Microsoft translation database integration | status not stated, demoed | [5:59](https://www.youtube.com/watch?v=fWBehdiuDpE&t=359s) |
| Developer comments for translation guidance | status not stated, demoed | [9:30](https://www.youtube.com/watch?v=fWBehdiuDpE&t=570s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "app.json" at [2:23](https://www.youtube.com/watch?v=fWBehdiuDpE&t=143s)
- other "XLIFF file" at [4:40](https://www.youtube.com/watch?v=fWBehdiuDpE&t=280s)
- other "AL Build" at [3:34](https://www.youtube.com/watch?v=fWBehdiuDpE&t=214s)

## Quotes

- [1:21](https://www.youtube.com/watch?v=fWBehdiuDpE&t=81s) "maybe I can I can get an LLM. Maybe I can get Claude or ChatGPT. Because they're pretty good at translations."
- [2:23](https://www.youtube.com/watch?v=fWBehdiuDpE&t=143s) "for stuff to actually get translated we need to turn on a feature in the app json called translate file"
- [4:55](https://www.youtube.com/watch?v=fWBehdiuDpE&t=295s) "this is an app for Business Central. It's adding extended functionality to common finance areas. The target user is finance controller that speaks fluent"
- [5:22](https://www.youtube.com/watch?v=fWBehdiuDpE&t=322s) "it's using Claude Opus 5 right now. You can also use Sonnet and some of the cheaper ones."
- [5:59](https://www.youtube.com/watch?v=fWBehdiuDpE&t=359s) "and stored them in my database so if if if we have customer number that's a microsoft label"

## Disclaimers in the video

- [11:14](https://www.youtube.com/watch?v=fWBehdiuDpE&t=674s) not-in-this-release: I was working on a version that would just translate 10 uh 15 uh translations in in parallel, but uh ...

Presenters (as heard): Eric.
