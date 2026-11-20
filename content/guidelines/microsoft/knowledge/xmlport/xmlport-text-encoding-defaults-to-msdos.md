---
id: guideline/microsoft/knowledge/xmlport/xmlport-text-encoding-defaults-to-msdos
type: guideline
title: A text XMLport uses MS-DOS encoding unless `TextEncoding` is set
summary: An XMLport whose Format is VariableText or FixedText reads and writes text in the encoding given by its TextEncoding property, and the default value is MSDOS.
tier: official
language: en
tags:
  - xmlport
  - textencoding
  - msdos
  - utf8
  - variabletext
  - fixedtext
  - csv
  - encoding
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T00:18:32.391Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1a92a89f66be6fbe97b36a0dd831e27921166bf2
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-text-encoding-defaults-to-msdos.md
    title: "microsoft/BCQuality: A text XMLport uses MS-DOS encoding unless `TextEncoding` is set"
    date: "2026-11-19"
    commit: dd49341915045164248349bd891b106ebb4b34cb
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
  changes: []
repo_path: microsoft/knowledge/xmlport/xmlport-text-encoding-defaults-to-msdos.md
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
identifiers:
  - TextEncoding
  - VariableText
  - FixedText
---

# A text XMLport uses MS-DOS encoding unless `TextEncoding` is set

> An XMLport whose Format is VariableText or FixedText reads and writes text in the encoding given by its TextEncoding property, and the default value is MSDOS.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-text-encoding-defaults-to-msdos.md) · microsoft layer · xmlport · BC all · tier official · derived

## Description

An XMLport whose `Format` is `VariableText` or `FixedText` reads and writes text in the encoding given by its `TextEncoding` property, and the default value is `MSDOS`. Business Central holds text as Unicode internally, so the default converts every exported value to the MS-DOS code page and interprets every imported byte as MS-DOS. A delimited file that contains only ASCII looks correct in testing; the first name with an accented letter or a currency symbol is corrupted for a consumer that expects UTF-8 or Windows encoding, and an incoming UTF-8 file is imported with wrong characters. No diagnostic is raised in either direction.

The property is available only for the two text formats. It does not apply when `Format` is `Xml`.

## Best Practice

Set `TextEncoding` explicitly on every `VariableText` or `FixedText` XMLport to the encoding the other system uses: `UTF8` (written with a byte order mark), `UTF16`, `WINDOWS`, or `MSDOS` when the counterpart really requires it. When one XMLport serves partners with different encodings, set it at run time with `currXMLport.TextEncoding(...)` before the data is processed.

See sample: [`xmlport-text-encoding-defaults-to-msdos.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-text-encoding-defaults-to-msdos.good.al).

## Anti Pattern

A CSV or fixed-width XMLport that declares `Format` and separators but no `TextEncoding`, used to exchange names, addresses, or descriptions. Reviewer signal: `Format = VariableText` or `Format = FixedText` with no `TextEncoding` property and no run-time `TextEncoding` call.

Do not report a missing `TextEncoding` on an XMLport with `Format = Xml`, and do not report an explicit `TextEncoding = MSDOS`, which is a stated choice.

See sample: [`xmlport-text-encoding-defaults-to-msdos.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-text-encoding-defaults-to-msdos.bad.al).

## References

[TextEncoding property](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/properties/devenv-textencoding-property) and [File handling and text encoding](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-file-handling-and-text-encoding).

## Examples

- [Good: xmlport-text-encoding-defaults-to-msdos.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-text-encoding-defaults-to-msdos.good.al)
- [Bad: xmlport-text-encoding-defaults-to-msdos.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/xmlport-text-encoding-defaults-to-msdos.bad.al)

---

From microsoft/BCQuality at dd49341, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
