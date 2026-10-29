---
id: guideline/community/knowledge/copilot/check-aoai-operation-response-before-using-output
type: guideline
title: Check the AOAI Operation Response before using generated output
summary: GenerateChatCompletion, GenerateTextCompletion, and GenerateEmbeddings in codeunit Azure OpenAI report the outcome of the service call in the AOAI Operation Response passed by var; a failed completion does not stop the AL code.
tier: official
language: en
tags:
  - aoai-operation-response
  - issuccess
  - generatechatcompletion
  - getlastmessage
  - geterror
  - getstatuscode
  - azure-openai
  - ai-error-handling
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:18.441Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c092333831e832c9e84ab4bccf85e1d3960cbb22
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/check-aoai-operation-response-before-using-output.md
    title: "microsoft/BCQuality: Check the AOAI Operation Response before using generated output"
    date: "2026-10-20"
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
    - change/bcquality/229
  related:
    - to: object/codeunit/7771
      title: codeunit 7771 "Azure OpenAI"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/codeunit/7770
      title: codeunit 7770 "AOAI Operation Response"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: community/knowledge/copilot/check-aoai-operation-response-before-using-output.md
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
  - GenerateChatCompletion
  - GenerateTextCompletion
  - GenerateEmbeddings
  - SecretText
  - SetManagedResourceAuthorization
  - IsSuccess
  - GetLastMessage
---

# Check the AOAI Operation Response before using generated output

> GenerateChatCompletion, GenerateTextCompletion, and GenerateEmbeddings in codeunit Azure OpenAI report the outcome of the service call in the AOAI Operation Response passed by var; a failed completion does not stop the AL code.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/check-aoai-operation-response-before-using-output.md) · community layer · copilot · BC 23.. · tier official · derived

## Description

`GenerateChatCompletion`, `GenerateTextCompletion`, and `GenerateEmbeddings` in codeunit `Azure OpenAI` report the outcome of the service call in the `AOAI Operation Response` passed by `var`; a failed completion does not stop the AL code. Such failures are routine: throttling, content filtering, timeouts, token limits, or overconsumption of Business Central AI resources. (Setup problems such as a missing capability can still raise errors before the call.) Code that calls `GetLastMessage()` or uses the returned text without checking `IsSuccess()` then treats empty or unrelated text as the model's answer, and may parse it, show it as a proposal, or write it to records.

Agents familiar with SDKs that throw on failure usually omit this check, because the API looks like it would raise an error.

## Best Practice

Immediately after each generate call, test `AOAIOperationResponse.IsSuccess()`. On failure, stop and give the user a clear, actionable message. Use `GetError()` and `GetStatusCode()` for telemetry or to distinguish retryable conditions, without exposing raw service text as the only explanation. Read `GetLastMessage()` or the function-call results only on the success path.

Both samples use the BC23+ own-resource `SetAuthorization(ModelType, Endpoint, Deployment, ApiKey)` overload, with configuration supplied by the caller and the key passed as `SecretText`. Response checking is independent of the authorization mode. If using Business Central AI resources, choose an overload supported by the target version; the two-argument `SetManagedResourceAuthorization` requires BC28+. See [version-qualified authorization guidance](call-azure-openai-through-the-ai-module.md).

Each companion independently declares the `Reminder Draft Demo` table, its `Body Text` field, and the `Draft Payment Reminder` capability enum value. Before running either sample, register and activate that capability using the [install/upgrade registration pattern](register-copilot-capability-on-install-and-upgrade.md), adapted to this enum value, and pass an existing reminder draft record. The enumextension supplies the AL symbol; it does not register the capability at runtime.

See sample: [`check-aoai-operation-response-before-using-output.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/check-aoai-operation-response-before-using-output.good.al).

## Anti Pattern

A generate call followed by `GetLastMessage()`, by use of the returned text, or by parsing or persisting the result, with no `IsSuccess()` check on that response in between. A check that only logs the failure and then continues with the output is the same defect.

See sample: [`check-aoai-operation-response-before-using-output.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/check-aoai-operation-response-before-using-output.bad.al).

## References

[Build the Copilot capability in AL, Generation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/ai-build-capability-in-al#generation) (`IsSuccess` checks the operation before `GetLastMessage`), [Azure OpenAI codeunit](https://learn.microsoft.com/en-us/dynamics365/business-central/application/system-application/codeunit/system.ai.azure-openai) (the response object reports successful or failed execution), and [Business Central AI resources](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/ai-dev-tools-resources) (handle overconsumption through `AOAI Operation Response`).

## Examples

- [Good: check-aoai-operation-response-before-using-output.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/check-aoai-operation-response-before-using-output.good.al)
- [Bad: check-aoai-operation-response-before-using-output.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/check-aoai-operation-response-before-using-output.bad.al)

## Names

- [codeunit 7771 "Azure OpenAI"](../../../../objects/codeunit/7771.md) (possibly related: a code span names it)
- [codeunit 7770 "AOAI Operation Response"](../../../../objects/codeunit/7770.md) (possibly related: a code span names it)

## Changed by

- [#229 Knowledge: Community Copilot domain (System.AI features) and review skill](../../../../changes/bcquality/229.md), 2026-10-20

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
