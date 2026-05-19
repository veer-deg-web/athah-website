/**
 * lib/rate-limit.ts
 * In-memory sliding-window rate limiter.
 * Works for single-process deployments (local dev, Docker, single Vercel region).
 * For multi-region serverless, swap the store for a Redis/Upstash adapter.
 */

type WindowEntry = { timestamps: number[] };

// Global map persists across requests within the same process
const store = new Map<string, WindowEntry>();

/** Periodically prune expired entries to avoid memory leaks */
function pruneStore(windowMs: number) {
  const cutoff = Date.now() - windowMs;
  for (const [key, entry] of store.entries()) {
    entry.timestamps = entry.timestamps.filter((t) => t > cutoff);
    if (entry.timestamps.length === 0) store.delete(key);
  }
}

let lastPrune = Date.now();

/**
 * @param identifier  Unique key per client (e.g. IP + route)
 * @param limit       Max allowed requests inside the window
 * @param windowSecs  Rolling window size in seconds
 * @returns { allowed: boolean; remaining: number; resetAt: number }
 */
export function rateLimit(
  identifier: string,
  limit: number = 10,
  windowSecs: number = 60
): { allowed: boolean; remaining: number; resetAt: number } {
  const windowMs = windowSecs * 1000;
  const now = Date.now();

  // Prune at most every 60 s to avoid O(n) cost on every request
  if (now - lastPrune > 60_000) {
    pruneStore(windowMs);
    lastPrune = now;
  }

  const cutoff = now - windowMs;
  const entry = store.get(identifier) ?? { timestamps: [] };

  // Remove timestamps outside the current window
  entry.timestamps = entry.timestamps.filter((t) => t > cutoff);

  const resetAt = entry.timestamps[0]
    ? entry.timestamps[0] + windowMs
    : now + windowMs;

  if (entry.timestamps.length >= limit) {
    store.set(identifier, entry);
    return { allowed: false, remaining: 0, resetAt };
  }

  entry.timestamps.push(now);
  store.set(identifier, entry);

  return {
    allowed: true,
    remaining: limit - entry.timestamps.length,
    resetAt,
  };
}

/** Extract best-effort client IP from a Next.js Request */
export function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}
