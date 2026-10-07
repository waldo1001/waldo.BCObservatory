---
id: object/interface/external-tax-engine-us
type: object
title: Interface "External Tax Engine" (US)
summary: Interface "External Tax Engine" (US) in the US country layer (Microsoft.Finance.SalesTax). 4 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - us layer
versions:
  introduced: "29"
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3e48482dcc1da0c79430f48c73be47c185dd8def30649c0cbe090f397fc117b9
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/NA/BaseApp/Finance/SalesTax/ExternalTaxEngine.Interface.al
    title: src/Layers/NA/BaseApp/Finance/SalesTax/ExternalTaxEngine.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations:
    - localization/us
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: External Tax Engine
namespace: Microsoft.Finance.SalesTax
app: Base Application
extends: null
first_version: "29"
last_version: "30"
present_in:
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
country: US
counts:
  fields: 0
  procedures: 4
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "External Tax Engine" (US)

> Interface "External Tax Engine" (US) in the US country layer (Microsoft.Finance.SalesTax). 4 public procedures. Introduced in BC29, still in BC30.

US country layer · Microsoft.Finance.SalesTax · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/NA/BaseApp/Finance/SalesTax/ExternalTaxEngine.Interface.al) · facts from BC29

An object of the [US localization](../../localizations/us.md), not part of W1.

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `CallExternalTaxEngineForDoc(DocTable: Integer; DocType: Option Quote,"Order",Invoice,"Credit Memo","Blanket Order","Return Order"; DocNo: Code[20]): Text[20]`
- `CallExternalTaxEngineForJnl(var GenJnlLine: Record "Gen. Journal Line"; CalculationType: Option Normal,Reverse,Expense): Decimal`
- `FinalizeExternalTaxCalcForDoc(DocTable: Integer; DocNo: Code[20])`
- `FinalizeExternalTaxCalcForJnl(var GLEntry: Record "G/L Entry")`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
