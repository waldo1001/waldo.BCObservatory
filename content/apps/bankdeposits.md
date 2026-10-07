---
id: app/bankdeposits
type: app
title: BankDeposits
summary: "BankDeposits (Microsoft.Bank): 52 objects in BC29-30 (11 codeunits, 10 pages, 8 page extensions, 8 permission set extensions, 4 tables, ...); documented by 2 Learn hubs."
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
  at: "2026-10-07T16:25:37.512Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1972cc9b52fcc5bf1e1ada98d41ca52cd672abb53184c10704386b95c38bfb3f
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/BankDeposits/app
    title: src/Apps/W1/BankDeposits/app (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/1690
    - object/table/1691
    - object/table/1692
    - object/table/1693
    - object/tableextension/1694
    - object/tableextension/1695
    - object/tableextension/1696
    - object/page/1690
    - object/page/1691
    - object/page/1692
    - object/page/1693
    - object/page/1694
    - object/page/1695
    - object/page/1696
    - object/page/1697
    - object/page/1698
    - object/page/1699
    - object/pageextension/1700
    - object/pageextension/1701
    - object/pageextension/1702
    - object/pageextension/1703
    - object/pageextension/1704
    - object/pageextension/1705
    - object/pageextension/1707
    - object/pageextension/1708
    - object/report/1690
    - object/report/1691
    - object/codeunit/1690
    - object/codeunit/1691
    - object/codeunit/1692
    - object/codeunit/1693
    - object/codeunit/1694
    - object/codeunit/1695
    - object/codeunit/1696
    - object/codeunit/1697
    - object/codeunit/1699
    - object/codeunit/1712
    - object/codeunit/1714
    - object/enumextension/1690
    - object/enumextension/1691
    - object/permissionset/1690
    - object/permissionset/1701
    - object/permissionset/1702
    - object/permissionset/1703
    - object/permissionsetextension/1691
    - object/permissionsetextension/1692
    - object/permissionsetextension/1693
    - object/permissionsetextension/1694
    - object/permissionsetextension/1695
    - object/permissionsetextension/1696
    - object/permissionsetextension/1697
    - object/permissionsetextension/1698
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/united-states/banking-and-payments
    - topic/business-central/business-functionality/finance/reconcile-bank-accounts
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: BankDeposits
namespace_root: Microsoft.Bank
present_in:
  - "29"
  - "30"
counts:
  objects: 52
  by_type:
    codeunit: 11
    page: 10
    pageextension: 8
    permissionsetextension: 8
    table: 4
    permissionset: 4
    tableextension: 3
    report: 2
    enumextension: 2
  hubs: 2
  videos: 0
  posts: 0
---

# BankDeposits

> BankDeposits (Microsoft.Bank): 52 objects in BC29-30 (11 codeunits, 10 pages, 8 page extensions, 8 permission set extensions, 4 tables, ...); documented by 2 Learn hubs.

First-party app · folder `src/Apps/W1/BankDeposits/app` · namespace `Microsoft.Bank` · BC29-30 · system finance · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Banking & payments](../topics/business-central/business-functionality/local-functionality/united-states/banking-and-payments.md) (Business functionality > Local functionality > United States): 2 objects
- [Reconcile bank accounts](../topics/business-central/business-functionality/finance/reconcile-bank-accounts.md) (Business functionality > Finance): 2 objects

## Objects

52 objects, by type.

### Tables (4)

| Id | Name | Caption |
|---|---|---|
| 1690 | [Bank Deposit Header](../objects/table/1690.md) |  |
| 1691 | [Posted Bank Deposit Header](../objects/table/1691.md) |  |
| 1692 | [Posted Bank Deposit Line](../objects/table/1692.md) |  |
| 1693 | [Bank Acc. Comment Line](../objects/table/1693.md) | Bank Account Comment Line |

### Table extensions (3)

| Id | Name | Caption |
|---|---|---|
| 1694 | [SalesReceivablesSetupExtension](../objects/tableextension/1694.md) |  |
| 1695 | [SourceCodeSetupExtension](../objects/tableextension/1695.md) |  |
| 1696 | [FinanceCueExt](../objects/tableextension/1696.md) |  |

### Pages (10)

| Id | Name | Caption |
|---|---|---|
| 1690 | [Bank Deposit](../objects/page/1690.md) |  |
| 1691 | [Bank Deposit List](../objects/page/1691.md) |  |
| 1692 | [Bank Deposits](../objects/page/1692.md) |  |
| 1693 | [Bank Deposit Subform](../objects/page/1693.md) | Lines |
| 1694 | [Posted Bank Deposit](../objects/page/1694.md) |  |
| 1695 | [Posted Bank Deposit Lines](../objects/page/1695.md) |  |
| 1696 | [Posted Bank Deposit List](../objects/page/1696.md) | Posted Bank Deposits |
| 1697 | [Posted Bank Deposit Subform](../objects/page/1697.md) |  |
| 1698 | [Bank Acc. Comment List](../objects/page/1698.md) | Bank Account Comment List |
| 1699 | [Bank Acc. Comment Sheet](../objects/page/1699.md) | Bank Account Comment Sheet |

### Page extensions (8)

| Id | Name | Caption |
|---|---|---|
| 1700 | [SalesReceivablesSetupExt](../objects/pageextension/1700.md) | Sales & Receivables Setup |
| 1701 | [SourceCodeSetupExt](../objects/pageextension/1701.md) | Source Code Setup |
| 1702 | [BankAccountCardExt](../objects/pageextension/1702.md) | Bank Account Card |
| 1703 | [BankAccountListExt](../objects/pageextension/1703.md) | Bank Accounts |
| 1704 | [BankAccountLedgerEntriesExt](../objects/pageextension/1704.md) | Bank Account Ledger Entries |
| 1705 | [AccountManagerActivitiesExt](../objects/pageextension/1705.md) | Activities |
| 1707 | [BookkeeperActivitiesExt](../objects/pageextension/1707.md) | Activities |
| 1708 | [Navigate Ext.](../objects/pageextension/1708.md) |  |

### Reports (2)

| Id | Name | Caption |
|---|---|---|
| 1690 | [Bank Deposit](../objects/report/1690.md) |  |
| 1691 | [Bank Deposit Test Report](../objects/report/1691.md) |  |

### Codeunits (11)

| Id | Name | Caption |
|---|---|---|
| 1690 | [Bank Deposit-Post](../objects/codeunit/1690.md) |  |
| 1691 | [Bank Deposit-Post + Print](../objects/codeunit/1691.md) |  |
| 1692 | [Bank Deposit-Post (Yes/No)](../objects/codeunit/1692.md) |  |
| 1693 | [Bank Deposit-Printed](../objects/codeunit/1693.md) |  |
| 1694 | [Posted Bank Deposit-Delete](../objects/codeunit/1694.md) |  |
| 1695 | [Bank Deposit Subscribers](../objects/codeunit/1695.md) |  |
| 1696 | [Entry Application Mgt](../objects/codeunit/1696.md) |  |
| 1697 | [Setup Bank Deposit Reports](../objects/codeunit/1697.md) |  |
| 1699 | [Navigate Bank Deposit Ext.](../objects/codeunit/1699.md) |  |
| 1712 | [Upg. Tag Def. Bank Deposits](../objects/codeunit/1712.md) |  |
| 1714 | [Upgrade Bank Deposits](../objects/codeunit/1714.md) |  |

### Enum extensions (2)

| Id | Name | Caption |
|---|---|---|
| 1690 | [Gen. Journal Template Type Ext](../objects/enumextension/1690.md) |  |
| 1691 | [Report Selection Usage Ext](../objects/enumextension/1691.md) |  |

### Permission sets (4)

| Id | Name | Caption |
|---|---|---|
| 1690 | [Bank Deposits - Objects](../objects/permissionset/1690.md) |  |
| 1701 | [Bank Deposits - Read](../objects/permissionset/1701.md) |  |
| 1702 | [Bank Deposits - View](../objects/permissionset/1702.md) |  |
| 1703 | [Bank Deposits](../objects/permissionset/1703.md) |  |

### Permission set extensions (8)

| Id | Name | Caption |
|---|---|---|
| 1691 | [D365 BASIC ISV - Bank Deposits](../objects/permissionsetextension/1691.md) |  |
| 1692 | [D365 BUS FULL ACCESS - Bank Deposits](../objects/permissionsetextension/1692.md) |  |
| 1693 | [D365 BUS PREMIUM - Bank Deposits](../objects/permissionsetextension/1693.md) |  |
| 1694 | [D365 FULL ACCESS - Bank Deposits](../objects/permissionsetextension/1694.md) |  |
| 1695 | [D365 READ - Bank Deposits](../objects/permissionsetextension/1695.md) |  |
| 1696 | [D365 TEAM MEMBER - Bank Deposits](../objects/permissionsetextension/1696.md) |  |
| 1697 | [INTELLIGENT CLOUD - Bank Deposits](../objects/permissionsetextension/1697.md) |  |
| 1698 | [D365 BASIC - Bank Deposits](../objects/permissionsetextension/1698.md) |  |

Source: [src/Apps/W1/BankDeposits/app](https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/BankDeposits/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
