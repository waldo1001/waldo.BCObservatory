---
id: video/aXM5Kuo3DHM
type: video
title: FTP, FTPS, SFTP, What's the difference, and what about AL and Business Central
summary: SFTP client in the Business Central system application, shown in a demo app, and how FTP, FTPS and SFTP differ. It covers SSH port 22, password and private key login, fingerprint verification, and the client codeunit methods, which remove the need for an Azure function proxy.
tier: community
language: en
tags:
  - sftp
  - ftps
  - ftp
  - file transfer
  - ssh
  - encryption
  - al development
  - business central api
  - azure functions
  - fingerprint verification
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-11-11T00:18:36.770Z"
  flags: []
generated:
  at: "2026-11-11T00:18:36.848Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 26787949dedad818c2b05afa50fa0a74adc55cbaf49d62ebff892e11ab08fe75
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=68s
    title: FTP, FTPS, SFTP, What's the difference, and what about AL and Business Central
    date: "2026-11-09T11:00:23.000Z"
    commit: null
    t: 68
    quote: classic FTP came about in '71. Um and it runs on port 21.
  - kind: video
    url: https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=222s
    title: FTP, FTPS, SFTP, What's the difference, and what about AL and Business Central
    date: "2026-11-09T11:00:23.000Z"
    commit: null
    t: 222
    quote: One was FTPS, which was just FTP, but you had a a TLS-based encryption on top of it, just like ...
  - kind: video
    url: https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=291s
    title: FTP, FTPS, SFTP, What's the difference, and what about AL and Business Central
    date: "2026-11-09T11:00:23.000Z"
    commit: null
    t: 291
    quote: encrypted version of the old one sftp is the secure file transfer protocol but inside ssh
  - kind: video
    url: https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=355s
    title: FTP, FTPS, SFTP, What's the difference, and what about AL and Business Central
    date: "2026-11-09T11:00:23.000Z"
    commit: null
    t: 355
    quote: we can see now that we actually have in the system application, now we have an SFTP client.
  - kind: video
    url: https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=376s
    title: FTP, FTPS, SFTP, What's the difference, and what about AL and Business Central
    date: "2026-11-09T11:00:23.000Z"
    commit: null
    t: 376
    quote: and with this, we don't have to go to uh to Azure functions. We don't have to do all of that.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: aXM5Kuo3DHM
channel: yt-hougaard
source_name: Erik Hougaard
url: https://www.youtube.com/watch?v=aXM5Kuo3DHM
published_at: "2026-11-09T11:00:23.000Z"
duration_s: 806
captions: derived
audience:
  - developer
  - functional consultant
  - administrator
chapters:
  - t: 0
    title: Introduction to file transfer protocols
  - t: 42
    title: FTP protocol history and basics
  - t: 68
    title: FTP active and passive modes
  - t: 196
    title: FTPS and SFTP encryption approaches
  - t: 280
    title: SFTP adoption and Business Central cloud solutions
  - t: 342
    title: SFTP client demo in Business Central
  - t: 492
    title: SFTP code unit methods and initialization
  - t: 610
    title: File upload workflow and SFTP operations
  - t: 683
    title: Implementation details and closing remarks
features:
  - name: SFTP client in Business Central
    status: unclear
    t: 330
    verified: false
    status_source: video
  - name: SFTP code unit methods
    status: unclear
    t: 517
    verified: false
    status_source: video
  - name: SSH fingerprint verification
    status: unclear
    t: 445
    verified: false
    status_source: video
  - name: Private key authentication for SFTP
    status: unclear
    t: 409
    verified: false
    status_source: video
  - name: SFTP operation response structure
    status: unclear
    t: 598
    verified: false
    status_source: video
objects_mentioned:
  - codeunit SFTP code client code unit
  - codeunit Azure blob storage code units
quotes:
  - t: 68
    text: classic FTP came about in '71. Um and it runs on port 21.
    check: exact
  - t: 222
    text: One was FTPS, which was just FTP, but you had a a TLS-based encryption on top of it, just like ...
    check: exact
  - t: 291
    text: encrypted version of the old one sftp is the secure file transfer protocol but inside ssh
    check: fuzzy
  - t: 355
    text: we can see now that we actually have in the system application, now we have an SFTP client.
    check: exact
  - t: 376
    text: and with this, we don't have to go to uh to Azure functions. We don't have to do all of that.
    check: exact
---

# FTP, FTPS, SFTP, What's the difference, and what about AL and Business Central

> SFTP client in the Business Central system application, shown in a demo app, and how FTP, FTPS and SFTP differ. It covers SSH port 22, password and private key login, fingerprint verification, and the client codeunit methods, which remove the need for an Azure function proxy.

[Watch on YouTube](https://www.youtube.com/watch?v=aXM5Kuo3DHM) · Erik Hougaard · 2026-11-09 · 13:26 · tier community · reviewed (checked by Opus)

## Overview

Erik Hougaard first explains the file transfer protocols. Classic FTP dates from 1971 and runs on port 21, with active and passive modes. FTPS adds TLS encryption on top of FTP. SFTP is a different protocol that runs inside SSH.

He then shows an SFTP client codeunit in Business Central's system application using a small demo app. The client can transfer files directly, without an Azure function as a proxy. The video walks through the codeunit methods, fingerprint verification during SSH negotiation, and a file upload workflow.

## Key points

- Classic FTP came about in 1971 and runs on port 21. It is unencrypted and originally used separate control and data connections (active mode, later passive mode).
- FTPS is FTP with TLS encryption on top. SFTP is the secure file transfer protocol running inside SSH on port 22. They are two completely different protocols.
- Many banks use SFTP. In the cloud this used to need an Azure function acting as an SFTP proxy, but the Business Central system application now includes an SFTP client codeunit usable directly from AL.
- The demo connects on port 22 with a host name, username and password. Private key authentication is also supported and is common for bank uploads.
- Fingerprint verification is part of SSH connection negotiation and lets the client confirm the remote server is the one expected.
- The codeunit methods include add fingerprint, initialize, list files, get file as stream, file exist, delete file, disconnect, put file, set working directory, is connected and create directory.
- Initialize returns an SFTP operation response, similar in concept to the Azure blob storage codeunits. Put means upload and get means download, following FTP vocabulary.

## Chapters

- [0:00](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=0s) Introduction to file transfer protocols
- [0:42](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=42s) FTP protocol history and basics
- [1:08](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=68s) FTP active and passive modes
- [3:16](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=196s) FTPS and SFTP encryption approaches
- [4:40](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=280s) SFTP adoption and Business Central cloud solutions
- [5:42](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=342s) SFTP client demo in Business Central
- [8:12](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=492s) SFTP code unit methods and initialization
- [10:10](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=610s) File upload workflow and SFTP operations
- [11:23](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=683s) Implementation details and closing remarks

## Features

| Feature | Status | At |
|---|---|---|
| SFTP client in Business Central | status not stated, demoed | [5:30](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=330s) |
| SFTP code unit methods | status not stated, demoed | [8:37](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=517s) |
| SSH fingerprint verification | status not stated, demoed | [7:25](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=445s) |
| Private key authentication for SFTP | status not stated | [6:49](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=409s) |
| SFTP operation response structure | status not stated | [9:58](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=598s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- codeunit "SFTP code client code unit" at [8:37](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=517s)
- codeunit "Azure blob storage code units" at [10:10](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=610s)

Not found in BC28-30: codeunit "SFTP code client code unit", codeunit "Azure blob storage code units".

## Quotes

- [1:08](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=68s) "classic FTP came about in '71. Um and it runs on port 21."
- [3:42](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=222s) "One was FTPS, which was just FTP, but you had a a TLS-based encryption on top of it, just like ..."
- [4:51](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=291s) "encrypted version of the old one sftp is the secure file transfer protocol but inside ssh"
- [5:55](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=355s) "we can see now that we actually have in the system application, now we have an SFTP client."
- [6:16](https://www.youtube.com/watch?v=aXM5Kuo3DHM&t=376s) "and with this, we don't have to go to uh to Azure functions. We don't have to do all of that."

Presenters (as heard): Eric.
