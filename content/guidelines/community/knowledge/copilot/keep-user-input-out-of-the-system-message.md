---
id: guideline/community/knowledge/copilot/keep-user-input-out-of-the-system-message
type: guideline
title: Keep user input and record text out of the system message
summary: "AOAI Chat Messages separates roles: the system message (SetPrimarySystemMessage, AddSystemMessage) holds the metaprompt that defines the model's task, output format, and guard rails; user messages (AddUserMessage) carry what the user typed and the business data to work on."
tier: official
language: en
tags:
  - prompt-injection
  - metaprompt
  - system-message
  - setprimarysystemmessage
  - addsystemmessage
  - addusermessage
  - aoai-chat-messages
  - user-input
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:19.264Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: db357090dd47ca22ff23a74b22dd78281d60afe3
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/keep-user-input-out-of-the-system-message.md
    title: "microsoft/BCQuality: Keep user input and record text out of the system message"
    date: "2026-10-20"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/text/text-strsubstno-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/229
  related:
    - to: object/codeunit/7763
      title: codeunit 7763 "AOAI Chat Messages"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: community/knowledge/copilot/keep-user-input-out-of-the-system-message.md
layer: community
kind: rule
domain: copilot
bc_version:
  - 23..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - SetPrimarySystemMessage
  - AddSystemMessage
  - AddUserMessage
  - StrSubstNo
  - TextBuilder
---

# Keep user input and record text out of the system message

> AOAI Chat Messages separates roles: the system message (SetPrimarySystemMessage, AddSystemMessage) holds the metaprompt that defines the model's task, output format, and guard rails; user messages (AddUserMessage) carry what the user typed and the business data to work on.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/keep-user-input-out-of-the-system-message.md) · community layer · copilot · BC 23.. · tier official · derived

## Description

`AOAI Chat Messages` separates roles: the system message (`SetPrimarySystemMessage`, `AddSystemMessage`) holds the metaprompt that defines the model's task, output format, and guard rails; user messages (`AddUserMessage`) carry what the user typed and the business data to work on. Models give system instructions more weight than user content. When an extension concatenates free text from the user, or from record fields that users or external parties can edit (descriptions, comments, imported e-mails, vendor names), into the system message, that text can override the metaprompt: change the output format the AL code parses, remove guard rails, or redirect the task. This is prompt injection, and placing the text in the system role makes it more effective.

## Best Practice

Keep the system message static and owned by the extension: the task, the output contract, and the rules. Pass the user's prompt and any record data as user messages, clearly delimited (for example, as a JSON object or between labeled markers) and described in the metaprompt as data, not instructions. Still validate the model's output before using it, because separating roles reduces injection risk without removing it.

See sample: [`keep-user-input-out-of-the-system-message.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/keep-user-input-out-of-the-system-message.good.al).

## Anti Pattern

A call to `SetPrimarySystemMessage` or `AddSystemMessage` whose text is built with `+`, `StrSubstNo`, or a `TextBuilder` from a PromptDialog input field, a procedure parameter that carries user text, or a user-editable record field. Values the extension controls, such as a language code, today's date, or an option caption, are not this defect.

See sample: [`keep-user-input-out-of-the-system-message.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/keep-user-input-out-of-the-system-message.bad.al).

## References

[Build the Copilot capability in AL](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/ai-build-capability-in-al) (AOAI Chat Roles: `User` is end-user input, `System` guides the model through the metaprompt; the metaprompt sets the guard rails) and [System message framework and template recommendations](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/system-message). The injection risk of mixing roles is general LLM security guidance applied to these BC APIs.

## Examples

- [Good: keep-user-input-out-of-the-system-message.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/keep-user-input-out-of-the-system-message.good.al)
- [Bad: keep-user-input-out-of-the-system-message.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/keep-user-input-out-of-the-system-message.bad.al)

## Names

- [Text.StrSubstNo(Text \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/text/text-strsubstno-method) (names StrSubstNo)
- [codeunit 7763 "AOAI Chat Messages"](../../../../objects/codeunit/7763.md) (possibly related: a code span names it)

## Changed by

- [#229 Knowledge: Community Copilot domain (System.AI features) and review skill](../../../../changes/bcquality/229.md), 2026-10-20

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
