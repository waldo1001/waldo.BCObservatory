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
  at: "2026-10-24T00:57:10.969Z"
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
  - Server events originate from BusinessCentralServer with unique IDs and task categories for filtering.
  - Event 113: Object Change Listener monitoring SQL database for application object changes after connection.
  - Event 200-202: Generic error, information, and warning IDs for various server instance issues.
  - Event 205-210: Service listening port events for OData, SOAP, Windows client, and Management.
  - Event 223-225: Service initialization, ready status, and shutdown lifecycle events.
  - Event 226-230: Multitenant mounting and dismounting of NAV application and tenant databases.
  - Event 700-706: Telemetry events with severity levels configured by Diagnostic Trace Level setting.
  - Task categories classify events: 8 (connect), 11 (disconnect), 12 (messages), 13 (exceptions).
- [Microsoft Dynamics 365 Business Central Server Trace Events](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/server-trace-events): Learn about Business Central Server Trace Events. This article provides an overview of the trace events that are generated by Business Central server instance.
  - Two event trace providers publish trace events: Microsoft-DynamicsNAV-Server and Microsoft-DynamicsNAV-Common, which is for telemetry only.
  - SQL trace events track SQL statements from the server instance against the database on SQL Server, including session ID, tenant ID, user, and statement.
  - Service call trace events track when clients run Business Central objects: Queries, Reports, and XMLports.
  - AL function tracing tracks execution of AL functions and statements on the server, but only root-level functions are traced by default unless full tracing is configured.
  - Limit: Full AL function tracing must be configured separately; statements and nested AL functions are not traced by default.
  - Telemetry trace events provide data about application operations and usage, including both system and custom events sent via SENDTRACETAG.
  - Some trace events have separate start and stop operations to measure duration; monitoring tools like PerfView automatically calculate duration.
- [Monitoring Business Central Server Events in Event Viewer](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-server-events-windows-event-log): Learn about using event viewer to monitor Business Central Server instances
  - Server events are recorded in Event Viewer under Applications and Services Logs in Microsoft > DynamicsNAV folder.
  - Admin log contains events for end users and IT administrators indicating problems that need action, such as tenant database failing to mount.
  - Operational log provides information about server operations including ordinary events that do not require action but help diagnose problems.
  - Debug log contains SQL tracing, service calls, and AL function call trace events. This log is hidden and disabled by default.
  - Common folder telemetry events with IDs 700-707 are emitted from the application using SENDTRACETAG method calls.
  - Application log is a secondary log containing the same admin and operational events as the DynamicsNAV Server channel.
  - Event Viewer filtering can display only events meeting specific criteria such as a particular server instance, tenant, or time period.
- [Monitoring Business Central Server Events with PowerShell](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-server-events-with-powershell): Learn how to use PowerShell to monitor Business Central Server instances
  - Get-WinEvent PowerShell cmdlet retrieves server events and trace events from event logs and trace files.
  - Events visible in Event Viewer under Applications and Services Logs, Microsoft, DynamicsNAV, Common, Admin.
  - Step: Enable Debug logs by running wevtutil commands to set Microsoft-DynamicsNAV-Server and Common Debug logs.
  - FilterXpath parameter allows filtering events by level, tenant ID, and server instance name.
  - Step: Create PowerShell scripts to extract trace events and analyze execution times by comparing timestamps.
  - Debug logs are disabled by default; Admin and Operational logs enable automatically.
- [Monitoring Microsoft Dynamics 365 Business Central Server Events](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-server-events): Read about how you can monitor events on the server that hosts the Business Central server components for on-premises deployments.
  - Server events recorded in Windows Event logs on server computer in Admin, Operational, and Debug channels
  - Event tracing enables dynamic monitoring without restarting server or Business Central clients
  - Event tracing tracks reports, queries, XMLports, SQL statements, AL functions, telemetry, and log events
  - Industry-standard tools like Windows Performance Monitor and PerfView collect event trace data
  - Event trace data stored in .etl files for offline analysis
- [Turn Off or Limit Telemetry Trace Events](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/disable-limit-telemetry-events): Get tips for how to configure telemetry traces, depending on what you want to measure.
  - Diagnostic Trace Level setting controls lowest severity of telemetry events emitted by Business Central server.
  - Custom telemetry events have IDs 700-712, separate from external proxy logging controlled by ExternalTraceLevel.
  - Step: Configure Diagnostic Trace Level via Microsoft Dynamics 365 Administration tool under General settings.
  - Step: Set trace level to Critical, Error, Warning, Normal (Information), Verbose, or Off.
  - Step: Restart server instance for configuration changes to take effect.
  - Step: Use Set-NAVServerConfiguration PowerShell cmdlet as alternative to admin tool for configuration.
  - SENDTRACETAG method in code generates custom telemetry events that can be filtered or suppressed.
- [Use Logman to Collect Event Trace Data](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-use-logman-collect-event-trace-data): Get tips for how to use LogMan on telemetry traces.
  - Logman collects trace event data from Microsoft-DynamicsNAV-Server and Microsoft-DynamicsNAV-Common providers.
  - Server provider traces SQL, AL function, and session call events; Common provider traces telemetry events.
  - Step: Create trace data collector with logman create trace command specifying provider and output .etl file.
  - Step: Start trace session with logman start command and stop with logman stop command.
  - Collected data stored in event trace log (.etl) file for analysis with industry-standard tools.
  - Tracerpt command converts .etl files to dump, summary, and report files in XML format.
- [Use Performance Monitor to Collect Event Trace Data](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-use-performance-monitor-collect-event-trace-data): Get tips for how to use Performance Monitor on telemetry traces.
  - Step: Start Performance Monitor and create Data Collector Set under User-defined with event trace data type.
  - Step: Add Microsoft-DynamicsNAV-Server provider to collect trace events in Data Collector Set wizard.
  - Step: Filter specific trace events by keyword decimal value in Properties list and Manual field.
  - Keyword values: service calls (4), AL functions (8), sum values for multiple events (e.g., 12 for both).
  - Step: Increase trace buffer settings to minimum 128 size, 50 minimum and maximum buffers to prevent dropped events.
  - Step: Start Data Collector Set to begin recording and stop to end recording trace event data.
  - Collected data stored in .etl file viewable with PerfView or other industry-standard tools.
- [Use PerfView to Collect Event Trace Data](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-use-perfview-collect-event-trace-data): Get tips for how to use PerView on telemetry traces.
  - Step: Download and install PerfView from Microsoft link to collect server event trace data.
  - Step: Open PerfView, select Collect menu, set data file path with .etl extension, enable Advanced options.
  - Step: Type Microsoft-DynamicsNAV-Server in Additional providers field to collect trace events.
  - Filter specific trace events using hexadecimal keyword values: service calls (0x4), AL functions (0x8).
  - Step: Combine keyword values by addition: 0x4 and 0x8 yields 0xC for both event types.
  - Step: Start Collection to begin recording and Stop Collection to end recording trace data.
  - Step: View .etl file by double-clicking file, then Events to display traces, double-click trace for details.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
