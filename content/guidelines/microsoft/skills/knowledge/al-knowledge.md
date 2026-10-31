---
id: guideline/microsoft/skills/knowledge/al-knowledge
type: guideline
title: AL knowledge consultation
summary: Answer a Business Central development question with cited knowledge, without reviewing source code.
tier: official
language: en
tags:
  - review-skill
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-31T00:15:35.028Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4f32c727b64431543135d023668b250719831aae
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/skills/knowledge/al-knowledge.md
    title: "microsoft/BCQuality: AL knowledge consultation"
    date: "2026-10-30"
    commit: a56b272c6b950c2a423bbeda190585cd53beca2a
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
    - change/bcquality/222
repo_path: microsoft/skills/knowledge/al-knowledge.md
layer: microsoft
kind: skill
domain: null
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers: []
---

# AL knowledge consultation

> Answer a Business Central development question with cited knowledge, without reviewing source code.

[Skill on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/skills/knowledge/al-knowledge.md) · microsoft layer · review skill · BC all · tier official · derived

`knowledge-query` is the caller's exact question. This skill accepts optional
target context from Entry. It does not require an app, a file, or a diff.

## Source

Search `knowledge-index.json` for matching domains, titles, descriptions, and
keywords across enabled layers. Resolve the index against BCQuality's root.
When the index could not be generated, discover candidate article paths in
`<enabled-layer>/knowledge/**/` instead. The index is discovery metadata,
never the article body or evidence of applicability.

## Relevance

Apply READ's frontmatter matching rules for any known BC version, technology,
country, and application area. Exclude definite mismatches. Keep conditional
matches with their exact unknown dimensions. Interpret competing articles and
layer precedence under READ; record any displaced article in `suppressed`.

Frontmatter applicability is not question relevance. A universal country or
version filter does not make an article answer every domain question. Candidate
keyword overlap is discovery only. After reading, retain as supporting evidence
only articles that address the requested subject and its essential constraints.

## Worklist

Choose the smallest set of articles that answers the actual question. Match
the question's concepts to article descriptions, filenames, and keywords.
Open each chosen article in full, including relevant sibling samples if cited
by that article. If the question spans domains, select each necessary domain;
do not turn a narrow question into an exhaustive corpus summary. Follow READ's
[bounded retrieval workflow](https://github.com/microsoft/BCQuality/blob/main/skills/read.md#bounded-retrieval-for-review-skills),
including all continuation pages and complete bodies. Never truncate helper
output or treat an unread body as evidence. Do not cite an article merely
because it appeared in the index.

## Action

Answer only what the read articles support. State conditions, exceptions,
unknown target dimensions, and any unresolved conflict. Cite exact article
paths in the answer and `references`; do not infer a path from a title. This
is guidance, not a code review: do not inspect source to produce defects,
invoke review action skills, emit severities, or generate a findings-report.
If no applicable article answers the question, return `no-knowledge` instead
of filling the gap from general model knowledge under BCQuality's name.

Before choosing the outcome, check whether the supporting articles answer the
bound question rather than a broader or adjacent question. Do not replace an
unsupported domain or target with general coding or localization advice merely
because some keywords overlap. If none answers the requested subject, return
`no-knowledge` with `references: []`; the answer may explain the coverage gap,
but must not append adjacent guidance with citations. Candidate reads may be
recorded separately in execution diagnostics. Use `partial` only when articles
support a genuine part of the requested question, with the uncovered part
explicitly identified; adjacent-topic advice alone is not partial coverage.

## Output

Return one JSON value following `schemas/knowledge-response.schema.json` and
DO's knowledge-response rules. `question` preserves the caller's question.
`completed` requires an answer to the actual question and at least one fully
read, checked supporting reference. `partial`
requires a reason and only cites articles actually read; `failed` cites none.

## Changed by

- [#222 Add cited knowledge consultation skill for Business Central](../../../../changes/bcquality/222.md), 2026-10-30

---

From microsoft/BCQuality at a56b272, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
