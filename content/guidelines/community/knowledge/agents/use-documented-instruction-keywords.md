---
id: guideline/community/knowledge/agents/use-documented-instruction-keywords
type: guideline
title: Use the toolkit instruction keywords for review, mail, and memory
summary: "The agent runtime looks for specific phrases: ask for assistance, request a review, reply, write an email, memorize, Set field, use lookup, Invoke action. Ordinary English such as get a human to look or remember this is weaker."
tier: official
language: en
tags:
  - instruction-keywords
  - request-a-review
  - memorize
  - write-an-email
  - invoke-action
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:18.895Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a65f240965f2643dd0f0fd2800cbbcd844e3630c
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/use-documented-instruction-keywords.md
    title: "microsoft/BCQuality: Use the toolkit instruction keywords for review, mail, and memory"
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
    - change/bcquality/137
repo_path: community/knowledge/agents/use-documented-instruction-keywords.md
layer: community
kind: rule
domain: agents
bc_version:
  - 27..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Use the toolkit instruction keywords for review, mail, and memory

> The agent runtime looks for specific phrases: ask for assistance, request a review, reply, write an email, memorize, Set field, use lookup, Invoke action. Ordinary English such as get a human to look or remember this is weaker.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/use-documented-instruction-keywords.md) · community layer · agents · BC 27.. · tier official · derived

## Description

The agent runtime looks for specific phrases: ask for assistance, request a review, reply, write an email, memorize, `Set field`, use lookup, `Invoke action`. Ordinary English such as get a human to look or remember this is weaker. Outbound reply and email always require review; that is platform policy, not optional tone.

## Best Practice

In the instruction resource, use those keywords at the decision points: request a review before posting; write an email only after stating that outbound mail is reviewed; memorize values the later steps need. Pair `Reply` / `Write an email` with an explicit review sentence.

See sample: [`use-documented-instruction-keywords.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/use-documented-instruction-keywords.good.al).

## Anti Pattern

Inventing tool-like verbs (call Copilot, click Post_Promoted) or omitting request a review before posting. Detection signal: instruction text that says email the customer with no review keyword.

See sample: [`use-documented-instruction-keywords.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/use-documented-instruction-keywords.bad.al).

## See also

`instruction-structure-is-role-rules-steps.md` defines the containing document structure, while `instructions-describe-work-not-tool-ids.md` keeps outcomes independent of UI tool identifiers.

## Examples

- [Good: use-documented-instruction-keywords.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/use-documented-instruction-keywords.good.al)
- [Bad: use-documented-instruction-keywords.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/use-documented-instruction-keywords.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
