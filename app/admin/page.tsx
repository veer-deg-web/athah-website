import type { Metadata } from "next";
import { requireAdminSession } from "@/lib/admin-auth";
import { listCareerApplications } from "@/lib/careers";
import { createPageMetadata } from "@/lib/seo";
import { listFeedbackSubmissions } from "@/lib/testimonials";

export const metadata: Metadata = createPageMetadata({
  title: "Admin Dashboard — Athah Careers",
  description: "Internal dashboard for Athah career applications.",
  path: "/admin",
  index: false,
  follow: false,
});

export default async function AdminDashboardPage() {
  const session = await requireAdminSession();
  const applications = await listCareerApplications();
  const feedback = await listFeedbackSubmissions();

  return (
    <section className="px-margin py-xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-lg mb-xl">
          <div>
            <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
              Admin Dashboard
            </span>
            <h1 className="text-headline-lg mb-sm">Admin Dashboard</h1>
            <p className="text-body-md text-on-surface-variant">
              Signed in as {session.email}. Review incoming applications, resumes, and testimonial approvals.
            </p>
          </div>
          <form action="/api/admin/logout" method="post">
            <button
              type="submit"
              className="border border-outline-variant/25 px-lg py-md text-label-sm uppercase tracking-widest hover:bg-surface-container-high transition-all"
            >
              Log Out
            </button>
          </form>
        </div>

        <div className="mb-xl">
          <div className="mb-lg">
            <h2 className="text-headline-md mb-sm">Career Applications</h2>
            <p className="text-body-md text-on-surface-variant">
              Resume-backed applications submitted from the public careers page.
            </p>
          </div>
          <div className="overflow-x-auto border border-outline-variant/20">
            <table className="w-full min-w-[1100px] text-left">
            <thead className="bg-surface-container-lowest">
              <tr className="text-label-sm uppercase tracking-widest text-on-surface-variant">
                <th className="px-md py-md">Applicant</th>
                <th className="px-md py-md">Division</th>
                <th className="px-md py-md">Role</th>
                <th className="px-md py-md">Type</th>
                <th className="px-md py-md">Location</th>
                <th className="px-md py-md">Submitted</th>
                <th className="px-md py-md">Resume</th>
              </tr>
            </thead>
            <tbody>
              {applications.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-md py-lg text-body-md text-on-surface-variant">
                    No applications submitted yet.
                  </td>
                </tr>
              ) : (
                applications.map((application) => (
                  <tr key={application.id} className="border-t border-outline-variant/15 align-top">
                    <td className="px-md py-md">
                      <p className="text-body-md font-semibold text-on-surface">{application.fullName}</p>
                      <p className="text-body-md text-on-surface-variant">{application.email}</p>
                      <p className="text-body-md text-on-surface-variant">{application.phone}</p>
                    </td>
                    <td className="px-md py-md text-body-md text-on-surface-variant">{application.division}</td>
                    <td className="px-md py-md">
                      <p className="text-body-md text-on-surface">{application.roleTitle}</p>
                      {application.experience ? (
                        <p className="text-label-sm uppercase tracking-wide text-on-surface-variant">
                          {application.experience}
                        </p>
                      ) : null}
                    </td>
                    <td className="px-md py-md text-body-md text-on-surface-variant">{application.roleType}</td>
                    <td className="px-md py-md text-body-md text-on-surface-variant">{application.location}</td>
                    <td className="px-md py-md text-body-md text-on-surface-variant">
                      {new Date(application.createdAt).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </td>
                    <td className="px-md py-md">
                      <div className="space-y-sm">
                        {application.resumeDownloadPath ? (
                          <a
                            href={application.resumeDownloadPath}
                            className="text-primary text-label-sm uppercase tracking-widest"
                          >
                            Download Resume
                          </a>
                        ) : (
                          <span className="text-body-md text-on-surface-variant">No file</span>
                        )}
                        {application.portfolioUrl ? (
                          <a
                            href={application.portfolioUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="block text-label-sm uppercase tracking-widest text-on-surface-variant"
                          >
                            Portfolio Link
                          </a>
                        ) : null}
                        <p className="text-body-md text-on-surface-variant max-w-sm">
                          {application.coverLetter}
                        </p>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="mb-lg">
            <h2 className="text-headline-md mb-sm">Testimonial Approvals</h2>
            <p className="text-body-md text-on-surface-variant">
              Review public feedback submissions before they appear on the clients page.
            </p>
          </div>
          <div className="overflow-x-auto border border-outline-variant/20">
            <table className="w-full min-w-[1100px] text-left">
              <thead className="bg-surface-container-lowest">
                <tr className="text-label-sm uppercase tracking-widest text-on-surface-variant">
                  <th className="px-md py-md">Sender</th>
                  <th className="px-md py-md">Type</th>
                  <th className="px-md py-md">Feedback</th>
                  <th className="px-md py-md">Status</th>
                  <th className="px-md py-md">Submitted</th>
                  <th className="px-md py-md">Action</th>
                </tr>
              </thead>
              <tbody>
                {feedback.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-md py-lg text-body-md text-on-surface-variant">
                      No feedback submissions yet.
                    </td>
                  </tr>
                ) : (
                  feedback.map((item) => (
                    <tr key={item.id} className="border-t border-outline-variant/15 align-top">
                      <td className="px-md py-md">
                        <p className="text-body-md font-semibold text-on-surface">{item.name}</p>
                        <p className="text-body-md text-on-surface-variant">{item.role}</p>
                        <p className="text-body-md text-on-surface-variant">{item.organization}</p>
                        <p className="text-body-md text-on-surface-variant">{item.email}</p>
                        <p className="text-body-md text-on-surface-variant">{item.phone}</p>
                      </td>
                      <td className="px-md py-md text-body-md text-on-surface-variant">{item.type}</td>
                      <td className="px-md py-md text-body-md text-on-surface-variant max-w-md">
                        {item.quote}
                      </td>
                      <td className="px-md py-md">
                        <span className="px-sm py-xs bg-surface-container-high text-label-sm uppercase tracking-widest text-on-surface">
                          {item.status}
                        </span>
                      </td>
                      <td className="px-md py-md text-body-md text-on-surface-variant">
                        {new Date(item.createdAt).toLocaleString("en-IN", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </td>
                      <td className="px-md py-md">
                        <form action={`/api/admin/testimonials/${item.id}`} method="post" className="flex flex-wrap gap-sm">
                          <button type="submit" name="status" value="approved" className="bg-primary-container text-on-primary-container px-md py-sm text-label-sm uppercase tracking-widest">
                            Approve
                          </button>
                          <button type="submit" name="status" value="pending" className="border border-outline-variant/25 px-md py-sm text-label-sm uppercase tracking-widest">
                            Hold
                          </button>
                          <button type="submit" name="status" value="rejected" className="border border-red-500/40 text-red-200 px-md py-sm text-label-sm uppercase tracking-widest">
                            Reject
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
