---
id: app/peppol
type: app
title: PEPPOL
summary: "PEPPOL (Microsoft.Peppol): 53 objects in BC29-30 (23 codeunits, 21 interfaces, 2 tables, 2 XMLports, 2 enums, ...); no Learn hub documents its objects yet; 1 video."
tier: official
language: en
tags:
  - first-party app
  - integration
system: integration
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:36:24.645Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ad56c9170d5b341f950b7afa34731e5e365932392753bbd73683f5aac8acd3fa
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/PEPPOL/app
    title: src/Apps/W1/PEPPOL/app (main)
    date: null
    commit: f18567dc08e2bd162bf192e1da4d714b57eb099f
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/37202
    - object/table/37203
    - object/tableextension/37221
    - object/page/37202
    - object/pageextension/37221
    - object/codeunit/37200
    - object/codeunit/37201
    - object/codeunit/37202
    - object/codeunit/37203
    - object/codeunit/37204
    - object/codeunit/37205
    - object/codeunit/37206
    - object/codeunit/37207
    - object/codeunit/37208
    - object/codeunit/37209
    - object/codeunit/37211
    - object/codeunit/37212
    - object/codeunit/37213
    - object/codeunit/37214
    - object/codeunit/37215
    - object/codeunit/37216
    - object/codeunit/37217
    - object/codeunit/37218
    - object/codeunit/37219
    - object/codeunit/37220
    - object/codeunit/37222
    - object/codeunit/37223
    - object/codeunit/37230
    - object/xmlport/37200
    - object/xmlport/37201
    - object/enum/37200
    - object/enum/37201
    - object/interface/peppol-attachment-provider
    - object/interface/peppol-delivery-info-provider
    - object/interface/peppol-document-info-provider
    - object/interface/peppol-line-info-provider
    - object/interface/peppol-monetary-info-provider
    - object/interface/peppol-party-info-provider
    - object/interface/peppol-payment-info-provider
    - object/interface/peppol-po-delivery-period
    - object/interface/peppol-po-line-delivery-period
    - object/interface/peppol-posted-document-iterator
    - object/interface/peppol-purchase-attachment-provider
    - object/interface/peppol-purchase-delivery-info-provider
    - object/interface/peppol-purchase-document-info-provider
    - object/interface/peppol-purchase-line-info-provider
    - object/interface/peppol-purchase-monetary-info-provider
    - object/interface/peppol-purchase-party-info-provider
    - object/interface/peppol-purchase-payment-info-provider
    - object/interface/peppol-purchase-tax-info-provider
    - object/interface/peppol-remit-advice-info-provider
    - object/interface/peppol-tax-info-provider
    - object/interface/peppol30-validation
  features: []
  topics: []
  localizations: []
  videos:
    - video/oL8OlbEoUnQ
  posts: []
  guidelines: []
app: PEPPOL
namespace_root: Microsoft.Peppol
present_in:
  - "29"
  - "30"
counts:
  objects: 53
  by_type:
    codeunit: 23
    interface: 21
    table: 2
    xmlport: 2
    enum: 2
    tableextension: 1
    page: 1
    pageextension: 1
  hubs: 0
  videos: 1
  posts: 0
---

# PEPPOL

> PEPPOL (Microsoft.Peppol): 53 objects in BC29-30 (23 codeunits, 21 interfaces, 2 tables, 2 XMLports, 2 enums, ...); no Learn hub documents its objects yet; 1 video.

First-party app · folder `src/Apps/W1/PEPPOL/app` · namespace `Microsoft.Peppol` · BC29-30 · system integration · facts from the code pillar and the joins, nothing machine-written

## Objects

53 objects, by type.

### Tables (2)

| Id | Name | Caption |
|---|---|---|
| 37202 | [PEPPOL 3.0 Setup](../objects/table/37202.md) |  |
| 37203 | [Remit. Advice Buffer](../objects/table/37203.md) | Remittance Advice Buffer |

### Table extensions (1)

| Id | Name | Caption |
|---|---|---|
| 37221 | [PEPPOL VAT Clause](../objects/tableextension/37221.md) |  |

### Pages (1)

| Id | Name | Caption |
|---|---|---|
| 37202 | [PEPPOL 3.0 Setup](../objects/page/37202.md) |  |

### Page extensions (1)

| Id | Name | Caption |
|---|---|---|
| 37221 | [PEPPOL VAT Clauses](../objects/pageextension/37221.md) |  |

### Codeunits (23)

| Id | Name | Caption |
|---|---|---|
| 37200 | [PEPPOL30](../objects/codeunit/37200.md) |  |
| 37201 | [PEPPOL30 Impl.](../objects/codeunit/37201.md) |  |
| 37202 | [Export Purchase Order PEPPOL30](../objects/codeunit/37202.md) |  |
| 37203 | [PEPPOL30 Sales Validation Impl](../objects/codeunit/37203.md) |  |
| 37204 | [PEPPOL30 Initialize](../objects/codeunit/37204.md) |  |
| 37205 | [Exp. Sales CrM. PEPPOL30](../objects/codeunit/37205.md) |  |
| 37206 | [Exp. Sales Inv. PEPPOL30](../objects/codeunit/37206.md) |  |
| 37207 | [Remit. Advice Buffer Mgt.](../objects/codeunit/37207.md) |  |
| 37208 | [Export Remit. Advice PEPPOL30](../objects/codeunit/37208.md) |  |
| 37209 | [PEPPOL Order Resp. Builder](../objects/codeunit/37209.md) |  |
| 37211 | [Exp. Serv.CrM. PEPPOL30](../objects/codeunit/37211.md) |  |
| 37212 | [Exp. Serv.Inv. PEPPOL30](../objects/codeunit/37212.md) |  |
| 37213 | [PEPPOL30 Sales Iterator](../objects/codeunit/37213.md) |  |
| 37214 | [PEPPOL30 Services Iterator](../objects/codeunit/37214.md) |  |
| 37215 | [PEPPOL30 Upgrade](../objects/codeunit/37215.md) |  |
| 37216 | [PEPPOL30 Sales Validation](../objects/codeunit/37216.md) |  |
| 37217 | [PEPPOL 3.0 Subscribers](../objects/codeunit/37217.md) |  |
| 37218 | [PEPPOL30 Common](../objects/codeunit/37218.md) |  |
| 37219 | [PEPPOL30 Service Validation](../objects/codeunit/37219.md) |  |
| 37220 | [PEPPOL30 Serv. Validation Impl](../objects/codeunit/37220.md) |  |
| 37222 | [PEPPOL VAT Helper](../objects/codeunit/37222.md) |  |
| 37223 | [PEPPOL30 Unknown Format](../objects/codeunit/37223.md) |  |
| 37230 | [Export Self-Billed PEPPOL30](../objects/codeunit/37230.md) |  |

### XMLports (2)

| Id | Name | Caption |
|---|---|---|
| 37200 | [Sales Cr.Memo - PEPPOL30](../objects/xmlport/37200.md) | Sales Cr.Memo - PEPPOL BIS 3.0 |
| 37201 | [Sales Invoice - PEPPOL30](../objects/xmlport/37201.md) | Sales Invoice - PEPPOL BIS 3.0 |

### Enums (2)

| Id | Name | Caption |
|---|---|---|
| 37200 | [PEPPOL 3.0 Format](../objects/enum/37200.md) |  |
| 37201 | [PEPPOL 3.0 Purchase](../objects/enum/37201.md) |  |

### Interfaces (21)

| Id | Name | Caption |
|---|---|---|
|  | [PEPPOL Attachment Provider](../objects/interface/peppol-attachment-provider.md) |  |
|  | [PEPPOL Delivery Info Provider](../objects/interface/peppol-delivery-info-provider.md) |  |
|  | [PEPPOL Document Info Provider](../objects/interface/peppol-document-info-provider.md) |  |
|  | [PEPPOL Line Info Provider](../objects/interface/peppol-line-info-provider.md) |  |
|  | [PEPPOL Monetary Info Provider](../objects/interface/peppol-monetary-info-provider.md) |  |
|  | [PEPPOL Party Info Provider](../objects/interface/peppol-party-info-provider.md) |  |
|  | [PEPPOL Payment Info Provider](../objects/interface/peppol-payment-info-provider.md) |  |
|  | [PEPPOL PO Delivery Period](../objects/interface/peppol-po-delivery-period.md) |  |
|  | [PEPPOL PO Line Delivery Period](../objects/interface/peppol-po-line-delivery-period.md) |  |
|  | [PEPPOL Posted Document Iterator](../objects/interface/peppol-posted-document-iterator.md) |  |
|  | [PEPPOL Purchase Attachment Provider](../objects/interface/peppol-purchase-attachment-provider.md) |  |
|  | [PEPPOL Purchase Delivery Info Provider](../objects/interface/peppol-purchase-delivery-info-provider.md) |  |
|  | [PEPPOL Purchase Document Info Provider](../objects/interface/peppol-purchase-document-info-provider.md) |  |
|  | [PEPPOL Purchase Line Info Provider](../objects/interface/peppol-purchase-line-info-provider.md) |  |
|  | [PEPPOL Purchase Monetary Info Provider](../objects/interface/peppol-purchase-monetary-info-provider.md) |  |
|  | [PEPPOL Purchase Party Info Provider](../objects/interface/peppol-purchase-party-info-provider.md) |  |
|  | [PEPPOL Purchase Payment Info Provider](../objects/interface/peppol-purchase-payment-info-provider.md) |  |
|  | [PEPPOL Purchase Tax Info Provider](../objects/interface/peppol-purchase-tax-info-provider.md) |  |
|  | [PEPPOL Remit. Advice Info Provider](../objects/interface/peppol-remit-advice-info-provider.md) |  |
|  | [PEPPOL Tax Info Provider](../objects/interface/peppol-tax-info-provider.md) |  |
|  | [PEPPOL30 Validation](../objects/interface/peppol30-validation.md) |  |

## Videos and posts

Videos and posts that name this app's objects by exact type and name.

- [What's New: E-Documents (2026 release wave 1)](../videos/oL8OlbEoUnQ.md) (video, 2026-04-01): names Page 37202 "PEPPOL 3.0 Setup", Enum 37200 "PEPPOL 3.0 Format"

Source: [src/Apps/W1/PEPPOL/app](https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/PEPPOL/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
