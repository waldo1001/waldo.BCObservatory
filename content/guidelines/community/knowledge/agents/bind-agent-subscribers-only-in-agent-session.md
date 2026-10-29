---
id: guideline/community/knowledge/agents/bind-agent-subscribers-only-in-agent-session
type: guideline
title: Bind extra agent subscribers only inside an agent session
summary: Page-filter tweaks, extra validation, and prompt dialogs for the agent should not run for every user. Agent Session.IsAgentSession distinguishes agent UI sessions. Binding those subscribers on System Initialization only when the session is an agent session avoids global subscriber cost.
tier: official
language: en
tags:
  - agent-session
  - isagentsession
  - bindsubscription
  - system-initialization
  - singleinstance
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:17.542Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: be227f4d4e3acd2e678e5ffcb2a32efff912ea8d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/bind-agent-subscribers-only-in-agent-session.md
    title: "microsoft/BCQuality: Bind extra agent subscribers only inside an agent session"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-bindsubscription-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/137
  related:
    - to: object/codeunit/150
      title: codeunit 150 "System Initialization"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: community/knowledge/agents/bind-agent-subscribers-only-in-agent-session.md
layer: community
kind: rule
domain: agents
bc_version:
  - 27..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - SingleInstance
  - OnAfterInitialization
  - BindSubscription
  - IsAgentSession
---

# Bind extra agent subscribers only inside an agent session

> Page-filter tweaks, extra validation, and prompt dialogs for the agent should not run for every user. Agent Session.IsAgentSession distinguishes agent UI sessions. Binding those subscribers on System Initialization only when the session is an agent session avoids global subscriber cost.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/bind-agent-subscribers-only-in-agent-session.md) · community layer · agents · BC 27.. · tier official · derived

## Description

Page-filter tweaks, extra validation, and prompt dialogs for the agent should not run for every user. `Agent Session.IsAgentSession` distinguishes agent UI sessions. Binding those subscribers on `System Initialization` only when the session is an agent session avoids global subscriber cost. Models register `SingleInstance` table subscribers unconditionally.

## Best Practice

On `OnAfterInitialization`, exit unless `Agent Session.IsAgentSession`. Then `BindSubscription` a single-instance codeunit that holds the current task id. Keep those subscribers internal.

See sample: [`bind-agent-subscribers-only-in-agent-session.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/bind-agent-subscribers-only-in-agent-session.good.al).

## Anti Pattern

Event subscribers on `Sales Header` OnAfterInsert that always `Message` the agent, with no `IsAgentSession` guard. Detection signal: agent-only behaviour in a static subscriber that is not bind-gated.

See sample: [`bind-agent-subscribers-only-in-agent-session.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/bind-agent-subscribers-only-in-agent-session.bad.al).

## Examples

- [Good: bind-agent-subscribers-only-in-agent-session.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/bind-agent-subscribers-only-in-agent-session.good.al)
- [Bad: bind-agent-subscribers-only-in-agent-session.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/bind-agent-subscribers-only-in-agent-session.bad.al)

## Names

- [Session.BindSubscription(Codeunit) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-bindsubscription-method) (names BindSubscription)
- [codeunit 150 "System Initialization"](../../../../objects/codeunit/150.md) (possibly related: a code span names it)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
