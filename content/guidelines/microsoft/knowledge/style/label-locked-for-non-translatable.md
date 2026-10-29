---
id: guideline/microsoft/knowledge/style/label-locked-for-non-translatable
type: guideline
title: Set `Locked = true` on Labels that must not be translated
summary: "A Label is by default surfaced to translators and rewritten per locale. That is wrong for strings that are not natural language: HTTP verbs (GET, PUT), URL fragments, JSON/XML snippets, content-type strings, GUIDs, application keys, and field tokens used by integrations."
tier: official
language: en
tags:
  - label
  - locked
  - translation
  - token
  - url
  - json
  - xml
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:59.323Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 888d22bf5fa3693eb640006c9198fccecf7ab749
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/label-locked-for-non-translatable.md
    title: "microsoft/BCQuality: Set `Locked = true` on Labels that must not be translated"
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
repo_path: microsoft/knowledge/style/label-locked-for-non-translatable.md
layer: microsoft
kind: rule
domain: style
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

# Set `Locked = true` on Labels that must not be translated

> A Label is by default surfaced to translators and rewritten per locale. That is wrong for strings that are not natural language: HTTP verbs (GET, PUT), URL fragments, JSON/XML snippets, content-type strings, GUIDs, application keys, and field tokens used by integrations.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/label-locked-for-non-translatable.md) · microsoft layer · style · BC all · tier official · derived

## Description

A `Label` is by default surfaced to translators and rewritten per locale. That is wrong for strings that are not natural language: HTTP verbs (`GET`, `PUT`), URL fragments, JSON/XML snippets, content-type strings, GUIDs, application keys, and field tokens used by integrations. Translating these breaks the integration the moment a non-English tenant runs the code. The `Locked = true` parameter on the Label declaration tells the translation pipeline to keep the string verbatim, and signals to reviewers that the value is part of a wire-level contract rather than display text.

## Best Practice

Pair `Locked = true` with the `Tok` suffix for short tokens (`GetMethodTok: Label 'GET', Locked = true;`) and with the `Txt` suffix for telemetry strings that contain format placeholders but should not be localized. The `Locked` parameter and the `Tok` / `Txt` suffix together make the intent unambiguous.

See sample: [`label-locked-for-non-translatable.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/label-locked-for-non-translatable.good.al).

## Anti Pattern

`HttpsUrl: Label 'https://example.com';` or `ContentTypeTok: Label 'application/json';` declared without `Locked = true`. The translator localizes them, the integration fails in production for the affected tenant, and the failure is invisible in the developer's English-locale tests.

See sample: [`label-locked-for-non-translatable.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/label-locked-for-non-translatable.bad.al).

## Examples

- [Good: label-locked-for-non-translatable.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/label-locked-for-non-translatable.good.al)
- [Bad: label-locked-for-non-translatable.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/label-locked-for-non-translatable.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
