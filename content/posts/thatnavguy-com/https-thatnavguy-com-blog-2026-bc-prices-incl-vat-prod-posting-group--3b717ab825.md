---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-prices-incl-vat-prod-posting-group--3b717ab825
type: post
title: Change Behaviour on VAT Prod. Posting Group - Prices Incl. VAT in v28.2
summary: Business Central v28.2 changed how it handles VAT Product Posting Group changes on G/L Account purchase lines when Prices Incl. VAT is enabled. Previously the total including VAT remained constant, but now the unit cost recalculates and the total amount decreases.
tier: community
language: en
tags:
  - vat
  - pricing
  - purchase orders
  - behavior change
  - posting groups
system: purchasing
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:47:06.962Z"
  flags: []
generated:
  at: "2026-10-23T22:03:43.080Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 772f7444e80eab1737e6ab0979f2654c9d67e6768ffe6ef9011a97484b022aaa
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-prices-incl-vat--prod-posting-group/
    title: Change Behaviour on VAT Prod. Posting Group - Prices Incl. VAT in v28.2
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-prices-incl-vat--prod-posting-group/
    title: Change Behaviour on VAT Prod. Posting Group - Prices Incl. VAT in v28.2
    date: "2026-08-24"
    commit: null
    t: null
    quote: BC has always kept the Direct Unit Cost for G/L Account lines when you change the VAT Product Posting Group.
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-prices-incl-vat--prod-posting-group/
    title: Change Behaviour on VAT Prod. Posting Group - Prices Incl. VAT in v28.2
    date: "2026-08-24"
    commit: null
    t: null
    quote: If you're on v28.2 and you use Prices Incl. VAT with G/L Account purchase lines, it's worth to be cautious about this.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  related:
    - to: change/bcapps/11208
      title: "#11208 [Master]-Purchase invoice lines of type G/L Account where enabling 'Prices Including VAT' and changing the VAT Prod. Posting Group causes recalculation of the Direct Unit Cost Incl. VAT and Line Amount - Related to Bug  632380"
      label: possibly related
      why: both are about purchase invoice lines with Prices Including VAT; no source states that the change fixes the post's case
      by: override
    - to: change/bcapps/11436
      title: "#11436 [29.X]-Purchase invoice lines of type G/L Account where enabling 'Prices Including VAT' and changing the VAT Prod. Posting Group causes recalculation of the Direct Unit Cost Incl. VAT and Line Amount - Related to Bug  632380"
      label: possibly related
      why: both are about purchase invoice lines with Prices Including VAT; no source states that the change fixes the post's case
      by: override
    - to: hotfix/28.6#648146
      title: Update 28.6 for Business Central
      label: possibly related
      why: the hotfix restores the calculation of purchase invoice lines of type G/L Account; no source says it is the post's 28.2 case
      by: override
post_id: https://thatnavguy.com/blog/2026/bc-prices-incl-vat--prod-posting-group/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2026/bc-prices-incl-vat--prod-posting-group/
published_at: "2026-08-24T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 257
quotes:
  - text: BC has always kept the Direct Unit Cost for G/L Account lines when you change the VAT Product Posting Group.
    why_it_matters: Explains the historical expected behavior that users relied on before v28.2
  - text: If you're on v28.2 and you use Prices Incl. VAT with G/L Account purchase lines, it's worth to be cautious about this.
    why_it_matters: Provides actionable guidance for users who may be affected by this regression
code_objects_mentioned: []
systems:
  - purchasing
  - finance
versions_mentioned:
  - "28.2"
preview:
  embeddable: true
  frame_url: null
  image: https://thatnavguy.com/_astro/ShouldUpdateUnitCost-New-Behaviour.DS6O1SjY_1ppT7n.webp
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://thatnavguy.com/favicon.svg
  probed_at: "2026-10-07T11:50:10.590Z"
---

# Change Behaviour on VAT Prod. Posting Group - Prices Incl. VAT in v28.2

[Read the post](https://thatnavguy.com/blog/2026/bc-prices-incl-vat--prod-posting-group/) · That NAV Guy (Teddy Herryanto, MVP) · 2026-08-24 · 257 words · tier community · reviewed (checked by Opus)

> Business Central v28.2 changed how it handles VAT Product Posting Group changes on G/L Account purchase lines when Prices Incl. VAT is enabled. Previously the total including VAT remained constant, but now the unit cost recalculates and the total amount decreases.

## Key points

- VAT Product Posting Group changes on G/L Account lines now recalculate the direct unit cost when Prices Incl. VAT is true
- The total including VAT no longer stays constant after a VAT posting group change
- Build w1-28.2.50931.51034 introduced this change by including G/L Account lines in the unit cost update logic
- Sales line logic remains unaffected by this change

## Quotes

- "BC has always kept the Direct Unit Cost for G/L Account lines when you change the VAT Product Posting Group." (Explains the historical expected behavior that users relied on before v28.2)
- "If you're on v28.2 and you use Prices Incl. VAT with G/L Account purchase lines, it's worth to be cautious about this." (Provides actionable guidance for users who may be affected by this regression)

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [#11208 \[Master\]-Purchase invoice lines of type G/L Account where enabling 'Prices Including VAT' and changing the VAT Prod. Posting Group causes recalculation of the Direct Unit Cost Incl. VAT and Line Amount - Related to Bug 632380](../../changes/bcapps/11208.md) — possibly related: both are about purchase invoice lines with Prices Including VAT; no source states that the change fixes the post's case (checked by hand)
- [#11436 \[29.X\]-Purchase invoice lines of type G/L Account where enabling 'Prices Including VAT' and changing the VAT Prod. Posting Group causes recalculation of the Direct Unit Cost Incl. VAT and Line Amount - Related to Bug 632380](../../changes/bcapps/11436.md) — possibly related: both are about purchase invoice lines with Prices Including VAT; no source states that the change fixes the post's case (checked by hand)
- [Update 28.6 for Business Central](../../hotfixes/28.6.md#648146) — possibly related: the hotfix restores the calculation of purchase invoice lines of type G/L Account; no source says it is the post's 28.2 case (checked by hand)

## Context

- Features: Prices Incl. VAT, VAT Product Posting Group, Direct Unit Cost recalculation
- Versions: 28.2

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
