---
id: topic/business-central/analytics-business-intelligence-and-repo/built-in-reports/manufacture
type: topic
title: Manufacture
summary: "Manufacture built-in reports and analysis in Business Central: production reports and analytics, load versus capacity on work and machine centers, and posting capacity outside production orders. It answers questions about analyzing manufacturing activity, spotting bottlenecks, and recording nonproduction time."
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:03.681Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: eb7e4b759944bf95b9bc86be11eb00221b2f8b6cac0e846280b2414ebe80dac7
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/production-how-to-post-capacities
    title: Post capacities
    date: "2026-07-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/production-reports
    title: Production Reports and Analytics
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/production-how-to-view-the-load-on-work-centers
    title: View Load on Work and Machine Centers
    date: "2026-07-15"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/production-how-to-post-capacities
    - https://learn.microsoft.com/dynamics365/business-central/production-reports
    - https://learn.microsoft.com/dynamics365/business-central/production-how-to-view-the-load-on-work-centers
  objects:
    - object/page/5832
    - object/page/99000802
    - object/page/99000820
    - object/page/99000887
    - object/page/99000888
    - object/page/99000889
    - object/page/99000890
    - object/page/99000891
    - object/page/99000892
    - object/page/99000915
    - object/page/99000916
    - object/report/5802
    - object/report/5871
    - object/report/5872
    - object/report/99000753
    - object/report/99000756
    - object/report/99000757
    - object/report/99000758
    - object/report/99000762
    - object/report/99000763
    - object/report/99000767
    - object/report/99000769
    - object/report/99000780
    - object/report/99000783
    - object/report/99000784
    - object/report/99000788
    - object/report/99000791
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
  - Manufacture
toc_file: business-central/TOC.md
parent: topic/business-central/analytics-business-intelligence-and-repo/built-in-reports
children: []
coverage:
  learn: 3
  code: 27
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 5802
  - 5832
  - 5871
  - 5872
  - 99000753
  - 99000756
  - 99000757
  - 99000758
  - 99000762
  - 99000763
  - 99000767
  - 99000769
  - 99000780
  - 99000783
  - 99000784
  - 99000788
  - 99000791
  - 99000802
  - 99000820
  - 99000887
  - 99000888
  - 99000889
  - 99000890
  - 99000891
  - 99000892
  - 99000915
  - 99000916
member_hash: 437a29e64f076281c9cb604b290e091fa51bc4481f514a97635a7303783c6b90
narrative: generated
---

# Manufacture

> Manufacture built-in reports and analysis in Business Central: production reports and analytics, load versus capacity on work and machine centers, and posting capacity outside production orders. It answers questions about analyzing manufacturing activity, spotting bottlenecks, and recording nonproduction time.

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [Built-in reports](../built-in-reports.md) > Manufacture · tier official · system reporting · narrative reviewed by Opus

## Overview

This section covers the reporting and analysis side of manufacturing in Business Central. It has three pages and no subtopics. They cover reviewing production activity, checking whether resources are overloaded, and recording capacity use that falls outside production orders.

Start with Production Reports and Analytics for an overview of the Report Explorer, work center load analysis and item availability. Then go to View Load on Work and Machine Centers to compare load (work assigned from production orders) with capacity (what resources can perform). That page also covers bottlenecks and finite capacity scheduling. Post capacities is a separate task: it records time spent on maintenance or internal work so capacity ledger entries show both production and nonproduction activity.

## Key points

- Production Reports and Analytics lets production professionals analyze current and past manufacturing activity through reports, the Report Explorer, work center load analysis and item availability.
- Load is work assigned to production resources from production orders. Capacity is what those resources can perform.
- Load can be viewed by period, as net change or as balance at date, and a work center task list is available.
- Comparing load with capacity helps identify bottlenecks and scheduling conflicts on capacity constrained resources.
- Finite capacity scheduling is covered on the load and capacity page.
- Capacity journals record time used by work or machine centers outside production orders, such as maintenance or internal work.
- Posting capacity journals creates capacity ledger entries that reflect both production and nonproduction activities.

## Learn pages

- [Post capacities](https://learn.microsoft.com/dynamics365/business-central/production-how-to-post-capacities): Learn how to record time used by work and machine centers for maintenance or other activities outside production orders.
- [Production Reports and Analytics](https://learn.microsoft.com/dynamics365/business-central/production-reports): See which production reports and analytics are available in the standard version of Business Central so that you can keep track of your business.
- [View Load on Work and Machine Centers](https://learn.microsoft.com/dynamics365/business-central/production-how-to-view-the-load-on-work-centers): Learn how to compare resource load and capacity, identify bottlenecks, use finite scheduling, and review the Work Center Task List.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 5832 "Capacity Ledger Entries"](../../../../objects/page/5832.md) · on [Table 5832 "Capacity Ledger Entry"](../../../../objects/table/5832.md)
- [Page 99000802 "Capacity Units of Measure"](../../../../objects/page/99000802.md) · on [Table 99000780 "Capacity Unit of Measure"](../../../../objects/table/99000780.md)
- [Page 99000820 "Prod. Order Capacity Need"](../../../../objects/page/99000820.md) · on [Table 5410 "Prod. Order Capacity Need"](../../../../objects/table/5410.md)
- [Page 99000887 "Work Center Load"](../../../../objects/page/99000887.md) · on [Table 99000754 "Work Center"](../../../../objects/table/99000754.md)
- [Page 99000888 "Work Center Load Lines"](../../../../objects/page/99000888.md) · captioned "Lines" · on [Table 933 "Load Buffer"](../../../../objects/table/933.md)
- [Page 99000889 "Machine Center Load"](../../../../objects/page/99000889.md) · on [Table 99000758 "Machine Center"](../../../../objects/table/99000758.md)
- [Page 99000890 "Machine Center Load Lines"](../../../../objects/page/99000890.md) · captioned "Lines" · on [Table 933 "Load Buffer"](../../../../objects/table/933.md)
- [Page 99000891 "Work Center Group Load"](../../../../objects/page/99000891.md) · on [Table 99000756 "Work Center Group"](../../../../objects/table/99000756.md)
- [Page 99000892 "Work Center Group Load Lines"](../../../../objects/page/99000892.md) · captioned "Lines" · on [Table 933 "Load Buffer"](../../../../objects/table/933.md)
- [Page 99000915 "Work Center Task List"](../../../../objects/page/99000915.md) · on [Table 5409 "Prod. Order Routing Line"](../../../../objects/table/5409.md)
- [Page 99000916 "Machine Center Task List"](../../../../objects/page/99000916.md) · on [Table 5409 "Prod. Order Routing Line"](../../../../objects/table/5409.md)
- [Report 5802 "Inventory Valuation - WIP"](../../../../objects/report/5802.md) · captioned "Production Order - WIP"
- [Report 5871 "Item - Able to Make (Timeline)"](../../../../objects/report/5871.md)
- [Report 5872 "BOM Cost Share Distribution"](../../../../objects/report/5872.md)
- [Report 99000753 "Quantity Explosion of BOM"](../../../../objects/report/99000753.md)
- [Report 99000756 "Detailed Calculation"](../../../../objects/report/99000756.md)
- [Report 99000757 "Where-Used (Top Level)"](../../../../objects/report/99000757.md)
- [Report 99000758 "Compare List"](../../../../objects/report/99000758.md) · captioned "Item BOM Compare List (Obsolete)"
- [Report 99000762 "Prod. Order - Job Card"](../../../../objects/report/99000762.md)
- [Report 99000763 "Prod. Order - List"](../../../../objects/report/99000763.md) · captioned "Production Order - List"
- [Report 99000767 "Prod. Order - Calculation"](../../../../objects/report/99000767.md) · captioned "Prod. Order - Calculation (Obsolete)"
- [Report 99000769 "Output Item Label"](../../../../objects/report/99000769.md) · captioned "Production Output Item Label"
- [Report 99000780 "Capacity Task List"](../../../../objects/report/99000780.md)
- [Report 99000783 "Work Center Load"](../../../../objects/report/99000783.md) · captioned "Work Center Load (obsolete)"
- [Report 99000784 "Machine Center Load"](../../../../objects/report/99000784.md) · captioned "Machine Center Load (obsolete)"
- [Report 99000788 "Prod. Order - Shortage List"](../../../../objects/report/99000788.md)
- [Report 99000791 "Production Order Statistics"](../../../../objects/report/99000791.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
