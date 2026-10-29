---
id: guideline/microsoft/knowledge/privacy/page-display-is-not-a-privacy-concern
type: guideline
title: Displaying fields on a page (or in a UI dialog) is not a privacy concern
summary: Every page in Business Central — Card, List, API, ListPart, request pages — renders data to an authenticated user who has been granted permission to see it.
tier: official
language: en
tags:
  - page
  - card
  - list
  - api
  - listpart
  - permission-system
  - display
  - ui-dialog
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:24.339Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6e8d62d2138e0c82c23f00d371e5e928c4ee4bfd
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/page-display-is-not-a-privacy-concern.md
    title: "microsoft/BCQuality: Displaying fields on a page (or in a UI dialog) is not a privacy concern"
    date: "2026-05-21"
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
  changes: []
repo_path: microsoft/knowledge/privacy/page-display-is-not-a-privacy-concern.md
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
examples: 0
identifiers:
  - ListPart
---

# Displaying fields on a page (or in a UI dialog) is not a privacy concern

> Every page in Business Central — Card, List, API, ListPart, request pages — renders data to an authenticated user who has been granted permission to see it.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/page-display-is-not-a-privacy-concern.md) · microsoft layer · privacy · BC all · tier official · derived

## Description

Every page in Business Central — `Card`, `List`, `API`, `ListPart`, request pages — renders data to an authenticated user who has been granted permission to see it. The BC permission system, not the page definition, controls who sees what; once a user is permissioned to a table, displaying any field of that table is normal business functionality. The same logic extends to `Message`, `Notification` and `Confirm` dialogs: the signed-in user already has access to the data the dialog is showing them. Privacy review for pages and dialogs is therefore the wrong layer — the actionable findings live on the underlying data (table-field classification, telemetry message text, outbound HTTP consent), not on the UI.

## Best Practice

When asked "is it OK to show this email/name/employee code on this page?", the answer is yes — provided the user has permission to the underlying record. Drive privacy concerns to the data layer (classification, telemetry, external transfer) rather than the UI layer.

## Anti Pattern

Flagging an API page, list, card, or notification for surfacing customer-bearing fields (`E-Mail`, `Name`, `Phone No.`, audit fields, `User ID`). The permission system governs visibility; the page does not.

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
