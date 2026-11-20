---
id: topic/dev-itpro/security-privacy-and-compliance/service-overview
type: topic
title: Service overview
summary: Service overview for Business Central online covers the multitenant cloud architecture, service operations, and scalability. It answers questions about availability, backups and disaster recovery, update schedules, incident management, service level objectives, and how the service scales.
tier: official
language: en
system: service
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
  input_hash: 91c0868fa071d05669a1e665d123d905e11cbd18e68a61a8839fce0bcd2f9a13
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-operations
    title: Service operations
    date: "2024-02-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-overview
    title: Service overview for Business Central online
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-scalability
    title: Service scalability for Business Central online
    date: "2024-02-22"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-operations
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-scalability
  objects: []
  features: []
  topics:
    - topic/dev-itpro/security-privacy-and-compliance
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Security, privacy, and compliance
  - Service overview
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/security-privacy-and-compliance
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 04826df2491b8ebd7d03c4d5bdc2c4230b00760520596e05ce5be83f1102b397
narrative: generated
---

# Service overview

> Service overview for Business Central online covers the multitenant cloud architecture, service operations, and scalability. It answers questions about availability, backups and disaster recovery, update schedules, incident management, service level objectives, and how the service scales.

Path: [Security, privacy, and compliance](../security-privacy-and-compliance.md) > Service overview · tier official · system service · narrative **unreviewed** (model text not yet checked)

## Overview

This section describes how Business Central online runs as a cloud service. It has three pages: a general service overview, a page on service operations, and a page on scalability.

The service overview is the best starting point. It explains the multitenant architecture, global availability, security and compliance foundations, and business continuity with automated and geo-redundant backups. It also describes the release wave schedule.

The service operations page covers how reliability is kept up: quality gates, service monitoring, live site incident handling with automated resolution, BCDR processes, and post-mortems and telemetry analysis. The scalability page covers elasticity and autoscaling, with figures on weekly load and execution on adequately resourced nodes.

## Key points

- Business Central online uses a multitenant cloud architecture with global availability.
- Business continuity relies on automated backups, geo-redundant backups, and availability zones.
- Major updates come in April and October, and minor updates come monthly.
- Service operations use quality gates, deployment rings, service level indicators and objectives, and a live site incident process with automated resolution.
- Reliability improves through post-mortems and telemetry analysis.
- The service supports over 2B API calls and 1B UI interactions weekly.
- 99.81% of executions run on adequately resourced nodes.
- There are no fixed limits on users or database size, and web service rate limiting applies.

## Learn pages

- [Service operations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-operations): Learn about the operations done to keep Business Central optimized and reliable.
- [Service overview for Business Central online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-overview): Find links to information about the underlying service's maintenance schedule, and the systems that make Business Central online a reliable platform for your business.
- [Service scalability for Business Central online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-scalability): Learn about Business Central's online ability to provide resource elasticity through real-time, data-driven autoscaling and dynamic load distribution to support these needs.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
