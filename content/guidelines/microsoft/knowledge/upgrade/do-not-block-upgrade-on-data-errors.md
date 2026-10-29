---
id: guideline/microsoft/knowledge/upgrade/do-not-block-upgrade-on-data-errors
type: guideline
title: Log telemetry; do not raise errors that block the upgrade
summary: When upgrade code encounters unexpected data — a record it expected to find, a relationship it assumed to be intact — the response is to log telemetry and continue, not to raise an error.
tier: official
language: en
tags:
  - error-handling
  - telemetry
  - session-logmessage
  - blocking
  - graceful
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:09.090Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 868b61e07f621d78f554ee603b398823c85dd9ad
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/do-not-block-upgrade-on-data-errors.md
    title: "microsoft/BCQuality: Log telemetry; do not raise errors that block the upgrade"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
repo_path: microsoft/knowledge/upgrade/do-not-block-upgrade-on-data-errors.md
layer: microsoft
kind: rule
domain: upgrade
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Log telemetry; do not raise errors that block the upgrade

> When upgrade code encounters unexpected data — a record it expected to find, a relationship it assumed to be intact — the response is to log telemetry and continue, not to raise an error.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/do-not-block-upgrade-on-data-errors.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

When upgrade code encounters unexpected data — a record it expected to find, a relationship it assumed to be intact — the response is to log telemetry and continue, not to raise an error. A runtime error inside an upgrade codeunit aborts the upgrade for the company or database, leaving the customer stuck on the old version. Customers should not be blocked from upgrading because of a data inconsistency that an upgrade routine could not have anticipated.

## Best Practice

When an upgrade procedure detects something missing, call `Session.LogMessage` with a stable event ID, classify the message verbosity (typically `Warning`), and `exit` the procedure so the rest of the upgrade can proceed. The platform telemetry then surfaces the situation to the partner without breaking the customer.

See sample: [`do-not-block-upgrade-on-data-errors.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/do-not-block-upgrade-on-data-errors.good.al).

## Anti Pattern

Calling `Record.Get(Key)` (or any other erroring API) and letting the error propagate out of the upgrade trigger. The first tenant with imperfect data fails to upgrade, and the failure surfaces as a hard upgrade error rather than as a telemetry signal.

See sample: [`do-not-block-upgrade-on-data-errors.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/do-not-block-upgrade-on-data-errors.bad.al).

## Examples

- [Good: do-not-block-upgrade-on-data-errors.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/do-not-block-upgrade-on-data-errors.good.al)
- [Bad: do-not-block-upgrade-on-data-errors.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/do-not-block-upgrade-on-data-errors.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
