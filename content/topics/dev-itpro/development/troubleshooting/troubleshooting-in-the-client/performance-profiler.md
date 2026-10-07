---
id: topic/dev-itpro/development/troubleshooting/troubleshooting-in-the-client/performance-profiler
type: topic
title: Performance Profiler
summary: The Performance Profiler section covers recording and analyzing business process performance in the Business Central client, and scheduling profiling for specific users and activity types. It answers questions about finding bottlenecks, reading call trees and time spent, and sharing or downloading profiles.
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:35.052Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 9c8fe19390610c9cf332be597c16c4c240fa04a172b2eb4e5ea71caeee09b77f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/performance-profiler-overview
    title: Performance Profiler overview
    date: "2024-08-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/scheduled-performance-profiler-overview
    title: Scheduled performance profiler overview
    date: "2026-08-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/performance-profiler-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/scheduled-performance-profiler-overview
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/troubleshooting/troubleshooting-in-the-client
  localizations: []
  videos:
    - video/0qt0Zy9ZsRo
    - video/B8PLDeZ73Y4
    - video/ZKq0hc04f-s
  posts:
    - post/duiliotacconi-com/1694
  guidelines: []
  changes:
    - change/bcquality/180
learn_toc_path:
  - Development
  - Troubleshooting
  - Troubleshooting in the client
  - Performance Profiler
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/troubleshooting/troubleshooting-in-the-client
children: []
coverage:
  learn: 2
  code: 0
  video: 3
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 7e97fad0e013b2deeb8cd08b179415b8f5c9bdbfcac1548d59040e65dca47512
narrative: generated
---

# Performance Profiler

> The Performance Profiler section covers recording and analyzing business process performance in the Business Central client, and scheduling profiling for specific users and activity types. It answers questions about finding bottlenecks, reading call trees and time spent, and sharing or downloading profiles.

Path: [Development](../../../development.md) > [Troubleshooting](../../troubleshooting.md) > [Troubleshooting in the client](../troubleshooting-in-the-client.md) > Performance Profiler · tier official · system platform · narrative reviewed by Opus

## Overview

The Performance Profiler helps find why a business process is slow. It records snapshots of all apps and objects involved and shows time spent and call trees, so you can see where the bottleneck is. Profiles can be shared and downloaded.

The scheduled profiler extends this for administrators. Instead of recording by hand, an administrator creates a profiling schedule for specific users and activity types to monitor and diagnose slow processes. Schedules include settings such as sampling frequency and an activity duration threshold. Results can be viewed as analysis with performance metrics or downloaded as profiles.

Start with the Performance Profiler overview to learn the basic recording and analysis flow. Then read the scheduled profiler overview if you need to monitor specific users. The scheduled profiler page references runtime 18 and version 29, both marked as prerelease.

## Key points

- The profiler records snapshots of all apps and objects involved in a business process.
- Results show time spent and call trees to identify performance bottlenecks.
- Profiles can be shared and downloaded.
- Administrators can create profiler schedules for specific users and activity types.
- Schedules support settings for sampling frequency and an activity duration threshold.
- Scheduled profiles can be viewed as analysis with performance metrics or downloaded.
- The scheduled profiler page references runtime 18 and version 29, both marked as prerelease.

## Learn pages

- [Performance Profiler overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/performance-profiler-overview): Describes how to use the Performance Profiler page in Business Central to troubleshoot slow processes.
- [Scheduled performance profiler overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/scheduled-performance-profiler-overview): Describes how to use the Profiler Schedules page in Business Central to troubleshoot slow processes across time.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#180 Normalize recoverable leaf finding ranges](../../../../../changes/bcquality/180.md) (code change): "performance audit findings when the line number falls within the valid range"
- [SQL Statement in AL Profiles](../../../../../posts/duiliotacconi-com/1694.md) (community post): "SQL Statement collection in AL performance profiles available in Business Central 2025 Wave 2"
- [What's New: Analyze Performance Issues with Scheduled Profiles (2024 release wave 2)](../../../../../videos/0qt0Zy9ZsRo.md) (video): "Analyze Performance Issues with Scheduled Profiles performance troubleshooting"
- [Snapshot Debugging vs AL Profiler in Business Central — When to Use Each](../../../../../videos/B8PLDeZ73Y4.md) (video): "Snapshot Debugging vs AL Profiler in Business Central"
- [What's New: Capturing SQL Calls in Performance Profiles (2025 release wave 2)](../../../../../videos/ZKq0hc04f-s.md) (video): "Capturing SQL Calls in Performance Profiles performance profiler"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
