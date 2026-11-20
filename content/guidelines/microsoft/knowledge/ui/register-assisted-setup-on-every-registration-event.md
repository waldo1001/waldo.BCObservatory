---
id: guideline/microsoft/knowledge/ui/register-assisted-setup-on-every-registration-event
type: guideline
title: Register an assisted setup guide on every `OnRegisterAssistedSetup` event
summary: The Assisted Setup page lists the guides that are registered as guided experience items. An extension registers its guide by subscribing to the OnRegisterAssistedSetup event of codeunit Guided Experience and calling InsertAssistedSetup from the subscriber.
tier: official
language: en
tags:
  - assisted-setup
  - guided-experience
  - onregisterassistedsetup
  - insertassistedsetup
  - wizard
  - onboarding
  - registration
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T00:18:10.943Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a771dc8d9eeb5fcd59d3f80a486a680213407725
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/register-assisted-setup-on-every-registration-event.md
    title: "microsoft/BCQuality: Register an assisted setup guide on every `OnRegisterAssistedSetup` event"
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
  related:
    - to: object/codeunit/1990
      title: codeunit 1990 "Guided Experience"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/ui/register-assisted-setup-on-every-registration-event.md
layer: microsoft
kind: rule
domain: ui
bc_version:
  - 18..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - OnRegisterAssistedSetup
  - InsertAssistedSetup
---

# Register an assisted setup guide on every `OnRegisterAssistedSetup` event

> The Assisted Setup page lists the guides that are registered as guided experience items. An extension registers its guide by subscribing to the OnRegisterAssistedSetup event of codeunit Guided Experience and calling InsertAssistedSetup from the subscriber.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/register-assisted-setup-on-every-registration-event.md) · microsoft layer · ui · BC 18.. · tier official · derived

## Description

The **Assisted Setup** page lists the guides that are registered as guided experience items. An extension registers its guide by subscribing to the `OnRegisterAssistedSetup` event of codeunit `Guided Experience` and calling `InsertAssistedSetup` from the subscriber. The registered items live in an internal System Application table, so the codeunit is the only supported way to add one.

The call is meant to run every time the event is raised, not once. Calling `InsertAssistedSetup` on each registration event lets the framework refresh the registration and its translations. A registration that happens only once keeps whatever title and description were stored at that moment, including the language they were stored in.

## Best Practice

Put the `InsertAssistedSetup` call in an `OnRegisterAssistedSetup` subscriber and let it run unconditionally. Pass the title, short title, and description as labels so they are translatable, and pass the wizard page as the object to run.

See sample: [`register-assisted-setup-on-every-registration-event.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/register-assisted-setup-on-every-registration-event.good.al).

## Anti Pattern

Registering the guide once from install code, or wrapping the call in a check that skips it when the item already exists. Both treat registration as one-time data seeding. The entry appears, so the defect passes a quick test, but later changes to the title or description, and translations added afterwards, do not reach the stored item.

Do not report the unconditional call in the event subscriber as a redundant or repeated insert; repeating it is the documented pattern.

See sample: [`register-assisted-setup-on-every-registration-event.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/register-assisted-setup-on-every-registration-event.bad.al).

## References

[Designing assisted setup guides: Add to the Assisted Setup page](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-designing-navigate-pages#add-to-the-assisted-setup-page) and [Onboard users to your app](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-onboard-users-to-your-app).

## Examples

- [Good: register-assisted-setup-on-every-registration-event.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/register-assisted-setup-on-every-registration-event.good.al)
- [Bad: register-assisted-setup-on-every-registration-event.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/register-assisted-setup-on-every-registration-event.bad.al)

## Names

- [codeunit 1990 "Guided Experience"](../../../../objects/codeunit/1990.md) (possibly related: a code span names it)

---

From microsoft/BCQuality at dd49341, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
