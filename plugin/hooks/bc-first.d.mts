// Types for bc-first.mjs, so the unit tests typecheck (D123).
export declare const REMINDER: string;
export declare const SKIP_HOSTS: string[];
export declare function isBcQuestion(text: unknown): boolean;
export declare function decide(input: unknown, env: Record<string, string | undefined>): string | null;
