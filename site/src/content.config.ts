// Generated knowledge pages from ../content (the pipeline writes them; the site never edits them).
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const videos = defineCollection({
  // ids are case-sensitive YouTube ids (some start with "-"): keep the file name, never slugify
  loader: glob({ pattern: "*.md", base: "../content/videos", generateId: ({ entry }) => entry.replace(/\.md$/, "") }),
});

const topics = defineCollection({
  // nested ids mirror the Learn TOC path: business-central/business-functionality/finance
  loader: glob({ pattern: "**/*.md", base: "../content/topics", generateId: ({ entry }) => entry.replace(/\.md$/, "") }),
});

const features = defineCollection({
  loader: glob({ pattern: "*.md", base: "../content/features", generateId: ({ entry }) => entry.replace(/\.md$/, "") }),
});

const objects = defineCollection({
  // ids are <type>/<id or name slug>: table/18, interface/i-x
  loader: glob({ pattern: "**/*.md", base: "../content/objects", generateId: ({ entry }) => entry.replace(/\.md$/, "") }),
});

const localizations = defineCollection({
  loader: glob({ pattern: "*.md", base: "../content/localizations", generateId: ({ entry }) => entry.replace(/\.md$/, "") }),
});

export const collections = { videos, topics, features, objects, localizations };
