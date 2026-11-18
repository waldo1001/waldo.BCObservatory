---
id: topic/business-central/business-functionality/assembly-management/assembly-analytics
type: topic
title: Assembly analytics
summary: Assembly analytics covers the reports in Business Central that analyze assembly activity and assembly BOMs. It answers questions about BOM structure, where components are used, cost distribution, component availability over time, and assemble-to-order sales.
tier: official
language: en
system: assembly
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-18T01:00:22.250Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5f61efbb71e01ed480465df82a6b3f31ef274e547c0cf78bf9eafe76ddd68313
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-915
    title: Assemble to Order - Sales (report)
    date: "2026-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-812
    title: Assembly BOM - End Items (report)
    date: "2026-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-811
    title: Assembly BOM - Sub-Assemblies (Report)
    date: "2026-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-801
    title: Assembly BOMs Report in Business Central
    date: "2026-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/assembly-reports
    title: Assembly Reports and Analytics in Business Central
    date: "2021-06-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-810
    title: BOM - Raw Materials Report in Business Central
    date: "2026-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-5872
    title: BOM Cost Share Distribution (report)
    date: "2026-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-5871
    title: Item - Able to Make (Timeline) (report)
    date: "2026-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-809
    title: Where-Used List Report in Business Central
    date: "2026-11-13"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-915
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-812
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-811
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-801
    - https://learn.microsoft.com/dynamics365/business-central/assembly-reports
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-810
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-5872
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-5871
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-809
  objects:
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
    - topic/business-central/business-functionality/assembly-management
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Assembly management
  - Assembly analytics
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/assembly-management
children: []
coverage:
  learn: 9
  code: 29
  video: 0
  blog: 0
  guideline: 0
bc_forms:
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
  - 5871
  - 5872
member_hash: 5da4afc5701a12d6696e1f7e1c2dfd24a47d055977d077ccfd1717b3ff6c85dc
narrative: generated
---

# Assembly analytics

> Assembly analytics covers the reports in Business Central that analyze assembly activity and assembly BOMs. It answers questions about BOM structure, where components are used, cost distribution, component availability over time, and assemble-to-order sales.

Path: [Business functionality](../../business-functionality.md) > [Assembly management](../assembly-management.md) > Assembly analytics · tier official · system assembly · narrative **unreviewed** (model text not yet checked)

## Overview

Assembly analytics is a set of reports for production and business professionals who want insight into current and past assembly activity. An overview page introduces assembly reporting and analytics, and each of the other pages describes one report.

The reports fall into a few groups. BOM structure reports are Assembly BOMs, Assembly BOM - End Items, BOM - Sub-Assemblies, BOM - Raw Materials and Where-Used List. They show how items relate as parents, components and sub-assemblies. Cost and sales reports are BOM Cost Share Distribution and Assemble to Order - Sales. Availability is covered by Item - Able to Make (Timeline).

Start with the overview page, then pick the report that matches your question: structure, cost, sales, or whether components are available to meet a sales order date.

## Key points

- Assembly BOMs report lists assembly BOMs with components, quantities and units of measure.
- Assembly BOM - End Items lists items not used as components in any assembly BOM, with filters for assembly BOM and replenishment system.
- BOM - Sub-Assemblies lists items that have assembly BOMs and are also components in other assembly BOMs, with unit of measure, inventory, unit costs and alternative items.
- BOM - Raw Materials lists items without assembly BOMs, showing inventory levels, units of measure, vendors and lead times.
- Where-Used List shows which assembly BOMs contain selected items as components.
- BOM Cost Share Distribution shows how an item's total cost is spread across BOM components and labor, including direct and indirect costs and manufacturing overhead.
- Item - Able to Make (Timeline) tracks BOM component availability over time to check whether sales orders can be fulfilled by given dates.
- Assemble to Order - Sales (report 915) shows sales of components sold in assemble-to-order assemblies and as separate items, with an optional Show Assembly Details setting and profit margin.

## Learn pages

- [Assemble to Order - Sales (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-915): Analyze quantities, costs, sales, and profit for assembly components. Compare assemble-to-order component sales with sales directly from inventory.
- [Assembly BOM - End Items (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-812): Find items that aren't components in any assembly bill of materials. Filter the Assembly BOM - End Items report to focus on the items you need.
- [Assembly BOM - Sub-Assemblies (Report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-811): Review items that have an assembly bill of materials and are components in another assembly. Check inventory, unit costs, and alternative item numbers.
- [Assembly BOMs Report in Business Central](https://learn.microsoft.com/dynamics365/business-central/reports/report-801): Review assembly bills of materials and their components. Check component quantities, units of measure, and whether components have an assembly BOM.
  - In the observatory: [Table 90 "BOM Component"](../../../../objects/table/90.md)
- [Assembly Reports and Analytics in Business Central](https://learn.microsoft.com/dynamics365/business-central/assembly-reports): See which assembly reports and analytics are available in the standard version of Business Central so that you can keep track of your business.
- [BOM - Raw Materials Report in Business Central](https://learn.microsoft.com/dynamics365/business-central/reports/report-810): Review items without an assembly bill of materials. Check their inventory, base units of measure, vendor numbers, and lead time calculations.
- [BOM Cost Share Distribution (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-5872): Review how material, capacity, subcontracting, and overhead costs contribute to BOM costs. Compare single-level or rolled-up cost shares and details.
- [Item - Able to Make (Timeline) (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-5871): Review projected item availability over time, including quantities that can be assembled or produced. Set the starting date, interval, and number of periods.
- [Where-Used List Report in Business Central](https://learn.microsoft.com/dynamics365/business-central/reports/report-809): Find the assembly bills of materials that contain selected items. Review the parent items and component quantities before replacing a component.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

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
- [Report 801 "Assembly BOMs"](../../../../objects/report/801.md) · captioned "BOMs"
- [Report 809 "Where-Used List"](../../../../objects/report/809.md)
- [Report 810 "Assembly BOM - Raw Materials"](../../../../objects/report/810.md) · captioned "BOM - Raw Materials"
- [Report 811 "Assembly BOM - Subassemblies"](../../../../objects/report/811.md) · captioned "BOM - Sub-Assemblies"
- [Report 812 "Assembly BOM - End Items"](../../../../objects/report/812.md)
- [Report 915 "Assemble to Order - Sales"](../../../../objects/report/915.md)
- [Report 5871 "Item - Able to Make (Timeline)"](../../../../objects/report/5871.md)
- [Report 5872 "BOM Cost Share Distribution"](../../../../objects/report/5872.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
