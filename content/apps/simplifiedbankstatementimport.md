---
id: app/simplifiedbankstatementimport
type: app
title: SimplifiedBankStatementImport
summary: "SimplifiedBankStatementImport (Microsoft.Bank): 23 objects in BC29-30 (13 permission set extensions, 4 permission sets, 2 pages, 2 page extensions, 1 table, ...); no Learn hub documents its objects yet."
tier: official
language: en
tags:
  - first-party app
  - finance
system: finance
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:51:03.523Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7c32eca9549631a37424de8aacca59f67f037135f4d1c663cc9e7c2589f572ad
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/SimplifiedBankStatementImport/app
    title: src/Apps/W1/SimplifiedBankStatementImport/app (main)
    date: null
    commit: a4406cfa9e57437fedc49c53c327a199a854491e
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/8850
    - object/page/8850
    - object/page/8851
    - object/pageextension/8850
    - object/pageextension/8851
    - object/codeunit/8850
    - object/permissionset/8850
    - object/permissionset/8857
    - object/permissionset/8858
    - object/permissionset/8860
    - object/permissionsetextension/8850
    - object/permissionsetextension/8851
    - object/permissionsetextension/8852
    - object/permissionsetextension/8853
    - object/permissionsetextension/8854
    - object/permissionsetextension/8855
    - object/permissionsetextension/8856
    - object/permissionsetextension/8857
    - object/permissionsetextension/8858
    - object/permissionsetextension/8859
    - object/permissionsetextension/8860
    - object/permissionsetextension/8861
    - object/permissionsetextension/8862
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: SimplifiedBankStatementImport
namespace_root: Microsoft.Bank
present_in:
  - "29"
  - "30"
counts:
  objects: 23
  by_type:
    permissionsetextension: 13
    permissionset: 4
    page: 2
    pageextension: 2
    table: 1
    codeunit: 1
  hubs: 0
  videos: 0
  posts: 0
---

# SimplifiedBankStatementImport

> SimplifiedBankStatementImport (Microsoft.Bank): 23 objects in BC29-30 (13 permission set extensions, 4 permission sets, 2 pages, 2 page extensions, 1 table, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/SimplifiedBankStatementImport/app` · namespace `Microsoft.Bank` · BC29-30 · system finance · facts from the code pillar and the joins, nothing machine-written

## Objects

23 objects, by type.

### Tables (1)

| Id | Name | Caption |
|---|---|---|
| 8850 | [Bank Statement Import Preview](../objects/table/8850.md) |  |

### Pages (2)

| Id | Name | Caption |
|---|---|---|
| 8850 | [Bank Statement File Wizard](../objects/page/8850.md) | Bank Statement File Setup |
| 8851 | [Bank Statement Import Preview](../objects/page/8851.md) |  |

### Page extensions (2)

| Id | Name | Caption |
|---|---|---|
| 8850 | [Bank Account Card Extension](../objects/pageextension/8850.md) |  |
| 8851 | [Bank Exp. Imp. Setup Extension](../objects/pageextension/8851.md) |  |

### Codeunits (1)

| Id | Name | Caption |
|---|---|---|
| 8850 | [Bank Statement File Wizard](../objects/codeunit/8850.md) |  |

### Permission sets (4)

| Id | Name | Caption |
|---|---|---|
| 8850 | [Simplified Bank Stat. Import](../objects/permissionset/8850.md) |  |
| 8857 | [SBSI - Edit](../objects/permissionset/8857.md) | SimplifiedBankStatementImport - Edit |
| 8858 | [SBSI - Objects](../objects/permissionset/8858.md) | SimplifiedBankStatementImport - Objects |
| 8860 | [SBSI - Read](../objects/permissionset/8860.md) | SimplifiedBankStatementImport - Read |

### Permission set extensions (13)

| Id | Name | Caption |
|---|---|---|
| 8850 | [D365 BASIC ISV - SBSI](../objects/permissionsetextension/8850.md) |  |
| 8851 | [D365 BASIC - SBSI](../objects/permissionsetextension/8851.md) |  |
| 8852 | [D365 BUS FULL ACCESS - SBSI](../objects/permissionsetextension/8852.md) |  |
| 8853 | [D365 BUS PREMIUM - SBSI](../objects/permissionsetextension/8853.md) |  |
| 8854 | [D365 FULL ACCESS - SBSI](../objects/permissionsetextension/8854.md) |  |
| 8855 | [D365 READ - SBSI](../objects/permissionsetextension/8855.md) |  |
| 8856 | [D365 TEAM MEMBER - SBSI](../objects/permissionsetextension/8856.md) |  |
| 8857 | [INTELLIGENT CLOUD - SBSI](../objects/permissionsetextension/8857.md) |  |
| 8858 | [D365 ACC PAYABLE - SBSI](../objects/permissionsetextension/8858.md) |  |
| 8859 | [D365 ACC RECEIVABLE - SBSI](../objects/permissionsetextension/8859.md) |  |
| 8860 | [D365 BANKING - SBSI](../objects/permissionsetextension/8860.md) |  |
| 8861 | [D365 FINANCIAL REP - SBSI](../objects/permissionsetextension/8861.md) |  |
| 8862 | [D365 SETUP - SBSI](../objects/permissionsetextension/8862.md) |  |

Source: [src/Apps/W1/SimplifiedBankStatementImport/app](https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/SimplifiedBankStatementImport/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
