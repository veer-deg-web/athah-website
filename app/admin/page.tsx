import type { Metadata } from "next";
import { requireAdminSession } from "@/lib/admin-auth";
import { listCareerApplications } from "@/lib/careers";
import { createPageMetadata } from "@/lib/seo";
import { listFeedbackSubmissions } from "@/lib/testimonials";
import { getAllEditablePages } from "@/lib/content";
import dbConnect from "@/lib/mongodb";
import Enquiry, { IEnquiry } from "@/lib/models/Enquiry";
import AdminSettingsForm from "@/components/admin/AdminSettingsForm";

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
  const pages = await getAllEditablePages();
  
  // Enquiries
  await dbConnect();
  const enquiries = (await Enquiry.find({}).sort({ createdAt: -1 }).lean()) as IEnquiry[];

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
            <h2 className="text-headline-md mb-sm">Content Management</h2>
            <p className="text-body-md text-on-surface-variant">
              Edit the text content of your website pages.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {pages.map((p) => (
              <a
                key={p.slug}
                href={`/admin/content/${p.slug}`}
                className="bg-surface-container-low border border-outline-variant/20 p-md flex flex-col gap-sm hover:border-primary-container transition-all group"
              >
                <span className="material-symbols-outlined text-primary-container text-[24px]">
                  edit_document
                </span>
                <span className="text-body-lg font-bold group-hover:text-primary transition-colors">{p.name}</span>
                <span className="text-label-sm uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">Edit Content &rarr;</span>
              </a>
            ))}
            <a
              href="/admin/blogs/new"
              className="bg-surface-container-low border border-outline-variant/20 p-md flex flex-col gap-sm hover:border-primary-container transition-all group"
            >
              <span className="material-symbols-outlined text-primary-container text-[24px]">
                article
              </span>
              <span className="text-body-lg font-bold group-hover:text-primary transition-colors">Blogs</span>
              <span className="text-label-sm uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">Write a Blog &rarr;</span>
            </a>
          </div>
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
                        <p className="mb-sm">{item.quote}</p>
                        {item.referenceEvent && (
                          <p className="text-label-sm text-primary-container uppercase tracking-wide">
                            Ref: {item.referenceEvent}
                          </p>
                        )}
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
        {/* ── Enquiries ────────────────────────────────────────────────── */}
        <div className="mt-xl">
          <div className="mb-lg">
            <h2 className="text-headline-md mb-sm">Enquiry Submissions</h2>
            <p className="text-body-md text-on-surface-variant">
              Contact form submissions from the public enquiry portal.
            </p>
          </div>
          <div className="overflow-x-auto border border-outline-variant/20">
            <table className="w-full min-w-[1100px] text-left">
              <thead className="bg-surface-container-lowest">
                <tr className="text-label-sm uppercase tracking-widest text-on-surface-variant">
                  <th className="px-md py-md">Contact</th>
                  <th className="px-md py-md">Division</th>
                  <th className="px-md py-md">Event Type</th>
                  <th className="px-md py-md">Budget</th>
                  <th className="px-md py-md">Location</th>
                  <th className="px-md py-md">Date</th>
                  <th className="px-md py-md">Message</th>
                  <th className="px-md py-md">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-md py-lg text-body-md text-on-surface-variant">
                      No enquiries submitted yet.
                    </td>
                  </tr>
                ) : (
                  enquiries.map((enq, i) => (
                    <tr key={i} className="border-t border-outline-variant/15 align-top">
                      <td className="px-md py-md">
                        <p className="text-body-md font-semibold text-on-surface">{enq.name}</p>
                        <p className="text-body-md text-on-surface-variant">{enq.email}</p>
                        <p className="text-body-md text-on-surface-variant">{enq.phone}</p>
                      </td>
                      <td className="px-md py-md text-body-md text-on-surface-variant">{enq.division}</td>
                      <td className="px-md py-md text-body-md text-on-surface-variant">{enq.eventType || "—"}</td>
                      <td className="px-md py-md text-body-md text-on-surface-variant">{enq.budget || "—"}</td>
                      <td className="px-md py-md text-body-md text-on-surface-variant">{enq.eventLocation || "—"}</td>
                      <td className="px-md py-md text-body-md text-on-surface-variant">{enq.eventDate || "—"}</td>
                      <td className="px-md py-md text-body-md text-on-surface-variant max-w-xs">{enq.message}</td>
                      <td className="px-md py-md text-body-md text-on-surface-variant">
                        {new Date(enq.createdAt).toLocaleString("en-IN", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Admin Settings ───────────────────────────────────────────── */}
        <div className="mt-xl border-t border-outline-variant/15 pt-xl">
          <div className="mb-lg">
            <h2 className="text-headline-md mb-sm">Admin Settings</h2>
            <p className="text-body-md text-on-surface-variant">
              Configure the admin notification email and other site-level settings.
            </p>
          </div>
          <AdminSettingsForm />
        </div>

      </div>
    </section>
  );
}
