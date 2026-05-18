"use client";

import { useMemo, useState } from "react";
import { careerOpenings } from "@/components/careers/careers-data";

type SubmissionState = {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
  errors?: string[];
};

const defaultState: SubmissionState = { status: "idle" };

export default function CareerApplicationForm() {
  const [state, setState] = useState<SubmissionState>(defaultState);

  const roleOptions = useMemo(
    () =>
      careerOpenings.flatMap((team) =>
        team.roles.map((role) => ({
          label: `${role.title} — ${team.team}`,
          value: role.title,
        }))
      ),
    []
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "submitting" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/careers/applications", {
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
        message: result.message || "We could not submit your application.",
        errors: result.errors,
      });
      return;
    }

    form.reset();
    setState({
      status: "success",
      message: result.message || "Application submitted successfully.",
    });
  }

  return (
    <form className="space-y-lg" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <label className="space-y-xs">
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">
            Full Name
          </span>
          <input
            name="fullName"
            required
            className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container"
          />
        </label>
        <label className="space-y-xs">
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
        <label className="space-y-xs">
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">
            Phone
          </span>
          <input
            name="phone"
            required
            className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container"
          />
        </label>
        <label className="space-y-xs">
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">
            Division
          </span>
          <select
            name="division"
            required
            className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container"
            defaultValue=""
          >
            <option value="" disabled>
              Select division
            </option>
            <option value="Athah Events">Athah Events</option>
            <option value="Athah Media">Athah Media</option>
            <option value="Athah Growth Studio">Athah Growth Studio</option>
            <option value="Athah Arts Academy">Athah Arts Academy</option>
          </select>
        </label>
        <label className="space-y-xs">
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">
            Role
          </span>
          <select
            name="roleTitle"
            required
            className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container"
            defaultValue=""
          >
            <option value="" disabled>
              Select role
            </option>
            {roleOptions.map((role) => (
              <option key={role.label} value={role.value}>
                {role.label}
              </option>
            ))}
            <option value="General Application">General Application</option>
          </select>
        </label>
        <label className="space-y-xs">
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">
            Engagement Type
          </span>
          <select
            name="roleType"
            required
            className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container"
            defaultValue=""
          >
            <option value="" disabled>
              Select type
            </option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Freelance">Freelance</option>
            <option value="Internship">Internship</option>
          </select>
        </label>
        <label className="space-y-xs">
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">
            Current Location
          </span>
          <input
            name="location"
            required
            className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container"
          />
        </label>
        <label className="space-y-xs">
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">
            Experience
          </span>
          <input
            name="experience"
            placeholder="2 years, fresher, freelance projects..."
            className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container"
          />
        </label>
        <label className="space-y-xs md:col-span-2">
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">
            Portfolio / LinkedIn URL
          </span>
          <input
            type="url"
            name="portfolioUrl"
            placeholder="https://"
            className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container"
          />
        </label>
        <label className="space-y-xs md:col-span-2">
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">
            Cover Note
          </span>
          <textarea
            name="coverLetter"
            required
            rows={6}
            className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container"
          />
        </label>
        <label className="space-y-xs md:col-span-2">
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">
            Resume
          </span>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none file:mr-md file:border-0 file:bg-primary-container file:px-md file:py-sm file:text-label-sm file:uppercase file:tracking-widest file:text-on-primary-container"
          />
          <p className="text-label-sm text-on-surface-variant/70">
            PDF or Word file, up to 5MB.
          </p>
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

      <button
        type="submit"
        disabled={state.status === "submitting"}
        className="bg-primary-container text-on-primary-container px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all disabled:opacity-60 disabled:hover:scale-100"
      >
        {state.status === "submitting" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
