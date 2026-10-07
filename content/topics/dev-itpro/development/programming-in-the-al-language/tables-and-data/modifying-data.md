---
id: topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/modifying-data
type: topic
title: Modifying data
summary: "Modifying data in AL covers the methods and table types used to change and work with records: Insert, Modify, Delete and Truncate, temporary tables, virtual tables (Date, Integer), media on records, filter pages, Dataverse table properties, and keeping test data between publishes. It answers how-to and syntax questions for these tasks."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:52.535Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4b423ff024b8529b76d2d4a372d63582ed13eb2453f33511b1d0509163fb1878
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-filter-pages-for-filtering-tables
    title: Creating filter pages for filtering tables
    date: "2023-03-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-date-virtual-table
    title: Date virtual table
    date: "2025-01-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-integrating-dynamics-365-for-sales-extension-development
    title: Enabling Microsoft Dataverse Tables for Extension Development
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-insert-modify-modifyall-delete-and-deleteall-methods
    title: Insert, Modify, ModifyAll, Delete, and DeleteAll Methods
    date: "2025-09-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-integer-virtual-table
    title: Integer virtual table
    date: "2025-01-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-retaining-data-after-publishing
    title: Synchronizing extension test data
    date: "2021-08-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-temporary-tables
    title: Temporary tables
    date: "2026-06-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-virtual-tables
    title: Virtual tables
    date: "2025-01-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-working-with-media-on-records
    title: Working With Media on Records
    date: "2026-09-14"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-filter-pages-for-filtering-tables
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-date-virtual-table
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-integrating-dynamics-365-for-sales-extension-development
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-insert-modify-modifyall-delete-and-deleteall-methods
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-integer-virtual-table
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-retaining-data-after-publishing
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-temporary-tables
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-virtual-tables
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-working-with-media-on-records
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data
  localizations: []
  videos: []
  posts:
    - post/demiliani-com/12267
    - post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-68-always-use-field-validation--cd6c5b4b3a
  guidelines: []
  changes:
    - change/bcapps/10017
    - change/bcapps/10055
    - change/bcapps/10058
    - change/bcapps/10182
    - change/bcapps/10276
    - change/bcapps/10301
    - change/bcapps/10312
    - change/bcapps/10447
    - change/bcapps/10927
    - change/bcapps/10970
    - change/bcapps/11004
    - change/bcapps/11747
    - change/bcapps/11824
    - change/bcapps/9712
    - change/bcapps/9850
    - change/bcquality/133
    - change/bcquality/209
learn_toc_path:
  - Development
  - Programming in the AL language
  - Tables and data
  - Modifying data
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/tables-and-data
children: []
coverage:
  learn: 9
  code: 0
  video: 0
  blog: 2
  guideline: 0
bc_forms: []
member_hash: 1242a3f477119c1dd5c8b2c5e078f53fa12519072c5f7804aaef3189aae77595
narrative: generated
---

# Modifying data

> Modifying data in AL covers the methods and table types used to change and work with records: Insert, Modify, Delete and Truncate, temporary tables, virtual tables (Date, Integer), media on records, filter pages, Dataverse table properties, and keeping test data between publishes. It answers how-to and syntax questions for these tasks.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Tables and data](../tables-and-data.md) > Modifying data · tier official · system development · narrative reviewed by Opus

## Overview

This section groups the AL topics for writing, changing and deleting data, and for the special table types used when processing it. The core page documents the Insert, Modify, ModifyAll, Delete, DeleteAll and Truncate methods, including syntax, return values and when to prefer Truncate over DeleteAll.

Related pages cover table types: temporary tables (in-memory, reduce network and database load) and virtual tables, with the Date and Integer virtual tables as specific examples. Other pages cover Media and MediaSet data types, runtime filter pages built with FilterPageBuilder, properties that enable Microsoft Dataverse tables for extension development, and schemaUpdateMode settings for retaining test data.

Start with the Insert, Modify and Delete methods page for the basics. Then go to temporary or virtual tables as needed, and to the media, filter page, Dataverse or test data pages for those specific tasks.

## Key points

- Insert, Modify, ModifyAll, Delete, DeleteAll and Truncate are the AL methods for maintaining data; Truncate is for high-performance bulk deletion.
- Temporary tables are in-memory and can be set up with the TableType property, temporary record variables, or the SourceTableTemporary page property.
- Virtual tables hold read-only system information computed at runtime and not stored in the database.
- The Date virtual table (ID 2000000007) has Period Type, Period Start, Period End, Period No. and Period Name fields for date ranges.
- The Integer virtual table (ID 2000000026) spans -1,000,000,000 to 1,000,000,000 and is used to control loops in reports.
- Media and MediaSet data types store images and documents in system tables, with better performance and caching than BLOB fields.
- FilterPageBuilder creates runtime filter pages for multiple tables in a modal dialog, using addtable and addrecord.
- schemaUpdateMode in launch.json (Synchronize, Recreate, ForceSync) controls whether test data is kept between publishes.

## Learn pages

- [Creating filter pages for filtering tables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-filter-pages-for-filtering-tables): Using the FilterPageBuilder data type to create a filter page in AL for Business Central.
- [Date virtual table](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-date-virtual-table): The date virtual table in AL for Dynamics 365 Business Central
- [Enabling Microsoft Dataverse Tables for Extension Development](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-integrating-dynamics-365-for-sales-extension-development): This topic explains how to enable Microsoft Dataverse tables for the extension development process.
- [Insert, Modify, ModifyAll, Delete, and DeleteAll Methods](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-insert-modify-modifyall-delete-and-deleteall-methods): Describes how to use the Insert, Modify, ModifyAll, Delete, and DeleteAll methods in Business Central
- [Integer virtual table](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-integer-virtual-table): The integer virtual table in AL for Dynamics 365 Business Central
- [Synchronizing extension test data](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-retaining-data-after-publishing): Retaining table data after publishing an extension
- [Temporary tables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-temporary-tables): Learn about temporary tables in AL for Business Central.
- [Virtual tables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-virtual-tables): Virtual tables are system tables in AL for Dynamics 365 Business Central
- [Working With Media on Records](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-working-with-media-on-records): Learn how to upload media, such as an image, to the database for displaying with records in the client.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10017 [Master] - Bug 644751 Moving an expense report line to another report wrongly reports a duplicate](../../../../../changes/bcapps/10017.md) (code change): "Fixed incorrect duplicate detection when moving an expense report line between open reports"
- [#10055 Fix: migrating a document attachment deletes shared Tenant Media](../../../../../changes/bcapps/10055.md) (code change): "Adds guard to prevent deletion of Tenant Media when other attachments"
- [#10058 [Master]-Withholding Tax Posting generates Unbalanced G/L Entries when Multiple Withholding Tax Rates are used on one Purchase Invoice.](../../../../../changes/bcapps/10058.md) (code change): "withholding tax posting calculation is corrected to prevent unbalanced G/L entries"
- [#10182 [Bug]: [Subscription Billing] Payment discount on contract invoices comes from the customer, not from the contract's payment terms](../../../../../changes/bcapps/10182.md) (code change): "Payment discount percentages on subscription billing invoices now correctly use the contract's payment terms"
- [#10276 [master] Renewal Term field on the Create Contract Renewal Quote page does not accept the entered value such as 12M](../../../../../changes/bcapps/10276.md) (code change): "Prevents overwriting of just-entered values with persistent record data"
- [#10301 [Master]-Bug 646962: Withholding Tax Posting Setup](../../../../../changes/bcapps/10301.md) (code change): "Restricts Calculation Base = Net to employee-only withholding taxes"
- [#10312 Update expense VAT specification source](../../../../../changes/bcapps/10312.md) (code change): "Enforced immutability for API-created VAT specifications to prevent unauthorized modifications"
- [#10447 [Bug][Subscription Billing] Price Update Template filters on Subscription Lines are overwritten by the proposal's own default filters](../../../../../changes/bcapps/10447.md) (code change): "Price Update Template filters on Subscription Lines are now correctly preserved"
- [#10927 [Change Log] Preserve SystemId for unloaded record modifications](../../../../../changes/bcapps/10927.md) (code change): "Change Log Management now preserves the SystemId from persisted records when modifications are recorded"
- [#10970 [Master] -SubBilling BillingLine doesn't consider entries for usage date ranges crossing periods](../../../../../changes/bcapps/10970.md) (code change): "Fixed subscription billing to correctly include usage data entries whose charge periods span"
- [#11004 Fix Expense Report Reimbursement Currency Code](../../../../../changes/bcapps/11004.md) (code change): "Corrected currency code assignment in expense report reimbursement logic"
- [#11747 [master][Subscription Billing] Sales-Explode BOM fails for foreign-currency customers](../../../../../changes/bcapps/11747.md) (code change): "Changed GetDate() to use GetSalesLine() method to leverage cached Sales Line"
- [#11824 [29.x][Subscription Billing] Sales-Explode BOM fails for foreign-currency customers](../../../../../changes/bcapps/11824.md) (code change): "Sales Subscription Line creation now correctly handles cached Sales Line data during BOM explosion"
- [#9712 [master] - Changing the contact of a Customer Subscription Contract doesn't update the email of the contract.](../../../../../changes/bcapps/9712.md) (code change): "Fixed missing email and phone number update when 'Sell-to Contact No.' is validated"
- [#9850 Fix VariantCode lost during Contract Price Update proposal](../../../../../changes/bcapps/9850.md) (code change): "Variant code from subscription header service object is now correctly passed"
- [#133 Add TransferFields SkipFieldsNotMatchingType guidance](../../../../../changes/bcquality/133.md) (code change): "TransferFields only errors on type mismatches within the same extension"
- [#209 3 AL/BC patterns: Insert/Delete trigger defaults on master data and declined Confirm in OnValidate](../../../../../changes/bcquality/209.md) (code change): "Record.Insert() and Delete() skip OnInsert and OnDelete by default"
- [Dynamics 365 Business Central: finally we’ll have TRUNCATE table in SaaS.](../../../../../posts/demiliani-com/12267.md) (community post): "Business Central version 27 introduces the Rec.Truncate AL method to enable efficient bulk deletion"
- [BC Friday Tips #68 Always Use Field Validation](../../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-68-always-use-field-validation--cd6c5b4b3a.md) (community post): "Field validation in Business Central extensions ensures all business logic runs"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
