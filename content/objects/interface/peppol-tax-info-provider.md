---
id: object/interface/peppol-tax-info-provider
type: object
title: Interface "PEPPOL Tax Info Provider"
summary: Interface "PEPPOL Tax Info Provider" in PEPPOL (Microsoft.Peppol). 14 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - peppol
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
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f3de5672f8bccab5f3dfc14c898e9f97d1e52dcd11cf659a366961e6a2a1af84
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLTaxInfoProvider.Interface.al
    title: src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLTaxInfoProvider.Interface.al (releases/29.x)
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
object_type: interface
object_id: null
name: PEPPOL Tax Info Provider
namespace: Microsoft.Peppol
app: PEPPOL
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
counts:
  fields: 0
  procedures: 14
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "PEPPOL Tax Info Provider"

> Interface "PEPPOL Tax Info Provider" in PEPPOL (Microsoft.Peppol). 14 public procedures. Introduced in BC29, still in BC30.

PEPPOL · Microsoft.Peppol · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLTaxInfoProvider.Interface.al) · facts from BC29

## Procedures

- `GetAllowanceChargeInfo(VATAmtLine: Record "VAT Amount Line"; SalesHeader: Record "Sales Header"; var ChargeIndicator: Text; var AllowanceChargeReasonCode: Text; var AllowanceChargeListID: Text; var AllowanceChargeReason: Text; var Amount: Text; var AllowanceChargeCurrencyID: Text; var TaxCategoryID: Text; var TaxCategorySchemeID: Text; var Percent: Text; var AllowanceChargeTaxSchemeID: Text)`
- `GetAllowanceChargeInfoBIS(VATAmtLine: Record "VAT Amount Line"; SalesHeader: Record "Sales Header"; var ChargeIndicator: Text; var AllowanceChargeReasonCode: Text; var AllowanceChargeListID: Text; var AllowanceChargeReason: Text; var Amount: Text; var AllowanceChargeCurrencyID: Text; var TaxCategoryID: Text; var TaxCategorySchemeID: Text; var Percent: Text; var AllowanceChargeTaxSchemeID: Text)`: Gets allowance or charge information for BIS (Business Interoperability Specification) format. Provides allowance/charge details according to BIS billing specifications.
- `GetTaxExchangeRateInfo(SalesHeader: Record "Sales Header"; var SourceCurrencyCode: Text; var SourceCurrencyCodeListID: Text; var TargetCurrencyCode: Text; var TargetCurrencyCodeListID: Text; var CalculationRate: Text; var MathematicOperatorCode: Text; var Date: Text)`: Gets tax exchange rate information when dealing with foreign currencies in tax calculations.
- `GetTaxTotalInfo(SalesHeader: Record "Sales Header"; var VATAmtLine: Record "VAT Amount Line"; var TaxAmount: Text; var TaxTotalCurrencyID: Text)`: Gets the total tax amount information from the sales header and VAT amount lines.
- `GetTaxSubtotalInfo(VATAmtLine: Record "VAT Amount Line"; SalesHeader: Record "Sales Header"; var TaxableAmount: Text; var TaxAmountCurrencyID: Text; var SubtotalTaxAmount: Text; var TaxSubtotalCurrencyID: Text; var TransactionCurrencyTaxAmount: Text; var TransCurrTaxAmtCurrencyID: Text; var TaxTotalTaxCategoryID: Text; var schemeID: Text; var TaxCategoryPercent: Text; var TaxTotalTaxSchemeID: Text)`: Gets detailed tax subtotal information for a specific VAT amount line including taxable amounts, tax amounts, and tax category details.
- `GetTaxTotalInfoLCY(SalesHeader: Record "Sales Header"; var TaxAmount: Text; var TaxCurrencyID: Text; var TaxTotalCurrencyID: Text)`: Gets tax total information in local currency (LCY) from the sales header.
- `GetTaxTotals(SalesLine: Record "Sales Line"; var VATAmtLine: Record "VAT Amount Line")`: Calculates and retrieves totals from sales line information, populating VAT amount lines.
- `GetTaxCategories(SalesLine: Record "Sales Line"; var VATProductPostingGroupCategory: Record "VAT Product Posting Group")`: Gets tax categories from the sales line and populates VAT product posting group category information.
- `GetTaxExemptionReason(var VATProductPostingGroupCategory: Record "VAT Product Posting Group"; var TaxExemptionReasonTxt: Text; TaxCategoryID: Text)`: Gets the tax exemption reason text based on VAT product posting group category and tax category ID.
- `IsZeroVatCategory(TaxCategory: Code[10]): Boolean`: Checks if the given tax category represents a zero VAT rate category. Includes categories: Z (Zero rated), E (Exempt), AE (VAT reverse charge), K (EEA intra-community), G (Free export), O (Outside VAT scope).
- `IsStandardVATCategory(TaxCategory: Code[10]): Boolean`: Checks if the given tax category represents a standard VAT category (S - Standard rate).
- `IsOutsideScopeVATCategory(TaxCategory: Code[10]): Boolean`: Checks if the given tax category represents outside the scope of VAT (O - Outside the scope of VAT).
- `FinalizeTaxTotals(var VATAmtLine: Record "VAT Amount Line")`: Called once per document after all lines have been aggregated into the VAT amount line buffer, letting a format append synthetic VAT breakdown lines if needed. Needed to add, for example, compensation lines.
- `GetTaxExemptionReason(VATAmtLine: Record "VAT Amount Line"; var VATProductPostingGroupCategory: Record "VAT Product Posting Group"; var TaxExemptionReasonTxt: Text; TaxCategoryID: Text)`: Gets the tax exemption reason text for a given VAT breakdown. Unlike the overload without the VAT amount line, this lets a format tell apart breakdowns that share the same tax category.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
