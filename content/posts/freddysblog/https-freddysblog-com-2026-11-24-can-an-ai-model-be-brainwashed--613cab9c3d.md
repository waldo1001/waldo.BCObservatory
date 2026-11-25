---
id: post/freddysblog/https-freddysblog-com-2026-11-24-can-an-ai-model-be-brainwashed--613cab9c3d
type: post
title: Can an AI model be brainwashed?
summary: "AI models can be manipulated through training data or fine-tuning to exhibit hidden behaviors or biased outputs, posing risks when used in ERP systems like Business Central. Protecting against AI-based fraud requires traditional internal controls: segregation of duties, approval limits, audit trails, and verification with rule-based tools."
tier: community
language: en
tags:
  - ai security
  - fraud prevention
  - agent governance
  - model integrity
  - sleeper agents
  - internal controls
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-25T00:13:59.041Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 726edaf990755bdf1a057a8b57e6b62cdc502b9efd0c2a2ec872976d09626171
evidence:
  - kind: blog
    url: https://freddysblog.com/2026/11/24/can-an-ai-model-be-brainwashed/
    title: Can an AI model be brainwashed?
    date: "2026-11-24"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://freddysblog.com/2026/11/24/can-an-ai-model-be-brainwashed/
    title: Can an AI model be brainwashed?
    date: "2026-11-24"
    commit: null
    t: null
    quote: "Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training"
  - kind: blog
    url: https://freddysblog.com/2026/11/24/can-an-ai-model-be-brainwashed/
    title: Can an AI model be brainwashed?
    date: "2026-11-24"
    commit: null
    t: null
    quote: as few as 250 poisoned documents in the training data were enough to plant a backdoor
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://freddysblog.com/2026/11/24/can-an-ai-model-be-brainwashed
source_id: freddysblog
source_name: Freddys blog
url: https://freddysblog.com/2026/11/24/can-an-ai-model-be-brainwashed/
published_at: "2026-11-24T05:00:00.000Z"
author: Freddy Kristiansen
full_text: false
words: 2058
quotes:
  - text: "Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training"
    why_it_matters: Documents that researchers deliberately trained models with hidden triggers that survive normal safety training, demonstrating the feasibility and persistence of AI backdoors
  - text: as few as 250 poisoned documents in the training data were enough to plant a backdoor
    why_it_matters: Shows that backdoors require minimal manipulation - a tiny fraction of billions of training documents - making them extremely difficult to detect through data inspection
code_objects_mentioned: []
systems:
  - administration
  - copilot
  - integration
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: null
  probed_at: "2026-11-15T00:42:41.587Z"
---

# Can an AI model be brainwashed?

[Read the post](https://freddysblog.com/2026/11/24/can-an-ai-model-be-brainwashed/) · Freddys blog (Freddy Kristiansen) · 2026-11-24 · 2058 words · tier community · **unreviewed** (model text not yet checked)

> AI models can be manipulated through training data or fine-tuning to exhibit hidden behaviors or biased outputs, posing risks when used in ERP systems like Business Central. Protecting against AI-based fraud requires traditional internal controls: segregation of duties, approval limits, audit trails, and verification with rule-based tools.

## Key points

- AI models from closed, open-weight, or open-source sources all carry manipulation risks; closed-source requires vendor trust, open-weight requires trusting downloaders, open-source allows inspection but scale makes full verification impractical
- Sleeper agents with hidden triggers can survive safety training and normal fine-tuning, with as few as 250 poisoned documents sufficient to plant a backdoor in billions of training documents
- In Business Central, a compromised agent could bypass controls by changing vendor bank accounts, approving mismatched invoices, or splitting payments to avoid detection limits, blending with legitimate transactions
- Standard fraud prevention controls - segregation of duties, approval limits, audit trails, anomaly detection, and human oversight for critical transactions - protect against both human and AI fraud equally
- AI answers reflect the values and choices of model builders; users should verify information with multiple models and sources rather than treating AI outputs as absolute truth

## Quotes

- "Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training" (Documents that researchers deliberately trained models with hidden triggers that survive normal safety training, demonstrating the feasibility and persistence of AI backdoors)
- "as few as 250 poisoned documents in the training data were enough to plant a backdoor" (Shows that backdoors require minimal manipulation - a tiny fraction of billions of training documents - making them extremely difficult to detect through data inspection)

## Context

- Features: AI agent permissions and harnesses, Segregation of duties for agents, Anomaly detection in transaction logs, Multi-model verification, Audit trails for agent actions

Source: Freddys blog, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
