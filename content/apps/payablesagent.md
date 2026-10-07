---
id: app/payablesagent
type: app
title: PayablesAgent
summary: "PayablesAgent (Microsoft.Agent): 75 objects in BC29-30 (20 codeunits, 14 pages, 14 page customizations, 8 tables, 5 enums, ...); documented by 1 Learn hub."
tier: official
language: en
tags:
  - first-party app
  - copilot
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:10:59.019Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 94fac19e3775db74426dd9178542acd936de704b54d9c0ea586abf13244f11da
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/PayablesAgent/app
    title: src/Apps/W1/PayablesAgent/app (main)
    date: null
    commit: ad9b529a78c818ba25c24aecd093442a6c7a3852
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/3303
    - object/table/3304
    - object/table/3305
    - object/table/3306
    - object/table/3307
    - object/table/3308
    - object/table/3320
    - object/table/3321
    - object/tableextension/3308
    - object/page/3303
    - object/page/3304
    - object/page/3305
    - object/page/3306
    - object/page/3307
    - object/page/3308
    - object/page/3309
    - object/page/3310
    - object/page/3311
    - object/page/3312
    - object/page/3313
    - object/page/3318
    - object/page/3325
    - object/page/3326
    - object/pageextension/3305
    - object/pageextension/3309
    - object/pageextension/3311
    - object/pageextension/3312
    - object/codeunit/3303
    - object/codeunit/3304
    - object/codeunit/3305
    - object/codeunit/3306
    - object/codeunit/3307
    - object/codeunit/3308
    - object/codeunit/3309
    - object/codeunit/3310
    - object/codeunit/3311
    - object/codeunit/3313
    - object/codeunit/3314
    - object/codeunit/3315
    - object/codeunit/3316
    - object/codeunit/3317
    - object/codeunit/3318
    - object/codeunit/3319
    - object/codeunit/3322
    - object/codeunit/3323
    - object/codeunit/3324
    - object/codeunit/3328
    - object/query/3303
    - object/enum/3303
    - object/enum/3304
    - object/enum/3305
    - object/enum/3306
    - object/enum/3307
    - object/enumextension/3303
    - object/enumextension/3304
    - object/permissionset/3303
    - object/permissionset/3304
    - object/permissionset/3305
    - object/permissionset/3306
    - object/entitlement/payables-agent
    - object/profile/payables-agent
    - object/pagecustomization/pa-chart-of-accounts
    - object/pagecustomization/pa-deferral-template-list
    - object/pagecustomization/pa-e-doc-error-messages-part
    - object/pagecustomization/pa-e-doc-purchase-draft
    - object/pagecustomization/pa-edoc-purchase-draft-subform
    - object/pagecustomization/pa-hist-purchase-lines
    - object/pagecustomization/pa-inbound-e-documents
    - object/pagecustomization/pa-item-reference-entries
    - object/pagecustomization/pa-items
    - object/pagecustomization/pa-posted-purch-doc
    - object/pagecustomization/pa-purchase-invoice
    - object/pagecustomization/pa-text-to-account-mapping
    - object/pagecustomization/pa-vendor-card
    - object/pagecustomization/pa-vendors
  features: []
  topics:
    - topic/business-central/copilot-and-agent-capabilities/payables-agent
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: PayablesAgent
namespace_root: Microsoft.Agent
present_in:
  - "29"
  - "30"
counts:
  objects: 75
  by_type:
    codeunit: 20
    page: 14
    pagecustomization: 14
    table: 8
    enum: 5
    pageextension: 4
    permissionset: 4
    enumextension: 2
    tableextension: 1
    query: 1
    entitlement: 1
    profile: 1
  hubs: 1
  videos: 0
  posts: 0
---

# PayablesAgent

> PayablesAgent (Microsoft.Agent): 75 objects in BC29-30 (20 codeunits, 14 pages, 14 page customizations, 8 tables, 5 enums, ...); documented by 1 Learn hub.

First-party app · folder `src/Apps/W1/PayablesAgent/app` · namespace `Microsoft.Agent` · BC29-30 · system copilot · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Payables Agent](../topics/business-central/copilot-and-agent-capabilities/payables-agent.md) (Copilot and agent capabilities): 4 objects

## Objects

75 objects, by type.

### Tables (8)

| Id | Name | Caption |
|---|---|---|
| 3303 | [Payables Agent Setup](../objects/table/3303.md) |  |
| 3304 | [Payables Agent KPI](../objects/table/3304.md) |  |
| 3305 | [PA Demo File](../objects/table/3305.md) |  |
| 3306 | [PA Billing Log](../objects/table/3306.md) |  |
| 3307 | [PA Billing Task Setup](../objects/table/3307.md) |  |
| 3308 | [PA Known Sender](../objects/table/3308.md) | Payables Agent Known Sender |
| 3320 | [PA Email Cleanup Setup](../objects/table/3320.md) | Payables Agent Email Cleanup Setup |
| 3321 | [PA Email Duplicate Buffer](../objects/table/3321.md) | Email Inbox Duplicate Group |

### Table extensions (1)

| Id | Name | Caption |
|---|---|---|
| 3308 | [PA E-Doc Sample Purch. Inv.](../objects/tableextension/3308.md) |  |

### Pages (14)

| Id | Name | Caption |
|---|---|---|
| 3303 | [Payables Agent RC](../objects/page/3303.md) |  |
| 3304 | [Payables Agent Setup](../objects/page/3304.md) | Configure Payables Agent |
| 3305 | [PA Agent Email Task](../objects/page/3305.md) | Email Task |
| 3306 | [Payables Agent KPI](../objects/page/3306.md) |  |
| 3307 | [PA Demo Guide](../objects/page/3307.md) | Payables Agent sample invoice guide |
| 3308 | [PA Demo Files To Download](../objects/page/3308.md) | Samples invoices available for download |
| 3309 | [PA Billing Overview](../objects/page/3309.md) | Payables Agent - Billing Overview |
| 3310 | [Payables Agent Activities](../objects/page/3310.md) |  |
| 3311 | [PA MLLM Setup](../objects/page/3311.md) |  |
| 3312 | [PA Agent Upload Task](../objects/page/3312.md) | Upload Task |
| 3313 | [PA Known Senders](../objects/page/3313.md) | Payables Agent Known Senders |
| 3318 | [PA Trial Guide](../objects/page/3318.md) | Payables Agent Trial |
| 3325 | [PA Email Storage Cleanup](../objects/page/3325.md) | Payables Agent Email Storage Cleanup |
| 3326 | [PA Email Duplicates](../objects/page/3326.md) | Affected Emails |

### Page extensions (4)

| Id | Name | Caption |
|---|---|---|
| 3305 | [AgentTaskList](../objects/pageextension/3305.md) |  |
| 3309 | [PA Purchase Invoice List](../objects/pageextension/3309.md) |  |
| 3311 | [PAAccPayablesAdministratorRC](../objects/pageextension/3311.md) |  |
| 3312 | [PABusinessManagerRC](../objects/pageextension/3312.md) |  |

### Codeunits (20)

| Id | Name | Caption |
|---|---|---|
| 3303 | [Payables Agent](../objects/codeunit/3303.md) |  |
| 3304 | [PA Setup Configuration](../objects/codeunit/3304.md) |  |
| 3305 | [Payables Agent Upgrade](../objects/codeunit/3305.md) |  |
| 3306 | [Payables Agent KPI](../objects/codeunit/3306.md) |  |
| 3307 | [Payables Agent Setup](../objects/codeunit/3307.md) |  |
| 3308 | [PA Open Current E-Document](../objects/codeunit/3308.md) |  |
| 3309 | [PA Demo Guide](../objects/codeunit/3309.md) |  |
| 3310 | [PA Validate Setup](../objects/codeunit/3310.md) |  |
| 3311 | [PA Billing](../objects/codeunit/3311.md) |  |
| 3313 | [PA Annotation](../objects/codeunit/3313.md) |  |
| 3314 | [PA Agent Task Execution](../objects/codeunit/3314.md) |  |
| 3315 | [PA Session Events](../objects/codeunit/3315.md) |  |
| 3316 | [PA Events](../objects/codeunit/3316.md) |  |
| 3317 | [Payables Agent OCV](../objects/codeunit/3317.md) |  |
| 3318 | [PA Trial](../objects/codeunit/3318.md) |  |
| 3319 | [PA Agent Archiving](../objects/codeunit/3319.md) |  |
| 3322 | [PA Email Cleanup](../objects/codeunit/3322.md) |  |
| 3323 | [PA Email Cleanup Runner](../objects/codeunit/3323.md) |  |
| 3324 | [PA Email Cleanup Scheduler](../objects/codeunit/3324.md) |  |
| 3328 | [PA Email Inbox Row Delete](../objects/codeunit/3328.md) |  |

### Queries (1)

| Id | Name | Caption |
|---|---|---|
| 3303 | [PA Posted Purch. Inv. Users](../objects/query/3303.md) |  |

### Enums (5)

| Id | Name | Caption |
|---|---|---|
| 3303 | [PA KPI Scenario](../objects/enum/3303.md) |  |
| 3304 | [PA Billing Operation](../objects/enum/3304.md) |  |
| 3305 | [PA Email Review Policy](../objects/enum/3305.md) |  |
| 3306 | [PA Setup Change Impact](../objects/enum/3306.md) |  |
| 3307 | [PA Sender Policy](../objects/enum/3307.md) |  |

### Enum extensions (2)

| Id | Name | Caption |
|---|---|---|
| 3303 | [PA Copilot Capability](../objects/enumextension/3303.md) |  |
| 3304 | [PA Agent Metadata](../objects/enumextension/3304.md) |  |

### Permission sets (4)

| Id | Name | Caption |
|---|---|---|
| 3303 | [Payables Ag. - Run](../objects/permissionset/3303.md) | Payables Agent - Run |
| 3304 | [Payables Ag. - Adm.](../objects/permissionset/3304.md) | Payables Agent - Administration |
| 3305 | [Payables Ag. - Read](../objects/permissionset/3305.md) | Payables Agent - Read |
| 3306 | [Payables Ag. - Excluded](../objects/permissionset/3306.md) | Payables Agent - Excluded |

### Entitlements (1)

| Id | Name | Caption |
|---|---|---|
|  | [Payables Agent](../objects/entitlement/payables-agent.md) |  |

### Profiles (1)

| Id | Name | Caption |
|---|---|---|
|  | [Payables Agent](../objects/profile/payables-agent.md) |  |

### Page customizations (14)

| Id | Name | Caption |
|---|---|---|
|  | [PA Chart of Accounts](../objects/pagecustomization/pa-chart-of-accounts.md) |  |
|  | [PA Deferral Template List](../objects/pagecustomization/pa-deferral-template-list.md) |  |
|  | [PA E-Doc. Error Messages Part](../objects/pagecustomization/pa-e-doc-error-messages-part.md) |  |
|  | [PA E-Doc. Purchase Draft](../objects/pagecustomization/pa-e-doc-purchase-draft.md) |  |
|  | [PA EDoc Purchase Draft Subform](../objects/pagecustomization/pa-edoc-purchase-draft-subform.md) |  |
|  | [PA Hist. Purchase Lines](../objects/pagecustomization/pa-hist-purchase-lines.md) |  |
|  | [PA Inbound E-Documents](../objects/pagecustomization/pa-inbound-e-documents.md) |  |
|  | [PA Item Reference Entries](../objects/pagecustomization/pa-item-reference-entries.md) |  |
|  | [PA Items](../objects/pagecustomization/pa-items.md) |  |
|  | [PA Posted Purch. Doc.](../objects/pagecustomization/pa-posted-purch-doc.md) |  |
|  | [PA Purchase Invoice](../objects/pagecustomization/pa-purchase-invoice.md) |  |
|  | [PA Text-to-Account Mapping](../objects/pagecustomization/pa-text-to-account-mapping.md) |  |
|  | [PA Vendor Card](../objects/pagecustomization/pa-vendor-card.md) |  |
|  | [PA Vendors](../objects/pagecustomization/pa-vendors.md) |  |

Source: [src/Apps/W1/PayablesAgent/app](https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/PayablesAgent/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
