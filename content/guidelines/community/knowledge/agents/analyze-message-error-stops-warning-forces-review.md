---
id: guideline/community/knowledge/agents/analyze-message-error-stops-warning-forces-review
type: guideline
title: "AnalyzeAgentTaskMessage: Error stops the task; Warning still requires review"
summary: IAgentTaskExecution.AnalyzeAgentTaskMessage runs on inbound and outbound messages. An Error annotation stops processing. A Warning annotation requests user intervention. If analysis returns Warning, the platform still requires approval even when the incoming message used SetRequiresReview(false).
tier: official
language: en
tags:
  - analyzeagenttaskmessage
  - agent-annotation
  - error
  - warning
  - setrequiresreview
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:17.417Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 9c465f4a20d64a1eac37758c663f7c05bd39190a
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/analyze-message-error-stops-warning-forces-review.md
    title: "microsoft/BCQuality: AnalyzeAgentTaskMessage: Error stops the task; Warning still requires review"
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
repo_path: community/knowledge/agents/analyze-message-error-stops-warning-forces-review.md
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
identifiers:
  - AnalyzeAgentTaskMessage
---

# AnalyzeAgentTaskMessage: Error stops the task; Warning still requires review

> IAgentTaskExecution.AnalyzeAgentTaskMessage runs on inbound and outbound messages. An Error annotation stops processing. A Warning annotation requests user intervention. If analysis returns Warning, the platform still requires approval even when the incoming message used SetRequiresReview(false).

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/analyze-message-error-stops-warning-forces-review.md) · community layer · agents · BC 27.. · tier official · derived

## Description

`IAgentTaskExecution.AnalyzeAgentTaskMessage` runs on inbound and outbound messages. An Error annotation stops processing. A Warning annotation requests user intervention. If analysis returns Warning, the platform still requires approval even when the incoming message used `SetRequiresReview(false)`. Output text can be rewritten here (signature, redaction).

## Best Practice

Validate inbound payloads in analysis: Error when the task must not run; Warning when a human must confirm. For outbound messages, adjust text in this method rather than in a later subscriber. Do not rely on skip-review to bypass warnings.

See sample: [`analyze-message-error-stops-warning-forces-review.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/analyze-message-error-stops-warning-forces-review.good.al).

## Anti Pattern

Ignoring analysis entirely, or emitting Warning while documenting that `SetRequiresReview(false)` means unattended run. Detection signal: empty `AnalyzeAgentTaskMessage` plus skip-review on external input.

See sample: [`analyze-message-error-stops-warning-forces-review.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/analyze-message-error-stops-warning-forces-review.bad.al).

## Examples

- [Good: analyze-message-error-stops-warning-forces-review.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/analyze-message-error-stops-warning-forces-review.good.al)
- [Bad: analyze-message-error-stops-warning-forces-review.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/analyze-message-error-stops-warning-forces-review.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
