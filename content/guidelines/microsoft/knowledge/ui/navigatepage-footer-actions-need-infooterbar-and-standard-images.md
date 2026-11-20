---
id: guideline/microsoft/knowledge/ui/navigatepage-footer-actions-need-infooterbar-and-standard-images
type: guideline
title: Wizard navigation actions need `InFooterBar` and the standard images
summary: "A page with PageType = NavigatePage is a wizard: it has no action bar, and the user moves through it with Back, Next, and Finish buttons at the bottom. Those buttons are ordinary action() controls, and two properties decide how the client treats them."
tier: official
language: en
tags:
  - navigatepage
  - wizard
  - infooterbar
  - back-next-finish
  - assisted-setup
  - action-image
  - footer
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T00:17:54.607Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b503f1d431a70c74931b08b08d7a0646c3c2228f
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/navigatepage-footer-actions-need-infooterbar-and-standard-images.md
    title: "microsoft/BCQuality: Wizard navigation actions need `InFooterBar` and the standard images"
    date: "2026-11-19"
    commit: dd49341915045164248349bd891b106ebb4b34cb
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
  changes: []
repo_path: microsoft/knowledge/ui/navigatepage-footer-actions-need-infooterbar-and-standard-images.md
layer: microsoft
kind: rule
domain: ui
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
  - InFooterBar
  - PreviousRecord
  - NextRecord
  - NavigatePage
---

# Wizard navigation actions need `InFooterBar` and the standard images

> A page with PageType = NavigatePage is a wizard: it has no action bar, and the user moves through it with Back, Next, and Finish buttons at the bottom. Those buttons are ordinary action() controls, and two properties decide how the client treats them.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/navigatepage-footer-actions-need-infooterbar-and-standard-images.md) · microsoft layer · ui · BC all · tier official · derived

## Description

A page with `PageType = NavigatePage` is a wizard: it has no action bar, and the user moves through it with **Back**, **Next**, and **Finish** buttons at the bottom. Those buttons are ordinary `action()` controls, and two properties decide how the client treats them. An action is added to the footer only when `InFooterBar` is `true`. The `Image` values `PreviousRecord`, `NextRecord`, and `Approve` let the client recognize the actions as the back, next, and finish navigation and apply the standard presentation, which also adapts on mobile devices.

Both properties are optional to the compiler, so a wizard that omits them builds and still runs. It only looks and behaves unlike every other assisted setup guide.

## Best Practice

Give each navigation action `InFooterBar = true` and the matching image: `PreviousRecord` for **Back**, `NextRecord` for **Next**, and `Approve` for **Finish**. Bind each action's `Enabled` property to a Boolean that the page updates for the active step, so **Back** is disabled on the first step and **Next** on the last.

The order of the step groups in the layout does not define the sequence. The page's own logic decides which group is visible, so review the step logic, not the layout order, when checking the flow.

See sample: [`navigatepage-footer-actions-need-infooterbar-and-standard-images.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/navigatepage-footer-actions-need-infooterbar-and-standard-images.good.al).

## Anti Pattern

Navigation actions on a `NavigatePage` that omit `InFooterBar`, or that set it but use arbitrary images. Without `InFooterBar` the action is not placed in the footer of a page type that has no action bar; with other images the client cannot identify which button is which and does not apply the standard presentation.

Do not apply promoted-action or action-bar guidance to a `NavigatePage`: it has no action bar, and its footer actions are not promoted actions.

See sample: [`navigatepage-footer-actions-need-infooterbar-and-standard-images.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/navigatepage-footer-actions-need-infooterbar-and-standard-images.bad.al).

## References

[Designing assisted setup guides](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-designing-navigate-pages) and [InFooterBar property](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/properties/devenv-infooterbar-property).

## Examples

- [Good: navigatepage-footer-actions-need-infooterbar-and-standard-images.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/navigatepage-footer-actions-need-infooterbar-and-standard-images.good.al)
- [Bad: navigatepage-footer-actions-need-infooterbar-and-standard-images.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/navigatepage-footer-actions-need-infooterbar-and-standard-images.bad.al)

---

From microsoft/BCQuality at dd49341, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
