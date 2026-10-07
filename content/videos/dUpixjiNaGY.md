---
id: video/dUpixjiNaGY
type: video
title: Preview Images Directly in Business Central Web Client
summary: From Business Central version 29, supported image attachments open in a dedicated web client viewer without downloading them first, much like the existing PDF preview. Before that, up to version 28, users had to download the file. The video covers the supported formats and limits, where the preview works (document attachments, agents, emails, extensions), the gap for incoming documents, and how developers use File.ViewFromStream in custom extensions.
tier: community
language: en
tags:
  - image preview
  - web client
  - file handling
  - attachment viewer
  - developer methods
  - user experience
  - supported formats
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:19:33.145Z"
  flags: []
generated:
  at: "2026-10-07T23:19:33.192Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: a48753a9242f42de1b51fdff549b76ae04c9708ab24151b55ca9396f515f5425
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=dUpixjiNaGY&t=300s
    title: "Image Preview in Web Client: generally available"
    date: "2026-09-12T14:26:20.000Z"
    commit: null
    t: 300
    quote: So a true preview experience for images is now available with version 29 and later.
  - kind: video
    url: https://www.youtube.com/watch?v=dUpixjiNaGY&t=1s
    title: Preview Images Directly in Business Central Web Client
    date: "2026-09-12T14:26:20.000Z"
    commit: null
    t: 1
    quote: What if if you could open an image attachment in Business Central without downloading the file first?
  - kind: video
    url: https://www.youtube.com/watch?v=dUpixjiNaGY&t=52s
    title: Preview Images Directly in Business Central Web Client
    date: "2026-09-12T14:26:20.000Z"
    commit: null
    t: 52
    quote: previously when you encountered an image attachment in Business Central till version 28, you often had to download the file before you can view
  - kind: video
    url: https://www.youtube.com/watch?v=dUpixjiNaGY&t=76s
    title: Preview Images Directly in Business Central Web Client
    date: "2026-09-12T14:26:20.000Z"
    commit: null
    t: 76
    quote: now images can also be opened directly in Business Central web client. The image is displayed in the dedicated viewer
  - kind: video
    url: https://www.youtube.com/watch?v=dUpixjiNaGY&t=129s
    title: Preview Images Directly in Business Central Web Client
    date: "2026-09-12T14:26:20.000Z"
    commit: null
    t: 129
    quote: The image preview experience support a broad range of format from JPEG, JPG, PNG, BMP, SVG, WBP, ICO, GIF and AVIF
  - kind: video
    url: https://www.youtube.com/watch?v=dUpixjiNaGY&t=300s
    title: Preview Images Directly in Business Central Web Client
    date: "2026-09-12T14:26:20.000Z"
    commit: null
    t: 300
    quote: So a true preview experience for images is now available with version 29 and later.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: dUpixjiNaGY
channel: yt-saurav
source_name: Saurav Dhyani
url: https://www.youtube.com/watch?v=dUpixjiNaGY
published_at: "2026-09-12T14:26:20.000Z"
duration_s: 611
captions: derived
audience:
  - developer
  - functional consultant
  - administrator
  - end user
chapters:
  - t: 0
    title: Introduction and Overview
  - t: 29
    title: Previous Behavior and New Experience
  - t: 97
    title: Supported Image Formats
  - t: 184
    title: Demo of Version 28 vs Version 29
  - t: 319
    title: Where the Feature Works
  - t: 374
    title: Developer Implementation Guide
  - t: 476
    title: Summary and Recommendations
features:
  - name: Image Preview in Web Client
    status: ga
    t: 1
    verified: true
    status_source: video
  - name: Supported Image Formats
    status: unclear
    t: 115
    verified: false
    status_source: video
  - name: File View From Stream Method
    status: unclear
    t: 374
    verified: false
    status_source: video
  - name: Document Attachment Preview
    status: unclear
    t: 319
    verified: false
    status_source: video
  - name: Image Preview Across Business Central Areas
    status: unclear
    t: 349
    verified: false
    status_source: video
objects_mentioned:
  - page Document Attachment Detail Fact
  - page 1173
quotes:
  - t: 1
    text: What if if you could open an image attachment in Business Central without downloading the file first?
    check: exact
  - t: 52
    text: previously when you encountered an image attachment in Business Central till version 28, you often had to download the file before you can view
    check: exact
  - t: 76
    text: now images can also be opened directly in Business Central web client. The image is displayed in the dedicated viewer
    check: exact
  - t: 129
    text: The image preview experience support a broad range of format from JPEG, JPG, PNG, BMP, SVG, WBP, ICO, GIF and AVIF
    check: exact
  - t: 300
    text: So a true preview experience for images is now available with version 29 and later.
    check: exact
---

# Preview Images Directly in Business Central Web Client

> From Business Central version 29, supported image attachments open in a dedicated web client viewer without downloading them first, much like the existing PDF preview. Before that, up to version 28, users had to download the file. The video covers the supported formats and limits, where the preview works (document attachments, agents, emails, extensions), the gap for incoming documents, and how developers use File.ViewFromStream in custom extensions.

[Watch on YouTube](https://www.youtube.com/watch?v=dUpixjiNaGY) · Saurav Dhyani · 2026-09-12 · 10:11 · tier community · reviewed (checked by Opus)

## Overview

Until version 28, an image attachment in Business Central usually had to be downloaded before it could be viewed. The video demos the change in version 29, where supported images open directly in the web client in a viewer similar to the existing PDF preview.

It lists the supported formats, shows document attachments using a view action, and explains how developers should load files into a stream for preview. It also notes that the feature is not yet available on incoming documents.

## Key points

- Up to version 28, image attachments had to be downloaded to view; from version 29, images preview directly in the web client viewer.
- The viewer still lets users download, print and resize images if needed.
- Supported formats: JPEG, JPG, PNG, BMP, SVG, WEBP, ICO, GIF and AVIF; GIF and AVIF include animated versions.
- Animated GIF support is limited to 48 frames.
- TIFF is supported only in Safari browsers.
- Document attachments get a view action that shows the image in the client without downloading it.
- Developers load the file into a stream and call File.ViewFromStream (with file name and extension) to show the preview from a custom extension; page 1173 Document Attachment Details FactBox shows Microsoft's usage.

## Chapters

- [0:00](https://www.youtube.com/watch?v=dUpixjiNaGY&t=0s) Introduction and Overview
- [0:29](https://www.youtube.com/watch?v=dUpixjiNaGY&t=29s) Previous Behavior and New Experience
- [1:37](https://www.youtube.com/watch?v=dUpixjiNaGY&t=97s) Supported Image Formats
- [3:04](https://www.youtube.com/watch?v=dUpixjiNaGY&t=184s) Demo of Version 28 vs Version 29
- [5:19](https://www.youtube.com/watch?v=dUpixjiNaGY&t=319s) Where the Feature Works
- [6:14](https://www.youtube.com/watch?v=dUpixjiNaGY&t=374s) Developer Implementation Guide
- [7:56](https://www.youtube.com/watch?v=dUpixjiNaGY&t=476s) Summary and Recommendations

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Image Preview in Web Client | generally available, demoed | [0:01](https://www.youtube.com/watch?v=dUpixjiNaGY&t=1s) | "So a true preview experience for images is now available with version 29 and later." ([5:00](https://www.youtube.com/watch?v=dUpixjiNaGY&t=300s)) |
| Supported Image Formats | status not stated | [1:55](https://www.youtube.com/watch?v=dUpixjiNaGY&t=115s) |  |
| File View From Stream Method | status not stated, demoed | [6:14](https://www.youtube.com/watch?v=dUpixjiNaGY&t=374s) |  |
| Document Attachment Preview | status not stated, demoed | [5:19](https://www.youtube.com/watch?v=dUpixjiNaGY&t=319s) |  |
| Image Preview Across Business Central Areas | status not stated | [5:49](https://www.youtube.com/watch?v=dUpixjiNaGY&t=349s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- page "Document Attachment Detail Fact" at [6:51](https://www.youtube.com/watch?v=dUpixjiNaGY&t=411s)
- page "1173" at [7:04](https://www.youtube.com/watch?v=dUpixjiNaGY&t=424s)

Not found in BC28-30: page "Document Attachment Detail Fact", page "1173".

## Quotes

- [0:01](https://www.youtube.com/watch?v=dUpixjiNaGY&t=1s) "What if if you could open an image attachment in Business Central without downloading the file first?"
- [0:52](https://www.youtube.com/watch?v=dUpixjiNaGY&t=52s) "previously when you encountered an image attachment in Business Central till version 28, you often had to download the file before you can view"
- [1:16](https://www.youtube.com/watch?v=dUpixjiNaGY&t=76s) "now images can also be opened directly in Business Central web client. The image is displayed in the dedicated viewer"
- [2:09](https://www.youtube.com/watch?v=dUpixjiNaGY&t=129s) "The image preview experience support a broad range of format from JPEG, JPG, PNG, BMP, SVG, WBP, ICO, GIF and AVIF"
- [5:00](https://www.youtube.com/watch?v=dUpixjiNaGY&t=300s) "So a true preview experience for images is now available with version 29 and later."

## Disclaimers in the video

- [5:32](https://www.youtube.com/watch?v=dUpixjiNaGY&t=332s) coming-later: it's not yet added on the incoming documents, but I'm pretty sure sooner than later, it'll also be available there
