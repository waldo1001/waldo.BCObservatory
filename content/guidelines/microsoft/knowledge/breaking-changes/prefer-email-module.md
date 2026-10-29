---
id: guideline/microsoft/knowledge/breaking-changes/prefer-email-module
type: guideline
title: Send email through the Email module, not Codeunit Mail (397)
summary: Older AL code sends email by calling Codeunit Mail (397).
tier: official
language: en
tags:
  - email
  - codeunit-mail
  - email-message
  - email-scenario
  - email-account
  - smtp
  - sending-email
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:53.923Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6c04b37d5f3a06b79b283471b31ee310a731bc59
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/prefer-email-module.md
    title: "microsoft/BCQuality: Send email through the Email module, not Codeunit Mail (397)"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/8904
    - object/enum/8890
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/156
repo_path: microsoft/knowledge/breaking-changes/prefer-email-module.md
layer: microsoft
kind: rule
domain: breaking-changes
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - CreateMessage
  - GetErrorDesc
---

# Send email through the Email module, not Codeunit Mail (397)

> Older AL code sends email by calling Codeunit Mail (397).

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/prefer-email-module.md) · microsoft layer · breaking-changes · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

Older AL code sends email by calling `Codeunit Mail (397)`. Business Central's current extensibility model is a different, richer object set — `Codeunit Email`, `Codeunit "Email Message"`, `enum "Email Scenario"`, and the `Email Account`/`Email Connector` interface (Microsoft 365, Current User, SMTP, or a custom connector). `Codeunit "Email Message"` is the in-memory object you build the message on; it is not itself the persisted Sent/Outbox/Draft record — that storage is managed separately once the message is queued or sent. New code built on `Codeunit Mail` inherits its SMTP-era, single-connector assumptions and leaves no Sent/Outbox trail behind.

## Best Practice

Build on `Codeunit Email` and `Codeunit "Email Message"`. Route the message through an `Email Scenario` so different document types can use different accounts without the calling code needing to know which account that is, and get a tracked Sent/Outbox/Draft record for free.

See sample: [`prefer-email-module.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/prefer-email-module.good.al).

## Anti Pattern

Calling `Codeunit Mail`'s `CreateMessage`. It still compiles and runs, but current `Codeunit Mail`'s own implementation of `CreateMessage` no longer sends anything by itself — it only raises integration events for a legacy subscriber to act on — so building new code on it means depending on whatever compatibility shim happens to still be wired up, with no first-class connector selection and no queryable Sent/Outbox/Draft record. `Send` and `GetErrorDesc` are not current members of `Codeunit Mail` at all; do not reference them.

See sample: [`prefer-email-module.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/prefer-email-module.bad.al).

## Examples

- [Good: prefer-email-module.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/prefer-email-module.good.al)
- [Bad: prefer-email-module.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/prefer-email-module.bad.al)

## Names

- [codeunit 8904 "Email Message"](../../../../objects/codeunit/8904.md) (names this object)
- [enum 8890 "Email Scenario"](../../../../objects/enum/8890.md) (names this object)

## Changed by

- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
