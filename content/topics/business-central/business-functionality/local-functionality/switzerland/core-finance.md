---
id: topic/business-central/business-functionality/local-functionality/switzerland/core-finance
type: topic
title: Core finance
summary: "Core finance for the Swiss version of Business Central covers Swiss-specific general ledger functions: foreign currency balances on G/L accounts, VAT exchange rate adjustment, balance views in journals, and the G/L setup information report. It answers questions about Swiss ledger setup and VAT currency handling."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:07.647Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: de09a8a038ffcfd945b946442850ccec8f632bb77383a4cd1744d241d0adfae6
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-adjust-exchange-rates
    title: Adjust Exchange Rates in the Swiss Version [CH]
    date: "2026-10-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/balance
    title: General Ledger Balance in the Swiss Version [CH]
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-print-general-ledger-setup-information
    title: Print General Ledger Setup Information in the Swiss Version [CH]
    date: "2026-10-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-general-ledger-accounts
    title: Swiss General Ledger Accounts [CH]
    date: "2026-10-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-view-temporary-balances-in-general-ledger-journals
    title: View Temporary General Journal Balances in Switzerland
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-adjust-exchange-rates
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/balance
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
    - change/bcapps/12754
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

> Core finance for the Swiss version of Business Central covers Swiss-specific general ledger functions: foreign currency balances on G/L accounts, VAT exchange rate adjustment, balance views in journals, and the G/L setup information report. It answers questions about Swiss ledger setup and VAT currency handling.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Switzerland](../switzerland.md) > Core finance · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section collects the Swiss [CH] localization pages for core finance. They deal with general ledger accounts, balances shown during journal entry, VAT exchange rates, and a report that prints setup data.

Swiss G/L accounts can hold foreign currency balances and can be sorted by a text data type, which supports the Kontenrahmen Käfer (KMU) chart. Two pages describe the Balance action and the temporary balance preview in journals. These show posted balances and unposted amounts, so you can see the effect of posting before you post.

For VAT, the exchange rate adjustment page explains how to use official Federal Tax Administration rates when foreign currency sales differ from invoice rates. The G/L Setup Information report helps verify configuration. Start with the Swiss General Ledger Accounts page, then read the others as needed.

## Key points

- Swiss G/L accounts can maintain foreign currency balances, set up through currency code configuration.
- Accounts can be sorted using a text data type for compatibility with Kontenrahmen Käfer (KMU).
- The Balance action in journal lines shows posted balances and unposted amounts, which exclude VAT.
- Balance views can use the Actual Journal option (current batch) or the All Journals option.
- Temporary balance preview shows how posting journal entries would change account balances, including foreign currency balances.
- The Adjust Exchange Rates batch job corrects VAT entries using official Federal Tax Administration rates when foreign currency sales differ from invoice rates.
- Run the exchange rate adjustment batch job before creating VAT statements.
- The G/L Setup Information report shows G/L setup, company data, consolidation, posting groups, posting matrix, and VAT setup, and helps spot data export issues.

## Learn pages

- [Adjust Exchange Rates in the Swiss Version [CH]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-adjust-exchange-rates): Learn how to use the official VAT currency conversion rates set by the Federal Tax Administration for taxable sales in foreign currencies.
- [General Ledger Balance in the Swiss Version [CH]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/balance): Review posted balances and unposted journal amounts on the G/L Account temp. Balance page before posting a general journal in the Swiss version.
  - In the observatory: [Page 39 "General Journal"](../../../../../objects/page/39.md)
- [Print General Ledger Setup Information in the Swiss Version [CH]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-print-general-ledger-setup-information): Run the G/L Setup Information report in Business Central to review and verify the master data you configured before starting daily operations.
- [Swiss General Ledger Accounts [CH]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-general-ledger-accounts): This article explains enhancements to the Swiss General Ledger Accounts and General Journals.
  - In the observatory: [Page 16 "Chart of Accounts"](../../../../../objects/page/16.md)
- [View Temporary General Journal Balances in Switzerland](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-view-temporary-balances-in-general-ledger-journals): Learn how to view temporary balances in general ledger journals that show the impact of a new transaction on general ledger account balances.
  - In the observatory: [Page 39 "General Journal"](../../../../../objects/page/39.md), [Table 81 "Gen. Journal Line"](../../../../../objects/table/81.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10041 [Master]-]G/L Account Sheet with Foreign Currency report (11564) includes LCY-originated entries after enabling G/L currency revaluation feature resulting in mixed-currency totals in the Swiss version. - Copy](../../../../../changes/bcapps/10041.md) (code change): "G/L Account Sheet with Foreign Currency report in Swiss version now correctly excludes local currency entries"
- [#12754 [29.X]-Outgoing Payment Report Employee Payments Missing](../../../../../changes/bcapps/12754.md) (code change): "employee payments missing from the Swiss DTA Payment Journal report"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 1 object with no object page: page/11500.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
