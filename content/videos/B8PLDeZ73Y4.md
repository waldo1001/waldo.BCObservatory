---
id: video/B8PLDeZ73Y4
type: video
title: Snapshot Debugging vs AL Profiler in Business Central — When to Use Each
summary: "Snapshot debugging versus the AL profiler in Business Central: snapshot debugging is for investigating errors, including in production, and the AL profiler is for finding performance bottlenecks. The video demos both, plus the Performance Profiler and the Scheduled Profiler for other users' sessions."
tier: community
language: en
tags:
  - snapshot debugging
  - al profiler
  - performance profiling
  - bottleneck analysis
  - al cpu profile
  - debugging tools
  - production environment
  - function calls
system: development
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
  input_hash: 78b7f29338df356c9eacdfda9114fbe5ed9f17e6f15a77ac4c890262287101d1
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=20s
    title: Snapshot Debugging vs AL Profiler in Business Central — When to Use Each
    date: "2025-09-15T01:09:20.000Z"
    commit: null
    t: 20
    quote: with snapshot debugging. Um snapshot debugging is based on snapshots and um to uh generate a snapshot uh you need um you need a
  - kind: video
    url: https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=84s
    title: Snapshot Debugging vs AL Profiler in Business Central — When to Use Each
    date: "2025-09-15T01:09:20.000Z"
    commit: null
    t: 84
    quote: you initialize a snapshot debugging with a key F7. Um then um then if you don't have a session ID or a user ID
  - kind: video
    url: https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=112s
    title: Snapshot Debugging vs AL Profiler in Business Central — When to Use Each
    date: "2025-09-15T01:09:20.000Z"
    commit: null
    t: 112
    quote: then you execute the code uh that you want to debug and after you execute the code you uh close the snapshot uh or
  - kind: video
    url: https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=183s
    title: Snapshot Debugging vs AL Profiler in Business Central — When to Use Each
    date: "2025-09-15T01:09:20.000Z"
    commit: null
    t: 183
    quote: You generate the profile file. Uh the profile file is a file that has the extension ALCPU profile.
  - kind: video
    url: https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=386s
    title: Snapshot Debugging vs AL Profiler in Business Central — When to Use Each
    date: "2025-09-15T01:09:20.000Z"
    commit: null
    t: 386
    quote: So snapshot debugging very useful for production environments. start um a snapshot um you run your process
links:
  learn: []
  objects:
    - object/page/22
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: B8PLDeZ73Y4
channel: yt-bcmusings
source_name: Business Central Musings
url: https://www.youtube.com/watch?v=B8PLDeZ73Y4
published_at: "2025-09-15T01:09:20.000Z"
duration_s: 492
captions: derived
audience:
  - developer
  - administrator
  - functional consultant
chapters:
  - t: 0
    title: Introduction
  - t: 10
    title: Snapshot Debugging Explained
  - t: 128
    title: AL Profiling Introduction and Use Cases
  - t: 183
    title: AL CPU Profile File and Navigation
  - t: 276
    title: Performance Profiler Method
  - t: 335
    title: Scheduled Profiler for Other Users
  - t: 367
    title: Comparison and Use Case Summary
  - t: 443
    title: Conclusion
features:
  - name: Snapshot Debugging
    status: unclear
    t: 20
    verified: false
    status_source: video
  - name: AL Profiling
    status: unclear
    t: 139
    verified: false
    status_source: video
  - name: AL CPU Profile File Format
    status: unclear
    t: 183
    verified: false
    status_source: video
  - name: Performance Profiler
    status: unclear
    t: 291
    verified: false
    status_source: video
  - name: Scheduled Profiler
    status: unclear
    t: 356
    verified: false
    status_source: video
objects_mentioned:
  - page Customer List
  - page page extension
quotes:
  - t: 20
    text: with snapshot debugging. Um snapshot debugging is based on snapshots and um to uh generate a snapshot uh you need um you need a
    check: exact
  - t: 84
    text: you initialize a snapshot debugging with a key F7. Um then um then if you don't have a session ID or a user ID
    check: exact
  - t: 112
    text: then you execute the code uh that you want to debug and after you execute the code you uh close the snapshot uh or
    check: exact
  - t: 183
    text: You generate the profile file. Uh the profile file is a file that has the extension ALCPU profile.
    check: exact
  - t: 386
    text: So snapshot debugging very useful for production environments. start um a snapshot um you run your process
    check: exact
---

# Snapshot Debugging vs AL Profiler in Business Central — When to Use Each

> Snapshot debugging versus the AL profiler in Business Central: snapshot debugging is for investigating errors, including in production, and the AL profiler is for finding performance bottlenecks. The video demos both, plus the Performance Profiler and the Scheduled Profiler for other users' sessions.

[Watch on YouTube](https://www.youtube.com/watch?v=B8PLDeZ73Y4) · Business Central Musings · 2025-09-15 · 8:12 · tier community · **unreviewed** (machine-generated)

## Overview

The video compares two developer tools in Business Central. Snapshot debugging captures a session so a developer can set snap points and step through code execution to analyze errors. It is started with F7 and finished with Alt F7, and it needs a configuration entry in launch.json.

The AL profiler targets performance rather than errors. It records function call timings and produces an ALCPU profile file that links back to source code, which is opened in VS Code. The video shows two ways to capture a profile: the Performance Profiler for your own session, and the Scheduled Profiler for another user's session within a set time window. It closes with a summary of when to use each tool.

## Key points

- Snapshot debugging is started with F7 and finished with Alt F7. A configuration entry in launch.json is required.
- If no session ID or user ID is specified, snapshot debugging attaches to the first session that connects.
- The speaker calls snapshot debugging very useful for production environments.
- The AL profiler is for bottlenecks, not for debugging errors. It produces an ALCPU profile file with function call timings and links to the code.
- The profile file must be downloaded and imported into VS Code for analysis.
- The Performance Profiler (Analyze Performance) captures only the current user's session.
- The Scheduled Profiler (Analyze Performance with Scheduled Profiler) profiles another user by username, start time and end time. The profile must be downloaded for analysis.

## Chapters

- [0:00](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=0s) Introduction
- [0:10](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=10s) Snapshot Debugging Explained
- [2:08](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=128s) AL Profiling Introduction and Use Cases
- [3:03](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=183s) AL CPU Profile File and Navigation
- [4:36](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=276s) Performance Profiler Method
- [5:35](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=335s) Scheduled Profiler for Other Users
- [6:07](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=367s) Comparison and Use Case Summary
- [7:23](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=443s) Conclusion

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Snapshot Debugging | status not stated, demoed | [0:20](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=20s) |  |
| AL Profiling | status not stated, demoed | [2:19](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=139s) |  |
| AL CPU Profile File Format | status not stated, demoed | [3:03](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=183s) |  |
| Performance Profiler | status not stated, demoed | [4:51](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=291s) |  |
| Scheduled Profiler | status not stated, demoed | [5:56](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=356s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- [page 22 "Customer List"](../objects/page/22.md) at [3:56](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=236s)
- page "page extension" at [3:56](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=236s)

Not found in BC28-30: page "page extension".

## Quotes

- [0:20](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=20s) "with snapshot debugging. Um snapshot debugging is based on snapshots and um to uh generate a snapshot uh you need um you need a"
- [1:24](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=84s) "you initialize a snapshot debugging with a key F7. Um then um then if you don't have a session ID or a user ID"
- [1:52](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=112s) "then you execute the code uh that you want to debug and after you execute the code you uh close the snapshot uh or"
- [3:03](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=183s) "You generate the profile file. Uh the profile file is a file that has the extension ALCPU profile."
- [6:26](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=386s) "So snapshot debugging very useful for production environments. start um a snapshot um you run your process"

## Disclaimers in the video

- [2:46](https://www.youtube.com/watch?v=B8PLDeZ73Y4&t=166s) other: this is the last uh portion here and it's quite new compared to the previous uh snapshot debugging method
