---
id: video/mXvKs6X1DNk
type: video
title: "What's new: Cross-environment Master Data Management (2026 release wave 2)"
summary: Cross-environment master data synchronization in Business Central lets subsidiaries in the same tenant but different environments pull master data from a headquarters company. It covers the Entra ID app registration, read permissions per table, the setup wizard, delta sync, and a demo. Feature status is not stated.
tier: official
language: en
tags:
  - master data management
  - cross-environment synchronization
  - multi-tenant
  - entra id
  - oauth 2.0
  - data replication
  - permissions
  - subsidiary data
  - environment boundaries
system: integration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:12:03.732Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 00188ee6e9d1803e89e673d048522febbe545a99f0cd4f8a1f05ab81344e91fe
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=mXvKs6X1DNk&t=55s
    title: "What's new: Cross-environment Master Data Management (2026 release wave 2)"
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 55
    quote: Now, it will be possible for subsidiaries in the same tenant, but different environments to pull data from the HQ company. And it is
  - kind: video
    url: https://www.youtube.com/watch?v=mXvKs6X1DNk&t=105s
    title: "What's new: Cross-environment Master Data Management (2026 release wave 2)"
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 105
    quote: HQ still the read-only and the main source uh of the data. Uh we can see the data will cross the environment boundary and
  - kind: video
    url: https://www.youtube.com/watch?v=mXvKs6X1DNk&t=120s
    title: "What's new: Cross-environment Master Data Management (2026 release wave 2)"
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 120
    quote: all subsidiaries can pull the data, and they're not every time getting all the things, but only the changes. Behind it is a technology
  - kind: video
    url: https://www.youtube.com/watch?v=mXvKs6X1DNk&t=149s
    title: "What's new: Cross-environment Master Data Management (2026 release wave 2)"
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 149
    quote: when you're adding tables, HQ need to give the read permissions. Uh so, the subsidiary will have an access to them.
  - kind: video
    url: https://www.youtube.com/watch?v=mXvKs6X1DNk&t=163s
    title: "What's new: Cross-environment Master Data Management (2026 release wave 2)"
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 163
    quote: pictures and attachments will travel along with the record. The only, for now, limitation there, pictures, uh should be up to 512 KB each,
  - kind: video
    url: https://www.youtube.com/watch?v=mXvKs6X1DNk&t=391s
    title: "What's new: Cross-environment Master Data Management (2026 release wave 2)"
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 391
    quote: it includes read permissions for all the default tables. As Xenia mentioned, if you add more tables than the default ones, then you need
  - kind: video
    url: https://www.youtube.com/watch?v=mXvKs6X1DNk&t=542s
    title: "What's new: Cross-environment Master Data Management (2026 release wave 2)"
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 542
    quote: if I refresh, I can see it got the new value that was changed in the source. So, the rescheduling of synchronization jobs and
links:
  learn: []
  objects:
    - object/table/18
    - object/table/23
    - object/table/5053
    - object/table/348
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: mXvKs6X1DNk
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=mXvKs6X1DNk
published_at: "2026-10-01T00:00:00Z"
duration_s: 569
captions: full
audience:
  - administrator
  - functional consultant
  - partner
  - developer
chapters:
  - t: 0
    title: Introduction and customer problem
  - t: 55
    title: Solution overview and architecture
  - t: 120
    title: Security, permissions and data flow
  - t: 187
    title: Setup and configuration details
  - t: 237
    title: Demo - subsidiary setup and wizard
  - t: 302
    title: Demo - app registration and permissions
  - t: 391
    title: Demo - initial synchronization
  - t: 457
    title: Demo - change propagation and monitoring
features:
  - name: Cross-environment Master Data Synchronization
    status: unclear
    t: 55
    verified: false
    status_source: video
  - name: Entra ID-based Authorization
    status: unclear
    t: 105
    verified: false
    status_source: video
  - name: Read-only HQ Data Source
    status: unclear
    t: 92
    verified: false
    status_source: video
  - name: Delta Synchronization with Web Services
    status: unclear
    t: 120
    verified: false
    status_source: video
  - name: Secure Credential Storage
    status: unclear
    t: 187
    verified: false
    status_source: video
  - name: Flexible App Registration Strategy
    status: unclear
    t: 215
    verified: false
    status_source: video
  - name: Cross-environment Setup Wizard
    status: unclear
    t: 287
    verified: false
    status_source: video
  - name: Picture and Attachment Propagation
    status: unclear
    t: 163
    verified: false
    status_source: video
  - name: Default Tables and Custom Permission Sets
    status: unclear
    t: 391
    verified: false
    status_source: video
  - name: Automatic Synchronization Status Monitoring
    status: unclear
    t: 530
    verified: false
    status_source: video
objects_mentioned:
  - table Customer
  - table Vendor
  - table Business Relation
  - table Dimension
quotes:
  - t: 55
    text: Now, it will be possible for subsidiaries in the same tenant, but different environments to pull data from the HQ company. And it is
    check: exact
  - t: 105
    text: HQ still the read-only and the main source uh of the data. Uh we can see the data will cross the environment boundary and
    check: exact
  - t: 120
    text: all subsidiaries can pull the data, and they're not every time getting all the things, but only the changes. Behind it is a technology
    check: exact
  - t: 149
    text: when you're adding tables, HQ need to give the read permissions. Uh so, the subsidiary will have an access to them.
    check: exact
  - t: 163
    text: pictures and attachments will travel along with the record. The only, for now, limitation there, pictures, uh should be up to 512 KB each,
    check: exact
  - t: 391
    text: it includes read permissions for all the default tables. As Xenia mentioned, if you add more tables than the default ones, then you need
    check: exact
  - t: 542
    text: if I refresh, I can see it got the new value that was changed in the source. So, the rescheduling of synchronization jobs and
    check: exact
---

# What's new: Cross-environment Master Data Management (2026 release wave 2)

> Cross-environment master data synchronization in Business Central lets subsidiaries in the same tenant but different environments pull master data from a headquarters company. It covers the Entra ID app registration, read permissions per table, the setup wizard, delta sync, and a demo. Feature status is not stated.

[Watch on YouTube](https://www.youtube.com/watch?v=mXvKs6X1DNk) · Microsoft Dynamics 365 Business Central (YouTube) · 2026-10-01 · 9:29 · tier official · **unreviewed** (machine-generated)

## Overview

The video covers the 2026 release wave 2 capability for synchronizing master data across environments. Subsidiaries in the same tenant but in different environments can pull data from the headquarters (HQ) company with a built-in solution, without middleware or custom code. HQ stays the read-only main source and controls what subsidiaries can read through permission sets.

It walks through the architecture, security and data flow, and the setup. The demo shows subsidiary setup with the wizard, app registration and permissions, the initial synchronization, and how a change in the source propagates and is monitored in the synchronization log.

## Key points

- All environments must be in the same tenant. The app registration is made in that tenant, and admin consent is required in the source environment.
- Access is secured with Microsoft Entra ID and OAuth 2.0. You can register one app shared by several subsidiaries or one app per subsidiary, depending on audit requirements.
- The subsidiary wizard asks for the HQ environment name, the company name and the OAuth credentials. The credentials are stored securely and users cannot read them.
- HQ is read-only. HQ must approve each subsidiary and grant read permissions per table. A default set of master data tables is covered by the default permission set.
- Tables beyond the default ones, including custom tables, need a new permission set with read permissions created by an admin.
- Only changes (deltas) are synchronized, using data services and web service technology. Synchronization jobs must be scheduled automatically.
- Pictures and attachments travel with the records, limited to 512 KB per picture. The video marks this limit as subject to change. The synchronization log can be viewed per table in the same UI as single-environment synchronization.

## Chapters

- [0:00](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=0s) Introduction and customer problem
- [0:55](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=55s) Solution overview and architecture
- [2:00](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=120s) Security, permissions and data flow
- [3:07](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=187s) Setup and configuration details
- [3:57](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=237s) Demo - subsidiary setup and wizard
- [5:02](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=302s) Demo - app registration and permissions
- [6:31](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=391s) Demo - initial synchronization
- [7:37](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=457s) Demo - change propagation and monitoring

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Cross-environment Master Data Synchronization | status not stated, demoed | [0:55](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=55s) |  |
| Entra ID-based Authorization | status not stated, demoed | [1:45](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=105s) |  |
| Read-only HQ Data Source | status not stated, demoed | [1:32](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=92s) |  |
| Delta Synchronization with Web Services | status not stated | [2:00](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=120s) |  |
| Secure Credential Storage | status not stated, demoed | [3:07](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=187s) |  |
| Flexible App Registration Strategy | status not stated | [3:35](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=215s) |  |
| Cross-environment Setup Wizard | status not stated, demoed | [4:47](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=287s) |  |
| Picture and Attachment Propagation | status not stated | [2:43](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=163s) |  |
| Default Tables and Custom Permission Sets | status not stated, demoed | [6:31](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=391s) |  |
| Automatic Synchronization Status Monitoring | status not stated, demoed | [8:50](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=530s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- [table 18 "Customer"](../objects/table/18.md) at [7:59](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=479s)
- [table 23 "Vendor"](../objects/table/23.md) at [7:59](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=479s)
- [table 5053 "Business Relation"](../objects/table/5053.md) at [7:26](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=446s)
- [table 348 "Dimension"](../objects/table/348.md) at [7:26](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=446s)

## Quotes

- [0:55](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=55s) "Now, it will be possible for subsidiaries in the same tenant, but different environments to pull data from the HQ company. And it is"
- [1:45](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=105s) "HQ still the read-only and the main source uh of the data. Uh we can see the data will cross the environment boundary and"
- [2:00](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=120s) "all subsidiaries can pull the data, and they're not every time getting all the things, but only the changes. Behind it is a technology"
- [2:29](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=149s) "when you're adding tables, HQ need to give the read permissions. Uh so, the subsidiary will have an access to them."
- [2:43](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=163s) "pictures and attachments will travel along with the record. The only, for now, limitation there, pictures, uh should be up to 512 KB each,"
- [6:31](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=391s) "it includes read permissions for all the default tables. As Xenia mentioned, if you add more tables than the default ones, then you need"
- [9:02](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=542s) "if I refresh, I can see it got the new value that was changed in the source. So, the rescheduling of synchronization jobs and"

## Disclaimers in the video

- [2:43](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=163s) subject-to-change: pictures, uh should be up to 512 KB each, no more. So, as you already understand, all the environments should be in the same tenant

Presenters (as heard): Ksenia, George.
