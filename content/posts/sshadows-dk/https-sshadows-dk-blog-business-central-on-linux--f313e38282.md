---
id: post/sshadows-dk/https-sshadows-dk-blog-business-central-on-linux--f313e38282
type: post
title: Business Central on Linux? Here, hold my beer!
summary: Running Business Central on Linux via Wine required implementing missing Windows APIs and HTTP.sys functionality in Wine's compatibility layer. The experiment achieved 65% faster build times on optimized Linux containers compared to Windows, though it remains a proof-of-concept not suitable for production use.
tier: community
language: en
tags:
  - linux
  - wine compatibility
  - deployment
  - performance
  - infrastructure
  - github actions
  - containers
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-25T16:50:16.573Z"
  flags: []
generated:
  at: "2026-10-25T16:41:48.094Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: dbc6812eb9e7b875ab193b0c6498bc6a991a1abfedf115f0e62ecdd2d75c06a0
evidence:
  - kind: blog
    url: https://sshadows.dk/blog/business-central-on-linux/
    title: Business Central on Linux? Here, hold my beer!
    date: "2026-01-31"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://sshadows.dk/blog/business-central-on-linux/
    title: Business Central on Linux? Here, hold my beer!
    date: "2026-01-31"
    commit: null
    t: null
    quote: BC has Windows baked into its DNA.
  - kind: blog
    url: https://sshadows.dk/blog/business-central-on-linux/
    title: Business Central on Linux? Here, hold my beer!
    date: "2026-01-31"
    commit: null
    t: null
    quote: The server literally didn't know how to release a connection once it was established.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://sshadows.dk/blog/business-central-on-linux/
source_id: sshadows-dk
source_name: SShadowS
url: https://sshadows.dk/blog/business-central-on-linux/
published_at: "2026-01-31T00:00:00.000Z"
author: Torben Leth
full_text: false
words: 1880
quotes:
  - text: BC has Windows baked into its DNA.
    why_it_matters: "Explains the fundamental challenge: Business Central was designed exclusively for Windows with deep OS dependencies throughout the codebase"
  - text: The server literally didn't know how to release a connection once it was established.
    why_it_matters: Highlights the specific technical barrier that prevented HTTP responses from working in Wine's partial HTTP.sys implementation
code_objects_mentioned: []
systems:
  - platform
  - development
  - administration
versions_mentioned: []
cautions:
  - kind: warning
    quote: The moment you try to start the BC service tier on Linux, it crashes while looking for Windows APIs.
    objects: []
    events: []
    versions: []
  - kind: warning
    quote: The web client doesn't work yet. I haven't put much effort into it since it wasn't the main goal.
    objects: []
    events: []
    versions: []
  - kind: warning
    quote: The management endpoints don't function. We had to write custom AL code to run tests via OData instead.
    objects: []
    events: []
    versions: []
  - kind: warning
    quote: Some extensions that use uncommon .NET APIs crash immediately. If your extension does something exotic with Windows interop, it won't work here.
    objects: []
    events: []
    versions: []
preview:
  embeddable: false
  frame_url: null
  image: https://sshadows.dk/images/posts/business-central-on-linux/BC-i-Linux-box.webp
  image_alt: null
  image_w: null
  image_h: null
  site_name: SShadowS
  favicon: https://sshadows.dk/favicon.svg
  probed_at: "2026-10-25T16:46:49.558Z"
---

# Business Central on Linux? Here, hold my beer!

[Read the post](https://sshadows.dk/blog/business-central-on-linux/) · SShadowS (Torben Leth) · 2026-01-31 · 1880 words · tier community · reviewed (checked by Opus)

> Running Business Central on Linux via Wine required implementing missing Windows APIs and HTTP.sys functionality in Wine's compatibility layer. The experiment achieved 65% faster build times on optimized Linux containers compared to Windows, though it remains a proof-of-concept not suitable for production use.

## Key points

- Business Central cannot run natively on Linux because it depends deeply on Windows APIs, Active Directory, and Windows authentication
- Wine compatibility layer was extended by implementing missing HTTP.sys functions and other Windows APIs through debugging and reverse engineering
- Custom implementations were required for SQL Server encryption, user management, Kerberos authentication, and Event Log functionality
- Linux builds achieved significant performance improvements: 27% faster initially, 65% faster with optimization, and 5 minutes vs 16 minutes for container startup
- Web client and management endpoints do not function; extensions using exotic .NET interop will crash

## Quotes

- "BC has Windows baked into its DNA." (Explains the fundamental challenge: Business Central was designed exclusively for Windows with deep OS dependencies throughout the codebase)
- "The server literally didn't know how to release a connection once it was established." (Highlights the specific technical barrier that prevented HTTP responses from working in Wine's partial HTTP.sys implementation)

## Heads up

- warning: "The moment you try to start the BC service tier on Linux, it crashes while looking for Windows APIs."
- warning: "The web client doesn't work yet. I haven't put much effort into it since it wasn't the main goal."
- warning: "The management endpoints don't function. We had to write custom AL code to run tests via OData instead."
- warning: "Some extensions that use uncommon .NET APIs crash immediately. If your extension does something exotic with Windows interop, it won't work here."

## Context

- Features: Wine compatibility layer, HTTP.sys implementation, OData endpoints, Service tier, Extension compilation, Application testing

Source: SShadowS, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
