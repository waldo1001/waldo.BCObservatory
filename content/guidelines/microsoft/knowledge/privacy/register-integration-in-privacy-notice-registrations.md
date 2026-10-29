---
id: guideline/microsoft/knowledge/privacy/register-integration-in-privacy-notice-registrations
type: guideline
title: Register custom integrations with Codeunit Privacy Notice
summary: The current extension point is Codeunit "Privacy Notice". Extensions can subscribe to its OnRegisterPrivacyNotices event and add a dedicated notice ID, integration name, and link to the temporary Privacy Notice record.
tier: official
language: en
tags:
  - privacy-notice
  - integration
  - register
  - onregisterprivacynotices
  - notice-id
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:50.110Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a9f12ff8403896b2d805a6d7ba805acbee3b2db8
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/register-integration-in-privacy-notice-registrations.md
    title: "microsoft/BCQuality: Register custom integrations with Codeunit Privacy Notice"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/1563
    - object/codeunit/1357
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/92
repo_path: microsoft/knowledge/privacy/register-integration-in-privacy-notice-registrations.md
layer: microsoft
kind: rule
domain: privacy
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 1
identifiers:
  - OnRegisterPrivacyNotices
  - CreatePrivacyNotice
  - CreatePrivacyNoticeForIntegration
---

# Register custom integrations with Codeunit Privacy Notice

> The current extension point is Codeunit "Privacy Notice". Extensions can subscribe to its OnRegisterPrivacyNotices event and add a dedicated notice ID, integration name, and link to the temporary Privacy Notice record.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/register-integration-in-privacy-notice-registrations.md) · microsoft layer · privacy · BC all · tier official · derived

## Description

The current extension point is `Codeunit "Privacy Notice"`. Extensions can subscribe to its `OnRegisterPrivacyNotices` event and add a dedicated notice ID, integration name, and link to the temporary `Privacy Notice` record. For explicit creation outside the default-registration flow, the same codeunit exposes `CreatePrivacyNotice`. `Codeunit "Privacy Notice Registrations"` contains IDs for built-in integrations and is not the registration API for a custom service.

## Best Practice

Choose a stable ID owned by the extension. Register it through `OnRegisterPrivacyNotices`, or call `PrivacyNotice.CreatePrivacyNotice` during an intentional setup or upgrade path. Use that same ID for consent checks described in `privacy-notice-consent-for-external-data-transfer.md`.

See sample: [`register-integration-in-privacy-notice-registrations.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/register-integration-in-privacy-notice-registrations.good.al).

## Anti Pattern

Reusing the Exchange or another built-in notice ID for a custom integration, subscribing to `Privacy Notice Registrations`, or calling the nonexistent `CreatePrivacyNoticeForIntegration` method. These shapes attach consent to the wrong service or do not compile.

## Examples

- [Good: register-integration-in-privacy-notice-registrations.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/register-integration-in-privacy-notice-registrations.good.al)

## Names

- [codeunit 1563 "Privacy Notice"](../../../../objects/codeunit/1563.md) (names this object)
- [codeunit 1357 "Privacy Notice Registrations"](../../../../objects/codeunit/1357.md) (names this object)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#92 Correct security and privacy knowledge guidance](../../../../changes/bcquality/92.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
