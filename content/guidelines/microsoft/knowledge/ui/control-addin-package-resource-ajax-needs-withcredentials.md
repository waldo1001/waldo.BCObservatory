---
id: guideline/microsoft/knowledge/ui/control-addin-package-resource-ajax-needs-withcredentials
type: guideline
title: Load packaged control add-in resources with credentialed AJAX
summary: JavaScript in a Business Central control add-in can load a static resource from its extension package with AJAX, but the request needs the Business Central context and cookies.
tier: official
language: en
tags:
  - control-add-in
  - packaged-resource
  - ajax
  - withcredentials
  - xhrfields
  - jquery
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:01.418Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f0b5314e471b19f1f0471ee3a116349581523bd3
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/control-addin-package-resource-ajax-needs-withcredentials.md
    title: "microsoft/BCQuality: Load packaged control add-in resources with credentialed AJAX"
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
    - change/bcquality/100
repo_path: microsoft/knowledge/ui/control-addin-package-resource-ajax-needs-withcredentials.md
layer: microsoft
kind: rule
domain: ui
bc_version:
  - all
technologies:
  - javascript
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - withCredentials
  - XMLHttpRequest
---

# Load packaged control add-in resources with credentialed AJAX

> JavaScript in a Business Central control add-in can load a static resource from its extension package with AJAX, but the request needs the Business Central context and cookies.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/control-addin-package-resource-ajax-needs-withcredentials.md) · microsoft layer · ui · BC all · tier official · derived

## Description

JavaScript in a Business Central control add-in can load a static resource from its extension package with AJAX, but the request needs the Business Central context and cookies. Set `xhrFields.withCredentials = true`; shorthand calls such as `$.get` omit that setting and can work during development yet fail in production.

## Best Practice

Use an AJAX form that explicitly enables `withCredentials` whenever a control add-in requests a packaged static resource. Keep this rule scoped to resources served from the add-in package; it is not generic advice to attach credentials to arbitrary external requests.

See sample: [`control-addin-package-resource-ajax-needs-withcredentials.good.js`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/control-addin-package-resource-ajax-needs-withcredentials.good.js).

## Anti Pattern

Using `$.get(url)` or an `XMLHttpRequest` without `withCredentials = true` to retrieve package content. The request can lack the context and cookies required by the Business Central service.

See sample: [`control-addin-package-resource-ajax-needs-withcredentials.bad.js`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/control-addin-package-resource-ajax-needs-withcredentials.bad.js).

## Source

[Control add-in object: Loading static resources using AJAX requests](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-control-addin-object#loading-static-resources-using-ajax-requests).

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#100 Add P0 integration and control add-in runtime guidance](../../../../changes/bcquality/100.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
