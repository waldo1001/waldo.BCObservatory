---
id: guideline/microsoft/knowledge/security/exposed-objects-must-be-in-a-permission-set
type: guideline
title: Every exposed object must belong to a permission set
summary: "An object that is reachable from outside the app's own UI is only usable if it is also granted execute access through a permission set. Three distinct mechanisms make an object reachable this way, each with its own permission target:"
tier: official
language: en
tags:
  - permission-set
  - api-page
  - web-service
  - exposure
  - access-control
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:46.021Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: fd933d737744199901426a89dddf4d411573699c
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/exposed-objects-must-be-in-a-permission-set.md
    title: "microsoft/BCQuality: Every exposed object must belong to a permission set"
    date: "2026-09-29"
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
    - change/bcquality/157
repo_path: microsoft/knowledge/security/exposed-objects-must-be-in-a-permission-set.md
layer: microsoft
kind: rule
domain: security
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

# Every exposed object must belong to a permission set

> An object that is reachable from outside the app's own UI is only usable if it is also granted execute access through a permission set. Three distinct mechanisms make an object reachable this way, each with its own permission target:

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/exposed-objects-must-be-in-a-permission-set.md) · microsoft layer · security · BC all · tier official · derived

## Description

An object that is reachable from outside the app's own UI is only usable if it is also granted execute access through a permission set. Three distinct mechanisms make an object reachable this way, each with its own permission target:

- A page or query published through the **Web Services** configuration page, or a custom REST endpoint declared with `PageType = API` / `QueryType = API` — both need a `page "..." = X` / `query "..." = X` entry for that object.
- A codeunit published through **Web Services** exposes *every* public procedure on it as a SOAP operation automatically — there is no per-method attribute to add. SOAP web service support is deprecated and scheduled for removal; prefer publishing an API page/query for a new integration rather than a new codeunit web service. The permission target for an existing published codeunit is the codeunit itself: `codeunit "..." = X`.
- `[ServiceEnabled]` is a method-level attribute used on a *page* procedure to expose it as an OData v4 bound action (for example a `Post` action on an invoice page) — it does not apply to pages, queries, or codeunits as an object-level property, and it does not create its own permission target. The action is still a call into that page object, so the page's own `page "..." = X` entry is what governs it.

When such an object is left out of every permission set, it becomes both unusable (no caller, human or service, can reach it) and invisible in review: nobody deliberately decided who may call it. Exposure without a matching grant is not a safe default; it is an endpoint nobody is governing.

## Best Practice

Give every exposed object an explicit execute entry in a permission set shipped by the app: `page "..." = X` / `query "..." = X` for a published or API page/query (including one that exposes a `[ServiceEnabled]` bound action), and `codeunit "..." = X` for a codeunit published as a web service. Route sensitive endpoints into a dedicated, non-default admin permission set so reaching them requires a deliberate grant rather than being included by default. If an object should never be reachable from outside the app, remove the exposure itself (drop `PageType = API` / the Web Services registration) rather than leaving an orphaned endpoint with no permission-set membership.

See sample: [`exposed-objects-must-be-in-a-permission-set.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/exposed-objects-must-be-in-a-permission-set.good.al).

## Anti Pattern

Granting access to the underlying table data while forgetting to grant execute access to the exposed page or query itself. The table looks fully covered by a permission set, but the API/service layer in front of it has no `= X` entry anywhere, so the endpoint silently fails for every caller even though the data permissions look complete.

See sample: [`exposed-objects-must-be-in-a-permission-set.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/exposed-objects-must-be-in-a-permission-set.bad.al).

## Examples

- [Good: exposed-objects-must-be-in-a-permission-set.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/exposed-objects-must-be-in-a-permission-set.good.al)
- [Bad: exposed-objects-must-be-in-a-permission-set.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/exposed-objects-must-be-in-a-permission-set.bad.al)

## Changed by

- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../changes/bcquality/157.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
