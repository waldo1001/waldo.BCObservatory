---
id: topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/defining-table-structures
type: topic
title: Defining table structures
summary: Defining table structures in AL covers table objects, table extensions, system fields, table relationships, field tooltips and optimized text search. It answers questions about how to declare tables, fields, keys and triggers, extend base tables, and set properties such as TableRelation, ToolTip and OptimizeForTextSearch.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:34.553Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: be7250e37ed75f2daf16a3054d139511ca590482945a99aec99be63e21d4ea3d
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-tooltips
    title: Add tooltips to table and page fields
    date: "2024-03-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-field-text-search
    title: Enable optimized text search on table fields
    date: "2024-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-set-relationships-between-tables
    title: Setting Relationships Between Tables
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-ext-object
    title: Table extension object
    date: "2024-04-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-object
    title: Table object
    date: "2026-06-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-system-fields
    title: Table System Fields in Business Central
    date: "2026-08-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-tables-overview
    title: Tables overview
    date: "2024-03-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-tooltips
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-field-text-search
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-set-relationships-between-tables
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-ext-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-system-fields
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-tables-overview
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data
  localizations: []
  videos:
    - video/PZVTTem-nZw
    - video/qABlX4AL3GM
    - video/TH70oJI4Ae0
  posts:
    - post/aardvarklabs-blog/2827
    - post/demiliani-com/12623
    - post/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-5876765753602227342--dc85fd75c1
    - post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-78-initvalue-property--a9c6523eb4
  guidelines: []
  changes:
    - change/bcapps/10009
    - change/bcapps/10031
    - change/bcapps/10064
    - change/bcapps/10235
    - change/bcapps/10367
    - change/bcapps/11002
    - change/bcapps/11748
    - change/bcapps/9168
    - change/bcquality/125
    - change/bcquality/158
    - change/bcquality/208
learn_toc_path:
  - Development
  - Programming in the AL language
  - Tables and data
  - Defining table structures
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/tables-and-data
children: []
coverage:
  learn: 7
  code: 0
  video: 3
  blog: 4
  guideline: 0
bc_forms: []
member_hash: f4fef1b2446c586c258d687af1fd453a03d9d093168b44db9f072869a19e2480
narrative: generated
---

# Defining table structures

> Defining table structures in AL covers table objects, table extensions, system fields, table relationships, field tooltips and optimized text search. It answers questions about how to declare tables, fields, keys and triggers, extend base tables, and set properties such as TableRelation, ToolTip and OptimizeForTextSearch.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Tables and data](../tables-and-data.md) > Defining table structures · tier official · system development · narrative reviewed by Opus

## Overview

Tables are the basic database objects in Business Central. They store data and consist of table data and a table description, which holds fields, keys, properties and triggers. The Tables overview page is the place to start, and the Table object page then gives the syntax, limits and extensibility rules.

The other pages cover specific parts of a table definition. Setting Relationships Between Tables explains the TableRelation property for one-to-many, many-to-many and one-to-one relations. Table System Fields describes the fields every table gets automatically. Table extension object shows how to add fields, keys and trigger code without changing the base table. Two further pages cover field-level settings: tooltips on table fields, and optimized text search through full-text search.

## Key points

- Tables consist of table data and a table description with fields, keys, properties and triggers.
- The TableRelation property defines relationships, using conditional relations and table filters. It supports data validation and lookups.
- Table extensions add fields, keys and trigger code without modifying the base table. The Extensible property controls whether a table can be extended.
- System fields are added to every table automatically: SystemId for unique record identification, the audit fields SystemCreatedAt, SystemCreatedBy, SystemModifiedAt and SystemModifiedBy, and SystemRowVersion as a timestamp for synchronization.
- Tooltips can be defined on table fields starting in 2024 release wave 1. Pages inherit them automatically and can override them. CodeCop warning AA0234 is related.
- The OptimizeForTextSearch property uses full-text search in SQL Server and Azure SQL Database. It gives case-insensitive and accent-insensitive searching on character data.
- The Table object page also covers the InitValue property, the OnValidate trigger and Integer to BigInteger migration.

## Learn pages

- [Add tooltips to table and page fields](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-tooltips): Description of how you use AL to add tooltips to table and page fields so that they're available when users hover over fields in the client.
- [Enable optimized text search on table fields](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-field-text-search): Learn how to allow text search on table fields.
- [Setting Relationships Between Tables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-set-relationships-between-tables): Relationships between tables in relational database design for Business Central.
- [Table extension object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-ext-object): This article describes the table extension object in AL for Business Central.
- [Table object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-object): This article describes the structure, object limits, and extensibility of the table object in AL for Business Central.
- [Table System Fields in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-system-fields): Learn how Business Central adds system fields for record IDs, data auditing, and timestamps to tables, including their behavior and use in AL code.
- [Tables overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-tables-overview): Tables are the objects in which you store and manipulate data, and you create pages and reports to access and view the data in the tables.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10009 Disable low-usage Change Log Entry index](../../../../../changes/bcapps/10009.md) (code change): "The Change Log Entry table's Key4 index on Notification Message Id is disabled to improve write performance"
- [#10031 Add AI-assisted policy evaluation backend to Expense Agent](../../../../../changes/bcapps/10031.md) (code change): "Added Expense Policy Evaluation table to record immutable results"
- [#10064 Add support for “External Document No.” in Subscription Contracts Fixes #8818](../../../../../changes/bcapps/10064.md) (code change): "Added External Document No. field to Subscription Contracts"
- [#10235 [Bug][SubscriptionBilling] Enforce Subscription Line Start Date change rules on all edit paths](../../../../../changes/bcapps/10235.md) (code change): "Subscription Line start date changes are now blocked when billing has occurred"
- [#10367 [Quality Management] Add OptimizeForTextSearch to searchable Qlty. Inspection Header fields (AB#620381)](../../../../../changes/bcapps/10367.md) (code change): "Added OptimizeForTextSearch property to Description and Source Task No. fields"
- [#11002 [Master] - Slice 626305: [Excise Tax][VENDOR] Improving Excise Duty Calculation](../../../../../changes/bcapps/11002.md) (code change): "Added Excise Tax Rate table and list page for flexible duty models"
- [#11748 [Master] - Slice 626292: [Excise Tax][VENDOR] Bonded Locations for Excise Calculations](../../../../../changes/bcapps/11748.md) (code change): "Added bonded-location treatment enum with Suspend/Ignore options for excise calculations"
- [#9168 [QM] Fix internal put-away from Quality Inspection sourcing wrong bin](../../../../../changes/bcapps/9168.md) (code change): "Internal put-away disposition from Quality Inspection now resolves the source bin from actual Bin Content"
- [#125 knowledge(data-modeling): TableRelation delete/rename asymmetry and the xRec before-image contract](../../../../../changes/bcquality/125.md) (code change): "Three data-modeling knowledge articles with executable tests clarify cascading delete behavior"
- [#158 3 AL/BC patterns from CURABIS's internal automated-testing training material](../../../../../changes/bcquality/158.md) (code change): "Item Ledger Entry carries the shipment's document number, not the invoice number"
- [#208 2 AL/BC patterns: TableRelation field length and RecordRef.Open Temp parameter](../../../../../changes/bcquality/208.md) (code change): "Table relation fields shorter than their target compile cleanly but fail at runtime"
- [How to Use Concealed Text Fields in Business Central AL](../../../../../posts/aardvarklabs-blog/2827.md) (community post): "Developers set MaskType = Concealed on field definitions in AL code"
- [Dynamics 365 Business Central: previewing PDF files in web client using the new ExtendedDataType = Document.](../../../../../posts/demiliani-com/12623.md) (community post): "Allows rendering PDF files and images in FactBox elements"
- [Business Central 29.0: Major Change to Table Extensions and SQL Storage.](../../../../../posts/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-5876765753602227342--dc85fd75c1.md) (community post): "Extension fields now physically reside in the same SQL table as base table fields"
- [BC Friday Tips #78 InitValue Property](../../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-78-initvalue-property--a9c6523eb4.md) (community post): "The InitValue property sets a default value for new table fields"
- [Creating TableExtensions in BC29 like we're back in NAV (But Business Central)](../../../../../videos/PZVTTem-nZw.md) (video): "Table extensions; cross-app keys; Load fields for selective field retrieval"
- [Business Central 29.0: Major Change to Table Extensions & SQL.](../../../../../videos/qABlX4AL3GM.md) (video): "table extensions; sql storage model; database performance; indexes; data modeling"
- [Business Central 29: How Many Fields Can a Table Really Have?](../../../../../videos/TH70oJI4Ae0.md) (video): "table extensions; field limits; sql server columns; data types"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
