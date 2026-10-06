/** Tiny logger. Everything goes to stderr so stdout stays free for machine output. */
type Level = "debug" | "info" | "warn" | "error";
const order: Record<Level, number> = { debug: 10, info: 20, warn: 30, error: 40 };
const min = order[(process.env.BCOBS_LOG_LEVEL as Level) ?? "info"] ?? 20;

export function logger(scope: string) {
  const emit = (level: Level, msg: string, extra?: unknown) => {
    if (order[level] < min) return;
    const ts = new Date().toISOString().slice(11, 19);
    const tail = extra === undefined ? "" : " " + (typeof extra === "string" ? extra : JSON.stringify(extra));
    process.stderr.write(`${ts} ${level.padEnd(5)} [${scope}] ${msg}${tail}\n`);
  };
  return {
    debug: (m: string, e?: unknown) => emit("debug", m, e),
    info: (m: string, e?: unknown) => emit("info", m, e),
    warn: (m: string, e?: unknown) => emit("warn", m, e),
    error: (m: string, e?: unknown) => emit("error", m, e),
  };
}
