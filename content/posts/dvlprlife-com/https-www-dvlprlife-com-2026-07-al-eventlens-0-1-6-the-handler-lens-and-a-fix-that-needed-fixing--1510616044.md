---
id: post/dvlprlife-com/https-www-dvlprlife-com-2026-07-al-eventlens-0-1-6-the-handler-lens-and-a-fix-that-needed-fixing--1510616044
type: post
title: "AL EventLens 0.1.6: the handler lens, and a fix that needed fixing"
summary: AL EventLens 0.1.6 for VS Code adds a CodeLens over test handler functions that shows how many tests use each handler, or marks it unused, so dead handlers are easy to spot. The release also has ten fixes, mostly parser bugs that silently dropped or invented events, plus index, reveal and command palette fixes. It also describes how a review caught a regression introduced by one of those fixes.
tier: community
language: en
tags:
  - al eventlens
  - test handlers
  - parser bugs
  - code lens
  - dead code detection
  - event subscribers
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-08T01:54:12.946Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 3c4455cd226fd6b8bce97d1028ada0a4545f49f6aa747a19f85c540092832288
evidence:
  - kind: blog
    url: https://www.dvlprlife.com/2026/07/al-eventlens-0-1-6-the-handler-lens-and-a-fix-that-needed-fixing/
    title: "AL EventLens 0.1.6: the handler lens, and a fix that needed fixing"
    date: "2026-07-27"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://www.dvlprlife.com/2026/07/al-eventlens-0-1-6-the-handler-lens-and-a-fix-that-needed-fixing/
    title: "AL EventLens 0.1.6: the handler lens, and a fix that needed fixing"
    date: "2026-07-27"
    commit: null
    t: null
    quote: "A handler no test uses is dead test code, and it accumulates: you delete the test, you leave the handler."
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://www.dvlprlife.com/2026/07/al-eventlens-0-1-6-the-handler-lens-and-a-fix-that-needed-fixing/
source_id: dvlprlife-com
source_name: DvlprLife
url: https://www.dvlprlife.com/2026/07/al-eventlens-0-1-6-the-handler-lens-and-a-fix-that-needed-fixing/
published_at: "2026-07-27T23:55:00.000Z"
author: Brad Prendergast
full_text: false
words: 740
quotes:
  - text: "A handler no test uses is dead test code, and it accumulates: you delete the test, you leave the handler."
    why_it_matters: Explains the core problem the handler lens solves - orphaned handler functions that persist after test deletion and clutter codebases
code_objects_mentioned: []
systems:
  - development
versions_mentioned:
  - 0.1.6
preview:
  embeddable: true
  frame_url: null
  image: https://www.dvlprlife.com/wp-content/uploads/2026/07/al-eventlens-0-1-6-social.jpg
  image_alt: "AL EventLens 0.1.6: the handler lens, and a fix that needed fixing – DvlprLife.com"
  image_w: 1200
  image_h: 630
  site_name: DvlprLife.com
  favicon: https://www.dvlprlife.com/wp-content/uploads/2026/04/cropped-avatar-transparent-250-270x270.png
  probed_at: "2026-10-07T11:50:21.303Z"
---

# AL EventLens 0.1.6: the handler lens, and a fix that needed fixing

[Read the post](https://www.dvlprlife.com/2026/07/al-eventlens-0-1-6-the-handler-lens-and-a-fix-that-needed-fixing/) · DvlprLife (Brad Prendergast) · 2026-07-27 · 740 words · tier community · reviewed (checked by Opus)

> AL EventLens 0.1.6 for VS Code adds a CodeLens over test handler functions that shows how many tests use each handler, or marks it unused, so dead handlers are easy to spot. The release also has ten fixes, mostly parser bugs that silently dropped or invented events, plus index, reveal and command palette fixes. It also describes how a review caught a regression introduced by one of those fixes.

## Key points

- Handler lens shows test usage counts above handler functions such as MessageHandler, ConfirmHandler and PageHandler, or marks them unused
- Counting is scoped to the declaring test codeunit, so the lens needs no index and works as soon as a file opens; it has its own enable setting
- Parser fixes cover apostrophes in directive text, attribute names inside strings, unclosed EventSubscriber attributes and quoted parameter names with colons
- Non-parser fixes cover index loss on save, Reveal Subscriber selecting nothing, wrong cursor line and argument-only commands in the palette
- A differential harness comparing old and new parsers found that the directive fix let trailing comments create fake publishers

## Quotes

- "A handler no test uses is dead test code, and it accumulates: you delete the test, you leave the handler." (Explains the core problem the handler lens solves - orphaned handler functions that persist after test deletion and clutter codebases)

## Context

- Features: Handler CodeLens, Test handler usage tracking, Parser bug fixes, Unused handler detection, Subscriber reveal
- Versions: 0.1.6

Source: DvlprLife, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
