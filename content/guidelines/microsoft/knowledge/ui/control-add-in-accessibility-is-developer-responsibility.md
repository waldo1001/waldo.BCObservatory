---
id: guideline/microsoft/knowledge/ui/control-add-in-accessibility-is-developer-responsibility
type: guideline
title: Control add-in accessibility is the developer's responsibility
summary: When a developer builds a JavaScript control add-in, they bypass the Business Central framework's built-in accessibility support and take full responsibility for the accessibility of the rendered HTML, JavaScript, and CSS.
tier: official
language: en
tags:
  - control-add-in
  - javascript
  - accessibility
  - framework
  - wcag
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:25.057Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: cc7405442618d8b21ad6f3f125faaf1ca19a86ce
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/control-add-in-accessibility-is-developer-responsibility.md
    title: "microsoft/BCQuality: Control add-in accessibility is the developer's responsibility"
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
repo_path: microsoft/knowledge/ui/control-add-in-accessibility-is-developer-responsibility.md
layer: microsoft
kind: rule
domain: ui
bc_version:
  - all
technologies:
  - al
  - javascript
countries:
  - w1
application_area:
  - all
examples: 0
identifiers: []
---

# Control add-in accessibility is the developer's responsibility

> When a developer builds a JavaScript control add-in, they bypass the Business Central framework's built-in accessibility support and take full responsibility for the accessibility of the rendered HTML, JavaScript, and CSS.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/control-add-in-accessibility-is-developer-responsibility.md) · microsoft layer · ui · BC all · tier official · derived

## Description

When a developer builds a JavaScript control add-in, they bypass the Business Central framework's built-in accessibility support and take full responsibility for the accessibility of the rendered HTML, JavaScript, and CSS. Unlike standard AL page controls, an add-in receives no automatic ARIA semantics, no automatic keyboard handling, and no automatic high-contrast support from the BC client.

Control add-in code must be reviewed for WCAG 2.1 AA compliance and general accessibility best practices. Automated review is inherently non-exhaustive — many accessibility issues (keyboard flow, screen reader announcements, dynamic behavior) require manual testing.

## Best Practice

Treat every UI-rendering change to a control add-in as something the platform will not catch for you: accessible names, semantic HTML, keyboard reachability, focus management, contrast, and reflow are all yours to verify. When reporting issues in control add-in code, include a recommendation that a manual accessibility review accompany any control add-in that renders a UI.

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
