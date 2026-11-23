---
id: guideline/microsoft/knowledge/xmlport/xmlport-import-export-return-value-controls-failure-handling
type: guideline
title: The return value of `Xmlport.Import` and `Xmlport.Export` decides who handles a failure
summary: "Xmlport.Import and Xmlport.Export have an optional Boolean return value: true when the operation succeeded, otherwise false. The option changes the failure behavior. When the return value is omitted and the operation does not succeed, a run-time error occurs."
tier: official
language: en
tags:
  - xmlport
  - xmlport-import
  - xmlport-export
  - return-value
  - runtime-error
  - error-handling
  - instream
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-23T00:15:10.597Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d387f73873399b7aa29acc273f3a7cf8760d9546
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-import-export-return-value-controls-failure-handling.md
    title: "microsoft/BCQuality: The return value of `Xmlport.Import` and `Xmlport.Export` decides who handles a failure"
    date: "2026-11-19"
    commit: aaaf6c13c219294fcebf644f1662f4d77061e2f7
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
    - change/bcquality/277
repo_path: microsoft/knowledge/xmlport/xmlport-import-export-return-value-controls-failure-handling.md
layer: microsoft
kind: rule
domain: xmlport
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

# The return value of `Xmlport.Import` and `Xmlport.Export` decides who handles a failure

> Xmlport.Import and Xmlport.Export have an optional Boolean return value: true when the operation succeeded, otherwise false. The option changes the failure behavior. When the return value is omitted and the operation does not succeed, a run-time error occurs.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-import-export-return-value-controls-failure-handling.md) · microsoft layer · xmlport · BC all · tier official · derived

## Description

`Xmlport.Import` and `Xmlport.Export` have an optional Boolean return value: `true` when the operation succeeded, otherwise `false`. The option changes the failure behavior. When the return value is omitted and the operation does not succeed, a run-time error occurs. When the return value is used, the failure is reported only through that Boolean, and the calling code is responsible for acting on it.

Both forms are correct, for different intentions. The mistakes are in between: reading the return value and then continuing as if the import had succeeded, or treating a call without the return value as unhandled.

## Best Practice

Omit the return value when a failed import or export must stop the process; the platform raises the error. Use the return value only when the caller has a real alternative path, such as recording the failed file and moving to the next one, and make every later step depend on it.

See sample: [`xmlport-import-export-return-value-controls-failure-handling.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-import-export-return-value-controls-failure-handling.good.al).

## Anti Pattern

Assigning or testing the return value and then ignoring it: `Imported := Xmlport.Import(...)` followed by code that marks the file as processed regardless, or `if Xmlport.Import(...) then;`. The run-time error is suppressed and nothing replaces it, so a file that was not imported is recorded as done. Reviewer signal: the Boolean result of `Xmlport.Import` or `Xmlport.Export` is captured but does not control the statements that follow.

Do not report a call that omits the return value as a missing error check. Omitting it is how the failure is turned into an error.

See sample: [`xmlport-import-export-return-value-controls-failure-handling.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-import-export-return-value-controls-failure-handling.bad.al).

## References

[Xmlport.Import method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/xmlport/xmlport-import-method) and [Xmlport.Export method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/xmlport/xmlport-export-method).

## Examples

- [Good: xmlport-import-export-return-value-controls-failure-handling.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-import-export-return-value-controls-failure-handling.good.al)
- [Bad: xmlport-import-export-return-value-controls-failure-handling.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-import-export-return-value-controls-failure-handling.bad.al)

## Changed by

- [#277 knowledge: translations, assisted setup, API queries, and a new xmlport domain](../../../../changes/bcquality/277.md), 2026-11-19

---

From microsoft/BCQuality at aaaf6c1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
