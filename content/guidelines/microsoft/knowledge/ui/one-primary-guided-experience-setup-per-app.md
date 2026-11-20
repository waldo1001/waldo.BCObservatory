---
id: guideline/microsoft/knowledge/ui/one-primary-guided-experience-setup-per-app
type: guideline
title: An app has at most one primary setup object in Guided Experience
summary: An extension tells Business Central which setup objects it brings by adding them as guided experience items through codeunit Guided Experience. One of them can be marked as the app's primary setup.
tier: official
language: en
tags:
  - guided-experience
  - primary-setup
  - extension-management
  - set-up-this-app
  - onboarding
  - upgrade
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T00:17:54.683Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3c80f5dc6ebeb74e32d0df2ad655306cced7f55a
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/one-primary-guided-experience-setup-per-app.md
    title: "microsoft/BCQuality: An app has at most one primary setup object in Guided Experience"
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
repo_path: microsoft/knowledge/ui/one-primary-guided-experience-setup-per-app.md
layer: microsoft
kind: rule
domain: ui
bc_version:
  - 21..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers: []
---

# An app has at most one primary setup object in Guided Experience

> An extension tells Business Central which setup objects it brings by adding them as guided experience items through codeunit Guided Experience. One of them can be marked as the app's primary setup.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/one-primary-guided-experience-setup-per-app.md) · microsoft layer · ui · BC 21.. · tier official · derived

## Description

An extension tells Business Central which setup objects it brings by adding them as guided experience items through codeunit `Guided Experience`. One of them can be marked as the app's primary setup. The **Extension Management** page then offers a **Set up this app** action that opens that object, which is how a user finds the setup after installing the app. An app can register as many setup objects as it needs, but only one may be primary.

The platform does not enforce that limit. Keeping a single primary setup is the publisher's responsibility, including across versions: if a later version makes a different object the primary one, upgrade code has to remove the designation from the old object before adding it to the new one.

Setup that lives on a standard page the app extends is a separate concern; see [`expose-base-page-setup-through-a-codeunit.md`](expose-base-page-setup-through-a-codeunit.md).

## Best Practice

Register every setup object the app brings, and mark exactly one as primary. When a release changes which object is primary, pair the registration change with upgrade code that clears the previous primary designation. Register nothing when the app needs no setup before use.

## Anti Pattern

Marking two setup objects as primary, or switching the primary object in a new version with no upgrade step, so that upgraded tenants hold two. Nothing prevents it, and the registration code compiles in both cases; the documentation makes the publisher responsible for avoiding it.
## References

[Onboard users to your app](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-onboard-users-to-your-app). The primary-setup parameter is available from Business Central 2022 release wave 2.

## Names

- [codeunit 1990 "Guided Experience"](../../../../objects/codeunit/1990.md) (possibly related: a code span names it)

---

From microsoft/BCQuality at dd49341, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
