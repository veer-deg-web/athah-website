"use client";

import { useState } from "react";

type SubmissionState = {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
  errors?: string[];
};

export default function ClientFeedbackForm() {
  const [state, setState] = useState<SubmissionState>({ status: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "submitting" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const response = await fetch("/api/testimonials", {
      method: "POST",
      body: formData,
    });
    const result = (await response.json()) as {
      ok: boolean;
      message?: string;
      errors?: string[];
    };

    if (!response.ok || !result.ok) {
      setState({
        status: "error",
        message: result.message || "We could not submit your feedback.",
        errors: result.errors,
      });
      return;
    }

    form.reset();
    setState({
      status: "success",
      message: result.message || "Feedback sent successfully.",
    });
  }

  return (
    <form className="space-y-md" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <label className="space-y-xs">
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">Name</span>
          <input name="name" required className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container" />
        </label>
        <label className="space-y-xs">
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">Email</span>
          <input type="email" name="email" required className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container" />
        </label>
        <label className="space-y-xs">
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">Role</span>
          <input name="role" required className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container" />
        </label>
        <label className="space-y-xs">
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">Organization</span>
          <input name="organization" required className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container" />
        </label>
        <label className="space-y-xs">
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">Phone</span>
          <input name="phone" required className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container" />
        </label>
        <label className="space-y-xs">
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">Feedback Type</span>
          <select name="type" defaultValue="School Partner" className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container">
            <option>School Partner</option>
            <option>Institution Partner</option>
            <option>Brand Partner</option>
            <option>Client Feedback</option>
          </select>
        </label>
        <label className="space-y-xs md:col-span-2">
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">Your Feedback</span>
          <textarea name="quote" required rows={5} className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container" />
        </label>
      </div>

      {state.status === "error" ? (
        <div className="border border-red-500/40 bg-red-500/10 px-md py-md text-body-md text-red-200">
          <p>{state.message}</p>
          {state.errors?.length ? (
            <ul className="mt-sm list-disc pl-lg space-y-xs">
              {state.errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      {state.status === "success" ? (
        <div className="border border-primary-container/40 bg-primary-container/10 px-md py-md text-body-md text-on-surface">
          {state.message}
        </div>
      ) : null}

      <button type="submit" disabled={state.status === "submitting"} className="bg-primary-container text-on-primary-container px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all disabled:opacity-60 disabled:hover:scale-100">
        {state.status === "submitting" ? "Sending..." : "Send Feedback"}
      </button>
    </form>
  );
}
