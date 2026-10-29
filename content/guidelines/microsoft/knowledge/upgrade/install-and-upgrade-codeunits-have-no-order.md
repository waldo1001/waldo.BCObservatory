---
id: guideline/microsoft/knowledge/upgrade/install-and-upgrade-codeunits-have-no-order
type: guideline
title: Separate install or upgrade codeunits have no execution order
summary: An extension can contain multiple Install or Upgrade codeunits, but Business Central does not guarantee the order in which codeunits of the same subtype execute.
tier: official
language: en
tags:
  - install-codeunit
  - upgrade-codeunit
  - execution-order
  - subtype-install
  - subtype-upgrade
  - sequencing
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:08.427Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b11a842589bf744057bb7cec3de5a0ce54a06f43
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/install-and-upgrade-codeunits-have-no-order.md
    title: "microsoft/BCQuality: Separate install or upgrade codeunits have no execution order"
    date: "2026-09-21"
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
    - change/bcquality/195
    - change/bcquality/57
repo_path: microsoft/knowledge/upgrade/install-and-upgrade-codeunits-have-no-order.md
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
identifiers:
  - OnUpgradePerCompany
---

# Separate install or upgrade codeunits have no execution order

> An extension can contain multiple Install or Upgrade codeunits, but Business Central does not guarantee the order in which codeunits of the same subtype execute.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/install-and-upgrade-codeunits-have-no-order.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

An extension can contain multiple `Install` or `Upgrade` codeunits, but Business Central does not guarantee the order in which codeunits of the same subtype execute. Upgrade trigger phases are ordered globally, yet one codeunit's `OnUpgradePerCompany` must not assume another codeunit's same-phase trigger already ran. Object ID and source-file order do not provide sequencing.

## Best Practice

Keep separate install or upgrade codeunits independent. When two steps have a real dependency, coordinate them from one owning trigger in the required order; use upgrade tags to make each completed step idempotent.

See sample: [`install-and-upgrade-codeunits-have-no-order.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/install-and-upgrade-codeunits-have-no-order.good.al).

## Anti Pattern

Splitting dependent steps into separate codeunits and relying on names, object IDs, or declaration order. The dependent codeunit can run first and fail or observe partially migrated data.

See sample: [`install-and-upgrade-codeunits-have-no-order.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/install-and-upgrade-codeunits-have-no-order.bad.al).

## Reference

[Create proper installation and upgrade codeunits](https://learn.microsoft.com/en-us/training/modules/easy-application-upgrade/3-installation-upgrade-codeunits)

## Examples

- [Good: install-and-upgrade-codeunits-have-no-order.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/install-and-upgrade-codeunits-have-no-order.good.al)
- [Bad: install-and-upgrade-codeunits-have-no-order.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/install-and-upgrade-codeunits-have-no-order.bad.al)

## Changed by

- [#195 Add foundational AL developer knowledge](../../../../changes/bcquality/195.md), 2026-09-21
- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
