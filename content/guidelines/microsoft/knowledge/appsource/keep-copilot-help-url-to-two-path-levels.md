---
id: guideline/microsoft/knowledge/appsource/keep-copilot-help-url-to-two-path-levels
type: guideline
title: Keep the Copilot help URL to two path levels
summary: The help URL declared in app.json is what Copilot uses to ground answers about your app. That URL may be at most two path levels deep (for example https://contoso.com/docs/myapp).
tier: official
language: en
tags:
  - app-json
  - help-url
  - copilot
  - grounding
  - documentation
  - url-depth
  - contexturl
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:18.405Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 9ceaa3b39b007aa14f3934448593236ddcc75676
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/appsource/keep-copilot-help-url-to-two-path-levels.md
    title: "microsoft/BCQuality: Keep the Copilot help URL to two path levels"
    date: "2026-07-14"
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
    - change/bcquality/105
repo_path: microsoft/knowledge/appsource/keep-copilot-help-url-to-two-path-levels.md
layer: microsoft
kind: rule
domain: appsource
bc_version:
  - 27..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers: []
---

# Keep the Copilot help URL to two path levels

> The help URL declared in app.json is what Copilot uses to ground answers about your app. That URL may be at most two path levels deep (for example https://contoso.com/docs/myapp).

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/appsource/keep-copilot-help-url-to-two-path-levels.md) · microsoft layer · appsource · BC 27.. · tier official · derived

## Description

The `help` URL declared in `app.json` is what Copilot uses to ground answers about your app. That URL may be at most **two path levels** deep (for example `https://contoso.com/docs/myapp`). If you point it at a deeper path (three or more segments), Copilot does not use the URL as given: it truncates to the first two levels, drops any fragments and query strings, and then grounds on **all** content beneath that two-level path. The failure is silent — there is no build error — and the practical effect is worse answers, because Copilot may ingest sibling apps' documentation that lives under the same two-level parent.

## Best Practice

Organize per-app documentation so the canonical help page sits no deeper than two path levels, and confirm during testing that Copilot citations resolve to your app's content rather than a broader parent. If your docs naturally nest deeper, give each app a dedicated two-level path it owns.

## Anti Pattern

Setting `help` to a deep, tidy-looking docs path such as `https://contoso.com/docs/products/erp/myapp/setup`. Copilot truncates it to `…/docs/products`, then grounds on everything under that node — pulling in unrelated content and degrading answer quality for your users.

## Changed by

- [#105 Promote validated community knowledge](../../../../changes/bcquality/105.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
