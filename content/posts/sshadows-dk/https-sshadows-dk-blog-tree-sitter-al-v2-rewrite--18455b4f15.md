---
id: post/sshadows-dk/https-sshadows-dk-blog-tree-sitter-al-v2-rewrite--18455b4f15
type: post
title: I Rewrote My Tree-Sitter Grammar From Scratch. It Got 10x Smaller.
summary: A complete rewrite of the tree-sitter-al grammar reduced parser.c from 106 MB to 10.6 MB and simplified the grammar from 8,500 to 3,100 lines while achieving 100% parse success on 15,358 production files. The new design replaced 291 property rules with an external scanner and single generic property rule, enabling keyword visibility for queries and syntax highlighting.
tier: community
language: en
tags:
  - al parser
  - tree-sitter
  - grammar
  - code analysis
  - syntax highlighting
  - language server
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-25T16:42:05.947Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: c7600830cac97fffa09b79002836ecc744e9e499a959aac0abe6d3e88656fb75
evidence:
  - kind: blog
    url: https://sshadows.dk/blog/tree-sitter-al-v2-rewrite/
    title: I Rewrote My Tree-Sitter Grammar From Scratch. It Got 10x Smaller.
    date: "2026-03-24"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://sshadows.dk/blog/tree-sitter-al-v2-rewrite/
    title: I Rewrote My Tree-Sitter Grammar From Scratch. It Got 10x Smaller.
    date: "2026-03-24"
    commit: null
    t: null
    quote: It's the compiler's job to validate property values, not the parser's.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://sshadows.dk/blog/tree-sitter-al-v2-rewrite/
source_id: sshadows-dk
source_name: SShadowS
url: https://sshadows.dk/blog/tree-sitter-al-v2-rewrite/
published_at: "2026-03-24T00:00:00.000Z"
author: Torben Leth
full_text: false
words: 1194
quotes:
  - text: It's the compiler's job to validate property values, not the parser's.
    why_it_matters: Key architectural insight that led to replacing 291 validation rules with a single generic rule
code_objects_mentioned: []
systems:
  - development
  - platform
versions_mentioned: []
---

# I Rewrote My Tree-Sitter Grammar From Scratch. It Got 10x Smaller.

[Read the post](https://sshadows.dk/blog/tree-sitter-al-v2-rewrite/) · SShadowS (Torben Leth) · 2026-03-24 · 1194 words · tier community · **unreviewed** (model text not yet checked)

> A complete rewrite of the tree-sitter-al grammar reduced parser.c from 106 MB to 10.6 MB and simplified the grammar from 8,500 to 3,100 lines while achieving 100% parse success on 15,358 production files. The new design replaced 291 property rules with an external scanner and single generic property rule, enabling keyword visibility for queries and syntax highlighting.

## Key points

- Parser file reduced from 106 MB (unpushable to GitHub) to 10.6 MB through architectural redesign
- Grammar simplified from 8,500 lines to 3,100 lines and symbol count cut from 2,249 to ~740
- Replaced 291 individual property rules with one generic rule plus external scanner for lookahead
- Achieved 100% parse success rate on all 15,358 production AL files after fixing seven edge cases
- All 82 keywords now visible to tree-sitter queries for syntax highlighting and code navigation

## Quotes

- "It's the compiler's job to validate property values, not the parser's." (Key architectural insight that led to replacing 291 validation rules with a single generic rule)

## Context

- Features: tree-sitter grammar for AL, external scanner for lookahead, generic property parsing, keyword visibility in queries, syntax highlighting queries, code navigation, scope analysis, indentation and folding

Source: SShadowS, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
