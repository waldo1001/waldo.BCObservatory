---
id: topic/dev-itpro/business-central-on-premises/administration/monitoring-business-central-server/monitoring-server-events-on-premises
type: topic
title: Monitoring server events on-premises
summary: Monitoring Business Central server events on-premises covers the admin, operational and debug events the server writes through Event Tracing for Windows. It answers questions about viewing events in Event Viewer or PowerShell, collecting trace data with Logman, Performance Monitor or PerfView, and limiting telemetry traces.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:55.858Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 02df5a19340f83790215a3de1b94326aef3d9bb4f369f497296a98706425e005
evidence:
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/server-events
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/server-trace-events
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-server-events-windows-event-log
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-server-events-with-powershell
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-server-events
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/disable-limit-telemetry-events
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-use-logman-collect-event-trace-data
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-use-performance-monitor-collect-event-trace-data
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-use-perfview-collect-event-trace-data
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/administration/monitoring-business-central-server
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Administration
  - Monitoring Business Central server
  - Monitoring server events on-premises
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/administration/monitoring-business-central-server
children: []
coverage:
  learn: 9
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: a88594b22037f85d8fdfac07ba98944e6db446e8f23cff5d22127d068bff7819
narrative: generated
---

# Monitoring server events on-premises

> Monitoring Business Central server events on-premises covers the admin, operational and debug events the server writes through Event Tracing for Windows. It answers questions about viewing events in Event Viewer or PowerShell, collecting trace data with Logman, Performance Monitor or PerfView, and limiting telemetry traces.

Path: [Business Central on-premises](../../../business-central-on-premises.md) > [Administration](../../administration.md) > [Monitoring Business Central server](../monitoring-business-central-server.md) > Monitoring server events on-premises · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

Business Central server uses Event Tracing for Windows to record events that help diagnose conditions and troubleshoot performance. Events are grouped into channels (Admin, Operational, Debug) in Windows Event logs. They cover SQL connections, service startup and shutdown, tenant mounting, authentication, certificate monitoring and licensing violations. Trace events add SQL statements, service calls, AL function execution and telemetry.

Start with the overview page and the server events reference to learn the channels and event categories. To read events, use Event Viewer (with filtering, including XML filters) or the Get-WinEvent cmdlet in PowerShell. For deeper analysis, the trace event reference lists the Microsoft-DynamicsNAV-Server and Microsoft-DynamicsNAV-Common providers and their hexadecimal keyword filters. Three tools can collect that data into .etl files: Logman, Performance Monitor (Data Collector Sets) and PerfView.

If telemetry traces are too noisy, a separate page explains how to turn them off or limit them with the Diagnostic Trace Level setting.

## Key points

- Events are grouped into Admin, Operational and Debug channels in Windows Event logs.
- Server events include SQL connection issues, service start and stop, tenant mounting, authentication, certificate monitoring and licensing violations.
- Trace events come from the Microsoft-DynamicsNAV-Server and Microsoft-DynamicsNAV-Common providers and are filtered with hexadecimal keywords.
- Trace events cover SQL statements, service calls, AL function execution, telemetry and session tracking.
- Event Viewer supports event filtering, including XML filtering.
- PowerShell's Get-WinEvent cmdlet reads instance events and trace events from logs and event tracing files.
- Logman, Performance Monitor Data Collector Sets and PerfView each collect trace data into .etl files.
- Set the Diagnostic Trace Level in CustomSettings.config or with Set-NAVServerConfiguration to turn off or limit telemetry traces.

## Learn pages

- [Microsoft Dynamics 365 Business Central Server Events](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/server-events): Learn about Microsoft Dynamics 365 Business Central Server Events. Events have the source BusinessCentralServer.
- [Microsoft Dynamics 365 Business Central Server Trace Events](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/server-trace-events): Learn about Business Central Server Trace Events. This article provides an overview of the trace events that are generated by Business Central server instance.
- [Monitoring Business Central Server Events in Event Viewer](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-server-events-windows-event-log): Learn about using event viewer to monitor Business Central Server instances
- [Monitoring Business Central Server Events with PowerShell](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-server-events-with-powershell): Learn how to use PowerShell to monitor Business Central Server instances
- [Monitoring Microsoft Dynamics 365 Business Central Server Events](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-server-events): Read about how you can monitor events on the server that hosts the Business Central server components for on-premises deployments.
- [Turn Off or Limit Telemetry Trace Events](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/disable-limit-telemetry-events): Get tips for how to configure telemetry traces, depending on what you want to measure.
- [Use Logman to Collect Event Trace Data](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-use-logman-collect-event-trace-data): Get tips for how to use LogMan on telemetry traces.
- [Use Performance Monitor to Collect Event Trace Data](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-use-performance-monitor-collect-event-trace-data): Get tips for how to use Performance Monitor on telemetry traces.
- [Use PerfView to Collect Event Trace Data](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-use-perfview-collect-event-trace-data): Get tips for how to use PerView on telemetry traces.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
