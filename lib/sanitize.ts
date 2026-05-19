/**
 * lib/sanitize.ts
 * Input sanitization utilities for all user-submitted data.
 * Strips HTML tags, normalises whitespace, limits length.
 */

/** Strip all HTML/XML tags and collapse whitespace */
export function sanitizeString(input: unknown, maxLength = 1000): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/<[^>]*>/g, "")          // strip tags
    .replace(/&[a-z]+;/gi, " ")       // decode common HTML entities to space
    .replace(/[\u0000-\u001F\u007F]/g, "") // strip control characters
    .replace(/\s+/g, " ")             // collapse whitespace
    .trim()
    .slice(0, maxLength);
}

/** Sanitise and validate an email address */
export function sanitizeEmail(input: unknown): string {
  const s = sanitizeString(input, 200).toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) ? s : "";
}

/** Sanitise a phone number — keep digits, +, -, spaces only */
export function sanitizePhone(input: unknown): string {
  if (typeof input !== "string") return "";
  return input.replace(/[^0-9+\-\s()]/g, "").trim().slice(0, 20);
}

/** Sanitise a URL — only allow http/https */
export function sanitizeUrl(input: unknown): string {
  const s = sanitizeString(input, 500);
  try {
    const url = new URL(s);
    if (url.protocol === "http:" || url.protocol === "https:") return s;
  } catch {}
  return "";
}
