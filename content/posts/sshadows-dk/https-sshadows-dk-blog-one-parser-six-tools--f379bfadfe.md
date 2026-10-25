---
id: post/sshadows-dk/https-sshadows-dk-blog-one-parser-six-tools--f379bfadfe
type: post
title: One Parser, Six Tools
summary: A tree-sitter-based AL parser enables multiple developer tools including code navigation, structural search, LLM training data extraction, AI-powered code understanding, and editor support. The parser achieves 100% accuracy on 15,358 production files and serves as a foundation for building code analysis and development tools.
tier: community
language: en
tags:
  - al parser
  - code analysis
  - syntax highlighting
  - structural search
  - code navigation
  - editor integration
  - llm training
  - developer tools
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-25T16:50:19.334Z"
  flags: []
generated:
  at: "2026-10-25T16:41:48.094Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 05d125343d29bc43df433244236c601ed7afda0d0bbb1e9dbcb30ece2f4e665a
evidence:
  - kind: blog
    url: https://sshadows.dk/blog/one-parser-six-tools/
    title: One Parser, Six Tools
    date: "2026-03-27"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://sshadows.dk/blog/one-parser-six-tools/
    title: One Parser, Six Tools
    date: "2026-03-27"
    commit: null
    t: null
    quote: tree-sitter-al parses AL, the language behind Business Central. I got it to 100% on 15,358 production files. Zero errors.
  - kind: blog
    url: https://sshadows.dk/blog/one-parser-six-tools/
    title: One Parser, Six Tools
    date: "2026-03-27"
    commit: null
    t: null
    quote: Every tool on this list runs on the same parse tree. I built the parser because no one else had.
  - kind: blog
    url: https://sshadows.dk/blog/one-parser-six-tools/
    title: One Parser, Six Tools
    date: "2026-03-27"
    commit: null
    t: null
    quote: "The parser is MIT-licensed: github.com/SShadowS/tree-sitter-al."
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://sshadows.dk/blog/one-parser-six-tools/
source_id: sshadows-dk
source_name: SShadowS
url: https://sshadows.dk/blog/one-parser-six-tools/
published_at: "2026-03-27T00:00:00.000Z"
author: Torben Leth
full_text: false
words: 775
quotes:
  - text: tree-sitter-al parses AL, the language behind Business Central. I got it to 100% on 15,358 production files. Zero errors.
    why_it_matters: Demonstrates the parser's production-grade reliability and completeness, validating it as a foundation for multiple tools
  - text: Every tool on this list runs on the same parse tree. I built the parser because no one else had.
    why_it_matters: Shows how a single, well-built parser enables multiple downstream applications and tools for AL development
  - text: "The parser is MIT-licensed: github.com/SShadowS/tree-sitter-al."
    why_it_matters: Clarifies the licensing and availability, making it clear the tool is open for community use and extension
code_objects_mentioned: []
systems:
  - development
  - platform
versions_mentioned: []
preview:
  embeddable: false
  frame_url: null
  image: https://sshadows.dk/images/posts/one-parser-six-tools/cover.webp
  image_alt: null
  image_w: null
  image_h: null
  site_name: SShadowS
  favicon: https://sshadows.dk/favicon.svg
  probed_at: "2026-10-25T16:46:42.633Z"
---

# One Parser, Six Tools

[Read the post](https://sshadows.dk/blog/one-parser-six-tools/) · SShadowS (Torben Leth) · 2026-03-27 · 775 words · tier community · reviewed (checked by Opus)

> A tree-sitter-based AL parser enables multiple developer tools including code navigation, structural search, LLM training data extraction, AI-powered code understanding, and editor support. The parser achieves 100% accuracy on 15,358 production files and serves as a foundation for building code analysis and development tools.

## Key points

- tree-sitter-al parses AL with zero errors on all tested production files and is published on crates.io
- The parser powers six tools: GitHub code navigation, ast-grep structural search, al-corpus training data extraction, code-graph-rag knowledge graphs, editor integrations, and an interactive WASM playground
- Editors like Neovim, Helix, and Zed can use the parser's query files for syntax highlighting, scope-aware highlighting, symbol navigation, code folding, and auto-indentation
- ast-grep enables zero-false-positive structural pattern matching across codebases, such as finding all obsolete properties
- The parser is MIT-licensed and available for developers to build custom tools

## Quotes

- "tree-sitter-al parses AL, the language behind Business Central. I got it to 100% on 15,358 production files. Zero errors." (Demonstrates the parser's production-grade reliability and completeness, validating it as a foundation for multiple tools)
- "Every tool on this list runs on the same parse tree. I built the parser because no one else had." (Shows how a single, well-built parser enables multiple downstream applications and tools for AL development)
- "The parser is MIT-licensed: github.com/SShadowS/tree-sitter-al." (Clarifies the licensing and availability, making it clear the tool is open for community use and extension)

## Context

- Features: GitHub code navigation, ast-grep structural search, al-corpus training data extraction, code-graph-rag knowledge graphs, Editor support (Neovim, Helix, Zed), Interactive WASM playground, Symbol navigation, Code folding

Source: SShadowS, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
