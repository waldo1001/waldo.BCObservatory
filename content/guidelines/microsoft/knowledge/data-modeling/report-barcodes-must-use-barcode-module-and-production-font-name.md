---
id: guideline/microsoft/knowledge/data-modeling/report-barcodes-must-use-barcode-module-and-production-font-name
type: guideline
title: Generate report barcodes through the Barcode module, with the production font name
summary: "Business Central's barcode support lives in the System Application's Barcode module (src/System Application/App/Barcode): interface \"Barcode Font Provider\" / \"Barcode Font Provider 2D\", enum \"Barcode Symbology\" / \"Barcode Symbology 2D\", and built-in implementations (codeunit 9215/9221)."
tier: official
language: en
tags:
  - barcode
  - qr-code
  - barcode-font-provider
  - barcode-font-provider-2d
  - report-layout
  - saas
  - idautomation
  - code-39
  - checksum
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:37.070Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: e85d7e1dffc3ed49ba344dfcb145e181dcf19068
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/report-barcodes-must-use-barcode-module-and-production-font-name.md
    title: "microsoft/BCQuality: Generate report barcodes through the Barcode module, with the production font name"
    date: "2026-09-30"
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
    - change/bcquality/175
repo_path: microsoft/knowledge/data-modeling/report-barcodes-must-use-barcode-module-and-production-font-name.md
layer: microsoft
kind: rule
domain: data-modeling
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
  - ValidateInput
  - EncodeFont
  - IDAutomationHC39M
  - IDAutomation2D
  - IsValidInput
---

# Generate report barcodes through the Barcode module, with the production font name

> Business Central's barcode support lives in the System Application's Barcode module (src/System Application/App/Barcode): interface "Barcode Font Provider" / "Barcode Font Provider 2D", enum "Barcode Symbology" / "Barcode Symbology 2D", and built-in implementations (codeunit 9215/9221).

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/report-barcodes-must-use-barcode-module-and-production-font-name.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

Business Central's barcode support lives in the System Application's
`Barcode` module (`src/System Application/App/Barcode`): `interface
"Barcode Font Provider"` / `"Barcode Font Provider 2D"`, `enum "Barcode
Symbology"` / `"Barcode Symbology 2D"`, and built-in implementations
(`codeunit 9215`/`9221`). A report encodes a data string via this API;
the layout then displays it using a barcode *font*.

The two interfaces are not symmetric: `"Barcode Font Provider"` (1D)
declares both `ValidateInput` and `EncodeFont`; `"Barcode Font Provider
2D"` declares only `EncodeFont` (see Source). BCApps' `Item GTIN Label`
report reflects that split exactly — it validates then encodes through
the 1D provider, but only encodes through the 2D provider, for the same
"No." value.

On Business Central online this needs no setup ("the IDAutomation fonts
are automatically available as part of the service" — Microsoft Learn),
unlike on-premises, where fonts must be purchased and installed. That
ease hides a SaaS-specific trap the API doesn't cover: naming the actual
font. IDAutomation ships both a purchased font and a same-looking
evaluation font per version (Code 39: `IDAutomationHC39M` purchased vs.
`IDAutomationSHC39M Demo`) — per Microsoft Learn, "be sure to use the
purchased font name... If you use the evaluation font name, the barcode
won't render." The wrong name produces nothing, in the layout not AL, so
no reviewer catches it reading the object.

## Best Practice

Encode through the real API, matching the calls to what the chosen
interface actually declares. One-dimensional: declare `Interface
"Barcode Font Provider"` and call both `ValidateInput` and `EncodeFont`
— skipping validation lets a value outside the character set, or one
needing a checksum setting never applied, reach the font unchecked.
Two-dimensional: declare `Interface "Barcode Font Provider 2D"` and call
`EncodeFont` alone — there is no `ValidateInput` on this interface.

Treat naming the production font in the layout as equally required, not
an afterthought. Two-dimensional symbologies other than Maxicode use
`IDAutomation2D` (Maxicode: `IDAutomation2D MaxiCode`); one-dimensional
symbologies use the purchased version name (e.g. `IDAutomationHC39M` for
Code 39), never a name containing `Demo`.

See sample: [`report-barcodes-must-use-barcode-module-and-production-font-name.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/report-barcodes-must-use-barcode-module-and-production-font-name.good.al).

## Anti Pattern

Constructing a barcode string by hand where that construction has a
concrete, independently provable defect: a source value that can contain
characters outside the symbology's character set is never validated, a
checksum the symbology or setup requires is never applied, or there is
concrete evidence of an incompatible font binding.

The delimiter itself is not the defect. `*value*` is a documented, valid
Code 39 form for IDAutomation fonts (Microsoft Learn's font table and
IDAutomation's own manual both give `*` as start/stop); the `(`/`)` that
IDAutomation 1D Provider's encoder emits (BCApps test:
`EncodeFont('1234', Code39) = '(1234)'`) is an alternative start/stop
form the same fonts accept, used to keep `*` out of the human-readable
text. Never flag delimiter choice alone.

The same validation gap exists when the module *is* used: a 1D path that
calls `EncodeFont` on `"Barcode Font Provider"` without `ValidateInput`
(IDAutomation 1D Provider's `EncodeFont` does not validate on its own).
The sample shows this variant, visible in AL alone. A last version:
encoding correctly but naming the evaluation font, which BC online
refuses to render.

See sample: [`report-barcodes-must-use-barcode-module-and-production-font-name.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/report-barcodes-must-use-barcode-module-and-production-font-name.bad.al).

## Source

BCApps (`src/System Application/App/Barcode/src/`):
`Barcode Provider/Font/BarcodeFontProvider.Interface.al` (1D:
`ValidateInput` + `EncodeFont`); `IDAutomation 1D Provider/
IDAutomation1DProvider.Codeunit.al` (`EncodeFont` goes straight to the
symbology encoder; only `ValidateInput` calls `IsValidInput`); `Barcode Provider 2D/Font/BarcodeFontProvider2D.Interface.al`
(2D: only `EncodeFont`). `IDAutomation 1D Provider/Encoders/IDA1DCode39Encoder.Codeunit.al`
(`codeunit 9204`, regex accepts literal `*`; `EncodeFont` → `DotNet FontEncoder.Code39`).
1D/2D split: `.../Inventory/Item/ItemGTINLabel.Report.al` (`report 6625`,
validates+encodes 1D, only encodes 2D). Encoder output form: `IDA1DCode39Test.Codeunit.al`
(`codeunit 135044`): `EncodeFontSuccessTest('1234', Code39, '(1234)')`.

Microsoft Learn "Adding Barcodes to Reports" and "Barcode Fonts with
Business Central Online" — quoted above, incl. the Code39 row ("`*` is
used for both start and stop delimiters"). IDAutomation, "Code 39 Font
User Manual" (https://idautomation.com/barcode-fonts/code-39/fontnames/):
`*` start/stop, or parentheses to keep `*` out of the human-readable text.

## Examples

- [Good: report-barcodes-must-use-barcode-module-and-production-font-name.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/report-barcodes-must-use-barcode-module-and-production-font-name.good.al)
- [Bad: report-barcodes-must-use-barcode-module-and-production-font-name.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/report-barcodes-must-use-barcode-module-and-production-font-name.bad.al)

## Changed by

- [#175 9 AL/BC patterns: document distribution, price calculation & barcode extensibility](../../../../changes/bcquality/175.md), 2026-09-30

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
