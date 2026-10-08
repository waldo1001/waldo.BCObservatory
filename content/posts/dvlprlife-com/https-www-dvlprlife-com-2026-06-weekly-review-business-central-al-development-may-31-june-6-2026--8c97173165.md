---
id: post/dvlprlife-com/https-www-dvlprlife-com-2026-06-weekly-review-business-central-al-development-may-31-june-6-2026--8c97173165
type: post
title: "Weekly Review: Business Central AL Development – May 31–June 6, 2026"
summary: "Weekly community roundup for May 31 to June 6, 2026 covering four posts: BC 28.1 making GPT-5.3-chat the default agent model and adding a model switcher (Auto by default) with matching AL APIs, where to get the standard Power BI report files now that the GitHub repo is gone, date formulas for posting period restrictions, and ways to reduce GitHub Copilot spend under token-based billing."
tier: community
language: en
tags:
  - ai agents
  - model selection
  - power bi
  - posting periods
  - date formulas
  - github copilot
  - prompt optimization
  - token pricing
system: copilot
review:
  state: reviewed
  by: opus
  at: "2026-10-08T01:54:57.218Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: b84f60246cbba345f091e70184370a96cbb392196e3862acc2720c58b3d7d2c8
evidence:
  - kind: blog
    url: https://www.dvlprlife.com/2026/06/weekly-review-business-central-al-development-may-31-june-6-2026/
    title: "Weekly Review: Business Central AL Development – May 31–June 6, 2026"
    date: "2026-06-09"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://www.dvlprlife.com/2026/06/weekly-review-business-central-al-development-may-31-june-6-2026/
    title: "Weekly Review: Business Central AL Development – May 31–June 6, 2026"
    date: "2026-06-09"
    commit: null
    t: null
    quote: BC 28.1, Microsoft has flipped the default AI model for Agents and the Managed AI service to GPT-5.3-chat.
  - kind: blog
    url: https://www.dvlprlife.com/2026/06/weekly-review-business-central-al-development-may-31-june-6-2026/
    title: "Weekly Review: Business Central AL Development – May 31–June 6, 2026"
    date: "2026-06-09"
    commit: null
    t: null
    quote: Formulas are accepted on General Ledger Setup, User Setup, and General Journal Templates, and validation runs in that order.
  - kind: blog
    url: https://www.dvlprlife.com/2026/06/weekly-review-business-central-al-development-may-31-june-6-2026/
    title: "Weekly Review: Business Central AL Development – May 31–June 6, 2026"
    date: "2026-06-09"
    commit: null
    t: null
    quote: Cache-read tokens are cheapest, output tokens are most expensive.
links:
  learn: []
  objects:
    - object/codeunit/4321
    - object/table/98
    - object/table/91
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://www.dvlprlife.com/2026/06/weekly-review-business-central-al-development-may-31-june-6-2026/
source_id: dvlprlife-com
source_name: DvlprLife
url: https://www.dvlprlife.com/2026/06/weekly-review-business-central-al-development-may-31-june-6-2026/
published_at: "2026-06-09T13:57:01.000Z"
author: Brad Prendergast
full_text: false
words: 838
quotes:
  - text: BC 28.1, Microsoft has flipped the default AI model for Agents and the Managed AI service to GPT-5.3-chat.
    why_it_matters: Signals BC's shift to a more capable default model for agent-based AI workloads, with the model switcher API giving developers control over the choice.
  - text: Formulas are accepted on General Ledger Setup, User Setup, and General Journal Templates, and validation runs in that order.
    why_it_matters: Clarifies the validation hierarchy for date formulas in posting periods, essential for predictable behavior when users and templates have conflicting rules.
  - text: Cache-read tokens are cheapest, output tokens are most expensive.
    why_it_matters: Reveals the cost structure of GitHub Copilot's token-based pricing model, helping developers prioritize which prompts and caching strategies minimize spend.
code_objects_mentioned:
  - codeunit Agent
  - page Agents
  - table General Ledger Setup
  - table User Setup
  - table General Journal Templates
systems:
  - copilot
  - development
  - reporting
versions_mentioned:
  - BC 28.1
  - BC 2026 Wave 1
preview:
  embeddable: true
  frame_url: null
  image: https://www.dvlprlife.com/wp-content/uploads/2026/04/cropped-avatar-transparent-250-270x270.png
  image_alt: DvlprLife.com
  image_w: 270
  image_h: 270
  site_name: DvlprLife.com
  favicon: https://www.dvlprlife.com/wp-content/uploads/2026/04/cropped-avatar-transparent-250-270x270.png
  probed_at: "2026-10-07T11:50:32.782Z"
---

# Weekly Review: Business Central AL Development – May 31–June 6, 2026

[Read the post](https://www.dvlprlife.com/2026/06/weekly-review-business-central-al-development-may-31-june-6-2026/) · DvlprLife (Brad Prendergast) · 2026-06-09 · 838 words · tier community · reviewed (checked by Opus)

> Weekly community roundup for May 31 to June 6, 2026 covering four posts: BC 28.1 making GPT-5.3-chat the default agent model and adding a model switcher (Auto by default) with matching AL APIs, where to get the standard Power BI report files now that the GitHub repo is gone, date formulas for posting period restrictions, and ways to reduce GitHub Copilot spend under token-based billing.

## Key points

- BC 28.1 introduces a model switcher on the Agents page with Auto as default, plus AL APIs (SetModelId, GetModelId, etc.) for code-defined agents; GPT-5.3-chat suits conversational work while GPT-4.1-latest excels at data parsing
- Standard BC Power BI reports are now distributed via template apps in Power BI (not GitHub); each app works per company, requiring Power BI Pro license
- Date formulas in posting period restrictions (G/L Setup, User Setup, Journal Templates) support dynamic ranges like <-CM> to <CM> or <-30D> to <0D>, validated in order with User Setup checked first
- GitHub Copilot pricing shifted to token-based credits; cost formula is context size × iterations × model price; trimming Configure Tools, using file references with #, and rotating chats at 12 - 15 turns reduce spend

## Quotes

- "BC 28.1, Microsoft has flipped the default AI model for Agents and the Managed AI service to GPT-5.3-chat." (Signals BC's shift to a more capable default model for agent-based AI workloads, with the model switcher API giving developers control over the choice.)
- "Formulas are accepted on General Ledger Setup, User Setup, and General Journal Templates, and validation runs in that order." (Clarifies the validation hierarchy for date formulas in posting periods, essential for predictable behavior when users and templates have conflicting rules.)
- "Cache-read tokens are cheapest, output tokens are most expensive." (Reveals the cost structure of GitHub Copilot's token-based pricing model, helping developers prioritize which prompts and caching strategies minimize spend.)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- [codeunit 4321 "Agent"](../../objects/codeunit/4321.md)
- page "Agents"
- [table 98 "General Ledger Setup"](../../objects/table/98.md)
- [table 91 "User Setup"](../../objects/table/91.md)
- table "General Journal Templates"

Not found in BC28-30: page "Agents", table "General Journal Templates".

## Context

- Features: Agent model switcher, GPT-5.3-chat default model, Power BI template apps, Date formula support in posting periods, Dynamic posting-period restrictions, GitHub Copilot token-based billing, Prompt context optimization, AI model selection APIs
- Versions: BC 28.1, BC 2026 Wave 1

Source: DvlprLife, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
