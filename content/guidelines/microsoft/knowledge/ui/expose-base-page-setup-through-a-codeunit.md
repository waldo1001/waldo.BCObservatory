---
id: guideline/microsoft/knowledge/ui/expose-base-page-setup-through-a-codeunit
type: guideline
title: Expose setup that lives on a base page through a codeunit
summary: Guided experience items carry the ID of the extension that registered them, which is how Business Central lists the setup an app brings and runs it from Extension Management.
tier: official
language: en
tags:
  - guided-experience
  - setup
  - base-page
  - page-extension
  - codeunit
  - extension-management
  - onboarding
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-23T00:15:10.597Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: df9c51f461a09c17e390cc1fd6edba4b36830f72
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/expose-base-page-setup-through-a-codeunit.md
    title: "microsoft/BCQuality: Expose setup that lives on a base page through a codeunit"
    date: "2026-11-19"
    commit: aaaf6c13c219294fcebf644f1662f4d77061e2f7
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
    - change/bcquality/277
repo_path: microsoft/knowledge/ui/expose-base-page-setup-through-a-codeunit.md
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
examples: 0
identifiers: []
---

# Expose setup that lives on a base page through a codeunit

> Guided experience items carry the ID of the extension that registered them, which is how Business Central lists the setup an app brings and runs it from Extension Management.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/expose-base-page-setup-through-a-codeunit.md) · microsoft layer · ui · BC 18.. · tier official · derived

## Description

Guided experience items carry the ID of the extension that registered them, which is how Business Central lists the setup an app brings and runs it from **Extension Management**. That breaks down when an app's setup is not a new page but extra fields on a standard page it extends, such as **Sales & Receivables Setup**. The standard page cannot be registered as the app's own item: it is already registered and owned by the base application. Adding it to a checklist uses the base application's title and description, and nothing tells the user that this page holds setup for the app.

The documented solution is a small codeunit in the extension that runs the standard page. The codeunit is an object the app owns, so it can be registered as a guided experience item with the app's own title and description.

## Best Practice

When the setup an app needs is on a base page, add a codeunit whose only job is to open that page, and register the codeunit as the guided experience item. Give it a title and description that say what the user sets up for this app.

Keep this for setup that really is on a base page. A setup page the app defines itself is registered directly.

## Anti Pattern

Registering the base application page directly as the app's setup item to surface the extension's fields, or registering nothing and relying on the user to find the added fields. In the first case the item belongs to the base application and keeps its texts; in the second the app has no setup entry at all.

Do not report the wrapper codeunit as needless indirection because it contains a single `Page.Run` call. The indirection is what makes the item belong to the app.

## References

[Onboard users to your app: Setup that doesn't belong to your app](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-onboard-users-to-your-app#setup-that-doesn't-belong-to-your-app).

## Changed by

- [#277 knowledge: translations, assisted setup, API queries, and a new xmlport domain](../../../../changes/bcquality/277.md), 2026-11-19

---

From microsoft/BCQuality at aaaf6c1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
