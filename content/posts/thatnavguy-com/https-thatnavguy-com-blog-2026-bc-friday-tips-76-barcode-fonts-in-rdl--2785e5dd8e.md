---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-76-barcode-fonts-in-rdl--2785e5dd8e
type: post
title: "BC Friday Tips #76 Barcode Fonts in RDL Reports"
summary: Creating barcodes in Business Central SaaS reports requires setting the FontFamily property directly in RDL files without installing fonts locally. This approach works out of the box and supports various barcode types like Code 93 using fonts such as IDAutomationC93M.
tier: community
language: en
tags:
  - rdl reports
  - barcode fonts
  - saas deployment
  - report design
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-08T01:54:12.685Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 4cb8ad0515fbe2a8d1c6d6584399a35c4e06e9117b423dc1bdbac87a336e184e
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-76-barcode-fonts-in-rdl/
    title: "BC Friday Tips #76 Barcode Fonts in RDL Reports"
    date: "2026-07-24"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-76-barcode-fonts-in-rdl/
    title: "BC Friday Tips #76 Barcode Fonts in RDL Reports"
    date: "2026-07-24"
    commit: null
    t: null
    quote: You don't need to install a barcode font to develop barcodes on reports in BC SaaS.
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-76-barcode-fonts-in-rdl/
    title: "BC Friday Tips #76 Barcode Fonts in RDL Reports"
    date: "2026-07-24"
    commit: null
    t: null
    quote: Just find the text box in the RDL that should render as a barcode, and set the FontFamily to the correct font name.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2026/bc-friday-tips-76-barcode-fonts-in-rdl/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2026/bc-friday-tips-76-barcode-fonts-in-rdl/
published_at: "2026-07-24T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 155
quotes:
  - text: You don't need to install a barcode font to develop barcodes on reports in BC SaaS.
    why_it_matters: Clarifies that barcode fonts work natively in SaaS without local installation, reducing setup complexity.
  - text: Just find the text box in the RDL that should render as a barcode, and set the FontFamily to the correct font name.
    why_it_matters: Provides the practical method for implementing barcodes directly in RDL files.
code_objects_mentioned: []
systems:
  - reporting
  - development
  - platform
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: https://thatnavguy.com/_astro/rdl-barcode-font-vscode.qH8kF2N-_Z1RlqgJ.webp
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://thatnavguy.com/favicon.svg
  probed_at: "2026-10-07T11:50:21.459Z"
---

# BC Friday Tips #76 Barcode Fonts in RDL Reports

[Read the post](https://thatnavguy.com/blog/2026/bc-friday-tips-76-barcode-fonts-in-rdl/) · That NAV Guy (Teddy Herryanto, MVP) · 2026-07-24 · 155 words · tier community · reviewed (checked by Opus)

> Creating barcodes in Business Central SaaS reports requires setting the FontFamily property directly in RDL files without installing fonts locally. This approach works out of the box and supports various barcode types like Code 93 using fonts such as IDAutomationC93M.

## Key points

- Set FontFamily directly in RDL text boxes to render barcodes without local font installation
- Business Central SaaS supports barcode fonts natively through RDL configuration
- Font names for different barcode types can be found at idautomation.com or via AI assistance
- No additional setup or font installation needed on developer machines

## Quotes

- "You don't need to install a barcode font to develop barcodes on reports in BC SaaS." (Clarifies that barcode fonts work natively in SaaS without local installation, reducing setup complexity.)
- "Just find the text box in the RDL that should render as a barcode, and set the FontFamily to the correct font name." (Provides the practical method for implementing barcodes directly in RDL files.)

## Context

- Features: RDL report barcode support, FontFamily configuration

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
