---
id: topic/dev-itpro/business-central-on-premises/administration/monitoring-business-central-server
type: topic
title: Monitoring Business Central server
summary: Monitoring Business Central server on-premises covers performance counters for server instance health and server events (admin, operational, debug, trace). It answers questions about what to measure, where to view events, and how to collect trace data.
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T01:01:32.224Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8c4e60b2448bdb833c34e76ca9424529ef528a9b9336598c053d430e4871ad3a
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
    date: "2026-11-17"
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

> Monitoring Business Central server on-premises covers performance counters for server instance health and server events (admin, operational, debug, trace). It answers questions about what to measure, where to view events, and how to collect trace data.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Administration](../administration.md) > Monitoring Business Central server · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section is for administrators of an on-premises Business Central server who need to check how an instance is behaving. It has two parts: performance counters and server event monitoring.

The performance counters page describes counters for client sessions, SQL connections, data cache efficiency and scheduled task execution. Use these to watch the general health and performance of a server instance.

The subtopic on monitoring server events covers admin, operational, debug and trace events. It explains how to view them in Event Viewer or PowerShell, how to collect .etl trace data with Logman, Performance Monitor or PerfView, and how to limit telemetry trace events. Start with the performance counters for a quick health check. Move to the event pages when you need to diagnose a specific problem.

## Key points

- Performance counters track client sessions, SQL connections, data caching and scheduled tasks.
- Counters are meant for monitoring server instance health and performance.
- Server events fall into admin, operational, debug and trace categories.
- Events can be viewed in Event Viewer or with PowerShell.
- Trace data in .etl format can be collected with Logman, Performance Monitor or PerfView.
- Telemetry trace events can be limited.
- The server events subtopic has 9 pages.

## Subtopics

- [Monitoring server events on-premises](monitoring-business-central-server/monitoring-server-events-on-premises.md) (9 pages)

## More Learn pages

- [Microsoft Dynamics 365 Business Central Performance Counters](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/performance-counters): Describes the performance counters that are available for monitoring instances.
  - Performance counters track client sessions, SQL connections, data caching, and scheduled tasks on Business Central server instances.
  - Active session counters measure connections from clients, NAS, and web services; active child sessions are connections created by background tasks.
  - SQL connection counters include mounted tenants, open connections, and throttled connections to SQL Server databases.
  - Heartbeat time measures the duration of writes to system tables, indicating network latency between server and database.
  - Caching counters track hit rates and total requests for calculated fields, commands, primary keys, and result sets.
  - Task scheduler counters monitor running tasks, pending tasks, errors per second, and average task execution time in ticks.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
