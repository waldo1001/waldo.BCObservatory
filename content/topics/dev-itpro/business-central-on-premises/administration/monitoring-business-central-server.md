---
id: topic/dev-itpro/business-central-on-premises/administration/monitoring-business-central-server
type: topic
title: Monitoring Business Central server
summary: "Monitoring the Business Central on-premises server: performance counters for client sessions, SQL connections, data caching and scheduled tasks, plus server events written through Event Tracing for Windows. It answers questions about checking server instance health and collecting event or trace data."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:08.228Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: cead5ef9994a2e6426f5a7978543689753fc6658965e942b1fdb7483f7a3fde6
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/performance-counters
    title: Microsoft Dynamics 365 Business Central Performance Counters
    date: "2024-04-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/server-events
    title: Microsoft Dynamics 365 Business Central Server Events
    date: "2024-10-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/server-trace-events
    title: Microsoft Dynamics 365 Business Central Server Trace Events
    date: "2024-10-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-server-events-windows-event-log
    title: Monitoring Business Central Server Events in Event Viewer
    date: "2021-06-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-server-events-with-powershell
    title: Monitoring Business Central Server Events with PowerShell
    date: "2024-10-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-server-events
    title: Monitoring Microsoft Dynamics 365 Business Central Server Events
    date: "2024-04-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/disable-limit-telemetry-events
    title: Turn Off or Limit Telemetry Trace Events
    date: "2024-10-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-use-logman-collect-event-trace-data
    title: Use Logman to Collect Event Trace Data
    date: "2024-10-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-use-performance-monitor-collect-event-trace-data
    title: Use Performance Monitor to Collect Event Trace Data
    date: "2024-10-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-use-perfview-collect-event-trace-data
    title: Use PerfView to Collect Event Trace Data
    date: "2024-10-26"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/performance-counters
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/administration
    - topic/dev-itpro/business-central-on-premises/administration/monitoring-business-central-server/monitoring-server-events-on-premises
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Administration
  - Monitoring Business Central server
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/administration
children:
  - topic/dev-itpro/business-central-on-premises/administration/monitoring-business-central-server/monitoring-server-events-on-premises
coverage:
  learn: 10
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: e36c2039f6d1617fa2641be58b2a47458e8daa23249e6e8518d085d60d45ff74
narrative: generated
---

# Monitoring Business Central server

> Monitoring the Business Central on-premises server: performance counters for client sessions, SQL connections, data caching and scheduled tasks, plus server events written through Event Tracing for Windows. It answers questions about checking server instance health and collecting event or trace data.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Administration](../administration.md) > Monitoring Business Central server · tier official · system administration · narrative reviewed by Opus

## Overview

This section covers two ways to watch a Business Central server instance on-premises. The first is performance counters, which show how the instance behaves: client sessions, SQL connections, data cache efficiency and scheduled task execution. The second is server events, covered in the subtopic on monitoring server events.

The server events subtopic explains the admin, operational and debug events the server writes through Event Tracing for Windows. It describes how to view them in Event Viewer or PowerShell, how to collect trace data with Logman, Performance Monitor or PerfView, and how to limit telemetry traces.

Start with the performance counters page for a quick view of instance health. Move to the server events pages when you need to diagnose specific behavior or collect detailed traces.

## Key points

- Performance counters track client sessions, SQL connections, data cache efficiency and scheduled task execution.
- Counters are used to monitor server instance health and performance.
- The server writes admin, operational and debug events through Event Tracing for Windows.
- Events can be viewed in Event Viewer or PowerShell.
- Trace data can be collected with Logman, Performance Monitor or PerfView.
- Telemetry traces can be limited.
- The server events subtopic has 9 pages.

## Subtopics

- [Monitoring server events on-premises](monitoring-business-central-server/monitoring-server-events-on-premises.md) (9 pages)

## More Learn pages

- [Microsoft Dynamics 365 Business Central Performance Counters](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/performance-counters): Describes the performance counters that are available for monitoring instances.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
