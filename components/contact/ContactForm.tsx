"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  errors?: string[];
  message?: string;
};

const divisions = [
  { value: "events", label: "Athah Events", icon: "celebration", desc: "Event Management & Production" },
  { value: "media", label: "Athah Media", icon: "movie", desc: "Photography & Videography" },
  { value: "growth", label: "Athah Growth Studio", icon: "trending_up", desc: "Social Media & Branding" },
  { value: "academy", label: "Athah Arts Academy", icon: "music_note", desc: "Arts Faculty" },
];

const eventTypes = [
  "Wedding", "Corporate Event", "Concert / Festival", "School Event",
  "Commercial Film", "Social Media Campaign", "Arts Faculty Hiring", "Other",
];

const budgets = [
  "Under ₹1 Lakh", "₹1L – ₹5L", "₹5L – ₹15L", "₹15L – ₹50L", "₹50L+",
];

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ status: "idle" });
  const [division, setDivision] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState({ status: "submitting" });

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      division: data.get("division"),
      eventType: data.get("eventType"),
      budget: data.get("budget"),
      message: data.get("message"),
      eventLocation: data.get("eventLocation"),
      eventDate: data.get("eventDate"),
    };

    try {
      const res = await fetch("/api/v1/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok || !result.ok) {
        setFormState({
          status: "error",
          message: result.message || "Something went wrong. Please try again.",
          errors: result.errors,
        });
        return;
      }

      form.reset();
      setDivision("");
      setFormState({ status: "success", message: result.message });
    } catch {
      setFormState({
        status: "error",
        message: "Connection error. Please check your network and try again.",
      });
    }
  }

  const inputCls =
    "w-full bg-surface-container border-b border-outline-variant/30 border-t-0 border-x-0 focus:border-primary-container focus:ring-0 text-on-surface py-md outline-none placeholder:text-on-surface-variant/40 transition-colors";

  return (
    <form className="space-y-lg" onSubmit={handleSubmit} noValidate>
      {/* Step 1: Service */}
      <div className="space-y-md">
        <div className="flex items-center gap-sm">
          <span className="w-8 h-8 bg-primary-container text-on-primary-container flex items-center justify-center text-label-sm font-bold flex-shrink-0">
            1
          </span>
          <h3 className="text-headline-md">What are you looking for?</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          {divisions.map((opt) => (
            <label key={opt.value} className="relative block cursor-pointer group">
              <input
                type="radio"
                name="division"
                value={opt.value}
                required
                className="peer sr-only"
                onChange={() => setDivision(opt.value)}
              />
              <div className="p-md bg-surface-container border border-outline-variant/20 rounded-xl transition-all peer-checked:border-primary-container peer-checked:bg-primary-container/10">
                <span className="material-symbols-outlined text-primary mb-sm block">{opt.icon}</span>
                <span className="block font-bold text-on-surface">{opt.label}</span>
                <span className="block text-on-surface-variant text-label-sm">{opt.desc}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Step 2: Contact Info */}
      <div className="space-y-md">
        <div className="flex items-center gap-sm">
          <span className="w-8 h-8 bg-primary-container text-on-primary-container flex items-center justify-center text-label-sm font-bold flex-shrink-0">
            2
          </span>
          <h3 className="text-headline-md">Your Details</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="space-y-xs">
            <label className="text-label-sm text-on-surface-variant uppercase tracking-widest block">Full Name *</label>
            <input type="text" name="name" required placeholder="Priya Sharma" className={inputCls} />
          </div>
          <div className="space-y-xs">
            <label className="text-label-sm text-on-surface-variant uppercase tracking-widest block">Phone / WhatsApp *</label>
            <input type="tel" name="phone" required placeholder="+91 98765 43210" className={inputCls} />
          </div>
          <div className="space-y-xs md:col-span-2">
            <label className="text-label-sm text-on-surface-variant uppercase tracking-widest block">Email Address *</label>
            <input type="email" name="email" required placeholder="priya@company.com" className={inputCls} />
          </div>
        </div>
      </div>

      {/* Step 3: Project Brief */}
      <div className="space-y-md">
        <div className="flex items-center gap-sm">
          <span className="w-8 h-8 bg-primary-container text-on-primary-container flex items-center justify-center text-label-sm font-bold flex-shrink-0">
            3
          </span>
          <h3 className="text-headline-md">Project Brief</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="space-y-xs">
            <label className="text-label-sm text-on-surface-variant uppercase tracking-widest block">Event / Project Type</label>
            <select name="eventType" className={inputCls}>
              <option value="">Select type...</option>
              {eventTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="space-y-xs">
            <label className="text-label-sm text-on-surface-variant uppercase tracking-widest block">Approximate Budget</label>
            <select name="budget" className={inputCls}>
              <option value="">Select budget range...</option>
              {budgets.map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>

          {/* Event Location */}
          <div className="space-y-xs">
            <label className="text-label-sm text-on-surface-variant uppercase tracking-widest block">
              <span className="material-symbols-outlined text-[14px] align-middle mr-xs">location_on</span>
              Event Location
            </label>
            <input
              type="text"
              name="eventLocation"
              placeholder="e.g. Dehradun, Uttarakhand"
              className={inputCls}
            />
          </div>

          {/* Event Date */}
          <div className="space-y-xs">
            <label className="text-label-sm text-on-surface-variant uppercase tracking-widest block">
              <span className="material-symbols-outlined text-[14px] align-middle mr-xs">calendar_today</span>
              Event Date (Approximate)
            </label>
            <input
              type="date"
              name="eventDate"
              className={inputCls + " [color-scheme:dark]"}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="space-y-xs md:col-span-2">
            <label className="text-label-sm text-on-surface-variant uppercase tracking-widest block">Tell us about your vision *</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Describe your event, project, or brief. The more detail you share, the better we can help..."
              className={inputCls + " resize-none"}
            />
          </div>
        </div>
      </div>

      {/* Error State */}
      {formState.status === "error" && (
        <div className="border border-red-500/40 bg-red-500/10 px-md py-md text-body-md text-red-200 rounded-lg">
          <p className="font-bold mb-xs">{formState.message}</p>
          {formState.errors?.length ? (
            <ul className="list-disc pl-lg space-y-xs text-label-sm">
              {formState.errors.map((e) => <li key={e}>{e}</li>)}
            </ul>
          ) : null}
        </div>
      )}

      {/* Success State */}
      {formState.status === "success" && (
        <div className="border border-primary-container/50 bg-primary-container/10 px-lg py-lg rounded-xl">
          <div className="flex items-start gap-md">
            <span className="material-symbols-outlined text-primary-container text-[32px] flex-shrink-0">check_circle</span>
            <div>
              <p className="text-headline-md mb-xs">Enquiry Received!</p>
              <p className="text-body-md text-on-surface-variant">{formState.message}</p>
              <Link href="/portfolio" className="mt-md inline-flex items-center gap-xs text-primary text-label-sm uppercase tracking-wide">
                View Our Portfolio
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Submit */}
      {formState.status !== "success" && (
        <button
          type="submit"
          disabled={formState.status === "submitting"}
          className="w-full bg-primary-container text-on-primary-container text-headline-md py-lg rounded-xl hover:scale-[0.99] transition-transform flex items-center justify-center gap-md disabled:opacity-60 disabled:hover:scale-100"
        >
          {formState.status === "submitting" ? (
            <>
              <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
              Sending...
            </>
          ) : (
            <>
              Submit Inquiry
              <span className="material-symbols-outlined">arrow_forward</span>
            </>
          )}
        </button>
      )}

      <p className="text-label-sm text-on-surface-variant/50 text-center">
        A dedicated consultant will respond within 24 business hours.
      </p>
    </form>
  );
}
