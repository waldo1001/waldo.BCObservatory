---
id: topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/defining-table-structures
type: topic
title: Defining table structures
summary: "Defining table structures in AL covers how to build Business Central tables: the table object, fields, keys, triggers, system fields, table extensions, relationships, tooltips, and optimized text search. It answers questions about syntax, properties, and extensibility of tables."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T21:13:11.962Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: cd7b7b747fb2d49cff1e52338d2f4a5e0515b4fddef4485ece5868b2b043a5ea
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-tooltips
    title: Add Tooltips to Table and Page Fields
    date: "2026-10-06"
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
    - video/TH70oJI4Ae0
  posts:
    - post/aardvarklabs-blog/2827
    - post/aardvarklabs-blog/3983
    - post/duiliotacconi-com/2201
    - post/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-3697577773817687094--e070102696
    - post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-55-captionclass--dc79ed3961
    - post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-78-initvalue-property--a9c6523eb4
  guidelines: []
  changes:
    - change/bcapps/10009
    - change/bcapps/10064
    - change/bcapps/10235
    - change/bcapps/10367
    - change/bcapps/11748
    - change/bcapps/9168
    - change/bcapps/9725
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
  video: 2
  blog: 6
  guideline: 0
bc_forms: []
member_hash: f4fef1b2446c586c258d687af1fd453a03d9d093168b44db9f072869a19e2480
narrative: generated
---

# Defining table structures

> Defining table structures in AL covers how to build Business Central tables: the table object, fields, keys, triggers, system fields, table extensions, relationships, tooltips, and optimized text search. It answers questions about syntax, properties, and extensibility of tables.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Tables and data](../tables-and-data.md) > Defining table structures · tier official · system development · narrative reviewed (checked by Opus)

## Overview

Tables are the fundamental database objects in Business Central. A table has data and a description made up of fields, keys, properties, and triggers. The pages in this section describe each part of that structure, from general concepts to specific properties.

Start with Tables overview for the concepts, then read Table object for syntax, limitations, and extensibility rules. Setting Relationships Between Tables explains the TableRelation property for one-to-many, many-to-many, and one-to-one relations, including conditional relations and filters. Table extension object shows how to add fields, keys, and trigger code without changing the base table.

Smaller pages cover specific topics: system fields that every table gets automatically, tooltips on table and page fields, and the OptimizeForTextSearch property for full-text search on character fields.

## Key points

- Tables consist of table data and a table description with fields, keys, properties, and triggers.
- TableRelation defines one-to-many, many-to-many, and one-to-one relationships, with conditions and table filters, for validation and lookups.
- Table extensions add fields, keys, and trigger code without modifying the base table; the Extensible property controls extensibility.
- Every table gets system fields automatically: SystemId for unique record identification, audit fields (SystemCreatedAt, SystemCreatedBy, SystemModifiedAt, SystemModifiedBy), and SystemRowVersion for synchronization.
- Tooltips set on table fields are inherited by pages starting in 2024 release wave 1, and page fields can override them; CodeCop rule AA0234 applies.
- OptimizeForTextSearch uses full-text search in SQL Server and Azure SQL Database for efficient, case- and accent-insensitive searching on character data.
- The Table object page covers InitValue, OnValidate, and Integer to BigInteger migration, and mentions 2024 release wave 1, 2024 release wave 2, and 2026 release wave 2.

## Learn pages

- [Add Tooltips to Table and Page Fields](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-tooltips): Description of how you use AL to add tooltips to table and page fields so that they're available when users hover over fields in the client.
- [Enable optimized text search on table fields](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-field-text-search): Learn how to allow text search on table fields.
- [Setting Relationships Between Tables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-set-relationships-between-tables): Relationships between tables in relational database design for Business Central.
- [Table extension object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-ext-object): This article describes the table extension object in AL for Business Central.
- [Table object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-object): This article describes the structure, object limits, and extensibility of the table object in AL for Business Central.
- [Table System Fields in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-system-fields): Learn how Business Central adds system fields for record IDs, data auditing, and timestamps to tables, including their behavior and use in AL code.
- [Tables overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-tables-overview): Tables are the objects in which you store and manipulate data, and you create pages and reports to access and view the data in the tables.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10009 Disable low-usage Change Log Entry index](../../../../../changes/bcapps/10009.md) (code change): "The Change Log Entry table's Key4 index on Notification Message Id is disabled to improve write performance"
- [#10064 Add support for “External Document No.” in Subscription Contracts Fixes #8818](../../../../../changes/bcapps/10064.md) (code change): "Added External Document No. field to Subscription Contracts"
- [#10235 [Bug][SubscriptionBilling] Enforce Subscription Line Start Date change rules on all edit paths](../../../../../changes/bcapps/10235.md) (code change): "Subscription Line start date changes are now blocked when billing has occurred"
- [#10367 [Quality Management] Add OptimizeForTextSearch to searchable Qlty. Inspection Header fields (AB#620381)](../../../../../changes/bcapps/10367.md) (code change): "Added OptimizeForTextSearch property to Description and Source Task No. fields"
- [#11748 [Master] - Slice 626292: [Excise Tax][VENDOR] Bonded Locations for Excise Calculations](../../../../../changes/bcapps/11748.md) (code change): "Added bonded-location treatment enum with Suspend/Ignore options for excise calculations"
- [#9168 [QM] Fix internal put-away from Quality Inspection sourcing wrong bin](../../../../../changes/bcapps/9168.md) (code change): "Internal put-away disposition from Quality Inspection now resolves the source bin from actual Bin Content"
- [#9725 [Master] - Slice 626127: [Excise Tax][VENDOR] Multiple Excise Taxes per Item](../../../../../changes/bcapps/9725.md) (code change): "New Item Excise Tax table (7415) stores multiple tax types per item"
- [#125 knowledge(data-modeling): TableRelation delete/rename asymmetry and the xRec before-image contract](../../../../../changes/bcquality/125.md) (code change): "Owning tables must delete dependent records manually since AL lacks cascading delete"
- [#158 3 AL/BC patterns from CURABIS's internal automated-testing training material](../../../../../changes/bcquality/158.md) (code change): "Item Ledger Entry carries the shipment's document number, not the invoice number"
- [#208 2 AL/BC patterns: TableRelation field length and RecordRef.Open Temp parameter](../../../../../changes/bcquality/208.md) (code change): "Table relation fields shorter than their target compile cleanly but fail at runtime"
- [How to Use Concealed Text Fields in Business Central AL](../../../../../posts/aardvarklabs-blog/2827.md) (community post): "Developers set MaskType = Concealed on field definitions in AL code"
- [Business Central v29: SQL Table Extensions Redesign Explained](../../../../../posts/aardvarklabs-blog/3983.md) (community post): "storing all custom fields directly in the primary SQL table"
- [Debunking Myths related to Table Structure in Dynamics 365 Business Central 2026 Wave 2](../../../../../posts/duiliotacconi-com/2201.md) (community post): "Maximum of 1018 regular fields can be defined in a table"
- [How to Migrate Business Central Table Fields from Integer to BigInteger.](../../../../../posts/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-3697577773817687094--e070102696.md) (community post): "Integer to BigInteger field migration is a non-destructive schema change supported"
- [BC Friday Tips #55 CaptionClass](../../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-55-captionclass--dc79ed3961.md) (community post): "CaptionClass property enables dynamic captions that adapt based on data"
- [BC Friday Tips #78 InitValue Property](../../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-78-initvalue-property--a9c6523eb4.md) (community post): "The InitValue property sets a default value for new table fields"
- [Creating TableExtensions in BC29 like we're back in NAV (But Business Central)](../../../../../videos/PZVTTem-nZw.md) (video): "Table extensions; cross-app keys; Load fields for selective field retrieval"
- [Business Central 29: How Many Fields Can a Table Really Have?](../../../../../videos/TH70oJI4Ae0.md) (video): "table extensions; field limits; sql server columns; data types"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
