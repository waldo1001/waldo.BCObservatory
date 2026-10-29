---
id: guideline/microsoft/knowledge/ui/caption-capitalization-noun-phrase-vs-sentence-phrase
type: guideline
title: Sentence-phrase captions use sentence case, not title case
summary: Business Central caption capitalization depends on whether the caption reads as a noun phrase or a sentence/verb phrase.
tier: official
language: en
tags:
  - caption
  - capitalization
  - sentence-case
  - title-case
  - action
  - noun-phrase
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:01.448Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 648a1389b2125ebe9bcf10c1d5172db3ac27595e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/caption-capitalization-noun-phrase-vs-sentence-phrase.md
    title: "microsoft/BCQuality: Sentence-phrase captions use sentence case, not title case"
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
    - change/bcquality/119
repo_path: microsoft/knowledge/ui/caption-capitalization-noun-phrase-vs-sentence-phrase.md
layer: microsoft
kind: rule
domain: ui
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 1
identifiers: []
---

# Sentence-phrase captions use sentence case, not title case

> Business Central caption capitalization depends on whether the caption reads as a noun phrase or a sentence/verb phrase.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/caption-capitalization-noun-phrase-vs-sentence-phrase.md) · microsoft layer · ui · BC all · tier official · derived

## Description

Business Central caption capitalization depends on whether the caption reads as a **noun phrase** or a **sentence/verb phrase**. Following the Microsoft writing-style guideline, a caption that reads as an imperative sentence — most action captions, such as `'Show source document'`, `'Post and print'`, or `'Copy from last inspection'` — uses **sentence case**: only the first word and any proper nouns are capitalized. Title case (`'Show Source Document'`) is the older convention and is not required for these captions.

Noun-phrase captions (object names, field labels such as `'Source Document No.'`) follow their own capitalization; that is a separate case and is not what this article covers. Reviewers sometimes see a lower-cased word in an action caption (`'Show source document'`) and flag it as inconsistent title case, but a sentence-phrase action caption is correct as written.

## Best Practice

For an action `Caption` that reads as a sentence or verb phrase, capitalize only the first word and proper nouns (sentence case). Do not require every significant word to be capitalized. Before flagging a caption as "should be title case", confirm it is a noun phrase; leave imperative/sentence-phrase action captions in sentence case.

See sample: [`caption-capitalization-noun-phrase-vs-sentence-phrase.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/caption-capitalization-noun-phrase-vs-sentence-phrase.good.al).

## Anti Pattern

Reporting a sentence-case action caption such as `'Show source document'` as a style defect and recommending title case (`'Show Source Document'`), or calling it inconsistent with BC conventions. Sentence case is the current guideline for sentence-phrase captions.

## Examples

- [Good: caption-capitalization-noun-phrase-vs-sentence-phrase.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/caption-capitalization-noun-phrase-vs-sentence-phrase.good.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#119 Add batch-2 FP guards: sentence-case action captions + PK Get is transaction-cached](../../../../changes/bcquality/119.md), 2026-07-22

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
