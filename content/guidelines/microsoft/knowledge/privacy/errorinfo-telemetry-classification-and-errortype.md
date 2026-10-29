---
id: guideline/microsoft/knowledge/privacy/errorinfo-telemetry-classification-and-errortype
type: guideline
title: Review each ErrorInfo text surface by its actual exposure
summary: Runtime 3.0 (BC 14) provides ErrorInfo.Message, DataClassification, and ErrorType. Message is sent to telemetry; with ErrorType::Client it is also the primary client message, while ErrorType::Internal replaces it in the client with a generic message but still sends the specified text to telemetry.
tier: official
language: en
tags:
  - errorinfo
  - errorinfo-message
  - errorinfo-dataclassification
  - errorinfo-errortype
  - errorinfo-detailedmessage
  - copy-details
  - telemetry
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:44.628Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d83131f0a0b2cac13cfb2dbf3f80c46a9202741d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/errorinfo-telemetry-classification-and-errortype.md
    title: "microsoft/BCQuality: Review each ErrorInfo text surface by its actual exposure"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-errortype-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-detailedmessage-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/99
repo_path: microsoft/knowledge/privacy/errorinfo-telemetry-classification-and-errortype.md
layer: microsoft
kind: rule
domain: privacy
bc_version:
  - 14..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - DataClassification
  - ErrorType
  - DetailedMessage
  - SystemMetadata
---

# Review each ErrorInfo text surface by its actual exposure

> Runtime 3.0 (BC 14) provides ErrorInfo.Message, DataClassification, and ErrorType. Message is sent to telemetry; with ErrorType::Client it is also the primary client message, while ErrorType::Internal replaces it in the client with a generic message but still sends the specified text to telemetry.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/errorinfo-telemetry-classification-and-errortype.md) · microsoft layer · privacy · BC 14.. · tier official · derived

## Description

Runtime 3.0 (BC 14) provides `ErrorInfo.Message`, `DataClassification`, and `ErrorType`. `Message` is sent to telemetry; with `ErrorType::Client` it is also the primary client message, while `ErrorType::Internal` replaces it in the client with a generic message but still sends the specified text to telemetry. `DataClassification` classifies the content in `Message`; it does not make incorrectly classified personal data safe. Runtime 8.0 (BC 19) adds `DetailedMessage`, which is omitted from the primary message but included in the error dialog's **Copy details** content.

## Best Practice

Keep `Message` stable and classify its actual content. Choose `ErrorType` for client usability, not as a telemetry privacy boundary. On BC 19 and later, put only support-safe technical context in `DetailedMessage`, because a user can copy it from the dialog. The samples use only members available at the BC 14 article floor.

See sample: [`errorinfo-telemetry-classification-and-errortype.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/errorinfo-telemetry-classification-and-errortype.good.al).

## Anti Pattern

Marking a dynamic customer-bearing `Message` as `SystemMetadata`, or assuming `ErrorType::Internal` keeps it out of telemetry. On BC 19 and later, the same anti-pattern includes placing secrets or personal data in `DetailedMessage` because it is not the primary dialog text.

See sample: [`errorinfo-telemetry-classification-and-errortype.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/errorinfo-telemetry-classification-and-errortype.bad.al).

## Examples

- [Good: errorinfo-telemetry-classification-and-errortype.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/errorinfo-telemetry-classification-and-errortype.good.al)
- [Bad: errorinfo-telemetry-classification-and-errortype.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/errorinfo-telemetry-classification-and-errortype.bad.al)

## Names

- [ErrorInfo.DataClassification(\[DataClassification\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method) (names DataClassification)
- [ErrorInfo.ErrorType(\[ErrorType\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-errortype-method) (names ErrorType)
- [ErrorInfo.DetailedMessage(\[Text\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-detailedmessage-method) (names DetailedMessage)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#99 Add lifecycle error and privacy knowledge](../../../../changes/bcquality/99.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
