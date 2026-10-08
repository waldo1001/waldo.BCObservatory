---
id: post/stefanmaron-com/https-stefanmaron-com-posts-turning-streams-into-blog-posts--a14b00029e
type: post
title: Turning My Coding Streams Into Blog Posts (With a Little Help From Claude)
summary: A BC developer built a Claude Code skill that turns his YouTube live coding streams into structured blog posts. It uses captions and extracted frames, then adds a pass that inserts links to official docs. He converted 26 Business Central development streams this way, which also helps the community tool CentralQ because that tool handles written content better than video.
tier: community
language: en
tags:
  - content creation
  - ai automation
  - claude code
  - workflow optimization
  - community tools
  - documentation
  - al development
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-08T01:56:29.353Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: bb42b6754ea3c3ec580fcdc03e4846d702f6bc529288b31e4b2d2e0d34897ff1
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/turning-streams-into-blog-posts/
    title: Turning My Coding Streams Into Blog Posts (With a Little Help From Claude)
    date: "2026-02-24"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/turning-streams-into-blog-posts/
    title: Turning My Coding Streams Into Blog Posts (With a Little Help From Claude)
    date: "2026-02-24"
    commit: null
    t: null
    quote: Claude reads the transcript, reviews all the frames, picks the most useful screenshots, and writes a structured blog post in my writing style.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/turning-streams-into-blog-posts/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/turning-streams-into-blog-posts/
published_at: "2026-02-24T15:00:00.000Z"
author: Stefan Maron
full_text: false
words: 723
quotes:
  - text: Claude reads the transcript, reviews all the frames, picks the most useful screenshots, and writes a structured blog post in my writing style.
    why_it_matters: Describes the core capability of the pipeline - intelligent content synthesis that maintains voice and context
code_objects_mentioned: []
systems:
  - development
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:39.985Z"
---

# Turning My Coding Streams Into Blog Posts (With a Little Help From Claude)

[Read the post](https://stefanmaron.com/posts/turning-streams-into-blog-posts/) · Stefan Maron (Stefan Maron, MVP) · 2026-02-24 · 723 words · tier community · reviewed (checked by Opus)

> A BC developer built a Claude Code skill that turns his YouTube live coding streams into structured blog posts. It uses captions and extracted frames, then adds a pass that inserts links to official docs. He converted 26 Business Central development streams this way, which also helps the community tool CentralQ because that tool handles written content better than video.

## Key points

- Automated video-to-blog conversion pipeline using Claude Code that processes YouTube captions, extracts frames, and generates structured posts
- Includes documentation enrichment that adds callout blocks with links to official docs for topics mentioned in the stream
- Improves content accessibility for readers who prefer text over video and benefits AI tools like CentralQ that index blog posts
- Processes large backlogs efficiently with sub-agents running sequentially, converting 26 streams in under 3 hours

## Quotes

- "Claude reads the transcript, reviews all the frames, picks the most useful screenshots, and writes a structured blog post in my writing style." (Describes the core capability of the pipeline - intelligent content synthesis that maintains voice and context)

## Context

- Features: Claude Code skill for video processing, YouTube caption downloading, Frame extraction and timestamping, Automated blog post generation, Documentation enrichment with callouts, Batch processing with sub-agents

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
