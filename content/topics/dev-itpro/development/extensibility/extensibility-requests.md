---
id: topic/dev-itpro/development/extensibility/extensibility-requests
type: topic
title: Extensibility requests
summary: "Extensibility requests in Business Central: how to ask Microsoft for changes to the AL codebase through the BCApps repository, how to design and justify new events (including IsHandled events), and how to contribute a change directly. It answers questions about request guidelines, event types, and the IsHandled pattern."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:53.709Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4dc55d4b4b2289a4fb59e2230cd390e31720aec45b6edae846712dd5a89995b7
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-contribute-extensibility
    title: Contribute a change yourself
    date: "2025-04-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/create-extensibility-request
    title: Create an extensibility request
    date: "2025-04-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-use-ishandled-min-req
    title: Minimum requirements for new IsHandled events
    date: "2025-08-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/types-of-events-for-extensibility
    title: Types of events for extensibility
    date: "2025-08-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-use-ishandled-pattern
    title: Using the IsHandled pattern
    date: "2025-08-14"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-contribute-extensibility
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/create-extensibility-request
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-use-ishandled-min-req
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/types-of-events-for-extensibility
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-use-ishandled-pattern
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/extensibility
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Extensibility
  - Extensibility requests
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/extensibility
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 0d5ef04919b2003a407a269205cb993af3fd6316ab4b8766241eb48804f56226
narrative: generated
---

# Extensibility requests

> Extensibility requests in Business Central: how to ask Microsoft for changes to the AL codebase through the BCApps repository, how to design and justify new events (including IsHandled events), and how to contribute a change directly. It answers questions about request guidelines, event types, and the IsHandled pattern.

Path: [Development](../../development.md) > [Extensibility](../extensibility.md) > Extensibility requests · tier official · system development · narrative reviewed by Opus

## Overview

This section is for AL developers who need a change in Business Central's base code, such as a new event or other code improvement. It explains two routes: submit an extensibility request to the BCApps repository, or contribute the change yourself to the BCApps and BusinessCentralApps repositories.

The pages build on each other. "Create an extensibility request" gives the submission guidelines and event design guidance. "Types of events for extensibility" describes the event kinds and ranks them by quality, so you can pick the right one. "Using the IsHandled pattern" explains why that pattern is widely used but has drawbacks and what to use instead. "Minimum requirements for new IsHandled events" lists the information and checklist you need if you still request one.

Start with "Create an extensibility request" and "Types of events for extensibility". Read "Contribute a change yourself" if you would rather make the change than wait for one.

## Key points

- Extensibility requests are submitted to Microsoft's BCApps repository to ask for code changes, new events, or other improvements to the AL codebase.
- You can instead contribute changes directly to the BCApps and BusinessCentralApps repositories.
- Event types covered: business events, OnBefore/OnAfter, verify, isolated, switch, skip, and handled events, with quality rankings and usage guidance.
- The IsHandled pattern allows overriding code but has drawbacks: only a single subscriber, poor readability, and fragile solutions.
- Recommended alternatives to IsHandled: proper extensibility, regular events, the OnSkip pattern, or reimplementing the functionality.
- New IsHandled event requests need minimum information, a submission checklist, and an example structure.
- Requests for IsHandled events should address alternative evaluation, performance considerations, and a data sensitivity review.
- Request guidelines also touch on integration events, event design, manual binding, and temporary tables.

## Learn pages

- [Contribute a change yourself](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-contribute-extensibility): Learn how to contribute to Microsoft's AL codebase and expand extensibility points to meet your business needs. Explore collaboration opportunities today.
- [Create an extensibility request](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/create-extensibility-request): When you find something that you'd like Microsoft to extend, you can ask us to do just that. This article explains how.
- [Minimum requirements for new IsHandled events](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-use-ishandled-min-req): Provides the minimum information that must accompany a request for adding a new IsHandled event.
- [Types of events for extensibility](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/types-of-events-for-extensibility): This article describes various types of events for extensibility.
- [Using the IsHandled pattern](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-use-ishandled-pattern): This article describes how, and when, to use the popular IsHandled pattern for events.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
