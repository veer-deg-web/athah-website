import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-auth";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Admin Login — Athah",
  description: "Secure admin login for career application review.",
  path: "/admin/login",
  index: false,
  follow: false,
});

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const session = await getAdminSession();
  if (session) {
    redirect("/admin");
  }

  const params = await searchParams;

  return (
    <section className="min-h-[70vh] px-margin py-xl flex items-center">
      <div className="max-w-md mx-auto w-full bg-[#121010] border border-[#2A2218] p-xl">
        <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
          Admin Access
        </span>
        <h1 className="text-headline-lg mb-md">Career Dashboard Login</h1>
        <p className="text-body-md text-on-surface-variant mb-lg">
          Sign in to review submitted applications and resumes.
        </p>

        {params.error === "invalid" ? (
          <div className="mb-lg border border-red-500/40 bg-red-500/10 px-md py-md text-body-md text-red-200">
            Invalid email or password.
          </div>
        ) : null}

        <form action="/api/admin/login" method="post" className="space-y-md">
          <label className="space-y-xs block">
            <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">
              Email
            </span>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container"
            />
          </label>
          <label className="space-y-xs block">
            <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">
              Password
            </span>
            <input
              type="password"
              name="password"
              required
              className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container"
            />
          </label>
          <button
            type="submit"
            className="bg-primary-container text-on-primary-container px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all"
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  );
}
