---
id: guideline/microsoft/knowledge/style/ml-properties-and-textconst-are-not-exported-to-xliff
type: guideline
title: "`ML` properties and `TextConst` are not exported to the XLIFF file"
summary: The generated XLIFF file contains the strings of Caption, ToolTip, and the other label properties, of Label variables, and of report labels.
tier: official
language: en
tags:
  - captionml
  - tooltipml
  - optioncaptionml
  - textconst
  - xliff
  - translation
  - label
  - multilanguage
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
  input_hash: 8d11dd64b42496909ce6989d9193f0d4de83fe50
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/ml-properties-and-textconst-are-not-exported-to-xliff.md
    title: "microsoft/BCQuality: `ML` properties and `TextConst` are not exported to the XLIFF file"
    date: "2026-11-19"
    commit: aaaf6c13c219294fcebf644f1662f4d77061e2f7
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-testfield-joker-textconst-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/fieldref/fieldref-optioncaption-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/277
repo_path: microsoft/knowledge/style/ml-properties-and-textconst-are-not-exported-to-xliff.md
layer: microsoft
kind: rule
domain: style
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
  - TextConst
  - ToolTip
  - CaptionML
  - ToolTipML
  - OptionCaptionML
  - InstructionalTextML
  - PromotedActionCategoriesML
  - RequestFilterHeadingML
  - AboutTitleML
  - AboutTextML
  - OptionCaption
---

# `ML` properties and `TextConst` are not exported to the XLIFF file

> The generated XLIFF file contains the strings of Caption, ToolTip, and the other label properties, of Label variables, and of report labels.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/ml-properties-and-textconst-are-not-exported-to-xliff.md) · microsoft layer · style · BC all · tier official · derived

## Description

The generated XLIFF file contains the strings of `Caption`, `ToolTip`, and the other label properties, of `Label` variables, and of report labels. It does not contain the multilanguage (`ML`) variants: `CaptionML`, `ToolTipML`, `OptionCaptionML`, `InstructionalTextML`, `PromotedActionCategoriesML`, `RequestFilterHeadingML`, `AboutTitleML`, and `AboutTextML`. Variables of the `TextConst` data type are not included either. Text declared that way compiles and displays, but it never reaches a translator through the translation file, and XLIFF translation files are required to submit an app to Marketplace.

Code converted from C/AL, and code written from older examples, commonly still uses these forms.

## Best Practice

Declare user-facing text with the label properties (`Caption`, `ToolTip`, `OptionCaption`, and so on) and with `Label` variables, and supply other languages through XLIFF translation files. Carry translator context in the label's `Comment` parameter instead of inline language codes.

See sample: [`ml-properties-and-textconst-are-not-exported-to-xliff.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/ml-properties-and-textconst-are-not-exported-to-xliff.good.al).

## Anti Pattern

`CaptionML = ENU = 'Loyalty Level', DAN = 'Loyalitetsniveau';` on a field, or `LevelMissingErr: TextConst ENU = 'Select a loyalty level.';` as a message. The languages listed inline are the only ones the text will ever have, the strings are absent from the generated `.xlf`, and adding a per-language translation file does not help because there is no translation unit to target.

Do not report a plain `Caption` or `Label` as untranslated because it carries no language codes: the single developer text is the source string, and translations live in the XLIFF files.

See sample: [`ml-properties-and-textconst-are-not-exported-to-xliff.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/ml-properties-and-textconst-are-not-exported-to-xliff.bad.al).

## References

[Working with translation files](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-work-with-translation-files#generating-the-xliff-file), [Working with labels](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-using-labels), and [AppSourceCop AS0015](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0015).

## Examples

- [Good: ml-properties-and-textconst-are-not-exported-to-xliff.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/ml-properties-and-textconst-are-not-exported-to-xliff.good.al)
- [Bad: ml-properties-and-textconst-are-not-exported-to-xliff.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/ml-properties-and-textconst-are-not-exported-to-xliff.bad.al)

## Names

- [Record.TestField(Any, TextConst) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-testfield-joker-textconst-method) (names TextConst)
- [FieldRef.OptionCaption() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/fieldref/fieldref-optioncaption-method) (names OptionCaption)

## Changed by

- [#277 knowledge: translations, assisted setup, API queries, and a new xmlport domain](../../../../changes/bcquality/277.md), 2026-11-19

---

From microsoft/BCQuality at aaaf6c1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
