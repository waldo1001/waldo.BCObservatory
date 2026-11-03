---
id: topic/dev-itpro/development/extensibility/extensibility-requests
type: topic
title: Extensibility requests
summary: Extensibility requests in Business Central cover how to ask for or contribute missing extensibility points through the BCApps repository. They answer questions about creating requests for events, public APIs and enums, event types, and when and how to use or request IsHandled events.
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-03T01:02:13.361Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 92d504f6cc0de8dc5df7c3f3878aa483f59384066532d634eae21ebe9a3e5d96
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-contribute-extensibility
    title: Contribute a change yourself
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/create-extensibility-request
    title: Create an extensibility request
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-use-ishandled-min-req
    title: Minimum requirements for new IsHandled events
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/types-of-events-for-extensibility
    title: Types of events for extensibility
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-use-ishandled-pattern
    title: Using the IsHandled pattern
    date: "2026-10-29"
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
  posts:
    - post/yzhums-com/75294
  guidelines: []
  changes:
    - change/bcapps/11580
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
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 0d5ef04919b2003a407a269205cb993af3fd6316ab4b8766241eb48804f56226
narrative: generated
---

# Extensibility requests

> Extensibility requests in Business Central cover how to ask for or contribute missing extensibility points through the BCApps repository. They answer questions about creating requests for events, public APIs and enums, event types, and when and how to use or request IsHandled events.

Path: [Development](../../development.md) > [Extensibility](../extensibility.md) > Extensibility requests · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section is for developers who find that Business Central lacks an extensibility point they need, such as an event, a public API, or an enum change. It explains two routes: submitting an extensibility request in the BCApps repository, or implementing the change yourself and contributing it.

The pages fit together in a practical order. Start with "Contribute a change yourself" for the overall picture, then "Create an extensibility request" for how to file a request. "Types of events for extensibility" describes the event patterns (business, OnBefore/OnAfter, verify, isolated, switch, skip, handled, discovery) and their quality, which helps you pick the right kind of event to ask for.

Three pages deal with the IsHandled pattern. "Using the IsHandled pattern" explains its drawbacks and recommends it only when better alternatives are not available. "Minimum requirements for new IsHandled events" lists what a request must include, such as the publisher signature, multi-extension interaction, performance, data sensitivity, and alternatives considered.

## Key points

- Two routes: submit an extensibility request or implement the change yourself via the BCApps open-source repository.
- Requests can cover new integration events, public APIs, external access, and enum changes.
- Event types described: business, OnBefore/OnAfter, verify, isolated, switch (manually bound), skip, handled, and discovery events.
- The IsHandled pattern has drawbacks and should be limited to cases where better alternatives are not available.
- Prefer proper extension points and regular events over IsHandled where possible.
- IsHandled requests need a minimum set of information, including the event publisher signature.
- IsHandled requests must address how multiple extensions interact, performance, data sensitivity, and alternatives evaluated.

## Learn pages

- [Contribute a change yourself](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-contribute-extensibility): Learn how to contribute to Microsoft's AL codebase and expand extensibility points to meet your business needs. Explore collaboration opportunities today.
- [Create an extensibility request](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/create-extensibility-request): When you find something that you'd like Microsoft to extend, you can ask us to do just that. This article explains how.
- [Minimum requirements for new IsHandled events](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-use-ishandled-min-req): Provides the minimum information that must accompany a request for adding a new IsHandled event.
- [Types of events for extensibility](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/types-of-events-for-extensibility): This article describes various types of events for extensibility.
  - In the observatory: [Codeunit 12 "Gen. Jnl.-Post Line"](../../../../objects/codeunit/12.md), [Codeunit 1248 "Process Bank Acc. Rec Lines"](../../../../objects/codeunit/1248.md), [Codeunit 1535 "Approvals Mgmt."](../../../../objects/codeunit/1535.md), [Codeunit 370 "Bank Acc. Reconciliation Post"](../../../../objects/codeunit/370.md), [Codeunit 5056 "CustCont-Update"](../../../../objects/codeunit/5056.md), [Codeunit 5600 "FA Insert Ledger Entry"](../../../../objects/codeunit/5600.md)
- [Using the IsHandled pattern](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-use-ishandled-pattern): This article describes how, and when, to use the popular IsHandled pattern for events.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11580 [Extensibility Request] issue 29654: customize document rejection response](../../../../changes/bcapps/11580.md) (code change): "customize document rejection response. Workflow Setup now offers an overloaded method"
- [Dynamics 365 Business Central: Create an extensibility request on BCApps (ALAppExtensions is being retired)](../../../../posts/yzhums-com/75294.md) (community post): "extensibility requests including event requests must now be submitted through BCApps"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
