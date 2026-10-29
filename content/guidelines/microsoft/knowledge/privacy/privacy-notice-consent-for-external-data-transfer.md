---
id: guideline/microsoft/knowledge/privacy/privacy-notice-consent-for-external-data-transfer
type: guideline
title: Check the custom Privacy Notice before external data transfer
summary: Business Central's Codeunit "Privacy Notice" creates notices and records per-integration approval. A custom integration needs its own stable notice ID; it must not borrow the Exchange or another built-in service's consent.
tier: official
language: en
tags:
  - privacy-notice
  - consent
  - http-client
  - outgoing-request
  - external-service
  - confirmprivacynoticeapproval
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:50.240Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8c3898d2359bc7666886d521d1cdf3c1ee34e368
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/privacy-notice-consent-for-external-data-transfer.md
    title: "microsoft/BCQuality: Check the custom Privacy Notice before external data transfer"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/1563
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/92
repo_path: microsoft/knowledge/privacy/privacy-notice-consent-for-external-data-transfer.md
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
examples: 2
identifiers:
  - ConfirmPrivacyNoticeApproval
  - GetPrivacyNoticeApprovalState
  - CreatePrivacyNotice
  - OnRegisterPrivacyNotices
---

# Check the custom Privacy Notice before external data transfer

> Business Central's Codeunit "Privacy Notice" creates notices and records per-integration approval. A custom integration needs its own stable notice ID; it must not borrow the Exchange or another built-in service's consent.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/privacy-notice-consent-for-external-data-transfer.md) · microsoft layer · privacy · BC all · tier official · derived

## Description

Business Central's `Codeunit "Privacy Notice"` creates notices and records per-integration approval. A custom integration needs its own stable notice ID; it must not borrow the Exchange or another built-in service's consent. `ConfirmPrivacyNoticeApproval` shows the notice when needed and returns whether the request is approved. `GetPrivacyNoticeApprovalState` checks an existing notice without showing UI.

## Best Practice

Register the custom notice with `CreatePrivacyNotice` during setup or through `OnRegisterPrivacyNotices`. Before sending data, call `ConfirmPrivacyNoticeApproval(<custom id>)` outside a write transaction, or check `GetPrivacyNoticeApprovalState(<custom id>)` when the flow must not show UI. No path should issue the request without approval.

See sample: [`privacy-notice-consent-for-external-data-transfer.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/privacy-notice-consent-for-external-data-transfer.good.al).

## Anti Pattern

A custom integration that posts data without checking its own notice, or that gates the call with a built-in ID such as the Exchange privacy notice ID. Consent for one service does not authorize another.

See sample: [`privacy-notice-consent-for-external-data-transfer.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/privacy-notice-consent-for-external-data-transfer.bad.al).

## Examples

- [Good: privacy-notice-consent-for-external-data-transfer.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/privacy-notice-consent-for-external-data-transfer.good.al)
- [Bad: privacy-notice-consent-for-external-data-transfer.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/privacy-notice-consent-for-external-data-transfer.bad.al)

## Names

- [codeunit 1563 "Privacy Notice"](../../../../objects/codeunit/1563.md) (names this object)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#92 Correct security and privacy knowledge guidance](../../../../changes/bcquality/92.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
