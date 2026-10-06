/** JSON Schemas for video fact extraction (Haiku, role `facts`). Shared by the prompts, llm.ts and the tests. */
import { taxonomy } from "../lib/config.js";

const str = { type: "string" };
const num = { type: "number" };
const strArr = { type: "array", items: str };
export const SYSTEM_IDS = taxonomy().systems.map((s) => s.id);
export const OBJECT_TYPES = ["table", "page", "codeunit", "report", "enum", "interface", "xmlport", "query", "permissionset", "api", "other"] as const;
export const STATUSES = ["preview", "ga", "announced", "unclear"] as const;

const chapters = {
  type: "array",
  items: { type: "object", additionalProperties: false, required: ["t_start", "t_end", "title"], properties: { t_start: num, t_end: num, title: str } },
};
const presenters = {
  type: "array",
  items: { type: "object", additionalProperties: false, required: ["name", "confidence"], properties: { name: str, confidence: { type: "string", enum: ["high", "medium", "low"] } } },
};
export const featureSchema = {
  type: "object", additionalProperties: false,
  required: ["name", "description", "status", "status_evidence_t", "status_evidence_quote", "t_start", "t_end", "is_demoed", "caveats", "tags", "system"],
  properties: {
    name: str, description: str, status: { type: "string", enum: [...STATUSES] },
    status_evidence_t: { type: ["number", "null"] }, status_evidence_quote: { type: ["string", "null"] },
    t_start: num, t_end: num, is_demoed: { type: "boolean" }, caveats: strArr, tags: strArr, system: { type: "string", enum: SYSTEM_IDS },
  },
};
const systems = { type: "array", items: { type: "string", enum: SYSTEM_IDS } };

export const windowSchema = {
  type: "object", additionalProperties: false,
  required: ["chapters", "systems", "topics", "features", "objects", "presenters", "quotes", "disclaimers"],
  properties: {
    chapters, systems, topics: strArr, features: { type: "array", items: featureSchema },
    objects: {
      type: "array",
      items: { type: "object", additionalProperties: false, required: ["type", "name", "t"], properties: { type: { type: "string", enum: [...OBJECT_TYPES] }, name: str, t: num } },
    },
    presenters,
    quotes: { type: "array", items: { type: "object", additionalProperties: false, required: ["t", "text", "why_it_matters"], properties: { t: num, text: str, why_it_matters: str } } },
    disclaimers: {
      type: "array",
      items: { type: "object", additionalProperties: false, required: ["t", "kind", "text"], properties: { t: num, kind: { type: "string", enum: ["preview", "subject-to-change", "not-in-this-release", "coming-later", "other"] }, text: str } },
    },
  },
};

export const consolidateSchema = {
  type: "object", additionalProperties: false,
  required: ["chapters", "systems", "topics", "features", "presenters"],
  properties: { chapters, systems, topics: strArr, features: { type: "array", items: featureSchema }, presenters },
};
