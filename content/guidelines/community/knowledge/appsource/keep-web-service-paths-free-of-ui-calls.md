---
id: guideline/community/knowledge/appsource/keep-web-service-paths-free-of-ui-calls
type: guideline
title: Keep web-service paths free of UI calls
summary: Pages and codeunits exposed as web services run without an interactive client. Calls that require a UI callback, including Confirm, StrMenu, and modal pages, can terminate the service request instead of completing the operation.
tier: official
language: en
tags:
  - web-service
  - serviceenabled
  - guiallowed
  - message
  - confirm
  - strmenu
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:11.409Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 45b06b2564a710f38568e0c0f6cc3353a2977ba4
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/keep-web-service-paths-free-of-ui-calls.md
    title: "microsoft/BCQuality: Keep web-service paths free of UI calls"
    date: "2026-09-14"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/dialog/dialog-strmenu-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-guiallowed-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/142
repo_path: community/knowledge/appsource/keep-web-service-paths-free-of-ui-calls.md
layer: community
kind: rule
domain: appsource
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
  - StrMenu
  - GuiAllowed
---

# Keep web-service paths free of UI calls

> Pages and codeunits exposed as web services run without an interactive client. Calls that require a UI callback, including Confirm, StrMenu, and modal pages, can terminate the service request instead of completing the operation.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/keep-web-service-paths-free-of-ui-calls.md) · community layer · appsource · BC all · tier official · derived

## Description

Pages and codeunits exposed as web services run without an interactive client. Calls that require a UI callback, including `Confirm`, `StrMenu`, and modal pages, can terminate the service request instead of completing the operation. `Message` does not raise the callback error: the message is suppressed and logged, making it ineffective for communicating a service result.

## Best Practice

Keep service entry points and every procedure they call free of interactive UI. Return data through the service contract and report validation failures with service-safe error handling. When a procedure is shared with an interactive client, guard UI-only behavior with `GuiAllowed` while preserving the underlying operation.

See sample: [`keep-web-service-paths-free-of-ui-calls.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/keep-web-service-paths-free-of-ui-calls.good.al).

## Anti Pattern

A web-service-exposed page or codeunit calls an interactive UI method directly or indirectly. Detection signals include `Message`, `Confirm`, `StrMenu`, `Page.RunModal`, and confirmation-dialog pages on a service call path. Treat `Message` as suppressed and ineffective, not as a callback failure. Do not flag a controlled `Error` solely because it returns a service fault.

See sample: [`keep-web-service-paths-free-of-ui-calls.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/keep-web-service-paths-free-of-ui-calls.bad.al).

## Examples

- [Good: keep-web-service-paths-free-of-ui-calls.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/keep-web-service-paths-free-of-ui-calls.good.al)
- [Bad: keep-web-service-paths-free-of-ui-calls.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/keep-web-service-paths-free-of-ui-calls.bad.al)

## Names

- [Dialog.StrMenu(Text \[, Integer\] \[, Text\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/dialog/dialog-strmenu-method) (names StrMenu)
- [System.GuiAllowed() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-guiallowed-method) (names GuiAllowed)

## Changed by

- [#142 Add AL-focused AppSource validation guidance](../../../../changes/bcquality/142.md), 2026-09-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
