---
id: guideline/microsoft/knowledge/security/al-has-no-built-in-htmlencode
type: guideline
title: AL has no built-in HtmlEncode — encode HTML output by hand or avoid it
summary: AL does not ship a built-in HtmlEncode (or equivalent) function.
tier: official
language: en
tags:
  - html
  - xss
  - encoding
  - htmlencode
  - injection
  - email
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:50.945Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 649c384e20bde4f50fadf0d58ddd5caa8076ee06
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/al-has-no-built-in-htmlencode.md
    title: "microsoft/BCQuality: AL has no built-in HtmlEncode — encode HTML output by hand or avoid it"
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
repo_path: microsoft/knowledge/security/al-has-no-built-in-htmlencode.md
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
identifiers:
  - HtmlEncode
---

# AL has no built-in HtmlEncode — encode HTML output by hand or avoid it

> AL does not ship a built-in HtmlEncode (or equivalent) function.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/al-has-no-built-in-htmlencode.md) · microsoft layer · security · BC all · tier official · derived

## Description

AL does not ship a built-in `HtmlEncode` (or equivalent) function. Code that builds an HTML fragment — an email body, a report header, a chart label rendered as HTML — by concatenating record-field values into a string is therefore unencoded by default, and any `<`, `>`, `&`, or `"` in the user content is interpreted as markup by the receiving renderer. The result is cross-site scripting in the recipient's mail client, browser, or report viewer. The absence of a built-in encoder is non-obvious to anyone used to platforms where `HtmlEncode` is a one-liner.

## Best Practice

Replace the four characters by hand before concatenating user content into HTML: `&` → `&amp;` first, then `<` → `&lt;`, `>` → `&gt;`, `"` → `&quot;`. Centralize the substitution in one helper so every HTML producer in the extension uses the same encoder. Better still, do not build raw HTML at all — use a structured format (JSON for an API payload, a report layout for a printed document) and let the renderer do the encoding. See sample: [`al-has-no-built-in-htmlencode.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/al-has-no-built-in-htmlencode.good.al).

## Anti Pattern

`HtmlContent := '<div>Welcome ' + UserName + '!</div>'` — any record-field value or user input concatenated directly into an HTML string. Reviewers should flag any string concatenation whose right-hand operand is a field, a parameter, or any non-literal value, and whose surrounding context contains HTML tags (`<`, `</`, `<br`, `<table`, `<a href=`). See sample: [`al-has-no-built-in-htmlencode.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/al-has-no-built-in-htmlencode.bad.al).

## Examples

- [Good: al-has-no-built-in-htmlencode.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/al-has-no-built-in-htmlencode.good.al)
- [Bad: al-has-no-built-in-htmlencode.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/al-has-no-built-in-htmlencode.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
