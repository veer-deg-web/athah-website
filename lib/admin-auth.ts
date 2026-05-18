import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "athah_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

function getSecret() {
  return process.env.ATHAH_ADMIN_SECRET || "athah-local-admin-secret";
}

function getAdminEmail() {
  return process.env.ATHAH_ADMIN_EMAIL || "admin@athah.in";
}

function getAdminPassword() {
  return process.env.ATHAH_ADMIN_PASSWORD || "ChangeThisAdminPassword123!";
}

function createSignature(value: string) {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("hex");
}

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return crypto.timingSafeEqual(left, right);
}

export function isValidAdminCredentials(email: string, password: string) {
  return safeEqual(email, getAdminEmail()) && safeEqual(password, getAdminPassword());
}

export async function setAdminSession(email: string) {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = `${email}.${expiresAt}`;
  const signature = createSignature(payload);
  const store = await cookies();
  store.set(COOKIE_NAME, `${payload}.${signature}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });
}

export async function clearAdminSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function getAdminSession() {
  const store = await cookies();
  const raw = store.get(COOKIE_NAME)?.value;
  if (!raw) return null;

  const [email, expiresAt, signature] = raw.split(".");
  if (!email || !expiresAt || !signature) return null;

  const payload = `${email}.${expiresAt}`;
  if (!safeEqual(createSignature(payload), signature)) return null;
  if (Number(expiresAt) < Math.floor(Date.now() / 1000)) return null;
  if (!safeEqual(email, getAdminEmail())) return null;

  return { email };
}

export async function requireAdminSession() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  return session;
}
