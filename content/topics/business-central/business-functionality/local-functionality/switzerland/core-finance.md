---
id: topic/business-central/business-functionality/local-functionality/switzerland/core-finance
type: topic
title: Core finance
summary: Core finance for the Swiss version of Business Central covers general ledger balances, Swiss G/L accounts, temporary balance previews in journals, VAT exchange rate adjustment, and the G/L Setup Information report. It answers questions about Swiss-specific general ledger behavior and checks.
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:14.133Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: bdb25425a1e53fdb4861a5febc40a8d611de78cf4dc0b74858e4d2de244b39fd
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/balance
    title: G/L balance [CH]
    date: "2025-04-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-adjust-exchange-rates
    title: How to Adjust Exchange Rates [CH]
    date: "2025-04-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-print-general-ledger-setup-information
    title: Print General Ledger Setup Information [CH]
    date: "2025-04-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-general-ledger-accounts
    title: Swiss General Ledger Accounts [CH]
    date: "2025-04-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-view-temporary-balances-in-general-ledger-journals
    title: View temporary balances in GL journals [CH]
    date: "2025-04-30"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/balance
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-adjust-exchange-rates
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-print-general-ledger-setup-information
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-general-ledger-accounts
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-view-temporary-balances-in-general-ledger-journals
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/switzerland
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10041
learn_toc_path:
  - Business functionality
  - Local functionality
  - Switzerland
  - Core finance
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/switzerland
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 11500
member_hash: ce5de48984464cd684f8f521cbd5e87a9f4789312049b0a6ef7441018afa6d37
narrative: generated
---

# Core finance

> Core finance for the Swiss version of Business Central covers general ledger balances, Swiss G/L accounts, temporary balance previews in journals, VAT exchange rate adjustment, and the G/L Setup Information report. It answers questions about Swiss-specific general ledger behavior and checks.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Switzerland](../switzerland.md) > Core finance · tier official · system finance · narrative reviewed by Opus

## Overview

This section collects the Swiss-specific general ledger functionality. It covers how Swiss G/L accounts work (foreign currency balances on bank accounts, text data types for the standardized Swiss KMU chart of accounts), and how to check balances before and after posting.

Three pages deal with balances: G/L balance shows provisional balances including posted entries and current journal postings, Swiss General Ledger Accounts describes the temporary balance preview, and View temporary balances in GL journals explains how to see the effect of posting, including foreign currency amounts, before you post.

The remaining pages cover setup and VAT: How to Adjust Exchange Rates describes converting VAT currency using official Federal Tax Administration rates, and Print General Ledger Setup Information describes the report used to verify master data. Start with Swiss General Ledger Accounts for the overall picture, then go to the task page you need.

## Key points

- G/L balance shows provisional balances from posted entries plus current journal postings, and helps confirm bank balances after recording transactions.
- Balance views include journal balance, all journals balance and actual journal balance.
- Swiss G/L accounts can hold foreign currency balances on bank accounts, set up through a currency code.
- Accounts use text data types to support the standardized Swiss KMU chart of accounts.
- Temporary balances in G/L journals show how posting would change account balances, including foreign currency amounts, before you post.
- VAT exchange rate adjustment uses official Federal Tax Administration rates for VAT statements.
- The G/L Setup Information report displays G/L setup, posting groups, posting matrix, and VAT setup, and checks number series.
- The setup report also supports GDPdU compliance checks.

## Learn pages

- [G/L balance [CH]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/balance): Learn how to use the General Ledger Acc. Provisional Balance page to view posted ledger entries.
- [How to Adjust Exchange Rates [CH]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-adjust-exchange-rates): Learn how to use the official VAT currency conversion rates set by the Federal Tax Administration for taxable sales in foreign currencies.
- [Print General Ledger Setup Information [CH]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-print-general-ledger-setup-information): Run the G/L Setup Information report in Business Central to review and verify the master data you configured before starting daily operations.
- [Swiss General Ledger Accounts [CH]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-general-ledger-accounts): This article explains enhancements to the Swiss General Ledger Accounts and General Journals.
- [View temporary balances in GL journals [CH]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-view-temporary-balances-in-general-ledger-journals): Learn how to view temporary balances in general ledger journals that show the impact of a new transaction on general ledger account balances.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10041 [Master]-]G/L Account Sheet with Foreign Currency report (11564) includes LCY-originated entries after enabling G/L currency revaluation feature resulting in mixed-currency totals in the Swiss version. - Copy](../../../../../changes/bcapps/10041.md) (code change): "G/L Account Sheet with Foreign Currency report in Swiss version now correctly excludes local currency entries"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 1 object with no object page: page/11500.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
