---
id: topic/business-central/analytics-business-intelligence-and-repo/built-in-reports/assembly-management
type: topic
title: Assembly management
summary: Assembly management in Business Central covers built-in assembly reports and analytics, and how to work with assembly BOMs. It answers questions about viewing current and past assembly activity, and about defining, editing and costing parent items built from components and resources.
tier: official
language: en
system: assembly
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:25.920Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 16f37169c21b53dd22e66681c96371601f3de9c8e87258bdb1a12b7f5e1f326f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/assembly-reports
    title: Assembly Reports and Analytics in Business Central
    date: "2021-06-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/assembly-how-work-assembly-boms
    title: Work with assembly BOMs
    date: "2024-06-13"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/assembly-reports
    - https://learn.microsoft.com/dynamics365/business-central/assembly-how-work-assembly-boms
  objects:
    - object/page/36
    - object/page/900
    - object/page/901
    - object/page/902
    - object/page/903
    - object/page/904
    - object/page/905
    - object/page/907
    - object/page/910
    - object/page/914
    - object/page/915
    - object/page/916
    - object/page/920
    - object/page/921
    - object/page/922
    - object/page/923
    - object/page/930
    - object/page/931
    - object/page/932
    - object/page/940
    - object/page/941
    - object/page/942
    - object/page/5870
    - object/page/5872
    - object/page/5874
    - object/report/801
    - object/report/809
    - object/report/810
    - object/report/811
    - object/report/812
    - object/report/915
    - object/report/5871
    - object/report/5872
  features: []
  topics:
    - topic/business-central/analytics-business-intelligence-and-repo/built-in-reports
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Analytics, business intelligence, and reporting
  - Built-in reports
  - Assembly management
toc_file: business-central/TOC.md
parent: topic/business-central/analytics-business-intelligence-and-repo/built-in-reports
children: []
coverage:
  learn: 2
  code: 33
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 36
  - 801
  - 809
  - 810
  - 811
  - 812
  - 900
  - 901
  - 902
  - 903
  - 904
  - 905
  - 907
  - 910
  - 914
  - 915
  - 916
  - 920
  - 921
  - 922
  - 923
  - 930
  - 931
  - 932
  - 940
  - 941
  - 942
  - 5870
  - 5871
  - 5872
  - 5874
member_hash: b2625c6724cba7a852b4085f11321bec076458124e9143d73357d06be41f216e
narrative: generated
---

# Assembly management

> Assembly management in Business Central covers built-in assembly reports and analytics, and how to work with assembly BOMs. It answers questions about viewing current and past assembly activity, and about defining, editing and costing parent items built from components and resources.

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [Built-in reports](../built-in-reports.md) > Assembly management · tier official · system assembly · narrative reviewed (checked by Opus)

## Overview

This section sits under built-in reports and has two pages. One describes assembly reports and analytics, which give insights and statistics about current and past assembly activities for production and business professionals. The other explains assembly BOMs, which define the structure of a parent item assembled from components and resources.

Start with the assembly BOM page if you need to set up or maintain the structure of assembled items, including multi-level BOMs and cost calculation. Use the reports and analytics page when you want to review assembly activity and item availability.

## Key points

- Assembly reports and analytics give insights and statistics on current and past assembly activities.
- The reports page touches on item availability and assembly BOMs as part of assembly reporting.
- Assembly BOMs define a parent item made from components and resources.
- Multi-level BOMs are supported.
- Assembly BOMs support standard cost calculation.
- The BOM page covers creating and editing BOMs and managing components.
- Where-used tracking shows where a component is used.

## Learn pages

- [Assembly Reports and Analytics in Business Central](https://learn.microsoft.com/dynamics365/business-central/assembly-reports): See which assembly reports and analytics are available in the standard version of Business Central so that you can keep track of your business.
- [Work with assembly BOMs](https://learn.microsoft.com/dynamics365/business-central/assembly-how-work-assembly-boms): You create an assembly BOM to specify the components required to put together the item that the BOM represents.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 36 "Assembly BOM"](../../../../objects/page/36.md) · on [Table 90 "BOM Component"](../../../../objects/table/90.md)
- [Page 900 "Assembly Order"](../../../../objects/page/900.md) · on [Table 900 "Assembly Header"](../../../../objects/table/900.md)
- [Page 901 "Assembly Order Subform"](../../../../objects/page/901.md) · captioned "Lines" · on [Table 901 "Assembly Line"](../../../../objects/table/901.md)
- [Page 902 "Assembly Orders"](../../../../objects/page/902.md) · on [Table 900 "Assembly Header"](../../../../objects/table/900.md)
- [Page 903 "Assembly Lines"](../../../../objects/page/903.md) · on [Table 901 "Assembly Line"](../../../../objects/table/901.md)
- [Page 904 "Assembly List"](../../../../objects/page/904.md) · on [Table 900 "Assembly Header"](../../../../objects/table/900.md)
- [Page 905 "Assembly Setup"](../../../../objects/page/905.md) · on [Table 905 "Assembly Setup"](../../../../objects/table/905.md)
- [Page 907 "Assembly Comment Sheet"](../../../../objects/page/907.md) · on [Table 906 "Assembly Comment Line"](../../../../objects/table/906.md)
- [Page 910 "Assembly Item - Details"](../../../../objects/page/910.md) · on [Table 27 "Item"](../../../../objects/table/27.md)
- [Page 914 "Assemble-to-Order Lines"](../../../../objects/page/914.md) · on [Table 901 "Assembly Line"](../../../../objects/table/901.md)
- [Page 915 "Asm.-to-Order Whse. Shpt. Line"](../../../../objects/page/915.md) · on [Table 7321 "Warehouse Shipment Line"](../../../../objects/table/7321.md)
- [Page 916 "Assembly Order Statistics"](../../../../objects/page/916.md) · on [Table 900 "Assembly Header"](../../../../objects/table/900.md)
- [Page 920 "Posted Assembly Order"](../../../../objects/page/920.md) · on [Table 910 "Posted Assembly Header"](../../../../objects/table/910.md)
- [Page 921 "Posted Assembly Order Subform"](../../../../objects/page/921.md) · captioned "Lines" · on [Table 911 "Posted Assembly Line"](../../../../objects/table/911.md)
- [Page 922 "Posted Assembly Orders"](../../../../objects/page/922.md) · on [Table 910 "Posted Assembly Header"](../../../../objects/table/910.md)
- [Page 923 "Posted Asm. Order Statistics"](../../../../objects/page/923.md) · on [Table 910 "Posted Assembly Header"](../../../../objects/table/910.md)
- [Page 930 "Assembly Quote"](../../../../objects/page/930.md) · on [Table 900 "Assembly Header"](../../../../objects/table/900.md)
- [Page 931 "Assembly Quote Subform"](../../../../objects/page/931.md) · captioned "Lines" · on [Table 901 "Assembly Line"](../../../../objects/table/901.md)
- [Page 932 "Assembly Quotes"](../../../../objects/page/932.md) · on [Table 900 "Assembly Header"](../../../../objects/table/900.md)
- [Page 940 "Blanket Assembly Order"](../../../../objects/page/940.md) · on [Table 900 "Assembly Header"](../../../../objects/table/900.md)
- [Page 941 "Blanket Assembly Order Subform"](../../../../objects/page/941.md) · captioned "Lines" · on [Table 901 "Assembly Line"](../../../../objects/table/901.md)
- [Page 942 "Blanket Assembly Orders"](../../../../objects/page/942.md) · on [Table 900 "Assembly Header"](../../../../objects/table/900.md)
- [Page 5870 "BOM Structure"](../../../../objects/page/5870.md) · on [Table 5870 "BOM Buffer"](../../../../objects/table/5870.md)
- [Page 5872 "BOM Cost Shares"](../../../../objects/page/5872.md) · on [Table 5870 "BOM Buffer"](../../../../objects/table/5870.md)
- [Page 5874 "BOM Warning Log"](../../../../objects/page/5874.md) · on [Table 5874 "BOM Warning Log"](../../../../objects/table/5874.md)
- [Report 801 "Assembly BOMs"](../../../../objects/report/801.md) · captioned "BOMs"
- [Report 809 "Where-Used List"](../../../../objects/report/809.md)
- [Report 810 "Assembly BOM - Raw Materials"](../../../../objects/report/810.md) · captioned "BOM - Raw Materials"
- [Report 811 "Assembly BOM - Subassemblies"](../../../../objects/report/811.md) · captioned "BOM - Sub-Assemblies"
- [Report 812 "Assembly BOM - End Items"](../../../../objects/report/812.md)
- [Report 915 "Assemble to Order - Sales"](../../../../objects/report/915.md)
- [Report 5871 "Item - Able to Make (Timeline)"](../../../../objects/report/5871.md)
- [Report 5872 "BOM Cost Share Distribution"](../../../../objects/report/5872.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
