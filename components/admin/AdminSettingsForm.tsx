"use client";

import { useState, useEffect } from "react";

export default function AdminSettingsForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "saving" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/v1/admin/settings")
      .then((r) => r.json())
      .then((data) => {
        if (data.ok) {
          setEmail(data.data.admin_notify_email || "");
        }
        setStatus("idle");
      })
      .catch(() => setStatus("idle"));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");
    setMessage("");

    const res = await fetch("/api/v1/admin/settings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ admin_notify_email: email }),
    });
    const data = await res.json();

    if (res.ok && data.ok) {
      setStatus("success");
      setMessage("Settings saved. Future enquiry emails will go to this address.");
    } else {
      setStatus("error");
      setMessage(data.message || "Failed to save settings.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-md max-w-lg">
      <label className="space-y-xs block">
        <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">
          Admin Notification Email
        </span>
        <p className="text-body-md text-on-surface-variant/60">
          All enquiry form submissions will be sent to this email address. Leave blank to use the default configured in <code className="text-primary-container">.env.local</code>.
        </p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="athaheventsddn@gmail.com"
          disabled={status === "loading" || status === "saving"}
          className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container disabled:opacity-50"
        />
      </label>

      {status === "success" && (
        <div className="border border-primary-container/40 bg-primary-container/10 px-md py-sm text-body-md text-on-surface">
          ✓ {message}
        </div>
      )}
      {status === "error" && (
        <div className="border border-red-500/40 bg-red-500/10 px-md py-sm text-body-md text-red-200">
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading" || status === "saving"}
        className="bg-primary-container text-on-primary-container px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "saving" ? "Saving..." : "Save Settings"}
      </button>
    </form>
  );
}
