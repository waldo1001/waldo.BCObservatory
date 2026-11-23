---
id: guideline/microsoft/knowledge/xmlport/xmlport-run-import-argument-must-match-direction
type: guideline
title: The `Import` argument of `Xmlport.Run` must match the XMLport's `Direction`
summary: Xmlport.Run(Number [, RequestWindow] [, Import] [, Record]) takes an optional Import argument that says whether the XMLport imports or exports, and its default is true.
tier: official
language: en
tags:
  - xmlport
  - xmlport-run
  - direction
  - import
  - export
  - requestwindow
  - runtime-error
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
  input_hash: 3164a907e64e328176c9da1cf052fcea2fb608a4
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-run-import-argument-must-match-direction.md
    title: "microsoft/BCQuality: The `Import` argument of `Xmlport.Run` must match the XMLport's `Direction`"
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
repo_path: microsoft/knowledge/xmlport/xmlport-run-import-argument-must-match-direction.md
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

# The `Import` argument of `Xmlport.Run` must match the XMLport's `Direction`

> Xmlport.Run(Number [, RequestWindow] [, Import] [, Record]) takes an optional Import argument that says whether the XMLport imports or exports, and its default is true.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-run-import-argument-must-match-direction.md) · microsoft layer · xmlport · BC all · tier official · derived

## Description

`Xmlport.Run(Number [, RequestWindow] [, Import] [, Record])` takes an optional `Import` argument that says whether the XMLport imports or exports, and its default is `true`. When the XMLport's `Direction` property is `Import` or `Export`, the argument must agree with that direction or the call fails at run time. The consequence is easy to miss: running an export-only XMLport as `Xmlport.Run(Id, false)` leaves `Import` at its default of `true`, which contradicts `Direction = Export`. The call compiles, and the mismatch appears only when the code runs.

The argument selects the direction only when `Direction` is `Both` and no request page is shown. With a request page, it sets the default of the direction option the user sees.

## Best Practice

When calling `Xmlport.Run` on an XMLport with `Direction = Export`, pass `false` for `Import` explicitly. For `Direction = Import`, the default is already correct; passing `true` documents the intent. For `Direction = Both`, always pass the argument so the direction does not depend on a default.

See sample: [`xmlport-run-import-argument-must-match-direction.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-run-import-argument-must-match-direction.good.al).

## Anti Pattern

`Xmlport.Run(Xmlport::"Customer Export", false);` against an XMLport declared with `Direction = Export`. The author suppressed the request page and assumed the declared direction would be used; the omitted third argument defaults to import and the call raises a run-time error. Reviewer signal: a two-argument `Xmlport.Run` whose target XMLport is export-only.

Do not report a two-argument call when the target's `Direction` is `Import`, and do not infer the direction from the XMLport's name when its definition is not available.

See sample: [`xmlport-run-import-argument-must-match-direction.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-run-import-argument-must-match-direction.bad.al).

## References

[Xmlport.Run method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/xmlport/xmlport-run-method) and [Direction property](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/properties/devenv-direction-property).

## Examples

- [Good: xmlport-run-import-argument-must-match-direction.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-run-import-argument-must-match-direction.good.al)
- [Bad: xmlport-run-import-argument-must-match-direction.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-run-import-argument-must-match-direction.bad.al)

## Changed by

- [#277 knowledge: translations, assisted setup, API queries, and a new xmlport domain](../../../../changes/bcquality/277.md), 2026-11-19

---

From microsoft/BCQuality at aaaf6c1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
